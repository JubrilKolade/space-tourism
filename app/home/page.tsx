import React from 'react'
// import '../globals.css'

const Home = () => {
  return (
    <div 
    // style={{
    //   backgroundImage: `url('../assets/home/background-home-desktop.jpg')`,
    //   backgroundSize: 'cover',
    //   backgroundPosition: 'center',
    // }}
    className="h-screen w-full bg-black">
      <main className='w-[80%] border border-solid border-red-700 mx-auto'>
          <div className='w-full border border-solid border-red-700 mt-[400px]'>
            <div className="md:flex-col flex border border-solid border-red-700 items-center justify-around  ">
              <div className='uppercase text-white w-[40%] flex flex-col items-start justify-between h-[300px]'>
                <p>so you want to  travel to</p>
                <h1 className='text-9xl'>space</h1>
                <span className='text-wrap lowercase'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</span>
              </div>

              <div className='uppercase w-[200px] h-[200px] rounded-[50%] bg-white flex items-center justify-center'>
                <h1 className='text-center'>explore</h1>
              </div>
            </div>
          </div>
      </main>
    </div>
  )
}

export default Home