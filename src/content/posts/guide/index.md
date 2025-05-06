---
title: フロントマターの説明等
published: 2024-04-01
description: "How to use this blog template."
image: "./cover.jpeg"
tags: ["Blogging", "Customization"]
category: StartUp
draft: false
---

> トップ画像のリンク: [Source](<https://image.civitai.com/xG1nkqKTMzGDvpLrqFT7WA/208fc754-890d-4adb-9753-2c963332675d/width=2048/01651-1456859105-(colour_1.5),girl,_Blue,yellow,green,cyan,purple,red,pink,_best,8k,UHD,masterpiece,male%20focus,%201boy,gloves,%20ponytail,%20long%20hair,.jpeg>)

このブログのテンプレートは [Astro](https://astro.build/)で作られています。
StartUp カテゴリに知りたい内容がない場合は[Astro Docs](https://docs.astro.build/)を参照されたし。

## 投稿のフロントマター

```yaml
---
title: My First Blog Post
published: 2023-09-09
description: This is the first post of my new Astro blog.
image: ./cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

| Attribute     | Description          |
| ------------- | -------------------- |
| `title`       | 投稿のタイトル       |
| `published`   | 投稿日               |
| `description` | 概要                 |
| `image`       | 見出し画像へのリンク |
| `tags`        | 投稿のタグ           |
| `category`    | 投稿のカテゴリ       |
| `draft`       | 公開非公開の設定     |

## 投稿記事の置き場

投稿は `src/content/posts/` ディレクトリに置かなきゃいけない. 画像等を含めたい場合は
サブディレクトリを作成する。

```sh
src/content/posts/
├── post-1.md #https://<User>.github.io/<repos>/posts/post-1
└── post-2/
    ├── cover.png
    └── index.md # ##https://<User>.github.io/<repos>/posts/post-2
```
