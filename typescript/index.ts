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

function bubbleSort(arr: number[]): void {
	for (let i = 0; i < arr.length; i++) {
		for (j = 0; j < arr.length - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				const tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
			}
		}
	}
}

interface LinkedList<T> {
	get length(): number;
	insertAt(item: T, index: number): void;
	remove(item: T): T | undefined;
	removeAt(index: number): T | undefined;
	append(item: T): void;
	prepend(item: T): void;
	get(index: number): T | undefined;
}

