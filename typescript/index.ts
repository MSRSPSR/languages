function linearSearch(haystack: number[], needle: number): boolean {
	for (let i = 0; i < haystack.length; ++i) {
		if (haystack[i] == needle) {
			return true;
		}
	}

	return false;
}

function binarySearch(haystack: number[], needle: number): boolean {
	let lo = 0;
	let hi = haystack.length;

	do {
		const m = Math.floor(lo + (hi - lo) / 2);
		const v = haystack[m];

		if (v === needle) {
			return true;
		} else if (v > needle) {
			hi = m;
		} else {
			lo = m + 1;
		}
	} while (lo < hi);

	return false;
}
