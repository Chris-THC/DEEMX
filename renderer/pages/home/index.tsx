import PlaybackBar from "./components/PlaybackBar";
import Releases from "./components/Releases";
import Sidebar from "./components/Sidebar";
import TopAlbums from "./components/TopAlbums";
import TopArtist from "./components/TopArtist";
import TopTracks from "./components/TopTracks";

export default function HomePage() {
  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-8">
          <h1 className="text-3xl font-bold mb-6">Bienvenido de vuelta</h1>
          <Releases />
          <TopTracks />
          <TopAlbums />
          <TopArtist />
        </main>
      </div>

      <PlaybackBar />
    </div>
  );
}
