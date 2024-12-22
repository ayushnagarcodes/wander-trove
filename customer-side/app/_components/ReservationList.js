"use client";

import ReservationCard from "@/app/_components/ReservationCard";
import { deleteReservation } from "../_lib/actions";
import { useOptimistic } from "react";

function ReservationList({ bookings }) {
  const [optimisticBookings, deleteOptimisticBooking] = useOptimistic(
    bookings,
    (currentState, bookingIdToDelete) => {
      return currentState.filter((booking) => booking.id !== bookingIdToDelete);
    }
  );

  async function handleDeleteBooking(bookingId) {
    deleteOptimisticBooking(bookingId);
    await deleteReservation(bookingId);
  }

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          booking={booking}
          onDeleteBooking={handleDeleteBooking}
          key={booking.id}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
