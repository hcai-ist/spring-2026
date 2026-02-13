---
title: Assignment 01 — WellAsk
subtitle: IST 597 (HCAI) — Spring 2026 
date-meta: 2026
author-meta: Saeed Abdullah
lang: en-US
toc-title: Course Content
css: ../../common/tufte.css
section-divs: true
include-before: |
    <article>

include-after: |
    </article>
---


## Description
A startup company wants to implement **WellAsk** — a question answering (QA) system
focusing on mental health needs of different communities. **WellAsk** will use
reports published by organizations to answer user queries.



## Dataset

The dataset contains two pdf reports:

* “Mental health conditions in the South-East Asia Region” published by [WHO](https://iris.who.int/handle/10665/372954) ([pdf](./WHO-mental-health-SE-Asia.pdf))
* “2025 State of Mental Health in America Report” from [Mental Health America (MHA)](https://mhanational.org/wp-content/uploads/2025/09/State-of-Mental-Health-2025.pdf) ([pdf](State-of-Mental-Health-2025.pdf))




## Requirements
You will implement **WellAsk** by using OpenAI APIs.
You will then compare the performance of **WellAsk** with [NotebookLM](https://notebooklm.google/)
(see [below](#summary-report)).

It is critical that **WellAsk** only uses the provided file content to answer
questions. You should aim to minimize confabulation/hallucination. _If the files
do not contain relevant information, it should not aim to provide an
answer_.


### Summary Report
Your report should include:

* Answers from **WellAsk** and [NotebookLM](https://notebooklm.google/) for the following questions:
    * What's the estimated number of people living with the following mental health conditions in total across South East Asia and the US:
        + depressive disorders
        + anxiety disorders
        + bipolar disorders
        + schizophrenia
    * What's the extent and impact of Postpartum depression across different countries and states?
    * How has the burden of mental health conditions changed over the years in Bhutan, Thailand, and Alabama?
    * What's the number of psychiatrists per 100,000 population in a given region?
    * Among Pennsylvania, West Virginia, India, and Bangladesh, which region has:
        + the highest rate of substance abuse?
        + the highest ratio of mental health providers to individuals in need (i.e., living with mental health conditions)
    * What's the estimated number of people with depressive disorders in South Korea?
    * What's the percentage of GDP spent on mental health care in Paraguay?

* Your overall assessment of accuracy of these answers from **WellAsk** and NotebookLM
* In what cases **WellAsk** performs better than NotebookLM? When does it perform worse?
* What factors impact the performance difference between **WellAsk** and NotebookLM?

## Deliverables

Please upload two files:

- a python/notebook file containing your implementation. Please note that we must be able to run your code for grading. If your implementation has any run-time requirements (e.g., a specific library), mention it in your submission.
- a pdf with your summary report

## Implementation resources

Our class activities included two options in handling pdf data:

* [pymupdf in Activity 03](https://github.com/hcai-ist/activity-spring-2026/blob/main/activity-03.ipynb)
* [File search tool in Activity 04](https://github.com/hcai-ist/activity-spring-2026/blob/main/activity-04.ipynb)

You can use any (both?) options to implement **WellAsk**. If you are using file search tools, you might want to
implement two steps:

* Extract relevant text from all given sources using file search tools
* Perform the user query in returned text (i.e., similar to our previous class activity)

## Grading

* **WellAsk** implementation using OpenAI APIs (5 points)
* Implementing steps to mitigate confabulation/hallucination (1 points)
* Summary report (4 points)

