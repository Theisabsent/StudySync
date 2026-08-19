let notes = [];

export async function GET() {
  return Response.json(notes);
}

export async function POST(request) {
  const data = await request.json();
  notes.push(data.note);
  return Response.json({ success: true, notes });
}