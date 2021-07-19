import { Button } from "@material-ui/core";

function StyledButton(props) {
  let sx = props.sx;
  let colorbtn = props?.color;
  let propsClone = { ...props };
  delete propsClone.sx;
  return (
    <Button
      sx={{
        ...sx,
        textTransform: "none",
        width: "90px",
        height: "30px",
        backgroundColor: colorbtn === "inherit" ? "#434343" : "",
        color: colorbtn === "inherit" ? "white" : "",
        "&:hover": {
          backgroundColor: colorbtn === "inherit" ? "#050505" : "",
        },
      }}
      {...propsClone}
      onChange={props.handleChange}
    >
      {props.children}
    </Button>
  );
}

export default StyledButton;
