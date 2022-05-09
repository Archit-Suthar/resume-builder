import { TextField } from "@material-ui/core";
import React from "react";

const Display = ({ result, setResult }) => {
  const styles = {
    textAlign: "right",
  };
  return (
    <div>
      <TextField
        id="filled-basic"
        variant="filled"
        style={styles}
        value={result}
        onChange={(e) => setResult(e.target.value)}
      />
    </div>
  );
};

export default Display;
