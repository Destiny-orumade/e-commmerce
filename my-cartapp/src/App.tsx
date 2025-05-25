import Header from './components/Header'
import './App.css'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import Service from './components/Service'
import FeaturedPost from './components/FeaturedPost'
import Product from './components/Product'

function App() {
 

  return (
    <div>
      <Header />
      <HeroSection />
      {/* <Product /> */}
      <FeaturedPost />
      <Service />
      <Footer />
    </div>
  )
}

export default App
