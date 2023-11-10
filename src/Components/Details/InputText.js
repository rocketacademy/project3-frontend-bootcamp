const InputText = ({ placeholder }) => {
  return (
    <input
      className="text-text h-12 rounded-lg border-[1px] bg-transparent p-2 hover:translate-y-[-2px] hover:border-[2px]"
      type="text"
      placeholder={placeholder}
    />
  );
};

export default InputText;
