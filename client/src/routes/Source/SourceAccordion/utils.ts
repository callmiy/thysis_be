import { AccordionTitleProps } from "semantic-ui-react";
import { WithApolloClient } from "react-apollo";
import { ApolloError } from "apollo-client";

import { SourceFullFragFragment } from "../../../graphql/gen.types";
import { Quote1FragFragment } from "../../../graphql/gen.types";

export enum DetailAction {
  EDITING = "editing",
  VIEWING = "viewing"
}

export type AccordionTitleClickCb = (
  event: React.MouseEvent<HTMLDivElement>,
  data: AccordionTitleProps
) => void;

interface OwnProps {
  source: SourceFullFragFragment;
}

export type Props = WithApolloClient<OwnProps>;

export interface State {
  activeIndex: number;
  detailAction: DetailAction;
  loadingQuotes?: boolean;
  quotes?: Quote1FragFragment[];
  fetchQuotesError?: ApolloError;
}

export const initialState: State = {
  activeIndex: 0,
  detailAction: DetailAction.VIEWING
};

export enum SourceAccordionIndex {
  DETAIL = 0,
  LIST_QUOTES = 1
}