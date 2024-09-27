import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ArticleDetail from "./pages/auth/ArticleDetail";
import { getSingleProducts } from "../../service/product/productAction";


export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const param = useParams();
  const title = param.title;
  useEffect(() => {
    const fetchSingleProduct = async () => {
      const product = await getSingleProducts(title);
      //   console.log("product in block", product);
      setProduct(product);
    };
    fetchSingleProduct();
  }, []);
  console.log("product", product);
  console.log("param", param);
  return (
    <div className="flex justify-center items-center dark:bg-black">
      <ArticleDetail
        thumbnail={product.thumbnail}
        title={product.title}
        description={product.description}
      />
    </div>
  );
}
