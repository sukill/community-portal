(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{ATTT:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return x}));var c=n("zLVn"),o=(n("q1tI"),n("7ljp")),r=n("z1h2"),a={},d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.mdx)("div",t)}},i=d("Chocolate"),l=d("Box"),m=d("Icon"),b={_frontmatter:a},p=r.a;function x(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.mdx)(p,Object.assign({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("h1",null,"Icon Palette"),Object(o.mdx)("h4",null,"This page serves as a palette for all icons specific to this project."),Object(o.mdx)("p",null,Object(o.mdx)("strong",{parentName:"p"},"NOTE: If you're looking for our base set of Icons please see the ",Object(o.mdx)("a",Object.assign({parentName:"strong"},{href:"https://dai-ui.now.sh/icons"}),"Dai.ui Documentation"),".")),Object(o.mdx)("hr",null),Object(o.mdx)(i,{mdxType:"Chocolate"},Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"lightbulb",mdxType:"Icon"}),Object(o.mdx)("h5",null,"lightbulb")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"minus",mdxType:"Icon"}),Object(o.mdx)("h5",null,"minus")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"moon",mdxType:"Icon"}),Object(o.mdx)("h5",null,"moon")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"sun",mdxType:"Icon"}),Object(o.mdx)("h5",null,"sun")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"github",mdxType:"Icon"}),Object(o.mdx)("h5",null,"github")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"clipboard",mdxType:"Icon"}),Object(o.mdx)("h5",null,"clipboard")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"folder",mdxType:"Icon"}),Object(o.mdx)("h5",null,"folder")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"forum",mdxType:"Icon"}),Object(o.mdx)("h5",null,"forum")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"globe",mdxType:"Icon"}),Object(o.mdx)("h5",null,"globe")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"laptop",mdxType:"Icon"}),Object(o.mdx)("h5",null,"laptop")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"pencil",mdxType:"Icon"}),Object(o.mdx)("h5",null,"pencil")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"people",mdxType:"Icon"}),Object(o.mdx)("h5",null,"people")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"wrench",mdxType:"Icon"}),Object(o.mdx)("h5",null,"wrench")),Object(o.mdx)(l,{mdxType:"Box"},Object(o.mdx)(m,{size:4,name:"makerLogo",mdxType:"Icon"}),Object(o.mdx)("h5",null,"makerLogo"))))}x.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var c=n("rePB"),o=n("q1tI"),r=n("2A+t"),a=n("izhR"),d=n("xEQ+"),i=n.n(d),l=n("Wbzz"),m=n("YwZP"),b=n("4XhP"),p=n("tW5L"),x=n("/xXG"),s=n("C9jn"),O=n("d+M2"),j=n("Al62");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}t.a=function(e){var t=Object(p.d)(),n=t.locale,d=t.t,h=t.DEFAULT_LOCALE,y=Object(l.useStaticQuery)("955314892").allMdx,f=e.children,g=e.pageContext,T=e.uri,w=g.pagePath,v=g.frontmatter,I=v.title,z=v.description,P=v.keywords,B=v.featuredImage,D=v.status,k=v.hideLanguageSelector,L=v.hideBreadcrumbs,C=w.replace(/^\/|\/$/g,"").split("/").slice(1),A=C.join("/");console.log(C[0]);var E=Object(s.a)(y.edges,C[0],h,n,C),S=E.sidenavData,M=E.breadcrumbData,X=y.edges.filter((function(e){var t=e.node;return Object(j.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===A&&Object(j.g)(t.fileAbsolutePath)!==n})).map((function(e){var t=e.node;return{value:Object(j.c)(t),label:d("Language",null,null,Object(j.g)(t.fileAbsolutePath))}})),W="object"==typeof D?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:D.text},D):{children:D},H=Object(m.useLocation)().pathname.split("/")[2],N=I||function(){var e=o.Children.toArray(f).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||T.split("/").pop(),_=void 0!==H&&""!==H,q=g.frontmatter&&!g.frontmatter.hideSidenav&&_,F=_&&!k,J=!L||_&&!k,Q={title:N,description:z,keywords:P,featuredImage:B},U=F?234:0;return q&&(U+=256),Object(r.c)(o.Fragment,null,q&&Object(r.c)(a.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(r.c)(i.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(r.c)(b.g,{data:S,currentPath:w}))),Object(r.c)(a.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+U+"px)"],mt:_?[4,4,"59px"]:0,pl:_?[4,4,"64px"]:0,pr:_?[4,4,0]:0,pb:4}},Object(r.c)(O.c,Q),D&&Object(r.c)(a.f,{sx:{marginTop:_?2:0}},Object(r.c)(x.l,Object.assign({sticky:!0},W,{sx:{width:"100%"}}))),J&&Object(r.c)(a.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:_?0:[3,3,0]}},Object(r.c)(b.a,{data:M,pathDirs:C})),Object(r.c)(a.f,{sx:{display:["block","block","none"]}},F&&Object(r.c)(p.b,{data:X,pagePath:w})),Object(r.c)(a.f,null,f)),Object(r.c)(a.f,{sx:{display:["none","none","block"]}},F&&Object(r.c)(p.b,{data:X,pagePath:w})),Object(r.c)(b.e,{sidenavData:S}))}}}]);
//# sourceMappingURL=component---content-en-resources-technical-content-icons-recipes-mdx-5080fa8f427b701c18fe.js.map