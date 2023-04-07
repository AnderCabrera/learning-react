const Button = ({ text }) => {
  function knowButton(button) {
    return console.log(button);
  }

  return (
    <button
      onClick={() => {
        knowButton(text);
      }}
    >
      {text}
    </button>
  );
};

export default Button;
