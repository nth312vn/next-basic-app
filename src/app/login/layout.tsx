export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-transparent ">
      {children}
    </div>
  );
}
