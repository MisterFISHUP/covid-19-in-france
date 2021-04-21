const currentYear = new Date().getFullYear();
const startYear = 2021;
const siteYear = startYear == currentYear ? String(startYear) : `${startYear} - ${currentYear}`;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "法國 COVID-19 日誌",
  tagline: "一本記錄法國新冠肺炎 (COVID-19) 的日誌",
  url: "https://covid-fr.misterfishup.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "MisterFISHUP",
  projectName: "covid-19-in-france",
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant", "zh-Hans", "en"],
    localeConfigs: {
      "zh-Hant": {
        label: "正體中文",
      },
      "zh-Hans": {
        label: "简体中文",
      },
      en: {
        label: "English",
      },
    },
  },
  themeConfig: {
    hideableSidebar: true,
    // algolia: {
    //   apiKey: '',
    //   indexName: '',
    // },
    image: "img/social_preview.png", // Relative to "static" directory
    googleAnalytics: {
      trackingID: "UA-173562145-3",
      anonymizeIP: true,
    },
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
      switchConfig: {
        darkIcon: "🌙",
      },
    },
    // announcementBar: {
    //   id: 'welcom_to_new_site', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    // },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      hideOnScroll: true,
      // style: 'primary', // or 'dark'
      title: "法國 COVID-19 日誌",
      logo: {
        alt: "Website Logo",
        src: "img/logo.svg",
        srcDark: "img/logo-dark.svg",
      },
      items: [
        {
          to: "digest",
          label: "日誌序",
          activeBaseRegex: "digest/?$",
        },
        {
          type: "doc",
          docId: "2021/intro",
          label: "2021 年",
        },
        {
          type: "doc",
          docId: "2020/december/31",
          label: "2020 年",
        },
        {
          to: "charts",
          label: "數據圖表",
        },
        {
          type: "doc",
          docId: "sources",
          label: "附錄",
        },
        {
          to: "about",
          label: "關於本站",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        // { to: 'blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://github.com/MisterFISHUP/covid-19-in-france',
        //   // label: 'GitHub',
        //   position: 'right',
        //   className: 'header-github-link',
        //   'aria-label': 'GitHub repository',
        // },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          items: [
            {
              html: `
                <img src="/img/logo.svg" alt="法國 COVID-19 日誌 | Daily Digest - COVID-19 IN FRANCE" title="法國 COVID-19 日誌 | Daily Digest - COVID-19 IN FRANCE" class="footer-logo"/>
              `,
            },
          ],
        },
        {
          title: "日誌",
          items: [
            {
              label: "2021 年",
              to: "digest/2021/",
            },
            {
              label: "2020 年",
              to: "digest/2020/december/31",
            },
          ],
        },
        {
          title: "法國疫情數據",
          items: [
            {
              label: "官方數據儀表板",
              href: "https://www.gouvernement.fr/info-coronavirus/carte-et-donnees",
            },
            {
              label: "官方數據儀表板 - 疫情總覽",
              href: "https://dashboard.covid19.data.gouv.fr/vue-d-ensemble",
            },
            {
              label: "官方數據庫",
              href: "https://www.data.gouv.fr/fr/pages/donnees-coronavirus",
            },
            {
              label: "法國衛生部 - 疫苗數據",
              href:
                "https://solidarites-sante.gouv.fr/grands-dossiers/vaccin-covid-19/article/le-tableau-de-bord-de-la-vaccination",
            },
            {
              label: "法國公共衛生局 SpF",
              href:
                "https://www.santepubliquefrance.fr/dossiers/coronavirus-covid-19/coronavirus-chiffres-cles-et-evolution-de-la-covid-19-en-france-et-dans-le-monde",
            },
          ],
        },
        {
          title: "其他",
          items: [
            {
              label: "聯絡資訊",
              to: "about#contact",
            },
            {
              label: "支持本站 🍰",
              href: "https://www.buymeacoffee.com/misterfishup",
            },
            {
              label: "GitHub",
              href: "https://github.com/MisterFISHUP/covid-19-in-france",
            },
          ],
        },
      ],
      copyright: `Copyright © ${siteYear} 法國 COVID-19 日誌`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "digest",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
};
