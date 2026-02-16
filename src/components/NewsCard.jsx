import "../styles/NewsCard.css";
import { Link } from "react-router-dom";

const STRAPI_URL = "https://teztecch-backend.onrender.com";

const NewsCard = ({ article }) => {
  const { title, excerpt, slug, coverImage, category } = article;

  const imageObj = coverImage?.data?.attributes || coverImage;
  const imageUrl = imageObj?.url
    ? `${STRAPI_URL}${imageObj.url}`
    : "https://via.placeholder.com/400x250";

  const safeExcerpt = excerpt ? `${excerpt.substring(0, 160)}...` : "";

  return (
    <Link to={`/article/${slug}`} className="news-card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        {category && (
          <span className="card-category">{category}</span>
        )}
        <h3 className="card-title">{title}</h3>
        <p className="card-excerpt">{safeExcerpt}</p>
      </div>
    </Link>
  );
};

export default NewsCard;
