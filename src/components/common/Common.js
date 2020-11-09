import React from "react";
import { Icon } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export const WorldAnimation = () => {
  const history = useHistory();
  return (
    <Icon
      onClick={() => history.push("/sse-test-app/home")}
      title="Back to home page."
      color="teal"
      loading
      size="big"
      name="circle world"
    />
  );
};
