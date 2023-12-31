---
id: terasoluna-idea
title: IntelliJ IDEAの設定
---

# IntelliJ IDEAの設定

## Maven設定

`Maven home path` にインストールしたMavenのパスを設定。

![スクリーンショット 2023-10-14 10.13.57.png](./img/スクリーンショット_2023-10-14_10.13.57.png)

## JRE設定

`JRE` にインストールしたJavaのパスを設定。

![スクリーンショット 2023-10-14 10.14.53.png](./img/スクリーンショット_2023-10-14_10.14.53.png)

## Server設定

`Edit Configurations...` から `Tomcat Server` を追加。

![スクリーンショット 2023-10-14 10.15.53.png](./img/スクリーンショット_2023-10-14_10.15.53.png)

![スクリーンショット 2023-10-14 10.16.44.png](./img/スクリーンショット_2023-10-14_10.16.44.png)

- `Application server:` にインストールしたTomcatを設定。
- `URL` に`http://localhost:8080/`を設定。
- `Before launch` の`Build`の次に `Build 'todo:war' artifact` を追加。

![スクリーンショット 2023-10-14 11.23.02.png](./img/スクリーンショット_2023-10-14_11.23.02.png)

`Tomcat Home:` にインストールしたTomcatのパスを設定。

![スクリーンショット 2023-10-14 10.19.10.png](./img/スクリーンショット_2023-10-14_10.19.10.png)

## 実行

`Run` で実行すると、ブラウザが起動してページが表示される。

![スクリーンショット 2023-10-14 10.19.40.png](./img/スクリーンショット_2023-10-14_10.19.40.png)

![Web キャプチャ_14-10-2023_102930_localhost.jpeg](./img/Web%20キャプチャ_14-10-2023_102930_localhost.jpeg)
