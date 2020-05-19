import React, { useEffect, useState } from "react";
import ProductMain from "./Product/ProductMain.component";
import Box from "@material-ui/core/Box";

import { config } from "../../config";
import axios from "axios";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(config.SERVER_URL + "/routes/products");
      const productList = res.data;
      setProducts(productList);
    };
    fetchData();
  }, []);
  return (
    <Box display="flex" flexDirection="row" flexWrap="wrap">
      {products.map((product) => (
        <ProductMain name={product.name} desc={product.description} />
      ))}
    </Box>
  );
};

export default Homepage;
