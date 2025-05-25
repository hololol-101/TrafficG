// types/show.ts

export interface Seat {
  id: string;
  row: string;
  column: number;
}

export interface ReserveRequest {
  showId: number;
  seats: string[]; // 혹은 Seat[]로 바꾸고 싶으면 위와 통일
  userId: number;
}
