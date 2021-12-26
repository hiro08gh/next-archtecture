type Props = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children?: React.ReactNode
  disabled?: boolean;
};

export const Button: React.VFC<Props> = ({className, onClick, disabled = false, children, ...props}) => {
  return <button className={`${className}`} onClick={onClick} disabled={disabled} {...props}>{children}</button>;
};
