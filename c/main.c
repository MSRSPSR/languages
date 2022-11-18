/* Compile using gcc -lm */

/* Header files */
#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
#include <math.h>

/* Hash table header */
#include "hash.h"

/* Function declarations */
void dec2bin_helper(unsigned int);
unsigned int bin2dec(unsigned int);
void dec2bin(unsigned int);

int
main(void)
{
	/* Standard integer types */

	char min_char = CHAR_MIN;  
	char max_char = CHAR_MAX;  

	unsigned char max_uchar = UCHAR_MAX;
	
	short short_min_val = SHRT_MIN;
	short short_max_val = SHRT_MAX; 
	unsigned short short_max_uchar = USHRT_MAX;
	
	int min_int_val = INT_MIN;  
	int max_int_val = INT_MAX;  
	unsigned int max_uint_val = UINT_MAX;
	
	long min_long_val = LONG_MIN;  
	long max_long_val = LONG_MAX;  
	unsigned long max_ulong_val = ULONG_MAX;
	
	long long min_llong_val = LLONG_MIN;
	long long max_llong_val = LLONG_MAX; 
	unsigned long long max_ullong_val = ULLONG_MAX;
	
	printf("%d\n%d\n%hi\n%hi\n%hu\n%d\n%d\n%i\n%u\n%ld\n"
	       "%ld\n%lu\n%lld\n%lld\n%llu\n",
	       min_char, max_char, max_uchar, short_min_val,
	       short_max_val, short_max_uchar, min_int_val,
	       max_int_val, max_uint_val, min_long_val,
	       max_long_val, max_ulong_val, min_llong_val,
	       max_llong_val, max_ullong_val);

	/* Number representation under different radixes */

	printf("Binary: 0b");
	dec2bin_helper(11);

	printf("Octal: 0o%o\n", 11);
	printf("Hexadecimal: 0x%x\n", 11);

	printf("Decimal from binary: %d\n", bin2dec(11011));
	/* Integer types */
	// atoi
	// floating point arithmetic
	// atof

	/* Hash table data structure */
	hash_t *ht = new_hash();
	delhi(ht);
	
	// Qsort
	int arr[] = { 5, 1, 8, 4, 10, 3 };
	sort(arr);
	return (0);
}

/* Function definitions */

unsigned int
bin2dec(unsigned int n)
{
	unsigned int dec = 0;
	int i;
	for (i = 0; n; i++, n /= 10) {
		if (n % 10) dec += pow(2, i);
	}

	return dec;
}

void
dec2bin_helper(unsigned int n) {
	dec2bin(n);
	printf("\n");
}

void
dec2bin(unsigned int n)
{
	if (n >> 1) dec2bin(n >> 1);
	putchar((n & 1) ? '1' : '0');
}

// Sort in ascending order

int
compare_asc(const void * a, const void * b)
{
  return (*(int *) a - *(int *) b);
}
  
int
sort(int arr[])
{
  int n = sizeof(arr)/sizeof(arr[0]), i;
  
  qsort (arr, n, sizeof(arr[0]), compare_asc);
  for (i = 0; i < n; i++)
     printf("%d ", arr[i]);
  return 0;
}
