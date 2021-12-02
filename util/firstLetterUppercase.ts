// Método helper para transformar a primeira
// letra de uma string em maiúscula
type firstLetterUppercaseType = (a: string) => string;

const firstLetterUppercase: firstLetterUppercaseType = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default firstLetterUppercase;
