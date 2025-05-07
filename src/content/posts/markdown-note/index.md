---
title: スニペットを作ってNote記法を書く
published: 2025-05-08
description: "markdown.json snippet"
image: ""
tags: [Markdown, Snippet, Admonition]
category: "Practice"
draft: false
---

vscode 拡張の Markdown pdf では数式も表示されないし、Note 記法も使えない。プレビューとの乖離が大きすぎる。

Markdown Preview Enhanced を使えばいいと思ったが、なんか高機能すぎるし Note 記法がいまいち
ピンとこなかったので自分で CSS を抜き取って使おうとおもった。

## 1. `github-markdown.css`の用意

これはウェブ上に広がっている奴のように css ファイルを拾ってそれを整形する。

ここで注意なのが、`.markdown-`を空文字で置換するのは`body`タグのみで、それ以外のところは慎重にやらないといけない。
`.markdown-alert`とかなってるやつも置換してしまうとクラスを当てて Note 記法を実装しているやつを消してしまう。

そのためここでは`markdown-`で置換しておく。

## 2. Note 記法の html ソースの確認

GFM(Github Flavored Markdown)での md->html 変換を確認する。ここでは`Markdown All in One`の html 変換機能を使って正しいレンダリングの結果を把握した。なんでか`Markdown All in One`の方はきれいに変換できるんだよ。(そのまま pdf にしてくれればいいのに)

そのレンダリングの結果のソースコードを引っ張ってきてクラスとかが整形済みの css と同じかを確認する。

## 3. css の配置とスニペットの作成

css を任意の(ローカルの方がいいかな)に置き、Markdown pdf の出力時の css 設定をこれにする。
そしてさっき確認した html ソースを markdown.json のスニペットに書き込み、いつでも呼び出せるようにした。

## 4. 呼び出し方

`caution...`とかで入力して`ctrl` + `space`をおしてスニペットを確認してからタブで補完。
p タグで囲まれた部分に書き込み、完成

## 5. あとがき

いまはこれでいいの！！
