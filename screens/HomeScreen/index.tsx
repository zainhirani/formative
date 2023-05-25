import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
// import { signOut } from "next-auth/react";
import PageLayout from "components/PageLayout";
import FormattedMessage from "theme/FormattedMessage";

import messages from "./messages";
import { BoxWrapper } from "./Styled";
import { useAuthContext } from "contexts/AuthContext";

const HomeScreen: React.FC = () => {
  const signOut = useAuthContext();
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
              <Button
                onClick={() => {
                  signOut;
                }}
              >
                Logout
              </Button>
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
