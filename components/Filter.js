const buttons = [
  {
    name: 'Most recent',
    callToAction: 'sortByDate'
  },
  {
    name: 'Lowest price',
    callToAction: 'sortByLowPrice'
  },
  {
    name: 'Highest price',
    callToAction: 'sortByHighPrice'
  }
]


const Filter = (props) => (
  <div className='filters-container'>
    <p>Sort by:</p>
    {buttons.map((it, i)=> (
      <button className='btn active' key={i} onClick={props[it.callToAction]}>
        <span>{it.name}</span>
      </button>
    ))}
    <style jsx>{`
      .filters-container {
        border-left: 1px solid #d9d9d9;
        display: flex;
        flex-wrap: wrap;
        padding-left: 24px;
      }
      .filters-container p {
        color: var(--light-gray);
        font-size: 2.4rem;
        line-height: 4.5rem;
        letter-spacing: 0.015rem;
      }
      .filters-container .btn {
        background-color: var(--gray);
        border: none;
        border-radius: 10rem;
        height: 48px;
        margin-left: 24px;
        padding: 0 24px;
      }
      .filters-container .btn span {
        color: var(--light-gray);
        font-size: 2.4rem;
        line-height: 4.5rem;
        letter-spacing: 0.015rem;
      }
      .filters-container .btn.active {
        background-color: var(--light-blue);
      }
      .filters-container .btn.active span{
        color: var(--white);
      }
    `}</style>
  </div>
)

export default Filter 