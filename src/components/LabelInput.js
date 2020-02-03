import React from 'react';
import styled from 'styled-components';

export default function({name, label, value, ...props}) {
  return (
    <Wrapper>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type="text" value={value} {...props}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
