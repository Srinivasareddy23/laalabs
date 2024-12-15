'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Disclaimer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <img 
        src="/images/termsandconditions.jpeg" 
        alt="Privacy Policy" 
        className="w-full h-[600px] rounded-lg py-10 px-20" 
        data-aos="fade-up" 
      />
      <section className="disclaimer-section py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-left text-blue-500 mb-6" data-aos="fade-up">
            Disclaimer
          </h1>
          <p className="mb-4" data-aos="fade-up">
            The content, material, and information provided on this website are for general information purposes only. While Laalabs strives to ensure that the information is accurate and up-to-date, we make no representations or warranties, express or implied, regarding the completeness, accuracy, reliability, or availability of the website or the information, products, services, or related graphics contained on the site for any purpose.
          </p>
          <p className="mb-4" data-aos="fade-up">
            Any reliance you place on such information is therefore strictly at your own risk. In no event shall Laalabs be liable for any loss or damage, including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
          </p>
          <p className="mb-4" data-aos="fade-up">
            Through this website, you may be able to link to other websites that are not under the control of Laalabs. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
          </p>
          <p className="mb-4" data-aos="fade-up">
            Every effort is made to keep the website up and running smoothly. However, Laalabs takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
          </p>
          <p className="mb-4" data-aos="fade-up">
            The information and materials on this website are provided "as is" without any warranty or condition, either express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
          </p>
          <p className="mb-4" data-aos="fade-up">
            Laalabs does not guarantee the accuracy, completeness, timeliness, or reliability of the information provided on this website. In addition, Laalabs shall not be responsible for any errors or omissions in the content of the website, including but not limited to, any inaccuracies or typographical errors.
          </p>
          <p className="mb-4" data-aos="fade-up">
            By using this site, you agree to indemnify, defend, and hold Laalabs harmless from and against any claims, damages, liabilities, and expenses (including reasonable attorneys' fees) arising from your use of the website or violation of these disclaimers.
          </p>
          <p className="mb-4" data-aos="fade-up">
            If you have any concerns or questions about the information on this website, please do not hesitate to contact us.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Disclaimer;
