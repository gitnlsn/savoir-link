import { Resend } from "resend";

import { env } from "~/env";
import { logger } from "~/lib/logger";

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

function from(): string {
  const name = env.RESEND_FROM_NAME;
  const email = env.RESEND_FROM_EMAIL ?? "no-reply@savoirlink.com";
  return `${name} <${email}>`;
}

interface SendArgs {
  to: string;
  subject: string;
  html: string;
}

/** Send an email; a graceful no-op (logged) when Resend isn't configured (e.g. local dev). */
export async function sendEmail({ to, subject, html }: SendArgs): Promise<void> {
  if (!resend) {
    logger.info("Email skipped (no RESEND_API_KEY)", { to, subject });
    return;
  }
  try {
    await resend.emails.send({ from: from(), to, subject, html });
  } catch (error) {
    logger.error("Email send failed", {
      to,
      subject,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

/** Notify the customer their order is live, with the private management link. */
export async function sendOrderPublishedEmail(args: {
  to: string;
  contactName: string;
  title: string;
  manageUrl: string;
  expiresAt: Date;
}): Promise<void> {
  const html = `
    <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="color:#003ec7;">Seu pedido está no ar! 🎉</h2>
      <p>Olá ${args.contactName}, seu pedido <strong>"${args.title}"</strong> foi publicado
      e já pode ser visto por profissionais.</p>
      <p>Ele ficará ativo até <strong>${args.expiresAt.toLocaleDateString("pt-BR")}</strong>.</p>
      <p>Use o link abaixo para acompanhar quantos profissionais desbloquearam seu contato,
      renovar ou encerrar o pedido:</p>
      <p><a href="${args.manageUrl}" style="background:#003ec7;color:#fff;padding:12px 20px;
      border-radius:8px;text-decoration:none;display:inline-block;">Gerenciar meu pedido</a></p>
      <p style="color:#737688;font-size:13px;">Guarde este e-mail: o link é a única forma de
      gerenciar seu pedido.</p>
    </div>`;
  await sendEmail({
    to: args.to,
    subject: "Seu pedido foi publicado — Savoir Link",
    html,
  });
}
