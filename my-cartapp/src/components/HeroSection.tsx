import style from './../style/HeroSection.module.css'


const HeroSection = () => {
  return (
   <section className={style.herosection}>
  <div className={style.herocontainer}>
    <div className={style.herolarge}>
      <img src="/m1.svg" alt="Plates" />
      <div className={style.herotext}>
        <p className={style.items}>5 Items</p>
        <h2 className={style.title}>FURNITURE</h2>
        <p className={style.readmore}>Read More</p>
      </div>
    </div>
    <div className={style.herosmallgroup}>
      <div className={style.herosmall}>
        <img src="/m3.svg" alt="Plant Pot" />
        <div className={style.herotext}>
          <p className={style.items}>5 Items</p>
          <h2 className={style.title}>FURNITURE</h2>
          <p className={style.readmore}>Read More</p>
        </div>
      </div>
      <div className={style.herosmall}>
        <img src="/m4.svg" alt="Lamp" />
        <div className={style.herotext}>
          <p className={style.items}>5 Items</p>
          <h2 className={style.title}>FURNITURE</h2>
          <p className={style.readmore}>Read More</p>
        </div>
      </div>
      <div className={style.herosmall}>
        <img src="/m5.svg" alt="Ceramic Pots" />
        <div className={style.herotext}>
          <p className={style.items}>5 Items</p>
          <h2 className={style.title}>FURNITURE</h2>
          <p className={style.readmore}>Read More</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default HeroSection