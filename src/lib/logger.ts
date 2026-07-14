/* Minimal structured logger. Swap for pino/winston later if needed. */
type Level = "debug" | "info" | "warn" | "error";

const order: Record<Level, number> = { debug: 0, info: 1, warn: 2, error: 3 };
const threshold = order[(process.env.LOG_LEVEL as Level) ?? "info"];

function log(level: Level, message: string, meta?: unknown) {
  if (order[level] < threshold) return;
  const line = { level, message, ...(meta ? { meta } : {}) };
  const fn = level === "error" ? console.error : console.log;
  fn(JSON.stringify(line));
}

export const logger = {
  debug: (m: string, meta?: unknown) => log("debug", m, meta),
  info: (m: string, meta?: unknown) => log("info", m, meta),
  warn: (m: string, meta?: unknown) => log("warn", m, meta),
  error: (m: string, meta?: unknown) => log("error", m, meta),
};

export type Logger = typeof logger;
