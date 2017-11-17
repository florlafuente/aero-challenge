import Menu from '../components/Menu'
import ProductCard from '../components/ProductCard'

const ProductsGrid = () => (
  <section className='products-grid'>
    <Menu filter={true}/>
    <ProductCard canRedeem={false}/>
    <Menu filter={false} />
    <style jsx>{`
      .products-grid {
        height: 100%;
        padding: 65px 132px 74px;
        width: 100%;
      }
    `}</style>
  </section>
)

export default ProductsGrid