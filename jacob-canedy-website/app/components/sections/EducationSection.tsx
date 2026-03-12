'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  achievements?: string[];
}

// Placeholder education data - you can update this with your actual education
const educationData: EducationItem[] = [
  {
    id: 'university',
    institution: 'University Name',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2020',
    endDate: '2024',
    location: 'City, State',
    description: 'Focused on software engineering, algorithms, and computer systems with a strong emphasis on practical application.',
    achievements: [
      'Dean\'s List multiple semesters',
      'Relevant coursework in Data Structures, Algorithms, and Software Engineering',
      'Capstone project in web development'
    ]
  },
  {
    id: 'certification',
    institution: 'Online Learning Platform',
    degree: 'Professional Certificate',
    field: 'Full Stack Development',
    startDate: '2023',
    endDate: '2024',
    location: 'Online',
    description: 'Comprehensive program covering modern web development technologies and best practices.',
    achievements: [
      'React and Next.js specialization',
      'Backend development with Node.js',
      'Database design and management'
    ]
  }
];

const EducationSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto"
    >
      <div className="mb-8">
        <motion.h1 
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Education
        </motion.h1>
        <motion.div 
          className="w-24 h-1 bg-blue-600 rounded"
          initial={{ width: 0 }}
          animate={{ width: 96 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
      </div>

      <div className="space-y-8">
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.2 }}
            className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-shadow"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <GraduationCap className="text-blue-600 mr-3" size={24} />
                  <h3 className="text-xl font-semibold text-gray-900">{item.institution}</h3>
                </div>
                <h4 className="text-lg font-medium text-gray-700 mb-1">
                  {item.degree} in {item.field}
                </h4>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-gray-600 text-sm">
                  <div className="flex items-center mb-1 sm:mb-0">
                    <Calendar size={16} className="mr-1" />
                    <span>{item.startDate} - {item.endDate}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>

            {item.achievements && item.achievements.length > 0 && (
              <div>
                <div className="flex items-center mb-3">
                  <Award className="text-yellow-600 mr-2" size={20} />
                  <h5 className="font-medium text-gray-900">Key Achievements</h5>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-700 ml-6">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <motion.li
                      key={achievementIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + index * 0.2 + achievementIndex * 0.1 }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-100"
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Learning</h3>
        <p className="text-gray-700 leading-relaxed">
          Beyond formal education, I'm committed to lifelong learning. I regularly engage with 
          online courses, technical documentation, and hands-on projects to stay current with 
          emerging technologies and best practices in software development.
        </p>
      </motion.div>
    </motion.section>
  );
};

export default EducationSection;