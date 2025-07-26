
export class CustomCard {
  constructor({ title, width, height, children }) {
    this.title = title;
    this.width = width;
    this.height = height;
    this.children = children;
  }

  render() {
    return \`<svg width="\${this.width}" height="\${this.height}" xmlns="http://www.w3.org/2000/svg">
      <style>
        .title { font: bold 16px sans-serif; }
        .stat { font: 14px monospace; }
      </style>
      <text x="25" y="25" class="title">\${this.title}</text>
      \${this.children}
    </svg>\`;
  }
}
