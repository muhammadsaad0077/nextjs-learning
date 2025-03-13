type Album = {
    userId: number;
    id: number;
    title: string;
}

async function Page() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    if (!response.ok) throw new Error("Failed to fetch data");

    const albums: Album[] = await response.json();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gradient-to-b from-gray-100 to-gray-200 min-h-screen">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-white shadow-lg rounded-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{album.title}</h3>
            <p className="text-gray-500 text-sm">Album ID: {album.id}</p>
          </div>
        ))}
      </div>
      
    );
}

export default Page;