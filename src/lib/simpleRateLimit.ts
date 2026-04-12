export class SimpleRateLimiter {
  private requests: Map<string, { count: number; resetTime: number }>;
  private readonly limit: number;
  private readonly windowMs: number;

  constructor(limit: number = 5, windowMs: number = 60000) {
    this.requests = new Map();
    this.limit = limit;
    this.windowMs = windowMs;
  }

  /**
   * @param identifier
   * @returns { allowed: boolean, remaining: number, resetTime: number }
   */
  check(identifier: string): { allowed: boolean; remaining: number; resetTime: number } {
    const now = Date.now();
    const record = this.requests.get(identifier);

    if (!record || now > record.resetTime) {
      this.requests.set(identifier, {
        count: 1,
        resetTime: now + this.windowMs
      });
      return { allowed: true, remaining: this.limit - 1, resetTime: now + this.windowMs };
    }

    if (record.count < this.limit) {
      record.count++;
      return { allowed: true, remaining: this.limit - record.count, resetTime: record.resetTime };
    }

    return { allowed: false, remaining: 0, resetTime: record.resetTime };
  }

  cleanup(): void {
    const now = Date.now();
    for (const [key, record] of this.requests.entries()) {
      if (now > record.resetTime) {
        this.requests.delete(key);
      }
    }
  }
}

export const registrationRateLimiter = new SimpleRateLimiter(5, 60000); // 5 req/min

setInterval(() => {
  registrationRateLimiter.cleanup();
}, 60000);