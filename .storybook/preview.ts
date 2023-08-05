import type { Preview } from "@storybook/react";
/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
import "../src/index.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: "dracula", dataTheme: "dracula", color: "#262935" },
        { name: "halloween", dataTheme: "halloween", color: "#212121" },
        { name: "aqua", dataTheme: "aqua", color: "#335CA8" },
        { name: "corporate", dataTheme: "corporate", color: "#FFFFFF" },
        { name: "coffee", dataTheme: "coffee", color: "#221721" },
        { name: "winter", dataTheme: "winter", color: "#FFFFFF" },
        { name: "emerald", dataTheme: "emerald", color: "#FFFFFF" },
        { name: "synthwave", dataTheme: "synthwave", color: "#1A103C" },
      ],
    },
  },
};
