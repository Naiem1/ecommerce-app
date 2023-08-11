import Header from '@components/Header/header';
import '@styles/globals.css';

export const metadata = {
  title: 'GadgetBazar',
  description: 'Discover & Buy Gadget',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="main">
          {/* Background color */}
          <div className="" />
        </div>

        {/* Main Content */}
        <main className="app">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};
export default RootLayout;
