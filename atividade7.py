def calcilar_media():
    notas = []
    while True:
        nota = float(input("Digite uma nota (ou -1 para encerrar): "))
        if nota == -1:
            notas.append(nota)
            if notas:
                media = sum(notas)/len(notas)
                print(f"A media das {len(notas)} notas inseridas é: {media:.2f}")
            else:
                print("nenhuma nota foi inseida")
            break

calcilar_media()