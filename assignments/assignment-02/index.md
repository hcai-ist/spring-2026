---
title: Assignment 02 — Daily Check Chatbot
subtitle: IST 597 (HCAI) — Spring 2026 
date-meta: 2026
author-meta: Yunkai Xu
lang: en-US
toc-title: Assignment 02
css: ../../common/tufte.css
section-divs: true
include-before: |
    <article>

include-after: |
    </article>
---


## Description

In this assignment you will design and implement a daily check in chatbot using **Streamlit and Python**. The goal is to help users reflect on their daily emotional state and receive supportive responses generated through a large language model.

This assignment focuses on conversational logic design conditional reasoning and basic integration with the OpenAI API. You are not expected to optimize models.

```{=html}
<p>
<video width="100%" height="auto" controls preload="metadata">
    <source src="streamlit-assignment-2-example.mp4" type="video/mp4">
Your browser doesn't support HTML video. Here is the <a href="streamlit-assignment-2-example.mp4" download="streamlit-assignment-2-example.mp4">download link</a>
</video>
</p>
```



## Requirements

You will design a daily check in chatbot with the following core functions.

1. Main conversation logic: 
   1. The user will upload daily depression levels using a numerical scale from 1 to 10. 
      1. Hint: The system should reject any input outside this range (e.g., −5 or 15).
   2. Users will write a short note explaining the chosen level such as possible reasons or context after logging in their depression level.
   3. Generate supportive responses that incorporate the content of the user note.
   4. Then the user can chat with the chatbot freely about the note, and the chatbot will give empathic feedback.
      1. Hint: The chatbot should support multiple conversation turns
2. Other useful function:
   1. Can export (or download the chat history in any file format: e.g. txt, json, etc.) and clear chat history (initialize the chatbot).


## Implementation Resources


You can use [the code as a reference](https://github.com/Xuyk021/ConversationAgentClass/blob/main/assignment-2-exercise.py). You may either build your solution using the provided code framework or implement the entire codebase yourself. If you use the provided code, your task is to complete the TODO sections by adding the necessary implementations. In either case, please ensure that your code includes sufficient comments in the TODO sections.


Using Python code or LLM prompt engineering, please implement the following logic and take steps to minimize hallucinations.

### Step 1: Collecting the Daily Level

The chatbot should ask the user to enter a numerical value from 1 to 10 to represent their daily anxiety or depression level.

Accepted input examples include

- 6
- log 6
- level 7
- 7/10

If the input is not a valid number between 1 and 10, the chatbot should politely ask the user to try again.

### Step 2: Feedback After Logging

After a valid level is recorded, the chatbot should respond using the logic below, based on the numerical range.

#### Level 1 to 3 (Low)

The chatbot should respond with the following type of message

- Acknowledge that the anxiety level is relatively low
- Encourage light maintenance behavior

**Example response**: You’re doing a good job checking in. Anxiety seems relatively low today. Try a tiny maintenance step: take three slow breaths and pick one small thing you want to keep going.

#### Level 4 to 6 (Moderate)

The chatbot should respond with the following type of message

- Acknowledge moderate anxiety
- Offer a simple grounding exercise

**Example response**: Thanks for logging. Moderate anxiety can feel distracting. Try a quick reset: name five things you see, four you feel, three you hear, two you smell, and one you taste.

#### Level 7 to 8 (High)

The chatbot should respond with the following type of message

- Acknowledge that the user is having a difficult day
- Encourage reducing cognitive load and taking small steps


**Example response**: That sounds tough. When anxiety is high, lowering the load can help. Try two minutes of slow breathing, then choose one tiny task you can finish in ten minutes.

#### Level 9 to 10 (Very High)

The chatbot should respond with the following type of message

- Acknowledge emotional intensity
- Encourage immediate calming actions
- Include a brief safety oriented message


**Example response**: I’m sorry you’re feeling this intensely. You deserve support right now.  Focus on immediate calming such as slow breathing or moving to a quieter place.  If you feel unsafe or at risk of harming yourself, please contact local emergency services or a crisis hotline in your area.

### Step 3: Asking for an Optional Note

After providing feedback on the level, the chatbot should ask the user to optionally enter a short note explaining the level.

This note will later be used as input for the following response.

### Step 4: Responding to The Note

Then, the chatbot should generate an additional response also using a large language model.

## Requirements

In the chatbot code:

1. Design your own prompt
2. Decide how the recorded level and note are incorporated
3. Ensure the response is supportive
4. Use Streamlit for the interface
5. Use Python for all logic
6. Store conversation state using `st.session_state`

In the report:

7. You need to describe the user flow within your chatbot
8. You should demonstrate the chatbot’s performance, including which parts of the system work and which parts do not work
9. You may also include any aspects that you find interesting or necessary to highlight
10. Consider the risk of the response and ways to mitigate them if these systems are deployed widely in the real world

## Grading

Submit the following items

1. Your completed Python code file (8 points in total):
   1. Working Implementation of the chat bot (6 points)
   2. Minimizing  hallucination and risky responses (1 point)
   3. You need add sufficient comments in the code (1 point)
      1. If you use the provided code framework, you only need to add comments, except in the TODO sections.
   4. *NOT upload your openai api key.* 
2. Your detailed report on (20 points in total):
   1. User flow and performance of the implemented system (1 point)
   2. potential risks and actionable ways to mitigate those risks (1 point)

Make sure your code and report is readable and well structured.

## Notes

This assignment is intentionally scoped to focus on interaction logic rather than advanced model optimization. Simple, clear and well reasoned designs are preferred over complex solutions.

If you have questions please ask during discussion or office hours.
