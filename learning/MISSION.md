# Mission: Real-time CDC pipelines (Postgres → Debezium → Kafka → Flink SQL → StarRocks → BI)

## Why
Grow real streaming/CDC skills that pay off at work (bringing real-time data to a batch-oriented data stack), in future roles and interviews, and out of genuine curiosity about how these systems work under the hood.

## Success looks like
- Implement the full pipeline end to end, locally, and query freshly changed rows from a BI tool with very low latency.
- Explain in your own words how a row change in Postgres travels to a BI chart, and what happens at each stage.
- Set up and debug Postgres replication slots and publications unaided.
- Recognise and fix common failures (for example, a stalled slot retaining WAL and filling the disk).
- Explain changelog semantics: how updates and deletes flow through Flink and become upserts and deletes in the OLAP store.
- Troubleshoot issues anywhere in the pipeline with a full grasp of what's going on.

## Constraints
- 2 to 4 hours per week.
- Free only. Local Docker Compose on an Apple Silicon Mac (16 GB RAM; Docker gets about 10 GB). Free cloud tiers are welcome where they better mimic the real world.
- Owns _Kafka: The Definitive Guide_ (2nd ed.) and _Stream Processing with Apache Flink_; can get other books.
- Learns by doing: one technology at a time, with reading homework from the best source available (docs, books, articles), sized to the topic.

## Out of scope
- Nothing yet. Revisit as the course progresses.
