import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsDetails from "../Shared/NewsDetails/NewsDetails";

const News = () => {
  const news = useLoaderData();
  return (
    <div>
      {news.map((news) => (
        <NewsDetails news={news}></NewsDetails>
      ))}
    </div>
  );
};

export default News;
