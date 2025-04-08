export function currencyFormater(value) {
  if (typeof value === "string") {
    value = +value;
  }

  return value.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "INR",
  });
};

export function setUrlParam(key, value) {
  const {location: {href, pathname}} = window;
  const url = new URL(href);
  url.searchParams.set(key, value);
  return pathname + url.search;
};

export function removeUrlParam(key) {
  const {location: {href, pathname}} = window;
  const url = new URL(href);
  url.searchParams.delete(key)
  return pathname + url.search;
};
