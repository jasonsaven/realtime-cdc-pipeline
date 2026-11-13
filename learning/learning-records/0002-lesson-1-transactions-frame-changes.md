# Lesson 1: change events come wrapped in transactions; big picture still missing

The learner completed lesson 1 hands-on. They predicted 6 rows from the slot and got 9. They hadn't expected each single-statement change to be wrapped in its own `BEGIN`/`COMMIT`, and say they now understand why. They scored 4/4 on the quiz, but right after the lesson, so that shows fluency, not storage strength. Re-test the lesson 1 ideas (WAL, slot, peek vs get, key-only DELETE) later.

They found the material dense and said they're missing the "larger concepts and language", so they can't yet place what they learn within the whole pipeline.

**Evidence**: Self-reported quiz score and prediction after the lesson, 2026-11-12.

**Implications**: Transaction boundaries will matter again (Debezium events carry transaction metadata, and Flink processes them in order), so link back to this. Before going deeper into Postgres, give a lighter big-picture orientation. Start the next session with spaced retrieval of lesson 1, ideally by having the learner write glossary definitions in their own words.
