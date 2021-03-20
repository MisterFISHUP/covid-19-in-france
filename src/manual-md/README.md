The current folder `manual-md` contains the folder `manual` that contains md files of manual content.

The relative path of any of these files should be `manual/year/month/day.md`, where `year` is a 4-digit number, and `month`, `day` are without any leading zero.

`page_generator` (python, or jupyter notebook) can generate journal pages in `docs` from these files of manual content.

> Remember to configure sidebar items in `sidebars.js` after generating journal pages. It's ok to have mdx not included in this sidebars file, but it can't contain any non-existing mdx.