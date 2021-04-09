import { server } from "../../config";
// COMMERCEJS
import commerce from "../../lib/commerce";
// COMPONENTS
import ProductList from "../../components/ProductList";

export async function getStaticProps() {
  const productsJson = await fetch(`${server}/api/products`);
  const products = await productsJson.json();
  return {
    props: {
      products,
    },
  };
}

export default function ProductsPage({ products }) {
  return (
    <div>
      <ProductList displayThisMany={100} products={products} />
    </div>
  );
}
