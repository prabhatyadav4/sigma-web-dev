

export const metadata = {
  title: "Facebook - Comments",
  description: "Welcome to Comments page of Facebook.",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>Comments Navbar</span>
    {children}
    </>
  );
}
