import { LoadingButton, LoadingButtonProps } from "@mui/lab";

import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const BoxWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      "& .correct":{
        backgroundColor: 'rgba(173, 162, 140, 0.2)',
        "& td":{
          color:'#225A41 !Important',
        }
      },
      "& .wrong":{
        backgroundColor: 'rgba(191, 191, 191, 0.1)',
        "& td":{
          color:'#8C2531 !Important',
        }
      }
    } as any),
) as (props: BoxProps) => JSX.Element;
