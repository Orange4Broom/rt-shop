import Card from '../../components/card/Card';
import DefaultLayout from '../../layouts/DefaultLayouts';
import ProductsArray from '../../hooks/ProductsArray';
import './home.scss';
import Icon from '../../components/icon/Icons';

function Home() {
  return (
    <DefaultLayout>
      <div className="Home">
        <form className="products-filter">
          <div className="search">
            <input type="text" placeholder="Search" className="search-bar" />
            <button type="submit" className="search-button">
              <Icon type="fas" name="search" color="" />
            </button>
          </div>

          {/* <div className="filters">
            <span>
              Category:
              <select name="category" id="category">
                <option value="all">All</option>
                <option value="notebook">Notebook</option>
                <option value="smartphone">Smartphone</option>
                <option value="tablet">Tablet</option>
                <option value="keyboard">Keyboard</option>
                <option value="mouse">Mouse</option>
                <option value="headphones">Headphones</option>
                <option value="monitor">Monitor</option>
              </select>
            </span>

            <span>
              Price:
              <select name="sort" id="sort">
                <option value="price">Price</option>
                <option value="name">Name</option>
              </select>
            </span>

            <span>
              Sort:
              <select name="order" id="order">
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
            </span>
          </div> */}
        </form>
        <div className="grid-wrapper">
          {ProductsArray().map((product) => (
            <Card
              key={product.id}
              id={product.id}
              category={product.category}
              name={product.name}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}

export default Home;
