import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { validate } from "./validation";
import Logo from "../../assets/logo.png";
import { Container } from "./elements";

export default function Homepage(props) {
  const [dateMask, setDateMask] = useState("");
  const [cardValue, setCardValue] = useState("");
  const checker = cardValue.length < 19 || dateMask.length < 5;

  const handleDate = e => {
    const pattern = /[0-9]/g;
    const value = e.target.value;
    if (pattern.test(value)) {
      const valueArray = value.replace(/\//g, "").match(/.{1,2}/g);

      let update = "";
      if (valueArray) {
        update = valueArray.join("/");
      }
      setDateMask(update);
    } else {
      setDateMask("");
    }
  };

  const handleCardChange = e => {
    const pattern = /[0-9]/g;
    const value = e.target.value;
    if (pattern.test(value)) {
      const valueArray = value.replace(/\s/g, "").match(/.{1,4}/g);

      let update = "";
      if (valueArray) {
        update = valueArray.join(" ");
      }
      setCardValue(update);
    } else {
      setCardValue("");
    }
  };

  return (
    <Container>
      <Link to="/">
        <img src={Logo} alt="softcom" />
      </Link>

      <div className="form-container">
        <div className="topic">
          <h2>Validations Form</h2>
        </div>
        <Formik
          initialValues={{
            fullname: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            pin: ""
          }}
          validationSchema={validate}
          onSubmit={values => {
               props.history.push(`/dashboard`);
          }}
        >
          {({ errors, touched, handleSubmit }) => {
            return (
              <Form method="post" onSubmit={handleSubmit}>
                <div className="form-input">
                  <label htmlFor="fullName">Full Name</label>
                  <Field
                    type="text"
                    name="fullName"
                    placeholder="your full name"
                  />
                  {errors.fullName && touched.fullName && (
                    <p>{errors.fullName}</p>
                  )}
                </div>

                <div className="pin-wrapper">
                  <div className="form-input mr">
                    <label htmlFor="email">Email</label>
                    <Field
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="your email"
                    />
                    <ErrorMessage name="email">
                      {msg => <p>{msg}</p>}
                    </ErrorMessage>
                  </div>

                  <div className="form-input">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field
                      type="text"
                      name="phoneNumber"
                      autoComplete="phoneNumber"
                      placeholder="your phone number"
                    />
                    <ErrorMessage name="phoneNumber">
                      {msg => <p>{msg}</p>}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="pin-wrapper">
                  <div className="form-input mr">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      name="password"
                      autoComplete="password"
                      placeholder="your password"
                    />
                    <ErrorMessage name="password">
                      {msg => <p>{msg}</p>}
                    </ErrorMessage>
                  </div>

                  <div className="form-input">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      autoComplete="confirmPassword"
                      placeholder="confirm password"
                    />
                    <ErrorMessage name="confirmPassword">
                      {msg => <p>{msg}</p>}
                    </ErrorMessage>
                  </div>
                </div>

                <div className="form-input">
                  <label htmlFor="cardNumber">Card Number</label>
                  <Field
                    type="text"
                    name="cardNumber"
                    autoComplete="cardNumber"
                    placeholder="XXXX XXXX XXXX XXXX"
                    onChange={handleCardChange}
                    value={cardValue}
                    maxLength="19"
                  />
                  <ErrorMessage name="cardNumber">
                    {msg => <p>{msg}</p>}
                  </ErrorMessage>
                </div>

                <div className="pin-wrapper">
                  <div className="form-input mr">
                    <label>Expiry Date</label>
                    <Field
                      type="text"
                      name="expiryDate"
                      autoComplete="expiryDate"
                      placeholder="MM/YY"
                      maxLength="5"
                      onChange={handleDate}
                      value={dateMask}
                    />
                    <ErrorMessage name="expiryDate">
                      {msg => <p>{msg}</p>}
                    </ErrorMessage>
                  </div>
                  <div className="form-input">
                    <label htmlFor="pin">Pin</label>
                    <Field
                      type="text"
                      name="pin"
                      autoComplete="pin"
                      maxLength="4"
                      placeholder="your pin"
                    />
                    <ErrorMessage name="pin">
                      {msg => <p>{msg}</p>}
                    </ErrorMessage>
                  </div>
                </div>
                <button
                  disabled={Object.keys(errors).length || checker}
                  type="submit"
                >
                  Submit
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
}
