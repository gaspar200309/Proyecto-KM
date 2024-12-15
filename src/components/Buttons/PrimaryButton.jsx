import "./primaryButton.css";

export const PrimaryButton = ({
  value = "",
  className = "",
  onClick = null,
  label = "",
  id = "",
}) => {
  return (
    <div className="config-btn-primary">
      {label && <label htmlFor={id}>{label}</label>}
      <button
        className={`btn-primary ${className}`}
        onClick={onClick && onClick}
      >
        {value}
      </button>
    </div>
  );
};
