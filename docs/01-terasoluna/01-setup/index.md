---
id: terasoluna-setup
title: ツールのインストール
---

# ツールのインストール

## Homebrewで環境構築

### OpenJDKのインストールと設定

```bash
$ brew install openjdk
## インストールしただけではjavaコマンドが使えないので、シンボリックリンクを作成する
$ java --version
The operation couldn’t be completed. Unable to locate a Java Runtime.
Please visit http://www.java.com for information on installing Java.
$ sudo ln -sfn $(brew --prefix)/opt/openjdk/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk.jdk
## javaコマンドが使えるようになる
$ java --version
openjdk 21 2023-09-19
OpenJDK Runtime Environment Homebrew (build 21)
OpenJDK 64-Bit Server VM Homebrew (build 21, mixed mode, sharing)
```

:::caution クライアント証明書の設定

社内環境などでクライアント証明書を設定する必要がある場合は、以下の手順でJavaランタイムを変更してください。

```bash
### mvn --versionで表示されるJavaのランタイムのパスに移動
$ cd /usr/local/Cellar/openjdk/21/libexec/openjdk.jdk/Contents/Home
### Zscalerの証明書を追加する
$ ./bin/keytool -import -alias Zscaler -file ~/.cert/ca_bundle.cer -keystore ./lib/security/cacerts
...省略...
この証明書を信頼しますか。 [いいえ]:  はい
証明書がキーストアに追加されました
```

:::

### Mavenのインストール

```bash
$ brew install mvn
$ mvn --version
Apache Maven 3.9.5 (57804ffe001d7215b5e7bcb531cf83df38f93546)
Maven home: /usr/local/Cellar/maven/3.9.5/libexec
Java version: 21, vendor: Homebrew, runtime: /usr/local/Cellar/openjdk/21/libexec/openjdk.jdk/Contents/Home
Default locale: ja_JP, platform encoding: UTF-8
OS name: "mac os x", version: "13.6", arch: "x86_64", family: "mac"
```

### Tomcatのインストール

```bash
$ brew install tomcat
==> Downloading https://formulae.brew.sh/api/formula.jws.json
#################################################################################################################################################################################################################### 100.0%
==> Downloading https://formulae.brew.sh/api/cask.jws.json
#################################################################################################################################################################################################################### 100.0%
==> Downloading https://ghcr.io/v2/homebrew/core/tomcat/manifests/10.1.14
#################################################################################################################################################################################################################### 100.0%
==> Fetching tomcat
==> Downloading https://ghcr.io/v2/homebrew/core/tomcat/blobs/sha256:be586e05543d68d979c05d26ebb8932540bb270f81ece876ea90a61b333fdb71
#################################################################################################################################################################################################################### 100.0%
==> Pouring tomcat--10.1.14.all.bottle.tar.gz
==> Caveats
Configuration files: /usr/local/etc/tomcat

To start tomcat now and restart at login:
  brew services start tomcat
Or, if you don't want/need a background service you can just run:
  /usr/local/opt/tomcat/bin/catalina run
```

### Spring Tool Suiteのインストール

```bash
$ brew install springtoolsuite
Running `brew update --auto-update`...
==> Auto-updated Homebrew!
==> Updated Homebrew from d3fd36da4 to b085889f5.
No changes to formulae or casks.

==> Downloading https://download.springsource.com/release/STS4/4.20.0.RELEASE/dist/e4.29/spring-tool-suite-4-4.20.0.RELEASE-e4.29.0-macosx.cocoa.x86_64.dmg
#################################################################################################################################################################################################################### 100.0%
==> Installing Cask springtoolsuite
==> Moving App 'SpringToolSuite4.app' to '/Applications/SpringToolSuite4.app'
🍺  springtoolsuite was successfully installed!
```

## asdfで環境構築

```bash
brew install asdf
echo ". /opt/homebrew/opt/asdf/libexec/asdf.sh" >> ~/.zshrc
source ~/.zshrc

asdf plugin add java
asdf plugin add maven
asdf plugin add tomcatcd
asdf install java openjdk-21
asdf install maven 3.9.5
asdf install tomcat 10.1.14

# 以下はtodoアプリのディレクトリ内で実行する
asdf local java openjdk-21
asdf local maven 3.9.5
asdf local tomcat 10.1.14
```
