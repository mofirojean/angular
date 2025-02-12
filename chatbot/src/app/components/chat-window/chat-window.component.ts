import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  imports: [],
  templateUrl: './chat-window.component.html',
  styles: `
    textarea {
    max-height: 200px;
    min-height: 40px; 
    }
  `
})
export class ChatWindowComponent {
  adjustTextareaHeight(textarea: HTMLTextAreaElement) {
    textarea.style.height = "auto"; // Reset height to calculate new height
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`; // Grow but limit to 200px
  }
}
