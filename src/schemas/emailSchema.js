import * as yup from "yup";

const emailSchema = yup.object().shape({
  email: yup
    .string()
    .required("This field is required!")
    .email("Please provide valid email address!"),
  name: yup.string().required("This field is required!"),
  subject: yup.string().required("This field is required!"),
  text: yup.string().required("This field is required!"),
});

export default emailSchema;
