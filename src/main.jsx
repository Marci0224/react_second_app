import { createRoot } from "react-dom/client";
import "@radix-ui/themes/styles.css";
import "./index.css";
import App from "./App.jsx";
import { Theme } from "@radix-ui/themes";
import { useState } from "react";


const Root = () => {
  const [appearance,setAppearance]=useState('light');
  return (
    <Theme
      appearance={appearance}
      accentColor="mint"
      grayColor="gray"
      panelBackground="solid"
      scaling="100%"
      radius="full"
    >
      <App appearance={appearance} setAppearance={setAppearance}/>
    </Theme>
  )
}




createRoot(document.getElementById("root")).render(<Root/>);
