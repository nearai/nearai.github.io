(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{215:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(249);a.default=function(e){var a=e.location;return r.a.createElement(l.a,{location:a,slug:"naps"},r.a.createElement("div",{className:"dataset-cover"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"NAPS"),r.a.createElement("h2",null,"Neural Program Synthesis Dataset"))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("h3",null,"What is NAPS?"),r.a.createElement("hr",null),r.a.createElement("b",null,"N"),"eur",r.a.createElement("b",null,"A"),"l ",r.a.createElement("b",null,"P"),"rogram ",r.a.createElement("b",null,"S"),"ynthesis Dataset is a dataset of natural language descriptions of problems and programs solving them. The problem statements were collected via crowdsourcing and the program solutions were extracted from human-written solutions in programming competitions, accompanied by input/output examples. We propose using this dataset for the program synthesistasks aimed for working with real user-generated data."),r.a.createElement("div",{className:"col-md-7"},r.a.createElement("h3",null,"Leaderboard"),r.a.createElement("table",{className:"table table-striped leaderboard"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Model"),r.a.createElement("th",null,"Acc"),r.a.createElement("th",null,"50% Acc"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Seq2Tree",r.a.createElement("p",{className:"institution"},"NEAR.ai"),r.a.createElement("a",{href:"https://openreview.net/forum?id=Bkg-jr81e7"},"(Zavershynskyi et al. '18)")),r.a.createElement("td",null,r.a.createElement("b",null,"8.8")),r.a.createElement("td",null,r.a.createElement("b",null,"11.2"))),r.a.createElement("tr",null,r.a.createElement("td",null,"Seq2Seq"),r.a.createElement("td",null,"4.7"),r.a.createElement("td",null,"7.0"))))))))}},229:function(e,a,t){"use strict";t.d(a,"b",function(){return m});var n=t(1),r=t.n(n),l=t(20),c=t.n(l),s=t(228),i=t.n(s);t.d(a,"a",function(){return i.a}),t(230);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},230:function(e,a,t){var n;e.exports=(n=t(235))&&n.default||n},231:function(e,a,t){"use strict";var n=t(236),r=t(1),l=t.n(r),c=t(20),s=t.n(c),i=t(239),o=t.n(i),m=t(229),u=(t(238),function(e){e.siteTitle;var a=e.location;return l.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg navbar-light bg-light"},l.a.createElement(m.a,{className:"navbar-brand",to:"/"},"NEAR"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{href:"https://medium.com/near-ai",className:"nav-link"},"Blog")),l.a.createElement("li",{className:a.pathname.startsWith("/research")?"nav-item active":"nav-item"},l.a.createElement(m.a,{to:"/research",className:"nav-link"},"Research")),l.a.createElement("li",{className:"/about"===a.pathname?"nav-item active":"nav-item"},l.a.createElement(m.a,{to:"/about",className:"nav-link"},"About")),l.a.createElement("li",{className:a.pathname.startsWith("/careers")?"nav-item active":"nav-item"},l.a.createElement(m.a,{to:"/careers",className:"nav-link"},"Careers")))))}),d=(t(234),function(e){var a=e.children,t=(e.data,e.location);return l.a.createElement(m.b,{query:"4085570902",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:e.site.siteMetadata.description},{name:"keywords",content:e.site.siteMetadata.keywords}]}),l.a.createElement(u,{siteTitle:e.site.siteMetadata.title,location:t}),a,l.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js"}))},data:n})});d.propTypes={children:s.a.node.isRequired},a.a=d},234:function(e,a,t){},235:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(20),c=t.n(l),s=t(44),i=t(5),o=function(e){var a=e.location,t=i.a.getResourcesForPathname(a.pathname);return r.a.createElement(s.a,{location:a,pageResources:t})};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=o},236:function(e){e.exports={data:{site:{siteMetadata:{title:"NEAR",description:"Teaching Machines To Code",keywords:"program synthesis, deep learning, machine learning, app builder, mobile app builder, no code, automatic programming"}}}}},249:function(e,a,t){"use strict";var n=t(1),r=t.n(n),l=t(229),c=t(231);a.a=function(e){var a=e.children,t=e.location;return e.slug,r.a.createElement(c.a,{location:t},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3"},r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"/research"===t.pathname?"list-group-item list-group-item-action active":"list-group-item"},r.a.createElement(l.a,{to:"/research"},"Publications")),r.a.createElement("li",{className:"/research/naps"===t.pathname?"list-group-item list-group-item-action active":"list-group-item"},r.a.createElement(l.a,{to:"/research/naps"},"NAPS Dataset")))),r.a.createElement("div",{className:"col-md-9"},a))))}}}]);
//# sourceMappingURL=component---src-pages-research-naps-js-e991e9e09d383b9bd857.js.map