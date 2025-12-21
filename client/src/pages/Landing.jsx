import LoginButton from "../components/LoginButton";
import { Helmet } from "react-helmet-async";


export default function Landing({ onLogin }) {
  return (
    <div className="w-full">
      <Helmet>
        <title>AI Social Media Tools for Instagram Creators</title>
        <meta name="description" content="Generate viral Instagram captions, hashtags, and content ideas using AI — in seconds." />
        <meta name="keywords" content="AI Social Media Tools, Instagram Captions, Hashtags, Content Ideas, AI Tools" />
        <meta name="author" content="Social Media Helper" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Social Media Tools for Instagram Creators" />
        <meta name="twitter:description" content="Generate viral Instagram captions, hashtags, and content ideas using AI — in seconds." />
        <meta name="twitter:image" content="https://socialmediahelper.com/images/logo.png" />
        <meta name="twitter:url" content="https://socialmediahelper.com" />
        <meta name="twitter:site" content="@socialmediahelper" />
        <meta name="twitter:creator" content="@socialmediahelper" />
      </Helmet>
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            AI Social Media Tools for Instagram Creators 🚀
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            Generate viral Instagram captions, hashtags, and content ideas using
            AI — in seconds.
          </p>

          {/* PROFESSIONAL GOOGLE LOGIN */}
          <div className="flex justify-center">
            <LoginButton onLogin={onLogin} />
          </div>

          <p className="mt-4 text-sm text-white/80">
            Free to use • No credit card required
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            🚀 Powerful AI Tools
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard
              title="Instagram Caption Generator"
              desc="Create engaging, viral captions based on topic, tone, and niche."
            />

            <FeatureCard
              title="Hashtag Generator"
              desc="Get trending and niche hashtags to boost reach and engagement."
            />

            <FeatureCard
              title="AI-Powered Content"
              desc="Save time and grow faster with smart AI-generated content."
            />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            ⚙️ How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <StepCard
              step="1"
              title="Sign in with Google"
              desc="Create your free account instantly using Google login."
            />

            <StepCard
              step="2"
              title="Choose a Tool"
              desc="Select caption or hashtag generator and enter your topic."
            />

            <StepCard
              step="3"
              title="Generate & Copy"
              desc="Get AI results instantly and copy with one click."
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            💡 Why Choose SocialTools?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Benefit text="✅ Built for Instagram creators & brands" />
            <Benefit text="⚡ Instant AI-generated results" />
            <Benefit text="🔐 Secure Google authentication" />
            <Benefit text="📈 Helps grow reach & engagement" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
<section className="py-16 px-6 bg-white dark:bg-gray-800">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold text-center mb-10">
      ❤️ What Creators Say
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Testimonial
        name="Rahul S."
        role="Travel Creator"
        text="This tool saves me so much time. My engagement increased instantly!"
      />
      <Testimonial
        name="Ananya M."
        role="Small Business Owner"
        text="The hashtag generator is 🔥. Very easy and fast to use."
      />
      <Testimonial
        name="David K."
        role="Content Marketer"
        text="Clean UI, powerful AI, and free. Highly recommended."
      />
    </div>
  </div>
</section>


      {/* FAQ */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-10">
            ❓ Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <FAQ
              q="Is this tool free to use?"
              a="Yes, you can use basic features for free. Pro features may be added later."
            />
            <FAQ
              q="Do I need to install anything?"
              a="No. Everything works directly in your browser."
            />
            <FAQ
              q="Is Google login safe?"
              a="Yes. We use Google OAuth and never store your password."
            />
            <FAQ
              q="Can I use this for my business?"
              a="Absolutely! This tool is built for creators and brands."
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Start Creating Better Content Today
        </h2>

        <p className="mb-6 text-white/90">
          Join creators who use AI to grow faster on Instagram.
        </p>

        <div className="flex justify-center">
          <LoginButton onLogin={onLogin} />
        </div>
      </section>
    </div>
  );
}

/* 🔹 SMALL REUSABLE COMPONENTS */

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
      <div className="text-3xl font-bold text-blue-600 mb-2">{step}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{desc}</p>
    </div>
  );
}

function Benefit({ text }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow text-sm">
      {text}
    </div>
  );
}

function Testimonial({ name, role, text }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 shadow">
      <p className="text-sm text-gray-700 dark:text-gray-200 mb-4">
        “{text}”
      </p>
      <div className="font-semibold">{name}</div>
      <div className="text-xs text-gray-500">{role}</div>
    </div>
  );
}


function FAQ({ q, a }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
      <h4 className="font-semibold mb-1">{q}</h4>
      <p className="text-sm text-gray-600 dark:text-gray-300">{a}</p>
    </div>
  );
}
