const { Plugin } = require('obsidian');

const HIGHLIGHT_COLORS = [
  { name: 'Gelb', value: '#ffd54f' },
  { name: 'Grün', value: '#81c995' },
  { name: 'Blau', value: '#8ab4f8' },
  { name: 'Rot', value: '#f28b82' },
  { name: 'Orange', value: '#fbbc04' },
  { name: 'Violett', value: '#d7aefb' },
];

const TEXT_COLORS = [
  { name: 'Rot', value: '#e53935' },
  { name: 'Orange', value: '#fb8c00' },
  { name: 'Gelb', value: '#fdd835' },
  { name: 'Grün', value: '#43a047' },
  { name: 'Blau', value: '#1e88e5' },
  { name: 'Violett', value: '#8e24aa' },
  { name: 'Grau', value: '#757575' },
];

const SPAN_RE = /^<span style="[^"]*">([\s\S]*)<\/span>$/;

module.exports = class ColorTextPlugin extends Plugin {
  onload() {
    this.registerEvent(
      this.app.workspace.on('editor-menu', (menu, editor) => {
        const selection = editor.getSelection();
        if (!selection) return;

        menu.addItem((item) => {
          item.setTitle('Hervorhebungsfarbe').setIcon('highlighter');
          const sub = item.setSubmenu();
          HIGHLIGHT_COLORS.forEach((color) => {
            sub.addItem((subItem) =>
              subItem.setTitle(color.name).onClick(() =>
                this.applyStyle(editor, selection, `background-color: ${color.value}`)
              )
            );
          });
          sub.addSeparator();
          sub.addItem((subItem) =>
            subItem.setTitle('Entfernen').onClick(() => this.removeStyle(editor, selection))
          );
        });

        menu.addItem((item) => {
          item.setTitle('Textfarbe').setIcon('palette');
          const sub = item.setSubmenu();
          TEXT_COLORS.forEach((color) => {
            sub.addItem((subItem) =>
              subItem.setTitle(color.name).onClick(() =>
                this.applyStyle(editor, selection, `color: ${color.value}`)
              )
            );
          });
          sub.addSeparator();
          sub.addItem((subItem) =>
            subItem.setTitle('Entfernen').onClick(() => this.removeStyle(editor, selection))
          );
        });
      })
    );
  }

  applyStyle(editor, selection, style) {
    const match = selection.match(SPAN_RE);
    const inner = match ? match[1] : selection;
    editor.replaceSelection(`<span style="${style}">${inner}</span>`);
  }

  removeStyle(editor, selection) {
    const match = selection.match(SPAN_RE);
    editor.replaceSelection(match ? match[1] : selection);
  }
};
