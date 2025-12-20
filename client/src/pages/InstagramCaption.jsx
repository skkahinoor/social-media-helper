import { useState } from "react";

export default function InstagramCaption() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");

  const generateCaption = () => {
    setResult("This is a sample Instagram caption ✨");
  };

  return (
    <div>
      <h2>Instagram Caption Generator</h2>

      <textarea
        placeholder="Enter your topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button onClick={generateCaption}>Generate</button>

      {result && <p>{result}</p>}
    </div>
  );
}
