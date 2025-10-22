import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {

   const ServiceData = [

    {
        title: 'Advertising',
        description: 'We turn bold ideas into powerful digital solutions that connect and engage...',
        icon: assets.ads_icon
    },
    {
        title: 'Content Marketing',
        description: 'We help execute your plans and deliver results',
        icon: assets.marketing_icon
    },
    {
        title: 'Content Writing',
        description: 'We help create a marketing strategy that drives results',
        icon: assets.content_icon
    },
    {
        title: 'Social Media',
        description: 'We help build a strong social media presence and engage with your audience',
        icon: assets.social_icon,
    },
    
]



  return (
    <div id="Services" className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 pt-30 text-gray-700 dark:text-white relative'>

        <img src={assets.bgImage2} className='absolute -top-110 -left-70 -z-1 dark:hidden' />

        <Title title='How can we help?' desc='From strategy to execution, we craft digital solutions that move your business forward.'/>

        <div className='flex flex-col md:grid grid-cols-2'>
            {ServiceData.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
            ))}
        </div>
      
    </div>
  )
}

export default Services
