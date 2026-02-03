## 🚀 Quick Start (5 Minutes)

Get the archival solution running quickly in a non-production environment.

### Step 1: Create Archive Table
- Create `pp_request_archive`
- Mirror active table schema
- Add metadata fields:
  - Archived On
  - Source Record ID

### Step 2: Import Power Automate Flows
- Import flows from `/power-automate`
- Update Dataverse connections
- Test with a single record

### Step 3: Update Power Pages List
- Filter active list:
pp_isarchived eq false

- Publish site

### Step 4: Run Archive Flow
- Mark a record as archived
- Trigger the archive flow
- Confirm record appears in archive table

### Step 5: Verify Admin UI
- Open admin-only page
- View archived records
- Test restore (optional)

✅ Your archival pipeline is now active.
