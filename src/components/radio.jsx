import React, { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";

export default function BasicRating() {
  const [reviews, setReviews] = useState([]);
  const [value, setValue] = React.useState(3);

  useEffect(() => {
    console.log('useEffect called');
  }, []);

  useEffect(() => {
    fetch("https://cors-anywhere.herokuapp.com/https://celadon-sable-4626ce.netlify.app/api/dbSchema")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((json) => setReviews(json))
      .then((data) => console.log(data))
      .catch((error) => console.error("Failed to fetch data:", error));
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <div className="text-center justify-center p-4">
      <Rating
        name="simple-controlled"
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
    <div className="text-white font-bold">
          <div className="">
            {reviews.length > 0 ?  console.log(reviews) : (
              <div className="reviewCard">
                <br />
                <h3>No reviews yet.</h3>
              </div>
            )}
          </div>
        </div>
    </div>
    
  );
}
