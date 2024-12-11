export type NavigationItem = {
  id: number;
  name: string;
  link?: string;
  children?: NavigationItem[];
  main?: boolean;
  bullet?: boolean;
};
