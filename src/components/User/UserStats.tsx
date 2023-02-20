import styled from "styled-components";
import { UserStatsProps } from "../../type/UserType";

function UserStats({ user }: UserStatsProps) {
  return (
    <Stats>
      <SingleStat>
        <Category>Repos</Category>
        <Content>{user?.public_repos}</Content>
      </SingleStat>

      <SingleStat>
        <Category>Followers</Category>
        <Content>{user?.followers}</Content>
      </SingleStat>

      <SingleStat>
        <Category>Following</Category>
        <Content>{user?.following}</Content>
      </SingleStat>
    </Stats>
  );
}

export default UserStats;

const Stats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 85px;
  margin-top: 32px;
  background: ${({ theme }) => theme.bgColor};
  border-radius: 10px;

  @media (max-width: 375px) {
    // margin-top: 25px;
  }
`;

const SingleStat = styled.div`
  margin: 15px auto 15px auto;

  @media (max-width: 375px) {
    margin: 18px auto 18px auto;

`;

const Category = styled.p`
  color: ${({ theme }) => theme.bioColor};
  font-weight: ${({ theme }) => theme.regularWeight};
  font-size: 11px;
  line-height: 16px;
  text-align: center;
`;

const Content = styled.p`
  color: ${({ theme }) => theme.numberColor};
  font-weight: ${({ theme }) => theme.boldWeight};
  font-size: 22px;
  line-height: 33px;

  @media (max-width: 375px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
