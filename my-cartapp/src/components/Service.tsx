
import style from './../style/Service.module.css'

const Service = () => {
  return (
     <div>
       <section className={style.service}>
            <div className={style.serviceDiv}>
                 <aside className={style.aside1}>
                         {/* Testimonial text */}
                            <h3>What they say about us</h3>
                               <img src="./p9.svg" alt="image of a testifier" />
                                   <img src="./stars.svg" alt="image of a testifier's star review" />
                                                  <h6>
                                                       Slate helps you see how many more days you need to work to reach
                                                       your financial goal.
                                                  </h6>
                                                       <p>Regina Miles</p>
                                                       <h5>Designer</h5>
                 </aside>
                     <aside className={style.aside2}>
                         {/* Testimonial images */}

                         <img src="./p1.svg" alt="images" />
                         <img src="./p2.svg" alt="images" />
                         <img src="./p8.svg" alt="images" />
                         <img src="./p3.svg" alt="images" />
                         <img src="./p10.svg" alt="images" />
                         <img src="./p7.svg" alt="images" />
                         <img src="./p4.svg" alt="images" />
                         <img src="./p5.svg" alt="images" />
                         <img src="./p6.svg" alt="images" />
                     </aside>  
            </div>        
       </section>
       <section className={style.call}>
                                          {/* Call To Action */}
                                                 <div>
                                                       <h6>Designing Better Experience</h6>
                                                            <h2>Problems trying to resolve the conflict between </h2>
                                                                 <p>
                                                                      Problems trying to resolve the conflict between the two major realms
                                                                      of Classical physics:{" "}
                                                                </p>
                                                                      <h3>$16.48</h3>
                                                                      <button>ADD YOUR CALL TO ACTION</button>
                                                 </div>
                                    </section>
                  </div>      
  )
}

export default Service