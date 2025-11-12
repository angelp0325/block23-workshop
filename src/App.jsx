import { useState } from "react";
import { episodeList } from "./data";
import "./index.css";
export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  return (
    <div className="app-container">
      <div>
        <h1 className="app-title">Dark Echoes</h1>
        <h2 className="subheading">Episodes</h2>
        <ul className="episode-list">
          {episodes.map((episode) => (
            <li
              key={episode.id}
              className={`episode-item ${
                selectedEpisode?.id === episode.id ? "selected" : ""
              }`}
              onClick={() => setSelectedEpisode(episode)}
            >
              {episode.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="episode-details">
        {!selectedEpisode ? (
          <p className="message">Select an episode to view its details.</p>
        ) : (
          <div>
            <h2>Episode {selectedEpisode.id}</h2>
            <h3>{selectedEpisode.title}</h3>
            <p>{selectedEpisode.description}</p>
            <button>Watch now</button>
          </div>
        )}
      </div>
    </div>
  );
}
