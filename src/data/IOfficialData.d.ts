type NoUpdate = "noUpdate";
type NumStrPair = [number, string];
type NumNumStr = [number, number, string]

// no key: no entry
// has key: entry exists (could be `null`, which serves as a placeholder: viewed as no entry before assigned to a valid value)
//
// value =
//  | number
//  | NumStrPair, i.e. [ number, string (for date) ], ex: [ 123, '1/31']
//  | NumNumStr, ex: [ 123, 200, '1/31']
//  | 'noUpdate'
//  | null
//
// # when value is 'noUpdate', make sure the latest updated value exists, in some earlier date
// # `null` should ALWAYS be a possible value

interface IOfficialDataDaily {
  // from gouv. informations officielles (main page)
  readonly vac1?: NumStrPair | null;
  readonly vac2?: NumStrPair | null;

  // from gouv. carte et données `vue d'ensemble`, not using vac1
  readonly casesCumul?: number | null;
  readonly deathsCumul?: number | null;
  readonly hospi?: number | null;
  readonly hospiNew?: number | null;
  readonly icu?: number | null;
  readonly icuNew?: number | null;
  readonly returnHomeCumul?: number | null;
  readonly deathsHospiCumul?: number | null;
  readonly casesEhpadEmsCumul?: number | NoUpdate | null;
  readonly deathsEhpadEmsCumul?: number | NoUpdate | null;

  // from gouv. carte et données `carte des indicateurs`, not using posR (taux de positivité)
  readonly icuOccupR?: NumStrPair | null;
  readonly incidR?: NumStrPair | null;
  readonly r?: NumStrPair | null;

  // from SdF, not using casesCumul, deathsCumul, deathsHospiCumul, vac1
  readonly posR?: number | null;
  readonly vacEhpadUsld?: NumStrPair | null;
  readonly hospiWeek?: number | null;
  readonly icuWeek?: number | null;
  readonly highVul?: number | null; // dép en sit de vul élevée
  readonly casesRtPcrCumul?: number | null;
  readonly casesAntigCumul?: number | null;
  readonly clusters?: NumNumStr | null; // `n0` clusters en cours d'inv au `date` dont `n1` en Ehpad
}

export interface IOfficialData {
  [x: string]: IOfficialDataDaily;
}

/* Data used in components: see `components.tsx`
  
(type can be `null`, just not written)

CasesCumul
  - casesCumul: number
  - casesEhpadEmsCumul: number | NoUpdate
  - casesRtPcrCumul: number
  - casesAntigCumul: number

DeathsCumul
  - deathsCumul: number
  - deathsHospiCumul: number
  - deathsEhpadEmsCumul: number | NoUpdate

Hospi
  - hospi: number
  - hospiNew: number
  - hospiWeek: number

Icu
  - icu: number
  - icuNew: number
  - icuWeek: number

ReturnHomeCumul
  - returnHomeCumul: number

VacCumul
  - vac1: NumStrPair
  - vac2: NumStrPair

Indicators
  - icuOccupR: NumStrPair
  - incidR: NumStrPair
  - r: NumStrPair
  - posR: number
  - vacEhpadUsld: NumStrPair
  - highVul: number
  - clusters: NumNumStr
*/