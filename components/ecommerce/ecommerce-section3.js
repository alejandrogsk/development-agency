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
        {
          mockups.map((mockup,i) => <div key={i}><Image src={mockup} height={400} width={197.69}  /></div>)
        }
      </div>
      <div>
          
          <h3>{subtitle}</h3>
          <p>{subcontent}</p>
      </div>
  </section>;
};

export default EcommerceSection3;
