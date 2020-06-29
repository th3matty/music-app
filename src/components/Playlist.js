import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";

function Playlist({ token, setPlaylistID, setAlbumID }) {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    function getPlaylists() {
      fetch("https://api.spotify.com/v1/me/playlists", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((playlists) => {
          setPlaylists(playlists.items);
        });
    }
    getPlaylists();
  }, [token]);

  return (
    <div>
      <div className="sticky top-0">
        <p className="text-colorPallete_MintGreen mb-3 mt-5 text-lg ml-2">
          Your Playlists
        </p>
      </div>
      <SimpleBar
        className="area"
        style={{ maxHeight: 500, paddingRight: 10, scrollbarMinSize: 0 }}
      >
        <div className="bg-gray_aside text-colorPallete_Blue text-base text-align-justify mt-5 overflow-auto tracking-wider rounded-md">
          {playlists.map((playlist) => (
            <p
              key={playlist.id}
              className="text-colorPallete_MintGreen text-sm ml-2"
              onClick={() => {
                setPlaylistID(playlist.id);
                setAlbumID("");
              }}
            >
              {playlist.name}
            </p>
          ))}
        </div>
      </SimpleBar>
    </div>
  );
}

export default Playlist;
