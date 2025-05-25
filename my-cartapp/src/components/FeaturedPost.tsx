import style from './../style/FeaturedPost.module.css'

const FeaturedPost = () => {
  return (
    <section className={style.FeaturedPost}>
        <aside className={style.FeaturedPostDiv}>
            {/* Products  */}
                <div className={style.FeaturedHead}>
                     <h4>Featured Products</h4>
                        <h3>THE BEST SERVICES</h3>
                            <p>Problems trying to resolve the conflict between </p>
                </div>

                    <div className={style.FeaturedPostDiv1}>
                        <div>
                            <img src="./easy.svg" alt="icon" />
                              <h3>Easy Wins</h3>
                                <p>Get your best looking smile <br /> now!</p>
                        </div>
                             
                        <div>
                            <img src="./book.svg" alt="icon" />
                               <h3>Concrete</h3>
                                <p>Defalcate is most focused in <br /> helping you discover your most <br /> beautiful smile</p>
                        </div>

                        <div>
                            <img src="pro.svg" alt="icon" />
                               <h3>Hack Growth</h3>
                                 <p> Overcome any hurdle or any <br /> other problem .</p>
                        </div>
                    </div>
        </aside>

                      <aside className={style.FeaturedPostDiv2}>
                           {/* Posts */}
                              <div className={style.FeaturedHead}>
                                  <h6>Practice Advice</h6>
                                     <h2>Featured Posts</h2>
                              </div>

                              <div className={style.Posts}>
                                 <div className={style.PostsDiv}>
                                     <aside className={style.PostsDivAside1}>
                                         <img src="./bed1.svg" alt="bedroom1" />
                                            <p>NEW</p>
                                     </aside>

                                     <aside className={style.PostsDivAside2}>
                                           <div className={style.PostsSpan}>
                                              <span>Google</span>
                                              <span>Trending</span>
                                              <span>New</span>
                                           </div>

                                            <h4>Loudest à la Madison #1 <br />  (L'integral)</h4>
                                                <p> We focus on ergonomics and meeting <br /> you where you work. It's only a <br /> keystroke away. </p>

                                              <div className={style.Clock}>
                                                   <p>
                                                    <img src="./clock.svg" alt="timer" />
                                                        22 April 2021
                                                   </p>
                                                     <p>
                                                        <img src="./tag.svg" alt="timer" />
                                                            10 comments
                                                     </p>
                                                </div>  

                                                 <a href="#">
                                                     Learn More 
                                                       <img src="./arc.svg" alt="" />
                                               </a>
                                     </aside>
                                 </div>

                                       
                                       <div className={style.PostsDiv}>
                                     <aside className={style.PostsDivAside1}>
                                         <img src="./bed3.svg" alt="bedroom1" />
                                            <p>NEW</p>
                                     </aside>

                                     <aside className={style.PostsDivAside2}>
                                           <div className={style.PostsSpan}>
                                              <span>Google</span>
                                              <span>Trending</span>
                                              <span>New</span>
                                           </div>

                                            <h4>Loudest à la Madison #1 <br />  (L'integral)</h4>
                                                <p> We focus on ergonomics and meeting <br /> you where you work. It's only a <br /> keystroke away. </p>

                                              <div className={style.Clock}>
                                                   <p>
                                                    <img src="./clock.svg" alt="timer" />
                                                        22 April 2021
                                                   </p>
                                                     <p>
                                                        <img src="./tag.svg" alt="timer" />
                                                            10 comments
                                                     </p>
                                                </div>  

                                                 <a href="#">
                                                     Learn More 
                                                       <img src="./arc.svg" alt="" />
                                               </a>
                                     </aside>
                                 </div>

                                       
                                           <div className={style.PostsDiv}>
                                     <aside className={style.PostsDivAside1}>
                                         <img src="./bed2.svg" alt="bedroom1" />
                                            <p>NEW</p>
                                     </aside>

                                     <aside className={style.PostsDivAside2}>
                                           <div className={style.PostsSpan}>
                                              <span>Google</span>
                                              <span>Trending</span>
                                              <span>New</span>
                                           </div>

                                            <h4>Loudest à la Madison #1 <br />  (L'integral)</h4>
                                                <p> We focus on ergonomics and meeting <br /> you where you work. It's only a <br /> keystroke away. </p>

                                              <div className={style.Clock}>
                                                   <p>
                                                    <img src="./clock.svg" alt="timer" />
                                                        22 April 2021
                                                   </p>
                                                     <p>
                                                        <img src="./tag.svg" alt="timer" />
                                                            10 comments
                                                     </p>
                                                </div>  

                                                 <a href="#">
                                                     Learn More 
                                                       <img src="./arc.svg" alt="" />
                                               </a>
                                     </aside>
                                 </div>

                                            


                              </div>

                      </aside>
    </section>
  )
}

export default FeaturedPost