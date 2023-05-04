import Carrousel from "./corrousel";
import TimeUntil from "./timeUntil";
const Featured =() =>{
    return(
        <div className="featured_container">
            <Carrousel/>
            <div className="artist_name">
                <div className="wrapper">
                    Gandalf the Grey
                </div>
            </div>
            <TimeUntil/>
        </div>
    )
}

export default Featured;