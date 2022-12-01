import React from 'react';
import profImg from '../../assets/profile/profImg.jpg';

function About() {

  return (
    <section className="" >
      <h2 id="about">About Me</h2>
      <img className='profile-img' src={profileImg} alt="chaz Graham" />
      <div className="">
        <p>
          Information Technology Technician studying to earn a Full-Stack Web Developer certificate. With experience ranging from simply digging holes to setting up powerline structures. His background includes lineman/groundsman, general labor, side-jobs such as construction or selling lumber, and a variety of maintenance and repair jobs. Although Maximo's past jobs are far from tech he has a passion and drive to jumpstart his tech-career! Whenever he is not doing labor-intensive work or working his I.T. fingers, he is home studying web-development in hopes of changing his career path.
        </p>
      </div>
    </section>
  );
}

export default About;
