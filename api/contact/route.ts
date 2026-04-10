import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, company, message } = await req.json();
        const mail: string = process.env.NEXT_PUBLIC_EMAIL as string;
        const data = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: [mail],
            subject: `Nouveau message - ${company || "Contact"}`,
            html: `
        <h2>Nouveau message</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Entreprise :</strong> ${company}</p>
        <p><strong>Message :</strong></p>
        <p>${message}</p>
      `
        });

        return Response.json({ success: true, data });
    } catch (error) {
        return Response.json({ success: false, error });
    }
}