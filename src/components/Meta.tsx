import React from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaProps {
  title?: string;
  description?: string;
  keywords?: string;
}

const Meta: React.FC<MetaProps> = ({
  title = 'Welcome to Amazon Clone NextJS',
  description = 'Amazon Web App by Rudy Asa Nurafif',
  keywords = 'ecommerce, amazon, nextjs, rudy nurafif, rudy asa nurafif, web portfolio',
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

export default Meta;
