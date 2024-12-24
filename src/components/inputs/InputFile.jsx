import { useRef } from "react";
import { PrimaryButton } from "../Buttons/PrimaryButton";

//css
import "./inputFile.css";


export const InputFile = ({
  placeholder = "",
  onClick = null,
  onChange = null,
  accept = "",
}) => {
  const fileInput = useRef(null);

  return (
    <>
      <PrimaryButton value={placeholder} onClick={() => onClick(fileInput)} />
      <input
        type="file"
        id="chooserFile"
        ref={fileInput}
        onChange={onChange}
        accept={accept}
        style={{ display: "none" }}
      />
    </>
  );
};
