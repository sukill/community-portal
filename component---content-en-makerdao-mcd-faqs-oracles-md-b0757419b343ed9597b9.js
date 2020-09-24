(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{ea2z:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));var r=a("zLVn"),n=(a("q1tI"),a("7ljp")),o=a("z1h2"),i={},c={_frontmatter:i},s=o.a;function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.mdx)(s,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h1",null,"Oracles"),Object(n.mdx)("h2",null,"What is an Oracle?"),Object(n.mdx)("p",null,"An Oracle makes both off-chain and on-chain data available for use in smart-contracts. In the Maker Protocol, Oracles enable the use of price data of various assets to determine a number of important things like when to ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"liquidation.md"}),"Liquidate")," a ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vault")," or how much Dai a given Vault can generate. MakerDAO Oracles receive data from a number of independent Feeds that consist of individuals and organizations. Each Oracle corresponds to a single asset and its reference price."),Object(n.mdx)("h2",null,"How does the Oracle system work?"),Object(n.mdx)("p",null,"In the Maker Protocol, each collateral type has a corresponding Oracle that publishes a reference price that the system uses. Each Oracle consists of an ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation"}),"Oracle Security Module")," and a ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation"}),"Medianizer"),". The Medianizer is sent data through a system of Feeds and relayers."),Object(n.mdx)("p",null,"Each Feed uses a tool called ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/setzer-mcd"}),"Setzer")," which pulls the median price from a set of exchanges and then pushes it to a ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://scuttlebot.io/more/protocols/secure-scuttlebutt.html"}),"Secure Scuttlebut Network")," that has relayers reading from it. Relayers aggregate the price data and send a transaction to the Medianizer. The Medianizer then takes the median of the multiple reported medians and publishes it as a queued reference price. This price is then delayed by the Oracle Security Module before it is finally used by the system."),Object(n.mdx)("p",null,"Feeds may configure Setzer to pull from any exchanges of their choosing. Relayers are able to configure parameters around when to push price data to the Medianizer. Only MKR ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"governance.md"}),"governance")," can configure or change the Medianizer and Oracle Security Module."),Object(n.mdx)("h2",null,"How is the Oracle system made secure?"),Object(n.mdx)("p",null,"To defend against fraudulent price-data, the reporting is decentralized; there are multiple organizations and individuals who report price-data, they are called Feeds. At the launch of Multi-Collateral Dai, Oracles received data from a total of 20 Feeds which consisted of 15 individuals and five public organizations. The Oracles use the median of the reported prices for each asset as the reference price. Using a median instead of an average makes it harder to manipulate the reference price since control over half of the data providers is needed in order for a fraudulent price to be pushed through. Additionally, using a median naturally filters out irregular price data."),Object(n.mdx)("p",null,"In addition to this, the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation"}),"Oracle Security Module(OSM)")," safeguards the process by delaying price-feed data for one hour. This allows MKR governors and other stakeholders the time to identify bugs or attacks on the price-feed system. An OSM is active on all Oracles in the Maker Protocol."),Object(n.mdx)("h2",null,"What is an Oracle Security Module?"),Object(n.mdx)("p",null,Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation"}),"Oracle Security Modules(OSMs)")," delay the publishing of new reference prices for a predefined set of time. This parameter is called the ",Object(n.mdx)("inlineCode",{parentName:"p"},"Oracle Security Module Delay")," and was set to be one hour at the launch of MCD. This allows MKR token holders and other stakeholders the time to react to bugs or attacks on the Oracles. An OSM is active on each Oracle in the Maker Protocol."),Object(n.mdx)("h2",null,"Can MakerDAO governance change the time of the Oracle Security Module’s delay?"),Object(n.mdx)("p",null,"Yes. This parameter is called the ",Object(n.mdx)("inlineCode",{parentName:"p"},"Oracle Security Module Delay")," and can be adjusted by MKR token holders."),Object(n.mdx)("h2",null,"What is a Medianizer?"),Object(n.mdx)("p",null,"A ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation"}),"Medianizer")," is a type of smart-contract in the Maker Protocol’s Oracle system that collects price-data from Feeds and calculates a reference price by calculating a median. The Medianizer maintains a white-list of Feeds that can be controlled by MakerDAO ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"governance.md"}),"governance.")," Every time a new set of price updates is received, the reference price is recalculated and queued into the Oracle Security Module which publishes the price after a delay period."),Object(n.mdx)("h2",null,"How often does the Medianizer publish an updated reference price?"),Object(n.mdx)("p",null,"Each time a relayer pushes a new set of medians to a ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation"}),"Medianizer"),", it recalculates the median and updates the queued reference price in the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation"}),"Oracle Security Module(OSM)"),". The OSM applies a time-delay and acts as the final publisher of the reference price."),Object(n.mdx)("h2",null,"What is a Secure Scuttlebut Network?"),Object(n.mdx)("p",null,"Secure Scuttlebutt is a database protocol for unforgeable append-only message feeds. For more information on how a Secure Scuttlebut Network works visit this ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://scuttlebot.io/more/protocols/secure-scuttlebutt.html"}),"informative page")," on ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://scuttlebot.io/"}),"scuttlebot.io"),"."),Object(n.mdx)("h2",null,"Why are Oracles an attack target for malicious actors?"),Object(n.mdx)("p",null,"In the Maker Protocol, if the reference price for an asset was determined by a single party, then they could fraudulently report an incorrect price and cause severe issues. For instance, if the price of ETH was reported to be fraudulently low, say $0.01, then every single ETH ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"vault.md"}),"Vault")," in the system would be ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"liquidation.md"}),"Liquidated"),". On the other hand, if the price of ETH was reported to be artificially high, say $1,000,000.00, then any ETH Vault owner would be able to issue an excessive amount of Dai since the system thinks there is more Collateral value than there actually is. Oracle attacks can be very profitable for a successful attacker and can be very disruptive to MakerDAO and its users."),Object(n.mdx)("h2",null,"Who are the Feeds?"),Object(n.mdx)("p",null,"The Feeds are a mix of pseudonymous individuals and public organizations. Individuals consist of people internal to Maker, influential people in the greater crypto community, as well as some community members. The organizations involved in being Feeds at the launch of MCD can be found in the ratified ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/polling-proposal/qmpem83sxjjwe1jvn2csdtetn4r3j95ejuzpbmtxef4lu5"}),"DeFi Feeds proposal"),"."),Object(n.mdx)("h2",null,"Why are organizational Feeds public, while individual Feeds are pseudonymous?"),Object(n.mdx)("p",null,"From their onset, the individuals running Feeds have been pseudonymous out of necessity, to protect the individuals from the risk of extortion and blackmail. Pseudonymous Feeds also have the benefit of making it harder to coordinate an Oracle attack since the Feeds don’t know who the others are. Organizations running Feeds, however, are different. Organizations are much more resilient against coercion, have the resources to combat malicious actors, and have their reputations at stake. This makes them much better equipped to be Feeds with public identities. A hybrid model is optimal, one that incorporates the benefits of both individual and organizational Feeds."),Object(n.mdx)("h2",null,"What is the process for becoming a Feed?"),Object(n.mdx)("p",null,"All new Feeds go through MakerDAO’s ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"governance.md"}),"governance")," in order to be added in. There is currently no formal way for Feeds to be added to the Maker Protocol. As of October 07th, 2019, the ratified ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://vote.makerdao.com/polling-proposal/qmas1bqrquo2h41qv4fa8hpek9ukb7dlwtpkpn62r5hhmq"}),"Oracle Team Mandate")," grants the Interim Oracle Team the responsibility of being the intermediary between the Feeds and governance. In the coming months, the process of becoming a Feed will become more clear."),Object(n.mdx)("h2",null,"Is the Oracle system resistant to Sybil attacks?"),Object(n.mdx)("p",null,"To quote from Wikipedia's page on ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Sybil_attack"}),"Sybil Attacks"),', "In a Sybil attack, the attacker subverts the reputation system of a peer-to-peer network by creating a large number of pseudonymous identities, using them to gain a disproportionately large influence. A reputation system\'s vulnerability to a Sybil attack depends on how cheaply identities can be generated, the degree to which the reputation system accepts inputs from entities that do not have a chain of trust linking them to a trusted entity, and whether the reputation system treats all entities identically."'),Object(n.mdx)("p",null,"The short answer is yes, the Oracle system is resistant to Sybil attacks because of the existence of a whitelist for Feeds. It's not simple to become a Feed, they need to be approved by MKR ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"governance.md"}),"governance.")," Therefore, an attacker cannot gain a majority influence by creating many pseudo-feeds."),Object(n.mdx)("h2",null,"What happens if there is a flash crash on an exchange?"),Object(n.mdx)("p",null,"Since the reference price published by the Oracles is a median of the median prices that are reported by at least 20 different Feeds, outliers are automatically filtered out. In practice, this means if a single exchange experiences a flash crash the set of prices will look something like this:"),Object(n.mdx)("pre",null,Object(n.mdx)("code",Object.assign({parentName:"pre"},{}),"[0.70, 104.80, 104.82, **104.88**, 104.90, 105.02, 105.04]\n")),Object(n.mdx)("p",null,"The median of this set still reflects the real market price of the asset. Flash crashes on single exchanges do not affect the published reference price."),Object(n.mdx)("h2",null,"Where can I find more technical information about Oracles?"),Object(n.mdx)("p",null,"Visit our ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/"}),"Documentation Portal")," for all technical documentation of the Maker Protocol. Technical documentation of Oracles can be found in the ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module"}),"Oracle Module")," section of our Documentation Portal."))}l.isMDXComponent=!0},z1h2:function(e,t,a){"use strict";var r=a("rePB"),n=a("q1tI"),o=a("2A+t"),i=a("izhR"),c=a("xEQ+"),s=a.n(c),l=a("Wbzz"),d=a("YwZP"),h=a("4XhP"),u=a("tW5L"),m=a("/xXG"),p=a("C9jn"),b=a("d+M2"),f=a("Al62");function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}t.a=function(e){var t=Object(u.d)(),a=t.locale,c=t.t,g=t.DEFAULT_LOCALE,j=Object(l.useStaticQuery)("955314892").allMdx,y=e.children,x=e.pageContext,k=e.uri,v=x.pagePath,w=x.frontmatter,M=w.title,S=w.description,F=w.keywords,z=w.featuredImage,N=w.status,T=w.hideLanguageSelector,P=w.hideBreadcrumbs,D=v.replace(/^\/|\/$/g,"").split("/").slice(1),A=D.join("/"),q=Object(p.a)(j.edges,D[0],g,a,D),I=q.sidenavData,E=q.breadcrumbData,W=j.edges.filter((function(e){var t=e.node;return Object(f.c)(t).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===A&&Object(f.g)(t.fileAbsolutePath)!==a})).map((function(e){var t=e.node;return{value:Object(f.c)(t),label:c("Language",null,null,Object(f.g)(t.fileAbsolutePath))}})),C="object"==typeof N?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({children:N.text},N):{children:N},L=Object(d.useLocation)().pathname.split("/")[2],H=M||function(){var e=n.Children.toArray(y).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||k.split("/").pop(),R=void 0!==L&&""!==L,V=x.frontmatter&&!x.frontmatter.hideSidenav&&R,K=R&&!T,X=!P||R&&!T,$={title:H,description:S,keywords:F,featuredImage:z},_=K?234:0;return V&&(_+=256),Object(o.c)(n.Fragment,null,V&&Object(o.c)(i.f,{sx:{width:"256px",display:["none","none","initial"]}},Object(o.c)(s.a,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},Object(o.c)(h.g,{data:I,currentPath:v}))),Object(o.c)(i.f,{as:"article",sx:{width:["100%","100%","calc(100% - "+_+"px)"],mt:R?[4,4,"59px"]:0,pl:R?[4,4,"64px"]:0,pr:R?[4,4,0]:0,pb:4}},Object(o.c)(b.c,$),N&&Object(o.c)(i.f,{sx:{marginTop:R?2:0}},Object(o.c)(m.l,Object.assign({sticky:!0},C,{sx:{width:"100%"}}))),X&&Object(o.c)(i.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:R?0:[3,3,0]}},Object(o.c)(h.a,{data:E,pathDirs:D})),Object(o.c)(i.f,{sx:{display:["block","block","none"]}},K&&Object(o.c)(u.b,{data:W,pagePath:v})),Object(o.c)(i.f,null,y)),Object(o.c)(i.f,{sx:{display:["none","none","block"]}},K&&Object(o.c)(u.b,{data:W,pagePath:v})),Object(o.c)(h.e,{sidenavData:I}))}}}]);
//# sourceMappingURL=component---content-en-makerdao-mcd-faqs-oracles-md-b0757419b343ed9597b9.js.map