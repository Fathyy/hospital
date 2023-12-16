const Item = ({image, heading, paragraph}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between">
      <div className="w-full sm:w-1/2">
        <img src={image} alt="" className="w-full h-[300px] object-cover sm:w-9/12" />
      </div>

      <div className="w-full sm:w-1/2">
        <h1 className='text-4xl font-bold mb-10 relative'>{heading}</h1>
        <p className='text-gray-400'>{paragraph}</p>
        <div className="flex justify-center items-center sm:block">
        <button className="bg-transparent border border-accent text-accent px-6 py-3 rounded-full
          outline-none mt-12 text-xl hover:bg-accent hover:text-white transition-bg duration-300 ease-in-out">Get started</button>
        </div>
      </div>
    </div>
  )
}

export default Item