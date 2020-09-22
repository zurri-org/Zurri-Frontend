import React from "react";
import { FaPlus } from 'react-icons/fa';

class BookingForm extends React.Component {

  // Using constructor to monitor the state of Inputs
  constructor() {
    super();
    this.state = {
      Names: '',
      Email: '',
      CheckIn: '',
      Time: '',
      Checkout: '',
      Occupants: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    })
  }

  handleAdd(e) {

    // Prevent from page reloading after submit

    e.preventDefault();
    let tempApt = {
      Names: this.state.Names,
      Email: this.state.Email,
      CheckIn: this.state.CheckIn + ' ' + this.state.Time,
      Checkout: this.state.Checkout,
      Occupants: this.state.Occupants
    };

    this.props.BookingForm(tempApt);

    this.setState({
      Names: '',
      Email: '',
      CheckIn: '',
      Time: '',
      Checkout: '',
      Occupants: ''
    })
  }

  render() {
    return (
      <div
        className={
          'card textcenter mt-3 ' +
          (this.props.formDisplay ? '' : 'book-now')
        }>

        {/* Header  */}
        <div className="apt-addheading card-header bg-primary text-white"
          onClick={this.props.toggleForm}
        >
          <FaPlus /> Book with us today
                </div>

        <div className="card-body">
          <form id="aptForm" noValidate onSubmit={this.handleAdd}>
            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="customer-name"
                readOnly
              >
                Names
                        </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="customer-name"
                  placeholder="Add your names"
                  value={this.state.Names}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-2 col-form-label text-md-right"
                htmlFor="contact-info"
              >
                Email
                        </label>
              <div className="col-md-10">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Email address"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group form-row">
              <label
                className="col-md-4 col-form-label text-md-right"
                htmlFor="Checkin"
              >
                Check In Date
                        </label>
              <div className="col-md-4">
                <input
                  type="date"
                  className="form-control"
                  name="CheckIn"
                  id="CheckIn"
                  value={this.state.CheckIn}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group form-row">
                <label
                  className="col-md-6 mt-2 col-form-label text-md-right"
                  htmlFor="Time"
                >
                  Time
                          </label>
                <div className="col-md-4">
                  <input
                    type="time"
                    className="form-control"
                    name="Time"
                    id="Time"
                    value={this.state.Time}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label
                  className="col-md-6 col-form-label text-md-right"
                  htmlFor="Checkout"
                >
                  Check Out Date
                        </label>
                <div className="col-md-4">
                  <input
                    type="date"
                    className="form-control"
                    name="Checkout"
                    id="Checkout"
                    value={this.state.Checkout}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="form-group form-row">
                <label className="col-md-6 text-md-right" htmlFor="Occupants">
                  Number of Occupants
                        </label>
                <input
                  type="number"
                  className="form-control"
                  name="Occupants"
                  id="Occupants"
                  value={this.state.Occupants}
                  onChange={this.handleChange}
                />
              </div>
            </div>

          <div className="form-group form-row mb-0">
            <div className="offset-md-2 col-md-6">
              <button
                type="submit"
                className="btn btn-primary d-block ml-auto"
              >
                Book Now
                            </button>
            </div>
          </div>
          </form>
      </div>
      </div >
    )
  }
}

export default BookingForm;