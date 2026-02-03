function markForArchive(recordId) {
  return fetch(`/_api/cr_active_records(${recordId})`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cr_markforarchive: true })
  });
}
