print("Hello Python World!")
message = "Hello Python!"
print(message)

message = "Hello Python (from a redeclared variable)"
print(message)

name = "muhammed abiola"
print(name.title())
print(name.upper())
print(name.lower())

first_name = "muhammed"
last_name = "abiola"

# Use an f-string to create a variable, and print it
full_name = f"{first_name} {last_name}"
print(full_name.title())

# Strip string of whitespace from both sides
whitespace_string = " \n muhammed abiola \t  "
print(whitespace_string.rstrip())
print(whitespace_string.lstrip())
print(whitespace_string.strip())

mabiola_url = "https://mabiola.net"
print(mabiola_url.removeprefix("https://"))

user_name = "Muhammed"
print(f"Hello {user_name}, would you like to learn some Python today?")

quote_author = "Albert Einstein"
quote = "A person who never made a mistake never tried anything new."
print(f'{quote_author} once said, "{quote}"')

filename = "python_notes.txt"
print(filename.removesuffix(".txt"))

print(5 + 3)
print(80 - 72)
print(2 * 4)
print(2 ** 3)
print(16 / 2)

fav_num = 1618
fav_num_message = f"My favourite number is {fav_num}"
print(fav_num_message)

# lists 

portugese_words = ["cachorro", "gato", "pao", "cerveja"]
print(portugese_words[0], portugese_words[1], portugese_words[2], portugese_words[3])
print(f"The Portugese word of the day is: {portugese_words[0]}")
print(f"The Portugese word of the day is: {portugese_words[1]}")
print(f"The Portugese word of the day is: {portugese_words[2]}")
print(f"The Portugese word of the day is: {portugese_words[3]}")

portugese_words[0] = "chave"
print(portugese_words)
