import axios from "axios";

export const apiPost = async (data: any) => {
  await axios({
    method: "post",
    url: "http://api.webhookinbox.com/i/3o9oYoJ9/in/",
    data,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      if (error.response) {
        console.error(error.response.data);
        console.error(error.response.status);
      }
    });
};
