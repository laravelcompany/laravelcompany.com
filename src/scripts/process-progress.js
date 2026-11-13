export const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

export function processProgress(top, height, viewport) {
  if (![top, height, viewport].every(Number.isFinite) || height <= viewport) return 0;
  return clamp(-top / (height - viewport));
}

export function processState(progress) {
  const p = clamp(Number.isFinite(progress) ? progress : 0);
  return { progress: p, stage: Math.min(2, Math.floor(p * 3)), assembly: clamp((p - 0.12) / 0.74) };
}
