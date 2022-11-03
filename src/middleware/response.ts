class CustomResponse {
  status: number | undefined;
  message: string | undefined;
  data: [] | undefined;

  successful(data?: any) {
    this.status = 200;
    this.message = "successful";
    this.data = data || null;
    return this;
  }

  badRequest() {
    this.status = 400;
    this.message = "Bad Request";
    this.data = undefined;
    return this;
  }

  serverError() {
    this.status = 500;
    this.message = "Server Error";
    this.data = undefined;
    return this;
  }

  notFound() {
    this.status = 404;
    this.message = "Not found";
    this.data = undefined;
    return this;
  }

  response() {
    return {
      status: this.status,
      message: this.message,
      data: this.data,
    };
  }
}

export default CustomResponse;
