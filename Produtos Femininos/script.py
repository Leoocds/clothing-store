import os

# Especifique o diretório onde estão os arquivos HTML
diretorio = "./Produtos Femininos"

# Liste todos os arquivos no diretório
arquivos = os.listdir(diretorio)

# Itere sobre os arquivos
for arquivo in arquivos:
    # Verifique se o arquivo possui a extensão .html (caso contrário, ele pode ser ignorado)
    if arquivo.endswith(".html"):
        # Crie o novo nome do arquivo com letras minúsculas
        novo_nome = arquivo.lower()

        # Renomeie o arquivo
        os.rename(os.path.join(diretorio, arquivo), os.path.join(diretorio, novo_nome))

print("Nomes de arquivos renomeados com sucesso.")