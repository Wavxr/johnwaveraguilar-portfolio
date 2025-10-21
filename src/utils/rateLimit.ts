interface RateLimitEntry {
  count: number
  resetTime: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000
const MAX_REQUESTS_PER_WINDOW = 3

export function checkRateLimit(identifier: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(identifier)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW_MS,
    })
    return true
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return false
  }

  entry.count += 1
  return true
}

export function cleanupExpiredEntries() {
  const now = Date.now()
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key)
    }
  }
}

setInterval(cleanupExpiredEntries, 10 * 60 * 1000)
