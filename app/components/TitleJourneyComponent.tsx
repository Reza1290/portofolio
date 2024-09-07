
interface TitleJourneyComponentProps{
   title: string;
}

const TitleJourneyComponent: React.FC<TitleJourneyComponentProps> = ({title}) => {

    return (
        <section className="font-bold text-2xl ">
            {title}
        </section>
    )
}

export default TitleJourneyComponent