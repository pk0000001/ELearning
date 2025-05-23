// import React, { useEffect, useRef, useState } from "react";
// import ReactPlayer from "react-player/youtube";
// import { useParams } from "react-router-dom";

// const Video = () => {
//   const playerRef = useRef(null);
//   const [playing, setPlaying] = useState(false);
//   const [volume, setVolume] = useState(0.8);
//   const [playbackRate, setPlaybackRate] = useState(1);
//   const [played, setPlayed] = useState(0);
//   const {video} = useParams();
//   const [youtubeLink, setYoutubeLink] = useState("");

//   const handleProgress = (state) => {
//     setPlayed(state.played);
//   };

//   const handleSeek = (e) => {
//     const seekTo = parseFloat(e.target.value);
//     playerRef.current.seekTo(seekTo);
//   };

//   useEffect(() => {
//     const fetchVideo = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/chapters/${video}`);
//         const data = await res.json();
//         setYoutubeLink(data.youtubeLink);
//       } catch (err) {
//         console.error("Error fetching video:", err);
//       }
//     };

//     fetchVideo();
//   }, [video]);


//   return (
//     <div className="relative w-screen h-screen mx-auto">
//        {youtubeLink ? (
//       <ReactPlayer
//         ref={playerRef}
//         url={youtubeLink}
//         playing={playing}
//         volume={volume}
//         playbackRate={playbackRate}
//         width="100%"
//         height="100%"
//         controls={false}
//         onProgress={handleProgress}
//         config={{
//           youtube: {
//             playerVars: { modestbranding: 1, rel: 0, showinfo: 0 },
//           },
//         }}
//       />) : (
//         <p>Loading...</p>
//       )} 

//       {/* Custom Controls */}
//       <div className="absolute bottom-4 left-0 right-0 flex flex-col z-30 items-center space-y-2 px-4 py-3 bg-black bg-opacity-60 text-white">
//         {/* Seek Bar */}
//         <input
//           type="range"
//           min={0}
//           max={1}
//           step="0.01"
//           value={played}
//           onChange={handleSeek}
//           className="w-full accent-blue-500"
//         />

//         <div className="flex items-center justify-between w-full">
//           {/* Play/Pause */}
//           <button
//             onClick={() => setPlaying(!playing)}
//             className="text-xl bg-blue-600 px-3 py-1 rounded hover:bg-blue-700"
//           >
//             {playing ? "⏸ Pause" : "▶️ Play"}
//           </button>

//           {/* Volume */}
//           <div className="flex items-center space-x-2">
//             <span>🔊</span>
//             <input
//               type="range"
//               min={0}
//               max={1}
//               step="0.01"
//               value={volume}
//               onChange={(e) => setVolume(parseFloat(e.target.value))}
//               className="w-24 accent-blue-500"
//             />
//           </div>

//           {/* Speed Control */}
//           <div className="flex items-center space-x-2">
//             <span>⏩ Speed</span>
//             <select
//               value={playbackRate}
//               onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
//               className="bg-gray-700 px-2 py-1 rounded"
//             >
//               <option value={0.5}>0.5x</option>
//               <option value={1}>1x</option>
//               <option value={1.5}>1.5x</option>
//               <option value={2}>2x</option>
//             </select>
//           </div>
//         </div>
//       </div>
//       <div
// className="absolute  bottom-0 right-0 w-full h-full z-20"
// onClick={(e) => e.stopPropagation()}
// ></div>
//     </div>
//   );
// };

// export default Video;



// {/* <div
// className="absolute  bottom-0 right-0 w-24 h-12 z-50"
// onClick={(e) => e.stopPropagation()}
// ></div>
// <div
// className="absolute top-0  right-0 w-120 h-200 z-50"
// onClick={(e) => e.stopPropagation()}
// ></div>

// {/* Optional: Prevent full player click-through */}
// {/* <div className="absolute bottom-12  right-78 inset-0 z-40" onClick={(e) => e.preventDefault()}></div> */} 


import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { useParams } from "react-router-dom";

const Video = () => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [played, setPlayed] = useState(0);
  const [youtubeLink, setYoutubeLink] = useState("");
  const { video } = useParams();

  const handleProgress = (state) => setPlayed(state.played);

  const handleSeek = (e) => {
    const seekTo = parseFloat(e.target.value);
    playerRef.current.seekTo(seekTo);
  };

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/chapters/${video}`);
        const data = await res.json();
        setYoutubeLink(data.youtubeLink);
      } catch (err) {
        console.error("Error fetching video:", err);
      }
    };
    fetchVideo();
  }, [video]);

  return (
    <div className="relative w-full h-screen bg-black">
      {youtubeLink ? (
        <ReactPlayer
          ref={playerRef}
          url={youtubeLink}
          playing={playing}
          volume={volume}
          playbackRate={playbackRate}
          width="100%"
          height="100%"
          controls={false}
          onProgress={handleProgress}
          config={{
            youtube: {
              playerVars: { modestbranding: 1, rel: 0, showinfo: 0 },
            },
          }}
          className="!absolute top-0 left-0"
        />
      ) : (
        <p className="text-white text-center pt-20">Loading...</p>
      )}

      {/* Custom Controls */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-4 py-5 bg-black/70 text-white flex flex-col space-y-3 md:space-y-2">
        <input
          type="range"
          min={0}
          max={1}
          step="0.01"
          value={played}
          onChange={handleSeek}
          className="w-full accent-blue-500"
        />

        <div className="flex flex-wrap justify-between items-center gap-y-4">
          <button
            onClick={() => setPlaying(!playing)}
            className="bg-blue-600 px-4 py-2 text-sm md:text-base rounded hover:bg-blue-700"
          >
            {playing ? "⏸ Pause" : "▶️ Play"}
          </button>

          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base">🔊</span>
            <input
              type="range"
              min={0}
              max={1}
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-24 accent-blue-500"
            />
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm md:text-base">⏩ Speed</span>
            <select
              value={playbackRate}
              onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
              className="bg-gray-800 text-white px-2 py-1 rounded text-sm md:text-base"
            >
              <option value={0.5}>0.5x</option>
              <option value={1}>1x</option>
              <option value={1.5}>1.5x</option>
              <option value={2}>2x</option>
            </select>
          </div>
        </div>
      </div>

      {/* Overlay to disable default YouTube buttons */}
      <div
        className="absolute top-0 left-0 w-full h-full z-20"
        onClick={(e) => e.stopPropagation()}
      ></div>
    </div>
  );
};

export default Video;
