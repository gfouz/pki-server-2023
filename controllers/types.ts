export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  enabled: boolean;
  rolId: number;
}

export interface IFn {
  id: number;
  name: string;
  path: string;
  enabled: boolean;
  rolId: number;
}

export interface IRol {
  id: number;
  name: string;
  enabled: boolean;
}
export interface IResult {
  id: number;
  name: string;
  path: string;
  enabled: boolean;
  rolId: number;
  rol: string;
  funct: IFn[];
}

export interface IFReg {
  id: number;
  name: string;
  phone: string;
  enabled: boolean;
  erId: number;
  userId: number;
}

export interface IEReg {
  id: number;
  name: string;
  address: string;
  enabled: boolean;
  municipioId: number;
}