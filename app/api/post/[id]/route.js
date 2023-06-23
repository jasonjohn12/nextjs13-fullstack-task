import { NextResponse, NextRequest } from "next/server";

export async function GET(request, { params }) {
  const id = Number(params.id);

  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });
  return NextResponse.json(post);
}
