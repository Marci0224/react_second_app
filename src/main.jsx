import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import "./index.css";
import App from "./App.jsx";
import { Theme } from "@radix-ui/themes";

createRoot(document.getElementById("root")).render(
  <Theme appearance="dark"
    accentColor="mint"
    grayColor="gray"
    panelBackground="solid"
    scaling="100%"
    radius="full"
  >
    <App />
  </Theme>
);
