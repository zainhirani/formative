import { useRouter } from "next/router";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { signOut } from "next-auth/react";
import PageLayout from "components/PageLayout";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import { BoxWrapper } from "./Styled";
import Loader from "components/Loader";
import dynamic from 'next/dynamic'


const HomeScreen: React.FC = () => {
  const router = useRouter();
  const PageLayout = dynamic(() => import("components/PageLayout"), {
      ssr: false,
      loading: () => <Loader />,
  });
  return (
    <>
      <PageLayout>
        <Box>
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
        </Box>
      </PageLayout>
    </>
  );
};
export default HomeScreen;
