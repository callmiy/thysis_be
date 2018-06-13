import * as React from "react";
import jss from "jss";
import preset from "jss-preset-default";
import { RouteComponentProps } from "react-router-dom";
import { Header, Dimmer, Loader, Menu, Icon, Message } from "semantic-ui-react";
import { List } from "semantic-ui-react";
import {
  GraphqlQueryControls,
  graphql,
  withApollo,
  WithApolloClient
} from "react-apollo";
import update from "immutability-helper";
import { ApolloQueryResult } from "apollo-client";
import { GraphQLError } from "graphql/error/GraphQLError";
import { NavLink } from "react-router-dom";

import RootHeader from "../components/header.component";
import { SimpleCss } from "../constants";
import { ROOT_CONTAINER_STYLE } from "../constants";
import { makeNewQuoteURL } from "../utils/route-urls.util";
import {
  Source1Query,
  Source1QueryVariables,
  Quotes1Query,
  Quote1FragFragment
} from "../graphql/gen.types";
import SOURCE_QUERY from "../graphql/source-1.query";
import MobileBottomMenu, {
  MenuItem
} from "../components/mobile-bottom-menu.component";
import QUOTES_QUERY from "../graphql/quotes-1.query";
import renderQuote from "../components/quote-item.component";
import centeredMenuStyles from "../utils/centered-menu-styles.util";
import { SEARCH_QUOTES_URL } from "../utils/route-urls.util";
import { setTitle } from "../utils/route-urls.util";

jss.setup(preset());

const styles = {
  SourceRoot: {
    ...ROOT_CONTAINER_STYLE,
    overflow: "hidden",
    position: "relative"
  },

  SourceMain: {
    flex: 1,
    overflowX: "hidden",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    padding: "0 5px 15px 10px"
  },

  mainContent: {
    ...centeredMenuStyles.mainParentContainer
  },

  menu: {
    ...centeredMenuStyles.menu
  },

  menuAnchor: {
    ...centeredMenuStyles.menuAnchor
  },

  quotesContainer: {
    position: "absolute",
    overflowX: "hidden",
    overflowY: "auto",
    opacity: 1,
    margin: "10px",
    border: "1px solid #dcd6d6",
    borderRadius: "3px",
    boxShadow: "5px 5px 2px -2px #757575",
    maxHeight: "60vh",
    minWidth: "90%",
    display: "flex",
    flexDirection: "column"
  },

  quotesCloseButton: {
    fontSize: "2em",
    fontWeight: 900,
    padding: "0 3px 5px 30px",
    cursor: "pointer",
    flexShrink: 0,
    textAlign: "right",
    marginTop: "0"
  },

  quotesList: {
    overflowY: "auto",
    marginTop: 0,
    padding: "0 5px 5px 5px",
    marginRight: "-50px",
    paddingRight: "50px"
  },

  header: {
    flexShrink: 0,
    maxHeight: "15vh",
    overflow: "hidden",
    padding: "0 0 0 5px"
  }
} as SimpleCss;

const { classes } = jss.createStyleSheet(styles).attach();

type OwnProps = RouteComponentProps<{ id: string }> & Source1Query;

type SourceProps = OwnProps &
  GraphqlQueryControls<Source1QueryVariables> &
  WithApolloClient<OwnProps>;

interface SourceState {
  loadingQuotes: boolean;
  showingQuotes: boolean;
  quotes?: Quote1FragFragment[];
  fetchQuotesError?: GraphQLError[];
}

class Source extends React.Component<SourceProps, SourceState> {
  state: SourceState = {
    loadingQuotes: false,
    showingQuotes: false
  };

  componentDidMount() {
    setTitle("Source");
  }

  componentWillUnmount() {
    setTitle();
  }

  render() {
    const { loading, source } = this.props;

    if (loading || !source) {
      return (
        <Dimmer
          inverted={true}
          className={`${classes.SourceRoot}`}
          active={true}
        >
          <Loader size="medium">Loading..</Loader>
        </Dimmer>
      );
    }

    const { showingQuotes, loadingQuotes } = this.state;

    return (
      <div className={`${classes.SourceRoot}`}>
        <RootHeader title="Source" />

        <div className={`${classes.SourceRoot}`}>
          <Header style={styles.header} as="h3" dividing={true}>
            {source.display}
          </Header>

          <div className={`${classes.mainContent}`}>
            <Menu
              style={{
                ...(showingQuotes ? { opacity: 0 } : {}),
                ...styles.menu,
                ...{ margin: "5px" }
              }}
              pointing={true}
              compact={true}
              icon="labeled"
            >
              <Menu.Item
                className={classes.menuAnchor}
                onClick={this.newQuoteClicked}
              >
                <Icon name="quote right" />
                New Quote
              </Menu.Item>

              <Menu.Item
                className={classes.menuAnchor}
                onClick={this.quotesMenuClicked(source.id)}
              >
                <Icon name="numbered list" />
                List Quotes
              </Menu.Item>

              <Menu.Item
                className={classes.menuAnchor}
                as={NavLink}
                to={SEARCH_QUOTES_URL}
              >
                <Icon name="search" />
                Search Quotes
              </Menu.Item>
            </Menu>

            {loadingQuotes && (
              <Dimmer
                inverted={true}
                className={`${classes.SourceRoot}`}
                active={true}
              >
                <Loader inverted={true} size="medium">
                  Loading..
                </Loader>
              </Dimmer>
            )}

            {showingQuotes && (
              <div className={`${classes.quotesContainer}`}>
                <span
                  className={`${classes.quotesCloseButton}`}
                  onClick={this.quotesMenuCloseClicked}
                >
                  &times;
                </span>

                {this.renderQuoteOr()}
              </div>
            )}
          </div>
        </div>

        <MobileBottomMenu
          items={[
            MenuItem.HOME,
            MenuItem.NEW_SOURCE,
            MenuItem.TAG_LIST,
            MenuItem.NEW_TAG
          ]}
        />
      </div>
    );
  }

  quotesMenuClicked = (id: string) => async () => {
    try {
      this.setState(s =>
        update(s, {
          loadingQuotes: {
            $set: true
          },

          showingQuotes: {
            $set: true
          }
        })
      );

      const result = (await this.props.client.query({
        query: QUOTES_QUERY,
        variables: {
          quote: {
            source: id
          }
        }
      })) as ApolloQueryResult<Quotes1Query>;

      this.setState(s =>
        update(s, {
          quotes: {
            $set: result.data.quotes
          },

          loadingQuotes: {
            $set: false
          }
        })
      );
    } catch (error) {
      this.setState(s =>
        update(s, {
          loadingQuotes: {
            $set: false
          },

          fetchQuotesError: {
            $set: error
          }
        })
      );
    }
  };

  quotesMenuCloseClicked = () =>
    this.setState(s =>
      update(s, {
        loadingQuotes: {
          $set: false
        },

        showingQuotes: {
          $set: false
        }
      })
    );

  newQuoteClicked = () => {
    const source = this.props.source;

    if (source) {
      this.props.history.push(makeNewQuoteURL(source.id));
    }
  };

  renderQuoteOr = () => {
    const { fetchQuotesError } = this.state;

    if (fetchQuotesError) {
      return (
        <Message error={true}>
          <Message.Header>Error fetching quotes</Message.Header>
          <pre style={{ whiteSpace: "pre-wrap" }}>
            {JSON.stringify(fetchQuotesError, null, 2)}
          </pre>
        </Message>
      );
    }

    const { quotes } = this.state;

    if (!quotes || !quotes.length) {
      return (
        <Message info={true}>
          <Message.Header>No quote for source</Message.Header>
          <p>Click New Quote to add quote</p>
        </Message>
      );
    }

    return (
      <List style={styles.quotesList} divided={true} relaxed={true}>
        {quotes.map(renderQuote)}
      </List>
    );
  };
}

const sourceGraphQl = graphql<
  SourceProps,
  Source1Query,
  Source1QueryVariables,
  {}
>(SOURCE_QUERY, {
  props: ({ data }) => {
    return { ...data };
  },

  options: ({ match }) => {
    return {
      variables: {
        source: {
          id: match.params.id
        }
      }
    };
  }
});

export default withApollo(sourceGraphQl(Source));
