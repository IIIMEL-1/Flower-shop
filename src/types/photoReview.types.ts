import { IReview } from "./review.types";

export interface IPhotoReview extends IReview {
  photoUrl: string;
}
