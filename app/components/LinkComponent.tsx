
interface LinkComponentProps {
  title: string;
  link: string;
  reverse?: boolean;
}

const LinkComponent: React.FC<LinkComponentProps> = ({ title, link, reverse = false }) => {

  return (
    <div className={`flex gap-4 ${reverse ? 'flex-row-reverse' : 'flex-row'}`}>
      <a href={link} className="transition-colors ease-in hover:bg-blue-500 font-semibold bg-blue-400 max-w-72 min-w-64 p-2 px-3 rounded-md border border-x-0 border-t-0 border-b-[0.2rem] border-blue-700">
        {title}
      </a>
      <div className="bg-blue-400 max-w-72 p-2 rounded-md border border-x-0 border-t-0 border-b-[0.2rem] border-blue-600 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="w-6 fill-white"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg></div>
    </div>
  )
}

export default LinkComponent