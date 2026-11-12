# Real-time CDC Pipeline Resources

## Knowledge

### Postgres (CDC source)
- [PostgreSQL 18 docs: Write-Ahead Logging (§28.3)](https://www.postgresql.org/docs/18/wal-intro.html)
  One-page primary source on what the WAL is and why it exists. Use for: the "log before data" idea underneath all CDC.
- [PostgreSQL 18 docs: Logical Decoding Examples (§47.1)](https://www.postgresql.org/docs/18/logicaldecoding-example.html)
  The official hands-on walkthrough with `test_decoding`. Lesson 1 follows it. Use for: creating slots, peek vs get, reading change output.
- [PostgreSQL 18 docs: Logical Decoding Concepts (§47.2)](https://www.postgresql.org/docs/18/logicaldecoding-explanation.html)
  Defines logical decoding, replication slots, output plugins, and warns about slots retaining WAL. Use for: precise definitions; the slot-retention caution.
- [PostgreSQL 18 docs: Replication Management Functions (§9.28.6)](https://www.postgresql.org/docs/18/functions-admin.html#FUNCTIONS-REPLICATION)
  Reference for `pg_create_logical_replication_slot`, `pg_logical_slot_get_changes`/`peek_changes`, `pg_drop_replication_slot`. Use for: function signatures.
- [PostgreSQL 18 docs: Logical Replication (Ch. 29)](https://www.postgresql.org/docs/18/logical-replication.html)
  Publications, subscriptions, replica identity. Use for: publications and `REPLICA IDENTITY` (lessons after slots).
- [Gunnar Morling, "Mastering Postgres Replication Slots" (July 2025)](https://www.morling.dev/blog/mastering-postgres-replication-slots)
  Production best practices from a former Debezium lead: `max_slot_wal_keep_size`, heartbeats, monitoring, dropping unused slots. **Intermediate**: read after the basic slot lessons. Use for: operating slots safely.
- [Gunnar Morling, "Confirmed Flush LSN vs. Restart LSN" (Aug 2025)](https://www.morling.dev/blog/postgres-replication-slots-confirmed-flush-lsn-vs-restart-lsn/)
  How a slot tracks consumer progress. Use for: understanding the two LSN columns in `pg_replication_slots`.

### Debezium
- [Debezium 3.7 PostgreSQL connector docs](https://debezium.io/documentation/reference/stable/connectors/postgresql.html)
  Primary source for the connector; see "How the connector works". Use for: everything Debezium-on-Postgres. Debezium 3.7 supports Postgres 14 to 18 with `pgoutput` ([releases](https://debezium.io/releases/)).

### Kafka
- Book (owned): _Kafka: The Definitive Guide_, 2nd ed., by Gwen Shapira, Todd Palino, Rajini Sivaram & Krit Petty (O'Reilly).
  Use for: topics, partitions, offsets, consumers, Kafka Connect (the runtime Debezium lives in).

### Flink
- Book (owned): _Stream Processing with Apache Flink_ by Fabian Hueske & Vasiliki Kalavri (O'Reilly, 2019).
  Use for: core stream-processing concepts (time, state, checkpoints). Predates much of today's Flink SQL; see Gaps.

### Background / big picture
- Book: _Designing Data-Intensive Applications_, 2nd ed., by Martin Kleppmann & Chris Riccomini (O'Reilly, 2026).
  The stream-processing chapter covers CDC and log-based messaging. Use for: why logs and CDC matter architecturally. (Exact chapter not yet verified.)

## Wisdom (Communities)
- [Debezium Zulip chat, #users stream](https://debezium.zulipchat.com/#narrow/stream/302529-users)
  The official place to ask Debezium questions; maintainers are active there.
- [pgsql-general mailing list](https://www.postgresql.org/list/pgsql-general/)
  The official general Postgres Q&A list.
- [Stack Overflow: `debezium` tag](https://stackoverflow.com/questions/tagged/debezium)
  Searchable archive of common Debezium problems.

## Gaps
- Current Flink SQL resource (official docs plus a good tutorial). Find before the Flink stage.
- StarRocks primary-key tables and loading from Flink. Find before the OLAP stage.
- Free cloud tiers that could host parts of the pipeline realistically. Research when the local pipeline works.
- Kafka and Flink communities (Confluent forum, Flink mailing lists/Slack). Add when those stages start.
