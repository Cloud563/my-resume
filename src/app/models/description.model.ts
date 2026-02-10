export interface DescriptionItem {
  item: string;
}

export interface Description {
  header: string;
  footer: string;
  items: DescriptionItem[];
}
