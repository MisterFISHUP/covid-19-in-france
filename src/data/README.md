# Official data

Build csv -> generate json -> display data in the journal by react components


## Building csv files

Each column represents a certain type of data.

First column is always date, a string of format "YYYY-MM-DD".

When an entry is missing/not available, it's left empty.

### vac.csv

>  Source: [Le tableau de bord de la vaccination](https://solidarites-sante.gouv.fr/grands-dossiers/vaccin-covid-19/article/le-tableau-de-bord-de-la-vaccination) (Suivi quotidien du nombre de personnes ayant reçu une dose ou deux doses) from Ministère des solidarités et de la santé, or [data.gouv.fr](https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19-1/)

Data can be downloaded directly from the above source.

Data are all `int`.


| Column Name | Description | Avalability |
|-------------|-------------|-------------|
| vac1 | cumulative... | from 2020/12/27 (included) |
| vac2 | cumulative... | from 2021/1/16 (included)  |


### vue-densemble.csv

> Source: [Tableau de bord COVID-19 Suivi de l’épidémie de COVID-19 en France - Vue d'ensemble](https://dashboard.covid19.data.gouv.fr/vue-d-ensemble) or [data.gouv.fr](https://www.data.gouv.fr/en/datasets/donnees-relatives-a-lepidemie-de-covid-19-en-france-vue-densemble/)

Data are scraped by js codes from the above source (first one), and can also be downloaded directly (second source). 

No data are available before 2020/3/1 (included).

Not using vac1 from this source (it is the same as the vac1 from the previous section).

Data are all `int`.

| Column Name | Description | Avalability |
|-------------|-------------|-------------|
| casesCumul| todo | from 2020/3/2 (included) |
| deathsCumul | todo | from 2020/4/1 (included) |
| hospi | todo | from 2020/3/15 (included), except for 2020/3/16 |
| hospiNew | todo | from 2020/3/19 (included) |
| icu | todo | from 2020/3/4 (included), except for 2020/3/8,13,15,16 |
| icuNew | todo | from 2020/3/19 (included) |
| returnHomeCumul | todo | from 2020/3/17 (included) (and 2020/3/3) |
| deathsHospiCumul | todo | from 2020/3/2 (included) |
| casesEhpadEmsCumul | todo | from 2020/4/12 to 2021/2/19 (included), except for 2020/4/21 |
| deathsEhpadEmsCumul | todo | from 2020/4/1 included |

### indicators.csv

> Source: [Tableau de bord COVID-19 Suivi de l’épidémie de COVID-19 en France - Carte des indicateurs](https://dashboard.covid19.data.gouv.fr/suivi-indicateurs) or [data.gouv.fr](https://www.data.gouv.fr/fr/datasets/indicateurs-de-suivi-de-lepidemie-de-covid-19/)

Data can be downloaded directly from the second source.

Data are all `float`.

| Column Name | Description | Avalability |
|-------------|-------------|-------------|
| incidR | todo | from 2020/3/19 (included) |
| r | todo | from 2020/6/1 (included) |
| icuOccupR | todo | from 2020/3/18 (included) |
| posR | todo | from 2020/5/19 (included) |

### spf.csv

> Source: [Santé publique France](https://www.santepubliquefrance.fr/dossiers/coronavirus-covid-19/coronavirus-chiffres-cles-et-evolution-de-la-covid-19-en-france-et-dans-le-monde)

Data are entered manually.

| Column Name | Type | Description | Avalability |
|-------------|:----:|-------------|-------------|
| hospiWeek | `int` | todo | todo |
| icuWeek | `int` | todo | todo |
| vacEhpadUsldPct | `float` | todo | todo |
| vacEhpadUsldPct_date | `str` | todo | todo |
| casesRtPcrCumul | `int` | todo | todo |
| casesAntigCumul | `int` | todo | todo |
| highVul | `int` | todo | todo |
| clusters | `int` | todo | todo |
| clusters_ehpad | `int` | todo | todo |
| clusters_date | `str` | todo | todo |

## Generating the json file

Four csv files -> pandas DataFrame(s) -> python dictionary -> json (`official-data.json`)

`official-data.json` contains one single js object where the key-value pairs are _"YYYY-MM-DD" -  data of that date_.

The data of any given date is again a js object. Below is a detailed list of all its possible key-value pairs.

> `null` value is not present in these js objects: keys with no value are removed.

| Key | Value Type | Value |
| --- |:---:| --- |
| vac1 | `int` | (vac.csv) vac1 |
| vac2 | `int` | (vac.csv) vac2 |
| casesCumul | `int` | (vue-densemble.csv) casesCumul |
| deathsCumul | `int` | (vue-densemble.csv) deathsCumul |
| hospi | `int` | (vue-densemble.csv) hospi |
| hospiNew | `int` | (vue-densemble.csv) hospiNew |
| icu | `int` | (vue-densemble.csv) icu |
| icuNew | `int` | (vue-densemble.csv) icuNew |
| returnHomeCumul | `int` | (vue-densemble.csv) returnHomeCumul |
| deathsHospiCumul | `int` | (vue-densemble.csv) deathsHospiCumul |
| casesEhpadEmsCumul | `int` | (vue-densemble.csv) casesEhpadEmsCumul |
| deathsEhpadEmsCumul | `int` | (vue-densemble.csv) deathsEhpadEmsCumul |
| incidR | `float` | (indicators.csv) incidR |
| icuOccupR | `float` | (indicators.csv) icuOccupR |
| r | `float` | (indicators.csv) r|
| posR | `float` | (indicators.csv) posR |
| hospiWeek | `int` | (spf.csv) hospiWeek |
| icuWeek | `int` | (spf.csv) icuWeek |
| vacEhpadUsldPct | `array` | (spf.csv) [vacEhpadUsldPct, vacEhpadUsldPct_date] |
| casesRtPcrCumul | `int` | (spf.csv) casesRtPcrCuul |
| casesAntigCumul | `int` | (spf.csv) casesAntigCumul |
| highVul | `int` | (spf.csv) highVul |
| clusters | `array` | (spf.csv) [clusters, clusters_ehpad, clusters_date]|