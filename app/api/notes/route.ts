import { NextResponse } from "next/server";
import { queryAsync } from "@/app/lib/db";

export const GET = async () => {
  try {
    const result = await queryAsync("SELECT * FROM Notes;");
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};

export const POST = async (req: Request) => {
  const { title, content } = await req.json();
  try {
    await queryAsync("INSERT INTO notes (title, content) VALUES (?, ?)", [
      title,
      content,
    ]); // Ignore the typescript error. It works...
    return NextResponse.json({ message: "OK" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
