'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SendResumeApi from '../../../components/job/applyjob';

const DevOpsJobComponent = () => {
  const [popup, setPopup] = useState({
    show: false,
    success: false,
    message: '',
  });

  const resumeRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleMessage = (msg, success) => {
    setPopup({
      show: true,
      success,
      message: msg,
    });

    if (resumeRef.current) resumeRef.current.value = null;

    setTimeout(() => {
      setPopup((prev) => ({ ...prev, show: false }));
    }, 5000);
  };

  const closePopup = () => {
    setPopup((prev) => ({ ...prev, show: false }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <Link href={'/careers'} className="fixed top-20 left-8">
        <span className="mr-2 text-xl text-blue-500">&#8592;</span>
        <span className="text-blue-500 hover:underline">Back to Careers</span>
      </Link>

      <div className="max-w-4xl p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-blue-500 mb-2">
            <span className="block">DevOps Engineer</span>
          </h1>
          <p className="text-lg font-medium text-gray-600">
            Manage infrastructure, automate workflows, and ensure seamless deployments in a scalable environment.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Experience Required</h2>
          <p className="text-gray-600">
            3+ years of hands-on experience in DevOps, CI/CD pipelines, and cloud platforms like AWS, Azure, or GCP.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Requirements</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Proficiency in Jenkins, Docker, Kubernetes, and other DevOps tools.</li>
            <li>Experience with cloud platforms such as AWS, Azure, or GCP.</li>
            <li>Strong scripting skills in Python, Bash, or similar languages.</li>
            <li>Knowledge of infrastructure as code tools like Terraform or Ansible.</li>
            <li>Experience with monitoring and logging tools (e.g., Prometheus, Grafana).</li>
            <li>Understanding of networking concepts and security best practices.</li>
            <li>Ability to troubleshoot and resolve production issues efficiently.</li>
            <li>Strong analytical and problem-solving skills.</li>
            <li>Excellent communication and collaboration abilities.</li>
            <li>Familiarity with Agile development practices.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">What We Expect From You</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Commitment to improving system reliability and scalability.</li>
            <li>Proactive collaboration with cross-functional teams.</li>
            <li>Ability to manage time effectively in a fast-paced environment.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">Upload Your Resume</h2>
          <SendResumeApi onSuccess={handleMessage}  resumeRef={resumeRef} />
        </section>

        {popup.show && (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div
              className={`relative bg-gradient-to-br ${popup.success ? 'from-green-100 to-green-200' : 'from-red-100 to-red-200'} p-6 rounded-lg shadow-lg w-96`}
            >
              <h2 className={`text-lg font-semibold text-center mb-2 ${popup.success ? 'text-green-800' : 'text-red-800'}`}>
                {popup.success ? 'Application Submitted!' : 'Submission Failed!'}
              </h2>

              <p className="text-gray-700 text-center">{popup.message}</p>

              <p className="text-gray-500 text-sm text-center mt-2">
                {popup.success
                  ? 'We will review your application and get back to you soon.'
                  : 'Ensure all required fields are filled correctly.'}
              </p>

              <div className="flex justify-center mt-4">
                <button
                  onClick={closePopup}
                  className={`px-6 py-2 font-medium text-white rounded-md shadow ${popup.success ? 'bg-green-600 hover:bg-green-700' : 'bg-red-600 hover:bg-red-700'} transition duration-200`}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DevOpsJobComponent;
