import styled from "styled-components";
import { UserProps } from "../type/UserType";

function User({ inputValue, user, error }: UserProps) {
  const formatDate = (isoString: string) => {
    const date = new Date(isoString);

    const day = date.getDate();
    const month = date.toLocaleDateString("default", { month: "short" });
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  };

  return (
    <UserContainer>
      <Avatar id="left" src={user?.avatar_url} />
      <UserInfo>
        <UserBio>
          <Avatar id="right" src={user?.avatar_url} />

          <Name>{user?.name}</Name>

          <Login>@{user?.login}</Login>
        </UserBio>
      </UserInfo>
    </UserContainer>
  );
}

export default User;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  // TODO: need to change this later
  height: 300px;
  max-height: 517px;
  margin-top: 24px;
  padding: 44px 48px 48px 48px;
  background: ${({ theme }) => theme.containerColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 15px;

  #right {
    display: none;
  }

  @media (max-width: 870px) {
    justify-content: center;

    #left {
      display: none;
    }

    #right {
      display: block;
    }
  }

  @media (max-width: 375px) {
    margin-top: 16px;
  }
`;

const Avatar = styled.img`
  width: 117px;
  height 117px;
  border-radius: 50%;

`;

const UserInfo = styled.div`
  width: 100%;
  max-width: 480px;

  @media (max-width: 870px) {
    max-width: 100%;
  }
`;

const UserBio = styled.div``;

const Name = styled.h1`
  color: ${({ theme }) => theme.titleColor};
`;

const Login = styled.h3`
  color: ${({ theme }) => theme.loginColor};
`;
