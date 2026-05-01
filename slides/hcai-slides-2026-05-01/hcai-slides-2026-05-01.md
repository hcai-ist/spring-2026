---
pagetitle: IST 597 (HCAI) — 2026-05-01
date-meta: 2026-05-01
author-meta: Saeed Abdullah (saeed@psu.edu)
revealjs-url: ../../common/pandoc-reveal.js/reveal.js
theme: teaching-dark
slideNumber: true
hash: true
hashOneBasedIndex: true
highlightjs: true
highlightjs-theme: dracula
header-includes:
    - |
        <style>
        /* Timer Countdown */
        .base-timer {
          position: relative;
          cursor: pointer;
          width: 60%;
          min-width: 80px;
          max-width: 400px;
          margin: 0 auto;
        }

        .base-timer__svg {
          transform: scaleX(-1); /* so the arc depletes clockwise */
        }

        .base-timer__circle {
          fill: none;
          stroke: none;
        }

        .base-timer__path-elapsed {
          stroke-width: 7px;
          stroke: #e0e0e0;  /* grey track behind the arc */
        }

        .base-timer__path-remaining {
          stroke-width: 7px;
          stroke-linecap: round;
          transform: rotate(90deg);
          transform-origin: center;
          transition: stroke-dasharray 1s linear, stroke 0.5s ease;
          fill-rule: nonzero;
          stroke: currentColor;
        }

        /* Color states applied as classes by JS */
        .base-timer__path-remaining.green  { color: #28a745; }
        .base-timer__path-remaining.orange { color: #f0ad4e; }
        .base-timer__path-remaining.red    { color: #dc3545; }

        .base-timer__label {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2em;
          font-weight: bold;
        }
        </style>
---

## Next Todos

---

## Almost there!

---

## Next Todos
* Final Code + Paper Submission due by 05/06 (Wed)
* [**Non-negotiable**]{.t-salmon} deadline
    - Imposed by university requirements
    - Please do not be late

---

## Final submission

* [Requirements](https://hcai-ist.github.io/spring-2026/syllabus/#final-code-paper-submission-20)

---

### We will work on the final paper today

---

## But before we start ...

---

## Course feedback

* Feedback = ❤️
* Help me make the class better
    + For you and for your fellow students next year!

---

### Take a guess — how many students have completed SEEQ?

---


### Take a guess — how many students have completed SEEQ?

1 student 😔

---

### SEEQ
* Not mandatory
    + No impact on your grade
* Your feedback is anonymous
* **Helpful for the college and future students**

---

#### Feedback = ❤️

* [SEEQ forms](https://seeq-student.k8s.psu.edu/SEEQ)
    - IST 597 - Special Topics **Section: 001**

- What worked for you in the class?
- What should be changed?
- What should remain same?

---

::::{.columns style="justify-content: center; align-items: center;"}
:::{.column #10minWaiting style="max-width:90%; display:flex; flex-direction:column; align-items:center;"}
:::
:::::


<script src="timer.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        initializeTimer("10minWaiting", 600); 
    });
</script>

---



### Final paper todos

* [Requirements](https://hcai-ist.github.io/spring-2026/syllabus/#final-code-paper-submission-20)

* Complete Introduction and Related Work sections
    + You can reuse [literature review from our class activity](https://psu.instructure.com/courses/2443462/discussion_topics/17349122)

* Check list
    + Paper [**template**]{.t-salmon}
    + [**Citation and reference**]{.t-salmon} formatting

---
