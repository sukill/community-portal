(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{pi5S:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return s}));var n=a("zLVn"),i=(a("q1tI"),a("7ljp")),l=a("z1h2"),r={},o={_frontmatter:r},c=l.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.mdx)(c,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",null,"Liquidation"),Object(i.mdx)("h2",null,"What is Liquidation?"),Object(i.mdx)("p",null,"Liquidation is the process of selling collateral to cover the amount of Dai a user has generated from their ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vault"),". Liquidation is the process of selling collateral to cover a user’s generated Dai. A Vault can be Liquidated if the value of its collateral falls below the required minimum level, called the Liquidation Ratio. During the Liquidation process, enough collateral is sold to cover the debt along with a Liquidation Penalty, leaving the remaining collateral available for withdrawal."),Object(i.mdx)("h2",null,"Why does Liquidation exist?"),Object(i.mdx)("p",null,"Dai is a proxy for the US Dollar, with the additional benefit of being fully backed by real value in the form of various collateral assets. Liquidation helps to ensure that Dai is always backed by an appropriate amount of collateral by closing-out ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vaults")," that are under their minimum required Collateralization Ratio for their given collateral type."),Object(i.mdx)("h2",null,"Who triggers Liquidation?"),Object(i.mdx)("p",null,"To make sure that the required surplus of collateral exists at all times, a class of users called Keepers are incentivized to maintain a constant watch for ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vaults")," that become under-collateralized. These Keepers are a special category of Maker Protocol users. They are the actors in the system who are incentivized to make sure that the outstanding Dai supply remains fully collateralized and solvent. They help maintain the health of the entire ecosystem by ensuring that undercollateralized Vaults are offered up for Liquidation as quickly as possible. This is particularly important during rapid market downturns as the collateral value could be subject to slippage."),Object(i.mdx)("h2",null,"What is the Liquidation Ratio?"),Object(i.mdx)("p",null,"The Liquidation Ratio is the minimum required collateralization level for each ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vault")," type before it is considered undercollateralized and subject to Liquidation. The Maker Protocol’s ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"oracles.md"}),"Oracles")," provide the system with pricing data that is used to track Vaults for when their Liquidation Ratio is breached. Once breached, they are available for Liquidation."),Object(i.mdx)("p",null,"For example, a Vault with a 150% Liquidation Ratio will require a minimum $1.50 of collateral value for every $1 of Dai generated. If the value of the collateral falls to $1.49 it will be Liquidated to cover the generated Dai in addition to a fee called the Liquidation Penalty."),Object(i.mdx)("p",null,"Each Vault type’s Liquidation Ratio is determined by a combination of the collateral’s risk profile and the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"stability-fee.md"}),"Stability Fee"),". There may be multiple Vault types for each collateral, with varying Liquidation Ratios and Stability Fees."),Object(i.mdx)("h2",null,"What is the Liquidation Price?"),Object(i.mdx)("p",null,"This is the price at which a ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vault")," becomes vulnerable to Liquidation. It is unique to each user’s Vault and moves up slowly as ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"stability-fee.md"}),"Stability Fees")," accrue."),Object(i.mdx)("h2",null,"What is the Liquidation Penalty?"),Object(i.mdx)("p",null,"This is a fee that is paid by ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vault")," owners when their Vaults are Liquidated. The fee is added to the Vault’s total outstanding generated DAI when a Liquidation occurs, which results in more of the collateral being sold on ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol"}),"Auction"),"."),Object(i.mdx)("p",null,"Proceeds from Liquidation Penalties are put towards the Surplus Auctions, which result in burned MKR."),Object(i.mdx)("h2",null,"Why is the Liquidation Penalty necessary?"),Object(i.mdx)("p",null,"The penalty is necessary to prevent Auction Grinding Attacks, which essentially break the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol"}),"Auction mechanism")," since an attacker can exploit the Maker Protocol for profit. To read more about this attack read this paper: ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/livnev/auction-grinding/blob/master/grinding.pdf"}),"The Auction Grinding Attack: and a case for a liquidation penalty in Dai"),"."),Object(i.mdx)("h2",null,"What happens during a Liquidation?"),Object(i.mdx)("p",null,"Liquidation occurs through an ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol"}),"Auction mechanism")," built into the Maker Protocol."),Object(i.mdx)("p",null,"The simplified order of operations looks like this:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"A Keeper detects an undercollateralized ",Object(i.mdx)("a",Object.assign({parentName:"li"},{href:"vault.md"}),"Vault")," and triggers a Liquidation."),Object(i.mdx)("li",{parentName:"ul"},"All of the collateral is put up for auction to cover the outstanding Dai + Liquidation Penalty"),Object(i.mdx)("li",{parentName:"ul"},"Once bids reach the Dai amount equaling to the outstanding Dai + Liquidation Penalty, the auction reverses and bidders now compete by offering to accept less collateral for the Dai they bid in the previous phase."),Object(i.mdx)("li",{parentName:"ul"},"Once the auction completes bidders receive the sold collateral, the winning bidders Dai is burned, and the Vault owner receives leftover collateral if any remains.")),Object(i.mdx)("p",null,"For a more detailed guide on how Auctions and Keepers work see ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol"}),"The Auctions of the Maker Protocol")," on our ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal"),"."),Object(i.mdx)("h2",null,"How much Collateral is left after a Liquidation?"),Object(i.mdx)("p",null,"Since Liquidations occur through ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/auctions/the-auctions-of-the-maker-protocol#collateral-auction-collateral-sale"}),"Collateral Auctions"),", there is no way to accurately predict the exact amount of collateral one would receive."),Object(i.mdx)("h2",null,"How do I calculate my Liquidation Price?"),Object(i.mdx)("p",null,"The Liquidation Price for a given ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vault")," is usually shown on front-ends that offer Vaults. Though one can manually calculate their Liquidation Price by using the following simplified formula:"),Object(i.mdx)("h3",null,"Formula"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"(Generated Dai * Liquidation Ratio) / (Amount of Collateral) = Liquidation Price\n")),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Variable"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Value"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Generated Dai"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"1000 DAI")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Liquidation Ratio"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"150%")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Amount of Collateral"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"10 ETH")))),Object(i.mdx)("h3",null,"Result"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"(1000 × 1.5 ) ÷ (10) = 150 USD\n")),Object(i.mdx)("p",null,"If we use ETH as an example, it would need to fall to 150 USD before the Vault is considered undercollateralized by the system."),Object(i.mdx)("h2",null,"How do I calculate my Collateralization Ratio?"),Object(i.mdx)("p",null,"The Collateralization Ratio for a given ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vault")," is usually shown on front-ends that offer Vaults. Though one can manually calculate their Collateralization Ratio by using the following simplified formula:"),Object(i.mdx)("p",null,"Formula:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"(Collateral Amount x Collateral Price) ÷ Generated Dai × 100 = Collateralization Ratio\n")),Object(i.mdx)("p",null,"Given that:"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Variable"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Value"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Collateral Amount"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"10 ETH")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Collateral Price"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"300 USD")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Generated Dai"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"1000 DAI")))),Object(i.mdx)("p",null,"Result:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"(10 x 300) ÷ 1000 × 100 = 300%\n")),Object(i.mdx)("p",null,"The Vault in this example has a Collateralization Ratio of 300%."),Object(i.mdx)("h2",null,"How do I lower my Liquidation Price?"),Object(i.mdx)("p",null,"If a user’s ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vault")," is close to the Liquidation Price, they may either add more collateral or pay Dai back into the Vault."),Object(i.mdx)("p",null,"The most efficient way a user can lower their Liquidation Price is to repay DAI. This also has the added benefit of reducing the Stability Fees that accrue for the owner of the Vault. This can be proven by the following example:"),Object(i.mdx)("p",null,"Formula:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"(Generated Dai x Liquidation Ratio) ÷ Collateral Amount = Liquidation Price\n")),Object(i.mdx)("p",null,"Given that:"),Object(i.mdx)("table",null,Object(i.mdx)("thead",{parentName:"table"},Object(i.mdx)("tr",{parentName:"thead"},Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Variable"),Object(i.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Value"))),Object(i.mdx)("tbody",{parentName:"table"},Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Liquidation Ratio"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"150%")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Collateral Amount"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"10 ETH")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Collateral Price"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"200 USD")),Object(i.mdx)("tr",{parentName:"tbody"},Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"Generated Dai"),Object(i.mdx)("td",Object.assign({parentName:"tr"},{align:null}),"1000 DAI")))),Object(i.mdx)("p",null,"Current Liquidation Price:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"(1000 × 1.5 ) ÷ (10) = 150 USD\n")),Object(i.mdx)("p",null,"Liquidation Price change by ",Object(i.mdx)("strong",{parentName:"p"},"adding")," 400 USD worth of collateral:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"(1000 × 1.5 ) ÷ (12) = 125 USD\n")),Object(i.mdx)("p",null,"Liquidation Price change by ",Object(i.mdx)("strong",{parentName:"p"},"repaying")," 400 Dai:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object.assign({parentName:"pre"},{}),"(600 × 1.5 ) ÷ (10) = 90 USD\n")),Object(i.mdx)("h2",null,"What are typical practices to avoid getting Liquidated?"),Object(i.mdx)("p",null,"Remaining aware of a ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vault’s")," condition is the Vault owner’s own responsibility. Ensuring that assets remain safe from Liquidation is entirely in the hands of each Vault owner. Below are some common practices to monitor the health of a Vault:"),Object(i.mdx)("p",null,"Vault owners could:"),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Set up price alerts for the collateral asset(s) being used."),Object(i.mdx)("li",{parentName:"ul"},"Set up a personal rule that would require them to unwind their Vaults if the collateral price falls below a certain level, this may act as an additional buffer."),Object(i.mdx)("li",{parentName:"ul"},"Make sure they have adequate access to their Vaults, especially during volatile periods in the markets."),Object(i.mdx)("li",{parentName:"ul"},"Keep note of their Vault’s number. They can use it as a reference to have an external party payback Dai or add collateral on their behalf if they don’t have immediate access to their Vault."),Object(i.mdx)("li",{parentName:"ul"},"Make sure they have access to emergency funds or assets that can be readily used to pay back Dai or add more collateral to their positions.")),Object(i.mdx)("p",null,"Remember that opening a Vault and generating Dai represents the creation of risk. Vault owners should be very cognizant of this fact and should use Vaults at their own risk."),Object(i.mdx)("h2",null,"How would a flash crash affect the Liquidation of Vaults?"),Object(i.mdx)("p",null,"A flash crash on a single exchange will not affect the system as each ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"oracles.md"}),"Oracle")," aggregates prices from many sources. The Oracle calculates the median of these prices, which naturally filters outliers like a broken price from an exchange that’s experienced a flash crash. You can read more about the Maker Protocol’s decentralized Oracles in the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"oracles.md"}),"Oracle FAQ"),"."),Object(i.mdx)("h2",null,"Where can I view live information about Liquidations?"),Object(i.mdx)("p",null,"Liquidations occur on-chain, so anyone can pull the data themselves. Several MakerDAO analytics dashboards already exist. You can see a ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com/#watch-dai"}),"list of them")," in the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://awesome.makerdao.com"}),"Awesome-MakerDAO")," resource repository."),Object(i.mdx)("h2",null,"Where can I find more technical information about Liquidations?"),Object(i.mdx)("p",null,"Visit our ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal")," for all technical documentation of the Maker Protocol. Technical documentation of Liquidations can be found in the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/collateral-module/flipper-detailed-documentation"}),"Flipper - Detailed Documentation")," and the ",Object(i.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/core-module/cat-detailed-documentation"}),"Cat - Detailed Documentation")," subsections of our Documentation Portal."))}s.isMDXComponent=!0},z1h2:function(e,t,a){"use strict";var n=a("rePB"),i=a("q1tI"),l=a("2A+t"),r=a("izhR"),o=a("xEQ+"),c=a.n(o),s=a("Wbzz"),d=a("YwZP"),u=a("4XhP"),m=a("tW5L"),b=a("/xXG"),h=a("C9jn"),p=a("d+M2"),O=a("Al62");function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}t.a=function(e){var t=Object(m.d)(),a=t.locale,o=t.t,f=t.DEFAULT_LOCALE,x=Object(s.useStaticQuery)("955314892").allMdx,g=e.children,y=e.pageContext,N=e.uri,w=y.pagePath,v=y.frontmatter,q=v.title,L=v.description,k=v.keywords,D=v.featuredImage,P=v.status,V=v.hideLanguageSelector,A=v.hideBreadcrumbs,T=w.replace(/^\/|\/$/g,"").split("/").slice(1),C=T.join("/"),S=Object(h.a)(x.edges,T[0],f,a,T),z=S.sidenavData,R=S.breadcrumbData,I=x.edges.filter((function(e){var t=e.node;return Object(O.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===C&&Object(O.g)(t.fileAbsolutePath)!==a})).map((function(e){var t=e.node;return{value:Object(O.c)(t),label:o("Language",null,null,Object(O.g)(t.fileAbsolutePath))}})),M="object"==typeof P?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({children:P.text},P):{children:P},W=Object(d.useLocation)().pathname.split("/")[2],F=q||function(){var e=i.Children.toArray(g).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||N.split("/").pop(),E=void 0!==W&&""!==W,H=y.frontmatter&&!y.frontmatter.hideSidenav&&E,G=E&&!V,U=!A||E&&!V,K={title:F,description:L,keywords:k,featuredImage:D},$=G?234:0;return H&&($+=256),Object(l.c)(i.Fragment,null,H&&Object(l.c)(r.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(l.c)(c.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(l.c)(u.g,{data:z,currentPath:w}))),Object(l.c)(r.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+$+"px)"],mt:E?[4,4,"59px"]:0,pl:E?[4,4,"64px"]:0,pr:E?[4,4,0]:0,pb:4}},Object(l.c)(p.c,K),P&&Object(l.c)(r.f,{sx:{marginTop:E?2:0}},Object(l.c)(b.l,Object.assign({sticky:!0},M,{sx:{width:"100%"}}))),U&&Object(l.c)(r.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:E?0:[3,3,0]}},Object(l.c)(u.a,{data:R,pathDirs:T})),Object(l.c)(r.f,{sx:{display:["block","block","none"]}},G&&Object(l.c)(m.b,{data:I,pagePath:w})),Object(l.c)(r.f,null,g)),Object(l.c)(r.f,{sx:{display:["none","none","block"]}},G&&Object(l.c)(m.b,{data:I,pagePath:w})),Object(l.c)(u.e,{sidenavData:z}))}}}]);
//# sourceMappingURL=component---content-en-makerdao-mcd-faqs-liquidation-md-00bcc3621e2de1f4d17c.js.map