import Image from "next/image"
import { useEffect, useState } from "react";

interface FlipCardComponentProps {
  title: string,
  stack: Array<String>,
  description: string,
  href: string,
  image: string,
}

const FlipCardComponent: React.FC<FlipCardComponentProps> = ({ title, stack, description, href, image }) => {

  return (
    <a href={href} className="flex flex-col bg-slate-100 hover:bg-slate-200 cursor-pointer transition-all ease-in-out w-full min-h-[20rem] rounded-lg border border-x-0  border-t-0 border-b-[0.25rem] border-slate-200">
      <div className="p-4 w-full ">
        <div
          className={`bg-[url('https://raw.githubusercontent.com/Reza1290/next-landing-page/refs/heads/main/public${image}?raw=true')] w-full bg-cover max-h-40 h-screen rounded-md border-slate-200 border border-x-0 border-y-0 border-b-[0.25rem]`}
          style={{ backgroundImage: `url('https://raw.githubusercontent.com/Reza1290/next-landing-page/refs/heads/main/public${image}?raw=true')` }}
        ></div>
      </div>
      <div className="mx-4 flex gap-2 flex-wrap">
        {
          stack.map((data,idx) =>
          (
            <div key={idx} className="bg-white text-black rounded-md px-2 py-1 font-semibold text-xs border border-x-0 border-y-0 border-b-[0.25rem]">
              {data}
            </div>
          )

          )
        }
      </div>
      <div className="mt-2 px-4 py-2 gap-1 flex flex-col bg-white text-black grow rounded-b">
        <h1 className="font-bold">{title}</h1>
        <p className="text-xs text-slate-600 line-clamp-2 leading-4 text-justify">&nbsp; &nbsp; {description}</p>
      </div>
    </a>
  )
}

export default FlipCardComponent

