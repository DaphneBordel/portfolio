import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();

    // 🤖 honeypot
    if (body.website) {
        return Response.json({ success: true });
    }

    const { name, email, company, message } = body;

    try {
        // 📩 mail vers toi
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: process.env.NEXT_PUBLIC_EMAIL!,
            subject: "Nouveau contact",
            html: `
        <p><b>${name}</b> (${email})</p>
        <p>${company}</p>
        <p>${message}</p>
      `
        });

        // ✉️ copie au client
        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: email,
            subject: "Message bien reçu 🚀",
            html: `
        <p>Merci ${name}, j’ai bien reçu ton message !</p>
        <p>Je te réponds rapidement 👌</p>
      `
        });

        return Response.json({ success: true });

    } catch (err) {
        console.log("err", err);
        return Response.json({ error: "Erreur email" }, { status: 500 });
    }
}