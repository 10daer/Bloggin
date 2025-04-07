import { Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./PageShell.css";
import { childrenPropType } from "./PropTypeValues";
import { PageContextProvider, usePageContext } from "./usePageContext";

export { PageShell };

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
};

function PageShell({ pageContext, children }) {
  const { urlPathname } = usePageContext();

  // State for page transitions
  const [isShowing, setIsShowing] = useState(false);

  useEffect(() => {
    setIsShowing(true);
    return () => setIsShowing(false);
  }, [urlPathname]);

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Transition
              show={isShowing}
              enter="transition-opacity duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div>{children}</div>
            </Transition>
          </main>
          <Footer />
        </div>
      </PageContextProvider>
    </React.StrictMode>
  );
}
