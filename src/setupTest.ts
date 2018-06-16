import "replay";

declare global {
  function pithy(filename: string): string;
}

function pithy(filename: string): string {
  const basename = filename.split("/").pop() as string;
  return basename.split(".").shift() as string;
}

// @ts-ignore error TS2339: Property 'pithy' does not exist on type 'Global'.
global.pithy = pithy;
