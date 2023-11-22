import { NextResponse } from "next/server";
import { queryAsync } from "@/app/lib/db";

export const GET = async (req: Request) => {
  try {
    const id = req.url.split("notes/")[1];
    const result = await queryAsync(`SELECT * FROM Notes WHERE id=${id};`);
    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
