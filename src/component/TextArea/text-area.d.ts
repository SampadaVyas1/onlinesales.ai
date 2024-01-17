type TextAreaProps = JSX.IntrinsicElements["textarea"];

export interface ITextAreaProps extends TextAreaProps {
  placeholder: string;
  required: boolean;
  label: string;
  maxLength: string;
}
