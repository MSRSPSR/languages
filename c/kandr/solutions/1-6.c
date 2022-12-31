#include <stdio.h>

int main(void)
{
	int c;


	while (c = getchar() != EOF)
		printf("%d\n", c);
	printf("%d\n", c);

	return 0;
}