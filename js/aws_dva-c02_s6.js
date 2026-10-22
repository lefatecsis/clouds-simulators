const originalQuestions = [
    {
        "id": 1,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "A equipe de desenvolvimento de uma organização varejista deseja permitir que uma função Lambda em sua Conta AWS A acesse uma tabela DynamoDB em outra Conta AWS B. Como um Associate Developer, qual das seguintes soluções você recomendaria para esse caso de uso? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Configurar uma política inline na função Lambda da Conta A para acessar diretamente a tabela DynamoDB na Conta B.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar um clone da função Lambda na Conta AWS B para que ela possa acessar a tabela DynamoDB na mesma conta.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Criar uma função IAM na Conta B com acesso ao DynamoDB. Modificar a política de confiança dessa função IAM na Conta B para permitir que a função Lambda da Conta A a assuma. Atualizar o código da função Lambda para incluir a chamada da API AssumeRole.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Adicionar uma política de recurso à tabela DynamoDB na Conta AWS B para conceder acesso à função Lambda na Conta A.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Criar uma função IAM na Conta B com acesso ao DynamoDB. Modificar a política de confiança da função na Conta B para permitir que a função de execução da Lambda assuma essa função. Atualizar o código da função Lambda para incluir a chamada da API AssumeRole.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Políticas inline na função Lambda da Conta A não concedem permissões cross-account para acessar recursos em outra conta sem o uso de AssumeRole ou políticas de recurso adequadas."
            },
            {
                "correct": false,
                "text": "Incorreta. Clonar a função Lambda em outra conta não resolve o problema de acesso cross-account e adiciona complexidade desnecessária."
            },
            {
                "correct": true,
                "text": "Correta. Essa abordagem configura corretamente a política de confiança na função IAM da Conta B para permitir que a função Lambda da Conta A assuma essa função via AssumeRole, garantindo acesso seguro e controlado ao DynamoDB cross-account."
            },
            {
                "correct": false,
                "text": "Incorreta. Tabelas DynamoDB não suportam políticas de recurso para controle de acesso cross-account, portanto essa opção não é viável."
            },
            {
                "correct": true,
                "text": "Correta. Essa é a abordagem recomendada para permitir que uma função Lambda em uma conta acesse recursos em outra conta. A função IAM na Conta B concede permissões ao DynamoDB e permite que a função Lambda da Conta A a assuma via AssumeRole, garantindo segurança e controle adequados."
            }
        ],
        "glossary": [
            "Função Lambda: Serviço de computação serverless da AWS que executa código em resposta a eventos, eliminando a necessidade de gerenciar servidores.",
            "DynamoDB: Banco de dados NoSQL totalmente gerenciado pela AWS, projetado para alta disponibilidade, baixa latência e escalabilidade automática.",
            "Função IAM (IAM Role): Entidade do AWS Identity and Access Management (IAM) que define um conjunto de permissões que pode ser assumido por usuários, serviços ou aplicações.",
            "Política de confiança (Trust Policy): Documento JSON que define quais entidades (usuários, funções ou serviços) têm permissão para assumir uma função IAM.",
            "AssumeRole API: Chamada de API que permite que uma entidade assuma temporariamente uma função IAM, obtendo credenciais temporárias com permissões específicas."
        ],
        "generalExplanation": [
            "Para permitir que uma função AWS Lambda em uma Conta A acesse uma tabela DynamoDB em outra Conta B, a abordagem mais segura e recomendada é utilizar o mecanismo de AssumeRole com funções IAM e políticas de confiança. O processo funciona da seguinte forma: Na Conta B, cria-se uma função IAM com permissões específicas para acessar o DynamoDB. Essa função inclui uma política de confiança que autoriza a função Lambda da Conta A a assumi-la (via sts:AssumeRole). No código da função Lambda, é implementada uma chamada à API AssumeRole para obter credenciais temporárias da função da Conta B. A Lambda, agora com credenciais válidas da Conta B, pode acessar a tabela DynamoDB de forma segura e auditável."
        ],
        "realWorld": [
            "Imagine um sistema de e-commerce corporativo onde a Conta A hospeda a aplicação serverless (funções Lambda que processam pedidos) e a Conta B mantém o DynamoDB com o inventário de produtos. Quando um pedido é confirmado, a função Lambda na Conta A precisa atualizar o estoque no DynamoDB da Conta B. O fluxo ideal seria: a Lambda na Conta A chama o STS para executar o AssumeRole, o STS retorna credenciais temporárias da função IAM da Conta B, e a Lambda usa essas credenciais para executar a operação no DynamoDB."
        ]
    },
    {
        "id": 2,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua equipe acabou de assinar um contrato anual com um cliente que mantém uma aplicação web em três camadas, que precisa ser migrada para a AWS Cloud. A aplicação possui tráfego constante ao longo do dia e necessita estar em um sistema confiável, com alta disponibilidade e sem tempo de inatividade. A solução também precisa ser custo-efetiva para essa startup. Qual das seguintes opções você deve escolher?",
        "options": [
            {
                "letter": "A",
                "text": "Instâncias On-Demand do Amazon EC2",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Instâncias Reservadas do Amazon EC2 com reserva de capacidade zonal",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Uso de Auto Scaling com múltiplas zonas de disponibilidade",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Instâncias Spot do Amazon EC2",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Infraestrutura On-Premises",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. As instâncias On-Demand cobram por segundo sem compromissos de longo prazo, oferecendo flexibilidade total para iniciar, parar ou terminar instâncias a qualquer momento. No entanto, elas são mais caras do que as Instâncias Reservadas. Como o sistema precisa estar disponível por um ano inteiro, utilizar Instâncias Reservadas é mais econômico e adequado para esse cenário."
            },
            {
                "correct": true,
                "text": "Correta. As Instâncias Reservadas com reserva de capacidade zonal garantem a disponibilidade da capacidade necessária na zona de disponibilidade escolhida, proporcionando maior segurança para lançar o número de instâncias reservadas quando necessário. Além disso, proporcionam economia significativa em comparação com as instâncias sob demanda, especialmente em contratos de longo prazo, como um ano."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o Auto Scaling em múltiplas zonas de disponibilidade aumente a disponibilidade e escalabilidade da aplicação, ele não é uma opção isolada para garantir custo-efetividade e reserva de capacidade para um contrato anual, sendo necessário combinar com tipos adequados de instâncias para otimização de custos."
            },
            {
                "correct": false,
                "text": "Incorreta. Instâncias Spot são instâncias EC2 não utilizadas oferecidas a preços muito reduzidos, mas podem ser interrompidas a qualquer momento sem aviso prévio. São indicadas para cargas de trabalho tolerantes a interrupções, como processamento em lote ou tarefas de background, e não para aplicações que exigem alta disponibilidade e zero downtime."
            },
            {
                "correct": false,
                "text": "Incorreta. Infraestrutura On-Premises implica que o cliente mantém fisicamente os servidores, incluindo provisionamento de capacidade e manutenção. Isso não é uma opção viável quando o objetivo é migrar a aplicação para a AWS Cloud, pois vai contra o modelo de nuvem gerenciada e escalável da AWS."
            }
        ],
        "glossary": [
            "Instâncias Reservadas com reserva de capacidade zonal: desconto aplicado a instâncias EC2 On-Demand que garante capacidade reservada em uma Zona de Disponibilidade (AZ) específica, assegurando disponibilidade e economia para uso contínuo.",
            "Instâncias On-Demand: instâncias EC2 cobradas por segundo, sem compromisso de longo prazo — oferecem flexibilidade, mas com custo mais alto.",
            "Instâncias Spot: instâncias EC2 com preço reduzido, porém sujeitas a interrupções pela AWS a qualquer momento; ideais para cargas tolerantes a falhas.",
            "Infraestrutura On-Premises: servidores físicos mantidos localmente, fora da nuvem pública da AWS."
        ],
        "generalExplanation": [
            "Para uma aplicação web com tráfego constante e necessidade de alta disponibilidade durante um ano, a opção mais adequada é utilizar Instâncias Reservadas com reserva de capacidade zonal. Essas instâncias proporcionam economia significativa em comparação às On-Demand e garantem capacidade disponível na zona de disponibilidade escolhida — fator essencial para evitar falhas por falta de recursos. As Instâncias Spot não são apropriadas nesse cenário, pois podem ser interrompidas a qualquer momento."
        ],
        "realWorld": [
            "Imagine uma empresa de e-commerce que precisa manter seu site 100% disponível durante todo o ano, com picos previsíveis de tráfego em datas promocionais. A equipe de infraestrutura adota Instâncias Reservadas Zonais para garantir a capacidade mínima permanente do ambiente, reduzindo custos em relação ao uso contínuo de On-Demand. Ao mesmo tempo, o Auto Scaling é configurado em múltiplas zonas de disponibilidade para aumentar a capacidade temporariamente durante períodos de alto tráfego e reduzir automaticamente em horários de menor demanda."
        ]
    },
    {
        "id": 3,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Segurança",
        "prompt": "Um aplicativo de compartilhamento de fotos gerencia sua frota de servidores EC2 por trás de um Application Load Balancer, e o tráfego é distribuído por uma distribuição CloudFront. A equipe de desenvolvimento deseja desacoplar o processo de autenticação de usuários do aplicativo para que os servidores possam focar apenas na lógica de negócio. Como um Associate Developer, qual das seguintes soluções você recomendaria para atender a esse caso de uso com o mínimo esforço de desenvolvimento?",
        "options": [
            {
                "letter": "A",
                "text": "Usar autenticação Cognito via Cognito Identity Pools para a sua distribuição CloudFront",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar autenticação Cognito via Cognito User Pools para o seu Application Load Balancer",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Usar autenticação Cognito via Cognito User Pools para a sua distribuição CloudFront",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar autenticação Cognito via Cognito Identity Pools para o seu Application Load Balancer",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Cognito Identity Pools não são usados para gerenciar autenticação de usuários. Eles fornecem credenciais temporárias para acesso a recursos AWS, mas não realizam autenticação direta. Portanto, essa opção não é adequada para autenticação de usuários na distribuição CloudFront."
            },
            {
                "correct": true,
                "text": "Correta. O Application Load Balancer pode ser configurado para autenticar usuários de forma segura usando Cognito User Pools, permitindo que a autenticação seja offloadada para o ALB. Isso possibilita que os servidores da aplicação foquem exclusivamente na lógica de negócio. Além disso, Cognito User Pools suportam autenticação via provedores sociais e corporativos, facilitando a integração e reduzindo o esforço de desenvolvimento."
            },
            {
                "correct": false,
                "text": "Incorreta. Não é possível integrar diretamente Cognito User Pools com uma distribuição CloudFront para autenticação. Para isso, seria necessário criar uma função Lambda@Edge para realizar a autenticação via Cognito User Pools, o que implica em esforço adicional de desenvolvimento, não atendendo ao requisito de mínimo esforço."
            },
            {
                "correct": false,
                "text": "Incorreta. Não existe a possibilidade de usar autenticação via Cognito Identity Pools para gerenciar a autenticação de usuários diretamente no Application Load Balancer. Os Identity Pools fornecem credenciais temporárias para usuários autenticados ou convidados, mas não gerenciam o processo de autenticação em si, que deve ser feito via Cognito User Pools."
            }
        ],
        "glossary": [
            "Application Load Balancer (ALB): balanceador de carga gerenciado da AWS que oferece roteamento avançado de tráfego HTTP/HTTPS, suporte a autenticação nativa e integração com Cognito User Pools.",
            "CloudFront: serviço de CDN (Content Delivery Network) da AWS que distribui conteúdo globalmente com baixa latência e alta disponibilidade.",
            "Cognito User Pools: diretório de usuários do Amazon Cognito que gerencia autenticação e autorização, permitindo login com usuários próprios ou provedores sociais (como Google e Facebook).",
            "Cognito Identity Pools: componente do Cognito que fornece credenciais temporárias da AWS para acesso a recursos (ex: S3, DynamoDB), mas não realiza autenticação de usuários."
        ],
        "generalExplanation": [
            "A opção mais apropriada para desacoplar o processo de autenticação com mínimo esforço de desenvolvimento é integrar o Application Load Balancer (ALB) com o Cognito User Pools. Essa integração permite que o próprio ALB autentique os usuários diretamente, antes mesmo de encaminhar as requisições para as instâncias EC2, contêineres ou funções backend. Dessa forma, o processo de login e validação de tokens é feito de forma nativa, segura e gerenciada, sem necessidade de adicionar código de autenticação na aplicação."
        ],
        "realWorld": [
            "Em uma aplicação web hospedada em instâncias EC2 ou ECS, o time de desenvolvimento pode configurar o Application Load Balancer com autenticação via Cognito User Pools. Com isso, qualquer requisição recebida pelo ALB é redirecionada automaticamente para a página de login do Cognito. Após a autenticação bem-sucedida, o usuário retorna ao ALB já com um token válido (JWT), e só então o tráfego é encaminhado ao backend. Essa arquitetura remove a necessidade de código de autenticação no backend, centraliza a autenticação no ALB, melhorando a manutenção e a segurança, reduz a carga nas instâncias de aplicação e simplifica a escalabilidade em ambientes distribuídos."
        ]
    },
    {
        "id": 4,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Segurança",
        "prompt": "Como Desenvolvedor Associado, você é responsável pelo gerenciamento dos dados dos streams do AWS Kinesis na sua empresa. A equipe de segurança estabeleceu requisitos mais rigorosos, utilizando mecanismos disponíveis no serviço Kinesis Data Streams que não exigem alterações no código da sua parte. Quais das seguintes funcionalidades atendem aos requisitos mencionados? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Criptografia do lado do cliente",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Uso de VPC Endpoints para Kinesis Data Streams",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Criptografia KMS para dados em repouso",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Criptografia SSE-C",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A criptografia do lado do cliente requer alterações no código para que os dados sejam criptografados antes do envio ao Kinesis, portanto não atende ao requisito de não modificar o código."
            },
            {
                "correct": true,
                "text": "Correta. O uso de VPC Endpoints permite que o tráfego entre a VPC e o Kinesis Data Streams permaneça na rede da AWS, aumentando a segurança sem necessidade de alterações no código do cliente."
            },
            {
                "correct": true,
                "text": "Correta. A criptografia do lado do servidor com AWS KMS (Key Management Service) protege os dados em repouso automaticamente, sem necessidade de alterações no código, usando uma chave mestra gerenciada pelo cliente."
            },
            {
                "correct": false,
                "text": "Incorreta. A criptografia SSE-C é um recurso do Amazon S3 onde o cliente fornece as chaves de criptografia; não é aplicável ao Kinesis Data Streams e não atende ao requisito do cenário."
            }
        ],
        "glossary": [
            "VPC Endpoints: recursos que permitem a comunicação privada entre uma VPC e serviços AWS (como Kinesis, S3 ou DynamoDB), eliminando a necessidade de roteamento pela internet pública e aumentando a segurança e desempenho da aplicação.",
            "Criptografia KMS para dados em repouso: mecanismo de criptografia gerenciada pelo AWS Key Management Service (KMS) que protege automaticamente dados armazenados em serviços AWS (como Kinesis Data Streams), sem necessidade de modificar o código da aplicação."
        ],
        "generalExplanation": [
            "Para atender a requisitos de segurança avançados sem modificar o código da aplicação, as melhores opções são: VPC Endpoints para o Amazon Kinesis Data Streams, garantindo que o tráfego entre a aplicação (em uma VPC) e o serviço Kinesis ocorra inteiramente dentro da rede privada AWS, sem exposição à internet pública; e Criptografia do lado do servidor com AWS KMS (SSE-KMS), que protege automaticamente os dados em repouso nos shards do Kinesis, usando chaves gerenciadas pela AWS ou chaves do cliente (CMKs) — tudo isso sem alterar o código da aplicação."
        ],
        "realWorld": [
            "Imagine um ambiente corporativo em que uma empresa de análise financeira coleta grandes volumes de dados sensíveis via Kinesis Data Streams. Por exigência da área de segurança, nenhum tráfego pode transitar pela internet pública e todos os dados precisam estar criptografados em repouso. O desenvolvedor pode configurar um VPC Endpoint para o serviço Kinesis, garantindo que os dados trafeguem apenas pela rede privada da AWS, e a criptografia KMS ativada no stream, de modo que todos os registros armazenados sejam criptografados automaticamente, com controle centralizado das chaves via AWS KMS. Com isso, aplicações produtoras e consumidoras (como funções AWS Lambda, aplicações EC2 ou ECS tasks) podem continuar operando sem qualquer ajuste no código."
        ]
    },
    {
        "id": 5,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa de investimentos deseja gerar continuamente análises de séries temporais das ações compradas por seus clientes. A empresa quer construir um ranking ao vivo com análises quase em tempo real dessas ações mais demandadas. Qual das alternativas a seguir representa uma solução totalmente gerenciada com o menor custo para atender a esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Usar Kinesis Firehose para ingerir os dados e Kinesis Data Analytics para gerar as pontuações do ranking e as análises de séries temporais.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Usar Kinesis Data Streams para ingerir os dados e Kinesis Data Analytics para gerar as pontuações do ranking e as análises de séries temporais.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar Kinesis Firehose para ingerir os dados e Amazon Athena para gerar as pontuações do ranking e as análises de séries temporais.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar Kinesis Data Streams para ingerir os dados e a Amazon Kinesis Client Library para a lógica da aplicação gerar as pontuações do ranking e as análises de séries temporais.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O Amazon Kinesis Data Firehose é um serviço totalmente gerenciado que captura, transforma e entrega dados de streaming para destinos como Amazon S3, Redshift e outros, escalando automaticamente e sem necessidade de administração contínua. O Kinesis Data Analytics permite transformar e analisar dados em streaming em tempo real usando Apache Flink, com baixa latência e sem necessidade de gerenciar servidores, sendo ideal para gerar rankings e análises de séries temporais quase em tempo real com custo otimizado."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o Kinesis Data Streams seja altamente escalável e adequado para ingestão de grandes volumes de dados, ele envolve custos adicionais relacionados à provisão e manutenção de shards. Para um cenário que prioriza uma solução totalmente gerenciada e de menor custo, o Kinesis Firehose é mais indicado, pois elimina a necessidade de gerenciamento de shards e reduz os custos operacionais."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon Athena é um serviço de consulta interativa que analisa dados armazenados no Amazon S3 usando SQL padrão. Embora seja serverless e não exija gerenciamento de infraestrutura, ele não é adequado para análises em tempo real de dados de streaming. Para análises quase em tempo real, o Kinesis Data Analytics é a opção mais apropriada."
            },
            {
                "correct": false,
                "text": "Incorreta. A Amazon Kinesis Client Library (KCL) é uma biblioteca que facilita a construção de aplicações consumidoras para processar dados do Kinesis Data Streams, lidando com balanceamento de carga e tolerância a falhas. No entanto, essa abordagem exige desenvolvimento e gerenciamento da aplicação, o que não atende ao requisito de uma solução totalmente gerenciada e de menor custo."
            }
        ],
        "glossary": [
            "Amazon Kinesis Data Firehose: serviço totalmente gerenciado para captura, transformação e entrega de dados em streaming, que escala automaticamente sem necessidade de gerenciar shards ou infraestrutura.",
            "Amazon Kinesis Data Analytics: serviço serverless baseado em Apache Flink que permite analisar e transformar dados em tempo real provenientes de streams (como Firehose ou Data Streams).",
            "Amazon Athena: serviço serverless para executar consultas SQL em dados armazenados no Amazon S3; ideal para análises em batch, não para streaming em tempo real."
        ],
        "generalExplanation": [
            "Para um caso de uso que exige análise quase em tempo real e baixo custo operacional, a melhor arquitetura combina Amazon Kinesis Data Firehose e Amazon Kinesis Data Analytics. O Kinesis Firehose simplifica a ingestão e entrega de dados, ajustando-se automaticamente à taxa de entrada sem exigir o gerenciamento de shards. O Kinesis Data Analytics fornece um ambiente serverless baseado em Apache Flink para realizar processamentos e análises em tempo real — como agregações, detecção de padrões ou cálculos de métricas dinâmicas. Essa combinação elimina a necessidade de gerenciar infraestrutura, reduz custos e oferece baixa latência."
        ],
        "realWorld": [
            "Em uma corretora de valores que processa transações financeiras em tempo real, o time de engenharia pode usar o Amazon Kinesis Data Firehose para coletar continuamente dados de ordens de compra e venda de ações enviadas pelos clientes, e configurar o Amazon Kinesis Data Analytics (com Apache Flink) para calcular, em tempo real, médias de preço, volume negociado e rankings das ações mais populares. Os resultados podem ser entregues diretamente para o Amazon S3 (para arquivamento histórico) e o Amazon OpenSearch Service (para dashboards analíticos)."
        ]
    },
    {
        "id": 6,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua aplicação envia mensagens com frequência para uma fila do Amazon Simple Queue Service (SQS), que são então consultadas por outra aplicação que especifica qual mensagem deseja recuperar. Qual das opções abaixo descreve o número máximo de mensagens que podem ser recuperadas de uma vez?",
        "options": [
            {
                "letter": "A",
                "text": "100",
                "correct": false
            },
            {
                "letter": "B",
                "text": "5",
                "correct": false
            },
            {
                "letter": "C",
                "text": "10",
                "correct": true
            },
            {
                "letter": "D",
                "text": "20",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Apesar de o SQS suportar filas com milhares de mensagens, a operação de recebimento limita a quantidade máxima de mensagens retornadas por chamada a 10."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível recuperar menos de 10 mensagens, o limite máximo suportado pela API do SQS para recuperação simultânea é maior que 5."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon SQS permite recuperar até 10 mensagens em uma única chamada ao método ReceiveMessage, que é o limite máximo definido pela API para processamento em lote."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon SQS não permite recuperar mais que 10 mensagens em uma única chamada, portanto 20 é um valor acima do limite permitido."
            }
        ],
        "glossary": [
            "Amazon SQS (Simple Queue Service): serviço totalmente gerenciado de filas de mensagens da AWS que permite desacoplar e escalar componentes de aplicações distribuídas, garantindo entrega confiável e tolerância a falhas.",
            "ReceiveMessage: operação da API do SQS responsável por recuperar mensagens da fila. É possível buscar até 10 mensagens por chamada, dependendo do parâmetro MaxNumberOfMessages.",
            "Mensagens em lote (Batch Processing): técnica de envio ou recebimento de várias mensagens em uma única operação para aumentar a eficiência, reduzir latência e minimizar custos de API calls."
        ],
        "generalExplanation": [
            "O Amazon SQS define um limite máximo de 10 mensagens por chamada à operação ReceiveMessage. Esse limite é projetado para equilibrar eficiência de throughput, uso de rede e estabilidade do consumidor, evitando sobrecarga na aplicação que processa as mensagens. Embora uma fila SQS possa conter milhares ou até milhões de mensagens, o consumo deve ser feito em lotes de até 10 por chamada, controlado pelo parâmetro MaxNumberOfMessages."
        ],
        "realWorld": [
            "Em arquiteturas distribuídas ou event-driven, o Amazon SQS é amplamente usado para conectar produtores e consumidores de mensagens — por exemplo, entre microsserviços ou funções AWS Lambda. Um serviço produtor envia mensagens de eventos de pedidos para uma fila SQS. Um consumidor (EC2, ECS ou Lambda) recupera mensagens em lote usando ReceiveMessage(MaxNumberOfMessages=10). Após processar cada mensagem, o consumidor envia uma chamada DeleteMessageBatch para removê-las da fila. Esse processamento em lotes de 10 garante maior throughput com menos chamadas à API, reduzindo custos e mantendo a aplicação responsiva."
        ]
    },
    {
        "id": 7,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Segurança",
        "prompt": "Uma empresa utiliza um grande conjunto de volumes EBS para sua frota de instâncias Amazon EC2. Como um AWS Certified Developer – Associate, foi solicitado seu auxílio para entender os recursos de segurança dos volumes EBS. A empresa não deseja construir ou manter sua própria infraestrutura de gerenciamento de chaves de criptografia. Você pode ajudá-los a entender o que funciona para a criptografia do Amazon EBS? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "A criptografia por padrão é uma configuração específica de Zona de Disponibilidade (AZ). Se você ativá-la para uma AZ, não pode desativá-la para volumes ou snapshots individuais nessa AZ.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Um volume restaurado a partir de um snapshot criptografado, ou uma cópia de um snapshot criptografado, está sempre criptografado.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "A criptografia por padrão é uma configuração específica da Região. Se você ativá-la para uma Região, não pode desativá-la para volumes ou snapshots individuais nessa Região.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Você pode criptografar um volume ou snapshot existente não criptografado usando os SDKs da AWS Key Management Service (KMS).",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Um snapshot de um volume criptografado pode ser criptografado ou não criptografado.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A criptografia por padrão é uma configuração específica da Região, não da Zona de Disponibilidade. Ao ativá-la para uma Região, não é possível desativá-la para volumes ou snapshots individuais nessa Região."
            },
            {
                "correct": true,
                "text": "Correta. Um volume criado a partir de um snapshot criptografado ou uma cópia desse snapshot sempre será criptografado. A criptografia não pode ser removida de volumes ou snapshots criptografados."
            },
            {
                "correct": true,
                "text": "Correta. É possível configurar sua conta AWS para forçar a criptografia dos novos volumes EBS e cópias de snapshots criados. Essa configuração é específica da Região e, uma vez ativada, não pode ser desativada para volumes ou snapshots individuais."
            },
            {
                "correct": false,
                "text": "Incorreta. Não existe uma forma direta de criptografar um volume ou snapshot já existente e não criptografado. Para criptografar, é necessário criar uma cópia do snapshot original habilitando a criptografia durante a cópia e então criar um volume a partir desse snapshot criptografado."
            },
            {
                "correct": false,
                "text": "Incorreta. Um snapshot criado a partir de um volume criptografado sempre será criptografado. Não é possível criar snapshots não criptografados a partir de volumes criptografados."
            }
        ],
        "glossary": [
            "Amazon EBS (Elastic Block Store): serviço de armazenamento em blocos usado por instâncias EC2 para persistir dados de forma durável e de alta performance.",
            "Snapshot: cópia incremental de um volume EBS em um ponto específico no tempo, utilizada para backup, recuperação ou replicação de volumes.",
            "Criptografia por padrão (EBS Encryption by Default): configuração regional que força todos os novos volumes EBS e snapshots a serem automaticamente criptografados."
        ],
        "generalExplanation": [
            "A criptografia por padrão do Amazon EBS é uma configuração regional, ou seja, quando ativada em uma região AWS, todos os volumes e snapshots criados nela serão automaticamente criptografados — independentemente da zona de disponibilidade (AZ) onde o recurso está localizado. Essa política elimina a necessidade de especificar manualmente a criptografia ao criar volumes ou ao realizar cópias de snapshots, garantindo que todos os dados sejam protegidos por padrão. Volumes criados a partir de snapshots criptografados mantêm automaticamente a criptografia. Volumes ou snapshots não criptografados existentes não podem ser criptografados diretamente; para isso, deve-se criar uma cópia criptografada do snapshot original."
        ],
        "realWorld": [
            "Em um ambiente corporativo, uma empresa que utiliza centenas de volumes EBS para aplicações em EC2, RDS customizados ou clusters Kubernetes (EKS on EC2) pode ativar a criptografia por padrão na região — garantindo que todos os novos volumes e snapshots sejam protegidos automaticamente. Um desenvolvedor cria um novo volume EBS para anexar a uma instância EC2. Ele não precisa marcar manualmente a opção 'Encrypt this volume' — a criptografia já é aplicada automaticamente. Ao restaurar dados de um snapshot criptografado, o volume restaurado permanece criptografado, mantendo a continuidade da proteção."
        ]
    },
    {
        "id": 8,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Seu colega de equipe configurou uma notificação de evento do Amazon S3 para um bucket que armazena dados sensíveis de auditoria da empresa. Como líder da equipe, você está recebendo as notificações SNS para todos os eventos nesse bucket. Após validar os dados dos eventos, percebeu que alguns eventos estão faltando. Qual poderia ser a causa desse comportamento e como evitá-lo no futuro? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Sua ação de notificação está escrevendo no mesmo bucket que aciona a notificação.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O versionamento está habilitado no bucket S3, o que ajuda a garantir notificações para cada versão do objeto, mas ainda assim, em casos de sobrescritas rápidas ou exclusões, alguns eventos podem não ser entregues.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "As notificações do S3 são sempre garantidas e nunca podem ser perdidas, independentemente da configuração do bucket.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Alguém pode ter criado uma nova configuração de notificação que substituiu sua configuração existente.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Se duas gravações forem feitas simultaneamente em um único objeto sem versionamento, é possível que apenas uma notificação de evento seja enviada.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Se a ação de notificação escreve no mesmo bucket que dispara a notificação, isso pode causar um loop de execução, mas não resulta em eventos faltando."
            },
            {
                "correct": true,
                "text": "Correta. Habilitar o versionamento no bucket S3 faz com que cada gravação crie uma nova versão do objeto e dispare uma notificação para essa versão, reduzindo a chance de perda de eventos. No entanto, isso não garante 100% de entrega em todos os casos, especialmente em situações de concorrência muito alta ou exclusões rápidas."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o S3 tente entregar notificações pelo menos uma vez, não há garantia absoluta de que nenhuma notificação será perdida, especialmente em cenários de alta concorrência ou falhas temporárias."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível que uma nova configuração substitua a anterior, no cenário apresentado o líder da equipe está recebendo a maioria das notificações, o que indica que a configuração não foi substituída."
            },
            {
                "correct": true,
                "text": "Correta. As notificações de evento do Amazon S3 são entregues pelo menos uma vez, mas em buckets sem versionamento, gravações simultâneas no mesmo objeto podem resultar em notificações agrupadas ou perdidas. Para garantir que cada gravação gere uma notificação, recomenda-se habilitar o versionamento no bucket."
            }
        ],
        "glossary": [
            "Amazon S3 (Simple Storage Service): serviço de armazenamento de objetos altamente escalável da AWS, utilizado para guardar e recuperar qualquer quantidade de dados a qualquer momento.",
            "Notificação de evento: mecanismo do S3 que permite configurar alertas automáticos quando ocorrem eventos específicos em um bucket, como criação, modificação ou exclusão de objetos.",
            "Versionamento: recurso do S3 que mantém múltiplas versões de um mesmo objeto, evitando sobrescritas e permitindo recuperar versões anteriores."
        ],
        "generalExplanation": [
            "As notificações de evento do Amazon S3 são projetadas com entrega garantida pelo menos uma vez, o que significa que um mesmo evento pode ser entregue mais de uma vez, mas nem todos os eventos são garantidamente entregues, especialmente em cenários sem versionamento. Em buckets sem versionamento habilitado, quando múltiplas gravações simultâneas ocorrem sobre o mesmo objeto, apenas a última modificação pode gerar notificação — as anteriores podem ser sobrescritas antes que o evento seja emitido. Ao habilitar o versionamento, cada nova gravação cria uma nova versão do objeto, o que garante que cada alteração gere seu próprio evento e, portanto, melhora a confiabilidade na entrega das notificações."
        ],
        "realWorld": [
            "Considere uma aplicação serverless em que um bucket S3 armazena logs de auditoria corporativa e cada novo arquivo deve acionar uma função Lambda para processar os dados e armazenar resultados no DynamoDB. Se o bucket não tiver versionamento e dois arquivos forem gravados quase simultaneamente com o mesmo nome, apenas a última gravação poderá gerar evento, e a primeira modificação pode ser perdida, comprometendo a auditoria. Ao habilitar o versionamento, cada gravação é tratada como uma nova versão, gerando eventos distintos — garantindo que nenhuma atualização seja ignorada."
        ]
    },
    {
        "id": 9,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa deseja implementar autenticação para seu novo serviço RESTful API que utiliza o Amazon API Gateway. Para autenticar as chamadas, cada requisição deve incluir cabeçalhos HTTP com um client ID e um user ID. Essas credenciais devem ser comparadas com os dados de autenticação armazenados em uma tabela DynamoDB. Como um AWS Certified Developer – Associate, qual das seguintes opções você recomendaria para implementar essa autenticação no API Gateway?",
        "options": [
            {
                "letter": "A",
                "text": "Autorizar usando o Amazon Cognito que referencie a tabela de autenticação do DynamoDB.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Atualizar as requisições de integração do API Gateway para exigir as credenciais, e então conceder ao API Gateway acesso à tabela de autenticação no DynamoDB.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Desenvolver um authorizer Lambda que consulte os dados de autenticação na tabela DynamoDB.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Configurar um Model no API Gateway que exija as credenciais, e então conceder ao API Gateway acesso à tabela de autenticação no DynamoDB.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Amazon Cognito User Pools gerencia usuários e autenticação, mas não suporta diretamente a referência a tabelas DynamoDB para validação de credenciais personalizadas. Para usar o Cognito, os usuários devem estar registrados no User Pool, e a autenticação é feita via tokens gerados pelo Cognito, não diretamente pela tabela DynamoDB."
            },
            {
                "correct": false,
                "text": "Incorreta. As requisições de integração no API Gateway são usadas para encaminhar dados para o backend, mas não são adequadas para implementar autenticação personalizada. Além disso, conceder acesso direto do API Gateway ao DynamoDB para autenticação não é uma prática recomendada, pois o API Gateway não possui lógica para validar credenciais diretamente."
            },
            {
                "correct": true,
                "text": "Correta. Um authorizer Lambda é um recurso do API Gateway que permite executar uma função Lambda para controlar o acesso à API. Ele pode implementar um esquema de autenticação personalizado, como validar client ID e user ID presentes nos cabeçalhos HTTP, consultando a tabela DynamoDB para verificar as credenciais. Essa abordagem oferece flexibilidade e segurança para autenticação customizada."
            },
            {
                "correct": false,
                "text": "Incorreta. No API Gateway, um Model define a estrutura dos dados da payload usando JSON Schema, mas não realiza autenticação ou validação de credenciais. Models são usados para validação de formato de dados, não para controle de acesso ou autenticação."
            }
        ],
        "glossary": [
            "API Gateway: Serviço da AWS que permite criar, publicar, monitorar e proteger APIs RESTful e WebSocket, atuando como uma camada de front-end para aplicações e microserviços.",
            "Authorizer Lambda: Função AWS Lambda personalizada usada para autenticar e autorizar chamadas ao API Gateway, executando lógica própria de verificação de credenciais e controle de acesso.",
            "DynamoDB: Banco de dados NoSQL totalmente gerenciado, de alta disponibilidade e baixa latência, ideal para armazenar dados como credenciais, tokens ou metadados de usuários."
        ],
        "generalExplanation": [
            "A melhor solução para implementar autenticação personalizada no API Gateway — onde é necessário validar client ID e user ID enviados nos cabeçalhos HTTP contra dados armazenados no DynamoDB — é utilizar um Authorizer Lambda. Com essa abordagem, o API Gateway delega a autenticação a uma função Lambda Authorizer. A Lambda recebe os cabeçalhos HTTP, valida os valores de client ID e user ID consultando a tabela no DynamoDB. Caso as credenciais sejam válidas, a função retorna uma IAM policy permitindo o acesso; caso contrário, retorna uma política de negação."
        ],
        "realWorld": [
            "Imagine uma empresa que fornece APIs internas para parceiros, e cada cliente possui um client ID e user ID registrados em uma tabela DynamoDB. A equipe de desenvolvimento cria uma função Lambda Authorizer que recebe o evento do API Gateway, extrai os cabeçalhos client-id e user-id, consulta a tabela DynamoDB para confirmar se o par de credenciais é válido, e retorna uma IAM policy de autorização permitindo ou negando o acesso. Essa configuração permite que apenas clientes validados acessem a API."
        ]
    },
    {
        "id": 10,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "A equipe de desenvolvimento de uma empresa de TI configurou um Application Load Balancer (ALB) com uma função Lambda A como alvo, mas a função Lambda A não consegue processar nenhuma requisição proveniente do ALB. Após investigação, a equipe descobriu que há outra função Lambda B na conta AWS que está ultrapassando os limites de concorrência. Como a equipe de desenvolvimento pode resolver esse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Utilize uma distribuição CloudFront em vez de um Application Load Balancer (ALB) para a função Lambda A.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Configure a concorrência reservada para a função Lambda B para que ela seja limitada caso ultrapasse um determinado limite de concorrência.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Utilize um API Gateway em vez de um Application Load Balancer (ALB) para a função Lambda A.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Configure concorrência provisionada para a função Lambda B para que ela seja limitada caso ultrapasse um determinado limite de concorrência.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora o CloudFront possa ser integrado com funções Lambda@Edge, essa alteração não impacta o limite de concorrência da função Lambda B. Portanto, essa opção não resolve o problema de concorrência que impede a função Lambda A de processar requisições."
            },
            {
                "correct": true,
                "text": "Correta. A concorrência é o número de requisições que uma função Lambda está processando simultaneamente. Ao configurar concorrência reservada para a função Lambda B, você limita o máximo de instâncias simultâneas que essa função pode executar, evitando que ela consuma toda a capacidade disponível e permitindo que a função Lambda A processe suas requisições sem ser bloqueada por throttling."
            },
            {
                "correct": false,
                "text": "Incorreta. Trocar o ALB por API Gateway para a função Lambda A não afeta o limite de concorrência da função Lambda B, que é a causa do problema. Essa opção não resolve o problema de throttling causado pela concorrência excessiva da função Lambda B."
            },
            {
                "correct": false,
                "text": "Incorreta. A concorrência provisionada é usada para garantir que uma função Lambda tenha instâncias pré-inicializadas para reduzir a latência, não para limitar o número máximo de execuções simultâneas. Portanto, essa opção não é adequada para controlar o uso excessivo de concorrência da função Lambda B."
            }
        ],
        "glossary": [
            "Concorrência reservada (Reserved Concurrency): configuração que define o número máximo de execuções simultâneas garantidas para uma função Lambda. Garante que essa função tenha capacidade dedicada e impede que outras consumam toda a concorrência disponível na conta.",
            "Concorrência provisionada (Provisioned Concurrency): define um número fixo de instâncias pré-aquecidas de uma função Lambda para reduzir a latência de cold start, sem limitar o total de execuções simultâneas.",
            "Throttling: mecanismo que restringe execuções de uma função Lambda quando o limite de concorrência é atingido, causando falhas (429 errors) ou atrasos."
        ],
        "generalExplanation": [
            "O cenário descrito apresenta um problema de limitação de concorrência (throttling), em que a função Lambda B consome toda a concorrência disponível na conta, impedindo que a Lambda A, que atende requisições do Application Load Balancer (ALB), seja executada. A solução é configurar concorrência reservada (Reserved Concurrency) para a função Lambda B. Essa configuração define um limite máximo de execuções simultâneas que essa função pode alcançar. Ao fazer isso, parte da capacidade total de concorrência da conta é preservada automaticamente para outras funções, como a Lambda A, garantindo que elas possam continuar operando mesmo sob alta carga."
        ],
        "realWorld": [
            "Imagine um ambiente serverless onde a função Lambda A processa requisições de um Application Load Balancer para uma aplicação web, e a função Lambda B executa tarefas em lote, consumindo alto volume de processamento periódico. Durante picos de execução da Lambda B, ela pode utilizar toda a concorrência disponível da conta, fazendo com que a Lambda A fique bloqueada (throttled), causando lentidão ou falhas na aplicação web. Para evitar isso, o engenheiro configura a Lambda B com Reserved Concurrency = 50, garantindo que apenas 50 execuções simultâneas sejam permitidas para essa função, preservando o restante da capacidade para outras funções, como a Lambda A."
        ]
    },
    {
        "id": 11,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma aplicação de codificação de vídeo rodando em uma instância EC2 leva cerca de 20 segundos em média para processar cada arquivo de vídeo bruto. A aplicação consome as mensagens de novos trabalhos a partir de uma fila SQS. A equipe de desenvolvimento precisa considerar o cenário em que o processo de codificação de vídeo leva mais tempo do que o habitual, para garantir que o mesmo vídeo bruto não seja processado por múltiplos consumidores. Como um Desenvolvedor Associado, qual das seguintes soluções você recomendaria para atender a esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Usar a ação ChangeMessageVisibility para estender o tempo de visibilidade da mensagem",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Usar a ação WaitTimeSeconds para realizar short polling e estender o tempo de visibilidade da mensagem",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar a ação WaitTimeSeconds para realizar long polling e estender o tempo de visibilidade da mensagem",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar a ação DelaySeconds para atrasar o tempo de visibilidade da mensagem",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. A ação ChangeMessageVisibility permite modificar o tempo de visibilidade de uma mensagem já recebida, impedindo que outros consumidores processem a mesma mensagem enquanto o processamento atual não for concluído. Isso é essencial para cenários onde o tempo de processamento pode variar e exceder o tempo de visibilidade inicial configurado."
            },
            {
                "correct": false,
                "text": "Incorreta. Assim como no long polling, o WaitTimeSeconds em short polling apenas define o tempo que a chamada aguarda por mensagens na fila, não alterando o tempo de visibilidade da mensagem já recebida."
            },
            {
                "correct": false,
                "text": "Incorreta. A ação WaitTimeSeconds é utilizada para configurar o tempo de espera durante a operação de polling (long polling ou short polling) para receber mensagens, mas não tem efeito sobre o tempo de visibilidade da mensagem, que controla quando a mensagem fica disponível para outros consumidores."
            },
            {
                "correct": false,
                "text": "Incorreta. A ação DelaySeconds é usada para atrasar a entrega inicial de uma mensagem na fila, ou seja, para que a mensagem não fique disponível para consumo imediatamente. Ela não altera o tempo de visibilidade de uma mensagem que já foi recebida e está em processamento."
            }
        ],
        "glossary": [
            "WaitTimeSeconds: Parâmetro do Amazon SQS que define o tempo máximo que uma requisição de recebimento (ReceiveMessage) deve aguardar por mensagens antes de retornar, sendo usado para long polling (aguarda mensagens) ou short polling (resposta imediata).",
            "DelaySeconds: Parâmetro que atrasa a entrega inicial de uma mensagem na fila, impedindo que ela fique imediatamente disponível para consumo após o envio.",
            "ChangeMessageVisibility: Ação que altera o tempo de visibilidade de uma mensagem já recebida, estendendo o período em que ela fica invisível para outros consumidores enquanto está sendo processada."
        ],
        "generalExplanation": [
            "Em cenários onde o tempo de processamento das mensagens pode variar, o controle do tempo de visibilidade é essencial para evitar que a mesma mensagem seja processada por múltiplos consumidores. Por padrão, após uma mensagem ser recebida de uma fila SQS, ela fica temporariamente invisível (por exemplo, 30 segundos). Se o processamento da mensagem demorar mais do que esse tempo e o consumidor não tiver concluído a tarefa, a mensagem volta a ficar visível e outro consumidor pode processá-la novamente — gerando duplicidade e inconsistência. A solução correta é utilizar a ação ChangeMessageVisibility, que permite ajustar dinamicamente o tempo de visibilidade de uma mensagem enquanto ela ainda está sendo processada."
        ],
        "realWorld": [
            "Imagine uma aplicação de processamento de vídeos hospedada em instâncias EC2 que usa Amazon SQS para distribuir tarefas. Cada mensagem na fila representa um vídeo a ser convertido para um formato específico. Como o tempo de codificação pode variar (por exemplo, 30 segundos para vídeos curtos e até 10 minutos para longos), é necessário evitar que uma instância EC2 que ainda está processando um vídeo tenha sua mensagem 'roubada' por outra instância. A solução é simples: durante o processamento, o consumidor EC2 (ou Lambda) deve chamar periodicamente o método ChangeMessageVisibility, estendendo o tempo de invisibilidade da mensagem até a conclusão da tarefa."
        ]
    },
    {
        "id": 12,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um desenvolvedor está configurando um Auto Scaling Group do Amazon EC2 que deve lançar instâncias Spot e On-Demand conforme a necessidade. Além disso, o agente do CodeDeploy precisa ser instalado automaticamente nessas instâncias EC2. Todas as instâncias EC2 estão executando o sistema operacional Amazon Linux. Qual é a forma mais eficiente operacionalmente para configurar esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "Use modelos de inicialização (launch templates) para configurar o Auto Scaling Group do EC2 para instâncias On-Demand e Spot. Ao criar um modelo de inicialização, utilize o campo User data para adicionar um script de configuração que será executado quando a instância iniciar. Esse script shell pode, então, instalar o agente CodeDeploy.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Configure o AWS Resource Access Manager (RAM) para agendar a instalação automática do agente CodeDeploy nas instâncias EC2. O agendamento automático do RAM funciona apenas em máquinas Linux e não em sistemas operacionais Windows.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Use o AWS Systems Manager para instalar e atualizar automaticamente o agente CodeDeploy nas instâncias Spot e On-Demand.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Use configurações de inicialização (launch configurations) para configurar o Auto Scaling Group do EC2 para instâncias On-Demand e Spot. Adicione o script shell na aba de configuração de inicialização no console AWS. Esse script shell instalará o agente CodeDeploy.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Modelos de inicialização permitem especificar configurações detalhadas para as instâncias, incluindo a capacidade de lançar instâncias Spot e On-Demand no mesmo Auto Scaling Group. O uso do campo User data para executar um script de instalação do agente CodeDeploy na inicialização é a forma mais eficiente e automatizada para garantir que o agente esteja instalado em todas as instâncias Amazon Linux."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS RAM é um serviço que permite compartilhar recursos de forma segura entre contas AWS, dentro de uma organização ou com usuários e funções IAM, mas não é utilizado para agendar ou automatizar a instalação do agente CodeDeploy. Portanto, essa opção não atende ao requisito."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o AWS Systems Manager possa ser usado para instalar e atualizar o agente CodeDeploy, ele exige que o agente do Systems Manager (SSM Agent) esteja previamente instalado e configurado em todas as instâncias. Isso adiciona complexidade e reduz a eficiência operacional para este caso específico."
            },
            {
                "correct": false,
                "text": "Incorreta. Configurações de inicialização não suportam o lançamento simultâneo de instâncias Spot e On-Demand nem múltiplos tipos de instância no mesmo Auto Scaling Group. Além disso, a AWS recomenda o uso de modelos de inicialização em vez de configurações de inicialização, pois oferecem mais flexibilidade e recursos."
            }
        ],
        "glossary": [
            "Auto Scaling Group (ASG): Serviço que permite escalar automaticamente instâncias EC2 conforme a demanda, garantindo alta disponibilidade e desempenho.",
            "Spot Instances: Instâncias EC2 oferecidas a preços reduzidos, sujeitas à interrupção pela AWS quando a capacidade é necessária para outros clientes.",
            "On-Demand Instances: Instâncias EC2 cobradas por uso, sem compromissos de longo prazo, oferecendo flexibilidade para cargas de trabalho variáveis.",
            "Launch Template: Modelo que define as configurações de inicialização de instâncias EC2, como tipo de instância, AMI, par de chaves, tags e scripts User data.",
            "User data: Campo utilizado para inserir scripts executados automaticamente durante a inicialização da instância EC2 (por exemplo, instalação de pacotes ou configuração de agentes)."
        ],
        "generalExplanation": [
            "A alternativa correta é a que propõe o uso de Launch Templates com scripts definidos no campo User data para configurar um Auto Scaling Group que utiliza uma combinação de instâncias Spot e On-Demand e realiza a instalação automática do agente CodeDeploy. Essa abordagem é a mais eficiente e aderente às melhores práticas da AWS, pois os Launch Templates permitem definir vários tipos de instância e parâmetros de inicialização padronizados; o User data executa automaticamente scripts de configuração, como a instalação e inicialização do CodeDeploy Agent, garantindo que as instâncias estejam prontas assim que entram em serviço."
        ],
        "realWorld": [
            "Em um cenário real, uma equipe pode definir um Auto Scaling Group configurado para manter 2 instâncias On-Demand como base (garantia de disponibilidade), adicionar instâncias Spot conforme o aumento de tráfego (otimização de custo), e utilizar um Launch Template com script User data que instala o agente CodeDeploy. Esse script garante que cada nova instância (Spot ou On-Demand) seja automaticamente preparada para participar do pipeline do AWS CodeDeploy, recebendo novas versões de aplicação assim que for provisionada."
        ]
    },
    {
        "id": 13,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Implantação",
        "prompt": "Sua empresa de comércio eletrônico precisa melhorar seu processo de entrega de software e está migrando da metodologia waterfall. Você decidiu que toda aplicação deve ser construída seguindo as melhores práticas de CI/CD e que cada aplicação deve ser empacotada e implantada como um container Docker. As imagens Docker devem ser armazenadas no ECR e enviadas utilizando AWS CodePipeline e AWS CodeBuild. Ao tentar realizar esse processo, a última etapa falha devido a um problema de autorização. Qual é a causa mais provável desse problema?",
        "options": [
            {
                "letter": "A",
                "text": "O repositório do ECR está obsoleto; é necessário deletá-lo e recriá-lo.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O CodeBuild não consegue se comunicar com o ECR devido a problemas com grupos de segurança.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "As instâncias do ECS estão mal configuradas e precisam conter dados adicionais no arquivo /etc/ecs/ecs.config.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "As permissões do IAM estão incorretas para o serviço CodeBuild.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O conceito de repositório 'obsoleto' ou 'stale' não existe no Amazon ECR. Repositórios podem ser deletados quando não são mais necessários, mas isso não está relacionado a erros de autorização durante o push de imagens."
            },
            {
                "correct": false,
                "text": "Incorreta. Grupos de segurança atuam como firewalls virtuais em nível de instância, mas não interferem diretamente no envio de imagens Docker para o ECR. Portanto, problemas de grupos de segurança não são a causa provável do erro de autorização nesse contexto."
            },
            {
                "correct": false,
                "text": "Incorreta. Um erro de autorização indica problemas de permissões, não de configuração das instâncias ECS. Além disso, o arquivo /etc/ecs/ecs.config é relevante para a configuração do agente ECS, não para autenticação do CodeBuild com o ECR."
            },
            {
                "correct": true,
                "text": "Correta. Para que o CodeBuild possa autenticar e enviar imagens Docker para o Amazon ECR, ele precisa de permissões específicas do IAM, incluindo a permissão ecr:GetAuthorizationToken. Sem essas permissões, o processo falhará por problemas de autorização."
            }
        ],
        "glossary": [
            "Amazon ECR (Elastic Container Registry): Serviço gerenciado da AWS para armazenar, versionar e distribuir imagens Docker de forma segura e integrada a outros serviços AWS.",
            "IAM (Identity and Access Management): Serviço que gerencia identidades, papéis e permissões, controlando quem pode acessar e realizar ações sobre recursos AWS.",
            "AWS CodeBuild: Serviço gerenciado de build automatizado, responsável por compilar código, rodar testes e gerar artefatos ou imagens prontos para implantação.",
            "ecr:GetAuthorizationToken: Permissão IAM essencial que permite a um serviço (como o CodeBuild) obter o token de autenticação necessário para interagir com o Amazon ECR."
        ],
        "generalExplanation": [
            "O erro de autorização ao enviar imagens Docker para o Amazon ECR via AWS CodeBuild ocorre porque o projeto de build não possui as permissões IAM corretas para autenticar no repositório ECR. O CodeBuild precisa obter um token de autenticação temporário para fazer login no ECR antes de realizar o comando docker push. Essa autenticação é viabilizada pela permissão ecr:GetAuthorizationToken, que permite que o serviço obtenha as credenciais temporárias para interação segura com o repositório. Sem essa permissão, o CodeBuild não consegue se autenticar, e o processo de push da imagem Docker falha com erros de permissão."
        ],
        "realWorld": [
            "Em um pipeline CI/CD completo, o fluxo típico é: o CodePipeline detecta uma nova versão do código (por exemplo, via push no GitHub), o CodeBuild executa o build, compila o código e cria a imagem Docker, e o CodeBuild precisa enviar essa imagem ao Amazon ECR para armazenamento. Para que o push funcione, a role IAM associada ao CodeBuild deve conter permissões como ecr:GetAuthorizationToken, ecr:BatchCheckLayerAvailability, ecr:PutImage, ecr:InitiateLayerUpload, ecr:UploadLayerPart e ecr:CompleteLayerUpload. Sem essa configuração, o build falhará no momento do docker push."
        ]
    },
    {
        "id": 14,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você é um engenheiro de software trabalhando em uma empresa de TI e foi solicitado a contribuir para uma aplicação interna em crescimento que inclui dashboards para visualização de dados. Você está provisionando uma tabela AWS DynamoDB e precisa realizar 10 leituras fortemente consistentes por segundo, cada uma com tamanho de 4 KB. Quantas Unidades de Capacidade de Leitura (RCUs) são necessárias?",
        "options": [
            {
                "letter": "A",
                "text": "10",
                "correct": true
            },
            {
                "letter": "B",
                "text": "5",
                "correct": false
            },
            {
                "letter": "C",
                "text": "20",
                "correct": false
            },
            {
                "letter": "D",
                "text": "40",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Uma Unidade de Capacidade de Leitura (RCU) representa uma leitura fortemente consistente por segundo para um item de até 4 KB. Como cada leitura é fortemente consistente e o tamanho do item é exatamente 4 KB, cada leitura consome 1 RCU. Portanto, para 10 leituras por segundo, são necessárias 10 RCUs."
            },
            {
                "correct": false,
                "text": "Incorreta. 5 RCUs seriam insuficientes para suportar 10 leituras fortemente consistentes por segundo, pois cada leitura de 4 KB consome 1 RCU. Portanto, 5 RCUs suportariam apenas 5 leituras por segundo."
            },
            {
                "correct": false,
                "text": "Incorreta. 20 RCUs corresponderiam ao dobro do necessário para 10 leituras fortemente consistentes de 4 KB. Esse valor seria correto se cada leitura fosse de 8 KB ou se fossem necessárias leituras eventualmente consistentes, o que não é o caso aqui."
            },
            {
                "correct": false,
                "text": "Incorreta. 40 RCUs indicariam um consumo muito maior do que o necessário para 10 leituras fortemente consistentes de 4 KB. Esse valor poderia ser válido para leituras maiores ou para um volume de leituras muito maior, mas não para o cenário descrito."
            }
        ],
        "glossary": [
            "Unidade de Capacidade de Leitura (RCU): medida de capacidade provisionada no DynamoDB que representa o número de leituras fortemente consistentes de até 4 KB por segundo que uma tabela pode realizar.",
            "Leitura fortemente consistente: operação de leitura que retorna sempre o dado mais recente, refletindo todas as gravações confirmadas até o momento da leitura.",
            "Leitura eventualmente consistente: operação de leitura que pode retornar dados levemente desatualizados, consumindo metade da capacidade (0,5 RCU por item de até 4 KB)."
        ],
        "generalExplanation": [
            "A resposta correta é 10 RCUs porque cada leitura fortemente consistente de um item de até 4 KB consome 1 RCU. Como o cenário requer 10 leituras por segundo, o cálculo é direto: 10 leituras × 1 RCU por leitura = 10 RCUs. Essa configuração garante que a aplicação consiga realizar todas as leituras necessárias sem throttling, ou seja, sem ser limitada por falta de capacidade provisionada. Se o cenário utilizasse leituras eventualmente consistentes, o consumo seria metade — 0,5 RCU por leitura — resultando em apenas 5 RCUs para o mesmo volume de leitura."
        ],
        "realWorld": [
            "Em aplicações críticas em tempo real, como sistemas financeiros, painéis de monitoramento ou aplicações IoT, é essencial que os dados exibidos sejam imediatamente atualizados. Por exemplo, um dashboard de operações bancárias que consulta saldos e transações recentes precisa de leituras fortemente consistentes para evitar exibir valores incorretos. Nesse caso, o desenvolvedor calcula as RCUs com base na quantidade de leituras por segundo e no tamanho dos itens: 10 itens × 1 RCU = 10 RCUs."
        ]
    },
    {
        "id": 15,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma aplicação é executada no Amazon Elastic Container Service (Amazon ECS) usando AWS Fargate. Os requisitos de auditoria da empresa exigem que o registro e o armazenamento dos dados de logs da aplicação sejam feitos de forma centralizada na AWS. Como você configuraria esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "Use o driver de logs awslogs para enviar informações de log para o CloudWatch Logs. Para ativar o driver awslogs, suas instâncias de contêiner do Amazon ECS precisam ter pelo menos a versão 1.9.0 do agente de contêiner.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Os dados métricos do Amazon ECS são enviados automaticamente para o CloudWatch em períodos de 1 minuto. O serviço Amazon ECS usando o tipo de inicialização Fargate possui métricas de utilização de CPU e memória no CloudWatch que podem ser habilitadas pelo console do ECS.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Use o driver de logs awslogs para configurar os contêineres nas suas tarefas para enviar informações de log para o CloudWatch Logs. Adicione os parâmetros necessários de logConfiguration à definição da tarefa.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Baixe e instale o agente unificado do CloudWatch nas instâncias ECS para coletar métricas internas do sistema e logs da aplicação. Os logs coletados pelo agente unificado do CloudWatch são processados e armazenados no Amazon CloudWatch Logs e podem ser consultados para geração de relatórios.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Esta afirmação é válida apenas para o tipo de inicialização EC2, onde o agente do contêiner precisa estar na versão 1.9.0 ou superior. No caso do Fargate, não há instâncias gerenciadas pelo usuário, portanto essa exigência não se aplica."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o Amazon ECS envie métricas de CPU e memória para o CloudWatch automaticamente em tarefas Fargate, essas métricas são de sistema e não incluem os logs da aplicação, que são necessários para o requisito de auditoria."
            },
            {
                "correct": true,
                "text": "Correta. Para tarefas executadas no Fargate, é necessário configurar explicitamente o driver de logs awslogs na definição da tarefa, incluindo os parâmetros logConfiguration, para que os logs da aplicação sejam enviados e armazenados centralmente no CloudWatch Logs, atendendo aos requisitos de auditoria."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS Fargate é um serviço serverless e não oferece acesso às instâncias subjacentes para instalação de agentes. Portanto, não é possível baixar ou instalar o agente unificado do CloudWatch em instâncias ECS no Fargate."
            }
        ],
        "glossary": [
            "Amazon ECS (Elastic Container Service): Serviço gerenciado da AWS para orquestração e execução de contêineres Docker em larga escala.",
            "AWS Fargate: Tecnologia serverless que permite executar contêineres no ECS sem necessidade de provisionar ou gerenciar servidores ou clusters EC2.",
            "awslogs log driver: Driver de logs nativo do ECS que envia automaticamente os logs dos contêineres para o Amazon CloudWatch Logs.",
            "CloudWatch Logs: Serviço da AWS para coleta, monitoramento e armazenamento centralizado de logs de aplicações e sistemas.",
            "logConfiguration: Bloco de configuração dentro da Task Definition do ECS que define o driver de logs e seus parâmetros (por exemplo, grupo de logs, região e prefixo de fluxo)."
        ],
        "generalExplanation": [
            "A configuração correta para capturar e centralizar logs de aplicações executadas em ECS com AWS Fargate é definir o driver de logs awslogs dentro da Task Definition, utilizando o parâmetro logConfiguration. Isso é necessário porque, no Fargate, não há instâncias EC2 subjacentes onde se possa instalar agentes de log personalizados (como o CloudWatch Agent). Além disso, as métricas padrão do ECS não incluem logs de aplicação — apenas informações de status e desempenho. Ao configurar o awslogs log driver, cada contêiner envia automaticamente seus logs de saída (stdout e stderr) para o Amazon CloudWatch Logs, onde ficam disponíveis para auditoria, visualização e criação de métricas personalizadas."
        ],
        "realWorld": [
            "Em um ambiente corporativo, imagine uma aplicação de e-commerce implantada no Amazon ECS com Fargate. Cada contêiner executa uma API que gera logs de acesso, erros e eventos de negócio. Para garantir auditoria e monitoramento, o time define no arquivo JSON da Task Definition a configuração de log com o driver awslogs, especificando o grupo de logs (por exemplo, '/ecs/app-ecommerce'), a região e o prefixo do stream. Cada contêiner envia seus logs automaticamente para o CloudWatch Logs, sem necessidade de manutenção manual ou agentes externos. Os analistas de operação utilizam CloudWatch Insights para consultar logs, definir métricas de erro, criar alarmes e atender a requisitos de auditoria e compliance."
        ]
    },
    {
        "id": 16,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Implantação",
        "prompt": "Uma empresa deseja automatizar a criação de clusters ECS usando CloudFormation. O processo funcionou por um tempo, mas após criar definições de tarefas e atribuir funções, a equipe de desenvolvimento descobre que as tarefas dos containers não estão utilizando as permissões atribuídas a elas. Qual configuração do ECS deve ser definida em /etc/ecs/ecs.config para permitir que as tarefas ECS utilizem funções IAM?",
        "options": [
            {
                "letter": "A",
                "text": "ECS_CLUSTER",
                "correct": false
            },
            {
                "letter": "B",
                "text": "ECS_ENABLE_TASK_IAM_ROLE=true",
                "correct": true
            },
            {
                "letter": "C",
                "text": "ECS_AVAILABLE_LOGGING_DRIVERS",
                "correct": false
            },
            {
                "letter": "D",
                "text": "ECS_ENGINE_AUTH_DATA",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Essa configuração define o nome do cluster ECS ao qual a instância do container se conecta, mas não afeta permissões ou funções IAM."
            },
            {
                "correct": true,
                "text": "Correta. A configuração 'ECS_ENABLE_TASK_IAM_ROLE=true' deve ser definida no arquivo /etc/ecs/ecs.config em instâncias EC2 registradas em um cluster ECS, permitindo que o agente ECS suporte o uso de taskRoleArn definido nas tarefas. É necessária quando o agente ECS está em modo de host EC2 (não Fargate)."
            },
            {
                "correct": false,
                "text": "Incorreta. Define quais drivers de logging podem ser usados nos containers (como awslogs), mas não influencia no uso de funções IAM."
            },
            {
                "correct": false,
                "text": "Incorreta. Define credenciais para autenticação com repositórios privados de container, sem relação com permissões IAM em tarefas ECS."
            }
        ],
        "glossary": [
            "Amazon ECS (Elastic Container Service): serviço gerenciado para orquestração e gerenciamento de contêineres Docker, permitindo executar aplicações em escala na AWS.",
            "ECS Agent: componente instalado em instâncias EC2 que se comunica com o serviço ECS para gerenciar e monitorar a execução das tarefas e contêineres.",
            "ECS_ENABLE_TASK_IAM_ROLE: variável de configuração do ECS Agent que habilita o uso de roles IAM específicas por tarefa ECS.",
            "taskRoleArn: parâmetro definido na task definition que especifica qual role IAM a tarefa deve assumir, concedendo permissões sob demanda."
        ],
        "generalExplanation": [
            "Quando o Amazon ECS é executado em instâncias EC2, o ECS Agent atua como intermediário entre o serviço ECS e o Docker host. Para que as tarefas ECS possam assumir suas próprias roles IAM (taskRoleArn) — em vez de herdar as permissões da instância EC2 — é necessário habilitar explicitamente essa capacidade no agente. Isso é feito configurando a variável ECS_ENABLE_TASK_IAM_ROLE=true no arquivo /etc/ecs/ecs.config da instância EC2. Sem essa configuração, mesmo que a definição da tarefa (task definition) inclua o campo taskRoleArn, o ECS Agent não aplicará as permissões da role à tarefa, e o container continuará operando com as permissões padrão da instância."
        ],
        "realWorld": [
            "Imagine um ambiente de produção em que uma aplicação de processamento de dados roda em ECS sobre EC2, e cada container precisa acessar recursos diferentes — por exemplo, a tarefa A envia arquivos para um bucket S3, a tarefa B lê mensagens de uma fila SQS, e a tarefa C grava logs no CloudWatch Logs. Ao habilitar ECS_ENABLE_TASK_IAM_ROLE=true, cada uma dessas tarefas pode usar uma role IAM própria, definida em seu taskRoleArn. Isso garante segregação de permissões e aplicação do princípio do menor privilégio, evitando que uma tarefa tenha acesso indevido a recursos usados por outras."
        ]
    },
    {
        "id": 17,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um desenvolvedor acabou de integrar uma função AWS Lambda a uma API do Amazon API Gateway. A integração resultou em erros que o desenvolvedor não consegue solucionar. Por isso, ele decidiu habilitar o registro de logs no CloudWatch no nível do método para a API Gateway. Quais são os pontos principais a serem considerados ao configurar o registro de logs no nível do método para a API Gateway? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Os grupos ou streams de logs da API Gateway podem ser excluídos e recriados apenas ao reimplantar a API.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O AWS Security Token Service (STS) é utilizado pela API Gateway para enviar dados de logs ao CloudWatch Logs. Portanto, o AWS STS deve estar habilitado na Região que você está utilizando.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "No registro de acesso, apenas as variáveis $context e $input são suportadas.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Você é cobrado pelo acesso às métricas do CloudWatch no nível do método e do estágio, mas não pelas métricas no nível da API.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Para habilitar o CloudWatch Logs para todos ou apenas alguns métodos, é necessário especificar o ARN de uma role IAM que permita que a API Gateway grave informações no CloudWatch Logs em nome do usuário. Essa role deve conter uma política de confiança adequada.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível excluir grupos ou streams de logs manualmente pelo console do CloudWatch, isso não é recomendado, pois pode causar falhas no registro dos logs. A criação dos grupos e streams ocorre durante a implantação da API, mas a exclusão manual pode impactar o funcionamento dos logs."
            },
            {
                "correct": true,
                "text": "Correta. A API Gateway chama o AWS STS para assumir a role do IAM que permite gravar logs no CloudWatch. Se o STS estiver desabilitado na Região, ocorrerão erros ao configurar o ARN da role para logs."
            },
            {
                "correct": false,
                "text": "Incorreta. No registro de acesso, apenas as variáveis $context são suportadas para especificar detalhes do acesso, como quem acessou a API e como. As variáveis $input não são suportadas para logs de acesso."
            },
            {
                "correct": false,
                "text": "Incorreta. Você é cobrado pelo acesso às métricas no nível do método, mas as métricas no nível do estágio e da API não geram cobranças adicionais."
            },
            {
                "correct": true,
                "text": "Correta. É obrigatório informar o ARN de uma role IAM com a política AmazonAPIGatewayPushToCloudWatchLogs e a relação de confiança que permita à API Gateway assumir essa role para enviar logs ao CloudWatch."
            }
        ],
        "glossary": [
            "AWS STS (Security Token Service): serviço da AWS que emite tokens temporários de segurança, permitindo que serviços e usuários assumam roles IAM com permissões específicas e limitadas no tempo.",
            "ARN (Amazon Resource Name): identificador único e padronizado usado para referenciar recursos da AWS, como roles, políticas, funções Lambda, APIs e buckets S3.",
            "IAM Role (Função IAM): entidade do AWS Identity and Access Management que define um conjunto de permissões e pode ser assumida por serviços AWS (como API Gateway ou Lambda) ou por usuários.",
            "CloudWatch Logs: serviço que coleta, armazena e monitora logs de aplicações e recursos AWS, permitindo análise, criação de métricas e alertas."
        ],
        "generalExplanation": [
            "Para habilitar o registro de logs detalhados no nível do método dentro do Amazon API Gateway, é necessário garantir que o serviço tenha permissão para enviar logs ao Amazon CloudWatch Logs. Esse processo envolve duas configurações principais: a criação de uma IAM Role para o API Gateway, que deve conter a política gerenciada AmazonAPIGatewayPushToCloudWatchLogs (que concede permissão para criar grupos e streams de logs e enviar eventos) e uma política de confiança (trust policy) que autoriza o serviço apigateway.amazonaws.com a assumir essa role por meio do AWS STS; e a verificação do AWS STS na região, pois o API Gateway depende do STS para assumir a role IAM e obter credenciais temporárias necessárias para escrever no CloudWatch Logs."
        ],
        "realWorld": [
            "Imagine uma equipe desenvolvendo uma API REST serverless no Amazon API Gateway, integrada com funções AWS Lambda para processar requisições. Durante os testes, algumas chamadas retornam erros 500 (Internal Server Error), mas sem detalhes suficientes para identificar a origem do problema. Ao habilitar o registro de logs no nível do método e configurar corretamente a role IAM com a política AmazonAPIGatewayPushToCloudWatchLogs, o API Gateway passa a enviar logs detalhados para o CloudWatch Logs, contendo método HTTP, endpoint, status da resposta, parâmetros de entrada e saída, mensagens de erro internas da integração com Lambda, e variáveis do contexto $context, como requestId e integrationErrorMessage. Esses logs permitem que o desenvolvedor identifique rapidamente a causa raiz."
        ]
    },
    {
        "id": 18,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um aplicativo de streaming de vídeo utiliza o Amazon CloudFront para distribuição de dados. A equipe de desenvolvimento decidiu usar o CloudFront com failover de origem para alta disponibilidade. Quais das seguintes opções estão corretas ao configurar o CloudFront com Grupos de Origem? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Quando há um acerto de cache (cache hit), o CloudFront direciona a requisição para a origem primária no grupo de origem.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O CloudFront realiza failover para a origem secundária somente quando o método HTTP da requisição do visualizador é GET, HEAD ou OPTIONS.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "O CloudFront direciona todas as requisições recebidas para a origem primária, mesmo quando uma requisição anterior fez failover para a origem secundária.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "No Grupo de Origem da sua distribuição, todas as origens são definidas como primárias para failover automático caso uma origem falhe.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Para configurar failover de origem, você deve ter uma distribuição com pelo menos três origens.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Quando há um acerto de cache, o CloudFront retorna o arquivo solicitado diretamente do cache, sem encaminhar a requisição para a origem. O encaminhamento para a origem primária ocorre apenas em caso de falta de cache (cache miss)."
            },
            {
                "correct": true,
                "text": "Correta. O CloudFront realiza failover para a origem secundária apenas se o método HTTP da requisição for GET, HEAD ou OPTIONS. Métodos HTTP diferentes, como POST ou PUT, não acionam o failover."
            },
            {
                "correct": true,
                "text": "Correta. O CloudFront sempre tenta a origem primária para cada requisição. Ele só envia requisições para a origem secundária após uma falha na origem primária, mas não mantém o roteamento para a secundária após o failover."
            },
            {
                "correct": false,
                "text": "Incorreta. Para configurar failover de origem, é necessário definir exatamente uma origem primária e uma secundária no grupo de origem. Não é possível definir todas as origens como primárias."
            },
            {
                "correct": false,
                "text": "Incorreta. Apenas duas origens são necessárias para configurar failover de origem: uma primária e uma secundária."
            }
        ],
        "glossary": [
            "CloudFront: Serviço de Content Delivery Network (CDN) da AWS que distribui conteúdo globalmente com baixa latência e alta performance, armazenando cópias em caches distribuídos (edge locations).",
            "Failover de origem (Origin Failover): Mecanismo que permite ao CloudFront redirecionar requisições para uma origem secundária caso a origem primária fique indisponível.",
            "Cache hit: Ocorre quando o conteúdo solicitado já está armazenado no cache do CloudFront, sendo entregue diretamente ao cliente sem acessar a origem.",
            "Cache miss: Ocorre quando o conteúdo não está em cache, forçando o CloudFront a buscar o recurso na origem configurada."
        ],
        "generalExplanation": [
            "O Amazon CloudFront com failover de origem garante alta disponibilidade e resiliência na entrega de conteúdo. Essa funcionalidade é configurada por meio de um grupo de origem (Origin Group), que define uma origem primária e uma secundária. Durante o processamento de requisições, o CloudFront tenta acessar sempre a origem primária. Caso ela falhe (por exemplo, por erro 5xx ou timeout), o serviço executa o failover automático para a origem secundária — desde que o método HTTP da requisição seja GET, HEAD ou OPTIONS. Esses métodos são considerados seguros e idempotentes, o que significa que podem ser repetidos sem alterar o estado da aplicação. Métodos que modificam dados (como POST ou PUT) não passam por failover para evitar inconsistências."
        ],
        "realWorld": [
            "Em um ambiente de produção, imagine um serviço de streaming de vídeo ou um portal de mídia global. O time de engenharia pode configurar o CloudFront com origem primária: bucket S3 principal na região us-east-1, e origem secundária: bucket S3 de backup na região us-west-2. Com isso, se o bucket principal estiver inacessível, o CloudFront automaticamente direciona as requisições de leitura (GET, HEAD, OPTIONS) para a origem de backup, mantendo o serviço disponível para os usuários. O fluxo é: o cliente solicita um vídeo via CloudFront, o CloudFront verifica o cache — se o arquivo estiver em cache (cache hit), entrega imediatamente; se não estiver (cache miss) e a origem primária falhar, o CloudFront redireciona automaticamente para a origem secundária."
        ]
    },
    {
        "id": 19,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa de análise está utilizando o Kinesis Data Streams (KDS) para processar dados de status de saúde de automóveis de táxis gerenciados por um serviço de transporte por aplicativo. Múltiplas aplicações consumidoras estão utilizando os fluxos de dados recebidos, e os engenheiros notaram uma lentidão no desempenho da entrega dos dados entre os produtores e consumidores dos fluxos de dados. Como um Desenvolvedor Associado, qual das seguintes opções você sugeriria para melhorar o desempenho para esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Substituir o Kinesis Data Streams pelas filas padrão do SQS",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Substituir o Kinesis Data Streams pelo Kinesis Data Firehose",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Substituir o Kinesis Data Streams pelas filas FIFO do SQS",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar o recurso Enhanced Fan-Out do Kinesis Data Streams",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Amazon SQS Standard oferece alta taxa de transferência e entrega pelo menos uma vez, mas não é ideal para cenários que exigem processamento em tempo real e múltiplos consumidores lendo simultaneamente de um fluxo contínuo de dados. Além disso, SQS não é um serviço de streaming, o que o torna inadequado para esse caso de uso."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon Kinesis Data Firehose é um serviço totalmente gerenciado que facilita o carregamento confiável de dados em streaming para data lakes, armazenamentos e ferramentas analíticas. Ele é projetado para entrega automática e não permite que aplicações consumam diretamente os dados em tempo real, diferentemente do Kinesis Data Streams. Portanto, não é adequado para casos que requerem múltiplos consumidores lendo dados simultaneamente em tempo real."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon SQS FIFO garante ordenação estrita e entrega exatamente uma vez, mas tem limitações de taxa de transferência e não é projetado para múltiplos consumidores paralelos lendo um fluxo contínuo de dados em tempo real. Portanto, não é adequado para o cenário descrito."
            },
            {
                "correct": true,
                "text": "Correta. Por padrão, a taxa de saída de 2 MB/segundo por shard é compartilhada entre todas as aplicações consumidoras, o que pode causar gargalos quando há múltiplos consumidores. O recurso Enhanced Fan-Out permite que cada consumidor registrado receba seu próprio throughput dedicado de 2 MB/segundo por shard, escalando automaticamente conforme o número de shards, melhorando significativamente o desempenho para múltiplos consumidores simultâneos."
            }
        ],
        "glossary": [
            "Kinesis Data Streams (KDS): Serviço da AWS para ingestão e processamento de dados em tempo real, altamente escalável e durável, ideal para aplicações que exigem análise contínua.",
            "Shard: Unidade básica de capacidade e paralelismo em um stream Kinesis; define a taxa máxima de ingestão e leitura de dados.",
            "Enhanced Fan-Out (EFO): Recurso que fornece canais dedicados de throughput (2 MB/s por shard por consumidor), permitindo que múltiplos consumidores leiam dados simultaneamente sem contenção de banda."
        ],
        "generalExplanation": [
            "Em um cenário onde múltiplas aplicações precisam consumir simultaneamente dados em tempo real de um Kinesis Data Stream (KDS), o uso do Enhanced Fan-Out (EFO) é a melhor prática recomendada pela AWS. Por padrão, todos os consumidores compartilham o throughput de leitura de 2 MB/s por shard, o que pode causar gargalos, latência e competição de banda. Com o Enhanced Fan-Out, cada consumidor registrado obtém um canal dedicado com throughput próprio, permitindo leitura simultânea e eficiente — sem impactar os demais consumidores. Isso torna o EFO ideal para sistemas que exigem baixa latência (subsegundo) e vários consumidores paralelos, como pipelines de análise em tempo real, dashboards operacionais, monitoramento de métricas, ou sistemas de alerta e notificação."
        ],
        "realWorld": [
            "Imagine uma empresa de mobilidade que coleta dados de telemetria de veículos em tempo real, como velocidade, temperatura do motor e localização GPS. Esses dados são enviados por milhares de dispositivos IoT para um Kinesis Data Stream. Vários sistemas internos precisam consumir o mesmo fluxo simultaneamente: um dashboard de operações exibe dados de localização em tempo real, um serviço de análise preditiva detecta falhas potenciais, e um sistema de notificações envia alertas de manutenção automática. Ao habilitar o Enhanced Fan-Out, cada sistema (consumidor) recebe o stream sem competir por throughput e com latência inferior a 70 ms, garantindo reatividade imediata."
        ]
    },
    {
        "id": 20,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um novo colaborador está tentando entender as particularidades do Auto Scaling do EC2. Como um AWS Certified Developer – Associate, você foi solicitado a orientar esse novo colaborador. Você consegue identificar e explicar as afirmações corretas sobre o Auto Scaling para o novo colaborador? (Selecione três).",
        "options": [
            {
                "letter": "A",
                "text": "O Auto Scaling do Amazon EC2 não pode adicionar um volume a uma instância existente caso o volume atual esteja próximo da capacidade.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Toda vez que você cria um grupo de Auto Scaling a partir de uma instância existente, é criada uma nova AMI (Amazon Machine Image).",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Você pode usar o Auto Scaling do Amazon EC2 para verificações de integridade (health checks) e substituição de instâncias com problemas mesmo sem usar Elastic Load Balancing (ELB).",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Grupos de Auto Scaling do EC2 são construções regionais. Eles abrangem várias Zonas de Disponibilidade, mas não múltiplas regiões da AWS.",
                "correct": true
            },
            {
                "letter": "E",
                "text": "Grupos de Auto Scaling sempre iniciam instâncias nas zonas de disponibilidade mais baratas da região.",
                "correct": false
            },
            {
                "letter": "F",
                "text": "O Auto Scaling do Amazon EC2 funciona tanto com Application Load Balancers quanto com Network Load Balancers.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Auto Scaling do EC2 não gerencia nem adiciona volumes a instâncias já em execução. O dimensionamento lida com novas instâncias, não com a modificação de instâncias existentes."
            },
            {
                "correct": false,
                "text": "Incorreta. Ao criar um grupo de Auto Scaling a partir de uma instância existente, não é criada automaticamente uma nova AMI. É necessário criar manualmente uma AMI se desejar usá-la para o grupo."
            },
            {
                "correct": true,
                "text": "Correta. O Auto Scaling do EC2 pode realizar verificações de integridade usando tanto o ELB quanto as verificações nativas do EC2, permitindo substituir instâncias com problemas mesmo sem ELB."
            },
            {
                "correct": true,
                "text": "Correta. Grupos de Auto Scaling do EC2 são construções regionais que podem abranger várias Zonas de Disponibilidade dentro da mesma região, mas não se estendem por múltiplas regiões da AWS."
            },
            {
                "correct": false,
                "text": "Incorreta. O Auto Scaling não considera automaticamente o custo por zona de disponibilidade. Ele distribui instâncias com base em balanceamento, capacidade e políticas de alocação, não custo."
            },
            {
                "correct": true,
                "text": "Correta. O Auto Scaling do EC2 é compatível com ALB e NLB, integrando-se a ambos para realizar verificações de integridade e distribuir carga."
            }
        ],
        "glossary": [
            "Auto Scaling: Serviço gerenciado da AWS que ajusta automaticamente o número de instâncias EC2 com base em métricas de desempenho, demanda ou políticas configuradas, garantindo alta disponibilidade e escalabilidade.",
            "AMI (Amazon Machine Image): Imagem pré-configurada que contém sistema operacional, pacotes, configurações e aplicações necessárias para lançar novas instâncias EC2.",
            "Elastic Load Balancing (ELB): Serviço que distribui automaticamente o tráfego de rede entre múltiplas instâncias, aumentando a tolerância a falhas e a performance.",
            "Application Load Balancer (ALB): Tipo de ELB que opera na camada 7 (HTTP/HTTPS), oferecendo recursos de roteamento inteligente baseado em conteúdo, host e path.",
            "Network Load Balancer (NLB): Tipo de ELB que opera na camada 4 (TCP/UDP), ideal para baixa latência e alto throughput, comum em aplicações de tempo real."
        ],
        "generalExplanation": [
            "O Auto Scaling do EC2 é um serviço regional, ou seja, opera dentro de uma única região AWS, mas pode distribuir instâncias em múltiplas Zonas de Disponibilidade (AZs) dessa região. Ele garante resiliência e continuidade do serviço, pois, se uma instância falhar ou uma AZ se tornar indisponível, o Auto Scaling lança automaticamente novas instâncias em zonas saudáveis, mantendo o número desejado de servidores. O Auto Scaling pode usar diferentes tipos de verificações de integridade: health checks do EC2, que verificam o estado da instância no nível do sistema operacional; e health checks do ELB (Application ou Network Load Balancer), que validam a saúde da aplicação hospedada. Mesmo sem um Load Balancer, o Auto Scaling consegue substituir instâncias não saudáveis com base nas verificações do EC2."
        ],
        "realWorld": [
            "Em uma arquitetura web moderna, um desenvolvedor pode configurar um Auto Scaling Group (ASG) com duas ou mais Zonas de Disponibilidade dentro da mesma região (ex.: us-east-1a e us-east-1b). O ASG é configurado com mínimo de 2 e máximo de 6 instâncias EC2. Um Application Load Balancer (ALB) distribui as requisições HTTP entre as instâncias ativas. Se uma instância falhar, o ASG a remove e lança uma nova automaticamente. Se o tráfego aumentar, o ASG escala horizontalmente adicionando mais instâncias. Quando o tráfego diminui, o grupo reduz a capacidade para economizar custos."
        ]
    },
    {
        "id": 21,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Implantação",
        "prompt": "Você trabalha em uma startup de tecnologia que desenvolve aplicações web e móveis. Deseja puxar imagens Docker do repositório ECR chamado demo para iniciar testes locais com a versão mais recente da aplicação. Quais dos seguintes comandos você deve executar para puxar imagens Docker existentes do ECR? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "docker pull 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest",
                "correct": true
            },
            {
                "letter": "B",
                "text": "docker build -t 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest",
                "correct": false
            },
            {
                "letter": "C",
                "text": "$(aws ecr get-login --no-include-email)",
                "correct": true
            },
            {
                "letter": "D",
                "text": "docker login -u $AWS_ACCESS_KEY_ID -p $AWS_SECRET_ACCESS_KEY",
                "correct": false
            },
            {
                "letter": "E",
                "text": "aws docker push 1234567890.dkr.ecr.eu-west-1.amazonaws.com/demo:latest",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Este comando é usado para puxar (pull) uma imagem Docker específica do repositório ECR, permitindo que você execute a imagem localmente para testes ou desenvolvimento."
            },
            {
                "correct": false,
                "text": "Incorreta. Este comando é usado para construir uma imagem Docker localmente a partir de um Dockerfile, não para puxar imagens existentes de um repositório remoto como o ECR."
            },
            {
                "correct": true,
                "text": "Correta. Este comando obtém um token de autenticação válido por 12 horas para o registro ECR e executa automaticamente o comando docker login com esse token, permitindo que você autentique o Docker para puxar imagens do ECR."
            },
            {
                "correct": false,
                "text": "Incorreta. Não é possível autenticar no Amazon ECR usando as variáveis AWS_ACCESS_KEY_ID e AWS_SECRET_ACCESS_KEY diretamente com o comando docker login. Essas credenciais são utilizadas pela AWS CLI, não pelo Docker."
            },
            {
                "correct": false,
                "text": "Incorreta. O comando 'aws docker push' não existe. Além disso, o objetivo é puxar (pull) imagens, não enviá-las (push). O comando correto para puxar imagens é 'docker pull'."
            }
        ],
        "glossary": [
            "Docker pull: comando que baixa imagens Docker de um repositório remoto (como o Amazon ECR) para o ambiente local, tornando-as disponíveis para execução.",
            "Docker login: comando usado para autenticar o cliente Docker em um registro de imagens, geralmente exigindo credenciais válidas para acesso a repositórios privados.",
            "AWS ECR (Elastic Container Registry): serviço gerenciado de registro de imagens Docker da AWS, que facilita o armazenamento, versionamento e implantação de containers de forma segura e integrada com o IAM.",
            "aws ecr get-login: comando da AWS CLI que gera um token de autenticação temporário e retorna o comando docker login necessário para autenticar no ECR. (Nas versões mais recentes, substituído por aws ecr get-login-password)."
        ],
        "generalExplanation": [
            "Para baixar (pull) imagens Docker hospedadas no Amazon Elastic Container Registry (ECR), é necessário primeiro autenticar o Docker no repositório privado da AWS. O procedimento correto consiste em executar o comando aws ecr get-login --no-include-email (ou aws ecr get-login-password | docker login --username AWS --password-stdin <aws_account_id>.dkr.ecr.<region>.amazonaws.com), que gera uma autenticação temporária, retornando um comando docker login com um token de acesso válido por 12 horas, permitindo o login automático no repositório ECR. Após a autenticação bem-sucedida, é possível baixar a imagem desejada usando docker pull <aws_account_id>.dkr.ecr.<region>.amazonaws.com/<nome-da-imagem>:<tag>."
        ],
        "realWorld": [
            "Em um cenário de desenvolvimento ou CI/CD, um engenheiro precisa testar localmente a imagem mais recente de uma aplicação armazenada no Amazon ECR. O processo típico é: autenticar o Docker com o repositório usando o comando da AWS CLI (aws ecr get-login-password), executar docker pull para baixar a imagem, e rodar o container localmente com docker run para validar a versão. Essa abordagem é amplamente usada em pipelines de CI/CD do AWS CodeBuild, GitHub Actions ou Jenkins, garantindo que os ambientes de build e teste utilizem imagens oficiais e seguras, evitando inconsistências entre ambientes."
        ]
    },
    {
        "id": 22,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Segurança",
        "prompt": "Uma empresa armazena dados confidenciais em um bucket do Amazon Simple Storage Service (S3). Novas diretrizes regulatórias exigem que os arquivos sejam armazenados com criptografia do lado do servidor. A criptografia utilizada deve ser o Advanced Encryption Standard (AES-256) e a empresa não deseja gerenciar as chaves de criptografia do S3. Qual das seguintes opções você deve utilizar?",
        "options": [
            {
                "letter": "A",
                "text": "SSE-C",
                "correct": false
            },
            {
                "letter": "B",
                "text": "SSE-KMS",
                "correct": false
            },
            {
                "letter": "C",
                "text": "SSE-S3",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Criptografia do Lado do Cliente (Client-Side Encryption)",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. SSE-C exige que você forneça e gerencie suas próprias chaves de criptografia, o que contraria o requisito da empresa de não gerenciar as chaves do S3."
            },
            {
                "correct": false,
                "text": "Incorreta. SSE-KMS oferece criptografia do lado do servidor com gerenciamento de chaves pelo AWS Key Management Service (KMS), permitindo controle detalhado e auditoria das chaves, mas a empresa não deseja gerenciar as chaves, o que torna essa opção menos adequada."
            },
            {
                "correct": true,
                "text": "Correta. SSE-S3 utiliza criptografia do lado do servidor com chaves gerenciadas pela própria Amazon S3, aplicando AES-256 para proteger os dados sem que a empresa precise gerenciar as chaves, atendendo exatamente aos requisitos regulatórios."
            },
            {
                "correct": false,
                "text": "Incorreta. A criptografia do lado do cliente exige que você gerencie o processo de criptografia e as chaves antes de enviar os dados ao S3, o que não atende à exigência da empresa de não gerenciar as chaves."
            }
        ],
        "glossary": [
            "AES-256: Padrão de criptografia simétrica avançada que utiliza uma chave de 256 bits, considerado um dos mais seguros do mundo, amplamente adotado para proteger dados sensíveis.",
            "SSE-S3 (Server-Side Encryption with Amazon S3-Managed Keys): Método de criptografia do lado do servidor em que o Amazon S3 gerencia automaticamente as chaves de criptografia usando AES-256, sem intervenção do cliente.",
            "SSE-KMS (Server-Side Encryption with AWS Key Management Service): Variante em que o AWS KMS gerencia as chaves, oferecendo controle granular, rotação e auditoria — ideal para requisitos de compliance mais rigorosos.",
            "SSE-C (Server-Side Encryption with Customer-Provided Keys): Método em que o cliente fornece e gerencia suas próprias chaves, mantendo controle total, mas com maior responsabilidade operacional."
        ],
        "generalExplanation": [
            "A alternativa correta é SSE-S3, pois ela atende exatamente ao cenário em que a empresa deseja utilizar criptografia forte (AES-256) sem precisar gerenciar as chaves manualmente. Com SSE-S3, o Amazon S3 realiza automaticamente a criptografia e descriptografia dos objetos durante o upload e o download, usando chaves de criptografia gerenciadas internamente pela AWS. Essa solução é simples, segura e transparente, sem a necessidade de integrações com o AWS Key Management Service (KMS) ou de manutenção de chaves locais."
        ],
        "realWorld": [
            "Imagine uma empresa financeira que armazena relatórios e dados de clientes no Amazon S3 e precisa cumprir políticas de criptografia em repouso, mas não quer lidar com o gerenciamento de chaves. Nesse cenário, o time de DevOps pode simplesmente habilitar a criptografia padrão SSE-S3 no bucket. A partir daí, todos os objetos armazenados são automaticamente criptografados com AES-256, sem alteração no fluxo de upload ou download. Essa abordagem é amplamente utilizada em aplicações serverless com AWS Lambda lendo/escrevendo dados no S3, pipelines de dados (ETL) que processam informações sensíveis, e ambientes multiusuário, onde o controle centralizado de chaves não é desejável."
        ]
    },
    {
        "id": 23,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma startup gerencia seus recursos na nuvem com Elastic Beanstalk. O ambiente consiste em algumas instâncias Amazon EC2, um Auto Scaling Group (ASG) e um Elastic Load Balancer (ELB). Mesmo após o Load Balancer marcar uma instância EC2 como não saudável, o ASG não a substituiu por uma instância saudável. Como desenvolvedor, qual configuração é necessária para automatizar a substituição da instância não saudável?",
        "options": [
            {
                "letter": "A",
                "text": "Os parâmetros de health check foram configurados para verificar apenas a integridade da instância. A falha ocorreu devido a um problema na aplicação, que não foi considerada nos parâmetros de verificação.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O Auto Scaling Group não substitui automaticamente as instâncias marcadas como não saudáveis pelo Load Balancer; elas devem ser substituídas manualmente pelo Console AWS.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "O tipo de verificação de integridade (health check) do Auto Scaling Group deve ser alterado de EC2 para ELB utilizando um arquivo de configuração.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "O campo de caminho de ping (ping path) do Load Balancer está configurado incorretamente.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Os health checks padrão do EC2 verificam somente o estado da instância, não a saúde da aplicação ou serviços internos. Portanto, a falha da aplicação não é detectada por esses parâmetros, e essa afirmação não explica a falta de substituição automática."
            },
            {
                "correct": false,
                "text": "Incorreta. Se o tipo de health check do ASG for configurado para ELB, o Auto Scaling substituirá automaticamente as instâncias consideradas não saudáveis pelo Load Balancer, eliminando a necessidade de intervenção manual."
            },
            {
                "correct": true,
                "text": "Correta. Por padrão, o Auto Scaling Group realiza health checks do tipo EC2, que verificam apenas o status da instância EC2. Para que o ASG substitua automaticamente instâncias marcadas como não saudáveis pelo Load Balancer, é necessário alterar o tipo de health check para ELB, configurando isso via arquivo de configuração."
            },
            {
                "correct": false,
                "text": "Incorreta. O ping path é uma configuração do ELB para health checks da aplicação. Se estiver incorreto, o ELB considerará todas as instâncias como não saudáveis, não apenas uma. Portanto, isso não explica o problema específico de uma instância não sendo substituída."
            }
        ],
        "glossary": [
            "Elastic Beanstalk: Serviço gerenciado da AWS que facilita a implantação, gerenciamento e escalabilidade de aplicações web e serviços desenvolvidos em diversas linguagens.",
            "Auto Scaling Group (ASG): Recurso que gerencia automaticamente o número de instâncias EC2, ajustando a capacidade conforme políticas de escalabilidade e verificações de integridade.",
            "Elastic Load Balancer (ELB): Serviço que distribui o tráfego de entrada entre múltiplas instâncias EC2, garantindo alta disponibilidade e tolerância a falhas.",
            "Health Check: Processo automatizado que verifica a integridade e disponibilidade das instâncias ou aplicações, garantindo que apenas recursos saudáveis recebam tráfego."
        ],
        "generalExplanation": [
            "Para que o Auto Scaling Group (ASG) substitua automaticamente instâncias que estão ativas, mas com falhas na aplicação, é essencial alterar o tipo de verificação de integridade (health check type) de EC2 para ELB. Por padrão, o ASG considera apenas o estado da instância EC2 — se o sistema operacional está ativo. No entanto, uma aplicação pode estar inacessível ou apresentar erros, mesmo que a instância EC2 esteja tecnicamente saudável. Ao configurar o health check do ASG como ELB, ele passa a se basear nas verificações do Elastic Load Balancer, que testam a aplicação diretamente por meio de um endpoint definido no ping path. Dessa forma, o ELB detecta falhas de aplicação (ex.: erro 5xx, timeout, ou endpoint inativo), e o ASG recebe essa informação e automaticamente encerra a instância afetada, criando uma nova para substituí-la."
        ],
        "realWorld": [
            "Em um ambiente Elastic Beanstalk, as aplicações geralmente rodam em Auto Scaling Groups integrados a um Elastic Load Balancer. Imagine que uma aplicação em api.empresa.com apresente falhas na rota /health devido a um bug no código. O sistema operacional da EC2 continua rodando, então um health check padrão do tipo EC2 não detectaria o problema. Ao configurar o ASG para usar ELB Health Check e definir o ping path como /health, o Load Balancer identifica que a aplicação não está respondendo corretamente. Em seguida, o ELB marca a instância como Unhealthy, o ASG detecta esse status via ELB e encerra a instância defeituosa, e uma nova instância EC2 é criada automaticamente e registrada no balanceador. Resultado: a aplicação se recupera automaticamente sem downtime perceptível ao usuário."
        ]
    },
    {
        "id": 24,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Implantação",
        "prompt": "Como engenheiro de confiabilidade de site, você trabalha na construção e operação de sistemas distribuídos, tolerantes a falhas e em grande escala na nuvem, utilizando automação. Você acabou de substituir a plataforma CI/CD da empresa baseada em Jenkins pelo AWS CodeBuild e deseja definir programaticamente as etapas de build. Qual das opções abaixo você deve escolher?",
        "options": [
            {
                "letter": "A",
                "text": "Definir um arquivo buildspec.yml no diretório codebuild/",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Definir um arquivo appspec.yml no diretório raiz",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Definir um arquivo buildspec.yml no diretório raiz",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Definir um arquivo appspec.yml no diretório codebuild/",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora o arquivo buildspec.yml seja o formato correto para definir as etapas de build no AWS CodeBuild, ele deve estar localizado no diretório raiz do código-fonte, e não dentro de uma subpasta como codebuild/."
            },
            {
                "correct": false,
                "text": "Incorreta. O appspec.yml é um arquivo de configuração usado exclusivamente pelo AWS CodeDeploy para gerenciar implantações, não para definir processos de build no AWS CodeBuild."
            },
            {
                "correct": true,
                "text": "Correta. O AWS CodeBuild utiliza o arquivo buildspec.yml, que deve estar localizado no diretório raiz do código-fonte para definir as etapas e comandos do processo de build de forma programática e automatizada."
            },
            {
                "correct": false,
                "text": "Incorreta. O arquivo appspec.yml é utilizado pelo AWS CodeDeploy para orquestrar implantações, não para definir etapas de build no CodeBuild. Além disso, ele não deve estar em um subdiretório para funcionar corretamente."
            }
        ],
        "glossary": [
            "buildspec.yml: arquivo de configuração no formato YAML que define todas as fases, comandos e variáveis de ambiente que o AWS CodeBuild deve executar durante o processo de build.",
            "appspec.yml: arquivo YAML usado exclusivamente pelo AWS CodeDeploy para controlar o processo de implantação, definindo como e onde os artefatos do build devem ser aplicados.",
            "AWS CodeBuild: serviço totalmente gerenciado de compilação e teste de código, que executa builds automatizados e gera artefatos para etapas posteriores do pipeline CI/CD.",
            "AWS CodeDeploy: serviço gerenciado que automatiza a implantação de aplicações em instâncias EC2, Lambda ou ECS, minimizando downtime e erros manuais."
        ],
        "generalExplanation": [
            "O AWS CodeBuild procura automaticamente o arquivo buildspec.yml no diretório raiz do código-fonte para determinar como o processo de build deve ser executado. Esse arquivo define todas as fases do ciclo de build, como install (instalação de dependências), pre_build (execução de testes ou configuração de ambiente), build (compilação do código), e post_build (empacotamento e upload de artefatos, ex.: para S3 ou CodeDeploy). Por padrão, se o arquivo buildspec.yml não estiver na raiz do repositório, o CodeBuild não conseguirá localizar as instruções de build, exigindo configuração manual do caminho — o que não é uma boa prática em pipelines automatizados. Já o appspec.yml pertence ao AWS CodeDeploy, e sua função é orquestrar a implantação (deploy) dos artefatos gerados, especificando diretórios de destino, scripts de lifecycle e permissões."
        ],
        "realWorld": [
            "Suponha que uma equipe de DevOps esteja migrando seus pipelines de Jenkins para uma solução nativa AWS com CodePipeline, CodeBuild e CodeDeploy. No Jenkins, o pipeline é definido em um Jenkinsfile. Ao migrar, essa definição é substituída pelo buildspec.yml, que será usado pelo CodeBuild para compilar e testar a aplicação. Por exemplo, em uma aplicação Node.js serverless, o arquivo buildspec.yml pode conter as fases de instalação (npm install), build (npm run build, npm test) e a seção de artefatos (dist/**). Esse arquivo, localizado na raiz do repositório, permite que o CodeBuild execute automaticamente todas as etapas de build e gere os artefatos necessários para implantação. Posteriormente, o CodeDeploy usará o appspec.yml para realizar a entrega desses artefatos em produção, seja em EC2, ECS ou Lambda."
        ]
    },
    {
        "id": 25,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa especializada em plataforma de comunicação em nuvem como serviço permite que desenvolvedores de software utilizem programaticamente seus serviços para enviar e receber mensagens de texto. A plataforma inicial não possuía uma arquitetura escalável, pois todos os componentes estavam hospedados em um único servidor, e deve ser redesenhada para alta disponibilidade e escalabilidade. Quais das seguintes opções podem ser usadas para implementar a nova arquitetura? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "EBS + RDS",
                "correct": false
            },
            {
                "letter": "B",
                "text": "CloudWatch + CloudFront",
                "correct": false
            },
            {
                "letter": "C",
                "text": "API Gateway + Lambda",
                "correct": true
            },
            {
                "letter": "D",
                "text": "SES + S3",
                "correct": false
            },
            {
                "letter": "E",
                "text": "ALB + ECS",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Amazon Elastic Block Store (EBS) fornece armazenamento em bloco para instâncias EC2, e Amazon Relational Database Service (RDS) é um serviço gerenciado de banco de dados relacional. Embora sejam serviços importantes, essa combinação não resolve a escalabilidade e alta disponibilidade da aplicação em si, pois não contempla balanceamento de carga nem execução de código de aplicação."
            },
            {
                "correct": false,
                "text": "Incorreta. Amazon CloudWatch é um serviço de monitoramento e observabilidade, enquanto Amazon CloudFront é uma rede de distribuição de conteúdo (CDN). Esses serviços auxiliam no monitoramento e na entrega rápida de conteúdo, mas não oferecem uma solução para executar a aplicação de mensagens com alta disponibilidade e escalabilidade."
            },
            {
                "correct": true,
                "text": "Correta. Amazon API Gateway é um serviço totalmente gerenciado que facilita a criação, publicação, monitoramento e segurança de APIs em qualquer escala. AWS Lambda permite executar código sem provisionar ou gerenciar servidores, cobrando apenas pelo tempo de execução consumido. Juntos, API Gateway e Lambda possibilitam uma arquitetura serverless, altamente escalável e disponível, ideal para expor funcionalidades de backend para envio e recebimento de mensagens, com integração nativa para autenticação e gerenciamento de tráfego."
            },
            {
                "correct": false,
                "text": "Incorreta. Amazon Simple Email Service (SES) é um serviço para envio e recebimento de e-mails, enquanto o Amazon S3 é um serviço de armazenamento de objetos. Essa combinação não oferece uma solução para alta disponibilidade e escalabilidade de uma plataforma de mensagens de texto, pois não gerencia a execução da aplicação nem o balanceamento de carga."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon Elastic Container Service (ECS) é um serviço gerenciado de orquestração de contêineres altamente escalável e de alto desempenho que suporta contêineres Docker, permitindo executar aplicações em clusters gerenciados de instâncias EC2. O Application Load Balancer (ALB) distribui automaticamente o tráfego de aplicação entre múltiplos alvos, como instâncias EC2, contêineres e funções Lambda, podendo operar em múltiplas zonas de disponibilidade. A combinação ALB + ECS possibilita uma arquitetura escalável e altamente disponível para APIs REST, distribuindo a carga e garantindo resiliência."
            }
        ],
        "glossary": [
            "ALB (Application Load Balancer): balanceador de carga da AWS que distribui tráfego HTTP/HTTPS entre múltiplos alvos (EC2, ECS, Lambda), oferecendo roteamento inteligente, alta disponibilidade e escalabilidade automática.",
            "ECS (Elastic Container Service): serviço gerenciado que orquestra contêineres Docker, permitindo executar, escalar e gerenciar aplicações distribuídas em clusters altamente disponíveis.",
            "API Gateway: serviço totalmente gerenciado para criação, publicação e monitoramento de APIs RESTful e WebSocket, com recursos nativos de autenticação, throttling e integração com serviços AWS.",
            "Lambda: serviço serverless que executa código sob demanda, escalando automaticamente e cobrando apenas pelo tempo de execução, sem necessidade de provisionar servidores."
        ],
        "generalExplanation": [
            "Para criar uma plataforma de comunicação em nuvem que seja escalável, resiliente e altamente disponível, é fundamental utilizar serviços que suportem execução distribuída e balanceamento de carga automatizado. Há duas abordagens principais que atendem a esses requisitos dentro do ecossistema AWS: ECS + ALB (Containers Gerenciados com Balanceamento de Carga), onde o ECS orquestra múltiplos contêineres e o ALB distribui o tráfego HTTP/HTTPS entre as tasks do ECS, garantindo distribuição uniforme e falha isolada por instância; e API Gateway + Lambda (Arquitetura Serverless), onde o API Gateway expõe endpoints RESTful ou WebSocket e o Lambda processa essas requisições sob demanda, escalando automaticamente conforme a carga, eliminando a necessidade de gerenciar servidores ou clusters, reduzindo custos e complexidade operacional."
        ],
        "realWorld": [
            "Um time de desenvolvimento que deseja modernizar uma aplicação monolítica legada pode escolher entre as duas abordagens conforme o nível de controle e abstração desejado. No cenário 1 — Containerização com ECS + ALB, uma empresa de comunicações pode dividir seu backend em microsserviços Docker (por exemplo, autenticação, mensagens, notificações) e implantá-los no ECS. O ALB roteia o tráfego entre as tasks conforme regras de conteúdo (ex: /api/auth → serviço de autenticação). Essa arquitetura fornece alta resiliência e escala horizontal, além de integração natural com Auto Scaling e CloudWatch. No cenário 2 — Serverless com API Gateway + Lambda, uma startup que oferece mensageria instantânea via API pode usar API Gateway para gerenciar endpoints e Lambda para executar a lógica de envio e recebimento em tempo real. Essa abordagem garante custos otimizados (pagamento por execução), escalabilidade automática e redução drástica de manutenção de infraestrutura."
        ]
    },
    {
        "id": 26,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma equipe de desenvolvimento herdou uma aplicação web rodando na região us-east-1 com três zonas de disponibilidade (us-east-1a, us-east-1b e us-east-1c), cujo tráfego web de entrada é roteado por um balanceador de carga. Quando uma das instâncias EC2 que hospedam a aplicação web falha, a equipe percebe que o balanceador de carga continua a enviar tráfego para essa instância, causando problemas intermitentes. Qual das seguintes ações a equipe de desenvolvimento deve realizar para minimizar esse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Habilitar verificações de integridade (Health Checks)",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Habilitar implantações Multi-AZ",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Habilitar afinidade de sessão (Stickiness)",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Habilitar SSL",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. As verificações de integridade permitem que o balanceador de carga monitore periodicamente o estado das instâncias EC2 enviando pings, tentando conexões ou fazendo requisições. Instâncias que não respondem adequadamente são marcadas como fora de serviço (OutOfService), evitando que o tráfego seja roteado para elas, o que minimiza problemas causados por instâncias com falha."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora distribuir instâncias em múltiplas zonas de disponibilidade seja uma boa prática para aumentar a disponibilidade, isso não impede que o balanceador de carga envie tráfego para instâncias com falha. É necessário um mecanismo de verificação de integridade para gerenciar corretamente o roteamento do tráfego."
            },
            {
                "correct": false,
                "text": "Incorreta. A afinidade de sessão faz com que o balanceador de carga direcione as requisições subsequentes de um usuário para a mesma instância, mantendo a sessão ativa. No entanto, isso não ajuda a identificar ou evitar instâncias com problemas de saúde, portanto não resolve o problema descrito."
            },
            {
                "correct": false,
                "text": "Incorreta. Habilitar SSL garante a criptografia da comunicação entre o cliente e o servidor, protegendo os dados em trânsito. Essa configuração não influencia na detecção de falhas das instâncias EC2 nem no roteamento do tráfego pelo balanceador."
            }
        ],
        "glossary": [
            "Health Checks (Verificações de Integridade): testes automáticos realizados pelo Load Balancer para avaliar a saúde e disponibilidade das instâncias EC2. Se uma instância falhar em responder, ela é marcada como OutOfService.",
            "Stickiness (Afinidade de Sessão): recurso que mantém o mesmo usuário conectado à mesma instância EC2 durante uma sessão, útil para aplicações com estado de sessão armazenado localmente.",
            "SSL (Secure Sockets Layer): protocolo de criptografia de comunicação entre cliente e servidor, garantindo confidencialidade e integridade dos dados transmitidos.",
            "Multi-AZ (Múltiplas Zonas de Disponibilidade): prática de distribuir recursos entre diferentes zonas dentro de uma região para aumentar a resiliência e disponibilidade da aplicação."
        ],
        "generalExplanation": [
            "A melhor prática para garantir que o balanceador de carga não envie tráfego a instâncias EC2 com falhas é habilitar e configurar Health Checks. Esse recurso faz com que o Load Balancer (seja Classic, Application ou Network Load Balancer) monitore periodicamente as instâncias por meio de requisições HTTP, HTTPS ou TCP. Quando uma instância não responde corretamente dentro do tempo configurado ou retorna um código de erro, o balanceador a marca como OutOfService, removendo-a automaticamente do roteamento de tráfego. Assim, apenas as instâncias marcadas como InService continuam recebendo requisições. Isso garante alta disponibilidade, resiliência e experiência consistente ao usuário, pois o tráfego é sempre direcionado para instâncias saudáveis."
        ],
        "realWorld": [
            "Imagine uma aplicação web hospedada em múltiplas instâncias EC2 atrás de um Application Load Balancer (ALB). Durante um pico de acesso, uma instância pode travar devido a falhas de aplicação, alto uso de CPU ou problemas de rede. Com os Health Checks configurados, o ALB detecta rapidamente que a instância não responde ao endpoint (por exemplo, /health), marca-a como OutOfService e redireciona o tráfego para as instâncias restantes que estão InService. Além disso, esse mecanismo pode ser integrado com Auto Scaling Groups (ASG): quando uma instância é marcada como não saudável, o ASG pode encerrá-la e iniciar uma nova automaticamente, restaurando a capacidade total do ambiente sem intervenção manual."
        ]
    },
    {
        "id": 27,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma equipe de desenvolvimento tem utilizado o serviço Amazon S3 como armazenamento de objetos. Com a introdução da consistência forte no Amazon S3, a equipe deseja entender o impacto dessa mudança em suas práticas de armazenamento de dados. Como um associado de desenvolvimento, você pode identificar as principais características do modelo de dados com consistência forte adotado pelo S3? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Um processo substitui um objeto existente e pode ler dados antigos imediatamente após a substituição.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Se você excluir um bucket e listar imediatamente todos os buckets, o bucket excluído ainda pode aparecer na lista.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Um processo substitui um objeto existente e tenta lê-lo imediatamente. O Amazon S3 retornará os dados atualizados.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Um processo exclui um objeto existente e tenta lê-lo imediatamente. O Amazon S3 não retornará nenhum dado, pois o objeto foi excluído.",
                "correct": true
            },
            {
                "letter": "E",
                "text": "Um processo exclui um objeto existente e lista imediatamente as chaves dentro do bucket. O objeto ainda pode estar visível por alguns minutos até que a alteração seja propagada.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Amazon S3 garante consistência forte para substituições, portanto, a leitura imediata após a substituição não retornará dados antigos."
            },
            {
                "correct": false,
                "text": "Incorreta. A configuração e listagem de buckets no Amazon S3 seguem um modelo de consistência eventual. Portanto, a listagem de buckets não reflete consistência forte, e essa característica não faz parte do modelo de dados com consistência forte para objetos."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon S3 garante consistência forte para substituições (PUTs que sobrescrevem objetos existentes). Portanto, a leitura imediata após a substituição retornará os dados atualizados, refletindo a alteração feita."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon S3 oferece consistência forte para operações de leitura após gravação (read-after-write) e exclusão (DELETE) de objetos em todos os buckets e regiões AWS. Isso significa que, após a exclusão de um objeto, qualquer tentativa imediata de leitura não retornará dados, pois a exclusão já foi efetivada."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa descrição representa um comportamento de consistência eventual, que não se aplica ao modelo atual do Amazon S3 para objetos. Com a consistência forte, a exclusão de um objeto é imediatamente refletida nas listagens, e o objeto não deve mais aparecer."
            }
        ],
        "glossary": [
            "Consistência forte (Strong Consistency): modelo em que leituras refletem imediatamente as gravações e exclusões, garantindo que os dados retornados estejam sempre atualizados.",
            "Consistência eventual (Eventual Consistency): modelo em que atualizações podem demorar para se propagar, permitindo leituras temporariamente desatualizadas.",
            "PUT: operação no Amazon S3 usada para armazenar ou substituir um objeto em um bucket.",
            "DELETE: operação que remove um objeto ou bucket do Amazon S3.",
            "Bucket: contêiner lógico no Amazon S3 usado para armazenar objetos (arquivos e metadados)."
        ],
        "generalExplanation": [
            "O Amazon S3 passou a oferecer consistência forte para todas as operações de leitura após gravação (PUT) e exclusão (DELETE) de objetos em todas as regiões da AWS. Isso significa que, quando um objeto é criado, atualizado ou excluído, qualquer leitura subsequente reflete imediatamente a alteração realizada, eliminando cenários de leitura de dados antigos. Essa mudança simplifica a arquitetura das aplicações, pois não é mais necessário implementar mecanismos adicionais de verificação, versionamento ou atraso entre gravações e leituras para garantir a sincronização dos dados. No entanto, é importante notar que essa consistência forte se aplica a objetos individuais. Operações de listagem de buckets ou objetos (ListObjects/ListBuckets) ainda seguem o modelo de consistência eventual, o que significa que a aparição ou remoção de objetos em uma listagem pode demorar alguns instantes para refletir o estado real."
        ],
        "realWorld": [
            "Imagine uma aplicação serverless em que uma função AWS Lambda processa arquivos enviados para um bucket S3. Com a consistência forte, assim que um novo arquivo é gravado (operação PUT), qualquer leitura subsequente pela Lambda (ou outro serviço) já acessará a versão mais recente do objeto, garantindo processamento correto e sem necessidade de 'retries' ou atrasos. Outro exemplo ocorre em pipelines de dados que realizam operações simultâneas de escrita e leitura — como em sistemas de ETL ou data lakes. Antes da consistência forte, podia haver risco de uma leitura retornar um arquivo desatualizado logo após uma atualização; agora, isso não ocorre mais, aumentando a confiabilidade e reduzindo falhas de sincronização."
        ]
    },
    {
        "id": 28,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma organização com cargas de trabalho de alto volume de dados migrou com sucesso para o DynamoDB após enfrentar muitos problemas com sistemas tradicionais de banco de dados. No entanto, alguns meses após a entrada em produção, as tabelas do DynamoDB estão registrando latência consistentemente alta. Como um Associate Developer, qual das seguintes opções você sugeriria para reduzir a latência? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar leituras eventualmente consistentes em vez de leituras fortemente consistentes sempre que possível.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Aumentar as configurações de timeout das requisições para que o cliente tenha tempo suficiente para completar as solicitações, reduzindo assim as tentativas repetidas no sistema.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Reduzir o pool de conexões, que mantém as conexões ativas mesmo quando não há requisições de usuários, bloqueando assim os serviços.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar o DynamoDB Accelerator (DAX) para empresas com cargas de trabalho intensivas em gravação.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Considerar o uso de tabelas globais se sua aplicação for acessada por usuários distribuídos globalmente.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Leituras eventualmente consistentes são mais rápidas e menos propensas a apresentar alta latência do que leituras fortemente consistentes, além de serem mais econômicas. Se a aplicação tolera uma consistência eventual, essa é uma boa prática para reduzir latência."
            },
            {
                "correct": false,
                "text": "Incorreta. O ideal é reduzir o tempo de timeout para que o cliente abandone requisições de alta latência mais rapidamente e envie uma nova solicitação, que geralmente é processada mais rapidamente. Aumentar o timeout pode causar maior latência percebida e sobrecarga no sistema."
            },
            {
                "correct": false,
                "text": "Incorreta. Reduzir o pool de conexões pode aumentar a latência, pois manter conexões ativas e reutilizá-las ajuda a manter caches internos aquecidos, reduzindo a latência. Em alguns casos, enviar tráfego dummy para a tabela também pode ajudar a manter o cache aquecido."
            },
            {
                "correct": false,
                "text": "Incorreta. O DAX é recomendado para cargas de trabalho intensivas em leitura, pois é um cache em memória totalmente gerenciado que pode melhorar o desempenho de leitura em até 10 vezes. Para cargas de trabalho predominantemente de gravação, o DAX não traz benefícios significativos."
            },
            {
                "correct": true,
                "text": "Correta. Tabelas globais replicam dados entre múltiplas regiões da AWS, reduzindo a latência ao aproximar os dados dos usuários finais. Isso é especialmente importante para aplicações com usuários geograficamente dispersos."
            }
        ],
        "glossary": [
            "DynamoDB Accelerator (DAX): cache em memória totalmente gerenciado pela AWS que acelera operações de leitura do DynamoDB, reduzindo significativamente a latência para microssegundos, ideal para workloads intensivas em leitura.",
            "Pool de conexões: conjunto de conexões de rede mantidas abertas e reutilizadas para reduzir o tempo de criação de novas conexões em aplicações que realizam múltiplas requisições ao banco.",
            "Timeout: limite de tempo máximo que uma requisição aguarda uma resposta antes de ser cancelada; ajustar incorretamente pode aumentar a latência percebida.",
            "Leitura fortemente consistente: modo de leitura no DynamoDB que garante dados mais recentes, refletindo todas as gravações confirmadas, mas com maior latência e custo.",
            "Leitura eventualmente consistente: modo de leitura mais rápido e econômico, que pode retornar dados ligeiramente desatualizados, mas reduz a latência em até 50%.",
            "Tabelas globais: recurso que replica automaticamente os dados entre múltiplas regiões AWS, reduzindo a latência de acesso e aumentando a disponibilidade global."
        ],
        "generalExplanation": [
            "Para reduzir a latência no DynamoDB, a combinação ideal depende do tipo de aplicação e da sua distribuição geográfica. Leituras eventualmente consistentes devem ser usadas sempre que possível, pois consomem metade da capacidade de leitura (0,5 RCU) e apresentam menor latência em relação às leituras fortemente consistentes. Essa estratégia é adequada para cenários onde uma leve defasagem de dados é aceitável. Tabelas globais são fundamentais para aplicações com usuários em múltiplas regiões, pois replicam automaticamente os dados entre regiões da AWS, aproximando o armazenamento dos usuários finais. Isso reduz a latência de rede e melhora a experiência global."
        ],
        "realWorld": [
            "Imagine uma aplicação de e-commerce global com usuários na América, Europa e Ásia. Para garantir respostas rápidas de catálogo e estoque, o time de engenharia pode habilitar tabelas globais no DynamoDB para replicar dados entre as regiões us-east-1, eu-west-1 e ap-southeast-1, garantindo que os usuários acessem dados próximos geograficamente. Configurar a aplicação para realizar leituras eventualmente consistentes ao consultar dados não críticos, como histórico de navegação ou recomendações de produtos. Implementar DAX nas regiões de maior volume de tráfego para reduzir ainda mais a latência das leituras repetitivas, como consultas de sessão ou cache de carrinho. Essa combinação resulta em uma redução expressiva na latência global e melhor experiência do usuário."
        ]
    },
    {
        "id": 29,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa possui funções AWS Lambda que são invocadas por outros serviços AWS, como Amazon Kinesis Data Firehose, Amazon API Gateway, Amazon Simple Storage Service ou Amazon CloudWatch Events. O que essas funções Lambda têm em comum é que elas processam cargas de trabalho pesadas, como análise de big data, processamento de arquivos grandes e cálculos estatísticos. O que você deve fazer para melhorar o desempenho das suas funções AWS Lambda sem alterar o código?",
        "options": [
            {
                "letter": "A",
                "text": "Alterar o runtime da função Lambda para Golang",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Alterar o tipo de instância da função Lambda",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Aumentar a memória alocada para a função Lambda",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Aumentar o tempo limite (timeout) da função Lambda",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Mudar o runtime implica alterar a linguagem de programação, o que exige modificações no código. Além disso, essa mudança pode não resolver problemas de desempenho e foge do requisito de não alterar o código."
            },
            {
                "correct": false,
                "text": "Incorreta. O conceito de tipo de instância aplica-se ao Amazon EC2, não ao AWS Lambda, que é um serviço serverless. Lambda não permite escolher tipos de instância, pois a infraestrutura é gerenciada pela AWS."
            },
            {
                "correct": true,
                "text": "Correta. Aumentar a memória alocada para a função Lambda também aumenta proporcionalmente a CPU e outros recursos computacionais disponíveis, melhorando o desempenho para cargas de trabalho pesadas sem necessidade de alterar o código."
            },
            {
                "correct": false,
                "text": "Incorreta. Aumentar o timeout apenas permite que a função execute por mais tempo, mas não melhora o desempenho ou a velocidade do processamento. Isso pode evitar que a função seja interrompida prematuramente, mas não acelera a execução."
            }
        ],
        "glossary": [
            "AWS Lambda: Serviço serverless de computação sob demanda que executa código em resposta a eventos, gerenciando automaticamente servidores, escalabilidade e alta disponibilidade.",
            "Timeout: Tempo máximo de execução permitido para uma função Lambda antes que ela seja interrompida automaticamente; configurável até 15 minutos.",
            "Runtime: Ambiente de execução que define a linguagem de programação (ex.: Python, Node.js, Java) e as bibliotecas disponíveis para a função Lambda.",
            "Memória alocada: Quantidade de memória configurada para a função Lambda, que também determina proporcionalmente o poder de CPU, throughput de rede e velocidade de I/O."
        ],
        "generalExplanation": [
            "A melhor forma de melhorar o desempenho de uma função AWS Lambda sem alterar o código é aumentar a memória alocada. Diferente do que o nome sugere, esse ajuste não apenas amplia a quantidade de memória disponível, mas também aumenta proporcionalmente a CPU, a largura de banda de rede e o I/O — resultando em maior poder computacional e menor tempo de execução. Essa é uma melhor prática recomendada pela AWS, especialmente para funções que realizam processamento intensivo de dados (Big Data, análises ou transformação de arquivos), cálculos complexos ou científicos, manipulação de grandes objetos no Amazon S3, e processamento de streams em tempo real (via Kinesis ou DynamoDB Streams)."
        ],
        "realWorld": [
            "Imagine um cenário em que uma equipe de análise de dados utiliza AWS Lambda para processar arquivos CSV de grande volume enviados ao Amazon S3. Com a configuração padrão (128 MB), o processamento é lento e ocasionalmente atinge o limite de timeout. Ao aumentar a memória alocada para 512 MB ou 1024 MB, o Lambda ganha mais CPU e rede, reduzindo drasticamente o tempo de execução — sem nenhuma alteração de código. Outro exemplo prático: em uma arquitetura serverless que processa eventos em tempo real via Amazon Kinesis Data Firehose, uma função Lambda responsável por normalizar e armazenar dados em DynamoDB pode se beneficiar do aumento de memória, processando mais eventos por segundo com menor latência. Além disso, esse ajuste permite balancear custo e desempenho: uma função mais rápida (com mais memória) pode custar menos por execução, pois o faturamento do Lambda é baseado no tempo total de execução e na memória provisionada. Assim, uma execução três vezes mais rápida com o dobro de memória pode sair mais barata no total."
        ]
    },
    {
        "id": 30,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma equipe de desenvolvimento percebeu que uma das instâncias EC2 foi configurada incorretamente com o atributo 'DeleteOnTermination' definido como True para seu volume raiz EBS. Como um associado de desenvolvimento, qual a melhor forma de desabilitar essa flag enquanto a instância ainda está em execução?",
        "options": [
            {
                "letter": "A",
                "text": "Definir o atributo DisableApiTermination da instância usando a API.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Definir o atributo DeleteOnTermination como False usando a linha de comando.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Atualizar o atributo usando o console de gerenciamento AWS. Selecionar a instância EC2 e desmarcar a caixa 'Delete On Termination' para o volume raiz EBS.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "O atributo não pode ser atualizado enquanto a instância está em execução. Pare a instância pelo console do Amazon EC2 e então atualize a flag.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O atributo DisableApiTermination controla a proteção contra término da instância, impedindo que ela seja terminada acidentalmente, mas não afeta o comportamento do DeleteOnTermination dos volumes EBS associados."
            },
            {
                "correct": true,
                "text": "Correta. Se a instância já está em execução, é possível alterar o atributo DeleteOnTermination para False utilizando comandos via linha de comando, como o AWS CLI, sem a necessidade de parar a instância."
            },
            {
                "correct": false,
                "text": "Incorreta. O console da AWS não permite alterar o atributo DeleteOnTermination de volumes raiz em instâncias que já estão em execução. Essa configuração só pode ser definida durante o lançamento da instância."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa afirmação é falsa, pois é possível modificar o atributo DeleteOnTermination para volumes raiz em instâncias em execução via linha de comando, sem a necessidade de parar a instância."
            }
        ],
        "glossary": [
            "DeleteOnTermination: atributo de um volume EBS que define se ele será automaticamente excluído quando a instância EC2 associada for terminada.",
            "AWS CLI: interface de linha de comando que permite gerenciar recursos AWS de forma programática e automatizada.",
            "Volume raiz EBS: volume principal de uma instância EC2 que contém o sistema operacional e, geralmente, dados essenciais da aplicação.",
            "DisableApiTermination: configuração que protege a instância contra término acidental via API ou console, mas não afeta a exclusão automática de volumes EBS."
        ],
        "generalExplanation": [
            "O atributo DeleteOnTermination controla o ciclo de vida dos volumes EBS ligados a uma instância EC2, especialmente o volume raiz. Quando configurado como True, o volume é automaticamente excluído ao terminar a instância, o que pode levar à perda de dados críticos. Para alterar essa configuração em uma instância em execução, a prática recomendada é utilizar a AWS CLI para definir DeleteOnTermination=False, preservando o volume mesmo após a terminação da instância. O Console AWS não permite alterar DeleteOnTermination para volumes raiz de instâncias ativas. O DisableApiTermination protege apenas a instância de exclusão acidental, não interfere no comportamento de exclusão do volume. Essa alteração via CLI não requer interrupção ou reinício da instância, garantindo a continuidade do serviço."
        ],
        "realWorld": [
            "Em ambientes de produção, equipes de desenvolvimento e operações frequentemente precisam preservar dados críticos em volumes raiz durante operações de manutenção, migração ou atualização de aplicações. Exemplo: uma equipe está migrando uma aplicação para uma nova versão em uma instância EC2. O volume raiz contém logs e dados de configuração importantes. Antes de terminar a instância antiga, a equipe usa a AWS CLI para ajustar DeleteOnTermination=False, garantindo que o volume seja preservado para backup ou análise posterior. Além disso, em ambientes híbridos ou serverless que usam EC2 para tarefas específicas, controlar o ciclo de vida dos volumes via CLI permite integrar a configuração em scripts de automação ou infraestrutura como código, reduzir riscos de perda de dados, e otimizar custos e melhorar a governança e segurança de dados na nuvem AWS."
        ]
    },
    {
        "id": 31,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um pipeline do AWS CodePipeline foi configurado para ser acionado por eventos do Amazon CloudWatch. Recentemente, o pipeline falhou e, após investigação, o líder da equipe percebeu que a origem foi alterada de AWS CodeCommit para Amazon Simple Storage Service (S3). O líder da equipe solicitou que você identifique qual usuário realizou essa alteração. Qual serviço da AWS ajudará você a resolver esse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Amazon CloudWatch",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Amazon Inspector",
                "correct": false
            },
            {
                "letter": "C",
                "text": "AWS CloudTrail",
                "correct": true
            },
            {
                "letter": "D",
                "text": "AWS X-Ray",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Amazon CloudWatch é um serviço de monitoramento e gerenciamento que coleta dados e fornece insights acionáveis sobre recursos e aplicações AWS, híbridas ou on-premises. Embora possa reagir a eventos relacionados a serviços AWS, ele não registra atividades de usuários nem alterações feitas na conta, portanto não é útil para identificar quem realizou uma mudança."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon Inspector é um serviço automatizado de avaliação de segurança que ajuda a melhorar a segurança e conformidade das aplicações implantadas na AWS, focando em vulnerabilidades e acessos indevidos em instâncias EC2. Ele não registra atividades de usuários nem alterações feitas na conta, portanto não serve para rastrear quem modificou o pipeline."
            },
            {
                "correct": true,
                "text": "Correta. O AWS CloudTrail é um serviço que permite governança, conformidade, auditoria operacional e auditoria de riscos na sua conta AWS. Ele registra, monitora continuamente e mantém o histórico das atividades da conta relacionadas a ações realizadas em sua infraestrutura AWS, incluindo alterações feitas via Console de Gerenciamento, SDKs, CLI e outros serviços. Com o CloudTrail, é possível identificar qual usuário realizou a alteração, o endereço IP de origem e o horário da ação."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS X-Ray auxilia desenvolvedores a analisar e depurar aplicações distribuídas em produção, especialmente arquiteturas de microsserviços, permitindo identificar causas raiz de problemas de desempenho e erros. Embora seja essencial para troubleshooting de aplicações, não registra atividades de usuários nem alterações administrativas na conta AWS."
            }
        ],
        "glossary": [
            "AWS CloudTrail: serviço da AWS que registra todas as chamadas de API e atividades administrativas realizadas na conta, permitindo auditoria, rastreamento e análise de segurança.",
            "Amazon CloudWatch: serviço de monitoramento e observabilidade, usado para coletar métricas, logs e eventos de aplicações e recursos AWS, além de gerar alarmes e automatizações.",
            "Amazon Inspector: ferramenta automatizada de avaliação de vulnerabilidades e conformidade em instâncias EC2 e workloads, voltada para segurança e boas práticas.",
            "AWS X-Ray: serviço que rastreia e analisa o desempenho de aplicações distribuídas, auxiliando na depuração e identificação de gargalos em microsserviços e APIs."
        ],
        "generalExplanation": [
            "Para identificar qual usuário realizou uma alteração na origem de um pipeline do AWS CodePipeline, é necessário utilizar um serviço que registre atividades administrativas e chamadas de API — e o AWS CloudTrail é a ferramenta apropriada para isso. O CloudTrail captura informações detalhadas sobre cada ação executada na conta AWS, incluindo quem realizou a ação (usuário, função IAM, ou serviço), quando a ação foi executada (timestamp exato), qual recurso foi modificado (por exemplo, o pipeline específico), e de onde a requisição partiu (endereço IP, região, ou console AWS). Esses registros permitem auditar modificações em serviços como CodePipeline, IAM, S3 e Lambda, facilitando a detecção de alterações não autorizadas ou erros operacionais."
        ],
        "realWorld": [
            "Em uma equipe DevOps que utiliza AWS CodePipeline para automatizar deploys de aplicações, é comum que múltiplos desenvolvedores atualizem a origem do pipeline (por exemplo, mudando o repositório do GitHub ou ajustando estágios). Se, após uma alteração, o pipeline falhar, o AWS CloudTrail pode ser usado para rastrear o evento 'UpdatePipeline' e identificar qual usuário realizou a modificação. Um engenheiro de DevOps pode consultar o evento no CloudTrail Console, filtrando por evento (UpdatePipeline), recurso (arn:aws:codepipeline:...), usuário (campo userIdentity) e data/hora para correlacionar com a falha observada. Por exemplo, se uma alteração incorreta no pipeline interrompe o processo de deploy, o log do CloudTrail revelará quem realizou a ação, qual configuração foi alterada e em qual momento, permitindo reverter a mudança e restaurar o pipeline rapidamente."
        ]
    },
    {
        "id": 32,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um desenvolvedor está configurando as ações de redirecionamento para um Application Load Balancer. Ele encontrou o seguinte trecho de código. Qual das opções abaixo é um exemplo válido de condição para query string que o desenvolvedor pode usar na AWS CLI?",
        "options": [
            {
                "letter": "A",
                "text": "[{ 'Field': 'query-string', 'PathPatternConfig': { 'Values': ['/img/*'] } }]",
                "correct": false
            },
            {
                "letter": "B",
                "text": "[{ 'Type': 'redirect', 'RedirectConfig': { 'Protocol': 'HTTPS', 'Port': '443', 'Host': '#{host}', 'Path': '/#{path}', 'Query': '#{query}', 'StatusCode': 'HTTP_301' } }]",
                "correct": false
            },
            {
                "letter": "C",
                "text": "[{ 'Field': 'query-string', 'StringHeaderConfig': { 'Values': ['*.example.com'] } }]",
                "correct": false
            },
            {
                "letter": "D",
                "text": "[{ 'Field': 'query-string', 'QueryStringConfig': { 'Values': [ { 'Key': 'version', 'Value': 'v1' }, { 'Value': '*example*' } ] } }]",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. 'PathPatternConfig' não é um campo válido para condições de query string. Essa configuração é usada para padrões de caminho (path) e não para query strings, portanto esta opção está malformada e não será aceita pelo ALB."
            },
            {
                "correct": false,
                "text": "Incorreta. Esta configuração representa uma ação de redirecionamento, não uma condição de query string. Ela redireciona requisições HTTP para HTTPS mantendo o host, caminho e query string originais, mas não define uma condição para filtragem baseada em query strings."
            },
            {
                "correct": false,
                "text": "Incorreta. 'StringHeaderConfig' é um campo utilizado para condições baseadas em cabeçalhos HTTP, não para query strings. Usá-lo dentro de uma condição de 'query-string' é incorreto e resultará em erro de configuração."
            },
            {
                "correct": true,
                "text": "Correta. Esta opção exemplifica corretamente uma condição para query string no Application Load Balancer, onde é possível definir pares chave/valor (como 'version=v1') ou apenas valores com curingas (como '*example*'). Essa configuração permite que o ALB avalie a query string da requisição para aplicar regras específicas, utilizando curingas e correspondência não sensível a maiúsculas/minúsculas."
            }
        ],
        "glossary": [
            "Application Load Balancer (ALB): serviço da AWS que distribui tráfego HTTP e HTTPS de forma inteligente, com suporte a regras de roteamento baseadas em conteúdo, como cabeçalhos, caminhos, query strings e hostnames.",
            "Query string: parte da URL que vem após o caractere '?', composta por pares chave=valor, usada para enviar parâmetros adicionais em requisições HTTP (ex: ?version=v1&user=admin).",
            "QueryStringConfig: configuração específica do ALB que permite definir condições de roteamento baseadas em parâmetros de query string, utilizando pares chave-valor ou curingas.",
            "Wildcards (*, ?): caracteres curinga usados para correspondência flexível em strings — o '*' representa qualquer sequência de caracteres, enquanto '?' representa um único caractere."
        ],
        "generalExplanation": [
            "A configuração correta para criar regras baseadas em query strings no Application Load Balancer (ALB) é o uso do campo QueryStringConfig. Esse recurso permite definir condições específicas que analisam os parâmetros da URL e direcionam o tráfego de acordo com seus valores. Por exemplo, roteamento exato: version = v1, ou roteamento com curinga: *beta*. Essas condições são úteis para filtrar requisições conforme parâmetros dinâmicos da query string, garantindo um roteamento preciso e flexível entre targets (instâncias EC2, containers ECS, ou funções Lambda)."
        ],
        "realWorld": [
            "Em um ambiente de produção com microsserviços, um time pode utilizar o Application Load Balancer com condições de query string para realizar deploys controlados e testes de novas versões de API. Por exemplo, requisições com ?version=v1 são direcionadas para o target group API-v1, enquanto requisições com ?version=v2 são roteadas para o API-v2, que contém a nova versão em teste. Isso permite implementar estratégias como blue/green deployment ou canary release, onde apenas uma fração dos usuários acessa a nova versão até que sua estabilidade seja confirmada. Além disso, o uso de curingas (wildcards) em QueryStringConfig possibilita lidar com padrões variáveis de parâmetros, como ?user=*premium*, permitindo roteamento dinâmico baseado em perfis de cliente."
        ]
    },
    {
        "id": 33,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa deseja armazenar seus arquivos acessados com pouca frequência na AWS, que possam ser acessados simultaneamente por centenas de instâncias EC2. A empresa precisa do serviço de armazenamento de arquivos mais econômico que forneça acesso imediato aos dados sempre que necessário. Qual das seguintes opções representa a melhor solução para os requisitos apresentados?",
        "options": [
            {
                "letter": "A",
                "text": "Classe de armazenamento Amazon S3 Standard-Infrequent Access (S3 Standard-IA)",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Classe de armazenamento Amazon Elastic File System (EFS) Standard",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Classe de armazenamento Amazon Elastic File System (EFS) Standard–IA",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Amazon Elastic Block Store (EBS)",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Amazon S3 é um serviço de armazenamento de objetos acessível via API pela internet, não um sistema de arquivos. Portanto, não oferece a interface de sistema de arquivos nem o acesso concorrente necessário para centenas de instâncias EC2 acessarem os arquivos simultaneamente."
            },
            {
                "correct": false,
                "text": "Incorreta. A classe de armazenamento EFS Standard é ideal para arquivos acessados com frequência, oferecendo alta durabilidade e disponibilidade. No entanto, a empresa busca reduzir custos armazenando arquivos acessados com pouca frequência, o que torna essa opção menos econômica para o caso apresentado."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon EFS é um serviço de armazenamento de arquivos que oferece interface de sistema de arquivos POSIX, acesso concorrente para milhares de instâncias EC2 e alta durabilidade. A classe Standard–IA reduz custos para arquivos acessados com pouca frequência sem sacrificar a disponibilidade e o acesso imediato aos dados, atendendo perfeitamente aos requisitos da empresa."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon EBS é um serviço de armazenamento em nível de bloco para uso com uma única instância EC2. Ele oferece baixa latência para acesso a dados, mas não suporta acesso simultâneo por centenas de instâncias EC2, além de não ser um serviço de armazenamento de arquivos, o que é necessário neste caso."
            }
        ],
        "glossary": [
            "Amazon Elastic Block Store (EBS): serviço de armazenamento em nível de bloco que fornece volumes persistentes vinculados a uma única instância EC2 por vez. Ideal para armazenamento de baixo nível e bancos de dados que exigem I/O dedicado.",
            "Amazon Simple Storage Service (S3): serviço de armazenamento de objetos altamente escalável e acessível via API, não compatível com sistemas de arquivos POSIX.",
            "Amazon Elastic File System (EFS): serviço de armazenamento de arquivos elástico e gerenciado, compatível com POSIX, que pode ser acessado simultaneamente por múltiplas instâncias EC2.",
            "Standard-IA (Infrequent Access): classe de armazenamento de baixo custo para dados acessados esporadicamente, mas que ainda precisam estar disponíveis de forma imediata."
        ],
        "generalExplanation": [
            "A melhor opção para o cenário apresentado é o Amazon EFS Standard–IA, pois ele oferece armazenamento de arquivos compartilhado e elástico, com suporte a acesso simultâneo por múltiplas instâncias EC2 e custos otimizados para dados de acesso esporádico. Diferente do Amazon EBS, que é limitado a uma única instância por volume, e do Amazon S3, que não possui interface POSIX nem suporte nativo a acesso de múltiplas instâncias, o EFS permite montar um sistema de arquivos em várias instâncias simultaneamente, atuando como um NAS (Network Attached Storage) totalmente gerenciado. A classe Standard–IA é ideal para dados que precisam permanecer disponíveis, mas não são acessados frequentemente, oferecendo uma economia significativa em comparação à classe EFS Standard, sem comprometer a latência para acessos ocasionais."
        ],
        "realWorld": [
            "Em uma empresa que utiliza várias instâncias EC2 para processar dados ou hospedar aplicações distribuídas, o Amazon EFS Standard–IA permite centralizar arquivos como logs, configurações ou resultados intermediários de processamento, mantendo acesso simultâneo e consistente entre todas as instâncias. Por exemplo, um sistema de análise de dados pode utilizar EC2s para processar grandes volumes de informações em paralelo. Os resultados intermediários são gravados no EFS Standard–IA, onde outras instâncias podem ler ou consolidar esses dados posteriormente, sem a necessidade de transferências manuais ou sincronização complexa. Além disso, em ambientes de containers (ECS, EKS) ou funções Lambda, o EFS pode ser montado para armazenar dados persistentes compartilhados, como modelos de machine learning, arquivos de configuração ou relatórios."
        ]
    },
    {
        "id": 34,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa de comércio eletrônico utiliza filas Amazon SQS para desacoplar a arquitetura de sua aplicação. A equipe de desenvolvimento observou falhas no processamento de mensagens em um cenário específico, quando um usuário realiza um pedido para um determinado ID de produto, mas esse ID de produto é excluído, causando a falha no código da aplicação. Como um Desenvolvedor Associado, qual das seguintes soluções você recomendaria para lidar com essas falhas no processamento de mensagens?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar uma fila dead-letter (dead-letter queue) para lidar com falhas no processamento de mensagens",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Utilizar uma fila temporária para lidar com falhas no processamento de mensagens",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Utilizar short polling para lidar com falhas no processamento de mensagens",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar long polling para lidar com falhas no processamento de mensagens",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Filas dead-letter são usadas para armazenar mensagens que não puderam ser processadas com sucesso após várias tentativas. Elas permitem isolar mensagens problemáticas para análise posterior, facilitando a identificação e correção de erros na aplicação ou dados inconsistentes, como no caso do ID de produto excluído."
            },
            {
                "correct": false,
                "text": "Incorreta. Filas temporárias são geralmente usadas para padrões de mensagens request-response, onde uma fila é criada temporariamente para receber respostas específicas. Elas não são projetadas para capturar ou gerenciar mensagens que falham no processamento em filas principais."
            },
            {
                "correct": false,
                "text": "Incorreta. Short polling retorna imediatamente uma resposta, mesmo que não haja mensagens disponíveis, e não oferece nenhum mecanismo para tratar mensagens que falham no processamento. Portanto, não é adequado para gerenciar falhas de processamento."
            },
            {
                "correct": false,
                "text": "Incorreta. Long polling é uma técnica para reduzir o número de chamadas de API e melhorar a eficiência na recepção de mensagens, mas não resolve falhas específicas no processamento das mensagens, como mensagens que não podem ser processadas devido a dados inconsistentes ou deletados."
            }
        ],
        "glossary": [
            "Amazon SQS (Simple Queue Service): Serviço de filas gerenciado que permite o desacoplamento e escalabilidade de sistemas distribuídos, armazenando mensagens de forma temporária entre produtores e consumidores.",
            "Long polling: Técnica que aguarda mensagens disponíveis antes de retornar uma resposta, reduzindo chamadas desnecessárias e aumentando a eficiência na leitura de filas.",
            "Short polling: Método que retorna imediatamente, mesmo quando não há mensagens na fila, podendo causar sobrecarga de requisições e consumo ineficiente.",
            "Fila dead-letter (Dead-Letter Queue - DLQ): Fila designada para armazenar mensagens que falharam repetidamente no processamento, permitindo posterior análise, correção e reprocessamento seguro."
        ],
        "generalExplanation": [
            "A melhor prática para lidar com falhas no processamento de mensagens no Amazon SQS é configurar uma fila dead-letter (DLQ). Esse recurso isola automaticamente as mensagens que excedem o número máximo de tentativas de processamento (definido pelo parâmetro MaximumReceiveCount). Assim, em vez de causar falhas contínuas no consumidor ou bloquear a fila principal, essas mensagens são movidas para a fila DLQ para investigação e tratamento manual ou automatizado. Outros mecanismos, como long polling ou short polling, apenas otimizam o consumo de mensagens, mas não tratam falhas de processamento. Long polling melhora a eficiência das leituras. Short polling pode aumentar a latência e o custo de consumo. Filas temporárias são usadas para respostas diretas e não oferecem isolamento de falhas."
        ],
        "realWorld": [
            "Em um sistema de e-commerce, mensagens publicadas na fila SQS podem representar eventos de pedidos, atualizações de estoque ou notificações de usuários. Cenário prático: a função AWS Lambda ou um ECS Service consome mensagens da fila principal. Uma mensagem referente a um produto excluído causa erro durante o processamento. Após atingir o limite de tentativas (ex.: 5), o SQS redireciona automaticamente essa mensagem para a DLQ. Um outro processo (Lambda, script ou dashboard) analisa as mensagens da DLQ, gera alertas ou reprocessa as válidas após correção. Exemplo de configuração de fila DLQ: { 'RedrivePolicy': { 'deadLetterTargetArn': 'arn:aws:sqs:us-east-1:123456789012:dead-letter-queue', 'maxReceiveCount': 5 } }."
        ]
    },
    {
        "id": 35,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você é um desenvolvedor DynamoDB em uma empresa aeroespacial que precisa gravar 6 objetos por segundo, cada um com tamanho de 4,5 KB. Qual é a unidade de capacidade de gravação (Write Capacity Unit - WCU) necessária para o seu projeto?",
        "options": [
            {
                "letter": "A",
                "text": "46",
                "correct": false
            },
            {
                "letter": "B",
                "text": "24",
                "correct": false
            },
            {
                "letter": "C",
                "text": "30",
                "correct": true
            },
            {
                "letter": "D",
                "text": "15",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Esta opção superestima a capacidade necessária sem justificativa baseada no cálculo correto do tamanho do item e número de gravações por segundo."
            },
            {
                "correct": false,
                "text": "Incorreta. Esta opção não considera o arredondamento do tamanho do item para múltiplos de 1 KB e, portanto, subestima a capacidade necessária."
            },
            {
                "correct": true,
                "text": "Correta. Cada unidade de capacidade de gravação (WCU) representa uma gravação por segundo para um item de até 1 KB. Como o tamanho do item é 4,5 KB, ele é arredondado para 5 KB, consumindo 5 WCUs por gravação. Para 6 gravações por segundo, o total é 6 x 5 = 30 WCUs."
            },
            {
                "correct": false,
                "text": "Incorreta. Esta opção considera o tamanho do item como 2,5 KB, o que não está correto, pois o DynamoDB arredonda para cima para o próximo múltiplo inteiro de 1 KB."
            }
        ],
        "glossary": [
            "Write Capacity Unit (WCU): Unidade de capacidade no DynamoDB que representa uma gravação por segundo para um item de até 1 KB. Itens maiores consomem múltiplas WCUs.",
            "DynamoDB: Banco de dados NoSQL totalmente gerenciado da AWS que oferece baixa latência, alta disponibilidade e escalabilidade automática.",
            "Arredondamento de tamanho: Regra do DynamoDB que arredonda o tamanho do item para o próximo múltiplo inteiro de 1 KB ao calcular o consumo de capacidade.",
            "Provisioned Throughput: Modo de capacidade provisionada manualmente no DynamoDB, no qual o desenvolvedor define o número de WCUs (gravações) e RCUs (leituras) disponíveis por segundo."
        ],
        "generalExplanation": [
            "No modo provisionado do DynamoDB, é essencial calcular corretamente o número de Write Capacity Units (WCUs) para evitar erros de throttling e garantir desempenho estável. Cada WCU permite uma gravação por segundo para um item de até 1 KB. Quando o tamanho do item excede 1 KB, o DynamoDB arredonda para o próximo múltiplo inteiro de 1 KB para calcular o consumo. No exemplo apresentado: tamanho do item: 4,5 KB → arredondado para 5 KB; cada gravação consome 5 WCUs (1 por KB); taxa de gravações: 6 gravações por segundo; cálculo total: 6 × 5 = 30 WCUs necessárias. Portanto, a tabela deve ser configurada com 30 unidades de capacidade de gravação para sustentar essa taxa sem limitação."
        ],
        "realWorld": [
            "Em um cenário real, imagine uma aplicação IoT que grava dados de sensores em tempo real no Amazon DynamoDB — por exemplo, medições de temperatura e altitude em aeronaves. Cada registro tem cerca de 4,5 KB e chega a uma taxa constante de 6 gravações por segundo. Para garantir que a aplicação mantenha baixa latência e alta disponibilidade, o engenheiro deve calcular o consumo exato de WCUs (como feito acima), provisionar 30 WCUs no DynamoDB, e monitorar o uso com CloudWatch para ajustar dinamicamente a capacidade conforme a demanda cresce. Outro exemplo comum é o uso de AWS Lambda como consumidor e gravador de dados no DynamoDB. Se a função processa lotes de eventos de forma paralela, cada invocação pode gerar várias gravações. Ao compreender o arredondamento de tamanho e o consumo de WCUs, o desenvolvedor pode dimensionar a capacidade corretamente, evitando que múltiplas funções concorrentes causem throttling no banco."
        ]
    },
    {
        "id": 36,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um desenvolvedor em uma universidade está criptografando uma grande carga útil XML transferida pela rede usando o AWS KMS e deseja testar a aplicação antes de ir para produção. Qual é o tamanho máximo de dados suportado pelo AWS KMS para criptografia direta?",
        "options": [
            {
                "letter": "A",
                "text": "16 KB",
                "correct": false
            },
            {
                "letter": "B",
                "text": "10 MB",
                "correct": false
            },
            {
                "letter": "C",
                "text": "4 KB",
                "correct": true
            },
            {
                "letter": "D",
                "text": "1 MB",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O AWS KMS não suporta criptografia direta de dados com tamanho superior a 4 KB. Para dados maiores, recomenda-se o uso de criptografia envelope."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS KMS não permite criptografar diretamente dados com tamanho superior a 4 KB. Para cargas maiores, a criptografia envelope é a solução adequada."
            },
            {
                "correct": true,
                "text": "Correta. O AWS KMS suporta a criptografia direta de até 4 kilobytes (4096 bytes) de dados arbitrários, como chaves RSA, senhas de banco de dados ou outras informações sensíveis. Para dados maiores, a criptografia envelope é recomendada para melhorar a eficiência e reduzir a transferência de dados pela rede."
            },
            {
                "correct": false,
                "text": "Incorreta. O limite máximo para criptografia direta no AWS KMS é 4 KB. Para dados maiores, a prática recomendada é utilizar criptografia envelope, que melhora a performance e reduz a latência."
            }
        ],
        "glossary": [
            "AWS KMS (Key Management Service): Serviço gerenciado da AWS para criação, gerenciamento e controle de chaves criptográficas, usado para proteger dados em repouso e em trânsito.",
            "Criptografia envelope: Técnica de dupla camada de criptografia, na qual uma chave de dados (data key) é usada para criptografar o conteúdo, e essa chave é, por sua vez, criptografada por uma chave mestra (CMK) do KMS.",
            "Payload: Termo que se refere à carga útil dos dados — o conteúdo efetivamente transmitido, armazenado ou processado em uma operação.",
            "Latência de rede: Tempo de atraso na transmissão de dados entre dois pontos em uma rede, podendo impactar o desempenho de aplicações distribuídas."
        ],
        "generalExplanation": [
            "O AWS KMS (Key Management Service) possui uma limitação de 4 KB (4096 bytes) para operações de criptografia direta (Encrypt e Decrypt) sobre dados arbitrários. Essa restrição visa garantir a segurança, reduzir a latência e manter a escalabilidade do serviço, já que o KMS foi projetado para gerenciar chaves, não para processar grandes volumes de dados. Para criptografar dados maiores — como arquivos, logs, documentos ou payloads extensos —, a prática recomendada é utilizar a criptografia envelope, que funciona da seguinte forma: o KMS gera uma chave de dados temporária (data key); essa chave é usada localmente pela aplicação para criptografar o conteúdo grande (por exemplo, um arquivo de vários MB ou GB); a chave de dados é então criptografada pelo KMS, gerando uma versão segura dessa chave (ciphertext key); tanto o conteúdo criptografado quanto a chave protegida são armazenados juntos; quando for necessário descriptografar, o aplicativo envia a ciphertext key de volta ao KMS para obter a chave original e assim decifrar o conteúdo localmente. Essa abordagem mantém o KMS responsável apenas pela proteção das chaves, não pelos dados em si, o que resulta em menor latência, menor custo e maior escalabilidade."
        ],
        "realWorld": [
            "Suponha que um desenvolvedor esteja construindo uma aplicação serverless que processa arquivos XML confidenciais enviados para um bucket S3. Cada arquivo pode ter dezenas de megabytes — muito além do limite de 4 KB do KMS. A solução ideal é implementar criptografia envelope: a função AWS Lambda solicita ao KMS a geração de uma chave de dados (kms.generate_data_key(KeyId='alias/minha-chave-kms', KeySpec='AES_256')), usa a chave de dados em texto puro (Plaintext) para criptografar localmente o arquivo XML (ex.: usando AES-256), salva o arquivo criptografado no Amazon S3 junto com a versão criptografada da data key (CiphertextBlob), e quando o arquivo precisa ser acessado novamente, a aplicação envia a ciphertext key ao KMS para descriptografá-la e obter a data key original. Essa técnica é amplamente utilizada em pipelines de dados sensíveis, como logs de auditoria ou relatórios financeiros; aplicações médicas ou governamentais, que precisam de conformidade com normas de segurança (como HIPAA, GDPR ou LGPD); e arquiteturas serverless com AWS Lambda e S3, garantindo eficiência e baixo overhead de rede."
        ]
    },
    {
        "id": 37,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Implantação",
        "prompt": "Como engenheiro de confiabilidade de site, você é responsável por melhorar a implantação da empresa escalando e automatizando aplicações. À medida que novas versões da aplicação ficam prontas para produção, você garante que a aplicação seja implantada em diferentes conjuntos de instâncias EC2 em momentos distintos, permitindo uma transição suave. Usando o AWS CodeDeploy, qual das opções a seguir permite realizar isso?",
        "options": [
            {
                "letter": "A",
                "text": "Grupos de Implantação do CodeDeploy",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Definir múltiplas Aplicações no CodeDeploy",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Agente do CodeDeploy",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Hooks do CodeDeploy",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Grupos de implantação permitem definir conjuntos específicos de instâncias EC2 para receberem atualizações em momentos distintos. Cada grupo de implantação contém configurações e instâncias-alvo, possibilitando uma implantação gradual e controlada, facilitando transições suaves entre versões da aplicação."
            },
            {
                "correct": false,
                "text": "Incorreta. Definir múltiplas aplicações no CodeDeploy não é a abordagem correta para controlar a implantação em diferentes conjuntos de instâncias em momentos distintos. A separação e o controle do momento da implantação são gerenciados por grupos de implantação, não pela criação de múltiplas aplicações."
            },
            {
                "correct": false,
                "text": "Incorreta. O agente do CodeDeploy é um pacote de software instalado nas instâncias que permite que elas se comuniquem com o serviço CodeDeploy. Ele não controla a segmentação ou o agendamento das implantações em diferentes grupos de instâncias."
            },
            {
                "correct": false,
                "text": "Incorreta. Hooks são scripts vinculados a eventos do ciclo de vida da implantação, como ApplicationStart ou ApplicationStop, usados para executar tarefas específicas durante a implantação. Eles não controlam a segmentação ou o agendamento das implantações em diferentes conjuntos de instâncias."
            }
        ],
        "glossary": [
            "AWS CodeDeploy: serviço gerenciado da AWS que automatiza o processo de implantação de aplicações em instâncias EC2, servidores on-premises ou containers, garantindo consistência e controle sobre o ciclo de deploy.",
            "Grupos de Implantação (Deployment Groups): subconjuntos de instâncias EC2 ou Auto Scaling Groups definidos para receber atualizações de forma segmentada, controlada e monitorada.",
            "Agente do CodeDeploy (CodeDeploy Agent): software instalado nas instâncias EC2 que permite a comunicação entre a máquina e o serviço CodeDeploy, executando as instruções de implantação.",
            "Hooks do CodeDeploy: scripts executados em momentos específicos do ciclo de vida da implantação (por exemplo, BeforeInstall, AfterInstall, ApplicationStart), usados para aplicar configurações ou executar validações personalizadas."
        ],
        "generalExplanation": [
            "A resposta correta é 'Grupos de Implantação do CodeDeploy (Deployment Groups)', pois são esses grupos que permitem segmentar o ambiente de implantação em subconjuntos de instâncias EC2 ou Auto Scaling Groups. Essa segmentação é essencial para executar implantações graduais, como blue/green, canary ou rolling updates, reduzindo riscos e garantindo estabilidade. Por meio dos grupos de implantação, é possível controlar onde, quando e como as novas versões da aplicação serão distribuídas — o que não é possível com as outras opções. CodeDeploy Applications apenas representam o conjunto lógico da aplicação e suas versões, não controlam a segmentação. CodeDeploy Agent executa o processo de deploy em cada instância, mas não decide onde ou quando implantar. Hooks do CodeDeploy executam tarefas auxiliares (scripts), mas não determinam o escopo ou a ordem das implantações."
        ],
        "realWorld": [
            "Em um ambiente corporativo, uma equipe pode usar o AWS CodeDeploy para atualizar uma aplicação em várias fases, utilizando grupos de implantação separados para diferentes ambientes (como dev, staging e prod) ou diferentes zonas de disponibilidade. Por exemplo, o grupo Staging-Group recebe a versão mais recente da aplicação primeiro. Após testes e validações via hooks (ex: AfterInstall), a mesma versão é gradualmente liberada para o grupo Production-Group. Caso ocorra um problema, o CodeDeploy permite rollback automático para a versão anterior sem interrupção completa do serviço. Esse modelo é amplamente adotado em pipelines CI/CD modernos, integrando CodeDeploy com CodePipeline e CodeBuild, permitindo entregas contínuas, seguras e auditáveis — fundamentais para alta disponibilidade e conformidade em ambientes AWS."
        ]
    },
    {
        "id": 38,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Sua aplicação web possui um front-end composto por 5 instâncias EC2 atrás de um Application Load Balancer. Você configurou sua aplicação para capturar o endereço IP do cliente que realiza as requisições. Ao analisar os dados capturados, percebe que todos os endereços IP registrados são iguais, sendo o mesmo endereço IP do Application Load Balancer. O que você deve fazer para identificar o endereço IP verdadeiro do cliente?",
        "options": [
            {
                "letter": "A",
                "text": "Modificar o front-end do site para que os usuários enviem seus IPs nas requisições",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Verificar o cabeçalho X-Forwarded-For no backend",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Verificar o cookie do cliente",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Verificar o cabeçalho X-Forwarded-Proto no backend",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O endereço IP do cliente já é enviado automaticamente nas requisições, mas o load balancer intercepta e substitui pelo seu próprio IP. Não é necessário modificar o front-end para isso."
            },
            {
                "correct": true,
                "text": "Correta. O cabeçalho X-Forwarded-For é inserido pelo Application Load Balancer e contém o endereço IP original do cliente. Para identificar o IP verdadeiro do cliente, o backend deve ler esse cabeçalho."
            },
            {
                "correct": false,
                "text": "Incorreta. Para obter o IP do cliente via cookie, seria necessário modificar a lógica tanto do cliente quanto do servidor, o que não é eficiente nem recomendado para essa finalidade."
            },
            {
                "correct": false,
                "text": "Incorreta. O cabeçalho X-Forwarded-Proto indica o protocolo (HTTP ou HTTPS) usado pelo cliente para se conectar ao load balancer, não o endereço IP do cliente."
            }
        ],
        "glossary": [
            "Application Load Balancer (ALB): Serviço gerenciado da AWS que distribui tráfego HTTP/HTTPS entre várias instâncias EC2, containers ou funções Lambda, operando na camada 7 (aplicação) do modelo OSI.",
            "X-Forwarded-For: Cabeçalho HTTP adicionado automaticamente pelo ALB ou proxy que contém o endereço IP original do cliente que iniciou a requisição.",
            "X-Forwarded-Proto: Cabeçalho HTTP que informa o protocolo usado pelo cliente (HTTP ou HTTPS) ao se conectar ao load balancer.",
            "Cookie: Pequeno arquivo armazenado no navegador do usuário para manter informações de sessão e estado entre requisições, não sendo confiável para fins de rastreamento de IP."
        ],
        "generalExplanation": [
            "Quando uma aplicação está atrás de um Application Load Balancer (ALB), o endereço IP visível pelo backend é o do próprio load balancer, pois ele atua como proxy reverso entre o cliente e as instâncias EC2. Para obter o IP original do cliente, o ALB insere automaticamente o cabeçalho HTTP X-Forwarded-For, que contém uma lista de IPs representando a rota da requisição. O primeiro IP da lista corresponde ao cliente real. Exemplo de cabeçalho: X-Forwarded-For: 203.0.113.45, 70.132.21.12, onde 203.0.113.45 é o IP do cliente original, e 70.132.21.12 é o IP do load balancer. As demais alternativas citadas não resolvem o problema corretamente: X-Forwarded-Proto apenas indica o protocolo usado, não o IP; Cookies podem ser manipulados e não são confiáveis para identificação de origem; Alterar o front-end para enviar o IP manualmente é redundante, pois o ALB já fornece essa informação de forma segura e automatizada."
        ],
        "realWorld": [
            "Em ambientes de produção com múltiplas instâncias EC2 ou containers atendendo requisições via Application Load Balancer, é comum que equipes precisem registrar o IP verdadeiro do cliente para análise de tráfego (ex.: origem geográfica de usuários), auditoria e segurança (ex.: bloqueio de IPs suspeitos), e implementação de rate limiting (limitar requisições por IP). Por exemplo, um desenvolvedor pode configurar seu servidor web para ler o cabeçalho X-Forwarded-For: em Nginx (log_format custom '$http_x_forwarded_for - $remote_user [$time_local] '$request''), ou em Node.js / Express (const clientIp = req.headers['x-forwarded-for']?.split(',')[0] || req.socket.remoteAddress;). O mesmo conceito se aplica a API Gateway + Lambda, onde o API Gateway adiciona cabeçalhos semelhantes, permitindo identificar o IP de origem do usuário final mesmo em arquiteturas serverless."
        ]
    },
    {
        "id": 39,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma equipe de desenvolvimento configurou um Elastic Load Balancer para roteamento baseado em host. O objetivo é suportar múltiplos subdomínios e diferentes domínios de nível superior. A regra *.sample.com corresponde a qual(is) dos seguintes domínios?",
        "options": [
            {
                "letter": "A",
                "text": "sample.test.com",
                "correct": false
            },
            {
                "letter": "B",
                "text": "SAMPLE.COM",
                "correct": false
            },
            {
                "letter": "C",
                "text": "test.sample.com",
                "correct": true
            },
            {
                "letter": "D",
                "text": "sample.com",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A regra *.sample.com corresponde a subdomínios imediatos de sample.com, mas sample.test.com é um subdomínio de test.com, não de sample.com, portanto não corresponde à regra."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o nome do host não seja sensível a maiúsculas ou minúsculas, a regra *.sample.com ainda não corresponde ao domínio raiz SAMPLE.COM, pois o curinga '*' exige um subdomínio antes de sample.com."
            },
            {
                "correct": true,
                "text": "Correta. A regra *.sample.com utiliza condições de host para definir regras que roteiam requisições com base no nome do host no cabeçalho (host header). Isso permite suportar múltiplos subdomínios usando um único load balancer. O padrão *.sample.com corresponde a qualquer subdomínio imediato, como test.sample.com."
            },
            {
                "correct": false,
                "text": "Incorreta. A regra *.sample.com não corresponde ao domínio raiz sample.com, pois o caractere curinga '*' representa um subdomínio, e sample.com não possui um subdomínio antes de sample.com."
            }
        ],
        "glossary": [
            "Elastic Load Balancer (ELB): Serviço da AWS que distribui automaticamente o tráfego de entrada entre múltiplas instâncias ou recursos para garantir alta disponibilidade e escalabilidade.",
            "Roteamento baseado em host: Técnica de direcionamento de requisições em um load balancer que utiliza o valor do cabeçalho HTTP Host para decidir o destino da requisição.",
            "Curinga *: Caractere usado em padrões de correspondência para representar qualquer sequência de caracteres, geralmente em nomes de domínio ou arquivos.",
            "Subdomínio: Parte do domínio que aparece antes do domínio principal, representando uma subdivisão hierárquica — por exemplo, test em test.sample.com."
        ],
        "generalExplanation": [
            "A regra *.sample.com em um Elastic Load Balancer (geralmente em um Application Load Balancer - ALB) corresponde a qualquer subdomínio imediato de sample.com, como test.sample.com ou app.sample.com. O curinga * substitui exatamente um nível de subdomínio, e por isso não cobre: o domínio raiz (sample.com), pois não possui subdomínio antes do domínio principal; nem domínios de hierarquia diferente, como sample.test.com, que pertence a outro domínio raiz (test.com). Embora o campo Host header não seja sensível a maiúsculas ou minúsculas, a estrutura hierárquica do domínio deve ser respeitada. Dessa forma, o roteamento baseado em host garante que cada subdomínio seja direcionado para o destino correto, permitindo uma distribuição inteligente e previsível do tráfego entre aplicações."
        ],
        "realWorld": [
            "Em um ambiente de produção, uma equipe pode configurar um Application Load Balancer com regras baseadas em host para distribuir o tráfego entre serviços distintos sob o mesmo domínio principal: api.sample.com → Backend de APIs, app.sample.com → Aplicação web frontend, admin.sample.com → Painel administrativo. Essa abordagem centraliza o tráfego em um único ALB, reduzindo custos e simplificando a manutenção da infraestrutura. Além disso, compreender a lógica dos curingas (*) evita erros comuns de roteamento, como tentar capturar o domínio raiz com uma regra destinada apenas a subdomínios. Isso assegura que o tráfego chegue ao destino correto e mantém a experiência do usuário consistente, além de facilitar futuras expansões da arquitetura com novos subdomínios e microserviços."
        ]
    },
    {
        "id": 40,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Segurança",
        "prompt": "Uma empresa de comércio eletrônico possui uma frota de servidores web baseados em EC2 que estão enfrentando problemas de alta utilização de CPU. A equipe de desenvolvimento determinou que o atendimento de tráfego seguro via HTTPS é um dos principais fatores que contribuem para a alta carga da CPU. Quais das seguintes ações podem reduzir a alta carga de CPU nos servidores web? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Criar um listener HTTP no Application Load Balancer com SSL pass-through",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar um listener HTTPS no Application Load Balancer com terminação SSL",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Criar um listener HTTPS no Application Load Balancer com SSL pass-through",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Criar um listener HTTP no Application Load Balancer com terminação SSL",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Configurar um certificado SSL/TLS no Application Load Balancer via AWS Certificate Manager (ACM)",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Um listener HTTP não suporta SSL pass-through, pois o protocolo HTTP não é criptografado. Além disso, o SSL pass-through não realiza terminação no ALB, mantendo a carga de descriptografia nas instâncias EC2, o que não resolve o problema de alta CPU."
            },
            {
                "correct": true,
                "text": "Correta. Um listener HTTPS com terminação SSL no ALB permite que o balanceador de carga gerencie a descriptografia do tráfego seguro, aliviando a necessidade das instâncias EC2 processarem essa carga, o que diminui a utilização da CPU nos servidores web."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora um listener HTTPS possa ser configurado, o SSL pass-through significa que o tráfego criptografado é encaminhado diretamente para as instâncias EC2, que continuam a realizar a descriptografia, mantendo a alta carga de CPU nos servidores."
            },
            {
                "correct": false,
                "text": "Incorreta. Um listener HTTP não suporta terminação SSL, pois o protocolo HTTP não é criptografado. Portanto, não é possível realizar terminação SSL em um listener HTTP, tornando esta opção inválida para descarregar a CPU dos servidores."
            },
            {
                "correct": true,
                "text": "Correta. Configurar um certificado SSL/TLS no ALB usando o ACM permite que o balanceador de carga realize a terminação SSL, ou seja, ele descriptografa o tráfego HTTPS antes de encaminhá-lo para as instâncias EC2, reduzindo a carga de CPU nos servidores."
            }
        ],
        "glossary": [
            "Application Load Balancer (ALB): serviço gerenciado da AWS que distribui o tráfego de aplicação entre múltiplos destinos, suportando camada 7 (HTTP/HTTPS), garantindo alta disponibilidade e balanceamento inteligente de carga.",
            "Listener: componente do ALB que escuta requisições em uma porta e protocolo específicos, aplicando regras de encaminhamento para os destinos configurados.",
            "Terminação SSL (SSL Termination): processo onde o ALB descriptografa o tráfego HTTPS, transferindo a carga de criptografia das instâncias backend para o balanceador.",
            "SSL pass-through: método em que o ALB encaminha o tráfego criptografado diretamente para as instâncias backend, que realizam a descriptografia.",
            "AWS Certificate Manager (ACM): serviço que facilita a criação, gerenciamento e implantação de certificados SSL/TLS, com renovação automática e integração com ALB, CloudFront e outros serviços."
        ],
        "generalExplanation": [
            "A melhor abordagem para reduzir a carga de CPU nas instâncias EC2 ao lidar com tráfego HTTPS é: configurar um certificado SSL/TLS no ALB via AWS Certificate Manager (ACM) e criar um listener HTTPS com terminação SSL no ALB. Dessa forma, o ALB descriptografa o tráfego HTTPS antes de encaminhá-lo para as instâncias EC2, aliviando a carga computacional nas instâncias backend e melhorando o desempenho geral da aplicação. Listener HTTP não realiza terminação SSL e, portanto, não reduz a carga de CPU. SSL pass-through mantém a descriptografia nas instâncias EC2, não resolve o problema da alta utilização da CPU."
        ],
        "realWorld": [
            "Em um e-commerce de alta demanda, servidores web precisam processar grande volume de tráfego HTTPS. Sem terminação SSL no ALB, cada instância EC2 executa descriptografia de dados, aumentando a utilização da CPU e reduzindo a capacidade de atender requisições. Ao usar ALB com terminação SSL via ACM, o tráfego HTTPS é descriptografado no ALB, liberando as instâncias EC2 para focar na lógica da aplicação; certificados SSL/TLS são gerenciados automaticamente, incluindo renovação; a latência diminui, a infraestrutura fica mais eficiente e a aplicação pode escalar rapidamente sem sobrecarregar servidores."
        ]
    },
    {
        "id": 41,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Como desenvolvedor, você está trabalhando em um aplicativo móvel que utiliza o Amazon Simple Queue Service (SQS) para enviar mensagens a sistemas downstream para processamento adicional. Um dos requisitos é que as mensagens sejam armazenadas na fila por um período de 12 dias. Como você configuraria esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "O período máximo de retenção das mensagens no SQS é de 7 dias, portanto, o período de 12 dias não é possível",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Habilitar Long Polling para a fila SQS",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar uma fila SQS FIFO",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Alterar a configuração do tempo de retenção das mensagens na fila",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Essa afirmação é falsa, pois o Amazon SQS permite configurar o tempo de retenção das mensagens por até 14 dias (1.209.600 segundos). Portanto, armazenar mensagens por 12 dias é possível."
            },
            {
                "correct": false,
                "text": "Incorreta. O Long Polling reduz o custo e melhora a eficiência ao receber mensagens, diminuindo respostas vazias, mas não altera o tempo de retenção das mensagens na fila. Logo, não resolve o requisito de armazenar mensagens por 12 dias."
            },
            {
                "correct": false,
                "text": "Incorreta. Filas FIFO (First-In-First-Out) são projetadas para garantir a ordem e evitar duplicatas nas mensagens, mas não influenciam o tempo de retenção das mensagens na fila. Portanto, essa configuração não atende ao requisito de retenção de 12 dias."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon SQS permite configurar o tempo de retenção das mensagens entre 60 segundos e 1.209.600 segundos (14 dias). O padrão é 4 dias, mas pode ser ajustado para 12 dias usando a ação SetQueueAttributes, garantindo que as mensagens permaneçam na fila pelo período desejado."
            }
        ],
        "glossary": [
            "Amazon SQS (Simple Queue Service): serviço totalmente gerenciado de filas da AWS que permite desacoplar, escalar e orquestrar componentes de aplicações distribuídas.",
            "FIFO (First-In-First-Out): tipo de fila no SQS que mantém a ordem exata de envio e processamento das mensagens, garantindo entrega única e sem duplicação.",
            "Long Polling: técnica que reduz o número de respostas vazias ao consultar uma fila, melhorando a eficiência e o uso de recursos durante o consumo de mensagens.",
            "SetQueueAttributes: operação da API do SQS que permite configurar parâmetros da fila, como tempo de retenção, visibilidade e tamanho máximo da mensagem.",
            "Tempo de retenção (MessageRetentionPeriod): intervalo durante o qual uma mensagem permanece na fila antes de ser excluída automaticamente; pode variar de 60 segundos (1 minuto) até 1.209.600 segundos (14 dias)."
        ],
        "generalExplanation": [
            "O Amazon SQS permite configurar quanto tempo as mensagens permanecem armazenadas na fila antes de serem descartadas automaticamente. O valor padrão é 4 dias, mas pode ser ajustado entre 60 segundos e 14 dias (1.209.600 segundos) de acordo com os requisitos da aplicação. Para o cenário em que as mensagens precisam ser mantidas por 12 dias, a ação correta é modificar o atributo de tempo de retenção (MessageRetentionPeriod) da fila utilizando a operação SetQueueAttributes. Essa configuração garante que as mensagens permaneçam disponíveis pelo período necessário, mesmo que não sejam consumidas imediatamente."
        ],
        "realWorld": [
            "Imagine um sistema de processamento de pedidos online em que o serviço de pagamento pode ficar temporariamente indisponível. As mensagens (pedidos) são enviadas para uma fila SQS, aguardando processamento. Ao configurar o tempo de retenção para 12 dias, o desenvolvedor garante que os pedidos fiquem armazenados na fila tempo suficiente para que o serviço downstream seja restaurado e consiga processá-los, sem perda de dados. Em arquiteturas serverless, como quando um AWS Lambda consome mensagens do SQS, esse ajuste é essencial para tolerância a falhas e escalabilidade, especialmente em períodos de alta demanda ou interrupções momentâneas."
        ]
    },
    {
        "id": 42,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua empresa possui um balanceador de carga em uma VPC configurado para ser acessível pela internet. O nome DNS público atribuído ao balanceador de carga é myDns-1234567890.us-east-1.elb.amazonaws.com. Quando suas aplicações clientes são carregadas pela primeira vez, elas capturam o nome DNS do balanceador e resolvem o endereço IP para que possam referenciar diretamente o IP subjacente. Foi observado que as aplicações clientes funcionam bem inicialmente, mas param de funcionar inesperadamente após algum tempo. Qual é a causa desse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Você precisa habilitar a afinidade de sessão (stickiness).",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Seus grupos de segurança não são estáveis.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Você precisa desabilitar a implantação multi-AZ.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "O balanceador de carga é altamente disponível e seu endereço IP público pode mudar. O nome DNS é constante.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A afinidade de sessão faz com que o balanceador de carga direcione as requisições de um usuário para a mesma instância, garantindo persistência de sessão. No entanto, isso não impacta o problema descrito, que está relacionado à resolução do endereço IP do balanceador."
            },
            {
                "correct": false,
                "text": "Incorreta. Os grupos de segurança são configurados para controlar o tráfego de rede e, uma vez configurados corretamente, são estáveis. Se as aplicações param de funcionar após algum tempo, o problema provavelmente não está relacionado aos grupos de segurança."
            },
            {
                "correct": false,
                "text": "Incorreta. A implantação multi-AZ aumenta a disponibilidade e tolerância a falhas do balanceador de carga. Desabilitar essa funcionalidade não resolveria o problema e não está relacionado à mudança do endereço IP do balanceador."
            },
            {
                "correct": true,
                "text": "Correta. O balanceador de carga recebe um nome DNS público fixo, mas os endereços IP associados a ele podem mudar devido à alta disponibilidade e escalabilidade. Portanto, as aplicações clientes não devem armazenar o endereço IP resolvido, mas sempre usar o nome DNS para garantir conectividade contínua."
            }
        ],
        "glossary": [
            "Balanceador de carga (Load Balancer): Serviço que distribui o tráfego de entrada entre múltiplas instâncias ou recursos, garantindo alta disponibilidade, escalabilidade e tolerância a falhas.",
            "DNS (Domain Name System): Sistema responsável por traduzir nomes de domínio legíveis (como app.exemplo.com) em endereços IP numéricos, usados para a comunicação entre servidores e clientes.",
            "Afinidade de sessão (Stickiness): Técnica que mantém as requisições de um mesmo usuário direcionadas para a mesma instância, preservando o estado da sessão.",
            "Multi-AZ (Multi-Availability Zone): Estratégia que distribui recursos em várias zonas de disponibilidade, garantindo resiliência e continuidade do serviço mesmo em caso de falha em uma zona."
        ],
        "generalExplanation": [
            "O problema descrito ocorre porque o balanceador de carga (como o Application Load Balancer ou Network Load Balancer) utiliza um nome DNS fixo, mas seus endereços IP mudam dinamicamente conforme o balanceador escala, realiza manutenção ou redistribui o tráfego entre zonas de disponibilidade (Multi-AZ). Quando um cliente ou aplicação armazena (cacheia) o IP resolvido do balanceador e tenta se conectar novamente usando esse endereço fixo, a comunicação pode falhar caso o IP já tenha sido alterado. A melhor prática recomendada pela AWS é que as aplicações sempre utilizem o nome DNS do balanceador e resolvam o IP em tempo de conexão, permitindo que o DNS retorne o endereço IP correto e atualizado."
        ],
        "realWorld": [
            "Imagine uma aplicação web hospedada em instâncias EC2 atrás de um Application Load Balancer (ALB). O desenvolvedor, ao configurar um cliente (por exemplo, um microserviço ou uma função Lambda) que consome a API da aplicação, deve sempre utilizar o endpoint DNS do ALB, como myapp-alb-123456789.us-east-1.elb.amazonaws.com, em vez de resolver e armazenar manualmente o IP correspondente. Dessa forma, se a AWS redistribuir o tráfego, escalar horizontalmente o ALB ou realizar manutenção em uma zona de disponibilidade, o DNS resolverá automaticamente para os novos IPs ativos, mantendo o serviço disponível sem interrupção. Esse princípio se aplica também a integrações entre API Gateway, Lambda e DynamoDB, ou quando o ALB serve como front-end para uma arquitetura serverless."
        ]
    },
    {
        "id": 43,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um desenvolvedor está configurando instâncias de contêiner do Amazon ECS para enviar informações de logs para o CloudWatch Logs. Para que as instâncias de contêiner possam enviar dados de log ao CloudWatch Logs, é necessário criar uma política IAM que permita que as instâncias utilizem as APIs do CloudWatch Logs. Qual política é a mais adequada para atender a esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "{ 'Version': '2012-10-17', 'Statement': [ { 'Effect': 'Allow', 'Action': [ 'logs:CreateLogGroup', 'logs:CreateLogStream', 'logs:PutLogEvents', 'ecs:DescribeServices' ], 'Resource': [ 'arn:aws:logs:<ARN do Grupo de Logs>' ] } ] }",
                "correct": false
            },
            {
                "letter": "B",
                "text": "{ 'Version': '2012-10-17', 'Statement': [ { 'Effect': 'Allow', 'Action': [ 'logs:CreateLogGroup', 'logs:CreateLogStream', 'logs:PutLogEvents', 'logs:DescribeLogGroups' ], 'Resource': [ 'arn:aws:logs:*:*:*' ] } ] }",
                "correct": false
            },
            {
                "letter": "C",
                "text": "{ 'Version': '2012-10-17', 'Statement': [ { 'Effect': 'Allow', 'Action': [ 'logs:CreateLogGroup', 'logs:CreateLogStream', 'logs:PutLogEvents' ], 'Resource': [ 'arn:aws:logs:*:*:*' ] } ] }",
                "correct": false
            },
            {
                "letter": "D",
                "text": "{ 'Version': '2012-10-17', 'Statement': [ { 'Effect': 'Allow', 'Action': [ 'logs:CreateLogGroup', 'logs:CreateLogStream', 'logs:PutLogEvents', 'logs:DescribeLogStreams' ], 'Resource': [ 'arn:aws:logs:*:*:*' ] } ] }",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A permissão ecs:DescribeServices não é necessária para enviar logs ao CloudWatch Logs. Além disso, falta a permissão logs:DescribeLogStreams, que é essencial para listar os streams de logs e garantir o funcionamento correto da política. O recurso está restrito a um ARN específico, o que pode limitar o funcionamento dependendo do uso."
            },
            {
                "correct": false,
                "text": "Incorreta. A permissão logs:DescribeLogGroups não é adequada para essa finalidade, pois o correto é permitir logs:DescribeLogStreams para que a instância possa listar os streams de logs existentes. Essa permissão errada pode impedir o correto envio e gerenciamento dos logs."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora essa política permita criar grupos e streams de logs e enviar eventos, falta a permissão logs:DescribeLogStreams, que é necessária para que a instância possa listar os streams de logs existentes e operar corretamente."
            },
            {
                "correct": true,
                "text": "Correta. Essa política concede as permissões necessárias para criar grupos e streams de logs, enviar eventos de log e listar streams de logs, o que é essencial para que as instâncias do ECS possam enviar logs ao CloudWatch Logs corretamente. O uso do caractere curinga (*) no ARN permite que a política funcione para qualquer grupo de logs."
            }
        ],
        "glossary": [
            "IAM Policy: documento JSON que define permissões sobre ações e recursos na AWS, determinando o que uma identidade (usuário, função ou serviço) pode realizar.",
            "CloudWatch Logs: serviço da AWS para coletar, monitorar e armazenar logs de aplicações e serviços em tempo real.",
            "logs:CreateLogGroup: permissão que autoriza a criação de novos grupos de logs no CloudWatch.",
            "logs:CreateLogStream: permite criar streams de logs (fluxos individuais dentro de um grupo) onde os eventos serão gravados.",
            "logs:PutLogEvents: autoriza o envio de eventos de log para um stream específico.",
            "logs:DescribeLogStreams: permite listar e obter detalhes dos streams de logs existentes, necessária para validação e continuidade do envio.",
            "ARN (Amazon Resource Name): identificador único e padronizado usado para referenciar qualquer recurso AWS.",
            "Wildcard (*): caractere curinga usado em ARNs ou ações de políticas para abranger múltiplos recursos sem necessidade de listá-los individualmente."
        ],
        "generalExplanation": [
            "Para que instâncias de contêiner do Amazon ECS enviem logs corretamente ao Amazon CloudWatch Logs, é essencial que a função IAM associada possua uma política com as permissões adequadas. A política deve incluir as ações: logs:CreateLogGroup, para permitir a criação de grupos de logs; logs:CreateLogStream, para criar fluxos individuais de logs; logs:PutLogEvents, para o envio efetivo dos eventos de log; e logs:DescribeLogStreams, para listar e validar os streams existentes antes do envio. Sem essa última permissão, o agente de logs não consegue verificar ou reutilizar streams existentes, o que pode gerar falhas na entrega de logs. Além disso, o uso do wildcard (*) no ARN (por exemplo, 'Resource': 'arn:aws:logs:*:*:*') torna a política mais flexível e escalável, permitindo que novos grupos e streams criados dinamicamente também sejam contemplados, sem necessidade de ajustes manuais."
        ],
        "realWorld": [
            "Em um ambiente de produção com containers ECS, cada tarefa (task) pode gerar logs de diferentes microserviços. Esses logs precisam ser enviados automaticamente ao CloudWatch Logs para observabilidade, auditoria e troubleshooting. O time de DevOps configura uma IAM Role para o ECS Task Execution com uma política contendo as ações: logs:CreateLogGroup, logs:CreateLogStream, logs:PutLogEvents, logs:DescribeLogStreams. Essa política garante que, ao iniciar novos contêineres, o agente de logs integrado possa criar e atualizar grupos e streams automaticamente, sem intervenção manual. Na prática, isso permite que logs de erros, métricas de performance e eventos de segurança sejam centralizados no CloudWatch Logs, onde podem ser analisados via CloudWatch Insights ou encaminhados para ferramentas de monitoramento externas."
        ]
    },
    {
        "id": 44,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Implantação",
        "prompt": "Um desenvolvedor está criando um serviço de API RESTful usando o Amazon API Gateway com integração AWS Lambda. O serviço deve suportar diferentes versões da API para fins de teste. Como um Associate Developer, qual das seguintes opções você sugeriria como a melhor forma de realizar isso?",
        "options": [
            {
                "letter": "A",
                "text": "Usar um cabeçalho X-Version para identificar qual versão está sendo chamada e passar esse cabeçalho para a função Lambda.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar um Lambda authorizer do API Gateway para direcionar os clientes da API para a versão correta da API.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Implantar as versões da API como estágios únicos com endpoints exclusivos e usar variáveis de estágio para fornecer o contexto que identifica as versões da API.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Configurar uma política de recurso do API Gateway para identificar as versões da API e fornecer contexto para a função Lambda.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível usar um cabeçalho personalizado para indicar a versão da API, essa abordagem não é recomendada para gerenciar versões em API Gateway, pois aumenta a complexidade do código e dificulta o gerenciamento centralizado das versões da API."
            },
            {
                "correct": false,
                "text": "Incorreta. Um Lambda authorizer é utilizado para autenticação e autorização personalizada, não para roteamento ou gerenciamento de versões da API."
            },
            {
                "correct": true,
                "text": "Correta. Um estágio é uma referência nomeada a uma implantação, que é uma captura instantânea da API. Você pode usar estágios para gerenciar diferentes versões da API, como desenvolvimento, teste e produção. Variáveis de estágio funcionam como variáveis de ambiente e permitem configurar endpoints, funções Lambda ou outros parâmetros específicos para cada versão da API, facilitando o gerenciamento e a manutenção."
            },
            {
                "correct": false,
                "text": "Incorreta. Políticas de recurso do API Gateway são usadas para controlar o acesso à API com base em identidades e permissões, não para gerenciar ou identificar versões da API ou fornecer contexto para funções Lambda."
            }
        ],
        "glossary": [
            "API Gateway: Serviço gerenciado da AWS para criação, publicação e gerenciamento de APIs RESTful e WebSocket, atuando como ponto de entrada central para aplicações backend.",
            "AWS Lambda: Serviço de computação serverless que executa código sob demanda, em resposta a eventos, sem necessidade de gerenciar servidores.",
            "Estágio (Stage): Ambiente nomeado dentro do API Gateway que representa uma versão ou fase específica de uma API (por exemplo: dev, staging, prod).",
            "Variáveis de estágio (Stage Variables): Pares nome-valor configuráveis por estágio, usados para alterar parâmetros como nomes de funções Lambda, URLs de backend ou configurações específicas sem precisar alterar o código da API.",
            "Lambda Authorizer: Função AWS Lambda usada para autenticação e autorização personalizadas em chamadas ao API Gateway."
        ],
        "generalExplanation": [
            "A melhor prática para gerenciar múltiplas versões de uma API no Amazon API Gateway é criar estágios distintos (Stages), cada um com um endpoint único e suas próprias variáveis de estágio. Cada estágio (como v1, v2, beta, prod) pode representar uma versão da API, permitindo que equipes testem novas implementações sem afetar o tráfego de produção. As variáveis de estágio permitem configurar comportamentos específicos, como qual função Lambda a API deve invocar, qual URL de backend utilizar, ou parâmetros de ambiente ou flags de feature toggle. Isso oferece flexibilidade e isolamento, facilitando testes, deploys graduais e rollbacks."
        ],
        "realWorld": [
            "Um time de desenvolvimento pode gerenciar uma API REST que serve diferentes clientes corporativos, mantendo versões independentes para testes e produção. Por exemplo, Stage dev: Conectado à função Lambda ProcessData-Dev e ao banco de dados de teste. Stage prod: Conectado à função ProcessData-Prod e ao banco de dados real. Cada estágio usa variáveis para configurar o comportamento. Assim, ao fazer deploy de novas versões, o desenvolvedor pode testar funcionalidades em https://api.company.com/dev sem afetar https://api.company.com/prod. Além disso, se algo falhar em um novo release, é possível reverter rapidamente o tráfego para um estágio estável. Essa abordagem melhora o ciclo de vida da API, facilita a automação de pipelines CI/CD (via AWS CodePipeline e CloudFormation) e garante segurança e controle total sobre versões e ambientes."
        ]
    },
    {
        "id": 45,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um desenvolvedor, ao trabalhar com instâncias Amazon EC2, percebeu que uma instância não era mais necessária e a desligou. Porém, outra instância do mesmo tipo foi automaticamente iniciada na conta. Qual das opções a seguir pode explicar essa sequência de ações?",
        "options": [
            {
                "letter": "A",
                "text": "O usuário não tinha as permissões corretas para desligar a instância. É necessário ter permissões de root para terminar uma instância.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "A instância poderia fazer parte de um Network Load Balancer e, por isso, foi automaticamente iniciada.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "A instância pode fazer parte de um Auto Scaling Group e, por isso, uma instância semelhante foi reiniciada automaticamente.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "A instância poderia fazer parte de um Application Load Balancer e, por isso, foi automaticamente iniciada.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Se o usuário não possui permissões suficientes, ele nem mesmo conseguiria executar a ação de desligar a instância. Além disso, não é necessário ter permissões de root para terminar uma instância EC2; permissões específicas do IAM para a ação de término são suficientes."
            },
            {
                "correct": false,
                "text": "Incorreta. Um Network Load Balancer (NLB) distribui o tráfego de rede entre instâncias, mas não tem a capacidade de iniciar ou reiniciar instâncias automaticamente. A menos que esteja configurado com um Auto Scaling Group, o NLB sozinho não pode lançar instâncias."
            },
            {
                "correct": true,
                "text": "Correta. Grupos de Auto Scaling podem ser configurados para manter um número desejado de instâncias em execução. Se uma instância é terminada manualmente, o Auto Scaling Group automaticamente lança uma nova instância para substituir a que foi removida, mantendo a capacidade desejada."
            },
            {
                "correct": false,
                "text": "Incorreta. O Application Load Balancer (ALB) distribui o tráfego entre instâncias, mas não inicia instâncias por conta própria. Normalmente, o ALB é configurado junto com um Auto Scaling Group para gerenciar o número de instâncias, mas sozinho não pode lançar instâncias automaticamente."
            }
        ],
        "glossary": [
            "Auto Scaling Group (ASG): Serviço da AWS que gerencia automaticamente o número de instâncias EC2 em execução, garantindo alta disponibilidade, escalabilidade e autorrecuperação.",
            "Application Load Balancer (ALB): Balanceador de carga de camada 7 (aplicação) que distribui tráfego HTTP/HTTPS entre múltiplas instâncias ou contêineres, com suporte a roteamento avançado.",
            "Network Load Balancer (NLB): Balanceador de camada 4 (rede) otimizado para tráfego TCP/UDP de alta performance e baixa latência, ideal para cargas intensas e em tempo real.",
            "Permissões IAM: Conjunto de políticas e regras de acesso que definem o que usuários, funções e serviços podem realizar dentro da AWS."
        ],
        "generalExplanation": [
            "A resposta correta é a que identifica que a instância EC2 fazia parte de um Auto Scaling Group (ASG). O ASG é o componente responsável por manter automaticamente o número desejado de instâncias. Quando uma instância é encerrada manualmente, desligada ou falha, o ASG detecta a redução na capacidade e lança uma nova instância substituta, restaurando o estado ideal definido na configuração. Em contraste, o ALB (Application Load Balancer) e o NLB (Network Load Balancer) apenas distribuem tráfego entre instâncias ativas; eles não têm capacidade de criar, reiniciar ou substituir instâncias. Permissões IAM controlam quem pode realizar ações (como desligar uma instância), mas não influenciam na recriação automática de recursos."
        ],
        "realWorld": [
            "Em um ambiente de produção, é comum que aplicações críticas rodem dentro de um Auto Scaling Group configurado para manter, por exemplo, mínimo 2 e máximo 6 instâncias EC2. Cenário prático: um desenvolvedor encerra manualmente uma das instâncias. O ASG detecta que o número atual está abaixo da capacidade desejada. Em poucos minutos, o ASG inicia uma nova instância EC2 automaticamente. Se o ambiente estiver integrado a um Application Load Balancer (ALB), a nova instância é registrada automaticamente no grupo de destino e começa a receber tráfego. Essa automação evita downtime e garante que a aplicação continue atendendo usuários mesmo em situações de falha ou manutenção manual."
        ]
    },
    {
        "id": 46,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa configurou um grupo de Auto Scaling com verificações de integridade. A configuração está definida com capacidade desejada de 3 e capacidade máxima de 3. As instâncias EC2 do seu grupo de Auto Scaling estão configuradas para escalar quando a utilização da CPU atingir 60%, e atualmente estão operando com 80% de utilização. O que acontecerá a seguir?",
        "options": [
            {
                "letter": "A",
                "text": "O sistema continuará operando normalmente, sem alterar a capacidade.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "A capacidade desejada aumentará para 4 e a capacidade máxima também aumentará para 4.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "O sistema acionará alarmes do CloudWatch para o suporte da AWS.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "A capacidade desejada aumentará para 4, enquanto a capacidade máxima permanecerá em 3.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Como a capacidade desejada e máxima estão definidas como 3, e o grupo já está operando com 3 instâncias, o Auto Scaling não aumentará o número de instâncias, mesmo com a CPU em 80%. O grupo mantém o número atual de instâncias, pois já atingiu a capacidade máxima configurada."
            },
            {
                "correct": false,
                "text": "Incorreta. A capacidade máxima não é alterada automaticamente. Para aumentar a capacidade máxima, é necessário modificar manualmente essa configuração. O Auto Scaling não ajusta a capacidade máxima com base na utilização da CPU ou na capacidade desejada."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o Auto Scaling possa acionar alarmes do CloudWatch com base em métricas configuradas, o suporte da AWS não é automaticamente notificado nem intervém nesse processo. Essa opção é um distrator."
            },
            {
                "correct": false,
                "text": "Incorreta. A capacidade desejada não pode ultrapassar o valor da capacidade máxima configurada. Portanto, não é possível que a capacidade desejada aumente para 4 se a capacidade máxima está definida como 3."
            }
        ],
        "glossary": [
            "Auto Scaling Group (ASG): Serviço da AWS que ajusta automaticamente o número de instâncias EC2 com base em políticas de escalabilidade, garantindo alta disponibilidade e eficiência de custos.",
            "Capacidade desejada (Desired Capacity): Quantidade ideal de instâncias EC2 que o Auto Scaling deve manter em execução sob condições normais.",
            "Capacidade máxima (Maximum Capacity): Limite superior de instâncias que o grupo de Auto Scaling pode escalar; impede a criação de instâncias além do valor configurado.",
            "CloudWatch Alarms: Alertas e gatilhos automáticos configurados no Amazon CloudWatch que monitoram métricas (como CPU, memória ou latência) e disparam ações de escalabilidade."
        ],
        "generalExplanation": [
            "O Auto Scaling Group (ASG) sempre respeita os limites configurados de capacidade mínima, capacidade desejada e capacidade máxima. Mesmo que a métrica de utilização da CPU ultrapasse o limiar configurado (por exemplo, 60%), o ASG não criará novas instâncias se a capacidade atual já atingiu o valor máximo definido. No cenário descrito: capacidade desejada: 3 instâncias, capacidade máxima: 3 instâncias, utilização da CPU: acima do limite de 60%. Apesar da alta carga, o grupo não escalará para além de 3 instâncias, pois isso violaria a configuração máxima definida. Essa limitação faz parte das boas práticas de governança e controle de custos da AWS, prevenindo escalabilidade descontrolada e gastos inesperados."
        ],
        "realWorld": [
            "Em uma aplicação web de produção, um Auto Scaling Group pode ser configurado com: capacidade mínima: 2 instâncias (garante disponibilidade mínima), capacidade desejada: 3 instâncias (opera normalmente com três servidores), capacidade máxima: 3 instâncias (limita custo e escalabilidade). Durante um pico de tráfego, as métricas do Amazon CloudWatch detectam alta utilização da CPU (acima de 60%). O ASG avalia a condição e tenta escalar, mas não adiciona novas instâncias porque já atingiu o limite de 3 instâncias. Exemplo prático: um e-commerce durante uma promoção relâmpago pode experimentar tráfego intenso. Se o limite máximo estiver muito baixo, os usuários podem enfrentar lentidão ou erros de requisição. Se o limite for muito alto e não houver controle de custo, a empresa pode gastar além do previsto. Assim, a equipe de DevOps deve ajustar dinamicamente as políticas de Auto Scaling, revisando o limite máximo de instâncias, o limiar de CPU ou outras métricas de escala, e a configuração de alarmes do CloudWatch."
        ]
    },
    {
        "id": 47,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Sua organização possui desenvolvedores que fazem merge de alterações de código regularmente em um repositório AWS CodeCommit. Seu pipeline utiliza o AWS CodeCommit como fonte e você deseja configurar uma regra que reaja a mudanças no CodeCommit. Qual das opções a seguir você escolheria para esse tipo de integração?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar Regras de Eventos do CloudTrail com Amazon Simple Email Service (SES)",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar Regras do Amazon EventBridge",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Utilizar função Lambda com Amazon Simple Notification Service (SNS)",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar Regras de Eventos do Lambda",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Não existe o conceito de 'Regras de Eventos do CloudTrail'. O AWS CloudTrail registra chamadas de API para sua conta AWS, mas não possui regras de eventos para acionar ações diretamente, e o uso do SES para este propósito não é adequado."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon EventBridge é o serviço atual que monitora eventos e mudanças de estado em recursos AWS e aplicações. Ele permite detectar e reagir a mudanças no AWS CodeCommit configurando regras que capturam eventos específicos, acionando ações automaticamente, o que o torna ideal para reagir a alterações no CodeCommit."
            },
            {
                "correct": false,
                "text": "Incorreta. Funções Lambda podem ser acionadas por eventos do EventBridge, mas o AWS CodePipeline não dispara funções Lambda diretamente. Portanto, essa integração não é a forma recomendada para reagir a mudanças no CodeCommit."
            },
            {
                "correct": false,
                "text": "Incorreta. Não existe o conceito de 'Regras de Eventos do Lambda'. Lambda é uma função que pode ser acionada por eventos, mas as regras de eventos são gerenciadas pelo EventBridge, não pelo Lambda."
            }
        ],
        "glossary": [
            "Amazon EventBridge: serviço gerenciado que detecta e roteia eventos provenientes de recursos AWS, aplicações SaaS e sistemas internos, permitindo a criação de regras de automação baseadas em eventos.",
            "AWS CodeCommit: serviço de controle de versão baseado em Git, hospedado na AWS, que armazena repositórios privados e integra-se com outros serviços AWS para automação de pipelines.",
            "AWS Lambda: serviço serverless que executa código em resposta a eventos, eliminando a necessidade de provisionar ou gerenciar servidores.",
            "Amazon SNS (Simple Notification Service): serviço de mensageria pub/sub usado para enviar notificações para múltiplos destinos (e-mail, SMS, HTTP ou Lambda)."
        ],
        "generalExplanation": [
            "A opção correta é o Amazon EventBridge, pois ele é o serviço nativo da AWS projetado para detectar eventos em tempo real e reagir a mudanças em recursos como repositórios CodeCommit. O EventBridge (antigo CloudWatch Events) permite criar regras que monitoram eventos específicos, como pushes, merges ou criações de branches em um repositório. Essas regras podem acionar automaticamente funções AWS Lambda, pipelines do CodePipeline, tópicos SNS ou outros destinos. Outras alternativas são incorretas: SNS é apenas um serviço de notificação, sem capacidade de filtrar ou reagir a eventos do CodeCommit de forma granular; CloudTrail registra logs de atividades de API para auditoria, mas não executa ações em resposta a eventos; 'Regras de Eventos do Lambda' não existe tal conceito; o Lambda é apenas o destino de uma regra de eventos, não o originador."
        ],
        "realWorld": [
            "Imagine um time de desenvolvimento que utiliza CodeCommit como repositório Git central. A cada novo commit ou merge na branch principal, eles desejam iniciar automaticamente o CodePipeline para compilar, testar e implantar o código. Com o Amazon EventBridge, o desenvolvedor pode criar uma regra de evento como esta: EventPattern: source: - aws.codecommit, detail-type: - CodeCommit Repository State Change, detail: event: - referenceCreated - referenceUpdated. Essa regra pode acionar uma função Lambda que executa validações ou aciona o CodePipeline via API, iniciando automaticamente o processo de CI/CD. Além disso, o EventBridge pode ser usado para enviar notificações via SNS quando novos commits forem feitos, executar scripts de análise de código ou geração de relatórios via Lambda, e integrar-se com ferramentas externas (ex: Slack, Jira, Datadog) através de APIs ou EventBridge Pipes."
        ]
    },
    {
        "id": 48,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "A equipe de desenvolvimento de uma empresa de saúde está planejando migrar para a AWS Cloud a partir do data center local. A equipe está avaliando o Amazon RDS como camada de banco de dados para sua aplicação principal. Quais das seguintes afirmações você identificaria como corretas para o RDS Multi-AZ? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "O RDS aplica atualizações do sistema operacional realizando a manutenção na instância standby, depois promovendo a standby para primária e, finalmente, realizando a manutenção na antiga primária, que se torna a nova standby.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "As atualizações na sua instância de banco de dados são replicadas assincronamente entre a Zona de Disponibilidade para a instância standby para manter ambas sincronizadas.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Para backups automatizados, a atividade de I/O é suspensa no banco de dados primário, pois os backups não são realizados na instância standby.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Para aumentar a escalabilidade de leitura, a instância standby Multi-AZ pode ser usada para atender requisições de leitura.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "O Amazon RDS inicia automaticamente uma failover para a instância standby caso o banco de dados primário falhe por qualquer motivo.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Durante a manutenção, o RDS primeiro atualiza a instância standby, promove ela para primária e só então atualiza a antiga primária, minimizando o impacto da manutenção e garantindo alta disponibilidade."
            },
            {
                "correct": false,
                "text": "Incorreta. A replicação entre a instância primária e a standby em Multi-AZ é síncrona, garantindo que ambas estejam sempre sincronizadas para proteger contra perda de dados em caso de falha."
            },
            {
                "correct": false,
                "text": "Incorreta. Com Multi-AZ, os backups automatizados são realizados na instância standby, o que evita a suspensão da atividade de I/O no banco primário durante a janela de backup, melhorando a disponibilidade."
            },
            {
                "correct": false,
                "text": "Incorreta. A instância standby em uma implantação Multi-AZ não pode ser usada para operações de leitura ou escrita. Ela serve apenas para alta disponibilidade e recuperação em caso de falha, não para escalabilidade de leitura."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon RDS oferece alta disponibilidade com Multi-AZ ao realizar failover automático para a instância standby em caso de falha no banco de dados primário, minimizando o tempo de indisponibilidade."
            }
        ],
        "glossary": [
            "Amazon RDS (Relational Database Service): Serviço gerenciado de banco de dados relacional que simplifica a configuração, operação e escalabilidade de bancos como MySQL, PostgreSQL, Oracle, SQL Server e MariaDB.",
            "Multi-AZ: Configuração que cria uma instância primária e uma instância standby em zonas de disponibilidade diferentes, com replicação síncrona, garantindo alta disponibilidade e tolerância a falhas.",
            "Failover: Processo automático de troca da instância primária pela standby em caso de falha, manutenção ou atualização, reduzindo o tempo de inatividade.",
            "Instância standby: Réplica da instância primária mantida em modo passivo até ser promovida durante o failover.",
            "Replicação síncrona: Mecanismo em que as gravações são confirmadas simultaneamente em ambas as instâncias (primária e standby), garantindo consistência de dados.",
            "Backup automatizado: Recurso que realiza cópias de segurança diárias do banco, executadas na instância standby em configurações Multi-AZ para evitar impacto na performance.",
            "Atualização de sistema operacional: Processo de patching e manutenção do SO das instâncias RDS, realizado de forma controlada para minimizar interrupções."
        ],
        "generalExplanation": [
            "O Amazon RDS Multi-AZ é uma configuração projetada para alta disponibilidade e durabilidade dos dados em ambientes críticos. Ele utiliza replicação síncrona entre a instância primária e uma instância standby localizada em outra Zona de Disponibilidade (AZ) dentro da mesma região AWS. Quando ocorre uma falha — como uma interrupção de hardware, falha de rede ou manutenção planejada —, o RDS executa automaticamente um failover para a instância standby. Esse processo é transparente para a aplicação, pois o endpoint do banco permanece o mesmo, garantindo continuidade de operação com downtime mínimo (geralmente de 30 a 120 segundos). Além da resiliência, o RDS otimiza o desempenho e a manutenção: backups automatizados e snapshots são realizados na instância standby, evitando suspensão de I/O na primária; e atualizações de software e patches de segurança são aplicados primeiro na instância standby; após a promoção, a antiga primária é atualizada — minimizando impacto no tráfego de produção."
        ],
        "realWorld": [
            "Imagine uma empresa de telemedicina que precisa garantir disponibilidade 24x7 de seu sistema de agendamento de consultas e prontuário eletrônico. Qualquer interrupção no banco de dados poderia impedir médicos e pacientes de acessarem informações críticas. Ao configurar o banco de dados como Amazon RDS Multi-AZ, a empresa obtém proteção contra falhas de zona de disponibilidade, failover automático mantendo o serviço operacional mesmo em caso de manutenção ou falha, backups consistentes e não intrusivos realizados na instância standby, e aplicação automática de patches com impacto mínimo no usuário final. Outro exemplo comum é em aplicações financeiras: bancos e fintechs usam o Multi-AZ para garantir que transações, saldos e registros de auditoria permaneçam consistentes e disponíveis mesmo durante eventos de falha."
        ]
    },
    {
        "id": 49,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Segurança",
        "prompt": "Uma empresa possui dados sensíveis armazenados em um bucket Amazon S3 que está criptografado usando o AWS Key Management Service (AWS KMS). Um desenvolvedor deseja garantir a criptografia em trânsito para todos os usuários que receberam permissão para usar a operação S3 GetObject em múltiplas contas AWS. Qual das seguintes opções representa a melhor solução para esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Configurar uma política baseada em recursos no bucket S3 para negar acesso quando a requisição possuir a condição 'aws:SecureTransport': 'false'.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Configurar uma política baseada em recursos no bucket S3 para permitir acesso quando a requisição possuir a condição 'aws:SecureTransport': 'false'.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Configurar uma política baseada em recursos na chave KMS para permitir acesso quando a requisição possuir a condição 'aws:SecureTransport': 'false'.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Configurar uma política baseada em recursos na chave KMS para negar acesso quando a requisição possuir a condição 'aws:SecureTransport': 'false'.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Essa configuração força o uso de conexões criptografadas via HTTPS (TLS) para acessar o bucket, negando qualquer requisição feita por HTTP. A condição 'aws:SecureTransport' verifica se a requisição foi feita usando HTTPS, garantindo assim a criptografia em trânsito para a operação GetObject."
            },
            {
                "correct": false,
                "text": "Incorreta. Permitir acesso quando a condição 'aws:SecureTransport' for falsa permite conexões HTTP não criptografadas, o que viola o requisito de garantir criptografia em trânsito para a operação GetObject."
            },
            {
                "correct": false,
                "text": "Incorreta. Permitir acesso quando a condição 'aws:SecureTransport' for falsa significa aceitar conexões não criptografadas, o que contraria o requisito de garantir criptografia em trânsito. Além disso, o controle deve ser feito no bucket S3, não na chave KMS."
            },
            {
                "correct": false,
                "text": "Incorreta. Políticas baseadas em recursos na chave KMS não são adequadas para controlar a criptografia em trânsito nas operações S3 GetObject, pois o controle de transporte seguro deve ser aplicado diretamente no bucket S3, que é o recurso acessado."
            }
        ],
        "glossary": [
            "AWS KMS (Key Management Service): serviço gerenciado da AWS que permite criar, gerenciar e controlar chaves de criptografia, usadas para proteger dados em repouso em diversos serviços AWS.",
            "aws:SecureTransport: condição de política IAM que valida se a requisição foi feita usando transporte seguro (HTTPS/TLS); quando configurada para 'false', a política pode negar o acesso via HTTP.",
            "Bucket S3: contêiner lógico do Amazon S3 usado para armazenar objetos (arquivos e metadados) acessíveis via API ou console.",
            "Política baseada em recursos (Resource-based policy): política anexada diretamente a um recurso AWS (como um bucket S3), definindo quem pode acessá-lo e sob quais condições.",
            "GetObject: operação do Amazon S3 que permite recuperar um objeto armazenado em um bucket.",
            "Criptografia em trânsito: proteção dos dados durante a transmissão entre cliente e servidor, garantindo que eles não sejam interceptados ou modificados."
        ],
        "generalExplanation": [
            "Para garantir criptografia em trânsito ao acessar objetos em um bucket Amazon S3, a abordagem correta é aplicar uma política baseada em recursos no próprio bucket, exigindo o uso de conexões seguras (HTTPS/TLS). Essa configuração é feita adicionando uma condição de negação explícita quando o acesso não utiliza transporte seguro, por meio da chave de condição 'aws:SecureTransport': 'false'. Exemplo de política: { 'Version': '2012-10-17', 'Id': 'EnforceTLS', 'Statement': [ { 'Sid': 'DenyInsecureTransport', 'Effect': 'Deny', 'Principal': '*', 'Action': 's3:*', 'Resource': [ 'arn:aws:s3:::meu-bucket-seguro', 'arn:aws:s3:::meu-bucket-seguro/*' ], 'Condition': { 'Bool': { 'aws:SecureTransport': 'false' } } } ] }. Com essa política, qualquer tentativa de acessar o bucket por HTTP será negada, garantindo que todas as operações (como GetObject) ocorram exclusivamente sobre conexões seguras (HTTPS). Essa é a forma recomendada pela AWS porque o controle de criptografia em trânsito deve ocorrer no ponto de acesso aos dados (o bucket S3) — e não nas chaves do AWS KMS, que tratam apenas da criptografia em repouso."
        ],
        "realWorld": [
            "Em ambientes corporativos com várias contas AWS ou aplicações acessando dados sensíveis via API, é essencial garantir que todo o tráfego entre clientes e o Amazon S3 ocorra por HTTPS. Por exemplo, um time de segurança pode aplicar essa política diretamente no bucket que armazena relatórios financeiros, impedindo qualquer acesso via HTTP — mesmo que as credenciais estejam corretas. Assim, mesmo integrações externas (como aplicações de terceiros ou serviços serverless) só conseguirão se comunicar de forma criptografada. Em uma aplicação serverless com AWS Lambda, que lê e grava dados no S3, essa política garante que as funções Lambda acessem os objetos somente através de HTTPS, evitando interceptações e assegurando conformidade com padrões de segurança corporativa (como ISO 27001 e PCI DSS)."
        ]
    },
    {
        "id": 50,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa utiliza uma infraestrutura baseada em microsserviços para processar chamadas de API de clientes, realizar filtragem de requisições e armazenar em cache usando o AWS API Gateway. Os usuários relatam receber o código de erro 501 e você foi acionado para identificar o que está falhando. Qual serviço você escolheria para ajudar na solução desse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar o serviço AWS CloudTrail",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar o serviço Amazon CloudWatch",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Utilizar o serviço Amazon API Gateway",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar o serviço AWS X-Ray",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O AWS CloudTrail fornece um histórico das chamadas de API feitas na conta AWS, incluindo ações via Console, SDKs e ferramentas de linha de comando. Embora seja útil para monitoramento e auditoria geral, ele não oferece uma análise detalhada do fluxo interno entre microsserviços ou ajuda a identificar problemas específicos de execução, como o erro 501 relatado."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon CloudWatch é um serviço de monitoramento e gerenciamento que coleta métricas e logs de recursos AWS e aplicações híbridas ou on-premises. Embora possa fornecer dados e alertas sobre o estado geral dos serviços, ele não oferece ferramentas específicas para depurar problemas detalhados em aplicações baseadas em microsserviços, como análise de rastreamento de chamadas que o X-Ray oferece."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon API Gateway é um serviço para criação, publicação, manutenção, monitoramento e segurança de APIs REST, HTTP e WebSocket em qualquer escala. Apesar de ser o ponto de entrada para as chamadas de API, ele não permite investigar o fluxo detalhado entre microsserviços nem diagnosticar problemas internos específicos que geram erros como o 501."
            },
            {
                "correct": true,
                "text": "Correta. O AWS X-Ray ajuda desenvolvedores a analisar e depurar aplicações distribuídas em produção, especialmente aquelas baseadas em arquitetura de microsserviços. Com o X-Ray, é possível entender o desempenho da aplicação e seus serviços subjacentes para identificar e solucionar a causa raiz de problemas de performance e erros. Ele oferece uma visão completa das requisições enquanto trafegam pela aplicação, mostrando um mapa dos componentes envolvidos, o que é essencial para diagnosticar erros como o código 501."
            }
        ],
        "glossary": [
            "AWS X-Ray: serviço de rastreamento e depuração da AWS que permite analisar o fluxo de requisições entre microsserviços, identificando gargalos, erros e dependências em aplicações distribuídas.",
            "AWS CloudTrail: serviço de auditoria e registro de chamadas de API feitas na conta AWS, útil para rastrear ações administrativas e garantir conformidade.",
            "Amazon API Gateway: serviço totalmente gerenciado que permite criar, publicar e proteger APIs REST, HTTP e WebSocket, atuando como ponto de entrada para aplicações baseadas em microsserviços.",
            "Amazon CloudWatch: ferramenta de monitoramento e observabilidade que coleta métricas, logs e eventos de recursos AWS e aplicações, permitindo alertas e dashboards personalizados.",
            "Código 501 (Not Implemented): erro HTTP que indica que o servidor não suporta ou não implementa a funcionalidade solicitada, geralmente causado por falhas de integração ou endpoints ausentes."
        ],
        "generalExplanation": [
            "Quando uma aplicação distribuída — composta por múltiplos microsserviços integrados via API Gateway — começa a retornar erros HTTP como 501 (Not Implemented), o diagnóstico requer visibilidade detalhada de todo o fluxo da requisição. O AWS X-Ray é a ferramenta mais adequada para essa tarefa, pois fornece rastreamento ponta a ponta (end-to-end tracing) das requisições, permitindo visualizar o caminho completo percorrido entre os serviços (API Gateway, Lambda, DynamoDB, etc.), o tempo de resposta de cada componente, o ponto exato onde o erro ou gargalo ocorre, e logs de exceções e stack traces detalhados. Dessa forma, o X-Ray permite identificar rapidamente o serviço que não está implementando a funcionalidade esperada, esclarecendo a origem do erro 501."
        ],
        "realWorld": [
            "Imagine uma aplicação serverless composta por um API Gateway que aciona várias funções Lambda, cada uma interagindo com DynamoDB, SQS e serviços externos. Usuários começam a relatar falhas com o código 501, mas os logs do CloudWatch não deixam claro onde o problema ocorre. Com o AWS X-Ray ativado no API Gateway e integrado às funções Lambda, o time de desenvolvimento pode visualizar o mapa de serviços (Service Map) gerado automaticamente pelo X-Ray, ver quais microsserviços estão respondendo com erro e o tempo de latência de cada trecho, identificar se o problema está em uma Lambda específica, em um endpoint ausente ou em um serviço externo não suportado, e corrigir o ponto exato da falha — por exemplo, uma rota não implementada ou uma dependência com API obsoleta. Essa visibilidade reduz drasticamente o tempo de resolução de incidentes e melhora o desempenho geral da aplicação."
        ]
    },
    {
        "id": 51,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Implantação",
        "prompt": "A equipe de desenvolvimento de uma empresa de TI utiliza o CloudFormation para gerenciar sua infraestrutura AWS. A equipe criou uma stack de rede contendo uma VPC com sub-redes e uma stack de aplicação web com instâncias EC2 e uma instância RDS. A equipe deseja referenciar a VPC criada na stack de rede dentro da stack da aplicação web. Como um profissional com certificação Developer Associate, qual das seguintes soluções você recomendaria para esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Criar uma referência entre stacks e usar o campo Outputs para expor o valor da VPC da stack de rede. Em seguida, usar a função intrínseca Ref para referenciar o valor da VPC na stack da aplicação web.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar uma referência entre stacks e usar o campo Export para expor o valor da VPC da stack de rede. Em seguida, usar a função intrínseca Ref para referenciar o valor da VPC na stack da aplicação web.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Criar uma referência entre stacks e usar o campo Export para expor o valor da VPC da stack de rede. Em seguida, usar a função intrínseca Fn::ImportValue para importar o valor da VPC na stack da aplicação web.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Criar uma referência entre stacks e usar o campo Outputs para expor o valor da VPC da stack de rede. Em seguida, usar a função intrínseca Fn::ImportValue para importar o valor da VPC na stack da aplicação web.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O campo Outputs sozinho não exporta valores para outras stacks. Além disso, a função Ref não pode ser usada para importar valores exportados de outras stacks, apenas para referenciar recursos dentro da mesma stack."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o campo Export seja usado para disponibilizar valores para outras stacks, a função Ref não pode importar esses valores exportados. Para importar valores exportados, deve-se usar a função Fn::ImportValue."
            },
            {
                "correct": true,
                "text": "Correta. O método adequado para compartilhar valores entre stacks no CloudFormation é exportar o valor usando o campo Export na stack de origem e importar esse valor usando a função Fn::ImportValue na stack de destino."
            },
            {
                "correct": false,
                "text": "Incorreta. O campo Outputs sozinho não exporta valores para outras stacks; para isso, é necessário usar o campo Export. Portanto, mesmo usando Fn::ImportValue, não será possível importar o valor corretamente."
            }
        ],
        "glossary": [
            "CloudFormation: serviço da AWS que permite o provisionamento automatizado e gerenciado de recursos de infraestrutura utilizando templates em JSON ou YAML.",
            "VPC (Virtual Private Cloud): rede virtual isolada dentro da AWS onde é possível definir sub-redes, rotas e políticas de segurança.",
            "Stack: conjunto de recursos AWS gerenciados como uma unidade lógica dentro do CloudFormation.",
            "Outputs: seção de um template CloudFormation que define valores de saída (como IDs de recursos) gerados após a criação da stack.",
            "Export: campo dentro de um Output que torna um valor disponível para outras stacks, permitindo compartilhamento entre elas.",
            "Ref: função intrínseca que retorna o valor de um recurso ou parâmetro, válida apenas dentro da mesma stack.",
            "Fn::ImportValue: função intrínseca que importa valores exportados por outras stacks, facilitando a integração modular entre elas."
        ],
        "generalExplanation": [
            "Quando é necessário compartilhar recursos entre diferentes stacks no AWS CloudFormation — por exemplo, reutilizar uma VPC já criada em outra stack — deve-se utilizar a combinação entre Export e Fn::ImportValue. Na stack de origem, o valor desejado (por exemplo, o ID da VPC) é definido na seção Outputs com um campo Export, que dá um nome único ao valor exportado. Na stack de destino, esse valor é recuperado usando a função Fn::ImportValue, que busca o nome do export e injeta o valor correspondente no template. A função Ref não é adequada para essa finalidade, pois ela só funciona dentro da mesma stack. Esse padrão de Export/Import permite modularizar a infraestrutura, promovendo reutilização, segurança e manutenção simplificada. Cada stack pode evoluir ou ser atualizada de forma independente, desde que as dependências exportadas permaneçam consistentes."
        ],
        "realWorld": [
            "Imagine uma equipe de DevOps que adota Infraestrutura como Código (IaC) para gerenciar ambientes em nuvem. Eles separam a infraestrutura em duas stacks: Stack de rede, que cria a VPC, sub-redes e tabelas de roteamento; e Stack de aplicação, que cria as instâncias EC2, balanceadores e bancos de dados. Na stack de rede, o time define: Outputs: VpcId: Description: ID da VPC principal, Value: !Ref MyVPC, Export: Name: VPC-ID-Principal. Na stack de aplicação, eles utilizam: Resources: MyEC2Instance: Type: AWS::EC2::Instance, Properties: SubnetId: !ImportValue VPC-ID-Principal. Com essa abordagem, a stack de aplicação reutiliza a VPC existente sem duplicar código nem recriar recursos. Essa prática é amplamente usada em ambientes corporativos com múltiplas equipes ou contas AWS segregadas, pois garante consistência, governança e manutenibilidade da infraestrutura."
        ]
    },
    {
        "id": 52,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você é um desenvolvedor da 'Movie Gallery', uma empresa que acabou de migrar para a nuvem. É necessário criar um banco de dados utilizando tecnologia NoSQL para armazenar filmes que serão listados para visualização pública. Você está em uma etapa importante do design do banco de dados com DynamoDB e precisa escolher a chave de partição apropriada. Qual dos seguintes atributos únicos atende a esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "producer_name",
                "correct": false
            },
            {
                "letter": "B",
                "text": "lead_actor_name",
                "correct": false
            },
            {
                "letter": "C",
                "text": "movie_id",
                "correct": true
            },
            {
                "letter": "D",
                "text": "movie_language",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O atributo producer_name não é adequado porque terá valores duplicados, resultando em baixa cardinalidade, o que pode causar hotspots e distribuição desigual dos dados no DynamoDB."
            },
            {
                "correct": false,
                "text": "Incorreta. O atributo lead_actor_name não é adequado porque muitos filmes podem ter o mesmo ator principal, resultando em valores duplicados e baixa cardinalidade, prejudicando a distribuição dos dados."
            },
            {
                "correct": true,
                "text": "Correta. O atributo movie_id possui alta cardinalidade, ou seja, valores únicos para cada item no banco de dados, tornando-o o candidato ideal para a chave de partição, garantindo uma distribuição uniforme dos dados entre as partições do DynamoDB."
            },
            {
                "correct": false,
                "text": "Incorreta. O atributo movie_language terá muitos valores repetidos, pois vários filmes podem estar no mesmo idioma, o que gera baixa cardinalidade e pode causar concentração de dados em poucas partições."
            }
        ],
        "glossary": [
            "DynamoDB: banco de dados NoSQL gerenciado pela AWS, que armazena dados em itens (linhas) e atributos (colunas), oferecendo alta disponibilidade e escalabilidade automática.",
            "Chave de partição (Partition Key): atributo usado para distribuir dados entre partições físicas, determinando onde cada item será armazenado no DynamoDB.",
            "Cardinalidade: medida da unicidade dos valores em um atributo; alta cardinalidade significa muitos valores distintos, o que ajuda a distribuir dados uniformemente.",
            "Partições: unidades físicas internas que armazenam itens no DynamoDB; o balanceamento de dados entre partições é essencial para performance.",
            "Hotspot: situação em que muitos dados ou acessos se concentram em uma única partição, causando gargalos de throughput."
        ],
        "generalExplanation": [
            "Para garantir desempenho e escalabilidade no DynamoDB, a chave de partição deve ter alta cardinalidade, distribuindo os itens uniformemente entre as partições e evitando hotspots. No exemplo apresentado, o atributo movie_id é único para cada filme, o que o torna ideal como partition key. Usar atributos com valores repetidos, como producer_name, movie_language ou lead_actor_name, poderia concentrar acessos em poucas partições, causando gargalos e degradando a performance. O DynamoDB utiliza uma hash function para mapear a partition key a uma partição física; assim, quanto mais distintos forem os valores da chave, melhor será a distribuição de dados."
        ],
        "realWorld": [
            "Em uma aplicação de streaming de filmes ou catálogo público, cada filme possui um movie_id único, que serve como chave de partição. Quando milhares de usuários acessam o catálogo simultaneamente, o DynamoDB distribui as requisições uniformemente entre as partições, evitando hotspots e garantindo baixa latência. Além disso, essa abordagem permite que a aplicação escale automaticamente conforme o tráfego aumenta, reduza custos em serverless architectures, pois o throughput provisionado ou on-demand é usado de forma eficiente, e mantenha alta disponibilidade sem intervenção manual na redistribuição de dados."
        ]
    },
    {
        "id": 53,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Como um AWS Certified Developer Associate, você está escrevendo um template CloudFormation em YAML. O template consiste na criação de uma instância EC2 e um recurso RDS. Após a criação dos recursos, você deseja exibir o endpoint de conexão do banco de dados RDS. Qual função intrínseca retorna o valor necessário para isso?",
        "options": [
            {
                "letter": "A",
                "text": "!FindInMap",
                "correct": false
            },
            {
                "letter": "B",
                "text": "!GetAtt",
                "correct": true
            },
            {
                "letter": "C",
                "text": "!Sub",
                "correct": false
            },
            {
                "letter": "D",
                "text": "!Ref",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A função Fn::FindInMap é usada para buscar valores em um mapa de duas camadas definido na seção Mappings do template, geralmente para obter valores estáticos baseados em chaves, como AMIs por região, e não para acessar atributos dinâmicos de recursos criados."
            },
            {
                "correct": true,
                "text": "Correta. A função intrínseca Fn::GetAtt retorna o valor de um atributo de um recurso definido no template. No caso do RDS, é possível obter o endpoint de conexão usando !GetAtt seguido do nome lógico do recurso e do atributo Endpoint.Address, que contém o DNS do banco de dados."
            },
            {
                "correct": false,
                "text": "Incorreta. A função Fn::Sub é utilizada para substituir variáveis dentro de uma string com valores especificados, útil para construir comandos ou strings de saída, mas não retorna atributos específicos de recursos como o endpoint do RDS."
            },
            {
                "correct": false,
                "text": "Incorreta. A função Ref retorna o valor padrão de um parâmetro ou o ID lógico de um recurso, mas não retorna atributos específicos como o endpoint do RDS. Para obter o endpoint, é necessário usar !GetAtt."
            }
        ],
        "glossary": [
            "Fn::GetAtt: função intrínseca do AWS CloudFormation usada para recuperar o valor de um atributo específico de um recurso definido no template, como o endpoint de um banco de dados RDS.",
            "Fn::FindInMap: função que busca valores em mapas estáticos definidos na seção Mappings, usada para obter dados baseados em chaves predefinidas.",
            "Fn::Sub: função que permite substituição de variáveis em strings, útil para compor comandos, mensagens ou nomes dinâmicos de recursos.",
            "Ref: função que retorna o identificador lógico de um recurso ou o valor padrão de um parâmetro, mas não acessa atributos detalhados de um recurso.",
            "Endpoint: endereço DNS gerado automaticamente para conexão a um banco de dados Amazon RDS, necessário para que aplicações se conectem ao banco."
        ],
        "generalExplanation": [
            "A função Fn::GetAtt é a opção correta quando se deseja obter atributos específicos de um recurso criado via CloudFormation — como o Endpoint.Address de um banco de dados Amazon RDS. Por exemplo: !GetAtt MyDatabase.Endpoint.Address, que retorna o endereço DNS que a aplicação deve usar para se conectar ao banco provisionado. As outras funções têm propósitos diferentes: Fn::FindInMap busca valores estáticos definidos manualmente, sem interagir com atributos dinâmicos de recursos; Fn::Sub apenas realiza substituições de variáveis em strings, útil para compor nomes ou caminhos; e Ref retorna o nome lógico ou ID do recurso, mas não acessa atributos como endpoints, ARNs ou portas."
        ],
        "realWorld": [
            "Imagine um desenvolvedor criando uma infraestrutura que inclui um banco de dados Amazon RDS para persistência de dados, uma instância EC2 (ou container ECS) que executa a aplicação backend, e um template CloudFormation que automatiza toda a configuração. Após o provisionamento, a aplicação precisa do endpoint do banco de dados para se conectar. Em vez de buscar esse valor manualmente no console da AWS, o desenvolvedor utiliza a função Fn::GetAtt para extrair automaticamente o atributo Endpoint.Address e expor o valor no Output do stack. Esse valor pode então ser consumido por outras stacks, pipelines do CodePipeline, ou até injetado automaticamente como variável de ambiente em aplicações Lambda, ECS ou EC2. Esse modelo elimina configurações manuais, evita erros humanos e garante que a aplicação sempre use o endpoint correto, mesmo após atualizações ou recriações do stack."
        ]
    },
    {
        "id": 54,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Implantação",
        "prompt": "Uma equipe de desenvolvimento criou templates do AWS CloudFormation que são reutilizáveis, aproveitando parâmetros de entrada para nomear recursos com base nos nomes dos clientes. Você deseja salvar seus templates na nuvem. Qual opção de armazenamento você deve escolher?",
        "options": [
            {
                "letter": "A",
                "text": "Amazon S3",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Amazon EFS",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Amazon ECR",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Amazon EBS",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O Amazon S3 é o serviço recomendado para armazenar templates do CloudFormation na nuvem. Quando você faz upload de um arquivo de template local, o CloudFormation o armazena em um bucket do S3 na sua conta AWS. Se não houver um bucket criado pelo CloudFormation, ele cria um bucket exclusivo para cada região onde o template é enviado, facilitando o gerenciamento e reutilização dos templates."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon EFS é um sistema de arquivos que pode ser montado em instâncias Amazon EC2 baseadas em Linux, mas não é adequado para armazenar templates do CloudFormation, pois não é integrado para esse propósito e não oferece os recursos de versionamento e acesso simplificado que o S3 proporciona."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon Elastic Container Registry (ECR) é um serviço gerenciado para armazenar imagens de contêiner Docker, não sendo aplicável para armazenamento de templates do CloudFormation, que são arquivos de texto JSON ou YAML."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon Elastic Block Store (EBS) fornece armazenamento em nível de bloco para instâncias EC2 e é indicado para dados que exigem acesso rápido e persistência de longo prazo, mas não é adequado para armazenar templates do CloudFormation, pois não é um serviço de armazenamento de objetos ou arquivos compartilhados."
            }
        ],
        "glossary": [
            "Amazon S3 (Simple Storage Service): Serviço de armazenamento de objetos altamente durável e escalável, ideal para armazenar e recuperar dados de qualquer tamanho, com integração nativa com diversos serviços AWS.",
            "AWS CloudFormation: Serviço que modela e provisiona recursos AWS automaticamente por meio de templates em JSON ou YAML, permitindo padronização e controle da infraestrutura como código (IaC).",
            "Amazon EFS (Elastic File System): Sistema de arquivos compartilhado que pode ser montado em várias instâncias EC2 Linux, usado para aplicações que exigem acesso simultâneo a dados.",
            "Amazon ECR (Elastic Container Registry): Repositório gerenciado para armazenar e versionar imagens de contêiner Docker, utilizado em pipelines de CI/CD e plataformas como ECS e EKS.",
            "Amazon EBS (Elastic Block Store): Serviço de armazenamento em blocos de alta performance vinculado a instâncias EC2, adequado para bancos de dados e aplicações transacionais."
        ],
        "generalExplanation": [
            "O Amazon S3 é o serviço recomendado para armazenar templates do AWS CloudFormation, pois combina alta durabilidade, disponibilidade global e integração nativa com o próprio CloudFormation. Ao armazenar os templates em buckets S3, é possível gerenciar versões e manter histórico de alterações dos templates, controlar permissões de acesso usando IAM policies ou bucket policies, e referenciar diretamente o template em implantações via URL do S3, sem depender de armazenamento local. Outros serviços não são apropriados para esse uso: Amazon EFS é destinado a sistemas de arquivos compartilhados, não para armazenar objetos versionados; Amazon ECR é focado em imagens de contêiner, não em arquivos de template; e Amazon EBS oferece volumes em bloco para EC2, não acessíveis diretamente via URL ou integráveis com CloudFormation."
        ],
        "realWorld": [
            "Em uma empresa que adota DevOps e IaC, é comum que equipes mantenham uma biblioteca de templates CloudFormation para criar ambientes padronizados (dev, stage, prod). Exemplo prático: os templates YAML são armazenados em um bucket S3 versionado (ex.: s3://infra-templates/cloudformation/). O AWS CloudFormation consome esses templates diretamente por URL: aws cloudformation create-stack --stack-name webapp-prod --template-url https://s3.amazonaws.com/infra-templates/cloudformation/webapp-template.yaml --parameters ParameterKey=Environment,ParameterValue=prod. As políticas de bucket garantem que apenas usuários e pipelines autorizados possam modificar os templates. Esse padrão facilita a integração com AWS CodePipeline, GitHub Actions ou AWS CodeBuild, permitindo que cada atualização do template no S3 dispare automaticamente uma implantação da infraestrutura."
        ]
    },
    {
        "id": 55,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você é um desenvolvedor em uma empresa de nuvem que adota arquitetura serverless. Você já realizou o deployment inicial e deseja avançar para adicionar estágios no API Gateway, associando-os a deployments existentes. Seus estágios incluirão prod, test e dev, e precisarão corresponder a variantes de funções Lambda que podem ser atualizadas ao longo do tempo. Quais dos seguintes recursos você deve adicionar para alcançar esse objetivo? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Versões do Lambda",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Templates de Mapeamento",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Aliases do Lambda",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Variáveis de Estágio",
                "correct": true
            },
            {
                "letter": "E",
                "text": "Integração Lambda com X-Ray",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Versões do Lambda são imutáveis e não podem ser atualizadas após a publicação, o que as torna inadequadas para gerenciar variantes que precisam ser atualizadas ao longo do tempo, como nos estágios prod, test e dev."
            },
            {
                "correct": false,
                "text": "Incorreta. Templates de mapeamento oferecem flexibilidade para transformar e mapear parâmetros de requisição e resposta, mas não são usados para associar estágios do API Gateway a versões mutáveis de funções Lambda nem para gerenciar variantes atualizáveis da função."
            },
            {
                "correct": true,
                "text": "Correta. Aliases do Lambda funcionam como ponteiros para versões específicas da função Lambda. Eles permitem criar versões 'mutáveis' que podem apontar para diferentes versões da função ao longo do tempo, facilitando a gestão de ambientes como dev, test e prod de forma estável."
            },
            {
                "correct": true,
                "text": "Correta. Variáveis de estágio são pares nome-valor configurados para cada estágio de deployment do API Gateway. Elas funcionam como variáveis de ambiente e permitem configurar endpoints backend diferentes para cada estágio, facilitando a associação a diferentes variantes de funções Lambda ou outros recursos."
            },
            {
                "correct": false,
                "text": "Incorreta. A integração do Lambda com X-Ray é útil para rastreamento e depuração de requisições, mas não tem relação direta com o gerenciamento de estágios do API Gateway ou com a associação a variantes atualizáveis da função Lambda."
            }
        ],
        "glossary": [
            "API Gateway: serviço gerenciado da AWS que permite criar, publicar, proteger e monitorar APIs RESTful e WebSocket, funcionando como um ponto de entrada centralizado para aplicações serverless e microsserviços.",
            "Variáveis de Estágio: pares nome-valor configuráveis por estágio no API Gateway, usados para parametrizar configurações específicas de cada ambiente (por exemplo, endpoints, aliases, chaves ou URIs).",
            "Aliases do Lambda: ponteiros mutáveis que referenciam versões específicas de uma função AWS Lambda. Permitem alterar o destino (versão) de uma integração sem precisar modificar a configuração da API ou do cliente.",
            "Versões do Lambda: snapshots imutáveis de uma função Lambda, representando um estado fixo do código e configurações (código, variáveis de ambiente, handler e timeout) em um determinado momento."
        ],
        "generalExplanation": [
            "A maneira mais eficaz de implementar múltiplos estágios (dev, test, prod) no API Gateway, mantendo controle sobre as versões do código Lambda, é combinando Aliases do Lambda com Variáveis de Estágio no API Gateway. Aliases do Lambda funcionam como ponteiros lógicos para versões específicas da função, permitindo que o API Gateway sempre invoque a versão correta (ex.: dev, test, prod). Isso significa que, ao publicar uma nova versão do código, o alias pode ser redirecionado para ela sem alterar a configuração da API, facilitando implantações contínuas e rollbacks rápidos. Variáveis de Estágio no API Gateway complementam esse processo, permitindo que cada estágio de deployment use valores diferentes para suas integrações, como o ARN do alias da função Lambda, endpoints externos ou chaves de autenticação. Por exemplo, a variável lambdaAlias pode ser usada no mapeamento de integração da API (arn:aws:lambda:region:account:function:myFunction:${stageVariables.lambdaAlias}), garantindo que cada ambiente aponte automaticamente para o alias correto."
        ],
        "realWorld": [
            "Imagine uma empresa que mantém uma API serverless composta por várias funções Lambda para processamento de pedidos. A equipe possui três ambientes: dev → para desenvolvimento e testes internos, test → para QA e validações integradas, prod → para o ambiente de produção. Cada estágio no API Gateway é configurado com uma variável de estágio (lambdaAlias) que indica o alias da função Lambda correspondente. A integração é feita com o ARN parametrizado: arn:aws:lambda:us-east-1:123456789012:function:ProcessOrder:${stageVariables.lambdaAlias}. Quando o time lança uma nova versão da função Lambda, basta atualizar o alias test para apontar para a nova versão, sem afetar os outros estágios (dev e prod). Isso permite testar novas releases de forma isolada, evitar downtime e regressões, e facilitar o rollback (basta redirecionar o alias novamente para a versão anterior)."
        ]
    },
    {
        "id": 56,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um desenvolvedor acabou de concluir a configuração do Application Load Balancer (ALB) para as instâncias EC2. Ao iniciar os testes, ele percebeu que esqueceu de associar grupos-alvo ao seu ALB. Qual código de erro ele deve esperar encontrar nos logs de depuração?",
        "options": [
            {
                "letter": "A",
                "text": "HTTP 504",
                "correct": false
            },
            {
                "letter": "B",
                "text": "HTTP 503",
                "correct": true
            },
            {
                "letter": "C",
                "text": "HTTP 500",
                "correct": false
            },
            {
                "letter": "D",
                "text": "HTTP 403",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. HTTP 504 indica 'Gateway Timeout'. Esse erro acontece quando o ALB não consegue estabelecer conexão com o destino dentro do tempo limite ou quando o destino não responde a tempo. Não é o erro esperado para a ausência de grupos-alvo."
            },
            {
                "correct": true,
                "text": "Correta. HTTP 503 indica 'Serviço indisponível'. No contexto do ALB, esse erro ocorre quando não há grupos-alvo registrados ou disponíveis para o balanceador de carga, ou seja, o ALB não consegue encaminhar o tráfego para nenhum destino válido."
            },
            {
                "correct": false,
                "text": "Incorreta. HTTP 500 indica um erro interno do servidor. Esse erro pode ocorrer por diversas razões, como uma requisição sem protocolo HTTP válida, falha na geração de uma URL de redirecionamento pelo load balancer, ou erro na execução das regras do AWS WAF (Web ACL). Não está relacionado à ausência de grupos-alvo no ALB."
            },
            {
                "correct": false,
                "text": "Incorreta. HTTP 403 indica que o acesso foi proibido. Esse erro ocorre quando uma lista de controle de acesso da AWS WAF (Web ACL) bloqueia uma requisição ao ALB. Não é o erro esperado quando não há grupos-alvo associados."
            }
        ],
        "glossary": [
            "Application Load Balancer (ALB): serviço gerenciado da AWS que distribui tráfego HTTP/HTTPS entre múltiplas instâncias EC2, containers ECS/EKS ou funções Lambda, garantindo alta disponibilidade e balanceamento inteligente de carga.",
            "Grupos-alvo (Target Groups): conjuntos de destinos (instâncias EC2, IPs, endpoints ou funções Lambda) que recebem o tráfego roteado pelo ALB com base em regras configuradas.",
            "HTTP 503 (Service Unavailable): código de status retornado quando não há destinos disponíveis ou nenhum grupo-alvo associado ao ALB.",
            "HTTP 500 (Internal Server Error): indica erro interno do servidor de backend, normalmente relacionado à lógica da aplicação.",
            "HTTP 403 (Forbidden): resposta quando o acesso é bloqueado por regras de segurança, como ACLs, AWS WAF ou políticas IAM incorretas.",
            "HTTP 504 (Gateway Timeout): ocorre quando o ALB encaminha a requisição, mas não recebe resposta dentro do tempo limite configurado."
        ],
        "generalExplanation": [
            "O erro HTTP 503 é o comportamento esperado quando o Application Load Balancer (ALB) não possui grupos-alvo válidos associados ou quando todos os destinos dentro do grupo estão indisponíveis (por exemplo, falharam nos health checks). Nesse cenário, o ALB não tem para onde encaminhar as requisições — e, portanto, retorna o status 503 Service Unavailable. Esse código não indica um erro na aplicação em si, mas sim na camada de balanceamento de carga ou configuração de destino. Os outros códigos citados representam condições diferentes: HTTP 500 → falha na aplicação backend, como exceções não tratadas ou erros de servidor; HTTP 403 → bloqueio de acesso devido a políticas de segurança (AWS WAF, IAM, ou Security Groups); HTTP 504 → timeout do backend, quando o ALB chegou a encaminhar a requisição, mas não recebeu resposta a tempo."
        ],
        "realWorld": [
            "Em um ambiente de produção, é comum que o ALB seja configurado para distribuir tráfego entre múltiplas instâncias EC2 ou containers ECS. Se o desenvolvedor criar o ALB mas esquecer de associar um grupo-alvo, ou se todas as instâncias do grupo estiverem com falha nos health checks, o ALB retornará 503 para todas as requisições de entrada. Por exemplo, uma aplicação web é implantada em containers ECS com um ALB na frente. Durante o deploy, o novo grupo-alvo é criado, mas as instâncias ainda não passaram nos health checks. O ALB, sem destinos saudáveis, começa a retornar HTTP 503 temporariamente. Para evitar isso, as equipes de DevOps podem usar o Amazon CloudWatch para monitorar métricas como TargetGroupHealthyHostCount e configurar alarmas automáticos, garantindo que novos deploys só sejam promovidos quando houver destinos saudáveis."
        ]
    },
    {
        "id": 57,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Segurança",
        "prompt": "Você é um desenvolvedor responsável por manter uma aplicação web escrita em .NET. A aplicação faz referências a objetos públicos em um bucket S3 público acessível via URL pública. Durante uma revisão de código, seu colega alerta que essa abordagem não é uma boa prática, pois alguns objetos contêm dados privados. Após o administrador tornar o bucket S3 privado, você não consegue mais acessar os objetos, mas deseja criar uma aplicação que permita que as pessoas acessem alguns objetos conforme necessário, com uma restrição de tempo. Qual das seguintes opções permitirá o acesso aos objetos?",
        "options": [
            {
                "letter": "A",
                "text": "Usar URL pré-assinada",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Usar política IAM",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar política de bucket",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar política de roteamento",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Por padrão, todos os objetos no S3 são privados, e somente o proprietário do objeto tem permissão para acessá-los. Contudo, o proprietário pode compartilhar objetos temporariamente criando uma URL pré-assinada, usando suas credenciais de segurança, que concede permissão limitada no tempo para baixar os objetos. Ao criar uma URL pré-assinada, é necessário fornecer as credenciais, nome do bucket, chave do objeto, método HTTP (GET para download) e o tempo de expiração. Essas URLs são válidas apenas pelo período especificado, permitindo controle de acesso granular e temporário."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível usar políticas IAM para conceder acesso a um bucket específico, elas não suportam restrições baseadas em tempo para acesso temporário. Portanto, para controle de acesso com limite de tempo, essa não é a melhor opção."
            },
            {
                "correct": false,
                "text": "Incorreta. Políticas de bucket podem restringir acesso, por exemplo, por endereço IP, mas não oferecem suporte nativo para restrições temporais. Para controle de acesso com limite de tempo, uma abordagem melhor é usar URLs pré-assinadas."
            },
            {
                "correct": false,
                "text": "Incorreta. Políticas de roteamento são aplicadas no DNS do Route 53 e não têm relação com controle de acesso a objetos no S3. Portanto, essa opção é inválida para o cenário apresentado."
            }
        ],
        "glossary": [
            "URL pré-assinada (Pre-signed URL): link temporário gerado pelo Amazon S3 que concede acesso controlado e limitado a um objeto privado por um período determinado, sem necessidade de alterar permissões globais.",
            "Política IAM: documento JSON que define permissões permanentes ou condicionais para identidades AWS (usuários, funções ou grupos), controlando o acesso a recursos.",
            "Política de bucket (Bucket Policy): conjunto de regras aplicadas diretamente ao bucket S3, determinando quem pode realizar ações sobre os objetos contidos nele.",
            "Política de roteamento: configuração de DNS no Amazon Route 53 usada para gerenciar o direcionamento de tráfego, sem relação com permissões de acesso a dados."
        ],
        "generalExplanation": [
            "Para compartilhar objetos privados do Amazon S3 de forma temporária e segura, a abordagem ideal é utilizar URLs pré-assinadas. Essas URLs são geradas por um usuário ou serviço autorizado e incluem credenciais temporárias e assinaturas criptográficas que permitem o acesso ao objeto apenas durante o período de validade configurado (por exemplo, 5 minutos, 1 hora ou 24 horas). Após a expiração, o link é invalidado automaticamente. Enquanto políticas IAM e políticas de bucket definem acessos fixos e contínuos, as URLs pré-assinadas oferecem controle dinâmico e granular, sem necessidade de modificar permissões globais. Isso é especialmente útil para compartilhar arquivos sob demanda com usuários externos, mantendo o bucket privado e protegido."
        ],
        "realWorld": [
            "Imagine uma equipe de desenvolvimento que mantém documentos confidenciais (por exemplo, relatórios ou imagens) em um bucket S3 privado. Quando um cliente solicita acesso a um documento específico, a aplicação pode gerar dinamicamente uma URL pré-assinada com expiração de 15 minutos. O cliente pode usar esse link para baixar o arquivo com segurança — sem tornar o bucket público e sem alterar políticas IAM. Por exemplo, em uma aplicação .NET ou Python, o desenvolvedor pode usar o SDK da AWS para gerar o link: s3.generate_presigned_url('get_object', Params={'Bucket': 'meu-bucket-privado', 'Key': 'relatorios/2025.pdf'}, ExpiresIn=900). Esse padrão também é amplamente utilizado em arquiteturas serverless, onde funções AWS Lambda geram URLs pré-assinadas para acesso sob demanda — por exemplo, em sistemas de upload de imagens, portais de download temporário ou integrações B2B."
        ]
    },
    {
        "id": 58,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Implantação",
        "prompt": "A equipe de desenvolvimento de uma empresa de comércio eletrônico deseja executar um serviço de armazenamento de dados serverless em dois containers Docker que compartilham recursos. Qual das seguintes configurações do ECS pode ser usada para facilitar esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Colocar os dois containers em duas definições de tarefa separadas usando o tipo de lançamento Fargate",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Colocar os dois containers em duas definições de tarefa separadas usando o tipo de lançamento EC2",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Colocar os dois containers em uma única definição de tarefa usando o tipo de lançamento EC2",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Colocar os dois containers em uma única definição de tarefa usando o tipo de lançamento Fargate",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Definições de tarefa separadas impedem o compartilhamento de recursos entre containers, o que não atende ao requisito, mesmo que o tipo de lançamento seja serverless."
            },
            {
                "correct": false,
                "text": "Incorreta. Usar definições de tarefa separadas impede o compartilhamento direto de recursos entre os containers e o tipo EC2 não é serverless, portanto não atende ao requisito."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora colocar os containers em uma única definição de tarefa permita o compartilhamento de recursos, o tipo de lançamento EC2 exige gerenciamento de instâncias e não é serverless, o que contraria o requisito do time."
            },
            {
                "correct": true,
                "text": "Correta. Colocar os dois containers em uma única definição de tarefa com o tipo de lançamento Fargate permite que eles compartilhem recursos de forma eficiente em uma infraestrutura serverless gerenciada pela AWS, atendendo ao requisito do time de desenvolvimento."
            }
        ],
        "glossary": [
            "ECS (Elastic Container Service): serviço gerenciado da AWS que orquestra containers Docker, permitindo o gerenciamento, escalonamento e implantação automatizada de aplicações conteinerizadas.",
            "Fargate Launch Type: modo de execução serverless do ECS, que elimina a necessidade de gerenciar instâncias EC2, provisionando automaticamente os recursos necessários para rodar os containers.",
            "EC2 Launch Type: modo de execução em que o usuário gerencia manualmente as instâncias EC2 que hospedam os containers, oferecendo mais controle, mas também maior complexidade operacional.",
            "Task Definition (Definição de Tarefa): documento JSON que define os containers que compõem uma tarefa, incluindo imagem, CPU, memória, variáveis de ambiente, volumes e portas expostas.",
            "Serverless: modelo de execução em que a infraestrutura é abstraída, permitindo que o desenvolvedor foque apenas no código e na lógica da aplicação, enquanto a AWS gerencia automaticamente a capacidade e escalabilidade."
        ],
        "generalExplanation": [
            "A configuração ideal neste cenário é colocar os dois containers na mesma definição de tarefa (Task Definition) e executá-los com o tipo de lançamento Fargate. Essa abordagem permite que ambos os containers: rodem juntos no mesmo ambiente lógico, compartilhando recursos como CPU, memória e rede; se comuniquem por localhost, sem necessidade de endpoints externos; e operem em um ambiente serverless, onde o desenvolvedor não precisa gerenciar servidores, AMIs, patches ou escalabilidade de instâncias. O Fargate Launch Type abstrai toda a camada de infraestrutura, garantindo simplicidade operacional, escalabilidade automática e cobrança precisa por uso de recursos."
        ],
        "realWorld": [
            "Imagine uma aplicação de comércio eletrônico que possui dois containers interdependentes: um container executando um serviço de API (backend), e outro container executando um serviço auxiliar, como cache, fila ou processamento local. Ao definir ambos na mesma Task Definition no ECS Fargate, eles são implantados juntos e compartilham a mesma interface de rede, permitindo que a API se comunique diretamente com o serviço auxiliar via localhost, sem necessidade de load balancer interno ou configurações complexas de rede. Essa abordagem é amplamente usada em arquiteturas de microserviços, pipelines CI/CD e ambientes de desenvolvimento serverless, pois reduz a sobrecarga operacional (sem EC2 para gerenciar), facilita deploys consistentes entre ambientes, permite atualizações independentes via versões de task definition, e garante custo otimizado e escalabilidade automática."
        ]
    },
    {
        "id": 59,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa multinacional mantém contas AWS separadas para diferentes verticais em sua organização. O gerente de projeto de uma equipe deseja migrar o ambiente Elastic Beanstalk da conta AWS da Equipe A para a conta AWS da Equipe B. Como Desenvolvedor, você foi chamado para ajudar nesse processo. Qual das opções a seguir você sugeriria?",
        "options": [
            {
                "letter": "A",
                "text": "Criar uma configuração salva na conta da Equipe A e configurá-la para exportação. Agora, faça login na conta da Equipe B e escolha a opção Importar. Aqui, você deve especificar o nome da configuração salva e permitir que o sistema crie a nova aplicação. Esse processo pode levar algum tempo dependendo das regiões das duas contas.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar uma configuração salva na conta da Equipe A e baixá-la para sua máquina local. Faça as alterações específicas da conta e faça o upload para um bucket S3 na conta da Equipe B. A partir do console do Elastic Beanstalk, crie uma aplicação a partir das 'Configurações Salvas'.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Não é possível migrar um ambiente Elastic Beanstalk de uma conta AWS para outra.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Criar uma configuração de exportação a partir do console do Elastic Beanstalk na conta da Equipe A. Essa configuração deve ser compartilhada com a Role IAM da conta da Equipe B. A opção de importação na conta da Equipe B mostrará a configuração salva, que pode ser usada para criar uma nova aplicação Beanstalk.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Não há uma opção nativa de importação direta no Elastic Beanstalk para configurações salvas entre contas. O processo envolve baixar a configuração, ajustar parâmetros e fazer upload manualmente."
            },
            {
                "correct": true,
                "text": "Correta. Essa é a abordagem recomendada para migrar ambientes Elastic Beanstalk entre contas AWS. As configurações salvas são arquivos YAML que definem a versão da plataforma, opções de configuração e tags. Você deve baixar a configuração, ajustar parâmetros específicos da nova conta (como nome de par de chaves, IDs de sub-rede, nomes de aplicação) e fazer upload para um bucket S3 da conta destino. Depois, crie a aplicação usando essa configuração salva."
            },
            {
                "correct": false,
                "text": "Incorreta. É possível migrar um ambiente Elastic Beanstalk entre contas AWS utilizando configurações salvas, portanto essa afirmação está incorreta."
            },
            {
                "correct": false,
                "text": "Incorreta. Não existe uma funcionalidade direta de exportação e importação entre contas no console do Elastic Beanstalk que funcione dessa forma. A migração requer o uso de configurações salvas baixadas e carregadas manualmente."
            }
        ],
        "glossary": [
            "Elastic Beanstalk: Serviço gerenciado da AWS que simplifica a implantação, gerenciamento e escalabilidade automática de aplicações web e serviços em diversas linguagens (Java, Python, Node.js, .NET, etc.).",
            "Configurações Salvas (Saved Configurations): Arquivos em formato YAML que armazenam as definições completas de um ambiente Elastic Beanstalk, incluindo versão de plataforma, parâmetros, variáveis de ambiente e recursos de infraestrutura associados.",
            "Bucket S3: Repositório de armazenamento de objetos utilizado para guardar os arquivos de configuração, código-fonte e logs do Elastic Beanstalk.",
            "IAM Role: Entidade que define um conjunto de permissões para que serviços (como Elastic Beanstalk) possam interagir com outros recursos AWS de forma segura e controlada."
        ],
        "generalExplanation": [
            "O Elastic Beanstalk não oferece uma ferramenta nativa no console para exportar e importar ambientes entre contas AWS. A prática recomendada para realizar essa migração é o uso das Configurações Salvas (Saved Configurations), que podem ser exportadas, ajustadas e reutilizadas em outra conta. O fluxo ideal é o seguinte: na conta de origem, o desenvolvedor cria uma Saved Configuration do ambiente existente. Essa configuração é baixada em formato YAML, contendo todas as definições do ambiente (plataforma, VPC, sub-redes, políticas, parâmetros, etc.). O arquivo é editado manualmente para refletir as diferenças da nova conta — como IDs de sub-rede, nomes de buckets, pares de chaves e roles IAM. O arquivo atualizado é carregado em um bucket S3 pertencente à conta de destino. Na conta de destino, cria-se um novo ambiente Elastic Beanstalk importando a configuração YAML do bucket S3."
        ],
        "realWorld": [
            "Em uma empresa que mantém múltiplas contas AWS (por exemplo, uma para desenvolvimento, outra para produção), é comum precisar replicar um ambiente Elastic Beanstalk entre contas. Exemplo prático: um desenvolvedor deseja migrar uma aplicação Node.js hospedada em Elastic Beanstalk da conta de desenvolvimento para a conta de produção. O processo seria: criar uma Saved Configuration na conta de desenvolvimento; baixar o arquivo YAML e editar valores específicos, como VPCId, Subnets e SecurityGroups (que variam por conta), InstanceProfile e ServiceRole (roles IAM específicos), e nomes de S3 buckets usados para armazenar artefatos de deploy; fazer upload do arquivo modificado em um bucket S3 da conta de produção; criar o novo ambiente no Elastic Beanstalk da conta destino, importando a configuração salva. O resultado é um ambiente idêntico ao original, porém adaptado à nova conta e região."
        ]
    },
    {
        "id": 60,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma aplicação de mídia utiliza uma distribuição Amazon CloudFront para distribuir conteúdo estático configurado em um bucket Amazon S3. A aplicação é utilizada em diferentes países e várias Regiões AWS. Algumas regiões têm experimentado latência quando ocorre um cache miss no CloudFront. Qual das seguintes alterações de configuração você sugeriria para diminuir a latência e melhorar a performance do usuário redirecionando as requisições em caso de cache miss para o bucket S3 na Região mais próxima do país do usuário?",
        "options": [
            {
                "letter": "A",
                "text": "Redirecionar as requisições em caso de cache miss para o bucket S3 mais próximo do país do usuário. Criar uma função CloudFront para redirecionar as requisições com base no valor do cabeçalho CloudFront-Viewer-Country. Associar a função CloudFront ao evento de viewer request da distribuição.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Redirecionar as requisições em caso de cache miss para o bucket S3 mais próximo do país do usuário. Criar uma função Lambda@Edge para redirecionar as requisições com base no valor do cabeçalho CloudFront-Viewer-Country. Associar a função Lambda@Edge ao evento de origin request da distribuição.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Redirecionar as requisições em caso de cache miss para o bucket S3 mais próximo do país do usuário. Criar uma função CloudFront para redirecionar as requisições com base no valor do cabeçalho CloudFront-Viewer-Country. Associar a função CloudFront ao evento de origin request da distribuição.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Redirecionar as requisições em caso de cache miss para o bucket S3 mais próximo do país do usuário. Criar uma função Lambda@Edge para redirecionar as requisições com base no valor do cabeçalho CloudFront-Viewer-Country. Associar a função Lambda@Edge ao evento de viewer request da distribuição.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora as CloudFront Functions possam ser associadas ao evento viewer request, esse evento ocorre para todas as requisições, não apenas para cache misses. Isso faria com que a função fosse executada em todas as requisições, o que não é eficiente para o caso de uso que visa otimizar apenas os cache misses. Além disso, CloudFront Functions têm limitações em relação à manipulação avançada de requisições comparado ao Lambda@Edge."
            },
            {
                "correct": true,
                "text": "Correta. Quando uma requisição do visualizador para o CloudFront resulta em um cache miss (o objeto solicitado não está em cache na localização edge), o CloudFront envia uma requisição para o origin para recuperar o objeto, chamado origin request. A função Lambda@Edge associada ao evento origin request pode modificar a requisição antes que ela seja enviada ao origin, permitindo redirecionar para o bucket S3 na Região mais próxima do usuário com base no cabeçalho CloudFront-Viewer-Country. Isso reduz a latência e melhora a performance, além de garantir soberania dos dados ao servir conteúdo de uma origem geograficamente próxima."
            },
            {
                "correct": false,
                "text": "Incorreta. As CloudFront Functions só podem ser associadas aos eventos viewer request e viewer response. Não suportam eventos origin request ou origin response. Portanto, não é possível usar uma CloudFront Function para modificar requisições no evento origin request, que é necessário para tratar cache misses e redirecionar para o origin correto."
            },
            {
                "correct": false,
                "text": "Incorreta. O evento viewer request é acionado para todas as requisições recebidas pelo CloudFront antes de verificar o cache, ou seja, independentemente de cache hit ou miss. Isso faria com que a função Lambda@Edge fosse executada em todas as requisições, aumentando a latência e o custo desnecessariamente. Para tratar especificamente cache misses, deve-se usar o evento origin request."
            }
        ],
        "glossary": [
            "CloudFront-Viewer-Country: Cabeçalho HTTP adicionado automaticamente pelo Amazon CloudFront que informa o país de origem do usuário final, permitindo personalização de conteúdo ou roteamento geográfico.",
            "Cache miss: Situação em que o conteúdo solicitado não está armazenado no cache do CloudFront, forçando uma requisição ao origin (ex.: bucket S3) para obter o conteúdo.",
            "Lambda@Edge: Serviço que permite executar funções AWS Lambda em edge locations do CloudFront, possibilitando lógica personalizada e manipulação avançada de requisições e respostas perto do usuário final.",
            "CloudFront Functions: Funções JavaScript leves executadas em edge locations com baixa latência, ideais para transformações simples, mas com suporte limitado a eventos.",
            "Origin request: Evento do CloudFront disparado somente quando ocorre cache miss, antes da requisição alcançar a origem, permitindo modificar ou redirecionar a requisição.",
            "Viewer request: Evento do CloudFront disparado toda vez que uma requisição chega ao CDN, antes da verificação do cache — útil para autenticação ou manipulação de cabeçalhos, mas mais custoso em frequência de execução."
        ],
        "generalExplanation": [
            "A alternativa correta é utilizar uma função Lambda@Edge associada ao evento origin request para redirecionar requisições de cache miss para o bucket S3 mais próximo da localização do usuário, com base no cabeçalho CloudFront-Viewer-Country. Essa escolha é a mais eficiente porque: o evento origin request é acionado apenas quando o conteúdo não está em cache, evitando execução desnecessária da função em todas as requisições; o Lambda@Edge suporta esse evento e permite lógica condicional avançada, como redirecionar usuários de acordo com a região detectada (por exemplo, enviar usuários do Brasil ao bucket S3 localizado em São Paulo); as CloudFront Functions não suportam o evento origin request e são limitadas a cenários simples de viewer request e viewer response, sem interação com o origin; executar a função em viewer request causaria execução em 100% das requisições, mesmo quando o conteúdo já está em cache, aumentando latência e custo sem benefício."
        ],
        "realWorld": [
            "Imagine uma plataforma de streaming global que utiliza CloudFront e Amazon S3 para servir vídeos e imagens. Quando ocorre um cache miss, usuários na Ásia podem sofrer latência perceptível se o bucket de origem estiver na América do Norte. Ao implementar uma função Lambda@Edge no evento origin request, o CloudFront pode redirecionar automaticamente essas requisições para o bucket S3 replicado na região mais próxima (ex.: Tóquio, Singapura, Frankfurt, São Paulo), utilizando o cabeçalho CloudFront-Viewer-Country para identificar a origem geográfica. Exemplo simplificado de lógica Lambda@Edge: def handler(event, context): request = event['Records'][0]['cf']['request']; country = request['headers'].get('cloudfront-viewer-country', [{'value': 'US'}])[0]['value']; if country == 'BR': request['origin']['s3']['domainName'] = 'meu-bucket-sa-east-1.s3.amazonaws.com'; elif country == 'DE': request['origin']['s3']['domainName'] = 'meu-bucket-eu-central-1.s3.amazonaws.com'; return request. Esse tipo de configuração reduz significativamente a latência percebida pelos usuários globais, melhora a disponibilidade, já que o failover ocorre automaticamente entre buckets regionais, e atende requisitos de soberania de dados, direcionando o tráfego de acordo com políticas regionais."
        ]
    },
    {
        "id": 61,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma equipe de desenvolvimento está configurando o Amazon Kinesis Data Streams para ingestão de dados em tempo real provenientes de diversos aparelhos. A equipe definiu a capacidade de shards como um para testar a configuração. O que acontece se os limites de capacidade de um stream de dados do Amazon Kinesis forem excedidos enquanto o produtor de dados adiciona dados ao stream?",
        "options": [
            {
                "letter": "A",
                "text": "As chamadas de put data serão rejeitadas com uma exceção ProvisionedThroughputExceeded.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Os dados são perdidos a menos que a chave de partição dos registros seja alterada para que os dados sejam escritos em um shard diferente no stream.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Entre em contato com o suporte da AWS para solicitar um aumento no número de shards.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "As chamadas de put data serão rejeitadas com uma exceção AccessDeniedException assim que o limite for atingido.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Os limites de capacidade de um stream do Kinesis são definidos pelo número de shards. Quando esses limites são ultrapassados, as chamadas para adicionar dados (put data) são rejeitadas com a exceção ProvisionedThroughputExceeded. Em casos de aumento temporário da taxa de entrada, a repetição das chamadas pelo produtor pode resolver o problema. Se o aumento for sustentado, é necessário aumentar o número de shards para garantir capacidade suficiente."
            },
            {
                "correct": false,
                "text": "Incorreta. A chave de partição é usada para distribuir os registros entre os shards, mas alterar a chave de partição não cria shards adicionais. Com apenas um shard provisionado, mudar a chave de partição não evita o estouro de capacidade nem a perda de dados."
            },
            {
                "correct": false,
                "text": "Incorreta. O aumento do número de shards é uma ação que o próprio usuário pode realizar diretamente pelo console ou API da AWS. Não é necessário contatar o suporte para isso, tornando esta opção incorreta."
            },
            {
                "correct": false,
                "text": "Incorreta. A exceção AccessDeniedException ocorre quando o sistema não tem permissões suficientes para executar a operação. Como a ingestão de dados estava ocorrendo antes do limite ser atingido, essa exceção não é aplicável neste contexto."
            }
        ],
        "glossary": [
            "Amazon Kinesis Data Streams: serviço gerenciado da AWS para ingestão, processamento e análise de dados em tempo real, capaz de lidar com fluxos contínuos de eventos ou métricas em larga escala.",
            "Shard: unidade básica de capacidade em um stream Kinesis. Cada shard oferece um throughput máximo de 1 MB/s de escrita e 2 MB/s de leitura, além de 1.000 registros de escrita por segundo.",
            "Chave de partição (Partition Key): identificador usado para distribuir registros entre shards; dados com a mesma chave são roteados para o mesmo shard, preservando a ordem.",
            "ProvisionedThroughputExceeded: exceção retornada quando a aplicação excede o limite de leitura ou gravação de um shard — indicando saturação de capacidade.",
            "AccessDeniedException: erro que ocorre quando a operação falha devido a permissões IAM insuficientes, e não por limitação de throughput."
        ],
        "generalExplanation": [
            "Quando um stream do Amazon Kinesis Data Streams atinge o limite de capacidade de um shard, o serviço retorna a exceção ProvisionedThroughputExceeded. Isso ocorre quando as taxas de gravação (PutRecord ou PutRecords) ou de leitura (GetRecords) ultrapassam os limites configurados por shard. Cada shard possui capacidade fixa; portanto, mudar a chave de partição não cria shards adicionais e não resolve o problema. O ajuste de capacidade deve ser feito por meio do redimensionamento do stream, adicionando shards manualmente ou usando Auto Scaling via Kinesis Scaling Utility ou Application Auto Scaling. Também é importante diferenciar: ProvisionedThroughputExceeded → indica limite de desempenho atingido; requer escalabilidade; AccessDeniedException → indica erro de permissão IAM; requer ajuste de políticas. Para lidar com picos temporários de tráfego, a AWS recomenda implementar retries com backoff exponencial, reduzindo a taxa de novas tentativas e permitindo a recuperação automática do stream sem perda de dados."
        ],
        "realWorld": [
            "Imagine uma empresa que desenvolve uma aplicação IoT para coletar dados de milhares de sensores em tempo real. Inicialmente, o stream do Kinesis Data Streams é configurado com apenas dois shards. Conforme o número de dispositivos cresce, o volume de eventos ultrapassa a capacidade de gravação — resultando em erros ProvisionedThroughputExceeded. Para resolver o problema, o desenvolvedor monitora métricas do CloudWatch, como WriteProvisionedThroughputExceeded e ReadProvisionedThroughputExceeded; implementa backoff exponencial no código produtor, permitindo que o sistema reenvie dados gradualmente; e aumenta o número de shards (por exemplo, de 2 para 8) usando o Kinesis UpdateShardCount API para escalar horizontalmente o stream. Em pipelines de dados serverless, como integrações com AWS Lambda, Amazon S3 e Amazon Redshift, essa prática garante resiliência, escalabilidade e continuidade do fluxo de dados."
        ]
    },
    {
        "id": 62,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma aplicação de comércio eletrônico grava arquivos de log no Amazon S3. A aplicação também lê esses arquivos de log em paralelo, quase em tempo real. A equipe de desenvolvimento deseja evitar quaisquer discrepâncias de dados que possam ocorrer quando a aplicação sobrescreve um arquivo de log existente e, em seguida, tenta ler esse arquivo específico. Qual das opções a seguir MELHOR descreve as capacidades do Amazon S3 relevantes para esse cenário?",
        "options": [
            {
                "letter": "A",
                "text": "Um processo substitui um objeto existente e tenta lê-lo imediatamente. O Amazon S3 sempre retorna a versão mais recente do objeto.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Um processo substitui um objeto existente e tenta lê-lo imediatamente. Até que a alteração seja totalmente propagada, o Amazon S3 pode retornar os dados anteriores.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Um processo substitui um objeto existente e tenta lê-lo imediatamente. Até que a alteração seja totalmente propagada, o Amazon S3 não retorna nenhum dado.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Um processo substitui um objeto existente e tenta lê-lo imediatamente. Até que a alteração seja totalmente propagada, o Amazon S3 pode retornar os novos dados.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O Amazon S3 oferece consistência forte para leituras após gravações, o que significa que qualquer leitura subsequente a uma gravação ou sobrescrição de objeto retorna imediatamente a versão mais atualizada do objeto, sem atrasos ou dados inconsistentes."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon S3 não retorna dados antigos após a gravação ser concluída, pois oferece consistência forte para leituras e gravações, garantindo que a leitura sempre reflita a última versão do objeto."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon S3 não bloqueia a leitura retornando nenhum dado durante a propagação da alteração. Ele garante consistência forte, ou seja, a leitura sempre retorna dados válidos e atualizados após a gravação ser concluída."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o Amazon S3 retorne os dados mais recentes imediatamente após a gravação, a expressão 'pode retornar' sugere inconsistência ou comportamento eventual, o que não ocorre, pois o S3 garante consistência forte."
            }
        ],
        "glossary": [
            "Amazon S3 (Simple Storage Service): Serviço de armazenamento de objetos altamente escalável e durável da AWS, que permite armazenar e recuperar qualquer quantidade de dados a qualquer momento.",
            "Consistência forte (Strong Consistency): Garantia de que leituras subsequentes a uma gravação ou exclusão retornam imediatamente a versão mais recente dos dados, sem atrasos de propagação.",
            "Objeto: Unidade básica de armazenamento no Amazon S3, composta por dados (payload) e metadados (informações adicionais, como tipo de conteúdo e permissões).",
            "Propagação: Processo de distribuição de atualizações em sistemas distribuídos, que pode gerar atrasos em modelos de consistência eventual — mas não ocorre em operações do S3 devido à consistência forte."
        ],
        "generalExplanation": [
            "O Amazon S3 oferece consistência forte tanto para leituras após gravações (PUT) quanto para leituras após exclusões (DELETE). Isso significa que, assim que um objeto é criado, atualizado ou removido, qualquer leitura subsequente (GET ou LIST) refletirá imediatamente a versão mais recente da operação, sem risco de retornar dados desatualizados. Esse comportamento é fundamental em aplicações que dependem de sincronização imediata entre gravação e leitura, como sistemas de monitoramento em tempo real, processamento de logs, e-commerce e pipelines de dados. Alternativas que afirmam que o S3 pode retornar dados antigos, ou que existe um tempo de propagação entre regiões ou nós de armazenamento, estão incorretas — esse comportamento fazia parte do modelo antigo de consistência eventual (antes de 2020). Atualmente, o S3 garante consistência forte globalmente, eliminando a necessidade de lógica adicional de sincronização por parte do desenvolvedor."
        ],
        "realWorld": [
            "Imagine um pipeline de análise de logs serverless em que funções AWS Lambda processam arquivos recém-criados no Amazon S3. Cenário prático: uma aplicação grava um arquivo de log (logs/app-activity.json) no bucket S3. Um evento s3:ObjectCreated aciona automaticamente uma função Lambda para ler o arquivo. Graças à consistência forte, a função Lambda lê imediatamente a versão mais recente do arquivo — sem risco de processar dados incompletos ou desatualizados. Esse comportamento é crucial em sistemas que exigem resposta em tempo real, como plataformas de e-commerce, que gravam e analisam eventos de compra instantaneamente; soluções de observabilidade, que processam logs ou métricas assim que são gerados; e ETL serverless, onde múltiplas funções leem e escrevem dados simultaneamente em buckets compartilhados. Além disso, a consistência forte do S3 simplifica o design da aplicação, pois elimina a necessidade de mecanismos de sincronização (como polling ou delays artificiais) e reprocessamentos para garantir integridade dos dados."
        ]
    },
    {
        "id": 63,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa multinacional executa suas operações de tecnologia na AWS Cloud. Como parte da solução de armazenamento, ela utiliza um grande número de volumes EBS, com AWS Config e CloudTrail ativados. Um gerente tentou encontrar o nome do usuário que criou um volume EBS buscando nos logs de eventos do CloudTrail, mas não obteve sucesso. Como um Associate Developer, qual das seguintes opções você recomendaria como a solução correta para esse problema?",
        "options": [
            {
                "letter": "A",
                "text": "As verificações de status do volume EBS estão desativadas.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O evento 'CreateVolume' no AWS CloudTrail é gerado pelo serviço EC2 quando um volume EBS é criado automaticamente durante o lançamento de uma instância, portanto, o usuário que iniciou a criação do volume deve ser identificado pelo evento de criação da instância EC2, não pelo evento 'CreateVolume' isoladamente.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "As métricas do Amazon EBS no CloudWatch estão desativadas.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Os logs de eventos do AWS CloudTrail para 'ManageVolume' não estão disponíveis para volumes EBS criados durante o lançamento de uma instância Amazon EC2.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. As verificações de status do volume EBS ajudam a monitorar a integridade e possíveis inconsistências dos dados no volume, mas não fornecem informações sobre o usuário que criou o volume ou metadados relacionados à criação. Portanto, essa opção não resolve o problema de rastreamento solicitado."
            },
            {
                "correct": true,
                "text": "Correta. O CloudTrail registra o evento 'CreateVolume' mesmo para volumes criados automaticamente durante o lançamento da instância EC2, mas esse evento é emitido pelo serviço EC2 em nome do usuário. Por isso, para identificar o usuário que originou a criação do volume, é necessário analisar o evento de criação da instância EC2, que contém a informação do usuário que iniciou a ação."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o Amazon EBS envie métricas para o CloudWatch, essas métricas são relacionadas ao desempenho e estado dos volumes quando anexados a instâncias, e não fornecem informações sobre metadados ou o usuário que criou o volume. Portanto, desativar as métricas do CloudWatch não impacta a capacidade de rastrear a criação do volume via CloudTrail."
            },
            {
                "correct": false,
                "text": "Incorreta. O evento 'ManageVolume' não existe no AWS CloudTrail e foi incluído como uma alternativa para confundir. Portanto, não é uma opção válida para rastreamento de criação ou gerenciamento de volumes EBS."
            }
        ],
        "glossary": [
            "AWS CloudTrail: serviço que registra e armazena logs de chamadas de API feitas em recursos AWS, permitindo auditoria, rastreamento e investigação de ações realizadas por usuários, funções ou serviços.",
            "CreateVolume: ação da API AWS que cria um volume EBS; pode ser executada diretamente por um usuário ou automaticamente pelo serviço EC2 durante o lançamento de uma instância.",
            "Amazon EC2 (Elastic Compute Cloud): serviço de computação em nuvem escalável da AWS que permite executar instâncias virtuais e anexar volumes EBS para armazenamento persistente.",
            "EBS (Elastic Block Store): serviço de armazenamento em nível de bloco que fornece volumes persistentes e duráveis para instâncias EC2.",
            "CloudWatch: serviço de monitoramento de métricas e logs operacionais da AWS, voltado para desempenho e disponibilidade, não para auditoria.",
            "Verificações de status de volume (EBS Status Checks): testes automáticos de integridade e saúde de volumes EBS, sem relação com eventos de criação ou rastreamento de usuários."
        ],
        "generalExplanation": [
            "Quando um volume EBS é criado, seja manualmente ou automaticamente durante o lançamento de uma instância EC2, o evento correspondente CreateVolume é registrado pelo AWS CloudTrail. Entretanto, há um detalhe importante: quando a criação do volume é automática, o evento é gerado pelo serviço EC2 em nome do usuário que iniciou o processo de criação da instância — ou seja, o usuário não é o originador direto do evento CreateVolume, mas sim o serviço EC2 agindo em seu nome. Para identificar quem efetivamente iniciou a criação do volume, é necessário: localizar no CloudTrail o evento CreateVolume; observar que o 'userIdentity' indica o serviço ec2.amazonaws.com; e procurar o evento RunInstances correspondente, que contém a informação do usuário original que acionou a criação da instância — e, consequentemente, do volume associado."
        ],
        "realWorld": [
            "Em empresas com múltiplos times e contas AWS, volumes EBS são frequentemente criados de forma automática ao iniciar instâncias EC2 — por exemplo, durante o provisionamento de ambientes de teste, pipelines de CI/CD ou execuções batch. Quando surge a necessidade de auditar quem iniciou a criação de um volume, o engenheiro de operações pode usar o CloudTrail para rastrear o evento: verifica o evento CreateVolume para identificar o momento e a origem da criação; identifica que o serviço EC2 executou a ação; e segue o encadeamento até o evento RunInstances, onde encontra o usuário ou função IAM que disparou a criação original. Por exemplo, em um ambiente de processamento batch, onde instâncias EC2 são lançadas automaticamente via scripts ou ferramentas como AWS CloudFormation ou Auto Scaling Groups, o time de DevOps pode usar essa análise no CloudTrail para garantir governança e conformidade — assegurando que apenas usuários autorizados estejam gerando recursos, evitando custos desnecessários e fortalecendo a segurança operacional."
        ]
    },
    {
        "id": 64,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um desenvolvedor da sua empresa configurou uma build usando o AWS CodeBuild. A build falha e o desenvolvedor precisa solucionar rapidamente o problema para identificar quais comandos ou configurações no arquivo BuildSpec estão causando o erro. Qual abordagem ajudará a alcançar esse objetivo?",
        "options": [
            {
                "letter": "A",
                "text": "Habilitar monitoramento detalhado",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Conectar via SSH no container Docker do CodeBuild",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Congelar o CodeBuild durante sua próxima execução",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Executar o AWS CodeBuild localmente usando o agente CodeBuild",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O monitoramento detalhado é um recurso disponível para instâncias EC2 e não para builds do CodeBuild. Embora seja possível capturar logs e eventos via AWS CloudTrail para auditoria, isso não ajuda diretamente na depuração dos comandos do arquivo BuildSpec durante a execução da build."
            },
            {
                "correct": false,
                "text": "Incorreta. Não é possível acessar via SSH o container Docker usado pelo CodeBuild, pois o ambiente é gerenciado e isolado. Por isso, a melhor prática é testar e corrigir erros localmente usando o agente CodeBuild."
            },
            {
                "correct": false,
                "text": "Incorreta. Não é possível congelar o processo do CodeBuild durante a execução. É possível interromper uma build em execução, mas isso não ajuda na identificação dos erros no arquivo BuildSpec."
            },
            {
                "correct": true,
                "text": "Correta. O AWS CodeBuild é um serviço totalmente gerenciado, sem necessidade de provisionar servidores. Com o suporte a builds locais, é possível executar o CodeBuild em uma máquina local usando o agente CodeBuild, permitindo testar e depurar os scripts de build e o arquivo BuildSpec antes de enviar o código. Isso facilita identificar e corrigir erros rapidamente no ambiente de desenvolvimento local."
            }
        ],
        "glossary": [
            "AWS CodeBuild: serviço gerenciado da AWS que compila código-fonte, executa testes e gera artefatos de software para implantação em ambientes como ECS, Lambda ou EC2.",
            "BuildSpec: arquivo no formato YAML (geralmente buildspec.yml) que define as fases, comandos e variáveis que o CodeBuild deve executar durante o ciclo de build, incluindo instalação, compilação, teste e empacotamento.",
            "Agente CodeBuild: ferramenta disponibilizada pela AWS que permite executar localmente builds do CodeBuild, simulando o ambiente da nuvem para testes e depuração antes da execução real no serviço.",
            "Container Docker: ambiente isolado e padronizado em que o CodeBuild executa builds, garantindo reprodutibilidade e consistência entre execuções locais e na nuvem."
        ],
        "generalExplanation": [
            "A forma mais eficiente de identificar e corrigir erros no arquivo BuildSpec durante uma falha de build no AWS CodeBuild é executar o processo localmente com o Agente CodeBuild. O Agente CodeBuild permite replicar exatamente o ambiente de build da AWS em um container Docker local, incluindo a mesma versão do runtime, sistema operacional e variáveis de ambiente usadas no CodeBuild. Isso facilita a depuração, pois o desenvolvedor pode executar e ajustar comandos do buildspec.yml passo a passo, ver logs em tempo real diretamente no terminal, e corrigir erros de sintaxe YAML, variáveis incorretas ou paths inválidos antes de enviar o código para a nuvem."
        ],
        "realWorld": [
            "Em equipes que utilizam pipelines automatizados com AWS CodePipeline + CodeBuild, é comum ocorrerem falhas causadas por comandos incorretos, dependências ausentes ou erros de sintaxe no arquivo buildspec.yml. Reexecutar builds na nuvem várias vezes aumenta custos e tempo de entrega. Usando o Agente CodeBuild localmente, o desenvolvedor pode baixar e instalar o agente oficial (disponível no GitHub da AWS), executar o comando docker run -it -v '$(pwd)':/LocalBuild -e 'IMAGE=aws/codebuild/standard:7.0' amazon/aws-codebuild-local:latest -i aws/codebuild/standard:7.0 -s /LocalBuild, e validar o buildspec.yml, ajustar scripts, testar variáveis de ambiente e garantir que todos os comandos funcionem antes de enviar o código para o repositório. Por exemplo, em um projeto serverless com AWS Lambda, o desenvolvedor pode testar a fase de build e empacotamento do código localmente, verificando se a geração do arquivo .zip está correta antes da implantação."
        ]
    },
    {
        "id": 65,
        "title": "Exame 6 - AWS Certified Developer Associate (DVA-C02) - Resultados",
        "domain": "Implantação",
        "prompt": "Uma empresa de varejo gerencia sua infraestrutura de TI na AWS Cloud utilizando o Elastic Beanstalk. A equipe de desenvolvimento planeja implantar a próxima versão da aplicação com o MÍNIMO tempo de inatividade e a capacidade de realizar rollback rapidamente caso a implantação apresente problemas. Como um Associate Developer, qual das seguintes opções você recomendaria para a equipe de desenvolvimento?",
        "options": [
            {
                "letter": "A",
                "text": "Implantar a nova versão da aplicação utilizando a política de implantação 'Rolling with additional batch' (Implantação em lotes com lote adicional).",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Implantar a nova versão da aplicação utilizando a política de implantação 'All at once' (Tudo de uma vez).",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Implantar a nova versão da aplicação utilizando a política de implantação 'Rolling' (Implantação em lotes).",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Implantar a nova versão em um ambiente separado via Blue/Green Deployment e, em seguida, trocar os registros do Route 53 entre os dois ambientes para redirecionar o tráfego para a nova versão.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Essa política evita qualquer redução de disponibilidade, mas aumenta o tempo total de implantação. O rollback também é manual e não tão rápido quanto o Blue/Green Deployment, não satisfazendo o requisito de rollback ágil."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora a implantação 'All at once' seja a mais rápida, ela pode causar indisponibilidade temporária da aplicação para os usuários, pois atualiza todas as instâncias simultaneamente, o que não atende ao requisito de mínimo downtime."
            },
            {
                "correct": false,
                "text": "Incorreta. A implantação 'Rolling' evita o downtime e reduz a indisponibilidade, porém o processo de rollback não é imediato, pois requer uma nova implantação manual, o que não atende à necessidade de rollback rápido."
            },
            {
                "correct": true,
                "text": "Correta. O Blue/Green Deployment permite implantar a nova versão em um ambiente isolado, evitando downtime. A troca rápida dos registros DNS no Route 53 redireciona instantaneamente o tráfego para a nova versão, possibilitando rollback imediato ao reverter a troca, atendendo aos requisitos da equipe."
            }
        ],
        "glossary": [
            "Elastic Beanstalk: serviço gerenciado da AWS que facilita a implantação, gerenciamento e escalabilidade automática de aplicações web e serviços em várias linguagens, abstraindo a complexidade da infraestrutura.",
            "Blue/Green Deployment: estratégia de implantação que cria dois ambientes separados (Blue e Green), permitindo testes isolados e rollback rápido, alternando o tráfego entre eles para reduzir downtime.",
            "Route 53: serviço de DNS da AWS que gerencia o roteamento de tráfego da internet para recursos na AWS, permitindo alteração dinâmica de registros para direcionar usuários a diferentes ambientes.",
            "All at once: política que atualiza todas as instâncias simultaneamente, podendo causar indisponibilidade temporária.",
            "Rolling Deployment: atualização gradual em lotes de instâncias para reduzir downtime, porém com rollback menos imediato.",
            "Rolling with additional batch: variação do rolling deployment que adiciona um lote extra para manter a capacidade durante a atualização, aumentando o tempo total de implantação.",
            "Rollback: processo de reversão da aplicação para uma versão anterior em caso de falhas ou problemas na nova versão."
        ],
        "generalExplanation": [
            "A estratégia mais adequada para cenários que exigem mínimo tempo de inatividade e rollback rápido é o Blue/Green Deployment. O Elastic Beanstalk cria um novo ambiente (Green) com a versão atualizada da aplicação, isolado do ambiente Blue em produção. É possível testar e validar o novo ambiente antes de redirecionar o tráfego. O redirecionamento é feito rapidamente por meio de alteração de registros DNS no Route 53, garantindo disponibilidade contínua. Caso haja problemas na nova versão, o rollback é imediato ao retornar o tráfego para o ambiente Blue. Outras políticas, como All at once ou Rolling Deployment, podem reduzir downtime parcial, mas não oferecem rollback instantâneo nem isolamento completo, aumentando o risco de impactar usuários finais."
        ],
        "realWorld": [
            "Em uma aplicação web crítica hospedada no Elastic Beanstalk, a equipe de desenvolvimento pode lançar uma atualização com novas funcionalidades usando Blue/Green Deployment: cria-se o ambiente Green com a nova versão da aplicação; executam-se testes de integração, performance e segurança no Green; o tráfego é redirecionado via Route 53 do ambiente Blue para o Green, tornando a nova versão ativa; se forem detectados problemas, o rollback é feito rapidamente ao voltar o tráfego para o ambiente Blue. Essa estratégia minimiza downtime e risco para o usuário final, permite validação completa antes da exposição em produção, simplifica a automação de deploys com Elastic Beanstalk e Route 53, e é essencial para aplicações high-availability em que indisponibilidade pode afetar receita ou reputação."
        ]
    }
];
