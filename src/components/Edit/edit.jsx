import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const colors = {
  black: '#000000',
  purple: '#5800FF',
  pink: '#E900FF',
  yellow: '#FFC600',
};

const EditSection = styled.section`
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
const EditContainer = styled.section`
  background-color: #5800ff;
  width: 95%;
  display: flex;
  flex-direction: column;
  padding: 1em;
`;
const Content = styled.section`
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
  }
`;

const sectionStyles = {
  fontSize: '2.5em',
  display: 'flex',
  justifyContent: 'space-between',
};

function Edit({ u, setEditing, editing }) {
  const html = document.getElementsByTagName('html');

  // html[0].addEventListener('click', (e) => {
  //   e.target.style.background = '';
  //   e.target.style.pointerEvents = '';
  //   e.target.zIndex = 0;
  //   setEditing(false);
  // });

  useEffect(() => {
    // Set inEditMode to true
    setEditing(true);

    const html = document.getElementsByTagName('html');

    // Make html dim fuction
    function makeHtmlDim() {
      html[0].style.background = 'rgb(0, 0, 0, 0.9)';
      html[0].style.pointerEvents = 'none';
      html[0].zIndex = 20;
    }

    makeHtmlDim();

    // on exit, SetInEditMode to false
    return function cleanup() {
      setEditing(false);
      html[0].style.background = '';
      html[0].style.pointerEvents = '';
      html[0].zIndex = 0;
    };
  }, [editing]);

  return (
    <EditSection className="edit-section">
      <EditContainer className="edit-container">
        <Content className="edit-content">
          <section style={sectionStyles}>
            <span>Edit</span> <span id="name">{u.name}</span>
          </section>

          <section style={sectionStyles}>
            <span id="save">Save</span>
            <span id="cancel" onClick={() => setEditing(false)}>
              Cancel
            </span>
          </section>
        </Content>
      </EditContainer>
    </EditSection>
  );
}

export default Edit;
