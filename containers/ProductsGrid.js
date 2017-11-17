import Menu from '../components/Menu'

const ProductsGrid = () => (
  <section className='products-grid'>
    <Menu filter='true'/>
    <Menu />
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