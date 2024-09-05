
numeros = []


while True:
    entrada = input("Digite um número (ou 'sair' para terminar): ")

    if entrada.lower() == 'sair':
        break  

    try:
        numero = float(entrada)  
        numeros.append(numero)    
    except ValueError:
        print("Por favor, insira um número válido.")  

if numeros:
    maior = max(numeros)     
    menor = min(numeros)     
    media = sum(numeros) / len(numeros) 

    print(f"\nMaior número: {maior}")
    print(f"Menor número: {menor}")
    print(f"Média dos números: {media:.2f}")
else:
    print("Nenhum número foi inserido.")
