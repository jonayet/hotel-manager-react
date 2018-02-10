import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';

import { RoomTile } from './RoomTile';
import { addBooking } from '../store/booking';
import './Booking.scss';

/* eslint-disable react/prop-types */
class BookingComponent extends Component {
  constructor(props) {
    super(props);
    this.addBooking = this.addBooking.bind(this);
    this.state = {
      id: 10,
    };
  }

  componentDidMount() {

  }

  addBooking() {
    this.props.dispatch(addBooking({
      id: this.state.id,
      roomId: '1',
      guestId: '1',
      from: '2018-01-01',
      to: '2018-02-01',
    }));
    this.state.id = this.state.id + 1;
  }

  render() {
    const { bookings } = this.props;
    return (
      <div>
        Booking
        {
          bookings.map(booking => (
            <RoomTile booking={booking} key={booking.id} />
          ))
        }
        <Button raised color="primary" onClick={this.addBooking}>
          Add
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bookings: state.bookings,
});

export const Booking = connect(mapStateToProps)(BookingComponent);
