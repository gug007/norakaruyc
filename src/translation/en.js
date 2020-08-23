// Statuses
export const notStarted = "Չսկսված";
export const inProgress = "Ընթացքում գտնվող";
export const constructionIsCompleted =
  "Կառուցապատման աշխատանքները փաստացի ավարտված";
export const suspendedByCourtDecision = "Դատարանի որոշումով կասեցված";
export const permissionRevoked = "Թույլտվությունը ուժը կորցրած ճանաչված";
export const temporarilySuspended = "Ժամանակավորապես դադարեցված";

export default {
  district: "District",
  address: "Address",
  developer: "Developer",
  status: "Status",
  permit_start_dt: "Start date",
  permit_end_dt: "End Date",
  statuses: {
    [notStarted]: "Not started",
    [inProgress]: "In progress",
    [constructionIsCompleted]: "Construction work is actually completed",
    [suspendedByCourtDecision]: "Suspended by court decision",
    [permissionRevoked]: "Permission revoked",
    [temporarilySuspended]: "Temporarily suspended",
  },
};
