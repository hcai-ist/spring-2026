---
pagetitle: IST 597 (HCAI) — 2026-02-13
date-meta: 2026-02-13
author-meta: Saeed Abdullah (saeed@psu.edu)
revealjs-url: ../../common/pandoc-reveal.js/reveal.js
theme: teaching-dark
slideNumber: true
hash: true
hashOneBasedIndex: true
highlightjs: true
highlightjs-theme: dracula
---


## Using LLM for data extraction

---

## Recap from last class

---

* Output formatting
* Data extraction

---

## Output formatting
* We often want structured output

* When you are [**using LLMs as a pipeline or infrastructure**]{.t-salmon} for further processing, you want [**consistency**]{.t-clover}

---

### Free form text output is not fun to parse 

::::{.columns style="justify-content: center; align-items: center; align-items: center;"}
:::{.column style="background-color: #ffff; max-width:45%;"}
![](./media/free-form-response.png){alt=""}
:::
::::


---


### We want structured output (using [Instructor](https://python.useinstructor.com/))

```python{data-line-numbers="1"}
import instructor

class Response(BaseModel):
    message: str

r = client.responses.create(
    input="Write a haiku about IST 597 (HCAI)",
    response_model=Response,
)
```

---

### Define the structure of response from LLMs

```python{data-line-numbers="3-4,8"}
import instructor

class Response(BaseModel):
    message: str

r = client.responses.create(
    input="Write a haiku about IST 597 (HCAI)",
    response_model=Response,
)
```

`response_model`: expected structure

---

### Different data types

```python
class User(BaseModel):
    name: str
    age: int
```

:::{.t-ref}
[Understanding Response Models](https://python.useinstructor.com/learning/getting_started/response_models/)
:::

---

## Information extraction using LLM

---


### Integrating text data in the prompt

* Extract data from external source and integrate in the prompt

* I converted [the web page](https://budgetandfinance.psu.edu/budget-allocations) into [markdown table](https://github.com/hcai-ist/activity-spring-2026/tree/main/data/data-activity-03)

* We can integrate the markdown data into the prompt

---

### What if our data is in pdf?

* [Right To Know Law Reports](https://budgetandfinance.psu.edu/public-reports#:~:text=Right%20To%20Know%20Law%20Report)

---

## How does Penn State spend your tuition?

* **Intercollegiate Athletics** and **College of Medicine** are "[self-sustaining units](https://www.psu.edu/news/administration/story/youve-asked-weve-answered-top-budget-faqs?utm_audience=Faculty&utm_source=newswire&utm_medium=email&utm_campaign=Penn%20State%20Today&utm_content=02-03-2026-21-01&utm_term=TopStories%20-%202#:~:text=Self%2Dsustaining%20units%20%28%241%20billion%29%3A)"
    + [**No**]{.t-salmon} tuition or state funding

---



### 3 options for handling pdf data

* Do it by yourself
    * Extract the text data from the pdf using a third-party package
    + `pymupdf` converts pdf to markdown

* Use the vision API to convert image to text

* Use the [file search](https://platform.openai.com/docs/guides/tools-file-search) API

---


## Today

### File search API


* Do it by yourself
    * Extract the text data from the pdf using a third-party package
    + `pymupdf` converts pdf to markdown

* Use the vision API to convert image to text

* **Use the [file search](https://platform.openai.com/docs/guides/tools-file-search) API**

---


## Class activity

* [Activity 04](https://github.com/hcai-ist/activity-spring-2026/blob/main/activity-04.ipynb)

---

## Assignment 1

* [Description](https://hcai-ist.github.io/spring-2026/assignments/assignment-01/)
* Due by Feb 23rd

---

