import { Component, OnInit } from '@angular/core';
import { EditorService } from '../../services/editor.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styles: ``
})
export class EditorComponent implements OnInit {
  content: string = '';

  constructor(private editorService: EditorService) {}

  ngOnInit(): void {
    this.getContent();
  }

  private async getContent() {
    this.content = await this.editorService.getContent();
  }

  saveContent(content: string) {
    this.editorService.setContent(content);
  }
}
