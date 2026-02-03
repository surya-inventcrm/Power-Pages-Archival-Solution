# 🚀 Deployment Guide – Power Pages Archival Solution

This guide walks you through deploying the archival solution end-to-end using
Power Pages, Dataverse, and Power Automate.

---

## 1️⃣ Prerequisites

- Power Pages site (authenticated users)
- Dataverse environment
- Power Automate license
- System Administrator or Power Platform Admin access

---

## 2️⃣ Dataverse Setup

1. Create **Active Table** (example: `cr_active_records`)
2. Create **Archive Table** (example: `cr_archived_records`)
3. Ensure both tables share:
   - Primary Record ID
   - Business fields
4. Add archive-specific fields:
   - ArchivedOn (DateTime)
   - ArchivedBy (Lookup – User)
   - ArchiveReason (Text)

---

## 3️⃣ Power Automate Deployment

1. Import flows from `/power-automate`
2. Update environment connections
3. Set table logical names
4. Enable both flows

---

## 4️⃣ Power Pages Configuration

1. Create Admin-only page
2. Apply Web Role restrictions
3. Paste UI snippets from:
   `/power-pages/archive-ui-snippets.html`
4. Bind list to Archive table

---

## 5️⃣ Test the Flow

- Mark a record for archive
- Verify data moved to archive table
- Confirm storage reduction
- Restore record if needed

---

## ✅ Deployment Complete
Your archival solution is now live.
