import Filter from './Filter.js'

const Menu = (props) => (
  <nav className='menu-container'>
    <div className='items-number'>
      <p>{props.productNumber} of {props.productsQuantity} products</p>
    </div>
    {props.filter &&
      <Filter sortByDate={props.sortByDate} 
        sortByLowPrice={props.sortByLowPrice}
        sortByHighPrice={props.sortByHighPrice} />
    }
    <div className='navigation-buttons'>
      <button className='prev-next-btn prev' onClick={props.handleBackPagination} disabled={props.page===1}>
      </button>
      <button className='prev-next-btn next' onClick={props.handleForwardPagination} disabled={props.productNumber >= props.productsQuantity}>
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
      @media screen and (max-width: 1263px) {
        .menu-container {
          flex-wrap: nowrap;
          height: auto;
        }
      }
      @media screen and (max-width: 1202px) {
        .menu-container {
          flex-wrap: wrap;
          padding-bottom: 24px;
        }
        .navigation-buttons {
           padding-bottom: 24px;
        }
      }
      @media screen and (max-width: 431px) {
        .navigation-buttons {
          margin-left: 0;
          width: auto;
        }
        .items-number p {
          font-size: 1.8rem;
        }
      }
    `}</style>
  </nav>
)

export default Menu