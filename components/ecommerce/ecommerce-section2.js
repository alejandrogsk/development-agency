import Image from 'next/image';
import React from 'react';

const EcommerceSection2 = ({data}) => {
  const {title, logos} = data;

  return (
    <div className="ecommerce2">
        <h2>{title}</h2>
        <div className="ecommerce2__payments">
        <Image src={logos[0]} height={56.97} width={200}/>
        <Image src={logos[1]} height={83.33} width={200}/>
        <Image src={logos[2]} height={95} width={200}/>
        </div>
    </div>
  );
};

export default EcommerceSection2;
