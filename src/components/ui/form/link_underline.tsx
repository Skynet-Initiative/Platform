// Assurez-vous que children est défini dans LinkUnderlineProps
interface LinkUnderlineProps {
  text: string;
  url: string;
  children?: React.ReactNode;
}

export default function LinkUnderline({
  text,
  url,
  children,
}: LinkUnderlineProps) {
  return (
    <a href={url} className="underline underline-offset-2">
      {children ? children : text}
    </a>
  );
}
