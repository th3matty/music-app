import React, { useEffect, useState } from "react";
import SimpleBar from "simplebar-react";

//in this component we show the selected album in the middle frame, as the playlistView component. "for the futur, combining the two components"

function AlbumView({ token, albumID, setOffset, playTrack }) {
  const [album, setAlbum] = useState(null);
  const [trackCover, setTrackCover] = useState(null);

  useEffect(() => {
    fetch(`https://api.spotify.com/v1/albums/${albumID}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((album) => {
        console.log("album: ", album);
        setAlbum(album);
        setTrackCover(album.images[1].url);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [albumID, token]);

  useEffect(() => {
    console.log("AlbumView rendert");
  });

  return (
    <div className="flex flex-wrap justify-around mt-4">
      <h3 className="w-full text-xl mb-4 text-colorPallete_LightGreen">
        {album && album.name}
      </h3>
      <div>
        <img className="w-48 h-48" src={trackCover} alt="playlist album art" />
      </div>

      <SimpleBar style={{ maxHeight: 200, width: "60%", paddingRight: 10 }}>
        <div>
          {album &&
            album.tracks.items.map((item, index) => {
              return (
                <p
                  className="flex justify-between cursor-pointer hover:border rounded"
                  onClick={() => {
                    setOffset(index);
                    playTrack(album.uri);
                  }}
                  key={item.id}
                >
                  <span className="text-green-100">
                    {index + 1}. {item.name}
                  </span>
                  <span className="text-green-100">{item.artists[0].name}</span>
                </p>
              );
            })}
        </div>
      </SimpleBar>
    </div>
  );
}

export default AlbumView;
