export interface PostBase {
  title: string;
  excerpt: string;
  body: string;
  postCategory: PostCategory;
}

export interface Post extends PostBase {
  id: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface PostCategory {
  id: number;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}