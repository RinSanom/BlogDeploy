import { BASE_URL } from "../../api/base_url";

// get all products
export async function getAllProducts() {
  try {
    // method fetch
    const response = fetch(`${BASE_URL}products`).then((res) => res.json());
    const data = await response;
    //   console.log("data", data.products);
    return data?.products;
  } catch (error) {
    console.log(error);
  }
}

// get a single product
export async function getSingleProducts(title) {
  try {
    // method fetch
    const response = fetch(`${BASE_URL}products/${title}`).then((res) =>
      res.json()
    );
    const data = await response;
    // console.log("data in function", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
