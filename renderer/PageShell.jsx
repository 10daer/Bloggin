import PropTypes from "prop-types";
import React from "react";
import App from "./App";
import "./PageShell.css";
import { childrenPropType } from "./PropTypeValues";
import { PageContextProvider } from "./usePageContext";

export { PageShell };

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};

function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <App>{children}</App>
      </PageContextProvider>
    </React.StrictMode>
  );
}
