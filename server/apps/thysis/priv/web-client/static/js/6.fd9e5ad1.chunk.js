(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{335:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var a=r(4),n=r(5);function o(){var e=Object(a.a)(["\n  fragment QuoteFromTagFrag on Quote {\n    id\n    text\n    date\n    source {\n      id\n      display\n    }\n  }\n"]);return o=function(){return e},e}var s=r.n(n)()(o())},402:function(e,t,r){"use strict";var a=r(4),n=r(5),o=r.n(n),s=r(335);function c(){var e=Object(a.a)(["\n  query Quotes1($quote: GetQuotes) {\n    quotes(quote: $quote) {\n      ...QuoteFromTagFrag\n    }\n  }\n\n  ","\n"]);return c=function(){return e},e}var u=o()(c(),s.a);t.a=u},403:function(e,t,r){"use strict";t.a={flex:1,overflowX:"hidden",overflowY:"auto",padding:"0 5px"}},419:function(e,t,r){"use strict";var a=r(16),n=r(8),o=r.n(n),s=r(14),c=r(55),u=r(64),l=r(56),i=r(57),d=r(65),m=r(0),h=r.n(m),p=r(418),f=r(632),v=r(639),g=r(644),b=r(351),E=r(657),S=r(4),O=r(5),C=r.n(O);function y(){var e=Object(S.a)(["\n  fragment TextSearchRowFrag on QuoteFullSearchResultRow {\n    tid\n    text\n    source\n    column\n  }\n"]);return y=function(){return e},e}var x=C()(y());function j(){var e=Object(S.a)(["\n  fragment TextSearchResultFrag on QuoteFullSearchResult {\n    quotes {\n      ...TextSearchRowFrag\n    }\n\n    sources {\n      ...TextSearchRowFrag\n    }\n\n    tags {\n      ...TextSearchRowFrag\n    }\n\n    authors {\n      ...TextSearchRowFrag\n    }\n\n    sourceTypes {\n      ...TextSearchRowFrag\n    }\n  }\n\n  ","\n"]);return j=function(){return e},e}var k=C()(j(),x),T=k;function N(){var e=Object(S.a)(["\n  query AllMatchingTexts($text: QuoteFullSearchInput!) {\n    quoteFullSearch(text: $text) {\n      ...TextSearchResultFrag\n    }\n  }\n\n  ","\n"]);return N=function(){return e},e}var w=C()(N(),T),I=r(24),q=r(299),R=r.n(q),F=r(300),Q=r.n(F),P=r(35),$=r(403);R.a.setup(Q()());var U={root:P.c,input:{margin:"0 5px"},mainContent:Object(I.a)({},$.a,{margin:"5px 3px 0 0"}),resultContainer:{margin:"0",overflowY:"auto",wordBreak:"break-all"},result:{marginTop:"15px;","&.first-of-type":{marginTop:"0;"},"& .ui.list>a.item":{color:"initial"}},resultRowHeaderContainer:{textAlign:"center"},resultRowHeader:{display:"inline-block",minWidth:"40%",boxShadow:"0 1px 1px -1px black;"},resultRowItem:Object(I.a)({},{borderTop:["none","!important;"]},{borderBottom:"1px solid #22242626",marginTop:8})},A=R.a.createStyleSheet(U).attach().classes,B=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={hasError:!1},r}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?m.createElement(g.a,{error:!0,icon:!0,style:{marginTop:"20px"},className:this.props.className||""},m.createElement(b.a,{name:"ban"}),m.createElement(g.a.Content,null,m.createElement(g.a.Header,{style:{borderBottom:"1px solid",display:"inline-block",marginBottom:"10px"}},"An error has occurred"),m.createElement("div",null,JSON.stringify(this.state.info,null,2)))):this.props.children}}]),t}(m.Component),D=r(11),K={SOURCES:D.m,TAGS:D.n,QUOTES:D.l,AUTHORS:D.j},_={searchText:"",searchLoading:!1},G=function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(u.a)(this,Object(l.a)(t).call(this,e))).state=_,r.onSearchInputChange=function(e,t){var a=t.value,n=r.state.result;n=a?n:void 0,r.setState({searchText:a,searchError:void 0,result:n}),r.doSearchDebounced()},r.doSearch=Object(s.a)(o.a.mark(function e(){var t,a,n,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!((t=r.state.searchText.trim()).length<2)){e.next=3;break}return e.abrupt("return");case 3:return r.setState({searchLoading:!0}),e.prev=4,e.next=7,r.props.client.query({query:w,variables:{text:{text:t}}});case 7:if(a=e.sent,n=a.data){e.next=11;break}return e.abrupt("return");case 11:s=n.quoteFullSearch,r.setState({searchLoading:!1,result:s}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(4),r.setState({searchLoading:!1,searchError:e.t0});case 18:case"end":return e.stop()}},e,this,[[4,15]])})),r.renderResult=function(e){var t=e.quotes,a=e.tags,n=e.authors,o=e.sources,s=e.sourceTypes;return n||t||o||s||a?h.a.createElement("div",{className:A.resultContainer},[t,a,n,o,s].map(r.renderCategory)):h.a.createElement(g.a,{className:A.resultContainer,style:{textAlign:"center",padding:"10px"},icon:!0,warning:!0,size:"small"},h.a.createElement(b.a,{name:"warning",size:"tiny",fitted:!0,style:{fontSize:"2em"}}),h.a.createElement(g.a.Content,null,"No Result!"))},r.renderCategory=function(e){if(e){var t=e[0];if(t){var a=t.source;return h.a.createElement("div",{className:A.result,key:a},h.a.createElement("div",{className:A.resultRowHeaderContainer},h.a.createElement("span",{className:A.resultRowHeader},a)),h.a.createElement(v.a,{divided:!0},e.map(r.renderRow(a))))}}},r.renderRow=function(e){return function(t){if(t){var r=t.text,a=t.tid,n=t.column,o=K[e],s=o?{as:E.a,to:o(a.toString())}:{};return h.a.createElement(v.a.Item,Object.assign({key:a+n,className:A.resultRowItem},s),h.a.createElement(v.a.Content,null,r))}}},r.doSearchDebounced=Object(p.a)(r.doSearch,700),r}return Object(d.a)(t,e),Object(i.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.searchComponentState;return r&&t===_?r:null}}]),Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.props.updateSCSLocal({variables:{searchComponentState:this.state}}),this.doSearchDebounced.cancel()}},{key:"render",value:function(){return h.a.createElement("div",{className:A.root},h.a.createElement("form",null,h.a.createElement(f.a,{className:A.input,icon:"search",placeholder:"Search...",fluid:!0,autoFocus:!0,onChange:this.onSearchInputChange,value:this.state.searchText,loading:this.state.searchLoading})),h.a.createElement(B,{className:A.mainContent},h.a.createElement("div",{className:A.mainContent},this.state.searchError&&h.a.createElement(g.a,{error:!0,icon:!0,style:{marginTop:"20px"}},h.a.createElement(b.a,{name:"ban"}),h.a.createElement(g.a.Content,null,h.a.createElement(g.a.Header,{style:{borderBottom:"1px solid",display:"inline-block",marginBottom:"10px"}},"An error has occurred"),h.a.createElement("div",null,JSON.stringify(this.state.searchError,null,2)))),!this.state.searchError&&this.state.searchText&&this.state.result&&this.renderResult(this.state.result))))}}]),t}(h.a.Component);function L(){var e=Object(S.a)(["\n  mutation SearchComponentStateLocalMutation(\n    $searchComponentState: SearchLocalInput!\n  ) {\n    searchComponentState(searchComponentState: $searchComponentState) @client\n  }\n"]);return L=function(){return e},e}var V=C()(L()),H=Object(a.graphql)(V,{props:function(e){return{updateSCSLocal:e.mutate}}});function M(){var e=Object(S.a)(["\n  query SearchComponentStateLocalQuery {\n    searchComponentState @client {\n      searchText\n      searchLoading\n      result {\n        ...TextSearchResultFrag\n      }\n      searchError\n    }\n  }\n\n  ","\n"]);return M=function(){return e},e}var z=C()(M(),k),W=Object(a.graphql)(z,{props:function(e){return e.data}});t.a=Object(a.compose)(a.withApollo,W,H)(G)},603:function(e,t,r){},605:function(e,t,r){},637:function(e,t,r){"use strict";r.r(t);var a=r(16),n=r(24),o=r(68),s=r(8),c=r.n(s),u=r(14),l=r(55),i=r(57),d=r(64),m=r(56),h=r(65),p=r(0),f=r.n(p),v=r(373),g=r(156),b=r.n(g),E=r(654),S=r(649),O=r(636),C=r(633),y=r(644),x=r(351),j=r(653),k=r(630),T=r(45),N=r.n(T),w=r(657),I=r(417),q=(r(603),r(391)),R=r(401),F=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,r=e.value,a=e.selectError;return p.createElement(R.a,{className:"".concat(a?"error":""),id:t,name:t,placeholder:"Select tags",options:this.props.tags,multi:!0,onChange:this.props.handleChange,onBlur:this.props.handleBlur,value:r,labelKey:"text",valueKey:"id"})}}]),t}(p.Component),Q=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.name,r=e.value,a=e.selectError,o=e.sources;return p.createElement(R.a,{className:"".concat(a?"error":""),id:t,name:t,placeholder:"Select source",options:o.map(function(e){return Object(n.a)({},e,{display:Object(q.b)(e)})}),onChange:this.props.handleChange,onBlur:this.props.handleBlur,value:r,labelKey:"display",valueKey:"id"})}}]),t}(p.Component),P=r(43),$=r(72),U=r(299),A=r.n(U),B=r(300),D=r.n(B),K=r(632);A.a.setup(D()());var _=A.a.createStyleSheet({date:{border:"1px solid #22242626",outline:0,padding:"0.3em",borderRadius:"0.2em",textAlign:"center"},dateDayInput:{flexGrow:[1,"!important"]},dateMonthInput:{flexGrow:[1,"!important"]},dateYearInput:{padding:["0px","!important"],flexGrow:[2,"!important"]}}).attach().classes,G=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={date:{},errors:{}},r.getError=function(e){var t=r.state.errors[e];return void 0!==t&&t},r.handleChange=function(e){return function(t){var a=r.props,o=a.onBlur,s=a.onChange;o&&o();var c=t.target,u=+c.min,l=+c.max,i=+c.value,d=i<u||i>l?null:i,m=r.state,h=m.date,p=m.errors;h=Object(n.a)({},h,Object(P.a)({},e,i)),p=Object(n.a)({},p,Object(P.a)({},e,!d)),r.setState(function(e){return Object(n.a)({},e,{date:h,errors:p})}),s&&s(Object(n.a)({},h,Object(P.a)({},e,d)))}},r.handleKeyPress=function(e){var t=e.currentTarget,r=t.value.length;(r>0&&r>t.maxLength-1||[".",","].includes(e.key))&&e.preventDefault()},["handleChange","handleKeyPress","getError"].forEach(function(e){return r[e]=r[e].bind(Object($.a)(Object($.a)(r)))}),r}return Object(h.a)(t,e),Object(i.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.value?null:{date:{},errors:{}}}}]),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.date,t=e.day,r=e.month,a=e.year;return p.createElement(O.a.Group,{className:"".concat(_.date," ").concat(this.props.className||""),inline:!0},p.createElement(O.a.Field,{className:_.dateDayInput,control:K.a,type:"number",value:t||"",min:1,max:31,maxLength:2,label:"Day",placeholder:"Day",fluid:!0,onChange:this.handleChange("day"),onKeyPress:this.handleKeyPress,error:this.getError("day")}),p.createElement(O.a.Field,{className:_.dateMonthInput,control:K.a,type:"number",value:r||"",min:1,max:12,maxLength:2,label:"Month",placeholder:"Month",fluid:!0,onChange:this.handleChange("month"),onKeyPress:this.handleKeyPress,error:this.getError("month")}),p.createElement(O.a.Field,{className:_.dateYearInput,control:K.a,type:"number",value:a||"",min:1e3,max:9999,maxLength:4,label:"Year",placeholder:"Year",fluid:!0,onChange:this.handleChange("year"),onKeyPress:this.handleKeyPress,error:this.getError("year")}))}}]),t}(p.Component),L=r(11);A.a.setup(D()());var V=A.a.createStyleSheet({page:{border:"1px solid #22242626",outline:0,padding:"0.3em",borderRadius:"0.2em",textAlign:"center",justifyContent:"center"},startInput:{flexGrow:[1,"!important"]},endInput:{flexGrow:[1,"!important"]}}).attach().classes,H=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={page:{},errors:{}},r.getError=function(e){var t=r.state.errors[e];return void 0!==t&&t},r.handleChange=function(e){return function(t){var a=r.props,o=a.onBlur,s=a.onChange;o&&o();var c=+t.target.value,u=r.state,l=u.page,i=u.errors;l=Object(n.a)({},l,Object(P.a)({},e,c)),i="end"!==e||l.start?{start:!1,end:!1}:{start:i.start,end:!0},r.setState(function(e){return Object(n.a)({},e,{page:l,errors:i})}),s&&s(l)}},r.handleKeyPress=function(e){[".",","].includes(e.key)&&e.preventDefault()},["handleChange","handleKeyPress","getError"].forEach(function(e){return r[e]=r[e].bind(Object($.a)(Object($.a)(r)))}),r}return Object(h.a)(t,e),Object(i.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.value?null:{page:{},errors:{}}}}]),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.page,t=e.start,r=e.end;return p.createElement(O.a.Group,{className:"".concat(V.page," ").concat(this.props.className||""),inline:!0},p.createElement(O.a.Field,{className:V.startInput,control:K.a,type:"number",value:t||"",label:"Page start",placeholder:"Page start",fluid:!0,onChange:this.handleChange("start"),onKeyPress:this.handleKeyPress,error:this.getError("start")}),p.createElement(O.a.Field,{className:V.endInput,control:K.a,type:"number",value:r||"",label:"Page end",placeholder:"Page end",fluid:!0,onChange:this.handleChange("end"),onKeyPress:this.handleKeyPress,error:this.getError("end")}))}}]),t}(p.Component);A.a.setup(D()());var M=A.a.createStyleSheet({volumeIssue:{border:"1px solid #22242626",outline:0,padding:"0.3em",borderRadius:"0.2em",textAlign:"center",justifyContent:"center"},volumeInput:{flexGrow:[1,"!important"]},issueInput:{flexGrow:[1,"!important"]}}).attach().classes,z=function(e){function t(e){var r;return Object(l.a)(this,t),(r=Object(d.a)(this,Object(m.a)(t).call(this,e))).state={volumeIssue:{}},r.handleChange=function(e){return function(t){var a=r.props,o=a.onBlur,s=a.onChange;o&&o();var c=t.target,u=r.state.volumeIssue;u=Object(n.a)({},u,Object(P.a)({},e,c.value)),r.setState(function(e){return Object(n.a)({},e,{volumeIssue:u})}),s&&s(u)}},["handleChange"].forEach(function(e){return r[e]=r[e].bind(Object($.a)(Object($.a)(r)))}),r}return Object(h.a)(t,e),Object(i.a)(t,null,[{key:"getDerivedStateFromProps",value:function(e,t){return e.value?null:{volumeIssue:{}}}}]),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.volumeIssue,t=e.volume,r=e.issue;return p.createElement(O.a.Group,{className:"".concat(M.volumeIssue," ").concat(this.props.className||""),inline:!0},p.createElement(O.a.Field,{className:M.volumeInput,control:K.a,value:t||"",label:"Volume",placeholder:"Volume",fluid:!0,onChange:this.handleChange("volume")}),p.createElement(O.a.Field,{className:M.issueInput,control:K.a,value:r||"",label:"Issue",placeholder:"Issue",fluid:!0,onChange:this.handleChange("issue")}))}}]),t}(p.Component),W=r(4),Y=r(5),J=r.n(Y),X=r(308),Z=r(335);function ee(){var e=Object(W.a)(["\n  mutation CreateQuote($quote: CreateQuoteInput!) {\n    createQuote(quote: $quote) {\n      ...QuoteFromTagFrag\n\n      source {\n        ...SourceFullFrag\n      }\n    }\n  }\n\n  ","\n  ","\n"]);return ee=function(){return e},e}var te=J()(ee(),Z.a,X.b),re=r(316);function ae(){var e=Object(W.a)(["\n  query Source1($source: GetSourceInput!) {\n    source(source: $source) {\n      ...SourceFullFrag\n    }\n  }\n\n  ","\n"]);return ae=function(){return e},e}var ne=J()(ae(),X.b),oe=r(375),se=r(402),ce=r(638),ue=r(301);A.a.setup(D()());var le,ie={modal:{marginTop:"20px",maxHeight:"40%"},content:{color:ue.b,backgroundColor:ue.a},error:{flex:1,padding:20,textAlign:"center"},buttonContainer:{flexShrink:0,textAlign:"right",padding:"0 0 5px 0"}},de=ie.modal,me=ie.error,he=ie.buttonContainer,pe=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return p.createElement(ce.a,{style:de,dimmer:"inverted",open:this.props.open,onClose:this.props.dismiss},p.createElement(ce.a.Content,{style:ie.content},p.createElement("div",{style:me},this.props.error.message),p.createElement("div",{style:he},p.createElement(S.a,{color:"red",onClick:this.props.dismiss},p.createElement(x.a,{name:"remove"})," Dismiss"))))}}]),t}(p.Component),fe={tags:[],source:null,quote:"",date:null,page:null,volumeIssue:null,extras:""},ve={date:"",sourceId:"",tags:[],text:""};!function(e){e.RE_USE_SOURCE="re-use source",e.DO_NOT_RE_USE_SOURCE="do not re-use source"}(le||(le={})),A.a.setup(D()());var ge,be={modal:{marginTop:"20px",maxHeight:"40%",maxWidth:300},content:{background:ue.c,color:ue.d},messageContainer:{flex:1,display:"flex",padding:10,fontSize:"1.5em"},messageIcon:{paddingRight:"10px",fontSize:"1.5em"},messageHeader:{fontWeight:900,textAlign:"center"},messageAction:{fontSize:"0.8em",fontStyle:"italic"},buttonsContainer:{flexShrink:0,padding:"10px 8px 5px 10px",display:"flex",justifyContent:"space-between",borderTop:"1px solid #b3dcb4","&.single":{display:"block",textAlign:"right"}}},Ee=be.modal,Se=be.content,Oe=be.messageIcon,Ce=A.a.createStyleSheet(be).attach().classes,ye=function(e){function t(){var e,r;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).renderButtons=function(){return r.props.reUseSource?p.createElement("div",{className:"single ".concat(Ce.buttonsContainer)},p.createElement(S.a,{color:"red",inverted:!0,onClick:r.props.dismiss(le.DO_NOT_RE_USE_SOURCE)},p.createElement(x.a,{name:"remove"})," Dismiss")):p.createElement("div",{className:Ce.buttonsContainer},p.createElement(S.a,{color:"red",inverted:!0,onClick:r.props.dismiss(le.DO_NOT_RE_USE_SOURCE)},p.createElement(x.a,{name:"remove"})," Nope"),p.createElement(S.a,{color:"green",inverted:!0,onClick:r.props.dismiss(le.RE_USE_SOURCE)},p.createElement(x.a,{name:"checkmark"})," Ok"))},r}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.reUseSource;return p.createElement(ce.a,{style:Ee,dimmer:"inverted",open:this.props.open},p.createElement(ce.a.Content,{style:Se},p.createElement("div",{className:Ce.messageContainer},p.createElement(x.a,{style:Oe,name:"thumbs up"}),p.createElement("div",null,p.createElement("div",{className:Ce.messageHeader},"Quote successfully created"),!e&&p.createElement("div",{className:Ce.messageAction},"Create another quote for this source?"))),this.renderButtons()))}}]),t}(p.Component),xe=r(631),je=r(645),ke=r(639),Te=(r(605),r(315)),Ne=r(419),we=r(62);!function(e){e.QUOTES="quotes",e.TAGS="tags",e.SOURCES="sources"}(ge||(ge={}));var Ie=function(e){function t(){var e,r;Object(l.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={},r.onTabChange=function(e,t){switch(t.activeIndex){case 0:r.fetchQuotes();break;case 1:r.fetchTags();break;case 2:r.fetchSources()}},r.renderError=function(e){var t=r.state.graphQlError;return e=(e=e.toLowerCase()).charAt(0).toUpperCase()+e.slice(1),f.a.createElement("div",{className:"message-container error"},f.a.createElement(x.a,{className:"message-icon",name:"warning sign"}),f.a.createElement("div",null,f.a.createElement("div",{className:"message-header"},"Error fetching: ".concat(e)),f.a.createElement("div",null,t&&t.message)))},r.renderQuotes=function(){return{menuItem:"Quotes",render:function(){return f.a.createElement(je.a.Pane,{className:"pane",attached:!1,loading:r.state.loading},r.renderResourcesOr(ge.QUOTES))}}},r.renderquote=function(e){var t=e.id,r=e.text;return f.a.createElement(ke.a.Item,{key:t},f.a.createElement(ke.a.Content,null,r))},r.renderTags=function(){return{menuItem:"Tags",render:function(){return f.a.createElement(je.a.Pane,{className:"pane",attached:!1,loading:r.state.loading},r.renderResourcesOr(ge.TAGS))}}},r.rendertag=function(e){var t=e.id,a=e.text;return f.a.createElement(ke.a.Item,{key:t,className:"list-item",onClick:r.navigateTo(Object(L.n)(t))},f.a.createElement(ke.a.Content,null,a))},r.renderSources=function(){return{menuItem:"Sources",render:function(){return f.a.createElement(je.a.Pane,{className:"pane",attached:!1,loading:r.state.loading},r.renderResourcesOr(ge.SOURCES))}}},r.rendersource=function(e){var t=e.id,a=Object(q.b)(e);return f.a.createElement(ke.a.Item,{key:t,className:"list-item",onClick:r.navigateTo(Object(L.m)(t))},f.a.createElement(ke.a.Content,null,a))},r.renderSearch=function(){return{menuItem:"Search",render:function(){return f.a.createElement(je.a.Pane,{className:"pane",attached:!1,loading:r.state.loading},f.a.createElement(Ne.a,null))}}},r.fetchQuotes=Object(u.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.fetching(),e.prev=1,e.next=4,r.props.client.query({query:se.a,variables:{quote:{source:null}}});case 4:t=e.sent,a=t.data.quotes,r.fetching(ge.QUOTES,a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r.fetching(void 0,void 0,e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])})),r.fetchTags=Object(u.a)(c.a.mark(function e(){var t,a;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r.fetching(),e.prev=1,e.next=4,r.props.client.query({query:Te.a});case 4:t=e.sent,a=t.data.tags,r.fetching(ge.TAGS,a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),r.fetching(void 0,void 0,e.t0);case 12:case"end":return e.stop()}},e,this,[[1,9]])})),r.fetchSources=Object(u.a)(c.a.mark(function e(){var t,a,n,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.props.currentProject){e.next=4;break}return r.setState({graphQlError:{message:"No project selected."}}),e.abrupt("return");case 4:return r.fetching(),e.prev=5,a=t.id,e.next=9,r.props.client.query({query:re.a,variables:{source:{projectId:a}}});case 9:n=e.sent,o=n.data.sources,r.fetching(ge.SOURCES,o),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(5),r.fetching(void 0,void 0,e.t0);case 17:case"end":return e.stop()}},e,this,[[5,14]])})),r.fetching=function(e,t,a){r.setState({graphQlError:void 0}),a?r.setState({loading:!1,graphQlError:a}):e&&t?r.setState(function(r){var a;return N()(r,(a={loading:{$set:!1}},Object(P.a)(a,e,{$set:t}),Object(P.a)(a,"graphQlError",{$set:void 0}),a))}):r.setState({loading:!0})},r.navigateTo=function(e){return function(){r.props.history.push(e)}},r}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return f.a.createElement(je.a,{className:"src-components-new-quote-sidebar ".concat(this.props.className||""),menu:{pointing:!0,inverted:!0,secondary:!0},panes:[this.renderQuotes(),this.renderTags(),this.renderSources(),this.renderSearch()],onTabChange:this.onTabChange,defaultActiveIndex:-1})}},{key:"renderResourcesOr",value:function(e){var t=this.state,r=t.loading;if(t.graphQlError)return this.renderError(e);var a=this.state[e];return r&&!a?f.a.createElement(we.a,null):a&&a.length?f.a.createElement(ke.a,{divided:!0,relaxed:!0,ordered:!0},a.map(this["render"+e.slice(0,-1)])):f.a.createElement("div",null,"No ".concat(e,"!"))}}]),t}(f.a.Component),qe=r(314),Re=Object(a.graphql)(qe.a,{props:function(e){return e.data}}),Fe=Object(a.compose)(Re,xe.a,a.withApollo)(Ie),Qe=r(378),Pe=function(e){function t(){var e,r;Object(l.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(r=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={initialFormValues:fe,formOutputs:ve,selectedTags:[]},r.formContainerRef=p.createRef(),r.renderErrorOrSuccess=function(){var e=r.state,t=e.sourceId,a=e.graphqlError,n=e.submittedSourceId;return a?p.createElement(pe,{open:!!a,dismiss:r.dismissErrorModal,error:a}):n?p.createElement(ye,{open:!!n,dismiss:r.onSuccessModalDismissed,reUseSource:!!t}):void 0},r.renderSourceQuoteHeader=function(){var e=r.state.initialFormValues.source;return p.createElement(E.a,{dividing:!0,className:"quote-source-display-container"},e&&p.createElement(w.a,{className:"quote-link",to:Object(L.m)(e.id)},p.createElement("div",{className:"quote-source-label"},"Click to go to source"),p.createElement("div",{className:"quote-source-display"},Object(q.b)(e))))},r.validate=function(e){for(var t={},a=Object.keys(e),n=0;n<a.length;n++){var o=a[n],s=r["validate".concat(o.charAt(0).toUpperCase()).concat(o.slice(1))](e[o]);if(s)return t[o]=s,t}return t},r.renderForm=function(e){var t=e.handleReset,a=e.dirty,n=e.isSubmitting,o=e.errors,s=e.handleSubmit,c=!a||n,u=c||!b()(o),l=r.state.sourceId;return p.createElement(O.a,{onSubmit:s},p.createElement(j.a,{inverted:!0,active:n},p.createElement(k.a,{active:n,size:"medium"},"Saving..")),p.createElement(v.a,{name:"tags",render:r.renderTagControl}),!l&&p.createElement(v.a,{name:"source",render:r.renderSourceControl}),p.createElement(v.a,{name:"quote",render:r.renderQuoteControl}),p.createElement(v.a,{name:"page",render:r.renderPageControl}),p.createElement(v.a,{name:"volumeIssue",render:r.renderVolumeIssueControl}),p.createElement(v.a,{name:"date",render:r.renderDateControl}),p.createElement(v.a,{name:"extras",render:r.renderExtrasControl}),p.createElement("div",{className:"submit-reset"},p.createElement(S.a,{basic:!0,color:"red",onClick:r.onResetClicked(t),disabled:c},p.createElement(x.a,{name:"remove"})," Reset"),p.createElement(S.a,{className:"submit-button",type:"submit",color:"green",disabled:u,loading:n},p.createElement(x.a,{name:"checkmark"})," Ok")))},r.submit=function(e){return function(){var t=Object(u.a)(c.a.mark(function t(a,n){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.setSubmitting(!0),t.prev=1,t.next=4,e();case 4:n.resetForm(),r.setState(function(e){return N()(e,{submittedSourceId:{$set:a.source&&a.source.id},initialFormValues:{tags:{$set:[]}}})}),r.scrollToTopOfForm(),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),n.setSubmitting(!1),r.setState({graphqlError:t.t0});case 13:case"end":return t.stop()}},t,this,[[1,9]])}));return function(e,r){return t.apply(this,arguments)}}()},r.onTagCreated=function(e){r.setState(function(t){return N()(t,{initialFormValues:{tags:{$set:Object(o.a)(r.state.selectedTags).concat([e])}}})})},r.renderTagControl=function(e){var t=e.field,a=t.name,n=t.value,o=e.form,s=o.errors[a],c=!!s,u=o.touched[a],l=r.props.tags;return p.createElement("div",{className:"tags-field"},p.createElement(O.a.Field,{control:F,label:"Select at least one tag",error:c,selectError:c,tags:l||[],name:a,value:n,handleChange:r.onTagSelected(e),handleBlur:r.handleFormControlBlur(a,o)},c&&u&&p.createElement(y.a,{error:!0,header:s})))},r.onTagSelected=function(e){var t=e.form,a=e.field;return function(e){t.setFieldValue(a.name,e),r.setState(function(t){return N()(t,{selectedTags:{$set:e}})})}},r.handleFormControlBlur=function(e,t){return function(){t.setFieldTouched(e,!0)}},r.handleControlChange=function(e,t){return function(r){return t.setFieldValue(e,r)}},r.renderQuoteControl=function(e){var t=e.field,r=e.form,a=t.name,n=!!r.errors[a];return p.createElement(O.a.Field,Object.assign({control:C.a,placeholder:"Quote text",label:"Quote text",id:a,error:n},t))},r.renderExtrasControl=function(e){var t=e.field,r=e.form,a=t.name,n=!!r.errors[a];return p.createElement(O.a.Field,Object.assign({control:C.a,placeholder:"Extras",label:"Extras",id:a,error:n},t))},r.renderDateControl=function(e){var t=e.field,a=e.form,n=t.name,o=!!a.errors[n];return p.createElement(G,{className:"".concat(o?"error-border":""),onChange:r.handleControlChange(n,a),onBlur:r.handleFormControlBlur(n,a),value:t.value})},r.renderPageControl=function(e){var t=e.field,a=e.form,n=t.name,o=!!a.errors[n];return p.createElement(H,{className:"".concat(o?"error-border":""),onChange:r.handleControlChange(n,a),onBlur:r.handleFormControlBlur(n,a),value:t.value})},r.renderVolumeIssueControl=function(e){var t=e.field,a=e.form,n=t.name,o=!!a.errors[n];return p.createElement(z,{className:"".concat(o?"error-border":""),onChange:r.handleControlChange(n,a),onBlur:r.handleFormControlBlur(n,a),value:t.value})},r.renderSourceControl=function(e){var t=e.field,a=t.name,n=t.value,o=e.form,s=o.errors[a],c=!!s,u=o.touched[a];return p.createElement(O.a.Field,{control:Q,label:"Select source",error:c,selectError:c,sources:r.getSources(),name:a,value:n,handleBlur:r.handleFormControlBlur(a,o),handleChange:r.handleControlChange(a,o)},c&&u&&p.createElement(y.a,{error:!0,header:s}))},r.getSources=function(){var e=r.state.queryResult;if(!e)return[];var t=e.data;return t?t.source?[t.source]:t.sources:[]},r.validateQuote=function(e){return e?(r.setState(function(t){return N()(t,{formOutputs:{text:{$set:e}}})}),""):"Enter a quote"},r.validateExtras=function(e){return e?(r.setState(function(t){return N()(t,{formOutputs:{extras:{$set:e}}})}),""):""},r.validateSource=function(e){return e?(r.setState(function(t){return N()(t,{formOutputs:{sourceId:{$set:e.id}}})}),""):"Select a source"},r.validateTags=function(e){return e&&e.length?(r.setState(function(t){return N()(t,{formOutputs:{tags:{$set:e.map(function(e){return e.id})}}})}),""):"Select at least one tag"},r.validateDate=function(e){var t="Enter a valid date";if(!e)return r.setState(function(e){return N()(e,{formOutputs:{date:{$set:void 0}}})}),"";if(3!==Object.keys(e).length)return t;var a=e.year,n=e.month,o=e.day;if(!(a&&n&&o))return t;var s="".concat(o).padStart(2,"0"),c="".concat(a,"-").concat(n,"-").concat(s),u=Object(I.a)(c);return r.setState(function(e){return N()(e,{formOutputs:{date:{$set:u?c:void 0}}})}),u?"":t},r.validatePage=function(e){if(!e)return"";var t=e.start,a=e.end;return r.setState(function(e){return N()(e,{formOutputs:{pageStart:{$set:t},pageEnd:{$set:a}}})}),""},r.validateVolumeIssue=function(e){if(!e)return"";var t=e.volume,a=e.issue;return r.setState(function(e){return N()(e,{formOutputs:{volume:{$set:t},issue:{$set:a}}})}),""},r.scrollToTopOfForm=function(){r.formContainerRef.current&&(r.formContainerRef.current.scrollTop=0)},r.onResetClicked=function(e){return function(){e(),r.scrollToTopOfForm()}},r.dismissErrorModal=function(){r.setState(function(e){return N()(e,{graphqlError:{$set:void 0}})})},r.onSuccessModalDismissed=function(e){return function(){var t=r.state,a=t.sourceId,n=t.submittedSourceId;r.setState({submittedSourceId:void 0}),!a&&n&&e===le.RE_USE_SOURCE&&r.props.history.push(Object(L.k)(n))}},r.fetchSource=Object(u.a)(c.a.mark(function e(){var t,a,n,o;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!r.state.sourceId){e.next=7;break}return e.next=4,r.props.client.query({query:ne,variables:{source:{id:r.state.sourceId}}});case 4:t=e.sent,e.next=13;break;case 7:if(a=r.props.currentProject){e.next=10;break}return e.abrupt("return");case 10:return e.next=12,r.props.client.query({query:re.a,variables:{source:{projectId:a?a.id:"0"}}});case 12:t=e.sent;case 13:if(t){e.next=15;break}return e.abrupt("return");case 15:n=t,r.setState(function(e){return N()(e,{queryResult:{$set:n},initialFormValues:{source:{$set:n.data.source}}})}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(0),o={data:{sources:[]}},r.setState({graphqlError:e.t0,queryResult:o});case 23:case"end":return e.stop()}},e,this,[[0,19]])})),r.writeQuoteToCache=function(){var e=Object(u.a)(c.a.mark(function e(t,a){var s,u,l,i,d,m,h,p;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if((s=a.data)&&s.createQuote){e.next=3;break}return e.abrupt("return");case 3:u=s.createQuote,l=r.state.formOutputs.sourceId,i={query:se.a,variables:{quote:{source:l}}},e.prev=6,d=t.readQuery(i),m=d.quotes||[],t.writeQuery(Object(n.a)({},i,{data:{quotes:[u].concat(Object(o.a)(m))}})),e.next=19;break;case 12:if(e.prev=12,e.t0=e.catch(6),h=e.t0.message,p='Can\'t find field quotes({"quote":{"source":"'.concat(l,'"}})'),!h.startsWith(p)){e.next=18;break}return e.abrupt("return");case 18:throw e.t0;case 19:case"end":return e.stop()}},e,this,[[6,12]])}));return function(t,r){return e.apply(this,arguments)}}(),r}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchSource(),Object(L.o)("New quote")}},{key:"componentDidUpdate",value:function(){this.state.queryResult||this.fetchSource()}},{key:"componentWillUnmount",value:function(){Object(L.o)()}},{key:"render",value:function(){var e=this;return p.createElement(Qe.a,{onTagCreated:this.onTagCreated},p.createElement("div",{className:"src-routes-new-quote"},p.createElement(oe.a,{className:"route-header",style:{margin:0},title:"New Quote",showSideBarTrigger:!0}),p.createElement("div",{className:"route-inner"},p.createElement("div",{className:"form-with-header"},this.state.sourceId&&this.renderSourceQuoteHeader(),p.createElement("div",{className:"main-content",ref:this.formContainerRef},this.renderErrorOrSuccess(),p.createElement(a.Mutation,{mutation:te,variables:{quote:this.state.formOutputs},update:this.writeQuoteToCache},function(t){return p.createElement(v.b,{initialValues:e.state.initialFormValues,enableReinitialize:!0,onSubmit:e.submit(t),render:e.renderForm,validate:e.validate})}))),p.createElement(Fe,{className:"quotes-sidebar"}))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var r=e.match.params.sourceId;return r!==t.sourceId?N()(t,{sourceId:{$set:r},queryResult:{$set:void 0}}):null}}]),t}(p.Component),$e=Object(a.graphql)(Te.a,{props:function(e){return e.data}}),Ue=Object(a.graphql)(qe.a,{props:function(e){return e.data}});t.default=Object(a.compose)(a.withApollo,$e,Ue)(Pe)}}]);
//# sourceMappingURL=6.fd9e5ad1.chunk.js.map