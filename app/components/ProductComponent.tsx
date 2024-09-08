
interface ProductComponentProps {
    title: string,
    desc: string,
    image?: string,
    instagram?: string,
    youtube?: string,
    link?: string,
}

const ProductComponent: React.FC<ProductComponentProps> = ({ title, desc, image = 'yt_pemrograman', youtube, instagram, link }) => {
    return (
        <div className="grid grid-rows-2 gap-8 col-span-4 ">
            <div className="bg-blue-400  border-x-0 border-b-[0.2rem] hover:border hover:border-b-4 border-t-0 rounded-lg h-60 w-full grid grid-rows-5">
                <div className={`bg-[url("/assets/product/${image}.png")] bg-cover rounded-t-lg row-span-2`}>

                </div>
                <div className="bg-white rounded-b-md row-span-3 text-utama flex flex-col items-center justify-center px-8">
                    <h1 className="text-xl font-bold text-utama">{title}</h1>
                    <p className="text-center text-utama text-sm line-clamp-3">{desc}</p>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-4 auto-rows-max">
                {   youtube != null ?
                    <a href={youtube} target='_blank' className="bg-blue-400 border-x-0 border-b-[0.2rem] hover:border hover:border-b-4 hover:border-blue-800 cursor-pointer border-t-0 rounded-lg h-14 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-6 fill-white hover:fill-blue-600">Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>
                    </a> : <>
                    </>
                }
                {
                    instagram != null ? <a href={instagram} target='_blank' className="bg-blue-400 border-x-0 border-b-[0.2rem] hover:border hover:border-b-4 hover:border-blue-800 cursor-pointer border-t-0 rounded-lg h-14 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 fill-white hover:fill-blue-600">Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.<path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                    </a> : <></>}
                {
                    link != null ?
                    <a href={link} target='_blank' className="bg-blue-400 border-x-0 border-b-[0.2rem] hover:border hover:border-b-4 hover:border-blue-800 cursor-pointer border-t-0 rounded-lg h-14 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 fill-white hover:fill-blue-600"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg>
                    </a> : <></>}
            </div>
        </div>
    )
}

export default ProductComponent