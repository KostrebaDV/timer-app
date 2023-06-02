export const enum ButtonSize {
  big,
  small
}

export type ButtonProps = {
  onClick: () => void;
  size: ButtonSize
}