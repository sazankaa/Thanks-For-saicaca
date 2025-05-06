---
title: MarkDown チートシート
published: 2024-05-01
updated: 2024-11-29
description: "Read more about Markdown features in Fuwari"
image: ""
tags: [Demo, Example, Markdown]
category: StartUp
draft: false
---

## GitHub r リポジトリカード

GitHub リポジトリにリンクする動的カードの追加が可能, GitHub API を使用してデータを取得している.

::github{repo="tohu-sand/tohu-sand-profile"}

書きかた `::github{repo="<owner>/<repo>"}`.

```markdown
::github{repo="saicaca/fuwari"}
```

## Note 記法

次の 5 つをサポート: `note` `tip` `important` `warning` `caution`

:::note
ざっと目を通すときでもユーザーが考慮すべき情報を強調表示します。
:::

:::tip
ヒントとなることをかけばええんちゃ
:::

:::important
重要なことを伝える
:::

:::warning
注意を呼びかける
:::

:::caution
危険を知らせる
:::

### 構文

```markdown
:::note
Highlights information that users should take into account, even when skimming.
:::

:::tip
Optional information to help a user be more successful.
:::
```

### タイトルの変更

Note 記法のタイトルは変更できます。

:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::

```markdown
:::note[MY CUSTOM TITLE]
This is a note with a custom title.
:::
```

### GitHub 構文

> [!TIP] > [GitHub 構文](https://github.com/orgs/community/discussions/16925) もサポートしてます

```
> [!NOTE]
> The GitHub syntax is also supported.

> [!TIP]
> The GitHub syntax is also supported.
```
