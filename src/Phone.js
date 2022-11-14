import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function Phone() {
  const [phone, setPhone] = useState("");

 


  return (
    <PhoneInput
    className="phone-input"
      country={"in"}
      enableSearch={true}
      value={phone}
      onChange={(phone) => setPhone(phone)}
    />
  );
}
