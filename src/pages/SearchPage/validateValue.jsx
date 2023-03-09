export const validateValue = (value) =>
    !value ||
    value === "1" ||
    value === "2" ||
    value === " " ||
    value === "none" ||
    value === "0" ||
    value === " 0";
