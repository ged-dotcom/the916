export default function JoinPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-6 inline-flex items-center rounded-full border border-white/20 px-4 py-2 text-xs tracking-widest uppercase text-white/70">
          Join the movement
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Join early.
          <br />
          Build with The916.
        </h1>

        <p className="mt-6 text-white/70 text-lg leading-relaxed">
          Get updates, resources, and early access to Collective drops and local projects.
          No noise. Just mission.
        </p>

        <div className="mt-10 rounded-2xl border border-white/15 bg-white/5 p-6">
          <p className="text-sm text-white/70">
            For now, we’re collecting signups via email (simple + fast). Click below and send a blank email — we’ll add you.
          </p>

          <a
            className="mt-5 inline-flex items-center justify-center rounded-full border border-white/30 bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition"
            href="mailto:hello@the916.com?subject=Join%20The916&body=Please%20add%20me%20to%20The916%20updates.%0A%0AName%3A%20%0AInstagram%2FTikTok%3A%20%0ACity%3A%20%0AWhat%20do%20you%20want%20to%20build%3F%20"
          >
            Join via Email
          </a>

          <p className="mt-3 text-xs text-white/50">
            Next step (later): we’ll swap this for a proper waitlist form (ConvertKit/Beehiiv/Tally).
          </p>
        </div>

        <a
          href="/"
          className="mt-10 inline-block text-sm text-white/60 hover:text-white transition"
        >
          ← Back to home
        </a>
      </div>
    </main>
  );
}