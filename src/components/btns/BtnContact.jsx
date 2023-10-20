import { Button } from "@mui/material";

export default function BtnContact() {
  const email = "mailto:alexis.jcastillo@outlook.com";

  const handleButtonClick = () => {
    window.location.href = email;
  };

  return (
    <Button
      variant="contained"
      onClick={handleButtonClick}
      style={{ backgroundColor: "#fadb85", color: "#001023", width: 150, marginTop: 20 }}
    >
      CONTACT
    </Button>
  );
}
