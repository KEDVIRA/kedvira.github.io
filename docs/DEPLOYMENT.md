# Triển khai KEDVIRA Lab website

## Phương án 1 — Upload hosting thường (cPanel, DirectAdmin, FTP)

1. Giải nén `KEDVIRA_Lab_Website_Source.zip`.
2. Mở thư mục vừa giải nén: ZIP được sắp xếp để `index.html` nằm ngay cấp gốc.
3. **Upload toàn bộ các file và thư mục** vào `public_html/` (hoặc thư mục root đã cấu hình của tên miền). `index.html` phải nằm trực tiếp trong document root.
4. Mở URL HTTPS và kiểm tra `people.html`, `publications.html`, chuyển VI/EN, menu, logo và `brand/`.
5. Không cần MySQL, Node.js, PHP hoặc build.

## Phương án 2 — GitHub Pages

1. Tạo repository và đẩy **nội dung** thư mục website lên root của repository.
2. Settings → Pages → Deploy from a branch → main / root.
3. Nếu dùng đường dẫn `/tên-repo/`, các liên kết trang và tài nguyên trong source đều là đường dẫn tương đối nên vẫn hoạt động; tránh đổi chúng sang đường dẫn bắt đầu bằng `/`.
4. Gắn tên miền tùy chỉnh nếu đã được phê duyệt và cập nhật `settings.websiteUrl`.

## Phương án 3 — Cloudflare Pages / Netlify

- Dùng chế độ **static files** hoặc direct upload.
- Build command: *để trống*.
- Publish directory: thư mục chứa `index.html`.

## Chỉnh sửa nội dung

Mở `content.js` với VS Code hoặc Notepad++:

```js
settings: {
  email: "research@your-university.edu.vn", // thay email THẬT
  institution: "Your University / Faculty", // thay tên CHÍNH THỨC
  institutionUrl: "https://your-university.edu.vn",
  location: "Ho Chi Minh City, Vietnam",    // nếu đúng
  github: "https://github.com/your-group",
  scholar: "",
  websiteUrl: "https://your-real-domain.edu.vn/",
  people: [],
  publications: []
}
```

Nếu trường `email`, `institution`, `location` để trống, website hiển thị thông báo **sẽ cập nhật** thay vì bịa dữ liệu. Khi có `email`, nút gửi thư xuất hiện tự động.

### Trang riêng: Thành viên (list)

Trang `people.html` mặc định có **4 hàng placeholder** (trưởng nhóm, giảng viên/nghiên cứu viên, học viên, sinh viên); không hiển thị tên người giả.

```js
people: [
  {
    name: "Tên người đã đồng ý công bố",
    role_vi: "Giảng viên / Nghiên cứu viên",
    role_en: "Faculty / Researcher",
    affiliation_vi: "Tên khoa / trường đã xác minh",
    affiliation_en: "Verified faculty / university",
    interests_vi: "Đồ thị tri thức",
    interests_en: "Knowledge Graphs",
    profile: "https://orcid.org/...",
    image: "assets/people/anh-duoc-phep-dang.jpg"
  }
]
```

`name` là bắt buộc; các trường khác tùy chọn. Nhập dữ liệu thật thì các placeholder tự biến mất. Ảnh cục bộ đặt ở `assets/people/`; có thể bỏ `image` để dùng avatar chữ cái.

### Trang riêng: Công trình (list)

Trang `publications.html` mặc định có **3 hàng placeholder** (tạp chí, hội nghị, công trình khác), không phải bài báo đã xuất bản.

```js
publications: [
  {
    title: "Exact verified paper title",
    authors: "Full, verified author list",
    venue: "Journal or Conference",
    year: 2026,
    type: "journal",   // journal | conference | preprint | other
    doi: "10.xxxx/xxxxx",
    url: "https://doi.org/10.xxxx/xxxxx"
  }
]
```

Các mục đã nhập được sắp xếp năm giảm dần. Khi nhập dữ liệu thật, placeholder tự biến mất. Xem chi tiết tại [`PAGES_AND_DATA.md`](PAGES_AND_DATA.md).

### Chỉnh ngôn ngữ & hướng nghiên cứu

- Các chuỗi tiếng Việt trong `vi: { ... }`.
- Các chuỗi tiếng Anh trong `en: { ... }`.
- Danh sách 4 hướng nằm ở `research.areas` trong từng ngôn ngữ.
- Dữ liệu có cấu trúc tĩnh, không có CMS/back-end; cập nhật file rồi upload ghi đè.

## Thay logo và màu

- Logo SVG nằm trong `assets/`.
- Màu website thay ở đầu `styles.css` (CSS variables).
- Màu trang hướng dẫn nhận diện thay ở đầu `brand/brand.css`.
- Ảnh chia sẻ `assets/social-card.png` là ảnh tĩnh; cần tạo lại nếu sửa tên/logo/slogan.

## SEO và metadata

- `index.html` có description, Open Graph, Twitter card, favicon, webmanifest, robots.txt và 404.html.
- Khi có tên miền chính thức, thêm URL HTTPS vào `settings.websiteUrl` để website tự tạo canonical và URL Open Graph.
- Nhiều crawler không chạy JavaScript: để SEO đa ngôn ngữ tối ưu cần xuất trang VI/EN thành các HTML tĩnh riêng trong phiên bản tiếp theo. Phiên bản này là **single-page bilingual front-end**.
- Nên thay đường dẫn `og:image` bằng URL HTTPS tuyệt đối khi hosting đã hoạt động; mã JS cũng hỗ trợ cập nhật sau khi có `websiteUrl`, nhưng crawler không thực thi JavaScript có thể không thấy thay đổi.

## Kiểm tra sau upload

- [ ] Vào được website với HTTPS.
- [ ] Giao diện mobile không tràn ngang.
- [ ] Chuyển VI ↔ EN thành công.
- [ ] Menu mobile mở và đóng bình thường.
- [ ] Menu đến đúng `people.html`, `publications.html`; các nút khác đến đúng section trang chủ.
- [ ] Trang `brand/` hoạt động; hai trang danh sách hiển thị placeholder hoặc dữ liệu thật hợp lệ.
- [ ] `content.js` chứa tên, email, thành viên, bài báo đã được xác minh.
- [ ] Không còn thông tin giữ chỗ không phù hợp với mục đích phát hành.
- [ ] Đã xin phép tên đơn vị chủ quản và tra cứu nhãn hiệu.

## Quyền riêng tư và bảo mật

Site không cài analytics, cookies theo dõi, biểu mẫu thu thập dữ liệu, API hoặc kết nối bên thứ ba. Chuyển ngôn ngữ có lưu một giá trị `kedvira-lang` trong localStorage của trình duyệt. Nếu thêm form, analytics hoặc CMS, cần rà soát lại chính sách quyền riêng tư và bảo mật.
