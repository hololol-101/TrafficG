import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', // json-server 주소
});

// 공연 목록 조회
export const getShows = () => api.get('/shows');

// 공연 상세 조회
export const getShowDetail = (id: number) => api.get(`/shows/${id}`);
