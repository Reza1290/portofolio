import { useEffect, useState } from "react";
import FlipCardComponent from "./FlipCardComponent";

interface Project {
    title: string;
    desc: string;
    href: string;
    img: string;
    stack: string[];
}

interface ProjectSectionProps { }

const ProjectSection: React.FC<ProjectSectionProps> = () => {
    const [data, setData] = useState<Project[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await fetch('/assets/labs.json');
            const result = await response.json();
            setData(result.data);
            setLoading(false);
        };

        fetchData();
    }, []);

    return (
        <section className="relative flex flex-col items-center justify-center max-sm:px-8 px-16 max-w-screen-lg w-full">
            <h1 className="uppercase text-4xl font-black my-12">Featured Works</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="grid xl:grid-cols-11 w-full my-10 grid-flow-row-dense max-xl:grid-rows-2 max-md:grid-cols-2 max-sm:grid-cols-1 max-xl:grid-cols-3 max-xl:gap-5 max-md:px-10">
                    <div className="xl:col-span-3 flex justify-center items-center">
                        {data[0] && (
                            <FlipCardComponent
                                title={data[0].title}
                                description={data[0].desc}
                                href={data[0].href}
                                image={data[0].img}
                                stack={data[0].stack}
                            />
                        )}
                    </div>
                    <div className="xl:col-start-5 xl:col-span-3">
                        {data[1] && (
                            <FlipCardComponent
                                title={data[1].title}
                                description={data[1].desc}
                                href={data[1].href}
                                image={data[1].img}
                                stack={data[1].stack}
                            />
                        )}
                    </div>
                    <div className="xl:col-span-3 xl:col-start-9">
                        {data[2] && (
                            <FlipCardComponent
                                title={data[2].title}
                                description={data[2].desc}
                                href={data[2].href}
                                image={data[2].img}
                                stack={data[2].stack}
                            />
                        )}
                    </div>
                </div>
            )}

            <a target="_blank" href="/labs" className="bg-blue-600 rounded-md h-12 flex justify-center items-center group-hover">
                <button className="text-md font-bold px-8 flex rounded-md bg-blue-400 w-full justify-center h-full items-center translate-y-[-3px] hover:bg-blue-500 transition-colors ease-in">
                    More (Labs)
                </button>
            </a>
        </section>
    );
};

export default ProjectSection;
