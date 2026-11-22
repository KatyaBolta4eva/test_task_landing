export const validateName = (name) => {
  const trimmedName = name.trim();

  if (!trimmedName) {
    return "Введите имя";
  }

  if (trimmedName.length < 2) {
    return "Имя должно содержать минимум 2 символа";
  }

  if (
    !/^\p{L}[\p{L}\p{M}]*(?:[ '’-]\p{L}[\p{L}\p{M}]*)*$/u.test(trimmedName)
  ) {
    return "Введите корректное имя";
  }

  return "";
};

export const validatePhone = (phone) => {
  const phonePattern =
    /^(?:\+7|[78])[ -]?(?:\([1-9]\d{2}\)|[1-9]\d{2})[ -]?\d{3}[ -]?\d{2}[ -]?\d{2}$/;

  if (!phonePattern.test(phone.trim())) {
    return "Введите корректный номер телефона";
  }

  return "";
};
