import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

// CMS descriptions are Markdown. Sanitize generated HTML before rendering it.
export function renderDescription(value) {
  if (typeof value !== 'string' || !value.trim()) return '';
  return sanitizeHtml(marked.parse(value, { async: false, breaks: true }), {
    allowedTags: ['p', 'br', 'strong', 'b', 'em', 'i', 's', 'del', 'ul', 'ol', 'li', 'a', 'blockquote', 'h2', 'h3', 'h4', 'code', 'pre', 'hr'],
    allowedAttributes: { a: ['href', 'title'] },
    allowedSchemes: ['https', 'http', 'mailto'],
    allowProtocolRelative: false,
  });
}
