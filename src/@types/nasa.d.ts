export interface Nasa {
  copyright?:      string;
  date:            Date;
  explanation:     string;
  hdurl?:          string;
  media_type:      MediaType;
  service_version: ServiceVersion;
  title:           string;
  url:             string;
  thumbnail_url?:  string;
}

export enum MediaType {
  Image = "image",
  Video = "video",
}

export enum ServiceVersion {
  V1 = "v1",
}