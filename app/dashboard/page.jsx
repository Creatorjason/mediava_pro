"use client";
import { useState } from "react";
import BottomNavBar from "../components/BottomNavBar/BottomNavBar";

// Sample data for the projects
const userProjects = {
    completed: [
        { name: "Project Alpha", timeRemaining: "Completed", status: "completed" },
        { name: "Project Beta", timeRemaining: "Completed", status: "completed" },
    ],
    ongoing: [],
    notStarted: [],
    abandoned: [],
};

const creativeProjects = {
    completed: [
        { name: "Project Alpha", timeRemaining: "Completed", status: "completed" },
        { name: "Project Beta", timeRemaining: "Completed", status: "completed" },
    ],
    ongoing: [],
    notStarted: [],
    abandoned: [],
};

// Function to assign colors based on status
const getStatusColor = (status) => {
    switch (status) {
        case "completed":
            return "bg-green-500";
        case "inProgress":
            return "bg-blue-500";
        case "pending":
            return "bg-yellow-500";
        case "abandoned":
            return "bg-red-500";
        default:
            return "bg-gray-500";
    }
};

// Modal component
const Modal = ({ project, onClose }) => {
    const isCompleted = project.status === "completed";

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
            <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full space-y-6">
                <h2 className="text-xl font-bold text-white">{project.name}</h2>
                {isCompleted ? (
                    <div>
                        <p className="text-white mb-4">
                            Your project is ready! You can download it using the link below. A download link has also been sent to your email.
                        </p>
                        <a href="#" className="block text-cyan-500 underline hover:text-cyan-400 mb-4">
                            Download Project
                        </a>
                    </div>
                ) : (
                    <div>
                        <p className="text-white mb-4">
                            The current status of your project is <span className="font-bold">{project.status}</span> and will be completed in <span className="font-bold">{project.timeRemaining}</span>.
                        </p>
                    </div>
                )}
                <button className="px-6 py-3 font-bold rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 hover:scale-105 transition-transform w-full" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

// Reusable component for a project card
const ProjectCard = ({ project, onClick }) => (
    <div onClick={() => onClick(project)} className="flex justify-between items-center p-6 bg-gray-800 rounded-xl shadow-lg mb-6 hover:bg-gray-700 transition-all cursor-pointer">
        <div>
            <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
            <p className="text-sm text-gray-400">{project.timeRemaining}</p>
        </div>
        <span className={`rounded-full w-10 h-10 flex items-center justify-center text-lg ${getStatusColor(project.status)}`}></span>
    </div>
);

// Component to render when no projects are available
const EmptyStateCard = ({ category }) => (
    <div className="p-6 bg-gray-800 rounded-xl shadow-lg mb-6 flex justify-center items-center">
        <h3 className="text-xl text-gray-500 font-semibold">
            No {category} projects available.
        </h3>
    </div>
);

const Dashboard = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [activeDashboard, setActiveDashboard] = useState("User");

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    const projects = activeDashboard === "User" ? userProjects : creativeProjects;

    // Stats Calculation
    const completedProjectsCount = projects.completed.length;
    const ongoingProjectsCount = projects.ongoing.length;
    const notStartedProjectsCount = projects.notStarted.length;
    const abandonedProjectsCount = projects.abandoned.length;

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white px-6 py-12">
            {/* Toggle for User/Creative Dashboards */}
            <div className="flex justify-center mb-6">
                <button onClick={() => setActiveDashboard("User")} className={`px-6 py-2 rounded-l-full ${activeDashboard === "User" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}>
                    User
                </button>
                <button onClick={() => setActiveDashboard("Creative")} className={`px-6 py-2 rounded-r-full ${activeDashboard === "Creative" ? "bg-blue-500 text-white" : "bg-gray-700 text-gray-300"}`}>
                    Creative
                </button>
            </div>

            {/* Stats Section */}
            {activeDashboard === "Creative" && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 text-center">
                    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-white">{completedProjectsCount}</h3>
                        <p className="text-sm text-gray-400">Completed</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-white">{ongoingProjectsCount}</h3>
                        <p className="text-sm text-gray-400">Ongoing</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-white">{notStartedProjectsCount}</h3>
                        <p className="text-sm text-gray-400">Not Started</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-white">{abandonedProjectsCount}</h3>
                        <p className="text-sm text-gray-400">Abandoned</p>
                    </div>
                </div>
            )}

            {/* Completed Projects */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">Completed Projects</h2>
                {projects.completed.length > 0 ? (
                    projects.completed.map((project, index) => <ProjectCard key={index} project={project} onClick={handleProjectClick} />)
                ) : (
                    <EmptyStateCard category="completed" />
                )}
            </div>

            {/* Ongoing Projects */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">Ongoing Projects</h2>
                {projects.ongoing.length > 0 ? (
                    projects.ongoing.map((project, index) => <ProjectCard key={index} project={project} onClick={handleProjectClick} />)
                ) : (
                    <EmptyStateCard category="ongoing" />
                )}
            </div>

            {/* Not Started Projects */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">Not Started Projects</h2>
                {projects.notStarted.length > 0 ? (
                    projects.notStarted.map((project, index) => <ProjectCard key={index} project={project} onClick={handleProjectClick} />)
                ) : (
                    <EmptyStateCard category="not started" />
                )}
            </div>

            {/* Abandoned Projects */}
            <div>
                <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-cyan-500">Abandoned Projects</h2>
                {projects.abandoned.length > 0 ? (
                    projects.abandoned.map((project, index) => <ProjectCard key={index} project={project} onClick={handleProjectClick} />)
                ) : (
                    <EmptyStateCard category="abandoned" />
                )}
            </div>
            <br/>
            <br/>
            <br/>
            {/* Modal for showing project details */}
            {selectedProject && <Modal project={selectedProject} onClose={handleCloseModal} />}
            <BottomNavBar />
        </div>
    );
};

export default Dashboard;
