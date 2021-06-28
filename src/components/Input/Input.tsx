import React from 'react';
import styled from 'styled-components';

export type Props = {
  type?: string;
  disabled?: boolean;
  changeListener?: Function;
  error?: string;
  placeholder?: string;
  name?: string;
  id?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => {
  const {
    disabled,
    placeholder,
    error,
    changeListener = () => {},
    type,
    name,
    id,
  } = props;

  const onTextChange = (event: { target: HTMLInputElement }) => {
    const { value } = event.target;
    changeListener(value);
  };

  return (
    <Styled.InputContainer>
      <Styled.Input
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onTextChange}
        name={name}
        ref={ref}
        error={error}
        data-testid={id}
      />
      {error && <Styled.ErrorContainer>{error}</Styled.ErrorContainer>}
    </Styled.InputContainer>
  );
});

const Styled = {
  InputContainer: styled.div`
    position: relative;
  `,
  Input: styled.input<{ error?: string }>`
    width: 150px;
    height: 38px;
    font-size: 12px;
    padding: ${(props) => props.theme.spacings.s};
    color: ${(props) => props.theme.colors.black90};
    border-radius: 10px;
    border: 1px solid
      ${(props) =>
        props.error ? props.theme.colors.pinkDark : props.theme.colors.black20};
  `,
  ErrorContainer: styled.span`
    font-size: 10px;
    color: red;
    position: absolute;
    left: 10px;
    bottom: -15px;
  `,
};

export default Input;
