import React from "react";

const Releases = () => {
  const newReleases = [
    { title: "Nuevo Álbum 1", artist: "Artista 1" },
    { title: "Nuevo Álbum 2", artist: "Artista 2" },
    { title: "Nuevo Álbum 3", artist: "Artista 3" },
    { title: "Nuevo Álbum 4", artist: "Artista 4" },
  ];
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Últimos estrenos</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {newReleases.map((album, i) => (
          <div key={i} className="bg-card rounded-lg overflow-hidden shadow-lg">
            <img
              src={`/placeholder.svg?height=150&width=150&text=${album.title}`}
              alt={album.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold">{album.title}</h3>
              <p className="text-sm text-muted-foreground">{album.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Releases;
