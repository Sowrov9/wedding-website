

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm pl-30 pr-30">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl"><img src="../../../public/assets/img/logo.svg" alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Installment</a></li>
            <li><a>Categories</a></li>
            <li><a>Download app</a></li>
            <li><a>FAQ</a></li>
            <li><a>Contact Us</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">
            <svg
              className="swap-off fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <span>Menu</span>
          </a>
        </div>
      </div>
    </>
  )
}

export default Header