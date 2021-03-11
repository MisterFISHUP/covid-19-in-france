/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '法國 COVID-19 日誌',
  tagline: '一本記錄法國新冠肺炎 (Covid-19) 的中文日誌。',
  url: 'https://covid-fr.misterfishup.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Mister FISH UP', // Usually your GitHub org/user name.
  projectName: 'covid-19-in-france', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
    localeConfigs: {
      'zh-Hant': {
        label: '正體中文',
      },
    },
  },
  themeConfig: {
    hideableSidebar: true,
    // algolia: {
    //   apiKey: '',
    //   indexName: '',
    // },
    // image: "", // Relative to your site's "static" directory.
    // googleAnalytics: {
    //   trackingID: 'UA-x-x',
    //   anonymizeIP: false,
    // },
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: '🌙',
      }
    },
    // announcementBar: {
    //   id: 'welcom_to_new_site', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    // },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    navbar: {
      hideOnScroll: true,
      // style: 'primary', // or 'dark'
      title: '法國 COVID-19 日誌',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/undraw_docusaurus_mountain.svg',
      },
      items: [
        {
          to: 'journal/',
          activeBasePath: 'journal',
          label: '日誌',
          position: 'left',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          // label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'journal',
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  plugins: ['docusaurus-plugin-sass'],
};
