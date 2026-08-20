export const navItems = [
  { href: "/dashboard", icon: "🏠", label: "Tổng quan" },
  { href: "/profile", icon: "👤", label: "Hồ sơ chủ nuôi" },
  { href: "/pets", icon: "🐾", label: "Thú cưng của tôi" },
  { href: "/lost-pets", icon: "🚨", label: "Tìm thú thất lạc" },
];

export const owner = {
  name: "Quang Hồng",
  email: "quanghong@example.com",
  phone: "0987 654 321",
  area: "Cầu Giấy, Hà Nội",
  address: "Dịch Vọng, Cầu Giấy, Hà Nội",
  emergencyContact: "0912 345 678",
};

export const pets = [
  {
    id: "mochi",
    name: "Mochi",
    species: "Mèo",
    breed: "Anh lông ngắn",
    age: "2 tuổi",
    weight: "4.8kg",
    gender: "Cái",
    color: "Xám xanh",
    microchip: "392849102938475",
    qrToken: "NPC-MOCHI-2026",
    status: "safe",
    healthNote: "Dị ứng Penicillin, cần báo trước khi dùng thuốc.",
    identifyingMarks: "Mắt màu vàng, có đốm trắng nhỏ ở ngực.",
    lastSeenArea: "Dịch Vọng, Cầu Giấy",
    lostDescription: "",
    image: "🐱",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    id: "ken",
    name: "Ken",
    species: "Chó",
    breed: "Shiba Inu",
    age: "3 tuổi",
    weight: "9.6kg",
    gender: "Đực",
    color: "Vàng nâu",
    microchip: "392849102938476",
    qrToken: "NPC-KEN-2026",
    status: "lost",
    healthNote: "Da nhạy cảm, không cho ăn đồ lạ.",
    identifyingMarks: "Đeo vòng cổ màu xanh lá, đuôi cuộn tròn.",
    lastSeenArea: "Công viên Nghĩa Đô, Cầu Giấy",
    lostDescription: "Đi lạc lúc khoảng 18:30, thân thiện nhưng dễ hoảng khi có tiếng xe lớn.",
    image: "🐕",
    gradient: "from-orange-400 to-amber-500",
  },
];

export const foundReports = [
  {
    petName: "Ken",
    time: "20 phút trước",
    location: "Gần cổng công viên Nghĩa Đô",
    message: "Tôi thấy một bé Shiba đeo vòng xanh chạy về hướng đường Nguyễn Văn Huyên.",
  },
  {
    petName: "Mochi",
    time: "Hôm qua",
    location: "Dịch Vọng",
    message: "Lượt quét QR kiểm tra vòng cổ khi chủ đưa bé đi dạo.",
  },
];

export const stats = [
  ["Thú cưng", "2", "Hồ sơ đang quản lý", "🐾"],
  ["QR đã tạo", "2", "Mỗi bé có một mã riêng", "🪪"],
  ["Đang thất lạc", "1", "Cần cộng đồng hỗ trợ", "🚨"],
  ["Tin báo", "2", "Lượt quét và báo vị trí", "📍"],
];