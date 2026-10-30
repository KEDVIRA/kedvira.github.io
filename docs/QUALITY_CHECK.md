# KEDVIRA Lab v2 — Quality Check

Kiểm thử thực hiện trên phiên bản source đã tách thành ba trang `index.html`, `people.html` và `publications.html`.

## Kiểm tra đã đạt

- Syntax `node --check content.js` và `node --check main.js`: hợp lệ.
- Chromium (Playwright) kiểm thử DOM/script qua tài liệu và script được nạp trực tiếp vào phiên kiểm thử: **không có lỗi JavaScript**.
- Viewport: **1440×900**, **768×1024**, **390×844**: cả ba trang không tràn ngang.
- Trang chủ: **2 hàng liên kết** đến các trang riêng; không chứa danh sách người/công bố cũ.
- `people.html`: **4 hàng placeholder** mặc định, có nhãn mẫu; hai ngôn ngữ hoạt động.
- `publications.html`: **3 hàng placeholder** mặc định, có nhãn mẫu; hai ngôn ngữ hoạt động.
- Khi thêm **1 thành viên thật** vào `settings.people`: còn 1 hàng người thật, 0 placeholder, liên kết hồ sơ hiển thị.
- Khi thêm **1 công trình thật** vào `settings.publications`: còn 1 công trình, 0 placeholder, liên kết bài báo hiển thị.
- Mobile menu mở/đóng bình thường; liên kết `people.html` và `publications.html` là trang riêng.
- Kiểm tra breadcrumb, footer, logo và liên kết root trong source.

## Giới hạn kiểm thử

- Môi trường Chromium hiện tại không cho phép điều hướng tới file/localhost trực tiếp, nên kiểm thử DOM được thực hiện bằng cách nạp HTML/CSS/JS vào trang kiểm thử, tương đương render client-side, thay vì click qua HTTP thật. Trước khi công bố chính thức, vẫn cần smoke-test trên domain của bạn.
- Các ảnh preview là ảnh trong Chromium với logo SVG được nhúng trực tiếp để hiển thị chính xác trong môi trường kiểm thử.
- Dữ liệu nhân sự và bài báo là placeholder; không xác minh các công bố khoa học thực tế khi chưa được cung cấp.

## Trước khi đưa vào production

- [ ] Tên miền thật, chứng chỉ HTTPS hợp lệ.
- [ ] `people.html`, `publications.html` và trang chủ trả HTTP 200.
- [ ] Các link trên menu, footer và trang chủ mở đúng nội dung.
- [ ] Nội dung VI/EN đúng, menu mobile đúng.
- [ ] Người và công trình đã được phê duyệt khi xuất hiện.
- [ ] Cập nhật `websiteUrl` và Open Graph image URL nếu muốn social sharing/SEO chuẩn.
