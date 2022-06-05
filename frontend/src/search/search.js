import Items from './items';
import Filter from './filter';
import React from 'react';

const Room = (props) => {
  const mystyle = {
    display: 'flex',
    flexDirection: 'row',
  };

  return (
    <>
      <div className="col-lg-4 col-sm-6">
        <div className="accomodation_item text-center">
          <div className="hotel_img">
            <img src={props.elem.imgurl} alt="room2" />
            <a href="#" className="btn th-eme_btn button_hover">
              {props.elem.title}
            </a>
          </div>
          <a href="#">
            <h4 className="sec_h4">{props.elem.description}</h4>
          </a>
          <h5>
            {props.elem.price}
            <small>{props.elem.bookfor}</small>
          </h5>
        </div>
      </div>
    </>
  );
};

const Search = () => {
  const list = [
    {
      imgurl: './image/room1.jpg',
      title: 'Book Now',
      description: 'Double Deluxe Room',
      price: '$250',
      bookfor: '/night',
    },
    {
      imgurl: './image/room2.jpg',
      title: 'Book Now',
      description: 'Single Deluxe Room',
      price: '$200',
      bookfor: '/night',
    },
    {
      imgurl: './image/room3.jpg',
      title: 'Book Now',
      description: 'Honeymoon Suit',
      price: '$750',
      bookfor: '/night',
    },
    {
      imgurl: './image/room4.jpg',
      title: 'Book Now',
      description: 'Economy Double',
      price: '$200',
      bookfor: '/night',
    },
  ];
  return (
    <>
      <section className="breadcrumb_area">
        <div
          className="overlay bg-parallax"
          data-stellar-ratio="0.8"
          data-stellar-vertical-offset="0"
          data-background=""
        ></div>
        <div className="container">
          <div className="page-cover text-center">
            <h2 className="page-cover-tittle">Search</h2>
            <ol className="breadcrumb">
              <li>
                <a href="/home">Home</a>
              </li>
              <li className="active">Search</li>
            </ol>
          </div>
          <div className="mt-10 row">
            <div className="col-lg-10">
              <input
                type="text"
                name="first_name"
                placeholder="Search"
                onFocus="this.placeholder = ''"
                onBlur="this.placeholder = 'Search'"
                required=""
                className="single-input"
              />
            </div>
            <div className="col-lg-2">
              <button
                type="submit"
                href="#"
                className="btn theme_btn button_hover"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <br />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-3">
            <div
              className="container shadow"
              style={{ backgroundColor: '#fcfaf2' }}
            >
              {/*<Filter></Filter>*/}
              <>
                <br />

                <div className="row">
                  <div className="switch-wrap d-flex justify-content-between ">
                    <h4>Apply Filter</h4>
                    <div className="primary-switch">
                      <input type="checkbox" id="default-switch" />
                      <label htmlFor="default-switch"></label>
                    </div>
                  </div>
                  <br />

                  <div className="single-element-widget">
                    <h3 className="mb-30 title_color">Select City</h3>
                    <div className="default-select" id="default-select">
                      <div className="nice-select" tabIndex="0">
                        <span className="current">City</span>
                        <ul className="list">
                          <li data-value="1" className="option selected focus">
                            Muree
                          </li>
                          <li data-value="1" className="option">
                            Peshawar
                          </li>
                          <li data-value="1" className="option">
                            Lahore
                          </li>
                          <li data-value="1" className="option">
                            Islamabad
                          </li>
                          <li data-value="1" className="option">
                            Karachi
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-30 title_color">Select Room</h3>
                  <div className="switch-wrap d-flex justify-content-between">
                    <h5>Special Rooms</h5>
                    <div className="primary-checkbox">
                      <input type="checkbox" id="default-checkbox1" />
                      <label htmlFor="default-checkbox1"></label>
                    </div>
                  </div>

                  <div className="switch-wrap d-flex justify-content-between">
                    <h5>Normal Rooms</h5>
                    <div className="primary-checkbox">
                      <input type="checkbox" id="default-checkbox2" />
                      <label htmlFor="default-checkbox2"></label>
                    </div>
                  </div>

                  <h3 className="mb-30 title_color">Select Facilities</h3>
                  <div className="switch-wrap d-flex justify-content-between">
                    <h5>Single</h5>
                    <div className="primary-checkbox">
                      <input type="checkbox" id="default-checkbox3" />
                      <label htmlFor="default-checkbox3"></label>
                    </div>
                  </div>

                  <div className="switch-wrap d-flex justify-content-between">
                    <h5>Double</h5>
                    <div className="primary-checkbox">
                      <input type="checkbox" id="default-checkbox4" />
                      <label htmlFor="default-checkbox4"></label>
                    </div>
                  </div>

                  <h3 className="mb-30 title_color">Price Range</h3>

                  <div className="row">
                    <div className="col-lg-5">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="MIN"
                        onFocus="this.placeholder = ''"
                        onBlur="this.placeholder = 'MAX'"
                        required=""
                        className="single-input"
                      />
                      <br />
                    </div>

                    <div className="col-lg-2">
                      <h6>to</h6>
                      <br />
                    </div>

                    <div className="col-lg-5">
                      <input
                        type="text"
                        name="first_name"
                        placeholder="MAX"
                        onFocus="this.placeholder = ''"
                        onBlur="this.placeholder = 'MAX'"
                        required=""
                        className="single-input"
                      />
                      <br />
                    </div>
                  </div>
                </div>
              </>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="container shadow">
              {/*<Items></Items>*/}
              <section className="accomodation_area section_gap">
                <div className="row mb_30">
                  {list.map((romE) => (
                    <Room elem={romE} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
