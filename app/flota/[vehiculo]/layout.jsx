
export default async function Layout({children}) {
  return (
    <div className="space-y-9">
      <div>{children}</div>
    </div>
  );
}