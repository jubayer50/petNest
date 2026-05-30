import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";

const AuthLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>

      <div>{children}</div>

      <Footer></Footer>
    </div>
  );
};

export default AuthLayout;
