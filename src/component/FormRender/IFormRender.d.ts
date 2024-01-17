export interface IFormRender {
  formField: IFormField[];
}
export interface IFormField {
  label: string;
  maxLength: string;
  minLength: number;
  options: any;
  placeholder: string;
  required: boolean;
  type: string;
}
