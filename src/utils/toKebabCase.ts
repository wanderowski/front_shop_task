type KebabCaseFunctioType = (str: string) => string | undefined;

export const toKebabCase: KebabCaseFunctioType = (str: string) =>
  str
    ?.match(
      /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
    )
    ?.join("-")
    ?.toLowerCase();
