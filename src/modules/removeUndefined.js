function removeUndefined(obj) {
    const notAnswered = Object.entries(obj).map(([key, val]) => [
        key,
        val === '' ? 'Geen antwoord' : val,
    ]);

    return Object.fromEntries(notAnswered);
}

module.exports = { removeUndefined };
