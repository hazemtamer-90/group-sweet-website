"use client";

import { useState } from "react";

import CheckoutHeader from "./CheckoutHeader";
import CustomerForm from "./CustomerForm";
import ShippingForm from "./ShippingForm";
import PaymentMethod from "./PaymentMethod";
import OrderNotes from "./OrderNotes";
import CheckoutSummary from "./CheckoutSummary";

export default function CheckoutPage() {
  const [customer, setCustomer] = useState({
    fullName: "",
    phone: "",
    alternatePhone: "",
    email: "",
  });

  const [shipping, setShipping] = useState({
    governorate: "",
    city: "",
    district: "",
    street: "",
    building: "",
    floor: "",
    apartment: "",
    landmark: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cash-on-delivery");

  const [notes, setNotes] = useState("");

  return (
    <section className="min-h-screen bg-[#FCFAF6] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <CheckoutHeader />

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <CustomerForm value={customer} onChange={setCustomer} />

            <ShippingForm value={shipping} onChange={setShipping} />

            <PaymentMethod value={paymentMethod} onChange={setPaymentMethod} />

            <OrderNotes value={notes} onChange={setNotes} />
          </div>

          <CheckoutSummary
            customer={customer}
            shipping={shipping}
            paymentMethod={paymentMethod}
            notes={notes}
          />
        </div>
      </div>
    </section>
  );
}
