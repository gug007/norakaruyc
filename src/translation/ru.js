import {
  notStarted,
  inProgress,
  constructionIsCompleted,
  suspendedByCourtDecision,
  permissionRevoked,
  temporarilySuspended,
} from "./en";

export default {
  district: "Район",
  address: "Адрес",
  developer: "Застройщик",
  status: "Статус",
  startDate: "Data начало",
  endDate: "Data окончания",
  statuses: {
    [notStarted]: "Не начато",
    [inProgress]: "В процессе",
    [constructionIsCompleted]: "Строительные работы фактически завершены",
    [suspendedByCourtDecision]: "Приостановлено по решению суда",
    [permissionRevoked]: "Разрешение отозвано",
    [temporarilySuspended]: "Временно приостановлено",
  },
};
