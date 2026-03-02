import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Цитадель Духа',
  tagline: 'Симбиоз веры, кода и технологий будущего',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://shekinah-docusaurus.vercel.app',
  baseUrl: '/',
  organizationName: 'web-arystan',
  projectName: 'citadel-docusaurus',
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
      locales: ['ru'],
  },

  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Ставим плагин в самое начало
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
          editUrl: 'https://github.com/web-arystan/citadel-docusaurus/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/web-arystan/citadel-docusaurus/tree/main/',
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
      logo: { src: 'img/logo.svg' },
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
            { label: 'Shekinah Blog', href: 'https://shekinah-6sz.pages.dev/blog' },
            { label: 'Cloud Services', href: 'https://shekinah-cloud.vercel.app' },
          ],
        },
        {
          title: 'Цифровые Архивы',
          items: [
            { label: 'Analog Bloger', href: 'https://analog-bloger.pages.dev/blog' },
          ],
        },
        {
          title: 'Поддержка',
          items: [
            { label: 'Gemini CLI', href: 'https://geminicli.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Цитадель Духа | Web Arystan. Soli Deo Gloria.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
