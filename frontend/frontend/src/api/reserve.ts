// api/reserve.ts
import { ReserveRequest } from '../types/reserve';

export const reserveSeat = async (data:ReserveRequest) => {
 const res = await fetch('http://localhost:3001/reserve', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
  if (!res.ok) {
    throw new Error('결제 요청 실패');
  }

  const newUser = await res.json();
  return newUser;
};


