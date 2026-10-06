import { auth, signOut } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Kiểm tra trạng thái xác thực</h1>
      
      {session ? (
        <div style={{ border: "1px solid green", padding: "1rem", marginTop: "1rem" }}>
          <h2>Đã đăng nhập thành công!</h2>
          <p>Tên: {session.user?.name}</p>
          <p>Email: {session.user?.email}</p>
          
          <form action={async () => {
            "use server"
            await signOut()
          }}>
            <button type="submit" style={{ padding: "0.5rem 1rem", marginTop: "1rem", cursor: "pointer" }}>
              Đăng xuất
            </button>
          </form> 
        </div>
      ) : (
        <div style={{ border: "1px solid red", padding: "1rem", marginTop: "1rem" }}>
          <h2>Chưa đăng nhập</h2>
          <p>Bạn cần hoàn thành bài tập để đăng nhập.</p>
          <a href="/api/auth/signin" style={{ display: "inline-block", marginTop: "1rem", padding: "0.5rem 1rem", background: "#24292e", color: "white", textDecoration: "none", borderRadius: "4px" }}>
            Đăng nhập bằng GitHub
          </a>
        </div>
      )}
    </main>
  );
}