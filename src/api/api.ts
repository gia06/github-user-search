import axios from "axios";

export const getData = async (arg: string) => {
  const res = await axios.get("https://api.github.com/users/gia06");
  console.log(res.data);
};
