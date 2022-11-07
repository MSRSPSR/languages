#include <stdio.h>

void
count_down(int n)
{
// start:
	if (n == 0)
		return;
	printf("%d\n", n);
	count_down(n - 1); // Tail recursion
/* n = n - 1;
 * goto start
 */
}

int
main(void)
{
	count_down(5);

	return 0;
}
