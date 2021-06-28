export const getLocalTime = (ts: number, timezone: number): string =>
  new Date(ts * 1000 + timezone * 1000).toLocaleTimeString();

export const getLocalString = (ts: number, timezone: number): string =>
  new Date(ts * 1000 + timezone * 1000).toLocaleString();
