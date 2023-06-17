// item.model.ts
export class Chicken {
    constructor(
        public name: string,
        public birthday: Date,
        public weight: number,
        public steps: number = 0,
        public isRunning: boolean = false
    ) {}
  }
  