import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Services from "./components/Services"
import LeadingHealthcare from "./components/LeadingHealthcare"
import Download from "./components/Download"
import Testimonials from "./components/Testimonials"
import Articles from "./components/Articles"
import Footer from "./components/Footer"

function App() {
  return (
   <div>
     <div className="container mx-auto px-6 sm:px-16">
      <Navbar/>
      <Hero/>
      <Services/>
      <LeadingHealthcare/>
      <Download/>
      <Testimonials/>
      <Articles/>
        
    </div>
    <Footer/> 
   </div> 
  )
}

export default App
