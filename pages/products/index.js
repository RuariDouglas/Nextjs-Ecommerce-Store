// COMMERCEJS
import commerce from "../../lib/commerce";
// COMPONENTS
import ProductList from "../../components/ProductList";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();
  return {
    props: {
      products,
    },
  };
}

export default function ProductsPage({ products }) {
  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
