# Official data

Build csv -> generate json -> display data in the journal by react components


## Building csv files

Each column represents a certain type of data.

First column is always date, a string of format "YYYY-MM-DD".

When an entry is missing/not available, it's left empty.

### vac.csv

>  Source: [Le tableau de bord de la vaccination](https://solidarites-sante.gouv.fr/grands-dossiers/vaccin-covid-19/article/le-tableau-de-bord-de-la-vaccination) (Suivi quotidien du nombre de personnes ayant reçu une dose ou deux doses) from Ministère des solidarités et de la santé

Data can be downloaded directly from the above source.

Data are all `int`.


| Column Name | Description | Avalability |
|-------------|-------------|-------------|
| vac1 | cumulative... | from 2020/12/27 (included) |
| vac2 | cumulative... | from 2021/1/16 (included)  |


### vue-densemble.csv

> Source: gouvernement.fr/info-coronavirus >> carte et données >> [Vue d'ensemble](https://www.gouvernement.fr/info-coronavirus/carte-et-donnees)

Data are scraped by js codes from the above source.

No data are available before 2020/3/1 (included).

Not using vac1 from this source (it is the same as the vac1 from the above section).

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

> Sources: gouvernement.fr/info-coronavirus >> carte et données >> [carte des indicateurs](https://www.gouvernement.fr/info-coronavirus/carte-et-donnees) or [data.gouv.fr](https://www.data.gouv.fr/fr/datasets/indicateurs-de-suivi-de-lepidemie-de-covid-19/)

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
| incidR | `float` | (indicators.csv) incidR |
| icuOccupR | `float` | (indicators.csv) icuOccupR |
| r | `float` | (indicators.csv) r|
| posR | `float` | (indicators.csv) posR |
| hospiWeek | `int` | (spf.csv) hospiWeek |
| icuWeek | `int` | (spf.csv) icuWeek |
| vacEhpadUsldPct | `array` | (spf.csv) [vacEhpadUsldPct, vacEhpadUsldPct_date] |
| casesRtPcrCumul | `int` | (spf.csv) casesRtPcrCuul |
| casesAntigCumul | `int` | (spf.csv) casesAntigCumul |
| clusters | `array` | (spf.csv) [clusters, clusters_ehpad, clusters_date]|