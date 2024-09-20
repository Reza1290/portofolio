'use client';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import FlipCardComponent from "../FlipCardComponent";

interface Project {
    title: string;
    desc: string;
    href: string;
    img: string;
    stack: string[];
}

const CategoriesComponent: React.FC = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    let stack = searchParams.get('stack');
    const languages = ['All', 'TypeScript', 'JavaScript', 'Golang', 'Python', 'Java', 'PHP', 'C', 'Flutter', 'Etc'];

    const handleLanguageClick = (language: string) => {
        const newParams = new URLSearchParams(searchParams);
        newParams.set('stack', language);
        router.push(`/labs?${newParams.toString()}`);
        setFilter(language);
        setCurrentPage(1);
    };

    const [filter, setFilter] = useState('All');
    const [data, setData] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch('/assets/labs.json');
            const result = await response.json();
            setData(result.data);
            setLoading(false);
        };

        if (stack == null) {
            handleLanguageClick('All');
        }

        setFilter(stack ?? 'All');
        fetchData();
    }, []);

    const filteredData = data.filter((item) =>
        filter === 'All' || item.stack.some(stackItem => stackItem.toLowerCase() === filter.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const paginatedData = filteredData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    return (
        <section className="flex flex-col mt-5 items-center ">
            <div className="flex justify-center items-end bg-utama w-full max-w-screen-lg">
                {languages.map((language, index) => (
                    <div
                        key={index}
                        onClick={() => handleLanguageClick(language)}
                        className={`select-none border border-t-0 border-x-0 hover:border-sky-900 border-b-2 border-0 transition-all ease-in duration-300 cursor-pointer hover:text-slate-400 p-4 ${stack === language ? 'font-bold border-sky-900' : 'border-utama'
                            }`}
                    >
                        {language}
                    </div>
                ))}
            </div>
            <div className="bg-gray-950 w-screen min-h-[900px] flex flex-col  items-center ">
                <div className={`absolute flex justify-center items-center min-h-[900px] bg-gray-950 filter blur-[7px] animate-bang w-full ${paginatedData.length > 6  ? 'h-[1300px]' : 'overflow-hidden'}`}>
                    <div className="blackhole left-[800px] top-[200px] "></div>
                </div>
                <div className='relative z-[999] max-w-screen-lg w-full p-10 '>
                    {loading ? (
                        <div className='text-center font-bold text-xl'>Thinking...</div>
                    ) : (
                        <div className="grid grid-cols-3 gap-10">
                            {paginatedData.length === 0 ? (
                                <div className='col-span-3 text-center font-bold text-xl'>Upcoming</div>
                            ) : (
                                paginatedData.map((data) => (
                                    <FlipCardComponent
                                        key={data.title}
                                        title={data.title}
                                        description={data.desc}
                                        href={data.href}
                                        image={data.img}
                                        stack={data.stack}
                                    />
                                ))
                            )}
                        </div>
                    )}

                    {/* Pagination Controls */}
                    <div className="flex justify-center mt-10 gap-4">
                        <button
                            className={`p-2 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span>{currentPage} of {totalPages}</span>
                        <button
                            className={`p-2 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesComponent;
