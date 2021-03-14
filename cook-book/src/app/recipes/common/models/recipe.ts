import {Ingredient} from './ingredient';

export interface Recipe {
  _id: number;
  name: string;
  preparationTimeInMinutes: number;
  description: string;
  ingredients?: Ingredient[];
}
