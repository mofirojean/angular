import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { Chat } from './chat.model';
import { FormsModule } from "@angular/forms";
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-chat',
  imports: [FormsModule, MarkdownComponent],
  templateUrl: './chat.component.html',
  styles: `
    textarea {
      max-height: 200px;
      min-height: 40px; 
    }
  `
})
export class ChatComponent {
  prompt: string = ""
  chatHistory: Chat[] = [];

  adjustTextareaHeight(textarea: HTMLTextAreaElement) {
    textarea.style.height = "auto"; // Reset height to calculate new height
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`; // Grow but limit to 200px
  }

  constructor(private chatService: ChatService) {
    this.chatService.getMessageHistory().subscribe((message) => {
      if (message) {
        this.chatHistory.push(message)
      }
    })
  }

  onSubmit() {
    if (this.prompt) {
      this.chatService.generateText(this.prompt);
      this.prompt = "";
    }
  }
}
