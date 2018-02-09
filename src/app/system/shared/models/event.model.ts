export class WFMEvent {
  constructor(
    private type: string,
    private amount: number,
    private category: number,
    private date: string,
    private description: string,
    private id?: number,
  ) {
  }
}