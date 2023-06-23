// import { getServerSession } from "next-auth/next";
// import { authOptions } from "../auth/[...nextauth]/route";

import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  console.log("RUNNING MAIN GET");
  const posts = await prisma.post.findMany({
    where: {
      userId: "clixv58oo00003p7hswzq0e4n",
    },
  });
  return NextResponse.json(posts);
}

export async function POST(request) {
  const { title, content } = await request.json();
  console.log("title", title);
  console.log("content", content);
  const session = await getServerSession(authOptions);
  if (!session) {
    return new NextResponse.status(403).send("Unauthorized");
  }

  const data = {
    title,
    content,
    userId: session.user.id,
  };
  const something = await prisma.post.create({
    data,
  });

  return NextResponse.json(data, {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

export async function DELETE() {}
