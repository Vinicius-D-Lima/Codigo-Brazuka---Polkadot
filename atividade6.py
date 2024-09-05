def contar_vogais(s):
    cont = 0
    for caractere in s:
        if caractere == 'a' or caractere == 'e' or caractere == 'i' or caractere == 'o' or caractere == 'u':
            cont+= 1
    return cont

palavra = str(input("digite uma palavra: "))
vogal = contar_vogais(palavra)

print(f"a quantidade de vogais é: {vogal}")