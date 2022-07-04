import { useRoutes } from "react-router-dom";
import router from "./router";

const app = () => {
  const element = useRoutes(router);
  return <>{element}</>;
};

export default app;

// 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
