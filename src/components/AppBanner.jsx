import React from 'react'
import banner from "../images/banner.jpg"
import apple from "../images/apple.png"
import playstore from "../images/playstore.png"
import play from "../images/play.png"
import app from "../images/apple(b).png"

const bannerStyle = {
  backgroundImage: `url(${banner})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
}

function AppBanner() {
  return (
    <>
      <div className='container my-14'>
        <div
            style={bannerStyle}
            className='sm:min-h-[320px] sm:flex sm:justify-end sm:items-center rounded-xl'
        >
        <div className='relative'>
            <div className='space-y-6 max-w-xl mx-auto'>
            <h1 data-aos="fade-up"
            data-aos-delay="100"
            
            className='text-2xl text-center sm:text-4xl font-semibold '>
              Download the app
            </h1>
            <p
              data-aos="fade-up" data-aos-delay="300" className='text-center sm:px-20 sm:text-xl'
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, molestias. Ipsum voluptates suscipit aliquam nobis.{" "}
            </p>

            {/* Image link */}
                <div 
                className='flex justify-center items-center gap-5'>
                  <a href="#">
                    <img data-aos="fade-up"
                    data-aos-delay="500"
                    src={play} alt="image not found" 
                    className='max-w-[150px] sm:max-w-[120px] md:max-w[200px]'
                    />
                  </a>
                  <a href="#">
                    <img  data-aos="fade-up"
                    data-aos-delay="500"
                    src={app} alt="image not found" 
                    className='max-w-[150px] sm:max-w-[120px] md:max-w[200px]'
                    />
                  </a>
                </div>



              {/* <div className='flex gap-2 sm:flex-wrap sm:basis-[200px] sm:right-4 absolute right-[120px]'>
                <a href="#">
                  <div className='px-2 py-2 bg-black max-w-[220px] rounded-2xl flex items-center gap-2 sm:basis-[200px]'>
                    <img src={playstore} alt="Img not found"
                    className='h-[50px] w-[50px]'
                    />
                    <div>
                      <h2 className='text-gray-300 text-sm '>GET IT ON</h2>
                      <h1 className='text-white text-xl font-semibold'>Google Play</h1>
                    </div>
                  </div>
                </a>

                <a href="#">
                  <div className='px-2 py-2 bg-black max-w-[220px] rounded-2xl flex items-center gap-2'>
                    <img src={apple} alt="" 
                    className='h-[50px] w-[50px]'
                    />
                    <div>
                      <h2 className='text-gray-300 text-sm'>Download on the</h2>
                      <h1 className='text-white text-xl font-semibold'>App Store</h1>
                    </div>
                  </div>
                </a>

              </div> */}
          

            </div>
        </div>
          
        </div>
      </div>
    </>
  )
}

export default AppBanner