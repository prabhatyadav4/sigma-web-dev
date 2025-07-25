

export const metadata = {
  title: "Facebook - Admin",
  description: "Welcome to Admin page of Facebook.",
};

export default function AdminLayout({ children }) {
  return (
    <>
    <span>Admin Navbar</span>
    {children}
    </>
  );
}
