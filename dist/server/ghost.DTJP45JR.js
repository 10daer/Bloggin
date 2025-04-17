import GhostContentAPI from "@tryghost/content-api";
import { useState, useMemo, useEffect } from "react";
const api = new GhostContentAPI({
  url: "https://demo.ghost.io",
  key: "22444f78447824223cefc48062",
  version: "v5.0"
});
const cache = /* @__PURE__ */ new Map();
async function fetchGhostData(type, options = {}) {
  const cacheKey = `${type}-${JSON.stringify(options)}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  try {
    let data;
    switch (type) {
      case "posts":
        data = await api.posts.browse(options);
        break;
      case "post":
        data = await api.posts.read(options);
        break;
      case "pages":
        data = await api.pages.browse(options);
        break;
      case "page":
        data = await api.pages.read(options);
        break;
      case "authors":
        data = await api.authors.browse(options);
        break;
      case "tags":
        data = await api.tags.browse(options);
        break;
      case "settings":
        data = await api.settings.browse();
        break;
      default:
        throw new Error(`Invalid content type: ${type}`);
    }
    const result = { [type]: data };
    cache.set(cacheKey, result);
    setTimeout(() => {
      cache.delete(cacheKey);
    }, 1e3 * 60);
    return result;
  } catch (error) {
    console.error(`Error fetching Ghost ${type}:`, error);
    return { [type]: null, error: error.message };
  }
}
function useGhostContent(type, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const optionsString = useMemo(() => JSON.stringify(options), [options]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchGhostData(type, options);
        setData(result[type]);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [type, optionsString, options]);
  return { data, loading, error };
}
export {
  fetchGhostData as f,
  useGhostContent as u
};
