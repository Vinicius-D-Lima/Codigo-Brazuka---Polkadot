print("numero perfeito")
num = int(input("digite um numero: "))
soma = 0

for i in range(1, num// 2 + 1):
    if num % i == 0:
        soma += i

if soma == num:
    print(f"{num} é um numero perfeito")
else:
    print(f"{num} nao é um numero perfeito")