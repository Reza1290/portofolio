'use client';
import { useSearchParams, useRouter } from 'next/navigation';

export default function CategoriesComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const stack = searchParams.get('stack');
  const languages = ['TypeScript', 'JavaScript', 'Golang', 'Python', 'Java', 'PHP', 'C', 'Etc'];

  const handleLanguageClick = (language: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('stack', language);
    router.push(`/labs?${newParams.toString()}`);
  };

  return (
    <div className="flex justify-center items-end bg-utama">
      {languages.map((language, index) => (
        <div
          key={index}
          onClick={() => handleLanguageClick(language)}
          className={`border border-t-0 border-x-0 hover:border-sky-900 border-b-2 border-0 border-utama transition-all ease-in duration-300 cursor-pointer hover:text-slate-400 p-4 ${
            stack === language ? 'font-bold border-sky-900' : ''
          }`}
        >
          {language}
        </div>
      ))}
    </div>
  );
}
