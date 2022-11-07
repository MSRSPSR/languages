typedef struct
{
  char *k;
  char *v;
} kv;

typdef struct
{
  int sz;
  int count;
  kv **items;
} hash_t;

