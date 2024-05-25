import { FC } from "react";
import { ButtonProps } from "../type/component-type";
import styled, { css } from "styled-components";
import { flexCenter } from "../style/common.style";

const CinemaButton: FC<ButtonProps> = ({ children, variant, size, shape, ...rest }) => {
  return (
    <Button variant={variant} size={size} shape={shape} {...rest}>
      {children}
    </Button>
  );
};

export default CinemaButton;

const variantCSS = {
  primary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["navy"]};
    color: ${({ theme }) => theme.COLORS.white};
  `,

  secondary: css`
    background-color: ${({ theme }) => theme.COLORS.primary["purple"]};
    color: ${({ theme }) => theme.COLORS.white};
  `,
};

const sizeCSS = {
  small: css`
    width: 150px;
    height: 50px;
    font-size: ${({ theme }) => theme.FONT_SIZE.small};
  `,
  medium: css`
    width: 180px;
    height: 60px;
    font-size: ${({ theme }) => theme.FONT_SIZE.medium};
  `,
  large: css`
    width: 210px;
    height: 70px;
    font-size: ${({ theme }) => theme.FONT_SIZE.large};
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
    border-radius: 50px;
  `,
};

const Button = styled.button<ButtonProps>`
  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ shape }) => shapeCSS[shape]}
  ${flexCenter}
`;