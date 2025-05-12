---
title: markdown exntended
published: 2025-05-13
description: " pdf with markdown extended"
image: ""
tags: [Markdown, Admonition, VS Code]
category: "Notion"
draft: false
lang: ""
---

`VS code`において md から pdf に変換する方法には

- `.md` => `.html` => `.pdf`

- `.md` => `.pdf`

の二つの手順がある.前者は Markdown All in One の機能を用いて html に変換し Print で**pdf に印刷**を選択すればいい.
後者は Markdown PDF を用いればいい.

しかし,admonition (Note 記法)のスタイルを維持したままの pdf 化が Markdown PDF ではできなかった.

!!! tip tip

    こっちはMkDocsとかのやつ？
    > [!note]
    こっちは GFM

## 結論 `Markdown Extended`を使う

admoniton を維持したまま pdf にしたい場合,html に変換する時点で admoniton の解析と css が付与されていれば残りは単純に pdf 化すればいい.

1. **Markdown Extended をインストール**

   この拡張機能は MkDocs inspired な Admonition やテーブル操作,export が可能.

2. そのままでは使えなかったので一旦ユーザディレクトリ配下の`.vscode/extention/<MDExtended>`ディレクトリに移動し,npm install を実行.

3. それでもダメだったので node_module ディレクトリを削除し,npm install で依存関係の再インストールを行った.

4. 完成!

npm で puppeteer やら,markdown-it をインストールしてコマンドラインから pdf にするという手順もあったがなるはやで vscode 上で終わらせたかったからこの手順を選んだ.

(追記) 数式も$囲み, コードブロック数式どちらも行けた.
