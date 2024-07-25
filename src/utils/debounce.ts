/* eslint-disable @typescript-eslint/no-explicit-any */

export function debounce(
  func: (...args: any[]) => void,
  wait: number
): { (...args: any[]): void; cancel: () => void } {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  const debouncedFunction = (...args: any[]) => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(...args), wait);
  };

  debouncedFunction.cancel = function () {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  };

  return debouncedFunction;
}
