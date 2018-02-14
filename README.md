# checkup-loja
Esses scripts de teste visam verificar se os cadastros iniciais para publicação da loja foram realizados pelo cliente.
De acordo com o que está definido na seção back-end, na Wiki (http://wiki.jn2.xyz/sucessodocliente/publicacao).

# Testes ponto a ponto (e2e) - Front-end e Back-end

Os testes e2e do projeto, são escritos utilizando o Protractor, desligando o controle para aplicações AngularJS.

browser.ignoreSynchronization = true;

Este projeto de teste, tenta seguir as melhores práticas descritas no site oficial do Protractor.

A arquitetura está organizada da seguinte forma:

* O arquivo ‘conf.js’, armazena todas as configurações necessárias para que os testes sejam executados. No arquivo, consta o endereço do selênio, dados das bibliotecas requeridas para geração de relatório, lista dos arquivos de testes, definição da url base e dos navegadores ondes os testes serão executados.

* Existe também, o arquivo ‘/e2e/helper.js’ para encapsular as funções gerais que são utilizadas durante os testes. Como por exemplo, os  método de espera até que um elemento seja visível, seleção de dado elemento, entre outras interações genéricas. 

* O diretório ‘e2e/page-objects’, contém os elementos do documento HTML e funções específicas ou parciais de cada página. De forma melhorar a manutenção e divisão de responsabilidades quando existir mais de uma pessoa criando os testes. 				

* O diretório ‘e2e/specs’ contém os testes propriamente ditos. Cada arquivo de especificação, ou teste  tem uma seção de descrição, em que descreve basicamente a funcionalidade a ser testada (describe nomeia o conjunto de teste), e há uma seção para cada teste (it). Nestes arquivos, não tem indicação direta dos elementos DOM do HTML e construção de métodos, pois, para manter escalabilidade, isso sempre é feito por meio de um require nos arquivos dos diretórios page-objects, ou helper.

## Instalação local e Execução do Protractor:
Para instalar o Protractor localmente, siga as etapas abaixo:

* Instalação de nodejs
* Pacote Java (jdk)
* No terminal, rode:  npm install -g protractor (após concluído, consulte a versão por meio do comando protractor --version).
* Ainda no terminal, rode: webdriver-manager update, após à atualização, inicie o webdriver por meio do comando webdriver-manager start.

Com o webdriver iniciado, abra outro terminal, acesse o diretório do projeto e rode o comando a seguir para rodar os testes: protractor conf.js

Ou seja, para executar os testes manualmente é preciso que o webdriver esteja iniciado em um terminal e em outro terminal, seja feito a executação do arquivo de configuração dos testes.

## Dicas:

O Protractor usa a sintaxe Jasmine, então:

* se você precisa executar apenas um caso de teste específico, altere o 'it' por 'fit';
* se você quiser ignorar um caso de teste específico, altere o 'it' para 'xit’;
* se você deseja executar apenas um conjunto de teste específico, altere o 'describe' para 'fdescribe ';

Além disso:

* Os testes utilizam o padrão AAA (arrange, act, assert);
* A construção de testes segue o princípio (red, green, refactoring);
* Foi dado prioridade aos localizadores por id, css e css mais texto, visto que, o projeto não passará por internacionalização.

## Dependências
* Arquivo json

## Entrega Contínua 
* Jenkins

Para mais informações, dê uma olhada no documento oficial do Protractor [http://www.protractortest.org/#/].


