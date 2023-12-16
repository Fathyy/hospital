import { bannerTwo } from "../assets"
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center my-12">
      {/* description */}
      <div className="mb-8 sm:mb-0 w-full sm:w-2/5 space-y-8">
        <h1 className="text-5xl font-bold">Virtual healthcare for you</h1>
        <p className="text-gray-400">Trafalgar provides progressive, and affordable healthcare, 
          accessible on mobile and online for everyone</p>
          <button className="bg-accent text-white px-6 py-3 rounded-full
           text-xl hover:bg-transparent border border-accent hover:border-accent 
          hover:text-accent transition-bg duration-300 ease-in-out">Consult today</button>
      </div>

      {/* image */}
      <div className="w-full sm:w-2/5">
        <div className="bg-accent w-full aspect-square rounded-full">
          <img src={bannerTwo} alt="image" className="w-full sm:w-3/4"/>
        </div>
      </div>
    </div>
  )
}

export default Hero