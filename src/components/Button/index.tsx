import "./styles.scss";

interface Props {
  text: string;
  type: string;
  handleClick?: () => void;
}

const Button: React.FC<Props> = ({ text, type, handleClick }: Props) => {
  return (
    <button className={`button ${type}`} onClick={handleClick}>
      {text.toUpperCase()}
    </button>
  );
};

export default Button;
