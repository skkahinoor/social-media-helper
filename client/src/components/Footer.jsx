import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-10 p-4 text-center text-sm">
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms">Terms</Link>
        <Link to="/refund-policy">Refund Policy</Link>
      </div>

      <p className="mt-3 text-gray-500">
        © {new Date().getFullYear()} Social Media Helper. All rights reserved.
      </p>
    </footer>
  );
}
