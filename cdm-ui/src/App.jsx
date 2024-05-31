import { useState } from "react";
import "./components/DashboardItem/DashboardItem.css";
import { customerRole, managerRole, publicRoutes, staffRole } from "./routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { createRoot } from "react-dom";
import { browserTracingIntegration } from "@sentry/react";

Sentry.init({
  dsn: "https://21aff10c007edc141c3a2716bc40699a@o4507334562938880.ingest.de.sentry.io/4507334569558096",
  integrations: [
    Sentry.replayIntegration(),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],

  beforeSend(event, hint) {
    console.log(event, hint);
    return event;
  },
  // Session Replay
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

function App() {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("currentUser")) || []
  );

  return (
    <>
      <Router>
        <div>
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = route.layout;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
            {userData.role === "CUSTOMER" &&
              customerRole.map((route, index) => {
                const Page = route.component;
                let Layout = route.layout;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            {userData.role === "STAFF" &&
              staffRole.map((route, index) => {
                const Page = route.component;
                let Layout = route.layout;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            {userData.role === "MANAGER" &&
              managerRole.map((route, index) => {
                const Page = route.component;
                let Layout = route.layout;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
