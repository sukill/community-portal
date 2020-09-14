(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{"reZ+":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return O}));var a=n("zLVn"),r=(n("q1tI"),n("7ljp")),c=n("z1h2"),i={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.mdx)("div",t)}},l=o("InfoBlock"),s=o("Box"),d=o("CTA"),p=o("List"),b={_frontmatter:i},u=c.a;function O(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.mdx)(u,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",null,"Vaults"),Object(r.mdx)(l,{mdxType:"InfoBlock"},Object(r.mdx)("p",null,Object(r.mdx)("img",Object.assign({parentName:"p"},{src:"/images/illustrations/Astro-2.png",alt:"Vaults"}))),Object(r.mdx)(s,{mdxType:"Box"},Object(r.mdx)("h2",null,"A Vault is a Tool that Lets the Owner Deposit Collateral and Generate Dai"))),Object(r.mdx)("p",null,"Users create Dai by generating it against their collateral and destroy Dai when repaying their generated Dai balance. Vaults are categorized by the type of collateral used to generated Dai."),Object(r.mdx)(d,{mdxType:"CTA"},Object(r.mdx)("p",null,Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/vaults-tutorial/"}),"Click here to learn how to use Vaults"))),Object(r.mdx)(s,{sx:{padding:4},mdxType:"Box"},Object(r.mdx)("h2",null,"Sections"),Object(r.mdx)(p,{mdxType:"List"},Object(r.mdx)("p",null,Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/vault-onboarding-guide/"}),"Vault Onboarding")),Object(r.mdx)("p",null,Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/stability-fees/"}),"Stability Fees")),Object(r.mdx)("p",null,Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/liquidation/"}),"Liquidation")),Object(r.mdx)("p",null,Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/risk/"}),"Risk")))))}O.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var a=n("rePB"),r=n("q1tI"),c=n("2A+t"),i=n("izhR"),o=n("xEQ+"),l=n.n(o),s=n("Wbzz"),d=n("YwZP"),p=n("4XhP"),b=n("tW5L"),u=n("/xXG"),O=n("C9jn"),j=n("d+M2"),m=n("Al62");function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.a=function(e){var t=Object(b.d)(),n=t.locale,o=t.t,x=t.DEFAULT_LOCALE,g=Object(s.useStaticQuery)("955314892").allMdx,h=e.children,y=e.pageContext,v=e.uri,w=y.pagePath,D=y.frontmatter,P=D.title,k=D.description,L=D.keywords,T=D.featuredImage,A=D.status,C=D.hideLanguageSelector,B=D.hideBreadcrumbs,S=w.replace(/^\/|\/$/g,"").split("/").slice(1),z=S.join("/");console.log(S[0]);var I=Object(O.a)(g.edges,S[0],x,n,S),V=I.sidenavData,E=I.breadcrumbData,N=g.edges.filter((function(e){var t=e.node;return Object(m.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===z&&Object(m.g)(t.fileAbsolutePath)!==n})).map((function(e){var t=e.node;return{value:Object(m.c)(t),label:o("Language",null,null,Object(m.g)(t.fileAbsolutePath))}})),M="object"==typeof A?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:A.text},A):{children:A},X=Object(d.useLocation)().pathname.split("/")[2],q=P||function(){var e=r.Children.toArray(h).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||v.split("/").pop(),W=void 0!==X&&""!==X,F=y.frontmatter&&!y.frontmatter.hideSidenav&&W,H=W&&!C,U=!B||W&&!C,_={title:q,description:k,keywords:L,featuredImage:T},G=H?234:0;return F&&(G+=256),Object(c.c)(r.Fragment,null,F&&Object(c.c)(i.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(c.c)(l.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(c.c)(p.g,{data:V,currentPath:w}))),Object(c.c)(i.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+G+"px)"],mt:W?[4,4,"59px"]:0,pl:W?[4,4,"64px"]:0,pr:W?[4,4,0]:0,pb:4}},Object(c.c)(j.c,_),A&&Object(c.c)(i.f,{sx:{marginTop:W?2:0}},Object(c.c)(u.l,Object.assign({sticky:!0},M,{sx:{width:"100%"}}))),U&&Object(c.c)(i.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:W?0:[3,3,0]}},Object(c.c)(p.a,{data:E,pathDirs:S})),Object(c.c)(i.f,{sx:{display:["block","block","none"]}},H&&Object(c.c)(b.b,{data:N,pagePath:w})),Object(c.c)(i.f,null,h)),Object(c.c)(i.f,{sx:{display:["none","none","block"]}},H&&Object(c.c)(b.b,{data:N,pagePath:w})),Object(c.c)(p.e,{sidenavData:V}))}}}]);
//# sourceMappingURL=component---content-en-learn-vaults-index-mdx-1970b43f01e86174715f.js.map