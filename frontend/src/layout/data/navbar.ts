export const dropdownMenuItems1 = [
  { text: "ملفي الشخصي", url: "/profile" },
  { text: "تسجيل الدخول", url: "/login" },
  { text: "إنشاء حساب", url: "/signup" },
];

export const dropdownMenuItems2 = [
  { text: "ملفي الشخصي", url: "/profile" },
  { text: "الحلقة", url: (id: number | string): string => `helak?id=${id}` },
  { text: "تسخيل الخروج", url: "/logout" },
];

export const navbarLinks = [
  { text: "الصفحة الرئيسة", url: "/" },
  { text: "حلقات التحفيظ", url: "/helak" },
  { text: "حول حِلَق", url: "/about" },
];
