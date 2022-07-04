import { useRoutes } from "react-router-dom";
import router from "./router";

const app = () => {
  const element = useRoutes(router);
  return <>{element}</>;
};

export default app;

// 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
