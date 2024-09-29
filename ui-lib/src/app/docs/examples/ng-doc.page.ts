import {NgDocPage} from '@ng-doc/core';
import {CopyButtonComponent, UiControlsModule} from "ui-controls";

const ExamplesPage: NgDocPage = {
	title: `Examples`,
	mdFile: './index.md',
  imports: [ UiControlsModule ],
  demos: { CopyButtonComponent }
};

export default ExamplesPage;
