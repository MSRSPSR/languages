#include <stdio.h>

int main(void)
{
	int fahr;

	for (fahr = 0; fahr <= 300; fahr = fahr + 20)
		printf("%3d\t%6.2f\n", fahr, (5.0 / 9.0) * (fahr - 32));

	return 0;
}