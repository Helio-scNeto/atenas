class ValidMessage {
    constructor(private message: string) {
      this.message = message;
    }
    valid(): void {
      if (this.message === undefined) {
        throw Object.assign(new Error("Message are required"), {
          code: 401,
        });
      }
      if (this.message.length < 5) {
        throw Object.assign(
          new Error("Message must be at least 5 characters long"),
          { code: 401 }
        );
      }
    }
  }
  
  export default ValidMessage;
  