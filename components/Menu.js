import Filter from './Filter.js'

const Menu = ( { productsQuantity, filter, handleBackPagination, handleForwardPagination, page, productNumber } ) => (
  <nav className='menu-container'>
    <div className='items-number'>
      <p>{productNumber} of {productsQuantity} products</p>
    </div>
    {filter &&
      <Filter />
    }
    <div className='navigation-buttons'>
      <button className='prev-next-btn prev' onClick={handleBackPagination} disabled={page===1}>
      </button>
      <button className='prev-next-btn next' onClick={handleForwardPagination} disabled={productNumber >= productsQuantity}>
      </button>
    </div>
    <style jsx>{`
      .menu-container {
        align-content: center;
        border-bottom: 1px solid #d9d9d9;
        display: flex;
        height: 72px;
        padding-bottom: 24px;
        width: 100%;
      }
      .items-number {
        padding-right: 24px;
      }
      .items-number p {
        color: var(--dark-gray);
        font-size: 2.4rem;
        line-height: 4.5rem;
        letter-spacing: -0.015rem;
      }
      .navigation-buttons {
        display: flex;
        flex-wrap; wrap;
        justify-content: space-between;
        margin-left: auto;
        width: 108px;
      }
      .prev-next-btn {
        background: transparent;
        background-size: cover;
        background-repeat: no-repeat;
        border:1px solid #d9d9d9;
        border-radius: 100%;
        height: 46px;
        width: 46px;
      }
      .prev-next-btn.prev {
        background-image: url('/static/assets/icons/arrow-left.svg');
      }
      .prev-next-btn.next {
        background-image: url('/static/assets/icons/arrow-right.svg');
      }
      .prev-next-btn:disabled {
        visibility: hidden;
      }
    `}</style>
  </nav>
)

export default Menu