const Layout = ({ children }) => {
  return (
    <>
      <div className="header">Header</div>
      {children}
      <div className="footer">Footer</div>
    </>
  );
};

export default Layout;
