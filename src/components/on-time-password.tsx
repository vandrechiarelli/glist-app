"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";

const OnTimePassword = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const onComplete = () => {
    setIsValid(value == "123456");
  };

  return (
    <InputOTP
      maxLength={6}
      value={value}
      onChange={(value) => setValue(value)}
      onComplete={onComplete}
      render={({ slots }) => (
        <>
          <InputOTPGroup>
            {slots.slice(0, 3).map((slot, index) => (
              <InputOTPSlot key={index} index={index} {...slot} />
            ))}
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            {slots.slice(3).map((slot, index) => (
              <InputOTPSlot key={index + 3} index={index + 3} {...slot} />
            ))}
          </InputOTPGroup>
          {isValid && <span>ok</span>}
        </>
      )}
    />
  );
};

export default OnTimePassword;
