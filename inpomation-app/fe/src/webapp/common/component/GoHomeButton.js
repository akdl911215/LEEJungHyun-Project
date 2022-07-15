import React from "react";
import { Button } from "semantic-ui-react";
import { useNavigate } from "react-router";

const GoHomeButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <Button onClick={() => navigate("/")} color="black">
        홈으로
      </Button>
    </>
  );
};
export default GoHomeButton;
