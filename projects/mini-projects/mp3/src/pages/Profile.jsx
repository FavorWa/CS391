import { useState, useEffect } from 'react';
import Link from '../components/Link';
import List from '../components/List';
import styled from "styled-components";

const ProfileContainer = styled.div`
  width: 50%;
  margin: 10px auto;
`;

const ProfileAvatar = styled.img`
  width: 150px;
`;

const ProfileList = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
`;

const ProfileItem = styled.span`
  font-weight: 600;
`;


export default function Profile({ userName }) {


  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({});

  const items = [
    {
      field: 'html_url: ',
      value: <Link url={profile.html_url} title={profile.html_url} />,
    },
    {
      field: 'repos_url: ',
      value: <Link url={profile.repos_url} title={profile.repos_url} />,
    },
    { field: 'name ', value: profile.name },
    { field: 'company ', value: profile.company },
    { field: 'location ', value: profile.location },
    { field: 'email ', value: profile.email },
    { field: 'bio ', value: profile.bio },
  ];

  useEffect(() => {
    async function fetchData() {
      const profile = await fetch(`https://api.github.com/users/${userName}`);
      const result = await profile.json();

      if (result) {
        setProfile(result);
        setLoading(false);
      }
    }

    fetchData();
  }, [userName]);

  return (
    <ProfileContainer>
      <h2>About me</h2>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div>
          <ProfileAvatar src={profile.avatar_url} alt={profile.name} />
          <ProfileList>
            {items.map((item, index) => (
              <ListItem key={index}>
                <span>{item.field}</span>
                <ProfileItem>{item.value}</ProfileItem>
              </ListItem>
            ))}
          </ProfileList>
        </div>
      )}
    </ProfileContainer>
  );

}