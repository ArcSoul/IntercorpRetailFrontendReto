import { InputModel } from '../models/input-model';

export const SetInputValue = (id: string, value: any, inputList: InputModel[]) => {
  const input = inputList.find(element => element.id === id);
  if (input) {
    input.value = value;
  }
}
