import axios from "axios";
import { UserType } from "../type/UserType";

/**
 * @param setUser - sets user state to received data
 * @param setError - sets state of error
 * @returns void
 */
export const getDefaultData = async (
  setUser: (param: UserType) => void,
  setError: (param: boolean) => void
) => {
  try {
    const res = await axios.get("https://api.github.com/users/octocat");
    setUser(res.data);
    setError(false);
  } catch (err) {
    setError(true);
  }
};

/**
 * @param inputValue - The value of the search input
 * @param setUser - sets user state to received data
 * @param setError - sets state of error
 * @returns void
 */
export const getInputBasedData = async (
  inputValue: string,
  setUser: (param: UserType) => void,
  setError: (param: boolean) => void
): Promise<void> => {
  try {
    const res = await axios.get(`https://api.github.com/users/${inputValue}`);
    setUser(res.data);
    setError(false);
  } catch (err) {
    setError(true);
  }
};
