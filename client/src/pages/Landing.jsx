import LoginButton from "../components/LoginButton";
export default function Landing({ onLogin }) {
    return (
      <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">
            Free AI Social Media Tools for Insta Creators
          </h1>
  
          <p className="text-lg mb-6">
            Generate Instagram captions, hashtags & more — instantly.
          </p>
  
          <LoginButton onLogin={onLogin} />
  
          {/* SEO Sections */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white text-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">
                Instagram Caption Generator
              </h3>
              <p className="text-sm">
                Create viral captions with AI in seconds.
              </p>
            </div>
  
            <div className="bg-white text-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">
                Hashtag Generator
              </h3>
              <p className="text-sm">
                Get trending & niche hashtags instantly.
              </p>
            </div>
  
            <div className="bg-white text-gray-800 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">
                AI Powered Tools
              </h3>
              <p className="text-sm">
                Smart content creation for creators & brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  