import * as yup from "yup";

const validations = yup.object().shape({
    email: yup
        .string()
        .email("Enter a valid email.")
        .required("Required."),
    password: yup
        .string()
        .min(5, "Your password must be at least 5 characters.")
        .required(),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords don't match.")
        .required(),
});

export default validations;