import * as React from "react";
import jss from "jss";
import preset from "jss-preset-default";
import { Formik, FormikProps, Field, FieldProps, FormikErrors } from "formik";
import {
  graphql,
  GraphqlQueryControls,
  withApollo,
  WithApolloClient
} from "react-apollo";
import { ApolloQueryResult } from "apollo-client";
import isEmpty from "lodash/isEmpty";
import { Button, Form, TextArea, Message, Icon } from "semantic-ui-react";
import moment from "moment";
import update from "immutability-helper";
import { Mutation } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";

import {
  TagFragFragment,
  TagsMinimalQuery,
  SourceFragFragment,
  CreateQuoteInput,
  Sources1Query,
  Source1Query
} from "../graphql/gen.types";
import TAGS_QUERY from "../graphql/tags-mini.query";
import TagControl from "../components/new-quote-form-tag-control.component";
import SourceControl from "../components/new-quote-form-source-control.component";
import Date, { DateType } from "../components/new-quote-date.component";
import { ERROR_COLOR } from "../constants";
import Page, {
  PageType
} from "../components/new-quote-page-start-end.component";
import VolumeIssue, {
  VolumeIssueType
} from "../components/new-quote-volume-issue.component";
import QUOTE_MUTATION from "../graphql/quote.mutation";
import { CreateQueryFn } from "../graphql/ops.types";
import SOURCES_QUERY from "../graphql/sources-1.query";
import SOURCE_QUERY from "../graphql/source-1.query";

jss.setup(preset());

const reshapeSource = (s: SourceFragFragment | null) => {
  if (!s) {
    return {} as SourceFragFragment;
  }

  return {
    ...s,
    display: `${s.display} | ${s.sourceType.name}`
  } as SourceFragFragment;
};

export const reshapeSources = (
  sources: SourceFragFragment[] | null
): SourceFragFragment[] => {
  if (!sources) {
    return [] as SourceFragFragment[];
  }

  return sources.map(reshapeSource);
};

const styles = {
  newQuoteRoot: {
    flex: 1,
    overflowY: "auto",
    padding: "0 5px"
  },

  errorBorder: {
    borderColor: ERROR_COLOR
  },

  submitReset: {
    margin: "25px 0 40px 0",
    display: "flex",
    justifyContent: "center"
  },

  submitButton: {
    marginLeft: ["20px", "!important"]
  }
  // tslint:disable-next-line:no-any
} as any;

const { classes } = jss.createStyleSheet(styles).attach();

interface FormValues {
  tags: TagFragFragment[] | null;
  source: SourceFragFragment | null;
  quote: string;
  date: DateType | null;
  page: PageType | null;
  volumeIssue: VolumeIssueType | null;
  extras: string;
}

export type FormValuesProps = FieldProps<FormValues>;

type OwnProps = {
  sourceId?: string;
} & TagsMinimalQuery &
  RouteComponentProps<{ sourceId?: string }>;

type NewQuoteFormProps = OwnProps &
  GraphqlQueryControls &
  WithApolloClient<OwnProps>;

const tagsGraphQl = graphql<NewQuoteFormProps, TagsMinimalQuery, {}, {}>(
  TAGS_QUERY,
  {
    props: ({ data }) => {
      return { ...data };
    }
  }
);

interface NewQuoteFormState {
  initialFormValues: FormValues;
  formOutputs: CreateQuoteInput;
  sourceId?: string;
  queryResult?: ApolloQueryResult<Sources1Query & Source1Query>;
}

class NewQuoteForm extends React.Component<
  NewQuoteFormProps,
  NewQuoteFormState
> {
  static getDerivedStateFromProps(
    nextProps: NewQuoteFormProps,
    currentState: NewQuoteFormState
  ) {
    return update(currentState, {
      sourceId: {
        $set: nextProps.match.params.sourceId
      }
    });
  }

  state: NewQuoteFormState = {
    initialFormValues: {
      tags: null,
      source: null,
      quote: "",
      date: null,
      page: null,
      volumeIssue: null,
      extras: ""
    },
    formOutputs: {
      date: "",
      sourceId: "",
      tags: [],
      text: ""
    }
  };

  selfRef = React.createRef<HTMLDivElement>();

  constructor(props: NewQuoteFormProps) {
    super(props);

    [
      "renderForm",
      "renderTagControl",
      "renderQuoteControl",
      "renderSourceControl",
      "validate",
      "renderDateControl",
      "validatedate",
      "validatetags",
      "validatesource",
      "validatequote",
      "validatepage",
      "renderPageControl",
      "renderVolumeIssueControl",
      "handleDateChange",
      "handlePageChange",
      "handleVolumeIssueChange",
      "handleDateBlur",
      "handlePageBlur",
      "handleVolumeIssueBlur",
      "renderExtrasControl",
      "scrollToTopOfForm",
      "onResetClicked"
    ].forEach(fn => (this[fn] = this[fn].bind(this)));
  }

  componentDidUpdate() {
    this.fetchSource();
  }

  fetchSource = async () => {
    try {
      let query;
      if (this.state.sourceId) {
        query = this.props.client.query({
          query: SOURCE_QUERY,
          variables: {
            source: {
              id: this.state.sourceId
            }
          }
        });
      } else {
        query = this.props.client.query({
          query: SOURCES_QUERY
        });
      }

      if (!query) {
        return;
      }

      const result = (await query) as ApolloQueryResult<
        Sources1Query & Source1Query
      >;

      if (!result || !result.data) {
        return;
      }

      const { queryResult } = this.state;

      if (!queryResult) {
        const doState = {
          queryResult: {
            $set: result
          }
          // tslint:disable-next-line:no-any
        } as any;

        if (result.data.source) {
          doState.initialFormValues = {
            source: {
              $set: result.data.source
            }
          };
        }

        this.setState(s => update(s, doState));
      }

      // tslint:disable-next-line:no-console
      console.log(
        `


      logging starts


      result`,
        result,
        `

      logging ends


      `
      );
    } catch (error) {
      // tslint:disable-next-line:no-console
      console.log(
        `


      logging starts


      error`,
        error,
        `

      logging ends


      `
      );
    }
  };

  render() {
    return (
      <div className={classes.newQuoteRoot} ref={this.selfRef}>
        <h2>New Quote</h2>

        <Mutation
          mutation={QUOTE_MUTATION}
          variables={{ quote: this.state.formOutputs }}
        >
          {createQuote => {
            return (
              <Formik
                initialValues={this.state.initialFormValues}
                enableReinitialize={true}
                onSubmit={this.submit(createQuote)}
                render={this.renderForm}
                validate={this.validate}
              />
            );
          }}
        </Mutation>
      </div>
    );
  }

  validate = (values: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    for (const key of Object.keys(values)) {
      const error = this[`validate${key}`](values[key]);

      if (error) {
        errors[key] = error;
        return errors;
      }
    }

    return errors;
  };

  renderForm = ({
    handleReset,
    dirty,
    isSubmitting,
    errors,
    handleSubmit
  }: FormikProps<FormValues>) => {
    const dirtyOrSubmitting = !dirty || isSubmitting;
    const disableSubmit = dirtyOrSubmitting || !isEmpty(errors);
    const { sourceId } = this.state;

    return (
      <Form onSubmit={handleSubmit}>
        {sourceId && (
          <Field name="source" render={this.renderSourceControlDisabled} />
        )}

        <Field name="tags" render={this.renderTagControl} />

        {!sourceId && <Field name="source" render={this.renderSourceControl} />}

        <Field name="quote" render={this.renderQuoteControl} />

        <Field name="date" render={this.renderDateControl} />
        <Field name="page" render={this.renderPageControl} />
        <Field name="volumeIssue" render={this.renderVolumeIssueControl} />
        <Field name="extras" render={this.renderExtrasControl} />

        <div className={`${classes.submitReset}`}>
          <Button
            basic={true}
            color="red"
            onClick={this.onResetClicked(handleReset)}
            disabled={dirtyOrSubmitting}
          >
            <Icon name="remove" /> Reset
          </Button>

          <Button
            className={`${classes.submitButton}`}
            type="submit"
            color="green"
            disabled={disableSubmit}
            loading={isSubmitting}
          >
            <Icon name="checkmark" /> Ok
          </Button>
        </div>
      </Form>
    );
  };

  submit = (createQuote: CreateQueryFn) => async (
    values: FormValues,
    formikBag: FormikProps<FormValues>
  ) => {
    formikBag.setSubmitting(true);

    try {
      await createQuote();
      formikBag.resetForm();
      this.scrollToTopOfForm();
    } catch (error) {
      formikBag.setSubmitting(false);
    }
  };

  renderTagControl = (formProps: FieldProps<FormValues>) => {
    const {
      field: { name },
      form
    } = formProps;
    const error = form.errors[name];
    const booleanError = !!error;
    const touched = form.touched[name];
    const tags = this.props.tags as TagFragFragment[];

    return (
      <Form.Field
        control={TagControl}
        label="Select at least one tag"
        error={booleanError}
        selectError={booleanError}
        tags={tags || []}
        {...formProps}
      >
        {booleanError && touched && <Message error={true} header={error} />}
      </Form.Field>
    );
  };

  renderQuoteControl = (formProps: FieldProps<FormValues>) => {
    const { field, form } = formProps;
    const { name } = field;
    const error = form.errors[name];
    const booleanError = !!error;
    // const touched = form.touched[name];
    const label = "Quote text";

    return (
      <Form.Field
        control={TextArea}
        placeholder={label}
        label={label}
        id={name}
        error={booleanError}
        {...field}
      />
    );
  };

  renderExtrasControl = (formProps: FieldProps<FormValues>) => {
    const { field, form } = formProps;
    const { name } = field;
    const error = form.errors[name];
    const booleanError = !!error;
    // const touched = form.touched[name];
    const label = "Extras";

    return (
      <Form.Field
        control={TextArea}
        placeholder={label}
        label={label}
        id={name}
        error={booleanError}
        {...field}
      />
    );
  };

  renderDateControl = (formik: FieldProps<FormValues>) => {
    const { field, form } = formik;
    const { name } = field;
    const error = form.errors[name];
    const booleanError = !!error;
    // const touched = form.touched[name];

    return (
      <Date
        className={`${booleanError ? classes.errorBorder : ""}`}
        onChange={this.handleDateChange(name, formik)}
        onBlur={this.handleDateBlur(name, formik)}
        value={field.value}
      />
    );
  };

  handleDateChange = (name: string, { form }: FieldProps<FormValues>) => (
    date: DateType
  ) => form.setFieldValue(name, date);

  handleDateBlur = (name: string, { form }: FieldProps<FormValues>) => () =>
    form.setFieldTouched(name, true);

  renderPageControl = (formik: FieldProps<FormValues>) => {
    const { field, form } = formik;
    const { name } = field;
    const error = form.errors[name];
    const booleanError = !!error;

    return (
      <Page
        className={`${booleanError ? classes.errorBorder : ""}`}
        onChange={this.handlePageChange(name, formik)}
        onBlur={this.handlePageBlur(name, formik)}
        value={field.value}
      />
    );
  };

  handlePageChange = (name: string, { form }: FieldProps<FormValues>) => (
    page: PageType
  ) => form.setFieldValue(name, page);

  handlePageBlur = (name: string, { form }: FieldProps<FormValues>) => () =>
    form.setFieldTouched(name, true);

  renderVolumeIssueControl = (formik: FieldProps<FormValues>) => {
    const { field, form } = formik;
    const { name } = field;
    const error = form.errors[name];
    const booleanError = !!error;

    return (
      <VolumeIssue
        className={`${booleanError ? classes.errorBorder : ""}`}
        onChange={this.handleVolumeIssueChange(name, formik)}
        onBlur={this.handleVolumeIssueBlur(name, formik)}
        value={field.value}
      />
    );
  };

  handleVolumeIssueChange = (
    name: string,
    { form }: FieldProps<FormValues>
  ) => (volumeIssue: VolumeIssueType) => form.setFieldValue(name, volumeIssue);

  handleVolumeIssueBlur = (
    name: string,
    { form }: FieldProps<FormValues>
  ) => () => form.setFieldTouched(name, true);

  renderSourceControlDisabled = () => {
    let value = "";
    const { source } = this.state.initialFormValues;
    if (source && source.display) {
      value = source.display;
    }
    return (
      <Form.Field
        control={TextArea}
        label="Source for quote"
        id="source"
        value={value}
        disabled={true}
      />
    );
  };

  renderSourceControl = (formProps: FieldProps<FormValues>) => {
    const {
      field: { name },
      form
    } = formProps;
    const error = form.errors[name];
    const booleanError = !!error;
    const touched = form.touched[name];

    return (
      <Form.Field
        control={SourceControl}
        label="Select source"
        error={booleanError}
        selectError={booleanError}
        sources={this.getSources()}
        {...formProps}
      >
        {booleanError && touched && <Message error={true} header={error} />}
      </Form.Field>
    );
  };

  getSources = () => {
    const { queryResult } = this.state;
    if (!queryResult) {
      return [] as SourceFragFragment[];
    }

    const { data } = queryResult;

    if (!data) {
      return [] as SourceFragFragment[];
    }

    if (data.source) {
      return [data.source];
    }

    return data.sources;
  };

  validatequote = (quote: string | null) => {
    const error = "Enter a quote";

    if (!quote) {
      return error;
    }

    this.setState(prev =>
      update(prev, {
        formOutputs: {
          text: {
            $set: quote
          }
        }
      })
    );

    return "";
  };

  validateextras = (extras: string | null) => {
    if (!extras) {
      return "";
    }

    this.setState(prev =>
      update(prev, {
        formOutputs: {
          extras: {
            $set: extras
          }
        }
      })
    );

    return "";
  };

  validatesource = (source: SourceFragFragment | null) => {
    const error = "Select a source";

    if (!source) {
      return error;
    }

    this.setState(prev =>
      update(prev, {
        formOutputs: {
          sourceId: {
            $set: source.id
          }
        }
      })
    );

    return "";
  };

  validatetags = (tags: TagFragFragment[] | null) => {
    const error = "Select at least one tag";

    if (!tags || !tags.length) {
      return error;
    }

    this.setState(prev =>
      update(prev, {
        formOutputs: {
          tags: {
            $set: tags.map(t => t.id)
          }
        }
      })
    );

    return "";
  };

  validatedate = (date: DateType | null) => {
    const error = "Enter a valid date";

    if (!date) {
      this.setState(prev =>
        update(prev, {
          formOutputs: {
            date: {
              $set: undefined
            }
          }
        })
      );

      return "";
    }

    const keys = Object.keys(date);

    if (keys.length !== 3) {
      return error;
    }

    const year = date.year as number;

    if (!year) {
      return error;
    }

    const month = date.month as number;

    if (!month) {
      return error;
    }

    const day = date.day as number;

    if (!day) {
      return error;
    }

    const datec = moment({ year, month: month - 1, day });
    const isValid = datec.isValid();

    this.setState(prev =>
      update(prev, {
        formOutputs: {
          date: {
            $set: isValid ? datec.format("YYYY-MM-DD") : undefined
          }
        }
      })
    );

    return isValid ? "" : error;
  };

  validatepage = (page: PageType | null) => {
    if (!page) {
      return "";
    }

    const { start, end } = page;

    this.setState(prev =>
      update(prev, {
        formOutputs: {
          pageStart: {
            $set: start
          },

          pageEnd: {
            $set: end
          }
        }
      })
    );

    return "";
  };

  validatevolumeIssue = (volumeIssue: VolumeIssueType | null) => {
    if (!volumeIssue) {
      return "";
    }

    const { volume, issue } = volumeIssue;

    this.setState(prev =>
      update(prev, {
        formOutputs: {
          volume: {
            $set: volume
          },

          issue: {
            $set: issue
          }
        }
      })
    );

    return "";
  };

  scrollToTopOfForm = () => {
    if (this.selfRef.current) {
      this.selfRef.current.scrollTop = 0;
    }
  };

  onResetClicked = (reset: () => void) => () => {
    reset();
    this.scrollToTopOfForm();
  };
}

export default withApollo(tagsGraphQl(NewQuoteForm));