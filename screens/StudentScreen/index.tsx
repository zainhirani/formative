import { useContext } from "react";
import { AuthContext } from "contexts/AuthContext";

const StudentScreen: React.FC = () => {
  const { currentUser } = useContext(AuthContext);
  if (currentUser !== "teacher") {
    <p>You are not authorized to access this page.</p>;
  }
  return <>Student screen</>;
};
export default StudentScreen;
