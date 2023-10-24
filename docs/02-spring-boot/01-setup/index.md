# 環境構築

## はじめに

terasolunaのチュートリアルにある「TodoアプリケーションREST編」を参考に、
Spring BootとKotlinでTodoアプリケーションを作成した。

実際に作成したプロジェクトは下記のURLから確認できる。

https://github.com/takizuka/spring-boot-tutorial-kotlin

## Javaのインストール

今回は[asdf](https://asdf-vm.com/)を使用してJavaをインストールした。
[kapt](https://kotlinlang.org/docs/kapt.html)プラグインがJava 21で動作しなかったため、Java 20を使用した。

```bash
asdf install java openjdk-20.0.2
# Spring Bootのプロジェクトのディレクトリに移動してから実行する
asdf local java openjdk-20.0.2
```

## プロジェクトの作成

今回はSpring Initializrでプロジェクトを作成した。

今回のプロジェクトで使用したSpring Initializrの設定は下記のURLから確認できる。

https://start.spring.io/#!type=gradle-project-kotlin&language=kotlin&platformVersion=3.1.5&packaging=jar&jvmVersion=21&groupId=com.example&artifactId=tutorial&name=tutorial&description=tutorial%20application%20for%20development%20reference&packageName=com.example.tutorial&dependencies=web,h2,mybatis

## IntelliJ IDEAの設定

`File > Project Structure`を開き、`SDK:`にインストールしたJavaのパスを設定する。

![スクリーンショット_2023-10-25_00.14.28.png](./img/スクリーンショット%202023-10-25%200.14.28.png)

## build.gradle.ktsの設定

今回は下記のライブラリを使用するためにbuild.gradle.ktsに追記した。

- [Jakarta Bean Validation](https://beanvalidation.org)
- [mapstruct](https://mapstruct.org)
- [Mockito-Kotlin](https://github.com/mockito/mockito-kotlin)

Mockito-Kotlinを使用した理由は、kotlinでmockitoの `ArgumentMatcher` の一部機能が動作しなかったためである。

また、当初は [Lombok](https://projectlombok.org) を使用する予定であったが、kotlinのdata classで多くの機能が代用できることがわかったため、Lombokは使用しなかった。

```text title=build.gradle.kts {8,27-28,30-31,34} showLineNumbers
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "3.1.5"
    id("io.spring.dependency-management") version "1.1.3"
    kotlin("jvm") version "1.9.10"
    kotlin("plugin.spring") version "1.8.22"
    kotlin("kapt") version "1.9.10"
}

group = "com.example"
version = "0.0.1-SNAPSHOT"

java {
    sourceCompatibility = JavaVersion.VERSION_17
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.mybatis.spring.boot:mybatis-spring-boot-starter:3.0.2")
    implementation("jakarta.validation:jakarta.validation-api:3.0.2")
    implementation("org.springframework.boot:spring-boot-starter-validation:3.1.5")
    runtimeOnly("com.h2database:h2")
    implementation("org.mapstruct:mapstruct:1.5.5.Final")
    kapt("org.mapstruct:mapstruct-processor:1.5.5.Final")
    testImplementation("org.springframework.boot:spring-boot-starter-test")
    testImplementation("org.mybatis.spring.boot:mybatis-spring-boot-starter-test:3.0.2")
    testImplementation("org.mockito.kotlin:mockito-kotlin:5.1.0")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs += "-Xjsr305=strict"
        jvmTarget = "17"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}
```

### application.ymlの設定

`src/main/resources/` 下にある `application.properties` ファイルを `application.yml` にリネームする。

`application.yml` に下記の設定を追加する。

```yaml title=src/main/resources/application.yml
mybatis:
  configuration:
    map-underscore-to-camel-case: true
```
