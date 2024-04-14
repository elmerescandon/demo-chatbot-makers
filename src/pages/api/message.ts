import type {IMessage} from "@/utils/interfaces";
import type {APIContext, APIRoute} from "astro";

export async function POST(ctx: APIContext): Promise<Response> {
    try {
        const URL = "http://127.0.0.1:8000/message";
        const rawData = await new Response(ctx.request.body).text();
        const message: IMessage = JSON.parse(rawData);
        if (!message) {
            throw new Error("No request body provided");
        }

        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        });

        if (!response.ok) {
            throw new Error("Failed to send message");
        }
        const data = await response.json();
        return new Response(
            JSON.stringify({
                message: data,
            }),
            {status: 200}
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: (error as Error).message,
            }),
            {status: 500}
        );
    }
}
