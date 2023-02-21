import styled from "styled-components";
import { UserProps, BioProps } from "../../type/UserType";
import UserContact from "./UserContact";
import UserStats from "./UserStats";

function User({ user }: UserProps) {
  const formatDate = (isoString: string): string => {
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
        <BasicInfo>
          <Avatar id="right" src={user?.avatar_url} />
          <NameContainer>
            <div>
              <Name>{user?.name ? user?.name : user?.login}</Name>

              <UserName>@{user?.login}</UserName>
            </div>

            <CreationDate>
              {user ? `Joined ${formatDate(user.created_at)}` : null}
            </CreationDate>
          </NameContainer>
        </BasicInfo>

        <Bio bio={user?.bio}>
          {user?.bio ? user?.bio : "This profile has no bio"}
        </Bio>
        <UserStats user={user} />
        <UserContact user={user} />
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
  max-height: 517px;
  margin-top: 24px;
  padding: 44px 48px 48px 48px;
  background: ${({ theme }) => theme.containerColor};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 15px;

  #right {
    display: none;
  }

  @media (max-width: 770px) {
    justify-content: center;

    #left {
      display: none;
    }

    #right {
      display: block;
      margin-right: 41px;

      @media (max-width: 645px) {
        margin-right: 20px;
      }
    }
  }

  @media (max-width: 400px) {
    margin-top: 16px;
    padding: 33px 24px 49px 24px;
  }
`;

const Avatar = styled.img`
  width: 117px;
  height 117px;
  border-radius: 50%;
  margin-right: 41px;

  @media (max-width: 770px) {
    width: 70px;
    height: 70px;
  }
`;

const UserInfo = styled.div`
  width: 100%;
  max-width: 480px;

  @media (max-width: 870px) {
    max-width: 100%;
  }
`;

const BasicInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Name = styled.h1`
  color: ${({ theme }) => theme.titleColor};

  @media (max-width: 770px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const UserName = styled.h3`
  color: ${({ theme }) => theme.loginColor};
`;

const CreationDate = styled.p`
  color: ${({ theme }) => theme.bioColor};
  line-height: 22px;

  @media (max-width: 645px) {
    font-size: 13px;
    line-height: 19px;
  }
`;

const Bio = styled.p<BioProps>`
  color: ${({ theme }) => theme.bioColor};
  opacity: ${({ bio }) => (bio ? "0" : "0.65")};
  margin-top: 20px;
  text-align: left;

  @media (max-width: 770px) {
    margin-top: 24px;
  }

  @media (max-width: 375px) {
    margin-top: 33px;
    font-size: 13px;
  }
`;
