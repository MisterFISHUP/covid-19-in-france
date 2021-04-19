import React from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.scss";
import { monthEnLower } from "@site/src/scripts/utils";
import { digestLatestDate2021 } from "@site/src/scripts/dateVariables";

const features = [
  {
    title: translate({ id: "homepage.features.officialStatistics.title", message: "法國官方數據" }),
    imageUrl: "img/features/covid_data.svg",
    description: translate({
      id: "homepage.features.officialStatistics.description",
      message:
        "提供每日官方數據，包含確診數、死亡數、疫苗接種數等，以及各項指標數據如有效傳染數、陽性確診率、重症病房佔有率等等",
    }),
  },
  {
    title: translate({ id: "homepage.features.news.title", message: "疫情新聞整理" }),
    imageUrl: "img/features/newspaper.svg",
    description: translate({
      id: "homepage.features.news.description",
      message: "條列式扼要呈現每日疫情媒體報導、提供相關新聞報導或影片連結",
    }),
  },
  {
    title: translate({ id: "homepage.features.pressConference.title", message: "新冠肺炎記者會重點" }),
    imageUrl: "img/features/press_conference.svg",
    description: translate({
      id: "homepage.features.pressConference.description",
      message: "提供記者會重點整理、總統談話摘要、封城或宵禁政策措施整理、疫情新限制措施整理",
    }),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Banner() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Link
          to={`/digest/2021/${monthEnLower(digestLatestDate2021.m)}/${digestLatestDate2021.d}`}
          title={translate({ id: "homepage.hero.logoLink.title", message: "點我直接閱讀最新一篇日誌" })}
        >
          <img className={styles.heroLogo} src={useBaseUrl("/img/logo.svg")} alt="Website Logo" />
        </Link>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <Translate id="homepage.hero.title">法國 COVID-19 日誌</Translate>
          </h1>
          <p
            className={styles.heroTagline}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.tagline",
                message: "一本記錄<b>法國新冠肺炎疫情</b>的日誌",
                description: "Homepage hero tagline, can contain simple html tags",
              }),
            }}
          />
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--outline button--primary button--lg", styles.startReading)}
              to={useBaseUrl("digest")}
            >
              <Translate id="homepage.hero.button.startReading">開始閱讀</Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const title = translate({ id: "homepage.title", message: "首頁" });
  const description = translate({
    id: "homepage.description",
    message: "一本記錄法國新冠肺炎 (COVID-19) 的日誌，提供法國每日疫情數據以及新聞重點整理",
  });

  return (
    <Layout title={title} description={description}>
      <Banner />
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <div className="flex-center--wrap">
          <Link
            className={clsx(
              "button button--outline button--primary button--lg margin-bottom--xl  ",
              styles.startReading
            )}
            to={useBaseUrl("digest")}
          >
            <Translate id="homepage.features.button.startReading">開始閱讀</Translate>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
