export interface CustomerData {
  fullName: string;
  phone: string;
  alternatePhone: string;
  email: string;
}

export interface ShippingData {
  governorate: string;
  city: string;
  district: string;
  street: string;
  building: string;
  floor: string;
  apartment: string;
  landmark: string;
}

export interface CheckoutErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  governorate?: string;
  city?: string;
  district?: string;
  street?: string;
}

export function validateCheckout(
  customer: CustomerData,
  shipping: ShippingData,
) {
  const errors: CheckoutErrors = {};
  if (!customer.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  if (!customer.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^01[0125][0-9]{8}$/.test(customer.phone)) {
    errors.phone = "Invalid Egyptian phone number";
  }

  if (
    customer.email.trim() &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!shipping.governorate.trim()) {
    errors.governorate = "Governorate is required";
  }

  if (!shipping.city.trim()) {
    errors.city = "City is required";
  }

  if (!shipping.district.trim()) {
    errors.district = "District is required";
  }

  if (!shipping.street.trim()) {
    errors.street = "Street is required";
  }
  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
