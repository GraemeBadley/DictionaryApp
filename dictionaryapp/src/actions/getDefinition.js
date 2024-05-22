export const getDefinition = async(word) => {
    try {
        const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + word);
        if (response.ok) {
            return await response.json();
        }
    } catch (error) {
        return null;
    }
}