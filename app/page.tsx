import React from 'react'

const Home = () => {

  return (
    <div className="h-screen w-full bg-black bg-[url(/assets/home/background-home-mobile.jpg)] md:bg-[url(/assets/home/background-home-tablet.jpg)] lg:bg-[url(/assets/home/background-home-desktop.jpg)] bg-cover bg-center " >
      <main className='w-[80%] mx-auto'>
          <div className='w-full flex justify-center items-center h-screen '>
            <div className="flex flex-col lg:flex-row  items-center justify-between lg:justify-around h-auto">
              <div className='text-white w-[auto] md:w-[40%] flex flex-col items-center lg:items-start justify-between h-[300px]'>
                <p className='uppercase text-center tracking-[2px]'>so you want to  travel to</p>
                <h1 className='uppercase text-8xl lg:text-9xl text-center'>space</h1>
                <span className='text-wrap text-center'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</span>
              </div>

              <div className='uppercase w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] rounded-[50%] bg-white flex items-center justify-center mt-4'>
                <h1 className='text-center'>explore</h1>
              </div>
            </div>
          </div>
      </main>
    </div>
  )
}

export default Home