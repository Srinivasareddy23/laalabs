'use client';

import { useState } from 'react';

const SendResumeApi = ({ onSuccess }) => {
  const [resume, setResume] = useState(null);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resume) {
      onSuccess('Please select a resume file.', false);
      return;
    }

    const formData = new FormData();
    formData.append('resume', resume);

    try {
      const response = await fetch('http://localhost:5000/api/submit-resume', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        onSuccess('Job applied successfully!', true);
      } else {
        onSuccess('Failed to apply for the job. Please try again.', false);
      }
    } catch (error) {
      onSuccess('An error occurred. Please try again later.', false);
    }
  };

  return (
    <div className="text-center">
      <input
        type="file"
        className="block w-full text-sm text-gray-700 bg-gray-100 border border-gray-300 rounded-lg p-2 focus:outline-none mb-4"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />
      <button
        className="bg-blue-600 text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Submit Job Application
      </button>
    </div>
  );
};

export default SendResumeApi;
