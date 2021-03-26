const currentYear = new Date().getFullYear();
const startYear = 2021;
const siteYear = startYear == currentYear
  ? String(startYear)
  : `${startYear} - ${currentYear}`;

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
  // projectName: 'covid-19-in-france', // Usually your repo name.
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
      hideOnScroll: false, // can't be true if using scroll smooth
      // style: 'primary', // or 'dark'
      title: '法國 COVID-19 日誌',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        // srcDark: 'img/undraw_docusaurus_mountain.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'preface',
          label: '日誌序',
        },
        {
          type: 'doc',
          docId: '2021/introduction',
          label: '2021 年',
        },
        {
          type: 'doc',
          docId: '2020/december/31',
          label: '2020 年',
        },
        {
          type: 'doc',
          docId: 'sources',
          label: '附錄'
        },
        {
          to: 'about',
          label: '關於本站',
          position: 'right',
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://github.com/facebook/docusaurus',
        //   // label: 'GitHub',
        //   position: 'right',
        //   className: 'header-github-link',
        //   'aria-label': 'GitHub repository',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '日誌',
          items: [
            {
              label: '2021 年',
              to: 'journal/2021/introduction',
            },
            {
              label: '2020 年',
              to: 'journal/2020/december/31',
            },
          ],
        },
        {
          title: '法國疫情數據',
          items: [
            {
              label: 'Santé publique France',
              href: 'https://www.santepubliquefrance.fr/dossiers/coronavirus-covid-19/coronavirus-chiffres-cles-et-evolution-de-la-covid-19-en-france-et-dans-le-monde',
            },
            {
              label: 'gouvernement.fr',
              href: 'https://www.gouvernement.fr/info-coronavirus/carte-et-donnees',
            },
            {
              label: '法國衛生部 - 疫苗數據',
              href: 'https://solidarites-sante.gouv.fr/grands-dossiers/vaccin-covid-19/article/le-tableau-de-bord-de-la-vaccination',
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
      copyright: `Copyright © ${siteYear} 法國 COVID-19 日誌`,
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
