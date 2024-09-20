
interface SubtitleJourneyComponentProps{
   subtitle: string;
   reference: string;
}

const SubtitleJourneyComponent: React.FC<SubtitleJourneyComponentProps> = ({subtitle, reference = ''}) => {

    return (
        <a className="font-normal text-lg text-slate-400 hover:text-blue-300" href={reference}>
            {subtitle}
        </a>
    )
}

export default SubtitleJourneyComponent