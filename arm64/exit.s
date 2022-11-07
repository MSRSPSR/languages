.global _start
_start:
	mov x0, #0	/* status = 0 */
	mov w8, #93 /* exit(int status) */
	svc 0
