import React from 'react'
import Fruites1 from "../images/Fruites1.png"
import Fruites2 from "../images/Fruites2.png"
import Fruites3 from "../images/Fruites3.png"

const ServicesData =[
    {
        id:1,
        image: Fruites1,
        title:"Fresh Fruits",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, molestias!",
        aosDelay:"300",
    },
    {
        id:2,
        image:Fruites2,
        title:"Fresh Fruits",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, molestias!",
        aosDelay:"500",
    },
    {
        id:3,
        image:Fruites3,
        title:"Orange Juices",
        subtitle:"Lorem ipsum dolor sit amet        consectetur adipisicing elit. Saepe, molestias!",
        aosDelay:"700",
    },
 ]

function Services() {
    
  return (
    <div className='container my-16 space-y-4'>
        {/* header section */}
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <h1 data-aos="fade-up" 
            className='text-3xl font-bold text-dark'>
                Fresh and <span className='text-primary'>Tasty Fruits</span>{""}
            </h1>

            <p data-aos="fade-up" className='text-sm opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus dolorem deserunt asperiores soluta nulla dolores porro voluptatibus rem! In!</p>
        </div>

        {/* card section */}
        <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {ServicesData.map(({id, image, title, subtitle, aosDelay}) => (

                <div key={id} data-aos="fade-up" data-aos-delay={aosDelay} className='p-4 text-center space-y-6'>

                    <img 
                        src={image} alt="Image not found" className='max-w-[200px]  mx-auto hover:scale-110 duration-300 img-shadow2'
                    />

                    <div className='space-y-2'>
                        <h1 className='text-2xl font-bold text-primary'>{title}</h1>
                        <p className='text-dark'>{subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    
  )
}

export default Services