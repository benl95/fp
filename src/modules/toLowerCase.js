function toLowerCase(obj) {
    const upperCase = Object.entries(obj).map(([key, val]) => [
        key,
        typeof val === 'string' ? val.toLowerCase() : val,
    ]);

    return Object.fromEntries(upperCase);
}

module.exports = { toLowerCase };
