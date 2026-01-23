---
pagetitle: IST 597 (HCAI) — 2026-01-16
date-meta: 2026-01-23
author-meta: Saeed Abdullah (saeed@psu.edu)
revealjs-url: ../../common/pandoc-reveal.js/reveal.js
theme: teaching-dark
slideNumber: true
hash: true
hashOneBasedIndex: true
highlightjs: true
highlightjs-theme: dracula
---

# Setting up OpenAI API and python environment

---

## OpenAI API access

* Go to [OpenAI Platform](https://platform.openai.com/)
* Log-in/Sign-in

---

### Create API key
* You might need to create an organization

---


### Create API key

* API Keys (left bar) → Create new secret key (top)
* Name
    - Your choice ("HCAI")?

---

### Save the secret key somewhere secured!
* You will need it for class activities and assignments
* You can also go to Dashboard and remove/create a new key

---


## Setting up python environment

---

### Install `uv`

* [Installation steps](https://docs.astral.sh/uv/getting-started/installation)
    + You will need to use terminal or command-prompt

---


### Run `jupyter`

```sh
# in terminal
uv run --with jupyter jupyter lab
```

:::{.t-ref}
[Documentation](https://docs.astral.sh/uv/guides/integration/jupyter/)
:::

---


### Open jupyter lab

* Go to <http://localhost:8888/lab>
* Start a new notebook (Python 3)

---

## Activity

* Let's walk through [the class activity](https://github.com/hcai-ist/activity-spring-2026/blob/main/activity-01.ipynb)
* You can copy-and-paste each cell and run it

---





