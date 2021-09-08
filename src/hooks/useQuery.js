import { useLocation } from "react-router-dom";
import qs from "query-string";

export default function useQuery() {
  return new qs.parse(useLocation().search);
}
