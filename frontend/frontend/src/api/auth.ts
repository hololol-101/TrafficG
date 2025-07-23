// src/api/auth.ts
import { User } from '../types/user';
import { LoginRequest } from '../types/user';
import { SignUpRequest } from '../types/user';
export const login = async ({ accountId, password }: LoginRequest): Promise<User> => {
  const res = await fetch(`http://localhost:3001/users?accountId=${accountId}&password=${password}`);
  const users = await res.json();

  if (users.length === 0) {
    throw new Error('아이디 또는 비밀번호가 틀렸습니다.');
  }

  // 로그인 성공 시 사용자 정보 반환
  return users[0];
};

 
export const signUp = async (data: SignUpRequest) => {
  const res = await fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error('회원가입 요청 실패');
  }

  const newUser = await res.json();
  return newUser;
};