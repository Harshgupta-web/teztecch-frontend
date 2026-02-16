import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAllArticles } from "../api/strapi";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import "../styles/Category.css";   // import this file

const STRAPI_URL = "https://teztecch-backend.onrender.com";

const CategoryPage = () => {
  const { slug } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles().then((data) => {
      const filtered = (data || []).filter(
        (a) => (a.category || "").toLowerCase() === slug.toLowerCase()
      );
      setArticles(filtered);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div className="loader">Loading {slug} news...</div>;

  return (
    <main className="home-container">
      <section className="section-block">
        <div className="section-header">
          <h2 className="section-title">{slug.toUpperCase()} NEWS</h2>
        </div>

        <div className="category-list">
          {articles.map((article) => {
            const { id, title, excerpt, coverImage, content } = article;
            const imageObj = coverImage?.data?.attributes || coverImage;
            const imageUrl = imageObj?.url
              ? `${STRAPI_URL}${imageObj.url}`
              : null;

            return (
              <article key={id} className="category-article">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="category-article-image"
                  />
                )}

                <h3 className="category-article-title">{title}</h3>

                {excerpt && (
                  <p className="category-article-excerpt">{excerpt}</p>
                )}

                <div className="category-article-body">
                  {content ? (
                    <BlocksRenderer content={content} />
                  ) : (
                    <p>This story has no content in the Content field.</p>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default CategoryPage;
