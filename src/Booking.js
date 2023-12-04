import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class Booking extends Component {
    constructor (props){
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeBookingComment = this.onChangeBookingComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            firstname: " ",
            lastname: " ",
            emailaddress: " ",
            phonenumber: " ",
            date: new Date(),
            bookingcomment: " "
          }
        }
        onChangeFirstName(e){
            this.setState({
              firstname: e.target.value
            })
          }
          onChangeLastName(e){
            this.setState({
              lastname: e.target.value
            })
          }
          onChangeEmailAddress(e){
            this.setState({
              emailaddress: e.target.value
            })
          }
          onChangePhoneNumber(e){
            this.setState({
              phonenumber: e.target.value
            })
          }
          onChangeDate(date){
            this.setState({
              date: date
            })
          }
          onChangeBookingComment(e){
            this.setState({
              bookingcomment: e.target.value
            })
          }
          onSubmit(e){
            e.preventDefault();
            const booking ={
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              emailaddress: this.state.emailaddress,
              phonenumber: this.state.phonenumber,
              date: this.state.date,
              time: this.state.time,
              bookingcomment: this.state.bookingcomment,
            }
            console.log(booking)
            axios.post('http://localhost:5000/add', booking)
            .then(res=>console.log(res.data));
            //this.setState({ showAlert: true }); // set showAlert to true after form submission
            // window.location="/"
            // this.props.history.push('/booking');
            
            this.setState({
                firstname: '',
                lastname: '',
                emailaddress: '',
                phonenumber: '',
                date: '',
                bookingcomment: ''
            })
            // window.alert("Your trip has has been booked! We'll contact you soon to confirm the details.")
            console.log(booking)
          }
          
  render() {
    return (
        <form onSubmit={this.onSubmit}>
            <label>First Name:
                <input type="text" value={this.state.firstname} onChange={this.onChangeFirstName}/>
            </label>
            <label>Last Name:
                <input type="text" value={this.state.lastname} onChange={this.onChangeLastName}/>
            </label>
            <label>Email Address:
                <input type="text" value={this.state.emailaddress} onChange={this.onChangeEmailAddress}/>
            </label>
            <label>Phone Number:
                <input type="text" value={this.state.phonenumber} onChange={this.onChangePhoneNumber}/>
            </label>
            {/* <label>Date:
                <input type="text" value={this.state.date} onChange={this.onChangeDate}/>
            </label> */}
            <DatePicker label="Date" selected={this.state.date} onChange={this.onChangeDate}/>
            <label>Comments:
                <input type="text" value={this.state.bookingcomment} onChange={this.onChangeBookingComment}/>
            </label>
            <button type="submit">Submit</button>
        </form>
    )
  }
}
export default Booking;