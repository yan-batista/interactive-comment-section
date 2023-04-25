import "./styles.scss";

interface Props {
  text: string;
  type: string;
}

const Button: React.FC<Props> = ({ text, type }: Props) => {
  return <button className={`button ${type}`}> {text.toUpperCase()} </button>;
};

export default Button;
