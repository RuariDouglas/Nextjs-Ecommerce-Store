import { server } from "../config";

// COMMERCEJS
import commerce from "../lib/commerce";
// COMPONENTS
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();
  const { data: categories } = await commerce.categories.list();

  return {
    props: {
      products,
      categories,
    },
  };
}

export default function Home({ categories, products }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>Logo Here</h1>
        {/* CATEGORIES SECTION */}
        <h3>
          <Link href={"/categories"}>
            <a>Categories</a>
          </Link>
        </h3>
        <CategoryList categories={categories} />
        {/* PRODUCTS SECTION */}
        <h3>
          <Link href="/products">
            <a>Products</a>
          </Link>
        </h3>
        <ProductList displayThisMany={6} products={products} />
      </div>
    </>
  );
}
