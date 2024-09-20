import React from 'react';
import m1 from './img/m1.png';

function Teams() {
  return (
    <div className="teams-container bg-gray-900 min-h-screen py-10 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-indigo-400 mb-8">
          About Us
        </h2>
        <p className="description text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
          This study proposes a novel approach for sleep apnea detection in
          medical healthcare using deep learning techniques. Leveraging neural
          networks, the model demonstrates high accuracy in identifying sleep
          apnea events, offering a promising solution for non-invasive and
          automated diagnostic applications in sleep medicine.
        </p>

        <div className="image-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="team-member-card bg-gray-800 rounded-xl shadow-lg p-6 hover:bg-gray-700 transition-all duration-300">
            <img
              src={m1}
              alt="Team Member 1"
              className="team-member-image w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-bold text-center text-indigo-400">
              Team Member 1
            </h4>
            <p className="text-gray-300 text-center mt-2">
              About<br />
            </p>
          </div>

          <div className="team-member-card bg-gray-800 rounded-xl shadow-lg p-6 hover:bg-gray-700 transition-all duration-300">
            <img
              src={m1}
              alt="Team Member 2"
              className="team-member-image w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-bold text-center text-indigo-400">
            Team Member 2
            </h4>
            <p className="text-gray-300 text-center mt-2">
              About <br />
            </p>
          </div>

          <div className="team-member-card bg-gray-800 rounded-xl shadow-lg p-6 hover:bg-gray-700 transition-all duration-300">
            <img
              src={m1}
              alt="Team Member 3"
              className="team-member-image w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-bold text-center text-indigo-400">
              Team Member 3
            </h4>
            <p className="text-gray-300 text-center mt-2">
              About
            </p>
          </div>

          <div className="team-member-card bg-gray-800 rounded-xl shadow-lg p-6 hover:bg-gray-700 transition-all duration-300">
            <img
              src={m1}
              alt="Team Member 4"
              className="team-member-image w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h4 className="text-xl font-bold text-center text-indigo-400">
              Team Member 4
            </h4>
            <p className="text-gray-300 text-center mt-2">
              About
            </p>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-400">
          © 2024 PK-AI-SUITE.com All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default Teams;
