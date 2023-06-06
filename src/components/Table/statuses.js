const statusOptions = [
  { value: "not-contacted", label: "Not Contacted" },
  { value: "contacted", label: "Contacted" },
  { value: "to-reject", label: "To Reject" },
  { value: "rejected", label: "Rejected" },
  { value: "confirmed", label: "Confirmed" },
  { value: "not-coming", label: "Not Coming" },
  { value: "prompted", label: "Prompted" },
  { value: "ghosted", label: "Ghosted" },
];
const attendanceOptions = [
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];

export { statusOptions, attendanceOptions };
