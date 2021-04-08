// COMPONENTS
import Head from "next/head";
// COMMERCEJS
import commerce from "../lib/commerce";
// STYLES
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const { data: categories } = await commerce.categories.list();
  const { data: products } = await commerce.products.list();

  return {
    props: {
      categories,
      products,
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
        <pre>{JSON.stringify(categories, null, 2)}</pre>
        <pre>{JSON.stringify(products, null, 2)}</pre>
      </div>
    </>
  );
}
