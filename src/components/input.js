import React from 'react';
import {TextInput} from 'react-native';
import {styled} from '@fabulas/astly';

export function SearchInput(props) {
  return <StyledInput {...props} />;
}

const StyledInput = styled(TextInput)`
  border: 1px solid rgba(128, 128, 128, 0.5);
  padding: 8px;
  margin: 5px;
  font-size: 16px;
`;
