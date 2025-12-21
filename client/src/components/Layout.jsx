import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children, user }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <Navbar user={user} />
      <main className="flex-grow p-4">{children}</main>
      <Footer />
    </div>
  );
}
