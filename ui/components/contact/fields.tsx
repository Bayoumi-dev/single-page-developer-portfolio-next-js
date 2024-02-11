import FieldError from "./field-error";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMsg: null | string;
}
interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorMsg: null | string;
}

const fieldStyle =
  "w-full bg-transparent text-base leading-relaxed uppercase tracking-tight pl-6 pb-4 border-b border-white outline-none autofill:pt-2 autofill:relative autofill:z-1";
const fieldErrorStyle =
  "!border-error placeholder:text-error placeholder:opacity-75";

export function Input(props: InputFieldProps) {
  const { errorMsg, ...inputAttr } = props;
  return (
    <div className={`${errorMsg ? "relative" : ""}`}>
      <input
        {...inputAttr}
        className={`${fieldStyle} ${errorMsg ? fieldErrorStyle : ""}`}
      />
      {errorMsg && <FieldError message={errorMsg} />}
    </div>
  );
}

export function Textarea(props: TextareaFieldProps) {
  const { errorMsg, ...textareaAttr } = props;

  return (
    <div className={`${errorMsg ? "relative" : ""}`}>
      <textarea
        {...textareaAttr}
        className={`${fieldStyle} h-[6.6875rem] ${
          errorMsg ? fieldErrorStyle : ""
        }`}
      />
      {errorMsg && <FieldError message={errorMsg} />}
    </div>
  );
}
