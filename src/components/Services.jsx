import React from 'react';

// Import images
import icon1 from '../assets/icons/icon1.png';
import icon2 from '../assets/icons/icon2.png';
import icon3 from '../assets/icons/icon3.png';

// Import company logos
import company1 from '../assets/company/company1.png';
import company2 from '../assets/company/company2.png';
import company3 from '../assets/company/company3.png';
import company4 from '../assets/company/company4.png';
import company5 from '../assets/company/company5.png';
import company6 from '../assets/company/company6.png';
import company7 from '../assets/company/company7.png';

const Services = () => {
  const services = [
    { id: 1, title: 'Membership Organitations', description: 'Our membership management software provides full automation of membership renewals and payment', image: icon1 },
    { id: 2, title: 'National Associations', description: 'Our membership management software provides full automation of membership renewals and payment', image: icon2 },
    { id: 3, title: 'Clubs And Groups', description: 'Our membership management software provides full automation of membership renewals and payment', image: icon3 },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Our Clients</h2>
        <p className="text-neutralGrey">We have been working with some Fortune 500+ clients</p>

        {/* company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src={company1} alt="" />
          <img src={company2} alt="" />
          <img src={company3} alt="" />
          <img src={company4} alt="" />
          <img src={company5} alt="" />
          <img src={company6} alt="" />
          <img src={company7} alt="" />
        </div>
      </div>

      {/* services card */}
      {/* ... (kode lainnya tetap sama) */}
    </div>
  );
};

export default Services;
