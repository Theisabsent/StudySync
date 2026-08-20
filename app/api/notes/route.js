import { supabase } from "@/lib/supabase";

export async function GET() {
  const { data, error } = await supabase.from("notes").select("*");
  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
  return Response.json(data);
}

export async function POST(request) {
  const body = await request.json();
  const { data, error } = await supabase
    .from("notes")
    .insert([{ text: body.note }])
    .select();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
  return Response.json({ success: true, notes: data });
}