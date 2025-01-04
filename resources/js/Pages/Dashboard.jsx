import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard() {
    return (
        <AuthenticatedLayout>
            <Head title="Admin Panel" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <form>
                        <div className="space-y-8">
                            {/* Home Section */}
                            <div className="bg-gray-300 shadow-md p-6 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Home
                                </h3>
                                {/* crud btn  */}
                                <div className="w-2/3 p-2">
                                    <button className="px-16 mx-2 py-2 bg-purple-500 text-white rounded-lg">
                                        Update
                                    </button>
                                </div>
                                {/* crud btn  */}
                                <div className="mt-4 space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        className="w-full p-2 border rounded"
                                    />
                                    <input
                                        type="file"
                                        className="w-full p-2 border rounded"
                                    />
                                    <textarea
                                        placeholder="Home Description"
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                            </div>

                            {/* About Section */}
                            <div className="bg-gray-300 shadow-md p-6 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900">
                                    About
                                </h3>
                                {/* crud btn  */}
                                <div className="w-2/3 p-2 mb-4">
                                    <button className="px-16 mx-2 py-2 bg-purple-500 text-white rounded-lg">
                                        Update
                                    </button>
                                </div>
                                {/* crud btn  */}
                                <textarea
                                    placeholder="About Description"
                                    className="w-full p-2 border rounded"
                                />
                            </div>

                            {/* Projects Section */}
                            <div className="bg-white shadow-md p-6 rounded-lg">
                                <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-6">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Projects
                                    </h3>
                                    {/* crud btn  */}
                                    <div className="w-full sm:w-2/3 p-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
                                        <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg">
                                            Add
                                        </button>
                                        <button className="w-full sm:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg">
                                            Update
                                        </button>
                                        <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-lg">
                                            Delete
                                        </button>
                                    </div>

                                    {/* crud btn  */}
                                    <div className="mt-4 space-y-4">
                                        <input
                                            type="file"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Project Title"
                                            className="w-full p-2 border rounded"
                                        />
                                        <textarea
                                            placeholder="Project Description"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Tech Stack (comma separated)"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="url"
                                            placeholder="Project Demo Link"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="url"
                                            placeholder="Project Github Link"
                                            className="w-full p-2 border rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Skills Section */}
                            <div className="bg-white shadow-md p-6 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Skills
                                </h3>
                                {/* crud btn  */}
                                <div className="w-full sm:w-2/3 p-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
                                    <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg">
                                        Add
                                    </button>
                                    <button className="w-full sm:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg">
                                        Update
                                    </button>
                                    <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-lg">
                                        Delete
                                    </button>
                                </div>
                            </div>

                            {/* Experience Section */}
                            <div className="bg-white shadow-md p-6 rounded-lg">
                                <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-6">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Experience
                                    </h3>
                                    {/* crud btn  */}
                                    <div className="w-full sm:w-2/3 p-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
                                        <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg">
                                            Add
                                        </button>
                                        <button className="w-full sm:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg">
                                            Update
                                        </button>
                                        <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-lg">
                                            Delete
                                        </button>
                                    </div>

                                    {/* crud btn  */}
                                    <div className="mt-4 space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Job Title"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Subtitle"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Years (e.g., 2021-2024)"
                                            className="w-full p-2 border rounded"
                                        />
                                        <textarea
                                            placeholder="Bulleted Notes"
                                            className="w-full p-2 border rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Certificates Section */}
                            <div className="bg-white shadow-md p-6 rounded-lg">
                                <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-6">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Certificates
                                    </h3>
                                    {/* crud btn  */}
                                    <div className="w-full sm:w-2/3 p-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
                                        <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg">
                                            Add
                                        </button>
                                        <button className="w-full sm:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg">
                                            Update
                                        </button>
                                        <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-lg">
                                            Delete
                                        </button>
                                    </div>

                                    {/* crud btn  */}
                                    <div className="mt-4 space-y-4">
                                        <input
                                            type="file"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="url"
                                            placeholder="View Certificate Link"
                                            className="w-full p-2 border rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Testimonials Section */}
                            <div className="bg-white shadow-md p-6 rounded-lg">
                                <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-6">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Testimonials
                                    </h3>
                                    {/* crud btn  */}
                                    <div className="w-full sm:w-2/3 p-2 space-y-2 sm:space-y-0 sm:flex sm:space-x-2">
                                        <button className="w-full sm:w-auto px-6 py-2 bg-green-500 text-white rounded-lg">
                                            Add
                                        </button>
                                        <button className="w-full sm:w-auto px-6 py-2 bg-purple-500 text-white rounded-lg">
                                            Update
                                        </button>
                                        <button className="w-full sm:w-auto px-6 py-2 bg-red-500 text-white rounded-lg">
                                            Delete
                                        </button>
                                    </div>

                                    {/* crud btn  */}
                                    <div className="mt-4 space-y-4">
                                        <textarea
                                            placeholder="Testimonial"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Title"
                                            className="w-full p-2 border rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Social Links Section */}
                            <div className="bg-white shadow-md p-6 rounded-lg">
                                <div className="bg-gray-300 shadow-md rounded-lg p-6 mb-6">
                                    <h3 className="text-lg font-medium text-gray-900">
                                        Social Links
                                    </h3>
                                    {/* crud btn  */}
                                    <div className="w-2/3 p-2">
                                        <button className="px-16 mx-2 py-2 bg-purple-500 text-white rounded-lg">
                                            Update
                                        </button>
                                    </div>
                                    {/* crud btn  */}
                                    <div className="mt-4 space-y-4">
                                        <input
                                            type="url"
                                            placeholder="Github"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="url"
                                            placeholder="LinkedIn"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="url"
                                            placeholder="Twitter"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="url"
                                            placeholder="Whatsapp"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Phone Number"
                                            className="w-full p-2 border rounded"
                                        />
                                        <input
                                            type="url"
                                            placeholder="Hashnode"
                                            className="w-full p-2 border rounded"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Submited Forms Section */}
                            <div className="bg-white shadow-md p-8 rounded-lg">
                                <h3 className="text-lg font-medium text-gray-900">
                                    Submited Forms
                                </h3>
                                <div className="flex flex-wrap gap-4 mt-4">
                                    <div className="bg-gray-300 w-full sm:w-1/2 lg:w-1/3 shadow-lg rounded-lg p-6 mb-4">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                            name
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-1">
                                            <strong>Email:</strong> email
                                        </p>
                                        <p className="text-sm text-gray-700">
                                            <strong>Message:</strong> msg
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center mt-6">
                                <button className="px-6 py-2 bg-amber-800 text-white rounded-lg">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
