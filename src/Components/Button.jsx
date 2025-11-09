// src/components/Button.jsx
const Button = ({ text, variant = "primary" }) => {
  const baseStyle =
    "px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300";

  const styles = {
    primary:
      `${baseStyle} bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300`,
    secondary:
      `${baseStyle} border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-300`,
  };

  return <button className={styles[variant]}>{text}</button>;
};

export default Button;
