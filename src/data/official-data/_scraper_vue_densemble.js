// https://dashboard.covid19.data.gouv.fr/vue-d-ensemble
// scrape data for `vue-densemble.csv` (on large screens)
// copy the following two functions `scrapeOneDay` & `scrapeCSV`
// and paste in the console
// may need to select some element on the page (ex: the button for the previous date) to make the codes work

function scrapeOneDay() {
  try {
    // get date
    const [dd, mm, yyyy] = document.querySelector("h3.jsx-2989278273").textContent.slice(11).split("/");
    const date = `${yyyy}-${mm}-${dd}`;

    // get data
    let cases = document.querySelector('.jsx-2793952281.value')?.firstChild.textContent.replace(/\s+/g, '');
    let deaths = (new Date(date) > new Date("2020-03-31")) ? document.querySelector('.jsx-2376875320.value')?.firstChild.textContent.replace(/\s+/g, '') : "";
    let hospi = document.querySelector('.jsx-792689997.value')?.firstChild.textContent.replace(/\s+/g, '');
    let hospiNew = document.querySelectorAll('.jsx-792689997.value')[1]?.firstChild.textContent.replace(/\s+/g, '');
    let icu = document.querySelector('.jsx-659902412.value')?.firstChild.textContent.replace(/\s+/g, '');
    let icuNew = document.querySelectorAll('.jsx-659902412.value')[1]?.firstChild.textContent.replace(/\s+/g, '');
    let returnHome = (new Date(date) > new Date("2020-12-26"))
      ? document.querySelectorAll('.jsx-850173864.value')[1]?.firstChild.textContent.replace(/\s+/g, '')
      : document.querySelector('.jsx-850173864.value')?.firstChild.textContent.replace(/\s+/g, '');
    let deathsHospi = (new Date(date) > new Date("2020-03-31"))
      ? document.querySelectorAll('.jsx-2376875320.value')[1]?.firstChild.textContent.replace(/\s+/g, '')
      : document.querySelector('.jsx-2376875320.value')?.firstChild.textContent.replace(/\s+/g, '');
    let casesEhpadEms = document.querySelector('.jsx-3358528734.value')?.firstChild.textContent.replace(/\s+/g, '');
    let deathsEhpadEms = document.querySelector('.jsx-251970426.value')?.firstChild.textContent.replace(/\s+/g, '');

    // convert undefined values
    const convertUndefined = x => (x == "-" || x == null) ? "" : x;
    cases = convertUndefined(cases);
    deaths = convertUndefined(deaths);
    hospi = convertUndefined(hospi);
    hospiNew = convertUndefined(hospiNew);
    icu = convertUndefined(icu);
    icuNew = convertUndefined(icuNew);
    returnHome = convertUndefined(returnHome);
    deathsHospi = convertUndefined(deathsHospi);
    casesEhpadEms = convertUndefined(casesEhpadEms);
    deathsEhpadEms = convertUndefined(deathsEhpadEms);

    return `${date},${cases},${deaths},${hospi},${hospiNew},${icu},${icuNew},${returnHome},${deathsHospi},${casesEhpadEms},${deathsEhpadEms}\n`;

  } catch (err) {
    console.error(err);
  }
};

function scrapeCSV(n) {
  try {
    let csvStr = "";
    // let tail = "";
    // const previewMax = 5;
    const btn = document.querySelector('.jsx-2989278273.report-nav');

    console.log("Start processing...");
    let counter = 0;
    let intervalId = setInterval(function () {
      counter++;
      const temp = scrapeOneDay();
      csvStr = temp + csvStr;
      // if (counter <= previewMax) tail = temp + tail;
      if (counter % 20 == 0) console.log(`Processed ${counter} days...`)
      if (counter != n) btn.click();

      if (counter == n) {
        // copy csvStr to clipboard (might not work if n is big)
        // If not allowed in the browser, just comment out this section
        const el = document.createElement('textarea');
        el.value = csvStr;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        // task completed prompt
        // console.log(`Copied data of the last ${n} day${n > 1 ? "s" : ""}! Preview of the last ${n > previewMax ? previewMax : n} line${n > 1 ? "s" : ""}:`)
        // console.log(tail)
        console.log(csvStr);
        clearInterval(intervalId);
      }
    }, 250);
  } catch (err) {
    console.error(err);
  }
}

// go to date `YYYY-MM-DD`
function goTo(date) {
  try {
    // get curDate
    const [dd, mm, yyyy] = document.querySelector("h3.jsx-2989278273").textContent.slice(11).split("/");
    const curDate = `${yyyy}-${mm}-${dd}`;

    // the given `date` is `n` days before or after
    const n = (Date.parse(curDate) - Date.parse(date)) / 864e5;
    const nAbs = Math.abs(n);

    // get btn
    const btns = document.querySelectorAll('.jsx-2989278273.report-nav');
    const btn = n > 0 ? btns[0] : btns[1];

    console.log(`Start jumping to ${nAbs} day${nAbs > 1 ? "s" : ""} ${n > 0 ? "before" : "after"}...`);
    for (i = 1; i <= nAbs; i++) {
      btn.click();
      if (i % 30 == 0) console.log(`> already jumped ${i} days...`);
    }
    console.log(`Finished! Now on ${date}.`);
  } catch (err) {
    console.error(err);
  }
}
