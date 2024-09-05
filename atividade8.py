def fibonacci(n):
    cont = 0
    f = [0,1]
    for i in range(2,n):
        proximo_termo = f[i-1] + f [i-2]
        f.append(proximo_termo)
    print(f"Os primeiros {n} termos da sequência de Fibonacci são:")
    for termo in f[:n]:
        print(termo)
n = int(input("Digite a quantidade dos primeiros numeros de fibonacci: "))
fibonacci(n)