(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"+q0J":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));var r=a("zLVn"),n=(a("q1tI"),a("7ljp")),i=a("z1h2"),s={},o={_frontmatter:s},c=i.a;function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.mdx)(c,Object.assign({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.mdx)("h1",null,"How it Works"),Object(n.mdx)("p",null,"In the Maker Protocol, each collateral type has a corresponding oracle that publishes a reference price that the system uses. Each oracle consists of an ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/oracle-security-module-osm-detailed-documentation"}),"Oracle Security Module")," and a ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.makerdao.com/smart-contract-modules/oracle-module/median-detailed-documentation"}),"Medianizer.")," The Medianizer is sent data through a system of Feeds and relayers."),Object(n.mdx)("p",null,"Each Feed uses a tool called ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/setzer-mcd"}),"Setzer"),", which pulls the median price from a set of exchanges and then pushes it to a ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://scuttlebot.io/more/protocols/secure-scuttlebutt.html"}),"Secure Scuttlebut Network")," that has relayers reading from it. Relayers aggregate the price data and send a transaction to the Medianizer. "),Object(n.mdx)("p",null,"The Medianizer then takes the median of the multiple reported medians and publishes it as a queued reference price. This price is then delayed by the Oracle Security Module before it is finally used by the system."),Object(n.mdx)("p",null,"Feeds may configure Setzer to pull from any exchanges of their choosing. Relayers are able to configure parameters around when to push price data to the Medianizer. Only MKR governance can configure or change the Medianizer and Oracle Security Module."),Object(n.mdx)("h2",null,"FAQs"),Object(n.mdx)("h3",null,"Why are oracles an attack target for malicious actors?"),Object(n.mdx)("p",null,"In the Maker Protocol, if the reference price for an asset was determined by a single party, then they could fraudulently report an incorrect price and cause severe issues."),Object(n.mdx)("p",null,"For instance, if the price of ETH was reported to be fraudulently low, say $0.01, then every single ETH ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"/learn/vaults/"}),"Vault")," in the system would be ",Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://community-development.makerdao.com/makerdao-mcd-faqs/faqs/liquidation"}),"Liquidated.")," "),Object(n.mdx)("p",null,"On the other hand, if the price of ETH was reported to be artificially high, say $1,000,000.00, then any ETH Vault owner would be able to issue an excessive amount of Dai since the system thinks there is more Collateral value than there actually is."),Object(n.mdx)("p",null,"Oracle attacks can be very profitable for a successful attacker and can be very disruptive to MakerDAO and its users."),Object(n.mdx)("h3",null,"How is privacy handled?"),Object(n.mdx)("p",null,"From their onset, the individuals running feeds have been pseudonymous out of necessity, to protect the individuals from the risk of extortion and blackmail. "),Object(n.mdx)("p",null,"Pseudonymous Feeds also have the benefit of making it harder to coordinate an Oracle attack since the Feeds don’t know who the others are. Organizations running Feeds, however, are different. "),Object(n.mdx)("p",null,"Organizations are much more resilient against coercion, have the resources to combat malicious actors, and have their reputations at stake. This makes them much better equipped to be Feeds with public identities. A hybrid model is optimal, one that incorporates the benefits of both individual and organizational Feeds."),Object(n.mdx)("h3",null,"Is the oracle system Sybil-resistant?"),Object(n.mdx)("p",null,"Yes, the oracle system is resistant to Sybil attacks. The system uses a whitelist for feeds and becoming a feed requires approval by MKR governance. Therefore, an attacker cannot gain a majority influence by creating many pseudo-feeds."),Object(n.mdx)("p",null,'"In a Sybil attack, the attacker subverts the reputation system of a peer-to-peer network by creating a large number of pseudonymous identities, using them to gain a disproportionately large influence. A reputation system\'s vulnerability to a Sybil attack depends on how cheaply identities can be generated, the degree to which the reputation system accepts inputs from entities that do not have a chain of trust linking them to a trusted entity, and whether the reputation system treats all entities identically." - ',Object(n.mdx)("a",Object.assign({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Sybil_attack"}),"Wikipedia")),Object(n.mdx)("h3",null,"What happens if an exchange experiences a flash crash?"),Object(n.mdx)("p",null,"The reference price published by the Oracles is a median of the median prices reported by at least 20 different Feeds, outliers are automatically filtered out. "),Object(n.mdx)("p",null,"In practice, this means if a single exchange experiences a flash crash the set of prices will look something like this:"),Object(n.mdx)("p",null,"[0.70, 104.80, 104.82, ",Object(n.mdx)("strong",{parentName:"p"},"104.88"),", 104.90, 105.02, 105.04]"),Object(n.mdx)("p",null,"The median of this set still reflects the real market price of the asset. Flash crashes on single exchanges do not affect the published reference price."),Object(n.mdx)("h3",null,"Can MakerDAO governance change the time of the Oracle Security Module’s delay?"),Object(n.mdx)("p",null,"Yes. This parameter is called the ",Object(n.mdx)("inline",{code:!0},"Oracle Security Module Delay")," and can be adjusted by MKR token holders."))}l.isMDXComponent=!0},z1h2:function(e,t,a){"use strict";var r=a("rePB"),n=a("q1tI"),i=a("2A+t"),s=a("izhR"),o=(a("xEQ+"),a("YwZP")),c=a("tW5L"),l=a("4XhP"),d=a("/xXG"),h=a("d+M2");function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}t.a=function(e){var t=e.children,a=e.pageContext,p=e.uri,m=a.frontmatter,b=m.title,f=m.description,y=m.keywords,O=m.featuredImage,g=m.status,j=m.hideLanguageSelector,x=m.hideBreadcrumbs,k="object"==typeof g?function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){Object(r.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({children:g.text},g):{children:g},w=Object(o.useLocation)().pathname.split("/")[2],v=void 0!==w&&""!==w,M={title:b||function(){var e=n.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||p.split("/").pop(),description:f,keywords:y,featuredImage:O};return Object(i.c)(n.Fragment,null,Object(i.c)(h.b,M),g&&Object(i.c)(s.f,{sx:{marginTop:v?2:0}},Object(i.c)(d.l,Object.assign({sticky:!0},k,{sx:{width:"100%"}}))),(!x||v&&!j)&&Object(i.c)(s.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:v?0:[3,3,0]}},!x&&Object(i.c)(l.a,null),v&&!j&&Object(i.c)(c.b,null)),Object(i.c)(s.f,{sx:v&&!j?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-learn-oracles-how-it-works-mdx-ff4049df44f4d5feaea2.js.map