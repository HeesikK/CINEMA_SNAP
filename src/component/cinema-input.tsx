import { FC } from "react";
import { InputProps } from "../type/component-type";
import styled, { css } from "styled-components";

const CinemaInput: FC<InputProps> = ({ variant, size, shape, ...InputProps }) => {
  return <Input variant={variant} size={size} shape={shape} {...InputProps}></Input>;
};

export default CinemaInput;

const variantCSS = {
  white: css`
    background-color: ${({ theme }) => theme.COLORS.primary["purple"]};
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.white};
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
    padding: 12px 60px 6px 12px;
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
  color: ${({ theme }) => theme.COLORS.white};
  font-size: ${({ theme }) => theme.FONT_SIZE.large};
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  outline: none;
`;
