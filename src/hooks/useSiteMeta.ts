export interface ISiteMeta {
  title: string;
  url: string;
  description?: string;
  keywords?: string;
  type?: string;
}

export const useSiteMeta = (meta: ISiteMeta) => meta;
