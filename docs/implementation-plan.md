# NIPPON PET CARE - Kế hoạch triển khai

## 1. Định vị sản phẩm

NIPPON PET CARE là nền tảng **Pet Health SaaS + Hospital CRM + QR/Microchip Identity System** cho chủ nuôi, bác sĩ thú y và đội vận hành bệnh viện.

Trọng tâm không phải website giới thiệu, mà là hệ thống dashboard all-in-one gồm:

- Hồ sơ thú cưng thông minh.
- Microchip ISO 15 số và QR public/private.
- Sổ bệnh án điện tử.
- Lịch khám, tiêm phòng, tẩy giun, spa/grooming.
- Chatbox AI/tư vấn bác sĩ.
- Bảng tin y tế, sổ tay chăm sóc, ưu đãi, khảo sát.
- Cộng đồng, tìm thú cưng thất lạc, marketplace, review map ở phase sau.

## 2. Stack kỹ thuật MVP

- Frontend/full-stack: Next.js 16 App Router, TypeScript, Tailwind CSS 4.
- Database đề xuất: PostgreSQL.
- ORM đề xuất: Prisma.
- Auth đề xuất: Auth.js/NextAuth hoặc JWT custom theo RBAC.
- Storage đề xuất: Cloudinary/S3-compatible cho ảnh pet, xét nghiệm, phim chụp.
- Realtime/chat đề xuất: Socket.IO, Pusher hoặc Ably ở phase realtime.
- Notification phase đầu: in-app/email; phase sau: SMS/Zalo OA/push notification.
- Map/GPS phase sau: Google Maps API hoặc Mapbox.

## 3. Role hệ thống

- PUBLIC: người quét QR không đăng nhập.
- PET_OWNER: chủ thú cưng.
- DOCTOR: bác sĩ thú y.
- RECEPTIONIST: lễ tân/điều phối lịch.
- GROOMER: nhân viên spa/grooming.
- CUSTOMER_SUPPORT: nhân viên chat/chăm sóc khách hàng.
- MODERATOR: kiểm duyệt cộng đồng/marketplace.
- ADMIN: quản trị hệ thống.

## 4. MVP 6-8 tuần

### Sprint 1 - Foundation

- Khởi tạo Next.js + TypeScript + Tailwind.
- Dựng layout SaaS/Medical: Header, Sidebar, Main Content, Floating Chatbox.
- Tạo design tokens, UI primitives, mock dashboard.
- Chuẩn hóa cấu trúc thư mục.

### Sprint 2 - Auth & RBAC

- Đăng ký, đăng nhập, đăng xuất.
- Session/middleware bảo vệ route.
- Phân quyền PET_OWNER, DOCTOR, ADMIN.
- Trang profile cá nhân.

### Sprint 3 - Pet Profile + Microchip/QR

- CRUD hồ sơ thú cưng.
- Mã microchip ISO 15 chữ số.
- QR token duy nhất.
- Trang public `/qr/[token]`.
- Cấu hình dữ liệu công khai/bảo mật.
- Nút báo tìm thấy thú cưng.

### Sprint 4 - Digital Health Record

- Hồ sơ bệnh án điện tử.
- Lịch sử khám.
- Chẩn đoán, ghi chú bác sĩ.
- Dị ứng, bệnh mãn tính.
- Đơn thuốc cơ bản.
- Upload tài liệu y tế nếu storage sẵn sàng.

### Sprint 5 - Appointment & Reminder

- Đặt lịch khám.
- Chọn pet, dịch vụ, ngày/giờ, triệu chứng.
- Admin/bác sĩ xác nhận/hủy/hoàn thành.
- Lịch tiêm, tẩy giun, tái khám.
- Notification nội bộ.

### Sprint 6 - Chatbox & Announcements

- Floating chatbox.
- FAQ bot rule-based.
- Gửi tin nhắn đến bác sĩ/admin.
- Quản lý hội thoại cơ bản.
- Bảng tin/thông báo y tế.

### Sprint 7 - Admin Dashboard

- Quản lý user.
- Quản lý pet.
- Quản lý lịch hẹn.
- Quản lý bệnh án.
- Quản lý thông báo.
- Quản lý chat.
- Thống kê cơ bản.

### Sprint 8 - QA & Deploy

- Test responsive.
- Test phân quyền.
- Test QR public/private.
- Test validate form.
- Kiểm tra lint/build.
- Deploy staging.

## 5. Phase 2

- Knowledge Base/sổ tay chăm sóc.
- Interactive onboarding microchip/QR.
- Spa & grooming nâng cao.
- Voucher, loyalty N-Point.
- Khảo sát NPS.
- SMS/Zalo notification.
- Upload cloud đầy đủ cho xét nghiệm, X-quang, siêu âm.

## 6. Phase 3

- Diễn đàn cộng đồng.
- Tìm chó/mèo thất lạc với GPS bán kính 5km.
- Marketplace phụ kiện/thức ăn.
- Review Map phòng khám, khách sạn thú cưng, pet cafe.
- Đặt phòng khách sạn thú cưng.
- AI bot nâng cao.
- Telehealth realtime.
- Đa ngôn ngữ.
- Mobile app/PWA.

## 7. Bảo mật bắt buộc

- Chủ nuôi chỉ xem pet của mình.
- Public QR chỉ hiển thị dữ liệu tối thiểu.
- Bệnh án, đơn thuốc, xét nghiệm chỉ hiển thị cho chủ sở hữu/bác sĩ có quyền.
- Audit log cho hành động xem/sửa/xóa dữ liệu y tế.
- Validate dữ liệu bằng schema.
- Không commit secret/API key.

## 8. Thứ tự triển khai code tiếp theo

1. Tách dashboard hiện tại thành components.
2. Tạo route groups: `(app)`, `(auth)`, `(public)`.
3. Tạo Prisma schema ban đầu.
4. Cài và cấu hình auth.
5. Làm CRUD pet profile.
6. Làm QR public page.
7. Làm medical record.
8. Làm appointment.
9. Làm chatbox cơ bản.
10. Làm admin dashboard.
