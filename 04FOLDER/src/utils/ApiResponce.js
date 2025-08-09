class ApiResponse {
  constructor(data = null, message = "Success", statusCode = 200) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
  }
}

module.exports = ApiResponse;
