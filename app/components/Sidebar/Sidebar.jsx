import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Sidebar({ isOpen, onClose, edits, setSelectedEdit }) {
    return (
        <aside
            className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform bg-gray-800 w-64 p-6 z-50 lg:translate-x-0 lg:relative overflow-y-auto`}
        // Ensures sidebar slides in on mobile and is fixed on larger screens
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Your Edits</h2>
                {/* Close button for mobile */}
                <button className="lg:hidden" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} className="text-white text-xl" />
                </button>
            </div>
            {/* List of recent edits */}
            <div className="space-y-4">
                {edits.map((edit, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedEdit(edit)}
                        className="w-full p-3 bg-gray-700 rounded-lg text-left text-white hover:bg-gray-600 transition"
                    >
                        {edit}
                    </button>
                ))}
            </div>
        </aside>
    );
}
