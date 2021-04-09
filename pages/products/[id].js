import { server } from "../../config";
// COMMERCEJS
import commerce from "../../lib/commerce";

export async function getStaticProps({ params }) {
  const { id } = params;

  const productsJson = await fetch(`${server}/api/products`);
  const products = await productsJson.json();
  const product = products.filter((product) => {
    return product.id === id;
  });

  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  const productsJson = await fetch(`${server}/api/products`);
  const products = await productsJson.json();
  return {
    paths: products.map((product) => ({
      params: {
        id: product.id,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {
  const prod = product[0];
  return (
    <>
      <p>
        {prod.name}
        {prod.price.formatted_with_symbol}
      </p>
    </>
  );
}
