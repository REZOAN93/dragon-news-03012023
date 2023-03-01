import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsDetails from "../Shared/NewsDetails/NewsDetails";

const Category = () => {
  const CategoriesNews = useLoaderData();
  return (
    <div>
      <h5>News List: {CategoriesNews.length}</h5>
      {
        CategoriesNews.map(news=><NewsDetails news={news}></NewsDetails>)
      }
    </div>
  );
};

export default Category;
