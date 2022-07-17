import React, { useState } from "react";
import "./Social.css";

const Social = () => {
  const [social, setSocial] = useState({
    facebook: "",
    twitter: "",
    instagram: "",
  });

  const handleChange = (event) => {
    setSocial({
      ...social,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="social--container">
      <div className="form__group field socialCenter">
        <input
          name="facebook"
          onChange={handleChange}
          value={social.facebook}
          placeholder="fb.com/abcd"
          className="form__field"
        />

        <input
          name="twitter"
          onChange={handleChange}
          value={social.twitter}
          className="form__field"
          placeholder="twitter.com/abcd"
        />

        <input
          name="instagram"
          onChange={handleChange}
          value={social.instagram}
          placeholder="instagram.com/abcd"
          className="form__field"
        />
      </div>
    </div>
  );
};

export default Social;
