import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import update from "immutability-helper";
import { SemanticICONS, SemanticWIDTHS } from "semantic-ui-react/dist/commonjs";
import { withRouter, RouteComponentProps } from "react-router-dom";

import NewTagModalForm from "./new-tag-modal-form.component";
import NewSourceModal from "./new-source-modal.component";
import TagListModal from "./tag-list-modal.component";
import SourceListModal from "./source-list-modal.component";

// import { SimpleCss } from "../constants";

const styles = {
  container: {
    flexShrink: 0, // don't allow flexbox to shrink it
    borderRadius: 0, // clear semantic-ui style
    margin: 0 // clear semantic-ui style
  },

  modal: {
    marginTop: "20%"
  }
}; // as SimpleCss;

export enum MenuItem {
  HOME = "home",
  NEW_TAG = "newTag",
  NEW_SOURCE = "newSource",
  TAG_LIST = "tagList",
  SOURCE_LIST = "sourceList"
}

enum MenuAction {
  NAVIGATE = "navigate",
  MODAL = "modal"
}

interface MenuValue {
  // tslint:disable-next-line:no-any
  component?: React.ComponentType<any>;
  icon: SemanticICONS;
  label: string;
  action: MenuAction;
}

type Menus = { [key in MenuItem]: MenuValue };

const menus: Menus = {
  [MenuItem.NEW_TAG]: {
    component: NewTagModalForm,
    icon: "tag",
    label: "New Tag",
    action: MenuAction.MODAL
  },

  [MenuItem.NEW_SOURCE]: {
    component: NewSourceModal,
    icon: "user",
    label: "New Source",
    action: MenuAction.MODAL
  },

  [MenuItem.TAG_LIST]: {
    component: TagListModal,
    icon: "numbered list",
    label: "Tags",
    action: MenuAction.MODAL
  },

  [MenuItem.HOME]: {
    icon: "home",
    label: "Home",
    action: MenuAction.NAVIGATE
  },

  [MenuItem.SOURCE_LIST]: {
    component: SourceListModal,
    icon: "numbered list",
    label: "Sources",
    action: MenuAction.MODAL
  }
};

interface MobileBottomMenuProps extends RouteComponentProps<{}> {
  items: MenuItem[];
}

interface MobileBottomMenuState {
  modalOpened: {
    newTag: boolean;
    newSource: boolean;
    tagList: boolean;
  };
}

const initialModalOpened = {
  newTag: false,
  newSource: false,
  tagList: false
};

// tslint:disable-next-line:max-classes-per-file
class MobileBottomMenu extends React.Component<
  MobileBottomMenuProps,
  MobileBottomMenuState
> {
  state: MobileBottomMenuState = {
    modalOpened: initialModalOpened
  };

  constructor(props: MobileBottomMenuProps) {
    super(props);

    ["toggleModalOpen", "renderModal", "renderMenuItem", "navigateTo"].forEach(
      fn => (this[fn] = this[fn].bind(this))
    );
  }

  render() {
    const { items } = this.props;
    const width = items.length as SemanticWIDTHS;

    return (
      <div style={styles.container}>
        {items.map(this.renderModal)}

        <Menu
          pointing={true}
          icon="labeled"
          borderless={true}
          widths={width}
          style={styles.container}
        >
          {items.map(this.renderMenuItem)}
        </Menu>
      </div>
    );
  }

  renderModal = (name: MenuItem) => {
    const modal = menus[name];

    if (!modal || !modal.component) {
      return undefined;
    }

    const MODAL_COMPONENT = modal.component;

    return (
      <MODAL_COMPONENT
        key={name}
        style={styles.modal}
        open={this.state.modalOpened[name]}
        dismissModal={this.toggleModalOpen(name, false)}
      />
    );
  };

  renderMenuItem = (name: MenuItem) => {
    const modal = menus[name];

    if (!modal) {
      return undefined;
    }

    let action;

    switch (modal.action) {
      case MenuAction.MODAL:
        action = this.toggleModalOpen(name, true);
        break;

      case MenuAction.NAVIGATE:
        action = this.navigateTo("/");
        break;

      default:
        action = () => undefined;
    }

    return (
      <Menu.Item key={name} onClick={action}>
        <Icon name={modal.icon} />
        {modal.label}
      </Menu.Item>
    );
  };

  toggleModalOpen = (name: string, open: boolean) => () => {
    this.setState(s =>
      update(s, {
        modalOpened: {
          $set: initialModalOpened
        }
      })
    );

    this.setState(s =>
      update(s, {
        modalOpened: {
          [name]: {
            $set: open
          }
        }
      })
    );
  };

  navigateTo = (path: string) => () => this.props.history.push(path);
}

export default withRouter<MobileBottomMenuProps>(MobileBottomMenu);