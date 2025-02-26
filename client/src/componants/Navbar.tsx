import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="bg-blue-500 to-indigo-600 shadow-md p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-white font-bold text-2xl tracking-wide">
                    Navbar
                </div>
                <div className="flex space-x-4">
                    <Link to="/form" className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105">Form</Link>
                    <Link to="/profile" className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105">Profile</Link>
                    <Link to="/formdata" className="px-4 py-2 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition transform hover:scale-105">FormData</Link>
                    <Link to="/register" className="px-4 py-2 text-white bg-green-500 rounded-lg shadow-md hover:bg-green-600 transition transform hover:scale-105">Register</Link>
                    <Link to="/dashboard" className="px-4 py-2 text-white bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 transition transform hover:scale-105">Dashboard</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
