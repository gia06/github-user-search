import { UserType } from "./UserType";

export interface SearchProps {
  inputValue: string;
  setInputValue: (input: string) => void;
  // user: UserType | null;
  setUser: (user: UserType) => void;
  error: boolean;
  setError: (err: boolean) => void;
}
