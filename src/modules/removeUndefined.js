function removeUndefined(obj) {
    const entries = Object.entries(obj);
    const notAnswered = entries.map(([key, val]) => [
        key,
        val === '' ? 'Geen antwoord' : val,
    ]);

    return Object.fromEntries(notAnswered);
}

module.exports = { removeUndefined };
