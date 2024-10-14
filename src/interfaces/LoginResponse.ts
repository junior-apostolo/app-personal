export interface Token {
    expiracao: string;
    tokenString: string;
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    cpf: string;
    isAdmin: boolean;
    planExpirationDate: string; // ou Date, se preferir usar o objeto Date
    isFirstAccess: boolean;
    step: number;
    passwordRecoveryCode: boolean;
    passwordRecoveryDate: string; // ou Date, se preferir usar o objeto Date
  }
  
  export interface LoginResponse {
    success: boolean;
    data: {
      token: Token;
      user: User;
    };
  }
  