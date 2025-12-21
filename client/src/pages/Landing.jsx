import LoginButton from "../components/LoginButton";

export default function Landing({ onLogin }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-3">
          Social Media Helper Tools 🚀
        </h1>

        <p className="text-gray-600 mb-4">
          Generate captions, hashtags & more using AI.
        </p>

        <ul className="text-sm text-left mb-4 space-y-2">
          <li>✅ Instagram Captions</li>
          <li>✅ Hashtag Generator</li>
          <li>✅ AI Powered</li>
          <li>✅ Free & Pro Plans</li>
        </ul>

        {/* 🔥 PASS CALLBACK */}
        <LoginButton onLogin={onLogin} />
      </div>
    </div>
  );
}
