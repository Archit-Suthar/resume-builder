import React from "react";

const CustomButton = ({ value, onClick }) => {
  const styles = {
    width: "50px",
    height: "30px",
    backgroundColor: "black",
    color: "white",
    border: "none",
  };

  return (
    <div>
      <input type="button" style={styles} value={value} onClick={onClick} />
    </div>
  );
};

export default CustomButton;
