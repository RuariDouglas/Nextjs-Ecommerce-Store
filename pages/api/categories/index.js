import commerce from "../../../lib/commerce";

export default async function (req, res) {
  const { data: categories } = await commerce.categories.list();
  res.status(200).json(categories);
}

//http://localhost:3000/api/categories
