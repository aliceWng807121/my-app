import axios from "axios";

const fetchProducts = () => {
  return axios.get("/sign/v1/ce/data&5587538");
};

export default { fetchProducts };