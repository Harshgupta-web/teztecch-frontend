// Home.jsx
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import NewsCard from "./NewsCard";
import { fetchAllArticles } from "../api/strapi";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = ({ searchTerm = "" }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles().then((data) => {
      setArticles(data || []);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="loader">Loading latest stories...</div>;

  // 1) Filter by search term (title + excerpt)
  const term = searchTerm.trim().toLowerCase();
  const filteredArticles = term
    ? articles.filter((art) => {
        const t = (art.title || "").toLowerCase();
        const e = (art.excerpt || "").toLowerCase();
        return t.includes(term) || e.includes(term);
      })
    : articles;

  // 2) Use filtered list for rest of logic
  const featured = filteredArticles[0];
  const others = filteredArticles.slice(1);

  const latestStories = others.slice(0, 6);
  const trendingStories = others.slice(6, 15);

  // Group remaining articles by category
  const groupedByCategory = others.reduce((acc, art) => {
    const cat = (art.category || "news").toLowerCase();
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(art);
    return acc;
  }, {});

  return (
    <main className="home-container">
      {featured && <Hero article={featured} />}

      {/* 1. Latest Stories row (top) */}
      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">Latest Stories</h2>
        </div>
        <div className="horizontal-scroll">
          {latestStories.map((art) => (
            <div className="horizontal-item" key={art.id}>
              <NewsCard article={art} />
            </div>
          ))}
        </div>
      </section>

      {/* 2. Trending Now row */}
      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">Trending Now</h2>
        </div>
        <div className="horizontal-scroll">
          {trendingStories.map((art) => (
            <div className="horizontal-item" key={art.id}>
              <NewsCard article={art} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. Category sections with See All */}
      {Object.entries(groupedByCategory).map(([cat, list]) => (
        <section key={cat} className="section-block">
          <div className="section-header">
            <h2 className="section-title">{cat.toUpperCase()}</h2>
            <Link to={`/category/${cat}`} className="section-see-all">
              See all
            </Link>
          </div>
          <div className="horizontal-scroll">
            {list.map((art) => (
              <div className="horizontal-item" key={art.id}>
                <NewsCard article={art} />
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Home;
