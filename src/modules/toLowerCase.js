function toLowerCase(obj) {
    const entries = Object.entries(obj);
    const upperCase = entries.map(([key, val]) => [
        key,
        typeof val === 'string' ? val.toLowerCase() : val,
    ]);

    return Object.fromEntries(upperCase);
}

module.exports = { toLowerCase };
