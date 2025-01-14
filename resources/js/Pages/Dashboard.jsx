// import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// import { Head } from "@inertiajs/react";

// export default function Dashboard() {
//     return (
//         <AuthenticatedLayout>
//             <Head title="Admin Panel" />

//             <div className="py-12">
//                 <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
//                     <form>
//                         <div className="space-y-8">
//                             {/* Home Section */}
//                             <div className="bg-gray-300 shadow-md p-6 rounded-lg">
//                                 <h3 className="text-lg font-medium text-gray-900">
//                                     Home
//                                 </h3>
//                                 {/* crud btn  */}
//                                 <div className="w-2/3 p-2">
//                                     <button className="px-16 mx-2 py-2 bg-purple-500 text-white rounded-lg">
//                                         Update
//                                     </button>
//                                 </div>
//                                 {/* crud btn  */}
//                                 <div className="mt-4 space-y-4">
//                                     <input
//                                         type="text"
//                                         placeholder="Name"
//                                         className="w-full p-2 border rounded"
//                                     />
//                                     <input
//                                         type="file"
//                                         className="w-full p-2 border rounded"
//                                     />
//                                     <textarea
//                                         placeholder="Home Description"
//                                         className="w-full p-2 border rounded"
//                                     />
//                                 </div>
//                             </div>

//                             {/* About Section */}
//                             <div className="bg-gray-300 shadow-md p-6 rounded-lg">
//                                 <h3 className="text-lg font-medium text-gray-900">
//                                     About
//                                 </h3>
//                                 {/* crud btn  */}
//                                 <div className="w-2/3 p-2 mb-4">
//                                     <button className="px-16 mx-2 py-2 bg-purple-500 text-white rounded-lg">
//                                         Update
//                                     </button>
//                                 </div>
//                                 {/* crud btn  */}
//                                 <textarea
//                                     placeholder="About Description"
//                                     className="w-full p-2 border rounded"
//                                 />
//                             </div>

//                             {/* Projects Section */}
//                             <div className="bg-white shadow-md p-6 rounded-lg">
//                                 <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-6">
//                                     <h3 className="text-lg font-medium text-gray-900">
//                                         Projects
//                                     </h3>
//                                     {/* crud btn  */}
//                                     <div className="w-full sm:w-2/3 p-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg">
//                                             Add
//                                         </button>
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg">
//                                             Update
//                                         </button>
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-lg">
//                                             Delete
//                                         </button>
//                                     </div>

//                                     {/* crud btn  */}
//                                     <div className="mt-4 space-y-4">
//                                         <input
//                                             type="file"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="text"
//                                             placeholder="Project Title"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <textarea
//                                             placeholder="Project Description"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="text"
//                                             placeholder="Tech Stack (comma separated)"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="url"
//                                             placeholder="Project Demo Link"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="url"
//                                             placeholder="Project Github Link"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Skills Section */}
//                             <div className="bg-white shadow-md p-6 rounded-lg">
//                                 <h3 className="text-lg font-medium text-gray-900">
//                                     Skills
//                                 </h3>
//                                 {/* crud btn  */}
//                                 <div className="w-full sm:w-2/3 p-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
//                                     <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg">
//                                         Add
//                                     </button>
//                                     <button className="w-full sm:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg">
//                                         Update
//                                     </button>
//                                     <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-lg">
//                                         Delete
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Experience Section */}
//                             <div className="bg-white shadow-md p-6 rounded-lg">
//                                 <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-6">
//                                     <h3 className="text-lg font-medium text-gray-900">
//                                         Experience
//                                     </h3>
//                                     {/* crud btn  */}
//                                     <div className="w-full sm:w-2/3 p-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg">
//                                             Add
//                                         </button>
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg">
//                                             Update
//                                         </button>
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-lg">
//                                             Delete
//                                         </button>
//                                     </div>

//                                     {/* crud btn  */}
//                                     <div className="mt-4 space-y-4">
//                                         <input
//                                             type="text"
//                                             placeholder="Job Title"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="text"
//                                             placeholder="Subtitle"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="text"
//                                             placeholder="Years (e.g., 2021-2024)"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <textarea
//                                             placeholder="Bulleted Notes"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Certificates Section */}
//                             <div className="bg-white shadow-md p-6 rounded-lg">
//                                 <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-6">
//                                     <h3 className="text-lg font-medium text-gray-900">
//                                         Certificates
//                                     </h3>
//                                     {/* crud btn  */}
//                                     <div className="w-full sm:w-2/3 p-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg">
//                                             Add
//                                         </button>
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg">
//                                             Update
//                                         </button>
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-lg">
//                                             Delete
//                                         </button>
//                                     </div>

//                                     {/* crud btn  */}
//                                     <div className="mt-4 space-y-4">
//                                         <input
//                                             type="file"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="url"
//                                             placeholder="View Certificate Link"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Testimonials Section */}
//                             <div className="bg-white shadow-md p-6 rounded-lg">
//                                 <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-6">
//                                     <h3 className="text-lg font-medium text-gray-900">
//                                         Testimonials
//                                     </h3>
//                                     {/* crud btn  */}
//                                     <div className="w-full sm:w-2/3 p-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg">
//                                             Add
//                                         </button>
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg">
//                                             Update
//                                         </button>
//                                         <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-lg">
//                                             Delete
//                                         </button>
//                                     </div>

//                                     {/* crud btn  */}
//                                     <div className="mt-4 space-y-4">
//                                         <textarea
//                                             placeholder="Testimonial"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="text"
//                                             placeholder="Name"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="text"
//                                             placeholder="Title"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Social Links Section */}
//                             <div className="bg-white shadow-md p-6 rounded-lg">
//                                 <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-6">
//                                     <h3 className="text-lg font-medium text-gray-900">
//                                         Social Links
//                                     </h3>
//                                     {/* crud btn  */}
//                                     <div className="w-2/3 p-2">
//                                         <button className="px-16 mx-2 py-2 bg-purple-500 text-white rounded-lg">
//                                             Update
//                                         </button>
//                                     </div>
//                                     {/* crud btn  */}
//                                     <div className="mt-4 space-y-4">
//                                         <input
//                                             type="url"
//                                             placeholder="Github"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="url"
//                                             placeholder="LinkedIn"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="email"
//                                             placeholder="Email"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="url"
//                                             placeholder="Twitter"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="url"
//                                             placeholder="Whatsapp"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="text"
//                                             placeholder="Phone Number"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                         <input
//                                             type="url"
//                                             placeholder="Hashnode"
//                                             className="w-full p-2 border rounded"
//                                         />
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Submited Forms Section */}
//                             <div className="bg-white shadow-md p-8 rounded-lg">
//                                 <h3 className="text-lg font-medium text-gray-900">
//                                     Submited Forms
//                                 </h3>
//                                 <div className="flex flex-wrap gap-4 mt-4">
//                                     <div className="bg-gray-300 w-full sm:w-1/2 lg:w-1/3 shadow-lg rounded-lg p-6 mb-4">
//                                         <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                             name
//                                         </h3>
//                                         <p className="text-sm text-gray-600 mb-1">
//                                             <strong>Email:</strong> email
//                                         </p>
//                                         <p className="text-sm text-gray-700">
//                                             <strong>Message:</strong> msg
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>

//                             {/* Submit Button */}
//                             <div className="flex justify-center mt-6">
//                                 <button className="px-6 py-2 bg-amber-800 text-white rounded-lg">
//                                     Save Changes
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </AuthenticatedLayout>
//     );
// }
import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Dashboard = ({ testimonials }) => {
  const [testimonialText, setTestimonialText] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    // If testimonials are not passed, you can trigger an Inertia request to fetch them
    if (!testimonials || testimonials.length === 0) {
      Inertia.get('/testimonials');
    }
  }, [testimonials]);

  // Add a new testimonial
  const handleAddTestimonial = () => {
    Inertia.post('/testimonials', {
      testimonial: testimonialText,
      name,
      title,
    }).then(() => {
      // After adding, fetch the latest testimonials
      Inertia.get('/testimonials');
    });
  };

  // Update an existing testimonial
  const handleUpdateTestimonial = (id) => {
    Inertia.put(`/testimonials/${id}`, {
      testimonial: testimonialText,
      name,
      title,
    }).then(() => {
      // After updating, fetch the latest testimonials
      Inertia.get('/testimonials');
    });
  };

  // Delete a testimonial
  const handleDeleteTestimonial = (id) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      Inertia.delete(`/testimonials/${id}`).then(() => {
        // After deleting, fetch the latest testimonials
        Inertia.get('/testimonials');
      });
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Testimonials List */}
      <div className="space-y-4 mb-8">
        {Array.isArray(testimonials) && testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-4 bg-white rounded-lg shadow-md flex flex-col justify-between"
            >
              <div>
                <p className="text-lg font-semibold">{testimonial.name} - {testimonial.title}</p>
                <p className="text-gray-700 mt-2">{testimonial.testimonial}</p>
              </div>
              {/* Buttons under the content */}
              <div className="flex space-x-4 mt-4">
                <button
                  onClick={() => {
                    setSelectedTestimonial(testimonial.id);
                    setTestimonialText(testimonial.testimonial);
                    setName(testimonial.name);
                    setTitle(testimonial.title);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteTestimonial(testimonial.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No testimonials available</p>
        )}
      </div>

      {/* Add/Update Testimonial Form */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add or Update Testimonial</h2>
        <textarea
          value={testimonialText}
          onChange={(e) => setTestimonialText(e.target.value)}
          placeholder="Testimonial"
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full p-4 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {selectedTestimonial ? (
          <button
            onClick={() => handleUpdateTestimonial(selectedTestimonial)}
            className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Update Testimonial
          </button>
        ) : (
          <button
            onClick={handleAddTestimonial}
            className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Testimonial
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
