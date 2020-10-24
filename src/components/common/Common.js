import React from "react";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const WorldAnimation = () => {
  const history = useHistory();
  return (
    <Icon
      //onClick={() => (window.location = "/home")}
      onClick={() => history.push("/home")}
      color="teal"
      loading
      size="big"
      name="circle world"
    />
  );
};
