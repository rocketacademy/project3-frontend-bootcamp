const Button = ({ label, handleClick, disabled, add }) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`${add} disabled:bg-text m-1 h-12 w-24 rounded-lg border-none bg-primary text-lg hover:translate-y-[-2px] hover:bg-secondary disabled:opacity-30`}
    >
      {label}
    </button>
  );
};

export default Button;
