const InputText = ({ placeholder, handleChange }) => {
  return (
    <input
      className="h-12 rounded-lg border-[1px] bg-transparent p-2 text-text hover:translate-y-[-2px] hover:border-[2px]"
      type="text"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default InputText;
