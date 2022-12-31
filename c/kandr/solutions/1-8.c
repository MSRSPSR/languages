/* program to count blanks, tabs and newlines */
#include <stdio.h>

#define BLANK ' '
#define TAB '\t'
#define NEWLINE '\n'

int main(void)
{
	int c;
	int blanks, tabs, newlines;

	blanks = tabs = newlines = 0;
	while ((c = getchar()) != EOF)
	{
		if (c == BLANK)
			++blanks;
		else if (c == TAB)
			++tabs;
		else if (c == NEWLINE)
			++newlines;
	}

	printf("%d\t%d\t%d\n", blanks, tabs, newlines);
	return 0;
}