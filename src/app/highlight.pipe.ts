import { Pipe, PipeTransform } from '@angular/core';
import hljs from 'highlight.js/lib/core';
import csharp from 'highlight.js/lib/languages/csharp';

hljs.registerLanguage('csharp', csharp);

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, language: string = 'csharp'): string {
    if (!value) {
      return '';
    }

    // Highlight the code
    const highlightedCode = hljs.highlight(value, { language }).value;

    // Split the highlighted code by lines
    const lines = highlightedCode.split('\n');

    // Add line numbers to each line
    const numberedLines = lines.map((line, index) => {
      return `<span class="line-number">${index + 1}</span> ${line}`;
    });

    // Join the lines back with <br> and return the result
    return numberedLines.join('\n');
  }
}
