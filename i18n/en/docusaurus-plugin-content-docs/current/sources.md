---
title: Sources
description: The sources of data used in this website 'Daily Digest - COVID-19 IN FRANCE'
---

This page presents the sources of data used in the daily digests.

## Official Data {#official-data}

The sources are:

1. [French Ministry of Health - Vaccination Dashboard][vac]
2. [Official Dashboard - Overview][vue]
3. [Official Dashboard - Monitoring Indicators][indic]
4. [COVID-19 : bilan et chiffres clés en France][spf] from the French Public Health Agency (Santé publique France, SpF)

The first point itself provides raw data for download. The raw data for the first three points can also be found in the [Official Database][ofcl] (the links are respectively [Vaccinations][ofcl_vac], [Overview][ofcl_vue], and [Monitoring Indicators][ofcl_indic]).

[vac]: https://solidarites-sante.gouv.fr/grands-dossiers/vaccin-covid-19/article/le-tableau-de-bord-de-la-vaccination "French Ministry of Health - Vaccination Dashboard"
[vue]: https://dashboard.covid19.data.gouv.fr/vue-d-ensemble "Official Dashboard - Overview"
[indic]: https://dashboard.covid19.data.gouv.fr/suivi-indicateurs "Official Dashboard - Monitoring Indicators"
[spf]: https://www.santepubliquefrance.fr/dossiers/coronavirus-covid-19/coronavirus-chiffres-cles-et-evolution-de-la-covid-19-en-france-et-dans-le-monde "French Public Health Agency (Santé publique France, SpF)"
[ofcl]: https://www.data.gouv.fr/fr/pages/donnees-coronavirus "Official Database"
[ofcl_vac]: https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19-1/ "Official Database - Vaccinations"
[ofcl_vue]: https://www.data.gouv.fr/en/datasets/donnees-relatives-a-lepidemie-de-covid-19-en-france-vue-densemble/ "Official Database - Overview"
[ofcl_indic]: https://www.data.gouv.fr/fr/datasets/indicateurs-de-suivi-de-lepidemie-de-covid-19/ "Official Database - Monitoring Indicators"

:::caution
The historical data in sources [1][vac] and [3][indic] sometimes change when the data is updated.
:::

All daily digests, except for the first one on 1/3/2020, contain the section **Official Data**. The sources of the data are detailed below.

### Cumulative Confirmed Cases {#cumulative-cases}

| Item                  |  Source  | Availability                                           |
| --------------------- | :------: | ------------------------------------------------------ |
| Total                 | [2][vue] | From 2/3/2020/3/2                                      |
| EHPAD/EMS             | [2][vue] | From 12/4/2020/4/12 to 19/2/2021, except for 21/4/2020 |
| New RT-PCR confirmed  | [4][spf] | From 17/11/2020 to 7/12/2020                           |
| New antigen confirmed | [4][spf] | From 18/11/2020 to 7/12/2020                           |

Note: Figures in brackets with a plus or minus sign indicate the change from the previous day. For _EHPAD/EMS_, a **no update** hint will be added when there is no update.

### Cumulative Deaths {#cumulative-deaths}

| Item      |  Source  | Availability  |
| --------- | :------: | ------------- |
| Total     | [2][vue] | From 1/4/2020 |
| Hospital  | [2][vue] | From 2/3/2020 |
| EHPAD/EMS | [2][vue] | From 1/4/2020 |

Note: Figures in brackets with a plus or minus sign indicate the change from the previous day. For _EHPAD/EMS_, a **no update** hint will be added when there is no update.

### Hospitalisations {#hospitalisation}

| Item                 |  Source  | Availability                         |
| -------------------- | :------: | ------------------------------------ |
| Total                | [2][vue] | From 15/3/2020, except for 16/3/2020 |
| In the last 24 hours | [2][vue] | From 19/3/2020                       |
| In the last week     | [4][spf] | ???, except for 19/3/2021            |

Note: Figures in brackets with a plus or minus sign indicate the change from the previous day (or from the previous **week** when it comes to _Hospitalisations in the last week_).

### ICU Admissions {#icu}

| Item                 |  Source  | Availability                                |
| -------------------- | :------: | ------------------------------------------- |
| Total                | [2][vue] | From 4/3/2020, except for 8,13,15,16/3/2020 |
| In the last 24 hours | [2][vue] | From 19/3/2020                              |
| In the last week     | [4][spf] | ???, except for 19/3/2021                   |

Note: Figures in brackets with a plus or minus sign indicate the change from the previous day (or from the previous **week** when it comes to _ICU admissions in the last week_).

### Hospital Discharges {#returning-home}

| Item  |  Source  | Availability                 |
| ----- | :------: | ---------------------------- |
| Total | [2][vue] | 3/3/2020, and from 17/3/2020 |

Note: Figures in brackets with a plus or minus sign indicate the change from the previous day.

### Cumulative Vaccinations {#vaccinations}

| Item         |  Source  | Availability    |
| ------------ | :------: | --------------- |
| First doses  | [1][vac] | From 27/12/2020 |
| Second doses | [1][vac] | From 16/1/2021  |

Note: Figures in brackets with a plus or minus sign indicate the change from the previous day.

### Monitoring Indicators {#indicators}

| Item                                                                                               |   Source   | Availability               |
| -------------------------------------------------------------------------------------------------- | :--------: | -------------------------- |
| Incidence rate                                                                                     | [3][indic] | From 19/3/2020             |
| ICU bed occupancy rate                                                                             | [3][indic] | From 18/3/2020             |
| Effective reproduction number (R)                                                                  | [3][indic] | From 1/6/2020              |
| RT-PCR positivity rate                                                                             | [3][indic] | From 19/5/2020             |
| Number of departments in a highly vulnerable situation                                             |  [4][spf]  | ??? to 7/2/2021            |
| Number of clusters under investigation from 9/5/2020                                               |  [4][spf]  | ??? to 26/1/2021           |
| Proportion of residents in EHPAD/long-term care units having received at least one dose of vaccine |  [4][spf]  | From 8/2/2021 to 17/3/2021 |
