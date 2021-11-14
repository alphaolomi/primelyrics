/**
 * Convert newline breaks with
 *
 * @param text String with using newlines
 * @returns {string} String with <br> instead of newline breaks
 */
export function nl2br(text: string): string {
    return text.replace(/(?:\r\n|\r|\n)/g, "<br />");
}
