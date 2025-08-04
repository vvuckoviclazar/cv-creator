function Btn({ children, onClick, isDisabled, variation }) {
  const baseClass = "cv-buttons";
  let modifierClass = "";

  if (variation === "green") {
    modifierClass = "green";
  } else if (variation === "red") {
    modifierClass = "red";
  } else if (variation === "add") {
    modifierClass = "add";
  }

  const finalClass = `${baseClass} ${modifierClass}`;

  return (
    <button className={finalClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Btn;
