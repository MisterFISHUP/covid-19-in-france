---
title: 資料來源
description: 介紹這本法國 COVID-19 日誌內容的資料來源
---

import { DigestLinkButton } from "@site/src/scripts/components/DigestLinkButton";

如同[日誌序](/digest)所提到，一篇日誌一般會包含**法國官方數據**以及**本日新聞重點**兩部份，並且一週會有一篇日誌包含**一週疫情報告重點**。本頁面將介紹這本**法國 COVID-19 日誌**內容的資料來源。

## 法國官方數據 {#official-statistics}

此部份的資料來源為：

1. [法國衛生部 - 疫苗數據][vac]
2. [官方數據儀表板 - 疫情總覽][vue]
3. [官方數據儀表板 - 疫情指標][indic]
4. 法國公共衛生局 (Santé publique France, Spf) 的 [COVID-19 : bilan et chiffres clés en France][spf]

第一點的頁面有提供原始數據下載，而前三點的原始數據也可在[官方數據庫][ofcl]找到（頁面分別為：[疫苗數據][ofcl_vac]、[疫情總覽][ofcl_vue]、[疫情指標][ofcl_indic]）。

[vac]: https://solidarites-sante.gouv.fr/grands-dossiers/vaccin-covid-19/article/le-tableau-de-bord-de-la-vaccination "法國衛生部 - 疫苗數據"
[vue]: https://dashboard.covid19.data.gouv.fr/vue-d-ensemble "官方數據儀表板 - 疫情總覽"
[indic]: https://dashboard.covid19.data.gouv.fr/suivi-indicateurs "官方數據儀表板 - 疫情指標"
[spf]: https://www.santepubliquefrance.fr/dossiers/coronavirus-covid-19/coronavirus-chiffres-cles-et-evolution-de-la-covid-19-en-france-et-dans-le-monde "法國公共衛生局 (Santé publique France, Spf)"
[ofcl]: https://www.data.gouv.fr/fr/pages/donnees-coronavirus "官方數據庫"
[ofcl_vac]: https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19-1/ "官方數據庫 - 疫苗數據"
[ofcl_vue]: https://www.data.gouv.fr/en/datasets/donnees-relatives-a-lepidemie-de-covid-19-en-france-vue-densemble/ "官方數據庫 - 疫情總覽"
[ofcl_indic]: https://www.data.gouv.fr/fr/datasets/indicateurs-de-suivi-de-lepidemie-de-covid-19/ "官方數據庫 - 疫情指標"

:::caution 注意
資料來源 [1][vac] 與 [3][indic] 在更新數據時，歷史數據有時也會改變。
:::

除了 2020 年 3 月 1 日也就是第一篇日誌不含法國官方數據之外，其後的每一篇日誌都有。以下介紹日誌中**法國官方數據**內的資料來源。

### 累積確診數 {#cumulative-cases}

| 項目             |   來源   | 有該資料的日期                              |
| ---------------- | :------: | ------------------------------------------- |
| 總累計           | [2][vue] | 自 2020/3/2 起                              |
| 養老院/護理院    | [2][vue] | 自 2020/4/12 起至 2021/2/19，除了 2020/4/21 |
| 新增 RT-PCR 確診 | [4][spf] | 自 2020/11/17 起至 2020/12/7                |
| 新增抗原檢測確診 | [4][spf] | 自 2020/11/18 起至 2020/12/7                |

註：日誌中數據後括號加減數值表示與前一日的數據變化。「養老院/護理院」數據未更新時，括號內會註明**未更新**。

### 累積死亡數 {#cumulative-deaths}

| 項目          |   來源   | 有該資料的日期 |
| ------------- | :------: | -------------- |
| 總累計        | [2][vue] | 自 2020/4/1 起 |
| 醫院          | [2][vue] | 自 2020/3/2 起 |
| 養老院/護理院 | [2][vue] | 自 2020/4/1 起 |

註：日誌中數據後括號加減數值表示與前一日的數據變化。「養老院/護理院」數據未更新時，括號內會註明**未更新**。

### 住院數 {#hospitalisation}

| 項目         |   來源   | 有該資料的日期                  |
| ------------ | :------: | ------------------------------- |
| 當前         | [2][vue] | 自 2020/3/15 起，除了 2020/3/16 |
| 本日入院     | [2][vue] | 自 2020/3/19 起                 |
| 過去七日入院 | [4][spf] | ???，除了 2021/3/19             |

註：日誌中數據後括號加減數值表示與前一日的數據變化。「過去七日入院」數據則會跟**前七日**的數據相比。

### 重症數 {#icu}

| 項目         |   來源   | 有該資料的日期                         |
| ------------ | :------: | -------------------------------------- |
| 當前         | [2][vue] | 自 2020/3/4 起，除了 2020/3/8,13,15,16 |
| 本日重症     | [2][vue] | 自 2020/3/19 起                        |
| 過去七日重症 | [4][spf] | ???，除了 2021/3/19                    |

註：日誌中數據後括號加減數值表示與前一日的數據變化。「過去七日重症」數據則會跟**前七日**的數據相比。

### 累積出院數 {#returning-home}

| 項目   |   來源   | 有該資料的日期               |
| ------ | :------: | ---------------------------- |
| 總累計 | [2][vue] | 2020/3/3 以及自 2020/3/17 起 |

註：日誌中數據後括號加減數值表示與前一日的數據變化。

### 疫苗接種數 {#vaccinations}

| 項目            |   來源   | 有該資料的日期   |
| --------------- | :------: | ---------------- |
| 第 1 劑接種累計 | [1][vac] | 自 2020/12/27 起 |
| 第 2 劑接種累計 | [1][vac] | 自 2021/1/4 起   |

註：日誌中數據後括號加減數值表示與前一日的數據變化。

### 各項指標數據 {#indicators}

| 項目                                         |    來源    | 有該資料的日期           |
| -------------------------------------------- | :--------: | ------------------------ |
| 法國每 10 萬人確診數                         | [3][indic] | 自 2020/3/19 起          |
| 重症病房佔有率                               | [3][indic] | 自 2020/3/18 起          |
| 有效傳染數 (R)                               | [3][indic] | 自 2020/6/1 起           |
| 陽性確診率                                   | [3][indic] | 自 2020/5/19 起          |
| 疫情列為高度脆弱地區                         |  [4][spf]  | ??? 至 2021/2/7          |
| 2020 年 5/9 起（或第一次解封後）群聚感染情況 |  [4][spf]  | ??? 至 2021/1/26         |
| 養老院/長照機構接種至少 1 劑疫苗比例         |  [4][spf]  | 自 2021/2/8 至 2021/3/17 |

## 本日新聞重點 {#news}

此部分的內容整理於 Grace Tseng 在[臉書社團](https://www.facebook.com/groups/279746385504501)（現名：巴黎臺灣同學會）的貼文。原臉書貼文內容為 Grace Tseng 對各大媒體報導的整合 (BFM, Le Parisien, Le Figaro, 20 Minutes, Le Monde, L'Internaute, etc)。

自 2021 年 2 月起多數新聞重點會附上來源連結，讓讀者能輕鬆地查看原始報導文章。

<div className="comment_block">我沒有使用其他來源來交叉比對此部分的內容，故不確保或負責其資訊的正確性，僅對 Grace Tseng 的臉書貼文做整理。若有錯誤還請指正，不勝感激！</div>

## 疫情報告重點（一週一次） {#weekly-epidemiological-report}

此部分的內容來同樣自於 Grace Tseng 的臉書貼文。原臉書貼文內容的資料來源為 Santé publique France 網站上的 **COVID-19 : point épidémiologique hebdomadaire** 文件。日誌內文會附上此文件的下載頁面連結。

<div className="comment_block">我沒有使用其他來源來交叉比對此部分的內容，故不確保或負責其資訊的正確性，僅對 Grace Tseng 的臉書貼文做整理。若有錯誤還請指正，不勝感激！</div>

## 其他 {#others}

有時一篇日誌會有其他上述未提及的部分，例如新冠肺炎記者會或總統演講的摘要、新防疫措施整理等等。一般來說內容同樣是來自對 Grace Tseng 臉書貼文的整理。

<br />
<div className="flex-center--wrap">
  <DigestLinkButton linkType="latest" isButtonOutline={true} buttonText="返回最新一篇日誌" />
  <DigestLinkButton linkType="random" isButtonOutline={false} buttonText="閱讀隨機一篇日誌" />
</div>
