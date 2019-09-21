import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../Input';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { PasswordInputContainer, ToggleHiddenPasswordButton } from './PasswordInput.styles';

const PasswordInput = props => {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  const buttonIcon = hiddenPassword ? <FaEyeSlash /> : <FaEye />;
  const inputType = hiddenPassword ? 'password' : 'text';

  const toggleHiddenPassword = () => setHiddenPassword(!hiddenPassword);

  return (
    <PasswordInputContainer>
      <Input type={inputType} autocomplete="off" noborder {...props} />
      <ToggleHiddenPasswordButton onClick={toggleHiddenPassword} type="button">{ buttonIcon }</ToggleHiddenPasswordButton>
    </PasswordInputContainer>
  );
}

PasswordInput.propTypes = {
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default PasswordInput;
