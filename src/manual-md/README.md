The current folder `manual-md` contains the folder `manual` that contains md files of manual content.

The relative path of any of these files should be `manual/{year}/{month}/{day}.md`, where `year` is a 4-digit number, and `month`, `day` are without any leading zero. There is also a file `manual/{cur_year}/intro.md`, which will be copied into `docs/{cur_year}/intro.md` (route: `journal/{cur_year}`).

`page_generator` (python, or jupyter notebook) can generate journal pages (mdx files) in `docs` (`docs/{year}/{month_en_lower}/{day}.mdx`) from these files of manual content.

Example: `manual/2021/3/1.md` -> `docs/2021/march/1.mdx`

> Remember to configure sidebar items in `sidebars.js` (including `intro.md`) after generating journal pages. It's ok to have mdx not included in this sidebars file, but it can't contain any non-existing mdx.

Since files `docs/{year}/{month_en_lower}/{day}.mdx` (and `docs/{cur_year}/intro.md`) are generated automatically, one should not modify them manually. More generally, one should not modify anything in these folders `docs/{year}/` manually, since everything inside these folders should be generated automatically. Git will also ignore changes in these folders (`docs/20??/` in `.gitignore`).
