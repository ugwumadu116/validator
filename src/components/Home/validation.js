import * as Yup from "yup";


export const validate = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Your name is too short")
    .matches(
      /^[a-zA-Z]+(?:\s[a-zA-Z]+)+$/,
      "First name and last name is required"
    )
    .required("Please enter your full name"),
  email: Yup.string()
    .email("The email is incorrect")
    .required("Please enter your email"),
  phoneNumber: Yup.string()
    .matches(
      /^([0]{1})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/,
      "Nigeria phone numbers only (070)"
    )
    .required("Please enter your phone number"),
  password: Yup.string()
    .min(2, "Your password is too short")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "password must contain at least caps, num, special"
    )
    .required("Please enter your password"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Please enter your confirm password"),
  pin: Yup.string()
    .matches(/^[0-9][0-9][0-9][0-9]$/, "pin must be numbers")
    .required("Please enter your pin")
});
