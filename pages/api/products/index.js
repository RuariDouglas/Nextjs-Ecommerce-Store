import commerce from "../../../lib/commerce";

export default async function (req, res) {
  const { data: products } = await commerce.products.list();
  res.status(200).json(products);
}

//http://localhost:3000/api/products
