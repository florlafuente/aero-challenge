import Menu from '../components/Menu'
import ProductCard from '../components/ProductCard'

const ProductsGrid = ( { products, userPoints } ) => (
  <section className='products-grid'>
    <Menu productsQuantity={products.length} filter={true}/>
      <div className='product-cards-containers'>
        {products.map((p,i)=> (
          <ProductCard key={i} name={p.name} category={p.category} cost={p.cost} img={p.img.url} id={p._id} userPoints={userPoints} />
        ))}
      </div>
    <Menu productsQuantity={products.length} filter={false} />
    <style jsx>{`
      .products-grid {
        height: 100%;
        padding: 65px 132px 74px;
        width: 100%;
      }
      .product-cards-containers {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 42px 0 36px;
        width: 100%;
      }
    `}</style>
  </section>
)

export default ProductsGrid