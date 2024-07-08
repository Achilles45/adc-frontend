import * as yup from "yup";

const validationSchema = {
    // firstName: yup
    //     .string()
    //     .min(3, "First name cannot be two characters long")
    //     .required("First name is required"),

    // lastName: yup
    //     .string()
    //     .min(3, "Last name cannot be two characters long")
    //     .required("Last name is required"),

    email: yup
        .string()
        .email("Please enter a valid email")
        .required("A valid email address is required"),

    // phoneNumber: yup
    //     .number()
    //     .required("Phone number is required"),

    password: yup 
        .string()
        .min(8, "Password must be atleast 8 characters long")
        .required("Password is required")

}

    

export default validationSchema;