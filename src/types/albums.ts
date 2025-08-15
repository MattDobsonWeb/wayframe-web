export interface IAlbum extends Document {
  _id: Types.ObjectId;
  title: string;
  description?: string;
  coverPhoto?: Types.ObjectId;
  photos: Types.ObjectId[];
  owner: Types.ObjectId;
  isPublic: boolean;
  tags: string[];
  location?: {
    name: string;
    coordinates?: {
      latitude: number;
      longitude: number;
    };
  };
  viewCount: number;
  likeCount: number;
  createdAt: Date;
  updatedAt: Date;
  getPublicInfo(): object;
}
