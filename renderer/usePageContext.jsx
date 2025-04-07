// `usePageContext` allows us to access `pageContext` in any React component.
// See https://vite-plugin-ssr.com/pageContext-anywhere

import PropTypes from "prop-types";
import { createContext, useContext } from "react";
import { childrenPropType } from "./PropTypeValues";

export { PageContextProvider };
// eslint-disable-next-line react-refresh/only-export-components
export { usePageContext };

const Context = createContext(undefined);

PageContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};
function PageContextProvider({ pageContext, children }) {
  return <Context.Provider value={pageContext}>{children}</Context.Provider>;
}

function usePageContext() {
  const pageContext = useContext(Context);
  if (!pageContext)
    throw new Error("usePageContext must be used within PageContextProvider");
  return pageContext;
}
