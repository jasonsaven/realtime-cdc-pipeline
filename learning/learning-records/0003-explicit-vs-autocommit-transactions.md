# Understands explicit vs autocommit transactions in decoded output

Without being prompted, the learner worked out from the Postgres docs example why two INSERTs between `BEGIN`/`COMMIT` decode to 4 rows rather than 6: an explicit transaction groups several changes, whereas without one each statement autocommits as its own transaction. This builds on the misconception corrected in [[0002-lesson-1-transactions-frame-changes]] and is now applied to a new case.

**Evidence**: Asked the question with the correct hypothesis already stated, 2026-11-12.

**Implications**: Can now introduce atomicity downstream (consumers should apply a transaction's changes all or none) and that only committed transactions reach the slot.
