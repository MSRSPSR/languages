#include <stdio.h>

/* print Fahrenheit-Celsius table
		for fahrenheit = 0, 20 ... 300 */

int main(void)
{
	float fahr, celsius;
	int lower, upper, step;

	lower = 0;
	upper = 300;
	step = 20;

	fahr = lower;
	printf("THE MOST ELITE TEMPERATURE CONVERSION PROGRAM\n");
	printf("=============================================\n");
	printf("  F\t   C\n");
	while (fahr <= upper)
	{
		celsius = (5.0 / 9.0) * (fahr - 32.0);
		printf("%3.0f\t%6.1f\n", fahr, celsius);
		fahr = fahr + step;
	}

	return 0;
}