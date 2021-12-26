type Props = {
  text: string;
};
export const Button: React.VFC<Props> = ({ text }) => {
  return <button>{text}</button>;
};
