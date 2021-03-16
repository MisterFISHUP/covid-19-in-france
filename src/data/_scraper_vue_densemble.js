const example = {
  casesCumul: 3760671, //jsx-2793952281 value
  deathsCumul: 86803, // jsx-2376875320 value
  hospi: 25430, //jsx-792689997 value
  hospiNew: 1393, //jsx-792689997 value (second)
  icu: 3544, //jsx-659902412 value
  icuNew: 347, //jsx-659902412 value (second)
  returnHomeCumul: 258384, //jsx-850173864 value (second)
  deathsHospiCumul: 61947, //jsx-2376875320 value (second)
  casesEhpadEmsCumul: null, //jsx-3358528734 value
  deathsEhpadEmsCumul: 'noUpdate', //jsx-251970426 value
}

// On large screen
// v0: 2020/3/2 - 2020/3/31 (included) (no `deathsCumul`)
// v1: 2020/4/1 - 2020/12/26 (included)
// v2: 2021/12/27 onwards (included) (`vac1` added, but not used in here)
// Be careful ! `casesEhpadEmsCumul`, `deathsEhpadEmsCumul` could be 'noUpdate'!
// If necessary, change values to `null` or delete lines MANUALLY (scraper will set `casesEhpadEmsCumul` to `null` automatically if it's the case)
function scraper(version = "v2", prevDateWhenDone = true) {
  const cases = document.querySelector('.jsx-2793952281.value')?.firstChild.textContent.replace(/\s+/g, '');
  const deaths = (version != "v0") ? document.querySelector('.jsx-2376875320.value')?.firstChild.textContent.replace(/\s+/g, '') : "undefined";
  const hospi = document.querySelector('.jsx-792689997.value')?.firstChild.textContent.replace(/\s+/g, '');
  const hospiNew = document.querySelectorAll('.jsx-792689997.value')[1]?.firstChild.textContent.replace(/\s+/g, '');
  const icu = document.querySelector('.jsx-659902412.value')?.firstChild.textContent.replace(/\s+/g, '');
  const icuNew = document.querySelectorAll('.jsx-659902412.value')[1]?.firstChild.textContent.replace(/\s+/g, '');
  const returnHome = (version == 'v2')
    ? document.querySelectorAll('.jsx-850173864.value')[1]?.firstChild.textContent.replace(/\s+/g, '')
    : document.querySelector('.jsx-850173864.value')?.firstChild.textContent.replace(/\s+/g, '');
  const deathsHospi = (version != "v0")
    ? document.querySelectorAll('.jsx-2376875320.value')[1]?.firstChild.textContent.replace(/\s+/g, '')
    : document.querySelector('.jsx-2376875320.value')?.firstChild.textContent.replace(/\s+/g, '');
  let casesEhpadEms = document.querySelector('.jsx-3358528734.value')?.firstChild.textContent.replace(/\s+/g, '');
  const deathsEhpadEms = document.querySelector('.jsx-251970426.value')?.firstChild.textContent.replace(/\s+/g, '');

  if (casesEhpadEms == "-") casesEhpadEms = 'null';

  finalStr = `
// from gouv c&d \`vue d'ensemble\`
casesCumul: ${cases},
deathsCumul: ${deaths},
hospi: ${hospi},
hospiNew: ${hospiNew},
icu: ${icu},
icuNew: ${icuNew},
returnHomeCumul: ${returnHome},
deathsHospiCumul: ${deathsHospi},
casesEhpadEmsCumul: ${casesEhpadEms},
deathsEhpadEmsCumul: ${deathsEhpadEms},

`
  // copy finalStr to clipboard
  const el = document.createElement('textarea');
  el.value = finalStr;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);

  // show on console
  console.log(finalStr + "The above text is copied to clipboard with success.");

  // go to previous date
  const btn = document.querySelector('.jsx-2989278273.report-nav');
  if (prevDateWhenDone) {
    if (btn == null) {
      console.log("Can't find the button. Please try again.");
    } else {
      btn.click();
      console.log("Back to the previous date")
    }
  }
}

// date = YYYY-MM-DD
function goTo(date) {
  const btn = document.querySelector('.jsx-2989278273.report-nav');
  if (btn == null) {
    console.log("Can't find the button. Please try again.");
    return;
  }

  // the given `date` is `n` days before
  const n = Math.floor((new Date() - Date.parse(date)) / 864e5);
  console.log(`Go to ${n} day${n > 0 ? "s" : ""} before`)

  // click the button n times
  for (i = 1; i <= n; i++) {
    btn.click();
    if (i % 30 == 0) console.log(`Looped ${i} days already...`)
  }

  console.log(`Loop finished! Back to ${n} day${n > 0 ? "s" : ""} before.`);
}