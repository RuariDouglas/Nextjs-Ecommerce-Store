// COMPONENTS
export default function Product({ product }) {
  const { price, name, assets } = product;
  const displayImage = assets
    .map((image) => {
      return image.url.includes("main") ? image.url : "";
    })
    .filter((url) => {
      return url !== "";
    });
  return (
    <>
      <img src={displayImage} />
      <h3>{name}</h3>
      <p>{price.formatted_with_symbol}</p>
    </>
  );
}
