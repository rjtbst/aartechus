export async function uploadResume(file: File): Promise<string> {
  const ext      = file.name.split(".").pop() ?? "pdf";
  const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/resumes/${fileName}`,
    {
      method: "POST",
      headers: {
        apikey:        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        "Content-Type": file.type || "application/octet-stream",
        "x-upsert": "false",
      },
      body: file,
    }
  );

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err?.message ?? "Resume upload failed");
  }

  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/resumes/${fileName}`;
}