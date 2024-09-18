import NavBar from "../components/NavBar"

export function generateStaticParams() {
    return [{ id: '1' }, { id: '2' }, { id: '3' }]
  }
   
  export default function Page({ params }: { params: { id: string } }) {
    const { id } = params
    return(
        <main className="bg-utama flex flex-col items-center min-h-screen ">
          <div className="flex flex-col items-center bg-utama max-w-screen-lg overflow-x-hidden w-full">
            <NavBar></NavBar>
          </div>
          <div className="flex flex-col items-center max-w-screen-lg w-full overflow-hidden">
             <div className="flex justify-center  items-end bg-utama ">
              <div className="border border-t-0 border-x-0 hover:border-sky-900 border-b-2 border-0 border-utama transition-all ease-in duration-300 cursor-pointer hover:text-slate-400 p-4 font-bold">TypeScript</div>
              <div className="border border-t-0 border-x-0 hover:border-sky-900 border-b-2 border-0 border-utama transition-all ease-in duration-300 cursor-pointer hover:text-slate-400 p-4">JavaScript</div>
              <div className="border border-t-0 border-x-0 hover:border-sky-900 border-b-2 border-0 border-utama transition-all ease-in duration-300 cursor-pointer hover:text-slate-400 p-4">Golang</div>
              <div className="border border-t-0 border-x-0 hover:border-sky-900 border-b-2 border-0 border-utama transition-all ease-in duration-300 cursor-pointer hover:text-slate-400 p-4">Python</div>
              <div className="border border-t-0 border-x-0 hover:border-sky-900 border-b-2 border-0 border-utama transition-all ease-in duration-300 cursor-pointer hover:text-slate-400 p-4">Java</div>
              <div className="border border-t-0 border-x-0 hover:border-sky-900 border-b-2 border-0 border-utama transition-all ease-in duration-300 cursor-pointer hover:text-slate-400 p-4">PHP</div>
              <div className="border border-t-0 border-x-0 hover:border-sky-900 border-b-2 border-0 border-utama transition-all ease-in duration-300 cursor-pointer hover:text-slate-400 p-4">C</div>
              <div className="border border-t-0 border-x-0 hover:border-sky-900 border-b-2 border-0 border-utama transition-all ease-in duration-300 cursor-pointer hover:text-slate-400 p-4">Etc</div>
             </div>
          </div>
        </main>
    )
  }