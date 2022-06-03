

const Paginate = () =>{
    return(
        <>
            <br/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
            <nav  >
                <ul className="pagination">
                    <li className="page-item ">
                        <span className="page-link"><strong>Previous</strong></span>
                    </li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item " aria-current="page">
                        <span className="page-link">2</span>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#"><strong>Next</strong></a>
                    </li>
                </ul>
            </nav>
            </div>
                </div>
            </div>
        </>
    )
}

export default Paginate