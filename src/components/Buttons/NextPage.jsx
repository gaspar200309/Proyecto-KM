import "./primaryButton.css";
import "./nextPage.css";

//components
import { PrimaryButton } from "./PrimaryButton";
import { NavLink } from "react-router-dom";

export const NextPage = ({
  value = "",
  className = "",
  onClick = null,
  label = "",
  id,
  to = "",
}) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <PrimaryButton
        value={value}
        className={`btn-next-page ${className}`}
        onClick={onClick}
        id={id}
        label={label}
      />
    </NavLink>
  );
};
