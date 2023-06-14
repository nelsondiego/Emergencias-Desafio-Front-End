import { Config } from "@/@types/config"

export const config: Config = {
  nasa: {
    url: process.env.NEXT_PUBLIC_NASA_URL,
    token: process.env.NEXT_PUBLIC_NASA_API_TOKEN
  }
}