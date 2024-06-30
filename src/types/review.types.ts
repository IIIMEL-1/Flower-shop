export interface IReview {
  date: string;
  time: string;
  name: string;
  email?: string;
  city: string;
  review: string;
  estimation: number;
  id?: number;
}
