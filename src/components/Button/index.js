import { Button } from "@material-ui/core";

function StyledButton(props) {
  let sx = props.sx;
  let propsClone = { ...props };
  delete propsClone.sx;
  return (
    <Button
      variant="contained"
      sx={{ ...sx, textTransform: "none", width: "90px", height: "30px" }}
      {...propsClone}
    >
      {props.children}
    </Button>
  );
}

export default StyledButton;
