import React from 'react';
import styled from 'styled-components';

export default function({name, label, value, ...props}) {
  return (
    <Wrapper>
      <input id={name} name={name} value={value} {...props}/>
      <label htmlFor={name}>{label}</label>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin: 3px 0;

  label {
    margin-left: 10px;
  }
`;
