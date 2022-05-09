import { TextField } from "@material-ui/core";
import React from "react";

const InputControl = ({ label, data, setData, datakey }) => {
  const onInputChange = (e) => {
    setData({ ...data, [datakey]: e.target.value });
  };
  return (
    <>
      <TextField
        label={label}
        variant="filled"
        color="primary"
        value={data.datakey}
        onChange={onInputChange}
        fullWidth
        focused
      />
    </>
  );
};

export default InputControl;
