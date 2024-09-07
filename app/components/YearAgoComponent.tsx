
interface YearAgoComponentProps{
   year: string;
}

const YearAgoComponent: React.FC<YearAgoComponentProps> = ({year}) => {
    var years:any = new Date(new Date().getTime() - new Date(year).getTime()).getFullYear() - 1970

    return (
        <section className="font-bold text-2xl mb-6">
            {years} Years Ago
        </section>
    )
}

export default YearAgoComponent