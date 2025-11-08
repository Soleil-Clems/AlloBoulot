import React from 'react'

type PartnerItemProps = {
  image: React.ReactNode;
  title: string;
};

const PartnerItem = ({ image, title }: PartnerItemProps) => {
  return (
    <li className='flex items-center gap-2 py-5 min-w-fit'>
      <div className="text-4xl md:text-5xl grid place-items-center text-white">
        {image}
      </div>
      <div>
        <div className="text-lg md:text-2xl text-white">{title}</div>
      </div>
    </li>
  )
}

export default PartnerItem
