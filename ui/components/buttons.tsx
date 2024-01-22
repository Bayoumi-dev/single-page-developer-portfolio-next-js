interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
interface AnchorProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: String;
}

const buttonStyle = `py-3 border-b-2 border-green uppercase bg-gradient-to-r from-[theme(colors.green)_50%] 
to-[theme(colors.white)_50%] bg-2/1 bg-right bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] 
box-decoration-clone duration-300 hover:bg-left focus:bg-left w-fit h-fit`;

export function Button(props: ButtonProps) {
  const { className, children, ...restProp } = props;
  return (
    <button {...restProp} className={`${buttonStyle} ${className}`}>
      {children}
    </button>
  );
}

export function ButtonLink(props: AnchorProps) {
  const { className, to, children, ...restProp } = props;
  return (
    <a
      {...restProp}
      href={`${to}`}
      role="button"
      className={`${buttonStyle} ${className}`}
    >
      {children}
    </a>
  );
}
