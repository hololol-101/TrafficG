// types/show.ts

export interface Payment {
    userId: number;
    reservation_id: number;
    amount: number;
    status: string;    
}

export interface PaymentRequest {
    userId: number;
    reservation_id: number;
    amount: number;
    status: string;   
}
