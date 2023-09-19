import { db } from "@/lib/db";
import { MessageValidator } from "@/lib/validators/message";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, text } = MessageValidator.parse(body);

    // create message in database
    const message = await db.message.create({
      data: {
        name,
        email,
        text,
      },
    });

    return new Response(JSON.stringify({ messageId: message.id }), {
      status: 201,
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }

    return new Response(
      "Could not create message at this time. Please try later",
      {
        status: 500,
      }
    );
  }
}
