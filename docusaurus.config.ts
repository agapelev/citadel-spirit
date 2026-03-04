import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Цитадель Духа',
  tagline: 'Симбиоз веры, кода и технологий будущего',
  favicon: 'https://pub-eb64310187344c16be3fdbb9b74d75dc.r2.dev/img/logo-ms-sock.webp',

  // Меры предосторожности: предупреждать, но не прерывать билд
  onBrokenLinks: 'warn',

  // ⚠️ В v3 ещё работает, но готовим к v4
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  future: {
    v4: true,
  },

  url: 'https://citadel-spirit.pages.dev',
  baseUrl: '/',
  organizationName: 'web-arystan',
  projectName: 'citadel-spirit',

  i18n: {
    defaultLocale: 'ru',
      locales: ['ru'],
  },

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.unshift(require("@tailwindcss/postcss"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/agapelev/citadel-spirit/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/agapelev/citadel-spirit/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
        respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Цитадель Духа',
      logo: { src: 'https://pub-eb64310187344c16be3fdbb9b74d75dc.r2.dev/img/logo-ms-sock.webp' },
      items: [
        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Обучение' },
        { to: '/blog', label: 'Блог Мыслей', position: 'left' },
        { href: 'https://github.com/web-arystan', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Экосистема Shekinah',
          items: [
            { label: 'Shekinah Cloud', href: 'https://shekinah-6sz.pages.dev' },
            { label: 'Shekinah Academy', href: 'https://mission-shekinah.netlify.app' },
            { label: 'Shekinah Blog', href: 'https://shekinah-6sz.pages.dev/blog' },
            { label: 'Analog Bloger', href: 'https://analog-bloger.pages.dev/blog' },
            { label: 'Shekinah Mission', href: 'https://web-shekinah.vercel.app' },
            { label: 'AI Netlify', href: 'https://ai-shekinah.netlify.app' },
            { label: 'Austin Sparks', href: 'https://www.austin-sparks.net/russian/' },
          ],
        },
        {
          title: 'Цифровые Архивы',
          items: [
            { label: 'SaaS Web Arystan', href: 'https://web-mission.vercel.app' },
            { label: 'Next.js Mantine', href: 'https://shekinah-sock.vercel.app' },
            { label: 'Astro Svelte', href: 'https://shekinah-cloud.vercel.app' },
            { label: 'TailwindBlog 2.0', href: 'https://shekinah-blog.vercel.app' },
            { label: 'Astro DocKit', href: 'https://mission-shekinah.vercel.app' },
            { label: 'AI Vercels', href: 'https://ai-lev.vercel.app' },
            { label: 'School of Christ', href: 'https://schoolofchrist.org/history/' },
          ],
        },
        {
          title: 'Поддержка',
          items: [
            { label: 'Gemini CLI', href: 'https://geminicli.com' },
            { label: 'AI Google', href: 'https://ai.google.dev/' },
            { label: 'Gemini Code Assist', href: 'https://console.cloud.google.com/gemini?project=sock-172206' },
            { label: 'Developers Gemini', href: 'https://developers.google.com/gemini-code-assist/auth/auth_success_gemini?hl=ru' },
            { label: 'Developers Cloudflare', href: 'https://welcome.developers.workers.dev/wrangler-oauth-consent-granted' },
            { label: 'Console Cloudflare', href: 'https://dash.cloudflare.com/d236134971b30a4db3c418481c4d7eaa/home/overview' },
            { label: 'Alibaba Cloud', href: 'https://home.console.alibabacloud.com/home/dashboard/ProductAndService' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Цитадель Духа | WDS Web Arystan. Kazakhstan. Слава одному Богу!`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
