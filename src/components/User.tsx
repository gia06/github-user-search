import styled from "styled-components";
import { UserProps } from "../type/UserType";

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
              <Name>{user?.name}</Name>

              <UserName>@{user?.login}</UserName>
            </div>

            <CreationDate>
              {user ? `Joined ${formatDate(user.created_at)}` : null}
            </CreationDate>
          </NameContainer>
        </BasicInfo>
        <Bio>{user?.bio}</Bio>
        <UserStats>
          <SingleStat>
            <p>Repos</p>
            <p>someradnom number</p>
          </SingleStat>

          <SingleStat>
            <p>Followers</p>
            <p>someradnom number</p>
          </SingleStat>

          <SingleStat>
            <p>Following</p>
            <p>someradnom number</p>
          </SingleStat>
        </UserStats>

        {/* {user?.bio} */}
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

  @media (max-width: 375px) {
    margin-top: 16px;
    padding: 33px 24px 49px 24px;
  }
`;

const Avatar = styled.img`
  width: 117px;
  height 117px;
  border-radius: 50%;
  margin-right: 41px;

  @media (max-width: 645px) {
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

  @media (max-width: 645px) {
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

const Bio = styled.p`
  color: ${({ theme }) => theme.bioColor};
  margin-top: 20px;
  text-align: justify;

  @media (max-width: 770px) {
    margin-top: 24px;
  }

  @media (max-width: 375px) {
    margin-top: 33px;
    font-size: 13px;
  }
`;

const UserStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.bgColor};
`;

const SingleStat = styled.div``;
