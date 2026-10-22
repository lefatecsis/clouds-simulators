const originalQuestions = [
    {
        "id": 1,
        "title": "Pergunta 1",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua função Lambda deve usar os drivers Node.js para se conectar ao seu banco de dados RDS PostgreSQL dentro da sua VPC. Como você deve empacotar sua função Lambda para incluir as dependências necessárias?",
        "options": [
            {
                "letter": "A",
                "text": "Compacte a função e as dependências separadamente e faça o upload no AWS Lambda como duas partes distintas.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Compacte a função como está, incluindo apenas o arquivo package.json, para que o AWS Lambda resolva as dependências automaticamente para você.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Faça o upload do código através do console da AWS e envie as dependências como um arquivo ZIP separado.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Coloque a função e as dependências em uma única pasta e compacte tudo junto em um arquivo ZIP.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O AWS Lambda não suporta o upload de código e dependências em arquivos ZIP separados."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS Lambda não instala automaticamente as dependências listadas no package.json."
            },
            {
                "correct": false,
                "text": "Incorreta. O console da AWS exige que o código e as dependências estejam juntos em um único arquivo ZIP."
            },
            {
                "correct": true,
                "text": "Correta. Um pacote de implantação para Lambda é um arquivo ZIP que contém o código da função e todas as suas dependências."
            }
        ],
        "glossary": [
            "AWS Lambda: Serviço de computação serverless que executa código sob demanda.",
            "RDS PostgreSQL: Banco de dados relacional gerenciado pela AWS compatível com PostgreSQL.",
            "VPC: Rede virtual isolada na AWS.",
            "Deployment package: Arquivo ZIP que contém o código-fonte e todas as dependências.",
            "package.json: Arquivo de configuração padrão em projetos Node.js.",
            "npm install: Comando do Node.js usado para instalar dependências.",
            "Amazon S3: Serviço de armazenamento de objetos da AWS."
        ],
        "generalExplanation": [
            "O ambiente de execução do AWS Lambda não instala automaticamente as dependências listadas no arquivo package.json. Por isso, todas as dependências precisam ser incluídas manualmente no pacote de implantação (ZIP) antes de enviá-lo para o serviço. O processo correto consiste em: executar npm install localmente, garantir que as dependências sejam incluídas na pasta do projeto, compactar o código-fonte junto com as dependências em um único arquivo ZIP, e fazer o upload desse arquivo para o Lambda."
        ],
        "realWorld": [
            "Suponha que uma equipe de desenvolvimento esteja criando uma função Lambda em Node.js para inserir e consultar dados em um banco RDS PostgreSQL dentro de uma VPC privada. O desenvolvedor precisa incluir a biblioteca pg (driver PostgreSQL) como dependência. O fluxo correto é: executar npm install pg, verificar se a pasta node_modules foi criada, compactar todo o conteúdo da pasta do projeto, e fazer o upload do arquivo ZIP via AWS Management Console, AWS CLI ou AWS SAM."
        ]
    },
    {
        "id": 2,
        "title": "Pergunta 2",
        "domain": "Segurança",
        "prompt": "Uma empresa de segurança exige que todos os desenvolvedores realizem criptografia do lado do servidor com chaves de criptografia fornecidas pelo cliente ao executar operações no AWS S3. Os desenvolvedores devem escrever software em C# usando o AWS SDK e implementar esse requisito nas operações PUT, GET, Head e Copy. Qual dos seguintes métodos de criptografia atende a esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "SSE-C (Server-Side Encryption com chaves fornecidas pelo cliente)",
                "correct": true
            },
            {
                "letter": "B",
                "text": "SSE-S3 (Server-Side Encryption com chaves gerenciadas pelo Amazon S3)",
                "correct": false
            },
            {
                "letter": "C",
                "text": "SSE-KMS (Server-Side Encryption com chaves gerenciadas pelo AWS KMS)",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Criptografia do lado do cliente (Client-Side Encryption)",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. SSE-C permite que o cliente forneça a chave de criptografia em cada requisição."
            },
            {
                "correct": false,
                "text": "Incorreta. SSE-S3 utiliza chaves gerenciadas internamente pelo Amazon S3."
            },
            {
                "correct": false,
                "text": "Incorreta. SSE-KMS utiliza chaves gerenciadas pelo AWS Key Management Service."
            },
            {
                "correct": false,
                "text": "Incorreta. Na criptografia do lado do cliente, os dados são criptografados antes de serem enviados para o S3."
            }
        ],
        "glossary": [
            "SSE-C: Método de criptografia do lado do servidor onde o cliente fornece sua própria chave.",
            "SSE-KMS: Criptografia do lado do servidor que utiliza chaves gerenciadas pelo AWS KMS.",
            "SSE-S3: Criptografia do lado do servidor em que o S3 gerencia automaticamente as chaves.",
            "Client-Side Encryption: Processo em que os dados são criptografados antes de serem enviados ao S3."
        ],
        "generalExplanation": [
            "A opção correta é SSE-C, pois ela atende ao requisito específico de criptografia do lado do servidor com chaves fornecidas pelo cliente. Nesse método, o cliente envia sua própria chave de criptografia em cada operação de upload ou download. O Amazon S3 usa essa chave para criptografar ou descriptografar os dados, mas não a armazena internamente, garantindo que o controle das chaves permaneça com o cliente."
        ],
        "realWorld": [
            "Em setores altamente regulados, como finanças, defesa ou saúde, as políticas de segurança frequentemente exigem que as chaves de criptografia sejam mantidas sob controle total do cliente. Uma instituição financeira que armazena documentos sigilosos em Amazon S3 pode implementar SSE-C para garantir que cada upload seja criptografado com uma chave única fornecida pelo cliente."
        ]
    },
    {
        "id": 3,
        "title": "Pergunta 3",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um dos seus Kinesis Streams está passando por um aumento de tráfego devido a um dia de promoção. Por isso, seu administrador de Kinesis realizou um split de shards, passando de 6 shards para 10 shards no seu Kinesis Stream. Sua aplicação consumidora está rodando uma aplicação baseada em KCL em instâncias EC2. Qual é o número máximo de instâncias EC2 que podem ser implantadas para processar os shards?",
        "options": [
            {
                "letter": "A",
                "text": "1",
                "correct": false
            },
            {
                "letter": "B",
                "text": "20",
                "correct": false
            },
            {
                "letter": "C",
                "text": "10",
                "correct": true
            },
            {
                "letter": "D",
                "text": "6",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível executar uma única instância EC2 para processar todos os shards, isso não é o máximo permitido."
            },
            {
                "correct": false,
                "text": "Incorreta. O número 20 excede o número atual de shards (10)."
            },
            {
                "correct": true,
                "text": "Correta. Cada shard em um Kinesis Data Stream é processado por um único worker da aplicação KCL. Como cada instância EC2 executa um worker, o número máximo de instâncias EC2 que podem processar os shards é igual ao número de shards."
            },
            {
                "correct": false,
                "text": "Incorreta. O número 6 corresponde ao número anterior de shards antes do split."
            }
        ],
        "glossary": [
            "Kinesis Data Streams: Serviço da AWS para ingestão e processamento de dados em tempo real.",
            "Shard: Unidade básica de capacidade dentro de um Kinesis Stream.",
            "KCL (Kinesis Client Library): Biblioteca que facilita o desenvolvimento de aplicações consumidoras.",
            "Worker: Processo executado por uma aplicação KCL responsável por ler e processar registros.",
            "Lease: Mecanismo interno do KCL que garante exclusividade de processamento.",
            "Instância EC2: Máquina virtual da AWS onde a aplicação KCL é executada."
        ],
        "generalExplanation": [
            "Em um Kinesis Data Stream, cada shard é processado por um único worker da aplicação KCL. Por padrão, o KCL distribui dinamicamente os shards entre os workers disponíveis, garantindo que cada shard seja processado por apenas um worker ativo por vez. Como cada worker normalmente roda em uma instância EC2, o número máximo de instâncias EC2 que podem processar um stream em paralelo é igual ao número de shards disponíveis."
        ],
        "realWorld": [
            "Imagine uma plataforma de streaming de e-commerce que processa milhões de eventos por minuto durante a Black Friday. Para lidar com essa carga adicional, o time de engenharia executa um split nos shards do Kinesis Data Stream, aumentando de 5 para 10 shards. Em seguida, o Auto Scaling Group da aplicação KCL aumenta o número de instâncias EC2 para 10, permitindo que cada uma processe um shard independente."
        ]
    },
    {
        "id": 4,
        "title": "Pergunta 4",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você está executando uma aplicação web onde os usuários podem criar blogs e compartilhá-los com seus seguidores. A maior parte do fluxo de trabalho é baseada em leitura, mas quando um blog é atualizado, você deseja garantir que os dados mais recentes sejam servidos aos usuários (sem dados desatualizados). O desenvolvedor já sugeriu usar o ElastiCache para lidar com a carga de leitura, mas pediu que você implemente uma estratégia de cache que atenda aos requisitos do site. Qual estratégia você recomendaria?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar a estratégia Lazy Loading (Carregamento Preguiçoso) sem TTL",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar a estratégia Write Through (Gravação Direta)",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Utilizar DAX (DynamoDB Accelerator)",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar a estratégia Lazy Loading com TTL",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Sem um TTL, os dados podem permanecer no cache indefinidamente, servindo dados desatualizados."
            },
            {
                "correct": true,
                "text": "Correta. A estratégia Write Through adiciona ou atualiza dados no cache sempre que os dados são gravados no banco de dados, garantindo que os dados mais recentes estejam sempre disponíveis."
            },
            {
                "correct": false,
                "text": "Incorreta. DAX é um cache específico para DynamoDB e não se aplica ao ElastiCache."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o TTL defina um tempo para expiração, durante esse período os dados antigos podem ser servidos."
            }
        ],
        "glossary": [
            "Write Through: Estratégia de cache que atualiza simultaneamente o cache e o banco de dados.",
            "Lazy Loading: Estratégia que carrega dados no cache apenas quando são solicitados.",
            "TTL: Tempo de vida de um item no cache antes de expirar.",
            "DAX: Cache em memória específico para o DynamoDB.",
            "ElastiCache: Serviço gerenciado que fornece cache em memória usando Redis ou Memcached."
        ],
        "generalExplanation": [
            "A estratégia Write Through é a melhor escolha quando a aplicação exige consistência imediata entre o cache e o banco de dados. Com essa abordagem, toda operação de gravação no banco de dados também atualiza o cache no mesmo momento, garantindo que os dados servidos pelo cache estejam sempre atualizados. Esse método é ideal em cenários onde a precisão das informações exibidas ao usuário é crítica."
        ],
        "realWorld": [
            "Em uma plataforma de blogs ou rede social, onde os usuários podem editar postagens e essas mudanças devem ser refletidas instantaneamente para os seguidores, a estratégia Write Through é essencial. O usuário atualiza um post no banco de dados e a aplicação, ao mesmo tempo, atualiza o ElastiCache com a nova versão do post. Nas próximas requisições, o conteúdo atualizado é servido diretamente do cache."
        ]
    },
    {
        "id": 5,
        "title": "Pergunta 5",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa de análise de dados ingere um grande volume de mensagens e as armazena em um banco de dados RDS usando Lambda. Devido ao aumento do tamanho da carga útil, o processamento de cada mensagem está levando mais de 15 minutos. Como um Desenvolvedor Associado, qual das seguintes opções você recomendaria para processar cada mensagem da forma MAIS escalável?",
        "options": [
            {
                "letter": "A",
                "text": "Provisionar instâncias EC2 em um grupo de Auto Scaling para consultar as mensagens de uma fila SQS",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Usar o DynamoDB em vez do RDS como banco de dados",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Entrar em contato com o Suporte AWS para aumentar o tempo limite do Lambda para 60 minutos",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Provisionar uma instância EC2 para consultar as mensagens de uma fila SQS",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Como o processamento de cada mensagem leva mais de 15 minutos, o Lambda não é adequado. Utilizar instâncias EC2 gerenciadas por um Auto Scaling group para consumir mensagens de uma fila SQS permite escalabilidade automática."
            },
            {
                "correct": false,
                "text": "Incorreta. Trocar o banco de dados não resolve o problema do tempo de execução do Lambda."
            },
            {
                "correct": false,
                "text": "Incorreta. O limite máximo de tempo de execução do AWS Lambda é 15 minutos e não pode ser aumentado."
            },
            {
                "correct": false,
                "text": "Incorreta. Uma única instância EC2 pode não ser suficiente para lidar com picos repentinos."
            }
        ],
        "glossary": [
            "AWS Lambda: Serviço de computação serverless com limite máximo de execução de 15 minutos.",
            "RDS: Serviço gerenciado para bancos de dados relacionais.",
            "DynamoDB: Banco de dados NoSQL totalmente gerenciado.",
            "EC2: Serviço que disponibiliza instâncias de servidores virtuais configuráveis.",
            "Auto Scaling Group: Recurso que ajusta automaticamente a quantidade de instâncias EC2.",
            "SQS: Serviço de fila gerenciado que desacopla componentes de aplicações distribuídas."
        ],
        "generalExplanation": [
            "O AWS Lambda é excelente para cargas curtas, mas seu limite fixo de 15 minutos torna-o inadequado para tarefas que exigem processamento prolongado. A solução mais adequada é combinar Amazon SQS + Auto Scaling Group de instâncias EC2. O SQS armazena as mensagens de forma assíncrona e o Auto Scaling Group ajusta dinamicamente o número de instâncias EC2 responsáveis por consumir e processar essas mensagens."
        ],
        "realWorld": [
            "Em aplicações de análise de grandes volumes de dados ou processamento batch de eventos, é comum que cada tarefa leve mais de 15 minutos. Por exemplo, um sistema que recebe milhares de registros de sensores industriais por minuto. Cada mensagem requer análises estatísticas complexas. Nesse caso, os sensores enviam eventos para uma fila SQS, e um Auto Scaling Group de EC2 consome as mensagens, processando-as em paralelo."
        ]
    },
    {
        "id": 6,
        "title": "Pergunta 6",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa de TI utiliza templates do AWS CloudFormation para provisionar sua infraestrutura AWS, incluindo recursos do Amazon EC2, Amazon VPC e Amazon S3. Utilizando referências entre stacks, um desenvolvedor cria uma stack chamada NetworkStack que exporta o subnetId, o qual pode ser usado na criação de instâncias EC2 em outra stack. Para utilizar o valor exportado em outra stack, qual das seguintes funções deve ser usada?",
        "options": [
            {
                "letter": "A",
                "text": "!Sub",
                "correct": false
            },
            {
                "letter": "B",
                "text": "!Ref",
                "correct": false
            },
            {
                "letter": "C",
                "text": "!GetAtt",
                "correct": false
            },
            {
                "letter": "D",
                "text": "!ImportValue",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A função !Sub substitui variáveis em uma string, mas não é usada para importar valores exportados."
            },
            {
                "correct": false,
                "text": "Incorreta. A função !Ref retorna o valor de um parâmetro ou recurso dentro da mesma stack."
            },
            {
                "correct": false,
                "text": "Incorreta. A função !GetAtt retorna o valor de um atributo de um recurso definido na mesma stack."
            },
            {
                "correct": true,
                "text": "Correta. A função intrínseca !ImportValue retorna o valor de uma saída exportada por outra stack."
            }
        ],
        "glossary": [
            "AWS CloudFormation: Serviço que permite definir, provisionar e gerenciar infraestrutura como código.",
            "Cross-stack referencing: Técnica que compartilha valores entre diferentes stacks.",
            "!Ref: Função que retorna o valor de um recurso ou parâmetro dentro da mesma stack.",
            "!GetAtt: Função usada para obter atributos específicos de um recurso na mesma stack.",
            "!ImportValue: Função que importa valores exportados por outra stack.",
            "!Sub: Função que substitui variáveis em strings por seus valores correspondentes."
        ],
        "generalExplanation": [
            "A função correta para utilizar valores exportados de outra stack no AWS CloudFormation é a !ImportValue. O CloudFormation permite que uma stack exporte valores específicos e que outras stacks os importem para reutilização. Essa prática é essencial para infraestruturas modulares, onde cada stack é responsável por um domínio."
        ],
        "realWorld": [
            "Em um ambiente de infraestrutura modular, equipes costumam dividir stacks do CloudFormation por domínio. Por exemplo, NetworkStack cria a VPC, subnets e security groups, enquanto AppStack implanta instâncias EC2 que dependem da rede criada pela primeira. Na NetworkStack, o desenvolvedor exporta o SubnetId, e na AppStack, ele importa o valor exportado para usar na configuração da EC2."
        ]
    },
    {
        "id": 7,
        "title": "Pergunta 7",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "A equipe de desenvolvimento de uma empresa de comércio eletrônico está se preparando para a próxima promoção de Ação de Graças. O gerente de produto deseja que a equipe implemente uma estratégia de cache adequada no Amazon ElastiCache para suportar picos de tráfego no site durante a promoção. Um requisito fundamental é garantir atualizações consistentes nos preços e descrições dos produtos, para que o cache nunca fique dessincronizado com o backend. Como um Desenvolvedor Associado, qual das seguintes soluções você recomendaria para esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar uma estratégia de cache que escreva primeiro no backend e aguarde a expiração do cache via TTL.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar uma estratégia de cache que escreva primeiro no backend e, em seguida, invalide o cache.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Utilizar uma estratégia de cache que atualize o cache e o backend simultaneamente.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar uma estratégia de cache que escreva diretamente no cache e sincronize o backend posteriormente.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Durante o tempo de vida do cache (TTL), os dados podem ficar dessincronizados."
            },
            {
                "correct": true,
                "text": "Correta. Essa estratégia garante que o backend seja atualizado primeiro e depois o cache seja invalidado, forçando a atualização do cache com os dados mais recentes."
            },
            {
                "correct": false,
                "text": "Incorreta. Cache e backend são sistemas distintos e não podem ser atualizados simultaneamente em uma única operação atômica."
            },
            {
                "correct": false,
                "text": "Incorreta. Sincronizar o backend posteriormente pode causar inconsistências temporárias inaceitáveis."
            }
        ],
        "glossary": [
            "Amazon ElastiCache: Serviço gerenciado que fornece cache em memória de alta performance.",
            "Cache: Armazenamento temporário de dados usados com frequência.",
            "TTL: Tempo máximo que um item pode permanecer no cache antes de expirar.",
            "Write-through: Estratégia em que a atualização é gravada primeiro no backend e o cache é atualizado ou invalidado em seguida.",
            "Invalidação de cache: Processo de remover ou marcar como expirado um item armazenado."
        ],
        "generalExplanation": [
            "A estratégia write-through é a mais adequada quando a consistência imediata dos dados entre o cache e o backend é essencial. Nesse modelo, a aplicação grava as alterações no backend e, em seguida, o cache é invalidado ou atualizado para refletir os dados mais recentes. Essa abordagem garante que o cache nunca sirva informações obsoletas."
        ],
        "realWorld": [
            "Em um site de e-commerce que utiliza ElastiCache Redis para armazenar informações de produtos e preços, quando um administrador altera o preço de um produto, o novo preço é salvo no banco de dados principal e, logo após, o item correspondente é removido do cache. Na próxima consulta, o sistema recupera o dado atualizado do banco e o armazena novamente no cache."
        ]
    },
    {
        "id": 8,
        "title": "Pergunta 8",
        "domain": "Segurança",
        "prompt": "Uma aplicação de comércio eletrônico envia suas transações de pedidos em lote para uma aplicação contábil para processamento posterior. Devido a mudanças nas regras de conformidade, todas as transações estão sendo criptografadas com uma chave do AWS Key Management Service (AWS KMS) antes de serem enviadas para a aplicação contábil. Após essa mudança, os testadores relataram erros do tipo ThrottlingException na aplicação receptora. Quais medidas um desenvolvedor deve tomar para resolver esse problema da forma MAIS otimizada? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Enviar eventos do AWS CloudTrail gerados pelo AWS KMS para o Amazon CloudWatch Logs",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Reduzir a taxa de requisições e implementar lógica de backoff e retry",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Utilizar o recurso de cache de chaves de dados com a biblioteca de criptografia AWS Encryption SDK",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Escrever consultas no Amazon CloudWatch Logs Insights para monitorar o uso das suas requisições de API e abrir um caso no AWS Support para solicitar aumento de cota",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Usar uma chave a nível de bucket para SSE-KMS, o que reduziria o tráfego solicitado ao AWS KMS e evitaria o erro ThrottlingException",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Analisar eventos do CloudTrail é uma ferramenta de diagnóstico, não uma solução otimizada."
            },
            {
                "correct": true,
                "text": "Correta. Reduzir a taxa de requisições e usar backoff exponencial com retries é uma prática recomendada."
            },
            {
                "correct": true,
                "text": "Correta. O cache de chaves de dados reduz a necessidade de chamadas frequentes ao AWS KMS."
            },
            {
                "correct": false,
                "text": "Incorreta. Solicitar aumento de cota não é a abordagem mais otimizada."
            },
            {
                "correct": false,
                "text": "Incorreta. O uso de chaves a nível de bucket para SSE-KMS é específico para criptografia de objetos no S3."
            }
        ],
        "glossary": [
            "AWS KMS: Serviço gerenciado para criar, armazenar e controlar chaves criptográficas.",
            "ThrottlingException: Erro quando o número de chamadas a um serviço AWS ultrapassa o limite.",
            "AWS Encryption SDK: Biblioteca que facilita a implementação de criptografia com cache de chaves.",
            "Backoff exponencial: Técnica de retry em que o intervalo entre as tentativas aumenta progressivamente.",
            "SSE-KMS: Método de criptografia do lado do servidor no Amazon S3 que utiliza chaves gerenciadas pelo KMS."
        ],
        "generalExplanation": [
            "O erro ThrottlingException indica que a aplicação está realizando chamadas excessivas ao AWS KMS. Para mitigar o problema, duas medidas principais devem ser adotadas: implementar lógica de retry com backoff exponencial e utilizar o cache de chaves do AWS Encryption SDK. Essas práticas combinadas melhoram o desempenho da aplicação, reduzem custos e previnem interrupções."
        ],
        "realWorld": [
            "Em uma aplicação de e-commerce que criptografa informações sensíveis durante períodos de alto tráfego, o sistema pode realizar milhares de chamadas simultâneas ao KMS, gerando erros de throttling. Ao implementar cache de chaves via AWS Encryption SDK e backoff exponencial, o sistema passa a reutilizar chaves armazenadas localmente e as requisições com falha são reagendadas de forma controlada."
        ]
    },
    {
        "id": 9,
        "title": "Pergunta 9",
        "domain": "Segurança",
        "prompt": "Uma empresa possui uma nova aplicação de mídia que utiliza uma distribuição Amazon CloudFront que acessa um bucket S3 por meio de uma identidade de acesso de origem (OAI). O bucket S3 possui uma negação explícita de acesso para todos os demais usuários. Um desenvolvedor deseja permitir o acesso à página de login para usuários não autenticados, garantindo a segurança de todo o conteúdo privado que possui acesso restrito aos visualizadores. Qual das seguintes alternativas você recomendaria?",
        "options": [
            {
                "letter": "A",
                "text": "Configure um segundo comportamento de cache na distribuição com a mesma origem do comportamento de cache padrão e defina o padrão de caminho para esse segundo comportamento como o caminho da página de login, com acesso do visualizador como irrestrito. Mantenha as configurações do comportamento de cache padrão inalteradas.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Configure uma nova distribuição com a mesma origem da distribuição original e defina o padrão de caminho para o comportamento de cache padrão da nova distribuição como o caminho da página de login, com acesso do visualizador como irrestrito. Mantenha o comportamento de cache padrão da distribuição original inalterado.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Configure um segundo comportamento de cache na distribuição com a mesma origem do comportamento de cache padrão e defina o padrão de caminho para esse segundo comportamento como * com acesso do visualizador como restrito. Modifique o padrão de caminho do comportamento de cache padrão para o caminho da página de login e defina o acesso do visualizador como irrestrito.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Configure uma segunda origem como origem de failover para o comportamento padrão da distribuição original e defina o padrão de caminho para essa segunda origem como o caminho da página de login, com acesso do visualizador como irrestrito. Mantenha o comportamento para a origem primária inalterado.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Criar um segundo comportamento de cache com o mesmo origem e padrão de caminho correspondente à página de login, configurado com acesso irrestrito, permite que usuários não autenticados acessem essa página."
            },
            {
                "correct": false,
                "text": "Incorreta. Ter duas distribuições com a mesma origem não resolve o problema de permitir acesso irrestrito à página de login enquanto mantém o conteúdo privado protegido."
            },
            {
                "correct": false,
                "text": "Incorreta. O padrão de caminho para o comportamento de cache padrão é sempre * e não pode ser alterado."
            },
            {
                "correct": false,
                "text": "Incorreta. O failover de origem é utilizado para alta disponibilidade, não para permitir acesso simultâneo à página de login."
            }
        ],
        "glossary": [
            "Amazon CloudFront: Serviço de CDN que distribui conteúdo globalmente.",
            "S3 Bucket: Repositório de armazenamento de objetos da AWS.",
            "Origin Access Identity: Identidade que restringe o acesso direto ao bucket S3.",
            "Comportamento de Cache: Conjunto de regras que define como as requisições são tratadas.",
            "Padrão de Caminho: Padrão de URL usado para associar um comportamento de cache específico.",
            "Acesso do Visualizador: Configuração que determina quem pode acessar determinado conteúdo."
        ],
        "generalExplanation": [
            "A solução correta é criar um segundo comportamento de cache dentro da mesma distribuição CloudFront, utilizando a mesma origem (S3 Bucket protegido por OAI), mas configurando o Padrão de Caminho para a página de login com acesso irrestrito. Esse design permite que usuários não autenticados acessem livremente a página de login, enquanto o restante do conteúdo permanece restrito e protegido pelo comportamento padrão."
        ],
        "realWorld": [
            "Em uma aplicação web corporativa que oferece uma área privada de acesso restrito e uma página pública de login, os desenvolvedores configuram o CloudFront para que o comportamento de cache padrão proteja todo o conteúdo, e um segundo comportamento de cache para o caminho /login.html, permitindo acesso irrestrito aos visitantes. O bucket S3 continua protegido por uma OAI, impedindo o acesso direto via URL pública."
        ]
    },
    {
        "id": 10,
        "title": "Pergunta 10",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa lançou recentemente um novo aplicativo de jogos que está sendo adotado rapidamente pelos usuários. A empresa utiliza o RDS MySQL como banco de dados. A equipe de desenvolvimento precisa de uma solução urgente para o problema do aumento rápido da carga de trabalho, que pode exceder o armazenamento disponível no banco de dados. Como um desenvolvedor associado, qual das seguintes soluções você recomendaria para que exija o mínimo esforço de desenvolvimento para atender a essa necessidade? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Criar uma réplica de leitura para o RDS MySQL.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Habilitar o autoescalonamento de armazenamento para o RDS MySQL.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Migrar o banco de dados RDS MySQL para DynamoDB, que aloca automaticamente espaço de armazenamento quando necessário.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Configurar o particionamento (sharding) manual do banco de dados MySQL.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Migrar o banco de dados RDS MySQL para Aurora, que oferece autoescalonamento de armazenamento.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Réplicas de leitura não resolvem o problema do aumento do espaço de armazenamento."
            },
            {
                "correct": true,
                "text": "Correta. O autoescalonamento de armazenamento aumenta automaticamente o armazenamento quando necessário."
            },
            {
                "correct": false,
                "text": "Incorreta. O DynamoDB é NoSQL, o que implica um esforço considerável de desenvolvimento."
            },
            {
                "correct": false,
                "text": "Incorreta. O particionamento manual exige mudanças significativas na aplicação."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon Aurora oferece autoescalonamento automático de armazenamento, reduzindo o esforço operacional."
            }
        ],
        "glossary": [
            "RDS MySQL: Serviço gerenciado de banco de dados relacional compatível com MySQL.",
            "Amazon Aurora: Banco de dados relacional compatível com MySQL e PostgreSQL com autoescalonamento.",
            "DynamoDB: Banco de dados NoSQL totalmente gerenciado e altamente escalável.",
            "Réplica de leitura: Cópia somente leitura do banco de dados primário.",
            "Autoescalonamento de armazenamento: Funcionalidade que aumenta automaticamente o tamanho do armazenamento."
        ],
        "generalExplanation": [
            "Quando uma aplicação enfrenta crescimento imprevisível de dados, a melhor solução com mínimo esforço operacional é habilitar o autoescalonamento de armazenamento no Amazon RDS MySQL ou migrar o banco de dados para o Amazon Aurora, que já possui esse recurso embutido. Essas opções garantem que o armazenamento cresça automaticamente conforme a necessidade, sem interromper o serviço."
        ],
        "realWorld": [
            "Em um jogo online que cresce rapidamente em popularidade, o aumento repentino no número de jogadores causa um rápido crescimento dos dados armazenados. Ao ativar o autoescalonamento de armazenamento no RDS MySQL, ou ao migrar para o Amazon Aurora, o sistema aumenta automaticamente o espaço de armazenamento conforme os dados crescem, sem downtime e sem necessidade de migrações manuais."
        ]
    },
    {
        "id": 11,
        "title": "Pergunta 11",
        "domain": "Segurança",
        "prompt": "Você acabou de implantar uma função AWS Lambda. A função Lambda será invocada via API Gateway. O API Gateway precisará controlar o acesso a essa função. Qual dos seguintes mecanismos NÃO é suportado pelo API Gateway?",
        "options": [
            {
                "letter": "A",
                "text": "STS (AWS Security Token Service)",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Cognito User Pools",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Lambda Authorizer",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Permissões IAM com assinatura sigv4",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O AWS STS não é suportado diretamente como mecanismo de controle de acesso no API Gateway."
            },
            {
                "correct": false,
                "text": "Incorreta. O API Gateway suporta a integração com Cognito User Pools."
            },
            {
                "correct": false,
                "text": "Incorreta. O API Gateway suporta Lambda Authorizers."
            },
            {
                "correct": false,
                "text": "Incorreta. O API Gateway permite o uso de permissões IAM com autenticação via assinatura AWS Signature Version 4."
            }
        ],
        "glossary": [
            "API Gateway: Serviço que permite criar, publicar, monitorar e proteger APIs.",
            "STS: Serviço usado para gerar credenciais temporárias e seguras.",
            "Cognito User Pools: Serviço para autenticação e gerenciamento de usuários.",
            "Lambda Authorizer: Função Lambda personalizada usada pelo API Gateway para autenticar e autorizar solicitações."
        ],
        "generalExplanation": [
            "O AWS API Gateway suporta três mecanismos principais de autenticação e autorização: Cognito User Pools, Permissões IAM com assinatura SigV4 e Lambda Authorizers. O AWS STS, embora importante para emitir credenciais temporárias, não é um mecanismo de autenticação suportado diretamente pelo API Gateway. O STS apenas fornece credenciais temporárias que podem ser usadas posteriormente para autenticar via IAM SigV4."
        ],
        "realWorld": [
            "Em uma arquitetura serverless, é comum que uma equipe desenvolva uma API REST com API Gateway e AWS Lambda. Para usuários finais, a autenticação é normalmente feita via Cognito User Pools. Para integrações entre serviços, a autenticação ocorre via IAM SigV4. Para regras personalizadas, pode-se empregar um Lambda Authorizer."
        ]
    },
    {
        "id": 12,
        "title": "Pergunta 12",
        "domain": "Segurança",
        "prompt": "Uma empresa de comércio eletrônico possui várias instâncias EC2 operando em uma sub-rede privada que faz parte de uma VPC personalizada. Essas instâncias executam um aplicativo de processamento de imagens que precisa acessar imagens armazenadas no S3. Após o processamento de cada imagem, o status do registro correspondente precisa ser marcado como concluído em uma tabela DynamoDB. Como você provisionaria acesso privado a esses recursos AWS que não fazem parte dessa VPC personalizada?",
        "options": [
            {
                "letter": "A",
                "text": "Criar um endpoint de interface separado para S3 e outro para DynamoDB. Em seguida, conectar-se a esses serviços usando os endereços IP privados.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar um endpoint gateway para S3 e adicioná-lo como destino na tabela de rotas da VPC personalizada. Criar um endpoint de interface para DynamoDB e conectar-se ao serviço DynamoDB usando o endereço IP privado.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Criar um endpoint gateway separado para S3 e outro para DynamoDB. Adicionar duas novas entradas de destino para esses endpoints gateway na tabela de rotas da VPC personalizada.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Criar um endpoint gateway para DynamoDB e adicioná-lo como destino na tabela de rotas da VPC personalizada. Criar um endpoint de interface para S3 e conectar-se ao serviço S3 usando o endereço IP privado.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. DynamoDB não suporta endpoints de interface."
            },
            {
                "correct": false,
                "text": "Incorreta. DynamoDB não suporta endpoints de interface."
            },
            {
                "correct": true,
                "text": "Correta. Endpoints gateway permitem comunicação privada entre as instâncias da VPC e serviços AWS suportados."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o DynamoDB suporte endpoints gateway, a combinação correta geralmente envolve endpoints gateway para ambos."
            }
        ],
        "glossary": [
            "Endpoint Gateway: Tipo de endpoint VPC configurado na tabela de rotas.",
            "Endpoint de Interface: Endpoint VPC baseado em uma ENI com IP privado.",
            "VPC: Rede virtual isolada dentro da AWS.",
            "NAT: Mecanismo que permite que instâncias em sub-redes privadas acessem a internet.",
            "AWS PrivateLink: Tecnologia que permite acesso privado a serviços AWS."
        ],
        "generalExplanation": [
            "Para permitir que instâncias em uma VPC personalizada acessem serviços como Amazon S3 e Amazon DynamoDB de forma privada e segura, a abordagem recomendada é o uso de VPC Endpoints do tipo Gateway. Esses endpoints são integrados diretamente à tabela de rotas da VPC, garantindo que todo o tráfego permaneça dentro da rede privada da AWS, sem passar pela internet pública."
        ],
        "realWorld": [
            "Em um sistema de e-commerce hospedado em instâncias EC2 dentro de sub-redes privadas, as instâncias precisam ler e gravar imagens de produtos em um bucket S3 e atualizar o status de pedidos em uma tabela DynamoDB. Ao configurar Gateway Endpoints para S3 e DynamoDB, todo o tráfego entre a aplicação e esses serviços permanece dentro da infraestrutura da AWS, sem exposição à internet."
        ]
    },
    {
        "id": 13,
        "title": "Pergunta 13",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você está implementando uma aplicação bancária na qual precisa atualizar simultaneamente a tabela Exchanges do DynamoDB e a tabela AccountBalance do DynamoDB, ou não realizar nenhuma atualização. Qual recurso do DynamoDB você deve utilizar para garantir essa operação atômica?",
        "options": [
            {
                "letter": "A",
                "text": "TTL (Time to Live) do DynamoDB",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Índices do DynamoDB",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Transações do DynamoDB",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Streams do DynamoDB",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O TTL é utilizado para expirar automaticamente itens com base em um timestamp."
            },
            {
                "correct": false,
                "text": "Incorreta. Índices são usados para permitir consultas eficientes."
            },
            {
                "correct": true,
                "text": "Correta. As transações do DynamoDB permitem realizar alterações coordenadas do tipo tudo ou nada em múltiplos itens."
            },
            {
                "correct": false,
                "text": "Incorreta. DynamoDB Streams fornece um registro das alterações, mas não garante operações atômicas."
            }
        ],
        "glossary": [
            "Transações do DynamoDB: Recurso que permite executar múltiplas operações de leitura e escrita atômicas.",
            "TTL: Mecanismo que define um timestamp de expiração para itens.",
            "Streams do DynamoDB: Recurso que captura e armazena alterações em tempo real.",
            "Índices do DynamoDB: Estruturas adicionais que possibilitam consultas eficientes."
        ],
        "generalExplanation": [
            "A alternativa correta é o uso de Transações do DynamoDB, pois esse recurso garante que múltiplas operações sejam executadas de forma atômica, ou todas são concluídas com sucesso, ou nenhuma é aplicada. Isso é essencial em sistemas que exigem consistência de dados entre tabelas, como transferências bancárias."
        ],
        "realWorld": [
            "Em uma aplicação bancária ou de câmbio, é essencial que a atualização do saldo da conta e o registro da operação de troca de moedas ocorram juntos. Usando Transações do DynamoDB, um desenvolvedor pode atualizar simultaneamente as tabelas AccountBalance e ExchangeHistory. Caso uma das operações falhe, nenhuma mudança é aplicada, prevenindo inconsistências financeiras."
        ]
    },
    {
        "id": 14,
        "title": "Pergunta 14",
        "domain": "Solução de problemas e otimização",
        "prompt": "Você está utilizando filas FIFO do AWS SQS para garantir a ordenação das mensagens com base no user_id. Além disso, deseja assegurar que mensagens duplicadas não sejam enviadas para o SQS, pois isso causaria falha na aplicação. Como desenvolvedor, qual parâmetro da mensagem você deve configurar para realizar a deduplicação das mensagens?",
        "options": [
            {
                "letter": "A",
                "text": "MessageDeduplicationId",
                "correct": true
            },
            {
                "letter": "B",
                "text": "ReceiveRequestAttemptId",
                "correct": false
            },
            {
                "letter": "C",
                "text": "MessageGroupId",
                "correct": false
            },
            {
                "letter": "D",
                "text": "ContentBasedDeduplication",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O MessageDeduplicationId é o identificador utilizado para a deduplicação das mensagens enviadas."
            },
            {
                "correct": false,
                "text": "Incorreta. ReceiveRequestAttemptId é usado para deduplicar chamadas ReceiveMessage em filas FIFO."
            },
            {
                "correct": false,
                "text": "Incorreta. MessageGroupId é usado para agrupar mensagens que devem ser processadas em ordem."
            },
            {
                "correct": false,
                "text": "Incorreta. ContentBasedDeduplication é uma configuração da fila, não um parâmetro da mensagem."
            }
        ],
        "glossary": [
            "MessageDeduplicationId: Identificador usado para evitar o processamento duplicado em filas FIFO.",
            "ContentBasedDeduplication: Configuração que gera automaticamente o MessageDeduplicationId com base no conteúdo.",
            "ReceiveRequestAttemptId: Parâmetro que garante a deduplicação de chamadas ReceiveMessage.",
            "MessageGroupId: Identificador que agrupa mensagens relacionadas em uma fila FIFO."
        ],
        "generalExplanation": [
            "Para garantir a deduplicação de mensagens em uma fila FIFO do Amazon SQS, é necessário utilizar o parâmetro MessageDeduplicationId. Esse identificador exclusivo permite que o SQS detecte mensagens duplicadas enviadas dentro de uma janela de 5 minutos e as descarte automaticamente, evitando que a aplicação processe o mesmo evento mais de uma vez."
        ],
        "realWorld": [
            "Em uma aplicação serverless de pedidos online, durante picos de tráfego ou falhas de rede, o mesmo pedido pode ser reenviado acidentalmente. Cada mensagem enviada contém um MessageDeduplicationId exclusivo (por exemplo, o ID do pedido). O SQS detecta automaticamente se uma mensagem com o mesmo ID já foi recebida nos últimos 5 minutos e, caso positivo, a duplicata é descartada silenciosamente."
        ]
    },
    {
        "id": 15,
        "title": "Pergunta 15",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua empresa deseja deixar de gerenciar funções Lambda manualmente pelo console da AWS e quer fazer upload e atualizações utilizando AWS CloudFormation. Como declarar uma função AWS Lambda no CloudFormation? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Fazer upload de todo o código para o CodeCommit e referenciar o repositório CodeCommit no bloco AWS::Lambda::Function",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Fazer upload de todo o código como um arquivo zip no S3 e referenciar esse objeto no bloco AWS::Lambda::Function",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Escrever o código da função AWS Lambda diretamente no template CloudFormation no bloco AWS::Lambda::Function e referenciar as dependências como um arquivo zip armazenado no S3",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Escrever o código da função AWS Lambda diretamente no template CloudFormation no bloco AWS::Lambda::Function, desde que não haja dependências de terceiros",
                "correct": true
            },
            {
                "letter": "E",
                "text": "Fazer upload de todo o código como uma pasta no S3 e referenciar a pasta no bloco AWS::Lambda::Function",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O recurso AWS::Lambda::Function não suporta referência direta a repositórios CodeCommit."
            },
            {
                "correct": true,
                "text": "Correta. A maneira recomendada é fazer upload do pacote completo da função Lambda como um arquivo zip no S3."
            },
            {
                "correct": false,
                "text": "Incorreta. O código inline não suporta a referência separada de dependências como um arquivo zip no S3."
            },
            {
                "correct": true,
                "text": "Correta. É possível escrever o código inline no template CloudFormation para funções simples em linguagens como Node.js ou Python."
            },
            {
                "correct": false,
                "text": "Incorreta. O Lambda requer que o código seja empacotado em um arquivo zip para ser referenciado no S3."
            }
        ],
        "glossary": [
            "AWS::Lambda::Function: Recurso do AWS CloudFormation usado para criar e gerenciar funções Lambda.",
            "Deployment Package: Arquivo compactado que contém o código da função Lambda e suas dependências.",
            "Inline Code: Código-fonte da função Lambda escrito diretamente dentro do template CloudFormation.",
            "Amazon S3: Serviço de armazenamento de objetos usado para hospedar pacotes de código."
        ],
        "generalExplanation": [
            "Ao declarar uma função AWS Lambda usando AWS CloudFormation, existem duas formas válidas de especificar o código: inline code (escrever o código diretamente no template CloudFormation, ideal para funções pequenas sem dependências) ou deployment package via S3 (empacotar o código e dependências em um arquivo .zip, fazer upload para um bucket S3, e referenciá-lo na propriedade Code)."
        ],
        "realWorld": [
            "Em pipelines CI/CD, equipes DevOps costumam automatizar o processo de empacotar e implantar funções Lambda via CloudFormation. O código é versionado em CodeCommit ou GitHub, o pipeline empacota o código e dependências em um .zip, o arquivo é armazenado em um bucket S3 versionado, e o template CloudFormation referencia o pacote via S3Bucket e S3Key, realizando o deploy automático da nova versão da Lambda."
        ]
    },
    {
        "id": 16,
        "title": "Pergunta 16",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa de TI utiliza o CodePipeline para automatizar seus pipelines de release. A equipe de desenvolvimento deseja criar uma função Lambda que envie notificações para mudanças de estado dentro do pipeline. Como um Associate Developer, quais passos você sugeriria para associar a função Lambda à fonte de eventos?",
        "options": [
            {
                "letter": "A",
                "text": "Configure um alarme do Amazon CloudWatch que monitore as mudanças de status no CodePipeline e dispare a função Lambda.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Use o console do Lambda para configurar um gatilho que invoque a função Lambda com o CodePipeline como fonte de eventos.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Use o console do CodePipeline para configurar um gatilho para a função Lambda.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Configure uma regra do Amazon CloudWatch Events que utilize o CodePipeline como fonte de eventos e tenha a função Lambda como alvo.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Alarmes do CloudWatch são usados para monitoramento de métricas, não para detectar eventos de mudança de estado."
            },
            {
                "correct": false,
                "text": "Incorreta. O console do Lambda não permite configurar o CodePipeline diretamente como fonte de eventos."
            },
            {
                "correct": false,
                "text": "Incorreta. O console do CodePipeline não permite configurar gatilhos diretamente para funções Lambda."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon CloudWatch Events permite criar regras que detectam mudanças de estado no CodePipeline e invocam funções Lambda como resposta."
            }
        ],
        "glossary": [
            "AWS CodePipeline: Serviço de entrega contínua que automatiza as etapas de compilação, teste e implantação.",
            "Amazon CloudWatch Events: Serviço que detecta e roteia eventos em tempo real.",
            "Função Lambda: Serviço de computação serverless que executa código sob demanda.",
            "Gatilho: Mecanismo que invoca automaticamente uma função Lambda quando um evento ocorre."
        ],
        "generalExplanation": [
            "A melhor forma de integrar uma função Lambda a mudanças de estado no CodePipeline é por meio de uma regra do Amazon CloudWatch Events. O CodePipeline publica automaticamente eventos ao longo do seu ciclo de vida. Esses eventos podem ser capturados por uma regra no EventBridge, que atua como intermediário entre o pipeline e a função Lambda, invocando-a conforme as condições configuradas."
        ],
        "realWorld": [
            "Em um pipeline de CI/CD gerenciado pelo AWS CodePipeline, equipes de DevOps frequentemente precisam automatizar respostas a mudanças de status. Um exemplo prático seria criar uma regra no EventBridge que escute eventos do CodePipeline e configure essa regra para invocar uma função Lambda que envie mensagens no Slack, notificando sucesso ou falha no pipeline."
        ]
    },
    {
        "id": 17,
        "title": "Pergunta 17",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um aplicativo móvel popular recupera dados de uma tabela AWS DynamoDB provisionada com unidades de capacidade de leitura (RCUs) que são distribuídas igualmente entre quatro partições. Uma dessas partições está recebendo mais tráfego do que as outras, causando problemas de partição quente. Qual tecnologia permitirá reduzir o tráfego de leitura na sua tabela AWS DynamoDB com o mínimo esforço?",
        "options": [
            {
                "letter": "A",
                "text": "DynamoDB Streams",
                "correct": false
            },
            {
                "letter": "B",
                "text": "ElastiCache",
                "correct": false
            },
            {
                "letter": "C",
                "text": "DynamoDB DAX",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Mais partições",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O DynamoDB Streams registra modificações, mas não ajuda a reduzir o tráfego de leitura."
            },
            {
                "correct": false,
                "text": "Incorreta. O ElastiCache pode armazenar em cache, mas requer modificações no código da aplicação."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon DynamoDB Accelerator (DAX) é um cache em memória totalmente gerenciado que oferece até 10 vezes mais desempenho, reduzindo a latência e requerendo mudanças mínimas no código."
            },
            {
                "correct": false,
                "text": "Incorreta. O DynamoDB gerencia automaticamente a criação e o balanceamento de partições."
            }
        ],
        "glossary": [
            "DynamoDB DAX: Cache em memória otimizado para o DynamoDB que reduz a latência das leituras.",
            "ElastiCache: Serviço de cache em memória que melhora o desempenho de leitura.",
            "Partição Quente: Condição em que uma partição recebe volume desproporcional de tráfego.",
            "DynamoDB Streams: Recurso que registra mudanças nos itens da tabela."
        ],
        "generalExplanation": [
            "O Amazon DynamoDB Accelerator (DAX) é a melhor solução para reduzir a latência de leitura e mitigar gargalos causados por partições quentes. DAX atua como um cache em memória totalmente integrado ao DynamoDB, oferecendo tempos de resposta em microssegundos. Ele é API-compatível com o DynamoDB, o que significa que a aplicação pode se beneficiar de caching com mudanças mínimas no código."
        ],
        "realWorld": [
            "Considere um aplicativo móvel que consulta dados de perfis e preferências de usuários armazenados em DynamoDB. Durante picos de acesso, determinadas partições podem ficar sobrecarregadas, gerando lentidão. Ao integrar o DynamoDB DAX, a equipe consegue reduzir a latência de leitura, evitar partições quentes e diminuir o custo com RCU."
        ]
    },
    {
        "id": 18,
        "title": "Pergunta 18",
        "domain": "Segurança",
        "prompt": "Você está implantando funções Lambda que operam em seus buckets S3 para ler arquivos e extrair metadados importantes. As funções Lambda são gerenciadas usando o AWS SAM. Qual política você deve inserir no template do seu modelo serverless para conceder acesso de leitura aos buckets?",
        "options": [
            {
                "letter": "A",
                "text": "S3ReadPolicy",
                "correct": true
            },
            {
                "letter": "B",
                "text": "SQSPollerPolicy",
                "correct": false
            },
            {
                "letter": "C",
                "text": "LambdaInvokePolicy",
                "correct": false
            },
            {
                "letter": "D",
                "text": "S3CrudPolicy",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. A política S3ReadPolicy concede permissão somente de leitura para objetos em um bucket Amazon S3."
            },
            {
                "correct": false,
                "text": "Incorreta. A política SQSPollerPolicy concede permissão para realizar polling em uma fila do Amazon SQS."
            },
            {
                "correct": false,
                "text": "Incorreta. A política LambdaInvokePolicy permite invocar uma função Lambda."
            },
            {
                "correct": false,
                "text": "Incorreta. A política S3CrudPolicy concede permissões completas de criação, leitura, atualização e exclusão."
            }
        ],
        "glossary": [
            "AWS SAM: Framework que simplifica a definição, construção e implantação de aplicações serverless.",
            "AWS Lambda: Serviço de computação serverless que executa código sob demanda.",
            "S3 Bucket: Serviço de armazenamento de objetos altamente escalável.",
            "Política IAM: Documento JSON que define permissões de acesso a recursos AWS."
        ],
        "generalExplanation": [
            "Quando uma função Lambda precisa ler objetos de um bucket S3, a política apropriada a ser configurada no AWS SAM é a S3ReadPolicy. Essa política segue o princípio do menor privilégio, concedendo apenas as permissões estritamente necessárias, garantindo segurança e conformidade com as melhores práticas da AWS."
        ],
        "realWorld": [
            "Suponha que uma equipe desenvolva uma aplicação serverless que processa relatórios financeiros enviados diariamente para um bucket S3. A função Lambda é acionada por um evento de upload e precisa apenas ler os arquivos para extrair e validar metadados. No template AWS SAM, o desenvolvedor adiciona a política S3ReadPolicy com o BucketName referenciado."
        ]
    },
    {
        "id": 19,
        "title": "Pergunta 19",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa hospedou seu site de avaliações de restaurantes em uma instância Amazon EC2. O site suporta múltiplos idiomas e o idioma preferido é adicionado como um parâmetro de string de consulta (query string) na requisição. A estrutura de diretórios e os nomes dos arquivos para todas as versões do site são idênticos. O site responde com a página no idioma escolhido quando acessado diretamente. No entanto, quando a mesma página é acessada através da distribuição CloudFront configurada, ela retorna o idioma padrão, ignorando o parâmetro de idioma. Como você corrigiria esse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Escolha a opção Personalizar para a configuração de Cache de Objetos e reduza o valor do TTL padrão para que o CloudFront encaminhe as requisições para a origem com mais frequência.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Crie uma nova política de cache para a distribuição CloudFront e configure o comportamento de cache para Nenhum, para melhorar o desempenho do cache. Atualize a distribuição CloudFront para usar a nova política de cache.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Crie uma nova política de cache para a distribuição CloudFront e configure o comportamento de cache para Encaminhamento e cache de strings de consulta. No campo de lista branca (whitelist) de strings de consulta, inclua o parâmetro de idioma. Atualize a distribuição CloudFront para usar a nova política de cache.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Crie uma nova política de cache para a distribuição CloudFront e configure o comportamento de cache para Cache baseado em cabeçalhos de requisição selecionados. Use a lista branca de cabeçalhos como critério de cache.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Reduzir o TTL não resolve o problema da falta de diferenciação do cache por idioma."
            },
            {
                "correct": false,
                "text": "Incorreta. A opção 'Nenhum' indica que o CloudFront não deve diferenciar o cache com base em parâmetros."
            },
            {
                "correct": true,
                "text": "Correta. Ao configurar o encaminhamento e cache baseado em uma lista branca de parâmetros, o CloudFront diferencia o cache para cada idioma."
            },
            {
                "correct": false,
                "text": "Incorreta. O problema está relacionado a parâmetros de string de consulta, não a cabeçalhos."
            }
        ],
        "glossary": [
            "CloudFront: Serviço de CDN que distribui conteúdo globalmente com baixa latência.",
            "Query string: Parte da URL iniciada por ? que contém pares de chave-valor.",
            "Política de cache: Conjunto de regras que define como o CloudFront armazena e diferencia o cache.",
            "Lista branca: Lista explícita de parâmetros que o CloudFront deve levar em conta ao criar chaves de cache."
        ],
        "generalExplanation": [
            "O problema ocorre porque, por padrão, o CloudFront não diferencia o cache com base nos parâmetros da query string. A solução correta é criar uma política de cache personalizada que encaminhe e armazene em cache o parâmetro de idioma da query string. Assim, o CloudFront gera chaves de cache distintas para cada idioma, garantindo que os usuários recebam a página correta."
        ],
        "realWorld": [
            "Em um site multilíngue distribuído via CloudFront, como um portal corporativo ou e-commerce global, os usuários podem acessar URLs como https://exemplo.com/home?lang=pt. Sem uma política de cache adequada, todos os usuários receberiam o mesmo conteúdo. Ao configurar o CloudFront para armazenar e servir conteúdo em cache com base no parâmetro lang, o CDN cria versões separadas da página para cada idioma."
        ]
    },
    {
        "id": 20,
        "title": "Pergunta 20",
        "domain": "Solução de problemas e otimização",
        "prompt": "Você tem coletado rastreamentos do AWS X-Ray em várias aplicações e agora deseja indexar esses rastreamentos para pesquisar e filtrá-los de forma eficiente. O que você deve usar na sua instrumentação?",
        "options": [
            {
                "letter": "A",
                "text": "Metadados (Metadata)",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Segmentos (Segments)",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Amostragem (Sampling)",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Anotações (Annotations)",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Metadados não são indexados pelo X-Ray."
            },
            {
                "correct": false,
                "text": "Incorreta. Segmentos representam os dados enviados pelos recursos computacionais."
            },
            {
                "correct": false,
                "text": "Incorreta. Amostragem é um algoritmo para determinar quais solicitações serão rastreadas."
            },
            {
                "correct": true,
                "text": "Correta. Anotações são pares chave-valor simples que o X-Ray indexa para permitir buscas e filtragens eficientes."
            }
        ],
        "glossary": [
            "Anotações: Pares chave-valor que o AWS X-Ray indexa automaticamente.",
            "Metadados: Pares chave-valor que podem conter valores complexos, mas não são indexados.",
            "Segmentos: Unidades básicas do X-Ray que representam o trabalho executado por um recurso.",
            "Amostragem: Mecanismo que define quais requisições serão rastreadas."
        ],
        "generalExplanation": [
            "A opção correta é o uso de Anotações, pois são os únicos dados indexados pelo AWS X-Ray, permitindo buscas e filtragens eficientes de rastreamentos tanto pelo console quanto pela API. As anotações são ideais para marcar informações específicas em cada rastreamento, como IDs de usuário, status de pedidos ou regiões geográficas."
        ],
        "realWorld": [
            "Em uma aplicação serverless com múltiplos microserviços orquestrados por API Gateway, AWS Lambda e DynamoDB, o time de desenvolvimento pode instrumentar o código com anotações no X-Ray, adicionando informações como userId, endpoint e region. Com essas anotações, é possível filtrar rapidamente rastreamentos no console do X-Ray para analisar apenas as requisições de um cliente específico ou de um endpoint problemático."
        ]
    },
    {
        "id": 21,
        "title": "Pergunta 21",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma aplicação de comércio eletrônico de uma empresa fica lenta quando há picos de tráfego. A aplicação possui uma arquitetura de três camadas (web, aplicação e banco de dados) que utiliza transações síncronas. A equipe de desenvolvimento identificou gargalos na camada de aplicação e está buscando uma solução de longo prazo para melhorar o desempenho da aplicação. Como um desenvolvedor associado, qual das seguintes soluções você sugeriria para atender aos tempos de resposta exigidos pela aplicação, considerando os picos de tráfego?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar Amazon SQS com chamadas assíncronas do AWS Lambda para desacoplar as camadas de aplicação e dados",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar escalabilidade horizontal para as camadas web e de aplicação por meio de grupos de Auto Scaling e Application Load Balancer",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Utilizar escalabilidade horizontal para a camada de persistência da aplicação adicionando Oracle RAC na AWS",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar escalabilidade vertical para a instância da aplicação, provisionando uma instância Amazon EC2 de maior porte",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A aplicação atual depende de transações síncronas e não deve haver alteração na arquitetura."
            },
            {
                "correct": true,
                "text": "Correta. Escalabilidade horizontal permite aumentar a capacidade adicionando mais instâncias, distribuindo a carga."
            },
            {
                "correct": false,
                "text": "Incorreta. O problema está na camada de aplicação, não na camada de persistência."
            },
            {
                "correct": false,
                "text": "Incorreta. Escalabilidade vertical é uma solução temporária que não atende bem a picos de tráfego."
            }
        ],
        "glossary": [
            "Escalabilidade Horizontal: Estratégia de aumento de capacidade adicionando mais instâncias.",
            "Escalabilidade Vertical: Aumento de capacidade expandindo os recursos de uma única instância.",
            "Auto Scaling: Serviço que ajusta automaticamente a quantidade de instâncias EC2.",
            "Application Load Balancer: Balanceador de carga que distribui o tráfego HTTP/HTTPS."
        ],
        "generalExplanation": [
            "Para melhorar o desempenho da aplicação durante picos de tráfego sem alterar a arquitetura síncrona existente, a abordagem ideal é implementar escalabilidade horizontal nas camadas web e de aplicação, configurando grupos de Auto Scaling e um Application Load Balancer. Essa solução melhora o desempenho e a disponibilidade sem exigir modificações no modelo transacional atual."
        ],
        "realWorld": [
            "Imagine uma loja virtual que enfrenta grandes picos de tráfego durante promoções, como a Black Friday. Ao adotar Auto Scaling e um Application Load Balancer, a equipe de DevOps garante que novas instâncias EC2 sejam criadas automaticamente quando o tráfego aumenta e que o ALB distribua as requisições de forma equilibrada entre todas as instâncias."
        ]
    },
    {
        "id": 22,
        "title": "Pergunta 22",
        "domain": "Solução de problemas e otimização",
        "prompt": "Você está trabalhando com uma instância bastion t2.small que possui o AWS CLI instalado para ajudar a gerenciar todos os serviços AWS instalados nela. Gostaria de saber o grupo de segurança e o ID da instância da instância atual. Qual das opções a seguir ajudará você a obter as informações necessárias?",
        "options": [
            {
                "letter": "A",
                "text": "Criar uma função IAM e anexá-la à sua instância EC2 para realizar uma chamada de API 'describe'",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Consultar os dados do usuário em http://169.254.169.254/latest/user-data",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Consultar os dados do usuário em http://254.169.254.169/latest/meta-data",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Consultar os metadados em http://169.254.169.254/latest/meta-data",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O comando describe-instances requer o ID da instância como entrada."
            },
            {
                "correct": false,
                "text": "Incorreta. Este endereço retorna os dados do usuário, não os metadados da instância."
            },
            {
                "correct": false,
                "text": "Incorreta. O endereço IP está incorreto."
            },
            {
                "correct": true,
                "text": "Correta. Os metadados da instância estão disponíveis localmente no endereço link-local 169.254.169.254."
            }
        ],
        "glossary": [
            "Instância Bastion: Servidor intermediário usado como ponto de acesso seguro.",
            "AWS CLI: Ferramenta de linha de comando da AWS.",
            "Metadados da instância: Informações nativas e dinâmicas sobre uma instância EC2.",
            "Dados do usuário: Script ou configuração fornecida durante o lançamento da instância."
        ],
        "generalExplanation": [
            "A forma correta e mais eficiente de obter informações detalhadas sobre a própria instância EC2 é por meio da consulta aos metadados via endereço link-local: http://169.254.169.254/latest/meta-data/. Esse endpoint é acessível somente dentro da instância, sem exigir permissões IAM ou dependência da AWS CLI, fornecendo informações em tempo real de maneira segura e isolada."
        ],
        "realWorld": [
            "Em ambientes de automação e infraestrutura como código, é comum que instâncias EC2 precisem identificar a si mesmas dinamicamente. Um script de inicialização pode coletar o ID da instância e o nome do grupo de segurança para registrar automaticamente o servidor em um sistema de inventário, usando comandos como curl http://169.254.169.254/latest/meta-data/instance-id."
        ]
    },
    {
        "id": 23,
        "title": "Pergunta 23",
        "domain": "Solução de problemas e otimização",
        "prompt": "Você deseja paginar os resultados de um comando List do S3 para mostrar 100 resultados por página aos seus usuários e minimizar o número de chamadas de API utilizadas. Quais opções da CLI você deve usar? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "--max-items",
                "correct": true
            },
            {
                "letter": "B",
                "text": "--page-size",
                "correct": false
            },
            {
                "letter": "C",
                "text": "--limit",
                "correct": false
            },
            {
                "letter": "D",
                "text": "--starting-token",
                "correct": true
            },
            {
                "letter": "E",
                "text": "--next-token",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. A opção --max-items limita o número total de itens retornados pela chamada da CLI."
            },
            {
                "correct": false,
                "text": "Incorreta. --page-size define quantos itens são processados por chamada interna da API, mas não controla a quantidade total de resultados exibidos."
            },
            {
                "correct": false,
                "text": "Incorreta. --limit não é uma opção válida na AWS CLI para paginação."
            },
            {
                "correct": true,
                "text": "Correta. --starting-token é usado para indicar o ponto de início para a paginação."
            },
            {
                "correct": false,
                "text": "Incorreta. --next-token não é uma opção válida na AWS CLI."
            }
        ],
        "glossary": [
            "--max-items: Parâmetro que limita o número total de itens retornados.",
            "--starting-token: Parâmetro usado para definir o ponto de início de uma listagem paginada.",
            "--page-size: Define quantos itens são requisitados por chamada interna da API.",
            "Paginação: Técnica que divide grandes volumes de resultados em páginas menores."
        ],
        "generalExplanation": [
            "A combinação correta para implementar paginação na AWS CLI e controlar o número de itens exibidos por página é o uso conjunto das opções --max-items e --starting-token. O parâmetro --max-items define o número total de itens exibidos ao usuário, enquanto --starting-token permite continuar a listagem a partir de um ponto específico."
        ],
        "realWorld": [
            "Em uma aplicação web que lista arquivos armazenados em um bucket S3, um desenvolvedor pode usar o comando aws s3api list-objects --bucket meu-bucket --max-items 100 para listar 100 objetos por página. O comando retorna os 100 primeiros itens e, junto com eles, um NextToken. Para exibir a próxima página, basta reutilizar esse token: aws s3api list-objects --bucket meu-bucket --starting-token <NextToken> --max-items 100."
        ]
    },
    {
        "id": 24,
        "title": "Pergunta 24",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma aplicação crítica para o negócio está hospedada em uma instância Amazon EC2 e a última atualização está na fase de testes. A empresa solicitou uma solução para monitorar o tempo médio de resposta da aplicação e enviar uma notificação ao gerente caso esse tempo ultrapasse um determinado limite. A atualização será implementada no ambiente de produção, onde a solução será implantada em múltiplas instâncias EC2. Para atender aos requisitos do negócio, a solução deve incluir tanto a coleta da métrica personalizada via logs quanto o alarme para notificação. Quais das seguintes opções você combinaria para atender a esses requisitos? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Configurar uma regra personalizada no Amazon EventBridge para enviar uma notificação pelo Amazon Simple Notification Service (Amazon SNS) quando a média da métrica de tempo de resposta ultrapassar o limite estabelecido",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Configurar a aplicação para gravar o tempo de resposta em um arquivo de log na instância EC2. Instalar e configurar o agente do Amazon CloudWatch na instância EC2 para transmitir os logs da aplicação para o CloudWatch Logs. Criar um filtro de métrica para extrair o tempo de resposta do arquivo de log",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Instalar e configurar o AWS Systems Manager Agent (SSM Agent) nas instâncias EC2 para monitorar o tempo de resposta e enviar os dados para o Amazon CloudWatch como uma métrica personalizada",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Criar um alarme no Amazon CloudWatch para enviar uma notificação pelo Amazon Simple Notification Service (Amazon SNS) quando a média da métrica de tempo de resposta ultrapassar o limite estabelecido",
                "correct": true
            },
            {
                "letter": "E",
                "text": "Configurar a aplicação para gravar o tempo de resposta em um arquivo de log na instância. Instalar e configurar o agente do Amazon Inspector nas instâncias EC2 para ler os logs e enviar o tempo de resposta para o Amazon EventBridge",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Parcialmente correta. O EventBridge pode ser integrado ao CloudWatch para reagir a alarmes, mas não é a ferramenta principal para monitorar métricas."
            },
            {
                "correct": true,
                "text": "Correta. O agente unificado do CloudWatch pode coletar logs e métricas personalizadas de instâncias EC2."
            },
            {
                "correct": false,
                "text": "Incorreta. O SSM Agent é usado para gerenciamento e automação, não para coleta de métricas."
            },
            {
                "correct": true,
                "text": "Correta. O CloudWatch permite criar alarmes baseados em métricas e enviar notificações via SNS."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon Inspector é para segurança, não para coleta de logs ou métricas."
            }
        ],
        "glossary": [
            "Amazon CloudWatch: Serviço de monitoramento e observabilidade que coleta métricas, logs e eventos.",
            "Amazon SNS: Serviço de mensageria que permite envio de notificações.",
            "Amazon EventBridge: Serviço de barramento de eventos que integra aplicações.",
            "Amazon Inspector: Serviço automatizado de análise de vulnerabilidades."
        ],
        "generalExplanation": [
            "A melhor abordagem para monitorar o tempo médio de resposta da aplicação e enviar notificações automáticas é usar o conjunto integrado de recursos do Amazon CloudWatch e Amazon SNS. O AWS CloudWatch Agent coleta logs da aplicação, filtros de métrica transformam esses dados em métricas personalizadas, e um alarme do CloudWatch monitora essa métrica e aciona uma notificação via SNS quando o valor ultrapassa um limite definido."
        ],
        "realWorld": [
            "Em um ambiente de produção com várias instâncias EC2 executando uma aplicação web crítica, um engenheiro de DevOps pode configurar o CloudWatch Agent para enviar logs contendo o tempo de resposta das requisições, um filtro de métrica que calcula a média de resposta a partir desses logs, um alarme do CloudWatch que monitora essa métrica personalizada, e uma notificação SNS que alerta o time de operações se o tempo de resposta exceder 2 segundos."
        ]
    },
    {
        "id": 25,
        "title": "Pergunta 25",
        "domain": "Solução de problemas e otimização",
        "prompt": "Qual variável de ambiente pode ser usada pelo AWS X-Ray SDK para garantir que o daemon seja corretamente descoberto no ECS?",
        "options": [
            {
                "letter": "A",
                "text": "AWS_XRAY_CONTEXT_MISSING",
                "correct": false
            },
            {
                "letter": "B",
                "text": "AWS_XRAY_TRACING_NAME",
                "correct": false
            },
            {
                "letter": "C",
                "text": "AWS_XRAY_DAEMON_ADDRESS",
                "correct": true
            },
            {
                "letter": "D",
                "text": "AWS_XRAY_DEBUG_MODE",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Essa variável controla o comportamento do SDK quando não há um segmento aberto."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa variável define o nome do serviço, mas não influencia na descoberta do daemon."
            },
            {
                "correct": true,
                "text": "Correta. Essa variável configura o endereço IP e a porta onde o daemon do X-Ray está escutando."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa variável ativa a saída de logs do SDK, mas não tem relação com a localização do daemon."
            }
        ],
        "glossary": [
            "AWS X-Ray SDK: Biblioteca que instrumenta aplicações para coletar dados de rastreamento.",
            "Daemon do X-Ray: Processo que recebe os dados de rastreamento do SDK e os envia ao X-Ray.",
            "ECS: Serviço de orquestração de contêineres que facilita a execução de aplicações Docker.",
            "Variável de ambiente: Configuração externa usada para definir parâmetros de comportamento."
        ],
        "generalExplanation": [
            "A variável de ambiente AWS_XRAY_DAEMON_ADDRESS é essencial para que o AWS X-Ray SDK saiba para onde enviar os dados de rastreamento. Por padrão, o SDK envia os segmentos para 127.0.0.1:2000/UDP, mas em ambientes containerizados como o Amazon ECS, o daemon do X-Ray pode estar em outro endereço IP ou porta, exigindo configuração explícita."
        ],
        "realWorld": [
            "Em um cenário prático, uma equipe de desenvolvimento executa microserviços em contêineres ECS, e o daemon do X-Ray é executado em um contêiner dedicado dentro da mesma task definition. Para que cada microserviço envie seus dados de rastreamento corretamente, é necessário definir a variável de ambiente AWS_XRAY_DAEMON_ADDRESS=xray-daemon:2000."
        ]
    },
    {
        "id": 26,
        "title": "Pergunta 26",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua organização possui um único bucket do Amazon Simple Storage Service (S3) que contém pastas nomeadas com os nomes dos clientes. Vários administradores possuem acesso IAM ao bucket S3 e o versionamento está habilitado para facilitar a recuperação de ações não intencionais dos usuários. Qual das seguintes afirmações sobre versionamento NÃO é verdadeira com base nesse cenário?",
        "options": [
            {
                "letter": "A",
                "text": "Qualquer arquivo que estava sem versionamento antes de habilitar o versionamento terá a versão 'null'.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Sobrescrever um arquivo aumenta o número de versões.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Excluir um arquivo é uma operação recuperável.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "O versionamento pode ser habilitado apenas para uma pasta específica.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Objetos armazenados antes da ativação do versionamento possuem um ID de versão 'null'."
            },
            {
                "correct": false,
                "text": "Incorreta. Ao sobrescrever um objeto, uma nova versão é criada."
            },
            {
                "correct": false,
                "text": "Incorreta. Ao excluir um objeto, o S3 insere um marcador de exclusão, permitindo que a versão anterior seja restaurada."
            },
            {
                "correct": true,
                "text": "Correta. O estado de versionamento é aplicado a todos os objetos dentro do bucket, nunca apenas a uma pasta específica."
            }
        ],
        "glossary": [
            "Amazon S3: Serviço de armazenamento de objetos que permite guardar e recuperar dados.",
            "Versionamento: Recurso que mantém múltiplas versões de um mesmo objeto.",
            "ID de versão 'null': Identificador atribuído a objetos criados antes da ativação do versionamento.",
            "Marcador de exclusão: Versão especial criada quando um objeto é excluído."
        ],
        "generalExplanation": [
            "O versionamento no Amazon S3 é um recurso configurado no nível do bucket, não em pastas ou prefixos. Quando ativado, ele passa a aplicar-se automaticamente a todos os objetos dentro do bucket. Não é possível habilitar o versionamento apenas para uma pasta específica. Objetos existentes antes da ativação permanecem com o ID de versão 'null'."
        ],
        "realWorld": [
            "Em uma empresa que armazena documentos sensíveis e históricos de clientes em um bucket S3 compartilhado, o versionamento é crucial para prevenir perdas acidentais. Se um colaborador sobrescrever um contrato PDF, o S3 mantém a versão antiga. Se um arquivo for excluído por engano, basta remover o marcador de exclusão para restaurá-lo."
        ]
    },
    {
        "id": 27,
        "title": "Pergunta 27",
        "domain": "Implantação",
        "prompt": "Uma empresa de comércio eletrônico implantou sua aplicação no AWS Elastic Beanstalk. O grupo de Auto Scaling associado ao ambiente do Beanstalk possui três instâncias Amazon EC2. Quando o número de instâncias cai para menos de duas, o desempenho da aplicação web é severamente impactado. Atualmente, a empresa utiliza a política de implantação padrão 'all-at-once' e está buscando uma estratégia eficaz para implantações futuras. Qual das seguintes representa a estratégia de implantação mais custo-efetiva para a empresa?",
        "options": [
            {
                "letter": "A",
                "text": "Optar pela estratégia de implantação rolling. Configurar o tamanho do lote para 2",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Optar pela estratégia de implantação com divisão de tráfego, configurando o parâmetro de divisão de tráfego para 50% do total de tráfego",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Optar pela estratégia de implantação rolling com lote adicional. Configurar o parâmetro de tamanho do lote para 1",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Configurar um Elastic Load Balancer para frente do Auto Scaling Group e escolher duas Zonas de Disponibilidade (AZs) diferentes para a implantação",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Com o tamanho do lote configurado para 2, apenas uma instância permaneceria ativa, impactando o desempenho."
            },
            {
                "correct": false,
                "text": "Incorreta. A divisão de tráfego é eficaz para testes, mas é mais cara e não é a mais custo-efetiva."
            },
            {
                "correct": true,
                "text": "Correta. A estratégia rolling com lote adicional permite lançar um lote extra de instâncias antes de retirar as antigas, garantindo capacidade total durante a implantação."
            },
            {
                "correct": false,
                "text": "Incorreta. Adicionar múltiplas AZs aumenta a resiliência, mas não constitui uma estratégia de implantação."
            }
        ],
        "glossary": [
            "Elastic Beanstalk: Serviço que simplifica a implantação, gerenciamento e escalabilidade de aplicações.",
            "Auto Scaling Group: Conjunto de instâncias EC2 que ajusta automaticamente a quantidade de recursos.",
            "Rolling Deployment: Estratégia que substitui gradualmente instâncias antigas por novas.",
            "Rolling with Additional Batch: Variação que adiciona um lote extra de instâncias antes de iniciar a substituição."
        ],
        "generalExplanation": [
            "Para cenários em que é necessário manter a disponibilidade e desempenho da aplicação durante a implantação, a estratégia mais adequada e custo-efetiva é Rolling Deployment com lote adicional e tamanho de lote configurado para 1. Essa abordagem mantém a capacidade mínima necessária, evita degradação do serviço e é mais econômica do que a divisão de tráfego."
        ],
        "realWorld": [
            "Em um e-commerce de alta demanda, a aplicação precisa estar sempre disponível para não afetar vendas. Ao lançar uma nova versão, o time configura Rolling Deployment com lote adicional no Elastic Beanstalk. Antes de substituir instâncias antigas, um lote extra é iniciado, garantindo que pelo menos duas instâncias estejam sempre ativas para atender requisições."
        ]
    },
    {
        "id": 28,
        "title": "Pergunta 28",
        "domain": "Implantação",
        "prompt": "Você criou um ambiente de teste no Elastic Beanstalk e, como parte desse ambiente, criou um banco de dados RDS. Como garantir que o banco de dados possa ser acessado e explorado após a destruição do ambiente?",
        "options": [
            {
                "letter": "A",
                "text": "Alterar as variáveis de ambiente do Elastic Beanstalk.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Converter o ambiente Elastic Beanstalk para um ambiente worker.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Realizar uma exclusão seletiva no Elastic Beanstalk.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Fazer um snapshot do banco de dados antes que ele seja excluído.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Modificar variáveis de ambiente não afeta o ciclo de vida do banco de dados RDS."
            },
            {
                "correct": false,
                "text": "Incorreta. Não é possível converter um ambiente Elastic Beanstalk existente para outro tipo."
            },
            {
                "correct": false,
                "text": "Incorreta. O Elastic Beanstalk não oferece funcionalidade de exclusão seletiva para recursos associados."
            },
            {
                "correct": true,
                "text": "Correta. Criar um snapshot do banco de dados RDS antes da exclusão do ambiente é a forma adequada de preservar os dados."
            }
        ],
        "glossary": [
            "Elastic Beanstalk: Serviço que simplifica a implantação, escalabilidade e gerenciamento de aplicações.",
            "RDS: Serviço gerenciado de bancos de dados relacionais.",
            "Snapshot: Cópia pontual e consistente de um banco de dados usada para backup.",
            "Ambiente Worker: Tipo de ambiente projetado para processar tarefas em segundo plano."
        ],
        "generalExplanation": [
            "Quando um banco de dados Amazon RDS é criado como parte integrante de um ambiente Elastic Beanstalk, ele compartilha o mesmo ciclo de vida do ambiente. Ao excluir o ambiente, o banco RDS também será automaticamente destruído. A maneira correta de garantir a continuidade das informações é criar um snapshot do banco de dados antes de excluir o ambiente."
        ],
        "realWorld": [
            "Em ambientes de teste, homologação ou desenvolvimento, é comum que equipes criem rapidamente ambientes Elastic Beanstalk com RDS integrado para validar novas versões. Antes de remover o ambiente de staging, o time executa o comando aws rds create-db-snapshot para criar um snapshot de segurança, que pode ser restaurado posteriormente."
        ]
    },
    {
        "id": 29,
        "title": "Pergunta 29",
        "domain": "Segurança",
        "prompt": "Uma empresa do setor financeiro utiliza o Amazon S3 para armazenar dados de clientes transformados e anonimizados, gerados por um job batch diário. A equipe de desenvolvimento foi encarregada de construir uma solução que analise a saída desse job diário em busca de qualquer informação financeira sensível sobre os clientes da empresa. Como um AWS Certified Developer – Associate, qual das opções a seguir você recomendaria para atender a esse caso de uso da forma MAIS eficiente?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar o Amazon Macie para analisar a saída do job batch diário e procurar por quaisquer achados de dados sensíveis do tipo SensitiveData:S3Object/CustomIdentifier",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar o Amazon Macie para analisar a saída do job batch diário e procurar por quaisquer achados de dados sensíveis do tipo SensitiveData:S3Object/Financial",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Configurar uma notificação de evento do S3 para cada upload de objeto que dispare uma função Lambda com script Python para detectar informações sensíveis dos clientes",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar o Amazon Macie para analisar a saída do job batch diário e procurar por quaisquer achados de dados sensíveis do tipo SensitiveData:S3Object/Personal",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. CustomIdentifier refere-se a identificadores personalizados, não especificamente informações financeiras."
            },
            {
                "correct": true,
                "text": "Correta. Essa categoria identifica objetos S3 que contêm informações financeiras sensíveis."
            },
            {
                "correct": false,
                "text": "Incorreta. Manter uma aplicação personalizada para detectar informações sensíveis é ineficiente."
            },
            {
                "correct": false,
                "text": "Incorreta. Personal identifica informações pessoais, não financeiras."
            }
        ],
        "glossary": [
            "Amazon Macie: Serviço que usa machine learning para identificar dados sensíveis no S3.",
            "SensitiveData:S3Object/Financial: Categoria que identifica informações financeiras sensíveis.",
            "SensitiveData:S3Object/Personal: Categoria que detecta dados pessoais identificáveis.",
            "SensitiveData:S3Object/CustomIdentifier: Categoria para regras personalizadas."
        ],
        "generalExplanation": [
            "A opção correta é usar o Amazon Macie para analisar a saída do job batch diário e procurar achados da categoria SensitiveData:S3Object/Financial, pois ela é projetada especificamente para detectar informações financeiras sensíveis em objetos armazenados no Amazon S3. O Macie oferece uma solução totalmente gerenciada, escalável e automatizada, eliminando a necessidade de criar scripts personalizados."
        ],
        "realWorld": [
            "Em um ambiente corporativo do setor financeiro, equipes de engenharia de dados precisam garantir que arquivos processados e armazenados no Amazon S3 não contenham dados financeiros expostos indevidamente. Com o Amazon Macie, a empresa pode agendar análises automáticas após cada job batch diário e detectar dados financeiros sensíveis na categoria SensitiveData:S3Object/Financial."
        ]
    },
    {
        "id": 30,
        "title": "Pergunta 30",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma equipe de desenvolvimento possui um conjunto de aplicações hospedadas tanto on-premises quanto em instâncias EC2. A aplicação on-premises controla todas as aplicações implantadas nas instâncias EC2. Em caso de erros, a equipe deseja utilizar o Amazon CloudWatch para monitorar e solucionar problemas da aplicação on-premises. Como um profissional com certificação Developer Associate, qual das seguintes soluções você recomendaria para atender a esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Enviar os arquivos de log do servidor on-premises para uma instância EC2, que então encaminha os logs para o CloudWatch.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Enviar os arquivos de log do servidor on-premises para o Amazon S3 e permitir que o CloudWatch processe os arquivos a partir do S3.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Configurar o agente do CloudWatch no servidor on-premises utilizando credenciais de um usuário IAM com permissões para o CloudWatch.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Configurar o CloudWatch Logs para ler diretamente os logs do servidor on-premises.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Exige customizações significativas e adiciona complexidade desnecessária."
            },
            {
                "correct": false,
                "text": "Incorreta. Não é uma funcionalidade nativa do CloudWatch para ingestão direta de logs via S3."
            },
            {
                "correct": true,
                "text": "Correta. O agente do CloudWatch permite coletar métricas e logs de servidores on-premises."
            },
            {
                "correct": false,
                "text": "Incorreta. O CloudWatch Logs não possui capacidade nativa para acessar diretamente servidores on-premises."
            }
        ],
        "glossary": [
            "CloudWatch Agent: Software que coleta métricas do sistema e logs de aplicações.",
            "IAM User: Identidade que possui credenciais e permissões específicas.",
            "Amazon EC2: Serviço de computação escalável que permite criar instâncias de servidores virtuais.",
            "Amazon S3: Serviço de armazenamento de objetos altamente durável."
        ],
        "generalExplanation": [
            "A maneira correta e mais segura de integrar servidores on-premises ao Amazon CloudWatch é configurar o CloudWatch Agent com credenciais de um usuário IAM que possua permissões apropriadas para envio de métricas e logs. O CloudWatch Agent foi projetado especificamente para ambientes híbridos, permitindo coletar métricas de servidores locais e consolidar tudo no CloudWatch Console."
        ],
        "realWorld": [
            "Em uma empresa com aplicações críticas executando parte da infraestrutura em data centers locais e parte na AWS, o time de DevOps precisa monitorar performance e disponibilidade. Ao instalar e configurar o CloudWatch Agent nos servidores locais, com um usuário IAM restrito às permissões de gravação no CloudWatch, a equipe consegue unificar a observabilidade de todos os ambientes em um único painel."
        ]
    },
    {
        "id": 31,
        "title": "Pergunta 31",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma instância EC2 possui uma role IAM anexada, que concede acesso de leitura e escrita ao bucket S3 'my_bucket'. Você testou a role IAM e tanto a leitura quanto a escrita funcionam corretamente. Em seguida, você remove a role IAM da instância EC2 e testa novamente as operações de leitura e escrita. As escritas pararam de funcionar, mas as leituras continuam funcionando. Qual é a causa mais provável desse comportamento?",
        "options": [
            {
                "letter": "A",
                "text": "A instância EC2 está utilizando credenciais temporárias em cache da role IAM.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Quando uma leitura é feita em um bucket, existe um período de carência de 5 minutos para repetir a mesma leitura.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "A política do bucket S3 autoriza apenas operações de leitura.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Remover uma role de instância de uma EC2 pode levar alguns minutos para entrar em vigor.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Após a remoção da role, as credenciais temporárias expiram rapidamente."
            },
            {
                "correct": false,
                "text": "Incorreta. Cada requisição é avaliada individualmente contra as políticas IAM e do bucket."
            },
            {
                "correct": true,
                "text": "Correta. A combinação das permissões da role IAM e da política do bucket é considerada. Após a remoção da role, apenas a política do bucket permanece."
            },
            {
                "correct": false,
                "text": "Incorreta. A remoção da role é imediata e as permissões são atualizadas instantaneamente."
            }
        ],
        "glossary": [
            "Role IAM: Conjunto de permissões atribuídas a recursos AWS.",
            "Política do Bucket S3: Documento JSON que especifica quem pode executar quais ações.",
            "Credenciais Temporárias: Credenciais geradas dinamicamente com validade limitada.",
            "Avaliação de Políticas: Processo pelo qual a AWS combina e avalia todas as políticas aplicáveis."
        ],
        "generalExplanation": [
            "Quando uma instância EC2 possui uma role IAM anexada, a AWS avalia as permissões combinando a role IAM com as políticas do recurso. Se a role IAM for removida da instância, as permissões concedidas por ela deixam de existir. A partir desse momento, apenas as permissões definidas na política do bucket S3 permanecem válidas. Se a política do bucket permitir apenas operações de leitura, as tentativas de escrita falharão."
        ],
        "realWorld": [
            "Em ambientes de produção, é prática comum anexar roles IAM a instâncias EC2 para permitir que aplicações acessem buckets S3 sem precisar armazenar credenciais estáticas. Uma aplicação hospedada em EC2 que grava logs no S3 pode depender de uma role com permissão s3:PutObject. Se essa role for removida, as gravações falharão imediatamente, embora a aplicação ainda consiga ler arquivos se a política do bucket permitir s3:GetObject."
        ]
    },
    {
        "id": 32,
        "title": "Pergunta 32",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você está utilizando filas FIFO do AWS SQS para garantir a ordenação das mensagens com base no user_id. Como desenvolvedor, qual parâmetro da mensagem você deve definir com o valor do user_id para garantir a ordenação correta?",
        "options": [
            {
                "letter": "A",
                "text": "MessageHash",
                "correct": false
            },
            {
                "letter": "B",
                "text": "MessageGroupId",
                "correct": true
            },
            {
                "letter": "C",
                "text": "MessageDeduplicationId",
                "correct": false
            },
            {
                "letter": "D",
                "text": "MessageOrderId",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. MessageHash não é um parâmetro válido do AWS SQS FIFO."
            },
            {
                "correct": true,
                "text": "Correta. O MessageGroupId especifica a qual grupo de mensagens uma mensagem pertence."
            },
            {
                "correct": false,
                "text": "Incorreta. O MessageDeduplicationId é usado para evitar o envio duplicado, não para ordenação."
            },
            {
                "correct": false,
                "text": "Incorreta. MessageOrderId não é um parâmetro reconhecido pelo AWS SQS FIFO."
            }
        ],
        "glossary": [
            "MessageGroupId: Identificador que agrupa mensagens relacionadas e garante ordenação.",
            "MessageDeduplicationId: Token usado para evitar o processamento duplicado.",
            "FIFO: Tipo de fila que assegura que as mensagens sejam processadas na mesma ordem de envio.",
            "AWS SQS: Serviço de filas gerenciado que oferece filas de mensagens confiáveis."
        ],
        "generalExplanation": [
            "Para garantir a ordenação correta das mensagens em uma fila FIFO do Amazon SQS, o parâmetro MessageGroupId deve ser definido em cada mensagem enviada. Esse parâmetro indica ao SQS que todas as mensagens com o mesmo MessageGroupId pertencem ao mesmo grupo lógico de processamento e, portanto, devem ser processadas sequencialmente, uma de cada vez, na ordem em que foram enviadas."
        ],
        "realWorld": [
            "Em uma plataforma de e-commerce onde cada usuário pode realizar múltiplas ações em sequência, o SQS FIFO garante que todas as mensagens relacionadas a um mesmo usuário sejam processadas na ordem correta. Ao configurar a aplicação para enviar as mensagens com MessageGroupId: user_12345, o SQS FIFO garante que todas as mensagens relacionadas a esse usuário sejam processadas na ordem correta."
        ]
    },
    {
        "id": 33,
        "title": "Pergunta 33",
        "domain": "Solução de problemas e otimização",
        "prompt": "Você está executando um serviço público de DNS em uma instância EC2, onde o nome DNS aponta para o endereço IP da instância. Você deseja atualizar seu serviço de DNS, mas gostaria de fazê-lo sem nenhum tempo de inatividade. Qual das seguintes opções ajudará você a realizar isso?",
        "options": [
            {
                "letter": "A",
                "text": "Usar o Route 53",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar um Load Balancer e um grupo de Auto Scaling",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Fornecer um IP privado estático",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar um Elastic IP",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Route 53 é um serviço DNS gerenciado, mas a questão trata de executar seu próprio serviço DNS."
            },
            {
                "correct": false,
                "text": "Incorreta. Load Balancers não fornecem um endereço IP fixo, mas sim um nome DNS."
            },
            {
                "correct": false,
                "text": "Incorreta. Um IP privado estático não é acessível publicamente pela internet."
            },
            {
                "correct": true,
                "text": "Correta. O Elastic IP da AWS permite associar um endereço IP público estático a uma instância EC2."
            }
        ],
        "glossary": [
            "Elastic IP: Endereço IP público estático e persistente que pode ser associado a uma instância EC2.",
            "Load Balancer: Serviço que distribui o tráfego entre várias instâncias, mas não oferece um IP fixo.",
            "Route 53: Serviço DNS gerenciado da AWS que traduz nomes de domínio em endereços IP.",
            "IP privado estático: Endereço IP fixo dentro de uma VPC, não acessível publicamente."
        ],
        "generalExplanation": [
            "Quando se deseja manter um serviço DNS público em uma instância EC2, é crucial utilizar um Elastic IP, pois os endereços IP públicos padrão mudam toda vez que a instância é parada e iniciada novamente. O Elastic IP resolve esse problema ao fornecer um endereço IP fixo que pode ser reassociado a qualquer instância EC2 da mesma região, sem alterar o ponto de acesso público."
        ],
        "realWorld": [
            "Em um cenário real, uma empresa pode operar um servidor DNS próprio hospedado em uma instância EC2. Durante manutenções, o time de DevOps pode precisar substituir a instância por uma nova. Ao associar o mesmo Elastic IP à nova instância, o serviço permanece imediatamente acessível sob o mesmo endereço IP, sem necessidade de alterar os registros DNS ou aguardar propagação global."
        ]
    },
    {
        "id": 34,
        "title": "Pergunta 34",
        "domain": "Solução de problemas e otimização",
        "prompt": "Você é responsável por uma aplicação que roda em múltiplas instâncias Amazon EC2. Na frente dessas instâncias há um balanceador de carga com acesso pela internet que recebe requisições dos clientes e as distribui para as instâncias EC2. Um health check está configurado para acessar a página index.html localizada no diretório raiz para verificar o status de saúde. Ao acessar o site pela internet, os visitantes recebem erros de timeout. O que deve ser verificado primeiro para resolver o problema?",
        "options": [
            {
                "letter": "A",
                "text": "A aplicação está fora do ar.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O Application Load Balancer (ALB) está em processo de aquecimento (warming up).",
                "correct": false
            },
            {
                "letter": "C",
                "text": "As funções IAM (IAM Roles) estão incorretas.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Os grupos de segurança (Security Groups) estão bloqueando o tráfego.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Timeout geralmente indicam problemas de bloqueio no firewall."
            },
            {
                "correct": false,
                "text": "Incorreta. O slow start não causa erros de timeout para os visitantes."
            },
            {
                "correct": false,
                "text": "Incorreta. Problemas com roles IAM não causam timeouts no acesso HTTP."
            },
            {
                "correct": true,
                "text": "Correta. Grupos de segurança atuam como firewalls virtuais e devem permitir o tráfego na porta correta."
            }
        ],
        "glossary": [
            "Application Load Balancer: Serviço que distribui automaticamente o tráfego HTTP/HTTPS.",
            "Health Check: Verificação automática feita pelo ALB para avaliar a saúde das instâncias.",
            "IAM Roles: Papéis de permissão que definem ações que um recurso pode executar.",
            "Security Groups: Firewalls virtuais que controlam o tráfego de entrada e saída."
        ],
        "generalExplanation": [
            "Quando um Application Load Balancer apresenta erros de timeout ao encaminhar requisições, o problema mais comum está relacionado às regras de segurança que bloqueiam o tráfego entre o ALB e as instâncias EC2. O ALB depende das permissões definidas nos Security Groups para enviar e receber tráfego HTTP/HTTPS. Verificar e ajustar os grupos de segurança é a primeira ação recomendada."
        ],
        "realWorld": [
            "Em um ambiente de produção com múltiplas instâncias EC2 atrás de um ALB, erros de timeout podem surgir durante implantações, migrações de rede ou ajustes de segurança. Se o Security Group das instâncias não permitir tráfego inbound na porta 443 proveniente do Security Group do ALB, o tráfego será bloqueado, resultando em timeout para o usuário. A correção envolve permitir no Security Group das instâncias o tráfego de entrada na porta 80/443 com origem no Security Group do ALB."
        ]
    },
    {
        "id": 35,
        "title": "Pergunta 35",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um desenvolvedor definiu uma integração Lambda no Amazon API Gateway utilizando uma variável de estágio. No entanto, ao invocar o método da API, ele retorna consistentemente um 'Erro interno do servidor' com o código de status 500. Quais passos o desenvolvedor deve seguir para corrigir esse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Se você criar uma variável de estágio para chamar uma função Lambda por meio da sua API, deve adicionar as permissões necessárias. Atualize a política baseada em recursos da função Lambda para conceder permissão de invocação ao API Gateway.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Chamadas de API não podem exceder a taxa máxima permitida de solicitações por conta e por Região. Implemente tentativas de erro com backoff exponencial para corrigir o erro.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Ao definir a função Lambda como valor de uma variável de estágio, utilize o ARN da função e não o alias da função para configurar o valor.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Se você criar uma variável de estágio para chamar uma função por meio da sua API, deve adicionar as permissões necessárias. Crie uma função IAM que sua função Lambda possa assumir ao invocar os recursos AWS correspondentes.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. É necessário atualizar a política da função Lambda para conceder permissão de invocação ao API Gateway."
            },
            {
                "correct": false,
                "text": "Incorreta. Quando as chamadas excedem a taxa máxima, o erro retornado é 'Rate Exceeded'."
            },
            {
                "correct": false,
                "text": "Incorreta. Deve-se usar o nome local da função, não o ARN completo."
            },
            {
                "correct": false,
                "text": "Incorreta. A solução correta é conceder permissão ao API Gateway, não o contrário."
            }
        ],
        "glossary": [
            "AWS Lambda: Serviço de computação serverless que executa código em resposta a eventos.",
            "Amazon API Gateway: Serviço que permite criar, publicar e monitorar APIs RESTful.",
            "Variável de Estágio: Parâmetro configurável em um estágio do API Gateway.",
            "Política Baseada em Recursos: Tipo de política IAM anexada diretamente a um recurso AWS."
        ],
        "generalExplanation": [
            "Para que o API Gateway consiga invocar uma função Lambda utilizando uma variável de estágio, é essencial que a função Lambda possua uma política baseada em recursos que autorize explicitamente o API Gateway a invocá-la. Sem essa permissão, o API Gateway retorna um erro 500. Técnicas como backoff exponencial são eficazes para lidar com rate limits, mas não se aplicam a esse tipo de erro de autorização."
        ],
        "realWorld": [
            "Em uma arquitetura serverless moderna, é comum que um time de desenvolvimento mantenha vários ambientes para uma mesma API. O API Gateway utiliza variáveis de estágio para alternar dinamicamente entre versões ou aliases de uma função Lambda. Se a política baseada em recursos da função não permitir a invocação pelo API Gateway, as requisições resultarão em erro 500, interrompendo o fluxo da aplicação."
        ]
    },
    {
        "id": 36,
        "title": "Pergunta 36",
        "domain": "Segurança",
        "prompt": "Uma empresa de mídia deseja migrar um serviço de edição de vídeo para o Amazon EC2 seguindo as melhores práticas de segurança. Os vídeos são obtidos e lidos a partir de um bucket S3 não público. Como um profissional com certificação AWS Certified Developer – Associate, qual das seguintes soluções você recomendaria para esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Criar um usuário IAM com permissões somente leitura para o bucket S3. Configurar as credenciais desse usuário IAM nos dados do usuário (user data) da instância EC2.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar uma função de serviço para S3 com permissões somente leitura para o bucket S3 e anexar essa função ao perfil da instância EC2.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Criar um usuário IAM com permissões somente leitura para o bucket S3. Configurar as credenciais AWS desse usuário via AWS CLI na instância EC2.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Criar uma função de serviço para EC2 com permissões somente leitura para o bucket S3 e anexar essa função ao perfil da instância EC2.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. É uma prática insegura passar credenciais de um usuário IAM diretamente para a aplicação."
            },
            {
                "correct": false,
                "text": "Incorreta. Não existe uma função de serviço específica para S3 que possa ser anexada a uma instância EC2."
            },
            {
                "correct": false,
                "text": "Incorreta. Distribuir credenciais estáticas é uma prática insegura."
            },
            {
                "correct": true,
                "text": "Correta. A melhor prática é usar uma função IAM vinculada ao perfil da instância EC2 para fornecer credenciais temporárias."
            }
        ],
        "glossary": [
            "IAM: Serviço que permite gerenciar identidades, permissões e políticas de acesso.",
            "Função IAM: Entidade que define um conjunto de permissões e pode ser assumida por serviços.",
            "Perfil de instância EC2: Associação entre uma função IAM e uma instância EC2.",
            "Credenciais temporárias: Credenciais emitidas e rotacionadas automaticamente pela AWS."
        ],
        "generalExplanation": [
            "A melhor prática de segurança para permitir que uma instância EC2 acesse um bucket S3 privado é criar uma função IAM com permissões somente leitura e anexá-la ao perfil da instância EC2. Essa abordagem evita o uso de credenciais estáticas, utiliza credenciais temporárias geradas automaticamente, centraliza o controle de permissões e garante conformidade e rastreabilidade via AWS CloudTrail."
        ],
        "realWorld": [
            "Em um sistema de renderização de vídeos hospedado em uma instância EC2 que precisa ler arquivos brutos e salvar resultados em um bucket S3 privado, o fluxo correto seria criar uma função IAM chamada EC2VideoReadOnlyRole com permissão s3:GetObject, anexar essa função ao perfil da instância EC2, e permitir que a aplicação dentro da EC2 use o SDK da AWS para acessar o bucket sem precisar configurar chaves manualmente."
        ]
    },
    {
        "id": 37,
        "title": "Pergunta 37",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Como parte da sua aplicação de processamento de vídeo, você precisa executar um conjunto de tarefas repetitivas e agendadas de forma assíncrona. Sua aplicação está implantada no Elastic Beanstalk. Qual tipo de ambiente do Elastic Beanstalk você deve configurar para executar essas tarefas repetitivas?",
        "options": [
            {
                "letter": "A",
                "text": "Configurar um ambiente Worker e um arquivo .ebextensions",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Configurar um ambiente Web Server e um arquivo .ebextensions",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Configurar um ambiente Worker e um arquivo cron.yaml",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Configurar um ambiente Web Server e um arquivo cron.yaml",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. .ebextensions não é utilizado para definir tarefas cron."
            },
            {
                "correct": false,
                "text": "Incorreta. Ambientes Web Server não são indicados para tarefas agendadas."
            },
            {
                "correct": true,
                "text": "Correta. Ambientes Worker são projetados para processar tarefas assíncronas e repetitivas, e o arquivo cron.yaml define as tarefas agendadas."
            },
            {
                "correct": false,
                "text": "Incorreta. O arquivo cron.yaml só funciona em ambientes Worker."
            }
        ],
        "glossary": [
            "Elastic Beanstalk: Serviço que simplifica a implantação, gerenciamento e escalabilidade de aplicações.",
            "Ambiente Worker: Tipo de ambiente projetado para processar tarefas assíncronas e em segundo plano.",
            "Ambiente Web Server: Ambiente padrão usado para hospedar aplicações web.",
            "cron.yaml: Arquivo de configuração usado em ambientes Worker para definir tarefas agendadas."
        ],
        "generalExplanation": [
            "A configuração correta para executar tarefas agendadas em um ambiente Elastic Beanstalk é utilizar um ambiente Worker em conjunto com um arquivo cron.yaml. O ambiente Worker é projetado especificamente para processar mensagens SQS, permitindo o desacoplamento de tarefas assíncronas. O arquivo cron.yaml define eventos periódicos, que o Beanstalk envia automaticamente para a fila SQS associada ao Worker."
        ],
        "realWorld": [
            "Em uma aplicação de processamento de vídeos hospedada no Elastic Beanstalk, o ambiente Web Server recebe os uploads dos usuários, enquanto o ambiente Worker processa os vídeos gerando thumbnails e transcodificações. O arquivo cron.yaml define a periodicidade de tarefas, como 'verificar a fila a cada 5 minutos' ou 'executar limpeza diária de jobs antigos'."
        ]
    },
    {
        "id": 38,
        "title": "Pergunta 38",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua função Lambda processa arquivos para seus clientes e, como parte desse processo, cria muitos arquivos intermediários que precisam ser armazenados temporariamente no disco e depois descartados. Qual é a melhor forma de armazenar arquivos temporários para suas funções Lambda que serão descartados quando a função parar de ser executada?",
        "options": [
            {
                "letter": "A",
                "text": "Criar um diretório tmp/ dentro do arquivo zip da função e utilizá-lo",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar o diretório local /opt",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar um bucket S3",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar o diretório local /tmp",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Não é possível gravar ou modificar arquivos dentro do pacote zip durante a execução."
            },
            {
                "correct": false,
                "text": "Incorreta. O diretório /opt é utilizado para armazenar bibliotecas e dependências, não para armazenamento temporário."
            },
            {
                "correct": false,
                "text": "Incorreta. O S3 não é adequado para armazenamento temporário efêmero durante a execução."
            },
            {
                "correct": true,
                "text": "Correta. O diretório /tmp oferece 512 MB de espaço temporário que é descartado quando a execução da função termina."
            }
        ],
        "glossary": [
            "AWS Lambda: Serviço de computação serverless que executa código em resposta a eventos.",
            "/tmp: Diretório temporário local disponível durante a execução de uma função Lambda.",
            "/opt: Diretório reservado para bibliotecas e dependências adicionais.",
            "Bucket S3: Serviço de armazenamento de objetos durável e persistente."
        ],
        "generalExplanation": [
            "Durante a execução de uma função Lambda, a única área gravável é o diretório /tmp, com um limite de 512 MB de armazenamento efêmero. Quando a função precisa armazenar arquivos temporários, como resultados intermediários, o /tmp é a escolha correta, pois está disponível somente durante a execução, oferece baixa latência e os dados são descartados automaticamente ao término da execução."
        ],
        "realWorld": [
            "Em uma aplicação serverless de processamento de imagens, o usuário envia uma imagem para o bucket S3, um evento S3 Trigger ativa uma função Lambda, a função baixa a imagem para o diretório /tmp, realiza o redimensionamento e salva o resultado final novamente no S3. Durante o processo, arquivos intermediários são armazenados no /tmp, garantindo rapidez e eficiência sem gerar custos adicionais."
        ]
    },
    {
        "id": 39,
        "title": "Pergunta 39",
        "domain": "Segurança",
        "prompt": "Você deseja que seu ambiente Elastic Beanstalk exponha um endpoint HTTPS e um endpoint HTTP. O endpoint HTTPS deve ser usado para garantir criptografia em trânsito entre seus clientes e seus servidores web, enquanto o endpoint HTTP deve ser utilizado apenas para redirecionar o tráfego para HTTPS e suportar URLs que começam com http://. O que deve ser feito para configurar esse cenário? (Selecione três.)",
        "options": [
            {
                "letter": "A",
                "text": "Desabilitar o Load Balancer e permitir que as instâncias EC2 lidem diretamente com as conexões HTTPS.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Abrir as portas 80 e 443",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Configurar suas instâncias EC2 para redirecionar o tráfego HTTPS para HTTP",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Atribuir um certificado SSL ao Load Balancer",
                "correct": true
            },
            {
                "letter": "E",
                "text": "Configurar suas instâncias EC2 para redirecionar o tráfego HTTP para HTTPS",
                "correct": true
            },
            {
                "letter": "F",
                "text": "Abrir apenas a porta 443",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Desabilitar o Load Balancer remove funcionalidades essenciais."
            },
            {
                "correct": true,
                "text": "Correta. Isso permite que o Load Balancer aceite conexões tanto HTTP (porta 80) quanto HTTPS (porta 443)."
            },
            {
                "correct": false,
                "text": "Incorreta. Redirecionar HTTPS para HTTP reverteria o objetivo de garantir criptografia."
            },
            {
                "correct": true,
                "text": "Correta. Isso garante que o Load Balancer possa expor um endpoint HTTPS."
            },
            {
                "correct": true,
                "text": "Correta. Isso assegura que as requisições HTTP sejam redirecionadas para HTTPS."
            },
            {
                "correct": false,
                "text": "Incorreta. Abrir somente a porta 443 impediria o tráfego HTTP na porta 80."
            }
        ],
        "glossary": [
            "Load Balancer: Componente que distribui o tráfego de rede entre múltiplas instâncias.",
            "Porta 80: Porta padrão para tráfego HTTP, não criptografado.",
            "Porta 443: Porta padrão para tráfego HTTPS, criptografado via TLS/SSL.",
            "Certificado SSL: Certificado digital que permite criptografia das comunicações."
        ],
        "generalExplanation": [
            "Para que um ambiente Elastic Beanstalk suporte HTTP e HTTPS de forma segura, a configuração correta envolve três pontos principais: Load Balancer com certificado SSL, portas abertas (80 e 443) para permitir ambos os tráfegos, e redirecionamento HTTP para HTTPS nas instâncias EC2 para garantir que qualquer acesso via HTTP seja automaticamente convertido para HTTPS."
        ],
        "realWorld": [
            "Em uma aplicação de e-commerce hospedada no Elastic Beanstalk, o Load Balancer recebe requisições em HTTP (porta 80) e HTTPS (porta 443). Usuários que acessam http://www.loja.com são redirecionados automaticamente para HTTPS, garantindo que informações de pagamento e dados pessoais sejam transmitidos de forma segura. O certificado SSL no Load Balancer protege a comunicação, enquanto as instâncias EC2 tratam do redirecionamento."
        ]
    },
    {
        "id": 40,
        "title": "Pergunta 40",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você criou uma tabela DynamoDB para suportar sua aplicação e provisionou RCU e WCU para ela, de modo que sua aplicação está rodando há mais de um ano sem problemas de throttling. Agora, sua aplicação requer um segundo tipo de consulta sobre essa tabela e, por isso, você decidiu criar um LSI e um GSI em uma nova tabela para suportar esse caso de uso. Um mês após a implementação desses índices, parece que sua tabela está sofrendo throttling. Ao analisar as métricas da tabela, percebe-se que o RCU e WCU provisionados ainda são suficientes. O que está acontecendo?",
        "options": [
            {
                "letter": "A",
                "text": "As métricas estão atrasadas no seu painel do CloudWatch.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O LSI está sofrendo throttling, então você precisa provisionar mais RCU e WCU para o LSI.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "O GSI está sofrendo throttling, então você precisa provisionar mais RCU e WCU para o GSI.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Adicionar tanto um LSI quanto um GSI a uma tabela não é recomendado pelas melhores práticas da AWS.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O problema está relacionado ao GSI, não à latência das métricas."
            },
            {
                "correct": false,
                "text": "Incorreta. O LSI utiliza a capacidade provisionada da tabela base, não é possível provisionar capacidade separadamente."
            },
            {
                "correct": true,
                "text": "Correta. O GSI possui sua própria capacidade provisionada e escala separadamente da tabela base."
            },
            {
                "correct": false,
                "text": "Incorreta. É perfeitamente aceitável e comum utilizar LSI e GSI juntos em uma tabela DynamoDB."
            }
        ],
        "glossary": [
            "RCU: Unidade que define a quantidade de leituras por segundo.",
            "WCU: Unidade que define a quantidade de gravações por segundo.",
            "Throttling: Mecanismo que limita requisições quando a capacidade provisionada é excedida.",
            "LSI: Índice secundário local que compartilha a mesma chave de partição da tabela base.",
            "GSI: Índice secundário global com chave de partição independente e capacidade própria."
        ],
        "generalExplanation": [
            "O throttling identificado ocorre no Global Secondary Index (GSI), e não na tabela principal, porque o GSI possui capacidade provisionada separada. Mesmo que a tabela base tenha RCU e WCU suficientes, o GSI pode atingir seu limite e gerar erros de limitação caso a carga de leitura ou escrita exceda sua própria capacidade configurada."
        ],
        "realWorld": [
            "Em uma aplicação serverless com AWS Lambda que consulta diferentes atributos de uma tabela DynamoDB, a tabela principal pode atender bem às consultas por ID, mas ao adicionar um GSI para consultas por outro campo, o tráfego adicional pode causar throttling no índice se sua capacidade não for ajustada. O time de desenvolvimento ajusta a capacidade do GSI para eliminar o gargalo."
        ]
    },
    {
        "id": 41,
        "title": "Pergunta 41",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você está criando uma aplicação web na qual os usuários podem seguir uns aos outros. Alguns usuários serão mais populares que outros e, portanto, seus dados serão solicitados com muita frequência. Atualmente, os dados dos usuários estão no RDS e foi recomendado pelo seu desenvolvedor usar o ElastiCache como uma camada de cache para melhorar o desempenho de leitura. O conjunto completo de dados dos usuários não pode ser armazenado no ElastiCache sem incorrer em custos altíssimos, por isso você deseja armazenar em cache apenas os perfis dos usuários mais solicitados. Como seu site tem alto tráfego, é aceitável que os dados estejam desatualizados por um curto período, desde que essa desatualização seja inferior a um minuto. Qual estratégia de cache você recomenda implementar?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar a estratégia Lazy Loading com TTL",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Utilizar a estratégia Lazy Loading sem TTL",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Utilizar a estratégia Write Through sem TTL",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar a estratégia Write Through com TTL",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Lazy Loading carrega os dados no cache somente quando são solicitados, e o TTL permite que os dados expirem automaticamente após um minuto."
            },
            {
                "correct": false,
                "text": "Incorreta. A ausência de TTL impede que os dados sejam expirados automaticamente, resultando em dados desatualizados por tempo indefinido."
            },
            {
                "correct": false,
                "text": "Incorreta. Sem TTL, os dados podem se tornar obsoletos por tempo indeterminado."
            },
            {
                "correct": false,
                "text": "Incorreta. Write Through pode causar o cache ser preenchido com muitos dados, incluindo aqueles que não são frequentemente acessados."
            }
        ],
        "glossary": [
            "Write Through: Estratégia em que as gravações são realizadas simultaneamente no cache e na base de dados.",
            "TTL: Tempo de vida útil de um dado no cache antes de expirar.",
            "Lazy Loading: Estratégia que armazena dados apenas quando são solicitados pela primeira vez.",
            "ElastiCache: Serviço gerenciado para armazenamento em cache na memória."
        ],
        "generalExplanation": [
            "Em um sistema com alto volume de tráfego e a necessidade de armazenar apenas os perfis mais acessados, a melhor estratégia é utilizar Lazy Loading com TTL. Essa abordagem carrega dados sob demanda, evitando o cache de informações raramente usadas. O TTL garante que os dados sejam automaticamente removidos e recarregados periodicamente, mantendo o cache leve, atualizado e consistente o suficiente para o contexto da aplicação."
        ],
        "realWorld": [
            "Em plataformas de streaming, redes sociais ou e-commerce, alguns usuários ou produtos têm muito mais acessos do que outros. Uma rede social pode utilizar ElastiCache configurado com Lazy Loading e TTL de 60 segundos para armazenar os perfis mais visualizados. Quando um usuário acessa o perfil de uma celebridade, a aplicação busca os dados no cache e, se não existirem, lê do banco RDS, armazena no cache e retorna a resposta."
        ]
    },
    {
        "id": 42,
        "title": "Pergunta 42",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa de mídia analítica desenvolveu uma aplicação de streaming utilizando AWS Lambda e o Serverless Application Model (SAM). Como um profissional com certificação Developer Associate, qual das seguintes sequências representa a ordem correta de execução para implantar a aplicação com sucesso?",
        "options": [
            {
                "letter": "A",
                "text": "Desenvolver o template SAM localmente => fazer upload do template para o CodeCommit => implantar sua aplicação usando CodeDeploy",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Desenvolver o template SAM localmente => fazer upload do template para o Lambda => implantar sua aplicação na nuvem",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Desenvolver o template SAM localmente => usar o AWS Elastic Beanstalk para implantar a aplicação",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Desenvolver o template SAM localmente => fazer o upload do template para o S3 => executar o comando AWS CloudFormation para implantar a aplicação",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Desenvolver o template SAM localmente => fazer o deploy do template no S3 => usar sua aplicação na nuvem",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O processo padrão de implantação do SAM não envolve CodeCommit nem CodeDeploy."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS Lambda não é o local para armazenar templates SAM."
            },
            {
                "correct": false,
                "text": "Incorreta. O Elastic Beanstalk não é utilizado para implantar aplicações serverless baseadas em SAM."
            },
            {
                "correct": false,
                "text": "Incorreta. Fazer o upload manual e executar o CloudFormation separadamente não é o fluxo recomendado."
            },
            {
                "correct": true,
                "text": "Correta. O comando 'sam deploy' compacta os artefatos, faz o upload para o S3 e implanta a aplicação na nuvem usando CloudFormation."
            }
        ],
        "glossary": [
            "AWS SAM: Framework que simplifica a criação, teste e implantação de aplicações serverless.",
            "Amazon S3: Serviço de armazenamento de objetos utilizado pelo SAM para armazenar artefatos.",
            "AWS Lambda: Serviço de computação serverless que executa código em resposta a eventos.",
            "AWS CloudFormation: Serviço que provisiona e gerencia recursos AWS a partir de templates."
        ],
        "generalExplanation": [
            "O processo correto e recomendado de implantação de uma aplicação serverless com o AWS SAM segue uma sequência automatizada: o desenvolvedor define os recursos em um template SAM, executa sam deploy, que empacota os artefatos e os envia para um bucket S3, e então o AWS CloudFormation usa esses artefatos para criar e configurar todos os recursos na nuvem de forma segura e idempotente."
        ],
        "realWorld": [
            "Em um pipeline CI/CD, um time de desenvolvimento cria uma aplicação serverless com AWS Lambda, API Gateway e DynamoDB. Após validar o comportamento localmente, o desenvolvedor executa sam deploy --guided. O comando empacota o código, envia-o para o Amazon S3 e aciona o CloudFormation, que implanta a infraestrutura completa na AWS."
        ]
    },
    {
        "id": 43,
        "title": "Pergunta 43",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você deseja recuperar um subconjunto do seu conjunto de dados armazenado no S3 no formato CSV. Você quer obter os dados de um mês específico e apenas 3 colunas dentre as 10 disponíveis. Para minimizar os custos de computação e rede, qual solução você deve utilizar?",
        "options": [
            {
                "letter": "A",
                "text": "S3 Select",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Logs de Acesso do S3",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Inventário do S3",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Análise do S3",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O S3 Select permite recuperar apenas um subconjunto dos dados usando expressões SQL simples."
            },
            {
                "correct": false,
                "text": "Incorreta. Logs de Acesso fornecem registros detalhados das requisições, não para consulta de dados."
            },
            {
                "correct": false,
                "text": "Incorreta. O Inventário é uma ferramenta para gerenciar o armazenamento, não para recuperar subconjuntos de dados."
            },
            {
                "correct": false,
                "text": "Incorreta. A Análise é utilizada para analisar padrões de acesso, não para filtrar dados."
            }
        ],
        "glossary": [
            "S3 Select: Recurso que permite consultar partes específicas de um objeto usando SQL.",
            "Inventário do S3: Ferramenta que gera relatórios periódicos sobre os objetos em um bucket.",
            "Análise do S3: Funcionalidade voltada à análise de padrões de acesso.",
            "Logs de Acesso do S3: Registros detalhados das requisições ao bucket."
        ],
        "generalExplanation": [
            "O S3 Select é a escolha correta porque permite consultar apenas partes específicas de um objeto armazenado no Amazon S3, aplicando filtros com expressões SQL para recuperar somente as linhas e colunas necessárias. Essa funcionalidade reduz drasticamente a quantidade de dados transferidos pela rede e processados pela aplicação, melhorando desempenho e diminuindo custos."
        ],
        "realWorld": [
            "Em uma aplicação serverless com AWS Lambda que precisa processar arquivos CSV de vários gigabytes armazenados no Amazon S3, o desenvolvedor pode usar S3 Select para extrair apenas os registros do mês de março e colunas específicas como user_id e transaction_amount. Essa abordagem reduz o tempo de execução da Lambda e o custo de transferência."
        ]
    },
    {
        "id": 44,
        "title": "Pergunta 44",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa ingere dados em tempo real em seu data center local e, posteriormente, um arquivo diário comprimido é gerado e enviado para o Amazon S3 para backup. O tamanho típico do arquivo comprimido é em torno de 2 GB. Qual das alternativas a seguir é a maneira mais rápida de enviar o arquivo comprimido diário para o S3?",
        "options": [
            {
                "letter": "A",
                "text": "Enviar o arquivo comprimido usando upload multipart",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Transferir o arquivo comprimido via FTP para uma instância EC2 que roda na mesma região do bucket S3 e, em seguida, transferir o arquivo da instância EC2 para o bucket S3",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Enviar o arquivo comprimido usando upload multipart com aceleração de transferência do S3",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Enviar o arquivo comprimido em uma única operação",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O upload multipart ajuda, mas não é a forma mais rápida possível sem aceleração."
            },
            {
                "correct": false,
                "text": "Incorreta. Este método é um processo indireto que adiciona complexidade e latência."
            },
            {
                "correct": true,
                "text": "Correta. A combinação do upload multipart com a aceleração de transferência do S3 oferece a forma mais rápida."
            },
            {
                "correct": false,
                "text": "Incorreta. Para arquivos grandes, enviar em uma única operação não é recomendado."
            }
        ],
        "glossary": [
            "Upload Multipart: Técnica que divide um arquivo grande em partes menores para upload paralelo.",
            "Aceleração de Transferência do S3: Recurso que utiliza a rede global do CloudFront para otimizar a rota.",
            "Amazon CloudFront: Rede global de distribuição de conteúdo com pontos de presença.",
            "Latência: Atraso no tempo de transmissão dos dados entre a origem e o destino."
        ],
        "generalExplanation": [
            "A combinação de upload multipart com aceleração de transferência do S3 é a abordagem mais eficiente para enviar arquivos grandes. O upload multipart divide o arquivo em várias partes menores e envia essas partes em paralelo, aumentando a velocidade e permitindo retomada em caso de falhas. A aceleração de transferência utiliza a infraestrutura da Amazon CloudFront para otimizar as rotas de rede, reduzindo a latência entre o cliente e o bucket S3."
        ],
        "realWorld": [
            "Em um sistema de ETL que transfere arquivos de log de uma fábrica na Europa para um bucket S3 na região us-east-1, a empresa pode reduzir drasticamente o tempo de upload usando Transfer Acceleration e upload multipart. Essa abordagem é amplamente usada em pipelines de dados, aplicações serverless e integrações on-premises–cloud."
        ]
    },
    {
        "id": 45,
        "title": "Pergunta 45",
        "domain": "Implantação",
        "prompt": "Seu cliente deseja implantar um serviço em instâncias EC2 e, à medida que as instâncias EC2 são adicionadas a um Grupo de Auto Scaling (ASG), cada instância EC2 deve executar simultaneamente 3 contêineres Docker diferentes. Qual plataforma do Elastic Beanstalk eles devem escolher?",
        "options": [
            {
                "letter": "A",
                "text": "Plataforma Docker de múltiplos contêineres",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Plataforma de terceiros",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Plataforma personalizada",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Plataforma Docker de contêiner único",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. A plataforma Docker de múltiplos contêineres é indicada para ambientes onde cada instância EC2 precisa executar vários contêineres simultaneamente."
            },
            {
                "correct": false,
                "text": "Incorreta. Esta opção é fictícia e não corresponde a nenhuma plataforma oficial."
            },
            {
                "correct": false,
                "text": "Incorreta. A plataforma personalizada é excessivamente complexa para este caso."
            },
            {
                "correct": false,
                "text": "Incorreta. A plataforma de contêiner único não suporta a execução simultânea de múltiplos contêineres."
            }
        ],
        "glossary": [
            "Elastic Beanstalk: Serviço que simplifica a implantação, gerenciamento e escalabilidade de aplicações.",
            "Contêiner Docker: Unidade leve e portátil que empacota uma aplicação e suas dependências.",
            "Amazon ECS: Serviço de orquestração de contêineres da AWS.",
            "Grupo de Auto Scaling: Conjunto de instâncias EC2 que podem ser adicionadas ou removidas automaticamente."
        ],
        "generalExplanation": [
            "A plataforma Docker de múltiplos contêineres do Elastic Beanstalk é a escolha ideal quando o requisito é executar vários contêineres Docker simultaneamente em cada instância EC2. Essa plataforma utiliza o Amazon ECS como mecanismo de orquestração nativo, permitindo gerenciamento coordenado de múltiplos contêineres, escalabilidade automática via Auto Scaling Group e balanceamento de carga integrado."
        ],
        "realWorld": [
            "Em um time DevOps que precisa implantar uma aplicação composta por múltiplos componentes, como um backend em Node.js, um serviço Redis de cache e um agente sidecar de monitoramento, a utilização da plataforma Docker de múltiplos contêineres permite definir todos os serviços em um arquivo docker-compose.yml e implantar com um único comando eb deploy."
        ]
    },
    {
        "id": 46,
        "title": "Pergunta 46",
        "domain": "Segurança",
        "prompt": "Sua empresa prefere operar múltiplas contas AWS para que as equipes tenham seus próprios ambientes. Serviços implantados nessas contas interagem entre si, e agora há a necessidade de implementar rastreamentos do X-Ray em todas as suas aplicações implantadas em instâncias EC2 e contas AWS diferentes. Dessa forma, você gostaria de ter uma conta unificada para visualizar todos os rastreamentos. O que você deve configurar no daemon do X-Ray para que isso funcione? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Habilitar a coleta entre contas no console do X-Ray.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar uma role na conta unificada de destino e permitir que roles em cada subconta assumam essa role.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Configurar o daemon do X-Ray para usar uma role IAM vinculada à instância EC2.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Configurar o daemon do X-Ray para usar chaves de acesso e secretas.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Criar um usuário na conta unificada de destino e gerar chaves de acesso e secretas.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Não existe uma funcionalidade chamada 'Habilitar a coleta entre contas' no console do X-Ray."
            },
            {
                "correct": true,
                "text": "Correta. Criar uma role na conta central e permitir que as roles das contas subordinadas a assumam é a prática recomendada."
            },
            {
                "correct": true,
                "text": "Correta. Configurar o daemon para usar uma role IAM associada à instância EC2 permite que ele assuma permissões necessárias."
            },
            {
                "correct": false,
                "text": "Incorreta. Configurar o daemon para usar chaves de acesso não é recomendado por questões de segurança."
            },
            {
                "correct": false,
                "text": "Incorreta. Criar um usuário com chaves estáticas é uma prática insegura."
            }
        ],
        "glossary": [
            "X-Ray daemon: Componente que coleta e envia dados de rastreamento para o AWS X-Ray.",
            "Role IAM: Entidade que define permissões e pode ser assumida por usuários ou serviços.",
            "Conta unificada: Conta central de observabilidade usada em ambientes multi-conta.",
            "Políticas de confiança: Documentos que definem quem pode assumir uma determinada role."
        ],
        "generalExplanation": [
            "Em uma arquitetura multi-conta AWS, é comum centralizar dados de rastreamento do AWS X-Ray em uma conta unificada. A abordagem correta é configurar o daemon do X-Ray para assumir uma Role IAM localizada na conta unificada, que possui permissões para enviar os rastreamentos. Isso requer criar uma role na conta unificada com permissões para o X-Ray e uma política de confiança que permita que as roles das contas subordinadas a assumam, e associar uma role à instância EC2 que autorize o daemon a assumir a role da conta unificada."
        ],
        "realWorld": [
            "Em uma empresa com múltiplas contas AWS, cada equipe executa suas aplicações em instâncias EC2 diferentes, mas todas precisam centralizar dados de rastreamento. A solução ideal é configurar o X-Ray daemon em cada conta para assumir uma role IAM na conta unificada de observabilidade, permitindo que todos os rastreamentos de aplicações distribuídas sejam enviados para um único painel central."
        ]
    },
    {
        "id": 47,
        "title": "Pergunta 47",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você deseja invocar uma função AWS Lambda a cada hora (de forma semelhante a um job cron) utilizando uma abordagem serverless. Qual fonte de evento você deve usar para acionar sua função AWS Lambda?",
        "options": [
            {
                "letter": "A",
                "text": "Amazon Kinesis",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Amazon S3",
                "correct": false
            },
            {
                "letter": "C",
                "text": "CloudWatch Events",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Amazon SQS",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Amazon Kinesis é para processamento de streaming de dados em tempo real."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon S3 pode disparar eventos baseados em ações nos buckets, mas não possui capacidade nativa para agendamento."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon CloudWatch Events permite criar regras que executam funções Lambda em intervalos regulares."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon SQS é um serviço de fila de mensagens que não oferece funcionalidade para disparar eventos em intervalos regulares."
            }
        ],
        "glossary": [
            "CloudWatch Events: Serviço que permite executar ações automaticamente em resposta a eventos ou em horários programados.",
            "Amazon S3: Serviço de armazenamento de objetos escalável.",
            "Amazon SQS: Serviço de fila de mensagens que desacopla componentes.",
            "Amazon Kinesis: Serviço voltado para ingestão e processamento de dados em tempo real."
        ],
        "generalExplanation": [
            "Para executar uma função Lambda periodicamente, o serviço correto é o Amazon CloudWatch Events (agora parte do Amazon EventBridge). Ele permite criar regras de agendamento usando expressões cron ou rate, que disparam automaticamente a execução da função Lambda conforme a periodicidade definida. Essa solução é totalmente serverless, eliminando a necessidade de servidores ou scripts manuais."
        ],
        "realWorld": [
            "Em uma equipe de dados que precisa gerar relatórios diários ou limpar registros antigos de um banco DynamoDB, o CloudWatch Events permite criar uma regra com a expressão cron(0 3 * * ?) para executar a função Lambda todos os dias às 03:00, sem necessidade de infraestrutura adicional."
        ]
    },
    {
        "id": 48,
        "title": "Pergunta 48",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um desenvolvedor criou um novo Application Load Balancer, mas não registrou nenhum alvo (target) nos grupos de destino. Qual dos seguintes erros será gerado pelo Load Balancer?",
        "options": [
            {
                "letter": "A",
                "text": "HTTP 504: Tempo de espera do gateway esgotado",
                "correct": false
            },
            {
                "letter": "B",
                "text": "HTTP 502: Gateway inválido",
                "correct": false
            },
            {
                "letter": "C",
                "text": "HTTP 503: Serviço indisponível",
                "correct": true
            },
            {
                "letter": "D",
                "text": "HTTP 500: Erro interno do servidor",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O erro HTTP 504 ocorre quando o Load Balancer não recebe uma resposta a tempo."
            },
            {
                "correct": false,
                "text": "Incorreta. O erro HTTP 502 ocorre quando o Load Balancer recebe uma resposta inválida do servidor."
            },
            {
                "correct": true,
                "text": "Correta. O Load Balancer gera o erro HTTP 503 quando os grupos de destino não possuem nenhum alvo registrado."
            },
            {
                "correct": false,
                "text": "Incorreta. O erro HTTP 500 indica um problema interno no servidor."
            }
        ],
        "glossary": [
            "Application Load Balancer: Serviço que distribui o tráfego HTTP/HTTPS entre múltiplos alvos.",
            "Target Group: Conjunto de recursos registrados que recebem o tráfego.",
            "HTTP 503: Código que indica que o servidor está temporariamente incapaz de processar a requisição.",
            "HTTP 504: Código que indica que o servidor não recebeu uma resposta a tempo."
        ],
        "generalExplanation": [
            "Quando um Application Load Balancer não possui nenhum alvo registrado em seus Target Groups, ele não tem para onde encaminhar as requisições. Nessa situação, o ALB retorna o erro HTTP 503 – Serviço indisponível, informando que o serviço está temporariamente fora do ar devido à ausência de recursos disponíveis para atender a solicitação."
        ],
        "realWorld": [
            "Em ambientes de produção, um desenvolvedor ou engenheiro DevOps deve garantir que os Target Groups do ALB estejam corretamente configurados e contenham instâncias ou containers saudáveis para receber tráfego. Se, por erro de configuração ou falha no deploy, todos os alvos forem removidos ou ficarem indisponíveis, o ALB retornará HTTP 503, alertando que o serviço está fora do ar."
        ]
    },
    {
        "id": 49,
        "title": "Pergunta 49",
        "domain": "Segurança",
        "prompt": "Você foi designado para um projeto que exige o uso da AWS CLI para construir um projeto com o AWS CodeBuild. O diretório raiz do seu projeto inclui o arquivo buildspec.yml para executar comandos de build e você deseja que os artefatos gerados pelo build sejam automaticamente criptografados ao final do processo. Como você deve configurar o CodeBuild para alcançar esse objetivo?",
        "options": [
            {
                "letter": "A",
                "text": "Usar um hook do AWS Lambda",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar o AWS Encryption SDK",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Especificar uma chave KMS para uso",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Utilizar criptografia em trânsito (SSL)",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Hooks do Lambda não são relevantes para configurar a criptografia dos artefatos."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS Encryption SDK não é uma configuração direta para criptografar artefatos no CodeBuild."
            },
            {
                "correct": true,
                "text": "Correta. Ao especificar uma chave KMS, o CodeBuild criptografa automaticamente os artefatos ao final do processo."
            },
            {
                "correct": false,
                "text": "Incorreta. A criptografia em trânsito protege dados durante a transmissão, não os artefatos armazenados."
            }
        ],
        "glossary": [
            "AWS CodeBuild: Serviço gerenciado de CI/CD que compila, testa e empacota código.",
            "buildspec.yml: Arquivo YAML usado para definir fases, comandos e artefatos de build.",
            "AWS KMS: Serviço gerenciado para criação, controle e auditoria de chaves criptográficas.",
            "Artefatos de Build: Resultados gerados pelo processo de compilação."
        ],
        "generalExplanation": [
            "A forma correta de garantir que os artefatos gerados pelo AWS CodeBuild sejam criptografados automaticamente é especificar uma chave gerenciada pelo AWS KMS no projeto. O CodeBuild possui integração nativa com o KMS, permitindo configurar uma Customer Managed Key para criptografar os artefatos de build armazenados em buckets S3, assegurando que os dados estejam protegidos em repouso."
        ],
        "realWorld": [
            "Em pipelines modernos de integração e entrega contínua, equipes frequentemente precisam garantir confidencialidade e rastreabilidade dos artefatos gerados. Uma equipe que usa AWS CodeBuild para gerar pacotes de implantação pode configurar no projeto o uso de uma chave específica do AWS KMS, garantindo que todos os artefatos armazenados no S3 sejam automaticamente criptografados em repouso."
        ]
    },
    {
        "id": 50,
        "title": "Pergunta 50",
        "domain": "Implantação",
        "prompt": "Seu líder de equipe criou um projeto no CodeBuild pelo console de gerenciamento e definiu um arquivo buildspec para o projeto. Após a execução da build, o CodeBuild falha ao tentar puxar uma imagem Docker para o ambiente de build. Qual é a causa mais provável desse problema?",
        "options": [
            {
                "letter": "A",
                "text": "A imagem Docker está sem algumas tags.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O CodeBuild não suporta o uso de imagens Docker personalizadas.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "A imagem Docker é muito grande.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Faltam permissões IAM para o serviço CodeBuild.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. As tags em imagens Docker são opcionais e a ausência não impede o pull."
            },
            {
                "correct": false,
                "text": "Incorreta. O CodeBuild suporta imagens Docker personalizadas."
            },
            {
                "correct": false,
                "text": "Incorreta. O tamanho da imagem não impede o CodeBuild de puxá-la."
            },
            {
                "correct": true,
                "text": "Correta. O CodeBuild precisa de permissões adequadas para puxar imagens do ECR."
            }
        ],
        "glossary": [
            "CodeBuild: Serviço gerenciado de integração e entrega contínua da AWS.",
            "Docker Image: Pacote leve que contém todo o ambiente necessário para rodar uma aplicação.",
            "IAM Permissions: Conjunto de permissões que controlam o acesso de serviços a recursos AWS.",
            "Amazon ECR: Serviço de registro de imagens Docker totalmente gerenciado."
        ],
        "generalExplanation": [
            "O erro ocorre porque o CodeBuild precisa de permissões IAM apropriadas para acessar e puxar imagens Docker armazenadas no Amazon ECR. Quando essas permissões não estão configuradas, o serviço não consegue realizar o pull da imagem, resultando em falha no início da build. O CodeBuild precisa de uma role IAM com políticas que concedam ações como ecr:GetAuthorizationToken, ecr:BatchGetImage, entre outras."
        ],
        "realWorld": [
            "Em pipelines CI/CD baseados em AWS CodePipeline e CodeBuild, é comum utilizar imagens Docker personalizadas para controlar dependências e versões de ferramentas. Um time DevOps pode criar uma imagem customizada com Node.js, AWS CLI e Docker pré-instalados e armazená-la no ECR. Para que o CodeBuild utilize essa imagem, a role IAM associada ao projeto precisa incluir permissões para autenticar, verificar e baixar as camadas da imagem."
        ]
    },
    {
        "id": 51,
        "title": "Pergunta 51",
        "domain": "Implantação",
        "prompt": "Sua organização configurou um pipeline completo de CI/CD utilizando o CodePipeline, e o deploy é realizado no Elastic Beanstalk. Esse pipeline funciona há mais de um ano, mas vocês estão se aproximando do limite de versões que o Elastic Beanstalk pode armazenar. Como você pode remover versões antigas que não estão sendo usadas pelo Elastic Beanstalk para que novas versões possam ser criadas para suas aplicações?",
        "options": [
            {
                "letter": "A",
                "text": "Usar uma política de ciclo de vida (Lifecycle Policy)",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Definir uma função Lambda",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Configurar um arquivo .ebextensions",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar ambientes Worker",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O Elastic Beanstalk permite configurar uma política de ciclo de vida para gerenciar automaticamente as versões da aplicação."
            },
            {
                "correct": false,
                "text": "Incorreta. Criar uma função Lambda exigiria desenvolvimento manual complexo."
            },
            {
                "correct": false,
                "text": "Incorreta. .ebextensions não oferecem controle sobre as versões armazenadas."
            },
            {
                "correct": false,
                "text": "Incorreta. Ambientes Worker são para processamento de tarefas em segundo plano."
            }
        ],
        "glossary": [
            "Elastic Beanstalk: Serviço que facilita a implantação, gerenciamento e escalabilidade de aplicações.",
            "CI/CD: Práticas que automatizam o desenvolvimento, testes e deploy de software.",
            "AWS CodePipeline: Serviço que permite automatizar pipelines de entrega contínua.",
            "Lifecycle Policy: Configuração que gerencia automaticamente a retenção e exclusão de versões antigas."
        ],
        "generalExplanation": [
            "O Elastic Beanstalk mantém versões de aplicação a cada deploy, mas possui um limite máximo de versões armazenadas. A forma correta de evitar esse problema é configurar uma política de ciclo de vida dentro do Elastic Beanstalk, que remove automaticamente versões antigas que não estão em uso, mantendo apenas as versões mais recentes ou dentro de critérios definidos."
        ],
        "realWorld": [
            "Em uma equipe de desenvolvimento que faz múltiplos deploys diários usando CodePipeline em um ambiente Elastic Beanstalk, sem uma Lifecycle Policy, o acúmulo de versões antigas pode atingir o limite de armazenamento, causando falhas nos deploys. Ao configurar a política de ciclo de vida para, por exemplo, remover versões com mais de 30 dias ou manter no máximo 10 versões ativas, o ambiente se mantém organizado automaticamente."
        ]
    },
    {
        "id": 52,
        "title": "Pergunta 52",
        "domain": "Implantação",
        "prompt": "Você gostaria de ter um painel único para todas as necessidades de CI/CD de um dos seus projetos. Você não precisa de um controle detalhado da configuração individual de cada componente do seu pipeline CI/CD, mas precisa ser capaz de obter uma visão holística dos seus projetos. Qual serviço você recomendaria?",
        "options": [
            {
                "letter": "A",
                "text": "AWS CodeStar",
                "correct": true
            },
            {
                "letter": "B",
                "text": "AWS CodePipeline",
                "correct": false
            },
            {
                "letter": "C",
                "text": "AWS CodeBuild",
                "correct": false
            },
            {
                "letter": "D",
                "text": "AWS CodeDeploy",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. AWS CodeStar permite desenvolver, construir e implantar aplicações com uma interface unificada."
            },
            {
                "correct": false,
                "text": "Incorreta. CodePipeline orquestra o pipeline, mas não fornece uma interface unificada para múltiplos projetos."
            },
            {
                "correct": false,
                "text": "Incorreta. CodeBuild é um serviço de compilação individual, não oferece um painel unificado."
            },
            {
                "correct": false,
                "text": "Incorreta. CodeDeploy automatiza implantações, mas não oferece uma visão consolidada de todo o pipeline."
            }
        ],
        "glossary": [
            "AWS CodeStar: Serviço que oferece um painel unificado para criar, gerenciar e monitorar projetos.",
            "AWS CodeBuild: Serviço gerenciado de compilação e testes automatizados.",
            "AWS CodeDeploy: Serviço que automatiza implantações de código.",
            "AWS CodePipeline: Serviço que orquestra o pipeline de entrega contínua."
        ],
        "generalExplanation": [
            "O AWS CodeStar é a opção ideal quando o objetivo é gerenciar de forma centralizada todo o ciclo de vida de desenvolvimento, desde o código-fonte até a implantação em produção. Enquanto CodeBuild, CodeDeploy e CodePipeline tratam de etapas específicas, o CodeStar atua como uma camada de integração e visualização, oferecendo um painel único para acompanhar o progresso de builds, implantações e atividades de equipe."
        ],
        "realWorld": [
            "Em um cenário prático, um time de desenvolvimento está criando uma aplicação serverless com AWS Lambda, API Gateway e DynamoDB. Com o AWS CodeStar, eles podem criar automaticamente um projeto completo com repositório Git, pipeline CI/CD e permissões configuradas, acompanhando em um único painel o status das builds, implantações e do pipeline geral."
        ]
    },
    {
        "id": 53,
        "title": "Pergunta 53",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa do setor financeiro desenvolveu uma API REST que está implantada em um Auto Scaling Group atrás de um Application Load Balancer. A API armazena os dados no DynamoDB e o conteúdo estático é servido por meio do S3. Após analisar o padrão de uso, foi constatado que 80% das requisições de leitura são compartilhadas entre todos os usuários. Como um Associate Developer, como você pode melhorar o desempenho da aplicação otimizando os custos com o menor esforço de desenvolvimento possível?",
        "options": [
            {
                "letter": "A",
                "text": "Habilitar o DynamoDB Accelerator (DAX) para o DynamoDB e o CloudFront para o S3",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Habilitar o DAX para DynamoDB e o ElastiCache Memcached para o S3",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Habilitar o ElastiCache Redis para DynamoDB e o ElastiCache Memcached para o S3",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Habilitar o ElastiCache Redis para DynamoDB e o CloudFront para o S3",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O DAX é um cache em memória compatível com a API do DynamoDB, e o CloudFront é uma CDN que distribui conteúdo estático globalmente."
            },
            {
                "correct": false,
                "text": "Incorreta. Memcached não é apropriado para servir conteúdo estático do S3."
            },
            {
                "correct": false,
                "text": "Incorreta. Redis exige integração manual com DynamoDB, e Memcached não é adequado para conteúdo estático."
            },
            {
                "correct": false,
                "text": "Incorreta. Redis exige complexidade de integração, enquanto DAX é mais eficiente para DynamoDB."
            }
        ],
        "glossary": [
            "DynamoDB Accelerator (DAX): Cache em memória para o DynamoDB que reduz a latência de leitura.",
            "Amazon CloudFront: CDN que distribui conteúdo estático e dinâmico globalmente.",
            "ElastiCache Redis: Serviço de cache em memória rápido que requer integração manual.",
            "ElastiCache Memcached: Cache em memória para dados dinâmicos, não adequado como CDN."
        ],
        "generalExplanation": [
            "Para otimizar o desempenho e reduzir custos com mínimo esforço de desenvolvimento, a melhor abordagem é combinar DynamoDB Accelerator (DAX), que acelera consultas frequentes ao DynamoDB com latência ultrabaixa sem necessidade de alterações no código, e Amazon CloudFront, que atua como CDN para conteúdo estático armazenado no S3, entregando arquivos a partir de edge locations próximas aos usuários."
        ],
        "realWorld": [
            "Em uma aplicação financeira que precisa de respostas rápidas, o DAX acelera consultas frequentes ao DynamoDB, como cotações ou saldo de conta, garantindo microssegundos de latência. O CloudFront distribui imagens e arquivos estáticos do S3 para usuários em diferentes regiões, garantindo experiência rápida e consistente, enquanto reduz custos ao diminuir o tráfego direto para o S3."
        ]
    },
    {
        "id": 54,
        "title": "Pergunta 54",
        "domain": "Implantação",
        "prompt": "Sua empresa está migrando para o Elastic Container Service (ECS) para implantar aplicações. O processo deve ser automatizado usando a AWS CLI para criar um serviço que mantenha pelo menos dez instâncias de uma definição de tarefa em execução no cluster padrão. Qual dos seguintes comandos deve ser executado?",
        "options": [
            {
                "letter": "A",
                "text": "aws ecs run-task --cluster default --task-definition ecs-demo",
                "correct": false
            },
            {
                "letter": "B",
                "text": "docker-compose create ecs-simple-service",
                "correct": false
            },
            {
                "letter": "C",
                "text": "aws ecs create-service --service-name ecs-simple-service --task-definition ecs-demo --desired-count 10",
                "correct": true
            },
            {
                "letter": "D",
                "text": "aws ecr create-service --service-name ecs-simple-service --task-definition ecs-demo --desired-count 10",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. run-task executa uma tarefa pontual, sem gerenciamento contínuo."
            },
            {
                "correct": false,
                "text": "Incorreta. Este é um comando do Docker Compose, não do ECS."
            },
            {
                "correct": true,
                "text": "Correta. Este comando cria um serviço que mantém 10 instâncias da tarefa em execução."
            },
            {
                "correct": false,
                "text": "Incorreta. ECR é para armazenamento de imagens, não para criação de serviços."
            }
        ],
        "glossary": [
            "ECS: Serviço gerenciado para orquestração e gerenciamento de containers Docker.",
            "AWS CLI: Interface de linha de comando que permite gerenciar recursos AWS.",
            "Task Definition: Documento que descreve como um container deve ser executado.",
            "Service: Recurso do ECS que mantém o número desejado de instâncias de uma tarefa."
        ],
        "generalExplanation": [
            "O comando correto para criar um serviço ECS que mantém um número fixo de instâncias de uma tarefa em execução é aws ecs create-service com os parâmetros --service-name, --task-definition e --desired-count. Esse comando instrui o ECS a implantar um serviço gerenciado, que monitora continuamente o estado das tarefas e substitui automaticamente qualquer instância que falhar."
        ],
        "realWorld": [
            "Em uma equipe DevOps implantando uma API RESTful containerizada na AWS, o desenvolvedor define uma task definition com a imagem hospedada no Amazon ECR e cria o serviço com o comando aws ecs create-service --service-name api-restful-prod --task-definition api-restful:1 --desired-count 3 --cluster prod-cluster. Com isso, o ECS manterá três containers da API em execução, garantindo alta disponibilidade."
        ]
    },
    {
        "id": 55,
        "title": "Pergunta 55",
        "domain": "Segurança",
        "prompt": "Um desenvolvedor criou uma aplicação de comércio eletrônico que roda em instâncias EC2 atrás de balanceadores de carga. A mesma versão da aplicação web está hospedada em várias instâncias EC2, que operam dentro de um grupo de Auto Scaling. A aplicação utiliza o AWS STS para solicitar credenciais temporárias, mas após uma hora a aplicação para de funcionar. Qual é a causa mais provável desse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Sua aplicação precisa renovar as credenciais após 1 hora, quando elas expiram.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Sua política IAM está incorreta.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "O serviço IAM está passando por indisponibilidade a cada hora.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Uma função Lambda revoga seu acesso a cada hora.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O AWS STS emite credenciais temporárias que expiram após 1 hora."
            },
            {
                "correct": false,
                "text": "Incorreta. Se a política estivesse incorreta, o problema ocorreria imediatamente."
            },
            {
                "correct": false,
                "text": "Incorreta. O IAM é altamente disponível e não apresenta indisponibilidade periódica."
            },
            {
                "correct": false,
                "text": "Incorreta. Funções Lambda não podem revogar diretamente credenciais."
            }
        ],
        "glossary": [
            "AWS STS: Serviço que emite credenciais temporárias e limitadas para acesso seguro.",
            "Credenciais temporárias: Conjunto de chaves com tempo de validade limitado, geralmente 1 hora.",
            "IAM: Serviço de controle de acesso e gerenciamento de identidades.",
            "Auto Scaling: Serviço que ajusta automaticamente a quantidade de instâncias EC2."
        ],
        "generalExplanation": [
            "As credenciais temporárias emitidas pelo AWS STS expiram após o tempo configurado, geralmente 1 hora, e precisam ser renovadas para manter o acesso contínuo. Quando a aplicação não renova as credenciais em tempo hábil, ela perde as permissões temporárias, resultando em falhas de autenticação e interrupções no serviço."
        ],
        "realWorld": [
            "Em um ambiente de Auto Scaling com EC2 e Load Balancer, aplicações frequentemente usam STS para obter credenciais temporárias. Uma aplicação web que acessa Amazon S3 ou DynamoDB pode assumir uma função IAM via STS e operar com credenciais temporárias. Cada instância EC2 obtém credenciais STS válidas por 1 hora, e um processo interno monitora o tempo de expiração e solicita novas credenciais antes do vencimento."
        ]
    },
    {
        "id": 56,
        "title": "Pergunta 56",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "A funcionalidade de feedback dos clientes para o aplicativo web principal de uma empresa é gerenciada por meio de uma API REST baseada no Amazon API Gateway, que invoca uma função AWS Lambda para processamento adicional. Embora o desempenho da função seja satisfatório, a equipe de desenvolvimento foi encarregada de otimizar o tempo de inicialização da função Lambda para melhorar ainda mais a experiência do cliente. Como você otimizará a função Lambda para uma inicialização mais rápida?",
        "options": [
            {
                "letter": "A",
                "text": "Configurar um endpoint de interface VPC suportado pelo AWS PrivateLink para acessar a API REST com latência em milissegundos",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Configurar concorrência reservada para garantir o número máximo de instâncias concorrentes da função Lambda",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Configurar concorrência provisionada para a função Lambda responder imediatamente às invocações da função",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Habilitar cache na API do Amazon API Gateway para armazenar em cache a resposta da função AWS Lambda",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Endpoints de interface VPC melhoram segurança e latência, mas não afetam o cold start."
            },
            {
                "correct": false,
                "text": "Incorreta. Concorrência reservada não reduz o tempo de inicialização da função."
            },
            {
                "correct": true,
                "text": "Correta. A concorrência provisionada aloca ambientes de execução inicializados e prontos para responder imediatamente."
            },
            {
                "correct": false,
                "text": "Incorreta. O cache no API Gateway não reduz o tempo de inicialização da função Lambda."
            }
        ],
        "glossary": [
            "Concorrência Provisionada: Mecanismo que mantém ambientes de execução pré-inicializados.",
            "Concorrência Reservada: Define o número máximo de execuções simultâneas garantidas.",
            "Cold Start: Atraso que ocorre quando o Lambda precisa inicializar um novo ambiente de execução.",
            "API Gateway: Serviço que cria, publica e protege APIs REST e WebSocket."
        ],
        "generalExplanation": [
            "O problema em questão é o cold start, um fenômeno comum em funções Lambda que causa atraso inicial na execução quando não há ambientes previamente inicializados. A solução correta é habilitar concorrência provisionada, que mantém uma quantidade configurada de ambientes Lambda em estado 'quente', prontos para atender requisições de forma imediata, eliminando o tempo de inicialização e garantindo desempenho consistente."
        ],
        "realWorld": [
            "Em uma API REST que processa logins de usuários via API Gateway e AWS Lambda, durante períodos de baixa atividade, as funções podem ficar inativas, e ao receber a primeira requisição após algum tempo, o usuário percebe atrasos de 1 a 3 segundos. Ao configurar concorrência provisionada para, por exemplo, 5 instâncias da função authHandler, as funções já estarão inicializadas e prontas para execução imediata."
        ]
    },
    {
        "id": 57,
        "title": "Pergunta 57",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você deseja que seu ambiente Elastic Beanstalk exponha um endpoint HTTPS em vez de HTTP para garantir a criptografia em trânsito entre seus clientes e seus servidores web. O que deve ser feito para configurar HTTPS no Elastic Beanstalk?",
        "options": [
            {
                "letter": "A",
                "text": "Usar um template CloudFormation separado para carregar o certificado SSL no Load Balancer.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar um arquivo de configuração na pasta .ebextensions para configurar o Load Balancer.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Abrir a porta 80 no grupo de segurança.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Configurar Health Checks.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Um template CloudFormation separado não pode modificar diretamente o Load Balancer gerenciado pelo Beanstalk."
            },
            {
                "correct": true,
                "text": "Correta. A forma mais simples é criar um arquivo .ebextensions que configure um listener HTTPS no Load Balancer."
            },
            {
                "correct": false,
                "text": "Incorreta. A porta 80 é para HTTP, para HTTPS é necessário abrir a porta 443."
            },
            {
                "correct": false,
                "text": "Incorreta. Health Checks não têm relação com a configuração de certificados SSL."
            }
        ],
        "glossary": [
            "Elastic Beanstalk: Serviço que simplifica a implantação, gerenciamento e escalabilidade de aplicações.",
            "Load Balancer: Componente que distribui automaticamente o tráfego de rede entre múltiplas instâncias.",
            "Listener HTTPS: Configuração que permite receber e processar conexões seguras via HTTPS.",
            ".ebextensions: Diretório contendo arquivos que definem personalizações do ambiente."
        ],
        "generalExplanation": [
            "Para expor um endpoint HTTPS em uma aplicação hospedada no Elastic Beanstalk, a melhor prática é configurar o Load Balancer para aceitar conexões seguras, associando um certificado SSL/TLS válido. Essa configuração é feita criando um arquivo de configuração dentro da pasta .ebextensions, que define um listener HTTPS (porta 443) no Load Balancer e aponta para o ARN do certificado SSL/TLS armazenado no AWS Certificate Manager."
        ],
        "realWorld": [
            "Em uma aplicação web de e-commerce hospedada no Elastic Beanstalk, o desenvolvedor pode criar um arquivo .ebextensions/https-listener.config com a configuração do listener HTTPS. O resultado é uma aplicação segura, escalável e em conformidade com boas práticas de segurança, sem a necessidade de configurar HTTPS manualmente em cada instância."
        ]
    },
    {
        "id": 58,
        "title": "Pergunta 58",
        "domain": "Implantação",
        "prompt": "Você é um desenvolvedor trabalhando com funções AWS Lambda acionadas pelo Amazon API Gateway e deseja realizar testes com um baixo volume de tráfego para novas versões da API. Qual das seguintes funcionalidades permitirá realizar essa tarefa?",
        "options": [
            {
                "letter": "A",
                "text": "Templates de Mapeamento (Mapping Templates)",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Variáveis de Stage (Stage Variables)",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Autorizadores Personalizados (Custom Authorizers)",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Implantação Canary (Canary Deployment)",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Templates de mapeamento transformam o payload, não controlam o tráfego."
            },
            {
                "correct": false,
                "text": "Incorreta. Variáveis de stage configuram ambientes, mas não controlam tráfego."
            },
            {
                "correct": false,
                "text": "Incorreta. Autorizadores personalizados são para autenticação e autorização."
            },
            {
                "correct": true,
                "text": "Correta. A implantação canary permite dividir o tráfego entre a versão de produção e a versão canary."
            }
        ],
        "glossary": [
            "Variáveis de Stage: Variáveis configuráveis em cada estágio do API Gateway.",
            "Autorizadores Personalizados: Funções Lambda usadas para autenticar e autorizar chamadas.",
            "Implação Canary: Estratégia de lançamento gradual com pequena porcentagem do tráfego.",
            "Templates de Mapeamento: Scripts para transformar o formato de requisições e respostas."
        ],
        "generalExplanation": [
            "A implantação canary é a abordagem ideal para testar novas versões de APIs no Amazon API Gateway com baixo risco e mínimo impacto nos usuários. Essa funcionalidade permite dividir o tráfego de requisições entre a versão estável e a versão em teste, enviando uma fração configurável para a nova versão, possibilitando validar mudanças de código, desempenho e compatibilidade em um ambiente real de produção."
        ],
        "realWorld": [
            "Em um ciclo de entrega contínua com API Gateway e AWS Lambda, uma equipe pode lançar uma nova versão da API com melhorias de desempenho. O desenvolvedor configura uma implantação canary para rotear 5% do tráfego para a nova versão, monitorando métricas no CloudWatch e rastreamentos no X-Ray. Se a versão canary se comportar bem, o tráfego é gradualmente aumentado até 100%."
        ]
    },
    {
        "id": 59,
        "title": "Pergunta 59",
        "domain": "Solução de problemas e otimização",
        "prompt": "Aplicações executando em instâncias EC2 processam mensagens de uma fila SQS, mas às vezes enfrentam erros devido a mensagens que não são processadas corretamente. Para isolar essas mensagens, qual opção ajudará no diagnóstico e depuração mais detalhada?",
        "options": [
            {
                "letter": "A",
                "text": "Aumentar o VisibilityTimeout",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Reduzir o VisibilityTimeout",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Implementar uma Dead Letter Queue (Fila de Mensagens Mortas)",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Usar DeleteMessage",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Aumentar o VisibilityTimeout não ajuda na depuração."
            },
            {
                "correct": false,
                "text": "Incorreta. Reduzir o VisibilityTimeout pode causar processamento duplicado."
            },
            {
                "correct": true,
                "text": "Correta. Dead Letter Queues recebem mensagens que não puderam ser processadas."
            },
            {
                "correct": false,
                "text": "Incorreta. DeleteMessage apenas remove a mensagem da fila."
            }
        ],
        "glossary": [
            "Dead Letter Queue (DLQ): Fila especial que armazena mensagens que falharam repetidamente.",
            "VisibilityTimeout: Intervalo durante o qual uma mensagem fica invisível para outros consumidores.",
            "DeleteMessage: Operação para remover definitivamente uma mensagem da fila."
        ],
        "generalExplanation": [
            "A Dead Letter Queue é uma melhor prática recomendada pela AWS para lidar com mensagens que não podem ser processadas corretamente após várias tentativas. Quando uma mensagem excede o número máximo de tentativas, ela é automaticamente movida para a DLQ, permitindo isolar mensagens problemáticas sem interromper o fluxo normal, facilitando a depuração e evitando ciclos infinitos de reprocessamento."
        ],
        "realWorld": [
            "Em um sistema de processamento de pedidos, mensagens são enviadas para uma fila Amazon SQS e consumidas por instâncias EC2. Algumas mensagens podem conter dados corrompidos. Ao configurar uma DLQ, o SQS tenta entregar a mensagem ao consumidor até atingir o número máximo de tentativas. Se todas falharem, a mensagem é movida para a DLQ, permitindo que a equipe inspecione e corrija o problema."
        ]
    },
    {
        "id": 60,
        "title": "Pergunta 60",
        "domain": "Segurança",
        "prompt": "Quando sua empresa criou a conta AWS, você começou com um principal de login único chamado conta root, que possui acesso completo a todos os serviços e recursos da AWS. Qual prática recomendada você deve seguir para o uso da conta root?",
        "options": [
            {
                "letter": "A",
                "text": "Deve ser inacessível para todos, descartando as senhas após a criação da conta.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Deve ser acessível por 3 a 6 membros da equipe de TI.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Deve ser acessível por apenas um administrador, após habilitar a autenticação multifator (MFA).",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Deve ser acessível usando o ID da chave de acesso e a chave de acesso secreta.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. As credenciais não podem ser descartadas, pois podem ser necessárias para recuperação."
            },
            {
                "correct": false,
                "text": "Incorreta. Somente o proprietário da conta deve ter acesso às credenciais root."
            },
            {
                "correct": true,
                "text": "Correta. A melhor prática é restringir o acesso a um único administrador e habilitar MFA."
            },
            {
                "correct": false,
                "text": "Incorreta. A AWS recomenda não usar chaves de acesso para a conta root."
            }
        ],
        "glossary": [
            "Conta root: Identidade principal da conta AWS com acesso irrestrito.",
            "Autenticação multifator (MFA): Mecanismo que requer duas ou mais formas de verificação.",
            "IAM: Serviço que permite criar e gerenciar usuários, grupos, funções e permissões.",
            "Chave de acesso: Conjunto de credenciais usadas para autenticação programática."
        ],
        "generalExplanation": [
            "A conta root é a identidade mais poderosa dentro da AWS, com privilégios completos e irrestritos. As melhores práticas recomendadas pela AWS incluem ativar a autenticação multifator (MFA) na conta root para adicionar uma camada extra de segurança, evitar o uso de chaves de acesso associadas à conta root, e criar usuários IAM com permissões específicas baseadas em funções e responsabilidades."
        ],
        "realWorld": [
            "Em uma empresa que opera uma infraestrutura baseada em AWS Lambda, API Gateway e DynamoDB, o administrador cria usuários IAM separados para desenvolvedores, analistas e serviços automatizados. A conta root é usada exclusivamente para configurar o faturamento, ativar serviços globais e habilitar MFA. As credenciais root são armazenadas em um cofre de senhas corporativo, com acesso concedido apenas a um número limitado de administradores."
        ]
    },
    {
        "id": 61,
        "title": "Pergunta 61",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você deseja executar o daemon do AWS X-Ray para seus contêineres Docker implantados usando o AWS Fargate. O que você precisa fazer para garantir que a configuração funcione corretamente? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Implantar o agente do daemon X-Ray como um contêiner sidecar",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Implantar o agente do daemon X-Ray como um daemon set no ECS",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Implantar o agente do daemon X-Ray como um processo na sua instância EC2",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Fornecer a função IAM correta para a tarefa (task role) ao contêiner do X-Ray",
                "correct": true
            },
            {
                "letter": "E",
                "text": "Fornecer a função IAM correta para a instância EC2",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. No Fargate, o daemon X-Ray deve ser executado como um contêiner sidecar na mesma tarefa."
            },
            {
                "correct": false,
                "text": "Incorreta. Daemon set não é aplicável ao Fargate, pois não há controle sobre instâncias EC2."
            },
            {
                "correct": false,
                "text": "Incorreta. Fargate não expõe instâncias EC2 subjacentes."
            },
            {
                "correct": true,
                "text": "Correta. No Fargate, as permissões são atribuídas via task roles."
            },
            {
                "correct": false,
                "text": "Incorreta. No Fargate, não é possível atribuir funções IAM diretamente a instâncias EC2."
            }
        ],
        "glossary": [
            "AWS Fargate: Serviço serverless para contêineres que elimina a necessidade de gerenciar servidores.",
            "IAM Task Role: Função IAM atribuída a uma tarefa ECS que define permissões.",
            "Daemon Set: Padrão usado em clusters ECS com instâncias EC2, não aplicável ao Fargate.",
            "Sidecar Container: Contêiner auxiliar incluído na mesma tarefa para funcionalidades complementares."
        ],
        "generalExplanation": [
            "Ao usar o AWS Fargate, não há acesso direto à infraestrutura subjacente, portanto, o daemon do AWS X-Ray não pode ser executado como processo no host nem via daemon sets. A forma correta de integrar o X-Ray é executá-lo como um contêiner sidecar dentro da mesma tarefa ECS. Para que isso funcione com segurança, é essencial configurar uma IAM Task Role com permissões específicas, como xray:PutTraceSegments e xray:PutTelemetryRecords."
        ],
        "realWorld": [
            "Em uma aplicação de microsserviços em produção, onde cada serviço é executado em AWS Fargate e exposto por meio do Amazon API Gateway, o time de desenvolvimento adiciona o X-Ray Daemon como um contêiner sidecar na definição da tarefa ECS. Esse daemon coleta automaticamente os dados de rastreamento gerados pelo SDK X-Ray integrado ao código da aplicação e os envia para o AWS X-Ray."
        ]
    },
    {
        "id": 62,
        "title": "Pergunta 62",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma aplicação móvel crítica para os negócios utiliza pools de usuários do Amazon Cognito com autenticação multifator (MFA) habilitada para todos os seus usuários. A aplicação gerencia dados confidenciais sobre previsões de vendas e lançamentos de produtos da empresa. Considerando a natureza altamente crítica da aplicação, a empresa deseja rastrear toda atividade de login dos usuários por meio de uma notificação enviada por e-mail para a equipe de segurança. Qual das seguintes opções você recomendaria como a forma MAIS otimizada de implementar esse requisito em um curto período?",
        "options": [
            {
                "letter": "A",
                "text": "Criar uma função AWS Lambda que utilize o Amazon Simple Email Service para enviar uma notificação por e-mail. Configurar essa função como gatilho Lambda pré-autenticação do Amazon Cognito.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar uma função AWS Lambda que utilize o Amazon Simple Email Service para enviar uma notificação por e-mail. Configurar essa função como gatilho Lambda pós-autenticação do Amazon Cognito.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Configurar as operações autenticadas da API dos pools de usuários para enviar dados de login para o Amazon Kinesis Data Streams. Configurar uma função Lambda para analisar esses streams e disparar uma notificação SNS.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Configurar uma função AWS Lambda como gatilho para operações autenticadas da API dos pools de identidades do Amazon Cognito. Criar a função Lambda para utilizar o Amazon SES e enviar uma notificação por e-mail.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O gatilho pré-autenticação é invocado antes da autenticação, não serve para rastrear logins já realizados."
            },
            {
                "correct": true,
                "text": "Correta. O gatilho pós-autenticação é invocado após o usuário ser autenticado com sucesso."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa opção é complexa e desnecessária para o requisito."
            },
            {
                "correct": false,
                "text": "Incorreta. Pools de identidades são usados para autorização, não para autenticação."
            }
        ],
        "glossary": [
            "Amazon Cognito User Pools: Serviço que fornece autenticação, autorização e gerenciamento de usuários.",
            "MFA: Mecanismo que adiciona uma camada extra de segurança.",
            "AWS Lambda: Serviço serverless que executa código em resposta a eventos.",
            "Amazon SES: Serviço para envio programático de e-mails."
        ],
        "generalExplanation": [
            "A alternativa correta é usar o gatilho pós-autenticação do Amazon Cognito User Pools para acionar uma função AWS Lambda, que por sua vez envia uma notificação por e-mail via Amazon SES. O gatilho pós-autenticação é projetado especificamente para executar ações imediatamente após um login bem-sucedido, garantindo que apenas acessos válidos sejam processados."
        ],
        "realWorld": [
            "Em aplicações corporativas com requisitos de segurança elevados, como plataformas bancárias ou sistemas internos, é essencial rastrear logins bem-sucedidos e gerar alertas em tempo real. Uma aplicação móvel corporativa pode usar um gatilho pós-autenticação no Cognito para invocar uma função Lambda que envia um e-mail via Amazon SES para a equipe de segurança com detalhes do login."
        ]
    },
    {
        "id": 63,
        "title": "Pergunta 63",
        "domain": "Segurança",
        "prompt": "Sua empresa é nova em computação em nuvem e deseja hospedar um site estático em HTML5 na nuvem, acessível pelo domínio www.mycompany.com. Você criou um bucket no Amazon Simple Storage Service (S3), habilitou o hosting de site estático e definiu o arquivo index.html como página padrão. Por fim, criou um registro Alias no Amazon Route 53 apontando para o endpoint do site estático do bucket S3. Ao testar o domínio www.mycompany.com, você recebe o seguinte erro: 'Código de resposta HTTP 403 (Acesso Negado)'. O que você pode fazer para resolver esse erro?",
        "options": [
            {
                "letter": "A",
                "text": "Criar uma função IAM",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar uma política de bucket",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Habilitar criptografia",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Habilitar CORS",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Funções IAM são usadas para permissões a serviços autenticados, não para acesso público."
            },
            {
                "correct": true,
                "text": "Correta. A política de bucket é necessária para conceder acesso público aos objetos."
            },
            {
                "correct": false,
                "text": "Incorreta. A criptografia protege os dados em repouso, mas não influencia erros de acesso negado."
            },
            {
                "correct": false,
                "text": "Incorreta. CORS é para requisições entre domínios, não para permissão pública."
            }
        ],
        "glossary": [
            "Bucket Policy: Documento JSON que define permissões de acesso para recursos do S3.",
            "CORS: Mecanismo que controla requisições entre diferentes domínios.",
            "Criptografia: Técnica que protege dados em repouso.",
            "Função IAM: Entidade usada para conceder permissões a usuários ou serviços autenticados."
        ],
        "generalExplanation": [
            "Para que um site estático hospedado no Amazon S3 seja acessível publicamente, é necessário permitir acesso público por meio de uma bucket policy que autorize a ação s3:GetObject para o principal '*', e desativar o bloqueio de acesso público, pois ele anula as permissões concedidas na política. Quando o bloqueio está ativo ou a política não inclui permissões adequadas, o resultado é um erro HTTP 403 – Access Denied."
        ],
        "realWorld": [
            "Em um caso comum onde uma equipe de marketing deseja publicar um site institucional diretamente no Amazon S3, o fluxo típico inclui criar um bucket S3 com o mesmo nome do domínio, habilitar Static Website Hosting, criar uma bucket policy que permite acesso público, desativar o Bloqueio de Acesso Público, e configurar um registro Alias no Route 53 apontando para o endpoint do site S3."
        ]
    },
    {
        "id": 64,
        "title": "Pergunta 64",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua conta AWS está crescendo para 200 usuários e você deseja fornecer a cada um deles um espaço pessoal no bucket S3 'my_company_space' com o prefixo /home/<nome_do_usuário>, onde eles tenham acesso de leitura e gravação. Como você pode fazer isso de forma eficiente?",
        "options": [
            {
                "letter": "A",
                "text": "Criar uma política de bucket S3 e modificá-la conforme os usuários são adicionados ou removidos.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar uma política gerenciada pelo cliente com variáveis de política e anexá-la a um grupo que contenha todos os usuários.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Criar uma política gerenciada pelo cliente para cada usuário e anexá-la aos usuários correspondentes.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Criar políticas inline para cada usuário conforme eles são integrados.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A política do bucket tem limite de tamanho e não escala bem."
            },
            {
                "correct": true,
                "text": "Correta. Utilizar variáveis de política permite criar uma única política dinâmica que se adapta ao usuário."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa abordagem não escala bem com um grande número de usuários."
            },
            {
                "correct": false,
                "text": "Incorreta. Políticas inline são ineficientes e não escaláveis."
            }
        ],
        "glossary": [
            "Política Gerenciada pelo Cliente: Política IAM criada e mantida pelo usuário, permitindo reutilização.",
            "Variáveis de Política: Placeholders dinâmicos substituídos em tempo de execução.",
            "Política Inline: Política anexada diretamente a um único usuário, sem reutilização.",
            "Política de Bucket S3: Documento JSON anexado diretamente a um bucket."
        ],
        "generalExplanation": [
            "A maneira mais eficiente e escalável de conceder acesso personalizado a 200 usuários, cada um com seu próprio diretório dentro de um bucket S3, é por meio de uma política gerenciada pelo cliente que utiliza variáveis de política. Isso permite criar uma única política dinâmica que se adapta automaticamente ao contexto do usuário, substituindo variáveis como ${aws:username} para restringir o acesso ao prefixo correspondente."
        ],
        "realWorld": [
            "Em um departamento de desenvolvimento com dezenas ou centenas de usuários, é comum que cada colaborador precise armazenar artefatos de forma isolada dentro de um único bucket S3. A equipe de operações pode criar uma política gerenciada pelo cliente com uma política que permite acesso apenas ao diretório /home/${aws:username}/*, garantindo que cada usuário só tenha acesso de leitura e gravação ao seu próprio diretório."
        ]
    },
    {
        "id": 65,
        "title": "Pergunta 65",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Quais das seguintes opções da CLI permitem recuperar um subconjunto dos atributos retornados por um scan no DynamoDB?",
        "options": [
            {
                "letter": "A",
                "text": "--max-items",
                "correct": false
            },
            {
                "letter": "B",
                "text": "--projection-expression",
                "correct": true
            },
            {
                "letter": "C",
                "text": "--filter-expression",
                "correct": false
            },
            {
                "letter": "D",
                "text": "--page-size",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. --max-items limita o número total de itens exibidos, não os atributos."
            },
            {
                "correct": true,
                "text": "Correta. --projection-expression especifica quais atributos devem ser retornados."
            },
            {
                "correct": false,
                "text": "Incorreta. --filter-expression filtra itens, mas não limita os atributos retornados."
            },
            {
                "correct": false,
                "text": "Incorreta. --page-size controla quantos itens são solicitados por chamada à API."
            }
        ],
        "glossary": [
            "--projection-expression: Parâmetro que define quais atributos específicos devem ser retornados.",
            "--filter-expression: Expressão usada para filtrar itens com base em condições.",
            "--page-size: Parâmetro que controla o número de itens por página na chamada à API.",
            "--max-items: Parâmetro que limita o número total de itens exibidos na saída da CLI."
        ],
        "generalExplanation": [
            "A opção --projection-expression é a única que permite controlar quais atributos são efetivamente retornados em uma operação scan ou query no Amazon DynamoDB. Isso é fundamental para otimizar o desempenho e reduzir custos, pois menos dados são transferidos e processados, especialmente em tabelas com muitos atributos ou objetos grandes."
        ],
        "realWorld": [
            "Em uma aplicação serverless com AWS Lambda + DynamoDB que exibe uma lista resumida de usuários, o desenvolvedor pode executar aws dynamodb scan --table-name Usuarios --projection-expression 'nome, email' para retornar apenas os atributos essenciais para a exibição, evitando o tráfego e o processamento de dados desnecessários, resultando em menor latência, redução no consumo de throughput e maior segurança."
        ]
    }
];
