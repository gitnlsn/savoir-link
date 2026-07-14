/* Load test env (.env.test) into process.env before the test modules — and thus `~/env` — evaluate. */
try {
  process.loadEnvFile(".env.test");
} catch {
  // .env.test is optional; tests that need a real Pagar.me sandbox key self-skip without it.
}
