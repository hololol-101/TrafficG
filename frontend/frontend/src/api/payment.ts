// api/reserve.ts
import { PaymentRequest } from '../types/payment';

export const paymentConfirm = async (data:PaymentRequest) => {
 const res = await fetch('http://localhost:3001/payment', {
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


