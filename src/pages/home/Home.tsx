import Card from '../../components/card/Card';
import DefaultLayout from '../../layouts/DefaultLayouts';
import ProductsArray from '../../hooks/ProductsArray';
import './home.scss';

function Home() {
  console.log(ProductsArray());
  return (
    <DefaultLayout>
      <div className="Home">
        <form className="products-filter">
          <input type="text" placeholder="Search" />
          <button type="submit">Search</button>

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

          <select name="sort" id="sort">
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>

          <select name="order" id="order">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
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
