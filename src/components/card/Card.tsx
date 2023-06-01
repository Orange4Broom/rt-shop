import './card.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Icon from '../icon/Icons';

interface CardProps {
  id: string;
  category: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const Card = ({
  id,
  category,
  name,
  price,
  image,
  description,
}: CardProps): JSX.Element => {
  const [like, setLike] = useState(false);
  const [inCart, setInCart] = useState(false);

  function handleLike() {
    setLike(!like);
  }

  function handleAddToCart() {
    setInCart(!inCart);
  }

  return (
    <div key={id} className="Card">
      <div className="card-image">
        <Link to={`/product/${id}`} className="product-link">
          <img src={image} alt={name} />
        </Link>
      </div>
      <div className="card-content">
        <Link to={`/product/${id}`} className="product-name">
          <h2>{name}</h2>
        </Link>
        <p className="product-description">{description}</p>
        <div className="card-bottom">
          <h2 className="product-price">{price},-</h2>
          <div className="card-buttons">
            <button className="cart-button" onClick={handleAddToCart}>
              {inCart ? (
                <>
                  <Icon type="fas" name="check" color="" />
                  In cart
                </>
              ) : (
                <>
                  <Icon type="fas" name="shopping-cart" color="" />
                  Add to cart
                </>
              )}
            </button>
            <button
              className={`like-button ${like ? 'liked' : ''}`}
              onClick={handleLike}
            >
              <Icon type="fas" name="heart" color="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
