export interface Config {
  nasa: Nasa;
}

export interface Nasa {
  url?:   string;
  token?: string;
}