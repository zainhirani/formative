import { useRouter } from "next/router";
import dynamic from 'next/dynamic'
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import FormattedMessage from "theme/FormattedMessage";
import messages from "./messages";
import { BoxWrapper } from "./Styled";
import Loader from "components/Loader";
import { useAuthContext } from "contexts/AuthContext";


 const PageLayout = dynamic(() => import("components/PageLayout"), {
      ssr: false,
      loading: () => <Loader />,
  });
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
