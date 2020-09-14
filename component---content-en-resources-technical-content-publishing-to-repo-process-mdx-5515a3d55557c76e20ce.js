(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{hqw3:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return m}));var o=n("zLVn"),a=(n("q1tI"),n("7ljp")),r=n("z1h2"),c={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",t)}},s=i("Process"),l=i("Box"),d=i("Link"),p=i("Callout"),u={_frontmatter:c},b=r.a;function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.mdx)(b,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",null,"Publishing Process"),Object(a.mdx)("p",null,"Publishing new content follows this process. Please make sure you’ve already proposed your idea in our community development chat before following these steps. This is important so we can arrange a reviewer and organise payment for content."),Object(a.mdx)(s,{mdxType:"Process"},Object(a.mdx)(l,{mdxType:"Box"},Object(a.mdx)("h2",null,"Write First Draft in Google Docs"),Object(a.mdx)("p",null,"Make sure to name versions, for example Dai_v0.1.\nChange to Dai_v1 after one round of feedback. Dai_v2 after a second round and so on.")),Object(a.mdx)(l,{mdxType:"Box"},Object(a.mdx)("h2",null,"Get it Reviewed"),Object(a.mdx)("p",null,"Ping the reviewer as they’ll need to double check work and bring fresh eyes. In some rare cases work will also need to be reviewed by the legal team and/or technical stakeholders.")),Object(a.mdx)(l,{mdxType:"Box"},Object(a.mdx)("h2",null,"Convert to Markdown"),Object(a.mdx)("p",null,"Once approved, convert the document into markdown using ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"http://hackmd.io/"}),"HackMD")," or ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://code.visualstudio.com/download"}),"VScode"),"; alternatively google docs has a quite useful add-on named ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://gsuite.google.com/marketplace/app/docs_to_markdown/700168918607"}),"Docs to Markdown"),".\nIf the document needs fancier components it's likely that .mdx will serve the need. Follow guides to using .mdx in this here repo: ",Object(a.mdx)(d,{to:"/resources/content/cheatsheet/",mdxType:"Link"},"mdx cheat sheet")),Object(a.mdx)(p,{icon:"plus",secondary:!0,mdxType:"Callout"},Object(a.mdx)("p",null,"Want to add fancier pieces to a page? Building something elaborate? Please feel free to dive down the rabbit hole of ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/resources/technical-content/installation-guide/"}),"comm-dev's mdx implementation"),"."))),Object(a.mdx)(l,{mdxType:"Box"},Object(a.mdx)("h2",null,"Submit a Pull Request"),Object(a.mdx)("p",null,"If uncomfortable with GitHub there's a GitHub guide where we’ll talk through the process. ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"/work_with_us/content/using-github/"}),"Community development GitHub guide")),Object(a.mdx)("p",null,"Make sure to reach out in the ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://chat.makerdao.com/channel/community-development"}),"Community Development Chat")," if you need help using GitHub or submitting a Pull Request."))))}m.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var o=n("rePB"),a=n("q1tI"),r=n("2A+t"),c=n("izhR"),i=n("xEQ+"),s=n.n(i),l=n("Wbzz"),d=n("YwZP"),p=n("4XhP"),u=n("tW5L"),b=n("/xXG"),m=n("C9jn"),h=n("d+M2"),O=n("Al62");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}t.a=function(e){var t=Object(u.d)(),n=t.locale,i=t.t,f=t.DEFAULT_LOCALE,g=Object(l.useStaticQuery)("955314892").allMdx,x=e.children,y=e.pageContext,w=e.uri,v=y.pagePath,k=y.frontmatter,P=k.title,D=k.description,C=k.keywords,T=k.featuredImage,L=k.status,M=k.hideLanguageSelector,_=k.hideBreadcrumbs,B=v.replace(/^\/|\/$/g,"").split("/").slice(1),H=B.join("/");console.log(B[0]);var I=Object(m.a)(g.edges,B[0],f,n,B),S=I.sidenavData,A=I.breadcrumbData,G=g.edges.filter((function(e){var t=e.node;return Object(O.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===H&&Object(O.g)(t.fileAbsolutePath)!==n})).map((function(e){var t=e.node;return{value:Object(O.c)(t),label:i("Language",null,null,Object(O.g)(t.fileAbsolutePath))}})),q="object"==typeof L?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:L.text},L):{children:L},z=Object(d.useLocation)().pathname.split("/")[2],E=P||function(){var e=a.Children.toArray(x).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||w.split("/").pop(),N=void 0!==z&&""!==z,W=y.frontmatter&&!y.frontmatter.hideSidenav&&N,X=N&&!M,F=!_||N&&!M,R={title:E,description:D,keywords:C,featuredImage:T},J=X?234:0;return W&&(J+=256),Object(r.c)(a.Fragment,null,W&&Object(r.c)(c.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(r.c)(s.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(r.c)(p.g,{data:S,currentPath:v}))),Object(r.c)(c.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+J+"px)"],mt:N?[4,4,"59px"]:0,pl:N?[4,4,"64px"]:0,pr:N?[4,4,0]:0,pb:4}},Object(r.c)(h.c,R),L&&Object(r.c)(c.f,{sx:{marginTop:N?2:0}},Object(r.c)(b.l,Object.assign({sticky:!0},q,{sx:{width:"100%"}}))),F&&Object(r.c)(c.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:N?0:[3,3,0]}},Object(r.c)(p.a,{data:A,pathDirs:B})),Object(r.c)(c.f,{sx:{display:["block","block","none"]}},X&&Object(r.c)(u.b,{data:G,pagePath:v})),Object(r.c)(c.f,null,x)),Object(r.c)(c.f,{sx:{display:["none","none","block"]}},X&&Object(r.c)(u.b,{data:G,pagePath:v})),Object(r.c)(p.e,{sidenavData:S}))}}}]);
//# sourceMappingURL=component---content-en-resources-technical-content-publishing-to-repo-process-mdx-5515a3d55557c76e20ce.js.map