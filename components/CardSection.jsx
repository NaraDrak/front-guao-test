import Card from "../components/Card"
const CardSection =()=>{
    return(
      <>
        <div className="sm:ml-11 sm:mr-11 md:ml-24 md:mr-32 -mt-96 md:mt-56">
      <div>
      <div className="flex flex-col justify-around md:flex-col lg:flex-row mt-4 gap-24 ">
        <Card/>
        <Card/>
        <Card/>
      </div>
      </div>
    </div>
    </>
        )
}
export default CardSection;