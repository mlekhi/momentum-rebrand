export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 font-display">Privacy Policy</h1>
      <p className="text-neutral-400 mb-8">Last updated: January 2026</p>

      <div className="space-y-8 text-neutral-300">
        <section>
          <h2 className="text-xl font-semibold mb-3 text-white">Overview</h2>
          <p>
            Momentum (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This policy explains how we handle information when you visit our website or attend our events.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-white">Information We Collect</h2>
          <p className="mb-3">
            We collect minimal information to run our co-working sessions:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Event registration data through Luma (name, email)</li>
            <li>Basic analytics to understand how our website is used</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-white">How We Use Information</h2>
          <p>
            We use your information solely to communicate about our events, send session reminders, and improve our community experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-white">Third-Party Services</h2>
          <p>
            We use Luma for event registration. When you register for an event, you are also subject to Luma&apos;s privacy policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3 text-white">Contact</h2>
          <p>
            Questions? Reach out at{" "}
            <a href="mailto:hello@momentum.place" className="underline hover:text-white transition-colors">
              hello@momentum.place
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}

