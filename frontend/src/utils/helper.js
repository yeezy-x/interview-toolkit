export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  return regex.test(email);
};

export const getInitials = (title) => {
  if (!title) return "";

  const words = title.split(" ").filter(Boolean);
  let initials = "";

  initials = words.slice(0, 2).map(word => word[0]).join("");

  return initials.toUpperCase();
};