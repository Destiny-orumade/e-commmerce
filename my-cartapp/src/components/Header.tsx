import { useState } from 'react';
import style from './../style/Header.module.css';

const Header = () => {
  const [toggleMiniNav, setToggleMiniNav] = useState<boolean>(false);

  const handleToggleMiniNav = () => {
    setToggleMiniNav((prevState) => !prevState);
  };

   const handleMobileLinkClick = () => {
    setToggleMiniNav(false);
  };

  return (
    <header>
      {/* Mobile Dropdown Nav */}
      <nav className={toggleMiniNav ? style.mobileMenu : style.initialMobileMenu}>
        <ul onClick={() => setToggleMiniNav(false)}>
         <li><a href="#" onClick={handleMobileLinkClick}>Home</a></li>
          <li><a href="#" onClick={handleMobileLinkClick}>Product</a></li>
          <li><a href="#" onClick={handleMobileLinkClick}>Pricing</a></li>
          <li><a href="#" onClick={handleMobileLinkClick}>Contact</a></li>
        </ul>
      </nav>

      {/* Top Bar */}
      <section className={style.header}>
        <div className={style.topbar}>
          <div className={style.topleft}>
            <p>
              <img src="call.svg" alt="phone" />
              (225) 555-0118
            </p>
            <p>
              <img src="mail.svg" alt="email" />
              michelle.rivera@example.com
            </p>
          </div>
          <div className={style.topcenter}>
            <p>Follow Us and get a chance to win 80% off</p>
          </div>
          <div className={style.topright}>
            <p>Follow Us:</p>
            <img src="a3.svg" alt="youtube" />
            <img src="a1.svg" alt="twitter" />
            <img src="a2.svg" alt="facebook" />
            <img src="a.svg" alt="insta" />
          </div>
        </div>
      </section>

      {/* Navbar Section */}
      <section className={style.navbar}>
        <nav>
          <h1>Bandage</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a> <img src="drop.svg" alt="" /></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Pages</a></li>
          </ul>
        </nav>

        <div className={style.navicons}>
          <p>
            <img src="login.svg" alt="login" />
            <a href="#">Login</a> / <a href="#">Register</a>
          </p>
          <img src="search.svg" alt="search" />
          <img src="cart.svg" alt="cart" />
          <img src="like.svg" alt="like" />
        </div>

        {/* Mobile Toggle Icons */}
        <aside className={style.smallicon}>
          <a href="#"><img src="search.svg" alt="search" /></a>
          <a href="#"><img src="cart.svg" alt="cart" /></a>
        
           <div
            className={`${style.hamburger} ${toggleMiniNav ? style.active : ''}`}
            onClick={handleToggleMiniNav}
          >
            <span></span>
            <span></span>
            <span></span>
            
          </div>
        </aside>
      </section>
    </header>
  );
};

export default Header;
