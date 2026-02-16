import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { fetchArticleBySlug } from '../api/strapi';

const ArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticleBySlug(slug).then((data) => {
      setArticle(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div style={{ padding: '100px', textAlign: 'center' }}>Loading article...</div>;
  if (!article) return <div style={{ padding: '100px', textAlign: 'center' }}>Article not found.</div>;

  return (
    <article style={{ maxWidth: '850px', margin: '80px auto', padding: '20px' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '30px' }}>{article.title}</h1>
      
      {article.content ? (
        <BlocksRenderer content={article.content} />
      ) : (
        <p>This article has no content in the 'Content' field.</p>
      )}
    </article>
  );
};

export default ArticlePage;