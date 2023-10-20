import { MouseEventHandler } from "react";

export interface MotorCycleProps {
  wheelbase: string;
  gearbox:string
  cooling:string;
  engine:string;
  type:string
  fuel_capacity: string;
  make: string;
  model: string;
  year: number;
  starter:string;
  price:number
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  type?: string;
}


export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
  setFilter?:any
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit:any
}