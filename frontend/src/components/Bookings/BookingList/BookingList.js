import React from "react";
import "./BookingList.css";

const BookingList = props => {
  return (
    <ul className="booking-list">
      {props.bookings.map(booking => {
        return (
          <li key={booking._id} className="booking-list__item">
            <div>
              {booking.event.title} -{" "}
              {new Date(booking.createdAt).toLocaleDateString()}{" "}
            </div>
            <div>
              <button
                onClick={props.onDelete.bind(this, booking._id)}
                className="btn"
              >
                Cancel
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default BookingList;
