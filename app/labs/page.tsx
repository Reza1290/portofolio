'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import NavBar from "../components/NavBar";

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const stack = searchParams.get('stack');
  const languages = ['TypeScript', 'JavaScript', 'Golang', 'Python', 'Java', 'PHP', 'C', 'Etc'];

  // Function to handle language click and update URL query param
  const handleLanguageClick = (language:string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('stack', language);
    router.push(`/labs?${newParams.toString()}`);
  };

  return (
    <main className="bg-utama flex flex-col items-center min-h-screen">
      <div className="flex flex-col items-center bg-utama max-w-screen-lg overflow-x-hidden w-full">
        <NavBar />
      </div>
      <div className="flex flex-col items-center max-w-screen-lg w-full overflow-hidden">
        <div className="flex justify-center items-end bg-utama">
          {languages.map((language, index) => (
            <div
              key={index}
              onClick={() => handleLanguageClick(language)} // Handle click event
              className={`border border-t-0 border-x-0 hover:border-sky-900 border-b-2 border-0 border-utama transition-all ease-in duration-300 cursor-pointer hover:text-slate-400 p-4 ${stack === language ? 'font-bold border-sky-900' : ''}`}
            >
              {language}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
