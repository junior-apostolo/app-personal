export function getFormatText(text: string): string {
    if (text === null || text === undefined) {
        return "Nome não fornecido";
    }

    const textFormat: string[] = text.split(' ');

    if (textFormat.length === 1) {
        return text;
    } else {

        if (text.length > 1) {
            return text.slice(0,50) + '...';
        }
        return text;
    }
}