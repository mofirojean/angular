import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { BehaviorSubject, Observable } from 'rxjs';
import { Chat } from './chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  generativeAi: GoogleGenerativeAI;
  messageHistory: BehaviorSubject<Chat | null> = new BehaviorSubject<Chat | null>(null)

  constructor() {
    this.generativeAi = new GoogleGenerativeAI('GEMINI_API_KEY');
  }

  async generateText(prompt: string) {
    const model = this.generativeAi.getGenerativeModel({ model: 'gemini-pro' });
    this.messageHistory.next({
      from: "user",
      message: prompt
    });

    const result = (await model.generateContent(prompt)).response.text();
    this.messageHistory.next({
      from: "bot",
      message: result
    });
  }

  getMessageHistory(): Observable<Chat | null> {
    return this.messageHistory.asObservable();
  }
}
