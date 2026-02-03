function markForArchive(recordId) {
  return fetch(`/_api/cr_active_records(${recordId})`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cr_markforarchive: true })
  });
}


Sample:
fetch("/_api/pp_requests?$filter=createdon lt 2024-01-01")
  .then(r => r.json())
  .then(data => {
    data.value.forEach(r => {
      fetch(`/_api/pp_requests(${r.pp_requestid})`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pp_isarchived: true })
      });
    });
  });
