import { useRouter } from "next/router";
import Home from "pages/index";

export default function MultiPageSheet() {
  const router = useRouter();
  return <Home count={parseInt(router.query.count)} />;
}
