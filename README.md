# Power-Pages-Archival-Solution
🎯 What This Solution Solves  Power Pages portals often grow with:  Old records never deleted  Large attachments (notes)  High Dataverse storage cost  Slower list &amp; form performance  This solution provides: ✔ Automated record archival ✔ Reduced Dataverse storage usage ✔ Improved portal performance ✔ Governance-ready pattern

## 📚 Table of Contents
- [Overview](#overview)
- [Why This Repository Exists](#why-this-repository-exists)
- [What This Solution Solves](#what-this-solution-solves)
- [Architecture](#architecture)
- [Archival Lifecycle](#archival-lifecycle)
- [Quick Start (5 Minutes)](#quick-start-5-minutes)
- [Repository Structure](#repository-structure)
- [Deployment Guide](#deployment-guide)
- [Security Model](#security-model)
- [Admin Experience](#admin-experience)
- [Storage Impact Metrics](#storage-impact-metrics)
- [Demo Screenshots](#demo-screenshots)
- [Blog ↔ Repository Mapping](#blog--repository-mapping)
- [Production Notes](#production-notes)
- [Who Should Use This](#who-should-use-this)
- [Out of Scope](#out-of-scope)
- [Contributing](#contributing)
- [License](#license)

📌 Overview

This repository provides a production-ready archival solution for Power Pages designed to reduce Dataverse storage costs, improve portal performance, and support long-term governance.

The solution demonstrates:

Automated archival using Power Automate

Secure admin-only access to archived data

Attachment offloading to reduce Dataverse storage

Measurable cost and performance improvements

🎯 What This Solution Solves

Unlimited record growth in Power Pages tables

High Dataverse storage consumption

Slow list and form performance

No clear archival or purge strategy

🧩 Architecture

The solution follows a soft-archive → retain → purge lifecycle.

Key components

Active Dataverse tables (Power Pages)

Archive Dataverse tables

Power Automate archival flows

Optional Azure Blob Storage for attachments

Admin-only Power Pages UI

(See /architecture/ for diagrams)

🔄 Archival Lifecycle

Record created and used in Power Pages

Record marked as eligible for archive

Archival flow copies data + attachments

Active record hidden from users

Optional purge after retention period

Optional restore by admin

📂 Repository Structure
power-pages-archival-solution
├── README.md
├── deployment-guide.md
├── architecture/
├── power-automate/
├── power-pages/
├── scripts/
├── dashboards/
└── assets/

⚙️ Prerequisites

Power Pages (authenticated users)

Dataverse environment

Power Automate

Admin access to Power Platform

(Optional) Azure Blob Storage

🔐 Security Model
Role	Access
Portal User	Active records only
Portal Admin	View & restore archived records
Power Automate	Full access
Storage Account	Private
📊 Outcomes

Up to 40–60% Dataverse storage reduction

Faster list and form loading

Predictable long-term growth

Governance-friendly design

📦 Power Automate – Sample Flow JSON (Archive Flow)

File: power-automate/archive-records-flow.json
(Simplified, demo-friendly)

{
  "name": "Archive Old Records",
  "trigger": {
    "type": "Recurrence",
    "interval": "Day",
    "frequency": 1
  },
  "actions": {
    "Get_Records": {
      "type": "Dataverse.ListRows",
      "filter": "pp_isarchived eq true"
    },
    "Create_Archive_Record": {
      "type": "Dataverse.CreateRow",
      "inputs": {
        "table": "pp_request_archive",
        "fields": {
          "pp_title": "@{items('Get_Records')?['pp_title']}",
          "pp_sourceid": "@{items('Get_Records')?['pp_requestid']}",
          "pp_archivedon": "@utcNow()"
        }
      }
    },
    "Update_Original_Record": {
      "type": "Dataverse.UpdateRow",
      "inputs": {
        "table": "pp_request",
        "rowId": "@{items('Get_Records')?['pp_requestid']}",
        "fields": {
          "statuscode": 2
        }
      }
    }
  }
}


📌 Note
In production, add:

Attachment handling

Error logging

Transaction IDs
