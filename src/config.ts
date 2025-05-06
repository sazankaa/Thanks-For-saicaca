import type {
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "湊川のお部屋",
	subtitle: "thanks for saicaca",
	lang: "ja", // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
	themeColor: {
		hue: 145, // トップバナーのカラーテーマ変更部分のデフォルト値
		fixed: false, // 常に表示するか否か
	},
	banner: {
		enable: true, //trueならトップバナーの下に画像を表示可
		src: "assets/images/header.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
		position: "center", // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
		credit: {
			enable: false, // trueで画像の注釈を追加可能
			text: "this is demo-banner.png", // Credit text to be displayed
			url: "https://baseball.yahoo.co.jp/npb", // (Optional) URL link to the original artwork or artist's page
		},
	},
	toc: {
		enable: true, // マークダウン記事の右側に目次の表示
		depth: 2, // 記事の目次の深さの設定 どのレベルの見出しまでだすか
	},
	favicon: [
		// Leave this array empty to use the default favicon
		// {
		//   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
		//   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
		//   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/sazankaa", // Internal links should not include the base path, as it is automatically added
			external: true, // リンクであることを示すアイコンを表示するか選択
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/May.jpg",
	// avatar: "assets/images/kaho.jpg",
	// avatar: "assets/images/demo-avatar.png", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Minatogawa", //プロフィール部分のあれこれ
	bio: "ペットボトルの芯で筋肉痛。",
	links: [
		{
			name: "Discord",
			icon: "fa6-brands:discord", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://discord.com/channels/@me",
		},
		// {
		// 	name: "Steam",
		// 	icon: "fa6-brands:steam",
		// 	url: "https://store.steampowered.com",
		// },
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/sazankaa",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};
