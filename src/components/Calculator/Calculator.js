import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import CustomButton from "./CustomButton";
import Display from "./Display";

const Calculator = () => {
  const [result, setResult] = useState("0");

  const digitHandler = (e) => {
    if (result.charAt(0) !== "0") setResult(result.concat(e.target.value));
    else setResult(e.target.value);
  };
  const clearHandler = () => {
    setResult("");
  };
  const operationHandler = (e) => {
    if (
      result.charAt(result.length - 1) >= "0" &&
      result.charAt(result.length - 1) <= "9"
    )
      setResult(result.concat(e.target.value));
  };
  const evaluateHandler = () => {
    setResult(eval(result));
  };
  return (
    <div>
      <Display result={result} setResult={setResult} />
      <Container style={{ display: "flex" }}>
        <CustomButton value="1" onClick={digitHandler} />
        <CustomButton value="2" onClick={digitHandler} />
        <CustomButton value="3" onClick={digitHandler} />
        <CustomButton value="4" onClick={digitHandler} />
        <br />
        <CustomButton value="5" onClick={digitHandler} />
        <CustomButton value="6" onClick={digitHandler} />
        <CustomButton value="7" onClick={digitHandler} />
        <CustomButton value="8" onClick={digitHandler} />
        <br />
        <CustomButton value="9" onClick={digitHandler} />
        <CustomButton value="0" onClick={digitHandler} />
        <CustomButton value="+" onClick={operationHandler} />
        <CustomButton value="-" onClick={operationHandler} />
        <CustomButton value="clear" onClick={clearHandler} />
        <CustomButton value="=" onClick={evaluateHandler} />
      </Container>

      {/* {console.log(result)} */}
    </div>
  );
};

export default Calculator;
