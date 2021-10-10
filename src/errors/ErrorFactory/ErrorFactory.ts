class ErrorFactory {
  static create = (
    message: string,
    params: { [key: string]: string } = {},
  ): string => {
    let errorMessage = message;

    errorMessage = Object.keys(params).reduce((msg, key) => {
      return msg.replace(`%%${key}%%`, params[key]);
    }, errorMessage);

    return errorMessage;
  };
}

export default ErrorFactory;
