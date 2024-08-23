import { InformationCircleIcon, PlayIcon } from "@heroicons/react/20/solid";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-60 px-10 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-base w-1/3">{overview}</p>

      <div className="flex">
        <button className="bg-white text-black text-lg  px-10 p-2 mr-2 rounded-md flex hover:bg-opacity-80">
        <PlayIcon className="size-5 m-auto"/> Play
        </button>
        <button className="bg-slate-800 text-white text-lg px-10 p-2 rounded-md flex hover:bg-opacity-80">
          <InformationCircleIcon className="size-6 m-auto" />More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
