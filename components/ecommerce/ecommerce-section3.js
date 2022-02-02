import Image from 'next/image';
import React from 'react';

const EcommerceSection3 = ({data}) => {
    const {title, content, mockups, subtitle, subcontent } = data;
  
  return <section className="ecommerce3">
     <div>
        <h2>{title}</h2>
        <span className="line line-yellow line-small"></span>
        <p>{content}</p>
     </div>
      <div >

          <div>
            <Image height={400} width={197.69} src={mockups[0]}/> 
            </div>

          <div>
            
            <Image height={400} width={197.69} src={mockups[1]}/>
            </div>

          <div>
            
            <Image height={400} width={197.69} src={mockups[2]}/>
            </div>
      </div>
      <div>
          
          <h3>{subtitle}</h3>
          <p>{subcontent}</p>
      </div>
  </section>;
};

export default EcommerceSection3;
