import Typography from "@mui/material/Typography";
import ThemeSwitcher from "components/ThemeSwitch";
import FormattedMessage from "theme/FormattedMessage";
import { withAuth } from "utils/withAuth";

import messages from "./messages";
import { BoxWrapper } from "./Styled";

const HomeScreen: React.FC = () => {
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

// export default withAuth(HomeScreen, ["admin"]);
export default HomeScreen;
