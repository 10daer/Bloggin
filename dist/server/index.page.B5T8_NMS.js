import { jsxs, jsx } from "react/jsx-runtime";
import { C as Card } from "./Card.BQTmkY2-.js";
function About() {
  return /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-gray-800 mb-6", children: "About Us" }),
    /* @__PURE__ */ jsx("section", { className: "mb-12", children: /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-4", children: "Our Story" }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Welcome to our platform! We are dedicated to bringing you high-quality content through a modern, server-side rendered application. Our journey began with a simple idea: create a seamless, fast, and accessible experience for readers while maintaining flexibility for content creators." }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Leveraging the power of Ghost CMS as a headless content management system, we've built a platform that offers the best of both worlds - easy content management with the performance benefits of server-side rendering." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "mb-12 grid grid-cols-1 md:grid-cols-3 gap-6", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Fast & Responsive" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Our application is built with performance in mind, ensuring quick load times and a responsive experience across all devices." })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "SEO Optimized" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "With server-side rendering, we ensure that content is easily discoverable by search engines, improving visibility and reach." })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Modern Architecture" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Built with Vite, React, and Helm, our application represents the cutting edge of web development practices and tools." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "mb-12", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-6", children: "Our Team" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
        {
          name: "Alex Johnson",
          role: "Lead Developer",
          image: "https://i.pravatar.cc/300?img=1"
        },
        {
          name: "Sarah Williams",
          role: "UX Designer",
          image: "https://i.pravatar.cc/300?img=5"
        },
        {
          name: "Michael Chen",
          role: "Content Manager",
          image: "https://i.pravatar.cc/300?img=3"
        }
      ].map((member, index) => /* @__PURE__ */ jsxs(Card, { className: "text-center p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: member.image,
            alt: member.name,
            className: "w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: member.name }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: member.role })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsxs("section", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold mb-6", children: "Contact Us" }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "Have questions or feedback? We'd love to hear from you!" }),
        /* @__PURE__ */ jsxs("form", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "name",
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: "Name"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "name",
                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none",
                placeholder: "Your name"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "email",
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: "Email"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                id: "email",
                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none",
                placeholder: "your.email@example.com"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(
              "label",
              {
                htmlFor: "message",
                className: "block text-sm font-medium text-gray-700 mb-1",
                children: "Message"
              }
            ),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                rows: "4",
                className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none",
                placeholder: "Your message"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              className: "inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors",
              children: "Send Message"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const index_page = {
  Page: About,
  documentProps: {
    title: "About Us | My SSR App",
    description: "Learn more about our team and our mission"
  }
};
export {
  index_page as default
};
