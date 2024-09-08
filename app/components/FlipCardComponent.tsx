import Image from "next/image"

interface FlipCardComponentProps {
}

const FlipCardComponent: React.FC<FlipCardComponentProps> = ({ }) => {

  return (
    <div  className="flex flex-col bg-blue-400 hover:bg-blue-500 cursor-pointer transition-all ease-in-out w-full min-h-[20rem] rounded-md border border-x-0  border-t-0 border-b-[0.2rem] border-blue-600">
      <div className="p-4 w-full ">
        <div className='bg-[url("https://www.paralympic.org/sites/default/files/images/130610193822875_Line_0.jpg")] w-full bg-cover max-h-40 h-screen rounded-md border-blue-600 border border-x-0  border-y-0 border-b-[0.2rem]'></div>
      </div> 
      <div className="mx-4 flex gap-2 flex-wrap">
        <div className="bg-white text-black rounded-md px-2 py-1 font-semibold text-xs border border-x-0 border-y-0 border-b-[0.2rem]">
          Python
        </div>
        <div className="bg-white text-black rounded-md px-2 py-1 font-semibold text-xs border border-x-0 border-y-0 border-b-[0.2rem]">
          Test
        </div>
        <div className="bg-white text-black rounded-md px-2 py-1 font-semibold text-xs border border-x-0 border-y-0 border-b-[0.2rem]">
          Test
        </div>
        
      </div>
      <div className="mt-2 px-4 py-2 gap-1 flex flex-col bg-white text-black grow rounded-b">
        <h1 className="font-bold">Project</h1>
        <p className="text-xs text-slate-600 line-clamp-2 leading-4 text-justify">&nbsp; &nbsp; Project With My Partner Partner Partner Partner Partner Partner Partner Partner Partner Partner Partner</p>
      </div>
    </div>
  )
}

export default FlipCardComponent

// flip hover:border-r-4