class ApiError extends Error {
  constructor(message, statusCode, errors = [], statck = "") {
    super(message);
    this.statusCode = statusCode;
    this.errors = errors;
    this.stack = stack; 
    this.data = null; // Initialize data to null
    this.message = message || "An error occurred";
    this.success = false; // Default to false for errors

    if(statck){
      this.stack = statck; // Use provided stack trace if available
    }else {
      Error.captureStackTrace(this, this.constructor); // Capture stack trace if not provided
    }

  }
}

module.exports = ApiError;