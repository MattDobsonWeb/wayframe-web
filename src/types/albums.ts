export interface IPopulatedAlbumPhoto {
  _id: string;
  filename: string;
  cloudflareUrl: string;
  thumbnailUrl?: string;
  title?: string;
  dimensions: {
    width: number;
    height: number;
  };
  metadata: {
    camera?: {
      make?: string;
      model?: string;
    };
    lens?: {
      make?: string;
      model?: string;
      focalLength?: number;
    };
    settings?: {
      iso?: number;
      aperture?: number;
      shutterSpeed?: string;
    };
  };
  createdAt: Date;
}
