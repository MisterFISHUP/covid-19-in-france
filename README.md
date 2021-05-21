# Daily Digest - COVID-19 IN FRANCE

![Daily Digest - COVID-19 IN FRANCE](./static/img/social_preview.png)

[Daily Digest - COVID-19 IN FRANCE][website_en] is a website that presents daily COVID-19 statistics and news in France in the form of a daily digest.

Website available in [traditional Chinese][website], [simplified Chinese][website_zh-hans], [English][website_en] and [French][website_fr].

**👉 Check the website [here][website_en]**

[website]: https://covid-fr.misterfishup.com/
[website_zh-hans]: https://covid-fr.misterfishup.com/zh-Hans/
[website_en]: https://covid-fr.misterfishup.com/en/
[website_fr]: https://covid-fr.misterfishup.com/fr/

> Note: Daily News Digests are only available in traditional Chinese and simplified Chinese at the moment.

---

## Run the website locally

This project uses Node.js and python 3.

- Node.js version >= 12.13.0 or above (which can be checked by running node -v).
- Yarn version >= 1.5 (which can be checked by running yarn --version).

### Installation

To install required Node packages:

```console
yarn install
```

To install required python packages:

- The only package required is `openCC`, which can be installed via

  ```console
  pip install opencc
  ```

- Alternatively, you can install from Pipfile (with `pipenv`, **python 3.7** used):

  ```console
  pipenv install
  ```

## Build and serve

Build the website:

```console
yarn build
```

This command generates static content into the `build` directory, which usually takes a few minutes (5-10 min.).

You can then serve build locally by running:

```console
yarn serve
```
