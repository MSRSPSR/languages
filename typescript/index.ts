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

type Node<T> = {
	value: T,
	next?: Node<T>,
}

export default class Queue<T> {
	public length: number;
	private head?: Node<T>;
	private tail?: Node<T>;

	constructor() {
		this.head = this.tail = undefined;
		this.length = 0;
	}

	enqueue(item: T): void {
		const node = { value: item } as Node<T>
		this.length++;
		if (!this.tail)
		{
			this.tail = this.head = { value: item } as Node<T>;
			return;
		}

		this.tail.next = node;
		this.tail = node;
		
	}

	deque(): T | undefined {
		if (this.head)
		{
			this.length--;
			const head = this.head;
			this.head = this.head.next;
			head.next = undefined;
			if (this.length === 0)
				this.tail = undefined; 
			return head.value;
		}
		return undefined;
	}

	peek(): T | undefined {
		return this.head?.value;
	}
}
