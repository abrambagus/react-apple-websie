import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://f2b310253deb9c4869120c5948f5d2b5@o4509433891782656.ingest.us.sentry.io/4509433894600704",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

// Sentry.init({
//   dsn: "https://f2b310253deb9c4869120c5948f5d2b5@o4509433891782656.ingest.us.sentry.io/4509433894600704",
//   integrations: [
//     Sentry.browserTracingIntegration(),
//     Sentry.reactRouterV6BrowserTracingIntegration({
//       useEffect: React.useEffect,
//     }),
//     Sentry.replayIntegration({
//       maskAllText: false,
//       blockAllMedia: false,
//     }),
//   ],
//   tracesSampleRate: 1.0,
//   tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
//   replaysSessionSampleRate: 0.1,
//   replaysOnErrorSampleRate: 1.0,
// });

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
