import { Track } from './track';


export interface Album {
  name: string,
  releaseDate: string,
  coverImager: string,
  track: Track[]
}
