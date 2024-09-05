def palindromo(s):
    s = s.replace(" "," ").lower()
    return s == s[::-1]

entrada = input ("digite uma palavra: ")

if palindromo(entrada):
    print("a palavra é palindromo. ")
else:
    print("a palavra nao é palindromo. ")