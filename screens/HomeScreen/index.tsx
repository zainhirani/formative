import Typography from "@mui/material/Typography";
import FormattedMessage from "theme/FormattedMessage";
import { Button, Box } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

import messages from "./messages";
import { BoxWrapper } from "./Styled";

const HomeScreen: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <BoxWrapper>
        <Typography>
          <FormattedMessage {...messages.title} />
        </Typography>
        <Box>
          <Button onClick={() => signOut()}>Logout</Button>
        </Box>
      </BoxWrapper>
      <Typography sx={{ ml: 4 }}>
        <FormattedMessage {...messages.description} />
      </Typography>
    </>
  );
};
export default HomeScreen;
