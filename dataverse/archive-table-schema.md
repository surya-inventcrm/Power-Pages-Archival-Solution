# Archive Table Schema

| Column Name | Type | Notes |
|------------|------|------|
| RecordId | GUID | Original Record ID |
| Name | Text | Copied from active |
| Status | Choice | Snapshot |
| ArchivedOn | DateTime | Archive timestamp |
| ArchivedBy | Lookup | User |
| ArchiveReason | Text | Optional |
