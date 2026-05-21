

// Function mostly from Google's Search Results AI thingamabob.
// Added string cast manually because there were issues in actually rendering certain things.
// Some passed items were not strings, and I couldn't find them.
export default function fixQuotes(text: string): string {

    let fixedText = String(text);

    return fixedText
    .replace(/(^|\s)"/g, '$1“') // Left double quote at the start of a word/string
    .replace(/"/g, '”')         // Right double quote elsewhere
    .replace(/(^|\s)'/g, '$1‘') // Left single quote at the start of a word/string
    .replace(/'/g, '’');        // Right single quote elsewhere
}