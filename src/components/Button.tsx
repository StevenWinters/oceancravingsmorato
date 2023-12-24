interface Props {
  children: string;
  className?: string;
}

const Button = ({ children, className }: Props) => {
  return <button className={`btn ${className}`}>{children}</button>;
};

export default Button;
