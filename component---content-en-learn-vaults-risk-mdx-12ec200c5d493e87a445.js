(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{"EKT/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),r=a("z1h2"),c={},o={_frontmatter:c},l=r.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.mdx)(l,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",null,"Vault Risk"),Object(i.mdx)("p",null,"Owning a Vault is inherently risky."),Object(i.mdx)("p",null,"This page describes the types of risk associated with owning a Vault and provides common practices for mitigating those risks."),Object(i.mdx)("h2",null,"Types of Risk"),Object(i.mdx)("p",null,"There are four major categories of risks to consider when creating a Vault: Market Risks, User Risks, Systemic Risks, and Parameter Variability Risk."),Object(i.mdx)("h3",null,"Market Risks"),Object(i.mdx)("p",null,"Using a Vault involves generating Dai and transferring ownership of your assets to a smart-contract that can sell your assets in the event of a market downturn."),Object(i.mdx)("p",null,"Any Vault with Generated Dai has a Liquidation Price, the price of the underlying asset at which one's Vault would be liquidated. Using a Vault for leverage introduces additional risk."),Object(i.mdx)("p",null,"The potential for reward is higher through leverage, but the potential for loss is magnified as well."),Object(i.mdx)("p",null,"It is a common practice among users to maintain a high Collateralization Ratio to protect from Market Risks and thereby Liquidation."),Object(i.mdx)("h3",null,"User Risks"),Object(i.mdx)("p",null,"This type of risk is associated with user error. MakerDAO can NOT reverse transactions or recover funds sent to incorrect addresses or contracts."),Object(i.mdx)("h3",null,"Systemic Risks"),Object(i.mdx)("p",null,"Systemic risks associated with operation of the Maker Protocol include, but are not limited to:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Malicious hacks attack against the smart-contract infrastructure.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Black Swan events involving one or more collateral assets.")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Failure of centralized infrastructure. For example, failed internet connections, MetaMask bugs, etc."))),Object(i.mdx)("h3",null,"Parameter Variability Risk"),Object(i.mdx)("p",null,"It's important to note that Vault owners are subject to changes in the Risk Parameters that govern the system. This equates to financial risk for the Vault owner. Below is a partial list of parameters that are subject to change:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Stability Fee")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Debt Ceiling")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Liquidation Penalty"))),Object(i.mdx)("h2",null,"Mitigating Risk"),Object(i.mdx)("p",null,"Common practices for mitigating the risks associated with owning a Vault include:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Using price alerts and/or notifications to monitor Vaults")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Increasing the collateralization ratio of a Vault")),Object(i.mdx)("li",{parentName:"ul"},Object(i.mdx)("p",{parentName:"li"},"Maintaining enough liquidity outside of your Vault to pay back Dai generated by the Vault or add to its deposited collateral"))))}s.isMDXComponent=!0},z1h2:function(e,t,a){"use strict";var n=a("rePB"),i=a("q1tI"),r=a("2A+t"),c=a("izhR"),o=a("xEQ+"),l=a.n(o),s=a("Wbzz"),u=a("YwZP"),d=a("4XhP"),p=a("tW5L"),b=a("/xXG"),m=a("C9jn"),O=a("d+M2"),j=a("Al62");function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.a=function(e){var t=Object(p.d)(),a=t.locale,o=t.t,f=t.DEFAULT_LOCALE,g=Object(s.useStaticQuery)("955314892").allMdx,x=e.children,y=e.pageContext,k=e.uri,w=y.pagePath,v=y.frontmatter,P=v.title,N=v.description,V=v.keywords,D=v.featuredImage,R=v.status,M=v.hideLanguageSelector,L=v.hideBreadcrumbs,T=w.replace(/^\/|\/$/g,"").split("/").slice(1),S=T.join("/");console.log(T[0]);var z=Object(m.a)(g.edges,T[0],f,a,T),A=z.sidenavData,C=z.breadcrumbData,q=g.edges.filter((function(e){var t=e.node;return Object(j.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===S&&Object(j.g)(t.fileAbsolutePath)!==a})).map((function(e){var t=e.node;return{value:Object(j.c)(t),label:o("Language",null,null,Object(j.g)(t.fileAbsolutePath))}})),I="object"==typeof R?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({children:R.text},R):{children:R},E=Object(u.useLocation)().pathname.split("/")[2],U=P||function(){var e=i.Children.toArray(x).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||k.split("/").pop(),B=void 0!==E&&""!==E,F=y.frontmatter&&!y.frontmatter.hideSidenav&&B,W=B&&!M,X=!L||B&&!M,H={title:U,description:N,keywords:V,featuredImage:D},_=W?234:0;return F&&(_+=256),Object(r.c)(i.Fragment,null,F&&Object(r.c)(c.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(r.c)(l.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(r.c)(d.g,{data:A,currentPath:w}))),Object(r.c)(c.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+_+"px)"],mt:B?[4,4,"59px"]:0,pl:B?[4,4,"64px"]:0,pr:B?[4,4,0]:0,pb:4}},Object(r.c)(O.c,H),R&&Object(r.c)(c.f,{sx:{marginTop:B?2:0}},Object(r.c)(b.l,Object.assign({sticky:!0},I,{sx:{width:"100%"}}))),X&&Object(r.c)(c.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:B?0:[3,3,0]}},Object(r.c)(d.a,{data:C,pathDirs:T})),Object(r.c)(c.f,{sx:{display:["block","block","none"]}},W&&Object(r.c)(p.b,{data:q,pagePath:w})),Object(r.c)(c.f,null,x)),Object(r.c)(c.f,{sx:{display:["none","none","block"]}},W&&Object(r.c)(p.b,{data:q,pagePath:w})),Object(r.c)(d.e,{sidenavData:A}))}}}]);
//# sourceMappingURL=component---content-en-learn-vaults-risk-mdx-12ec200c5d493e87a445.js.map