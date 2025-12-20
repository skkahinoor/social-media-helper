import { Link } from "react-router-dom";

export default function Home({ user }) {
    return (
      <div>
        <h2>Select a Tool</h2>
        <p>Instagram Caption Generator</p>
        <p>Hashtag Generator</p>
        <Link to="/instagram-caption">
            <button>Instagram Caption Generator</button>
        </Link>
        <Link to="/hashtag-generator">
            <button>Hashtag Generator</button>
        </Link>
      </div>
    );
  }
  