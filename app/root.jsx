import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";

import { storyblokInit, apiPlugin } from "@storyblok/react";

import CallToAction from "./components/blocks/CallToAction";
import Catalog from "./components/blocks/Catalog";
import Page from "./components/content-types/Page";
import PersonalizedContent from "./components/blocks/PersonalizedContent";
import RichText from "./components/blocks/RichText";

const components = {
  call_to_action: CallToAction,
  catalog: Catalog,
  page: Page,
  personalized_content: PersonalizedContent,
  rich_text: RichText,
};

storyblokInit({
  accessToken: "AK2gOnJ2NjAyx1nhomncXwtt",
  use: [apiPlugin],
  components,
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />

        <Links />
      </head>

      <body>
        <Outlet />

        <ScrollRestoration />

        <Scripts />

        <LiveReload />
      </body>
    </html>
  );
}
