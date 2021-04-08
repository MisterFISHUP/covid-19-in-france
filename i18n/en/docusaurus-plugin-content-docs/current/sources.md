---
title: Sources
description: The sources of data used in Daily Digest of COVID-19 IN FRANCE
---

如同[日誌序](/digest)所提到，一篇日誌一般會包含**法國官方數據**以及**本日新聞重點**兩部份，並且一週會有一篇日誌包含**一週疫情報告重點**。本頁面將介紹這本**法國 COVID-19 日誌**內容的資料來源。

## Official Data {#official-data}

The sources are:

1. [法國衛生部 - 疫苗數據][vac]
2. [官方數據儀表板 - 疫情總覽][vue]
3. [官方數據儀表板 - 疫情指標][indic]
4. [COVID-19 : bilan et chiffres clés en France][spf] from the French Public Health Agency (Santé publique France)

第一點頁面有提供原始數據資料下載，而前三點的原始數據資料也可在[官方數據庫][ofcl]找到（頁面分別為：[疫苗數據][ofcl_vac]、[疫情總覽][ofcl_vue]、[疫情指標][ofcl_indic]）。

[vac]: <https://solidarites-sante.gouv.fr/grands-dossiers/vaccin-covid-19/article/le-tableau-de-bord-de-la-vaccination> (法國衛生部 - 疫苗數據)
[vue]: <https://dashboard.covid19.data.gouv.fr/vue-d-ensemble> (官方數據儀表板 - 疫情總覽)
[indic]: <https://dashboard.covid19.data.gouv.fr/suivi-indicateurs> (官方數據儀表板 - 疫情指標)
[spf]: <https://www.santepubliquefrance.fr/dossiers/coronavirus-covid-19/coronavirus-chiffres-cles-et-evolution-de-la-covid-19-en-france-et-dans-le-monde> '法國公共衛生局 (Santé publique France)'

[ofcl]: <https://www.data.gouv.fr/fr/pages/donnees-coronavirus> (官方數據庫)
[ofcl_vac]: <https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19-1/> (官方數據庫 - 疫苗數據)
[ofcl_vue]: <https://www.data.gouv.fr/en/datasets/donnees-relatives-a-lepidemie-de-covid-19-en-france-vue-densemble/> (官方數據庫 - 疫情總覽)
[ofcl_indic]: <https://www.data.gouv.fr/fr/datasets/indicateurs-de-suivi-de-lepidemie-de-covid-19/> (官方數據庫 - 疫情指標)


:::caution
資料來源 [1][vac] 與 [3][indic] 在更新數據時，歷史數據有時也會改變。
:::

除了 2020 年 3 月 1 日也就是第一篇日誌不含法國官方數據之外，其後的每一篇日誌都有。以下介紹日誌中**法國官方數據**內的資料來源。

### Cumulative Confirmed Cases {#cumulative-cases}

Item|Source|Availability
---|:---:|---
Total|[2][vue]|From 2/3/2020/3/2
EHPAD/EMS|[2][vue]|From 12/4/2020/4/12 to 19/2/2021, except for 21/4/2020
New RT-PCR confirmed|[4][spf]|From 17/11/2020 to 7/12/2020
New antigen confirmed|[4][spf]|From 18/11/2020 to 7/12/2020

註：日誌中數據後括號加減數值表示與前一日的數據變化。「養老院/護理院」數據未更新時，括號內會註明**未更新**。

### Cumulative Deaths {#cumulative-deaths}

Item|Source|Availability
---|:---:|---
Total|[2][vue]|From 1/4/2020
Hospital|[2][vue]|From 2/3/2020
EHPAD/EMS|[2][vue]|From 1/4/2020

註：日誌中數據後括號加減數值表示與前一日的數據變化。「養老院/護理院」數據未更新時，括號內會註明**未更新**。

### Hospitalisations {#hospitalisation}

Item|Source|Availability
---|:---:|---
Total|[2][vue]|From 15/3/2020, except for 16/3/2020
In the last 24 hours|[2][vue]|From 19/3/2020
In the last week|[4][spf]|???, except for 19/3/2021 

註：日誌中數據後括號加減數值表示與前一日的數據變化。「過去七日入院」數據則會跟**前七日**的數據相比。

### ICU Admissions {#icu}

Item|Source|Availability
---|:---:|---
Total|[2][vue]|From 4/3/2020, except for 8,13,15,16/3/2020
In the last 24 hours|[2][vue]|From 19/3/2020
In the last week|[4][spf]|???, except for 19/3/2021 

註：日誌中數據後括號加減數值表示與前一日的數據變化。「過去七日重症」數據則會跟**前七日**的數據相比。

### Hospital Discharges {#returning-home}

Item|Source|Availability
---|:---:|---
Total|[2][vue]|3/3/2020, and from 17/3/2020

註：日誌中數據後括號加減數值表示與前一日的數據變化。

### Cumulative Vaccinations {#vaccinations}

Item|Source|Availability
---|:---:|---
First doses|[1][vac]|From 27/12/2020
Second doses|[1][vac]|From 16/1/2021

註：日誌中數據後括號加減數值表示與前一日的數據變化。

### Monitoring Indicators {#indicators}

Item|Source|Availability
---|:---:|---
Incidence rate|[3][indic]|From 19/3/2020
ICU bed occupancy rate|[3][indic]|From 18/3/2020
Effective reproduction number (R)|[3][indic]|From 1/6/2020
RT-PCR positivity rate|[3][indic]|From 19/5/2020
Number of departments in a highly vulnerable situation|[4][spf]|??? to 7/2/2021
Number of clusters under investigation from 9/5/2020|[4][spf]|??? to 26/1/2021
Proportion of residents in EHPAD/long-term care units having received at least one dose of vaccine|[4][spf]|From 8/2/2021 to 17/3/2021