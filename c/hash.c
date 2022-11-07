#include <stdio.h>
#include <stdlib.h>

#include "hash.h"

static
kv_item *new_kv(const char *k, const char *v)
{
  kv_item *i = malloc(sizeof(kv_item));
  
  i->key = strdup(k);
  i->value = strdup(v);
  
  return i;
}

hash_t *
new_hash(void)
{
  hash_t *ht = malloc(sizeof(hash_t));
  ht->size = 53;
  ht->count = 0;
  ht->items = calloc((size_t) ht->size, sizeof(kv_item *));
  
  return ht;
}

static void
delhi(hash_t *i)
{
  free(i->key);
  free(i->value);
  free(i);
  
  return;
}

void
delht(hash_t *ht)
{
  int i;
  
  for (i = 0; i < ht->size; i++)
  {
    hash_t *item = ht->items[i];
    if (item != NULL)
    {
      delhi(item);
    }
  }
  
  free(ht->items);
  free(ht);

  return;
}
