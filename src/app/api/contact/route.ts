import { NextRequest, NextResponse } from "next/server";

const SUPABASE_URL  = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SERVICE_KEY   = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const RESEND_KEY    = process.env.RESEND_API_KEY!;
const NOTIFY_TO     = process.env.NOTIFY_TO!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      inquiryType = "general",
      name, phone, email,
      course, workAuth, budget, message, resumeUrl,
    } = body;

    const typeLabel =
      inquiryType === "callback" ? "Course Inquiry" :
      inquiryType === "project"  ? "IT Project"     : "General Query";

    // Run both in parallel
    const [dbRes] = await Promise.all([
      saveLead({ typeLabel, name, phone, email, course, workAuth, budget, message, resumeUrl }),
      sendEmail({ typeLabel, name, phone, email, course, workAuth, budget, message, resumeUrl }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[contact/route]", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// ── Save lead to Supabase ─────────────────────────────────────────────────────

async function saveLead(d: Record<string, string>) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: "POST",
    headers: {
      apikey:          SERVICE_KEY,
      Authorization:  `Bearer ${SERVICE_KEY}`,
      "Content-Type": "application/json",
      Prefer:         "return=minimal",
    },
    body: JSON.stringify({
      type:       d.typeLabel,
      name:       d.name,
      phone:      d.phone,
      email:      d.email,
      course:     d.course    || null,
      work_auth:  d.workAuth  || null,
      budget:     d.budget    || null,
      message:    d.message   || null,
      resume_url: d.resumeUrl || null,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err?.message ?? "Supabase insert failed");
  }
}

// ── Send email via Resend ─────────────────────────────────────────────────────

async function sendEmail(d: Record<string, string>) {
  const rows: [string, string][] = [
    ["Type",           d.typeLabel],
    ["Name",           d.name],
    ["Phone",          d.phone],
    ["Email",          d.email],
    ["Course/Service", d.course    || "—"],
    ["Work Auth",      d.workAuth  || "—"],
    ["Budget",         d.budget    || "—"],
    ["Message",        d.message   || "—"],
    ["Resume",         d.resumeUrl
      ? `<a href="${d.resumeUrl}" style="color:#2563eb;font-weight:600">📎 Download Resume</a>`
      : "<span style='color:#94a3b8'>Not uploaded</span>"],
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization:  `Bearer ${RESEND_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:     "AArtechus Leads <onboarding@resend.dev>",
      to:       [NOTIFY_TO],
      reply_to: d.email,
      subject:  `[${d.typeLabel}] ${d.name} — ${d.course || "AArtechus"}`,
      html: `
        <div style="font-family:sans-serif;max-width:640px;margin:auto;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden">
          <div style="background:linear-gradient(to right,#2563eb,#7c3aed,#a855f7);height:6px"></div>
          <div style="padding:40px 36px">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:28px">
              <div style="width:44px;height:44px;border-radius:12px;background:#eff6ff;display:flex;align-items:center;justify-content:center;font-size:20px">🎓</div>
              <div>
                <div style="font-size:12px;font-weight:600;color:#2563eb;text-transform:uppercase;letter-spacing:.05em">AArtechus</div>
                <h1 style="margin:2px 0 0;font-size:20px;font-weight:700;color:#0f172a">New ${d.typeLabel}</h1>
              </div>
            </div>

            <table style="width:100%;border-collapse:collapse;font-size:14px;border-radius:12px;overflow:hidden;border:1px solid #e2e8f0">
              ${rows.map(([label, value], i) => `
                <tr style="background:${i % 2 === 0 ? "#f8fafc" : "#ffffff"}">
                  <td style="padding:12px 16px;font-weight:600;color:#475569;width:130px;border-bottom:1px solid #e2e8f0;white-space:nowrap">
                    ${label}
                  </td>
                  <td style="padding:12px 16px;color:#0f172a;border-bottom:1px solid #e2e8f0">
                    ${value}
                  </td>
                </tr>`).join("")}
            </table>

            

            <p style="margin-top:24px;color:#94a3b8;font-size:12px;text-align:center">
              Received ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
            </p>
          </div>
        </div>
      `,
    }),
  });

  if (!res.ok) {
    const err = await res.json();
    // Don't throw — lead is already saved, email failure shouldn't break the flow
    console.error("Resend error:", err);
  }
}