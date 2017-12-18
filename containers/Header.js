const Header = () => (
  <header>
    <h1>Electronics</h1>
    <style jsx>{`
      header {
        padding: 0 132px 45px;
        display: flex;
        align-items: flex-end;
      }
      @media screen and (max-width: 768px) {
        header {
          padding: 0 45px 45px;
        }
      }
    `}</style>
  </header>
)

export default Header