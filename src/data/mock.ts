export const navItems = [
  { href: "/dashboard", icon: "🏠", label: "Tổng quan" },
  { href: "/pets", icon: "🐾", label: "Thú cưng của tôi" },
  { href: "/microchip-qr", icon: "🪪", label: "Microchip & QR" },
  { href: "/medical-records", icon: "🩺", label: "Hồ sơ y tế" },
  { href: "/vaccinations", icon: "💉", label: "Tiêm phòng" },
  { href: "/appointments", icon: "📅", label: "Lịch khám" },
  { href: "/grooming", icon: "✂️", label: "Spa & Grooming" },
  { href: "/announcements", icon: "📣", label: "Bảng tin y tế" },
  { href: "/knowledge", icon: "📚", label: "Sổ tay chăm sóc" },
  { href: "/loyalty", icon: "🎁", label: "Ưu đãi & N-Point" },
  { href: "/surveys", icon: "⭐", label: "Khảo sát NPS" },
  { href: "/community", icon: "💬", label: "Cộng đồng" },
  { href: "/lost-pets", icon: "🚨", label: "Tìm thú thất lạc" },
  { href: "/marketplace", icon: "🛒", label: "Marketplace" },
  { href: "/review-map", icon: "🗺️", label: "Review Map" },
  { href: "/chat", icon: "👨‍⚕️", label: "Chat bác sĩ" },
];

export const pets = [
  {
    id: "mochi",
    name: "Mochi",
    species: "Mèo",
    breed: "Anh lông ngắn",
    age: "2 tuổi",
    weight: "4.8kg",
    gender: "Cái",
    sterilized: "Đã triệt sản",
    microchip: "392849102938475",
    qrToken: "NPC-MOCHI-2026",
    alert: "Dị ứng Penicillin",
    status: "Cần tiêm nhắc 5 ngày tới",
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "ken",
    name: "Ken",
    species: "Chó",
    breed: "Shiba Inu",
    age: "3 tuổi",
    weight: "9.6kg",
    gender: "Đực",
    sterilized: "Chưa triệt sản",
    microchip: "392849102938476",
    qrToken: "NPC-KEN-2026",
    alert: "Theo dõi da nhạy cảm",
    status: "Grooming hôm nay 15:30",
    color: "from-orange-500 to-amber-500",
  },
];

export const stats = [
  ["Pet Profiles", "128", "Hồ sơ đang quản lý", "🐾"],
  ["QR Scans", "2.4k", "Lượt quét tháng này", "🪪"],
  ["Appointments", "36", "Lịch sắp tới", "📅"],
  ["NPS", "92%", "Hài lòng dịch vụ", "⭐"],
];

export const appointments = [
  { time: "09:00", title: "Khám tổng quát cho Mochi", meta: "BS. Minh • Phòng 2", status: "Đã xác nhận" },
  { time: "11:30", title: "Nhắc tẩy giun định kỳ cho Ken", meta: "Tự động nhắc", status: "Sắp tới" },
  { time: "15:30", title: "Spa & vệ sinh tai/móng cho Ken", meta: "Groomer Lan", status: "Đã xác nhận" },
];

export const medicalRecords = [
  { pet: "Mochi", date: "18/08/2026", diagnosis: "Viêm da dị ứng nhẹ", doctor: "BS. Minh", note: "Theo dõi 7 ngày, tránh đổi thức ăn đột ngột." },
  { pet: "Ken", date: "12/08/2026", diagnosis: "Khám tổng quát định kỳ", doctor: "BS. Hằng", note: "Sức khỏe ổn định, cần vệ sinh tai hàng tuần." },
];

export const vaccinations = [
  { pet: "Mochi", vaccine: "Dại", due: "25/08/2026", status: "Sắp đến hạn" },
  { pet: "Ken", vaccine: "7 bệnh", due: "04/09/2026", status: "Đã lên lịch" },
  { pet: "Mochi", vaccine: "Tẩy giun", due: "30/08/2026", status: "Nhắc tự động" },
];

export const articles = [
  { title: "Cẩm nang phòng sốc nhiệt mùa hè", category: "Cấp cứu tại nhà", read: "5 phút" },
  { title: "Dinh dưỡng chuẩn Nhật cho mèo trưởng thành", category: "Dinh dưỡng", read: "7 phút" },
  { title: "Hướng dẫn kích hoạt microchip và quét QR", category: "Onboarding", read: "3 phút" },
];

export const vouchers = [
  { title: "Giảm 20% Spa/Grooming", code: "NIPPONSPA20", expire: "31/08/2026" },
  { title: "Tặng khám tổng quát lần đầu", code: "FIRSTCARE", expire: "15/09/2026" },
];

export const communityPosts = [
  { author: "Mochi • Mèo Anh lông ngắn • 2 tuổi", title: "Mèo bị ngứa sau khi đổi hạt, nên xử lý thế nào?", replies: 18 },
  { author: "Ken • Shiba Inu • 3 tuổi", title: "Kinh nghiệm chăm sóc da nhạy cảm cho Shiba", replies: 27 },
];

export const lostPets = [
  { name: "Bông", area: "Mỹ Đình 1", radius: "5km", time: "20 phút trước" },
  { name: "Milo", area: "Cầu Giấy", radius: "5km", time: "1 giờ trước" },
];

export const marketplaceItems = [
  { name: "Lồng vận chuyển size M", price: "350.000đ", condition: "Đã dùng 2 tháng" },
  { name: "Hạt mèo urinary care", price: "Liên hệ", condition: "Còn nguyên seal" },
];

export const reviewPlaces = [
  { name: "Bệnh viện Thú y Mỹ Đình", type: "Phòng khám", rating: "4.9", distance: "1.2km" },
  { name: "Pet Cafe Green Paw", type: "Pet cafe", rating: "4.7", distance: "2.8km" },
];

export const adminStats = [
  ["Người dùng", "1,248"],
  ["Pet Profiles", "1,892"],
  ["Lịch chờ xác nhận", "24"],
  ["Chat đang mở", "16"],
];