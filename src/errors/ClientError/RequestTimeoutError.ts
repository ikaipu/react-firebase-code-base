class RequestTimeoutError implements Error {
  public name = 'RequestTimeout';

  public message = '';

  public response: {
    data: { code: string; message: string };
  };

  constructor() {
    this.response = {
      data: {
        code: '408',
        message: 'request timed out.',
      },
    };
  }
}

export default RequestTimeoutError;
