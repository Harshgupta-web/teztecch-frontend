// src/pages/TopicsPage.jsx
import { useEffect, useState } from "react";
import { fetchAllArticles } from "../api/strapi";
import NewsCard from "../components/NewsCard";
import "../styles/Topic.css";

const TopicsPage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { slug: "news", name: "News", color: "#ef4444" },
    { slug: "business", name: "Business", color: "#f59e0b" },
    { slug: "sports", name: "Sports", color: "#10b981" },
    { slug: "tech", name: "Tech", color: "#3b82f6" },
    { slug: "lifestyle", name: "Lifestyle", color: "#8b5cf6" },
  ];

  useEffect(() => {
    fetchAllArticles().then((data) => {
      setArticles(data || []);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="loader">Loading topics...</div>;
  }

  const getCategoryArticles = (category) => {
    return articles
      .filter((a) => (a.category || "").toLowerCase() === category.toLowerCase())
      .slice(0, 3);
  };

  return (
    <main className="topics-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Explore Topics</h1>
          <p className="hero-subtitle">
            Dive into stories from Nagpur and beyond, organized by category
          </p>
        </div>
      </section>

      <section className="topics-grid">
        <div className="container">
          {categories.map((category) => {
            const categoryArticles = getCategoryArticles(category.slug);
            return (
              <div key={category.slug} className="topic-section">
                <div className="topic-header">
                  <h2 className="topic-title" style={{ color: category.color }}>
                    {category.name}
                  </h2>
                  <a href={`/stories?category=${category.slug}`} className="topic-link">
                    View All →
                  </a>
                </div>
                <div className="topic-articles">
                  {categoryArticles.length === 0 ? (
                    <p>No articles yet in this category</p>
                  ) : (
                    categoryArticles.map((article) => (
                      <NewsCard key={article.id} article={article} />
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default TopicsPage;
