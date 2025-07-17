import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Dongkey.tech',
  tagline: 'so cool',
  favicon: 'img/D_logo_favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dongkey.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DongKey777', // Usually your GitHub org/user name.
  projectName: 'dongkey.tech', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },

        docs: false,
        blog: false,
        
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'about',
        path: './docs/about',
        routeBasePath: 'about',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'story',
        path: './docs/story',
        routeBasePath: 'story',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'development',
        path: './docs/development',
        routeBasePath: 'development',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'projects',
        path: './docs/projects',
        routeBasePath: 'projects',
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/D_logo.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'dongkey\'s tech Logo',
        src: 'img/D_logo.svg',
      },
      items: [
        {to: '/about', label: 'About', position: 'left'},
        {to: '/story', label: 'Story', position: 'left'},
        {to: '/development', label: 'Development', position: 'left'},
        {to: '/projects', label: 'Projects', position: 'left'},
        {
          href: 'https://github.com/DongKey777/dongkey.tech',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          items: [
            {
              html: `
                <div style="text-align: center;">
                  <a href="https://github.com/DongKey777" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <span style="margin: 0 20px;">|</span>
                  <a href="https://linkedin.com/in/sample-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <span style="margin: 0 20px;">|</span>
                  <a href="mailto:sample@example.com">Email</a>
                </div>
              `,
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash','java','properties']
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
