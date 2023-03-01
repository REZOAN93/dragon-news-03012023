import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "../../Category/Category";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h6>Category List: {categories.length} </h6>
      {categories.map(cat => (
        <p>
          <Link to={`categories/${cat.id}`}>{cat.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
