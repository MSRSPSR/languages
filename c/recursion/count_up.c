#include <stdio.h>

void
count_up(int c)
{
	if (c == 0)
		return;
	count_up(c - 1);
	printf("%d\n", c);
}

/*
void
count_up_tail_recursive(int n, int k)
{
	if (n < 1)
		return;
	printf("%d\n", k);
	count_up_tail_recursive(n - 1, k + 1);
}
*/

int
main(void)
{
	count_up(5);

	return 0;
}
