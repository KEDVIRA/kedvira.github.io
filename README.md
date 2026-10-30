# KEDVIRA Lab — Website source (v2, multipage)

Bộ website giới thiệu nhóm nghiên cứu **KEDVIRA Lab**: Knowledge Graphs · Semantic & Multimodal Retrieval · AI in Education.

## Những điểm mới của v2

- **Trang chủ** `index.html`: giữ nguyên nội dung thương hiệu và bốn hướng nghiên cứu; phần thành viên và công trình chỉ còn **hai hàng điều hướng dạng list** đến các trang riêng.
- **Trang Thành viên** `people.html`: danh sách một cột, mặc định hiển thị **4 hàng placeholder có nhãn DỮ LIỆU MẪU**, không gán tên người thật.
- **Trang Công trình** `publications.html`: danh sách một cột, mặc định hiển thị **3 hàng placeholder** minh họa bài báo tạp chí, hội nghị và công trình khác — không phải thành tích thật.
- Khi cập nhật `settings.people` hoặc `settings.publications` trong `content.js`, placeholder **tự biến mất** và các mục thật xuất hiện. Không cần sửa HTML của trang.
- Cả 3 trang dùng chung menu, logo, footer, style và hệ nội dung **VI/EN**. Chuyển ngôn ngữ bằng nút VI / EN; trình duyệt lưu lựa chọn trong localStorage khi được phép.
- Bố cục responsive, không phụ thuộc npm, Node server, framework JS, CDN hoặc cơ sở dữ liệu.

## Cấu trúc tệp

```text
index.html                  # Trang chủ
people.html                 # Danh sách thành viên / placeholders
publications.html           # Danh sách công trình / placeholders
content.js                  # Nội dung song ngữ + dữ liệu thành viên, bài báo
main.js                     # Render, đổi ngôn ngữ, điều hướng, metadata
styles.css                  # CSS chung của cả ba trang
assets/
  people/README.txt         # Ảnh thành viên, nếu có quyền sử dụng
  logo-*.svg/png            # Bộ logo KEDVIRA
  favicon*.svg/png          # Icon website
  social-card.png           # Ảnh chia sẻ mạng xã hội
brand/index.html            # Trang bộ nhận diện
brand/brand.css
docs/BRAND_GUIDE.md
docs/DEPLOYMENT.md
docs/PAGES_AND_DATA.md         # Hướng dẫn nhập danh sách
/docs/QUALITY_CHECK.md
404.html
robots.txt
site.webmanifest
```

## Dùng ngay

Giải nén, upload **toàn bộ nội dung** thư mục này lên `public_html/` hoặc thư mục gốc web. File `index.html`, `people.html`, `publications.html`, `content.js`, `main.js` và `styles.css` cần nằm cùng cấp.

Đường dẫn sau triển khai (tùy tên miền):

- Trang chủ: `https://ten-mien-cua-ban/`
- Thành viên: `https://ten-mien-cua-ban/people.html`
- Công trình: `https://ten-mien-cua-ban/publications.html`
- Hướng dẫn nhận diện: `https://ten-mien-cua-ban/brand/`

Trên máy, có thể mở trực tiếp file HTML hoặc chạy `python -m http.server 8080` rồi vào `http://localhost:8080`.

## Cập nhật dữ liệu

**Chỉ chỉnh một file: `content.js`**, phần `window.KEDVIRA_SITE.settings`:

```js
people: [
  {
    name: "HỌ TÊN ĐÃ ĐƯỢC XÁC NHẬN",
    role_vi: "Trưởng nhóm nghiên cứu",
    role_en: "Research Group Lead",
    affiliation_vi: "Khoa / Trường (nếu đã phê duyệt)",
    affiliation_en: "Faculty / University",
    interests_vi: "Đồ thị tri thức, AI giáo dục",
    interests_en: "Knowledge Graphs, AI in Education",
    profile: "https://orcid.org/...",
    image: "assets/people/ten-thanh-vien.jpg"
  }
],
publications: [
  {
    title: "TÊN BÀI BÁO THẬT, ĐÃ XÁC MINH",
    authors: "Tác giả 1, Tác giả 2",
    venue: "Tên tạp chí hoặc hội nghị",
    year: 2026,
    type: "journal", // journal | conference | preprint | other
    doi: "10.xxxx/xxxx",
    url: "https://doi.org/10.xxxx/xxxx"
  }
]
```

**Đây chỉ là ví dụ cú pháp, không phải nhân sự/công trình có thật.** Khi dữ liệu được điền, các hàng placeholder sẽ bị thay thế hoàn toàn. Nếu để `[]`, trang sẽ hiển thị placeholder đúng yêu cầu.

Ảnh thành viên cục bộ phải đặt trong `assets/people/`, tên file chỉ dùng chữ, số, `-`, `_`, `.` (ví dụ `nguyen-van-a.jpg`). Có thể dùng URL ảnh `https://...` đã được phép công bố.

Chi tiết: [docs/PAGES_AND_DATA.md](docs/PAGES_AND_DATA.md).

## Lưu ý trước khi công khai

1. Chỉ công bố dữ liệu và ảnh thành viên khi đã có sự đồng ý/cơ sở xử lý phù hợp.
2. Kiểm tra từng bài báo: tác giả, nơi xuất bản, năm, DOI, liên kết chính thức.
3. Điền trường, khoa, email, tên miền thật trong `settings`. Không dùng tên hoặc địa chỉ tự tạo.
4. Hoàn tất xác minh quyền sử dụng thương hiệu KEDVIRA và phê duyệt của đơn vị chủ quản.
5. Đây là **static website** không có CMS, database hoặc backend. Cập nhật dữ liệu bằng sửa file và upload lại `content.js`.
