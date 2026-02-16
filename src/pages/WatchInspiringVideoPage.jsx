// src/pages/WatchInspiringVideoPage.jsx
import "../styles/WatchInspiringVideo.css";

const videos = [
  {
    id: 1,
    title: "Nagpur Startup Changing Lives",
    category: "Entrepreneurship",
    thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Community Clean-Up Drive",
    category: "Community",
    thumbnail: "https://img.youtube.com/vi/ysz5Wz3q1dk/hqdefault.jpg",
    url: "https://www.youtube.com/embed/ysz5Wz3q1dk",
  },
  {
    id: 3,
    title: "Youth Leading Change in Nagpur",
    category: "Youth",
    thumbnail: "https://img.youtube.com/vi/ScMzIvxBSi4/hqdefault.jpg",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    id: 4,
    title: "Women Entrepreneurs of Central India",
    category: "Women",
    thumbnail: "https://img.youtube.com/vi/tgbNymZ7vqY/hqdefault.jpg",
    url: "https://www.youtube.com/embed/tgbNymZ7vqY",
  },
];

const WatchInspiringVideoPage = () => {
  const featured = videos[0];
  const others = videos.slice(1);

  return (
    <main className="watch-page">
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">Watch Inspiring Videos</h1>
          <p className="hero-subtitle">
            Stories of hope, innovation, and change-makers from Nagpur and beyond.
          </p>
        </div>
      </section>

      {/* Featured video */}
      <section className="featured-section">
        <div className="container">
          <div className="featured-grid">
            <div className="featured-video-wrapper">
              <div className="responsive-video">
                <iframe
                  src={featured.url}
                  title={featured.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="featured-info">
              <span className="badge">{featured.category}</span>
              <h2>{featured.title}</h2>
              <p>
                Watch how individuals and teams from Nagpur are solving real problems, 
                building startups, and uplifting their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* More videos */}
      <section className="videos-section">
        <div className="container">
          <h2 className="section-title">More Inspiring Stories</h2>
          <div className="videos-grid">
            {others.map((video) => (
              <article key={video.id} className="video-card">
                <div className="thumbnail-wrapper">
                  <a href={video.url} target="_blank" rel="noreferrer">
                    <img src={video.thumbnail} alt={video.title} />
                    <div className="play-overlay">
                      <span>▶</span>
                    </div>
                  </a>
                </div>
                <div className="video-info">
                  <span className="badge small">{video.category}</span>
                  <h3>{video.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default WatchInspiringVideoPage;
