import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormRequest {
  projectType: string;
  budget: string;
  timeline: string;
  email: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { projectType, budget, timeline, email, message }: ContactFormRequest = await req.json();

    console.log("Processing contact form submission from:", email);

    // Send notification email to PostersCraft
    const notificationEmail = await resend.emails.send({
      from: "PostersCraft <onboarding@resend.dev>",
      to: ["contact@posterscraft.com"],
      subject: `New Project Brief: ${projectType}`,
      html: `
        <h1>New Project Brief Received</h1>
        <h2>Project Details</h2>
        <ul>
          <li><strong>Project Type:</strong> ${projectType}</li>
          <li><strong>Budget:</strong> ${budget}</li>
          <li><strong>Timeline:</strong> ${timeline}</li>
          <li><strong>Email:</strong> ${email}</li>
        </ul>
        <h3>Message:</h3>
        <p>${message}</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    // Send confirmation email to client
    const confirmationEmail = await resend.emails.send({
      from: "PostersCraft <onboarding@resend.dev>",
      to: [email],
      subject: "We received your project brief!",
      html: `
        <h1>Thank you for reaching out!</h1>
        <p>We've received your project brief and our team will review it shortly.</p>
        <h2>Your Submission</h2>
        <ul>
          <li><strong>Project Type:</strong> ${projectType}</li>
          <li><strong>Budget:</strong> ${budget}</li>
          <li><strong>Timeline:</strong> ${timeline}</li>
        </ul>
        <p>We typically respond within 24 hours. If your project is urgent, feel free to call us at +91 82070 80940.</p>
        <p>Best regards,<br>The PostersCraft Team</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
