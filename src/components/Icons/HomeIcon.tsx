import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";

const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props} viewBox="0 -5 24 24">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
};

export default HomeIcon;
