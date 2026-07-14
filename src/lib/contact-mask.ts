/**
 * Masks contact information (phone numbers, e-mails, links, social handles)
 * embedded in free-text order fields (`title` / `description`).
 *
 * Why: a customer's real contact is hidden until a professional pays to unlock
 * it. Without this, a customer could leak their phone/e-mail in the description
 * and bypass the paywall. We auto-mask instead of rejecting, so the order is
 * still created but the contact is scrubbed.
 *
 * Dependency-free and isomorphic — used both server-side (authoritative, in the
 * tRPC input schema) and client-side (live feedback on blur).
 */

export const CONTACT_MASK = "•••";

// Standard e-mail, tolerant of spaces around "@" ("nome @ gmail.com").
const EMAIL = /[a-z0-9._%+-]+\s*@\s*[a-z0-9.-]+\.[a-z]{2,}/gi;

// Obfuscated e-mail: "nome arroba gmail ponto com".
const OBFUSCATED_EMAIL =
  /[a-z0-9._%+-]+\s+arroba\s+[a-z0-9.-]+\s+ponto\s+[a-z]{2,3}(?:\s+ponto\s+[a-z]{2,3})?/gi;

// URLs and known link shorteners / social domains.
const URL = /\bhttps?:\/\/\S+/gi;
const KNOWN_LINKS =
  /\b(?:www\.\S+|wa\.me\/\S+|t\.me\/\S+|instagr(?:am\.com|\.am)\/\S+|bit\.ly\/\S+|linktr\.ee\/\S+|(?:fb|facebook)\.com\/\S+)/gi;

// Social/@handle (e.g. "@meuinsta"). Runs after e-mails so it never catches the
// "@" inside an already-masked address.
const HANDLE = /(?<![a-z0-9._%+-])@[a-z0-9._]{2,}/gi;

// Phone-shaped digit run: 8+ digits with optional space/dash/dot/paren/plus
// separators. Catches "11 99999-8888", "(11)99998888", "9 9 9 9 9 8 8 8 8".
// Letters break the run, so "2 quartos", "200m²", "R$ 500" stay untouched.
const PHONE_DIGITS = /(?:\+?\d[\s.\-()]*){8,}/g;

// Spelled-out / mixed digit dictation. A run of 8+ digit-tokens where a token is
// a digit-word (PT + common EN) OR a literal single digit, joined only by
// spaces / "," / "-" / the connector "e". Any other word breaks the run, so
// "quero dois quartos e uma sala" (3 digit-words) is safe.
const DIGIT_WORD =
  "(?:zero|oh|um|uma|dois|duas|tres|três|quatro|cinco|seis|meia|sete|oito|nove|one|two|three|four|five|six|seven|eight|nine|\\d)";
const SPELLED_PHONE = new RegExp(
  `\\b${DIGIT_WORD}(?:[\\s,-]+(?:e[\\s,-]+)?${DIGIT_WORD}){7,}\\b`,
  "gi",
);

// Known trade-off: 4+ space-separated numbers in a row (e.g. "500 300 200 100"
// = 12 digits) will be masked. Acceptable per the "phone-shaped" detection choice.
const PASSES = [
  EMAIL,
  OBFUSCATED_EMAIL,
  URL,
  KNOWN_LINKS,
  HANDLE,
  PHONE_DIGITS,
  SPELLED_PHONE,
];

export function maskContactInfo(input: string): { text: string; masked: boolean } {
  let text = input;
  for (const pattern of PASSES) {
    text = text.replace(pattern, (match) => {
      // Preserve trailing separators/whitespace so masking doesn't glue words.
      const trailing = match.match(/[\s.\-()]+$/)?.[0] ?? "";
      return CONTACT_MASK + trailing;
    });
  }
  return { text, masked: text !== input };
}
