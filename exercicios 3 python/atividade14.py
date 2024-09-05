def soma(num1,num2):
    return num1 + num2

def subtracao(num1,num2):
    return num1 - num2

def multi(num1,num2):
    return num1*num2
def div(num1,num2):
    if num2 == 0:
        print("invalido!!")
    else:
        return num1/num2

def menu():
    while True:
        print("calculadora!!")

        opcao = int(input("1 - soma \n 2 - subtração \n 3 - multiplicação \n 4 - divisao \n 0 - para fim \n"))
        if opcao == 1:
            num1 = int(input("digite um numero: "))
            num2 = int(input("digite o outro numero: "))
            print(f"o resultado: {soma(num1,num2)}")
        elif opcao == 2:
            num1 = int(input("digite um numero: "))
            num2 = int(input("digite o outro numero: "))
            print(f"o resultado: {subtracao(num1,num2)}")
        elif opcao == 3:
            num1 = int(input("digite um numero: "))
            num2 = int(input("digite o outro numero: "))
            print(f"o resultado: {multi(num1,num2)}")
        elif opcao == 4:
            num1 = int(input("digite um numero: "))
            num2 = int(input("digite o outro numero: "))
            print(f"o resultado: {div(num1,num2)}")          
        elif opcao == 0:
            break
        else:
            print("opçao invalida!!")

menu()
        