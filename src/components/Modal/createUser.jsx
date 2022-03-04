import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import { PersonAddOutline } from '@styled-icons/evaicons-outline/PersonAddOutline';
import { PersonDeleteOutline } from '@styled-icons/evaicons-outline/PersonDeleteOutline';
import { PersonOutline } from '@styled-icons/evaicons-outline/PersonOutline';

const colors = {
  black: '#000000',
  purple: '#5800FF',
  pink: '#E900FF',
  yellow: '#FFC600',
};

const PersonAdd = styled(PersonAddOutline)`
  color: ${colors.yellow};
`;

const PersonDelete = styled(PersonDeleteOutline)`
  color: ${colors.pink};
  opacity: .4;
`;

const iconStyles = {
  size: 48,
};

const CreateSection = styled.section`
  width: 25% ;
  height: 75% ;
  background: black ;
  display: flex ;
  justify-content: center;
  z-index: 100 ;
  position: absolute;
  border-radius: 7px ;
  pointer-events: auto;
`;
const CreateContainer = styled.section`
  background-color: #5800ff;
  width: 95%;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;
const Content = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;

  h1 {
    margin:0;
  }

  #name {
    font-style: oblique;
    text-shadow: 3px 3px 10px ${colors.pink};
    text-weight: bold;
  }

  #save,#cancel {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;

const CreateUserInfo = styled.section`
  h3 {
    letter-spacing: .2em;
    font-size: 1.5em;
  }

  input {
    width: 100%;
    height:40px;
    border-radius: 3px;
    font-size: 1.5em;
    font-family: Barlow Condensed;  
    padding-left: 10px;
  }
`;

const CreateHead = styled.section`
span:first-child {
  display: flex;
  align-items: center;
}
`;

const CreateTail = styled.section`
  #person-delete-icon {
    background: linear-gradient(180deg, pink, purple);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const sectionStyles = {
  fontSize: '2.5em',
  display: 'flex',
  justifyContent: 'space-between',
};

function CreateUser({ u, setCreating, creating, createUser }) {


  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('']);
  const [title, setTitle] = useState('');
  const [years, setYears] = useState(0);
  const [id, setId] = useState('');

  useEffect(() => {
    console.log(`${fName} ${lName} ${title} ${years} ${id}`);
  }, [fName, lName, title, years]);

  useEffect(() => {
    // Set inEditing Mode to true
    setEditing(true);

    const html = document.getElementsByTagName('html');

    // Make html dim fuction
    html[0].style.background = 'rgb(0, 0, 0, 0.9)';
    html[0].style.pointerEvents = 'none';
    html[0].zIndex = 0;

    // on exit, SetInCreateMode to false
    return function cleanup() {
      setEditing(false);
      html[0].style.background = '';
      html[0].style.pointerEvents = '';
      html[0].zIndex = 0;
    };
  }, [editing]);

  function mEnter(e) {
    console.log(e);
    e.target.style.opacity = '1';
  }
  function mLeave(e) {
    e.target.style.opacity = '';
  }

  return (
    <CreateSection className="edit-section">
      <CreateContainer className="edit-container">
        <Content className="edit-content">

          <CreateHead style={sectionStyles}>
            <span>
              <PersonOutline size={iconStyles.size} /> Create
            </span>
            <span id="name">{u.name}</span>
          </CreateHead>

          <CreateUserInfo className="edit-user-info">
            <h3>Firstname</h3>
            <input
              type="text"
              defaultValue={fName}
              onChange={(e) => setFName(e.target.value)}
            />

            <h3>Lastname</h3>
            <input
              type="text"
              onChange={(e) => setLName(e.target.value)}
              defaultValue={lName}
            />

            <h3>Position title</h3>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              defaultValue={title}
            />

            <h3>Years </h3>
            <input
              type="number"
              onChange={(e) => setYears(e.target.value)}
              defaultValue={years}
            />
          </CreateUserInfo>

          <CreateTail style={sectionStyles}>
            <span
              id="save"
              title="save"
              onClick={() => {
                let payload = {
                  name: `${fName} ${lName}`,
                  title,
                  years,
                  id: uuidv4()
                };
                createUser(id, payload);
                setCreating(false);
              }}
            >
              {' '}
              <PersonAdd size={iconStyles.size} />
            </span>
            <span id="cancel" title="cancel" onClick={() => setEditing(false)}>
              <PersonDelete
                size={iconStyles.size}
                id="person-delete-icon"
                onMouseEnter={mEnter}
                onMouseLeave={mLeave}
              />
            </span>
          </CreateTail>
          
        </Content>
      </CreateContainer>
    </CreateSection>
  );
}

export default CreateUser;
