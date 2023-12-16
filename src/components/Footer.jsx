const Footer = () => {
  return (
    <div className="mt-32 bg-accent">
      <div className="container mx-auto px-6 sm:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between py-16 text-white opacity-80">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold flex items-center justify-center
              p-4 w-5 h-5 bg-white rounded-full text-accent">T</p>
              <p className="text-2xl font-bold">Hospital</p>
            </div>
            <p>Trafalgar provides progressive, and affordable healthcare <br /> accessible on mobile and online 
            for everyone</p>
            <p>©Fathi Abdi 2023. All rights reserved</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Company</h3>
            <div>
              <p>About</p>
              <p>Contact</p>
              <p>Sitemap</p>
              <p>Location</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Region</h3>
            <div>
              <p>About</p>
              <p>Contact</p>
              <p>Sitemap</p>
              <p>Location</p>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-bold">Help</h3>
            <div>
              <p>About</p>
              <p>Contact</p>
              <p>Sitemap</p>
              <p>Location</p>
            </div>
          </div>
        </div>
      </div>   
    </div>
  )
}

export default Footer