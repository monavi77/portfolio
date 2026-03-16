/// <reference types="vite/client" />

declare module '*.svg' {
  const src: string;
  export default src;
}

declare global {
  interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    // add other env vars here if needed
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
    glob(
      pattern: string,
      options: { eager: true; import: 'default' }
    ): Record<string, string>;
  }
}

