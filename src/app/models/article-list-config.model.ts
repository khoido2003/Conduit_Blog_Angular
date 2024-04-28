export interface ArticleListConfig {
  type: string;

  filters: {
    tag?: string;
    author?: string;
    favourited?: boolean;
    limit?: number;
    offset?: number;
  };
}
