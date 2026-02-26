import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = (await req.json()) as { email?: string };

    if (!email) {
      return NextResponse.json({ ok: false, error: "Email is required." }, { status: 400 });
    }

    const apiKey = process.env.KIT_API_KEY;
    const formId = process.env.KIT_FORM_ID;

    if (!apiKey || !formId) {
      return NextResponse.json(
        { ok: false, error: "Missing KIT_API_KEY or KIT_FORM_ID env vars." },
        { status: 500 }
      );
    }

    // Kit (ConvertKit) API — subscribe to a specific form (tracks attribution to that form)
    const kitRes = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        api_key: apiKey,
        email,
      }),
    });

    const data = await kitRes.json().catch(() => ({}));

    if (!kitRes.ok) {
      return NextResponse.json(
        { ok: false, error: data?.message || "Kit subscribe failed." },
        { status: 400 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Unexpected error." }, { status: 500 });
  }
}