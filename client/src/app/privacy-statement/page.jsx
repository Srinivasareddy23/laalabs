'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PrivacyStatement = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <img src="/images/privacypolicy.jpeg" alt="Privacy Policy" className="w-full mb-6 h-[600px] rounded-lg py-10 px-20" data-aos="fade-up" />
      <div className="p-6 max-w-5xl mx-auto bg-white text-gray-800">
        <h1 className="text-4xl font-bold mb-4 text-blue-500" data-aos="fade-up">
          Privacy Statement
        </h1>
        <h2 className="text-2xl font-semibold mt-6 mb-2" data-aos="fade-up">
          Objective
        </h2>
        <p className="mb-4" data-aos="fade-up">
          This Privacy Statement outlines the privacy and data protection practices followed by Laalabs and its affiliates globally concerning the personal data of its clients, partners, employees (current or former employees, trainees), job applicants, contractors, prospects, suppliers, and members of the Board of Directors. The personal information of these individuals is handled by Laalabs ("Data Subjects").
        </p>
        <p className="mb-4" data-aos="fade-up">
          This document describes how Laalabs collects, uses, and safeguards personal information. It governs any personal data you provide to Laalabs, as well as, where applicable under local law, any personal data we gather from other sources.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-2" data-aos="fade-up">
          Scope of this Privacy Statement
        </h2>
        <p className="mb-4" data-aos="fade-up">
          This Privacy Statement outlines how Laalabs handles personal data, including how we collect, use, share, and safeguard the personal information you provide through our websites that link to this statement (collectively referred to as "Laalabs Websites").
        </p>
        <p className="mb-4" data-aos="fade-up">
          For your convenience, Laalabs may provide links to external websites. Please note, once you click on these links, you will be directed to a site that is outside the control of Laalabs. These third-party websites may have different privacy practices, which are not governed by this Privacy Statement. We do not endorse these sites and encourage you to review their privacy policies before submitting any personal information.
        </p>
        <p className="mb-4" data-aos="fade-up">
          Laalabs may offer social media features on our website that allow you to share information with your social networks and interact with Laalabs across various platforms. Your interactions with these features may result in the collection or sharing of your data. We recommend reviewing the privacy settings and policies of these platforms to understand how your information may be used or shared.
        </p>
        <p className="mb-4" data-aos="fade-up">
          Laalabs websites are not intended for use by children under the age of thirteen. If you are under the age of thirteen, you may not use our websites unless supervised by a guardian. By accessing this website, you confirm that you are at least thirteen years old.
        </p>
        <p className="mb-4" data-aos="fade-up">
          Laalabs will not be responsible for any unsolicited information provided by you. By submitting such information, you consent to Laalabs using it in accordance with this Privacy Statement.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2" data-aos="fade-up">
          Personal Information Collected by Laalabs
        </h3>
        <p className="mb-4" data-aos="fade-up">
          Laalabs may collect personal data, such as your first name, last name, email address, job title, company name, location, and phone number. We may also collect information when you request products or services from us. When collecting such information, we comply with applicable laws and share it with third parties only for the purposes stated in this Privacy Statement.
        </p>
        <p className="mb-4" data-aos="fade-up">
          Personal information you provide directly to Laalabs: We may collect personal details like your name, email address, job title, company name, location, and phone number when you fill out forms on our websites, submit inquiries via email, or contact us by phone or in writing.
        </p>
        <p className="mb-4" data-aos="fade-up">
          Personal information automatically collected by Laalabs: When you visit Laalabs websites, we may automatically collect certain details, including your IP address and cookie ID. Cookies are used to identify users and can be deleted if you clear them from your browser.
        </p>
        <p className="mb-4" data-aos="fade-up">
          We may also gather additional information about you through server logs, such as device data, IP addresses, cookies, and web beacons. This data helps us improve the functionality of Laalabs websites and enhance our marketing strategies. For more details, please refer to our section on cookies.
        </p>
        <p className="mb-4" data-aos="fade-up">
          By using Laalabs websites, including associated microsites and mobile applications, you agree to the processing of your personal data as described in this Privacy Statement.
        </p>
        <p className="mb-4" data-aos="fade-up">
          Laalabs websites may contain links to external sites that are not controlled by us and are not subject to this Privacy Statement. We recommend reviewing the privacy policy of each website you visit.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-2" data-aos="fade-up">
          Personal Information Collected from Third Parties
        </h3>
        <p className="mb-4" data-aos="fade-up">
          We may engage with third-party social media platforms or other services through which we collect personal data. Depending on your privacy settings, we may receive certain details from these platforms when you interact with Laalabs via social media.
        </p>
        <p className="mb-4" data-aos="fade-up">
          Additionally, when accessing Laalabs websites through mobile devices, we may collect your personal details such as First Name, Last Name, Email Address, Job Title, Company Name, Country, City, Phone Number, IP address, advertising ID, and device information.
        </p>
        <p className="mb-4" data-aos="fade-up">
          If you provide us with your mobile phone number, you consent to receive text notifications unless you opt out or otherwise notify us. We respect your choices and will only use your contact information for legitimate business purposes.
        </p>
        <h3 className="text-xl font-semibold mt-6 mb-2" data-aos="fade-up">
          How We Use Your Data
        </h3>
       
        <div>
        <span className="mb-4" data-aos="fade-up">
          The personal information we collect may be used to:
        </span>
          <ul className="mb-4 list-disc pl-6" data-aos="fade-up">
            <li>Provide information and services as requested by you.</li>
            <li>Assess queries and process requests for products and services.</li>
            <li>Enable you to download marketing materials and run promotional campaigns.</li>
            <li>Perform client communication, service, billing, and administration.</li>
            <li>Conduct data analysis and assess website performance.</li>
            <li>Provide tailored content and marketing based on your preferences.</li>
          </ul>
        </div>
       
        <h3 className="text-xl font-semibold mt-6 mb-2" data-aos="fade-up">
          Data Protection and Confidentiality
        </h3>
        <p className="mb-4" data-aos="fade-up">
          LaaLabs has implemented reasonable and adequate physical, technical, and administrative security measures to protect personal information from loss, misuse, alteration, or destruction. LaaLabs discloses information to third parties only for legitimate purposes, such as our service providers and agents who are bound to maintain the confidentiality of personal information and may not use the information for any unauthorized purpose. LaaLabs will ensure through formally executed contracts that the service providers are committed to providing the "same level of data protection" as applicable data protection laws and regulations.
        </p>

        <div>
          <span className="mb-4" data-aos="fade-up">
            LaaLabs will take appropriate actions to ensure that all handling of Personal Information will:
            <ul className="list-disc pl-6">
              <li>be processed in a fair and lawful manner;</li>
              <li>be collected only with the consent of the individual providing the information;</li>
              <li>be gathered only when:
                <ul className="list-decimal pl-6">
                  <li>the information is needed for a legitimate purpose connected to LaaLabs' operations;</li>
                  <li>the gathering of sensitive personal data or information is essential for that specific purpose.</li>
                </ul>
              </li>
              <li>be accessible for review by the individual, whenever they request it;</li>
              <li>be kept protected against unauthorized processing and accidental loss, destruction, or damage, in accordance with industry standards to preserve the quality and accuracy of your personal information.</li>
            </ul>
          </span>
        </div>
       

        <p className="mb-4" data-aos="fade-up">
          The rights of individuals ("Data Subjects") regarding their personal data:
        </p>
        <div>
          <span className="mb-4" data-aos="fade-up">
            Your rights may vary depending on the applicable data protection laws in your region. We acknowledge your right to be informed, access, correct, delete, request restrictions, portability, object, and rights related to automated decision-making and profiling in relation to our use of your personal data, as required by law. We also take steps to ensure the accuracy and timeliness of the personal data we collect. Depending on the laws, you may have the following rights:
            <ul className="list-disc pl-6">
              <li>You have the right to know what personal data we hold about you.</li>
              <li>We will provide you with a copy of your personal data in a structured, commonly used, and machine-readable format upon request.</li>
              <li>If your personal data is incorrect or incomplete, you can request us to correct it.</li>
              <li>You have the right to object to the processing of your personal data.</li>
              <li>You can ask us to delete or limit the use of your personal data, but this right may depend on applicable laws and could impact your ability to access certain services.</li>
              <li>You have the right to access your personal data.</li>
              <li>You have the right to object to the automated processing of your personal data if it involves decision-making.</li>
            </ul>
          </span>
        </div>
        
        <h3 className="text-xl font-semibold mt-6 mb-2" data-aos="fade-up">
          Effective Date
        </h3>
        <p className="mb-4" data-aos="fade-up">
          This Privacy Statement is effective from 12 August 2024 and replaces all prior policies on this subject.
        </p>

          <h3 className="text-xl font-semibold mt-6 mb-2" data-aos="fade-up">
            Changes to this Privacy Statement
          </h3>
          <p className="mb-4" data-aos="fade-up">
            Please be aware that this Privacy Statement may change periodically. Any updated version will be published on this page. We will not reduce your rights under this Privacy Statement without obtaining your explicit consent. We encourage you to review this Privacy Statement regularly to stay informed of any updates.
          </p>
          <p className="mb-4" data-aos="fade-up">
            This Privacy Statement was last updated on 12 August 2024.
          </p>

          <h3 className="text-4xl font-bold mt-8 text-blue-500 mb-2" data-aos="fade-up">
            Contact Us
          </h3>
          <p className="mb-4" data-aos="fade-up">
            If you have any questions or feedback regarding this Privacy Statement or the handling of your personal information, please fill out the form below or contact us at:
          </p>

          <p className="mb-4 leading-8" data-aos="fade-up">
            <strong>LaaLabs Private Limited</strong><br />
            Kunkalagunta, lane 2<br />
            Narasaraopet - 522615, India<br />
            Ph: +91 8899776655<br />
            Email: <a href="mailto:data.privacy@laalabs.com">data.privacy@laalabs.com</a>
          </p>

          <p data-aos="fade-up">
            For any queries related to personal data processing, you can reach the Global Data Privacy team at: <a href="mailto:data.privacy@laalabs.com">data.laalabs@laalabs.com</a>.
          </p>

          <h3 className="text-xl font-semibold mt-10 mb-2 leading-9" data-aos="fade-up">
            Data Privacy Officer Details
          </h3>
          <p><strong>Dubai:</strong> Devendra Fednavas</p>
          <p className="mb-4" data-aos="fade-up">
            Email address: <a href="mailto:data.laalabs@laalabs.com">data.laalabs@laalabs.com</a>
          </p>

      </div>
    </div>
  );
};

export default PrivacyStatement;
