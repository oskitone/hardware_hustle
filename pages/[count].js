import { isUndefined } from "lodash";
import { useRouter } from "next/router";
import Home from "pages/index";

export default function MultiPageSheet() {
  const router = useRouter();
  return (
    <Home
      count={parseInt(router.query.count)}
      reverse={!isUndefined(router.query.reverse)}
    />
  );
}
