import Lens from "@mui/icons-material/Lens";

function StatusIcon({ status }) {
  let title;
  let color;

  switch (status) {
    case "DRAFT":
      title = "Draft";
      color = "orange";
      break;
    case "ACTIVE":
    case "PUBLISHED":
      title = "Active";
      color = "green";
      break;
    case "INACTIVE":
      title = "Deactivated";
      color = "gray";
      break;
    case "DELETE":
      title = "Deleted";
      color = "red";
      break;
    default:
      title = status;
      color = "black";
      break;
  }

  return (
    <span style={{ verticalAlign: "middle" }}>
      <Lens style={{ color }} fontSize="inherit" />
    </span>
  );
}

export default StatusIcon;
