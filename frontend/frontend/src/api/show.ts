// api/show.ts
import { Show } from '../types/show';

export const fetchShows = async (): Promise<Show[]> => {
  const res = await fetch('http://localhost:3001/shows');
  if (!res.ok) throw new Error('공연 목록 가져오기 실패');
  return res.json();
};

export const fetchShow = async (id: number): Promise<Show> => {
  const res = await fetch(`http://localhost:3001/shows/${id}`);
  if (!res.ok) throw new Error('상세 정보 요청 실패');
  return res.json();
};