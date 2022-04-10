"use strict";(self.webpackChunkpalestine_developers=self.webpackChunkpalestine_developers||[]).push([[505],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},676:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Contributing",sidebar_position:7},s="Contributing to PalestineDevelopers",u={unversionedId:"CONTRIBUTING",id:"CONTRIBUTING",title:"Contributing",description:"First off all, thanks for taking the time to contribute!",source:"@site/docs/CONTRIBUTING.md",sourceDirName:".",slug:"/CONTRIBUTING",permalink:"/docs/CONTRIBUTING",editUrl:"https://github.com/PalestineDevelopers/website/tree/main/docs/CONTRIBUTING.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Contributing",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"SMS Misr",permalink:"/docs/sms_misr"},next:{title:"palestine_trusted_device",permalink:"/docs/trusted_device"}},p=[{value:"Table Of Contents",id:"table-of-contents",children:[],level:2},{value:"How to contribute",id:"how-to-contribute",children:[{value:"Bug reporting",id:"bug-reporting",children:[],level:3},{value:"Enhancement suggestion",id:"enhancement-suggestion",children:[],level:3},{value:"Code Review",id:"code-review",children:[],level:3},{value:"Pull request",id:"pull-request",children:[],level:3}],level:2},{value:"Guides",id:"guides",children:[{value:"Git Commit Messages",id:"git-commit-messages",children:[],level:3}],level:2},{value:"Notes",id:"notes",children:[{value:"Type of Issue and Issue State",id:"type-of-issue-and-issue-state",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-palestinedevelopers"},"Contributing to PalestineDevelopers"),(0,i.kt)("p",null,"First off all, thanks for taking the time to contribute!"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"The following is a set of guidelines for contributing to PalestineDevelopers and its packages, which are maintained in this repository on GitHub. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request."),(0,i.kt)("h2",{id:"table-of-contents"},"Table Of Contents"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#before-getting-started"},"Before Getting Started")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#how-to-contribute"},"How To Contribute")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#bug-reporting"},"Bug Report")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#enhancement-suggestion"},"Enhancement Suggestion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#code-review"},"Code Review")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#pull-request"},"Pull Request"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#guides"},"Guides")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#git-commit-messages"},"Git Commit Messages")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#dart-package"},"Dart Package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#flutter-package"},"Flutter Package")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#wordpress-plugin"},"WordPress Plugin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#python-script"},"Python Script")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#another"},"Another"))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#notes"},"Notes")),(0,i.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,i.kt)("p",null,"You could be awesome and contribute to this project by one of the following ways..."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"bug-reporting"},"Bug reporting"),(0,i.kt)("p",null,"This section guides you through submitting a bug report for PalestineDevelopers. Following these guidelines helps maintainers and the community understand your report \ud83d\udcdd, reproduce the behavior \ud83d\udcbb \ud83d\udcbb, and find related reports \ud83d\udd0e."),(0,i.kt)("p",null,"Note: More guides and templates will be added soon"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"enhancement-suggestion"},"Enhancement suggestion"),(0,i.kt)("p",null,"This section guides you through submitting an enhancement suggestion for PalestineDevelopers, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion \ud83d\udcdd and find related suggestions \ud83d\udd0e."),(0,i.kt)("p",null,"Note: More guides and templates will be added soon"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"code-review"},"Code Review"),(0,i.kt)("p",null,"This section guides you through submitting a code review for PalestineDevelopers, Following these guidelines helps maintainers and the community understand your suggestion \ud83d\udcdd and find related suggestions \ud83d\udd0e."),(0,i.kt)("p",null,"Note: More guides and templates will be added soon"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"pull-request"},"Pull request"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Make sure you are offering something would help others, kepping Palestine name in mind.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Follw programming-language/technology guidlines to apply it's best practices and code quality.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Get your start point by forking the repo, creating new branch from ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," and when done issue an pull-request to the main repo."))),(0,i.kt)("p",null,"Note: More guides and templates will be added soon"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"guides"},"Guides"),(0,i.kt)("h3",{id:"git-commit-messages"},"Git Commit Messages"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Use the present tense ("Add package/feature" not "Added package/feature")'),(0,i.kt)("li",{parentName:"ul"},'Use the imperative mood ("Move cursor to..." not "Moves cursor to...")'),(0,i.kt)("li",{parentName:"ul"},"Limit the first line to 72 characters or less"),(0,i.kt)("li",{parentName:"ul"},"Reference issues and pull requests liberally after the first line"),(0,i.kt)("li",{parentName:"ul"},"When only changing documentation, include ",(0,i.kt)("inlineCode",{parentName:"li"},"[ci skip]")," in the commit title"),(0,i.kt)("li",{parentName:"ul"},"Consider starting the commit message with an applicable emoji:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ud83c\udfa8 ",(0,i.kt)("inlineCode",{parentName:"li"},":art:")," when improving the format/structure of the code"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc0e ",(0,i.kt)("inlineCode",{parentName:"li"},":racehorse:")," when improving performance"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udeb1 ",(0,i.kt)("inlineCode",{parentName:"li"},":non-potable_water:")," when plugging memory leaks"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udcdd ",(0,i.kt)("inlineCode",{parentName:"li"},":memo:")," when writing docs"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc27 ",(0,i.kt)("inlineCode",{parentName:"li"},":penguin:")," when fixing something on Linux"),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udf4e ",(0,i.kt)("inlineCode",{parentName:"li"},":apple:")," when fixing something on macOS"),(0,i.kt)("li",{parentName:"ul"},"\ud83c\udfc1 ",(0,i.kt)("inlineCode",{parentName:"li"},":checkered_flag:")," when fixing something on Windows"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc1b ",(0,i.kt)("inlineCode",{parentName:"li"},":bug:")," when fixing a bug"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udd25 ",(0,i.kt)("inlineCode",{parentName:"li"},":fire:")," when removing code or files"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc9a ",(0,i.kt)("inlineCode",{parentName:"li"},":green_heart:")," when fixing the CI build"),(0,i.kt)("li",{parentName:"ul"},"\u2705 ",(0,i.kt)("inlineCode",{parentName:"li"},":white_check_mark:")," when adding tests"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udd12 ",(0,i.kt)("inlineCode",{parentName:"li"},":lock:")," when dealing with security"),(0,i.kt)("li",{parentName:"ul"},"\u2b06\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},":arrow_up:")," when upgrading dependencies"),(0,i.kt)("li",{parentName:"ul"},"\u2b07\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},":arrow_down:")," when downgrading dependencies"),(0,i.kt)("li",{parentName:"ul"},"\ud83d\udc55 ",(0,i.kt)("inlineCode",{parentName:"li"},":shirt:")," when removing linter warnings")))),(0,i.kt)("p",null,"Note: More guides and templates will be added soon"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("p",null,"This section lists the labels we use to help us track and manage issues and pull requests. Most labels are used across all PalestineDevelopers Packages."),(0,i.kt)("h3",{id:"type-of-issue-and-issue-state"},"Type of Issue and Issue State"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Label name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enhancement")),(0,i.kt)("td",{parentName:"tr",align:null},"Feature requests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"documentation")),(0,i.kt)("td",{parentName:"tr",align:null},"Improvements or additions to documentation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"bug")),(0,i.kt)("td",{parentName:"tr",align:null},"Confirmed bugs or reports that are very likely to be bugs.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"question")),(0,i.kt)("td",{parentName:"tr",align:null},"Questions more than bug reports or feature requests (e.g. how do I do X).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"feedback")),(0,i.kt)("td",{parentName:"tr",align:null},"General feedback more than bug reports or feature requests.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"help-wanted")),(0,i.kt)("td",{parentName:"tr",align:null},"The PalestineDevelopers core team would appreciate help from the community in resolving these issues.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"more-information-needed")),(0,i.kt)("td",{parentName:"tr",align:null},"More information needs to be collected about these problems or feature requests (e.g. steps to reproduce).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"needs-reproduction")),(0,i.kt)("td",{parentName:"tr",align:null},"Likely bugs, but haven't been reliably reproduced.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"blocked")),(0,i.kt)("td",{parentName:"tr",align:null},"Issues blocked on other issues.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"duplicate")),(0,i.kt)("td",{parentName:"tr",align:null},"Issues which are duplicates of other issues, i.e. they have been reported before.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"wontfix")),(0,i.kt)("td",{parentName:"tr",align:null},"The PalestineDevelopers core team has decided not to fix these issues for now, either because they're working as intended or for some other reason.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"invalid")),(0,i.kt)("td",{parentName:"tr",align:null},"Issues which aren't valid (e.g. user errors).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"package-idea")),(0,i.kt)("td",{parentName:"tr",align:null},"Feature request which might be good candidates for new packages, instead of extending PalestineDevelopers or core PalestineDevelopers packages.")))))}m.isMDXComponent=!0}}]);