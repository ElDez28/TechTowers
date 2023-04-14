import axios from "axios";
export const sendContactForm = async (data) => {
  return axios("http://localhost:5000/api/v1/sendEmail", {
    method: "post",
    data,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};
