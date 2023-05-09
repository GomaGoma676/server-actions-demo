export default async function TodoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="flex flex-1 justify-center">{children}</main>
}
