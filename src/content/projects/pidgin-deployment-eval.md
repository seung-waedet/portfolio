---
title: Pidgin deployment-readiness eval
summary: In progress. Can LLMs handle everyday tasks in Nigerian Pidgin?
tagline: Will test whether an LLM gives correct, safe, usable answers to people who read and write Nigerian Pidgin. In progress, with no results yet.
year: 2026
tech: [Python, pytest, uv]
githubUrl: https://github.com/seung-waedet/pidgin-deployment-eval
order: 2
---

**Status:** the first test items are drafted; none have been reviewed yet. No models have been run, so there are no results yet.

- Planned task families: reading a medication label, explaining a bank alert or POS reversal, and summarising a public notice. Bank-alert items are drafted first.
- A model drafts each item; a native speaker corrects its answer key and marking rubric and approves it. Only approved items will be used.
- Every task family will include trap items, where the text does not contain the answer and the right response is to say so. Each trap has an answerable twin built from the same scenario. Once scoring is built, a model will only earn trap credit if it also answers the twin, so a model that refuses everything will score nothing.
- Each item must pass schema checks, and a release check already fails while any item is still a draft. Results runs will have to pass that check, so no unreviewed item reaches the results.
