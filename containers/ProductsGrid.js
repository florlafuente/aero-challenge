import Menu from '../components/Menu'
import ProductCard from '../components/ProductCard'

const ProductsGrid = () => (
  <section className='products-grid'>
    <Menu filter={true}/>
      <div className='product-cards-containers'>
        <ProductCard canRedeem={false}/>
      </div>
    <Menu filter={false} />
    <style jsx>{`
      .products-grid {
        height: 100%;
        padding: 65px 132px 74px;
        width: 100%;
      }
      .product-cards-containers {
        padding: 42px 0 60px;
      }
    `}</style>
  </section>
)

export default ProductsGrid