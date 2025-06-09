import { useState } from "react";
import { FiUser, FiHome, FiHelpCircle, FiMail, FiShield, FiCheckCircle, FiSmartphone } from "react-icons/fi";
import { FaUniversity, FaMapMarkedAlt } from "react-icons/fa";
import { MdOutlineHowToVote } from "react-icons/md";

const Landing = () => {
  const [stats] = useState({
    totalComplaints: 619,
    resolvedBeforeDeadline: 7,
    avgResolutionDays: 4.2,
    institutionsParticipating: 3,
    districtsActive: 2
  });

  const handleLogin = (role: string) => {
    alert(`Logging in as ${role}...`);
  };

  return (
    <div className="font-sans bg-white text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-10">
        <div className="text-xl font-bold text-blue-700">Rwanda Complaints Portal</div>
        <nav className="space-x-4 hidden md:flex">
          <a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FiHome />Home</a>
          <a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FiShield />About</a>
          <a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FiHelpCircle />FAQ</a>
          <a href="#" className="text-blue-600 hover:underline flex items-center gap-1"><FiMail />Contact</a>
          <a href="#" className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded hover:opacity-90">Login</a>
          <a href="#" className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded hover:opacity-90">Register</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-[500px] flex items-center justify-center text-white text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')" }}>
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-blue-500/30 backdrop-blur-md" />
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Speak Up. Be Heard. Help Improve Your Community.</h1>
          <p className="text-lg mb-4">Easily submit complaints and track government responses in real-time.</p>
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded hover:opacity-90">Submit a Complaint</button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">How It Works</h2>
        <p className="text-gray-600 mb-8">A simple three-step process to ensure your voice is heard and your concerns are addressed.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-xl">
            <MdOutlineHowToVote className="text-4xl mx-auto text-green-500 mb-4" />
            <h3 className="font-semibold text-lg">Submit</h3>
            <p className="text-gray-600">Easily fill out a complaint form and provide details about your issue.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <FaUniversity className="text-4xl mx-auto text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg">Track</h3>
            <p className="text-gray-600">Follow as it gets routed to the right institution for resolution.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <FiCheckCircle className="text-4xl mx-auto text-green-400 mb-4" />
            <h3 className="font-semibold text-lg">Resolve</h3>
            <p className="text-gray-600">Get updates and confirm the resolution with the institution.</p>
          </div>
        </div>
      </section>

      {/* Choose Role */}
      <section className="py-12 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Choose Your Role</h2>
        <p className="text-gray-600 mb-8">Select the appropriate role to access the features relevant to you.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-md rounded-xl">
            <FiUser className="text-4xl mx-auto text-blue-500 mb-4" />
            <h3 className="font-semibold text-lg">Citizen</h3>
            <p className="text-gray-600">Submit complaints and track resolution progress.</p>
            <button onClick={() => handleLogin('Citizen')} className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded hover:opacity-90">Login/Register</button>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <FaUniversity className="text-4xl mx-auto text-green-500 mb-4" />
            <h3 className="font-semibold text-lg">Institution</h3>
            <p className="text-gray-600">Access and respond to complaints in your organization.</p>
            <button onClick={() => handleLogin('Institution')} className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded hover:opacity-90">Login</button>
          </div>
          <div className="p-6 bg-white shadow-md rounded-xl">
            <FaMapMarkedAlt className="text-4xl mx-auto text-blue-400 mb-4" />
            <h3 className="font-semibold text-lg">District</h3>
            <p className="text-gray-600">Manage and route complaints in your area.</p>
            <button onClick={() => handleLogin('District')} className="mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded hover:opacity-90">Login</button>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Transparency Highlights</h2>
        <p className="text-gray-600 mb-8">Real-time data showing our commitment to resolving citizen complaints.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="p-4 bg-white rounded shadow-md">
              <p className="text-3xl font-bold text-green-600">{value}</p>
              <p className="capitalize text-sm text-gray-500">{key.replace(/([A-Z])/g, ' $1')}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile App */}
      <section className="py-12 px-6 text-center bg-blue-50">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Mobile App Coming Soon</h2>
        <p className="text-gray-600 mb-6">Access the Rwanda Complaints Portal on the go.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white px-4 py-2 rounded">App Store</button>
          <button className="bg-black text-white px-4 py-2 rounded">Play Store</button>
        </div>
        <img src="https://images.unsplash.com/photo-1591337676887-2b499c6bbee4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" alt="Mobile App" className="mt-6 mx-auto rounded shadow-lg" />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-2">About</h3>
            <p>A government-backed platform for transparent complaint resolution.</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Legal</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Contact</h3>
            <p>Email: support@rwanda.gov</p>
            <p>Phone: +250 788 123 456</p>
          </div>
        </div>
        <p className="text-center text-gray-500 mt-8">© 2025 Rwanda Complaints Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;