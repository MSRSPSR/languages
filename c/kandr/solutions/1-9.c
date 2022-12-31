/*
 * program to copy input to output, replacing a string of one or more blanks by a single blank
 */

#include <stdio.h>

#define BLANK ' '

int main(void)
{
	int c;
	int state = 0;

	while ((c = getchar()) != EOF)
	{
		if (c == BLANK && state == 0)
		{
			putchar(c);
			state = 1;
		} 

		else if (c != BLANK)
		{
			state = 0;
			putchar(c);
		}
	}

	return 0;
}