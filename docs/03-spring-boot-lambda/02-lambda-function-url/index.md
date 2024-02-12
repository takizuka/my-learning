# AWS Labmdaの関数URLからアプリを動かす

## Lambda関数の作成

作成したアプリをAWS Lambdaで動かすために、AWS Lambdaの関数を作成する。

アプリを呼び出すためのURLを簡単に作成するために、ここではLambdaの関数URL機能を利用する。

![Alt text](<img/スクリーンショット 2024-01-17 1.05.34.png>)

![Alt text](<img/スクリーンショット 2024-01-17 1.05.47.png>)

Lambda関数の作成が完了したら、JARファイルをアップロードする。

JARファイルのサイズが10MBを超える場合は、S3にアップロードしてからLambda関数にアップロードする。

![Alt text](<img/スクリーンショット 2024-01-17 1.10.38.png>)

関数URLのアドレスは、関数の概要のメニューの右下に表示されている。

![Alt text](<img/スクリーンショット 2024-01-17 1.12.50.png>)

このURLを使ってアプリを呼び出すことができる。

```bash
$ curl -XPOST https://pxcrkdqugujgeyfht4dpd4fc4e0jjrea.lambda-url.ap-northeast-1.on.aws/ -d '{"test":"hello"}' -H "Content-Type: application/json"
"Completed!"%
```
