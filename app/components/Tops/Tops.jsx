import Image from "next/image";

const Tops = ({ edits }) => (
  <section className="py-4">
    <h2 className="text-2xl font-semibold mb-4">Top Edits</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {edits.map((edit, index) => (
        <div
          key={index}
          className="flex bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition"
        >
          <Image
            src={edit.thumbnail}
            alt={edit.title}
            width={120}
            height={80}
            className="rounded-lg mr-4 flex-shrink-0"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-lg font-bold text-white">{edit.title}</h3>
            <p className="text-sm text-gray-400">
              Time taken: {edit.timeTaken} - By: {edit.by}
            </p>
            <p className="text-sm text-gray-400">
              {edit.views} views • {edit.timeAgo}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Tops;
