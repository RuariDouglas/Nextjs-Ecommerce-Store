// COMMERCEJS
import commerce from "../lib/commerce";
// COMPONENTS
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";
// STYLES
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const merchant = await commerce.merchants.about();
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      merchant,
      categories,
      products,
    },
  };
}

export default function Home({ merchant, categories, products }) {
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
        <ProductList products={products} />
      </div>
    </>
  );
}
