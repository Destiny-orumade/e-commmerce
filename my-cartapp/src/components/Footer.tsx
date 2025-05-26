// import './../style/Footer.module.css'
import style from './../style/Footer.module.css'


const Footer = () => {
  return (
  <section className={style.footersection}>
    <div className={style.footer}>
      <div className={style.footercontainer}>
        
          <h3>Bandage</h3>
            <aside>
              <img src="fb.svg" alt="" />
              <img src="insta.svg" alt="" />
              <img src="x.svg" alt="" />
            </aside>
      </div>
    </div>

              <div className={style.links}>
                <aside>
                  <h5>Company Info </h5>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrier</a></li>
                    <li><a href="#">We are hiring</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                </aside>

                <aside>
                  <h5>  Legal </h5>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrier</a></li>
                    <li><a href="#">We are hiring</a></li>
                    <li><a href="#">Blog</a></li>
                  </ul>
                </aside>

                <aside>
                  <h5> Features </h5>
                  <ul>
                    <li><a href="#">Business Marketing</a></li>
                    <li><a href="#">User Analytic</a></li>
                    <li><a href="#">Live Chat</a></li>
                    <li><a href="#">Unlimited Support</a></li>
                  </ul>
                </aside>

                <aside>
                  <h5> Resources </h5>
                  <ul>
                    <li><a href="#">IOS </a></li>
                    <li><a href="#">Watch a Demo</a></li>
                    <li><a href="#">Customers</a></li>
                    <li><a href="#">Api</a></li>
                  </ul>
                </aside>

                <aside className={style.newsletter}>
                    <h5>Get In Touch</h5>
                         <div className={style.input}>
                            <input type="email" placeholder="Your Email" />
                                  <button>Subscribe</button>
                          </div>
                                       <p className={style.text}>Lore imp sum dolor Amit

                                       </p>

                </aside>
              </div>
                   
                    <div className={style.bottom}>
                        <h6> <span>Made With Love By</span> <span>Finland All Right Reserved</span>  </h6>
                            
                    </div>
  </section>
  )
}

export default Footer