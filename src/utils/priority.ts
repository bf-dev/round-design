export const firstTruthy = <T>(...list: T[]): T | undefined =>
  list.find(Boolean)
