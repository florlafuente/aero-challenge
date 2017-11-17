import Filter from './Filter.js'

const PageMenu = ( {filter} ) => (
  <nav className='page-container'>
    <div className='items-number'>
      <p>16 of 32 products</p>
    </div>
    {filter &&
      <Filter />
    }
    <div className='navigation-buttons'>
      <button>
        <span>atras</span>
      </button>
      <button>
        <span>adelante</span>
      </button>
    </div>
    <style jsx>{`
      .page-container {
        align-content: center;
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
        margin-left: auto;
      }
    `}</style>
  </nav>
)

export default PageMenu