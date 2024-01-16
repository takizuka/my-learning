"use strict";(self.webpackChunkmy_learning=self.webpackChunkmy_learning||[]).push([[726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?r.createElement(b,o(o({ref:t},s),{},{components:n})):r.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},361:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o="AWS Labmda\u306e\u95a2\u6570URL\u304b\u3089\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3059",i={unversionedId:"spring-boot-lambda/lambda-function-url/index",id:"spring-boot-lambda/lambda-function-url/index",title:"AWS Labmda\u306e\u95a2\u6570URL\u304b\u3089\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3059",description:"Lambda\u95a2\u6570\u306e\u4f5c\u6210",source:"@site/docs/03-spring-boot-lambda/02-lambda-function-url/index.md",sourceDirName:"03-spring-boot-lambda/02-lambda-function-url",slug:"/spring-boot-lambda/lambda-function-url/",permalink:"/my-learning/spring-boot-lambda/lambda-function-url/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u30a2\u30d7\u30ea\u4f5c\u6210",permalink:"/my-learning/spring-boot-lambda/setup/"}},c={},p=[{value:"Lambda\u95a2\u6570\u306e\u4f5c\u6210",id:"lambda\u95a2\u6570\u306e\u4f5c\u6210",level:2}],s={toc:p},u="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(u,(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aws-labmda\u306e\u95a2\u6570url\u304b\u3089\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3059"},"AWS Labmda\u306e\u95a2\u6570URL\u304b\u3089\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3059"),(0,a.kt)("h2",{id:"lambda\u95a2\u6570\u306e\u4f5c\u6210"},"Lambda\u95a2\u6570\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"\u4f5c\u6210\u3057\u305f\u30a2\u30d7\u30ea\u3092AWS Lambda\u3067\u52d5\u304b\u3059\u305f\u3081\u306b\u3001AWS Lambda\u306e\u95a2\u6570\u3092\u4f5c\u6210\u3059\u308b\u3002"),(0,a.kt)("p",null,"\u30a2\u30d7\u30ea\u3092\u547c\u3073\u51fa\u3059\u305f\u3081\u306eURL\u3092\u7c21\u5358\u306b\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u3001\u3053\u3053\u3067\u306fLambda\u306e\u95a2\u6570URL\u6a5f\u80fd\u3092\u5229\u7528\u3059\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(4994).Z,width:"2122",height:"1464"})," "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(577).Z,width:"1928",height:"692"})),(0,a.kt)("p",null,"Lambda\u95a2\u6570\u306e\u4f5c\u6210\u304c\u5b8c\u4e86\u3057\u305f\u3089\u3001JAR\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3002"),(0,a.kt)("p",null,"JAR\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba\u304c10MB\u3092\u8d85\u3048\u308b\u5834\u5408\u306f\u3001S3\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u304b\u3089Lambda\u95a2\u6570\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(3911).Z,width:"1218",height:"538"})),(0,a.kt)("p",null,"\u95a2\u6570URL\u306e\u30a2\u30c9\u30ec\u30b9\u306f\u3001\u95a2\u6570\u306e\u6982\u8981\u306e\u30e1\u30cb\u30e5\u30fc\u306e\u53f3\u4e0b\u306b\u8868\u793a\u3055\u308c\u3066\u3044\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Alt text",src:n(8958).Z,width:"1964",height:"886"})),(0,a.kt)("p",null,"\u3053\u306eURL\u3092\u4f7f\u3063\u3066\u30a2\u30d7\u30ea\u3092\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -XPOST https://pxcrkdqugujgeyfht4dpd4fc4e0jjrea.lambda-url.ap-northeast-1.on.aws/ -d \'{"test":"hello"}\' -H "Content-Type: application/json"\n"Completed!"%\n')))}d.isMDXComponent=!0},4994:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2024-01-17 1.05.34-75b3b4f18f89b536002f081c09c61506.png"},577:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2024-01-17 1.05.47-05c13804fcd147d32a105512ab716d94.png"},3911:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2024-01-17 1.10.38-ba36efa8a67fe563f4dcc5d8c7bb7ac1.png"},8958:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2024-01-17 1.12.50-f8b5590a824d950872ba1747d14af45f.png"}}]);