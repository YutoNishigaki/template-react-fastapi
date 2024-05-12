/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DISABLE_MSW: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
