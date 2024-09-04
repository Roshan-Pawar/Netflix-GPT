import { InformationCircleIcon, PlayIcon } from "@heroicons/react/20/solid";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-48 xl:px-14 px-6 absolute text-white bg-gradient-to-r from-black">
      <h1 className="md:text-3xl text-2xl font-bold">{title}</h1>
      <p className="hidden xl:inline-block py-2 font-thin w-1/3">{overview}</p>

      <div className="flex my-4 md:m-0">
        <button className="bg-white text-black text-lg py-1 px-4 md:px-10 md:p-2 md:mr-2 rounded-md flex hover:bg-opacity-80">
        <PlayIcon className="size-5 m-auto"/> Play
        </button>
        <button className="bg-slate-800 text-white hidden text-lg px-10 p-2 rounded-md md:flex hover:bg-opacity-80">
          <InformationCircleIcon className="size-6 m-auto" />More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
