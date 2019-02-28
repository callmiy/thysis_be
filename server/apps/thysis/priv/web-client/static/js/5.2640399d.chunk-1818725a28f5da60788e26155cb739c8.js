(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{335:function(e,t,n){"use strict";n.d(t,"a",function(){return c});var r=n(4),a=n(5);function o(){var e=Object(r.a)(["\n  fragment QuoteFromTagFrag on Quote {\n    id\n    text\n    date\n    source {\n      id\n      display\n    }\n  }\n"]);return o=function(){return e},e}var c=n.n(a)()(o())},347:function(e,t,n){"use strict";var r=n(301);t.a={flex:1,display:"flex",justifyContent:"center",alignItems:"center",color:r.b,fontWeight:900,fontSize:"1.2em"}},350:function(e,t,n){"use strict";var r=n(55),a=n(57),o=n(64),c=n(56),i=n(65),s=n(0),l=n.n(s),u=n(639),d=n(657),p=(n(405),n(11)),m=function(e){function t(){return Object(r.a)(this,t),Object(o.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(a.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,n=e.text,r=e.date,a=e.source;return l.a.createElement(u.a.Item,{key:t,className:"quote-item"},l.a.createElement(u.a.Content,null,l.a.createElement(u.a.Header,{as:d.a,to:Object(p.l)(t),className:"quote-text"},n),a&&l.a.createElement(d.a,{to:Object(p.m)(a.id),className:"source-display"},a.display),l.a.createElement(u.a.Description,{className:"quote-date"},r)))}}]),t}(l.a.Component);t.a=function(e,t){if(e)return l.a.createElement(m,Object.assign({key:e.id},e))}},402:function(e,t,n){"use strict";var r=n(4),a=n(5),o=n.n(a),c=n(335);function i(){var e=Object(r.a)(["\n  query Quotes1($quote: GetQuotes) {\n    quotes(quote: $quote) {\n      ...QuoteFromTagFrag\n    }\n  }\n\n  ","\n"]);return i=function(){return e},e}var s=o()(i(),c.a);t.a=s},405:function(e,t,n){},635:function(e,t,n){"use strict";n.r(t);var r=n(24),a=n(16),o=n(55),c=n(57),i=n(64),s=n(56),l=n(65),u=n(0),d=n.n(u),p=n(653),m=n(630),h=n(351),v=n(657),f=n(375),E=n(11),g=n(299),b=n.n(g),y=n(300),S=n.n(y),x=n(347);b.a.setup(S()());var C,O,T,N={SourceRoot:{height:"100%",overflow:"hidden",position:"relative",flex:1,display:"grid",gridTemplateAreas:'\n      "header"\n      "main"\n      "bottom-menu";\n    ',gridTemplateRows:"auto 1fr auto",gridTemplateColumns:"100%"},rootHeader:{gridArea:"header"},sourceMain:{gridArea:"main",overflow:"hidden",position:"relative"},bottomMenu:{gridArea:"bottom-menu"},header:{flexShrink:0,maxHeight:"15vh",overflow:"hidden",padding:"0 0 0 5px"},newQuoteButton:{position:"absolute",bottom:15,right:15,color:"#5faac7",zIndex:10,fontWeight:900,fontSize:"1.3em","&:hover":{color:"#5faac7"}},errorContainer:Object(r.a)({},x.a)},j=b.a.createStyleSheet(N).attach().classes,I=n(373),k=n(8),A=n.n(k),w=n(14),Q=n(43),F=n(391);!function(e){e.EDITING="editing",e.VIEWING="viewing"}(O||(O={})),function(e){e[e.DETAIL=0]="DETAIL",e[e.LIST_QUOTES=1]="LIST_QUOTES"}(T||(T={}));var D={detailAction:O.VIEWING,openUpdateSourceSuccessModal:!1,accordionProps:(C={},Object(Q.a)(C,T.DETAIL,!0),Object(Q.a)(C,T.LIST_QUOTES,!1),C)},L={handleSubmit:function(){var e=Object(w.a)(A.a.mark(function e(t){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),mapPropsToValues:function(e){var t=e.source,n=t.authors.reduce(function(e,t){return t&&e.push(Object(r.a)({},t,{fullName:Object(F.a)(t)})),e},[]);return Object(r.a)({},t,{authors:n})},enableReinitialize:!0,validate:function(e){var t=e.authors,n=e.topic,r={};return e.sourceType||(r.sourceType="Select a source type"),t&&t.length||(r.authors="Select at least one author"),(!n||n.length<3)&&(r.topic="Enter source topic according to author(s)"),r}},q=n(4),U=n(5),P=n.n(U),W=n(308);function M(){var e=Object(q.a)(["\n  mutation UpdateSource($source: UpdateSourceInput!) {\n    updateSource(source: $source) {\n      ...SourceFullFrag\n    }\n  }\n\n  ","\n"]);return M=function(){return e},e}var V=P()(M(),W.a),G=n(30),B=n.n(G),z=n(34),R=n.n(z),H=(n(2),n(302)),$=n(136),_=n(396),J=n.n(_),K=n(20),X=n.n(K),Y=n(21),Z=n.n(Y),ee=n(22),te=n.n(ee),ne=n(19),re=n.n(ne),ae=n(23),oe=n.n(ae),ce=n(1),ie=n.n(ce),se=n(3),le=n.n(se),ue=n(333),de=n.n(ue),pe=n(10),me=n.n(pe),he=n(390),ve=n.n(he),fe=n(337),Ee=n.n(fe),ge=n(352),be=n(29),ye=n(162),Se=n(354),xe=n(27),Ce=n.n(xe),Oe=function(e){function t(){var e,n;X()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=te()(this,(e=re()(t)).call.apply(e,[this].concat(a))),le()(ie()(ie()(n)),"handleClick",function(e){return me()(n.props,"onClick",e,n.props)}),n}return oe()(t,e),Z()(t,[{key:"render",value:function(){var e=this.props,n=e.active,r=e.children,a=e.className,o=e.content,c=R()(Object(H.a)(n,"active"),"title",a),i=Object($.a)(t,this.props),s=Object(ge.a)(t,this.props);return Ce()(o)?d.a.createElement(s,B()({},i,{className:c,onClick:this.handleClick}),r):d.a.createElement(s,B()({},i,{className:c,onClick:this.handleClick}),d.a.createElement(h.a,{name:"dropdown"}),o)}}]),t}(u.Component);function Te(e){var t=e.active,n=e.children,r=e.className,a=e.content,o=R()("content",Object(H.a)(t,"active"),r),c=Object($.a)(Te,e),i=Object(ge.a)(Te,e);return d.a.createElement(i,B()({},c,{className:o}),be.a.isNil(n)?a:n)}le()(Oe,"handledProps",["active","as","children","className","content","index","onClick"]),Oe.propTypes={},Oe.create=Object(Se.e)(Oe,function(e){return{content:e}}),Te.handledProps=["active","as","children","className","content"],Te.propTypes={},Te.create=Object(Se.e)(Te,function(e){return{content:e}});var Ne=Te,je=function(e){function t(){var e,n;X()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=te()(this,(e=re()(t)).call.apply(e,[this].concat(a))),le()(ie()(ie()(n)),"handleTitleOverrides",function(e){return{onClick:function(t,r){me()(e,"onClick",t,r),me()(n.props,"onTitleClick",t,r)}}}),n}return oe()(t,e),Z()(t,[{key:"render",value:function(){var e=this.props,t=e.active,n=e.content,r=e.index,a=e.title;return[Oe.create(a,{autoGenerateKey:!1,defaultProps:{active:t,index:r,key:"title"},overrideProps:this.handleTitleOverrides}),Ne.create(n,{autoGenerateKey:!1,defaultProps:{active:t,key:"content"}})]}}]),t}(u.Component);le()(je,"handledProps",["active","content","index","onTitleClick","title"]),je.propTypes={},je.create=Object(Se.e)(je,null);var Ie=je,ke=function(e){function t(){var e,n;X()(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return n=te()(this,(e=re()(t)).call.apply(e,[this].concat(a))),le()(ie()(ie()(n)),"computeNewIndex",function(e){var t=n.props.exclusive,r=n.state.activeIndex;return t?e===r?-1:e:Ee()(r,e)?ve()(r,e):J()(r).concat([e])}),le()(ie()(ie()(n)),"handleTitleClick",function(e,t){var r=t.index;n.trySetState({activeIndex:n.computeNewIndex(r)}),me()(n.props,"onTitleClick",e,t)}),le()(ie()(ie()(n)),"isIndexActive",function(e){var t=n.props.exclusive,r=n.state.activeIndex;return t?r===e:Ee()(r,e)}),n}return oe()(t,e),Z()(t,[{key:"getInitialAutoControlledState",value:function(e){return{activeIndex:e.exclusive?-1:[]}}},{key:"render",value:function(){var e=this,n=this.props,r=n.className,a=n.children,o=n.panels,c=R()("accordion",r),i=Object($.a)(t,this.props),s=Object(ge.a)(t,this.props);return d.a.createElement(s,B()({},i,{className:c}),be.a.isNil(a)?de()(o,function(t,n){return Ie.create(t,{defaultProps:{active:e.isIndexActive(n),index:n,onTitleClick:e.handleTitleClick}})}):a)}}]),t}(ye.a);function Ae(e){var t=e.className,n=e.fluid,r=e.inverted,a=e.styled,o=R()("ui",Object(H.a)(n,"fluid"),Object(H.a)(r,"inverted"),Object(H.a)(a,"styled"),t),c=Object($.a)(Ae,e);return d.a.createElement(ke,B()({},c,{className:o}))}le()(ke,"defaultProps",{exclusive:!0}),le()(ke,"autoControlledProps",["activeIndex"]),le()(ke,"handledProps",["activeIndex","as","children","className","defaultActiveIndex","exclusive","onTitleClick","panels"]),ke.propTypes={},ke.create=Object(Se.e)(ke,function(e){return{content:e}}),Ae.handledProps=["className","fluid","inverted","styled"],Ae.propTypes={},Ae.Accordion=ke,Ae.Content=Ne,Ae.Panel=Ie,Ae.Title=Oe;var we=Ae,Qe=n(639),Fe=n(636),De=n(632),Le=n(45),qe=n.n(Le),Ue=n(447),Pe=n.n(Ue),We=n(156),Me=n.n(We),Ve=n(402),Ge=n(301);b.a.setup(S()());var Be={accordion:{height:"100%",display:"flex",flexDirection:"column",position:"relative"},root:{display:"grid",gridTemplateAreas:'\n      "labels details"\n    ',gridTemplateColumns:"1fr 3fr"},labels:{gridArea:"labels"},details:{gridArea:"details",paddingLeft:15},detailsAccordionContent:{"&> div":{marginBottom:15}},toggleEditView:{position:"absolute",right:0,top:-3,"&>.icon":{width:"3em",height:"3em",cursor:"pointer","&.edit-icon":{padding:"15px 35px 10px 50px"},"&.editing-icon":{paddingTop:"15px"}}},accordionContent:{overflowY:"auto",overflowX:"hidden",wordWrap:"break-word",wordBreak:"break-all"},quotesAccordionStyle:{padding:"0em 0.2em 0.8em"},errorMessage:{color:Ge.b},error:{"&>.ui.fluid.input>input":{color:Ge.b,borderColor:Ge.b}}},ze=Be.accordionContent,Re=b.a.createStyleSheet(Be).attach().classes,He=n(350),$e=n(363),_e=n(451);function Je(){var e=Object(q.a)(["\n  query SourceFull($source: GetSourceInput!) {\n    source(source: $source) {\n      ...SourceFullFrag\n    }\n  }\n\n  ","\n"]);return Je=function(){return e},e}var Ke=P()(Je(),W.a),Xe=n(638),Ye=n(649);b.a.setup(S()());var Ze={modal:{marginTop:"20px",maxHeight:"40%",maxWidth:300},content:{background:Ge.c,color:Ge.d},messageContainer:{flex:1,display:"flex",padding:10,fontSize:"1.5em"},messageIcon:{paddingRight:"10px",fontSize:"1.5em"},messageHeader:{fontWeight:900,textAlign:"center"},buttonsContainer:{flexShrink:0,padding:"10px 8px 5px 10px",borderTop:"1px solid #b3dcb4",textAlign:"right"}},et=Ze.modal,tt=Ze.content,nt=Ze.messageIcon,rt=b.a.createStyleSheet(Ze).attach().classes,at=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dismiss,n=e.open;return u.createElement(Xe.a,{style:et,dimmer:"inverted",open:n,onClose:t},u.createElement(Xe.a.Content,{style:tt},u.createElement("div",{className:rt.messageContainer},u.createElement(h.a,{style:nt,name:"thumbs up"}),u.createElement("div",null,u.createElement("div",{className:rt.messageHeader},"Source successfully updated!"))),u.createElement("div",{className:"".concat(rt.buttonsContainer)},u.createElement(Ye.a,{color:"green",inverted:!0,onClick:t},u.createElement(h.a,{name:"remove"})," Dismiss"))))}}]),t}(u.Component);b.a.setup(S()());var ot={modal:{marginTop:"20px",maxHeight:"40%",maxWidth:300},content:{background:Ge.a,color:Ge.b},messageContainer:{flex:1,display:"flex",padding:10,fontSize:"1.3em"},messageIcon:{paddingRight:"10px",fontSize:"1.5em"},messageHeader:{fontWeight:900,textAlign:"center"},buttonsContainer:{flexShrink:0,padding:"10px 8px 5px 10px",borderTop:"1px solid ".concat(Ge.b),textAlign:"right"},error:{flex:1,padding:20,textAlign:"center"}},ct=ot.modal,it=ot.content,st=ot.messageIcon,lt=ot.error,ut=b.a.createStyleSheet(ot).attach().classes,dt=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.dismiss,n=e.open;return u.createElement(Xe.a,{style:ct,dimmer:"inverted",open:n,onClose:t},u.createElement(Xe.a.Content,{style:it},u.createElement("div",{className:ut.messageContainer},u.createElement(h.a,{style:st,name:"warning"}),u.createElement("div",{className:ut.cotent},u.createElement("div",{className:ut.messageHeader},"Source successfully updated!"),u.createElement("div",{style:lt},this.props.error.message))),u.createElement("div",{className:"".concat(ut.buttonsContainer)},u.createElement(Ye.a,{color:"red",inverted:!0,onClick:t},u.createElement(h.a,{name:"remove"})," Dismiss"))))}}]),t}(u.Component),pt=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).state=D,n.renderDetail=function(){var e=n.props.source,t=e.sourceType,r=e.authors,a=e.year,o=e.topic,c=e.publication,i=e.url,s=n.state.accordionProps;return d.a.createElement(we.Content,{style:ze,className:Re.detailsAccordionContent,active:s[T.DETAIL]},n.renderUpdatingUI(),d.a.createElement("div",{className:"source-type ".concat(Re.root)},d.a.createElement("div",{className:Re.labels},"Type"),d.a.createElement("div",{className:Re.details},n.renderSourceType(t))),d.a.createElement("div",{className:"authors ".concat(Re.root)},d.a.createElement("div",{className:Re.labels},"Authors"),d.a.createElement("div",{className:Re.details},n.isEditing()?n.renderAuthorsControl():r.map(n.renderAuthor))),n.renderTextField(o,"topic"),n.renderTextField(a,"year"),n.renderTextField(c,"publication"),n.renderTextField(i,"url","URL"),d.a.createElement("div",null,d.a.createElement("div",{style:{fontWeight:"bolder",fontSize:"1.2rem"}},"Citation"),d.a.createElement("div",null,Object(F.b)(e))))},n.renderEditViewControls=function(){if(n.state.accordionProps[T.DETAIL]){if(n.isEditing()){var e=n.props,t=e.errors,r=e.source,a=e.values;return d.a.createElement("div",{className:Re.toggleEditView},d.a.createElement(h.a,{className:"editing-icon",name:"remove",color:"red",onClick:n.handleToggleEditView}),!Pe()(r,a)&&Me()(t)&&d.a.createElement(h.a,{className:"editing-icon",name:"checkmark",color:"green",onClick:n.submit}))}return d.a.createElement("div",{className:Re.toggleEditView},d.a.createElement(h.a,{className:"edit-icon",name:"edit",onClick:n.handleToggleEditView}))}},n.renderAuthor=function(e){if(e)return d.a.createElement("div",{key:e.id},d.a.createElement(v.a,{to:Object(E.j)(e.id)},Object(F.a)(e)))},n.renderUpdatingUI=function(){var e=n.props.isSubmitting,t=n.state,r=t.updateSourceError,a=t.openUpdateSourceSuccessModal;return r?d.a.createElement(dt,{error:r,open:!!r,dismiss:n.handleDismissErrorModal}):a?d.a.createElement(at,{open:a,dismiss:n.handleDismissSuccessModal}):e?n.renderLoader("Updating..."):void 0},n.renderAccordionQuotes=function(){var e=n.state.accordionProps;return d.a.createElement(we.Content,{className:Re.quotesAccordion,style:ze,active:e[T.LIST_QUOTES]},n.renderAccordionContentQuotes())},n.renderAccordionContentQuotes=function(){var e=n.state,t=e.loadingQuotes,r=e.fetchQuotesError;if(r)return d.a.createElement("pre",{style:{whiteSpace:"pre-wrap"}},JSON.stringify(r,null,2));if(t)return n.renderLoader("Loading quotes...");var a=n.state.quotes;return a&&a.length?d.a.createElement(Qe.a,{divided:!0,relaxed:!0},a.map(He.a)):d.a.createElement("div",null,d.a.createElement("div",null,"No quote for source"),d.a.createElement("p",null,"Click New Quote to add quote"))},n.renderLoader=function(e){return d.a.createElement(p.a,{inverted:!0,className:"".concat(Re.SourceRoot),active:!0},d.a.createElement(m.a,{inverted:!0,size:"medium"},e))},n.renderTextField=function(e,t,r){return r=r||t.charAt(0).toUpperCase()+t.slice(1),n.isEditing()?d.a.createElement("div",{className:"".concat(Re.root)},d.a.createElement("div",{className:Re.labels}," ",r," "),d.a.createElement("div",{className:Re.details},n.renderTextControl(t))):e?d.a.createElement("div",{className:"".concat(Re.root)},d.a.createElement("div",{className:Re.labels}," ",r," "),"url"===t?d.a.createElement("a",{style:{paddingLeft:"15px"},href:e},e):d.a.createElement("div",{className:Re.details},e)):void 0},n.renderAuthorsControl=function(){var e="authors",t=n.props.errors[e],r=!!t,a=!!n.props.touched[e];return d.a.createElement("div",{className:Re.fieldWrapper},d.a.createElement(Fe.a.Field,{control:$e.a,error:r,selectError:r,name:e,value:n.props.values[e],handleBlur:n.handleFormControlBlur(e),handleChange:n.handleControlChange(e)}),n.renderFieldError(r&&a,t))},n.renderSourceTypeControl=function(){var e="sourceType",t=n.props.errors[e],r=!!t,a=!!n.props.touched[e];return d.a.createElement("div",{className:Re.fieldWrapper},d.a.createElement(Fe.a.Field,{control:_e.a,error:r,selectError:r,name:e,value:n.props.values[e],handleBlur:n.handleFormControlBlur(e),handleChange:n.handleControlChange(e)}),n.renderFieldError(r&&a,t))},n.renderSourceType=function(e){return n.isEditing()?n.renderSourceTypeControl():e.name},n.renderTextControl=function(e){var t=n.props.errors[e],r=!!t,a=!!n.props.touched[e];return d.a.createElement("div",{className:Re.fieldWrapper},d.a.createElement(Fe.a.Field,{className:t?Re.error:"",control:De.a,placeholder:e,fluid:!0,id:e,error:r,autoComplete:"off",value:n.props.values[e]||"",onBlur:n.props.handleBlur,onChange:n.handleControlChange(e)}),n.renderFieldError(r&&a,t))},n.renderFieldError=function(e,t){return e?d.a.createElement("div",{className:Re.errorMessage}," ",t," "):void 0},n.handleFormControlBlur=function(e){return function(){n.props.setFieldTouched(e,!0)}},n.handleControlChange=function(e){return function(){var t=Object(w.a)(A.a.mark(function t(r,a){return A.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=a?a.value:r,n.props.setFieldValue(e,r);case 2:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()},n.handleAccordionClick=function(e,t){var a=t.index;a===T.LIST_QUOTES&&n.fetchQuotes();var o=n.state.accordionProps;n.setState(function(e){return qe()(e,Object(r.a)({accordionProps:Object(Q.a)({},a,{$set:!o[a]})},n.getNewDetailState(a)))})},n.handleToggleEditView=function(){n.setState({detailAction:n.state.detailAction===O.VIEWING?O.EDITING:O.VIEWING})},n.handleDismissSuccessModal=function(){n.setState({openUpdateSourceSuccessModal:!1,detailAction:O.VIEWING})},n.handleDismissErrorModal=function(){n.setState({updateSourceError:void 0})},n.fetchQuotes=Object(w.a)(A.a.mark(function e(){var t,r;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.setState({loadingQuotes:!0}),e.next=4,n.props.client.query({query:Ve.a,variables:{quote:{source:n.props.source.id}}});case 4:t=e.sent,r=t.data.quotes,n.setState({quotes:r,loadingQuotes:!1}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),n.setState({loadingQuotes:!1,fetchQuotesError:e.t0});case 12:case"end":return e.stop()}},e,this,[[0,9]])})),n.submit=Object(w.a)(A.a.mark(function e(){var t,r,a,o,c,i,s,l,u,d,p,m,h,v;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,r=t.values,a=t.setSubmitting,o=t.updateSource,c=t.source,i=r.sourceType.id,s=r.authors,l=r.year,u=r.topic,d=r.publication,p=r.url,a(!0),m=c.authors.map(function(e){return e&&e.id}),h=s.map(function(e){return e&&e.id}),v={id:r.id,sourceTypeId:i,authorIds:h.filter(function(e){return!m.includes(e)}),deletedAuthors:m.filter(function(e){return e&&!h.includes(e)}),year:l,topic:u,publication:d,url:p},e.prev=6,e.next=9,o({variables:{source:v},update:function(e,t){var n=t.data;if(n){var r=n.updateSource;r&&e.writeQuery({query:Ke,variables:{source:{id:c.id}},data:r})}}});case 9:a(!1),n.setState({openUpdateSourceSuccessModal:!0}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(6),a(!1),n.setState({updateSourceError:e.t0});case 17:case"end":return e.stop()}},e,this,[[6,13]])})),n.isEditing=function(){var e=n.state,t=e.detailAction;return e.accordionProps[T.DETAIL]&&t===O.EDITING},n.shouldResetEditSourceForm=function(){var e=n.props.source,t=n.props.values;return!Pe()(e,t)},n.getNewDetailState=function(e){return e!==T.DETAIL?{}:n.state.detailAction===O.VIEWING?{}:{detailAction:{$set:O.VIEWING}}},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"getSnapshotBeforeUpdate",value:function(e,t){return t.detailAction===O.EDITING&&this.state.detailAction===O.VIEWING&&this.shouldResetEditSourceForm()?{resetForm:!0}:null}},{key:"componentDidUpdate",value:function(e,t,n){n&&n.resetForm&&this.props.resetForm()}},{key:"render",value:function(){var e=this.state.accordionProps;return d.a.createElement(we,{fluid:!0,styled:!0,className:Re.accordion,exclusive:!1},this.renderEditViewControls(),d.a.createElement(we.Title,{active:e[T.DETAIL],index:T.DETAIL,onClick:this.handleAccordionClick},d.a.createElement(h.a,{name:"dropdown"}),"Details"),this.renderDetail(),d.a.createElement(we.Title,{active:e[T.LIST_QUOTES],index:T.LIST_QUOTES,onClick:this.handleAccordionClick},d.a.createElement(h.a,{name:"dropdown"}),"Quotes"),this.renderAccordionQuotes())}}]),t}(d.a.Component),mt=Object(a.graphql)(V,{props:function(e){return{updateSource:e.mutate}}}),ht=Object(a.compose)(Object(I.c)(L),a.withApollo,mt)(pt),vt=n(378),ft=function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(n=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(a)))).state={loadingQuotes:!1,showingQuotes:!1},n.renderMainOrLoading=function(){var e=n.props,t=e.loading,r=e.source,a=e.error;return a?d.a.createElement("div",{className:"".concat(j.sourceMain," ").concat(j.errorContainer)},a.message):t||!r?d.a.createElement(p.a,{inverted:!0,className:"".concat(j.sourceMain),active:!0},d.a.createElement(m.a,{size:"medium"},"Loading..")):d.a.createElement("div",{className:"".concat(j.sourceMain)},d.a.createElement(v.a,{to:Object(E.k)(r.id),className:j.newQuoteButton},d.a.createElement(h.a,{name:"add circle",circular:!0}),d.a.createElement("span",{style:{fontWeight:100,fontSize:"0.65em"}},"New Quote")),d.a.createElement(ht,{source:r}))},n}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){Object(E.o)("Source")}},{key:"componentWillUnmount",value:function(){Object(E.o)()}},{key:"render",value:function(){return d.a.createElement(vt.a,null,d.a.createElement("div",{className:"".concat(j.SourceRoot)},d.a.createElement(f.a,{title:"Source",className:j.RootHeader,showSideBarTrigger:!0}),this.renderMainOrLoading()))}}]),t}(d.a.Component),Et=Object(a.graphql)(Ke,{props:function(e){var t=e.data;return Object(r.a)({},t)},options:function(e){return{variables:{source:{id:e.match.params.id}}}}});t.default=Object(a.compose)(a.withApollo,Et)(ft)}}]);
//# sourceMappingURL=./5.2640399d.chunk.js-097f714fde3d24c287922072e061b53e.map