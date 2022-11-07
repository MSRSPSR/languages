#include <stdio.h>
#include <string.h>

int
palindrome(char *s, int idx, int len)
{
	if (idx == len || idx > len)
		return (1);
	else if (s[idx] != s[len - 1])
		return (-1);
	return (palindrome(s, idx + 1, len - 1));
}

int
main(void)
{
	printf("%d\n", palindrome("abba", 0, strlen("abba")));
	return (0);
}
