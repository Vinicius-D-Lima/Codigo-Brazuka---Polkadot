import random

numero_secreto = random.randint(1,100)

while True:
    n = int(input("digite o numero para tentar adivinhar o numero secreto: "))

    if n < numero_secreto:
        print("o numero é menor que o numero secreto, digite novamente: ")
    elif n > numero_secreto:
        print("o numero é maior que o numero secreto, digite novamente: ")
    else:
        print(f"voce acertou o numero!!! o numero é: {numero_secreto}")
        break