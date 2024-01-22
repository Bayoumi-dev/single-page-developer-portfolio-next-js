interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {}
interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const fieldStyle =
  "w-full bg-transparent text-base leading-relaxed uppercase tracking-tight pl-6 pb-4 border-b border-white outline-none autofill:pt-2 autofill:relative autofill:z-1";

export function Input(props: InputFieldProps) {
  return (
    <div>
      <input {...props} className={fieldStyle} />
    </div>
  );
}

export function Textarea(props: TextareaFieldProps) {
  return (
    <div>
      <textarea {...props} className={`${fieldStyle} h-[6.6875rem]`} />
    </div>
  );
}
