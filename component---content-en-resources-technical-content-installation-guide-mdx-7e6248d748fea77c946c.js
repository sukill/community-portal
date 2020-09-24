(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{"Wzv+":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return p}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),l=n("z1h2"),r={},o=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",t)}},s=o("Tout"),c=o("Box"),d={_frontmatter:r},m=l.a;function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.mdx)(m,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",null,"Migration from .md to (.mdx) files"),Object(i.mdx)("h3",null,"Setting up Local Development"),Object(i.mdx)("p",null,"Let's set up local development environments! Being able to hotload your changes into a local website is no small feat and is a useful skill. ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/tutorial/"}),"Here is Gatsby's guide to doing basically everything in this doc")," it's elegant, thorough, and extraordinarily helpful. Plus it's like a half-hour, tops, of following directions and installing things."),Object(i.mdx)("h3",null,"The Terminal"),Object(i.mdx)("p",null,"🤨 ",Object(i.mdx)("strong",{parentName:"p"}," I see you're reading on... ")),Object(i.mdx)("p",null,"If one hasn't done anything before in the terminal, recognize that it's the pinnacle of laziness & elegance. Developers literally have set this thing up to run on as few characters as possible. Our devs, specifically, have set community contributors to use even fewer commands."),Object(i.mdx)("p",null,"If you're lazy (congratulations 🎊 ) then here the short-short guide to installs and spinning up your local development environment:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://code.visualstudio.com/download"}),"VS code"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"IDE's with the best text highlighting experience, and development ease/packages/extensions/themes, borders on an obsession. so, download packages/extensions at one's discretion. Generally, it's best to have:",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"A linter"),Object(i.mdx)("li",{parentName:"ul"},"A prettier extension"),Object(i.mdx)("li",{parentName:"ul"},"Something to enable terminal(the shell) in your IDE"),Object(i.mdx)("li",{parentName:"ul"},"A theme <-- this is where the obsessions start"))))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://brew.sh/"}),"homebrew"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Little package manager that makes life so much easier. Also, it allows package installs for everything this portal needs."))),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://nodejs.org/en/"}),"node.js"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"the underlying architecture under the hood is react.js. Both Nodejs and React are javascript languages that can be executed both client and server-side. Developers can execute the Reactjs code directly in the Nodejs environment. The React DOM has components specifically designed to work with Nodejs that reduce lines of code, making server-side rendering comparatively easy.")))),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"brew install node\n")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"https://yarnpkg.com/"}),"yarn"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"A simpler package manager with some fancy sauce on it in the comm-dev instance. Let's do command line for yarn too 🤭")))),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"brew install yarn\n // or\n npm install -g yarn\n")),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("a",Object.assign({parentName:"li"},{href:""}),"Gatsby"),Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Let's install gatsby via terminal, keeping those terminal command skills sharp.")))),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"npm install -g gatsby-cli\n")),Object(i.mdx)(s,{mdxType:"Tout"},Object(i.mdx)(c,{mdxType:"Box"},Object(i.mdx)("h2",null,"On a PC?"),Object(i.mdx)("p",null,"Homebrew isn't necessary on PC, since the command prompt in windows allows you to interact with the same stack. You'll only need node, yarn, and gatsby. Repeating the intro: the Gatsby ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/tutorial/"}),"guide to installs")," covers other platform setups."),Object(i.mdx)("p",null,Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.com/tutorial/part-zero/#windows-instructions"}),"Windows instructions")),Object(i.mdx)("p",null,Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.com/tutorial/part-zero/#linux-instructions"}),"Linux instructions")))),Object(i.mdx)("h3",null,"I Pressed Buttons, Now What??"),Object(i.mdx)("p",null,"By this point all the dependencies should be downloaded. The next step is to pull the portal and build some pages up locally."),Object(i.mdx)("p",null,Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/community-portal"}),"clone that community repo")," and get building in the IDE! Getting started is as simple as entering the commands ",Object(i.mdx)("inlineCode",{parentName:"p"},"yarn")," then ",Object(i.mdx)("inlineCode",{parentName:"p"},"yarn start")," in the terminal. So head to terminal and run those commands in order. Normally, there is a flurry of activity in the terminal and eventually some pages that say success."),Object(i.mdx)("p",null,Object(i.mdx)("img",Object.assign({parentName:"p"},{src:"https://i.imgur.com/EL88h6k.png",alt:null}))),Object(i.mdx)("p",null,"Navigate to localhost:8000 in the web browser of choice. 💥 Boom, you just built your local environment. Now when editing an .mdx file and hitting save, Gatsby will do all the work to render the site for you with all the new ",Object(i.mdx)("strong",{parentName:"p"},Object(i.mdx)("em",{parentName:"strong"},"glorious"))," changes."),Object(i.mdx)("h3",null,"Common Commands to Fix Things"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"yarn")," before you ",Object(i.mdx)("inlineCode",{parentName:"li"},"yarn start")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"yarn clean")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("inlineCode",{parentName:"li"},"gatsby clean")),Object(i.mdx)("li",{parentName:"ul"},"Possibly you'll need to delete the packagelock.json file. then run those clean commands again."),Object(i.mdx)("li",{parentName:"ul"},"Occasionally closing VScode and the browser will fix things, in addition to the commands above."),Object(i.mdx)("li",{parentName:"ul"},"Opening multiple terminal windows and running ",Object(i.mdx)("inlineCode",{parentName:"li"},"yarn start")," will make the browser throw errors; it's trying to send two builds to one server. Close one of the terminals and try it all again.")))}p.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var a=n("rePB"),i=n("q1tI"),l=n("2A+t"),r=n("izhR"),o=n("xEQ+"),s=n.n(o),c=n("Wbzz"),d=n("YwZP"),m=n("4XhP"),p=n("tW5L"),b=n("/xXG"),u=n("C9jn"),h=n("d+M2"),j=n("Al62");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.a=function(e){var t=Object(p.d)(),n=t.locale,o=t.t,g=t.DEFAULT_LOCALE,x=Object(c.useStaticQuery)("955314892").allMdx,y=e.children,f=e.pageContext,w=e.uri,N=f.pagePath,v=f.frontmatter,k=v.title,P=v.description,C=v.keywords,D=v.featuredImage,L=v.status,T=v.hideLanguageSelector,z=v.hideBreadcrumbs,A=N.replace(/^\/|\/$/g,"").split("/").slice(1),I=A.join("/"),S=Object(u.a)(x.edges,A[0],g,n,A),B=S.sidenavData,E=S.breadcrumbData,G=x.edges.filter((function(e){var t=e.node;return Object(j.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===I&&Object(j.g)(t.fileAbsolutePath)!==n})).map((function(e){var t=e.node;return{value:Object(j.c)(t),label:o("Language",null,null,Object(j.g)(t.fileAbsolutePath))}})),M="object"==typeof L?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:L.text},L):{children:L},W=Object(d.useLocation)().pathname.split("/")[2],H=k||function(){var e=i.Children.toArray(y).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||w.split("/").pop(),R=void 0!==W&&""!==W,X=f.frontmatter&&!f.frontmatter.hideSidenav&&R,F=R&&!T,V=!z||R&&!T,_={title:H,description:P,keywords:C,featuredImage:D},q=F?234:0;return X&&(q+=256),Object(l.c)(i.Fragment,null,X&&Object(l.c)(r.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(l.c)(s.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(l.c)(m.g,{data:B,currentPath:N}))),Object(l.c)(r.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+q+"px)"],mt:R?[4,4,"59px"]:0,pl:R?[4,4,"64px"]:0,pr:R?[4,4,0]:0,pb:4}},Object(l.c)(h.c,_),L&&Object(l.c)(r.f,{sx:{marginTop:R?2:0}},Object(l.c)(b.l,Object.assign({sticky:!0},M,{sx:{width:"100%"}}))),V&&Object(l.c)(r.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:R?0:[3,3,0]}},Object(l.c)(m.a,{data:E,pathDirs:A})),Object(l.c)(r.f,{sx:{display:["block","block","none"]}},F&&Object(l.c)(p.b,{data:G,pagePath:N})),Object(l.c)(r.f,null,y)),Object(l.c)(r.f,{sx:{display:["none","none","block"]}},F&&Object(l.c)(p.b,{data:G,pagePath:N})),Object(l.c)(m.e,{sidenavData:B}))}}}]);
//# sourceMappingURL=component---content-en-resources-technical-content-installation-guide-mdx-7e6248d748fea77c946c.js.map