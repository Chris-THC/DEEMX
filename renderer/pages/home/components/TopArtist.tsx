const TopArtist = () => {
  const topArtists = [
    "Artista Popular 1",
    "Artista Popular 2",
    "Artista Popular 3",
    "Artista Popular 4",
  ];
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Top artistas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topArtists.map((artist, i) => (
          <div
            key={i}
            className="bg-card rounded-lg overflow-hidden shadow-lg text-center"
          >
            <img
              src={`/placeholder.svg?height=150&width=150&text=${artist}`}
              alt={artist}
              className="w-full h-40 object-cover rounded-full mx-auto mt-4"
            />
            <div className="p-4">
              <h3 className="font-semibold">{artist}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopArtist;
