import React, { useEffect, useState } from "react";
import "../css/register.css";
import loader from "../images/loader.gif";
import { useNavigate } from "react-router-dom";

 function Register() {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleSubmit = () => {
    const isValidMobile = /^\d{10}$/.test(mobile);

    if (!isValidMobile) {
      alert("Invalid form. Please enter a valid 10-digit mobile number.");
      return;
    }

    navigate("/createcard");
  };

  return (
    <div className="box">
      {loading ? (
        <div className="loader">
          <img
            src={loader}
            alt="Loading"
            style={{
              height: "100px",
              width: "100px",
              position: "absolute",
              top: "30%",
              right: "47%",
            }}
          />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Registration Details</h2>
          <label htmlFor="name">Name:</label>
          <input
            className="inputstyle"
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="city">City:</label>
          <input
            className="inputstyle"
            type="text"
            id="city"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <label htmlFor="email">Email ID:</label>
          <input
            className="inputstyle"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="mobile">Mobile:</label>
          <input
            className="inputstyle"
            type="tel"
            id="mobile"
            placeholder="Phone no"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
          <div className="terms-and-conditions">
            <input
              className="inputstyle"
              type="checkbox"
              id="agreeTerms"
              checked={agreeTerms}
              required
              onChange={() => setAgreeTerms(!agreeTerms)}
            />
            <label htmlFor="agreeTerms">I agree to the Terms and Conditions</label>
          </div>
          <input type="submit" />
        </form>
      )}
    </div>
  );
}
export default Register;