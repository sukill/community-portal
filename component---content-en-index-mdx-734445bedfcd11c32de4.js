(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{HjBe:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return u}));var o=n("zLVn"),r=(n("q1tI"),n("7ljp")),c=n("z1h2"),a={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.mdx)("div",t)}},l=i("InfoBlock"),d=i("Box"),p=i("Button"),s={_frontmatter:a},m=c.a;function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.mdx)(m,Object.assign({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)(l,{mdxType:"InfoBlock"},Object(r.mdx)("p",null,Object(r.mdx)("img",Object.assign({parentName:"p"},{src:"/images/illus_home.png",alt:"Welcome to Comm-dev"}))),Object(r.mdx)(d,{mdxType:"Box"},Object(r.mdx)("h2",null,"Maker Community"),Object(r.mdx)("p",null,"Learn to self-organize. Shape your skills and help others. And yes, help grow the MakerDAO ecosystem. If it’s not fun, we’re not doing it right"),Object(r.mdx)(p,{to:"/work_with_us/",mdxType:"Button"},"Contribute"))),Object(r.mdx)(l,{mdxType:"InfoBlock"},Object(r.mdx)(d,{mdxType:"Box"},Object(r.mdx)("h2",null,"Play a Part"),Object(r.mdx)("p",null,"You can help us make the community even better. See open bounties, help write content, help translate, and more."),Object(r.mdx)(p,{to:"/work_with_us/",mdxType:"Button"},"Work with us")),Object(r.mdx)("p",null,Object(r.mdx)("img",Object.assign({parentName:"p"},{src:"/images/illus_work.png",alt:"Work with us"})))),Object(r.mdx)(l,{mdxType:"InfoBlock"},Object(r.mdx)("p",null,Object(r.mdx)("img",Object.assign({parentName:"p"},{src:"/images/illus_funding.png",alt:"Funding"}))),Object(r.mdx)(d,{mdxType:"Box"},Object(r.mdx)("h2",null,"Start Your Idea"),Object(r.mdx)("p",null,"We give out grants for improving MakerDAO and Dai community coordination or resources."),Object(r.mdx)(p,{to:"/funding/",mdxType:"Button"},"Get funding"))),Object(r.mdx)(l,{mdxType:"InfoBlock"},Object(r.mdx)(d,{mdxType:"Box"},Object(r.mdx)("h2",null,"Level up Your Maker Knowledge"),Object(r.mdx)("p",null,"Whether you’re new to Maker or an expert looking for details, we have a variety of community-generated resources to help you level up your MakerDAO knowledge."),Object(r.mdx)(p,{to:"/learn/",mdxType:"Button"},"Start Learning")),Object(r.mdx)("p",null,Object(r.mdx)("img",Object.assign({parentName:"p"},{src:"/images/illus_learn.png",alt:"Learn"})))),Object(r.mdx)(l,{mdxType:"InfoBlock"},Object(r.mdx)("p",null,Object(r.mdx)("img",Object.assign({parentName:"p"},{src:"/images/humans-of-makerdao.png",alt:"Humans"}))),Object(r.mdx)(d,{mdxType:"Box"},Object(r.mdx)("h2",null,"100% Remote"),Object(r.mdx)("h2",null,"100% Human"),Object(r.mdx)("h2",null,"Say Hello"),Object(r.mdx)("p",null,"You can help us make the community even better. See open bounties, help write content, help translate, and more."),Object(r.mdx)(p,{to:"https://chat.makerdao.com/channel/community-development",Icon:!0,name:"rocketchat",mdxType:"Button"},"Join our chat"))))}u.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var o=n("rePB"),r=n("q1tI"),c=n("2A+t"),a=n("izhR"),i=n("xEQ+"),l=n.n(i),d=n("Wbzz"),p=n("YwZP"),s=n("4XhP"),m=n("tW5L"),u=n("/xXG"),b=n("C9jn"),O=n("d+M2"),j=n("Al62");function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}t.a=function(e){var t=Object(m.d)(),n=t.locale,i=t.t,g=t.DEFAULT_LOCALE,h=Object(d.useStaticQuery)("955314892").allMdx,f=e.children,y=e.pageContext,w=e.uri,k=y.pagePath,v=y.frontmatter,B=v.title,P=v.description,T=v.keywords,D=v.featuredImage,I=v.status,L=v.hideLanguageSelector,S=v.hideBreadcrumbs,A=k.replace(/^\/|\/$/g,"").split("/").slice(1),M=A.join("/");console.log(A[0]);var _=Object(b.a)(h.edges,A[0],g,n,A),C=_.sidenavData,W=_.breadcrumbData,z=h.edges.filter((function(e){var t=e.node;return Object(j.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===M&&Object(j.g)(t.fileAbsolutePath)!==n})).map((function(e){var t=e.node;return{value:Object(j.c)(t),label:i("Language",null,null,Object(j.g)(t.fileAbsolutePath))}})),H="object"==typeof I?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:I.text},I):{children:I},E=Object(p.useLocation)().pathname.split("/")[2],N=B||function(){var e=r.Children.toArray(f).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||w.split("/").pop(),X=void 0!==E&&""!==E,Y=y.frontmatter&&!y.frontmatter.hideSidenav&&X,F=X&&!L,J=!S||X&&!L,q={title:N,description:P,keywords:T,featuredImage:D},G=F?234:0;return Y&&(G+=256),Object(c.c)(r.Fragment,null,Y&&Object(c.c)(a.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(c.c)(l.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(c.c)(s.g,{data:C,currentPath:k}))),Object(c.c)(a.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+G+"px)"],mt:X?[4,4,"59px"]:0,pl:X?[4,4,"64px"]:0,pr:X?[4,4,0]:0,pb:4}},Object(c.c)(O.c,q),I&&Object(c.c)(a.f,{sx:{marginTop:X?2:0}},Object(c.c)(u.l,Object.assign({sticky:!0},H,{sx:{width:"100%"}}))),J&&Object(c.c)(a.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:X?0:[3,3,0]}},Object(c.c)(s.a,{data:W,pathDirs:A})),Object(c.c)(a.f,{sx:{display:["block","block","none"]}},F&&Object(c.c)(m.b,{data:z,pagePath:k})),Object(c.c)(a.f,null,f)),Object(c.c)(a.f,{sx:{display:["none","none","block"]}},F&&Object(c.c)(m.b,{data:z,pagePath:k})),Object(c.c)(s.e,{sidenavData:C}))}}}]);
//# sourceMappingURL=component---content-en-index-mdx-734445bedfcd11c32de4.js.map