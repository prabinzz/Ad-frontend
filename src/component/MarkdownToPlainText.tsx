interface props {
  markdownText: string;
}
const MarkdownToPlainText = ({ markdownText }: props) => {
  const plainText = markdownText
    // Remove headers
    .replace(/^#+\s*(.*?)\s*#*$/gm, "$1\n")
    // Remove lists
    .replace(/^[\-*+]\s+(.*)$/gm, "$1\n")
    // Remove blockquotes
    .replace(/^\s*>\s*(.*?)\s*$/gm, "$1\n")
    // Remove horizontal rules
    .replace(/^\s*[-*]{3,}\s*$/gm, "")
    // Remove inline code
    .replace(/`([^`]+)`/g, "$1")
    // Remove links
    .replace(/\[([^\]]*?)\]\([^)]*?\)/g, "$1")
    // Remove images and alt text
    .replace(/!\[([^\]]*?)\]\([^)]*?\)/g, "");

  return <div>{plainText}</div>;
};

export default MarkdownToPlainText;
