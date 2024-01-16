"use strict";(self.webpackChunkmy_learning=self.webpackChunkmy_learning||[]).push([[73],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},g=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,d=m["".concat(l,".").concat(c)]||m[c]||u[c]||i;return t?r.createElement(d,o(o({ref:n},g),{},{components:t})):r.createElement(d,o({ref:n},g))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const i={},o="\u30a2\u30d7\u30ea\u4f5c\u6210",p={unversionedId:"spring-boot-lambda/setup/index",id:"spring-boot-lambda/setup/index",title:"\u30a2\u30d7\u30ea\u4f5c\u6210",description:"Spring Initializr\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u96db\u5f62\u3092\u4f5c\u6210",source:"@site/docs/03-spring-boot-lambda/01-setup/index.md",sourceDirName:"03-spring-boot-lambda/01-setup",slug:"/spring-boot-lambda/setup/",permalink:"/my-learning/spring-boot-lambda/setup/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AWS Lambda\u3067\u52d5\u304fSpring Cloud Function\u30a2\u30d7\u30ea\u3092Kotlin\u3067\u4f5c\u308b",permalink:"/my-learning/category/aws-lambda\u3067\u52d5\u304fspring-cloud-function\u30a2\u30d7\u30ea\u3092kotlin\u3067\u4f5c\u308b"},next:{title:"AWS Labmda\u306e\u95a2\u6570URL\u304b\u3089\u30a2\u30d7\u30ea\u3092\u52d5\u304b\u3059",permalink:"/my-learning/spring-boot-lambda/lambda-function-url/"}},l={},s=[{value:"Spring Initializr\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u96db\u5f62\u3092\u4f5c\u6210",id:"spring-initializr\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u96db\u5f62\u3092\u4f5c\u6210",level:2},{value:"\u30e2\u30c7\u30eb\u306e\u4f5c\u6210",id:"\u30e2\u30c7\u30eb\u306e\u4f5c\u6210",level:2},{value:"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u4f5c\u6210",id:"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u4f5c\u6210",level:2},{value:"\u52d5\u4f5c\u78ba\u8a8d",id:"\u52d5\u4f5c\u78ba\u8a8d",level:2},{value:"\u30ed\u30fc\u30ab\u30eb\u3067\u306e\u52d5\u4f5c\u78ba\u8a8d",id:"\u30ed\u30fc\u30ab\u30eb\u3067\u306e\u52d5\u4f5c\u78ba\u8a8d",level:3},{value:"JAR\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210",id:"jar\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210",level:3}],g={toc:s},m="wrapper";function u(e){let{components:n,...i}=e;return(0,a.kt)(m,(0,r.Z)({},g,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u30a2\u30d7\u30ea\u4f5c\u6210"},"\u30a2\u30d7\u30ea\u4f5c\u6210"),(0,a.kt)("h2",{id:"spring-initializr\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u96db\u5f62\u3092\u4f5c\u6210"},"Spring Initializr\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u96db\u5f62\u3092\u4f5c\u6210"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://start.spring.io/#!type=gradle-project-kotlin&language=kotlin&platformVersion=3.2.1&packaging=jar&jvmVersion=21&groupId=com.takizuka&artifactId=api-gateway-lambda-spring&name=api-gateway-lambda-spring&description=Demo%20project%20for%20Spring%20Cloud%20Function&packageName=com.takizuka.api-gateway-lambda-spring&dependencies=cloud-function"},"spring initializr")),(0,a.kt)("h2",{id:"\u30e2\u30c7\u30eb\u306e\u4f5c\u6210"},"\u30e2\u30c7\u30eb\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"API\u306e\u30d1\u30e9\u30e1\u30fc\u30bf\u306b\u5408\u308f\u305b\u3066\u30e2\u30c7\u30eb\u3092\u5b9a\u7fa9\u3059\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=model/input.kt",title:"model/input.kt"},"package org.debugroom.sampleawslambda.model\n\n@JvmRecord\ndata class Input(val test: String)\n")),(0,a.kt)("h2",{id:"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u4f5c\u6210"},"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"\u30a4\u30d9\u30f3\u30c8\u30cf\u30f3\u30c9\u30e9\u306e\u5b9a\u7fa9\u65b9\u6cd5\u306f\u8907\u6570\u3042\u308b\u3002\u8a73\u7d30\u306f\u4e0b\u8a18\u3092\u53c2\u7167\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/spring-cloud/spring-cloud-function/tree/main/spring-cloud-function-samples/function-sample-aws"},"spring-cloud-function/spring-cloud-function-samples/function-sample-aws at main \xb7 spring-cloud/spring-cloud-function (github.com)")),(0,a.kt)("p",null,"\u3053\u306e\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f\u4ee5\u4e0b\u306e\u69d8\u306b\u5b9a\u7fa9\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u307e\u305a\u3001\u95a2\u6570\u3092\u5b9a\u7fa9\u304c\u542b\u307e\u308c\u308b\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30d1\u30b9\u3092 ",(0,a.kt)("inlineCode",{parentName:"p"},"application.properties")," \u306b\u5b9a\u7fa9\u3059\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text",metastring:"title=resources/application.properties",title:"resources/application.properties"},"spring.cloud.function.scan.packages=com.takizuka.apigatewaylambdaspring.functions\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"test")," \u3068\u3044\u3046\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u6301\u3064 ",(0,a.kt)("inlineCode",{parentName:"p"},"Input")," \u3068\u3044\u3046\u30e2\u30c7\u30eb\u3092\u53d7\u3051\u53d6\u308a\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"Completed!")," \u3068\u3044\u3046\u6587\u5b57\u5217\u3092\u8fd4\u3059\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin",metastring:"title=functions/ApiGatewayEventFunction.kt",title:"functions/ApiGatewayEventFunction.kt"},'package com.takizuka.apigatewaylambdaspring.functions\n\nimport com.takizuka.apigatewaylambdaspring.model.Input\nimport org.slf4j.LoggerFactory.getLogger\nimport org.springframework.messaging.Message\nimport org.springframework.messaging.support.MessageBuilder\nimport java.util.function.Function\n\nclass ApiGatewayEventFunction : Function<Message<Input>, Message<String>> {\n    companion object {\n        @Suppress("JAVA_CLASS_ON_COMPANION")\n        @JvmStatic\n        private val logger = getLogger(javaClass.enclosingClass)\n    }\n\n    override fun apply(inputMessage: Message<Input>): Message<String> {\n        logger.info("Message : " + inputMessage.payload.test)\n        return MessageBuilder\n            .withPayload("Completed!")\n            .build()\n    }\n}\n')),(0,a.kt)("h2",{id:"\u52d5\u4f5c\u78ba\u8a8d"},"\u52d5\u4f5c\u78ba\u8a8d"),(0,a.kt)("h3",{id:"\u30ed\u30fc\u30ab\u30eb\u3067\u306e\u52d5\u4f5c\u78ba\u8a8d"},"\u30ed\u30fc\u30ab\u30eb\u3067\u306e\u52d5\u4f5c\u78ba\u8a8d"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"spring-boot-starter")," \u30e2\u30b8\u30e5\u30fc\u30eb\u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"spring-cloud-function-web")," \u30e2\u30b8\u30e5\u30fc\u30eb\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u30a2\u30d7\u30ea\u304cSpring Boot Web\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068\u3057\u3066\u52d5\u4f5c\u3059\u308b\u3088\u3046\u306b\u306a\u308a\u3001\u95a2\u6570\u304c\u4f5c\u6210\u3057\u305f\u95a2\u6570\u304cHTTP\u306e\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3068\u3057\u3066\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3055\u308c\u308b\u3002 "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=build.gradle.kts",title:"build.gradle.kts"},'dependencies {\n+   implementation("org.springframework.boot:spring-boot-starter")\n    implementation("org.springframework.boot:spring-boot-starter-web")\n    implementation("org.jetbrains.kotlin:kotlin-reflect")\n+   implementation("org.springframework.cloud:spring-cloud-function-web")\n    implementation("org.springframework.cloud:spring-cloud-function-context")\n    testImplementation("org.springframework.boot:spring-boot-starter-test")\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew bootRun")," \u3067\u30ed\u30fc\u30ab\u30eb\u3067\u52d5\u4f5c\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -XPOST http://localhost:8080/apply -d \'{"test":"hello"}\' -H "Content-Type: application/json"\nCompleted!%\n')),(0,a.kt)("h3",{id:"jar\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210"},"JAR\u30d5\u30a1\u30a4\u30eb\u306e\u4f5c\u6210"),(0,a.kt)("p",null,"AWS Lambda\u306b\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u5b9f\u884c\u306b\u5fc5\u8981\u306a\u5168\u3066\u306e\u4f9d\u5b58\u95a2\u4fc2\u3092\u4e00\u3064\u306eJAR\u30d5\u30a1\u30a4\u30eb\u306b\u307e\u3068\u3081\u308b\u5fc5\u8981\u304c\u3042\u308b\u3002"),(0,a.kt)("p",null,"\u4e0b\u8a18\u306e\u69d8\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," \u3092\u4fee\u6b63\u3059\u308b\u3068\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"thin-lancher")," \u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u3088\u3063\u3066\u5fc5\u8981\u306a\u4f9d\u5b58\u95a2\u4fc2\u306e\u307f\u3092\u62bd\u51fa\u3057\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"shadowJar")," \u30d7\u30e9\u30b0\u30a4\u30f3\u306b\u3088\u3063\u3066\u4f9d\u5b58\u95a2\u4fc2\u3092\u4e00\u3064\u306eJAR\u30d5\u30a1\u30a4\u30eb\u306b\u307e\u3068\u3081\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff",metastring:"title=build.gradle.kts",title:"build.gradle.kts"},'+ import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar\n+ import com.github.jengelman.gradle.plugins.shadow.transformers.PropertiesFileTransformer\nimport org.jetbrains.kotlin.gradle.tasks.KotlinCompile\n\nplugins {\n    id("org.springframework.boot") version "3.2.1"\n    id("io.spring.dependency-management") version "1.1.4"\n+     id("com.github.johnrengelman.shadow") version "8.1.1"\n+     id("org.springframework.boot.experimental.thin-launcher") version "1.0.31.RELEASE"\n    kotlin("jvm") version "1.9.21"\n    kotlin("plugin.spring") version "1.9.21"\n}\n\ngroup = "com.takizuka"\nversion = "0.0.1-SNAPSHOT"\n\njava {\n    sourceCompatibility = JavaVersion.VERSION_21\n}\n\nrepositories {\n    mavenCentral()\n}\n\nextra["springCloudVersion"] = "2023.0.0"\n\n+ tasks.assemble {\n+     dependsOn("thinJar", "shadowJar")\n+ }\n+ \n+ tasks.withType<ShadowJar> {\n+     mustRunAfter("thinJar")\n+     archiveClassifier = "aws"\n+     manifest.inheritFrom(project.tasks.thinJar.get().manifest)\n+     // Required for Spring\n+     mergeServiceFiles()\n+     append("META-INF/spring.handlers")\n+     append("META-INF/spring.schemas")\n+     append("META-INF/spring.tooling")\n+     append("META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports")\n+     append("META-INF/spring/org.springframework.boot.actuate.autoconfigure.web.ManagementContextConfiguration.imports")\n+     transform(PropertiesFileTransformer::class.java) {\n+         paths = listOf("META-INF/spring.factories")\n+         mergeStrategy = "append"\n+     }\n+ }\n+\ndependencies {\n    implementation("org.springframework.boot:spring-boot-starter")\n    implementation("org.jetbrains.kotlin:kotlin-reflect")\n    implementation("org.springframework.cloud:spring-cloud-function-context")\n    implementation("org.springframework.cloud:spring-cloud-function-adapter-aws")\n    testImplementation("org.springframework.boot:spring-boot-starter-test")\n}\n\ndependencyManagement {\n    imports {\n        mavenBom("org.springframework.cloud:spring-cloud-dependencies:${property("springCloudVersion")}")\n    }\n}\n\ntasks.withType<KotlinCompile> {\n    kotlinOptions {\n        freeCompilerArgs += "-Xjsr305=strict"\n        jvmTarget = "21"\n    }\n}\n\ntasks.withType<Test> {\n    useJUnitPlatform()\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew assemble")," \u3092\u5b9f\u884c\u3059\u308b\u3068JAR\u30d5\u30a1\u30a4\u30eb\u304c\u4f5c\u6210\u3055\u308c\u308b\u3002"),(0,a.kt)("p",null,"\u4e0a\u8a18\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle.kts")," \u306e\u4fee\u6b63\u3092\u3057\u3066\u304b\u3089 ",(0,a.kt)("inlineCode",{parentName:"p"},"./gradlew assemble")," \u3092\u5b9f\u884c\u3057\u305f\u5834\u5408\u3001 ",(0,a.kt)("inlineCode",{parentName:"p"},"build/libs/")," \u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"api-gateway-lambda-spring-0.0.1-SNAPSHOT-aws.jar")," \u304c\u4f5c\u6210\u3055\u308c\u308b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2024-01-17 0.15.05.png",src:t(2557).Z,width:"1918",height:"1130"})))}u.isMDXComponent=!0},2557:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8 2024-01-17 0.15.05-824b6046e9157f626484d17968288f41.png"}}]);