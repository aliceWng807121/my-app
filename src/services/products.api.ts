import axios from "axios";

const fetchProducts = () => {
  return axios.get("/sign/v1/food/data/data&5588094");
};

export default { fetchProducts };