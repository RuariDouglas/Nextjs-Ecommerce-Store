import commerce from "../../../lib/commerce";

export default async function ({ query: { id } }, res) {
  commerce.products
    .retrieve(id)
    .then((product) => res.status(200).json(product))
    .catch(res.status(500).json(`No such product with id ${id} exists`));
}
