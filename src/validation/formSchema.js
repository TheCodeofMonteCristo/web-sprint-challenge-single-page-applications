import * as yup from 'yup';

const fromSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is Required')
        .min(2, "name must be at least 2 characters"),
    sauce: yup
        .string()
        .oneOf(["original", "garlic", "BBQ", "alfredo"]),
    topping: yup
        .string(),
    size: yup
        .string()
        .required('Size is required'),
    special: yup
        .string(),
    pepperoni: yup
        .boolean(),
    sausage: yup
        .boolean(),
    bacon: yup
        .boolean(),
    chicken: yup
        .boolean()
})

export default fromSchema