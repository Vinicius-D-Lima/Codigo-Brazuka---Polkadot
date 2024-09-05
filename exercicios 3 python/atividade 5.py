def tabuada(num):
    r = []
    for i in range(1,11):
        r.append(num * i)
    return r

num = int(input("digite um numero para a tabuada: "))
result = tabuada(num)
for i in range(1,11):
    print(f"{num} * {i} = {result[i - 1]}")