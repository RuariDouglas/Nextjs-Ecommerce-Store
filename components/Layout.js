import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <div className="footer">Footer</div>
    </>
  );
};

export default Layout;
