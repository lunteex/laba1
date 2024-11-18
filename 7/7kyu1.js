function multiples(m, n) {
    const multiples = [];
    for (let i = 1; i <= m; i++) {
        multiples.push(i * n);
    }
    return multiples;
}