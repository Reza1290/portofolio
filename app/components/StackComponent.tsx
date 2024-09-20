import Image from 'next/image';
import React from 'react';

interface StackComponentProps {
    id: string;
    name: string;
    imageUrl: string;
    first: boolean;
    last: boolean;
    type: string;
}

const StackComponent: React.FC<StackComponentProps> = ({ id, name, imageUrl, first, last, type }) => {
    return (
        <label
            htmlFor={id}
            className="select-none snap-center shrink-0 first:pl-8 last:pr-8  relative group transition-all ease-in-out delay-150 cursor-pointer"
        >
            <input type="radio" name={name} id={id} className="peer hidden" />
            <div className={`w-40 max-sm:w-20 max-sm:h-[5rem] h-[10.2rem] bg-slate-500 rounded-lg absolute z-[-1] ${first && !last ? 'mask-first' : !first && last ? 'mask-last' : ''}`} />
            <div className="text-black peer-checked:block hidden bg-blue-600 h-10 w-40 max-sm:w-20 max-sm:h-5 absolute rounded-md rotate-[-5deg] -top-20 transition-opacity ease-in-out delay-150 duration-300">
                
            </div>
            <a href={`/labs?stack=${type}`} className="text-white font-bold peer-checked:block hidden bg-blue-400 hover:bg-blue-500 h-10 max-sm:h-5 w-40 max-sm:w-20  absolute rounded-md rotate-[-5deg] -top-[5.2rem] transition-opacity ease-in-out delay-150 duration-300">
                <p className='flex items-center justify-center h-10 max-sm:h-5'>{type} Work</p>
            </a>
            <Image width={'160'} height={'160'} className={`shrink-0 w-40 max-sm:w-20 max-sm:h-[5rem] h-40 rounded-md shadow-xl bg-white ${first && !last ? 'mask-first' : !first && last ? 'mask-last' : ''}`} src={"/" +imageUrl.toLowerCase()} alt="Radio Thumbnail" />
        </label>
    );
};

export default StackComponent
