import { articles } from "../assets/data"

const Articles = () => {
  return (
    <div className="my-32">
      <div className="grid ss:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {articles.map((article)=>{
          return (
            <div className="bg-white shadow-xl rounded-xl flex flex-col" 
            key={article.id}>
            <img src={article.image} alt="" className="w-full h-[200px] object-cover rounded-t-lg"/>
            <div className="py-8 px-6 space-y-6">
              <h3 className="text-2xl font-bold mb-0">{article.heading}</h3>
              <p className="text-gray-400">{article.description}</p>
              <a href="#" className="text-lg font-bold mt-4 text-accent">Read more</a>
            </div>
          </div>
          );

        })}
        
      </div>
    </div>
  )
}

export default Articles