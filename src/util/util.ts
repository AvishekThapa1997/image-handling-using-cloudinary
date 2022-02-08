import { join } from "path";
export const mergePath = (paths: string[]): string => {
  return join(...paths);
};
