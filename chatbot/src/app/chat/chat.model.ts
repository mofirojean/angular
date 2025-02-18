export class Chat {
    constructor(
        public from: "user" | "bot",
        public message: string
    ) {}
}
