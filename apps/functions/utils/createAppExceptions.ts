export class AppConflict extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AppConflict';
  }
}

export class AppNoData extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'AppNoData';
  }
}
