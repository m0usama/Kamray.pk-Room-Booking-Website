import Banner from "../banner/banner";
import Facilities from "../facilities/facilities";
import Items from "../search/items";
import Rooms from "../profile/Rooms";

const Home = () =>{
    return(

        <>
              <Banner></Banner>
            <Rooms></Rooms>
            <Facilities></Facilities>

        </>
    )
}

export default Home