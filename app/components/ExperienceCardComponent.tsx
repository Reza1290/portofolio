import Link from "next/link"

interface ExperienceCardProps {
    month: string,
    year: string,
    title: string,
    subtitle: string,
    type?: string,
    href?: string,
}

const   ExperienceCardComponent:React.FC<ExperienceCardProps> = ({title, subtitle, month,year, type = 'aw',href =''}) => {

    return (
        <div className="grid grid-cols-4 gap-8">
            <div className={`place-self-end leading-4 ${type == 'aw' ? 'bg-green-500 border-green-700' : type == 'exp' ? 'bg-blue-500 border-blue-700' : 'bg-red-400 border-red-700'} border border-x-0 border-t-0 border-b-[0.2rem]  w-20 h-20 rounded-lg flex flex-col justify-center items-center p-2 `}>
                <div className="font-bold">{month}</div>
                <div className="text-xl font-black">{year}</div>
            </div>
            <Link href={href} className="col-span-3 relative">
                <div className={`relative z-[20] leading-4  ${type == 'aw' ? 'bg-green-500 border-green-700' : type == 'exp' ? 'bg-blue-500 border-blue-700' : 'bg-red-400 border-red-700'} border border-x-0 border-t-0 border-b-[0.2rem]  h-20 px-4 rounded-lg flex flex-col justify-center items-start p-2 `}>
                    <div className="text-xl font-black">{title}</div>
                    <div className="font-bold">{subtitle}</div>
                </div>
                <div className={` absolute top-0 ${type == 'aw' ? 'bg-green-800' : type == 'exp' ? 'bg-blue-800' : 'bg-red-700'} h-20 -right-10 w-20 rounded-md flex justify-end `}>
                    <div className="origin-center -rotate-90 fill-white translate-x-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8" viewBox="0 0 512 512"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                    </div>                    
                </div>
            </Link>
        </div>
    )
}

export default ExperienceCardComponent