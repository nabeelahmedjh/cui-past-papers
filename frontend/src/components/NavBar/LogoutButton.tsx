import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";

const LogoutButton = () => {
  const authToken = Cookies.get("authToken");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Delete the authToken cookie
    Cookies.remove("authToken");

    // Redirect to the login page
    navigate("/sensei");
  };

  // Render the logout button if user is logged in
  if (authToken) {
    return (
      <Button
        type="button"
        variant="destructive"
        onClick={handleLogout}
        className="mr-4"
      >
        Logout
      </Button>
    );
  }

  return null; // If user is not logged in, don't render anything
};

export default LogoutButton;
