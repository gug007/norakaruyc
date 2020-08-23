import {
  notStarted,
  inProgress,
  constructionIsCompleted,
  suspendedByCourtDecision,
  permissionRevoked,
  temporarilySuspended,
} from "./en";

export default {
  district: "Շրջան",
  address: "Հասցե",
  developer: "Կառուցապատող",
  status: "Կարգավիճակը",
  permit_start_dt: "Սկսման ամսաթիվը",
  permit_end_dt: "Ավարտի ամսաթիվը",
  statuses: {
    [notStarted]: "Չսկսված",
    [inProgress]: "Ընթացքում գտնվող",
    [constructionIsCompleted]: "Կառուցապատման աշխատանքները փաստացի ավարտված",
    [suspendedByCourtDecision]: "Դատարանի որոշումով կասեցված",
    [permissionRevoked]: "Թույլտվությունը ուժը կորցրած ճանաչված",
    [temporarilySuspended]: "Ժամանակավորապես դադարեցված",
  },
};
