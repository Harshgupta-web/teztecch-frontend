// src/pages/StoriesPage.jsx
import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api/strapi";
import NewsCard from "../components/NewsCard";
import "../styles/Home.css";        // re‑use container/grid styles
import "../styles/Stories.css";     // create this for extra styles

const StoriesPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "news", "business", "sports", "tech", "lifestyle"];

  useEffect(() => {
    fetchAllArticles().then((data) => {
      setArticles(data || []);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="loader">Loading stories...</div>;
  }

  const filtered =
    activeCategory === "all"
      ? articles
      : articles.filter(
          (a) => (a.category || "").toLowerCase() === activeCategory
        );

  return (
    <main className="home-container stories-page">
      <section className="section-block">
        <div className="section-header">
          <h1 className="section-title">All Stories</h1>
        </div>

        {/* Category filter chips */}
        <div className="stories-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={
                "filter-chip" +
                (activeCategory === cat ? " filter-chip--active" : "")
              }
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Stories grid */}
        <div className="stories-grid">
          {filtered.length === 0 ? (
            <p>No stories found in this category.</p>
          ) : (
            filtered.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default StoriesPage;
