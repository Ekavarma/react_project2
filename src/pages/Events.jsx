// import "../styles/events.css"
function Events() {
    return (
      <div className="container mt-4">
        <h2>Our Events</h2>
        <div className="row mt-3">
          <div className="col-md-4">
            <div className="card">
              <img src="https://img.freepik.com/free-photo/young-adults-having-party-home_23-2149215872.jpg?t=st=1742472590~exp=1742476190~hmac=e69f021b9173aa53e80e72316fa0bff8b106dad450ca869eca4bfccf83754fb5&w=900" className="card-img-top" alt="Birthday Party" />
              <div className="card-body">
                <h5 className="card-title">Birthday Parties</h5>
                <p className="card-text">Celebrate birthdays with fun and joy.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://img.freepik.com/free-photo/corporate-businessman-giving-presentation-large-audience_53876-101865.jpg?t=st=1742472664~exp=1742476264~hmac=e0f1852f207d9ac025eb9dccecd65ba06755613c42edfb1ff5880e16e38043a6&w=900" className="card-img-top" alt="Conference" />
              <div className="card-body">
                <h5 className="card-title">Corporate Conferences</h5>
                <p className="card-text">Host professional conferences with ease.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="https://img.freepik.com/free-photo/beautiful-photozone-with-big-wreath-decorated-with-greenery-roses-centerpiece-candles-sides-garland-hanged-trees_8353-11019.jpg?t=st=1742472740~exp=1742476340~hmac=88623f4ec939fac4b4bfb53bcc983f1e1f246494ab401ff30818a8c13f703c0a&w=900" className="card-img-top" alt="Marriage Event" />
              <div className="card-body">
                <h5 className="card-title">Marriage Events</h5>
                <p className="card-text">Make weddings unforgettable with us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Events