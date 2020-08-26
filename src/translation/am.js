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
  startDate: "Սկսման ամսաթիվը",
  endDate: "Ավարտի ամսաթիվը",
  statuses: {
    [notStarted]: "Չսկսված",
    [inProgress]: "Ընթացքում գտնվող",
    [constructionIsCompleted]: "Կառուցապատման աշխատանքները փաստացի ավարտված",
    [suspendedByCourtDecision]: "Դատարանի որոշումով կասեցված",
    [permissionRevoked]: "Թույլտվությունը ուժը կորցրած ճանաչված",
    [temporarilySuspended]: "Ժամանակավորապես դադարեցված",
  },
};
