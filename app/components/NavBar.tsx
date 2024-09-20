import { Jua } from "next/font/google";



const jua = Jua({ weight: "400", subsets: ["latin"] });


interface NavBarProps {
    // title: string;
    // link: string;
    // reverse?: boolean;
}

const NavBar: React.FC<NavBarProps> = () => {

    return (
        <nav className="flex justify-between items-center w-full max-w-screen-lg  max-sm:px-8 px-16 pt-16 ">
            <div className={jua.className}>
                <a href="/" className="text-4xl font-bold select-none">Reza</a>
            </div>
            <div className="bg-blue-600 rounded-md h-10 w-28 flex justify-center items-center group-hover">
                <a href="/assets/cv.pdf" download='Muhamad Reza Muktasib - Resume' className="flex rounded-md bg-blue-400 w-full justify-center h-full items-center translate-y-[-3px] font-medium hover:bg-blue-500 transition-colors ease-in">
                    Start
                </a>
            </div>
        </nav>
    )
}

export default NavBar