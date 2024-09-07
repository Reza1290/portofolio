import { useState } from "react";

interface CardJourneyComponentProps {
    children: string | JSX.Element | JSX.Element[];
}

const CardJourneyComponent: React.FC<CardJourneyComponentProps> = ({ children }) => {
    const [readMore, setMore] = useState(false)
    const set = () => {
        setMore(!readMore)
    }
    return (
        <div className="relative group ">
            <section className={`${readMore ? '' : 'line-clamp-5'} text-sm rounded-md bg-red-500 border border-l-0 border-t-0 border-r-1 border-b-[0.2rem] border-red-700 group-hover:bg-red-600 p-6 text-justify  transition-colors ease-in my-3`}>
                {children}
            </section>
            <div onClick={set} className={`${readMore ? 'rotate-180 border-b-0 border-t-[0.2rem]' : 'border-t-0 '} cursor-pointer absolute -bottom-2 bg-red-500 border border-x-0  border-b-[0.2rem] border-red-700 max-w-10 self-end w-8 rounded-lg fill-white h-8 p-2 group-hover:bg-red-600 flex items-end transition-all ease-in`}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></div>
        </div>
    )
}

export default CardJourneyComponent