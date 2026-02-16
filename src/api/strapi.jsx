const STRAPI_URL = "https://teztecch-backend.onrender.com";

const normalize = (item) => {
  if (!item) return null;
  const id = item.id;
  const attrs = item.attributes || item;

  return {
    id,
    ...attrs,
    title: attrs.Title || attrs.title,
    slug: attrs.Slug || attrs.slug,
    excerpt: attrs.Excerpt || attrs.excerpt || "",
    content: attrs.Content || attrs.content,
    coverImage: attrs.CoverImage || attrs.coverImage,
    category: attrs.Category || attrs.category || "news",   // <-- add this
  };
};


export const fetchLatestArticle = async () => {
  try {
    const res = await fetch(`${STRAPI_URL}/api/articles?populate=*&sort=publishedAt:desc&pagination[pageSize]=1`);
    const json = await res.json();
    return json.data?.length ? normalize(json.data[0]) : null;
  } catch (err) {
    console.error("API Error:", err);
    return null;
  }
};

export const fetchArticleBySlug = async (slug) => {
  if (!slug) return null;
  try {
    const res = await fetch(`${STRAPI_URL}/api/articles?filters[Slug][$eq]=${slug}&populate=*`);
    const json = await res.json();
    return json.data?.length ? normalize(json.data[0]) : null;
  } catch (err) {
    console.error("API Error:", err);
    return null;
  }
};

// Add this new function to your existing file
// strapi.jsx
export const fetchAllArticles = async () => {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/articles?populate=*&sort=publishedAt:desc&pagination[pageSize]=20`
    );
    const json = await res.json();
    return json.data ? json.data.map(item => normalize(item)) : [];
  } catch (err) {
    console.error("Fetch All Error:", err);
    return [];
  }
};



