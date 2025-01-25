import React from "react";
import { FaHome, FaFolder, FaFileAlt, FaTrash } from "react-icons/fa";

export default function Home() {
  const courses = [
    {
      semester: "Semester 1",
      courses: [
        {
          name: "L-CT-0038 / Legal Principles of Tort",
          internalMarks: 35,
          maxInternalMarks: 50,
          externalMarks: 27,
          maxExternalMarks: 50,
          total: 62,
          maxTotalMarks: 100,
          remarks: "-",
          grade: "B+",
        },
        {
          name: "L-CA-0017 / Political and Legal Thought",
          internalMarks: 25,
          maxInternalMarks: 50,
          externalMarks: 25.5,
          maxExternalMarks: 50,
          total: 51,
          maxTotalMarks: 100,
          remarks: "-",
          grade: "B-",
        },
        {
          name: "L-CT-0037 / Introduction to Worlds Legal Systems",
          internalMarks: 25,
          maxInternalMarks: 50,
          externalMarks: 19,
          maxExternalMarks: 50,
          total: 44,
          maxTotalMarks: 100,
          remarks: "-",
          grade: "P2",
        },
        {
          name: "L-CA-0016 / Legal English",
          internalMarks: 37,
          maxInternalMarks: 50,
          externalMarks: 26,
          maxExternalMarks: 50,
          total: 63,
          maxTotalMarks: 100,
          remarks: "-",
          grade: "B+",
        },
        {
          name: "L-CA-0015 / Introduction to Legal English",
          internalMarks: 38,
          maxInternalMarks: 50,
          externalMarks: 41,
          maxExternalMarks: 50,
          total: 79,
          maxTotalMarks: 100,
          remarks: "-",
          grade: "A+",
        },
      ],
    },
    {
      semester: "Semester 2",
      courses: [
        {
          name: "L-CT-0039 / History of Courts, Legislature & Legal Profession in India",
          internalMarks: 36,
          maxInternalMarks: 50,
          externalMarks: 32,
          maxExternalMarks: 50,
          total: 68,
          maxTotalMarks: 100,
          remarks: "-",
          grade: "A-",
        },
        {
          name: "L-CA-0020 / Political Economic Theory",
          internalMarks: 31,
          maxInternalMarks: 50,
          externalMarks: 26,
          maxExternalMarks: 50,
          total: "59 (M)",
          maxTotalMarks: 100,
          remarks:
            "The Moderation Committee recommends an across-the-board addition of 2 marks",
          grade: "B",
        },
        {
          name: "L-CA-0019 / Theory and Practice of Contracts in India",
          internalMarks: 27.75,
          maxInternalMarks: 50,
          externalMarks: 25,
          maxExternalMarks: 50,
          total: 53,
          maxTotalMarks: 100,
          remarks: "-",
          grade: "B-",
        },
        {
          name: "L-CA-0022 / Legal Research and Methodology",
          internalMarks: 37,
          maxInternalMarks: 50,
          externalMarks: 23,
          maxExternalMarks: 50,
          total: 60,
          maxTotalMarks: 100,
          remarks: "-",
          grade: "B+",
        },
        {
          name: "L-CA-0018 / Introduction to the Constitution of India",
          internalMarks: 33.5,
          maxInternalMarks: 50,
          externalMarks: 15,
          maxExternalMarks: 50,
          total: "50 (M)",
          maxTotalMarks: 100,
          remarks: "JGLS MOD 2 Marks",
          grade: "B-",
        },
        
      
        // other course objects
      ],
    },
    {
      semester: "Semester 3",
      courses: [
        {
          name: "L-CA-0012 / Gender and Society",
          internalMarks: 42.50,
          maxInternalMarks: 50,
          externalMarks: 34,
          maxExternalMarks: 50,
          total: 76.5,
          maxTotalMarks: 100,
          remarks: "-",
          grade: "A+",
        },
        {
          name: "L-CA-0026 / International Law and Relation",
          internalMarks: 42.50,
          maxInternalMarks: 50,
          externalMarks: 22.5,
          maxExternalMarks: 50,
          total: "63",
          maxTotalMarks: 100,
          remarks: "-",
          
          grade: "B+",
        },
        {
          name: "L-CA-0025 / Criminal Justuce System in India",
          internalMarks: 35,
          maxInternalMarks: 50,
          externalMarks: 32,
          maxExternalMarks: 50,
          total: 67,
          maxTotalMarks: 100,
          remarks: "-",
          grade: "A-",
        },
        {
          name: "L-CA-0024 / Conflicts of Laws",
          internalMarks: 39,
          maxInternalMarks: 50,
          externalMarks: 17,
          maxExternalMarks: 50,
          total: 56,
          maxTotalMarks: 100,
          remarks: "-",
          grade: "B",
        },
        {
          name: "L-CA-0023 / Commercial Transection",
          internalMarks: 37.50,
          maxInternalMarks: 50,
          externalMarks: 22.50,
          maxExternalMarks: 50,
          total: "60 (M)",
          maxTotalMarks: 100,
          remarks: "-",
          grade: "B+",
        },
        
      
        // other course objects
      ],
    },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="bg-gray-200 w-1/5 p-4 shadow-lg">
        <ul className="space-y-6">
          <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaHome />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaFolder />
            <span>Grade Administration</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaFileAlt />
            <span>Letter Grade Report</span>
          </li>
          <li className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 cursor-pointer">
            <FaTrash />
            <span>Archive</span>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h1 className="text-xl font-semibold text-gray-800 mb-4">
            JGU UMS: View Letter Grade Report
          </h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
            <span>Dashboard</span>
            <span>/</span>
            <span>Grade Administration</span>
            <span>/</span>
            <span className="text-blue-600">Letter Grade Report</span>
          </div>
          <div className="mb-6">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Download Report
            </button>
          </div>
          {courses.map((semester, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-lg font-medium text-gray-700 mb-4">
                {semester.semester}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border border-gray-300 px-4 py-2">Course Name</th>
                      <th className="border border-gray-300 px-4 py-2">Internal Marks</th>
                      <th className="border border-gray-300 px-4 py-2">Max Marks</th>
                      <th className="border border-gray-300 px-4 py-2">External Marks</th>
                      <th className="border border-gray-300 px-4 py-2">Max Marks</th>
                      <th className="border border-gray-300 px-4 py-2">Total</th>
                      <th className="border border-gray-300 px-4 py-2">Max Marks</th>
                      <th className="border border-gray-300 px-4 py-2">Remarks</th>
                      <th className="border border-gray-300 px-4 py-2">Letter Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {semester.courses.map((course, courseIndex) => (
                      <tr
                        key={courseIndex}
                        className="text-center hover:bg-gray-100"
                      >
                        <td className="border border-gray-300 px-4 py-2">
                          {course.name}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.internalMarks}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.maxInternalMarks}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.externalMarks}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.maxExternalMarks}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.total}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.maxTotalMarks}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.remarks}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">
                          {course.grade}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
