import { useContext } from "react";
import Typography from "@mui/material/Typography";
import AuthContext from "contexts/AuthContext";
import FormattedMessage from "theme/FormattedMessage";

import messages from "./messages";
import { BoxWrapper } from "./Styled";
import { useRegisterDetail } from "providers/Auth";

const HomeScreen: React.FC = () => {
  // const { currentUser } = useContext(AuthContext);
  const currentUser = useRegisterDetail();
  // @ts-ignore
  if (currentUser?.data !== "student") {
    <p>You are not authorized to access this page.</p>;
  }
  return (
    <>
      <BoxWrapper>
        <Typography>
          <FormattedMessage {...messages.title} />
        </Typography>
      </BoxWrapper>
      <Typography sx={{ ml: 4 }}>
        <FormattedMessage {...messages.description} />
      </Typography>
    </>
  );
};

// export default withAuth(HomeScreen, ["admin"]);
export default HomeScreen;
