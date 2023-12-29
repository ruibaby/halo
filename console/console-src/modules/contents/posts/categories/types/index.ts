export interface CategoryFormState {
  parent?: string;
  displayName: string;
  slug: string;
  template?: string;
  cover?: string;
  description?: string;
  annotations?: {
    [key: string]: string;
  } | null;
}
