import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="bg-gray-300">
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;
