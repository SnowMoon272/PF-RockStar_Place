export const DEFAULT = "DEFAULT";

export function deffault(payload) {
  return {
    type: DEFAULT,
    payload,
  };
}
