import '@styles/global.css';

export const metadata = {
  title: 'GadgetBazar',
  description: 'Discover & Buy Gadget',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          {/* Background color */}
          <div className="gradient" />
        </div>

        {/* Main Content */}
        <main className="app">{children}</main>
      </body>
    </html>
  );
};
export default RootLayout;
