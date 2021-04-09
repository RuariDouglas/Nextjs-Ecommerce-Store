// COMMERCEJS
import commerce from "../../lib/commerce";

export async function getStaticProps({ params }) {
  const { id } = params;

  const product = await commerce.products.retrieve(id);

  return {
    props: {
      product: product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();
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
  return (
    <>
      <p>
        {product.name}
        {product.price.formatted_with_symbol}
      </p>
    </>
  );
}
