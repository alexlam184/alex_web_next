import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'My personal website'}</title>
        <link rel="icon" type="image/png" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤯</text></svg>" sizes="16x16" />
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'my profile'} />
      </Helmet>
      <App />
    </>
  );
};
