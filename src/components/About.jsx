import React from 'react';
import ilus from '../assets/ilustration/ilustration2.png';
import member from '../assets/about/members.png';
import event from '../assets/about/events.png';
import payment from '../assets/about/payments.png';
import club from '../assets/about/clubs.png';

const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <img src={ilus} alt="" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">The unseen of spending three years at Pixelgrade</h2>
            <p className="md:w-3/4 text-sm text-neutralGrey mb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus nam dolorum debitis? Ducimus voluptate consequuntur fuga esse sed culpa nobis explicabo magni quod exercitationem! Alias, fugit quod saepe animi voluptatum illo
              rerum incidunt natus quos pariatur delectus at aut ea debitis, tempora autem dolorum laudantium similique. Quasi unde necessitatibus possimus.
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>

      {/* company stats */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neiutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
              Helping a local <br />
              <span className="text-brandPrimary">business reinvent it self</span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-aroud gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={member} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">2,245,341</h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={event} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">288,341</h4>
                  <p>Event Bookings</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src={club} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">43,232</h4>
                  <p>Clubs</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src={payment} alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">1,926,436</h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
