import "./product-card.styles.scss";

const BUTTON_TYPE_CLASSES = {
  inverted: "inverted",
};

const ProductCard = ({ product, children, buttonType, ...otherProps }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button
        className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
        {...otherProps}
      >
        {children} Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
