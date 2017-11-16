const UserProfile = ( { name, points}) => (
  <div className='user-profile'>
    <h3 className='username'>{name}</h3>
    <div className='points-counter'>
      <span className='points-text'>{points}</span>
      <span className='points-coin'></span>
    </div>
    <style jsx>{`
      .user-profile {
        display: flex;
      }
      .username {
        color: var(--dark-gray);
        font-size: 2.4rem;
        letter-spacing:-0.15px;
        line-height:48px;
        margin-right: 15px;
      }
      .points-counter {
        align-items: center;
        background-color: var(--gray);
        border-radius: 100px;
        display: flex;
        height: 4.5rem;
        justify-content: space-between;
        padding: 0 13px;
        width: 103px;
      }
      .points-text {
        color: var(--dark-gray);
        font-size: 2.4rem;
        letter-spacing:-0.15px;
        line-height:4.8rem;
      }
      .points-coin {
        background-image: url('../static/assets/icons/coin.svg');
        background-size: auto 24px;
        height: 24px;
        width: 24px;
      }
    `}</style>
  </div>
)

export default UserProfile