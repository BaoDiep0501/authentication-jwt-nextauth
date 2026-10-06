# Bài Tập: Xác Thực Người Dùng Với NextAuth.js (v5)

## 🔗 Ngữ Cảnh & Yêu Cầu Nghiệp Vụ
Bạn đang phát triển module xác thực lõi cho một ứng dụng web sử dụng Next.js (App Router).
- Hệ thống sử dụng cơ chế **stateless authentication**, quản lý phiên bằng **JWT** (không lưu session trên database).
- Phương thức đăng nhập duy nhất được yêu cầu là **GitHub OAuth**.
- Dữ liệu Payload trong JWT chỉ dùng để truyền thông tin cơ bản. Tuyệt đối không lưu trữ thông tin nhạy cảm.

## ⚙️ Cài Đặt

1. Fork repository này về tài khoản GitHub của bạn, sau đó clone về máy:
```bash
git clone <URL-fork-cua-ban>
cd authentication-jwt-nextauth
npm install
npm install next-auth@beta
```

2. Cấu hình biến môi trường:
Tạo file `.env.local` ở thư mục gốc (copy cấu trúc từ file `.env.example`) và điền các thông tin:
- `AUTH_SECRET`: Mở terminal chạy lệnh `npx auth secret` để sinh chuỗi bảo mật và dán vào đây.
- `AUTH_GITHUB_ID` & `AUTH_GITHUB_SECRET`: Lấy từ trang Developer Settings > OAuth Apps trên tài khoản GitHub của bạn.

*(Tuyệt đối không chia sẻ hoặc commit file `.env.local` lên GitHub)*

3. Khởi động ứng dụng:
```bash
npm run dev
```

## 📝 Nhiệm Vụ Của Bạn
Hoàn thành cấu hình xác thực tại 2 file bị khuyết trong dự án. Tuyệt đối không thay đổi cấu trúc thư mục hoặc file giao diện (`page.tsx`).

**Nhiệm vụ 1: Hoàn thiện `auth.ts` (tại thư mục gốc)**
- Xóa các hàm giả (dummy functions) có sẵn.
- Import `NextAuth` và `GitHub` provider từ `next-auth/providers/github`.
- Cấu hình strategy cho session là `jwt`.
- Export đúng các đối tượng `handlers`, `auth`, `signIn`, `signOut`.

**Nhiệm vụ 2: Thiết lập Route Handler (`app/api/auth/[...nextauth]/route.ts`)**
- Import `handlers` từ file `auth.ts` ở thư mục gốc.
- Export các phương thức `GET` và `POST` từ `handlers` để NextAuth tự động xử lý các luồng callback và API ngầm.

## 🧪 Kiểm Tra Kết Quả
- Đảm bảo server đang chạy, mở trình duyệt truy cập `http://localhost:3000`. Giao diện ban đầu sẽ báo "Chưa đăng nhập".
- Bấm vào nút đăng nhập bằng GitHub. Nếu bạn cấu hình đúng logic ở 2 file trên, NextAuth sẽ khởi tạo JWT, lưu vào Cookie an toàn và chuyển hướng bạn về trang chủ hiển thị thành công tên và email của bạn.
## 📤 Nộp bài
-Sau khi code và test xong, commit và push mã nguồn lên fork của bạn:
```bash
git add .
git commit -m "Hoan thanh bai tap NextAuth"
git push origin main
```