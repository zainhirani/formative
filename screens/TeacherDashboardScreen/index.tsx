import { useContext } from "react";
import Typography from "@mui/material/Typography";
import ThemeSwitcher from "components/ThemeSwitch";
import { AuthContext } from "contexts/AuthContext";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import { BoxWrapper } from "./Styled";

const HomeScreen: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser !== "teacher") {
    <p>You are not authorized to access this page.</p>;
  }
  return (
    <>
      <BoxWrapper>
        <Typography>
          <FormattedMessage {...messages.title} />
        </Typography>
        <ThemeSwitcher />
      </BoxWrapper>
      <Typography sx={{ ml: 4 }}>
        <FormattedMessage {...messages.description} />
      </Typography>
    </>
  );
};
export default HomeScreen;
