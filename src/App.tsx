import { Analytics } from "@vercel/analytics/react";
import { JasaCopyLandingPage } from "./jasacopy/JasaCopyLandingPage";

function App() {
  return (
    <>
      <JasaCopyLandingPage />
      <Analytics />
    </>
  );
}

export default App;
