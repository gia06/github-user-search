import styled from "styled-components";
import CompanyIcon from "../../assets/svg/CompanyIcon";
import LocationIcon from "../../assets/svg/LocationIcon";
import TwitterIcon from "../../assets/svg/TwitterIcon";
import WebsiteIcon from "../../assets/svg/WebsiteIcon";
import { UserProps, ContactProps } from "../../type/UserType";

function UserContact({ user }: UserProps) {
  return (
    <ContactsContainer>
      <div>
        <Contact available={user?.location ? true : false}>
          <LocationIcon />
          <ContactText>
            {user?.location ? user?.location : "Not Available"}
          </ContactText>
        </Contact>

        <Contact available={user?.blog ? true : false}>
          <WebsiteIcon />
          <ContactText>
            {user?.blog ? (
              <a href={user.blog} target="_blank">
                {user.blog}
              </a>
            ) : (
              "Not Available"
            )}
          </ContactText>
        </Contact>
      </div>

      <div>
        <Contact available={user?.twitter_username ? true : false}>
          <TwitterIcon />
          <ContactText>
            {user?.twitter_username ? (
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                target="_blank"
              >
                {user?.twitter_username}
              </a>
            ) : (
              "Not Available"
            )}
          </ContactText>
        </Contact>

        <Contact available={user?.company ? true : false}>
          <CompanyIcon />
          <ContactText>
            {user?.company ? (
              <a
                href={`https://github.com/${user.company.slice(1)}`}
                target="_blank"
              >
                {user?.company}
              </a>
            ) : (
              "Not Available"
            )}
          </ContactText>
        </Contact>
      </div>
    </ContactsContainer>
  );
}

export default UserContact;

const ContactsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 17px;

  @media (max-width: 560px) {
    margin-top: 24px;
  }
`;

const Contact = styled.div<ContactProps>`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 100%;
  margin-top: 20px;
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
