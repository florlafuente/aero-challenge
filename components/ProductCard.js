const ProductCard = ( { canRedeem }) => (
  <div className='product-card'>
    <img className='product-card-img' src='../static/assets/product-pics/AcerAspire-x1.png' />
    <div className='product-card-body'>
      <h3 className='product-category'>Phones</h3>
      <h2 className='product-name'>iPhone8</h2>
    </div>
    {canRedeem &&
      <img className='buy-blue' src='../static/assets/icons/buy-blue.svg' alt='Blue shop bag icon' />
    }
    {!canRedeem &&
      <div className='cant-redeem-container'>
        <p className='need-text'>You need 8400</p>
        <img src='../static/assets/icons/coin.svg' alt='Gold coin icon' className='coin-icon'/>
      </div>
    }
    <style jsx>{`
      .product-card{
        background-color: var(--white);
        box-shadow:2px 2px 4px 0 rgba(0,0,0,0.10);
        height: 276px;
        padding: 12px 12px 18px;
        position: relative;
        width: 276px;
      }
      .product-card-img {
        border-bottom: 1px solid #d9d9d9;
        height: 182px;
        width: 252px;
      }
      .product-card-body {
        padding: 20px 12px 0;
      }
      .product-category {
        color: var(--light-gray);
        font-size: 1.6rem;
        letter-spacing: -0.04rem;
      }
      .product-name {
        color: var(--dark-gray);
        font-size: 1.8rem;
        letter-spacing: -0.04rem;
      }
      .buy-blue {
        height: 42px;
        position: absolute;
        right: 12px;
        top: 12px;
        width: 42px;
      }
      .cant-redeem-container {
        align-items: center;
        background-color: var(--dark-gray);
        border-radius: 10rem;
        display: flex;
        flex-wrap: wrap;
        height: 42px;
        justify-content: center;
        opacity: 0.8;
        position: absolute;
        right: 12px;
        top: 12px;
        width: 142px;
      }
      .need-text {
        color: var(--white);
        font-size: 1.4rem;
        letter-spacing: -0.03rem;
        margin-right: 9px;
      }
      .cant-redeem-container .coin-icon {
        height: 20px;
        width: 20px;
      }
    `}</style>
  </div>
)

export default ProductCard