import '../styles/Hero.css';
import React from 'react';
import { Link } from 'react-router-dom';

const STRAPI_URL = "https://teztecch-backend.onrender.com";

const Hero = ({ article }) => {
  if (!article) return null;

  const { title, excerpt, slug, coverImage } = article;
  const imageObj = coverImage?.data?.attributes || coverImage;
  const imageUrl = imageObj?.url ? `${STRAPI_URL}${imageObj.url}` : null;

  return (
    <section className="hero-wrapper">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="hero-image" />
      )}
      <div>
        <h1 className="hero-title">{title}</h1>
        <p className="hero-excerpt">{excerpt}</p>
        {slug && (
          <Link to={`/article/${slug}`} className="hero-link">
            Read Full Story →
          </Link>
        )}
      </div>
    </section>
  );
};

export default Hero;
