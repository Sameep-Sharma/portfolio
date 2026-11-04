import Image from "next/image";
import { Swirl } from "loading-dev";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-2">
        <div>
          <SwirlDemo></SwirlDemo>
        </div>
        <div>
          New Portfolio Website Cooking :)
        </div>
      </div>
   </div> 
  );
}

export function SwirlDemo() {
  return <Swirl color="#fcf4ed" duration={1460} size={18} />;
}

