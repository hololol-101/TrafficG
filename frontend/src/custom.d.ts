// src/custom.d.ts 또는 src/global.d.ts
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
