import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";

export type ButtonProps = {
  variant: "primary" | "secondary";
  size: "small" | "medium" | "large";
  shape: "default" | "shape" | "round";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type InputProps = {
  variant: "white";
  size: "small" | "medium" | "large";
  shape: "default" | "shape" | "round";
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size">;
