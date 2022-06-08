from logging import error, warning, debug, info, critical
from logging import basicConfig
from logging import INFO, DEBUG, WARNING

basicConfig(
    level=DEBUG,
    #filename='logs.txt',
    #filemode='a', 
    format='%(asctime)s: %(name)s: %(levelname)s: %(message)s'
)


debug('O teste funcionou!')
info('Dados cadastrados com sucesso!')
warning('Dados incompletos!')
error('Ocorreu um erro em um metodo!')
critical('A aplicação parou!')