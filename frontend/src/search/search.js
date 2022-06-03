import Items from "./items";
import Filter from "./filter";


const Search = () =>{
    return(

        <>
            <section className="breadcrumb_area">
                <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0"
                     data-background=""></div>
                <div className="container">
                    <div className="page-cover text-center">
                        <h2 className="page-cover-tittle">Search</h2>
                        <ol className="breadcrumb">
                            <li><a href="/home">Home</a></li>
                            <li className="active">Search</li>
                        </ol>
                    </div>
                    <div className="mt-10 row">
                        <div className="col-lg-10">
                            <input type="text" name="first_name" placeholder="Search" onFocus="this.placeholder = ''"
                                   onBlur="this.placeholder = 'Search'" required="" className="single-input"/>
                        </div>
                        <div className="col-lg-2">
                            <button type="submit" href="#" className="btn theme_btn button_hover">Search</button>
                        </div>

                    </div>
                </div>
            </section>
<br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="container shadow" style={{backgroundColor:"#fcfaf2"}}>
                            <Filter></Filter>

                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="container shadow">
                            <Items></Items>

                        </div>
                    </div>
                </div>
            </div>







        </>
    )
}

export default Search