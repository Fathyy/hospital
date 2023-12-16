import { data } from '../assets/data';
const Services = () => {
  return (
    <div className="my-32">
      <div className="flex flex-col justify-center items-center mb-12">
        <h1 className='text-4xl font-bold mb-10 relative'>Our services</h1>
        {/* <div className="bg-black absolute w-full h-[3px] -translate-x-1/2 left-1/2"></div> */}
        <p className='text-center text-gray-400'>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
      </div>

      <div className="grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

      {data.map((item)=>{
        return (
          <div className="bg-white shadow-xl py-8 px-6 rounded-xl flex flex-col space-y-6
          hover:scale-105 duration-300" key={item.id}>
            <img src={item.image} alt="imageHere" className='text-3xl w-12 h-12' />
            <h3 className='text-2xl font-bold'>{item.heading}</h3>
            <p className='text-gray-400'>{item.description}</p>
          </div>
        );
      })}
        
      </div>

      <div className="flex items-center justify-center">
        <button className="bg-transparent border border-accent text-accent px-6 py-3 rounded-full
          outline-none mt-12 text-xl hover:bg-accent hover:text-white transition-bg duration-300 ease-in-out">Get started</button>
      </div>
    </div>
  )
}

export default Services