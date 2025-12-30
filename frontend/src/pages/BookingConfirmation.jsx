import React from "react";
import { Link, useLocation } from "react-router-dom";

const BookingConfirmation = () => {
    const location = useLocation();
    const { booking } = location.state || {};

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 text-center border border-gray-100">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                        className="w-10 h-10 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
                <p className="text-gray-600 mb-8">
                    Thank you for your booking. We have sent a confirmation email to your registered address.
                </p>

                {booking && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-8 text-left text-sm">
                        <p className="flex justify-between mb-2">
                            <span className="text-gray-500">Booking Reference:</span>
                            <span className="font-mono font-medium text-gray-900">#{booking._id.slice(-6).toUpperCase()}</span>
                        </p>
                        <p className="flex justify-between mb-2">
                            <span className="text-gray-500">Room:</span>
                            <span className="font-medium text-gray-900">{booking.room?.name || 'Luxury Room'}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-gray-500">Total Amount:</span>
                            <span className="font-bold text-green-600">${booking.totalAmount}</span>
                        </p>
                    </div>
                )}

                <div className="space-y-3">
                    <Link
                        to="/payments/my"
                        className="block w-full bg-[#D4AF37] text-white font-semibold py-3 px-4 rounded-lg hover:bg-[#c09e32] transition duration-200 shadow-md hover:shadow-lg"
                    >
                        View My Bookings
                    </Link>
                    <Link
                        to="/"
                        className="block w-full bg-white text-gray-600 font-semibold py-3 px-4 rounded-lg border border-gray-300 hover:bg-gray-50 transition duration-200"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookingConfirmation;
