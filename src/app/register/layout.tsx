export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" w-screen h-screen flex justify-center items-center bg-transparent ">
      {children}
    </div>
  );
}
