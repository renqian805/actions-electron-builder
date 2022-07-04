import { useRoutes } from "react-router-dom";
import router from "./router";

const app = () => {
  const element = useRoutes(router);
  return <>{element}</>;
};

export default app;

// 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
