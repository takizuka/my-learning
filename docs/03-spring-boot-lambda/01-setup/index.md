# アプリ作成

## Spring Initializrでプロジェクトの雛形を作成

[spring initializr](https://start.spring.io/#!type=gradle-project-kotlin&language=kotlin&platformVersion=3.2.1&packaging=jar&jvmVersion=21&groupId=com.takizuka&artifactId=api-gateway-lambda-spring&name=api-gateway-lambda-spring&description=Demo%20project%20for%20Spring%20Cloud%20Function&packageName=com.takizuka.api-gateway-lambda-spring&dependencies=cloud-function)

## モデルの作成

APIのパラメータに合わせてモデルを定義する。

```kotlin title=model/input.kt
package org.debugroom.sampleawslambda.model

@JvmRecord
data class Input(val test: String)
```

## イベントハンドラの作成

イベントハンドラの定義方法は複数ある。詳細は下記を参照。

[spring-cloud-function/spring-cloud-function-samples/function-sample-aws at main · spring-cloud/spring-cloud-function (github.com)](https://github.com/spring-cloud/spring-cloud-function/tree/main/spring-cloud-function-samples/function-sample-aws)

このサンプルプロジェクトでは以下の様に定義した。

まず、関数を定義が含まれるパッケージのパスを `application.properties` に定義する。

```text title=resources/application.properties
spring.cloud.function.scan.packages=com.takizuka.apigatewaylambdaspring.functions
```

`test` というフィールドを持つ `Input` というモデルを受け取り、 `Completed!` という文字列を返す。

```kotlin title=functions/ApiGatewayEventFunction.kt
package com.takizuka.apigatewaylambdaspring.functions

import com.takizuka.apigatewaylambdaspring.model.Input
import org.slf4j.LoggerFactory.getLogger
import org.springframework.messaging.Message
import org.springframework.messaging.support.MessageBuilder
import java.util.function.Function

class ApiGatewayEventFunction : Function<Message<Input>, Message<String>> {
    companion object {
        @Suppress("JAVA_CLASS_ON_COMPANION")
        @JvmStatic
        private val logger = getLogger(javaClass.enclosingClass)
    }

    override fun apply(inputMessage: Message<Input>): Message<String> {
        logger.info("Message : " + inputMessage.payload.test)
        return MessageBuilder
            .withPayload("Completed!")
            .build()
    }
}
```

## 動作確認

### ローカルでの動作確認

`spring-boot-starter` モジュールと `spring-cloud-function-web` モジュールを追加すると、アプリがSpring Boot Webアプリケーションとして動作するようになり、関数が作成した関数がHTTPのエンドポイントとしてエクスポートされる。 

```diff title=build.gradle.kts
dependencies {
+ 	implementation("org.springframework.boot:spring-boot-starter")
 	implementation("org.springframework.boot:spring-boot-starter-web")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
+ 	implementation("org.springframework.cloud:spring-cloud-function-web")
	implementation("org.springframework.cloud:spring-cloud-function-context")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
}
```

`./gradlew bootRun` でローカルで動作確認することができる。

```shell
$ curl -XPOST http://localhost:8080/apply -d '{"test":"hello"}' -H "Content-Type: application/json"
Completed!%
```

### JARファイルの作成

AWS Lambdaにアップロードするためには、実行に必要な全ての依存関係を一つのJARファイルにまとめる必要がある。

下記の様に `build.gradle.kts` を修正すると、`thin-lancher` プラグインによって必要な依存関係のみを抽出し、`shadowJar` プラグインによって依存関係を一つのJARファイルにまとめることができる。

```diff title=build.gradle.kts
+ import com.github.jengelman.gradle.plugins.shadow.tasks.ShadowJar
+ import com.github.jengelman.gradle.plugins.shadow.transformers.PropertiesFileTransformer
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
	id("org.springframework.boot") version "3.2.1"
	id("io.spring.dependency-management") version "1.1.4"
+     id("com.github.johnrengelman.shadow") version "8.1.1"
+     id("org.springframework.boot.experimental.thin-launcher") version "1.0.31.RELEASE"
	kotlin("jvm") version "1.9.21"
	kotlin("plugin.spring") version "1.9.21"
}

group = "com.takizuka"
version = "0.0.1-SNAPSHOT"

java {
	sourceCompatibility = JavaVersion.VERSION_21
}

repositories {
	mavenCentral()
}

extra["springCloudVersion"] = "2023.0.0"

+ tasks.assemble {
+     dependsOn("thinJar", "shadowJar")
+ }
+ 
+ tasks.withType<ShadowJar> {
+     mustRunAfter("thinJar")
+     archiveClassifier = "aws"
+     manifest.inheritFrom(project.tasks.thinJar.get().manifest)
+     // Required for Spring
+     mergeServiceFiles()
+     append("META-INF/spring.handlers")
+     append("META-INF/spring.schemas")
+     append("META-INF/spring.tooling")
+     append("META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports")
+     append("META-INF/spring/org.springframework.boot.actuate.autoconfigure.web.ManagementContextConfiguration.imports")
+     transform(PropertiesFileTransformer::class.java) {
+         paths = listOf("META-INF/spring.factories")
+         mergeStrategy = "append"
+     }
+ }
+
dependencies {
	implementation("org.springframework.boot:spring-boot-starter")
	implementation("org.jetbrains.kotlin:kotlin-reflect")
	implementation("org.springframework.cloud:spring-cloud-function-context")
	implementation("org.springframework.cloud:spring-cloud-function-adapter-aws")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
}

dependencyManagement {
	imports {
		mavenBom("org.springframework.cloud:spring-cloud-dependencies:${property("springCloudVersion")}")
	}
}

tasks.withType<KotlinCompile> {
	kotlinOptions {
		freeCompilerArgs += "-Xjsr305=strict"
		jvmTarget = "21"
	}
}

tasks.withType<Test> {
	useJUnitPlatform()
}
```

`./gradlew assemble` を実行するとJARファイルが作成される。

上記の `build.gradle.kts` の修正をしてから `./gradlew assemble` を実行した場合、 `build/libs/` ディレクトリに `api-gateway-lambda-spring-0.0.1-SNAPSHOT-aws.jar` が作成される。

![スクリーンショット 2024-01-17 0.15.05.png](<img/スクリーンショット 2024-01-17 0.15.05.png>)