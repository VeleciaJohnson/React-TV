import { useEffect, useState } from "react";
import EpisodeDetails from "../episodes/EpisodeDetails.jsx";
import EpisodeList from "../episodes/EpisodeList.jsx";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState(show?.episodes[0] ?? null);

  useEffect(() => {
    setSelectedEpisode(show?.episodes[0] ?? null);
  }, [show]);

  if (!show) {
    return <div className="show-details">Select a show to view its episodes.</div>;
  }

  return (
    <div className="show-details">
      <EpisodeList
        name={show.name}
        episodes={show.episodes}
        selectedEpisode={selectedEpisode}
        setSelectedEpisode={setSelectedEpisode}
      />
      <EpisodeDetails episode={selectedEpisode} />
    </div>
  );
}
