import styled from "styled-components";
import CompanyIcon from "../../assets/svg/CompanyIcon";
import LocationIcon from "../../assets/svg/LocationIcon";
import TwitterIcon from "../../assets/svg/TwitterIcon";
import WebsiteIcon from "../../assets/svg/WebsiteIcon";
import { UserProps, ContactProps } from "../../type/UserType";

function UserContact({ user }: UserProps) {
  return (
    <ContactsContainer>
      <Contact available={user?.location ? true : false}>
        <LocationIcon />
        <ContactText>
          {user?.location ? user?.location : "Not Available"}
        </ContactText>
      </Contact>

      <Contact available={user?.twitter_username ? true : false}>
        <TwitterIcon />
        <ContactText>
          {user?.twitter_username ? (
            <a href={`https://twitter.com/${user.twitter_username}`}>
              {user?.twitter_username}
            </a>
          ) : (
            "Not Available"
          )}
        </ContactText>
      </Contact>

      <Contact available={user?.blog ? true : false}>
        <WebsiteIcon />
        <ContactText>
          {user?.blog ? <a href={user.blog}>{user.blog}</a> : "Not Available"}
        </ContactText>
      </Contact>

      <Contact available={user?.company ? true : false}>
        <CompanyIcon />
        <ContactText>
          {user?.company ? (
            <a href={`https://github.com/${user.company.slice(1)}`}>
              {user?.company}
            </a>
          ) : (
            "Not Available"
          )}
        </ContactText>
      </Contact>
    </ContactsContainer>
  );
}

export default UserContact;

const ContactsContainer = styled.div`
  display: grid;
  gap: 19px 14px;
  grid-template-columns: repeat(2, 2fr);
  margin-top: 37px;

  @media (max-width: 560px) {
    margin-top: 24px;
    grid-template-columns: repeat(1, 2fr);
  }
`;

const Contact = styled.div<ContactProps>`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  color: ${(props) => props.theme.bioColor};
  opacity: ${({ available }) => (available ? "1" : "0.45")};
`;

const ContactText = styled.p`
  font-weight: ${({ theme }) => theme.regularWeight};
  line-height: 22px;
  margin-left: 16px;

  a {
    text-decoration: none;
  }

  a: hover {
    text-decoration: underline;
  }

  a:visited {
    color: ${({ theme }) => theme.bioColor};
  }

  @media (max-width: 645px) {
    font-size: 13px;
    line-height: 19px;
  }
`;
