import React from "react";
import Rating from "@mui/material/Rating";

export default function BasicRating() {
  const [value, setValue] = React.useState(3);

  return (
    <div>
      <div className="text-center justify-center p-4">
        <Rating
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            fontSize: {
              xs: "2rem", // On extra-small devices
              sm: "2.5rem", // On small devices
              md: "3rem", // On medium devices
              lg: "3.5rem", // On large devices
              xl: "4rem", // On extra-large devices
            },
          }}
        />
      </div>
    </div>
  );
}
