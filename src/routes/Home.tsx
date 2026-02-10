const Home = () => {
  return (
    
    <div className='min-h-screen bg-black w-full flex items-center justify-center'>
      <div className="circlePosition w-[590px] h-[590px] bg-pink-800 rounded-full absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-[300px]">
      </div>
      <div className='flex flex-col max-w-3xl gap-5 relative z-10'>
        <h1 className='text-6xl font-bold text-gray-300 text-center mt-20'>Umapyoi Calculator</h1>
        <p className='text-xm font-bold text-gray-300 text-center'> Umamusume Database and Resources Tool for Global and Jp server</p>
      </div>
      
    </div>
    
  )
}

export default Home
