class ValidEmail {
  constructor(private email: string) {
    this.email = email;
  }
  valid(): void {
    if (this.email === undefined) {
      throw Object.assign(new Error("Email are required"), {
        code: 401,
      });
    }
    if (this.email.length < 5) {
      throw Object.assign(
        new Error("Email must be at least 5 characters long"),
        { code: 401 }
      );
    }
  }
}

export default ValidEmail;
