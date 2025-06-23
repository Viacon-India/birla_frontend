export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Ensure dataLayer is initialized
if (typeof window !== "undefined" && !window.dataLayer) {
  window.dataLayer = [];
}

export const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

export const event = ({ action, category, label, value }) => {
  window.dataLayer.push({
    event: action,
    category,
    label,
    value,
  });
};
