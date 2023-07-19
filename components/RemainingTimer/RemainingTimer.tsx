import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

function RemainingTimer({ seconds, onEnd, remainingTimer }: any) {
  const [remainingSeconds, setRemainingSeconds] = useState(seconds);

  useEffect(() => {
    if (seconds) {
      setRemainingSeconds(seconds);
    }
  }, [seconds]);
  useEffect(() => {
    if (remainingSeconds <= 0) {
      onEnd();
      return;
    }

    const timerId = setInterval(() => {
      setRemainingSeconds((prevSeconds: any) => prevSeconds - 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [remainingSeconds, onEnd]);

  useEffect(() => {
    remainingTimer(remainingSeconds);
  }, [remainingSeconds, remainingTimer]);

  const getTimeColor = (): string => {
    if (remainingSeconds <= 10) {
      return "#ff0000";
    } else if (remainingSeconds <= 30) {
      return "orange";
    } else if (remainingSeconds <= 60) {
      return "#005E84";
    } else {
      return "#225A41";
    }
  };
  return (
    <Box sx={{ display: "flex" }}>
      <Typography variant="body1" sx={{ marginRight: "5px" }}>
        Time Remaining:{" "}
      </Typography>
      <Typography variant="body1" style={{ color: getTimeColor() }}>
        {remainingSeconds} seconds
      </Typography>
    </Box>
  );
}

export default RemainingTimer;
