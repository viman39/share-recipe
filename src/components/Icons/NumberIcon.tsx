import { Typography } from "@mui/material";
import * as style from "./numberIcon.style";

interface NumberIconProps {
  value: number;
}

const NumberIcon: React.FC<NumberIconProps> = ({ value }) => {
  return (
    <Typography
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: 24,
        height: 24,
        borderRadius: "50%",
        backgroundColor: "transparent",
        border: "3px solid black",
        marginRight: 1,
      }}
    >
      {value}
    </Typography>
  );
};

export default NumberIcon;
