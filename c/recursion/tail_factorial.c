#include <stdio.h>

/*
unsigned long
factorial(int n)
{
	if (n == 0)
		return 1;
	else
		return n * factorial(n - 1);
}
*/

unsigned long
tail_factorial(int n, int k)
{
	if (n == 0)
		return k;
	else
		return tail_factorial(n - 1, n * k);
}

int
main(void)
{
//	printf("%lu\n", factorial(5));
	printf("%lu\n", tail_factorial(5, 1));
}
