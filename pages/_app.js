// LAYOUT
import Layout from "../components/Layout";
// STYLES

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
