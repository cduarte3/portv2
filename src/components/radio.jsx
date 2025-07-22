import React from "react";
import Rating from "@mui/material/Rating";

export default function BasicRating({ value, setRating }) {
  return (
    <div>
      <div className="text-center justify-center p-4">
        <Rating
          value={value}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
          sx={{
            fontSize: {
              xs: "4rem", // On extra-small devices
              sm: "4.5rem", // On small devices
              md: "5rem", // On medium devices
              lg: "5.5rem", // On large devices
              xl: "7rem", // On extra-large devices
            },
          }}
        />
      </div>
    </div>
  );
}
