
print("-------------------------Seja bem-vindo ao arspirador intelingete-------------------------\n\n")
print("1-Se deseja informar a irfomeções manualmente;\n")
print("2-Se deseja utilizar as infomações padrões;\n")
opcao = int(input("Digite a opção desejada: "))

if opcao == 1:
        print("Digite a largura e a altura da sala separados por espaço: Ex.(10 5)")
        largura, altura = input().split()
        largura = int(largura)
        altura = int(altura)

        print("digite a coordenada inicial do seu aspirador separados por espaço:Ex.(5 3)")
        coordenadas = input().split()
        coordenadas = [int(i) for i in coordenadas]


        print("Digite a sequencia de movimentos do aspirador: Ex.(DEFFED)")
        movimentos = input()
if opcao == 2:
        largura = 15
        altura = 17
        coordenadas = [10,10]
        movimentos = "FFFFFFFFFDFFFFFFFFFDFFFFFFFFFDFFFFFFFFF"




                #VERIFICAÇÕES E INRFOMAÇÕES 

#informando a posição final do robo 
        def posicao_final(coordenadas, movimentos):
                x = coordenadas[0]
                y = coordenadas[1]
                for i in movimentos:
                        if i == "D":
                                x += 1
                        elif i == "E":
                                x -= 1
                        elif i == "F":
                                y += 1
                        elif i == "T":
                                y -= 1
                return [x,y]

#Caminho de volta para a base:
        def caminho_base(coordenadas, movimentos):
                x = coordenadas[0]
                y = coordenadas[1]
                for i in movimentos:
                        if i == "D":
                                x -= 1
                        elif i == "E":
                                x += 1
                        elif i == "F":
                                y -= 1
                        elif i == "T":
                                y += 1
                return [x,y]





#verificando se  esta dentro do plano cartesiano:
        def dentro_plano(coordenadas, movimentos):
                x = coordenadas[0]
                y = coordenadas[1]
                for i in movimentos:
                        if i == "D":
                                x += 1
                        elif i == "E":
                                x -= 1
                        elif i == "F":
                                y += 1
                        elif i == "T":
                                y -= 1
                if x > largura or y > altura:
                        return False
                else:
                        return True

#verificando a orientação final:
        def orientacao_final(coordenadas, movimentos):
                x = coordenadas[0]
                y = coordenadas[1]
                for i in movimentos:
                        if i == "D":
                                x += 1
                        elif i == "E":
                                x -= 1
                        elif i == "F":
                                y += 1
                        elif i == "T":
                                y -= 1
                if x > largura or y > altura:
                        return "O robo esta fora do plano cartesiano"
                else:
                        if x == largura:
                                return "O"
                        elif x == 0:
                                return "L"
                        elif y == altura:
                                return "N"
                        elif y == 0:
                                return "S"

#verificando se esta na base
        def na_base(coordenadas, movimentos):
                x = coordenadas[0]
                y = coordenadas[1]
                for i in movimentos:
                        if i == "D":
                                x += 1
                        elif i == "E":
                                x -= 1
                        elif i == "F":
                                y += 1
                        elif i == "T":
                                y -= 1
                if x == 0 and y == 0:
                        return True
                else:
                        return False


#imprimindo as informações necessarias para o usuario:

print("A posição final do robo é: ", posicao_final(coordenadas, movimentos))
print("O caminho de volta para a base é: ", caminho_base(coordenadas, movimentos))
print("A orientação final do robo é: ", orientacao_final(coordenadas, movimentos)) 

