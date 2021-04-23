import * as yup from "yup";

export default yup.object().shape({
    name: yup.string().required("name is required").min(2, "name must be at least 2 characters"),
    size: yup.string().oneOf(["Small", "Medium", "Large"]),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    sausage: yup.boolean(),
    pepper: yup.boolean(),
    specialRequest: yup.string(),
})