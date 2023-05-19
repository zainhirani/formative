import Typography from "@mui/material/Typography";
<<<<<<< Updated upstream
=======
// import ThemeSwitcher from "components/ThemeSwitch";
>>>>>>> Stashed changes
import FormattedMessage from "theme/FormattedMessage";
import { Button, Box } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import PageLayout from "components/PageLayout";

import messages from "./messages";
import { BoxWrapper } from "./Styled";

const HomeScreen: React.FC = () => {
  const router = useRouter();
  return (
    <>
    <PageLayout>
      <Box>
      <BoxWrapper>
        <Typography>
          <FormattedMessage {...messages.title} />
        </Typography>
        <Box>
<<<<<<< Updated upstream
=======
          {/* <ThemeSwitcher /> */}
>>>>>>> Stashed changes
          <Button onClick={() => signOut()}>Logout</Button>
        </Box>
      </BoxWrapper>
      <Typography sx={{ ml: 4 }}>
        <FormattedMessage {...messages.description} />
      </Typography>
      </Box>
      </PageLayout>
    </>
  );
};
export default HomeScreen;
