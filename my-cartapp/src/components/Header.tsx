import { useState } from 'react';
// import  './../style/Header.module.css';
import style from './../style/Header.module.css'


const Header = () => {
  const [toggleMiniNav, setToggleMiniNav] = useState<boolean>(false);

 
  const handleToggleMiniNav = () => {
    setToggleMiniNav((prevState) => !prevState);
  };

  return (

    <header>
              <nav
        className={
          toggleMiniNav ? style.mobileMenu : style.initialMobileMenu
        }
      >

            
                 <ul>
                 <li >  Home <a href="#"></a></li>
                 <li > Product<a href="#"> </a></li>
                 <li >Pricing <a href="#"> </a></li>
                 <li >  Contact<a href="#"></a></li>
                 </ul>
          </nav>
    
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
          <p>Follow Us and get a chance to win 80% off </p>
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
              <img src="login.svg" alt="" />
              <a href="#">Login</a> / <a href="#">Register</a>
            </p>
           
              <img src="search.svg" alt="" />
              <img src="cart.svg" alt="" />
              <img src="like.svg" alt="" />
           

               {/* mobile view */}
                            <aside className={style.smallicon}>
                                <a href="#"> <img src="search.svg" alt="" /></a>
                                <a href="#"> <img src="cart.svg" alt="" /> </a>
                        
                              <img src="./vector.svg"   onClick={handleToggleMiniNav} alt="" />

                            </aside>
                   

          
          </div>
       
      </section>


        
    
      </header>
  );
};

export default Header;
