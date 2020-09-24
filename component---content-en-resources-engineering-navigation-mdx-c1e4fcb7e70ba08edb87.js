(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{XQQs:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return p}));var a,o=n("zLVn"),r=(n("q1tI"),n("7ljp")),i=n("z1h2"),l={},s=(a="CTA",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.mdx)("div",e)}),c={_frontmatter:l},d=i.a;function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.mdx)(d,Object.assign({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.mdx)("h1",null,"Navigation Automagic"),Object(r.mdx)("p",null,"While there are many great gatsby-starters out there for documentation, we decided\nto build our own from scratch because we needed to satisfy a number of requirements\nunique to decentralized projects, which include: handling multiple languages easily and\nmaking it as easy as possible for content contributors to write and adapt the site\nas they see fit without requiring them to learn React."),Object(r.mdx)("p",null,"Our philosophy is ",Object(r.mdx)("strong",{parentName:"p"},'"content creators write the website"'),", which means that we\nhave put a lot of thought and effort into how navigation, translations and 404 pages work\nand how non-developers can control all these things using nothing more than mdx."),Object(r.mdx)("h2",null,"The Sidenav"),Object(r.mdx)("p",null,"Each top level section (Funding, Learn, Contribute) has it's own directory displayed\nin the form of a vertical ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/community-portal/tree/r2d/src/modules/navigation"}),"sidenav"),".\nThis sidenav has very specific features:"),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"Auto-magically generated links based on existing file structure of top level section"),Object(r.mdx)("li",{parentName:"ol"},"Recursively intelligent"),Object(r.mdx)("li",{parentName:"ol"},"Support for multiple languages"),Object(r.mdx)("li",{parentName:"ol"},'Default locale ("en") fills in the gaps for missing pages when on a different locale page')),Object(r.mdx)("p",null,"To do this, we leverage Gatsby's file-source querying with a graphql regex filter to get every\nsingle page in the entire content folder (this sounds expensive, but it's only run once\nin the form of a static query during build time). We then pull in the edges and convert\nthat data into something usable in the form of a sidenav."),Object(r.mdx)(s,{mdxType:"CTA"},Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"We get"),": uglified data in one array."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"We need"),": an array of objects that can contain recursive layer of children",Object(r.mdx)("br",{parentName:"p"}),"\n","(i.e. the sidenav needs to look exactly like the file structure).")),Object(r.mdx)("p",null,"We used parts of the ",Object(r.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/hasura/gatsby-gitbook-starter"}),"hasura/gastsby-gitbook-starter"),"\nas a reference for how to logically put this together."),Object(r.mdx)("p",null,"To keep it short, there's a file called ",Object(r.mdx)("inlineCode",{parentName:"p"},"Sidenav_Tree")," that exports a method that\nconverts the MDX edge data into {title, slug, rawSlug} (rawSlug being the file path without it's locale)\nand only returns elements for the locale specified and our currentTopSection (Learn, Contribute, Funding, etc.).\nWe convert this into sidenav objects for our default locale and our current locale\n(if our current locale is the same as the default we don't make objects for it).\nThen we merge overlap the locale files over the default locale files."),Object(r.mdx)("p",null,"After we've gotten our ",Object(r.mdx)("inlineCode",{parentName:"p"},"mergedLocaleFiles")," we reduce all them using some of the sidenav example\nfrom the hasura starter to generate an object ",Object(r.mdx)("inlineCode",{parentName:"p"},"items")," that contain more items\n(tl;dr: our sidenav in object/array form)."),Object(r.mdx)("p",null,"Our Tree component then takes that data, and renders our ",Object(r.mdx)("inlineCode",{parentName:"p"},"Sidenav_Node")," component by mapping\nthrough all of the elements."),Object(r.mdx)("p",null,Object(r.mdx)("strong",{parentName:"p"},"Importantly"),", content creators can specify an ",Object(r.mdx)("inlineCode",{parentName:"p"},"order")," in the frontmatter of their files which\nis taken into account by the algorithm in ",Object(r.mdx)("inlineCode",{parentName:"p"},"Sidenav_Tree"),' and will determine the order in which links\nto different pages appear in the sidenav (otherwise this would happen alphabetically, which is not\nideal). The "order" number can range from -infinity -> infinity, and pages will be ordered\nrelative to their siblings based on these simple rules:'),Object(r.mdx)("ol",null,Object(r.mdx)("li",{parentName:"ol"},"If order exists in a file it will always be above files without order."),Object(r.mdx)("li",{parentName:"ol"},"The lower the order number, the higher it is in the list. 0 -> 10 is Top -> Bottom"),Object(r.mdx)("li",{parentName:"ol"},"If relative files have the same order (ie. human error) then they will be sorted alphabetically of their Title."),Object(r.mdx)("li",{parentName:"ol"},"Files without order are sorted in alphabetical order of their title (Title rule applies, localeCompare is used for non english characters).")),Object(r.mdx)("h2",null,"Breadcrumbs"),Object(r.mdx)("p",null,"Breadcrumbs are very simple. They are aware of their location in the app, run a query to get all the MDX,\nand then breaks down the data blob based on our current route to produce an array of objects to be rendered."),Object(r.mdx)("p",null,"You would think that we could just utilize the route/uri and convert those, however this solution doesn't\ncover every edge case. Based on our specs, the expectation is that the Breadcrumb labels will match the\ntitle (keeping to the Title Rule). So we HAVE to pull down their path, frontmatter, and headings to generate\nthe title and url for the label."),Object(r.mdx)("p",null,"It will look something like this:\n",Object(r.mdx)("strong",{parentName:"p"},"Home / Learn / Bounties / ... / ... / ... / ... / Page we're on")),Object(r.mdx)("p",null,"Note: If we're more than 3 levels deep in directories then our specs showed that we need to display\nellipsis in place of their full title. They are still clickable links though."),Object(r.mdx)("h2",null,"404s"),Object(r.mdx)("p",null,'Following the philosophy of "content creators write the website" means we should allow them to\nwrite 404 pages as well. Yes, from a developer standpoint this sounds outlandish, but because our\ncontent (specifically our translations) are all encapsulated in the content folder it should stay that way\n(instead of having translators bounce into code to fix the 404 page).'),Object(r.mdx)("p",null,"The solution is to have one 404.js page live in the ",Object(r.mdx)("inlineCode",{parentName:"p"},"src/pages")," directory, which performs a static query to\npull down all ",Object(r.mdx)("inlineCode",{parentName:"p"},"404.mdx")," pages at the top level of a locale folder, i.e. ",Object(r.mdx)("strong",{parentName:"p"},"content/locale(en)/404.mdx"),".\nSimilarly to ",Object(r.mdx)("inlineCode",{parentName:"p"},"header.mdx")," files we then render the body of the current locale mdx content."),Object(r.mdx)("p",null,"If no 404 exists for the current locale we default to en. If no en 404 exists, we use an inline developer 404 page."))}p.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var a=n("rePB"),o=n("q1tI"),r=n("2A+t"),i=n("izhR"),l=n("xEQ+"),s=n.n(l),c=n("Wbzz"),d=n("YwZP"),p=n("4XhP"),h=n("tW5L"),u=n("/xXG"),m=n("C9jn"),b=n("d+M2"),f=n("Al62");function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.a=function(e){var t=Object(h.d)(),n=t.locale,l=t.t,j=t.DEFAULT_LOCALE,O=Object(c.useStaticQuery)("955314892").allMdx,x=e.children,w=e.pageContext,y=e.uri,v=w.pagePath,k=w.frontmatter,N=k.title,T=k.description,C=k.keywords,P=k.featuredImage,S=k.status,D=k.hideLanguageSelector,A=k.hideBreadcrumbs,L=v.replace(/^\/|\/$/g,"").split("/").slice(1),I=L.join("/"),q=Object(m.a)(O.edges,L[0],j,n,L),W=q.sidenavData,B=q.breadcrumbData,z=O.edges.filter((function(e){var t=e.node;return Object(f.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===I&&Object(f.g)(t.fileAbsolutePath)!==n})).map((function(e){var t=e.node;return{value:Object(f.c)(t),label:l("Language",null,null,Object(f.g)(t.fileAbsolutePath))}})),E="object"==typeof S?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:S.text},S):{children:S},X=Object(d.useLocation)().pathname.split("/")[2],F=N||function(){var e=o.Children.toArray(x).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||y.split("/").pop(),M=void 0!==X&&""!==X,_=w.frontmatter&&!w.frontmatter.hideSidenav&&M,H=M&&!D,Q=!A||M&&!D,R={title:F,description:T,keywords:C,featuredImage:P},Y=H?234:0;return _&&(Y+=256),Object(r.c)(o.Fragment,null,_&&Object(r.c)(i.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(r.c)(s.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(r.c)(p.g,{data:W,currentPath:v}))),Object(r.c)(i.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+Y+"px)"],mt:M?[4,4,"59px"]:0,pl:M?[4,4,"64px"]:0,pr:M?[4,4,0]:0,pb:4}},Object(r.c)(b.c,R),S&&Object(r.c)(i.f,{sx:{marginTop:M?2:0}},Object(r.c)(u.l,Object.assign({sticky:!0},E,{sx:{width:"100%"}}))),Q&&Object(r.c)(i.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:M?0:[3,3,0]}},Object(r.c)(p.a,{data:B,pathDirs:L})),Object(r.c)(i.f,{sx:{display:["block","block","none"]}},H&&Object(r.c)(h.b,{data:z,pagePath:v})),Object(r.c)(i.f,null,x)),Object(r.c)(i.f,{sx:{display:["none","none","block"]}},H&&Object(r.c)(h.b,{data:z,pagePath:v})),Object(r.c)(p.e,{sidenavData:W}))}}}]);
//# sourceMappingURL=component---content-en-resources-engineering-navigation-mdx-c1e4fcb7e70ba08edb87.js.map