import { FC } from "react";
import { InputProps } from "../type/component-type";
import styled, { css } from "styled-components";

const CinemaInput: FC<InputProps> = ({ variant, size, shape, ...InputProps }) => {
  return <Input variant={variant} size={size} shape={shape} {...InputProps}></Input>;
};

export default CinemaInput;

const variantCSS = {
  white: css`
    border-bottom: 3px solid ${({ theme }) => theme.COLORS.black};
  `,
};

const sizeCSS = {
  small: css`
    width: 120px;
    height: 20px;
    padding: 10px;
  `,
  medium: css`
    width: 240px;
    height: 40px;
    padding: 12px;
  `,
  large: css`
    width: 360px;
    height: 60px;
    padding: 14px;
  `,
};

const shapeCSS = {
  default: css`
    border-radius: 0;
  `,
  shape: css`
    border-radius: 8px;
  `,
  round: css`
    border-radius: 32px;
  `,
};

const Input = styled.input<InputProps>`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
`;
