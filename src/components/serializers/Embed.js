import React from "react";
import { useEffect } from "react";
import Helmet from "react-helmet";

export default ({ node }) => {
  useEffect(() => {
    if (typeof window != undefined) {
      window.Cognito.load("forms", { id: `${node.cognitoFormId}` });
    }
  });

  if (node.cognitoForm) {
    return (
      <>
        <Helmet>
          <script src="https://www.cognitoforms.com/s/xPoircp7HEGoNo_tpFEirg"></script>
        </Helmet>
        <div class="cognito"></div>
      </>
    );
  } else {
    return <div dangerouslySetInnerHTML={{ __html: node.code }} />;
  }
};
