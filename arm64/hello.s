.global _start
.align 2
_start:
	mov x0, #1
	adr x1, hello	
	mov x2, len
	mov w8, #64 /* write(int fd, const void *buf, size_t count) */
	svc 0

	mov x0, #0
	mov w8, #93 /* exit(int status) */
	svc 0

.data
hello:
	.ascii "Hello, world!\n"

len = . - hello
