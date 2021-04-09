import Link from "next/link";
// COMPONENTS
import Product from "./Product";

export default function ProductList({ displayThisMany, products }) {
  if (!products) return null;
  return (
    <ul>
      {products.map((product, index) =>
        index < displayThisMany ? (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <a>
                <Product {...product} />
              </a>
            </Link>
          </li>
        ) : (
          ""
        )
      )}
    </ul>
  );
}
