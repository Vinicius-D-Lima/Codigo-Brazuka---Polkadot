num = []
soma_par = 0
soma_impar = 0
for num in range(1,101):
    if num % 2 == 0:
        soma_par += num
    else:
        soma_impar += num
print(f"numeros pares: {soma_par}\n")
print(f"numeros impares: {soma_impar}")