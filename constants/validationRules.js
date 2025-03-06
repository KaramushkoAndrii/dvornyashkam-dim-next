export const validationRules = {
  name: {
    required: "You must write your name",
    minLength: {
      value: 2,
      message: "Name isn`t correct",
    },
  },
  surname: {
    required: "You must write your surname",
    minLength: {
      value: 2,
      message: "Surname isn`t correct",
    },
  },
  phone: {
    required: "Phone number is required",
    pattern: {
      value: /^\+?\d{10,15}$/,
      message: "Phone number isn’t correct",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Email isn’t correct",
    },
  },
};
