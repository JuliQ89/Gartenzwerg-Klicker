import React from 'react'
import Image from 'next/image'

const Gartenzwerg = ({ image }) => {
  return (
    <div className='z-10'>
      <Image src={image} height={250} alt='' />
    </div>
  )
}

export default Gartenzwerg
