import React from "react";
import waait from "waait"; // https://www.npmjs.com/package/waait
import '../assets/main.css';
import '../assets/album.css';

function Album({ release, setPlay, setPlayURIs }) {
  return (
    <div
	   id="albumContainer"
      className="m-2 group card card-body"
      onClick={async () => {
        setPlay(false);
        await waait(100);
        setPlayURIs(release.uri);
        setPlay(true);
      }}
    >
      <div className="max-w-sm w-full lg:max-w-full lg:flex ">
        <div className="card-front h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          <img
            src={release.images[1].url}
            alt={release.name}
            className="w-full"
          />
        </div>
        <div className=" card-back border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="px-6 py-4">
            <p className="font-bold text-gray-800 text-sm hover:bg-grey-600">
              {release.name.length > 8
                ? release.name.substring(0, 8) + "..."
                : release.name}
            </p>
            <p className="text-sm text-gray-600 mt-1">
              {release.artists[0].name.length > 8
                ? release.artists[0].name.substring(0, 8) + "..."
                : release.artists[0].name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album;
