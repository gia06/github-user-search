import { useEffect } from "react";
import styled from "styled-components";
import { getData } from "../api/api";
import { UserProps } from "../type/UserType";

function User({ inputValue }: UserProps) {
  useEffect(() => {
    // console.log(getData(inputValue));
  }, []);

  return <UserContainer></UserContainer>;
}

export default User;

const UserContainer = styled.div`
  width: 100%;
  // TODO: need to change this later
  height: 300px;
  max-height: 517px;
  margin-top: 24px;
  background: ${({ theme }) => theme.containerColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 15px;

  @media (max-width: 375px) {
    margin-top: 16px;
  }
`;
