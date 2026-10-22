const originalQuestions = [
    {
        "id": 1,
        "title": "Pergunta 1",
        "domain": "Segurança",
        "prompt": "Dois policies estão anexadas a um usuário IAM. A primeira policy declara que o usuário tem explicitamente negado todo acesso a instâncias EC2. A segunda policy declara que o usuário tem permissão para a ação EC2:Describe. Quando o usuário tenta executar a ação 'Describe' em uma instância EC2 usando a CLI, qual será o resultado?",
        "options": [
            {
                "letter": "A",
                "text": "O usuário IAM está em um estado inválido devido a políticas conflitantes.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O usuário terá acesso negado porque uma das policies contém uma negação explícita.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "O usuário terá acesso porque possui uma permissão explícita de allow.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "A ordem das policies importa. Se a policy 1 estiver antes da 2, o usuário terá acesso negado. Se a policy 2 estiver antes da 1, o usuário terá acesso permitido.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Um usuário IAM não fica em estado inválido por ter políticas conflitantes. O sistema de avaliação de políticas do IAM resolve conflitos aplicando a regra de que uma negação explícita sempre prevalece sobre permissões concedidas."
            },
            {
                "correct": true,
                "text": "Correta. No IAM, uma negação explícita em qualquer policy sempre substitui permissões de allow. Portanto, o usuário será negado o acesso à ação EC2:Describe."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o usuário tenha uma permissão explícita de allow para a ação EC2:Describe, uma negação explícita em outra policy sempre prevalece e, portanto, o acesso será negado."
            },
            {
                "correct": false,
                "text": "Incorreta. A ordem das policies não influencia na avaliação das permissões. No IAM, uma negação explícita sempre prevalece sobre qualquer permissão concedida, independentemente da ordem das policies."
            }
        ],
        "glossary": [
            "IAM (Identity and Access Management): Serviço da AWS responsável por gerenciar identidades e controlar o acesso a recursos por meio de políticas baseadas em permissões.",
            "Policy: Documento em formato JSON que define ações permitidas (Allow) ou negadas (Deny) para recursos específicos da AWS.",
            "Explicit Deny (negação explícita): Regra que bloqueia o acesso a uma ação ou recurso; tem precedência absoluta sobre qualquer permissão concedida.",
            "Explicit Allow (permissão explícita): Regra que concede acesso a uma ação ou recurso, desde que não exista uma negação explícita conflitante.",
            "Avaliação de políticas: Processo pelo qual o IAM analisa todas as policies aplicáveis (usuário, grupo, função) para determinar se uma solicitação será permitida ou negada."
        ],
        "generalExplanation": [
            "No AWS IAM, o processo de avaliação de políticas segue uma hierarquia de decisão bem definida: Por padrão, tudo é negado. Permissões explícitas (Allow) concedem acesso a ações e recursos específicos. Negações explícitas (Deny) sempre têm prioridade sobre qualquer permissão, independentemente da ordem das policies. Isso significa que, se um usuário tiver uma policy que permite ec2:DescribeInstances, mas outra policy que nega explicitamente qualquer ação ec2:*, o acesso será bloqueado."
        ],
        "realWorld": [
            "Em um ambiente corporativo, imagine que uma empresa adota políticas rigorosas para isolar responsabilidades. O grupo de desenvolvedores possui uma policy que permite ler métricas de EC2 (ec2:DescribeInstances). O departamento de segurança adiciona uma policy que nega explicitamente todas as ações ec2:* para impedir manipulações acidentais. Mesmo que a primeira policy conceda acesso, o Explicit Deny da segunda policy prevalece — impedindo qualquer ação em EC2."
        ]
    },
    {
        "id": 2,
        "title": "Pergunta 2",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa utiliza o Amazon RDS como seu banco de dados. Para melhorar a experiência do usuário, foi decidido que uma camada de cache altamente confiável e totalmente gerenciada deve ser configurada na frente do RDS. Qual das opções a seguir é a escolha correta, considerando que a regeneração do conteúdo do cache é uma atividade custosa?",
        "options": [
            {
                "letter": "A",
                "text": "Implementar o Amazon ElastiCache Memcached",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Migrar o banco de dados para o Amazon Redshift",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Instalar o Redis em uma instância Amazon EC2",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Implementar o Amazon ElastiCache Redis em Modo Cluster",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Memcached é um sistema de cache em memória simples e de alto desempenho, mas não oferece recursos avançados como persistência, replicação ou suporte a transações. Para casos em que a regeneração do cache é custosa, o Redis, com seus recursos avançados, é mais adequado."
            },
            {
                "correct": false,
                "text": "Incorreta. Amazon Redshift é um serviço de data warehouse voltado para análise de grandes volumes de dados, não sendo adequado para atuar como camada de cache em tempo real."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível instalar o Redis diretamente em uma instância Amazon EC2, ao contrário do ElastiCache para Redis, que é um serviço gerenciado, você precisará cuidar da manutenção, atualizações, escalabilidade e gerenciamento da infraestrutura, aumentando a complexidade operacional."
            },
            {
                "correct": true,
                "text": "Correta. O ElastiCache para Redis com Modo Cluster habilitado oferece alta confiabilidade, disponibilidade e escalabilidade horizontal, permitindo distribuir dados em múltiplos shards. Isso reduz o impacto no desempenho e facilita a manutenção do cache, especialmente quando a regeneração do conteúdo é custosa."
            }
        ],
        "glossary": [
            "Amazon RDS: Serviço gerenciado de banco de dados relacional que simplifica a configuração, operação e escalabilidade de bancos como MySQL, PostgreSQL, SQL Server, entre outros.",
            "Amazon ElastiCache: Serviço gerenciado de cache em memória que melhora o desempenho de aplicações ao reduzir a latência e aliviar a carga sobre o banco de dados principal.",
            "Redis: Sistema de cache em memória com suporte a persistência, replicação, transações e estruturas de dados complexas — ideal para aplicações que exigem alta disponibilidade e durabilidade.",
            "Memcached: Sistema de cache em memória simples e leve, adequado para cargas temporárias, mas sem suporte a replicação, persistência ou clusterização.",
            "Modo Cluster (Redis Cluster): Configuração do Redis que distribui dados entre múltiplos shards, permitindo escalabilidade horizontal, alta disponibilidade e tolerância a falhas.",
            "Amazon Redshift: Serviço de data warehouse para análises de grandes volumes de dados — não projetado para uso como cache em tempo real."
        ],
        "generalExplanation": [
            "A resposta correta é implementar o Amazon ElastiCache Redis em Modo Cluster, pois essa solução oferece alta disponibilidade, resiliência e escalabilidade horizontal, características essenciais para uma camada de cache robusta em frente ao Amazon RDS. O Redis é superior ao Memcached por suportar replicação, persistência e failover automático, garantindo que os dados de cache não se percam durante falhas e reduzindo a necessidade de regeneração."
        ],
        "realWorld": [
            "Em uma aplicação web de alto tráfego, como uma plataforma de e-commerce ou streaming, o uso do ElastiCache Redis Cluster permite armazenar em cache sessões de usuários, consultas frequentes ou dados de catálogo provenientes do RDS. Esse design reduz drasticamente o número de consultas ao banco de dados, diminuindo a latência e melhorando a experiência do usuário."
        ]
    },
    {
        "id": 3,
        "title": "Pergunta 3",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa de TI possui sua stack serverless integrada ao AWS X-Ray. O desenvolvedor da empresa percebeu um volume elevado de dados sendo enviados para o X-Ray, o que fez com que os custos mensais na AWS disparassem. O desenvolvedor solicitou mudanças para mitigar esse problema. Como um Associate Developer, qual das seguintes soluções você recomendaria para obter tendências de rastreamento enquanto reduz custos com o mínimo de impacto?",
        "options": [
            {
                "letter": "A",
                "text": "Implementar uma regra de amostragem de rede",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar expressões de filtro no console do X-Ray",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Habilitar o amostragem (sampling) do X-Ray",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Configuração personalizada para os agentes do X-Ray",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Não existe uma funcionalidade oficial chamada 'regra de amostragem de rede' no AWS X-Ray. Essa alternativa foi incluída como um distrator e não representa uma solução válida."
            },
            {
                "correct": false,
                "text": "Incorreta. As expressões de filtro no console do X-Ray ajudam a refinar a visualização dos dados já coletados, mas não reduzem o volume de dados enviados ou armazenados."
            },
            {
                "correct": true,
                "text": "Correta. O AWS X-Ray utiliza um algoritmo de amostragem para determinar quais requisições serão rastreadas, garantindo eficiência e uma amostra representativa das requisições. Por padrão, o SDK do X-Ray registra a primeira requisição a cada segundo e 5% das requisições adicionais."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS X-Ray não permite configurações personalizadas nos agentes para controlar diretamente o volume de dados. O controle do volume é feito por meio das regras de amostragem."
            }
        ],
        "glossary": [
            "AWS X-Ray: Serviço gerenciado da AWS que realiza rastreamento (tracing) e depuração de aplicações distribuídas, permitindo visualizar o fluxo de requisições e identificar gargalos de desempenho ou erros.",
            "Amostragem (Sampling): Mecanismo do X-Ray que define quais requisições serão rastreadas, coletando apenas uma fração representativa do tráfego — reduzindo o volume de dados e o custo de armazenamento.",
            "SDK (Software Development Kit): Conjunto de bibliotecas que facilitam a instrumentação do código e a integração de aplicações com o AWS X-Ray.",
            "Expressões de filtro: Consultas aplicadas no console do X-Ray para analisar dados já coletados, sem alterar a coleta ou reduzir custos."
        ],
        "generalExplanation": [
            "A resposta correta é habilitar a amostragem (sampling) no AWS X-Ray, pois essa funcionalidade controla automaticamente o volume de dados coletados e enviados ao serviço. Por padrão, o X-Ray rastreia todas as primeiras requisições de cada minuto e apenas uma porcentagem das subsequentes, garantindo uma amostra estatisticamente representativa."
        ],
        "realWorld": [
            "Imagine uma aplicação serverless que utiliza API Gateway → AWS Lambda → DynamoDB e processa milhares de requisições por minuto. Ativar o X-Ray para cada requisição geraria custos elevados e volumes excessivos de dados. Ao configurar a amostragem (sampling rule) — por exemplo, rastrear 1 requisição inicial por segundo e 5% das seguintes —, a equipe consegue identificar gargalos entre serviços e reduzir significativamente os custos de observabilidade."
        ]
    },
    {
        "id": 4,
        "title": "Pergunta 4",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa de TI migrou para uma arquitetura serverless na nuvem AWS, onde a camada de computação é implementada por funções Lambda. Os gerentes de engenharia gostariam de monitorar ativamente e solucionar quaisquer falhas nas funções Lambda. Como um Desenvolvedor Associado, qual das seguintes soluções você recomendaria para esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Usar o CloudWatch Events para identificar e notificar quaisquer falhas no código das funções Lambda.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar o CodeDeploy para identificar e notificar quaisquer falhas no código das funções Lambda.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Os desenvolvedores devem inserir instruções de logging no código das funções Lambda, que estarão disponíveis via logs do CloudWatch.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Utilizar o CodeCommit para identificar e notificar quaisquer falhas no código das funções Lambda.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Amazon CloudWatch Events (agora chamado EventBridge) é usado para responder a eventos do sistema e disparar ações, como invocar funções Lambda, mas não é capaz de detectar ou notificar diretamente falhas internas no código das funções Lambda."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS CodeDeploy é um serviço de implantação automatizada que facilita o lançamento de atualizações em várias plataformas, incluindo Lambda, mas não é projetado para identificar ou notificar falhas no código das funções Lambda durante a execução."
            },
            {
                "correct": true,
                "text": "Correta. Inserir instruções de logging no código Lambda permite que os desenvolvedores capturem informações detalhadas sobre a execução e falhas da função. O AWS Lambda integra-se automaticamente ao CloudWatch Logs, enviando todos os logs para um grupo de logs específico, facilitando a análise e o monitoramento."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS CodeCommit é um serviço de controle de versão baseado em Git para hospedar repositórios de código, e não possui funcionalidades para monitorar ou notificar falhas em tempo de execução das funções Lambda."
            }
        ],
        "glossary": [
            "AWS Lambda: Serviço de computação serverless que executa código em resposta a eventos sem necessidade de provisionar ou gerenciar servidores.",
            "CloudWatch Logs: Serviço que coleta, armazena e monitora logs gerados por aplicações e recursos AWS, incluindo funções Lambda.",
            "CodeDeploy: Serviço de implantação automatizada utilizado para gerenciar atualizações de aplicações, inclusive funções Lambda, mas não voltado para monitoramento em tempo de execução.",
            "CodeCommit: Serviço de controle de versão baseado em Git para armazenamento e colaboração segura de código-fonte.",
            "CloudWatch Events / EventBridge: Serviço que captura e roteia eventos de recursos e aplicações, permitindo automação e integração entre serviços AWS.",
            "Logging: Prática de registrar informações sobre a execução do sistema (erros, métricas e mensagens de depuração) para análise e diagnóstico."
        ],
        "generalExplanation": [
            "A abordagem correta para monitorar e diagnosticar falhas em funções AWS Lambda é implementar instruções de logging diretamente no código da função. O AWS Lambda envia automaticamente esses registros ao Amazon CloudWatch Logs, permitindo visualização, filtragem e análise detalhada de cada execução. Essa integração nativa fornece visibilidade completa sobre o comportamento da função, ajudando a identificar a causa de erros, gargalos de desempenho e falhas em tempo real."
        ],
        "realWorld": [
            "Em uma arquitetura serverless que processa pedidos de e-commerce, uma função Lambda pode validar entradas, interagir com o banco de dados e enviar notificações. Se ocorrer um erro — por exemplo, um dado inválido ou falha de conexão — o logging dentro da função permite que os desenvolvedores visualizem no CloudWatch Logs mensagens detalhadas, incluindo variáveis de entrada, exceções e tempos de resposta."
        ]
    },
    {
        "id": 5,
        "title": "Pergunta 5",
        "domain": "Segurança",
        "prompt": "A equipe de desenvolvimento de uma empresa de mídia está trabalhando para garantir a segurança de seus bancos de dados. Quais dos seguintes mecanismos de banco de dados da AWS podem ser configurados com Autenticação de Banco de Dados via IAM? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "RDS MySQL",
                "correct": true
            },
            {
                "letter": "B",
                "text": "RDS SQL Server",
                "correct": false
            },
            {
                "letter": "C",
                "text": "RDS Db2",
                "correct": false
            },
            {
                "letter": "D",
                "text": "RDS Oracle",
                "correct": false
            },
            {
                "letter": "E",
                "text": "RDS PostgreSQL",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. A autenticação via IAM para banco de dados é suportada pelo mecanismo MySQL no Amazon RDS, permitindo que os usuários se conectem sem usar senhas tradicionais, mas sim tokens de autenticação gerados pelo IAM."
            },
            {
                "correct": false,
                "text": "Incorreta. O mecanismo SQL Server no Amazon RDS não suporta autenticação via IAM, sendo necessário utilizar autenticação tradicional com usuário e senha."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon RDS não suporta o mecanismo Db2, que é um produto da IBM, portanto não há possibilidade de configurar autenticação via IAM para esse banco neste serviço."
            },
            {
                "correct": false,
                "text": "Incorreta. O mecanismo Oracle no Amazon RDS não oferece suporte à autenticação via IAM, sendo necessário utilizar métodos tradicionais de autenticação baseados em usuário e senha."
            },
            {
                "correct": true,
                "text": "Correta. O mecanismo PostgreSQL no Amazon RDS também suporta autenticação via IAM, possibilitando conexões seguras utilizando tokens temporários gerados pelo serviço IAM, eliminando a necessidade de armazenar credenciais no banco."
            }
        ],
        "glossary": [
            "IAM Database Authentication: Método de autenticação que permite que usuários e aplicações se conectem ao banco de dados utilizando tokens temporários gerados pelo AWS IAM, em vez de senhas fixas armazenadas localmente.",
            "RDS (Relational Database Service): Serviço gerenciado da AWS que simplifica a configuração, operação e escalabilidade de bancos de dados relacionais, como MySQL, PostgreSQL, Oracle e SQL Server.",
            "MySQL e PostgreSQL: Mecanismos de banco de dados relacionais suportados pelo Amazon RDS que oferecem suporte nativo à autenticação via IAM, permitindo integração direta com credenciais temporárias.",
            "Token de autenticação: String temporária e segura emitida pelo IAM que substitui senhas tradicionais, válida por um período curto (geralmente 15 minutos) para autenticação segura e dinâmica.",
            "Oracle e SQL Server: Motores de banco de dados compatíveis com o RDS, mas sem suporte à autenticação via IAM, utilizando apenas credenciais convencionais (usuário/senha)."
        ],
        "generalExplanation": [
            "A autenticação via IAM no Amazon RDS é uma funcionalidade de segurança que substitui senhas estáticas por tokens temporários gerados pelo AWS IAM, aumentando a segurança e eliminando a necessidade de armazenar credenciais em código, variáveis de ambiente ou arquivos de configuração. Atualmente, apenas os mecanismos MySQL e PostgreSQL do RDS oferecem suporte a essa integração."
        ],
        "realWorld": [
            "Em um ambiente corporativo com requisitos de segurança avançados, o uso de IAM Database Authentication é uma prática recomendada para eliminar credenciais estáticas e centralizar o controle de acesso a bancos de dados. Uma função AWS Lambda precisa acessar um banco de dados RDS PostgreSQL. Em vez de armazenar a senha do banco em variáveis de ambiente, o desenvolvedor configura uma role IAM com permissão para gerar tokens de autenticação."
        ]
    },
    {
        "id": 6,
        "title": "Pergunta 6",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um desenvolvedor deseja habilitar o rastreamento do X-Ray em um servidor Linux on-premises que executa uma aplicação personalizada e é acessado por meio do Amazon API Gateway. Qual é a solução mais eficiente que exige a configuração mínima?",
        "options": [
            {
                "letter": "A",
                "text": "Instalar e executar o agente unificado do CloudWatch nos servidores on-premises para capturar e encaminhar os dados do X-Ray para o serviço X-Ray usando a chamada da API PutTraceSegments.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Instalar e executar o daemon do X-Ray nos servidores on-premises para capturar e encaminhar os dados para o serviço X-Ray.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Configurar uma função Lambda para analisar os dados de tráfego recebidos nos servidores on-premises e, em seguida, encaminhar os dados do X-Ray para o serviço X-Ray usando a chamada da API PutTelemetryRecords.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Instalar e executar o SDK do X-Ray nos servidores on-premises para capturar e encaminhar os dados para o serviço X-Ray.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O agente do CloudWatch não pode encaminhar dados do X-Ray para o serviço X-Ray usando a API PutTraceSegments. Essa opção é um distrator e não é suportada para integração direta com o X-Ray."
            },
            {
                "correct": true,
                "text": "Correta. O daemon do AWS X-Ray é um aplicativo que escuta o tráfego na porta UDP 2000, coleta os dados brutos dos segmentos e os encaminha para a API do AWS X-Ray. Ele funciona em conjunto com os SDKs do X-Ray e deve estar em execução para que os dados enviados pelos SDKs alcancem o serviço X-Ray."
            },
            {
                "correct": false,
                "text": "Incorreta. Uma função Lambda não pode processar diretamente os dados do X-Ray de uma instância on-premises e encaminhá-los para o serviço X-Ray. Essa abordagem adiciona complexidade desnecessária e não é suportada para esse caso de uso."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o SDK do X-Ray seja necessário para instrumentar a aplicação, ele sozinho não encaminha os dados para o serviço X-Ray. É necessário que o daemon do X-Ray esteja em execução para coletar e enviar esses dados ao serviço."
            }
        ],
        "glossary": [
            "Daemon do X-Ray: componente executado localmente que coleta e encaminha os dados de rastreamento gerados por aplicações instrumentadas com o SDK do X-Ray. Ele atua como um intermediário entre a aplicação e o serviço AWS X-Ray, enviando os dados via internet.",
            "SDK do X-Ray: biblioteca usada para instrumentar aplicações, gerando e coletando segmentos de rastreamento distribuído para análise de desempenho e latência.",
            "API PutTraceSegments: chamada da API do AWS X-Ray que recebe os segmentos de rastreamento enviados pelo daemon e os armazena no serviço.",
            "API PutTelemetryRecords: chamada da API usada para enviar métricas e estatísticas relacionadas aos rastreamentos, como taxas de erro e latência.",
            "Agente unificado do CloudWatch: coleta métricas e logs para o Amazon CloudWatch, mas não é compatível com dados de rastreamento do X-Ray.",
            "On-premises: ambiente de infraestrutura física local, geralmente em data centers próprios, fora da nuvem AWS."
        ],
        "generalExplanation": [
            "A resposta correta é instalar e executar o daemon do X-Ray nos servidores on-premises. Esse daemon é responsável por receber os dados de rastreamento (trace segments) enviados pelo SDK do X-Ray através da porta UDP 2000 e encaminhá-los de forma eficiente e segura ao serviço AWS X-Ray na nuvem. Essa configuração é necessária porque o SDK do X-Ray não envia diretamente os dados ao serviço — ele depende do daemon para essa função."
        ],
        "realWorld": [
            "Imagine uma empresa com um sistema híbrido onde parte da aplicação roda em servidores locais e outra parte em serviços AWS, como o Amazon API Gateway e o AWS Lambda. O time de operações precisa monitorar toda a jornada de uma requisição, do cliente até os serviços internos. Para isso, eles instalam o daemon do X-Ray nos servidores on-premises e instrumentam a aplicação com o SDK do X-Ray."
        ]
    },
    {
        "id": 7,
        "title": "Pergunta 7",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você migrou um banco de dados SQL Server on-premises para um banco de dados Amazon Relational Database Service (RDS) conectado a uma VPC dentro de uma sub-rede privada. Além disso, a aplicação Java relacionada, que estava hospedada on-premises, foi movida para uma função AWS Lambda. Qual das seguintes opções você deve implementar para conectar a função AWS Lambda à sua instância RDS?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar variáveis de ambiente para passar a string de conexão do RDS.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Configurar o Lambda para conectar-se a uma sub-rede pública que forneça acesso à internet e usar um Security Group para acessar o RDS dentro da sub-rede privada.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Configurar o Lambda para conectar-se à VPC com a sub-rede privada e o Security Group necessário para acessar o RDS.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Usar Lambda Layers para conectar separadamente à internet e ao RDS.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível usar variáveis de ambiente para armazenar informações como strings de conexão ou segredos, isso não garante o acesso à instância RDS dentro da VPC. O Lambda ainda precisa estar configurado para acessar a rede privada onde o RDS está localizado."
            },
            {
                "correct": false,
                "text": "Incorreta. Conectar o Lambda a uma sub-rede pública não garante acesso à internet nem um IP público para a função. Para que o Lambda tenha acesso à internet, a VPC precisa ter um NAT Gateway ou NAT Instance em uma sub-rede pública."
            },
            {
                "correct": true,
                "text": "Correta. A maneira adequada de permitir que uma função Lambda acesse um banco de dados RDS em uma sub-rede privada é configurá-la para executar dentro da mesma VPC e sub-rede privada, associando o Security Group que permite o acesso ao RDS."
            },
            {
                "correct": false,
                "text": "Incorreta. Lambda Layers são usados para adicionar bibliotecas, runtimes personalizados ou dependências ao código da função Lambda, mas não configuram ou facilitam o acesso à rede ou recursos como o RDS."
            }
        ],
        "glossary": [
            "VPC (Virtual Private Cloud): Rede virtual isolada dentro da AWS que permite configurar sub-redes, tabelas de roteamento e gateways, oferecendo controle granular sobre a comunicação e segurança dos recursos.",
            "Sub-rede privada: Segmento de rede dentro da VPC sem rota direta para a internet, usado para hospedar recursos internos, como bancos de dados, com maior nível de isolamento.",
            "Security Group: Firewall virtual que controla tráfego de entrada e saída de recursos na AWS, definindo regras baseadas em portas, protocolos e endereços IP de origem ou destino.",
            "Lambda Layers: Mecanismo para compartilhar bibliotecas, código e dependências entre funções AWS Lambda, sem relação com conectividade de rede.",
            "NAT Gateway: Serviço gerenciado que permite a saída de tráfego para a internet a partir de sub-redes privadas, sem permitir conexões de entrada externas.",
            "Elastic Network Interface (ENI): Interface de rede virtual que conecta recursos como funções Lambda à VPC, permitindo comunicação com outros recursos internos."
        ],
        "generalExplanation": [
            "Para que uma função AWS Lambda consiga acessar um banco de dados Amazon RDS localizado em uma sub-rede privada, é essencial executar a função dentro da mesma VPC e associá-la aos Security Groups e sub-redes corretos. Essa configuração instrui o AWS Lambda a criar automaticamente interfaces de rede elásticas (ENIs) dentro da VPC, conectando a função à rede privada."
        ],
        "realWorld": [
            "Em uma arquitetura moderna serverless + RDS, um time de desenvolvimento pode implantar funções Lambda que processam transações financeiras e armazenam resultados em um banco de dados RDS MySQL dentro de uma sub-rede privada. Para isso, a função Lambda é configurada com a mesma VPC em que o RDS está implantado, sub-redes privadas garantindo isolamento e segurança, e Security Group compartilhado ou compatível."
        ]
    },
    {
        "id": 8,
        "title": "Pergunta 8",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua empresa planeja abandonar a reserva de instâncias EC2 e deseja adotar uma arquitetura serverless mais ágil. Qual das opções a seguir representa a forma mais simples e com menor esforço para implantar contêineres Docker nessa arquitetura serverless?",
        "options": [
            {
                "letter": "A",
                "text": "Amazon Elastic Container Service (Amazon ECS) em instâncias EC2",
                "correct": false
            },
            {
                "letter": "B",
                "text": "AWS Elastic Beanstalk",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Amazon Elastic Kubernetes Service (Amazon EKS) com Fargate",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Amazon Elastic Container Service (Amazon ECS) com Fargate",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Amazon ECS é um serviço gerenciado para executar e gerenciar contêineres Docker em clusters. Quando executado em instâncias EC2, você precisa provisionar e gerenciar os servidores subjacentes, o que não caracteriza uma arquitetura serverless."
            },
            {
                "correct": false,
                "text": "Incorreta. AWS Elastic Beanstalk é um serviço fácil de usar para implantar e escalar aplicações web e serviços, gerenciando automaticamente a capacidade, balanceamento de carga, escalabilidade e monitoramento. No entanto, ele utiliza instâncias EC2 para executar as aplicações, portanto não é uma solução serverless."
            },
            {
                "correct": false,
                "text": "Incorreta. Amazon EKS é um serviço gerenciado de Kubernetes que pode ser executado com Fargate para oferecer computação serverless. Contudo, para o caso que busca a forma mais simples e com menor esforço para implantar contêineres Docker, ECS com Fargate é mais direto e fácil de usar."
            },
            {
                "correct": true,
                "text": "Correta. Amazon ECS com Fargate é uma solução serverless para executar contêineres Docker sem necessidade de gerenciar servidores. O Fargate é um mecanismo de computação serverless que permite focar no desenvolvimento da aplicação, pagando apenas pelos recursos consumidos e garantindo isolamento e segurança por design."
            }
        ],
        "glossary": [
            "AWS Elastic Beanstalk: serviço totalmente gerenciado que simplifica a implantação e o escalonamento de aplicações web, automatizando o provisionamento de infraestrutura com instâncias EC2.",
            "Amazon Elastic Container Service (Amazon ECS): serviço gerenciado para orquestração e gerenciamento de contêineres Docker, oferecendo integração nativa com outros serviços AWS.",
            "EC2 (Elastic Compute Cloud): serviço que fornece instâncias de servidores virtuais na nuvem, onde o usuário é responsável por configurar, atualizar e gerenciar a infraestrutura.",
            "Fargate: mecanismo serverless para execução de contêineres no ECS ou EKS, eliminando a necessidade de provisionar ou gerenciar servidores.",
            "Amazon Elastic Kubernetes Service (Amazon EKS): serviço gerenciado que permite executar e escalar aplicações Kubernetes na AWS.",
            "Kubernetes: sistema open-source de orquestração de contêineres que automatiza deploy, escala e gerenciamento de aplicações conteinerizadas.",
            "Contêiner Docker: pacote leve e portátil que contém uma aplicação e suas dependências, garantindo execução consistente em qualquer ambiente."
        ],
        "generalExplanation": [
            "A escolha correta é Amazon ECS com Fargate, pois combina simplicidade operacional com arquitetura serverless, eliminando a necessidade de gerenciar servidores, clusters ou instâncias EC2. Com o Fargate, o desenvolvedor define apenas os requisitos de CPU, memória e imagem Docker, enquanto a AWS gerencia automaticamente a infraestrutura, incluindo escalabilidade, disponibilidade e isolamento de tarefas."
        ],
        "realWorld": [
            "Um time de desenvolvimento que adota microserviços pode usar o ECS com Fargate para executar cada serviço em contêineres independentes, permitindo que o sistema escale automaticamente conforme a demanda, sem a sobrecarga de gerenciar clusters EC2. Por exemplo, uma startup de e-commerce pode construir APIs em Python ou Node.js, empacotá-las em contêineres Docker e implantá-las via AWS CodePipeline."
        ]
    },
    {
        "id": 9,
        "title": "Pergunta 9",
        "domain": "Implantação",
        "prompt": "Você possui um processo de workflow que obtém código do AWS CodeCommit e faz deploy em instâncias EC2 associadas à tag de grupo ProdBuilders. Você deseja configurar as instâncias para armazenar no máximo duas revisões da aplicação para conservar espaço em disco. Qual das alternativas a seguir permitirá implementar essa configuração?",
        "options": [
            {
                "letter": "A",
                "text": "Agente do CodeDeploy",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Colocar um load balancer na frente das suas instâncias",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Agente do AWS CloudWatch Logs",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Integrar com AWS CodePipeline",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O agente do CodeDeploy é um pacote de software instalado e configurado nas instâncias que permite que elas sejam usadas em implantações do CodeDeploy. Esse agente arquiva revisões e arquivos de log nas instâncias e realiza a limpeza desses artefatos para conservar espaço em disco. É possível configurar a opção :max_revisions: no arquivo de configuração do agente para limitar o número de revisões da aplicação armazenadas."
            },
            {
                "correct": false,
                "text": "Incorreta. Um load balancer distribui o tráfego de entrada entre várias instâncias EC2 para melhorar a disponibilidade e escalabilidade. Ele não possui funcionalidade para gerenciar versões de aplicações ou controlar o armazenamento local de revisões nas instâncias."
            },
            {
                "correct": false,
                "text": "Incorreta. O agente do CloudWatch Logs automatiza o envio de dados de log das instâncias EC2 para o CloudWatch Logs. Ele não gerencia revisões de aplicações nem controla o armazenamento local de versões em disco."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS CodePipeline é um serviço totalmente gerenciado de entrega contínua que automatiza pipelines de release para atualizações rápidas e confiáveis de aplicações e infraestrutura. Embora o CodeCommit e o CodePipeline sejam serviços integrados, o CodePipeline não gerencia o controle de versões nem o armazenamento de revisões diretamente nas instâncias EC2."
            }
        ],
        "glossary": [
            "AWS CodeCommit: Serviço gerenciado de controle de versão usado para armazenar e gerenciar código-fonte em repositórios privados.",
            "AWS CodePipeline: Serviço de entrega contínua (CI/CD) que automatiza o fluxo de build, teste e deploy de aplicações na AWS.",
            "CodeDeploy Agent: Agente instalado em instâncias EC2 que executa as implantações orquestradas pelo AWS CodeDeploy, incluindo armazenamento e limpeza de revisões de aplicação.",
            "AWS CloudWatch Logs Agent: Agente que coleta e envia logs do sistema e da aplicação de instâncias EC2 para o serviço Amazon CloudWatch Logs.",
            "Load Balancer: Serviço que distribui tráfego de rede entre múltiplas instâncias para aumentar disponibilidade e escalabilidade.",
            "max_revisions: Parâmetro do CodeDeploy Agent que define o número máximo de revisões da aplicação armazenadas localmente em uma instância EC2, controlando o uso de espaço em disco."
        ],
        "generalExplanation": [
            "A alternativa correta é o CodeDeploy Agent, pois ele é o componente responsável por gerenciar as implantações locais nas instâncias EC2 e controlar o armazenamento de revisões da aplicação. Durante o processo de implantação, o agente baixa novas versões do aplicativo e mantém cópias locais das revisões anteriores. O parâmetro max_revisions, definido no arquivo de configuração do agente, limita quantas revisões antigas são mantidas."
        ],
        "realWorld": [
            "Em um ambiente de produção com várias instâncias EC2, o AWS CodeDeploy é frequentemente usado para implantações automatizadas e consistentes. Por exemplo, um time DevOps pode definir no arquivo de configuração do agente: :codedeploy_agent: :max_revisions: 3. Assim, cada instância EC2 manterá apenas as três versões mais recentes da aplicação, evitando falhas por falta de disco e simplificando a manutenção."
        ]
    },
    {
        "id": 10,
        "title": "Pergunta 10",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa de comércio eletrônico possui um fluxo de trabalho para processamento de pedidos com várias tarefas a serem executadas em paralelo, além de etapas de decisão que precisam ser avaliadas para o processamento bem-sucedido do pedido. Todas as tarefas são implementadas por meio de funções Lambda. Qual das seguintes opções é a MELHOR solução para atender a esses requisitos de negócio?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar atividades do AWS Step Functions para orquestrar o fluxo de trabalho",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar AWS Batch para orquestrar o fluxo de trabalho",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Utilizar máquinas de estado do AWS Step Functions para orquestrar o fluxo de trabalho",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Utilizar AWS Glue para orquestrar o fluxo de trabalho",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Atividades no AWS Step Functions são usadas para associar código externo (como um worker em EC2) a uma tarefa específica, mas não orquestram o fluxo de trabalho por si só. Elas são parte do mecanismo, não a solução principal para orquestração."
            },
            {
                "correct": false,
                "text": "Incorreta. AWS Batch é um serviço para execução de jobs em lote na nuvem, otimizando recursos computacionais para cargas batch, mas não é indicado para orquestração de workflows com múltiplas tarefas e decisões."
            },
            {
                "correct": true,
                "text": "Correta. AWS Step Functions é um serviço que permite coordenar componentes de aplicações distribuídas e microsserviços usando fluxos de trabalho visuais. Com máquinas de estado definidas em Amazon States Language, é possível orquestrar tarefas paralelas e decisões complexas, ideal para workflows com funções Lambda."
            },
            {
                "correct": false,
                "text": "Incorreta. AWS Glue é um serviço gerenciado de ETL (extração, transformação e carga) focado em preparação e carregamento de dados para análises, não sendo adequado para orquestração de workflows de processamento de pedidos."
            }
        ],
        "glossary": [
            "AWS Step Functions: Serviço gerenciado da AWS que orquestra fluxos de trabalho complexos por meio de máquinas de estado, coordenando tarefas entre múltiplos serviços AWS.",
            "Máquina de estado: Modelo computacional que define estados, transições e regras de execução, controlando o fluxo lógico de um processo de forma determinística.",
            "Atividades do Step Functions: Componentes usados para integrar código externo (como aplicações em EC2, ECS ou on-premises) ao fluxo, mas que não realizam orquestração por si só.",
            "AWS Glue: Serviço serverless de ETL (Extração, Transformação e Carga) voltado para preparação e integração de dados, não para controle de workflows de aplicação.",
            "AWS Batch: Serviço gerenciado para execução de jobs em lote (batch), com provisionamento automático de recursos, porém sem suporte a decisões condicionais e paralelismo controlado como o Step Functions."
        ],
        "generalExplanation": [
            "A alternativa correta é utilizar máquinas de estado do AWS Step Functions, pois este serviço foi projetado especificamente para orquestrar workflows complexos e distribuídos. O Step Functions permite definir visualmente e gerenciar logicamente o fluxo de execução de múltiplas tarefas — incluindo funções AWS Lambda, chamadas de APIs, atividades externas e integrações com outros serviços AWS."
        ],
        "realWorld": [
            "Em uma aplicação de e-commerce, o time de engenharia pode criar um workflow no AWS Step Functions para orquestrar o ciclo completo de processamento de pedidos: Lambda A valida o estoque, Lambda B calcula o frete, Lambda C processa o pagamento, e Lambda D atualiza o status do pedido no banco de dados. O Step Functions coordena essas etapas em sequência ou em paralelo e, por meio de decisões condicionais, direciona o fluxo."
        ]
    },
    {
        "id": 11,
        "title": "Pergunta 11",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você é um desenvolvedor que utiliza a AWS CLI para criar funções Lambda que contêm variáveis de ambiente. Suas funções precisarão de mais de 50 variáveis de ambiente contendo informações sensíveis, como nomes de tabelas de banco de dados. Qual é o tamanho total permitido e o número máximo de variáveis de ambiente que podem ser criadas para uma função AWS Lambda?",
        "options": [
            {
                "letter": "A",
                "text": "O tamanho total de todas as variáveis de ambiente não deve exceder 8 KB. O número máximo de variáveis que podem ser criadas é 50.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O tamanho total de todas as variáveis de ambiente não deve exceder 4 KB. Não há limite para o número de variáveis.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "O tamanho total de todas as variáveis de ambiente não deve exceder 8 KB. Não há limite para o número de variáveis.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "O tamanho total de todas as variáveis de ambiente não deve exceder 4 KB. O número máximo de variáveis que podem ser criadas é 35.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O limite de tamanho total para variáveis de ambiente é 4 KB, não 8 KB. Além disso, não há um limite fixo no número de variáveis, desde que o tamanho total seja respeitado."
            },
            {
                "correct": true,
                "text": "Correta. O AWS Lambda permite que o tamanho total combinado de todas as variáveis de ambiente seja de até 4 KB. Não existe um limite explícito para a quantidade de variáveis, desde que o tamanho total não ultrapasse esse limite."
            },
            {
                "correct": false,
                "text": "Incorreta. O tamanho total permitido para variáveis de ambiente no AWS Lambda é de até 4 KB, não 8 KB. Além disso, não há limite definido para o número de variáveis, desde que o tamanho total seja respeitado."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o limite de tamanho total seja 4 KB, não há um limite definido para o número de variáveis de ambiente, desde que o tamanho total seja respeitado."
            }
        ],
        "glossary": [
            "Variáveis de ambiente: Pares chave-valor usados para configurar funções AWS Lambda, permitindo passar parâmetros e segredos sem alterar o código-fonte.",
            "AWS Lambda: Serviço de computação serverless que executa código sob demanda em resposta a eventos, com provisionamento automático de recursos.",
            "Tamanho total: Soma em bytes de todas as variáveis de ambiente definidas para uma função Lambda, incluindo chaves e valores.",
            "Configuração específica da versão: Conjunto de parâmetros aplicados a uma versão publicada da função, como memória, timeout e variáveis de ambiente."
        ],
        "generalExplanation": [
            "O AWS Lambda impõe um limite combinado de 4 KB para o tamanho total das variáveis de ambiente associadas a uma função. Não existe um número máximo de variáveis definido — o que importa é o tamanho agregado das chaves e valores, incluindo formatação interna. Isso significa que um desenvolvedor pode criar quantas variáveis forem necessárias, desde que o total de dados armazenados não ultrapasse 4 KB."
        ],
        "realWorld": [
            "Imagine um desenvolvedor que mantém uma função AWS Lambda responsável por processar eventos de uma fila Amazon SQS e consultar dados em Amazon DynamoDB. Ele define variáveis de ambiente como TABLE_NAME=Pedidos, REGION=us-east-1, LOG_LEVEL=INFO, ENDPOINT_URL=https://api.exemplo.com. Durante o deploy via AWS CLI ou AWS SAM, o desenvolvedor monitora o tamanho total dessas variáveis para garantir que não excedam 4 KB."
        ]
    },
    {
        "id": 12,
        "title": "Pergunta 12",
        "domain": "Implantação",
        "prompt": "Um desenvolvedor está projetando um template AWS CloudFormation para implantar instâncias Amazon EC2 em várias contas AWS. O desenvolvedor precisa permitir a seleção de instâncias EC2 a partir de uma lista de tipos de instância previamente aprovados. Quais medidas o desenvolvedor pode tomar para integrar a lista de tipos de instância autorizados no template CloudFormation?",
        "options": [
            {
                "letter": "A",
                "text": "Configurar um pseudo parâmetro com a lista de tipos de instância EC2 como AllowedValues no template CloudFormation",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Configurar um parâmetro com a lista de tipos de instância EC2 como AllowedValues no template CloudFormation",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Configurar um mapeamento contendo uma lista de tipos de instância EC2 como parâmetros no template CloudFormation",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Configurar parâmetros separados para cada tipo de instância EC2 no template CloudFormation",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Pseudo parâmetros são valores pré-definidos pelo AWS CloudFormation e não podem ser declarados ou modificados no template. Portanto, não é possível criar um pseudo parâmetro personalizado para conter uma lista de tipos de instância."
            },
            {
                "correct": true,
                "text": "Correta. A seção Parameters permite personalizar templates, possibilitando a entrada de valores customizados a cada criação ou atualização da stack. O atributo AllowedValues define uma lista de valores permitidos para o parâmetro, garantindo que o valor informado seja um dos tipos de instância aprovados."
            },
            {
                "correct": false,
                "text": "Incorreta. A seção Mappings é usada para associar chaves a conjuntos nomeados de valores, como valores específicos por região, e não para armazenar listas de parâmetros. Além disso, não se pode usar parâmetros, pseudo parâmetros ou funções intrínsecas dentro de Mappings."
            },
            {
                "correct": false,
                "text": "Incorreta. Criar múltiplos parâmetros separados para cada tipo de instância é semanticamente incorreto e ineficiente, pois todos se referem ao mesmo recurso subjacente."
            }
        ],
        "glossary": [
            "AllowedValues: Atributo da seção Parameters em um template CloudFormation que define uma lista de valores válidos que o usuário pode informar ao criar ou atualizar uma stack, garantindo conformidade e controle.",
            "Parameters: Seção do template CloudFormation usada para receber entradas dinâmicas (como nomes, tipos de instância, tamanhos de volume, etc.) durante a criação ou atualização da stack.",
            "Pseudo parâmetros: Valores pré-definidos pelo CloudFormation (como AWS::Region ou AWS::AccountId) que fornecem informações sobre o ambiente, não podem ser modificados nem personalizados pelo usuário.",
            "Mappings: Estrutura estática de chave-valor usada para definir configurações específicas por região, ambiente ou versão, sem aceitar parâmetros ou funções intrínsecas.",
            "Stack: Conjunto de recursos AWS (EC2, S3, IAM, etc.) criados e gerenciados como uma única unidade lógica pelo CloudFormation.",
            "Template: Arquivo em formato JSON ou YAML que descreve os recursos, parâmetros e políticas usados pelo CloudFormation para provisionar infraestrutura como código."
        ],
        "generalExplanation": [
            "A melhor prática para restringir quais tipos de instância EC2 podem ser escolhidos em uma implantação CloudFormation é definir um parâmetro com o atributo AllowedValues, contendo apenas os tipos aprovados. Isso garante que o usuário só consiga selecionar valores dentro de um conjunto controlado, prevenindo erros de configuração, violações de política corporativa ou uso de instâncias mais caras do que o permitido."
        ],
        "realWorld": [
            "Em um ambiente corporativo multi-conta (por exemplo, equipes de desenvolvimento, teste e produção), o uso de AllowedValues ajuda o time de governança a padronizar e controlar o uso de instâncias EC2 em toda a organização. O time de DevOps cria um template CloudFormation corporativo que define um parâmetro InstanceType com AllowedValues limitados a t3.micro, t3.small e t3.medium."
        ]
    },
    {
        "id": 13,
        "title": "Pergunta 13",
        "domain": "Segurança",
        "prompt": "Uma empresa possui uma carga de trabalho que requer 14.000 IOPS consistentes para dados que devem ser duráveis e seguros. Os padrões de conformidade da empresa determinam que os dados devem estar protegidos em todas as etapas do seu ciclo de vida em todos os volumes EBS utilizados. Quais das seguintes afirmações são verdadeiras em relação à segurança dos dados no EBS?",
        "options": [
            {
                "letter": "A",
                "text": "Os volumes EBS não suportam nenhum tipo de criptografia.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Os volumes EBS suportam criptografia em trânsito, mas não suportam criptografia em repouso.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Os volumes EBS suportam criptografia em repouso e em trânsito utilizando o KMS.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Os volumes EBS suportam criptografia em repouso utilizando o KMS, mas não suportam criptografia em trânsito.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Os volumes EBS oferecem suporte nativo à criptografia integrada com o AWS KMS, garantindo a segurança dos dados armazenados."
            },
            {
                "correct": false,
                "text": "Incorreta. Os volumes EBS suportam criptografia em repouso utilizando o AWS KMS, mas não suportam criptografia em trânsito nativa."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora os volumes EBS suportem criptografia em repouso com o AWS KMS, eles não suportam criptografia em trânsito nativa entre a instância EC2 e o volume EBS."
            },
            {
                "correct": true,
                "text": "Correta. Os volumes EBS utilizam o AWS KMS para criptografar os dados em repouso, garantindo a segurança dos dados armazenados. No entanto, a criptografia em trânsito entre a instância EC2 e o volume EBS não é suportada nativamente, embora a comunicação ocorra dentro da rede segura da AWS."
            }
        ],
        "glossary": [
            "EBS (Elastic Block Store): Serviço de armazenamento em blocos da AWS que fornece volumes persistentes e de alto desempenho para instâncias EC2.",
            "IOPS (Input/Output Operations Per Second): Métrica que indica o número de operações de leitura e gravação que um sistema de armazenamento consegue realizar por segundo — fundamental para avaliar desempenho de volumes EBS.",
            "KMS (Key Management Service): Serviço gerenciado da AWS usado para criar, armazenar e gerenciar chaves de criptografia com controle de acesso e auditoria centralizados.",
            "Criptografia em repouso: Técnica que protege os dados armazenados (em disco ou snapshots) contra acesso não autorizado, utilizando chaves de criptografia.",
            "Criptografia em trânsito: Protege os dados durante sua transmissão entre componentes (por exemplo, entre uma instância EC2 e um volume EBS).",
            "Instância EC2: Máquina virtual na nuvem AWS que pode ser associada a volumes EBS para armazenamento persistente e de alto desempenho."
        ],
        "generalExplanation": [
            "O Amazon EBS suporta criptografia em repouso nativa utilizando o AWS Key Management Service (KMS). Essa integração assegura que todos os dados armazenados nos volumes EBS, bem como snapshots e volumes derivados, sejam automaticamente criptografados sem impacto perceptível no desempenho. Entretanto, a comunicação entre a instância EC2 e o volume EBS ocorre dentro da rede interna e isolada da AWS, e não há criptografia em trânsito nativa nessa conexão."
        ],
        "realWorld": [
            "Em uma empresa que armazena dados sensíveis, como registros financeiros ou informações de clientes, o desenvolvedor pode habilitar a criptografia em repouso do EBS com KMS para garantir que os volumes EC2 estejam protegidos sem precisar alterar o código da aplicação. Ao criar uma instância EC2 com um volume EBS criptografado, todos os dados gravados (e snapshots subsequentes) são automaticamente protegidos com chaves gerenciadas pelo KMS."
        ]
    },
    {
        "id": 14,
        "title": "Pergunta 14",
        "domain": "Solução de problemas e otimização",
        "prompt": "Sua empresa hospeda um site estático no Amazon Simple Storage Service (S3) escrito em HTML5. O site é direcionado a entusiastas da aviação e cresceu para uma audiência mundial, com centenas de milhares de visitantes acessando mensalmente. Enquanto os usuários nos Estados Unidos têm uma ótima experiência, usuários de outras partes do mundo estão enfrentando respostas lentas e atrasos. Qual serviço pode mitigar esse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Use o cache do Amazon S3",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Use o Amazon CloudFront",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Use o Amazon ElastiCache for Redis",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Use o Amazon S3 Transfer Acceleration",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. 'Cache do Amazon S3' não é um serviço ou recurso existente na AWS. Essa alternativa é um distractor e não oferece solução para melhorar a latência de acesso ao conteúdo estático em diferentes regiões geográficas."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon CloudFront é uma rede de entrega de conteúdo (CDN) que distribui conteúdo estático e dinâmico globalmente a partir de localizações de borda (Edge Locations), reduzindo a latência e melhorando a experiência do usuário em diferentes regiões do mundo."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon ElastiCache for Redis é uma solução de cache na memória para acelerar aplicações que dependem de dados dinâmicos e consultas frequentes a bancos de dados. No caso de um site estático hospedado no S3, não há necessidade de uma camada de cache para dados dinâmicos."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon S3 Transfer Acceleration acelera transferências de arquivos entre clientes e buckets S3 usando a infraestrutura do CloudFront, mas é focado em uploads e downloads de objetos, não na entrega de conteúdo para visitantes de um site estático."
            }
        ],
        "glossary": [
            "Amazon CloudFront: serviço de Content Delivery Network (CDN) da AWS que distribui conteúdo estático e dinâmico globalmente através de Edge Locations, reduzindo a latência e aumentando a disponibilidade.",
            "Amazon S3 Transfer Acceleration: recurso do Amazon S3 que acelera uploads e downloads de objetos utilizando a infraestrutura de borda do CloudFront, otimizando transferências entre clientes e buckets distantes.",
            "Amazon ElastiCache for Redis: serviço gerenciado de cache em memória usado para acelerar aplicações que realizam leituras frequentes de dados dinâmicos (como consultas a bancos de dados).",
            "Edge Locations: pontos de presença distribuídos globalmente onde o CloudFront armazena cópias em cache do conteúdo, permitindo entrega mais rápida aos usuários.",
            "Bucket S3: contêiner lógico para armazenamento de objetos no Amazon Simple Storage Service (S3).",
            "CDN (Content Delivery Network): rede distribuída de servidores que entrega conteúdo a usuários com alta disponibilidade, escalabilidade e baixa latência."
        ],
        "generalExplanation": [
            "A opção correta é o Amazon CloudFront, pois ele foi projetado para entregar conteúdo globalmente com baixa latência, armazenando em cache objetos provenientes de um bucket S3 nas Edge Locations mais próximas dos usuários finais. Essa abordagem melhora a performance e reduz a carga sobre o bucket de origem, oferecendo uma experiência de navegação mais rápida e responsiva."
        ],
        "realWorld": [
            "Um time de desenvolvimento que mantém um site estático hospedado no Amazon S3 pode enfrentar latência elevada para usuários em outras regiões do mundo. Ao habilitar o Amazon CloudFront, o conteúdo — como imagens, vídeos, CSS e JavaScript — passa a ser armazenado em cache nas Edge Locations mais próximas de cada visitante."
        ]
    },
    {
        "id": 15,
        "title": "Pergunta 15",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "A equipe de desenvolvimento de uma empresa deseja criptografar um objeto de 111 GB utilizando o AWS KMS. Qual das opções a seguir representa a melhor solução?",
        "options": [
            {
                "letter": "A",
                "text": "Realizar uma chamada à API GenerateDataKey que retorna uma chave em texto simples e uma cópia criptografada da chave de dados. Use a chave em texto simples para criptografar os dados.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Realizar uma chamada à API GenerateDataKeyWithoutPlaintext que retorna uma cópia criptografada da chave de dados. Use a chave criptografada para criptografar os dados.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Realizar uma chamada à API Encrypt para criptografar os dados em texto simples como texto cifrado usando uma chave mestra do cliente (CMK) com material de chave importado.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Realizar uma chamada à API GenerateDataKeyWithPlaintext que retorna uma cópia criptografada da chave de dados. Use a chave em texto simples para criptografar os dados.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. A API GenerateDataKey gera uma chave simétrica única para criptografia do lado do cliente. Essa operação retorna uma cópia em texto simples da chave de dados e uma cópia criptografada sob uma chave mestra do cliente (CMK) especificada. A chave em texto simples pode ser usada para criptografar os dados fora do AWS KMS, e a chave criptografada pode ser armazenada junto com os dados criptografados para posterior descriptografia."
            },
            {
                "correct": false,
                "text": "Incorreta. A API GenerateDataKeyWithoutPlaintext retorna apenas a chave de dados criptografada, sem a chave em texto simples necessária para criptografar os dados localmente. Essa operação é útil para cenários onde a criptografia será feita posteriormente, mas não é adequada para criptografar imediatamente um objeto grande."
            },
            {
                "correct": false,
                "text": "Incorreta. A API Encrypt é adequada para criptografar pequenas quantidades de dados arbitrários, como senhas ou identificadores pessoais, e não para objetos grandes como um arquivo de 111 GB. Além disso, o uso de material de chave importado não altera essa limitação."
            },
            {
                "correct": false,
                "text": "Incorreta. A API GenerateDataKeyWithPlaintext não existe e foi apresentada apenas como uma alternativa para confundir. Não há essa operação na API do AWS KMS."
            }
        ],
        "glossary": [
            "AWS KMS (Key Management Service): Serviço gerenciado da AWS responsável pela criação, gerenciamento e controle de chaves criptográficas (CMKs) usadas para proteger dados sensíveis de forma segura e auditável.",
            "GenerateDataKey: Operação do KMS que gera uma chave de dados simétrica, retornando duas versões — uma em texto simples (para uso imediato na criptografia local) e outra criptografada pela CMK, para armazenamento seguro e reutilização futura.",
            "Encrypt API: Operação usada para criptografar pequenas quantidades de dados diretamente com uma CMK; recomendada apenas para dados de até 4 KB, não sendo eficiente para arquivos grandes.",
            "CMK (Customer Master Key): Chave mestra gerenciada pelo cliente no AWS KMS, usada para proteger chaves de dados e controlar quem pode usá-las ou gerenciá-las.",
            "GenerateDataKeyWithoutPlaintext: Variante da operação GenerateDataKey que retorna apenas a chave criptografada, evitando exposição da versão em texto simples — útil em fluxos de segurança reforçada."
        ],
        "generalExplanation": [
            "Quando o objetivo é criptografar grandes volumes de dados — como um arquivo de 111 GB — a operação GenerateDataKey é a abordagem recomendada e suportada pelas boas práticas da AWS. O processo funciona assim: o AWS KMS é chamado para gerar uma chave de dados temporária. A API retorna a chave de dados em texto simples (que a aplicação usará localmente para criptografar o arquivo) e a mesma chave criptografada sob a CMK (que pode ser armazenada de forma segura junto ao objeto criptografado)."
        ],
        "realWorld": [
            "Imagine uma aplicação que precisa armazenar grandes arquivos de log (ou backups de banco de dados) no Amazon S3 com segurança. Um desenvolvedor pode implementar o seguinte fluxo: a aplicação chama GenerateDataKey no AWS KMS para obter uma chave de dados, usa a chave em texto simples para criptografar localmente o arquivo de 111 GB antes do upload, e armazena o arquivo criptografado no S3 junto com a versão criptografada da chave de dados."
        ]
    },
    {
        "id": 16,
        "title": "Pergunta 16",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma equipe está avaliando a viabilidade de usar AWS Step Functions para criar um fluxo de trabalho bancário para aprovações de empréstimos. A aplicação web também terá uma etapa de aprovação humana dentro do fluxo. Como um desenvolvedor associado, quais das seguintes características você identificaria como principais para o AWS Step Functions? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Você deve usar fluxos Express para cargas de trabalho com alta taxa de eventos e curta duração.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Os fluxos Standard do AWS Step Functions são adequados para fluxos de trabalho duradouros e auditáveis, mas que não suportam etapas de aprovação humana.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Os fluxos Standard do AWS Step Functions são adequados para fluxos de trabalho duradouros, auditáveis e de longa duração, que também podem incluir etapas de aprovação humana.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Os fluxos Express têm duração máxima de cinco minutos e os fluxos Standard têm duração máxima de 180 dias (6 meses).",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Tanto os fluxos de trabalho Standard quanto os Express suportam todas as integrações de serviços, atividades e padrões de design.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Os fluxos Express são indicados para cenários com alta taxa de eventos (mais de 100.000 por segundo) e curta duração, otimizando performance e custo para esses casos."
            },
            {
                "correct": false,
                "text": "Incorreta. Os fluxos Standard suportam etapas de aprovação humana, portanto essa afirmação está incorreta."
            },
            {
                "correct": true,
                "text": "Correta. Os fluxos Standard são ideais para processos que exigem durabilidade, auditabilidade e longa execução, além de suportarem etapas de aprovação humana, como em processos bancários, faturamento e processamento de cartões de crédito."
            },
            {
                "correct": false,
                "text": "Incorreta. Os fluxos Express têm duração máxima de cinco minutos, porém os fluxos Standard suportam até um ano de duração máxima."
            },
            {
                "correct": false,
                "text": "Incorreta. Os fluxos Standard suportam todas as integrações de serviços, atividades e padrões de design. Já os fluxos Express não suportam atividades, execução síncrona (.sync) nem padrões de callback."
            }
        ],
        "glossary": [
            "AWS Step Functions: Serviço gerenciado que orquestra fluxos de trabalho serverless, coordenando múltiplos serviços AWS e etapas lógicas em processos automatizados e auditáveis.",
            "Fluxos Standard: Tipo de workflow indicado para processos de longa duração, auditáveis e resilientes, com suporte a atividades externas, callbacks e etapas humanas.",
            "Fluxos Express: Tipo de workflow otimizado para alta taxa de eventos e execuções curtas, com baixo custo e baixa latência, mas com limitações em funcionalidades avançadas como atividades e callbacks.",
            "Integrações de serviços: Conexões nativas entre o Step Functions e outros serviços AWS (como Lambda, DynamoDB, SNS e SQS), eliminando a necessidade de código adicional.",
            "Atividades: Tarefas executadas fora do Step Functions, permitindo integração com sistemas externos ou processos humanos.",
            "Callback patterns: Padrões de design em que o fluxo aguarda um retorno externo antes de continuar a execução.",
            "Execução síncrona (.sync): Modo em que o Step Functions espera a conclusão da chamada antes de prosseguir, útil para coordenação direta entre serviços."
        ],
        "generalExplanation": [
            "O AWS Step Functions oferece dois modos principais de execução — Standard e Express —, cada um otimizado para diferentes cenários de uso. Fluxos Standard são ideais para processos duradouros, auditáveis e críticos, como aprovações humanas, integrações externas e workflows com múltiplas etapas. Fluxos Express, por outro lado, são voltados a execuções rápidas e em grande volume, como processamento em tempo real, eventos IoT ou notificações."
        ],
        "realWorld": [
            "Um banco digital pode usar Step Functions Standard para orquestrar o fluxo de aprovação de empréstimos, que inclui uma função AWS Lambda que valida dados do cliente, uma integração com Amazon DynamoDB para verificar o histórico de crédito, e uma etapa de aprovação humana antes da liberação do valor. Em contraste, uma fintech que processa milhares de transações por segundo pode adotar Step Functions Express para coordenar tarefas curtas."
        ]
    },
    {
        "id": 17,
        "title": "Pergunta 17",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um desenvolvedor está trabalhando em uma função AWS Lambda que lê dados de objetos do Amazon S3 e grava esses dados em uma tabela do Amazon DynamoDB. Embora a função seja acionada com sucesso a partir de uma notificação de evento do S3 após a criação do objeto, ela encontra uma falha ao tentar gravar os dados na tabela DynamoDB. Qual é a provável causa da falha?",
        "options": [
            {
                "letter": "A",
                "text": "O limite de concorrência provisionada da função Lambda foi excedido",
                "correct": false
            },
            {
                "letter": "B",
                "text": "A função Lambda não possui permissões IAM para gravar no DynamoDB",
                "correct": true
            },
            {
                "letter": "C",
                "text": "A tabela DynamoDB não possui um Endpoint Gateway VPC, que é necessário para a função Lambda realizar a gravação com sucesso",
                "correct": false
            },
            {
                "letter": "D",
                "text": "O limite de concorrência reservada da função Lambda foi excedido",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A concorrência provisionada inicializa ambientes de execução para responder imediatamente às invocações, mas não está relacionada a falhas de permissão para gravar no DynamoDB."
            },
            {
                "correct": true,
                "text": "Correta. A função Lambda precisa de uma política baseada em identidade que permita acesso de leitura e gravação a uma tabela específica do DynamoDB. Essa política deve ser anexada a uma role de serviço da Lambda, que define quais ações a função pode executar. Sem essas permissões, a função falhará ao tentar gravar dados no DynamoDB."
            },
            {
                "correct": false,
                "text": "Incorreta. Endpoints Gateway para DynamoDB e S3 fornecem conectividade confiável sem necessidade de gateway de internet ou dispositivo NAT dentro de uma VPC, mas a função Lambda, por padrão, não é executada dentro de uma VPC. Portanto, a ausência de um Endpoint Gateway VPC não impede a função Lambda de acessar o DynamoDB."
            },
            {
                "correct": false,
                "text": "Incorreta. O limite de concorrência reservada garante o número máximo de instâncias concorrentes para a função, mas não impede que a função escreva no DynamoDB. Esse limite não está relacionado ao problema de permissão ou falha na gravação dos dados."
            }
        ],
        "glossary": [
            "AWS Lambda: Serviço de computação serverless que executa código sob demanda em resposta a eventos, sem necessidade de provisionar ou gerenciar servidores.",
            "IAM (Identity and Access Management): Serviço central da AWS usado para gerenciar identidades, permissões e políticas de acesso a recursos da nuvem.",
            "Role de serviço (Service Role): Identidade IAM atribuída a um serviço AWS (como Lambda ou EC2), permitindo que ele execute ações em nome do usuário com as permissões necessárias.",
            "Concorrência reservada: Configuração que define um limite máximo e garantido de execuções simultâneas para uma função Lambda, evitando contenção de recursos.",
            "Concorrência provisionada: Capacidade pré-aquecida de ambientes de execução Lambda, reduzindo a latência em invocações iniciais (cold starts).",
            "Endpoint Gateway VPC: Ponto de acesso dentro de uma VPC que permite comunicação privada com serviços AWS, como S3 ou DynamoDB, sem tráfego pela internet pública."
        ],
        "generalExplanation": [
            "A causa mais provável da falha na gravação de dados no Amazon DynamoDB é a ausência de permissões adequadas na role IAM associada à função Lambda. Para que uma função Lambda consiga realizar operações como PutItem, UpdateItem ou DeleteItem em uma tabela DynamoDB, é obrigatório que a role de execução (execution role) da função contenha uma política IAM que permita explicitamente essas ações."
        ],
        "realWorld": [
            "Considere uma arquitetura serverless onde uma função Lambda é acionada por eventos de upload em um bucket S3 e grava metadados desses arquivos em uma tabela DynamoDB. Se a gravação falhar, o primeiro diagnóstico deve ser a role IAM: verificar se a política associada à função permite ações de escrita (PutItem) no recurso alvo, checar se o ARN da tabela está correto, e confirmar se a política não está sendo limitada por condições ou restrições regionais."
        ]
    },
    {
        "id": 18,
        "title": "Pergunta 18",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma equipe de desenvolvimento utiliza buckets Amazon S3 compartilhados para fazer upload de arquivos. Devido a esse acesso compartilhado, os objetos nos buckets S3 possuem diferentes proprietários, o que dificulta o gerenciamento dos objetos. Como um desenvolvedor associado, qual das opções a seguir você sugeriria para automaticamente tornar o proprietário do bucket S3 também o proprietário de todos os objetos no bucket, independentemente da conta AWS utilizada para fazer o upload dos objetos?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar o recurso S3 Object Ownership para definir que o proprietário do bucket seja o proprietário padrão de todos os objetos no bucket.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Utilizar Listas de Controle de Acesso (ACLs) do bucket para controlar o acesso no bucket S3 e então definir seu proprietário.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Utilizar CORS do S3 para tornar o proprietário do bucket S3 o proprietário de todos os objetos no bucket.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar o S3 Access Analyzer para identificar os proprietários de todos os objetos e alterar a propriedade para o proprietário do bucket.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O S3 Object Ownership é uma configuração do bucket que permite controlar a propriedade dos objetos enviados. Com a opção 'Bucket owner preferred', objetos enviados por outras contas que utilizam a ACL 'bucket-owner-full-control' passam a ser automaticamente de propriedade do dono do bucket, facilitando o gerenciamento."
            },
            {
                "correct": false,
                "text": "Incorreta. As ACLs do bucket permitem controlar o acesso em nível de bucket e objeto, mas não alteram automaticamente a propriedade dos objetos enviados por outras contas. Elas não resolvem o problema de múltiplos proprietários de objetos em um bucket compartilhado."
            },
            {
                "correct": false,
                "text": "Incorreta. CORS (Cross-Origin Resource Sharing) é uma política que permite que aplicações web em um domínio acessem recursos em outro domínio, não tem relação com a propriedade dos objetos em buckets S3."
            },
            {
                "correct": false,
                "text": "Incorreta. O S3 Access Analyzer é uma ferramenta para analisar políticas de acesso e identificar permissões públicas ou compartilhadas, mas não permite alterar a propriedade dos objetos no bucket."
            }
        ],
        "glossary": [
            "ACL (Access Control List): Lista que define permissões granulares de acesso a buckets e objetos no Amazon S3, determinando quem pode ler, gravar ou gerenciar recursos.",
            "CORS (Cross-Origin Resource Sharing): Mecanismo que permite que aplicações web hospedadas em um domínio acessem recursos em outro, controlando requisições cross-origin.",
            "S3 Access Analyzer: Ferramenta que avalia políticas de acesso no S3 para identificar exposições públicas ou compartilhamentos indevidos de dados.",
            "S3 Object Ownership: Configuração que define quem será o proprietário dos objetos enviados a um bucket, podendo forçar que o proprietário do bucket assuma automaticamente a propriedade de todos os objetos.",
            "Bucket-owner-full-control: ACL predefinida que concede ao proprietário do bucket controle total sobre um objeto, mesmo que ele tenha sido carregado por outra conta."
        ],
        "generalExplanation": [
            "A melhor prática para garantir a propriedade unificada dos objetos em buckets compartilhados é ativar o recurso S3 Object Ownership com a opção 'Bucket owner preferred'. Essa configuração faz com que, independentemente da conta que realize o upload, o proprietário do bucket passe a ser automaticamente o dono do objeto, simplificando o controle de acesso e eliminando problemas de permissões entre contas."
        ],
        "realWorld": [
            "Imagine uma empresa que coleta dados de várias contas AWS parceiras, cada uma enviando arquivos CSV para um bucket S3 central. Sem a configuração 'Bucket owner preferred', cada parceiro seria o dono dos objetos enviados, o que geraria dificuldades para o time central acessar, mover ou excluir os arquivos devido a restrições de propriedade. Ao configurar o S3 Object Ownership para 'Bucket owner preferred', o time responsável pelo bucket passa a ter propriedade automática sobre todos os objetos."
        ]
    },
    {
        "id": 19,
        "title": "Pergunta 19",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Como parte do processo de integração, os funcionários de uma empresa de TI precisam enviar suas fotos de perfil para um bucket privado do S3. A empresa deseja construir uma aplicação web interna hospedada em uma instância EC2 que deve exibir as fotos de perfil de forma segura quando os funcionários marcarem presença. Como um Desenvolvedor Associado, qual das seguintes soluções você sugeriria para atender a esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Tornar o bucket S3 público para que a aplicação possa referenciar a URL da imagem para exibição.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Armazenar a imagem de perfil de cada usuário codificada em base64 em uma tabela do RDS e referenciá-la na aplicação para exibição.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Armazenar a imagem de perfil de cada usuário codificada em base64 em uma tabela do DynamoDB e referenciá-la na aplicação para exibição.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Salvar a chave do objeto S3 para a foto de perfil de cada usuário em uma tabela do DynamoDB e usar uma função Lambda para gerar dinamicamente uma URL pré-assinada. Referenciar essa URL para exibição via aplicação web.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Tornar o bucket público compromete a segurança e a privacidade dos dados, permitindo acesso irrestrito às fotos de perfil. Essa solução não atende aos requisitos de segurança do caso de uso e deve ser evitada."
            },
            {
                "correct": false,
                "text": "Incorreta. Armazenar imagens codificadas em base64 diretamente em um banco relacional como o RDS é uma má prática, pois pode causar aumento significativo no custo, lentidão no acesso e dificuldades na escalabilidade."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o DynamoDB seja um banco NoSQL escalável, armazenar dados binários grandes, como imagens codificadas em base64, não é recomendado. Isso pode gerar custos elevados e problemas de performance."
            },
            {
                "correct": true,
                "text": "Correta. Essa abordagem mantém as imagens armazenadas de forma segura no S3, que por padrão é privado. A chave do objeto é armazenada no DynamoDB para fácil consulta, e a função Lambda gera URLs pré-assinadas com tempo limitado de validade, garantindo acesso seguro e controlado às imagens para exibição na aplicação."
            }
        ],
        "glossary": [
            "Amazon S3: serviço de armazenamento de objetos altamente durável e seguro da AWS, usado para guardar e recuperar dados de qualquer tamanho a qualquer momento.",
            "URL pré-assinada: link temporário que concede acesso controlado a objetos privados em um bucket S3, permitindo operações específicas (como leitura ou upload) por tempo limitado.",
            "Amazon DynamoDB: banco de dados NoSQL totalmente gerenciado, projetado para oferecer baixa latência e alta escalabilidade, ideal para armazenar metadados e referências.",
            "AWS Lambda: serviço serverless que executa código sob demanda em resposta a eventos, sem a necessidade de provisionar servidores.",
            "Base64: formato de codificação textual usado para representar dados binários (como imagens) em formato de texto, geralmente evitado em grandes volumes devido ao aumento de tamanho e custo de processamento."
        ],
        "generalExplanation": [
            "A solução correta utiliza o Amazon S3 para armazenar as imagens de perfil de forma privada e segura, enquanto o Amazon DynamoDB mantém apenas as referências (chaves dos objetos), garantindo acesso rápido e eficiente. Essa separação de responsabilidades melhora o desempenho e evita o armazenamento de dados binários em bancos de dados, o que seria ineficiente e custoso."
        ],
        "realWorld": [
            "Imagine um sistema corporativo de RH onde cada colaborador envia sua foto de perfil via portal interno. As imagens são armazenadas em um bucket S3 privado, e o sistema salva apenas o nome do arquivo (chave do objeto) em uma tabela DynamoDB vinculada ao ID do funcionário. Quando um usuário acessa o sistema, uma função AWS Lambda é acionada para gerar uma URL pré-assinada válida por 5 minutos. Essa URL é usada pela aplicação web para exibir a foto, sem expor o bucket publicamente."
        ]
    },
    {
        "id": 20,
        "title": "Pergunta 20",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "A equipe de desenvolvimento de uma empresa de mídia social está considerando usar o Amazon ElastiCache para aumentar o desempenho dos seus bancos de dados existentes. Como um Associate Developer, quais dos seguintes casos de uso você recomendaria como o MELHOR ajuste para o ElastiCache? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Usar o ElastiCache para melhorar o desempenho de cargas de trabalho Extract-Transform-Load (ETL)",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar o ElastiCache para melhorar a latência e o throughput em cargas de trabalho de aplicações com alta escrita",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar o ElastiCache para melhorar a latência e o throughput em cargas de trabalho de aplicações com alta leitura",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Usar o ElastiCache para executar consultas JOIN altamente complexas",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Usar o ElastiCache para melhorar o desempenho de cargas de trabalho intensivas em computação",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Cargas de trabalho ETL envolvem leitura e transformação de grandes volumes de dados, o que não é adequado para cache. Para ETL, recomenda-se usar serviços como AWS Glue ou Amazon EMR, que são otimizados para esse tipo de processamento."
            },
            {
                "correct": false,
                "text": "Incorreta. Aplicações com alta taxa de escrita não se beneficiam do cache, pois os dados no cache ficam obsoletos rapidamente, tornando o ElastiCache uma solução inadequada para esse cenário."
            },
            {
                "correct": true,
                "text": "Correta. O ElastiCache é ideal para melhorar a latência e a taxa de transferência em aplicações com alta demanda de leitura, como redes sociais, jogos, compartilhamento de mídia e portais de perguntas e respostas, armazenando dados frequentemente acessados em cache."
            },
            {
                "correct": false,
                "text": "Incorreta. Consultas JOIN complexas são melhor executadas em bancos de dados relacionais como Amazon RDS ou Aurora. O ElastiCache não é adequado para esse tipo de operação, pois é um armazenamento em memória focado em cache e não em processamento relacional complexo."
            },
            {
                "correct": true,
                "text": "Correta. O ElastiCache pode acelerar cargas de trabalho que exigem alto poder computacional, como motores de recomendação, armazenando em cache os dados frequentemente acessados e reduzindo a latência e o uso do banco de dados primário."
            }
        ],
        "glossary": [
            "Amazon ElastiCache: Serviço gerenciado de cache em memória da AWS compatível com Redis e Memcached, projetado para acelerar o acesso a dados frequentemente consultados, reduzindo latência e carga no banco de dados.",
            "ETL (Extract-Transform-Load): Processo de extração, transformação e carga de grandes volumes de dados, geralmente usado em pipelines analíticos e de data warehousing.",
            "Latência: Tempo de resposta de uma operação — quanto menor, mais rápido o sistema responde.",
            "Throughput: Quantidade de dados processados em um intervalo de tempo, refletindo a eficiência e capacidade de processamento do sistema.",
            "JOIN: Operação de bancos de dados relacionais que combina informações de múltiplas tabelas com base em uma chave comum.",
            "Cache: Armazenamento temporário de dados para acesso rápido, reduzindo chamadas repetitivas a sistemas de backend e melhorando o desempenho."
        ],
        "generalExplanation": [
            "O Amazon ElastiCache é a solução ideal quando o objetivo é melhorar o desempenho de aplicações que realizam muitas leituras e precisam de respostas rápidas, como portais de conteúdo, lojas virtuais ou mecanismos de recomendação. Por armazenar dados em memória (e não em disco), o ElastiCache reduz drasticamente a latência de acesso e aumenta o throughput da aplicação, tornando-a mais responsiva e eficiente."
        ],
        "realWorld": [
            "Em uma rede social ou plataforma de e-commerce, o Amazon ElastiCache pode ser usado para armazenar em cache perfis de usuários, postagens recentes, resultados de busca ou listas de produtos populares. Por exemplo, ao renderizar o feed de notícias de um usuário, a aplicação consulta o ElastiCache para obter as postagens mais recentes. Caso o dado não esteja em cache (cache miss), ele é recuperado do banco de dados, armazenado no cache e servido ao usuário."
        ]
    },
    {
        "id": 21,
        "title": "Pergunta 21",
        "domain": "Segurança",
        "prompt": "Sua aplicação é implantada automaticamente usando o AWS Elastic Beanstalk. Seus arquivos de configuração YAML estão armazenados na pasta .ebextensions e novos arquivos são adicionados ou atualizados com frequência. A equipe de DevOps não quer reimplantar a aplicação toda vez que houver alterações na configuração; em vez disso, prefere gerenciar a configuração externamente, de forma segura, e carregá-la dinamicamente na aplicação em tempo de execução. Qual opção permite fazer isso?",
        "options": [
            {
                "letter": "A",
                "text": "Usar o AWS Systems Manager Parameter Store",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Usar variáveis de estágio (Stage Variables)",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar variáveis de ambiente",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar o Amazon S3",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O AWS Systems Manager Parameter Store oferece um armazenamento hierárquico e seguro para gerenciamento de dados de configuração e segredos. Ele permite armazenar dados como senhas, strings de conexão de banco de dados e códigos de licença como valores de parâmetros. Para este caso, em que a equipe de DevOps não deseja reimplantar a aplicação a cada alteração, o Parameter Store possibilita armazenar a configuração externamente e carregá-la dinamicamente em tempo de execução."
            },
            {
                "correct": false,
                "text": "Incorreta. Variáveis de estágio são usadas para gerenciar múltiplos estágios de lançamento em APIs do API Gateway, não sendo aplicáveis para gerenciamento dinâmico e seguro de configurações em aplicações Elastic Beanstalk."
            },
            {
                "correct": false,
                "text": "Incorreta. Variáveis de ambiente são uma forma comum de especificar opções de configuração e credenciais, úteis para scripts ou para definir perfis temporários. No entanto, elas não são criptografadas em repouso e ficam visíveis em texto claro no Console AWS e em algumas respostas da API do Elastic Beanstalk, o que não atende ao requisito de segurança para armazenar configurações sensíveis externamente."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o Amazon S3 também permita armazenar dados sem gerenciar servidores, ele requer configuração explícita de criptografia e políticas de segurança, aumentando o risco de erros de configuração. Além disso, seria necessário criar uma solução personalizada para carregar as configurações dinamicamente, tornando o uso do Parameter Store uma opção mais simples e segura para este caso."
            }
        ],
        "glossary": [
            "AWS Systems Manager Parameter Store: serviço gerenciado que armazena, gerencia e recupera parâmetros de configuração e segredos de forma segura, versionada e hierárquica, com suporte a criptografia via AWS KMS.",
            "Variáveis de ambiente: parâmetros definidos no ambiente de execução da aplicação, normalmente em texto claro, usados para definir configurações temporárias ou constantes.",
            "Amazon S3: serviço de armazenamento de objetos altamente durável, mas que requer configuração manual de acesso, segurança e criptografia para guardar dados de configuração.",
            "Variáveis de estágio (Stage Variables): parâmetros específicos do Amazon API Gateway usados para gerenciar diferentes ambientes (dev, test, prod) ou versões de uma API.",
            "Elastic Beanstalk: serviço gerenciado que implanta e escala automaticamente aplicações web e serviços, integrando recursos como EC2, RDS e Auto Scaling.",
            "Configuração dinâmica: capacidade de uma aplicação carregar e aplicar alterações de configuração em tempo de execução, sem necessidade de nova implantação."
        ],
        "generalExplanation": [
            "A melhor opção é o AWS Systems Manager Parameter Store, pois ele oferece um método seguro e centralizado para armazenar e gerenciar configurações de aplicações — incluindo valores sensíveis como chaves de API, tokens e strings de conexão — com criptografia em repouso e carregamento dinâmico. Diferente das outras alternativas, o Parameter Store integra-se nativamente com Elastic Beanstalk, AWS Lambda e ECS, permitindo que as aplicações acessem parâmetros de forma programática, segura e sem interrupção de serviço."
        ],
        "realWorld": [
            "Em uma aplicação web implantada no AWS Elastic Beanstalk, a equipe de DevOps pode usar o Parameter Store para armazenar parâmetros sensíveis, como DB_CONNECTION_STRING, API_KEY_PAYMENT_GATEWAY, e ENVIRONMENT_MODE. Essas configurações podem ser acessadas em tempo de execução pela aplicação, sem precisar reimplantar quando há mudanças — por exemplo, ao atualizar a senha do banco de dados."
        ]
    },
    {
        "id": 22,
        "title": "Pergunta 22",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um desenvolvedor júnior que trabalha com instâncias EC2 registradas em um cluster do Amazon Elastic Container Service (Amazon ECS) finalizou uma instância EC2 conforme instruções do líder da equipe. No entanto, a instância EC2 continua aparecendo como um recurso registrado no cluster ECS. Como um Associate Developer, qual das seguintes soluções você recomendaria para corrigir esse comportamento?",
        "options": [
            {
                "letter": "A",
                "text": "O cluster ECS está configurado para manter o registro de instâncias EC2 finalizadas por um período de tempo para fins de auditoria.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Um software personalizado na instância EC2 pode ter falhado e causado que a instância ficasse presa em um estado não saudável até ser reiniciada.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "A instância EC2 foi finalizada sem ser desregistrada manualmente do cluster ECS, portanto ela continua aparecendo como um recurso registrado.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "A instância EC2 foi finalizada usando a AWS CLI, enquanto para instâncias ECS deveria ser usada a Amazon ECS CLI para evitar problemas de sincronização.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "A instância EC2 foi finalizada enquanto ainda executava tarefas, e por isso o ECS mantém o registro até que as tarefas sejam finalizadas.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O ECS não mantém automaticamente o registro de instâncias EC2 finalizadas; a presença da instância no cluster indica que ela não foi desregistrada manualmente."
            },
            {
                "correct": false,
                "text": "Incorreta. A questão informa que a instância EC2 foi finalizada, portanto o problema não está relacionado a falha de software ou estado da instância, mas sim ao processo de remoção da instância do cluster ECS."
            },
            {
                "correct": true,
                "text": "Correta. Quando uma instância EC2 registrada em um cluster ECS é finalizada fora do controle do ECS (por exemplo, terminada manualmente), ela não é removida automaticamente do cluster. É necessário desregistrar manualmente a instância EC2 do cluster usando o console do Amazon ECS ou a AWS CLI para que ela deixe de aparecer como recurso registrado."
            },
            {
                "correct": false,
                "text": "Incorreta. A AWS CLI pode ser usada para gerenciar instâncias EC2 e ECS sem causar problemas de sincronização. O problema está na ausência do desregistro manual da instância EC2 no cluster ECS."
            },
            {
                "correct": false,
                "text": "Incorreta. Mesmo que a instância EC2 esteja executando tarefas, se ela for finalizada fora do ECS, o registro da instância não é removido automaticamente. A remoção depende do desregistro manual da instância EC2 no cluster."
            }
        ],
        "glossary": [
            "Amazon Elastic Container Service (ECS): Serviço totalmente gerenciado da AWS que permite executar, escalar e gerenciar contêineres Docker em clusters compostos por instâncias EC2 ou AWS Fargate, sem a necessidade de gerenciar manualmente a infraestrutura de orquestração.",
            "Instância EC2: Máquina virtual da AWS que pode ser registrada em um cluster ECS para executar tarefas e serviços de contêineres.",
            "Cluster ECS: Agrupamento lógico de instâncias EC2 ou recursos Fargate, onde o ECS agenda e executa tarefas de acordo com políticas de escalabilidade e disponibilidade.",
            "Desregistrar (Deregister): Processo de remover uma instância EC2 do cluster ECS, informando ao ECS que ela não está mais disponível para execução de tarefas.",
            "AWS CLI: Interface de linha de comando da AWS usada para gerenciar e automatizar recursos e serviços, como ECS, EC2 e CloudFormation."
        ],
        "generalExplanation": [
            "Quando uma instância EC2 registrada em um cluster ECS é finalizada manualmente, ela não é automaticamente removida do cluster. Isso acontece porque o ECS não monitora diretamente o ciclo de vida da instância fora do seu próprio controle — ou seja, o cluster mantém o registro da instância como se ainda estivesse ativa. A melhor prática recomendada é desregistrar a instância EC2 do cluster ECS antes de encerrá-la, garantindo que o ECS mantenha uma visão precisa dos recursos disponíveis."
        ],
        "realWorld": [
            "Em um ambiente de produção com ECS sobre EC2, é comum que equipes de DevOps realizem operações de manutenção, substituição ou escalonamento manual de instâncias. Se um desenvolvedor encerrar manualmente uma instância EC2 sem desregistrá-la, o ECS continuará tentando agendar tarefas nela — resultando em falhas, alarmes falsos e métricas inconsistentes no CloudWatch. Para evitar isso, as equipes costumam automatizar o processo em pipelines de CI/CD ou scripts de Auto Scaling."
        ]
    },
    {
        "id": 23,
        "title": "Pergunta 23",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua empresa possui um contrato de três anos com um provedor de serviços de saúde. O contrato exige que os backups mensais do banco de dados sejam mantidos durante toda a vigência do contrato para fins de conformidade. Atualmente, o limite de retenção dos backups automatizados no Amazon Relational Database Service (RDS) não atende aos seus requisitos. Qual das seguintes soluções pode ajudá-lo a cumprir esses requisitos?",
        "options": [
            {
                "letter": "A",
                "text": "Habilitar os backups automáticos do RDS.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Habilitar o RDS Multi-AZ para maior disponibilidade do banco de dados.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Criar um evento cron no CloudWatch que dispare uma função AWS Lambda responsável por gerar snapshots do banco de dados.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Habilitar réplicas de leitura (Read Replicas) no RDS.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora os backups automáticos do RDS sejam úteis para recuperação pontual, o período máximo de retenção configurável é de até 35 dias, o que é insuficiente para o requisito de retenção de backups por três anos estabelecido no contrato."
            },
            {
                "correct": false,
                "text": "Incorreta. O recurso Multi-AZ do RDS é projetado para aumentar a disponibilidade e tolerância a falhas, replicando dados automaticamente para uma instância secundária em outra zona de disponibilidade. No entanto, ele não altera ou estende o período de retenção dos backups automatizados."
            },
            {
                "correct": true,
                "text": "Correta. Existem diversas formas de executar tarefas periódicas na AWS, e a combinação de CloudWatch Events com Lambda é uma das soluções mais simples e flexíveis. Criando uma regra no CloudWatch com agendamento (usando expressão cron ou intervalo fixo), é possível disparar uma função Lambda que executa a criação manual de snapshots do banco de dados, permitindo retenção por tempo indeterminado."
            },
            {
                "correct": false,
                "text": "Incorreta. As réplicas de leitura são usadas para distribuir cargas de leitura e melhorar a escalabilidade do banco de dados. Elas replicam os dados de forma assíncrona, mas não são projetadas para retenção de backups ou para atender requisitos de conformidade relacionados a backups de longo prazo."
            }
        ],
        "glossary": [
            "CloudWatch Events (Amazon EventBridge): Serviço que permite agendar e reagir a eventos na AWS, incluindo execuções automáticas e periódicas (via expressões cron ou regras de intervalo fixo).",
            "AWS Lambda: Serviço serverless que executa código em resposta a eventos, sem necessidade de provisionar servidores, ideal para automações e integrações.",
            "Snapshot: Cópia pontual e manual de um banco de dados ou volume EBS, utilizada para restauração ou retenção de longo prazo, sem limitação de expiração automática.",
            "RDS Multi-AZ: Configuração que replica dados de forma síncrona entre Zonas de Disponibilidade, garantindo alta disponibilidade e failover automático, mas não estende o período de retenção.",
            "Backups automáticos do RDS: Backups gerenciados pelo serviço, retidos por até 35 dias, voltados para recuperação operacional de curto prazo.",
            "Read Replicas: Instâncias de leitura assíncronas do RDS, usadas para distribuir carga e melhorar desempenho, sem impacto sobre retenção de backups."
        ],
        "generalExplanation": [
            "Quando há uma exigência de retenção de backups por períodos superiores a 35 dias, o uso dos backups automáticos do Amazon RDS se torna insuficiente, pois o limite máximo configurável é de apenas 35 dias. A solução ideal é criar snapshots manuais do banco de dados e automatizar esse processo utilizando CloudWatch Events (ou EventBridge) para agendar execuções periódicas, e AWS Lambda para executar a API do RDS (create-db-snapshot), gerando snapshots com nomes padronizados."
        ],
        "realWorld": [
            "Em um cenário real, imagine uma empresa de tecnologia da saúde que precisa manter backups de bancos de dados de pacientes por 3 anos, em conformidade com normas como HIPAA ou LGPD. O time de DevOps implementa a seguinte arquitetura: cria uma função AWS Lambda que executa a API create-db-snapshot para gerar snapshots do banco RDS, configura uma regra do CloudWatch Events (EventBridge) para acionar a função mensalmente, e adiciona lógica para excluir automaticamente snapshots antigos, mantendo apenas os últimos 36 meses de retenção."
        ]
    },
    {
        "id": 24,
        "title": "Pergunta 24",
        "domain": "Solução de problemas e otimização",
        "prompt": "Você trabalha para uma empresa de transporte que está automatizando a criação de clusters ECS com um Auto Scaling Group usando um template AWS CloudFormation que aceita o nome do cluster como parâmetro. Inicialmente, você lançou o template com o valor de entrada 'MainCluster', que implantou cinco instâncias distribuídas em duas zonas de disponibilidade. Na segunda vez, você lançou o template com o valor de entrada 'SecondCluster'. Contudo, as instâncias criadas na segunda execução também foram lançadas no cluster 'MainCluster', mesmo após especificar um nome de cluster diferente. Qual é a causa raiz desse problema?",
        "options": [
            {
                "letter": "A",
                "text": "A imagem Docker do agente ECS precisa ser reconstruída para se conectar aos outros clusters",
                "correct": false
            },
            {
                "letter": "B",
                "text": "A instância EC2 está sem permissões IAM para ingressar nos outros clusters",
                "correct": false
            },
            {
                "letter": "C",
                "text": "O parâmetro do nome do cluster não foi atualizado no arquivo /etc/ecs/ecs.config durante o bootstrap",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Os grupos de segurança da instância EC2 estão configurados para o cluster ECS errado",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A imagem do agente ECS não precisa ser reconstruída para conectar-se a diferentes clusters. O problema não está relacionado à imagem do agente, pois a primeira execução funcionou corretamente."
            },
            {
                "correct": false,
                "text": "Incorreta. As instâncias EC2 já estão sendo registradas no primeiro cluster, indicando que as permissões IAM estão corretas. Portanto, a falta de permissões não é a causa do problema."
            },
            {
                "correct": true,
                "text": "Correta. No arquivo ecs.config, é necessário configurar o parâmetro ECS_CLUSTER='nome_do_cluster' para registrar a instância de contêiner no cluster correto. Se esse parâmetro não for atualizado durante o bootstrap, a instância será registrada no cluster padrão ou anterior."
            },
            {
                "correct": false,
                "text": "Incorreta. Os grupos de segurança controlam o tráfego de rede para as instâncias, mas não determinam a qual cluster ECS a instância será registrada. Portanto, essa não é a causa do problema."
            }
        ],
        "glossary": [
            "ECS Cluster: Grupo lógico de instâncias EC2 ou tarefas Fargate gerenciadas pelo Amazon Elastic Container Service (ECS), usado para orquestrar, escalar e monitorar aplicações em contêineres.",
            "Auto Scaling Group (ASG): Serviço que ajusta automaticamente a quantidade de instâncias EC2 conforme políticas de utilização e demanda, garantindo disponibilidade e eficiência de custo.",
            "AWS CloudFormation: Serviço que provisiona e gerencia recursos AWS através de templates em YAML/JSON, permitindo automação e versionamento da infraestrutura como código (IaC).",
            "ecs.config: Arquivo local no sistema operacional da instância EC2 que configura o agente ECS, incluindo parâmetros como o nome do cluster e endpoint de comunicação.",
            "ECS_CLUSTER: Variável dentro do arquivo ecs.config que define o nome do cluster ECS no qual a instância EC2 deve se registrar.",
            "IAM Permissions: Conjunto de permissões aplicadas a usuários, funções ou serviços para controlar o acesso aos recursos AWS.",
            "Grupos de Segurança: Regras de firewall virtuais que controlam o tráfego de entrada e saída das instâncias EC2 associadas ao ECS."
        ],
        "generalExplanation": [
            "O problema descrito ocorre porque, embora o template do AWS CloudFormation aceite um parâmetro para o nome do cluster ECS, o arquivo de configuração ecs.config dentro das instâncias EC2 não foi atualizado corretamente durante o bootstrap. Como consequência, o agente ECS nas instâncias registra-se no cluster padrão ('default') ou em um cluster anterior configurado, ignorando o valor definido no CloudFormation."
        ],
        "realWorld": [
            "Em um ambiente de produção com múltiplos clusters ECS, é comum que empresas automatizem o provisionamento de infraestrutura usando CloudFormation e Auto Scaling Groups. Por exemplo, um time DevOps pode manter três clusters: ECS-Dev para desenvolvimento, ECS-Hmg para homologação, e ECS-Prod para produção. Ao incluir o User Data que define ECS_CLUSTER=${ClusterName}, cada instância é configurada automaticamente no ambiente correto, garantindo isolamento, consistência e automação completa."
        ]
    },
    {
        "id": 25,
        "title": "Pergunta 25",
        "domain": "Implantação",
        "prompt": "Uma empresa adota práticas de desenvolvimento colaborativo. O gerente de engenharia deseja isolar o esforço de desenvolvimento configurando simulações dos componentes da API pertencentes a várias equipes de desenvolvimento. Qual tipo de integração de API é mais adequado para esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "MOCK",
                "correct": true
            },
            {
                "letter": "B",
                "text": "HTTP",
                "correct": false
            },
            {
                "letter": "C",
                "text": "HTTP_PROXY",
                "correct": false
            },
            {
                "letter": "D",
                "text": "AWS_PROXY",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Esse tipo de integração permite que o API Gateway retorne uma resposta sem encaminhar a requisição para o backend. Isso é útil para testes de API, pois possibilita testar a configuração da integração sem gerar custos com o backend e facilita o desenvolvimento colaborativo da API ao simular componentes ainda em desenvolvimento por outras equipes."
            },
            {
                "correct": false,
                "text": "Incorreta. A integração HTTP expõe endpoints HTTP no backend, exigindo configuração detalhada do pedido e da resposta de integração, incluindo mapeamentos de dados. Não é ideal para simulações isoladas, pois depende do backend real para processar as requisições."
            },
            {
                "correct": false,
                "text": "Incorreta. A integração HTTP_PROXY permite que o cliente acesse endpoints HTTP do backend com uma configuração simplificada, passando as requisições e respostas diretamente sem mapeamentos. Não é indicada para simulações, pois requer um backend HTTP ativo."
            },
            {
                "correct": false,
                "text": "Incorreta. A integração AWS_PROXY conecta diretamente o método da API a uma função Lambda, permitindo uma integração flexível e simplificada. No entanto, não é adequada para simulações isoladas, pois depende da execução real da função Lambda."
            }
        ],
        "glossary": [
            "API Gateway: Serviço gerenciado da AWS que permite criar, publicar, monitorar e proteger APIs (REST e WebSocket) em escala, atuando como ponto de entrada entre clientes e backends.",
            "MOCK integration: Tipo de integração no API Gateway que retorna respostas simuladas diretamente, sem encaminhar requisições a um backend real. Ideal para testes, prototipagem e desenvolvimento independente.",
            "HTTP integration: Conecta o API Gateway a endpoints HTTP reais (internos ou externos), exigindo configuração manual de mapeamento de requisições e respostas.",
            "AWS_PROXY integration: Integração que conecta diretamente a API a uma função AWS Lambda, permitindo que o código backend processe e retorne respostas dinâmicas.",
            "HTTP_PROXY integration: Cria um proxy direto entre o API Gateway e um endpoint HTTP, sem transformação de payloads, ideal para encaminhamento transparente de dados."
        ],
        "generalExplanation": [
            "A integração MOCK é a melhor escolha quando o objetivo é simular respostas de uma API sem depender de um backend funcional. Esse tipo de integração permite configurar respostas fixas ou parametrizadas diretamente no API Gateway, o que é extremamente útil durante a fase inicial de desenvolvimento, testes ou integração entre equipes. Dessa forma, o frontend pode avançar com o consumo da API, o backend pode ser desenvolvido e testado separadamente, e o time de QA pode validar contratos de API e fluxos de integração antecipadamente."
        ],
        "realWorld": [
            "Imagine um time desenvolvendo uma aplicação serverless de e-commerce. A equipe de frontend precisa validar o fluxo de checkout, mas o backend (funções Lambda e banco de dados) ainda não está concluído. Com o API Gateway MOCK, o time pode configurar um endpoint /checkout que retorna uma resposta simulada, como {'status': 'success', 'orderId': 'MOCK12345'}. Assim, o frontend pode testar e integrar o fluxo completo sem aguardar o backend."
        ]
    },
    {
        "id": 26,
        "title": "Pergunta 26",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa de negociação de ações de alta frequência está migrando suas filas de mensagens de sistemas de middleware orientados a mensagens autogerenciados para o Amazon SQS. A equipe de desenvolvimento da empresa deseja minimizar os custos do uso do SQS. Como um Associate Developer, qual das seguintes opções você recomendaria para atender a esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Usar o timer de mensagens do SQS para recuperar mensagens das suas filas do Amazon SQS",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar o long polling do SQS para recuperar mensagens das suas filas do Amazon SQS",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Usar o timeout de visibilidade do SQS para recuperar mensagens das suas filas do Amazon SQS",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar o short polling do SQS para recuperar mensagens das suas filas do Amazon SQS",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O timer de mensagens define um período inicial de invisibilidade para uma mensagem recém-enviada, mas não é usado para recuperar mensagens da fila, sendo apenas um mecanismo para atrasar a visibilidade da mensagem."
            },
            {
                "correct": true,
                "text": "Correta. O long polling faz com que o Amazon SQS espere até que haja pelo menos uma mensagem disponível antes de responder, reduzindo o número de respostas vazias e, consequentemente, diminuindo os custos de uso do serviço."
            },
            {
                "correct": false,
                "text": "Incorreta. O timeout de visibilidade é um período durante o qual uma mensagem fica invisível para outros consumidores após ser recebida, mas não é um método para recuperar mensagens da fila."
            },
            {
                "correct": false,
                "text": "Incorreta. O short polling faz com que o Amazon SQS responda imediatamente, mesmo que não haja mensagens disponíveis, o que pode aumentar o custo devido ao maior número de respostas vazias."
            }
        ],
        "glossary": [
            "Amazon SQS (Simple Queue Service): serviço totalmente gerenciado de filas de mensagens que permite desacoplar componentes de aplicações distribuídas, garantindo escalabilidade, tolerância a falhas e processamento assíncrono.",
            "Short polling: modo de consulta que retorna imediatamente ao cliente, mesmo que não haja mensagens disponíveis, resultando em requisições frequentes e custo adicional.",
            "Long polling: técnica em que a requisição ao SQS aguarda até 20 segundos por novas mensagens antes de retornar, reduzindo chamadas desnecessárias e otimizando custos.",
            "Timer de mensagens (Delay Queue): recurso que atrasa a disponibilização inicial de uma mensagem na fila, usado para postergar o processamento, mas não afeta a forma de leitura.",
            "Timeout de visibilidade (Visibility Timeout): período durante o qual uma mensagem fica invisível para outros consumidores após ser lida, evitando processamento duplicado."
        ],
        "generalExplanation": [
            "A opção correta é o uso do long polling para recuperar mensagens do Amazon SQS, pois ele reduz o número de requisições à API e melhora a eficiência do consumo da fila. Com o long polling, o consumidor mantém a conexão aberta por um tempo configurável (até 20 segundos), aguardando mensagens antes de encerrar a chamada. Isso evita requisições repetidas e respostas vazias — comuns no short polling — e, consequentemente, diminui o custo operacional do sistema."
        ],
        "realWorld": [
            "Imagine uma aplicação de trading em tempo real, onde microserviços processam eventos de compra e venda por meio do Amazon SQS. Ao usar o long polling, os consumidores podem aguardar novas mensagens por até 20 segundos, reduzindo o número de chamadas ociosas e economizando recursos — algo essencial em sistemas de alta taxa de requisições."
        ]
    },
    {
        "id": 27,
        "title": "Pergunta 27",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um novo membro da sua equipe está trabalhando na criação de uma Dead Letter Queue (DLQ) para funções AWS Lambda. Como um Associate Developer, você pode ajudá-lo a identificar os casos de uso em que o AWS Lambda adicionará uma mensagem em uma DLQ após o processamento? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "O evento falhou em todas as tentativas de processamento",
                "correct": true
            },
            {
                "letter": "B",
                "text": "O evento foi processado com sucesso",
                "correct": false
            },
            {
                "letter": "C",
                "text": "A invocação da função Lambda é assíncrona",
                "correct": true
            },
            {
                "letter": "D",
                "text": "A invocação da função Lambda é síncrona",
                "correct": false
            },
            {
                "letter": "E",
                "text": "A invocação da função Lambda falhou apenas uma vez, mas depois foi bem-sucedida",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. A dead-letter queue funciona de forma semelhante a um destino de falha, sendo usada quando um evento falha em todas as tentativas de processamento ou expira sem ser processado."
            },
            {
                "correct": false,
                "text": "Incorreta. Um evento processado com sucesso não é enviado para a dead-letter queue, pois não há falha a ser tratada."
            },
            {
                "correct": true,
                "text": "Correta. Quando um evento de invocação assíncrona excede a idade máxima permitida ou falha em todas as tentativas de retry, o Lambda descarta o evento ou o envia para a dead-letter queue, caso esta esteja configurada."
            },
            {
                "correct": false,
                "text": "Incorreta. Quando você invoca uma função de forma síncrona, o Lambda executa a função e espera pela resposta. Filas são geralmente usadas com invocações assíncronas, pois implementam o desacoplamento entre sistemas conectados."
            },
            {
                "correct": false,
                "text": "Incorreta. Um evento que eventualmente é processado com sucesso não é enviado para a dead-letter queue, mesmo que tenha falhado em tentativas anteriores."
            }
        ],
        "glossary": [
            "Dead Letter Queue (DLQ): Fila de mensagens usada para armazenar eventos que não foram processados com sucesso por uma função Lambda após todas as tentativas automáticas de reprocessamento.",
            "Invocação síncrona: Tipo de chamada em que o chamador aguarda a resposta imediata da execução da função Lambda, permitindo o tratamento direto de erros.",
            "Invovação assíncrona: Chamada onde o chamador não espera a resposta; o AWS Lambda gerencia o processamento e os retries automáticos de forma desacoplada.",
            "Retry: Mecanismo do Lambda que realiza novas tentativas automáticas de processar eventos que falharam em invocações assíncronas (duas tentativas por padrão).",
            "Evento processado com sucesso: Evento que foi tratado corretamente pela função, sem erros ou exceções.",
            "Evento expirado: Evento que excede o tempo máximo permitido (geralmente 6 horas) para ser processado e não é concluído com sucesso."
        ],
        "generalExplanation": [
            "A Dead Letter Queue (DLQ) é um recurso do AWS Lambda usado para armazenar eventos que não puderam ser processados com sucesso após todas as tentativas de reprocessamento automático em invocações assíncronas. Quando o Lambda é invocado de forma assíncrona — por exemplo, via Amazon S3, SNS ou EventBridge — ele gerencia internamente a primeira tentativa de execução, duas novas tentativas automáticas em caso de falha, e caso o evento ainda falhe ou expire após 6 horas, ele é enviado para a DLQ."
        ],
        "realWorld": [
            "Em uma arquitetura serverless que processa eventos de forma assíncrona, a configuração de uma DLQ é essencial para evitar perda de dados e facilitar a análise de falhas. Por exemplo, suponha uma função Lambda acionada por eventos do Amazon S3 sempre que novos arquivos são carregados. Se a função falhar ao processar um arquivo, o Lambda tentará automaticamente duas vezes antes de enviar o evento problemático para a DLQ configurada no SQS."
        ]
    },
    {
        "id": 28,
        "title": "Pergunta 28",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um estagiário em uma empresa de TI está começando a trabalhar com a AWS Cloud e quer entender a seguinte política de acesso a um bucket do Amazon S3: { 'Version': '2012-10-17', 'Statement': [ { 'Sid': 'ListAllS3Buckets', 'Effect': 'Allow', 'Action': ['s3:ListAllMyBuckets'], 'Resource': 'arn:aws:s3:::*' }, { 'Sid': 'AllowBucketLevelActions', 'Effect': 'Allow', 'Action': [ 's3:ListBucket', 's3:GetBucketLocation' ], 'Resource': 'arn:aws:s3:::*' }, { 'Sid': 'AllowBucketObjectActions', 'Effect': 'Allow', 'Action': [ 's3:PutObject', 's3:PutObjectAcl', 's3:GetObject', 's3:GetObjectAcl', 's3:DeleteObject' ], 'Resource': 'arn:aws:s3:::*/*' }, { 'Sid': 'RequireMFAForProductionBucket', 'Effect': 'Deny', 'Action': 's3:*', 'Resource': [ 'arn:aws:s3:::Production/*', 'arn:aws:s3:::Production' ], 'Condition': { 'NumericGreaterThanIfExists': {'aws:MultiFactorAuthAge': '1800'} } } ] } Como um Associate Developer, você pode ajudá-lo a identificar para que serve essa política?",
        "options": [
            {
                "letter": "A",
                "text": "Permite que um usuário gerencie um único bucket do Amazon S3 e nega todas as outras ações e recursos da AWS se o usuário não estiver autenticado via MFA nos últimos trinta minutos.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Permite que usuários IAM acessem seu próprio diretório home no Amazon S3, tanto programaticamente quanto pelo console.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Permite acesso total ao S3 para um usuário do Amazon Cognito, mas nega explicitamente o acesso ao bucket Production se o usuário Cognito não estiver autenticado.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Permite acesso total ao S3, mas nega explicitamente o acesso ao bucket Production se o usuário não tiver efetuado login usando MFA nos últimos trinta minutos.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A política permite ações em todos os buckets (não apenas um único bucket) e nega o acesso somente ao bucket 'Production' se a autenticação MFA não tiver ocorrido nos últimos 30 minutos. Não há negação para outras ações da AWS fora do S3."
            },
            {
                "correct": false,
                "text": "Incorreta. A política não restringe o acesso a diretórios home específicos de usuários IAM, nem implementa tal lógica. Ela concede permissões amplas para todos os buckets, com uma negação condicional para o bucket 'Production'."
            },
            {
                "correct": false,
                "text": "Incorreta. A política não faz referência específica a usuários do Amazon Cognito nem limita o acesso com base na autenticação do Cognito. Ela trata de permissões gerais para buckets S3 e uma negação condicional baseada em MFA."
            },
            {
                "correct": true,
                "text": "Correta. Esta política concede permissões amplas para acessar e manipular objetos em qualquer bucket S3, mas nega explicitamente qualquer ação no bucket 'Production' se a autenticação multifator (MFA) não tiver sido realizada nos últimos 30 minutos. Isso é implementado pela condição que verifica a idade do MFA e nega o acesso se ultrapassada."
            }
        ],
        "glossary": [
            "Amazon S3: Serviço de armazenamento de objetos da AWS que permite guardar e recuperar dados de forma escalável, segura e altamente disponível.",
            "Bucket: Contêiner lógico dentro do S3 onde são armazenados os objetos (arquivos). Cada bucket possui nome exclusivo e configurações próprias de controle de acesso e versionamento.",
            "ARN (Amazon Resource Name): Identificador único usado para referenciar recursos AWS (como buckets, funções Lambda ou tabelas DynamoDB) em políticas IAM e permissões.",
            "MFA (Multi-Factor Authentication): Mecanismo de segurança que requer dois ou mais fatores de autenticação, fortalecendo a proteção contra acessos indevidos.",
            "aws:MultiFactorAuthAge: Chave de condição IAM que indica o tempo (em segundos) desde a última autenticação MFA do usuário.",
            "NumericGreaterThanIfExists: Operador usado em condições IAM que verifica se o valor numérico é maior que um limite especificado, caso o atributo exista."
        ],
        "generalExplanation": [
            "A política em questão concede permissões amplas sobre o Amazon S3, permitindo ações como listar buckets, obter informações e manipular objetos (listar, criar e excluir). No entanto, ela inclui uma condição de segurança específica para o bucket chamado 'Production': se o usuário não tiver realizado autenticação MFA nos últimos 30 minutos (1800 segundos), o acesso é explicitamente negado. Essa restrição é aplicada usando a condição aws:MultiFactorAuthAge combinada com o operador NumericGreaterThanIfExists."
        ],
        "realWorld": [
            "Em um ambiente corporativo, essa política pode ser aplicada da seguinte forma: buckets como dev-bucket e test-bucket são acessíveis sem MFA, mas o bucket production-bucket exige MFA ativa e recente para ações como PutObject, DeleteObject ou ListBucket. Um engenheiro de DevOps que gerencia uma aplicação serverless hospedada na AWS, onde funções Lambda e CodePipeline interagem com o S3, precisa de MFA para operações em produção, garantindo segurança adicional."
        ]
    },
    {
        "id": 29,
        "title": "Pergunta 29",
        "domain": "Segurança",
        "prompt": "Sua equipe mantém um API Gateway público que é acessado por clientes de outro domínio. O uso tem sido consistente nos últimos meses, mas recentemente mais que dobrou. Como resultado, seus custos aumentaram e você gostaria de impedir que outros domínios não autorizados acessem sua API. Qual das seguintes ações você deve tomar?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar Mapping Templates",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar limitação de taxa (throttling) a nível de conta",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Atribuir um Security Group ao seu API Gateway",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Configurar CORS (Cross-Origin Resource Sharing) para controlar as origens que podem acessar a API",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Restringir o acesso usando políticas de recurso (Resource Policies) no API Gateway",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Mapping Templates são usados para transformar e formatar dados de entrada e saída em APIs, utilizando a Velocity Template Language (VTL). Eles não oferecem controle de acesso ou restrição por domínio, portanto não ajudam a impedir acessos não autorizados."
            },
            {
                "correct": false,
                "text": "Incorreta. A limitação de taxa a nível de conta no API Gateway controla o número máximo de requisições por segundo e o pico de requisições para evitar sobrecarga do serviço. No entanto, isso não restringe o acesso por domínio ou origem, apenas limita o volume de chamadas."
            },
            {
                "correct": false,
                "text": "Incorreta. O API Gateway não utiliza Security Groups, que são aplicados a recursos de rede como EC2 e interfaces de rede. Para controle de acesso, o API Gateway usa políticas de recurso (resource policies) que podem restringir o acesso por IP ou identidade."
            },
            {
                "correct": false,
                "text": "Incorreta. CORS é um mecanismo que controla o compartilhamento de recursos entre origens no navegador, permitindo que aplicações web em determinados domínios acessem a API. No entanto, CORS não impede que clientes fora do navegador, como servidores backend ou ferramentas como curl, acessem a API."
            },
            {
                "correct": true,
                "text": "Correta. Resource Policies permitem restringir o acesso à sua API por IP, VPC, ou identidade, controlando quais clientes podem acessar sua API. Essa é a forma adequada de impedir acessos não autorizados de outros domínios ou origens, diferentemente do CORS, que controla apenas o comportamento do navegador."
            }
        ],
        "glossary": [
            "CORS (Cross-Origin Resource Sharing): Mecanismo usado em navegadores que controla requisições entre diferentes domínios, permitindo apenas que origens autorizadas acessem recursos web, mas não impede acessos diretos via APIs.",
            "Throttling: Técnica que limita o número de requisições por segundo a uma API ou serviço, protegendo contra sobrecarga e abusos de tráfego.",
            "Security Group: Conjunto de regras de firewall aplicadas a recursos como instâncias EC2 ou bancos de dados, controlando tráfego de entrada e saída — não aplicável diretamente ao API Gateway.",
            "Resource Policy: Política em formato JSON aplicada a recursos AWS (como APIs, S3 buckets ou SNS topics) que define quem pode acessar o recurso e sob quais condições, com base em IP, VPC, identidade IAM, etc.",
            "Mapping Template: Script em Velocity Template Language (VTL) usado no API Gateway para transformar dados de requisição e resposta, não para segurança.",
            "Velocity Template Language (VTL): Linguagem usada para formatação e manipulação de payloads em APIs dentro do API Gateway."
        ],
        "generalExplanation": [
            "A alternativa correta é o uso de Resource Policies no Amazon API Gateway para restringir o acesso a origens autorizadas. Diferente do CORS, que atua apenas no nível do navegador (controlando quais domínios podem consumir uma API via JavaScript), as Resource Policies aplicam controle de acesso direto no nível da infraestrutura AWS, bloqueando requisições não autorizadas antes mesmo de chegarem à API."
        ],
        "realWorld": [
            "Em um ambiente de produção com APIs públicas, uma equipe pode implementar Resource Policies no API Gateway para permitir acesso apenas a endereços IP corporativos ou a redes internas (VPCs). Por exemplo, uma fintech expõe uma API de transações via API Gateway. Para proteger o backend, os desenvolvedores configuram uma Resource Policy que permite chamadas apenas de endereços IP do escritório e bloqueia qualquer tentativa externa de acesso."
        ]
    },
    {
        "id": 30,
        "title": "Pergunta 30",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Para atender às diretrizes de conformidade, uma empresa precisa garantir a replicação de quaisquer dados armazenados em seus buckets S3. Quais das seguintes características estão corretas ao configurar um bucket S3 para replicação? (Selecione três.)",
        "options": [
            {
                "letter": "A",
                "text": "Objetos replicados não mantêm os metadados originais.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "As tags dos objetos podem ser replicadas entre Regiões AWS usando Replicação entre Regiões (Cross-Region Replication), desde que as permissões adequadas estejam configuradas.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Uma vez que a replicação é ativada em um bucket, todos os objetos antigos e novos serão replicados.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "A Replicação na Mesma Região (Same-Region Replication - SRR) e a Replicação entre Regiões (Cross-Region Replication - CRR) podem ser configuradas no nível do bucket S3, em um prefixo compartilhado ou no nível do objeto usando tags de objeto do S3.",
                "correct": true
            },
            {
                "letter": "E",
                "text": "A replicação entre buckets exige o uso de criptografia com SSE-KMS em ambos os lados para funcionar corretamente.",
                "correct": false
            },
            {
                "letter": "F",
                "text": "As regras de ciclo de vida configuradas em um bucket S3 não são replicadas automaticamente para o bucket de destino e precisam ser configuradas manualmente em cada bucket.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Os objetos replicados mantêm todos os metadados originais, como data de criação e IDs de versão, garantindo que a réplica seja idêntica ao objeto fonte."
            },
            {
                "correct": true,
                "text": "Correta. As tags dos objetos podem ser replicadas entre regiões usando CRR, mas é necessário garantir que as permissões estejam configuradas corretamente para que a replicação das tags ocorra."
            },
            {
                "correct": false,
                "text": "Incorreta. A replicação só ocorre para objetos adicionados após a ativação da replicação. Objetos existentes no bucket antes da configuração da replicação não são replicados automaticamente."
            },
            {
                "correct": true,
                "text": "Correta. A replicação SRR e CRR pode ser configurada em diferentes níveis: no bucket inteiro, em prefixos específicos ou em objetos individuais por meio de tags, permitindo flexibilidade na definição do escopo da replicação."
            },
            {
                "correct": false,
                "text": "Incorreta. A replicação funciona com objetos criptografados, inclusive com SSE-KMS, mas não exige obrigatoriamente que ambos os buckets usem SSE-KMS. É necessário apenas que as permissões de acesso às chaves estejam corretamente configuradas se SSE-KMS for usado."
            },
            {
                "correct": true,
                "text": "Correta. As regras de ciclo de vida são definidas no nível do bucket e não são replicadas automaticamente junto com os objetos. Para manter políticas consistentes, é necessário configurar as regras manualmente em ambos os buckets."
            }
        ],
        "glossary": [
            "Replicação entre Regiões (Cross-Region Replication – CRR): processo automático que copia objetos de um bucket S3 em uma região AWS para outro bucket em uma região diferente, garantindo alta disponibilidade e conformidade com requisitos geográficos.",
            "Replicação na Mesma Região (Same-Region Replication – SRR): mecanismo que replica objetos entre buckets S3 dentro da mesma região AWS, comumente usado para backup, conformidade e processamento distribuído.",
            "Tags de objeto: metadados personalizados aplicados a objetos no S3, úteis para classificar, filtrar e definir políticas de replicação seletiva.",
            "Metadados: informações descritivas associadas aos objetos S3 (por exemplo: data de criação, versão, tipo de conteúdo).",
            "Regras de ciclo de vida: políticas automáticas de transição, arquivamento ou exclusão de objetos com base em critérios de idade, tamanho ou status de armazenamento."
        ],
        "generalExplanation": [
            "A replicação no Amazon S3 (tanto CRR quanto SRR) permite copiar objetos automaticamente entre buckets, oferecendo resiliência, redundância e suporte a requisitos de compliance. Essa replicação pode ser configurada de forma granular: para todo o bucket, apenas para objetos com determinado prefixo, ou com base em tags específicas. Os metadados e tags dos objetos também podem ser replicados, desde que as permissões IAM e políticas do bucket estejam corretamente configuradas."
        ],
        "realWorld": [
            "Imagine uma empresa multinacional de e-commerce que precisa garantir disponibilidade global e resiliência contra falhas regionais. O time de desenvolvimento configura a Cross-Region Replication (CRR) para copiar automaticamente os dados do bucket principal em us-east-1 para um bucket secundário em eu-west-1. Apenas objetos marcados com a tag critical=true são replicados, reduzindo custos e mantendo conformidade com normas de backup."
        ]
    },
    {
        "id": 31,
        "title": "Pergunta 31",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa possui mais de 100 milhões de membros em todo o mundo que assistem a 125 milhões de horas de programas de TV e filmes diariamente. A empresa utiliza a AWS para quase todas as suas necessidades de computação e armazenamento, operando mais de 10.000 instâncias de servidores na AWS. Isso resulta em um ambiente de rede extremamente complexo e dinâmico, onde as aplicações estão constantemente se comunicando dentro da AWS e pela Internet. Monitorar e otimizar essa rede é crítico para a empresa. A empresa precisa de uma solução para ingerir e analisar os múltiplos terabytes de dados em tempo real que sua rede gera diariamente na forma de logs de fluxo. Qual tecnologia/serviço a empresa deve utilizar para ingerir esses dados de forma econômica e que ofereça flexibilidade para direcionar esses dados para outros sistemas downstream?",
        "options": [
            {
                "letter": "A",
                "text": "AWS Glue",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Amazon Simple Queue Service (SQS)",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Amazon Kinesis Firehose",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Amazon Kinesis Data Streams",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. AWS Glue é um serviço serverless de integração e preparação de dados para análise, aprendizado de máquina e desenvolvimento de aplicações. Ele é ideal para processamento em batch e preparação de dados, mas não é adequado para ingestão e análise de dados em tempo real."
            },
            {
                "correct": false,
                "text": "Incorreta. Amazon SQS é um serviço de fila altamente escalável e confiável para armazenar mensagens entre componentes distribuídos de aplicações. Ele é ideal para casos onde o processamento de mensagens individuais com confirmação de sucesso/falha é importante, mas não é otimizado para ingestão e análise de grandes volumes de dados em tempo real."
            },
            {
                "correct": false,
                "text": "Incorreta. Amazon Kinesis Data Firehose é a forma mais simples de carregar dados de streaming em data lakes e ferramentas analíticas, como Amazon S3, Redshift, Elasticsearch e Splunk. Porém, Firehose é menos flexível que Kinesis Data Streams para processamento customizado e integração com múltiplos sistemas downstream."
            },
            {
                "correct": true,
                "text": "Correta. Amazon Kinesis Data Streams (KDS) é um serviço de streaming de dados em tempo real, altamente escalável e durável. Ele pode capturar continuamente gigabytes de dados por segundo de centenas de milhares de fontes, como fluxos de cliques em websites, eventos de bancos de dados, transações financeiras, feeds de redes sociais, logs de TI e eventos de rastreamento de localização."
            }
        ],
        "glossary": [
            "Amazon Kinesis Data Streams (KDS): Serviço gerenciado da AWS para captura e processamento contínuo de dados em tempo real, com latência de milissegundos e suporte a múltiplos consumidores simultâneos.",
            "Amazon Simple Queue Service (SQS): Serviço de mensageria assíncrona voltado ao desacoplamento de sistemas e processamento de mensagens individuais, não otimizado para grandes fluxos contínuos de dados.",
            "Amazon Kinesis Firehose: Serviço gerenciado de entrega automática de dados de streaming para destinos como Amazon S3, Redshift ou Elasticsearch, com menos flexibilidade para processamento customizado.",
            "AWS Glue: Serviço serverless para integração e transformação de dados em modo batch, ideal para pipelines ETL, mas não indicado para ingestão em tempo real.",
            "Logs de fluxo (Flow Logs): Registros que capturam informações sobre o tráfego de rede — como IPs de origem e destino, portas e volume de dados — usados para auditoria, análise e segurança."
        ],
        "generalExplanation": [
            "Para processar terabytes de dados de logs de rede em tempo real, o serviço mais adequado é o Amazon Kinesis Data Streams (KDS). Ele oferece ingestão contínua e durável de dados com latência de milissegundos, múltiplos consumidores paralelos, escalabilidade granular através do aumento ou redução de shards, e integração direta com serviços como AWS Lambda, Kinesis Data Analytics e Amazon S3."
        ],
        "realWorld": [
            "Imagine uma grande empresa de telecomunicações que gera terabytes de logs de fluxo por hora a partir de milhares de roteadores e firewalls. Com o Amazon Kinesis Data Streams, é possível capturar logs de rede em tempo real diretamente dos dispositivos, encaminhar os dados simultaneamente para um Kinesis Data Analytics para detectar anomalias, para um Amazon S3 ou Redshift para armazenamento histórico, e para um Lambda que aciona alertas imediatos em caso de eventos críticos."
        ]
    },
    {
        "id": 32,
        "title": "Pergunta 32",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa de cibersegurança está executando um backend serverless com vários fluxos de trabalho que demandam alta capacidade computacional, rodando em funções Lambda. A equipe de desenvolvimento percebeu uma lentidão no desempenho após analisar as métricas das funções Lambda. Como um Associate Developer, qual das seguintes opções você sugeriria como a MELHOR solução para lidar com esses fluxos de trabalho que exigem alta capacidade computacional?",
        "options": [
            {
                "letter": "A",
                "text": "Invocar as funções Lambda de forma assíncrona para processar os fluxos de trabalho que demandam alta capacidade computacional",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar concorrência provisionada para contabilizar os fluxos de trabalho que demandam alta capacidade computacional",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Aumentar a quantidade de memória disponível para as funções Lambda",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Usar concorrência reservada para contabilizar os fluxos de trabalho que demandam alta capacidade computacional",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Invocar funções Lambda de forma assíncrona significa que você não espera uma resposta imediata da função, apenas entrega o evento para o Lambda processar. Embora isso possa ajudar na escalabilidade e desacoplamento, não melhora a capacidade computacional ou o desempenho da função em si para cargas pesadas."
            },
            {
                "correct": false,
                "text": "Incorreta. Concorrência provisionada mantém um número pré-aquecido de instâncias da função prontas para responder rapidamente, reduzindo latência de inicialização a frio. Porém, isso não aumenta a capacidade computacional de cada execução individual."
            },
            {
                "correct": true,
                "text": "Correta. No modelo de recursos do AWS Lambda, a quantidade de CPU e outros recursos são proporcionais à memória configurada para a função. Ao aumentar a memória, você também aumenta a capacidade computacional disponível, melhorando o desempenho em cargas de trabalho pesadas."
            },
            {
                "correct": false,
                "text": "Incorreta. Concorrência reservada limita o número máximo de execuções simultâneas da função, garantindo capacidade para ela, mas não aumenta a capacidade computacional de cada execução individual."
            }
        ],
        "glossary": [
            "AWS Lambda: Serviço de computação serverless que executa código em resposta a eventos, sem necessidade de provisionar ou gerenciar servidores.",
            "Memória Lambda: Parâmetro que define a quantidade de memória RAM alocada para a função; a CPU, largura de banda e I/O são atribuídos de forma proporcional a esse valor.",
            "Concorrência reservada: Configuração que limita e reserva o número máximo de execuções simultâneas de uma função, garantindo capacidade consistente.",
            "Concorrência provisionada: Mantém instâncias pré-aquecidas da função Lambda disponíveis para reduzir a latência de cold start.",
            "Invovação assíncrona: Tipo de chamada em que o cliente não aguarda a resposta da função, permitindo processamento em segundo plano e desacoplado."
        ],
        "generalExplanation": [
            "A melhor solução para melhorar o desempenho de funções AWS Lambda que executam tarefas computacionalmente intensivas é aumentar a quantidade de memória configurada. No modelo de alocação do Lambda, a CPU, largura de banda de rede e throughput de disco crescem de forma proporcional à memória definida. Assim, aumentar a memória não apenas amplia a RAM disponível, mas também fornece mais poder de processamento por invocação, reduzindo o tempo de execução e, consequentemente, a latência."
        ],
        "realWorld": [
            "Imagine um time de engenharia de dados que utiliza AWS Lambda para processar arquivos de log ou imagens de segurança em tempo quase real. As funções demoram mais do que o esperado devido à carga de CPU exigida por operações como compressão, parsing de JSONs grandes ou análise de imagens. Ao aumentar a memória da função de 512 MB para 2048 MB, a AWS automaticamente fornece mais vCPUs e largura de banda de rede, reduzindo a duração da execução."
        ]
    },
    {
        "id": 33,
        "title": "Pergunta 33",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um desenvolvedor da sua equipe configurou o balanceador de carga para distribuir o tráfego igualmente entre instâncias ou entre Zonas de Disponibilidade. No entanto, o Elastic Load Balancing (ELB) está roteando mais tráfego para uma instância ou Zona de Disponibilidade do que para as outras. Por que isso está acontecendo e como pode ser corrigido? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Para Application Load Balancers, o balanceamento de carga entre Zonas de Disponibilidade (cross-zone load balancing) está desabilitado por padrão.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Sessões persistentes (sticky sessions) estão habilitadas no balanceador de carga.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "O desequilíbrio ocorre quando o número de instâncias não está igualmente distribuído entre as Zonas de Disponibilidade.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Após desabilitar uma Zona de Disponibilidade, os alvos nessa Zona permanecem registrados no balanceador de carga, recebendo assim rajadas aleatórias de tráfego.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Podem existir conexões TCP de curta duração entre clientes e instâncias.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Nos Application Load Balancers, o balanceamento entre Zonas de Disponibilidade está sempre habilitado por padrão, garantindo distribuição equilibrada do tráfego entre as zonas."
            },
            {
                "correct": true,
                "text": "Correta. Sessões persistentes fazem com que o balanceador direcione requisições subsequentes do mesmo cliente para a mesma instância, o que pode causar distribuição desigual do tráfego."
            },
            {
                "correct": true,
                "text": "Correta. Se o número de instâncias não estiver distribuído uniformemente entre as Zonas de Disponibilidade, o balanceador pode encaminhar mais tráfego para as zonas com mais instâncias, causando desequilíbrio."
            },
            {
                "correct": false,
                "text": "Incorreta. Após desabilitar uma Zona de Disponibilidade, os alvos nessa Zona continuam registrados, mas o balanceador de carga não encaminha tráfego para eles."
            },
            {
                "correct": false,
                "text": "Incorreta. O problema ocorre com conexões TCP de longa duração, que podem causar distribuição desigual do tráfego. Conexões de curta duração não são a causa do desequilíbrio."
            }
        ],
        "glossary": [
            "Elastic Load Balancing (ELB): serviço gerenciado da AWS que distribui automaticamente o tráfego de rede entre múltiplas instâncias ou recursos, garantindo alta disponibilidade, escalabilidade e tolerância a falhas.",
            "Zonas de Disponibilidade (Availability Zones – AZs): datacenters fisicamente separados dentro de uma mesma região AWS, projetados para oferecer redundância e resiliência em caso de falhas.",
            "Sessões persistentes (Sticky Sessions): recurso do ELB que mantém as requisições subsequentes do mesmo cliente na mesma instância, preservando o estado da sessão, mas podendo causar desequilíbrio de carga.",
            "Cross-zone Load Balancing: funcionalidade do ELB que permite distribuir o tráfego de forma igualitária entre instâncias de diferentes AZs, mesmo que o número de instâncias por zona seja desigual.",
            "TCP Connections: protocolo de comunicação orientado à conexão, no qual sessões longas ou fixas podem afetar a eficiência do balanceamento de carga."
        ],
        "generalExplanation": [
            "O desequilíbrio no roteamento de tráfego em um Elastic Load Balancer (ELB) geralmente ocorre por dois motivos principais: distribuição desigual de instâncias entre Zonas de Disponibilidade (AZs) e ativação das sessões persistentes (sticky sessions). Quando há mais instâncias em uma determinada AZ, o ELB tende a encaminhar mais tráfego para essa zona, causando sobrecarga e degradação de desempenho. Já as sticky sessions forçam o balanceador a direcionar todas as requisições subsequentes de um mesmo cliente à mesma instância, quebrando a distribuição equilibrada de tráfego."
        ],
        "realWorld": [
            "Considere uma aplicação web hospedada atrás de um Application Load Balancer (ALB) com instâncias distribuídas em duas Zonas de Disponibilidade. Caso uma zona tenha quatro instâncias e a outra apenas duas, o ALB enviará proporcionalmente mais tráfego para a zona com mais instâncias, gerando desbalanceamento. Para corrigir, o time de DevOps pode ativar o cross-zone load balancing, garantindo que o tráfego seja distribuído uniformemente entre todas as instâncias."
        ]
    },
    {
        "id": 34,
        "title": "Pergunta 34",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Como Desenvolvedor Sênior, você gerencia 10 instâncias Amazon EC2 que realizam muitas requisições de leitura para um banco de dados Amazon RDS para PostgreSQL. Você precisa tornar essa arquitetura resiliente para recuperação de desastres. Quais das seguintes funcionalidades ajudarão a preparar essa arquitetura para recuperação de desastres no banco de dados? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Usar o recurso de clonagem de banco de dados do cluster RDS",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar armazenamento RDS Provisioned IOPS (SSD) em vez de armazenamento General Purpose (SSD)",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Habilitar o recurso de backup automatizado do Amazon RDS em uma implantação Multi-AZ que cria backups em uma única Região AWS",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Habilitar o recurso de backup automatizado do Amazon RDS em uma implantação Multi-AZ que cria backups em múltiplas Regiões",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Usar Read Replicas entre Regiões (cross-Region Read Replicas)",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O recurso de clonagem de banco de dados está disponível apenas para Amazon Aurora e não para instâncias padrão do Amazon RDS. Portanto, não é aplicável para a arquitetura descrita."
            },
            {
                "correct": false,
                "text": "Incorreta. O armazenamento Provisioned IOPS é projetado para fornecer desempenho consistente e previsível de I/O, melhorando a performance do banco de dados, mas não oferece recursos específicos para recuperação de desastres."
            },
            {
                "correct": true,
                "text": "Correta. O recurso de backup automatizado do Amazon RDS permite a recuperação pontual do banco de dados e, quando configurado em uma implantação Multi-AZ, os backups são realizados na instância standby para minimizar o impacto de I/O na instância primária. Embora os backups automatizados sejam limitados a uma única região, eles garantem alta disponibilidade e proteção contra falhas locais."
            },
            {
                "correct": false,
                "text": "Incorreta. Backups automatizados do Amazon RDS são limitados a uma única região. Para backups em múltiplas regiões, é necessário usar snapshots manuais ou Read Replicas cross-region. Portanto, essa afirmação é incorreta."
            },
            {
                "correct": true,
                "text": "Correta. As Read Replicas podem ser criadas em regiões diferentes da instância principal, permitindo a replicação assíncrona dos dados. Em caso de falha na região principal, a Read Replica pode ser promovida a instância principal, garantindo continuidade do serviço e recuperação rápida em um cenário de desastre regional."
            }
        ],
        "glossary": [
            "Backup automatizado: Recurso do Amazon RDS que realiza cópias de segurança periódicas do banco de dados e captura dos logs de transações, permitindo recuperação pontual (point-in-time recovery).",
            "Multi-AZ: Configuração do RDS que mantém uma réplica síncrona em outra Zona de Disponibilidade (AZ), garantindo alta disponibilidade e failover automático em caso de falhas na instância primária.",
            "Read Replica: Cópia assíncrona de um banco de dados RDS usada para escalabilidade de leitura ou recuperação de desastres (DR). Pode ser criada em outra região (cross-region) e promovida a instância principal em caso de desastre.",
            "Provisioned IOPS: Tipo de armazenamento SSD com desempenho previsível e consistente, indicado para bancos de dados com alta carga de I/O, mas não voltado para DR.",
            "Clonagem de banco de dados: Recurso do Amazon Aurora que cria cópias rápidas do banco de dados — não disponível para instâncias RDS PostgreSQL padrão."
        ],
        "generalExplanation": [
            "A estratégia mais eficaz para recuperação de desastres (Disaster Recovery) em um RDS PostgreSQL combina backups automatizados com implantação Multi-AZ e o uso de Read Replicas entre regiões (cross-region). Backups automatizados + Multi-AZ garantem alta disponibilidade local, permitindo failover automático entre Zonas de Disponibilidade da mesma região sem perda de dados. Read Replica cross-region fornece resiliência contra falhas regionais, podendo ser promovida rapidamente a instância primária em caso de desastre."
        ],
        "realWorld": [
            "Em uma aplicação de e-commerce global hospedada em múltiplas instâncias EC2, o banco de dados RDS PostgreSQL armazena informações críticas de pedidos e pagamentos. Para proteger o sistema contra falhas e desastres, o time de desenvolvimento ativa backups automatizados com Multi-AZ, garantindo que uma instância standby assuma automaticamente em caso de falha na primária, e cria uma Read Replica em outra região AWS (por exemplo, us-east-1 → us-west-2), assegurando continuidade operacional caso toda a região principal fique indisponível."
        ]
    },
    {
        "id": 35,
        "title": "Pergunta 35",
        "domain": "Segurança",
        "prompt": "Uma aplicação roda em uma instância EC2 e processa pedidos diariamente à noite. Essa instância EC2 precisa acessar os pedidos que estão armazenados no S3. Como você recomendaria que a instância EC2 acessasse os pedidos de forma segura?",
        "options": [
            {
                "letter": "A",
                "text": "Criar um usuário IAM programático e armazenar a chave de acesso e a chave secreta no arquivo ~/.aws/credentials da instância EC2.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar uma política de bucket S3 que autorize acesso público.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar uma role IAM.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Usar User Data da instância EC2.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora funcione, armazenar credenciais diretamente na instância é inseguro, pois qualquer pessoa com acesso à instância poderia roubar essas credenciais e comprometer a conta AWS."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora isso permita o acesso, expor o bucket S3 ao público compromete a segurança, permitindo que qualquer pessoa acesse os arquivos armazenados, o que não é adequado para dados sensíveis."
            },
            {
                "correct": true,
                "text": "Correta. As roles IAM permitem que a instância EC2 faça chamadas seguras à API da AWS sem a necessidade de armazenar credenciais diretamente. A role é associada à instância via um perfil de instância, garantindo acesso seguro e gerenciado ao S3."
            },
            {
                "correct": false,
                "text": "Incorreta. User Data é utilizado para executar scripts de inicialização na primeira execução da instância, não para gerenciar permissões de acesso a recursos como o S3."
            }
        ],
        "glossary": [
            "EC2 (Elastic Compute Cloud): Serviço de computação sob demanda da AWS que permite executar e gerenciar servidores virtuais (instâncias) com controle total sobre o sistema operacional e recursos.",
            "User Data: Script de inicialização executado automaticamente quando uma instância EC2 é iniciada, usado para configuração automática, como instalação de pacotes, atualização de software ou execução de comandos de setup.",
            "IAM Role (Função IAM): Conjunto de permissões delegadas que um serviço ou recurso AWS pode assumir temporariamente para acessar outros recursos sem o uso de credenciais fixas.",
            "Instance Profile: Estrutura que vincula uma função IAM (Role) a uma instância EC2, permitindo que ela assuma as permissões definidas pela função de forma automática e segura.",
            "Bucket Policy: Política aplicada diretamente a um bucket S3 que controla o acesso a seus objetos com base em identidade, IP, VPC, ou outras condições.",
            "~/.aws/credentials: Arquivo local usado para armazenar chaves de acesso estáticas, utilizado por ferramentas como AWS CLI e SDKs — não recomendado em produção por questões de segurança."
        ],
        "generalExplanation": [
            "A solução correta é associar uma IAM Role à instância EC2 por meio de um Instance Profile, garantindo acesso seguro e temporário ao bucket Amazon S3 sem armazenar credenciais sensíveis localmente. Essa prática é considerada uma melhor prática de segurança da AWS, pois evita o uso de chaves estáticas, fornece credenciais temporárias automaticamente renovadas via AWS Security Token Service (STS), e simplifica o gerenciamento de permissões."
        ],
        "realWorld": [
            "Imagine uma aplicação de e-commerce executando em instâncias EC2 que precisa acessar arquivos de imagens e relatórios armazenados em um bucket S3. A equipe de DevOps cria uma IAM Role chamada EC2S3AccessRole com a política anexada, e essa role é então associada ao Auto Scaling Group das instâncias EC2 por meio de um Instance Profile. Quando a aplicação executa chamadas usando o SDK da AWS, como boto3 no Python, o SDK obtém automaticamente credenciais temporárias da Role via Instance Metadata Service (IMDSv2), sem necessidade de armazenar chaves no código ou no sistema de arquivos."
        ]
    },
    {
        "id": 36,
        "title": "Pergunta 36",
        "domain": "Implantação",
        "prompt": "O AWS CloudFormation ajuda a modelar e provisionar todos os recursos de infraestrutura em nuvem necessários para o seu negócio. Quais dos seguintes serviços dependem do CloudFormation para provisionar recursos? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "AWS Lambda",
                "correct": false
            },
            {
                "letter": "B",
                "text": "AWS CodeBuild",
                "correct": false
            },
            {
                "letter": "C",
                "text": "AWS Serverless Application Model (AWS SAM)",
                "correct": true
            },
            {
                "letter": "D",
                "text": "AWS Elastic Beanstalk",
                "correct": true
            },
            {
                "letter": "E",
                "text": "AWS Auto Scaling",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O AWS Lambda permite executar código sem necessidade de provisionar ou gerenciar servidores, cobrando apenas pelo tempo de computação consumido. O Lambda não depende do CloudFormation para executar suas funções."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS CodeBuild é um serviço gerenciado de integração contínua que compila código-fonte, executa testes e gera pacotes prontos para implantação. Embora o CodeBuild possa ser utilizado em pipelines que usam CloudFormation, ele não depende diretamente do CloudFormation para provisionar seus recursos."
            },
            {
                "correct": true,
                "text": "Correta. O AWS SAM utiliza a especificação SAM para definir aplicações serverless. Os templates do SAM são uma extensão dos templates do AWS CloudFormation, incluindo componentes adicionais que facilitam o desenvolvimento. Portanto, o AWS SAM depende do CloudFormation para provisionar recursos."
            },
            {
                "correct": true,
                "text": "Correta. O AWS Elastic Beanstalk é um serviço fácil de usar para implantar e escalar aplicações web desenvolvidas em várias linguagens e frameworks. O Elastic Beanstalk utiliza o AWS CloudFormation para lançar os recursos do ambiente e propagar alterações de configuração, dependendo diretamente do CloudFormation para provisionamento."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS Auto Scaling monitora suas aplicações e ajusta automaticamente a capacidade para manter desempenho estável e previsível ao menor custo possível. Embora o Auto Scaling possa usar CloudFormation para facilitar a configuração, ele não depende obrigatoriamente do CloudFormation para provisionar recursos."
            }
        ],
        "glossary": [
            "AWS CloudFormation: Serviço que permite modelar, provisionar e gerenciar recursos AWS como código, utilizando templates declarativos em YAML ou JSON, garantindo automação, consistência e versionamento da infraestrutura.",
            "AWS Serverless Application Model (AWS SAM): Extensão do CloudFormation voltada para aplicações serverless, simplificando a definição e implantação de funções Lambda, APIs, tabelas DynamoDB, tópicos SNS e filas SQS em um único template.",
            "AWS Lambda: Serviço de computação serverless que executa código sob demanda em resposta a eventos, sem necessidade de gerenciamento de servidores.",
            "AWS Auto Scaling: Serviço que ajusta automaticamente a capacidade computacional (como instâncias EC2) para manter desempenho e otimizar custos.",
            "AWS CodeBuild: Serviço gerenciado de integração contínua (CI) que compila, testa e empacota código, sendo parte essencial de pipelines de entrega contínua.",
            "AWS Elastic Beanstalk: Plataforma como serviço (PaaS) que automatiza a implantação, monitoramento e escalabilidade de aplicações web, usando o CloudFormation como base para o provisionamento dos recursos subjacentes (EC2, RDS, Load Balancer, etc.)."
        ],
        "generalExplanation": [
            "O AWS CloudFormation é a base para o provisionamento declarativo e automatizado de infraestrutura na AWS. Ele permite que ambientes inteiros sejam criados e atualizados de forma controlada, repetível e versionada, eliminando tarefas manuais e reduzindo erros humanos. Serviços como o AWS SAM e o Elastic Beanstalk dependem diretamente do CloudFormation para funcionar, pois ambos utilizam templates CloudFormation internamente."
        ],
        "realWorld": [
            "Em um pipeline de desenvolvimento moderno, o uso do CloudFormation é essencial para garantir infraestrutura como código (IaC), controle de versão e reprodutibilidade entre ambientes. Por exemplo, um desenvolvedor serverless pode usar o AWS SAM para definir, em um único arquivo YAML, todas as funções Lambda, tabelas DynamoDB e APIs geradas via API Gateway. Ao executar sam deploy, o SAM converte automaticamente esse template em recursos CloudFormation, garantindo um provisionamento previsível e auditável."
        ]
    },
    {
        "id": 37,
        "title": "Pergunta 37",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma equipe de desenvolvimento criou um novo usuário IAM que possui permissão s3:PutObject para gravar em um bucket S3. Esse bucket S3 utiliza criptografia do lado do servidor com chaves gerenciadas pelo AWS KMS (SSE-KMS) como criptografia padrão. Usando o ID da chave de acesso e a chave secreta do usuário IAM, a aplicação recebeu um erro de acesso negado ao chamar a API PutObject. Como um Associate Developer, como você resolveria esse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Corrigir a política do usuário IAM para permitir a ação kms:GenerateDataKey",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Corrigir a política do usuário IAM para permitir a ação s3:Encrypt",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Corrigir a ACL do bucket S3 para permitir que o usuário IAM faça upload de objetos criptografados",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Corrigir a política do bucket S3 para permitir que o usuário IAM faça upload de objetos criptografados",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Para buckets com criptografia padrão SSE-KMS, o usuário precisa da permissão kms:GenerateDataKey para que o AWS KMS possa gerar a chave de dados usada para criptografar o objeto. Sem essa permissão, a chamada PutObject falhará com erro de acesso negado."
            },
            {
                "correct": false,
                "text": "Incorreta. A ação s3:Encrypt não existe no conjunto de permissões do S3 e é um item inválido. A permissão correta envolve ações do KMS, como kms:GenerateDataKey."
            },
            {
                "correct": false,
                "text": "Incorreta. As listas de controle de acesso (ACLs) do Amazon S3 gerenciam permissões básicas para buckets e objetos, mas não concedem permissões para operações relacionadas ao AWS KMS. O problema está relacionado à falta de permissões para usar a chave KMS."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora políticas de bucket possam controlar o acesso ao bucket, o usuário já possui permissão s3:PutObject. O problema está na falta da permissão para gerar a chave de dados KMS necessária para a criptografia, que deve ser concedida na política do usuário ou função IAM."
            }
        ],
        "glossary": [
            "IAM (Identity and Access Management): Serviço da AWS que gerencia identidades, funções, grupos e permissões de acesso a recursos na nuvem.",
            "S3 (Simple Storage Service): Serviço de armazenamento de objetos altamente durável e escalável da AWS, usado para armazenar e recuperar dados.",
            "SSE-KMS (Server-Side Encryption with AWS KMS): Método de criptografia no lado do servidor que utiliza chaves gerenciadas pelo AWS KMS para proteger dados em repouso no S3.",
            "kms:GenerateDataKey: Permissão que autoriza a geração de uma chave de dados (data key) usada para criptografar um objeto durante operações de gravação, como o PutObject.",
            "ACL (Access Control List): Mecanismo de controle de acesso simples aplicado a buckets e objetos S3, permitindo conceder ou restringir permissões básicas.",
            "Política do bucket: Documento JSON aplicado diretamente ao bucket S3, que define permissões específicas para controle de acesso.",
            "Política IAM: Documento JSON anexado a usuários, grupos ou funções IAM, determinando as ações permitidas em recursos AWS.",
            "PutObject API: Operação da API do S3 usada para enviar (gravar) um objeto em um bucket.",
            "Erro de acesso negado: Indicação de que a entidade solicitante não possui as permissões necessárias para executar a ação desejada."
        ],
        "generalExplanation": [
            "A resposta correta é reconhecer que, quando um bucket S3 usa criptografia SSE-KMS, qualquer operação de gravação (como PutObject) exige duas permissões distintas: s3:PutObject (para enviar o objeto ao bucket) e kms:GenerateDataKey (para permitir que o AWS KMS gere a chave de dados usada na criptografia). Sem a segunda permissão, a operação falhará com erro de acesso negado, mesmo que o usuário tenha permissão total no S3."
        ],
        "realWorld": [
            "Considere uma aplicação serverless que usa AWS Lambda para processar dados e armazená-los em um bucket S3 configurado com SSE-KMS. Mesmo que a função Lambda tenha permissão s3:PutObject, a gravação falhará caso ela não tenha também a permissão kms:GenerateDataKey para a chave KMS utilizada. A política mínima seria: { 'Effect': 'Allow', 'Action': ['s3:PutObject', 'kms:GenerateDataKey'], 'Resource': ['arn:aws:s3:::meu-bucket/*', 'arn:aws:kms:us-east-1:111122223333:key/abcd1234-ef56-7890-gh12-ijklmnopqrst'] }"
        ]
    },
    {
        "id": 38,
        "title": "Pergunta 38",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um site de comércio eletrônico de uma empresa espera centenas de milhares de visitantes na Black Friday. O departamento de marketing está preocupado que o alto volume de pedidos possa sobrecarregar o Amazon SQS, levando a falhas no processamento das mensagens. A empresa solicitou que você indique quais medidas devem ser tomadas como precaução contra esse alto volume. Qual passo você sugeriria como um Desenvolvedor Associado?",
        "options": [
            {
                "letter": "A",
                "text": "O Amazon SQS é altamente escalável e não necessita de nenhuma intervenção para lidar com os volumes elevados esperados.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Pré-configurar a fila do SQS para aumentar a capacidade quando o número de mensagens atingir um determinado limite.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Converter a fila em uma fila FIFO ordenada, pois as mensagens para o sistema em queda serão processadas mais rapidamente uma vez que estejam ordenadas.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Habilitar o autoescalonamento na fila do SQS.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O Amazon SQS utiliza a infraestrutura da AWS para escalar dinamicamente conforme a demanda. Ele se ajusta elasticamente ao seu aplicativo, eliminando a necessidade de planejamento de capacidade ou pré-provisionamento. Para a maioria das filas padrão, o limite máximo é de aproximadamente 120.000 mensagens em processamento simultâneo (inflight), o que é suficiente para grandes volumes."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon SQS escala automaticamente e dinamicamente conforme a demanda, não sendo necessário nem possível pré-configurar a capacidade da fila para aumentar em determinados limiares de mensagens."
            },
            {
                "correct": false,
                "text": "Incorreta. Não é possível converter uma fila padrão existente em uma fila FIFO. Para usar uma fila FIFO, é necessário criar uma nova fila FIFO ou excluir a fila padrão atual e recriá-la como FIFO. Além disso, a ordenação das mensagens não necessariamente acelera o processamento."
            },
            {
                "correct": false,
                "text": "Incorreta. As filas do Amazon SQS são, por definição, autoescaláveis e não requerem nenhuma configuração adicional para autoescalonamento. Não existe uma opção para habilitar ou configurar autoescalonamento manualmente nas filas SQS."
            }
        ],
        "glossary": [
            "Amazon SQS (Simple Queue Service): Serviço de mensageria totalmente gerenciado e escalável que desacopla componentes de aplicações distribuídas, garantindo entrega confiável de mensagens.",
            "Autoescalonamento: Capacidade de um serviço ajustar automaticamente seus recursos conforme a demanda, sem necessidade de configuração manual.",
            "FIFO (First-In-First-Out): Tipo de fila que mantém a ordem exata de envio e processamento das mensagens, usada quando a sequência é crítica.",
            "Inflight messages: Mensagens que já foram recebidas por um consumidor, mas ainda não processadas ou excluídas da fila.",
            "Pré-provisionamento: Estratégia de alocar capacidade antecipadamente antes de um aumento esperado de demanda — necessária em alguns serviços, mas não aplicável ao SQS."
        ],
        "generalExplanation": [
            "O Amazon SQS é um serviço totalmente gerenciado e elástico, o que significa que ele escalona automaticamente para lidar com variações drásticas no volume de mensagens — sem necessidade de autoescalonamento manual ou pré-provisionamento de capacidade. Durante eventos de grande demanda (como a Black Friday), o SQS ajusta-se dinamicamente para suportar milhões de mensagens por segundo, mantendo alta disponibilidade e baixa latência."
        ],
        "realWorld": [
            "Em uma aplicação de e-commerce, o Amazon SQS pode gerenciar o fluxo de pedidos, notificações e pagamentos de forma assíncrona. Durante um pico de vendas — como Black Friday — o volume de mensagens aumenta exponencialmente. O SQS escala automaticamente para armazenar e entregar todas as mensagens sem perda ou degradação de performance. Enquanto isso, os consumidores (por exemplo, funções AWS Lambda ou tarefas ECS) podem ser configurados com autoescalonamento para acompanhar o volume crescente de mensagens processadas."
        ]
    },
    {
        "id": 39,
        "title": "Pergunta 39",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Recentemente, você iniciou uma plataforma de aprendizado online utilizando AWS Lambda e API Gateway. A primeira versão foi um sucesso, e você começou a desenvolver novos recursos para a segunda versão. Você gostaria de introduzir gradualmente a segunda versão, direcionando apenas 10% do tráfego de entrada para a nova versão da função Lambda. Qual solução você deve escolher?",
        "options": [
            {
                "letter": "A",
                "text": "Usar tags para distinguir as diferentes versões",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar variáveis de ambiente",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar aliases do AWS Lambda",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Implantar sua função Lambda em uma VPC",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível usar tags para organizar funções Lambda por proprietário, projeto ou departamento, as tags são pares chave-valor livres usados para filtragem e relatórios de custo, e não para controle de roteamento de tráfego entre versões da função Lambda."
            },
            {
                "correct": false,
                "text": "Incorreta. Variáveis de ambiente são usadas para armazenar configurações e segredos que podem alterar o comportamento da função sem modificar o código, mas não oferecem controle de roteamento ou distribuição percentual de tráfego entre versões da função Lambda."
            },
            {
                "correct": true,
                "text": "Correta. Um alias do Lambda funciona como um ponteiro para uma versão específica da função. Você pode criar aliases que apontam para diferentes versões e configurar o roteamento de tráfego para distribuir uma porcentagem do tráfego entre versões, permitindo uma implantação gradual, como direcionar 10% do tráfego para a nova versão."
            },
            {
                "correct": false,
                "text": "Incorreta. Implantar uma função Lambda em uma VPC adiciona uma camada de segurança e controle de rede, mas não permite gerenciar o roteamento ou a divisão percentual do tráfego entre versões diferentes da função Lambda."
            }
        ],
        "glossary": [
            "AWS Lambda alias: Ponteiro nomeado que referencia uma versão específica de uma função Lambda, permitindo roteamento e gerenciamento de versões.",
            "AWS Lambda tags: Pares chave-valor aplicados a funções Lambda para organização, controle de custos e governança, sem impacto no comportamento da execução.",
            "Variáveis de ambiente Lambda: Parâmetros configuráveis que influenciam o comportamento da função em tempo de execução, sem necessidade de alterar o código.",
            "VPC (Virtual Private Cloud): Rede virtual isolada dentro da AWS que oferece controle detalhado sobre endereçamento IP, sub-redes e segurança.",
            "Roteamento de tráfego: Mecanismo que distribui solicitações entre diferentes versões ou endpoints, possibilitando implantações graduais e testes controlados."
        ],
        "generalExplanation": [
            "A alternativa correta é o uso de aliases do AWS Lambda, pois eles permitem apontar para versões específicas de uma função e configurar distribuição percentual de tráfego entre essas versões — por exemplo, enviando 10% das requisições para uma nova versão e mantendo 90% na anterior. Essa abordagem viabiliza implantações graduais (canary releases) e testes em produção sem interrupção de serviço."
        ],
        "realWorld": [
            "Imagine um time que mantém uma API serverless em produção usando AWS Lambda. Antes de liberar uma nova versão com código atualizado, eles criam um alias 'prod' que aponta para a versão atual e, em seguida, configuram o roteamento para enviar 10% do tráfego para a nova versão. Monitorando métricas no Amazon CloudWatch e rastros no AWS X-Ray, o time avalia erros, latência e impacto nos usuários. Se os resultados forem satisfatórios, eles aumentam gradualmente o tráfego até 100%."
        ]
    },
    {
        "id": 40,
        "title": "Pergunta 40",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Como desenvolvedor, você deseja criar uma configuração personalizada para instâncias Amazon EC2 executando em um grupo de Auto Scaling. A solução deve permitir que o grupo faça o auto scaling com base na métrica de 'uso médio de RAM' das suas instâncias Amazon EC2. Qual opção oferece a melhor solução?",
        "options": [
            {
                "letter": "A",
                "text": "Criar uma métrica personalizada no CloudWatch e fazer suas instâncias enviarem dados para ela usando PutMetricData. Em seguida, criar um alarme baseado nessa métrica.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Migrar sua aplicação para AWS Lambda.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Habilitar o monitoramento detalhado para EC2 e Auto Scaling para obter os dados de uso de RAM e criar um alarme no CloudWatch baseado nesses dados.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Criar um alarme personalizado para seu grupo de Auto Scaling e fazer suas instâncias acionarem o alarme usando a API PutAlarmData.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Você pode criar uma métrica personalizada para uso de RAM e configurar suas instâncias EC2 para enviar esses dados ao CloudWatch via PutMetricData. Depois, cria-se um alarme baseado nessa métrica para acionar o auto scaling conforme o uso médio de RAM."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o AWS Lambda seja útil para arquiteturas serverless, ele não é aplicável para monitorar o uso de RAM em instâncias EC2 dentro de um grupo de Auto Scaling, que é o requisito deste caso."
            },
            {
                "correct": false,
                "text": "Incorreta. O monitoramento detalhado aumenta a frequência de coleta das métricas padrão para 1 minuto, mas não coleta métricas personalizadas como uso de RAM. Você ainda precisaria criar e enviar a métrica personalizada de uso de RAM para o CloudWatch."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa abordagem não funciona porque as instâncias precisam compartilhar e agregar os dados de uso de RAM para calcular a média do grupo. Não existe uma API PutAlarmData para instâncias acionarem alarmes diretamente, e o Auto Scaling depende de métricas agregadas no CloudWatch."
            }
        ],
        "glossary": [
            "Amazon EC2: Serviço de computação escalável em nuvem que permite executar e gerenciar instâncias (máquinas virtuais) sob demanda.",
            "Auto Scaling Group (ASG): Recurso que ajusta automaticamente o número de instâncias EC2 para manter desempenho e disponibilidade, reduzindo custos quando a demanda diminui.",
            "CloudWatch: Serviço da AWS para monitoramento de métricas, logs e eventos, com suporte a alarmes e dashboards de observabilidade.",
            "Métrica personalizada: Métrica criada e enviada pelo usuário ao CloudWatch para monitorar dados que não são coletados nativamente, como uso de memória ou temperatura do sistema.",
            "PutMetricData: API do Amazon CloudWatch usada para enviar valores de métricas personalizadas a partir de scripts, agentes ou aplicações.",
            "Alarme do CloudWatch: Configuração que monitora métricas e executa ações automáticas (como enviar notificações ou acionar escalonamento no ASG) quando uma condição é atendida."
        ],
        "generalExplanation": [
            "O CloudWatch coleta métricas padrão das instâncias EC2, como uso de CPU, disco e rede, mas não monitora uso de memória RAM nativamente. Para implementar auto scaling baseado em uso de memória, é necessário criar uma métrica personalizada que registre o consumo de RAM de cada instância, utilizar a API PutMetricData (ou o CloudWatch Agent) para enviar periodicamente esses dados ao CloudWatch, criar um alarme do CloudWatch configurado para monitorar a média de uso de RAM no grupo de instâncias, e associar esse alarme ao Auto Scaling Group."
        ],
        "realWorld": [
            "Imagine uma aplicação web hospedada em instâncias EC2 que apresenta lentidão durante picos de uso porque o consumo de memória cresce rapidamente. O time de DevOps decide monitorar o uso de RAM de forma automatizada: um script ou o CloudWatch Agent é instalado em cada instância EC2 para coletar o uso de memória, a cada minuto o agente envia os dados para o CloudWatch usando a API PutMetricData com o namespace Custom/EC2Memory, e um alarme do CloudWatch é configurado para acionar o ASG quando a média de uso de memória ultrapassa 80%."
        ]
    },
    {
        "id": 41,
        "title": "Pergunta 41",
        "domain": "Segurança",
        "prompt": "Uma empresa de marketing digital hospeda seu site em um bucket Amazon S3 A. A equipe de desenvolvimento percebe que as fontes web hospedadas em outro bucket S3 B não estão carregando no site. Qual das seguintes soluções pode ser usada para resolver esse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Configurar CORS no bucket A que hospeda o site para permitir qualquer origem responder às requisições.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Atualizar as políticas dos buckets A e B para permitir o carregamento correto das fontes web no site.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Habilitar versionamento em ambos os buckets para facilitar o funcionamento correto do site.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Configurar CORS no bucket B que hospeda as fontes web para permitir que a origem do bucket A faça as requisições.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A configuração CORS deve ser aplicada no bucket que hospeda os recursos (fontes web), ou seja, no bucket B, para permitir que o site hospedado no bucket A possa acessar esses recursos."
            },
            {
                "correct": false,
                "text": "Incorreta. Atualizar as políticas dos buckets não resolve o problema de carregamento das fontes web, pois o controle de acesso entre domínios diferentes para recursos web é gerenciado pela configuração CORS, não pelas políticas de bucket."
            },
            {
                "correct": false,
                "text": "Incorreta. O versionamento é usado para manter múltiplas versões de objetos no bucket, não tem relação com o problema de carregamento das fontes web entre buckets diferentes."
            },
            {
                "correct": true,
                "text": "Correta. O CORS (Cross-Origin Resource Sharing) deve ser configurado no bucket B para permitir que o site hospedado no bucket A acesse as fontes web. Isso define quais origens podem acessar os recursos do bucket B, permitindo o carregamento correto das fontes no site."
            }
        ],
        "glossary": [
            "CORS (Cross-Origin Resource Sharing): mecanismo de segurança implementado pelos navegadores que controla quais origens (domínios) podem acessar recursos hospedados em outro domínio, evitando acessos indevidos.",
            "Bucket: repositório de armazenamento de objetos no Amazon S3, utilizado para guardar arquivos, imagens, fontes e outros recursos de forma escalável e segura.",
            "Políticas de bucket: regras baseadas em permissões IAM aplicadas diretamente a um bucket S3 para controlar quem pode acessar ou modificar seus objetos, mas que não substituem as políticas de CORS.",
            "Versionamento: funcionalidade do S3 que mantém múltiplas versões de um mesmo objeto, permitindo auditoria, restauração e controle de alterações, sem relação com controle de acesso entre domínios.",
            "Origem (Origin): domínio, protocolo e porta de onde uma requisição HTTP é feita; essencial para determinar se uma solicitação cross-origin deve ser permitida pelo servidor."
        ],
        "generalExplanation": [
            "O problema descrito envolve uma requisição cross-origin, quando um site hospedado em um bucket S3 (bucket A) tenta carregar fontes ou recursos hospedados em outro bucket (bucket B). Por padrão, os navegadores bloqueiam esse tipo de acesso para proteger o usuário contra ataques de segurança. A solução correta é configurar o CORS (Cross-Origin Resource Sharing) no bucket B, adicionando uma regra que autorize explicitamente a origem do site."
        ],
        "realWorld": [
            "Suponha que uma empresa hospede um site estático em um bucket S3 público (por exemplo, site-empresa.com) e armazene suas fontes personalizadas em outro bucket (recursos-fontes.com). Sem uma política CORS configurada no bucket de fontes, o navegador bloqueará a requisição, resultando em erros como 'CORS policy: No 'Access-Control-Allow-Origin' header'. O desenvolvedor adiciona uma configuração CORS ao bucket de recursos (bucket B) semelhante a: <CORSConfiguration> <CORSRule> <AllowedOrigin>https://site-empresa.com</AllowedOrigin> <AllowedMethod>GET</AllowedMethod> <AllowedHeader>*</AllowedHeader> </CORSRule> </CORSConfiguration>"
        ]
    },
    {
        "id": 42,
        "title": "Pergunta 42",
        "domain": "Segurança",
        "prompt": "Uma grande empresa armazena seus dados estáticos em buckets do Amazon S3. Cada linha de serviço da empresa possui sua própria conta AWS. Para um caso de uso de negócios, o departamento Financeiro precisa conceder acesso aos dados do bucket S3 deles para o departamento de Recursos Humanos. Qual das opções abaixo NÃO é viável para acesso cross-account a objetos de buckets S3?",
        "options": [
            {
                "letter": "A",
                "text": "Usar Access Control List (ACL) e políticas IAM para acesso programático exclusivo a objetos de buckets S3",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Usar políticas baseadas em recursos e políticas do AWS Identity and Access Management (IAM) para acesso programático exclusivo a objetos de buckets S3",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Usar roles IAM e políticas baseadas em recursos para delegar acesso entre contas em diferentes partitions via acesso programático exclusivo",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar roles IAM cross-account para acesso programático e via console a objetos de buckets S3",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. As ACLs do S3 podem ser usadas para gerenciar permissões em cenários específicos, especialmente quando as políticas IAM e de bucket não atendem completamente às necessidades. As ACLs permitem definir permissões como READ, WRITE, READ_ACP, WRITE_ACP e FULL_CONTROL para contas AWS ou grupos pré-definidos do S3."
            },
            {
                "correct": true,
                "text": "Correta. Utilizar políticas baseadas em recursos (como bucket policies) combinadas com políticas IAM é uma prática recomendada para controlar o acesso programático entre contas. As políticas baseadas em recursos permitem definir quem pode acessar quais objetos e de que forma, proporcionando controle granular e auditável."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa afirmação é falsa e, portanto, a resposta correta para a pergunta. Roles IAM e políticas baseadas em recursos só permitem delegar acesso entre contas dentro da mesma partition da AWS. Por exemplo, uma conta na região US West (N. California) na partition padrão 'aws' não pode conceder acesso a usuários de uma conta na China (Beijing) que está na partition 'aws-cn' usando políticas baseadas em recursos do S3."
            },
            {
                "correct": true,
                "text": "Correta. Roles IAM cross-account são amplamente utilizadas para centralizar a gestão de permissões e permitir acesso tanto programático quanto via console entre contas AWS. Essa abordagem simplifica o gerenciamento de acesso a múltiplos buckets e elimina a necessidade de modificar ACLs dos objetos."
            }
        ],
        "glossary": [
            "AWS partition: Agrupamento isolado de regiões da AWS que compartilham a mesma infraestrutura de controle e identidade. As principais partitions são 'aws' (global padrão), 'aws-cn' (China) e 'aws-us-gov' (Governo dos EUA). Recursos e identidades não podem ser compartilhados entre partitions, pois cada uma opera de forma independente.",
            "Bucket policy: Política baseada em recursos aplicada diretamente a um bucket S3, permitindo controle granular sobre quem pode acessar quais objetos e sob quais condições.",
            "IAM role: Entidade IAM que define permissões delegáveis e temporárias, usada para conceder acesso cross-account entre contas dentro da mesma partition AWS.",
            "ACL (Access Control List): Mecanismo legado que define permissões básicas (como leitura e escrita) para buckets ou objetos S3, podendo conceder acesso a outras contas AWS específicas.",
            "Cross-account access: Capacidade de compartilhar recursos entre contas diferentes dentro da mesma partition AWS, utilizando políticas baseadas em recursos, roles IAM ou ACLs.",
            "Programmatic access: Acesso via APIs, SDKs ou AWS CLI, geralmente utilizado por aplicações ou scripts automatizados.",
            "Console access: Acesso via AWS Management Console, a interface web administrativa da AWS."
        ],
        "generalExplanation": [
            "O acesso cross-account ao Amazon S3 é amplamente suportado na AWS, mas restrito ao escopo da mesma partition. Isso significa que contas pertencentes à partition padrão ('aws') podem compartilhar dados entre si usando políticas baseadas em recursos, ACLs ou roles IAM com confiança entre contas — mas não podem compartilhar diretamente com contas de outra partition, como 'aws-cn' (China) ou 'aws-us-gov'. Isso ocorre porque cada partition possui seu próprio espaço de identidades e infraestrutura isolada, o que impede o uso de ARNs (Amazon Resource Names) entre elas."
        ],
        "realWorld": [
            "Imagine uma empresa multinacional com duas unidades: uma operação global hospedada na partition 'aws' (por exemplo, us-east-1) e uma operação local na China, hospedada na partition 'aws-cn' (cn-north-1). A equipe global armazena relatórios financeiros em um bucket S3 e deseja conceder acesso direto à equipe da China. Entretanto, ao tentar configurar uma IAM Role cross-account com confiança para a conta na partition 'aws-cn', a AWS rejeita a política, pois ARNs de partitions diferentes não são reconhecidos. A solução é criar uma pipeline de replicação de dados entre partitions usando AWS DataSync ou serviços intermediários."
        ]
    },
    {
        "id": 43,
        "title": "Pergunta 43",
        "domain": "Segurança",
        "prompt": "Um provedor de serviços de telecomunicações armazena seus dados críticos de clientes no Amazon Simple Storage Service (Amazon S3). Quais das seguintes opções podem ser usadas para controlar o acesso aos dados armazenados no Amazon S3? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Autenticação via Query String, Limites de Permissões (Permissions Boundaries)",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Autenticação via Query String, Listas de Controle de Acesso (ACLs)",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Autenticação de banco de dados IAM, Políticas de bucket",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Políticas de bucket, Políticas do IAM (Identity and Access Management)",
                "correct": true
            },
            {
                "letter": "E",
                "text": "Limites de Permissões (Permissions Boundaries), Políticas do IAM (Identity and Access Management)",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A autenticação via Query String é um método válido para controlar o acesso temporário a objetos no S3, mas limites de permissões (permissions boundaries) não são usados para controle direto de acesso a recursos S3, pois apenas definem o limite máximo de permissões que uma entidade IAM pode receber."
            },
            {
                "correct": true,
                "text": "Correta. A autenticação via Query String permite gerar URLs pré-assinadas que concedem acesso temporário a objetos S3, enquanto as ACLs permitem conceder permissões específicas (como READ, WRITE, FULL_CONTROL) para usuários ou grupos em buckets ou objetos individuais."
            },
            {
                "correct": false,
                "text": "Incorreta. A autenticação de banco de dados IAM é um método específico para autenticação em bancos de dados MySQL e PostgreSQL gerenciados pela AWS e não é aplicável para controle de acesso ao Amazon S3."
            },
            {
                "correct": true,
                "text": "Correta. Políticas de bucket definem regras que se aplicam a todas as requisições para um bucket S3, podendo restringir acesso por IP, HTTP referrer, entre outros. Políticas do IAM permitem controle granular de permissões para usuários e grupos dentro da conta AWS, incluindo acesso a recursos S3."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora as políticas do IAM sejam usadas para controle de acesso, limites de permissões (permissions boundaries) apenas definem o limite máximo de permissões que uma entidade IAM pode receber e não concedem permissões diretamente."
            }
        ],
        "glossary": [
            "Autenticação via Query String: Método que gera URLs pré-assinadas (pre-signed URLs) para fornecer acesso temporário e seguro a objetos no Amazon S3, sem necessidade de expor credenciais permanentes.",
            "Listas de Controle de Acesso (ACLs): Mecanismo legado e opcional que define permissões em nível de objeto ou bucket, concedendo acesso a usuários ou grupos específicos.",
            "Políticas de bucket: Regras em formato JSON aplicadas diretamente ao bucket S3, permitindo controle centralizado e granular de acesso, com condições como restrições por IP, HTTPS obrigatório ou contas específicas da AWS.",
            "Políticas do IAM (Identity and Access Management): Políticas que determinam quem (usuário, grupo ou função) pode acessar recursos AWS, incluindo buckets S3, e quais ações podem ser executadas.",
            "Limites de Permissões (Permissions Boundaries): Políticas que definem o limite máximo de permissões IAM, mas não concedem acesso por si só.",
            "Autenticação de banco de dados IAM: Mecanismo usado para autenticação em bancos de dados gerenciados (como Amazon RDS), não aplicável ao controle de acesso do S3."
        ],
        "generalExplanation": [
            "O controle de acesso no Amazon S3 deve ser implementado de forma defensiva e em camadas, combinando políticas IAM e políticas de bucket como mecanismos principais de segurança. As políticas do IAM controlam quem dentro da conta AWS pode acessar o S3 e quais ações são permitidas. As políticas de bucket complementam essas regras, definindo condições externas, como quais endereços IP podem acessar o bucket, se a conexão deve ser HTTPS, ou se o acesso é permitido a contas AWS específicas."
        ],
        "realWorld": [
            "Imagine uma empresa de telecomunicações que armazena relatórios e gravações de chamadas no Amazon S3. O time de desenvolvimento implementa uma estratégia de segurança em três camadas: políticas IAM que garantem que apenas funções de serviço e usuários internos autorizados possam listar e acessar objetos, políticas de bucket que impõem restrições adicionais como permitir acesso somente via HTTPS e bloquear IPs fora da rede corporativa, e URLs pré-assinadas (Query String Authentication) que permitem que clientes externos baixem relatórios de uso temporariamente."
        ]
    },
    {
        "id": 44,
        "title": "Pergunta 44",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua aplicação web lê e grava dados em uma tabela DynamoDB. A tabela está provisionada com 400 Unidades de Capacidade de Gravação (WCU) compartilhadas entre 4 partições. Uma das partições recebe 250 WCU/segundo, enquanto as outras recebem muito menos. Você recebe o erro 'ProvisionedThroughputExceededException'. Qual é a causa mais provável desse erro?",
        "options": [
            {
                "letter": "A",
                "text": "A política IAM configurada está incorreta.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Você tem uma partição quente (hot partition).",
                "correct": true
            },
            {
                "letter": "C",
                "text": "O monitoramento do CloudWatch está atrasado.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "As Unidades de Capacidade de Gravação (WCU) são aplicadas a todas as suas tabelas DynamoDB e precisam ser reconfiguradas.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O erro não está relacionado a permissões ou políticas IAM, mas sim ao fato de que a capacidade provisionada foi excedida. Portanto, não é um problema de autorização."
            },
            {
                "correct": true,
                "text": "Correta. Nem sempre é possível distribuir a atividade de leitura e gravação de forma uniforme entre as partições. Quando o acesso aos dados é desequilibrado, uma 'partição quente' recebe um volume maior de tráfego de leitura e gravação em comparação às outras. O DynamoDB utiliza a capacidade adaptativa para permitir que sua aplicação continue lendo e gravando nessas partições quentes sem ser limitada, desde que o tráfego não ultrapasse a capacidade total provisionada da tabela ou o limite máximo da partição."
            },
            {
                "correct": false,
                "text": "Incorreta. O erro 'ProvisionedThroughputExceededException' é específico do DynamoDB e não está relacionado a qualquer serviço conectado, como o CloudWatch. O CloudWatch é um serviço totalmente gerenciado e não causa limitações ou erros de throughput no DynamoDB."
            },
            {
                "correct": false,
                "text": "Incorreta. As Unidades de Capacidade de Leitura (RCU) e Gravação (WCU) são configuradas de forma independente para cada tabela DynamoDB. Não existe compartilhamento de capacidade entre tabelas, portanto essa afirmação está incorreta."
            }
        ],
        "glossary": [
            "ProvisionedThroughputExceededException: Erro lançado pelo Amazon DynamoDB quando o volume de leituras ou gravações ultrapassa a capacidade provisionada de uma ou mais partições da tabela.",
            "Unidades de Capacidade de Gravação (WCU): Medida de capacidade do DynamoDB que define quantas gravações por segundo uma tabela pode processar (1 WCU = 1 gravação por segundo de até 1 KB).",
            "Partição quente (Hot Partition): Partição que recebe tráfego desproporcional, concentrando muitas requisições e excedendo sua capacidade alocada.",
            "Capacidade adaptativa (Adaptive Capacity): Mecanismo automático do DynamoDB que redistribui capacidade entre partições, ajudando a mitigar temporariamente sobrecargas causadas por partições quentes.",
            "CloudWatch: Serviço de monitoramento e observabilidade da AWS usado para acompanhar métricas de throughput, latência e erros no DynamoDB.",
            "IAM (Identity and Access Management): Serviço que gerencia permissões de acesso a recursos AWS, não relacionado diretamente ao controle de throughput."
        ],
        "generalExplanation": [
            "O erro ProvisionedThroughputExceededException ocorre quando uma partição específica do DynamoDB recebe mais tráfego do que sua capacidade provisionada suporta, resultando em uma partição quente. Mesmo que a capacidade total da tabela (WCU e RCU) pareça suficiente, o DynamoDB distribui essa capacidade entre partições internas com base na chave de partição. Se o padrão de acesso concentrar gravações ou leituras em poucos valores de chave, o tráfego se torna desigual — e a partição sobrecarregada gera esse erro."
        ],
        "realWorld": [
            "Imagine uma aplicação de e-commerce que grava pedidos no DynamoDB usando a ID do cliente como chave de partição. Se um cliente corporativo grande gerar centenas de pedidos por segundo, essa única partição ficará sobrecarregada, enquanto outras permanecem ociosas — disparando o erro ProvisionedThroughputExceededException. Para mitigar o problema, o time de desenvolvimento pode redefinir a chave de partição para distribuir melhor o tráfego (por exemplo, usar clientId#timestamp), migrar a tabela para capacidade sob demanda (On-Demand), ou monitorar métricas de throttling e latência via Amazon CloudWatch para ajustes proativos."
        ]
    },
    {
        "id": 45,
        "title": "Pergunta 45",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa líder no setor financeiro oferece serviços de agregação de dados para firmas de trading de Wall Street. A empresa cobra seus clientes com base na quantidade de dados de clickstream fornecidos. Como a empresa opera em um setor regulado, é necessário que os mesmos dados de clickstream, na mesma ordem, estejam disponíveis para auditoria dentro de uma janela de 7 dias. Como um Desenvolvedor Associado, qual dos seguintes serviços AWS você recomendaria para executar o processo de faturamento e auditoria sobre os dados de clickstream fornecidos, garantindo que ambos os processos utilizem os dados na mesma ordem?",
        "options": [
            {
                "letter": "A",
                "text": "AWS Kinesis Data Streams",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Amazon SQS",
                "correct": false
            },
            {
                "letter": "C",
                "text": "AWS Kinesis Data Firehose",
                "correct": false
            },
            {
                "letter": "D",
                "text": "AWS Kinesis Data Analytics",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O Amazon Kinesis Data Streams é um serviço escalável e durável para streaming de dados em tempo real, que captura grandes volumes de dados de múltiplas fontes. Ele garante a ordenação dos registros e permite que múltiplas aplicações leiam e processem os dados na mesma ordem, inclusive possibilitando a leitura e reprocessamento dos dados em até 365 dias."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon Simple Queue Service (SQS) oferece filas padrão e FIFO. Embora as filas FIFO garantam a ordem e entrega única das mensagens, elas não suportam múltiplos consumidores lendo a mesma mensagem na mesma ordem com atraso de horas, como exigido para auditoria."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS Kinesis Data Firehose é uma solução totalmente gerenciada para carregar dados de streaming em destinos como Amazon S3, Redshift e Elasticsearch. Ele é focado em ingestão e entrega de dados, não em processamento ordenado ou armazenamento para reprocessamento."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS Kinesis Data Analytics é utilizado para analisar dados de streaming em tempo real, permitindo a construção rápida de consultas SQL e aplicações Java sofisticadas para transformar, agregar e analisar dados. No entanto, ele não garante a ordenação dos dados nem o armazenamento dos mesmos para reprocessamento em ordem."
            }
        ],
        "glossary": [
            "Amazon Kinesis Data Streams (KDS): Serviço de streaming em tempo real que captura, armazena e processa grandes volumes de dados com garantia de ordenação e durabilidade, permitindo múltiplos consumidores simultâneos.",
            "AWS Kinesis Data Analytics: Serviço para analisar e transformar dados de streaming em tempo real usando consultas SQL ou aplicações Java, ideal para agregações e análises contínuas.",
            "Amazon SQS (Simple Queue Service): Serviço de filas de mensagens que desacopla componentes de aplicações, mas não mantém ordenação global nem múltiplos consumidores lendo a mesma mensagem simultaneamente.",
            "AWS Kinesis Data Firehose: Serviço de entrega contínua de dados de streaming em destinos como S3, Redshift e OpenSearch, focado em transporte e armazenamento, não em processamento ordenado.",
            "Ordenação de dados: Propriedade que garante que os eventos sejam processados na mesma sequência em que foram gerados, essencial para manter consistência de sistemas financeiros e transacionais.",
            "Reprocessamento: Capacidade de ler novamente dados armazenados no fluxo para auditoria, correções ou análises retroativas, sem perda da ordem original.",
            "Janela de retenção: Período (até 365 dias no Kinesis Data Streams) durante o qual os dados ficam disponíveis para consumo e reprocessamento.",
            "Auditoria: Processo de verificação de integridade e conformidade dos dados, exigido em setores regulados como o financeiro."
        ],
        "generalExplanation": [
            "A melhor solução é utilizar o Amazon Kinesis Data Streams (KDS), pois ele combina três requisitos críticos para o cenário descrito: ordenação garantida dos registros, durabilidade e retenção configurável até 365 dias, e reprocessamento paralelo e independente por múltiplos consumidores. Essas características tornam o KDS ideal para aplicações que precisam manter a sequência exata dos eventos e permitir que vários sistemas (como faturamento e auditoria) acessem o mesmo conjunto de dados de forma consistente."
        ],
        "realWorld": [
            "Em um sistema financeiro que monitora transações ou acessos de clientes em tempo real (clickstream), o Amazon Kinesis Data Streams é usado para capturar eventos de múltiplas fontes (sites, apps, APIs), armazenar os dados de forma ordenada e durável, e permitir que múltiplos consumidores — por exemplo, um processo de faturamento que calcula cobranças em tempo real e um processo de auditoria que analisa os mesmos dados dias depois — acessem o mesmo fluxo, preservando a sequência original."
        ]
    },
    {
        "id": 46,
        "title": "Pergunta 46",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa deseja automatizar e orquestrar um fluxo de dados de alto volume e múltiplas fontes em uma solução escalável de gerenciamento de dados utilizando serviços AWS. A solução deve garantir que as regras de negócio e transformações sejam executadas em sequência, permitir o reprocessamento dos dados em caso de erros e exigir manutenção mínima. Qual serviço AWS a empresa deve utilizar para gerenciar e automatizar a orquestração desses fluxos de dados?",
        "options": [
            {
                "letter": "A",
                "text": "Amazon Kinesis Data Streams",
                "correct": false
            },
            {
                "letter": "B",
                "text": "AWS Step Functions",
                "correct": true
            },
            {
                "letter": "C",
                "text": "AWS Glue",
                "correct": false
            },
            {
                "letter": "D",
                "text": "AWS Batch",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Amazon Kinesis Data Streams é um serviço serverless para captura e processamento em tempo real de grandes volumes de dados em streaming. Ele é ideal para ingestão e processamento contínuo, mas não oferece orquestração de workflows ou controle sequencial de regras de negócio com tratamento de erros integrado."
            },
            {
                "correct": true,
                "text": "Correta. AWS Step Functions é um serviço de orquestração visual que permite criar workflows distribuídos, automatizar processos, orquestrar microsserviços e pipelines de dados e machine learning. Ele garante a execução sequencial das etapas, facilita o tratamento de erros com reprocessamento e reduz a necessidade de manutenção manual."
            },
            {
                "correct": false,
                "text": "Incorreta. AWS Glue é um serviço serverless de integração e preparação de dados, focado em descoberta, transformação e movimentação de dados para análises e machine learning. Embora possa executar transformações, não é um serviço de orquestração de workflows complexos com controle de sequência e reprocessamento automatizado."
            },
            {
                "correct": false,
                "text": "Incorreta. AWS Batch é um serviço para execução de jobs em lote que provisiona recursos computacionais otimizados para cargas batch. Embora seja eficiente para processamento em lote, não é ideal para orquestração de fluxos complexos de dados com regras de negócio sequenciais e reprocessamento automatizado."
            }
        ],
        "glossary": [
            "AWS Step Functions: Serviço totalmente gerenciado que permite criar, visualizar e orquestrar workflows distribuídos entre diversos serviços AWS de forma confiável e escalável.",
            "AWS Batch: Serviço gerenciado para execução de jobs em lote (batch), otimizando automaticamente os recursos computacionais necessários para cargas de trabalho intensivas.",
            "AWS Glue: Serviço serverless de ETL que realiza integração, transformação e preparação de dados para análises e machine learning.",
            "Amazon Kinesis Data Streams: Serviço para captura e processamento em tempo real de dados em streaming, com alta taxa de ingestão e baixa latência.",
            "Orquestração: Coordenação automatizada de várias tarefas ou serviços em uma sequência lógica e controlada.",
            "Reprocessamento: Capacidade de reexecutar etapas específicas de um fluxo para corrigir falhas sem reiniciar todo o processo.",
            "Workflow: Conjunto de etapas automatizadas que executam um processo de negócio ou computacional.",
            "Escalabilidade: Habilidade de um sistema crescer e lidar com maior carga mantendo desempenho e confiabilidade."
        ],
        "generalExplanation": [
            "A alternativa correta é AWS Step Functions, pois esse serviço foi projetado para orquestrar workflows complexos, coordenando múltiplos serviços da AWS com tratamento automático de erros, controle de sequência e reprocessamento seletivo. O Step Functions fornece uma interface visual baseada em estados (State Machine), facilitando o desenho e o monitoramento de pipelines complexos — por exemplo, integrações com AWS Lambda, S3, Glue, SNS e DynamoDB."
        ],
        "realWorld": [
            "Imagine uma empresa que processa diariamente grandes volumes de dados de diferentes fontes — APIs, bancos de dados e arquivos CSV armazenados no Amazon S3. O time de dados cria um workflow no AWS Step Functions para orquestrar o pipeline: uma função Lambda extrai e valida os dados brutos, um job no AWS Glue transforma e limpa os dados, e outra etapa armazena o resultado final no Amazon Redshift para análise. Se qualquer etapa falhar, o Step Functions permite reprocessar apenas a etapa com falha, sem reiniciar todo o fluxo."
        ]
    },
    {
        "id": 47,
        "title": "Pergunta 47",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma aplicação bancária precisa enviar alertas e notificações em tempo real com base em atualizações dos serviços backend. A empresa deseja evitar a implementação de mecanismos complexos de polling para essas notificações. Qual dos seguintes tipos de APIs suportados pelo Amazon API Gateway é a opção mais adequada?",
        "options": [
            {
                "letter": "A",
                "text": "APIs REST ou HTTP",
                "correct": false
            },
            {
                "letter": "B",
                "text": "APIs HTTP",
                "correct": false
            },
            {
                "letter": "C",
                "text": "APIs REST",
                "correct": false
            },
            {
                "letter": "D",
                "text": "APIs WebSocket",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora APIs HTTP ofereçam menor latência e custo comparado às APIs REST, ambas funcionam no modelo tradicional de requisição-resposta, sem suporte nativo para comunicação bidirecional ou push do servidor para o cliente."
            },
            {
                "correct": false,
                "text": "Incorreta. APIs HTTP são uma forma simplificada de APIs REST focadas em menor latência e custo, mas ainda operam no modelo requisição-resposta. Elas não suportam comunicação push do servidor para o cliente."
            },
            {
                "correct": false,
                "text": "Incorreta. APIs REST no API Gateway são baseadas em recursos e métodos HTTP, onde o cliente faz requisições e o servidor responde. Elas não suportam comunicação bidirecional em tempo real nem envio de mensagens do servidor para o cliente sem uma requisição explícita."
            },
            {
                "correct": true,
                "text": "Correta. APIs WebSocket permitem comunicação bidirecional entre cliente e servidor, possibilitando que o backend envie mensagens em tempo real para os clientes conectados sem a necessidade de polling. Isso é ideal para alertas e notificações em tempo real, como em aplicações bancárias que exigem atualizações imediatas."
            }
        ],
        "glossary": [
            "API Gateway: Serviço totalmente gerenciado da AWS que facilita a criação, publicação, monitoramento e proteção de APIs REST, HTTP e WebSocket.",
            "APIs REST: Interfaces baseadas em recursos e métodos HTTP (GET, POST, PUT, DELETE), operando no modelo tradicional de requisição-resposta.",
            "APIs HTTP: Versão otimizada e mais econômica das APIs REST, com menor latência e integração simplificada com serviços como AWS Lambda.",
            "APIs WebSocket: APIs que permitem comunicação bidirecional e persistente entre cliente e servidor, possibilitando envio de mensagens em tempo real.",
            "Polling: Técnica em que o cliente faz requisições periódicas ao servidor para verificar novas informações — ineficiente em aplicações de tempo real.",
            "Push: Modelo de comunicação onde o servidor envia dados automaticamente para o cliente assim que ocorrem novos eventos.",
            "Backend: Camada lógica da aplicação responsável por processar dados e eventos, podendo ser composta por serviços como AWS Lambda, EC2 ou containers no ECS/EKS."
        ],
        "generalExplanation": [
            "A melhor solução para aplicações que necessitam de notificações em tempo real é o uso de APIs WebSocket do Amazon API Gateway, pois elas suportam comunicação bidirecional contínua entre cliente e servidor. Diferente das APIs REST ou HTTP, que seguem o modelo tradicional de requisição-resposta, as WebSocket APIs permitem que o backend envie mensagens proativamente para os clientes conectados, sem que estes precisem requisitar atualizações constantemente."
        ],
        "realWorld": [
            "Imagine um sistema bancário que precisa alertar imediatamente o cliente sobre transações suspeitas, pagamentos realizados ou atualizações de saldo. Com o API Gateway WebSocket, o backend (por exemplo, um AWS Lambda ou microserviço em ECS) pode enviar mensagens instantaneamente para o cliente assim que o evento ocorre — sem esperar que o cliente consulte o servidor. Essa configuração típica pode ser composta por API Gateway WebSocket, AWS Lambda ou DynamoDB Streams processando eventos e enviando notificações."
        ]
    },
    {
        "id": 48,
        "title": "Pergunta 48",
        "domain": "Solução de problemas e otimização",
        "prompt": "Seu líder de equipe solicitou uma revisão de código das suas funções Lambda. Seu código está escrito em Python e utiliza o Amazon Simple Storage Service (S3) para fazer upload de logs em um bucket S3. Após a revisão, o líder recomendou o reuso do contexto de execução para melhorar o desempenho da função Lambda. Qual das seguintes ações ajudará a implementar essa recomendação?",
        "options": [
            {
                "letter": "A",
                "text": "Mover a inicialização do cliente Amazon S3 para fora do handler da função",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Habilitar a integração com o AWS X-Ray",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar variáveis de ambiente para passar parâmetros operacionais",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Atribuir mais memória RAM para a função",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. As melhores práticas da AWS para Lambda recomendam aproveitar o reuso do contexto de execução para melhorar o desempenho. Inicializar clientes SDK, como o do Amazon S3, fora do handler da função permite que esses objetos sejam reutilizados em invocações subsequentes no mesmo ambiente, reduzindo o tempo de inicialização e o custo de execução."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS X-Ray é uma ferramenta útil para monitoramento e identificação de gargalos de desempenho, mas não contribui diretamente para o reuso do contexto de execução da função Lambda."
            },
            {
                "correct": false,
                "text": "Incorreta. Utilizar variáveis de ambiente é uma boa prática para evitar hardcoding de parâmetros, mas não está relacionado ao reuso do contexto de execução para melhorar o desempenho da função Lambda."
            },
            {
                "correct": false,
                "text": "Incorreta. Aumentar a memória RAM pode acelerar a execução da função, mas a recomendação do líder está relacionada especificamente ao reuso do contexto de execução, que não é impactado diretamente pela quantidade de memória alocada."
            }
        ],
        "glossary": [
            "Contexto de execução: Ambiente interno persistente entre invocações de uma função AWS Lambda, onde variáveis e objetos podem ser armazenados e reutilizados, reduzindo o tempo de inicialização.",
            "Handler da função: Ponto de entrada da função Lambda, executado a cada invocação, responsável por processar o evento recebido.",
            "AWS SDK: Conjunto de bibliotecas oficiais que facilitam a interação programática com serviços AWS, como S3, DynamoDB e SNS.",
            "AWS X-Ray: Serviço de rastreamento e análise de desempenho que permite monitorar a execução de funções Lambda e identificar gargalos.",
            "Variáveis de ambiente: Parâmetros configuráveis associados à função Lambda que permitem alterar comportamentos sem necessidade de alterar o código.",
            "Memória RAM: Quantidade de memória alocada à função Lambda, que influencia diretamente o tempo de execução e o custo — quanto mais memória, maior o poder de CPU e throughput."
        ],
        "generalExplanation": [
            "A prática recomendada para otimizar o desempenho e reduzir a latência em funções AWS Lambda é reutilizar o contexto de execução. Isso significa mover a criação de objetos 'pesados' — como clientes do AWS SDK (por exemplo, boto3 para S3) — para fora do handler da função. O código definido fora do handler é executado apenas uma vez, durante a fase de inicialização (cold start) da função. Assim, nas invocações subsequentes (warm starts), o ambiente de execução persiste e reaproveita o objeto já criado, evitando o custo de inicialização repetido a cada chamada."
        ],
        "realWorld": [
            "Considere uma função Lambda responsável por processar e enviar logs para o Amazon S3. Um código não otimizado recriaria o cliente S3 a cada invocação, aumentando o tempo de execução. A implementação correta seria: import boto3; s3_client = boto3.client('s3') (criado fora do handler — reutilizado entre invocações); def lambda_handler(event, context): bucket = 'meu-bucket-logs'; key = event['file_name']; data = event['content']; s3_client.put_object(Bucket=bucket, Key=key, Body=data); return {'status': 'Upload concluído'}"
        ]
    },
    {
        "id": 49,
        "title": "Pergunta 49",
        "domain": "Segurança",
        "prompt": "Um aplicativo móvel na área da saúde utiliza algoritmos proprietários de Machine Learning para fornecer diagnóstico precoce com base em métricas de saúde dos pacientes. Para proteger esses dados sensíveis, a equipe de desenvolvimento deseja migrar para um sistema escalável de gerenciamento de usuários com funcionalidades de login e cadastro que também suporte Autenticação Multifator (MFA). Quais das opções abaixo podem ser usadas para implementar uma solução com o MENOR esforço de desenvolvimento? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar funções Lambda e Amazon RDS para criar uma solução personalizada de gerenciamento de usuários",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar o Amazon Cognito para gerenciamento de usuários e facilitação dos processos de login e cadastro",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Utilizar o Amazon SNS para enviar o código de Autenticação Multifator (MFA) via SMS para os usuários do aplicativo móvel",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar funções Lambda e DynamoDB para criar uma solução personalizada de gerenciamento de usuários",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Utilizar o Amazon Cognito para habilitar a Autenticação Multifator (MFA) quando os usuários efetuam login",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora seja tecnicamente possível, criar uma solução personalizada usando Lambda e RDS exige um esforço de desenvolvimento significativo para implementar funcionalidades de login, cadastro e MFA, o que contraria o requisito de menor esforço de desenvolvimento."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon Cognito é um serviço gerenciado que simplifica a implementação de funcionalidades de cadastro, login e gerenciamento de usuários, além de escalar automaticamente para milhões de usuários, reduzindo significativamente o esforço de desenvolvimento."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon SNS não é adequado para enviar códigos MFA via SMS para usuários finais de aplicativos móveis, pois essa funcionalidade é destinada apenas a usuários IAM. Além disso, a AWS está descontinuando o suporte para MFA via SMS, tornando essa abordagem inadequada."
            },
            {
                "correct": false,
                "text": "Incorreta. Assim como a opção com RDS, essa abordagem demanda um desenvolvimento complexo e maior esforço para implementar funcionalidades essenciais de gerenciamento de usuários e MFA."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon Cognito oferece suporte nativo para MFA, permitindo que a autenticação multifator seja facilmente habilitada para aumentar a segurança dos usuários durante o login, com mínimo esforço de desenvolvimento."
            }
        ],
        "glossary": [
            "Amazon Cognito: Serviço gerenciado da AWS que simplifica o gerenciamento de usuários, oferecendo autenticação, autorização e suporte nativo a MFA, federando logins com provedores como Google, Apple, Facebook e SAML.",
            "MFA (Autenticação Multifator): Recurso de segurança que exige múltiplas formas de verificação (por exemplo, senha + código via app autenticador) para reforçar a proteção contra acessos não autorizados.",
            "AWS Lambda: Serviço de computação serverless que executa código em resposta a eventos sem necessidade de provisionar ou gerenciar servidores.",
            "Amazon RDS: Serviço gerenciado de banco de dados relacional que automatiza tarefas de configuração, backup e escalabilidade.",
            "Amazon DynamoDB: Banco de dados NoSQL altamente escalável e de baixa latência, ideal para armazenar dados de sessão e autenticação em aplicações modernas.",
            "Amazon SNS (Simple Notification Service): Serviço de mensageria que envia notificações via SMS, email ou outros canais, porém não é recomendado para o envio direto de códigos MFA a usuários finais devido a limitações e descontinuidade do MFA via SMS."
        ],
        "generalExplanation": [
            "A melhor escolha para implementar autenticação, cadastro e MFA de forma segura e com mínimo esforço de desenvolvimento é o Amazon Cognito. O Cognito fornece uma solução nativa e gerenciada para User Pools (autenticação de usuários) e Identity Pools (autorização de acesso a recursos AWS), eliminando a necessidade de construir manualmente APIs, bancos de dados e fluxos de verificação de identidade. Com o Cognito, é possível habilitar MFA nativo (com suporte a TOTP e aplicativos autenticadores), implementar recuperação de senha, confirmação de e-mail e login social sem código adicional, e garantir conformidade com padrões de segurança como OAuth 2.0, OpenID Connect e SAML 2.0."
        ],
        "realWorld": [
            "Suponha que uma startup desenvolve um aplicativo móvel de telemedicina que armazena informações sensíveis de pacientes. Ao adotar o Amazon Cognito, o time obtém autenticação segura com MFA nativo sem precisar manter infraestrutura própria, escalabilidade automática atendendo milhares de usuários sem ajustes manuais, e integração direta com o API Gateway e AWS Lambda, formando uma arquitetura serverless moderna."
        ]
    },
    {
        "id": 50,
        "title": "Pergunta 50",
        "domain": "Implantação",
        "prompt": "Uma organização está migrando seus recursos on-premises para a nuvem. O código-fonte será movido para o AWS CodeCommit e o AWS CodeBuild será utilizado para compilar o código-fonte usando o Apache Maven como ferramenta de build. A organização deseja que o ambiente de build permita escalabilidade e a execução de builds em paralelo. Qual das opções abaixo a organização deve escolher para atender a esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "O CodeBuild escala automaticamente; a organização não precisa fazer nada para escalabilidade ou para executar builds em paralelo",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Escolher um tipo de instância de alta performance para as instâncias do CodeBuild",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Habilitar o Auto Scaling do CodeBuild",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Executar o CodeBuild em um Auto Scaling Group",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O AWS CodeBuild é um serviço totalmente gerenciado que automaticamente escala para atender múltiplas solicitações de build simultâneas, eliminando a necessidade de provisionar ou gerenciar servidores de build."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora tipos de instância mais potentes possam melhorar o desempenho individual de um build, isso não é necessário para escalabilidade ou execução paralela, pois o CodeBuild gerencia isso automaticamente."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa opção é um distrator, pois o CodeBuild já realiza o escalonamento automático para atender picos de builds sem necessidade de configuração adicional de Auto Scaling."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS CodeBuild é um serviço gerenciado que escala automaticamente conforme a demanda. Não é necessário executar o CodeBuild dentro de um Auto Scaling Group, pois ele já gerencia a escalabilidade internamente."
            }
        ],
        "glossary": [
            "AWS CodeBuild: serviço gerenciado de build da AWS que compila código-fonte, executa testes automatizados e gera artefatos de build, com escalabilidade automática e cobrança baseada no uso.",
            "Apache Maven: ferramenta de automação e gerenciamento de dependências amplamente usada em projetos Java, facilitando o build e o empacotamento de aplicações.",
            "Auto Scaling Group: recurso utilizado para ajustar automaticamente o número de instâncias EC2, garantindo disponibilidade e desempenho, mas que não é necessário no CodeBuild.",
            "Build paralelo: capacidade de executar múltiplos processos de compilação simultaneamente, acelerando o ciclo de integração e entrega contínua.",
            "Tipo de instância: especificação de hardware virtual (CPU, memória, rede) usada por instâncias EC2 ou serviços que provisionam ambientes de execução.",
            "Serviço gerenciado: modelo em que a AWS se responsabiliza pela infraestrutura, permitindo que o desenvolvedor foque apenas no código e no pipeline.",
            "Escalabilidade automática: recurso que permite ao sistema aumentar ou reduzir a capacidade computacional com base na demanda, sem intervenção manual.",
            "Artefatos de build: arquivos resultantes da compilação do código-fonte, como binários, pacotes ou imagens de contêiner que serão usados em testes ou implantações."
        ],
        "generalExplanation": [
            "O AWS CodeBuild é a escolha correta porque é um serviço totalmente gerenciado e escalável, capaz de executar múltiplos builds em paralelo sem necessidade de configuração de servidores, Auto Scaling Groups ou tipos de instância. Diferentemente de soluções baseadas em EC2, o CodeBuild provisiona automaticamente o ambiente de compilação, executa o build e libera os recursos após o uso — cobrando apenas pelo tempo efetivo de execução. Essa abordagem elimina o overhead de gerenciamento de infraestrutura, oferecendo elasticidade automática para atender picos de demanda sem intervenção manual."
        ],
        "realWorld": [
            "Uma equipe de desenvolvimento que utiliza AWS CodeCommit como repositório de código pode configurar um pipeline no AWS CodePipeline com o CodeBuild como etapa de compilação. Assim, sempre que um desenvolvedor fizer um commit, o CodeBuild será acionado automaticamente para compilar e testar o projeto — por exemplo, executando um build Maven de uma aplicação Java. Graças à escalabilidade automática, vários desenvolvedores podem acionar builds simultaneamente sem filas ou atrasos, garantindo entregas rápidas e consistentes."
        ]
    },
    {
        "id": 51,
        "title": "Pergunta 51",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa de telecomunicações que fornece serviço de internet para usuários de dispositivos móveis mantém mais de 100 instâncias c4.large na região us-east-1. As instâncias EC2 executam algoritmos complexos. O gerente deseja monitorar a utilização da CPU das instâncias EC2 com uma frequência de até 10 segundos. Qual das alternativas abaixo representa a MELHOR solução para esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Abrir um chamado de suporte com a AWS",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar uma métrica personalizada de alta resolução e enviar os dados usando um script acionado a cada 10 segundos",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Simplesmente obter os dados das métricas do CloudWatch",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Habilitar o monitoramento detalhado do EC2",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Abrir um chamado de suporte não resolve diretamente a necessidade técnica de monitoramento em alta frequência e serve apenas como uma distração nesta questão."
            },
            {
                "correct": true,
                "text": "Correta. Métricas personalizadas de alta resolução permitem publicar dados no CloudWatch com resolução de até 1 segundo. Isso possibilita configurar alarmes que avaliam a cada 10 segundos, atendendo exatamente à necessidade de monitoramento frequente e detalhado da utilização da CPU."
            },
            {
                "correct": false,
                "text": "Incorreta. As métricas padrão do CloudWatch para EC2 são coletadas em intervalos de 5 minutos (monitoramento básico) ou 1 minuto (monitoramento detalhado). Portanto, não é possível obter dados com frequência de 10 segundos diretamente dessas métricas."
            },
            {
                "correct": false,
                "text": "Incorreta. O monitoramento detalhado do EC2 reduz o intervalo de coleta para 1 minuto, o que ainda é insuficiente para a frequência desejada de 10 segundos. Além disso, essa opção gera custos adicionais."
            }
        ],
        "glossary": [
            "Métrica personalizada de alta resolução: Métrica definida pelo usuário que pode ser enviada ao Amazon CloudWatch com resolução de até 1 segundo, permitindo monitoramento e alarmes com intervalos curtos e alta precisão.",
            "Monitoramento detalhado do EC2: Recurso nativo do Amazon EC2 que coleta métricas padrão (como CPUUtilization e NetworkIn/Out) a cada 1 minuto, mediante custo adicional.",
            "Monitoramento básico do EC2: Coleta gratuita de métricas padrão do EC2 em intervalos de 5 minutos, adequada para workloads menos críticos.",
            "Alarme de alta resolução: Alarme do CloudWatch configurado para avaliar métricas em intervalos menores que 60 segundos — por exemplo, a cada 10 segundos — usado para respostas rápidas a eventos críticos."
        ],
        "generalExplanation": [
            "A opção correta é criar métricas personalizadas de alta resolução e enviar dados periodicamente ao Amazon CloudWatch, pois apenas esse método permite monitoramento com frequência de até 10 segundos. Mesmo o monitoramento detalhado do EC2 oferece métricas a cada 1 minuto, o que é insuficiente para cenários que exigem granularidade de segundos. Com as métricas personalizadas, é possível coletar dados da CPU diretamente do sistema operacional e publicá-los via API do CloudWatch ou AWS CLI com resolução de 1 segundo (StorageResolution=1)."
        ],
        "realWorld": [
            "Em uma empresa de telecomunicações que processa grandes volumes de dados em instâncias EC2 de alto desempenho, é essencial identificar picos de CPU rapidamente para evitar falhas de serviço. Um engenheiro pode criar um script (por exemplo, em Python usando o AWS SDK boto3) que coleta métricas locais da CPU e as envia ao CloudWatch: while True: cpu_usage = psutil.cpu_percent(interval=1); cloudwatch.put_metric_data(Namespace='Custom/EC2', MetricData=[{'MetricName': 'HighResCPUUtilization', 'Value': cpu_usage, 'Unit': 'Percent', 'StorageResolution': 1}]); time.sleep(1)"
        ]
    },
    {
        "id": 52,
        "title": "Pergunta 52",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você possui uma aplicação web em três camadas composta por uma camada web usando AngularJS, uma camada de aplicação utilizando o AWS API Gateway e uma camada de dados em um banco de dados Amazon Relational Database Service (RDS). Sua aplicação permite que visitantes consultem filmes populares do passado. A empresa deseja reduzir o número de chamadas feitas ao endpoint e melhorar a latência da API. O que você pode fazer para melhorar o desempenho?",
        "options": [
            {
                "letter": "A",
                "text": "Usar Amazon Kinesis Data Streams para transmitir os dados recebidos e reduzir a carga sobre o API Gateway",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar Variáveis de Stage (Stage Variables)",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Habilitar o Cache do API Gateway",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Usar Templates de Mapeamento (Mapping Templates)",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Amazon Kinesis Data Streams é um serviço escalável para captura e processamento de dados em tempo real, adequado para ingestão massiva de dados e análise contínua. No entanto, ele não é indicado para reduzir chamadas ou latência em APIs RESTful do API Gateway, pois não atua como cache nem proxy para chamadas de API."
            },
            {
                "correct": false,
                "text": "Incorreta. Variáveis de stage funcionam como variáveis de ambiente e permitem alterar o comportamento dos métodos do API Gateway para cada estágio de implantação, por exemplo, direcionando para backends diferentes conforme o estágio. No entanto, elas não contribuem para a redução da latência ou diminuição do número de chamadas à API."
            },
            {
                "correct": true,
                "text": "Correta. É possível habilitar o cache no Amazon API Gateway para armazenar as respostas dos endpoints por um período configurável (TTL). Isso reduz o número de chamadas feitas ao backend e melhora significativamente a latência das requisições, pois o API Gateway responde diretamente a partir do cache em vez de encaminhar a requisição ao endpoint."
            },
            {
                "correct": false,
                "text": "Incorreta. Templates de mapeamento são scripts escritos em Velocity Template Language (VTL) aplicados ao payload usando expressões JSONPath para formatar e estruturar os dados de forma legível. Eles ajudam no processamento e transformação dos dados, mas não melhoram a latência nem reduzem o número de chamadas à API."
            }
        ],
        "glossary": [
            "API Gateway: Serviço gerenciado da AWS que permite criar, publicar, monitorar e proteger APIs RESTful e WebSocket de forma escalável e segura.",
            "Cache do API Gateway: Recurso que armazena respostas de endpoints por um período configurado, reduzindo o número de chamadas ao backend e melhorando a latência.",
            "Variáveis de Stage (Stage Variables): Parâmetros configuráveis para ajustar o comportamento da API em diferentes ambientes (dev, test, prod), sem alterar o código.",
            "Templates de Mapeamento (Mapping Templates): Scripts em Velocity Template Language (VTL) usados para transformar dados de requisição e resposta entre o cliente e o backend.",
            "Amazon Kinesis Data Streams: Serviço para captura e processamento em tempo real de grandes volumes de dados, sem relação direta com cache de APIs.",
            "TTL (Time To Live): Tempo configurável que define quanto tempo os dados permanecem válidos no cache antes de serem atualizados."
        ],
        "generalExplanation": [
            "A melhor solução para reduzir o número de chamadas ao backend e melhorar o tempo de resposta da API é habilitar o cache no Amazon API Gateway. Quando o cache está ativo, o API Gateway armazena as respostas das requisições em memória por um período determinado pelo TTL (Time To Live). Assim, requisições subsequentes idênticas podem ser atendidas diretamente do cache, sem necessidade de acionar o backend (como uma função Lambda ou banco de dados)."
        ],
        "realWorld": [
            "Considere uma aplicação web que exibe listas de produtos ou filmes populares. Esses dados mudam com pouca frequência e são consultados por milhares de usuários simultaneamente. Ao ativar o cache no API Gateway com um TTL de 300 segundos (5 minutos), o sistema retorna rapidamente respostas para requisições repetidas, reduz o número de chamadas à função AWS Lambda ou ao banco de dados RDS/DynamoDB, melhora a latência e reduz o custo operacional."
        ]
    },
    {
        "id": 53,
        "title": "Pergunta 53",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua empresa executa lógica de negócios em componentes de software menores que desempenham várias funções. Algumas funções processam informações em poucos segundos, enquanto outras parecem levar muito tempo para serem concluídas. Seu gerente pediu para desacoplar os componentes que demoram muito para garantir que as aplicações de software permaneçam responsivas sob carga. Você decide configurar o Amazon Simple Queue Service (SQS) para funcionar com sua configuração do Elastic Beanstalk. Qual dos seguintes ambientes do Elastic Beanstalk você deve escolher para atender a esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "Ambiente worker dedicado",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Nó worker de instância única",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Ambiente com balanceamento de carga e escalabilidade automática",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Instância única com Elastic IP",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Um ambiente worker dedicado no Elastic Beanstalk é projetado para executar tarefas que levam muito tempo para serem concluídas, desacoplando essas operações do front-end da aplicação web. Isso garante que a aplicação permaneça responsiva sob carga, processando tarefas longas de forma assíncrona, geralmente integrando-se com o Amazon SQS para gerenciar filas de mensagens."
            },
            {
                "correct": false,
                "text": "Incorreta. O termo 'nó worker' é mais comumente associado a clusters Kubernetes (EKS) e não ao Elastic Beanstalk. Portanto, essa opção não é aplicável ao contexto do Elastic Beanstalk."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora ambientes com balanceamento de carga e escalabilidade automática sejam indicados para aplicações que precisam escalar horizontalmente e distribuir carga, eles não são a melhor escolha para desacoplar tarefas longas. Além disso, essa configuração pode aumentar custos sem resolver diretamente o problema da responsividade sob carga."
            },
            {
                "correct": false,
                "text": "Incorreta. Um ambiente com instância única e Elastic IP não possui balanceador de carga e não é altamente disponível. Embora possa reduzir custos, não é recomendado para produção e não resolve o problema de desacoplamento de tarefas longas."
            }
        ],
        "glossary": [
            "Elastic Beanstalk: serviço gerenciado da AWS que simplifica a implantação, gerenciamento e escalabilidade automática de aplicações web e serviços, sem exigir gerenciamento direto da infraestrutura.",
            "Amazon SQS (Simple Queue Service): serviço de filas totalmente gerenciado que permite desacoplar e orquestrar a comunicação assíncrona entre diferentes componentes de uma aplicação.",
            "Ambiente worker dedicado: tipo de ambiente no Elastic Beanstalk criado especificamente para processar tarefas em segundo plano, consumindo mensagens de uma fila SQS.",
            "Balanceamento de carga: mecanismo que distribui requisições de entrada entre várias instâncias, melhorando disponibilidade e desempenho.",
            "Escalabilidade automática: capacidade de ajustar automaticamente o número de instâncias com base na carga de trabalho, garantindo performance consistente.",
            "Elastic IP: endereço IP estático e público associado a uma instância EC2, usado quando é necessário um ponto de acesso fixo.",
            "Nó worker: termo relacionado a clusters Kubernetes, referindo-se a instâncias que executam cargas de trabalho — não se aplica diretamente ao Elastic Beanstalk.",
            "Responsividade sob carga: habilidade de uma aplicação em manter tempos de resposta baixos e estáveis mesmo sob alta demanda."
        ],
        "generalExplanation": [
            "A opção correta é utilizar um ambiente worker dedicado no AWS Elastic Beanstalk, pois ele foi projetado para processar tarefas demoradas ou de longa execução de forma assíncrona, sem afetar a performance do front-end da aplicação. Esse ambiente se integra nativamente ao Amazon SQS, recebendo mensagens da fila que representam tarefas pendentes — como processamento de arquivos, cálculos complexos ou notificações — e executando-as em segundo plano. Com isso, o ambiente web (front-end) permanece leve, responsivo e escalável."
        ],
        "realWorld": [
            "Imagine uma aplicação web de e-commerce implantada no Elastic Beanstalk que recebe pedidos de clientes. Ao confirmar uma compra, o sistema precisa gerar notas fiscais, enviar e-mails de confirmação e atualizar estoques — operações que podem levar alguns segundos ou minutos. Em vez de realizar essas tarefas diretamente no ambiente web (bloqueando o usuário), o aplicativo envia mensagens para uma fila Amazon SQS, que são processadas por um ambiente worker dedicado do Beanstalk. Esse ambiente executa as tarefas de forma assíncrona e escalável, sem prejudicar o desempenho da aplicação principal."
        ]
    },
    {
        "id": 54,
        "title": "Pergunta 54",
        "domain": "Segurança",
        "prompt": "Um desenvolvedor deseja armazenar com segurança um token de acesso que permite que uma aplicação de processamento de transações, executada em instâncias Amazon EC2, autentique e envie uma mensagem via API de chat para a equipe de suporte da empresa quando uma transação inválida for detectada. Minimizar a sobrecarga de gerenciamento é essencial, e o token de acesso da API de chat deve ser criptografado tanto em repouso quanto em trânsito, além de ser acessível a partir de outras contas AWS. Qual é a solução mais eficiente para atender a esse cenário?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar o AWS Systems Manager Parameter Store com uma chave gerenciada pelo cliente do AWS KMS para armazenar o token de acesso como um parâmetro SecureString e configurar uma política baseada em recursos para o parâmetro permitir acesso de outras contas.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar o AWS Secrets Manager com uma chave gerenciada pelo cliente do AWS KMS para armazenar o token de acesso como um segredo e configurar uma política baseada em recursos para o segredo permitir acesso de outras contas.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Utilizar SSE-KMS para armazenar o token de acesso como um objeto criptografado no Amazon S3 e configurar uma política baseada em recursos para o bucket S3 permitir acesso de outras contas.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Armazenar o token de acesso criptografado com AWS KMS em uma tabela DynamoDB e configurar uma política baseada em recursos para a tabela DynamoDB permitir acesso de outras contas.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Parameter Store não suporta políticas baseadas em recursos para parâmetros individuais, o que impede o compartilhamento direto entre contas via políticas de recurso. Além disso, embora seja possível criptografar parâmetros SecureString com KMS, a ausência de políticas baseadas em recursos limita a flexibilidade."
            },
            {
                "correct": true,
                "text": "Correta. O AWS Secrets Manager é projetado para armazenar e gerenciar segredos de forma segura, criptografando-os com chaves do KMS e permitindo políticas baseadas em recursos para compartilhamento entre contas. Ele minimiza a sobrecarga de gerenciamento, oferece rotação automática de segredos e integra-se facilmente com roles IAM para controle de acesso granular."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o S3 suporte criptografia SSE-KMS e políticas baseadas em recursos, armazenar tokens de acesso sensíveis como objetos em buckets S3 é considerado uma má prática de segurança, pois aumenta o risco de exposição e dificulta o gerenciamento seguro e a rotação dos segredos."
            },
            {
                "correct": false,
                "text": "Incorreta. O DynamoDB não suporta políticas baseadas em recursos, o que impede o controle de acesso direto por outras contas via política de recurso. Além disso, armazenar credenciais sensíveis em tabelas de banco de dados é uma prática insegura."
            }
        ],
        "glossary": [
            "AWS Secrets Manager: serviço gerenciado da AWS para armazenamento seguro e gerenciamento centralizado de segredos, como senhas, tokens e chaves de API, com rotação automática e integração com AWS KMS para criptografia.",
            "AWS KMS (Key Management Service): serviço que permite criar, gerenciar e controlar chaves de criptografia, usadas para proteger dados e segredos em repouso e em trânsito.",
            "Política baseada em recursos: política anexada diretamente a um recurso AWS (como um segredo ou bucket), permitindo controle granular de acesso, inclusive entre contas AWS.",
            "SecureString Parameter: tipo de parâmetro no AWS Systems Manager Parameter Store usado para armazenar valores criptografados com KMS, mas sem suporte nativo a rotação ou compartilhamento entre contas.",
            "SSE-KMS (Server-Side Encryption with KMS): método de criptografia do lado do servidor em que o Amazon S3 usa chaves do KMS para proteger objetos armazenados.",
            "IAM Role: identidade da AWS que concede permissões temporárias a serviços, usuários ou aplicações, permitindo acesso seguro e controlado a recursos.",
            "DynamoDB: banco de dados NoSQL gerenciado, ideal para dados estruturados, mas não recomendado para armazenar segredos.",
            "Amazon S3: serviço de armazenamento de objetos, com alta durabilidade, mas não apropriado para segredos, a menos que complementado por mecanismos adicionais de segurança."
        ],
        "generalExplanation": [
            "A opção correta é o uso do AWS Secrets Manager, pois ele foi projetado especificamente para armazenar e proteger informações sensíveis — como tokens de acesso, credenciais e chaves de API — com criptografia nativa via KMS e rotação automática de segredos. Além disso, o Secrets Manager permite compartilhamento seguro entre contas AWS usando políticas baseadas em recursos, algo que não é suportado nativamente por alternativas como o Parameter Store."
        ],
        "realWorld": [
            "Em um ambiente corporativo multi-conta, um time de desenvolvimento pode usar o AWS Secrets Manager para armazenar de forma centralizada tokens de API e credenciais de banco de dados. Por exemplo, uma aplicação serverless executada em AWS Lambda pode recuperar o segredo diretamente do Secrets Manager durante a inicialização, utilizando permissões concedidas via IAM Role. Dessa forma, o segredo não é armazenado no código, nem exposto em variáveis de ambiente. Em organizações com múltiplas contas AWS, é possível usar políticas baseadas em recursos para conceder acesso controlado a segredos armazenados em uma conta principal para outras contas de desenvolvimento ou produção."
        ]
    },
    {
        "id": 55,
        "title": "Pergunta 55",
        "domain": "Segurança",
        "prompt": "Uma empresa do setor financeiro deseja garantir que os dados dos clientes estejam sempre criptografados no Amazon S3, mas quer uma solução gerenciada pela AWS que permita controle total para criar, rotacionar e remover as chaves de criptografia. Como um Desenvolvedor Associado, qual das seguintes opções você recomendaria para atender a esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Criptografia do lado do servidor com chaves mestras do cliente (CMKs) armazenadas no AWS Key Management Service (SSE-KMS)",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Criptografia do lado do servidor com AWS Secrets Manager",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Criptografia do lado do servidor com chaves fornecidas pelo cliente (SSE-C)",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Criptografia do lado do servidor com chaves gerenciadas pelo Amazon S3 (SSE-S3)",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Essa opção permite que você utilize chaves mestras do cliente gerenciadas no AWS KMS, oferecendo controle total para criar, rotacionar e desabilitar as chaves. Além disso, o AWS KMS fornece auditoria e políticas de acesso detalhadas, garantindo segurança e conformidade para os dados criptografados no S3."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS Secrets Manager é um serviço para gerenciar segredos como credenciais e chaves de API, permitindo rotação e gerenciamento de segredos, mas não é utilizado para criptografia direta de objetos no Amazon S3 nem para gerenciamento de chaves de criptografia para SSE."
            },
            {
                "correct": false,
                "text": "Incorreta. O SSE-C exige que o cliente crie, gerencie e forneça as chaves de criptografia para cada solicitação, incluindo a rotação e remoção das chaves. Isso não é uma solução gerenciada pela AWS e adiciona complexidade operacional."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o SSE-S3 criptografe cada objeto com uma chave única e utilize uma chave mestra que é rotacionada automaticamente pela AWS, ele não oferece controle direto para criar, rotacionar ou remover as chaves de criptografia."
            }
        ],
        "glossary": [
            "Amazon S3: serviço de armazenamento de objetos altamente escalável da AWS, projetado para armazenar e recuperar dados de forma segura e durável a qualquer momento.",
            "SSE-KMS (Server-Side Encryption with AWS Key Management Service): método de criptografia do lado do servidor que utiliza chaves mestras gerenciadas pelo AWS KMS, oferecendo controle sobre permissões, auditoria e rotação de chaves.",
            "CMK (Customer Master Key): chave mestra criada e administrada pelo cliente no AWS KMS, usada para criptografar dados e definir políticas granulares de acesso.",
            "SSE-S3 (Server-Side Encryption with Amazon S3-Managed Keys): opção de criptografia onde o próprio S3 gerencia automaticamente as chaves, sem intervenção ou controle direto do cliente.",
            "SSE-C (Server-Side Encryption with Customer-Provided Keys): modelo em que o cliente fornece manualmente as chaves de criptografia a cada operação, ficando responsável por todo o ciclo de vida das chaves.",
            "AWS Secrets Manager: serviço para armazenamento e rotação automática de segredos (como senhas e tokens), não utilizado para criptografia direta de objetos no S3."
        ],
        "generalExplanation": [
            "A alternativa correta é o uso de SSE-KMS com CMKs (Customer Master Keys), pois esse método combina controle total do cliente sobre as chaves com gestão automatizada e integração nativa com o S3. Com o SSE-KMS, os dados são criptografados automaticamente no momento do upload para o S3, e as chaves são protegidas no AWS Key Management Service, permitindo: controle granular de acesso via políticas IAM e KMS, auditoria completa de uso das chaves por meio do AWS CloudTrail, e rotação automática ou manual das chaves para fortalecer a segurança."
        ],
        "realWorld": [
            "Em um sistema financeiro que armazena dados sensíveis de clientes, o time de desenvolvimento pode habilitar SSE-KMS no bucket S3 para garantir que todos os arquivos sejam criptografados automaticamente com CMKs gerenciadas pela equipe de segurança. Isso permite rastrear quem acessou ou utilizou as chaves por meio do CloudTrail, atendendo a normas como LGPD e PCI-DSS. Por exemplo, uma aplicação serverless composta por funções AWS Lambda que processam extratos bancários pode salvar os arquivos processados em um bucket S3 com SSE-KMS habilitado."
        ]
    },
    {
        "id": 56,
        "title": "Pergunta 56",
        "domain": "Segurança",
        "prompt": "Um desenvolvedor deseja integrar funcionalidades de upload e download de arquivos específicos para cada usuário em uma aplicação que utiliza tanto Amazon Cognito user pools quanto Cognito identity pools para acesso seguro ao Amazon S3. O desenvolvedor também quer garantir que apenas usuários autorizados possam acessar seus próprios arquivos e que os arquivos sejam salvos e recuperados de forma segura. Os arquivos possuem tamanhos entre 5 KB e 500 MB. Qual é a solução mais eficiente que você recomendaria?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar CloudFront Lambda@Edge para validar se o arquivo foi enviado para o S3 e baixado dele apenas pelo usuário autorizado.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Integrar o Amazon API Gateway com uma função Lambda que valide se o arquivo foi enviado para o S3 e baixado dele apenas pelo usuário autorizado.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Aproveitar uma política IAM com o prefixo de identidade do Amazon Cognito para restringir os usuários a utilizarem apenas suas próprias pastas no Amazon S3.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Usar notificações de eventos do S3 para acionar uma função Lambda que valide se o arquivo foi enviado e baixado apenas pelo usuário autorizado.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Essa opção pressupõe o uso de uma distribuição CloudFront, o que gera custos adicionais e aumenta a latência, tornando a solução menos eficiente para uploads e downloads. Também adiciona complexidade desnecessária ao fluxo de dados."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora essa abordagem seja viável, ela não é a mais eficiente, pois não previne o upload indevido de arquivos em pastas de outros usuários. Além disso, adiciona complexidade e latência desnecessárias ao fluxo de dados."
            },
            {
                "correct": true,
                "text": "Correta. Essa é a solução mais eficiente e segura. Amazon Cognito identity pools fornecem credenciais temporárias com permissões limitadas, e uma política IAM pode restringir o acesso dos usuários apenas às suas próprias pastas no S3, garantindo que cada usuário só possa acessar seus arquivos. Essa abordagem é nativa, escalável e evita a necessidade de funções Lambda adicionais ou serviços intermediários."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível construir essa solução, ela não é a mais eficiente, pois não impede que um arquivo inválido seja enviado para a pasta designada de outro usuário. Portanto, não garante controle de acesso adequado no momento do upload."
            }
        ],
        "glossary": [
            "Amazon Cognito user pools: Serviço gerenciado da AWS que oferece cadastro, autenticação e gerenciamento de usuários, permitindo integração direta com aplicações web e mobile.",
            "Amazon Cognito identity pools: Serviço que fornece credenciais temporárias da AWS (via STS) para usuários autenticados e não autenticados, permitindo acesso controlado a recursos AWS, como Amazon S3 e DynamoDB.",
            "IAM policy: Documento em formato JSON que define permissões e restrições de acesso a recursos da AWS, podendo ser associado a usuários, grupos ou funções (roles).",
            "Prefixo de identidade Cognito: Identificador exclusivo gerado pelo Cognito (cognito-identity.amazonaws.com:sub) usado para isolar e restringir o acesso de cada usuário a recursos específicos, como diretórios individuais em um bucket S3.",
            "Lambda: Serviço de computação serverless que executa código sob demanda em resposta a eventos, sem provisionamento de servidores.",
            "CloudFront Lambda@Edge: Extensão do AWS Lambda que executa código em pontos de presença da rede CloudFront, ideal para manipular requisições e respostas HTTP em edge locations."
        ],
        "generalExplanation": [
            "A melhor solução para garantir que cada usuário acesse apenas seus próprios arquivos no Amazon S3 é utilizar políticas IAM dinâmicas com o prefixo de identidade do Amazon Cognito. Quando um usuário faz login através do Cognito User Pool, o Identity Pool gera credenciais temporárias associadas a um identificador exclusivo (${cognito-identity.amazonaws.com:sub}), que é então incorporado em uma política IAM. Essa política garante que o usuário só possa acessar sua própria pasta, sem precisar de funções intermediárias, como Lambda, para validar uploads ou downloads."
        ],
        "realWorld": [
            "Em uma aplicação mobile de compartilhamento de arquivos, cada usuário precisa enviar e visualizar apenas seus próprios documentos no Amazon S3. O fluxo funciona assim: o usuário faz login pelo Cognito User Pool, o Cognito Identity Pool emite credenciais temporárias com permissões personalizadas, o aplicativo usa o SDK da AWS (Amplify ou S3Client) para realizar operações diretas no bucket S3, e a política IAM, usando o prefixo Cognito Identity, garante que o usuário acesse apenas s3://meu-bucket/private/{user-id}/."
        ]
    },
    {
        "id": 57,
        "title": "Pergunta 57",
        "domain": "Implantação",
        "prompt": "Como parte da atualização das habilidades dos funcionários, os desenvolvedores da sua equipe receberam algumas responsabilidades típicas de engenheiros DevOps. Agora, os desenvolvedores têm controle total sobre o modelo de todo o processo de entrega de software, desde a codificação até a implantação. Como líder da equipe, você é responsável por quaisquer aprovações manuais necessárias durante o processo. Qual das abordagens a seguir suporta esse fluxo de trabalho?",
        "options": [
            {
                "letter": "A",
                "text": "Criar múltiplos CodePipelines para cada ambiente e vinculá-los usando AWS Lambda.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar um único AWS CodePipeline para todo o fluxo e adicionar uma etapa de aprovação manual.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Criar pipelines AWS CodePipeline profundamente integrados para cada ambiente.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar CodePipeline com Amazon Virtual Private Cloud (VPC).",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível criar funções Lambda e adicioná-las como ações nos pipelines, a etapa de aprovação manual deve estar contida no próprio fluxo do pipeline e não pode ser delegada a outro serviço AWS, como Lambda, para controle de aprovação."
            },
            {
                "correct": true,
                "text": "Correta. É possível adicionar uma ação de aprovação manual em uma etapa do pipeline para que o processo pare e aguarde que alguém aprove ou rejeite manualmente a ação. As ações de aprovação não podem ser adicionadas em estágios de origem, que aceitam apenas ações de origem."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível usar templates AWS CloudFormation junto com CodePipeline e CodeCommit para criar ambientes de teste que implantam em produção após aprovação, essa abordagem não é a mais otimizada para o fluxo descrito, pois fragmenta o processo e dificulta o controle centralizado das aprovações manuais."
            },
            {
                "correct": false,
                "text": "Incorreta. O CodePipeline suporta endpoints VPC via AWS PrivateLink para manter o tráfego dentro da rede privada, o que é uma excelente medida de segurança, mas não atende à necessidade específica de controle e aprovação manual no fluxo de entrega de software."
            }
        ],
        "glossary": [
            "AWS CodePipeline: serviço de integração e entrega contínua (CI/CD) que automatiza o fluxo de build, teste e implantação de aplicações, integrando com diversos serviços da AWS e ferramentas externas.",
            "Aprovação manual: ação dentro do CodePipeline que interrompe o fluxo até que um usuário autorizado aprove ou rejeite a continuidade da implantação, garantindo governança e conformidade.",
            "AWS Lambda: serviço serverless que executa código sob demanda em resposta a eventos, útil para automações, mas não destinado a aprovações humanas.",
            "Amazon VPC (Virtual Private Cloud): rede virtual privada na AWS que isola e protege recursos, controlando o tráfego interno e externo.",
            "AWS PrivateLink: tecnologia que permite acesso privado entre VPCs e serviços AWS, mantendo o tráfego dentro da rede da AWS.",
            "AWS CloudFormation: serviço para definição e provisionamento de infraestrutura como código (IaC) por meio de templates declarativos.",
            "Pipeline: conjunto estruturado e automatizado de etapas sequenciais que definem o processo de build, teste e implantação de software.",
            "Fonte (Source): primeiro estágio de um pipeline, responsável por obter o código-fonte de repositórios como CodeCommit, GitHub ou S3."
        ],
        "generalExplanation": [
            "A alternativa correta é criar um único pipeline no AWS CodePipeline com uma etapa de aprovação manual, pois essa abordagem centraliza todo o fluxo de entrega contínua e simplifica a governança do processo. O CodePipeline suporta nativamente ações de aprovação manual, que pausam o pipeline até que um aprovador designado autorize a próxima etapa. Isso permite controlar quais versões de software avançam para ambientes críticos, como staging ou produção."
        ],
        "realWorld": [
            "Imagine uma equipe DevOps que mantém uma aplicação serverless com funções AWS Lambda. Após cada commit no GitHub, o CodePipeline inicia automaticamente a sequência de build e testes via AWS CodeBuild. Antes da implantação em produção, o pipeline pausa em uma etapa de aprovação manual. Um líder técnico ou gerente de release revisa as alterações — como logs de teste, diffs de código e resultados de segurança — e então aprova a continuidade. Assim que a aprovação é concedida, o CodePipeline prossegue automaticamente para o deploy com CloudFormation ou SAM."
        ]
    },
    {
        "id": 58,
        "title": "Pergunta 58",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa de mídia utiliza uma fila do Amazon Simple Queue Service (SQS) para gerenciar suas transações. Com as mudanças nas necessidades do negócio, o tamanho da carga útil das mensagens está aumentando. O líder da equipe está preocupado com o limite de tamanho de 256 KB das mensagens no SQS. O que pode ser feito para que a fila aceite mensagens com tamanho maior?",
        "options": [
            {
                "letter": "A",
                "text": "Solicitar aumento do limite de serviço junto à AWS",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar compressão gzip",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar o SQS Extended Client",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Usar a API MultiPart",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível solicitar aumentos de limites para alguns serviços AWS, o limite de 256 KB para mensagens no SQS é uma restrição técnica fixa. A solução recomendada para mensagens maiores é usar o SQS Extended Client com armazenamento no S3."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora a compressão gzip possa reduzir o tamanho da mensagem, a mensagem ainda precisa ser codificada para atender aos padrões do SQS, o que pode adicionar overhead. Além disso, a compressão não garante que mensagens muito grandes ultrapassem o limite de 256 KB de forma confiável."
            },
            {
                "correct": true,
                "text": "Correta. O SQS Extended Client permite que mensagens maiores que 256 KB sejam armazenadas no Amazon S3, enquanto apenas um ponteiro é enviado para a fila SQS. Isso possibilita o envio e recebimento de mensagens de até 2 GB, superando a limitação nativa do SQS."
            },
            {
                "correct": false,
                "text": "Incorreta. Não existe uma API MultiPart para o Amazon SQS. Essa funcionalidade é comumente associada ao Amazon S3 para upload de arquivos grandes, mas não se aplica ao SQS."
            }
        ],
        "glossary": [
            "Amazon SQS (Simple Queue Service): Serviço de filas totalmente gerenciado que permite comunicação assíncrona e desacoplada entre componentes distribuídos de uma aplicação.",
            "Amazon S3 (Simple Storage Service): Serviço de armazenamento de objetos altamente escalável e durável usado para armazenar dados e arquivos de qualquer tipo ou tamanho.",
            "SQS Extended Client: Biblioteca oficial da AWS que permite enviar mensagens acima de 256 KB armazenando o conteúdo completo no S3 e enviando apenas um ponteiro (referência) para o objeto na fila SQS.",
            "API MultiPart: Técnica de upload usada pelo Amazon S3 para dividir arquivos grandes em partes menores — não aplicável ao SQS.",
            "Compressão gzip: Método de compactação que reduz o tamanho de dados, mas não remove o limite fixo de tamanho de mensagem do SQS.",
            "Limite de mensagem do SQS: Restrição técnica que define o tamanho máximo de cada mensagem em 256 KB.",
            "Ponteiro: Referência enviada na fila apontando para o conteúdo armazenado externamente, como um objeto no Amazon S3.",
            "Codificação: Conversão de dados para um formato compatível com os padrões de transmissão ou armazenamento do serviço."
        ],
        "generalExplanation": [
            "A alternativa correta é o uso do Amazon SQS Extended Client, pois ele resolve a limitação de tamanho de mensagens (256 KB) no Amazon SQS ao armazenar o conteúdo completo no Amazon S3 e enviar na fila apenas um ponteiro para o objeto. Com isso, é possível transmitir mensagens de até 2 GB de forma segura e escalável, sem violar as restrições técnicas do SQS. Essa solução mantém a compatibilidade com a API do SQS e não afeta o comportamento da fila nem o processamento assíncrono."
        ],
        "realWorld": [
            "Em uma aplicação de processamento de mídia, cada vídeo enviado por usuários pode gerar metadados extensos (informações de codec, duração, legendas, etc.) que precisam ser processados por diferentes microsserviços. Em vez de enviar toda essa carga diretamente na fila SQS — o que violaria o limite de 256 KB — o sistema armazena os metadados completos no Amazon S3 e envia apenas a referência (ponteiro) via SQS usando o SQS Extended Client. Os consumidores da fila, ao receberem a mensagem, utilizam o ponteiro para recuperar o conteúdo no S3, processá-lo e gerar resultados."
        ]
    },
    {
        "id": 59,
        "title": "Pergunta 59",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Seu líder de equipe solicitou que você habilite o monitoramento detalhado das instâncias Amazon EC2 utilizadas pelo seu time. Como desenvolvedor que trabalha com AWS CLI, qual dos comandos abaixo você executaria para ativar esse monitoramento detalhado?",
        "options": [
            {
                "letter": "A",
                "text": "aws ec2 monitor-instances --instance-id i-1234567890abcdef0",
                "correct": false
            },
            {
                "letter": "B",
                "text": "aws ec2 run-instances --image-id ami-09092360 --monitoring State=enabled",
                "correct": false
            },
            {
                "letter": "C",
                "text": "aws ec2 monitor-instances --instance-ids i-1234567890abcdef0",
                "correct": true
            },
            {
                "letter": "D",
                "text": "aws ec2 run-instances --image-id ami-09092360 --monitoring Enabled=true",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O parâmetro correto para especificar múltiplas instâncias é '--instance-ids' no plural. Usar '--instance-id' no singular resulta em erro de sintaxe."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa sintaxe é inválida para o parâmetro '--monitoring' no comando 'run-instances'. O valor correto deve ser 'Enabled=true'."
            },
            {
                "correct": true,
                "text": "Correta. Esse comando habilita o monitoramento detalhado para uma ou mais instâncias EC2 já em execução, utilizando o parâmetro correto '--instance-ids'."
            },
            {
                "correct": false,
                "text": "Incorreta. Esse comando é utilizado para habilitar o monitoramento detalhado durante o lançamento de uma nova instância EC2, não para instâncias já em execução."
            }
        ],
        "glossary": [
            "Amazon EC2: Serviço de computação elástica da AWS que permite executar instâncias (máquinas virtuais) configuráveis para hospedar aplicações, serviços e workloads corporativos.",
            "Monitoramento detalhado: Funcionalidade que coleta métricas de desempenho das instâncias EC2 com intervalo de 1 minuto, em contraste com o monitoramento básico (5 minutos), oferecendo maior precisão para diagnósticos e otimizações.",
            "AWS CLI (Command Line Interface): Ferramenta de linha de comando que permite gerenciar e automatizar recursos AWS, como EC2, S3 e IAM, por meio de scripts e comandos.",
            "run-instances: Comando da AWS CLI usado para criar novas instâncias EC2, permitindo configurar parâmetros como tipo de instância, imagem AMI e monitoramento no momento da criação.",
            "monitor-instances: Comando utilizado para habilitar o monitoramento detalhado em instâncias EC2 existentes, sem necessidade de recriá-las.",
            "--instance-ids: Parâmetro obrigatório que especifica uma ou mais IDs de instância ao executar operações compatíveis com múltiplos recursos.",
            "--monitoring Enabled=true: Parâmetro usado junto ao comando run-instances para ativar o monitoramento detalhado na criação da instância."
        ],
        "generalExplanation": [
            "A alternativa correta é o comando `aws ec2 monitor-instances --instance-ids i-1234567890abcdef0`. Esse comando é utilizado para habilitar o monitoramento detalhado em instâncias EC2 já existentes, permitindo coletar métricas com maior frequência via Amazon CloudWatch. O uso do parâmetro --instance-ids (no plural) é obrigatório, pois o comando aceita múltiplas instâncias em uma única execução. O uso incorreto do parâmetro no singular (--instance-id) resultaria em erro de sintaxe."
        ],
        "realWorld": [
            "Em um cenário de produção, um time de DevOps pode precisar investigar picos de CPU ou latência em uma aplicação hospedada no EC2. Ao habilitar o monitoramento detalhado, as métricas passam a ser coletadas a cada 60 segundos, fornecendo dados mais precisos para identificar gargalos e realizar auto scaling mais responsivo. Esse comando pode ser incluído em scripts de provisionamento (como no AWS CodeBuild, Terraform ou Ansible) para garantir que todas as instâncias criadas em um ambiente tenham monitoramento detalhado habilitado por padrão."
        ]
    },
    {
        "id": 60,
        "title": "Pergunta 60",
        "domain": "Implantação",
        "prompt": "Uma equipe de desenvolvimento implantou uma API REST no Amazon API Gateway em dois estágios diferentes — um estágio de teste e um estágio de produção. O estágio de teste é usado como uma versão para testes e o estágio de produção como uma versão estável. Após as atualizações serem aprovadas nos testes, a equipe deseja promover o estágio de teste para o estágio de produção. Qual das alternativas a seguir representa a solução ideal para esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Atualizar o valor da variável de estágio do nome do estágio de teste para o nome do estágio de produção.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Excluir o estágio de produção existente. Criar um novo estágio com o mesmo nome (prod) e implantar a versão testada nesse estágio.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Promover o estágio de teste para produção copiando manualmente as configurações do estágio de teste para o estágio de produção.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Implantar a API sem escolher um estágio. Dessa forma, a implantação ativa será atualizada em todos os estágios.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Implantar a versão testada da API no estágio de produção, criando uma nova implantação associada ao estágio de produção.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Variáveis de estágio são parâmetros configuráveis usados para alterar o comportamento da API em diferentes estágios, mas o nome do estágio é fixo e não pode ser alterado para promover uma versão."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível excluir e recriar o estágio de produção, essa abordagem não é ideal, pois pode causar downtime no ambiente de produção. Além disso, essa prática não é recomendada para promover versões testadas."
            },
            {
                "correct": false,
                "text": "Incorreta. Copiar manualmente as configurações não promove a versão da API e pode levar a inconsistências. A prática recomendada é criar uma nova implantação da API no estágio de produção com a versão testada."
            },
            {
                "correct": false,
                "text": "Incorreta. Uma API só pode ser implantada em um estágio específico. Não é possível implantar uma API sem escolher um estágio, pois cada implantação deve estar associada a um estágio para que a API seja acessível."
            },
            {
                "correct": true,
                "text": "Correta. A promoção da versão testada para produção no Amazon API Gateway é feita implantando a nova versão da API no estágio de produção. Isso envolve criar uma nova implantação da API e associá-la ao estágio de produção existente, sem necessidade de excluir ou recriar o estágio. Essa abordagem garante controle de versões e evita downtime."
            }
        ],
        "glossary": [
            "Amazon API Gateway: Serviço totalmente gerenciado da AWS que permite criar, publicar, monitorar e proteger APIs RESTful e WebSocket em larga escala.",
            "Estágio (Stage): Ambiente lógico dentro do API Gateway que representa uma versão específica ou fase do ciclo de vida da API, como dev, test ou prod.",
            "Implantação (Deployment): Ação de publicar uma versão da API em um estágio, tornando as alterações acessíveis aos consumidores.",
            "Variável de estágio (Stage Variable): Parâmetro configurável associado a um estágio, usado para alterar comportamentos ou endpoints (como URLs de backends) sem necessidade de modificar o código da API.",
            "Downtime: Período de indisponibilidade do serviço, durante o qual os usuários não conseguem acessar a API."
        ],
        "generalExplanation": [
            "A forma correta de promover uma API testada para produção é criar uma nova implantação (deployment) e associá-la ao estágio de produção existente no Amazon API Gateway. Essa abordagem é considerada a melhor prática da AWS porque evita downtime, permitindo que o ambiente de produção continue operando enquanto a nova versão é disponibilizada; mantém o histórico de versões, facilitando rollback e auditoria; e garante consistência entre ambientes, permitindo implantações controladas e seguras."
        ],
        "realWorld": [
            "Em uma arquitetura serverless, onde o API Gateway é usado para expor endpoints que acionam funções AWS Lambda, a equipe normalmente adota dois estágios: /dev para desenvolvimento e testes internos, e /prod para o ambiente de produção. Após validar as alterações no estágio de teste, o desenvolvedor executa um comando de implantação (por exemplo, via AWS CLI, CloudFormation ou AWS SAM) para criar uma nova implantação e associá-la ao estágio /prod: `aws apigateway create-deployment --rest-api-id a1b2c3d4 --stage-name prod --description 'Release v1.2 - melhorias de performance'`"
        ]
    },
    {
        "id": 61,
        "title": "Pergunta 61",
        "domain": "Solução de problemas e otimização",
        "prompt": "Você possui um grupo de Auto Scaling configurado com capacidade mínima de 1 e máxima de 5, projetado para lançar instâncias EC2 em 3 Zonas de Disponibilidade. Durante um período de baixa utilização, uma Zona de Disponibilidade inteira ficou indisponível e sua aplicação sofreu downtime. O que você pode fazer para garantir que sua aplicação permaneça altamente disponível?",
        "options": [
            {
                "letter": "A",
                "text": "Alterar a métrica de escalabilidade da política de auto scaling para bytes de rede",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Configurar o Auto Scaling Group para lançar instâncias em múltiplas Zonas de Disponibilidade e aumentar a capacidade mínima para 2",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Configurar failover rápido no Auto Scaling Group",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Aumentar a capacidade máxima do Auto Scaling Group para 10",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Habilitar RDS Multi-AZ",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível definir métricas personalizadas para políticas de escalabilidade, mudar a métrica para bytes de rede não garante que as instâncias sejam distribuídas entre diferentes Zonas de Disponibilidade, que é essencial para alta disponibilidade neste cenário."
            },
            {
                "correct": true,
                "text": "Correta. Para garantir alta disponibilidade, é necessário configurar explicitamente o Auto Scaling Group para lançar instâncias em múltiplas Zonas de Disponibilidade e aumentar a capacidade mínima para pelo menos 2. Isso assegura que as instâncias sejam distribuídas entre diferentes AZs, evitando downtime caso uma AZ fique indisponível."
            },
            {
                "correct": false,
                "text": "Incorreta. Esta opção é fictícia e não corresponde a uma funcionalidade real do Auto Scaling Group na AWS, sendo usada apenas como distração."
            },
            {
                "correct": false,
                "text": "Incorreta. Aumentar a capacidade máxima permite mais instâncias, mas não garante distribuição entre múltiplas Zonas de Disponibilidade nem alta disponibilidade por si só."
            },
            {
                "correct": false,
                "text": "Incorreta. Habilitar o RDS Multi-AZ torna o banco de dados altamente disponível, mas não resolve o problema da aplicação que depende de múltiplas instâncias EC2 distribuídas em diferentes Zonas de Disponibilidade."
            }
        ],
        "glossary": [
            "Auto Scaling Group (ASG): Serviço gerenciado da AWS que ajusta automaticamente o número de instâncias EC2 para manter disponibilidade, desempenho e custo otimizados conforme a demanda.",
            "Capacidade mínima: Número mínimo de instâncias que o ASG mantém em execução continuamente, mesmo em períodos de baixa demanda.",
            "Capacidade máxima: Limite superior de instâncias que o ASG pode criar para lidar com picos de tráfego.",
            "Zona de Disponibilidade (AZ): Data center isolado dentro de uma região AWS, projetado para alta disponibilidade e tolerância a falhas.",
            "RDS Multi-AZ: Recurso que replica automaticamente o banco de dados do Amazon RDS entre múltiplas AZs, garantindo failover automático em caso de falha.",
            "Métrica de escalabilidade: Indicador usado pelo ASG (como uso de CPU, tráfego de rede ou filas SQS) para decidir quando escalar horizontalmente.",
            "Failover: Processo automático de transferência de carga para recursos secundários quando o primário falha.",
            "Desired Capacity: Número de instâncias EC2 que o ASG deseja manter em operação — ajustado automaticamente entre os limites mínimo e máximo."
        ],
        "generalExplanation": [
            "A alternativa correta é configurar o Auto Scaling Group (ASG) para lançar instâncias em múltiplas Zonas de Disponibilidade e aumentar a capacidade mínima para pelo menos 2 instâncias. Essa configuração garante que as instâncias estejam distribuídas entre diferentes AZs, oferecendo alta disponibilidade e resiliência a falhas. Se uma AZ ficar indisponível, as instâncias nas demais zonas continuarão atendendo requisições, evitando downtime da aplicação."
        ],
        "realWorld": [
            "Em um ambiente de produção web, um time DevOps pode configurar o ASG para manter no mínimo duas instâncias EC2 distribuídas entre duas Zonas de Disponibilidade, por exemplo us-east-1a e us-east-1b. Mesmo que uma AZ apresente falha, a outra continua processando requisições. O Elastic Load Balancer (ELB) direciona automaticamente o tráfego para as instâncias saudáveis, e o ASG detecta falhas e substitui instâncias comprometidas, mantendo a Desired Capacity."
        ]
    },
    {
        "id": 62,
        "title": "Pergunta 62",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você está criando um aplicativo móvel que precisa acessar o AWS API Gateway. Os usuários devem se registrar primeiro antes de poderem acessar sua API, e você deseja que o gerenciamento de usuários seja totalmente gerenciado. Qual opção de autenticação você deve usar para a camada do API Gateway?",
        "options": [
            {
                "letter": "A",
                "text": "Usar Lambda Authorizer",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar Cognito User Pools",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Usar permissões IAM com assinatura sigv4",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar User Pools do API Gateway",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Lambda Authorizer permite implementar esquemas personalizados de autorização usando funções Lambda, como autenticação via tokens bearer (OAuth, SAML) ou parâmetros de requisição. No entanto, ele não oferece um gerenciamento de usuários totalmente gerenciado, exigindo que você implemente e mantenha a lógica de autenticação."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon Cognito User Pools oferece um serviço totalmente gerenciado para registro, autenticação e gerenciamento de usuários. Integrando o Cognito User Pools ao API Gateway, você pode controlar o acesso à API de forma simples e segura. O cliente deve autenticar-se no User Pool para obter um token válido, que será enviado no cabeçalho Authorization das requisições para acessar a API."
            },
            {
                "correct": false,
                "text": "Incorreta. A assinatura Signature Version 4 (sigv4) é um método para adicionar informações de autenticação às requisições HTTP para serviços AWS. Embora seja segura, não é prática para gerenciamento de usuários em aplicativos móveis, pois exigiria criar um usuário IAM para cada visitante, o que não é escalável nem gerenciado automaticamente."
            },
            {
                "correct": false,
                "text": "Incorreta. 'User Pools do API Gateway' não é uma funcionalidade real da AWS. Essa opção foi criada incorretamente e não existe como um recurso gerenciado para autenticação no API Gateway."
            }
        ],
        "glossary": [
            "AWS API Gateway: Serviço totalmente gerenciado que permite criar, publicar, monitorar e proteger APIs RESTful e WebSocket, funcionando como camada de entrada (gateway) para aplicações serverless.",
            "Cognito User Pools: Serviço da AWS para registro, autenticação e gerenciamento de usuários, emitindo tokens JWT que podem ser validados diretamente pelo API Gateway.",
            "Lambda Authorizer: Função AWS Lambda usada para criar mecanismos personalizados de autorização, processando tokens ou cabeçalhos de requisição antes de permitir o acesso à API.",
            "IAM (Identity and Access Management): Serviço para gerenciar identidades e permissões de acesso a recursos da AWS; não é indicado para autenticação direta de usuários de aplicativos móveis.",
            "Signature Version 4 (sigv4): Protocolo de autenticação baseada em assinaturas digitais, usado por clientes AWS (como SDKs e CLI) para acessar APIs seguras.",
            "Token Bearer: Tipo de token de autenticação incluído no cabeçalho HTTP Authorization, geralmente no formato 'Bearer <token>'.",
            "Authorization Header: Cabeçalho HTTP usado para enviar credenciais de autenticação, como tokens JWT ou chaves de API.",
            "OAuth e SAML: Protocolos padrão usados para autenticação e autorização federada em sistemas distribuídos e integração com provedores externos."
        ],
        "generalExplanation": [
            "A alternativa correta é utilizar o Amazon Cognito User Pools para autenticação com o API Gateway, pois ele fornece um serviço gerenciado e escalável para lidar com registro, login e autorização de usuários, eliminando a necessidade de criar usuários IAM ou implementar autenticação manual via Lambda Authorizers. Quando um usuário faz login, o Cognito emite tokens JWT (JSON Web Tokens) que o API Gateway valida automaticamente, garantindo segurança, simplicidade e desempenho."
        ],
        "realWorld": [
            "Em um aplicativo móvel de e-commerce, o time de desenvolvimento pode usar o Amazon Cognito User Pools para gerenciar login, cadastro e autenticação multifator (MFA). O fluxo funciona assim: o usuário faz login pelo app, o Cognito autentica e retorna tokens JWT (Access, ID e Refresh), o aplicativo envia o token no cabeçalho HTTP Authorization: Bearer <JWT> para o API Gateway, e o API Gateway valida o token automaticamente e, se válido, encaminha a requisição para uma função AWS Lambda responsável por processar o pedido."
        ]
    },
    {
        "id": 63,
        "title": "Pergunta 63",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua empresa utiliza um Application Load Balancer para rotear o tráfego de usuários finais para aplicações hospedadas em instâncias Amazon EC2. As aplicações capturam informações das requisições recebidas e armazenam esses dados no Amazon Relational Database Service (RDS) utilizando mecanismos Microsoft SQL Server. Como parte de novas regras de conformidade, é necessário capturar o endereço IP do cliente. Como você deve proceder para obter essa informação? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Utilize o cabeçalho X-Forwarded-From.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Você pode obter os endereços IP dos clientes a partir dos logs do Elastic Load Balancing.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Utilize o cabeçalho X-Forwarded-For.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Você pode obter os endereços IP dos clientes a partir dos logs de acesso do servidor.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Você pode configurar o Amazon RDS para capturar automaticamente o endereço IP de origem das requisições feitas pelas aplicações.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O cabeçalho X-Forwarded-From não existe e é uma opção fictícia criada para confundir. O cabeçalho correto para identificar o IP do cliente é o X-Forwarded-For."
            },
            {
                "correct": false,
                "text": "Parcialmente correta. Os logs do Elastic Load Balancing registram o endereço IP do cliente original e podem ser usados para auditoria e análise posterior, mas não fornecem essa informação em tempo real para a aplicação."
            },
            {
                "correct": true,
                "text": "Correta. O cabeçalho X-Forwarded-For é utilizado para identificar o endereço IP do cliente original quando se utiliza um Load Balancer HTTP ou HTTPS. Como o Load Balancer atua como intermediário, os logs do servidor só mostram o IP do Load Balancer. O Elastic Load Balancing insere o IP do cliente neste cabeçalho e o repassa para o servidor, permitindo capturar o IP real do cliente."
            },
            {
                "correct": false,
                "text": "Incorreta. Como os Load Balancers interceptam o tráfego entre os clientes e os servidores, os logs de acesso do servidor conterão apenas o endereço IP do Load Balancer, não do cliente original."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon RDS não possui a capacidade de capturar automaticamente o endereço IP do cliente que originou a requisição à aplicação. Ele registra conexões ao banco, mas não armazena o IP do usuário final que acessou a aplicação via ALB."
            }
        ],
        "glossary": [
            "Application Load Balancer (ALB): Serviço da AWS que distribui automaticamente tráfego HTTP/HTTPS entre múltiplas instâncias EC2, contêineres ou endpoints, proporcionando alta disponibilidade e escalabilidade para aplicações web.",
            "X-Forwarded-For: Cabeçalho HTTP padrão que contém o endereço IP original do cliente quando a requisição passa por proxies ou balanceadores de carga como o ALB.",
            "Elastic Load Balancing logs (ELB logs): Registros detalhados gerados pelo ALB contendo informações sobre as requisições, como IP do cliente, tempos de resposta e códigos de status HTTP.",
            "Server access logs: Logs gerados diretamente pela aplicação ou servidor web (como Nginx, Apache, etc.), contendo detalhes das requisições processadas.",
            "Amazon RDS: Serviço de banco de dados relacional gerenciado da AWS que suporta mecanismos como MySQL, PostgreSQL, MariaDB, Oracle e Microsoft SQL Server."
        ],
        "generalExplanation": [
            "Quando uma aplicação está atrás de um Application Load Balancer (ALB), as requisições dos clientes são roteadas primeiro pelo ALB antes de chegar às instâncias EC2 ou aos containers. Isso significa que os logs do servidor registram apenas o endereço IP do ALB, e não o IP real do cliente. Para resolver isso, o ALB insere automaticamente o cabeçalho X-Forwarded-For nas requisições HTTP/HTTPS. Esse cabeçalho contém o IP original do cliente, permitindo que a aplicação capture e registre essa informação de forma precisa em tempo real."
        ],
        "realWorld": [
            "Em uma aplicação web corporativa hospedada em múltiplas instâncias EC2 atrás de um ALB, é comum registrar o IP do usuário por motivos de segurança, rastreabilidade e conformidade regulatória (compliance). Ao configurar a aplicação (por exemplo, em um servidor Nginx, Apache ou framework web) para ler o cabeçalho X-Forwarded-For, o sistema passa a registrar o IP real do cliente — e não o do balanceador — em seus logs ou banco de dados (como no Amazon RDS). Simultaneamente, a equipe de DevOps pode ativar os logs do Elastic Load Balancing para armazenar cópias detalhadas das requisições no Amazon S3."
        ]
    },
    {
        "id": 64,
        "title": "Pergunta 64",
        "domain": "Implantação",
        "prompt": "Sua arquitetura de aplicação web consiste em múltiplas instâncias Amazon EC2 executando atrás de um Elastic Load Balancer, com um grupo de Auto Scaling configurado com capacidade desejada de 5 instâncias EC2. Você deseja integrar o AWS CodeDeploy para automatizar a implantação da aplicação. A implantação deve redirecionar o tráfego do ambiente original da aplicação para o novo ambiente. Qual das opções abaixo atenderá aos seus critérios de implantação? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Optar pela implantação Imutável (Immutable)",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Optar pela implantação Rolling",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Optar pela implantação Blue/Green",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Optar pela implantação In-place",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Usar o AWS CodePipeline para automatizar a troca de instâncias EC2 manualmente entre as versões da aplicação.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. A implantação imutável é suportada pelo AWS CodeDeploy para instâncias EC2, onde uma nova frota paralela de instâncias é provisionada para a nova versão da aplicação. Após a validação, o tráfego é redirecionado para essa nova frota, permitindo um processo semelhante ao Blue/Green com alta disponibilidade e rollback rápido."
            },
            {
                "correct": false,
                "text": "Incorreta. A implantação Rolling é uma estratégia típica do Elastic Beanstalk e não é diretamente suportada para instâncias EC2 gerenciadas pelo CodeDeploy. Além disso, não oferece o redirecionamento explícito de tráfego para um novo ambiente paralelo, como requerido."
            },
            {
                "correct": true,
                "text": "Correta. A implantação Blue/Green é utilizada para atualizar suas aplicações minimizando interrupções causadas pelas mudanças da nova versão da aplicação. O CodeDeploy provisiona a nova versão da aplicação paralelamente à versão antiga antes de redirecionar o tráfego de produção. No caso de instâncias EC2, o tráfego é transferido de um conjunto de instâncias no ambiente original para um conjunto substituto de instâncias, garantindo alta disponibilidade e rollback rápido em caso de falhas."
            },
            {
                "correct": false,
                "text": "Incorreta. Na implantação In-place, a aplicação em cada instância do grupo de implantação é parada, a nova revisão é instalada e a aplicação é reiniciada na mesma instância. Embora seja possível usar um load balancer para remover temporariamente as instâncias durante a implantação, o tráfego não é redirecionado para um novo ambiente paralelo."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o AWS CodePipeline possa orquestrar pipelines de CI/CD, ele não realiza diretamente o redirecionamento de tráfego entre ambientes ou substituição manual de instâncias. Essa funcionalidade é obtida por meio de estratégias de implantação oferecidas pelo CodeDeploy, como Blue/Green ou Imutável."
            }
        ],
        "glossary": [
            "Blue/Green deployment: Estratégia de implantação que cria um ambiente paralelo com a nova versão da aplicação. Após testes e validação, o tráfego é redirecionado do ambiente atual (Blue) para o novo (Green), garantindo mínimo downtime e rollback rápido.",
            "Immutable deployment: Método que cria uma nova frota de instâncias EC2 com a nova versão, substituindo completamente a frota antiga após a validação, sem modificá-la — assegurando ambientes isolados e consistentes.",
            "In-place deployment: Atualiza a aplicação diretamente nas instâncias existentes, interrompendo o serviço durante a substituição da versão. É simples, mas pode gerar downtime e risco maior de falhas.",
            "Rolling deployment: Atualiza instâncias em lotes graduais, sem criar ambiente paralelo completo. Reduz downtime, mas não oferece rollback instantâneo nem isolamento total de ambientes.",
            "Elastic Load Balancer (ELB): Serviço que distribui automaticamente o tráfego entre múltiplas instâncias EC2, garantindo alta disponibilidade e balanceamento dinâmico.",
            "Auto Scaling group: Conjunto gerenciado de instâncias EC2 que ajusta a capacidade automaticamente conforme métricas de demanda e políticas definidas.",
            "CodeDeploy: Serviço de automação de implantação da AWS que orquestra atualizações de aplicações em EC2, Lambda e ECS, suportando múltiplas estratégias (In-place, Blue/Green, Immutable).",
            "Amazon EC2: Serviço de computação elástica que disponibiliza servidores virtuais escaláveis para hospedar aplicações e workloads."
        ],
        "generalExplanation": [
            "As estratégias Blue/Green e Immutable são as mais indicadas para implantações que exigem redirecionamento de tráfego para um novo ambiente paralelo, pois ambas garantem alta disponibilidade, segurança e rollback rápido. Blue/Green cria dois ambientes idênticos — um ativo e outro de teste — e após validar a nova versão no ambiente Green, o tráfego do Elastic Load Balancer é redirecionado para ele. Immutable é semelhante, mas utiliza uma nova frota de instâncias dentro do mesmo grupo, garantindo que a versão anterior permaneça inalterada até o sucesso da implantação."
        ],
        "realWorld": [
            "Em uma aplicação de e-commerce de alto tráfego, o time de DevOps pode usar o CodeDeploy com Blue/Green deployment para lançar novas versões sem impacto nos usuários: o CodeDeploy cria um novo conjunto de instâncias EC2 com a versão atualizada, o ELB é reconfigurado para direcionar o tráfego apenas após validação bem-sucedida, e em caso de erro, o rollback é instantâneo, redirecionando novamente para o ambiente anterior."
        ]
    },
    {
        "id": 65,
        "title": "Pergunta 65",
        "domain": "Solução de problemas e otimização",
        "prompt": "Você está gerenciando um site de armazenamento de arquivos na nuvem com um Application Load Balancer (ALB) voltado para a internet, que direciona as requisições dos usuários para 10 instâncias Amazon EC2 registradas. Os usuários reclamam que o site sempre solicita que eles façam reautenticação ao navegar entre as páginas. Você fica surpreso, pois esse comportamento não ocorre em sua máquina local ou no ambiente de desenvolvimento. Qual poderia ser a causa desse problema?",
        "options": [
            {
                "letter": "A",
                "text": "O Load Balancer não tem a funcionalidade de stickiness (sessões aderentes) habilitada.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "O Load Balancer não tem TLS habilitado.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "O Application Load Balancer está no modo slow-start, o que dá mais tempo para ler e gravar dados de sessão.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "As instâncias EC2 estão desconectando os usuários porque nunca têm acesso aos IPs dos clientes devido ao Load Balancer.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Sessões aderentes permitem que o Load Balancer direcione as requisições subsequentes do mesmo cliente para a mesma instância alvo, mantendo o estado da sessão. Sem essa funcionalidade, as requisições podem ser distribuídas para diferentes instâncias, causando a necessidade de reautenticação constante."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o TLS seja importante para segurança e criptografia, sua ausência não causa perda de sessão ou necessidade constante de reautenticação."
            },
            {
                "correct": false,
                "text": "Incorreta. O modo slow-start permite que as instâncias recebam o tráfego gradualmente para 'aquecer' antes de receberem sua carga total, mas não tem impacto na gestão de sessões ou autenticação."
            },
            {
                "correct": false,
                "text": "Incorreta. O Elastic Load Balancing armazena o endereço IP do cliente no cabeçalho da requisição X-Forwarded-For e o repassa para o servidor. Assim, as instâncias EC2 podem acessar o IP original do cliente se necessário, e isso não causa a perda da sessão."
            }
        ],
        "glossary": [
            "Application Load Balancer (ALB): Balanceador de carga gerenciado da AWS que distribui tráfego entre múltiplas instâncias EC2, contêineres ou endpoints, operando na camada 7 (HTTP/HTTPS) do modelo OSI.",
            "Sessões aderentes (Sticky Sessions): Mecanismo que mantém as requisições subsequentes de um mesmo cliente direcionadas para a mesma instância de backend, preservando o estado da sessão.",
            "X-Forwarded-For: Cabeçalho HTTP usado para identificar o IP original do cliente quando o tráfego passa por proxies ou balanceadores.",
            "Slow-start mode: Recurso do ALB que distribui o tráfego gradualmente para novas instâncias adicionadas ao target group, permitindo aquecimento controlado antes da carga total.",
            "TLS (Transport Layer Security): Protocolo que garante comunicação criptografada e segura entre cliente e servidor, protegendo dados durante a transmissão."
        ],
        "generalExplanation": [
            "O problema descrito ocorre porque o Application Load Balancer (ALB) não está configurado com sessões aderentes (sticky sessions) habilitadas. Por padrão, o ALB distribui requisições de forma independente, enviando cada nova requisição do mesmo cliente para qualquer instância saudável no target group. Quando o estado da sessão é armazenado localmente na instância EC2, isso causa perda de sessão — o usuário precisa se reautenticar a cada navegação porque o servidor que recebe a próxima requisição não possui os dados de sessão do cliente."
        ],
        "realWorld": [
            "Em uma aplicação web tradicional hospedada em múltiplas instâncias EC2 atrás de um Application Load Balancer, cada instância armazena informações de sessão (login, preferências do usuário, carrinho de compras etc.) localmente. Sem sticky sessions, o usuário pode ser redirecionado para outra instância a cada requisição, perdendo o contexto de autenticação. A solução é habilitar sticky sessions no ALB: no Console AWS → EC2 → Target Groups, habilite Stickiness e configure o cookie duration (por exemplo, 300 segundos)."
        ]
    }
];
