# Cấu trúc trang Thành viên và Công trình

## 1. Hai trang đã được tách riêng

| Trang | File | Kiểu hiển thị | Dữ liệu chính |
|---|---|---|---|
| Thành viên nhóm nghiên cứu | `people.html` | **List** một cột | `settings.people` |
| Công trình khoa học / Publications | `publications.html` | **List** một cột | `settings.publications` |

Trang chủ `index.html` chỉ có hai hàng liên kết sang hai trang trên. Menu desktop và mobile cũng trỏ tới hai file này, không còn anchor `#people` hoặc `#publications`.

## 2. Nguyên tắc placeholder

Khi hai mảng dữ liệu còn trống, mỗi trang hiển thị hàng **DỮ LIỆU MẪU / SAMPLE DATA**, có ngoặc vuông cho tên/tiêu đề, không giả định nhân sự hoặc bài báo có thật. Placeholder được định nghĩa bằng hai ngôn ngữ trong `directory.people.samples` và `directory.publications.samples` thuộc `vi` và `en` của `content.js`.

Khi có ít nhất một bản ghi thật trong mảng tương ứng, toàn bộ placeholder của trang đó **biến mất**, chỉ còn bản ghi thật. Nếu cả mảng rỗng, các hàng mẫu trở lại.

## 3. Cập nhật thành viên

Mở `content.js`, sửa `settings.people`:

```js
people: [
  {
    name: "Họ tên đã xác nhận",
    role_vi: "Giảng viên / Nghiên cứu viên",
    role_en: "Faculty / Researcher",
    affiliation_vi: "Khoa và trường (đã phê duyệt)",
    affiliation_en: "Faculty and university (approved)",
    interests_vi: "Knowledge Graph, Semantic Retrieval",
    interests_en: "Knowledge Graph, Semantic Retrieval",
    profile: "https://orcid.org/....",
    image: "assets/people/thanh-vien.jpg"
  }
],
```

`name` là trường bắt buộc. Các trường còn lại là tùy chọn. `profile` có thể là URL ORCID, trang cá nhân đại học, Google Scholar hoặc trang nghiên cứu đã xác minh; liên kết phải là HTTP(S). `image` nhận URL HTTP(S) hoặc đường dẫn cục bộ chính xác dưới `assets/people/`.

Thứ tự hiển thị theo thứ tự mảng; có thể đưa Trưởng nhóm lên đầu bằng cách đặt ở bản ghi đầu tiên. Layout tự sinh avatar chữ cái khi không có ảnh.

## 4. Cập nhật công trình

Mở `content.js`, sửa `settings.publications`:

```js
publications: [
  {
    title: "Verified paper title",
    authors: "Author One, Author Two",
    venue: "Journal / Conference name",
    year: 2026,
    type: "conference",
    doi: "10.xxxx/xxxxx",
    url: "https://doi.org/10.xxxx/xxxxx"
  }
],
```

- `title` là trường bắt buộc, nội dung phải là tên thật đã đối chiếu.
- `type` chấp nhận `journal`, `conference`, `preprint`, `other`; mặc định `other`.
- `year` sắp xếp giảm dần (công trình mới nhất trước).
- `url` là URL HTTP(S) an toàn. Khi bỏ trống URL, website tự tạo liên kết DOI nếu DOI có định dạng hợp lệ.
- Khi thiếu DOI, không tự tạo giá trị giả.

## 5. Nội dung song ngữ

Các tiêu đề, placeholder, chú giải và nút của trang nằm ở:

```text
content.js
  vi.directory.people
  vi.directory.publications
  en.directory.people
  en.directory.publications
  vi.homeLinks
  en.homeLinks
```

Những dữ liệu thật như tên người, tên bài báo, DOI không được dịch tùy tiện. Chỉ các trường mô tả vai trò, đơn vị và chuyên môn có `_vi` / `_en` để kiểm soát song ngữ.

## 6. Upload sau khi chỉnh

- Khi chỉ đổi dữ liệu, upload lại **`content.js`**.
- Khi sửa bố cục/danh sách, upload lại `people.html`, `publications.html`, `styles.css`, `main.js` theo file thay đổi.
- Khi phát hành bản v2 lần đầu, upload **toàn bộ ZIP** và ghi đè file cũ để tránh menu và JavaScript lệch phiên bản.
