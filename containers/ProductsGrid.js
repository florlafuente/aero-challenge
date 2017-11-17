import PageMenu from '../components/PageMenu'

const ProductsGrid = () => (
  <section className='products-grid'>
    <PageMenu filter='true'/>
    <PageMenu />
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