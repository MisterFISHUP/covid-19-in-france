---
title: Sources
description: Les sources des données utilisées dans ce site web « Résumé Quotidien - COVID-19 EN FRANCE »
---

import { DigestLinkButton } from "@site/src/scripts/components/DigestLinkButton";

Cette page présente les sources des données utilisées dans les résumés quotidiens.

## Statistiques officielles {#official-statistics}

Les sources sont :

1. [Ministère des Solidarités et de la Santé - Tableau de bord de la vaccination][vac]
2. [Tableau de bord officiel - Vue d'ensemble][vue]
3. [Tableau de bord officiel - Indicateurs de suivi][indic]
4. [COVID-19 : bilan et chiffres clés en France][spf] de Santé publique France

Le premier point fournit lui-même des données brutes à télécharger. Les données brutes des trois premiers points peuvent également être trouvées dans la [base de données officielle][ofcl] (les liens sont respectivement [Vaccinations][ofcl_vac], [Vue d'ensemble][ofcl_vue], et [Indicateurs de suivi][ofcl_indic]).

[vac]: https://solidarites-sante.gouv.fr/grands-dossiers/vaccin-covid-19/article/le-tableau-de-bord-de-la-vaccination
[vue]: https://dashboard.covid19.data.gouv.fr/vue-d-ensemble
[indic]: https://dashboard.covid19.data.gouv.fr/suivi-indicateurs
[spf]: https://www.santepubliquefrance.fr/dossiers/coronavirus-covid-19/coronavirus-chiffres-cles-et-evolution-de-la-covid-19-en-france-et-dans-le-monde
[ofcl]: https://www.data.gouv.fr/fr/pages/donnees-coronavirus
[ofcl_vac]: https://www.data.gouv.fr/fr/datasets/donnees-relatives-aux-personnes-vaccinees-contre-la-covid-19-1/
[ofcl_vue]: https://www.data.gouv.fr/en/datasets/donnees-relatives-a-lepidemie-de-covid-19-en-france-vue-densemble/
[ofcl_indic]: https://www.data.gouv.fr/fr/datasets/indicateurs-de-suivi-de-lepidemie-de-covid-19/

:::caution ATTENTION
Les données historiques dans les sources [1][vac] et [3][indic] changent parfois après des mises à jour.
:::

Tous les résumés quotidiens, à l'exception du premier du 1/3/2020, contiennent la section **Statistiques officielles**. Les sources des données sont détaillées ci-dessous.

### Cumul des cas confirmés {#cumulative-cases}

| Point                                       |  Source  | Disponibilité                             |
| ------------------------------------------- | :------: | ----------------------------------------- |
| Total                                       | [2][vue] | Du 2/3/2020                               |
| EHPAD/EMS                                   | [2][vue] | Du 12/4/2020 au 19/2/2021, sauf 21/4/2020 |
| Nouveaux cas confirmés par RT-PCR           | [4][spf] | Du 17/11/2020 au 7/12/2020                |
| Nouveaux cas confirmés par test antigénique | [4][spf] | Du 18/11/2020 au 7/12/2020                |

Note : Les chiffres entre parenthèses avec un signe plus ou moins indiquent la variation par rapport à la veille. Pour _EHPAD/EMS_, **non actualisé** est indiqué lorsqu'il n'y a pas de mise à jour.

### Cumul des décès {#cumulative-deaths}

| Point     |  Source  | Disponibilité |
| --------- | :------: | ------------- |
| Total     | [2][vue] | Du 1/4/2020   |
| Hôpital   | [2][vue] | Du 2/3/2020   |
| EHPAD/EMS | [2][vue] | Du 1/4/2020   |

Note : Les chiffres entre parenthèses avec un signe plus ou moins indiquent la variation par rapport à la veille. Pour _EHPAD/EMS_, **non actualisé** est indiqué lorsqu'il n'y a pas de mise à jour.

### Hospitalisations {#hospitalisation}

| Point                           |  Source  | Disponibilité                |
| ------------------------------- | :------: | ---------------------------- |
| Total                           | [2][vue] | Du 15/3/2020, sauf 16/3/2020 |
| Au cours des dernières 24h      | [2][vue] | Du 19/3/2020                 |
| Au cours de la dernière semaine | [4][spf] | ???, sauf 19/3/2021          |

Note : Les chiffres entre parenthèses avec un signe plus ou moins indiquent la variation par rapport à la veille (ou par rapport à la **semaine dernière** lorsqu'il s'agit des _hospitalisations au cours de la dernière semaine_).

### Réanimation {#icu}

| Point                           |  Source  | Disponibilité                       |
| ------------------------------- | :------: | ----------------------------------- |
| Total                           | [2][vue] | Du 4/3/2020, sauf 8,13,15,16/3/2020 |
| Au cours des dernières 24h      | [2][vue] | Du 19/3/2020                        |
| Au cours de la dernière semaine | [4][spf] | ???, sauf 19/3/2021                 |

Note : Les chiffres entre parenthèses avec un signe plus ou moins indiquent la variation par rapport à la veille (ou par rapport à la **semaine dernière** lorsqu'il s'agit du nombre des patients _en réanimation au cours de la dernière semaine_).

### Retours à domicile {#returning-home}

| Point |  Source  | Disponibilité             |
| ----- | :------: | ------------------------- |
| Cumul | [2][vue] | 3/3/2020, et du 17/3/2020 |

Note : Les chiffres entre parenthèses avec un signe plus ou moins indiquent la variation par rapport à la veille.

### Cumul des vaccinations {#vaccinations}

| Point           |  Source  | Disponibilité |
| --------------- | :------: | ------------- |
| Premières doses | [1][vac] | Du 27/12/2020 |
| Secondes doses  | [1][vac] | Du 4/1/2021   |

Note : Les chiffres entre parenthèses avec un signe plus ou moins indiquent la variation par rapport à la veille.

### Indicateurs de suivi {#indicators}

| Point                                                                         |   Source   | Disponibilité            |
| ----------------------------------------------------------------------------- | :--------: | ------------------------ |
| Taux d'incidence                                                              | [3][indic] | Du 19/3/2020             |
| Taux d’occupation des lits en réanimation                                     | [3][indic] | Du 18/3/2020             |
| Nombre de reproduction effectif (R)                                           | [3][indic] | Du 1/6/2020              |
| Taux de positivité des tests RT-PCR                                           | [3][indic] | Du 19/5/2020             |
| Nombre des départements en situation de vulnérabilité élevée                  |  [4][spf]  | ??? au 7/2/2021          |
| Nombre des clusters en cours d'inverstigation depuis 9/5/2020                 |  [4][spf]  | ??? au 26/1/2021         |
| Proportion des résidents en EHPAD/USLD ayant reçu au moins une dose de vaccin |  [4][spf]  | Du 8/2/2021 au 17/3/2021 |

<br />
<div className="flex-center--wrap">
  <DigestLinkButton linkType="latest" isButtonOutline={true} buttonText="Retour au dernier résumé" />
  <DigestLinkButton linkType="random" isButtonOutline={false} buttonText="Lire un résumé aléatoire" />
</div>
