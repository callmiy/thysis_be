(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{11:function(n,e,t){"use strict";t.d(e,"h",function(){return r}),t.d(e,"n",function(){return a}),t.d(e,"g",function(){return c}),t.d(e,"m",function(){return o}),t.d(e,"d",function(){return u}),t.d(e,"l",function(){return i}),t.d(e,"a",function(){return s}),t.d(e,"j",function(){return l}),t.d(e,"e",function(){return f}),t.d(e,"k",function(){return d}),t.d(e,"f",function(){return p}),t.d(e,"i",function(){return h}),t.d(e,"b",function(){return v}),t.d(e,"c",function(){return m}),t.d(e,"o",function(){return g});var r="/tags/:id",a=function(n){return r.replace(":id",n)},c="/sources/:id",o=function(n){return c.replace(":id",n)},u="/quotes/:id",i=function(n){return u.replace(":id",n)},s="/authors/:id",l=function(n){return s.replace(":id",n)},f="/:sourceId?",d=function(n){return f.replace(":sourceId?",n||"")},p="/search/quotes",h="/auth/register",v="/auth/login",m="/projects",b=document.getElementById("thysis-title"),g=function(n){b||(b=document.getElementById("thysis-title")),b&&(b.innerText=n?"Thysis | ".concat(n):"Thysis")}},197:function(n,e,t){n.exports=t(367)},222:function(n,e,t){},28:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(8),a=t.n(r),c=t(14),o=function(){var n=Object(c.a)(a.a.mark(function n(e,t){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:0;case 1:case"end":return n.stop()}},n,this)}));return function(e,t){return n.apply(this,arguments)}}()},304:function(n,e,t){"use strict";t.d(e,"b",function(){return u}),t.d(e,"a",function(){return i}),t.d(e,"c",function(){return r}),t.d(e,"e",function(){return s}),t.d(e,"d",function(){return l});var r,a=t(24),c=t(43),o=t(0),u=o.createContext({showSidebar:!1,onShowClicked:function(){return null},onHide:function(){return null}}),i=u.Consumer;!function(n){n.SCREEN_MIN_WIDTH_600="screenMinWidth600"}(r||(r={}));var s=Object(c.a)({},r.SCREEN_MIN_WIDTH_600,"screen and (min-width: 600px)"),l={showSidebar:!1,mediaQueries:Object.values(r).reduce(function(n,e){return Object(a.a)({},n,Object(c.a)({},e,!1))},{})}},305:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(4),a=t(5);function c(){var n=Object(r.a)(["\n  fragment ProjectFragment on Project {\n    id\n    title\n    insertedAt\n  }\n"]);return c=function(){return n},n}var o=t.n(a)()(c())},307:function(n,e,t){"use strict";t.d(e,"b",function(){return o});var r=t(4),a=t(5);function c(){var n=Object(r.a)(["\n  fragment SourceTypeFrag on SourceType {\n    id\n    name\n    __typename\n  }\n"]);return c=function(){return n},n}var o=t.n(a)()(c());e.a=o},308:function(n,e,t){"use strict";t.d(e,"b",function(){return i});var r=t(4),a=t(5),c=t.n(a),o=t(321);function u(){var n=Object(r.a)(["\n  fragment SourceFullFrag on Source {\n    ...SourceForDisplayFrag\n  }\n\n  ","\n"]);return u=function(){return n},n}var i=c()(u(),o.a);e.a=i},309:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var r=t(4),a=t(5);function c(){var n=Object(r.a)(["\n  fragment AuthorFrag on Author {\n    id\n    firstName\n    lastName\n    middleName\n    __typename\n  }\n"]);return c=function(){return n},n}var o=t.n(a)()(c());e.b=o},310:function(n,e,t){"use strict";t.d(e,"b",function(){return o});var r=t(4),a=t(5);function c(){var n=Object(r.a)(["\n  fragment TagFrag on Tag {\n    id\n    text\n    question\n    __typename\n  }\n"]);return c=function(){return n},n}var o=t.n(a)()(c());e.a=o},313:function(n,e,t){"use strict";var r,a,c,o=t(329),u=t(28),i=t(51),s=t(91);!function(n){n.DATA_PLAIN="data:pxy",n.DATA_AUTH="data:pxz"}(r||(r={})),function(n){n.GRAPHQL_PLAIN="graphql:pxy",n.GRAPHQL_AUTH="graphql:pxz"}(a||(a={}));var l=function(){var n={sendDataAuth:function(n,t,r){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;return function(n,e){var t=e.topic,r=e.ok,a=void 0===r?d:r,c=e.error,o=e.params,i=e.onTimeout;n?(Object(u.a)("log","Sending to channel topic:",t,"params:\n",{ok:a,error:c,params:o,onTimeout:i}),n.push(t,o||{}).receive("ok",function(n){Object(u.a)("log","socket send to topic",t,"successful.\nReceived data:\n",n),a(n)}).receive("error",function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(u.a)("error","socket send to topic",t,"Errors:\n",n),c(n)}).receive("timeout",function(n){i&&i(n)})):Object(u.a)("warn","Sending to channel: - channel unavailable",n)}(e,{ok:r,params:{query:n,variables:t},topic:a.GRAPHQL_AUTH,error:c})},connect:l};if(c)return n;var e,t=0;function l(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(i.a)(),a=arguments.length>1?arguments[1]:void 0,l=n?{params:{token:n}}:{};(c=new o.Socket(Object(s.a)().websocketUrl,l)).connect(),n&&c.onOpen(function(){return function(n){var a=n?{query:n.query,variables:n.variables}:{};(e=c.channel(r.DATA_AUTH,a)).join().receive("ok",function(e){t=0,n&&n.onData(e),Object(u.a)("log","Data auth channel joined",e)}).receive("error",function(n){f(),Object(u.a)("error","Data auth channel join error",n)}).receive("timeout",function(){f(),Object(u.a)("warn","Data auth channel join timeout")})}(a)}),c.onError(function(){f()})}function f(){0===t&&(t=1)}function d(){return null}return l(),n}();e.a=l},314:function(n,e,t){"use strict";var r=t(4),a=t(5),c=t.n(a),o=t(305);function u(){var n=Object(r.a)(["\n  query CurrentProjectLocalQuery {\n    currentProject @client {\n      ...ProjectFragment\n    }\n  }\n\n  ","\n"]);return u=function(){return n},n}var i=c()(u(),o.a);e.a=i},315:function(n,e,t){"use strict";var r=t(4),a=t(5),c=t.n(a),o=t(310);function u(){var n=Object(r.a)(["\n  query TagsMinimal {\n    tags {\n      ...TagFrag\n    }\n  }\n\n  ","\n"]);return u=function(){return n},n}var i=c()(u(),o.a);e.a=i},316:function(n,e,t){"use strict";var r=t(4),a=t(5),c=t.n(a),o=t(308);function u(){var n=Object(r.a)(["\n  query Sources1Query($source: GetSourcesInput!) {\n    sources(source: $source) {\n      ...SourceFullFrag\n    }\n  }\n\n  ","\n"]);return u=function(){return n},n}var i=c()(u(),o.b);e.a=i},319:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var r=t(4),a=t(5),c=t.n(a),o=t(16),u=t(39);function i(){var n=Object(r.a)(["\n  mutation UserLocalMutation($user: LocalUserInput!) {\n    user(user: $user) @client {\n      ...UserFragment\n    }\n  }\n\n  ","\n"]);return i=function(){return n},n}var s=c()(i(),u.b),l=Object(o.graphql)(s,{props:function(n){return{updateLocalUser:n.mutate}}})},321:function(n,e,t){"use strict";t.d(e,"a",function(){return s});var r=t(4),a=t(5),c=t.n(a),o=t(309),u=t(307);function i(){var n=Object(r.a)(["\n  fragment SourceForDisplayFrag on Source {\n    id\n    year\n    topic\n    publication\n    url\n    insertedAt\n    updatedAt\n    __typename\n\n    authors {\n      ...AuthorFrag\n    }\n\n    sourceType {\n      ...SourceTypeFrag\n    }\n  }\n\n  ","\n  ","\n"]);return i=function(){return n},n}var s=c()(i(),o.a,u.b)},322:function(n,e,t){"use strict";var r=t(4),a=t(5),c=t.n(a),o=t(307);function u(){var n=Object(r.a)(["\n  query SourceTypes {\n    sourceTypes {\n      ...SourceTypeFrag\n    }\n  }\n\n  ","\n"]);return u=function(){return n},n}var i=c()(u(),o.a);e.a=i},323:function(n,e,t){"use strict";var r=t(4),a=t(5),c=t.n(a),o=t(309);function u(){var n=Object(r.a)(["\n  query GetAllAuthors($author: GetAuthorsInput!) {\n    authors(author: $author) {\n      ...AuthorFrag\n    }\n  }\n\n  ","\n"]);return u=function(){return n},n}var i=c()(u(),o.a);e.a=i},325:function(n,e,t){"use strict";var r=t(8),a=t.n(r),c=t(14),o=t(24),u=t(4),i=t(68),s=t(308),l=t(310),f=t(307),d=t(5),p=t.n(d),h=t(313),v=t(315),m=t(316),b=t(322),g=t(323),j=t(326);function y(){var n=Object(u.a)(["\n      query AllQueries(",") {\n        ","\n\n        ","\n\n        tags: tags {\n          ...TagFrag\n        }\n\n        sourceTypes {\n          ...SourceTypeFrag\n        }\n\n      }\n\n      ","\n      ","\n      "," "]);return y=function(){return n},n}var w="authorProject";e.a=function(n,e,t){if(n&&n.length){e.writeQuery({query:j.a,data:{projects:n}});var r={},u={},d=n.map(function(n){if(!n)return"";var e=n.id;return r["source".concat(e)]={projectId:e},u["".concat(w).concat(e)]={projectId:e},e}),O=d.length,S=function(n){var e="",t=[];return n?(d.forEach(function(n){var r="".concat(w).concat(n);t.push("$".concat(r,": GetAuthorsInput")),e+="".concat(r,": authors(author: $").concat(r,") {\n        ...AuthorFrag\n      }\n")}),{queryStr:e,inputs:t}):{queryStr:e,inputs:t}}(O),E=function(n){var e="",t=[];return n?(d.forEach(function(n){var r="".concat(I(n));t.push("$".concat(r,": GetSourcesInput")),e+="".concat(r,": sources(source: $").concat(r,") {\n        ...SourceFullFrag\n      }\n")}),{queryStr:e,inputs:t}):{queryStr:e,inputs:t}}(O),k=Object(i.a)(E.inputs).concat(Object(i.a)(S.inputs)).join(","),x=p()(y(),k,E.queryStr,S.queryStr,f.b,s.b,l.b);h.a.connect(t,{query:x.loc.source.body,variables:Object(o.a)({},r,u),onData:function(n){var e=n.data;(function(n){T.apply(this,arguments)})(e.tags),function(n){_.apply(this,arguments)}(e),function(n){P.apply(this,arguments)}(e.sourceTypes),function(n){A.apply(this,arguments)}(e)}})}function T(){return(T=Object(c.a)(a.a.mark(function n(t){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:e.writeQuery({query:v.a,data:{tags:t}});case 3:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function P(){return(P=Object(c.a)(a.a.mark(function n(t){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(t){n.next=2;break}return n.abrupt("return");case 2:e.writeQuery({query:b.a,data:{sourceTypes:t}});case 3:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function _(){return(_=Object(c.a)(a.a.mark(function n(t){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:d.forEach(function(n){var r=I(n),a=t[r];a&&e.writeQuery({query:m.a,variables:{source:{projectId:n}},data:{sources:a}})});case 1:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function A(){return(A=Object(c.a)(a.a.mark(function n(t){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:d.forEach(function(n){var r=t["".concat(w).concat(n)];r&&e.writeQuery({query:g.a,variables:{author:{projectId:n}},data:{authors:r}})});case 1:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}function I(n){return"source".concat(n)}}},326:function(n,e,t){"use strict";var r=t(4),a=t(5),c=t.n(a),o=t(305);function u(){var n=Object(r.a)(["\n  query ProjectsQuery {\n    projects {\n      ...ProjectFragment\n    }\n  }\n\n  ","\n"]);return u=function(){return n},n}var i=c()(u(),o.a);e.a=i},35:function(n,e,t){"use strict";t.d(e,"d",function(){return a}),t.d(e,"a",function(){return c}),t.d(e,"c",function(){return o}),t.d(e,"b",function(){return r});var r,a="token",c="current-project",o={height:"100%",display:"flex",flexDirection:"column",flex:1};!function(n){n.HOME="home",n.NEW_TAG="newTag",n.NEW_SOURCE="newSource",n.TAG_LIST="tagList",n.SOURCE_LIST="sourceList",n.NEW_AUTHOR="newAuthor",n.NEW_SOURCE_TYPE="newSourceType"}(r||(r={}))},367:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(40),o=(t(202),t(205),t(8)),u=t.n(o),i=t(14),s=t(69),l=t(55),f=t(57),d=t(64),p=t(56),h=t(65),v=t(652),m=t(656),b=t(386),g=t(16),j=t(45),y=t.n(j),w=t(77),O=t(11),S=t(62),E=t(82),k=t(314),x=t(24),T=t(71),P=t(651),_=t(4),A=t(5),I=t.n(A),L=t(39),q=t(305);function C(){var n=Object(_.a)(["\n  query RefreshUserQuery($refresh: RefreshInput!) {\n    refresh(refresh: $refresh) {\n      ...UserFragment\n      projects {\n        ...ProjectFragment\n      }\n    }\n  }\n  ","\n  ","\n"]);return C=function(){return n},n}var U=I()(C(),q.a,L.b),F=t(319),N=function(n){function e(){return Object(l.a)(this,e),Object(d.a)(this,Object(p.a)(e).apply(this,arguments))}return Object(h.a)(e,n),Object(f.a)(e,[{key:"render",value:function(){var n=this.props,e=n.loading,t=n.refresh,r=n.currentProject,c=n.error;if(e&&!t)return a.a.createElement(S.a,null);var o=this.props.componentProps,u=o.component,i=Object(T.a)(o,["component"]);return c&&!c.message.includes("Network")?a.a.createElement(P.a,{to:O.b}):r||(i.location&&i.location.pathname)===O.c?a.a.createElement(u,i):a.a.createElement(P.a,{to:O.c})}}]),e}(a.a.Component),D=t(325),Q=Object(g.graphql)(U,{props:function(n){var e=n.data,t=n.ownProps;if(!e)return e;var r=e.refresh;if(!r)return e;var a=r.projects,c=r.jwt,o=t.client,u=t.updateLocalUser;return Object(D.a)(a,o,c),u({variables:{user:r}}),Object(x.a)({},e,{refresh:r})},options:function(n){return{variables:{refresh:{jwt:n.jwt}}}}}),H=Object(g.compose)(g.withApollo,F.a,Q)(N),M=function(n){var e=n.component,t=n.user,a=n.staleToken,c=n.currentProject,o=Object(T.a)(n,["component","user","staleToken","currentProject"]),u=Object(x.a)({user:t,currentProject:c},o);return r.createElement(b.a,Object.assign({},u,{render:function(n){return t?c||o.path===O.c?r.createElement(e,Object.assign({},u,n)):r.createElement(P.a,{to:O.c}):a?r.createElement(H,{componentProps:Object(x.a)({component:e},n),jwt:a,currentProject:c}):r.createElement(P.a,{to:O.b})}}))},R=Object(g.graphql)(E.a,{props:function(n){return n.data}}),W=Object(g.graphql)(k.a,{props:function(n){return n.data}}),$=Object(g.compose)(R,W)(M),z=t(304),G=t(28),B=r,J=B.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(4)]).then(t.bind(null,641))}),Y=B.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(5)]).then(t.bind(null,635))}),K=B.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(15),t.e(2),t.e(6)]).then(t.bind(null,637))}),V=B.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(7)]).then(t.bind(null,646))}),X=B.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(8)]).then(t.bind(null,647))}),Z=B.lazy(function(){return Promise.all([t.e(0),t.e(9)]).then(t.bind(null,642))}),nn=B.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(14),t.e(2),t.e(10)]).then(t.bind(null,643))}),en=B.lazy(function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(11)]).then(t.bind(null,650))}),tn=B.lazy(function(){return Promise.all([t.e(0),t.e(12)]).then(t.bind(null,648))}),rn=function(n){function e(){var n,t;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(t=Object(d.a)(this,(n=Object(p.a)(e)).call.apply(n,[this].concat(a)))).state=z.d,t.mediaListeners=[],t.toggleSidebar=function(){var n=t.state.showSidebar;t.setState({showSidebar:!n})},t.handleSidebarHide=function(){return t.setState({showSidebar:!1})},t.tearDownMediaListeners=function(){return t.mediaListeners.forEach(function(n){return n()})},t.setUpMediaListeners=function(){for(var n=Object.values(z.e),e=t.handleMediaQueryChange,r=function(r){var a=window.matchMedia(n[r]);a.addListener(e),e(a),t.mediaListeners[r]=function(){return a.removeListener(e)}},a=0;a<n.length;a++)r(a)},t.handleMediaQueryChange=function(n){var e=n.matches,r=n.media,a=Object.entries(z.e).reduce(function(n,a){var c=Object(s.a)(a,2),o=c[0],u=c[1]===r;return u&&o===z.c.SCREEN_MIN_WIDTH_600&&t.setState({showSidebar:e}),n[o]={$set:!!u&&e},n},{});t.setState(function(n){return y()(n,{mediaQueries:a})})},t}return Object(h.a)(e,n),Object(f.a)(e,[{key:"componentDidMount",value:function(){var n=Object(i.a)(u.a.mark(function n(){return u.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(w.b)();case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),Object(G.a)("error","Error restoring Apollo cache",n.t0);case 8:this.setState({cacheLoaded:!0}),this.setUpMediaListeners();case 10:case"end":return n.stop()}},n,this,[[0,5]])}));return function(){return n.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.tearDownMediaListeners()}},{key:"render",value:function(){if(!this.state.cacheLoaded)return r.createElement(S.a,null);var n=this.state,e=n.showSidebar,t=n.mediaQueries;return r.createElement(B.Suspense,{fallback:r.createElement(S.a,null)},r.createElement(g.ApolloProvider,{client:w.a},r.createElement(z.b.Provider,{value:{showSidebar:e,onShowClicked:this.toggleSidebar,onHide:this.handleSidebarHide,minWidth600:t[z.c.SCREEN_MIN_WIDTH_600]}},r.createElement(v.a,null,r.createElement(m.a,null,r.createElement(b.a,{exact:!0,path:O.i,render:function(n){return r.createElement(tn,n)}}),r.createElement(b.a,{exact:!0,path:O.b,render:function(n){return r.createElement(Z,n)}}),r.createElement($,{exact:!0,path:O.g,component:Y}),r.createElement($,{exact:!0,path:O.d,component:V}),r.createElement($,{exact:!0,path:O.a,component:X}),r.createElement($,{exact:!0,path:O.c,component:nn}),r.createElement($,{exact:!0,path:O.f,component:en}),r.createElement($,{exact:!0,path:O.h,component:J}),r.createElement($,{exact:!0,path:O.e,component:K}),r.createElement(b.a,{render:function(n){return r.createElement(Z,n)}}))))))}}]),e}(r.Component),an=rn,cn=(t(388),t(313),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function on(n){navigator.serviceWorker.register(n).then(function(n){n.onupdatefound=function(){var e=n.installing;e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?function(){var n=document.createElement("div");n.classList.add("ui","inverted","menu");var e=document.createTextNode("New content is available; please click to refresh.");n.appendChild(e),n.style.cssText="\n  border: 1px solid #07526f;\n  padding: 10px;\n  border-radius: 3px;\n  color: #ffffffe6;\n  background-color: #5faac7;\n  ";var t=document.createElement("div");t.style.cssText="\n  cursor: pointer;\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 1;\n  background: #fdfdfdc2;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  ",t.appendChild(n),document.body.appendChild(t),t.addEventListener("click",un,!1)}():console.log("Content is cached for offline use."))})}}).catch(function(n){console.error("Error during service worker registration:",n)})}function un(n){var e=n.currentTarget;e&&e.removeEventListener("click",un,!1),window.location.reload()}c.render(r.createElement(an,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("","/service-worker.js");cn?(function(n){fetch(n).then(function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(n){n.unregister().then(function(){window.location.reload()})}):on(n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):on(n)})}}()},388:function(n,e,t){},39:function(n,e,t){"use strict";t.d(e,"b",function(){return o});var r=t(4),a=t(5);function c(){var n=Object(r.a)(["\n  fragment UserFragment on User {\n    id\n    name\n    email\n    jwt\n  }\n"]);return c=function(){return n},n}var o=t.n(a)()(c());e.a=o},51:function(n,e,t){"use strict";t.d(e,"b",function(){return v}),t.d(e,"a",function(){return m});var r=t(8),a=t.n(r),c=t(24),o=t(14),u=t(365),i=t(35),s=t(82),l=t(77),f=function(n,e,t){var r={networkStatus:{__typename:"NetworkStatus",isConnected:e.isConnected}};return t.cache.writeData({data:r}),null},d=function(){var n=Object(o.a)(a.a.mark(function n(e,t,r){var o,u,i,f,d;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.user,u=r.cache,!o){n.next=6;break}return u.writeData({data:{user:o,staleToken:null,loggedOutUser:null}}),b(o.jwt),n.abrupt("return",o);case 6:if(i=Object(c.a)({},u.readQuery({query:s.a})||{user:null}),f=i.user,d={user:null,staleToken:null,currentProject:null,searchComponentState:null},!f){n.next=12;break}return n.next=11,Object(l.c)();case 11:d.loggedOutUser=f;case 12:return n.next=14,u.writeData({data:d});case 14:return g(),w(),n.abrupt("return",f);case 17:case"end":return n.stop()}},n,this)}));return function(e,t,r){return n.apply(this,arguments)}}(),p=function(n,e,t){var r=e.currentProject,a={currentProject:r};return t.cache.writeData({data:a}),y(r),null},h=function(n,e,t){var r=e.searchComponentState,a=t.cache,c={searchComponentState:{searchText:r.searchText||"",searchLoading:r.searchLoading||!1,result:r.result||null,searchError:r.searchError||null,__typename:"SearchComponentState"}};return a.writeData({data:c}),null},v=function(n){return Object(u.a)({cache:n,resolvers:{Mutation:{updateNetworkStatus:f,user:d,currentProject:p,searchComponentState:h}},defaults:{staleToken:m(),user:null,currentProject:j(),searchComponentState:null,loggedOutUser:null}})},m=function(){return localStorage.getItem(i.d)||null},b=function(n){return localStorage.setItem(i.d,n)},g=function(){return localStorage.removeItem(i.d)},j=function(){var n=localStorage.getItem(i.a);return n?JSON.parse(n):null},y=function(){var n=Object(o.a)(a.a.mark(function n(e){return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",localStorage.setItem(i.a,JSON.stringify(e)));case 1:case"end":return n.stop()}},n,this)}));return function(e){return n.apply(this,arguments)}}(),w=function(){return localStorage.removeItem(i.a)}},62:function(n,e,t){"use strict";var r=t(0),a=t(653),c=t(630),o=(t(222),function(){return r.createElement(a.a,{inverted:!0,className:"loading-state",active:!0},r.createElement(c.a,{size:"medium"},"Loading.."))});e.a=o},77:function(n,e,t){"use strict";t.d(e,"a",function(){return b}),t.d(e,"b",function(){return y}),t.d(e,"c",function(){return O});var r,a=t(8),c=t.n(a),o=t(14),u=t(368),i=t(67),s=t(6),l=t(168),f=t(330),d=t(169),p=t(51),h=t(91),v=Object(h.a)().apiUrl;r=new f.a({uri:v}),r=new s.a(function(n,e){var t=Object(p.a)();return t&&n.setContext({headers:{authorization:"Bearer ".concat(t)}}),e?e(n):null}).concat(r),r=Object(l.a)(function(n){n.graphQLErrors;var e=n.networkError,t=n.response,r=(n.operation,function(n,e){});t&&r("Response",t),e&&r("Network",e)}).concat(r);var m=new u.a,b=new i.a({cache:m,link:s.a.from([Object(p.b)(m),r])}),g=localStorage,j=new d.CachePersistor({cache:m,storage:g,key:"thysis-apollo-cache-persist"});function y(){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(c.a.mark(function n(){var e,t;return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e="3.1",t="thysis-apollo-schema-version",localStorage.getItem(t)!==e){n.next=8;break}return n.next=6,j.restore();case 6:n.next=11;break;case 8:return n.next=10,j.purge();case 10:localStorage.setItem(t,e);case 11:return n.abrupt("return",j);case 12:case"end":return n.stop()}},n,this)}))).apply(this,arguments)}var O=function(){var n=Object(o.a)(c.a.mark(function n(){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j.pause();case 2:return n.next=4,j.purge();case 4:return n.next=6,b.clearStore();case 6:return n.next=8,j.resume();case 8:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},82:function(n,e,t){"use strict";var r=t(4),a=t(5),c=t.n(a),o=t(39);function u(){var n=Object(r.a)(["\n  query UserLocalQuery {\n    user @client {\n      ...UserFragment\n    }\n\n    staleToken @client\n  }\n\n  ","\n"]);return u=function(){return n},n}var i=c()(u(),o.b);e.a=i},91:function(n,e,t){"use strict";e.a=function(){var n,e="https://thysis.herokuapp.com/__api";var t=/https?/.exec(e);if(!t)throw new Error("Invalid HTTP host in '"+e+"'");var r=t[0];return n=e.replace(r,"https"===r?"wss":"ws").replace("/__api","/socket"),{apiUrl:e,websocketUrl:n}}}},[[197,16,13]]]);
//# sourceMappingURL=./main.0ac404b5.chunk.js-e217b661c53007e099c832b00102e126.map