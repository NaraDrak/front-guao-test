import Card from "../components/Card"
const CardSection =()=>{
    return(
        <div className="flex flex-col justify-around md:flex-col lg:flex-row  gap-24 mx-24 mt-32">
            <Card/>
            <Card/>
            <Card/>
        </div>
        )
}
export default CardSection;