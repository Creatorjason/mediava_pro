import Image from "next/image";

const Tops = ({ edits }) => (
  <section className="py-4">
    <h2 className="text-2xl font-semibold mb-4">Top Edits</h2>
    <div className="grid grid-cols-1 gap-6">
      {edits.map((edit, index) => (
        <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:bg-gray-700 transition">
          <Image src={edit.thumbnail} alt={edit.title} width={320} height={180} className="rounded-lg mb-2" />
          <div>
            <h3 className="text-lg font-bold text-white">{edit.title}</h3>
            <p className="text-sm text-gray-400">Time taken: {edit.timeTaken} - By: {edit.by}</p>
            <p className="text-sm text-gray-400">{edit.views} views • {edit.timeAgo}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Tops;
