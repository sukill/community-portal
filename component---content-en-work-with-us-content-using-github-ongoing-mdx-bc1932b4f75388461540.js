(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{Rtsm:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return b}));var o=n("zLVn"),a=(n("q1tI"),n("7ljp")),i=n("z1h2"),r={},c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",t)}},l=c("Process"),s=c("Box"),p=c("Button"),u=c("Callout"),d=c("Link"),m={_frontmatter:r},h=i.a;function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.mdx)(h,Object.assign({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)("h1",null,"How to Use GitHub For Ongoing Work"),Object(a.mdx)(l,{mdxType:"Process"},Object(a.mdx)(s,{mdxType:"Box"},Object(a.mdx)("h2",null,"Choose Your Apps"),Object(a.mdx)("p",null,"You can access GitHub through the ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/"}),"GitHub website"),", ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://desktop.github.com/"}),"GitHub Desktop"),", or a program like ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://code.visualstudio.com/"}),"VScode"),". For this tutorial we'll assume you are using the website, GitHub Desktop, and VScode.")),Object(a.mdx)(s,{mdxType:"Box"},Object(a.mdx)("h2",null,"Login to Github"),Object(a.mdx)("p",null,"Make sure you have a GitHub account and you’re logged in. Make sure to log in directly through apps like GitHub Desktop and VScode as well."),Object(a.mdx)(p,{to:"https://github.com/login",mdxType:"Button"},"Go to Github")),Object(a.mdx)(s,{mdxType:"Box"},Object(a.mdx)("h2",null,"Clone the Repo and Create a New Branch"),Object(a.mdx)("p",null,"For more detailed ongoing tasks, you'll want to Clone the repo and create your own Branch. This will allow you to do ongoing work."),Object(a.mdx)("p",null,"To do this, go to Github website and ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository"}),"clone")," the repo you are making a change to."),Object(a.mdx)("p",null,"Cloning the repo creates a version of the repo on your local computer. A branch is your own fork-like space where you can make changes to files without impacting the original project."),Object(a.mdx)("h3",null,"Clone"),Object(a.mdx)("p",null,"On the GitHub Website, navigate to the repository you want to change. For example, ",Object(a.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/makerdao/community"}),"Community Development's GitHub"),"."),Object(a.mdx)("p",null,'In the top-right corner of the content, click code. Click "Open with GitHub Desktop."'),Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"/images/github-clone-desktop.png",alt:"Clone repo"}))),Object(a.mdx)("p",null," Choose where on your computer you want the repo to live."),Object(a.mdx)("p",null," ",Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"/images/github-choose-repo-folder.png",alt:"Repo folder"}))),Object(a.mdx)("h3",null,"Create a New Branch"),Object(a.mdx)("p",null,"On GitHub's app, click the branch selector menu. Type a unique name for your new branch, then select ",Object(a.mdx)("inlineCode",{parentName:"p"},"Create branch"),"."),Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"/images/github-make-branch.png",alt:"Make branch"}))),Object(a.mdx)("p",null,"You are now ready to work with GitHub directly through GitHub Desktop and an IDE like VScode, you'll use those programs to stay up-to-date and won't spend all that much more time using the GitHub website from here on out.")),Object(a.mdx)(s,{mdxType:"Box"},Object(a.mdx)("h2",null,"Navigate to File/Folder"),Object(a.mdx)("p",null,"Open VScode and use the file explorer sidebar on the left hand side to go to the file you are looking for (or use the search command). Make sure you are on your branch before you start editing or creating files!")),Object(a.mdx)(s,{mdxType:"Box"},Object(a.mdx)("h2",null,"Edit/Add File"),Object(a.mdx)("h3",null,"Edit File"),Object(a.mdx)("p",null,"Once in the file, change things, add content, begin additions. This will create a duplicate of the content in your local branch, staging every saved change along the way. This allows making and proposing new changes without overwriting the published content on the master branch."),Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"/images/github-content-window-making-changes.png",alt:"Content window VScode"}))),Object(a.mdx)("h3",null,"Add File"),Object(a.mdx)("p",null,"Once in the folder that represents proper page placement, press “Create new file”. This will add a new file in your local branch. This allows you to propose the addition of your content without publishing it right away. It's always an option to delete or rename files. Adding images is as simple as drag and drop."),Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"https://imgur.com/a/PrgxMUY",alt:"Create new file"})))),Object(a.mdx)(s,{mdxType:"Box"},Object(a.mdx)("h2",null,"Stage Changes"),Object(a.mdx)("p",null,"Whether uploading a file or making changes to existing work, git will catch all changes made. Depending on the environment (code editor, github's website etc.) initiating a live change is as simple as staging the fresh update. Navigate to the source control button and stage the changes for committing."),Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"/images/github-simple-commit-vscode.png",alt:"Staging a change"})))),Object(a.mdx)(s,{mdxType:"Box"},Object(a.mdx)("h2",null,"Create Pull Request"),Object(a.mdx)("p",null,"Once changes are staged and committed, it's time to make a PR. You can push commit to Github from VScode"),Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"/images/github-push-pull.png",alt:"Push from VScode"}))),Object(a.mdx)("p",null,"It will give you an alert to make sure you want to add these changes to the Github.com"),Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"/images/github-alert-push-pull.png",alt:"Alert in VS code"}))),Object(a.mdx)("p",null,"Navigate to the GUI on Github.com and create a pull request."),Object(a.mdx)("p",null,Object(a.mdx)("img",Object.assign({parentName:"p"},{src:"/images/github-create-pull-request.png",alt:"Create pull request"})))),Object(a.mdx)(s,{mdxType:"Box"},Object(a.mdx)("h2",null,"Review/Merge"),Object(a.mdx)("p",null,"There might be feedback/changes on a PR. A reviewer can approve, request changes, or merge the edited file into the repo. Edits can be made with an open PR (often without leaving Github's website) and the PR will update automatically. Once happy, a reviewer will merge your work and it will be live on the site."))),Object(a.mdx)(u,{variant:"warning",icon:"laptop",mdxType:"Callout"},Object(a.mdx)(s,{mdxType:"Box"},"Make sure your branch stays up to date by merging the master branch into it before you work. Here is the ",Object(a.mdx)(d,{to:"https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/syncing-your-branch",mdxType:"Link"}," how-to for syncing your Branch in GitHub Desktop"),".")))}b.isMDXComponent=!0},z1h2:function(e,t,n){"use strict";var o=n("rePB"),a=n("q1tI"),i=n("2A+t"),r=n("izhR"),c=(n("xEQ+"),n("YwZP")),l=n("tW5L"),s=n("4XhP"),p=n("/xXG"),u=n("d+M2");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}t.a=function(e){var t=e.children,n=e.pageContext,m=e.uri,h=n.frontmatter,b=h.title,g=h.description,O=h.keywords,x=h.featuredImage,j=h.status,y=h.hideLanguageSelector,w=h.hideBreadcrumbs,f="object"==typeof j?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({children:j.text},j):{children:j},k=Object(c.useLocation)().pathname.split("/")[2],v=void 0!==k&&""!==k,C={title:b||function(){var e=a.Children.toArray(t).find((function(e){return"h1"===e.props.mdxType}));if(void 0!==e)return e.props.children}()||m.split("/").pop(),description:g,keywords:O,featuredImage:x};return Object(i.c)(a.Fragment,null,Object(i.c)(u.b,C),j&&Object(i.c)(r.f,{sx:{marginTop:v?2:0}},Object(i.c)(p.l,Object.assign({sticky:!0},f,{sx:{width:"100%"}}))),(!w||v&&!y)&&Object(i.c)(r.p,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:v?0:[3,3,0]}},!w&&Object(i.c)(s.a,null),v&&!y&&Object(i.c)(l.b,null)),Object(i.c)(r.f,{sx:v&&!y?{"& > *:nth-of-type(1)":{lineHeight:"normal"},"& > *:nth-of-type(1), & > *:nth-of-type(2)":{maxWidth:["100%","100%","calc(100% - 234px - 1rem)"]},"& > *:nth-of-type(2)":{mb:"32px"}}:{}},t))}}}]);
//# sourceMappingURL=component---content-en-work-with-us-content-using-github-ongoing-mdx-bc1932b4f75388461540.js.map