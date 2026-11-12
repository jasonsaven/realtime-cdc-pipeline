# Teaching notes

## Learner preferences
- Complete novice in all pipeline technologies. Define every term from scratch.
- Learn by doing, one technology at a time.
- Homework can come from any high-quality source (docs, books, articles, talks). Length should fit the topic; it doesn't have to be short.
- Owns the Kafka (Shapira et al.) and Flink (Hueske & Kalavri) books; use them as homework when those stages arrive.

## Environment
- Docker CLI is at `~/.docker/bin` and may not be on PATH. Lessons tell the learner to add it.
- The pipeline's `docker-compose.yml` lives at the repo root and grows one service per stage. Stage 1 is `postgres:18` with `wal_level=logical`; database `shop`, user/password `postgres`.

## Teaching decisions
- Lesson 1 uses `test_decoding` because its output is human-readable. Debezium uses `pgoutput`, which is binary and can't be read with `pg_logical_slot_peek_changes`. Bridge that gap with publications in a later lesson.
- No glossary yet: per the skill, terms are added only after the learner shows understanding. Candidates from lesson 1: WAL, LSN, logical decoding, output plugin, replication slot, CDC.

## Planned sequence (Postgres stage, adjust to evidence)
1. See your first change events (WAL, logical decoding, slots, peek vs get)
2. Why abandoned slots are dangerous: watch WAL pile up
3. Publications and `pgoutput`: what Debezium actually reads
4. `REPLICA IDENTITY`: what UPDATE/DELETE events carry
