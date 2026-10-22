const originalQuestions = [
    {
        "id": 1,
        "title": "Pergunta 1",
        "domain": "Implantação",
        "prompt": "Uma plataforma de comunicação atende milhões de clientes e realiza o deploy de funcionalidades em um ambiente de produção na AWS utilizando o CodeDeploy. Você está revisando os scripts do processo de implantação localizados no arquivo AppSpec. Qual das opções a seguir apresenta a ordem correta dos eventos do ciclo de vida?",
        "options": [
            {
                "letter": "A",
                "text": "BeforeInstall => ValidateService => DownloadBundle => ApplicationStart",
                "correct": false
            },
            {
                "letter": "B",
                "text": "BeforeInstall => ApplicationStart => DownloadBundle => ValidateService",
                "correct": false
            },
            {
                "letter": "C",
                "text": "ValidateService => BeforeInstall => DownloadBundle => ApplicationStart",
                "correct": false
            },
            {
                "letter": "D",
                "text": "DownloadBundle => BeforeInstall => ApplicationStart => ValidateService",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Essa ordem está incorreta porque o DownloadBundle deve ser o primeiro evento para baixar o pacote de implantação, e o ValidateService deve ocorrer após o ApplicationStart para validar o serviço em execução."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa sequência não respeita a ordem correta dos eventos do ciclo de vida do CodeDeploy, pois o DownloadBundle deve ocorrer antes do BeforeInstall, e o ValidateService deve ser o último evento."
            },
            {
                "correct": false,
                "text": "Incorreta. O ValidateService não pode ser o primeiro evento, pois ele valida o serviço após a implantação, e o DownloadBundle deve ser o primeiro passo para obter o pacote de implantação."
            },
            {
                "correct": true,
                "text": "Correta. Essa é a ordem correta dos eventos do ciclo de vida no AWS CodeDeploy: primeiro o DownloadBundle para baixar o pacote, depois BeforeInstall para preparar o ambiente, seguido pelo ApplicationStart para iniciar a aplicação, e por fim ValidateService para validar se o serviço está funcionando corretamente."
            }
        ],
        "glossary": [
            "AWS CodeDeploy – Serviço totalmente gerenciado da AWS que automatiza a implantação de aplicações em instâncias EC2, servidores locais ou ambientes serverless (como Lambda).",
            "AppSpec file – Arquivo de configuração que define os scripts, caminhos e eventos a serem executados durante o ciclo de vida da implantação.",
            "Lifecycle events (eventos do ciclo de vida) – Etapas ordenadas do processo de implantação em que ações específicas (scripts) podem ser executadas.",
            "DownloadBundle – Evento inicial que baixa o pacote de implantação (artefatos) para a instância de destino.",
            "BeforeInstall – Evento que prepara o ambiente antes da instalação, podendo parar serviços existentes, remover versões antigas ou ajustar permissões.",
            "ApplicationStart – Evento que inicia ou reinicia a aplicação após a instalação dos novos arquivos.",
            "ValidateService – Evento final que executa testes de validação para confirmar o funcionamento correto da aplicação após a implantação."
        ],
        "generalExplanation": [
            "O ciclo de vida do AWS CodeDeploy é cuidadosamente estruturado para garantir implantações consistentes e sem interrupções. A sequência correta dos eventos é: DownloadBundle (o pacote é baixado), BeforeInstall (ambiente é preparado), ApplicationStart (nova versão é iniciada) e ValidateService (verificações finais). Essa ordem garante que o ambiente esteja sempre limpo antes de iniciar a nova versão e que o serviço só seja considerado ativo após a validação final."
        ],
        "realWorld": [
            "Imagine uma plataforma de e-commerce hospedada em instâncias EC2 com alta demanda. O time de DevOps utiliza o AWS CodeDeploy para realizar implantações automatizadas com zero downtime. Durante a atualização: o DownloadBundle baixa o novo build, o BeforeInstall interrompe o serviço anterior e limpa o cache, o ApplicationStart executa o novo serviço, e o ValidateService roda testes automatizados de saúde para confirmar que o site está acessível e funcional."
        ]
    },
    {
        "id": 2,
        "title": "Pergunta 2",
        "domain": "Solução de problemas e otimização",
        "prompt": "Após revisar sua fatura mensal da AWS, você percebe que o custo do uso do Amazon SQS aumentou substancialmente após a criação de novas filas; no entanto, você sabe que os clientes da fila não possuem muito tráfego e estão recebendo respostas vazias. Qual das seguintes ações você deve tomar para reduzir os custos?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar Long Polling",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Aumentar o VisibilityTimeout",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar uma fila FIFO",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Diminuir o DelaySeconds",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O Long Polling no Amazon SQS permite que a requisição aguarde até que haja pelo menos uma mensagem disponível antes de retornar uma resposta, reduzindo significativamente o número de respostas vazias e, consequentemente, o custo associado às requisições desnecessárias."
            },
            {
                "correct": false,
                "text": "Incorreta. O VisibilityTimeout controla o tempo em que uma mensagem fica invisível para outros consumidores após ser recebida, mas não impacta diretamente no custo relacionado a respostas vazias ou no número de requisições feitas à fila."
            },
            {
                "correct": false,
                "text": "Incorreta. Filas FIFO garantem a ordem de processamento das mensagens e evitam duplicatas, porém são mais caras que as filas padrão e não ajudam na redução de custos relacionados a respostas vazias ou baixa taxa de mensagens."
            },
            {
                "correct": false,
                "text": "Incorreta. O parâmetro DelaySeconds atrasa a visibilidade inicial da mensagem na fila, mas não reduz o número de respostas vazias nem o custo associado ao polling da fila."
            }
        ],
        "glossary": [
            "Amazon SQS (Simple Queue Service) – Serviço de mensageria totalmente gerenciado da AWS que permite desacoplar e escalar componentes de aplicações distribuídas, garantindo entrega confiável das mensagens.",
            "Long Polling – Técnica que mantém a conexão aberta por até 20 segundos enquanto aguarda mensagens na fila, reduzindo respostas vazias e o número de chamadas à API ReceiveMessage.",
            "VisibilityTimeout – Tempo durante o qual uma mensagem fica invisível para outros consumidores após ser recebida, evitando processamento duplicado.",
            "FIFO Queue (First-In-First-Out) – Tipo de fila que mantém a ordem estrita de envio e recebimento e previne duplicação de mensagens; usada quando a ordem é crítica.",
            "DelaySeconds – Parâmetro que define um atraso inicial antes que uma mensagem recém-enviada fique disponível para consumo."
        ],
        "generalExplanation": [
            "A opção correta é habilitar o Long Polling no Amazon SQS, pois essa técnica reduz significativamente o número de requisições desnecessárias que retornam respostas vazias (sem mensagens), o que resulta em economia de custo e maior eficiência. Quando o Long Polling é configurado, o consumidor da fila mantém a conexão aberta até 20 segundos enquanto aguarda mensagens. As demais opções não resolvem o problema descrito: VisibilityTimeout evita duplicação de processamento mas não reduz chamadas; FIFO mantém ordem mas não impacta custos; DelaySeconds controla tempo de liberação sem relação com polling."
        ],
        "realWorld": [
            "Imagine uma aplicação serverless que usa AWS Lambda para processar mensagens recebidas de uma fila SQS. Em períodos de baixa atividade, chamadas frequentes à API ReceiveMessage retornam filas vazias, gerando custos desnecessários. Ao configurar Long Polling (WaitTimeSeconds=20), a aplicação espera eficientemente por mensagens antes de responder, reduzindo o número de invocações e chamadas ao SQS."
        ]
    },
    {
        "id": 3,
        "title": "Pergunta 3",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um sistema de gerenciamento de pedidos utiliza um job cron para consultar a existência de novos pedidos. Cada vez que um novo pedido é criado, o job cron envia os dados desse pedido como mensagem para filas de mensagens, a fim de facilitar o processamento downstream dos pedidos de forma confiável. Para reduzir custos e melhorar a performance, a empresa deseja migrar essa funcionalidade para a nuvem AWS. Qual das seguintes opções é a solução mais otimizada para atender a esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "Usar o Amazon SNS para enviar notificações para streams do Amazon Kinesis Data Firehose para processar os dados para aplicações downstream",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar o Amazon SNS para enviar notificações e utilizar funções AWS Lambda para processar as informações recebidas do SNS",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Configurar diferentes filas do Amazon SQS para consultar periodicamente a existência de novos pedidos",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar o Amazon SNS para enviar notificações quando um pedido é criado. Configurar diferentes filas do Amazon SQS para receber essas mensagens e realizar o processamento downstream",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível assinar streams do Kinesis Data Firehose em tópicos SNS, o Kinesis é projetado para processamento em tempo real de grandes volumes de dados. Para o caso de uso apresentado, que envolve desacoplamento e armazenamento temporário de mensagens para processamento posterior, o SQS é mais adequado e econômico."
            },
            {
                "correct": false,
                "text": "Incorreta. Apesar da integração entre SNS e Lambda permitir invocar funções Lambda com notificações SNS, o Lambda não armazena mensagens. Se uma função Lambda falhar no processamento, a mensagem pode ser perdida."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon SQS não é adequado para ser usado como serviço de polling ativo, pois as mensagens precisam ser enviadas para a fila (push) e depois consumidas pelos consumidores."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon SNS trabalha em conjunto com o Amazon SQS para fornecer uma solução eficiente e confiável. O SNS permite enviar mensagens em modo push para múltiplos assinantes, eliminando a necessidade de polling."
            }
        ],
        "glossary": [
            "Amazon SNS (Simple Notification Service) – serviço de notificação pub/sub que envia mensagens em modo push para múltiplos assinantes simultaneamente.",
            "Amazon SQS (Simple Queue Service) – serviço de filas que armazena mensagens de forma assíncrona e durável, permitindo o desacoplamento entre produtores e consumidores.",
            "AWS Lambda – serviço de computação serverless que executa código em resposta a eventos, sem necessidade de gerenciar servidores ou armazenamento persistente.",
            "Amazon Kinesis Data Firehose – serviço para ingestão e entrega contínua de grandes volumes de dados em tempo real, mais adequado a cenários de streaming analytics.",
            "Polling – técnica em que o consumidor verifica periodicamente se há novas mensagens ou dados disponíveis.",
            "Push – envio ativo e imediato de mensagens aos destinatários, sem a necessidade de consulta periódica.",
            "Fanout SNS–SQS – padrão arquitetural em que um tópico SNS distribui mensagens para múltiplas filas SQS assinadas, garantindo entrega paralela e confiável."
        ],
        "generalExplanation": [
            "A melhor solução é combinar o Amazon SNS com o Amazon SQS, implementando o padrão fanout SNS–SQS. Essa integração permite que mensagens sejam enviadas instantaneamente via SNS (push) para múltiplos assinantes — e, ao mesmo tempo, armazenadas de forma confiável em filas SQS, garantindo entrega durável e ordenada para processamento posterior. Esse modelo elimina a necessidade de polling contínuo, melhora a escalabilidade e a resiliência do sistema e reduz custos."
        ],
        "realWorld": [
            "Em um sistema de e-commerce, quando um novo pedido é criado, a aplicação publica uma mensagem em um tópico SNS. Esse tópico notifica automaticamente vários sistemas — como faturamento, controle de estoque e logística — que estão assinados ao tópico via filas SQS. Cada serviço mantém sua fila SQS independente, garantindo que as mensagens sejam armazenadas de forma durável e processadas mesmo em caso de falhas temporárias."
        ]
    },
    {
        "id": 4,
        "title": "Pergunta 4",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "A equipe de desenvolvimento de uma empresa deseja inserir registros de fornecedores em uma tabela Amazon DynamoDB assim que o fornecedor fizer o upload de um novo arquivo em um bucket Amazon S3. Como um Associate Developer, qual conjunto de passos você recomendaria para alcançar esse objetivo?",
        "options": [
            {
                "letter": "A",
                "text": "Criar um evento no S3 para invocar uma função Lambda que insira os registros no DynamoDB",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Configurar um evento com Amazon CloudWatch Events para monitorar o bucket S3 e então inserir os registros no DynamoDB",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Escrever um job cron que execute uma função Lambda em um horário agendado para inserir os registros no DynamoDB",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Desenvolver uma função Lambda que faça polling no bucket S3 e então insira os registros no DynamoDB",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O recurso de notificações do Amazon S3 permite configurar eventos que disparam uma função Lambda imediatamente após a criação de um objeto no bucket. Essa função Lambda pode então processar o arquivo e inserir os registros no DynamoDB de forma eficiente e em tempo real."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon CloudWatch Events (EventBridge) não pode monitorar diretamente um bucket S3 para eventos de criação de objetos, nem pode inserir registros diretamente no DynamoDB."
            },
            {
                "correct": false,
                "text": "Incorreta. Executar uma função Lambda em intervalos agendados pode resultar em execuções desnecessárias quando não há novos arquivos para processar, causando desperdício de recursos."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa abordagem não é eficiente, pois a função Lambda pode executar polling no bucket S3 em intervalos regulares mesmo quando não há arquivos novos para processar."
            }
        ],
        "glossary": [
            "Amazon S3 – serviço de armazenamento de objetos da AWS que permite guardar e recuperar grandes volumes de dados com alta durabilidade e disponibilidade.",
            "AWS Lambda – serviço de computação serverless que executa código em resposta a eventos, sem necessidade de provisionar ou gerenciar servidores.",
            "Amazon DynamoDB – banco de dados NoSQL totalmente gerenciado, altamente escalável e de baixa latência.",
            "Polling – técnica de consulta periódica a um recurso para verificar mudanças ou novos dados, consumindo recursos de forma contínua.",
            "Notificação de evento S3 – recurso que aciona ações automáticas (como invocar uma função Lambda) sempre que ocorre um evento em um bucket, como a criação de um objeto."
        ],
        "generalExplanation": [
            "A solução correta é criar uma notificação de evento no Amazon S3 que dispare uma função AWS Lambda para inserir registros no Amazon DynamoDB assim que novos arquivos forem adicionados ao bucket. Essa abordagem usa o recurso nativo de notificações do S3, que aciona eventos de forma imediata e automatizada após operações como PUT Object, permitindo que a aplicação processe dados em tempo real."
        ],
        "realWorld": [
            "Em um cenário prático, uma equipe de desenvolvimento configura um bucket S3 para receber arquivos enviados por fornecedores contendo dados de produtos ou pedidos. Assim que um arquivo é carregado, o S3 dispara automaticamente uma função Lambda, que lê o conteúdo do arquivo, valida os dados e insere ou atualiza os registros correspondentes no DynamoDB."
        ]
    },
    {
        "id": 5,
        "title": "Pergunta 5",
        "domain": "Implantação",
        "prompt": "Qual é a ordem de execução dos hooks em implantações in-place utilizando o CodeDeploy?",
        "options": [
            {
                "letter": "A",
                "text": "Application Stop -> Before Install -> Application Start -> Validate Service",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Application Stop -> Download Bundle -> Before Install -> Install -> After Install -> Application Start -> Validate Service",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Before Install -> Application Stop -> Validate Service -> Application Start",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Before Install -> Application Stop -> Application Start -> Validate Service",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Application Stop -> Before Install -> Validate Service -> Application Start",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Essa alternativa simplifica demais o fluxo oficial, omitindo hooks importantes como 'Download Bundle', 'Install' e 'After Install'."
            },
            {
                "correct": true,
                "text": "Correta. Essa é a ordem oficial dos hooks para implantações in-place no CodeDeploy. Primeiro, o aplicativo é parado (Application Stop), os arquivos são baixados (Download Bundle), depois são preparados antes da instalação (Before Install), a instalação é realizada (Install), seguida por ações pós-instalação (After Install), o aplicativo é iniciado novamente (Application Start) e, por fim, a validação do serviço é realizada (Validate Service)."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa sequência está incorreta porque o aplicativo precisa ser parado antes do 'Before Install' e a validação deve ocorrer após o 'Application Start'."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa ordem está incorreta porque o hook 'Application Stop' deve ocorrer antes do 'Before Install'."
            },
            {
                "correct": false,
                "text": "Incorreta. O hook 'Validate Service' deve ser executado após o 'Application Start'."
            }
        ],
        "glossary": [
            "Application Stop – hook que interrompe o aplicativo antes da instalação dos novos arquivos, prevenindo inconsistências.",
            "Download Bundle – hook responsável por baixar o pacote de implantação contendo os arquivos atualizados.",
            "Before Install – hook que prepara o ambiente e os arquivos antes da instalação.",
            "Install – hook que executa a instalação ou substituição dos arquivos da aplicação no ambiente.",
            "After Install – hook utilizado para tarefas pós-instalação, como configuração adicional ou migração de dados.",
            "Application Start – hook que reinicia o aplicativo após a atualização dos arquivos.",
            "Validate Service – hook que valida se o serviço está funcionando corretamente após a implantação.",
            "In-place deployment – tipo de implantação em que a aplicação é atualizada na mesma instância EC2."
        ],
        "generalExplanation": [
            "No AWS CodeDeploy, o processo de implantação in-place segue uma ordem rigorosa de execução dos hooks, definida no AppSpec file, para garantir uma atualização segura e previsível da aplicação. A sequência correta é: Application Stop, Download Bundle, Before Install, Install, After Install, Application Start e Validate Service."
        ],
        "realWorld": [
            "Em um cenário corporativo, um desenvolvedor que gerencia aplicações web em instâncias EC2 pode usar o AWS CodeDeploy para automatizar atualizações. Seguir a sequência correta dos hooks garante que o aplicativo seja pausado, atualizado, reiniciado e validado de forma ordenada, minimizando o downtime e o risco de falhas."
        ]
    },
    {
        "id": 6,
        "title": "Pergunta 6",
        "domain": "Segurança",
        "prompt": "Um Amazon SQS precisa ser configurado entre duas contas AWS para acesso compartilhado à fila. A conta AWS A possui a fila SQS em sua conta e a conta AWS B precisa ter acesso a essa fila. Quais das seguintes opções precisam ser combinadas para permitir esse acesso entre contas? (Selecione três.)",
        "options": [
            {
                "letter": "A",
                "text": "O administrador da conta A anexa uma política de confiança ao role que identifica a conta B como o principal do serviço AWS que pode assumir o role",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Os usuários da conta B possuem uma política de permissões que permite assumir o role criado na conta A",
                "correct": true
            },
            {
                "letter": "C",
                "text": "O administrador da conta B cria um role IAM e anexa uma política de confiança ao role com a conta B como principal",
                "correct": false
            },
            {
                "letter": "D",
                "text": "O administrador da conta B precisa adicionar a fila SQS da conta A como recurso confiável em seu próprio serviço de fila SQS",
                "correct": false
            },
            {
                "letter": "E",
                "text": "O administrador da conta A anexa uma política de confiança ao role que identifica a conta B como o principal que pode assumir o role",
                "correct": true
            },
            {
                "letter": "F",
                "text": "O administrador da conta A cria um role IAM e anexa uma política de permissões",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A política de confiança para um serviço AWS é usada quando um serviço precisa assumir o role, não para acesso entre contas."
            },
            {
                "correct": true,
                "text": "Correta. Para que os usuários da conta B possam assumir o role criado na conta A, eles precisam ter uma política de permissões que permita a ação sts:AssumeRole para esse role."
            },
            {
                "correct": false,
                "text": "Incorreta. A criação do role com a política de permissões e confiança deve ser feita na conta A, que possui o recurso."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon SQS não permite que uma fila de uma conta seja 'importada' ou adicionada como recurso confiável em outra conta."
            },
            {
                "correct": true,
                "text": "Correta. Para permitir o acesso entre contas, a conta A deve criar um role com uma política de confiança que permita que a conta B assuma esse role."
            },
            {
                "correct": true,
                "text": "Correta. A conta A deve criar um role com uma política de permissões que conceda acesso aos recursos da fila SQS para o role que será assumido pela conta B."
            }
        ],
        "glossary": [
            "Política de confiança (trust policy) – Documento que define quais entidades (usuários, contas ou serviços) podem assumir um role IAM.",
            "Política de permissões (permissions policy) – Documento que especifica as ações permitidas que um role ou usuário pode executar em recursos AWS.",
            "Role IAM – Identidade do IAM que concede permissões temporárias a usuários, serviços ou contas.",
            "Principal – Entidade (usuário, serviço ou conta AWS) autorizada a assumir um role segundo a trust policy.",
            "Cross-account access – Acesso entre contas AWS diferentes, configurado com roles IAM e políticas adequadas.",
            "sts:AssumeRole – Ação do AWS STS que permite a uma entidade assumir um role IAM e obter credenciais temporárias."
        ],
        "generalExplanation": [
            "Para permitir que a conta B acesse uma fila SQS na conta A, é necessário configurar duas políticas complementares: Na conta A, criar um role IAM com uma política de permissões que autorize as ações desejadas sobre a fila, e configurar uma política de confiança permitindo que a conta B assuma o role. Na conta B, conceder aos usuários uma política IAM que permita executar sts:AssumeRole no role criado na conta A."
        ],
        "realWorld": [
            "Suponha que uma aplicação serverless (Lambda) na conta B precise ler mensagens de uma fila SQS na conta A. A equipe de segurança da conta A cria um role IAM 'SQSAccessRole' com permissões para sqs:ReceiveMessage e sqs:DeleteMessage, e autoriza a conta B a assumir esse role. Na conta B, a função Lambda tem uma política que permite sts:AssumeRole no ARN do role, obtendo credenciais seguras e temporárias."
        ]
    },
    {
        "id": 7,
        "title": "Pergunta 7",
        "domain": "Segurança",
        "prompt": "Uma organização começou recentemente a usar o AWS CodeCommit como seu serviço de controle de versão. Uma equipe de conformidade de segurança que visitou a organização estava auditando o processo de desenvolvimento de software e percebeu que os desenvolvedores executavam muitos comandos git push em suas máquinas de desenvolvimento. A equipe de conformidade exige que a criptografia seja usada para essa atividade. Como a organização pode garantir que o código-fonte esteja criptografado em trânsito e em repouso?",
        "options": [
            {
                "letter": "A",
                "text": "Habilite a criptografia KMS manualmente.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Os repositórios são automaticamente criptografados em repouso.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Use um hook no git para criptografar o código no cliente antes do envio.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Use uma função AWS Lambda como hook para criptografar o código enviado.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O AWS CodeCommit cria automaticamente uma chave gerenciada pela AWS no AWS KMS para criptografar os dados do repositório, portanto, não é necessário habilitar manualmente a criptografia KMS."
            },
            {
                "correct": true,
                "text": "Correta. Os dados nos repositórios do AWS CodeCommit são criptografados automaticamente tanto em trânsito quanto em repouso. Quando os dados são enviados para um repositório (por exemplo, por meio do comando git push), o CodeCommit criptografa os dados enquanto os armazena."
            },
            {
                "correct": false,
                "text": "Incorreta. Não é necessário implementar hooks no cliente para criptografia, pois o AWS CodeCommit já garante a criptografia dos dados em trânsito e em repouso de forma transparente."
            },
            {
                "correct": false,
                "text": "Incorreta. Não há necessidade de usar AWS Lambda para criptografar o código enviado, pois o CodeCommit já realiza essa criptografia automaticamente."
            }
        ],
        "glossary": [
            "AWS CodeCommit – serviço gerenciado de controle de versão baseado em Git da AWS, que permite armazenar e gerenciar código-fonte de forma segura e escalável.",
            "Criptografia em trânsito – proteção dos dados enquanto são transmitidos pela rede.",
            "Criptografia em repouso – proteção dos dados armazenados, garantindo que as informações salvas em discos ou bancos de dados estejam criptografadas.",
            "AWS KMS – serviço gerenciado da AWS para criação e controle de chaves de criptografia usadas na proteção de dados."
        ],
        "generalExplanation": [
            "O AWS CodeCommit garante criptografia automática dos dados tanto em trânsito quanto em repouso, utilizando chaves gerenciadas pelo AWS KMS. Isso significa que, ao executar comandos como git push, os dados são protegidos durante a transmissão e ao serem armazenados nos repositórios, sem necessidade de configuração manual."
        ],
        "realWorld": [
            "Em equipes de desenvolvimento que utilizam o CodeCommit como repositório Git na AWS, é essencial garantir que o código-fonte esteja protegido durante o envio e o armazenamento. Por exemplo, um time que manipula dados sensíveis ou proprietários pode confiar na criptografia automática do CodeCommit para atender requisitos de conformidade e segurança corporativa."
        ]
    },
    {
        "id": 8,
        "title": "Pergunta 8",
        "domain": "Implantação",
        "prompt": "Uma empresa de TI está utilizando o AWS CloudFormation para gerenciar sua infraestrutura de TI. Ela criou um template para provisionar uma stack com uma VPC e uma subnet. O valor de saída (output) dessa subnet precisa ser utilizado em outra stack. Como um Associate Developer, qual das seguintes opções você sugeriria para fornecer essa informação para outra stack?",
        "options": [
            {
                "letter": "A",
                "text": "Usar Fn::ImportValue",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar Fn::Transform",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar o campo 'Expose' na seção Output do template da stack",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar o campo 'Export' na seção Output do template da stack",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A função Fn::ImportValue é usada na stack consumidora para importar valores que já foram exportados por outra stack, mas não é o método para disponibilizar o valor inicialmente."
            },
            {
                "correct": false,
                "text": "Incorreta. A função Fn::Transform é usada para especificar macros que realizam processamento personalizado em partes do template."
            },
            {
                "correct": false,
                "text": "Incorreta. O campo 'Expose' não existe na especificação do CloudFormation."
            },
            {
                "correct": true,
                "text": "Correta. Para compartilhar valores entre stacks, é necessário exportar os valores de saída de uma stack usando o campo 'Export' na seção Output do template."
            }
        ],
        "glossary": [
            "Fn::ImportValue – Função intrínseca do AWS CloudFormation usada para importar valores exportados por outra stack.",
            "Export – Campo definido na seção Output de um template CloudFormation que torna um valor disponível para importação em outras stacks.",
            "Output – Seção de saída do template CloudFormation que define valores exibidos após o provisionamento.",
            "Fn::Transform – Função intrínseca usada para aplicar macros e transformar templates CloudFormation."
        ],
        "generalExplanation": [
            "A maneira correta e recomendada de compartilhar valores entre stacks no AWS CloudFormation é utilizando o par Export e Fn::ImportValue. Primeiro, a stack que gera o recurso deve definir um Output com o campo Export, tornando o valor disponível. Em seguida, outra stack pode importar esse valor com a função Fn::ImportValue."
        ],
        "realWorld": [
            "Em uma arquitetura modular, uma equipe pode criar uma stack de rede, que provisiona a VPC e subnets, exportando seus IDs. Uma stack de aplicação, que cria instâncias EC2 ou funções Lambda, importa esses valores via Fn::ImportValue para associar os recursos à rede correta."
        ]
    },
    {
        "id": 9,
        "title": "Pergunta 9",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa deseja adicionar capacidades geoespaciais à camada de cache, junto com funcionalidades de consulta e a capacidade de escalar horizontalmente. A empresa utiliza o Amazon RDS como camada de banco de dados. Qual solução é a mais adequada para esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Aproveitar as capacidades oferecidas pelo ElastiCache para Redis com o modo cluster desabilitado",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Aproveitar as capacidades oferecidas pelo ElastiCache para Redis com o modo cluster habilitado",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Utilizar o cache do CloudFront para atender à demanda de cargas de trabalho crescentes",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Migrar para o Amazon DynamoDB para utilizar o DynamoDB Accelerator (DAX) integrado automaticamente",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O modo cluster desabilitado limita a escalabilidade ao dimensionamento vertical, não suportando escalabilidade horizontal."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon ElastiCache para Redis com modo cluster habilitado oferece escalabilidade horizontal, alta disponibilidade e suporte a funcionalidades avançadas, incluindo capacidades geoespaciais."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon CloudFront é uma CDN que reduz a latência e a carga no servidor de origem, mas não oferece capacidades de cache em memória com funcionalidades geoespaciais."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o DynamoDB com DAX ofereça cache em memória, a migração do banco de dados para DynamoDB representa um esforço significativo."
            }
        ],
        "glossary": [
            "Amazon ElastiCache – serviço gerenciado de cache em memória da AWS que suporta Redis e Memcached.",
            "Redis – mecanismo de armazenamento em memória que oferece suporte a estruturas de dados avançadas (listas, conjuntos, hashes e geoespaciais).",
            "Modo Cluster – configuração do Redis que permite escalabilidade horizontal, dividindo os dados em múltiplos shards.",
            "Amazon RDS – serviço gerenciado de banco de dados relacional.",
            "DynamoDB Accelerator (DAX) – cache em memória otimizado exclusivamente para o DynamoDB."
        ],
        "generalExplanation": [
            "A escolha correta é Amazon ElastiCache para Redis com o modo cluster habilitado. Essa configuração é a única que atende simultaneamente aos requisitos de consultas geoespaciais nativas (GEOADD, GEORADIUS, GEOSEARCH), alto desempenho e baixa latência, e escalabilidade horizontal. O Redis Cluster distribui automaticamente os dados entre múltiplos shards, garantindo resiliência e paralelismo."
        ],
        "realWorld": [
            "Uma startup de mobilidade urbana que precisa localizar motoristas e passageiros próximos em tempo real pode usar o ElastiCache para Redis com modo cluster para armazenar e consultar coordenadas geográficas. O aplicativo adiciona as coordenadas de cada motorista ao Redis usando GEOADD, e quando um usuário solicita uma corrida, a aplicação usa GEOSEARCH para encontrar os motoristas mais próximos em milissegundos."
        ]
    },
    {
        "id": 10,
        "title": "Pergunta 10",
        "domain": "Segurança",
        "prompt": "Uma empresa desenvolveu um serviço baseado em aplicativo para que cidadãos possam reservar viagens de transporte na comunidade local. A plataforma está rodando em instâncias Amazon EC2 e utiliza o Amazon RDS para armazenar os dados de transporte. Uma nova funcionalidade foi solicitada para que recibos sejam enviados por e-mail aos clientes com anexos em PDF recuperados do Amazon S3. Qual das opções abaixo fornecerá às instâncias EC2 as permissões corretas para fazer upload de arquivos no Amazon S3 e gerar URLs assinadas do S3?",
        "options": [
            {
                "letter": "A",
                "text": "AWS CloudFormation",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar uma Role IAM para EC2",
                "correct": true
            },
            {
                "letter": "C",
                "text": "User Data da instância EC2",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Executar o comando aws configure na instância EC2",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O AWS CloudFormation é uma ferramenta para provisionamento de recursos, mas não concede permissões diretamente às instâncias EC2."
            },
            {
                "correct": true,
                "text": "Correta. Criar uma Role IAM e associá-la à instância EC2 permite que a aplicação na instância obtenha permissões temporárias e seguras para acessar o Amazon S3."
            },
            {
                "correct": false,
                "text": "Incorreta. O User Data é utilizado para executar scripts durante o lançamento da instância, mas não é recomendado inserir credenciais AWS nele."
            },
            {
                "correct": false,
                "text": "Incorreta. O comando aws configure exige o gerenciamento manual de credenciais estáticas, o que não é seguro nem escalável."
            }
        ],
        "glossary": [
            "Role IAM – Conjunto de permissões assumido por recursos AWS, permitindo acesso seguro e temporário sem uso de credenciais fixas.",
            "Instance Profile – Estrutura que associa uma Role IAM a uma instância EC2.",
            "User Data – Script executado automaticamente no boot da instância EC2.",
            "aws configure – Comando da AWS CLI usado para configurar credenciais locais.",
            "URLs assinadas do S3 – URLs temporárias e seguras que concedem acesso controlado a objetos armazenados no Amazon S3."
        ],
        "generalExplanation": [
            "A abordagem correta é criar uma Role IAM para EC2 e associá-la à instância por meio de um Instance Profile. Essa configuração permite que a aplicação em execução na EC2 obtenha automaticamente credenciais temporárias (via AWS STS), eliminando a necessidade de armazenar chaves de acesso fixas dentro da instância ou código-fonte."
        ],
        "realWorld": [
            "Um time de desenvolvimento mantém uma aplicação em EC2 que precisa armazenar recibos em PDF no Amazon S3 e gerar links temporários de download para os usuários. Eles criam uma Role IAM com permissões limitadas (s3:PutObject, s3:GetObject), associam a Role à instância EC2 via Instance Profile, e a aplicação usa o AWS SDK para interagir com o S3 sem precisar de chaves explícitas."
        ]
    },
    {
        "id": 11,
        "title": "Pergunta 11",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma organização utiliza a Alexa como assistente inteligente para aumentar a produtividade em toda a empresa. Um grupo de desenvolvedores gerencia Skills personalizadas da Alexa escritas em Node.js para controlar configurações de equipamentos das salas de conferência e iniciar reuniões por ativação por voz. O gerente solicitou que todo o código das funções seja monitorado quanto à taxa de erros, com a possibilidade de criar alarmes baseados nesses dados. Qual das seguintes opções deve ser escolhida? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "CloudWatch Alarms",
                "correct": true
            },
            {
                "letter": "B",
                "text": "AWS CloudTrail",
                "correct": false
            },
            {
                "letter": "C",
                "text": "AWS Systems Manager (SSM)",
                "correct": false
            },
            {
                "letter": "D",
                "text": "CloudWatch Metrics",
                "correct": true
            },
            {
                "letter": "E",
                "text": "AWS X-Ray",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O CloudWatch Alarms permite monitorar métricas específicas, como taxas de erro, e criar alarmes que disparam ações automáticas ou notificações quando os limites definidos são ultrapassados."
            },
            {
                "correct": false,
                "text": "Incorreta. O CloudTrail é um serviço de auditoria que registra chamadas de API, não é projetado para monitorar métricas de desempenho."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS Systems Manager é usado para gerenciar e automatizar operações em recursos, não é adequado para capturar métricas de erro de funções Lambda."
            },
            {
                "correct": true,
                "text": "Correta. O CloudWatch Metrics coleta e armazena métricas operacionais e de desempenho em tempo real, incluindo taxas de erro de funções Lambda."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS X-Ray é uma ferramenta para análise e depuração de aplicações distribuídas, mas não captura métricas para monitoramento contínuo."
            }
        ],
        "glossary": [
            "CloudWatch Metrics – serviço que coleta e armazena métricas operacionais e de desempenho em tempo real de recursos e aplicações AWS.",
            "CloudWatch Alarms – recurso do CloudWatch que cria alarmes baseados em métricas, disparando notificações ou ações automáticas quando limites são ultrapassados.",
            "AWS Systems Manager (SSM) – serviço voltado à automação e gerenciamento operacional de instâncias e recursos.",
            "AWS CloudTrail – serviço que registra chamadas de API para auditoria e conformidade.",
            "AWS X-Ray – serviço de rastreamento e depuração de requisições em aplicações distribuídas."
        ],
        "generalExplanation": [
            "A combinação de Amazon CloudWatch Metrics e CloudWatch Alarms é a solução correta para monitorar a taxa de erros das funções Lambda que compõem uma Alexa Skill. O CloudWatch Metrics coleta continuamente métricas operacionais — como invocações, duração, erros e throttles — e as disponibiliza em tempo real. Com base nessas métricas, o CloudWatch Alarms permite configurar limites e ações automatizadas, como notificações via Amazon SNS."
        ],
        "realWorld": [
            "Imagine uma empresa que utiliza Alexa Skills corporativas para iniciar reuniões, controlar dispositivos de escritório ou acessar dados internos por voz. Cada Skill é implementada como funções AWS Lambda escritas em Node.js. Para garantir alta confiabilidade, o time utiliza CloudWatch Metrics para registrar e acompanhar a taxa de erros, e cria CloudWatch Alarms que disparam notificações via Amazon SNS quando a taxa de erro ultrapassa um limite definido."
        ]
    },
    {
        "id": 12,
        "title": "Pergunta 12",
        "domain": "Implantação",
        "prompt": "Sua implantação do AWS CodeDeploy em instâncias T2 foi bem-sucedida. A nova revisão do aplicativo realiza chamadas de API para o Amazon S3, porém o aplicativo não está funcionando como esperado devido a exceções de autorização. Você foi designado para solucionar o problema. Qual das seguintes ações você deve realizar?",
        "options": [
            {
                "letter": "A",
                "text": "Tornar o bucket S3 público",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Corrigir as permissões IAM para a role do serviço CodeDeploy",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Corrigir as permissões IAM para a role da instância EC2",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Habilitar o proxy do CodeDeploy",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Tornar o bucket S3 público não é uma boa prática de segurança, pois expõe os dados a qualquer usuário na internet."
            },
            {
                "correct": false,
                "text": "Incorreta. O fato de o CodeDeploy ter implantado o aplicativo nas instâncias EC2 indica que não houve problema entre o serviço CodeDeploy e as instâncias. O problema está na comunicação entre as instâncias EC2 e o Amazon S3."
            },
            {
                "correct": true,
                "text": "Correta. Você deve usar uma role IAM para gerenciar credenciais temporárias para aplicativos que rodam em instâncias EC2. A role fornece permissões temporárias que o aplicativo pode usar ao fazer chamadas para outros recursos AWS."
            },
            {
                "correct": false,
                "text": "Incorreta. Não é necessário configurar ou habilitar um proxy no CodeDeploy para resolver problemas de autorização entre a instância EC2 e o S3."
            }
        ],
        "glossary": [
            "IAM Role – entidade que define permissões temporárias para acessar recursos AWS, substituindo o uso de credenciais fixas.",
            "EC2 Instance Role – role IAM associada a uma instância EC2, permitindo que o software executado nela acesse outros serviços AWS com segurança.",
            "CodeDeploy Service Role – role usada pelo serviço AWS CodeDeploy para executar ações de implantação.",
            "Amazon S3 Bucket – repositório de objetos utilizado para armazenar dados e arquivos."
        ],
        "generalExplanation": [
            "O problema ocorre porque o aplicativo em execução nas instâncias EC2 está tentando acessar o Amazon S3 sem possuir as permissões IAM adequadas. A solução correta é associar uma IAM Role apropriada às instâncias EC2, com as políticas necessárias para acessar o bucket S3. Essa abordagem permite que o aplicativo obtenha credenciais temporárias gerenciadas automaticamente pela AWS."
        ],
        "realWorld": [
            "Em um pipeline de implantação contínua (CI/CD) com AWS CodeDeploy, é comum que as aplicações implantadas em EC2 precisem interagir com o Amazon S3 para baixar artefatos, ler arquivos de configuração, ou enviar logs. Ao atribuir uma IAM Role diretamente à instância EC2 (como EC2S3AccessRole), o sistema obtém permissões temporárias automaticamente, sem expor credenciais sensíveis."
        ]
    },
    {
        "id": 13,
        "title": "Pergunta 13",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um engenheiro sênior de nuvem projeta e implanta soluções de detecção de fraudes online para empresas de cartão de crédito que processam milhões de transações diariamente. A aplicação no Elastic Beanstalk envia arquivos para o Amazon S3 e, em seguida, envia uma mensagem para uma fila do Amazon SQS contendo o caminho do arquivo carregado no S3. O engenheiro deseja adiar a entrega de quaisquer novas mensagens na fila por pelo menos 10 segundos. Qual recurso do SQS o engenheiro deve utilizar?",
        "options": [
            {
                "letter": "A",
                "text": "Habilitar LongPolling",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar o parâmetro visibility timeout",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar o parâmetro DelaySeconds",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Implementar atraso no lado da aplicação",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. LongPolling reduz o custo e melhora a eficiência ao aguardar mensagens disponíveis na fila, mas não serve para adiar a entrega de mensagens."
            },
            {
                "correct": false,
                "text": "Incorreta. O visibility timeout é o período durante o qual uma mensagem fica invisível para outros consumidores após ser recebida, evitando processamento duplicado. Ele não adia a entrega da mensagem na fila."
            },
            {
                "correct": true,
                "text": "Correta. O parâmetro DelaySeconds permite adiar a entrega de novas mensagens na fila por um período definido, que pode variar de 0 a 900 segundos (15 minutos)."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível programar a aplicação para atrasar o envio das mensagens, essa abordagem não é robusta, pois se a aplicação falhar antes de enviar a mensagem, ela será perdida."
            }
        ],
        "glossary": [
            "DelaySeconds – parâmetro do Amazon SQS que define o atraso na entrega de mensagens para os consumidores, permitindo configurar um tempo entre 0 e 900 segundos.",
            "Application-side delay – atraso implementado na lógica da aplicação, menos confiável.",
            "LongPolling – técnica do SQS que mantém a conexão do consumidor aberta por até 20 segundos.",
            "Visibility timeout – intervalo em que uma mensagem fica temporariamente invisível após ser lida."
        ],
        "generalExplanation": [
            "Para adiar a entrega de mensagens no Amazon SQS, o parâmetro DelaySeconds é a solução correta e nativa do serviço. Esse parâmetro controla quando as mensagens se tornam visíveis para os consumidores após o envio. Durante o período configurado, as mensagens permanecem invisíveis na fila, garantindo que o processamento só ocorra no momento apropriado."
        ],
        "realWorld": [
            "Um sistema financeiro que processa transações pode precisar garantir que certas mensagens sejam consumidas apenas após a conclusão de verificações preliminares. A aplicação pode enviar a mensagem com um atraso configurado de 300 segundos, permanecendo invisível por 5 minutos antes de ser entregue aos consumidores."
        ]
    },
    {
        "id": 14,
        "title": "Pergunta 14",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um desenvolvedor implementou uma função Lambda que insere dados em um banco de dados RDS MySQL com o seguinte código Python: def handler(event, context): mysql = mysqlclient.connect() data = event['data'] mysql.execute(f\"\"INSERT INTO foo (bar) VALUES (${data});\"\") mysql.close() return. Na primeira execução, a função Lambda demora 2 segundos para rodar. Na segunda execução e nas subsequentes, a função demora 1,9 segundos para executar. O que pode ser feito para melhorar o tempo de execução da função Lambda?",
        "options": [
            {
                "letter": "A",
                "text": "Atualizar o tipo da instância MySQL",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Aumentar a memória RAM da função Lambda",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Alterar o runtime para Node.js",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Mover a conexão com o banco de dados para fora do handler",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O gargalo está na criação e fechamento da conexão com o banco de dados, não na capacidade da instância MySQL em si."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora aumentar a memória também aumente a CPU disponível, o gargalo principal é a criação da conexão com o banco."
            },
            {
                "correct": false,
                "text": "Incorreta. Reescrever a função em outro runtime não garante melhoria de desempenho, pois o problema está relacionado à forma como a conexão com o banco é gerenciada."
            },
            {
                "correct": true,
                "text": "Correta. A cada execução da função Lambda, a conexão com o banco de dados é criada e fechada, o que é custoso em termos de tempo. Ao mover a conexão para fora do handler, ela é criada uma única vez no contexto de execução da função e reutilizada em chamadas subsequentes."
            }
        ],
        "glossary": [
            "Função Lambda – serviço serverless da AWS que executa código em resposta a eventos.",
            "RDS MySQL – serviço gerenciado de banco de dados relacional compatível com MySQL.",
            "Handler – função principal dentro do código Lambda, invocada para processar eventos.",
            "Contexto de execução – ambiente de runtime reutilizável entre invocações.",
            "Runtime – ambiente que define a linguagem e dependências usadas na execução da função Lambda."
        ],
        "generalExplanation": [
            "O aumento no tempo de execução da função Lambda é causado pela criação e fechamento da conexão com o banco RDS MySQL a cada invocação. Essa operação é custosa, pois cada nova conexão envolve autenticação, inicialização e handshake de rede. A melhor prática é mover a criação da conexão para fora do handler, aproveitando o contexto de execução reutilizável da função Lambda."
        ],
        "realWorld": [
            "Em uma aplicação API REST que utiliza AWS Lambda + API Gateway para gravar dados no RDS MySQL, a criação da conexão dentro do handler faz com que cada requisição sofra atraso. Ao mover o código de conexão para fora do handler, a função reduz o tempo de execução de centenas para poucos milissegundos após a primeira invocação ('warm start')."
        ]
    },
    {
        "id": 15,
        "title": "Pergunta 15",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você possui um Amazon Kinesis Data Stream com 10 shards e, pelas métricas, está bem abaixo da utilização máxima de throughput de 10 MB por segundo para envio de dados. Você envia 3 MB por segundo, mas ainda assim recebe frequentemente erros ProvisionedThroughputExceededException. Qual é a causa mais provável desse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Você possui shards demais.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O período de retenção dos dados é muito longo.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "As métricas demoram para atualizar.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "A chave de partição selecionada não está suficientemente distribuída.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Ter shards em excesso não causa erros de throughput; na verdade, isso aumentaria a capacidade."
            },
            {
                "correct": false,
                "text": "Incorreta. O período de retenção dos dados não impacta diretamente na ocorrência de erros ProvisionedThroughputExceededException."
            },
            {
                "correct": false,
                "text": "Incorreta. As métricas do Kinesis Data Streams são disponibilizadas pelo Amazon CloudWatch e atualizam com frequência suficiente."
            },
            {
                "correct": true,
                "text": "Correta. O Kinesis Data Streams utiliza a chave de partição para distribuir os dados entre os shards. Se a chave de partição não for bem distribuída, os dados se concentram em poucos shards, causando sobrecarga e erros de throughput mesmo que o uso total do stream esteja abaixo do limite."
            }
        ],
        "glossary": [
            "ProvisionedThroughputExceededException – erro retornado pelo Amazon Kinesis Data Streams quando um shard excede sua capacidade provisionada.",
            "Shard – unidade de capacidade básica de um stream Kinesis; cada shard possui limites fixos (1 MB/s de gravação e 2 MB/s de leitura).",
            "Chave de partição (partition key) – valor usado pelo Kinesis para determinar em qual shard o dado será roteado.",
            "Métricas CloudWatch – monitoramento fornecido pela AWS que permite acompanhar métricas como WriteProvisionedThroughputExceeded."
        ],
        "generalExplanation": [
            "O erro ProvisionedThroughputExceededException indica que um ou mais shards do Kinesis Data Stream estão recebendo mais dados do que sua capacidade suporta, mesmo que o stream como um todo não esteja saturado. A causa mais comum é a má distribuição das chaves de partição (partition keys), que gera 'hot shards' — shards sobrecarregados por concentrarem o tráfego, enquanto outros permanecem subutilizados."
        ],
        "realWorld": [
            "Imagine uma aplicação IoT que coleta dados de milhares de sensores e envia eventos em tempo real para o Amazon Kinesis Data Streams. Se todos os sensores de uma mesma fábrica usarem a mesma chave de partição (factory_id), apenas um shard receberá os dados, causando um 'hot shard' e gerando erros. Para resolver, a equipe pode alterar a chave de partição para incluir o identificador do sensor (factory_id#sensor_id) ou aplicar uma função hash à chave."
        ]
    },
    {
        "id": 16,
        "title": "Pergunta 16",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você é um administrador de sistemas cuja empresa recentemente migrou sua aplicação de produção para a AWS e transferiu os dados do MySQL para o AWS DynamoDB. Agora, você está adicionando novas tabelas no DynamoDB e precisa permitir que sua aplicação consulte os dados usando a chave primária e uma chave alternativa. Essa opção deve ser configurada no momento da criação da tabela, pois não pode ser alterada posteriormente. Qual das seguintes ações você deve realizar?",
        "options": [
            {
                "letter": "A",
                "text": "Migrar para outro banco de dados que não seja DynamoDB",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Executar uma operação Scan",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Criar um GSI (Índice Secundário Global)",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Criar um LSI (Índice Secundário Local)",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Migrar para outro banco de dados pode demandar mudanças significativas no código e na arquitetura."
            },
            {
                "correct": false,
                "text": "Incorreta. A operação Scan lê todos os itens da tabela, o que não é eficiente para consultas específicas por chave."
            },
            {
                "correct": false,
                "text": "Incorreta. O GSI pode ser criado ou modificado após a criação da tabela, mas o requisito da questão especifica que a opção deve ser definida no momento da criação."
            },
            {
                "correct": true,
                "text": "Correta. O LSI permite criar índices secundários locais que compartilham a mesma chave de partição da tabela base, mas possuem uma chave de ordenação alternativa. Esse índice deve ser definido no momento da criação da tabela e não pode ser adicionado posteriormente."
            }
        ],
        "glossary": [
            "LSI (Local Secondary Index) – índice secundário local que compartilha a mesma chave de partição da tabela base, mas usa uma chave de ordenação alternativa.",
            "GSI (Global Secondary Index) – índice secundário global que pode ter chaves de partição e ordenação diferentes da tabela base.",
            "Scan – operação que lê todos os itens de uma tabela ou índice, com alto custo e baixa eficiência.",
            "Chave primária – identificador único de cada item em uma tabela DynamoDB, composta por Partition Key e opcionalmente Sort Key."
        ],
        "generalExplanation": [
            "A resposta correta é criar um LSI (Local Secondary Index). O LSI permite definir uma chave de ordenação alternativa mantendo a mesma chave de partição da tabela base, o que possibilita consultas otimizadas sobre atributos diferentes sem necessidade de varrer toda a tabela. Como o LSI só pode ser criado junto com a tabela, ele atende ao requisito da questão."
        ],
        "realWorld": [
            "Imagine uma aplicação de e-commerce que armazena pedidos em uma tabela DynamoDB com CustomerID como chave de partição e OrderDate como chave de ordenação. O time deseja consultar pedidos por status (Pending, Delivered, Cancelled). Durante a criação da tabela, o engenheiro define um LSI com 'OrderStatus' como sort key alternativa, permitindo consultas eficientes sem uso de Scan."
        ]
    },
    {
        "id": 17,
        "title": "Pergunta 17",
        "domain": "Implantação",
        "prompt": "A equipe de desenvolvimento de uma empresa está criando um template AWS CloudFormation que deve preencher automaticamente a variável da Região AWS durante a implantação do template. Qual é a forma MAIS eficiente operacionalmente para determinar a Região em que o template está sendo implantado?",
        "options": [
            {
                "letter": "A",
                "text": "Criar um recurso personalizado suportado por AWS Lambda para a Região",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Configurar um mapeamento contendo as chaves e valores nomeados para todas as Regiões AWS",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar o pseudo parâmetro AWS::Region",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Criar um parâmetro no CloudFormation para a Região",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Recursos personalizados adicionam lógica de provisionamento personalizada, mas usar Lambda para isso é desnecessariamente complexo."
            },
            {
                "correct": false,
                "text": "Incorreta. O template não pode selecionar automaticamente a Região de implantação a partir de um mapeamento."
            },
            {
                "correct": true,
                "text": "Correta. Pseudo parâmetros são parâmetros pré-definidos pelo AWS CloudFormation que não precisam ser declarados no template. O AWS::Region retorna a string da Região onde o recurso está sendo criado."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível usar um parâmetro para informar a Região, isso exige intervenção manual e não é operacionalmente eficiente."
            }
        ],
        "glossary": [
            "Pseudo parâmetro – variável pré-definida e automática do AWS CloudFormation que fornece informações dinâmicas.",
            "AWS::Region – pseudo parâmetro que retorna a Região AWS onde o stack está sendo implantado.",
            "Recurso personalizado – tipo especial de recurso no CloudFormation que permite executar lógica personalizada via AWS Lambda.",
            "Mappings – seção do template usada para mapear pares de chave-valor."
        ],
        "generalExplanation": [
            "A alternativa correta é utilizar o pseudo parâmetro AWS::Region, pois ele fornece automaticamente a Região onde o stack está sendo criado ou atualizado. Essa abordagem elimina a necessidade de entrada manual de parâmetros, mapeamentos ou recursos personalizados, tornando o template CloudFormation mais simples, portátil e automatizado."
        ],
        "realWorld": [
            "Em um pipeline CI/CD multi-região, uma equipe DevOps pode usar o mesmo template CloudFormation para implantar stacks em diferentes Regiões (us-east-1, eu-west-1, sa-east-1) sem precisar editar o arquivo a cada implantação. O pseudo parâmetro AWS::Region é usado para criar um bucket S3 com nome exclusivo por Região, como 'meu-bucket-us-east-1' ou 'meu-bucket-sa-east-1'."
        ]
    },
    {
        "id": 18,
        "title": "Pergunta 18",
        "domain": "Segurança",
        "prompt": "Uma equipe de desenvolvimento habilitou e configurou o CloudTrail para todos os buckets Amazon S3 usados em um projeto. O gerente do projeto é o proprietário de todos os buckets S3 utilizados. No entanto, o gerente percebeu que não recebeu nenhum log de acesso a nível de objeto quando os dados foram lidos por outra conta AWS. Qual poderia ser a causa desse comportamento/erro?",
        "options": [
            {
                "letter": "A",
                "text": "O CloudTrail sempre entrega os logs de acesso a nível de objeto para o solicitante e não para o proprietário do objeto.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "O proprietário do bucket também precisa ser o proprietário do objeto para receber os logs de acesso ao objeto.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Os metadados do bucket estão em um estado inválido e precisam ser corrigidos pelo proprietário do bucket.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "O CloudTrail precisa ser configurado em ambas as contas AWS para receber os logs de acesso em acessos entre contas.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora o CloudTrail entregue os logs de acesso a nível de objeto para o solicitante, ele também entrega esses logs para o proprietário do bucket, desde que este tenha permissões para as mesmas ações de API no objeto."
            },
            {
                "correct": true,
                "text": "Correta. Se o proprietário do bucket também for o proprietário do objeto, ele receberá os logs de acesso ao objeto. Caso contrário, o proprietário do bucket deve obter permissões, por meio da ACL do objeto, para as mesmas ações de API no objeto para receber os logs de acesso correspondentes."
            },
            {
                "correct": false,
                "text": "Incorreta. Não há evidências de que metadados inválidos do bucket causem a ausência dos logs de acesso."
            },
            {
                "correct": false,
                "text": "Incorreta. O CloudTrail não precisa ser configurado em ambas as contas para registrar acessos entre contas."
            }
        ],
        "glossary": [
            "AWS CloudTrail – serviço que registra e armazena logs de chamadas de API realizadas em recursos AWS.",
            "Bucket owner (proprietário do bucket) – conta AWS que criou e detém o controle administrativo sobre um bucket no Amazon S3.",
            "Object owner (proprietário do objeto) – conta AWS que enviou (upload) um objeto ao S3, sendo automaticamente a proprietária desse objeto.",
            "ACL (Access Control List) – lista de controle de acesso usada no S3 para definir permissões específicas."
        ],
        "generalExplanation": [
            "No contexto do CloudTrail, é importante compreender a distinção entre proprietário do bucket e proprietário do objeto. Mesmo que o proprietário do bucket tenha habilitado o CloudTrail para registrar acessos a nível de objeto, ele não receberá automaticamente os logs detalhados se não for também o proprietário dos objetos ou não possuir permissões adequadas via ACL."
        ],
        "realWorld": [
            "Considere uma empresa que utiliza uma estrutura multi-conta AWS: a conta Central de Segurança possui o bucket principal de armazenamento, e outras contas (de times de projeto) fazem upload de arquivos nesse bucket. Mesmo com o CloudTrail habilitado na conta central, a equipe de segurança não verá eventos detalhados de acesso aos objetos enviados por outras contas, a menos que o bucket owner tenha permissões via ACL ou seja co-proprietário dos objetos."
        ]
    },
    {
        "id": 19,
        "title": "Pergunta 19",
        "domain": "Solução de problemas e otimização",
        "prompt": "Sua empresa gerencia centenas de instâncias EC2 rodando Linux em várias Zonas de Disponibilidade na região eu-west-3. Seu gerente solicitou coletar métricas de memória do sistema em todas as instâncias EC2 usando um script. Qual das seguintes soluções ajudará a coletar esses dados?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar um job cron nas instâncias que envie as estatísticas de RAM do EC2 como uma métrica personalizada para o CloudWatch.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Extrair as estatísticas de RAM usando os metadados da instância.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Extrair as estatísticas de RAM a partir das métricas padrão do CloudWatch para instâncias EC2.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Extrair as estatísticas de RAM usando o AWS X-Ray.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Os scripts de monitoramento do Amazon CloudWatch para instâncias Linux do Amazon EC2 demonstram como produzir e consumir métricas personalizadas no CloudWatch. É possível configurar um cron para enviar essas métricas periodicamente ao CloudWatch."
            },
            {
                "correct": false,
                "text": "Incorreta. Os metadados da instância fornecem informações sobre a configuração e o ambiente da instância, mas não oferecem métricas detalhadas de uso de memória."
            },
            {
                "correct": false,
                "text": "Incorreta. As métricas padrão do CloudWatch para EC2 incluem CPU, disco e rede, mas não fornecem métricas detalhadas de utilização de memória."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS X-Ray é uma ferramenta para análise e depuração de aplicações distribuídas, não coleta métricas de uso de memória das instâncias EC2."
            }
        ],
        "glossary": [
            "EC2 – serviço de computação em nuvem da AWS que fornece instâncias virtuais configuráveis.",
            "Métricas personalizadas – métricas definidas pelo usuário que complementam as métricas padrão do CloudWatch.",
            "Amazon CloudWatch – serviço de monitoramento e observabilidade da AWS.",
            "Metadados da instância – informações internas disponíveis no endpoint de metadados da EC2.",
            "Job cron – agendador nativo de sistemas Linux/Unix que executa comandos ou scripts automaticamente em intervalos definidos."
        ],
        "generalExplanation": [
            "A opção correta é utilizar um job cron na instância EC2 para coletar e enviar métricas personalizadas de memória ao Amazon CloudWatch. O Amazon CloudWatch coleta automaticamente métricas básicas de EC2, como CPUUtilization, DiskReadOps e NetworkIn/Out, mas não inclui métricas de memória por padrão. Para monitorar esse recurso, é necessário criar métricas personalizadas."
        ],
        "realWorld": [
            "Em um ambiente de produção com diversas instâncias EC2 executando APIs críticas, a equipe de DevOps precisa monitorar o uso de memória para evitar falhas de desempenho. Eles criam um script em Bash ou Python que coleta dados do sistema e os envia periodicamente ao Amazon CloudWatch via cron, configurando alarmes para disparar notificações quando a memória ultrapassar um limite."
        ]
    },
    {
        "id": 20,
        "title": "Pergunta 20",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua empresa gerencia bancos de dados MySQL em instâncias EC2 para ter controle total. Aplicações em outras instâncias EC2, gerenciadas por um Auto Scaling Group (ASG), fazem requisições a esses bancos para obter informações que são exibidas em dashboards acessados por celulares, tablets e navegadores web. Seu gerente deseja escalar o Auto Scaling Group com base no número de requisições por minuto. Como você pode alcançar esse objetivo?",
        "options": [
            {
                "letter": "A",
                "text": "Habilitar o monitoramento detalhado e usar isso para escalar seu ASG",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Anexar um Elastic File Storage adicional",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Criar uma métrica personalizada no CloudWatch e configurar um alarme para escalar seu ASG",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Anexar um Elastic Load Balancer",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O monitoramento detalhado do CloudWatch fornece métricas com resolução de 1 minuto, mas não captura métricas específicas de nível de aplicação."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon EFS é um serviço de armazenamento de arquivos, não oferece métricas relacionadas ao número de requisições."
            },
            {
                "correct": true,
                "text": "Correta. Para escalar o Auto Scaling Group com base no número de requisições por minuto, é necessário criar uma métrica personalizada no CloudWatch que capture essa informação."
            },
            {
                "correct": false,
                "text": "Incorreta. Um Elastic Load Balancer distribui o tráfego entre instâncias, mas não escala automaticamente o número de instâncias."
            }
        ],
        "glossary": [
            "Auto Scaling Group (ASG) – serviço da AWS que ajusta automaticamente o número de instâncias EC2 com base em métricas definidas.",
            "Métrica personalizada do CloudWatch – métrica criada pelo usuário para monitorar dados específicos da aplicação.",
            "Elastic Load Balancer (ELB) – serviço que distribui automaticamente o tráfego de entrada entre múltiplas instâncias EC2.",
            "Monitoramento detalhado – modo do CloudWatch que coleta métricas em intervalos de 1 minuto."
        ],
        "generalExplanation": [
            "Para escalar um Auto Scaling Group (ASG) com base no número de requisições por minuto, é necessário criar uma métrica personalizada no Amazon CloudWatch, pois essa é uma métrica específica da aplicação — não incluída entre as métricas padrão da EC2 ou do ELB. Após criar essa métrica, configura-se um alarme CloudWatch que monitora o valor da métrica e aciona automaticamente uma política de escalonamento."
        ],
        "realWorld": [
            "Em um ambiente onde instâncias EC2 processam requisições de um dashboard conectado a um banco de dados MySQL, o volume de acessos pode variar. Um desenvolvedor envia métricas personalizadas (como 'requisições por minuto') para o Amazon CloudWatch via API ou SDK. Em seguida, configura um alarme CloudWatch que aciona o Auto Scaling Group, aumentando a capacidade durante picos e reduzindo-a quando a demanda cai."
        ]
    },
    {
        "id": 21,
        "title": "Pergunta 21",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um site serve conteúdo estático a partir de um bucket do Amazon S3 e conteúdo dinâmico por meio de um Application Load Balancer. A base de usuários está distribuída globalmente e a latência deve ser minimizada para proporcionar uma melhor experiência ao usuário. Qual tecnologia/serviço pode ajudar a acessar o conteúdo estático e dinâmico mantendo a latência dos dados baixa?",
        "options": [
            {
                "letter": "A",
                "text": "Configure o CloudFront com múltiplas origens para servir tanto conteúdo estático quanto dinâmico com baixa latência para usuários globais.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Use o recurso Lambda@Edge do CloudFront para servir dados dos buckets S3 e do load balancer programaticamente em tempo real.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Use o AWS Global Accelerator para alternar de forma transparente entre o bucket S3 e o load balancer conforme as necessidades dos dados.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Use os Grupos de Origem (Origin Groups) do CloudFront para agrupar as requisições estáticas e dinâmicas em uma única requisição.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O Amazon CloudFront é um serviço de CDN que acelera a distribuição de conteúdo estático e dinâmico por meio de uma rede global de edge locations. Configurando múltiplas origens em uma única distribuição CloudFront, é possível direcionar requisições para o bucket S3 para conteúdo estático e para o Application Load Balancer para conteúdo dinâmico."
            },
            {
                "correct": false,
                "text": "Incorreta. Lambda@Edge é uma funcionalidade serverless para personalizações de requisições/respostas, não para roteamento ou distribuição direta de conteúdo."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS Global Accelerator melhora performance e disponibilidade com IPs estáticos globais, mas não é indicado para roteamento de conteúdo HTTP entre S3 e ALB."
            },
            {
                "correct": false,
                "text": "Incorreta. Os Grupos de Origem do CloudFront são usados para configurar failover entre origens, não para agrupar diferentes tipos de requisições."
            }
        ],
        "glossary": [
            "Amazon S3 – serviço de armazenamento de objetos usado para hospedar conteúdo estático.",
            "Application Load Balancer (ALB) – balanceador de carga de camada 7 (HTTP/HTTPS) do Elastic Load Balancing.",
            "Amazon CloudFront – rede de distribuição de conteúdo (CDN) global da AWS.",
            "Lambda@Edge – extensão do AWS Lambda que permite executar código serverless em bordas da CloudFront.",
            "AWS Global Accelerator – serviço que fornece IPs estáticos globais e roteamento otimizado para endpoints AWS.",
            "Origin Groups – recurso do CloudFront que possibilita configurar múltiplas origens com failover."
        ],
        "generalExplanation": [
            "A solução correta é configurar o Amazon CloudFront com múltiplas origens para entregar conteúdo estático e dinâmico com baixa latência e alta performance. O CloudFront atua como uma CDN global, utilizando sua rede de edge locations distribuídas para servir conteúdo a partir do ponto mais próximo do usuário final. Ao configurar múltiplas origens, o CloudFront pode rotear o tráfego de forma inteligente."
        ],
        "realWorld": [
            "Uma empresa multinacional mantém um site global com usuários distribuídos em diversas regiões. O conteúdo estático (imagens, CSS, vídeos) é hospedado em um bucket S3, enquanto o conteúdo dinâmico é servido via Application Load Balancer. Ao configurar o CloudFront com essas duas origens, o tráfego é automaticamente roteado: usuários recebem conteúdo estático em cache de edge locations próximas, enquanto o conteúdo dinâmico é entregue de forma otimizada via ALB."
        ]
    },
    {
        "id": 22,
        "title": "Pergunta 22",
        "domain": "Segurança",
        "prompt": "Uma empresa de TI possui uma aplicação web rodando em instâncias Amazon EC2 que necessita de acesso somente leitura a uma tabela do Amazon DynamoDB. Como um profissional com certificação AWS Certified Developer – Associate, qual a solução recomendada seguindo as melhores práticas para atender a essa necessidade?",
        "options": [
            {
                "letter": "A",
                "text": "Criar um usuário IAM com acesso de Administrador e configurar as credenciais AWS desse usuário na instância EC2.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criar uma função IAM com a política AmazonDynamoDBReadOnlyAccess e vinculá-la ao perfil da instância EC2.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Executar o código da aplicação utilizando as credenciais do usuário root da conta AWS.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Criar um novo usuário IAM com chaves de acesso. Anexar uma política inline ao usuário com acesso somente leitura ao DynamoDB. Inserir as chaves no código da aplicação.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Conceder privilégios administrativos amplos viola o princípio do menor privilégio."
            },
            {
                "correct": true,
                "text": "Correta. A melhor prática de segurança na AWS é utilizar funções IAM associadas diretamente ao perfil da instância EC2 para fornecer credenciais temporárias às aplicações."
            },
            {
                "correct": false,
                "text": "Incorreta. Utilizar as credenciais do usuário root é altamente desaconselhado por questões de segurança."
            },
            {
                "correct": false,
                "text": "Incorreta. Armazenar credenciais estáticas no código da aplicação viola as melhores práticas de segurança da AWS."
            }
        ],
        "glossary": [
            "IAM Role – entidade do AWS IAM que define permissões temporárias para recursos AWS.",
            "AmazonDynamoDBReadOnlyAccess – política gerenciada pela AWS que concede permissões somente de leitura ao Amazon DynamoDB.",
            "EC2 Instance Profile – contêiner que vincula uma IAM Role a uma instância EC2.",
            "Credenciais Temporárias – credenciais válidas por tempo limitado, emitidas automaticamente para recursos que assumem uma IAM Role.",
            "Princípio do Menor Privilégio – diretriz de segurança que recomenda conceder apenas as permissões mínimas necessárias."
        ],
        "generalExplanation": [
            "A resposta correta é criar uma IAM Role com a política gerenciada AmazonDynamoDBReadOnlyAccess e associá-la ao perfil da instância EC2. Essa é a melhor prática recomendada pela AWS, pois fornece credenciais temporárias automaticamente gerenciadas pelo IAM e pelo Instance Metadata Service (IMDSv2), eliminando a necessidade de armazenar chaves de acesso fixas em código."
        ],
        "realWorld": [
            "Considere uma aplicação Node.js hospedada em instâncias EC2 que precisa consultar uma tabela DynamoDB para exibir produtos em um e-commerce. O engenheiro cria uma IAM Role com a política AmazonDynamoDBReadOnlyAccess, associa essa role ao Instance Profile da EC2. O AWS SDK dentro da aplicação passa a obter automaticamente as credenciais temporárias via metadados da instância, removendo completamente o uso de chaves de acesso no código."
        ]
    },
    {
        "id": 23,
        "title": "Pergunta 23",
        "domain": "Implantação",
        "prompt": "Você possui uma aplicação baseada em Java rodando em instâncias EC2 com agentes do AWS CodeDeploy instalados. Você está considerando diferentes opções de implantação, sendo uma delas a flexibilidade que permite a implantação incremental das novas versões da aplicação, substituindo as versões existentes nas instâncias EC2. A outra opção é uma estratégia na qual um grupo de Auto Scaling é utilizado para realizar a implantação. Quais das seguintes opções permitirão que você realize a implantação dessa forma? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Implantação Cattle",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Implantação Warm Standby",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Implantação Blue/Green",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Implantação In-place",
                "correct": true
            },
            {
                "letter": "E",
                "text": "Implantação Pilot Light",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. 'Cattle Deployment' não é um termo oficial do CodeDeploy."
            },
            {
                "correct": false,
                "text": "Incorreta. Warm Standby não é uma opção válida do CodeDeploy; é um termo usado em cenários de Recuperação de Desastres."
            },
            {
                "correct": true,
                "text": "Correta. Na implantação Blue/Green, um novo conjunto de instâncias é provisionado, e o CodeDeploy instala a versão mais recente da aplicação nelas. O tráfego é então redirecionado do conjunto antigo para o novo."
            },
            {
                "correct": true,
                "text": "Correta. Na implantação In-place, a aplicação em cada instância do grupo de implantação é parada, a nova versão é instalada e a aplicação é reiniciada e validada."
            },
            {
                "correct": false,
                "text": "Incorreta. Implantação Pilot Light não é uma opção válida do CodeDeploy; refere-se a uma estratégia de Recuperação de Desastres."
            }
        ],
        "glossary": [
            "AWS CodeDeploy – serviço gerenciado que automatiza o processo de implantação de aplicações.",
            "Auto Scaling Group – grupo de instâncias EC2 gerenciado automaticamente para aumentar ou reduzir capacidade.",
            "Implantações In-place – método em que a nova versão da aplicação substitui diretamente a versão anterior nas mesmas instâncias EC2.",
            "Implantações Blue/Green – estratégia que cria um novo ambiente paralelo (green) com a nova versão, permitindo redirecionamento gradual e seguro do tráfego."
        ],
        "generalExplanation": [
            "O AWS CodeDeploy oferece duas estratégias oficiais de implantação em instâncias EC2, inclusive quando gerenciadas por Auto Scaling Groups: In-place e Blue/Green. In-place atualiza a aplicação diretamente nas instâncias existentes, substituindo gradualmente a antiga. Blue/Green cria um novo conjunto de instâncias (ambiente green) com a nova versão, mantendo o ambiente antigo (blue) em paralelo."
        ],
        "realWorld": [
            "Imagine uma equipe de desenvolvimento que mantém uma aplicação Java em EC2 dentro de um Auto Scaling Group. Durante pequenas atualizações de código, utilizam implantações In-place. Para grandes mudanças (como migração de framework), adotam implantações Blue/Green, criando um novo conjunto de instâncias para testes e redirecionando o tráfego após verificação."
        ]
    },
    {
        "id": 24,
        "title": "Pergunta 24",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um sistema de votação hospedado localmente foi recentemente migrado para a AWS para reduzir custos, ganhar escalabilidade e atender melhor milhares de usuários simultâneos. Quando o estado de um recurso AWS muda, ele gera um evento que precisa acionar uma função AWS Lambda. O recurso AWS cujo estado muda e a função AWS Lambda não possuem integração direta. Qual dos seguintes métodos pode ser usado para acionar a função AWS Lambda?",
        "options": [
            {
                "letter": "A",
                "text": "Fontes personalizadas do AWS Lambda",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Jobs Cron para acionar a função AWS Lambda e verificar o estado do seu serviço",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Abrir um chamado de suporte com a AWS",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Regras do CloudWatch Events com AWS Lambda",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Essa opção é fictícia e foi inserida como um distrator."
            },
            {
                "correct": false,
                "text": "Incorreta. Utilizar jobs Cron exigiria um servidor adicional, aumentando a complexidade e o custo."
            },
            {
                "correct": false,
                "text": "Incorreta. A equipe da AWS não configurará uma integração personalizada para você."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon CloudWatch Events (atualmente Amazon EventBridge) permite criar regras que detectam mudanças no estado de recursos AWS e acionam funções Lambda automaticamente."
            }
        ],
        "glossary": [
            "AWS Lambda – serviço de computação serverless que executa código em resposta a eventos.",
            "Amazon CloudWatch Events (EventBridge) – serviço que detecta e roteia eventos gerados por recursos AWS e sistemas SaaS.",
            "Regras do CloudWatch Events – configurações que definem quais eventos específicos disparam determinadas ações.",
            "Jobs Cron – tarefas agendadas que executam comandos ou scripts em intervalos regulares."
        ],
        "generalExplanation": [
            "A alternativa correta é o uso de regras do Amazon CloudWatch Events (atual Amazon EventBridge) para acionar a função AWS Lambda automaticamente. O EventBridge permite detectar eventos de serviços AWS e, com base em regras configuradas, disparar funções Lambda de forma automática e escalável. Essa abordagem é nativa e totalmente gerenciada, eliminando a necessidade de servidores dedicados para executar jobs Cron ou processos de polling."
        ],
        "realWorld": [
            "Em ambientes de produção, equipes de desenvolvimento frequentemente precisam executar ações automáticas em resposta a eventos do ambiente AWS. Por exemplo, um desenvolvedor pode configurar o EventBridge para monitorar quando uma instância EC2 muda de estado, e então disparar uma função Lambda que registra essa alteração em um banco de dados ou envia uma notificação."
        ]
    },
    {
        "id": 25,
        "title": "Pergunta 25",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você está projetando uma aplicação de alto desempenho que requer milhões de conexões simultâneas. Você possui várias instâncias EC2 executando servidores web Apache2 e a aplicação precisa capturar o endereço IP de origem e a porta de origem do usuário sem utilizar o cabeçalho X-Forwarded-For. Qual das seguintes opções atenderá a essa necessidade?",
        "options": [
            {
                "letter": "A",
                "text": "Classic Load Balancer",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Network Load Balancer",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Application Load Balancer",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Elastic Load Balancer",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Classic Load Balancer é um balanceador de carga básico que não oferece suporte avançado para preservar o IP e a porta de origem do cliente."
            },
            {
                "correct": true,
                "text": "Correta. O Network Load Balancer opera na camada 4 (transporte) do modelo OSI e é capaz de lidar com milhões de conexões por segundo. Ele mantém as conexões TCP intactas, permitindo que o endereço IP e a porta de origem do cliente sejam preservados sem a necessidade do cabeçalho X-Forwarded-For."
            },
            {
                "correct": false,
                "text": "Incorreta. O Application Load Balancer opera na camada 7 (aplicação) e não preserva diretamente o endereço IP e a porta de origem do cliente."
            },
            {
                "correct": false,
                "text": "Incorreta. Elastic Load Balancer (ELB) é o nome do serviço que engloba diferentes tipos de balanceadores de carga."
            }
        ],
        "glossary": [
            "Network Load Balancer (NLB) – balanceador de carga que opera na camada 4 (transporte), preservando o endereço IP e a porta de origem do cliente.",
            "Application Load Balancer (ALB) – balanceador que atua na camada 7 (aplicação), com roteamento baseado em conteúdo HTTP/HTTPS.",
            "Classic Load Balancer (CLB) – versão legada do serviço de balanceamento da AWS.",
            "X-Forwarded-For – cabeçalho HTTP usado em balanceadores de camada 7 para identificar o IP original do cliente."
        ],
        "generalExplanation": [
            "A escolha correta é o Network Load Balancer (NLB), pois ele é o único tipo de balanceador da AWS que atende aos requisitos de preservar o IP e a porta de origem do cliente sem usar o cabeçalho X-Forwarded-For, manter conexões TCP originais na camada de transporte, e suportar altíssima escala com milhões de conexões simultâneas e latência ultrabaixa."
        ],
        "realWorld": [
            "Um provedor de streaming de vídeo ou plataforma de jogos online pode usar o Network Load Balancer para gerenciar milhões de conexões TCP simultâneas de usuários ao redor do mundo. O NLB encaminha o tráfego diretamente para as instâncias EC2 ou containers ECS, preservando o IP e a porta do cliente, permitindo que a aplicação identifique e registre a origem exata das conexões para auditoria ou controle de acesso."
        ]
    },
    {
        "id": 26,
        "title": "Pergunta 26",
        "domain": "Implantação",
        "prompt": "Uma equipe de desenvolvimento está considerando o Amazon ElastiCache para Redis como solução de cache em memória para seu banco de dados relacional. Quais das seguintes opções estão corretas ao configurar o ElastiCache? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Ao usar o Redis com o modo cluster habilitado, você não pode promover manualmente nenhum dos nós réplica para primário.",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Todos os nós em um cluster Redis devem estar na mesma região.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Você pode escalar a capacidade de escrita do Redis adicionando nós réplica.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Se você não tiver réplicas e um nó falhar, não haverá perda de dados ao usar o Redis com o modo cluster habilitado.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Ao usar o Redis com modo cluster habilitado, mecanismos de replicação assíncrona são usados para manter as réplicas sincronizadas com o primário. Se o modo cluster estiver desabilitado, a replicação é feita de forma síncrona.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Quando o modo cluster está habilitado no Redis, existem limitações específicas, incluindo a impossibilidade de promover manualmente um nó réplica para primário."
            },
            {
                "correct": true,
                "text": "Correta. Independentemente do modo cluster estar habilitado ou não, todos os nós do cluster Redis devem residir na mesma região AWS."
            },
            {
                "correct": false,
                "text": "Incorreta. Adicionar nós réplica aumenta apenas a capacidade de leitura, não a de escrita."
            },
            {
                "correct": false,
                "text": "Incorreta. Se não houver réplicas e um nó falhar no modo cluster habilitado, haverá perda de todos os dados armazenados naquele shard."
            },
            {
                "correct": false,
                "text": "Incorreta. Tanto no modo cluster habilitado quanto desabilitado, a replicação entre o primário e as réplicas é assíncrona."
            }
        ],
        "glossary": [
            "Redis – mecanismo de armazenamento em memória de alta performance, usado para cache, filas e armazenamento de dados estruturados.",
            "ElastiCache – serviço totalmente gerenciado da AWS que simplifica a configuração, operação e escalabilidade de caches em memória.",
            "Modo cluster – configuração que permite ao Redis distribuir os dados em múltiplos shards.",
            "Nó primário – instância do Redis responsável por operações de escrita e replicação.",
            "Nó réplica – instância somente leitura que replica os dados do nó primário."
        ],
        "generalExplanation": [
            "Ao configurar o Amazon ElastiCache para Redis, alguns comportamentos fundamentais devem ser compreendidos: todos os nós do cluster devem estar na mesma Região AWS; no modo cluster habilitado, o Amazon ElastiCache gerencia automaticamente a topologia, não sendo possível promover manualmente réplicas para primário; a replicação entre primário e réplicas é assíncrona; adicionar réplicas aumenta apenas a capacidade de leitura."
        ],
        "realWorld": [
            "Imagine uma aplicação de e-commerce com tráfego global que utiliza Redis via ElastiCache para armazenar sessões de usuários. O desenvolvedor configura o ElastiCache com modo cluster habilitado, permitindo escalar horizontalmente o cache em múltiplos shards, com nós réplicas para distribuir leituras e reduzir a carga do primário, e failover automático garantindo continuidade em caso de falha de um nó."
        ]
    },
    {
        "id": 27,
        "title": "Pergunta 27",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você foi designado como o novo líder de projeto para uma aplicação web que processa pedidos de clientes. Você deseja integrar um processamento orientado a eventos sempre que os dados forem modificados ou excluídos, utilizando uma abordagem serverless com AWS Lambda para processar eventos de streams. Qual dos seguintes bancos de dados você deve escolher?",
        "options": [
            {
                "letter": "A",
                "text": "DynamoDB",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Kinesis",
                "correct": false
            },
            {
                "letter": "C",
                "text": "RDS",
                "correct": false
            },
            {
                "letter": "D",
                "text": "ElastiCache",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O Amazon DynamoDB oferece o recurso DynamoDB Streams, que captura uma sequência ordenada de modificações em nível de item na tabela, permitindo que aplicações serverless, como funções AWS Lambda, processem eventos quase em tempo real."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon Kinesis não é um banco de dados, mas sim um serviço para ingestão e processamento de dados em streaming."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon RDS não oferece suporte nativo para streaming de eventos como o DynamoDB Streams."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon ElastiCache é um serviço de cache em memória que melhora a performance de aplicações, mas não oferece funcionalidades de streaming de dados."
            }
        ],
        "glossary": [
            "DynamoDB Streams – fluxo ordenado de eventos que registra alterações em uma tabela DynamoDB em tempo quase real.",
            "AWS Lambda – serviço serverless que executa código sob demanda em resposta a eventos.",
            "Amazon RDS – banco de dados relacional gerenciado que não possui suporte nativo a streams de eventos.",
            "Amazon Kinesis – serviço para ingestão e processamento de dados em tempo real."
        ],
        "generalExplanation": [
            "O Amazon DynamoDB é a melhor escolha para aplicações que precisam processar eventos de modificação de dados em uma arquitetura serverless e reativa. Isso se deve ao recurso DynamoDB Streams, que captura todas as alterações realizadas em uma tabela e as disponibiliza em tempo quase real. Esses eventos podem ser consumidos automaticamente por funções AWS Lambda."
        ],
        "realWorld": [
            "Em um sistema de e-commerce onde os pedidos dos clientes são armazenados em uma tabela DynamoDB, cada vez que um pedido é criado, atualizado ou cancelado, o DynamoDB Streams gera um evento que aciona uma função AWS Lambda. Essa Lambda pode executar tarefas como atualizar o estoque, enviar notificações ao cliente via SNS, ou registrar logs de auditoria no S3."
        ]
    },
    {
        "id": 28,
        "title": "Pergunta 28",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma equipe de desenvolvimento utiliza o AWS SDK para Java para manter uma aplicação que armazena dados no AWS DynamoDB. A aplicação realiza operações de Scan para retornar vários itens de uma tabela de 25 GB. Não há possibilidade de criar índices para recuperar esses itens de forma previsível. Os desenvolvedores estão tentando obter essas linhas específicas do DynamoDB o mais rápido possível. Qual das opções a seguir pode ser usada para melhorar o desempenho da operação Scan?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar uma FilterExpression",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar uma ProjectionExpression",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Utilizar Scans paralelos",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Utilizar uma Query",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A FilterExpression filtra os itens após a operação Scan ser concluída, não reduz a quantidade de dados lidos."
            },
            {
                "correct": false,
                "text": "Incorreta. Uma ProjectionExpression reduz a quantidade de dados retornados, mas não acelera a operação Scan em si."
            },
            {
                "correct": true,
                "text": "Correta. Por padrão, a operação Scan processa os dados sequencialmente. Scans paralelos dividem logicamente a tabela em múltiplos segmentos que podem ser escaneados simultaneamente por diferentes threads ou processos."
            },
            {
                "correct": false,
                "text": "Incorreta. A operação Query exige a existência de um índice para recuperar itens de forma eficiente."
            }
        ],
        "glossary": [
            "ProjectionExpression – parâmetro usado para retornar apenas os atributos necessários.",
            "FilterExpression – expressão que filtra os itens após a leitura dos dados.",
            "Query – operação otimizada que busca itens com base em chaves primárias ou índices secundários.",
            "Scan – operação que lê todos os itens de uma tabela ou índice.",
            "Scan paralelo – técnica que divide a tabela em múltiplos segmentos lógicos e executa leituras simultâneas."
        ],
        "generalExplanation": [
            "Por padrão, a operação Scan no Amazon DynamoDB percorre toda a tabela de forma sequencial, o que se torna ineficiente e demorado em tabelas grandes. A melhor prática para otimizar a leitura em massa é usar Scans paralelos, dividindo a tabela em múltiplos segmentos e processando-os simultaneamente. Cada thread ou processo lê um segmento independente, reduzindo drasticamente o tempo total de leitura."
        ],
        "realWorld": [
            "Imagine uma plataforma de e-commerce que armazena logs de transações e eventos de usuários em uma tabela DynamoDB de dezenas de gigabytes. Para gerar relatórios diários, a equipe precisa ler todos os registros. Com Scans paralelos, o time configura a leitura da tabela em 10 segmentos, cada um processado por uma AWS Lambda separada, reduzindo o tempo de horas para minutos."
        ]
    },
    {
        "id": 29,
        "title": "Pergunta 29",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa possui várias instâncias EC2 baseadas em Linux que geram diversos arquivos de log que precisam ser analisados para fins de segurança e conformidade. A empresa deseja usar o Kinesis Data Streams (KDS) para analisar esses dados de log. Qual das seguintes opções é a forma mais otimizada de enviar os dados de log das instâncias EC2 para o KDS?",
        "options": [
            {
                "letter": "A",
                "text": "Instalar e configurar o Kinesis Agent em cada uma das instâncias",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Executar um job cron em cada uma das instâncias para coletar os dados de log e enviá-los ao Kinesis Data Streams",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar a Kinesis Producer Library (KPL) para coletar e ingerir dados de cada instância EC2",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Instalar o AWS SDK em cada uma das instâncias e configurá-lo para enviar os arquivos necessários ao Kinesis Data Streams",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O Kinesis Agent é um aplicativo Java independente que oferece uma maneira simples e eficiente de coletar e enviar dados para o Kinesis Data Streams. Ele monitora continuamente um conjunto de arquivos, enviando novos dados para o stream, gerenciando rotação de arquivos, checkpoints e tentativas em caso de falhas."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora viável, essa abordagem exige desenvolvimento e manutenção de scripts personalizados."
            },
            {
                "correct": false,
                "text": "Incorreta. A Kinesis Producer Library é uma biblioteca configurável que facilita a escrita em streams do Kinesis, mas não é otimizada para monitorar arquivos de log continuamente."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o AWS SDK permita interagir com as APIs do Kinesis, é necessário desenvolver código personalizado."
            }
        ],
        "glossary": [
            "Kinesis Agent – agente Java fornecido pela AWS que monitora continuamente arquivos de log e envia seus dados de forma confiável para o Amazon Kinesis Data Streams.",
            "Kinesis Data Streams – serviço da AWS para ingestão e processamento em tempo real de grandes volumes de dados.",
            "AWS SDK – kit de desenvolvimento que permite interagir programaticamente com serviços AWS.",
            "Kinesis Producer Library – biblioteca otimizada para produção de registros em streams Kinesis."
        ],
        "generalExplanation": [
            "A melhor opção é utilizar o Kinesis Agent para enviar logs das instâncias EC2 Linux ao Kinesis Data Streams, pois ele foi projetado especificamente para coleta e transmissão contínua de logs. O Kinesis Agent monitora arquivos de log automaticamente, gerencia rotação de arquivos, utiliza checkpointing para garantir envio único, e reenvia automaticamente dados em caso de falhas."
        ],
        "realWorld": [
            "Em uma grande organização que processa logs de aplicações web, segurança e auditoria, cada instância EC2 pode gerar gigabytes de logs diariamente. Ao instalar e configurar o Kinesis Agent, ele detecta novas entradas de log automaticamente, envia os dados para o Kinesis Data Streams em tempo real, e publica métricas no CloudWatch, permitindo visibilidade operacional imediata."
        ]
    },
    {
        "id": 30,
        "title": "Pergunta 30",
        "domain": "Solução de problemas e otimização",
        "prompt": "Um usuário possui uma política IAM e uma política do Amazon SQS aplicadas à sua conta. A política IAM concede permissão para a ação ReceiveMessage na fila example_queue, enquanto a política do Amazon SQS concede permissão para a ação SendMessage na mesma fila. Considerando as permissões acima, quais das opções a seguir estão corretas? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Adicionar apenas uma política IAM que negue todas as ações do usuário na fila não é suficiente. A política do SQS também deve negar explicitamente todas as ações.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Se o usuário enviar uma requisição SendMessage para a fila example_queue, a política IAM negará essa ação.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Apenas uma das políticas, IAM ou Amazon SQS, deve ser usada para conceder permissões. Ambas não podem ser usadas simultaneamente.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Se você adicionar uma política que negue ao usuário acesso a todas as ações da fila, essa política irá sobrescrever as outras duas e o usuário não terá acesso à example_queue.",
                "correct": true
            },
            {
                "letter": "E",
                "text": "O usuário pode enviar uma requisição ReceiveMessage para a fila example_queue, pois a política IAM permite essa ação.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Uma negação explícita em qualquer uma das políticas (IAM ou SQS) é suficiente para bloquear o acesso."
            },
            {
                "correct": false,
                "text": "Incorreta. A política IAM não nega nem permite explicitamente a ação SendMessage; a permissão para essa ação vem da política do Amazon SQS, que a permite."
            },
            {
                "correct": false,
                "text": "Incorreta. Existem duas formas de conceder permissões para recursos do Amazon SQS: usando políticas baseadas em identidade (IAM) e políticas específicas do Amazon SQS."
            },
            {
                "correct": true,
                "text": "Correta. Uma política que contenha uma negação explícita para todas as ações na fila prevalecerá sobre quaisquer permissões concedidas por outras políticas."
            },
            {
                "correct": true,
                "text": "Correta. A política IAM do usuário concede explicitamente permissão para a ação ReceiveMessage na fila example_queue."
            }
        ],
        "glossary": [
            "IAM – serviço da AWS que permite gerenciar identidades e controlar o acesso a recursos por meio de políticas.",
            "Amazon SQS – serviço gerenciado de filas que permite a comunicação assíncrona entre componentes de sistemas distribuídos.",
            "Política IAM – documento JSON que define permissões baseadas na identidade.",
            "Política do Amazon SQS – política baseada em recurso, anexada diretamente a uma fila.",
            "Permissão explícita – autorização definida de forma direta em uma política.",
            "Negação explícita – regra que bloqueia uma ação específica e sempre prevalece sobre permissões concedidas."
        ],
        "generalExplanation": [
            "As permissões de acesso a uma fila do Amazon SQS podem ser definidas em duas camadas complementares: políticas IAM (baseadas na identidade) e políticas de recurso (anexadas diretamente à fila SQS). Para que uma ação seja efetivamente permitida, ela deve estar autorizada em pelo menos uma das políticas e não pode existir uma negação explícita em nenhuma delas."
        ],
        "realWorld": [
            "Uma função AWS Lambda pode possuir uma política IAM que permite ReceiveMessage para ler dados de uma fila, enquanto a política da fila SQS permite SendMessage apenas para serviços específicos. Esse modelo híbrido de controle garante que apenas entidades autorizadas possam enviar ou receber mensagens, reforçando a segurança."
        ]
    },
    {
        "id": 31,
        "title": "Pergunta 31",
        "domain": "Segurança",
        "prompt": "Uma empresa de cibersegurança está publicando dados críticos de logs em um grupo de logs do Amazon CloudWatch Logs, criado há 3 meses. A empresa precisa criptografar esses dados de log utilizando uma chave mestra do cliente (CMK) do AWS KMS, para que quaisquer dados futuros sejam criptografados conforme as diretrizes de segurança da empresa. Qual das opções a seguir representa a melhor solução para atender a esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "Use o comando AWS CLI create-log-group e especifique o ARN da chave KMS.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Use o comando AWS CLI put-retention-policy para definir a política de retenção e associe a CMK ao grupo de logs.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Utilize o console do CloudWatch Logs ou o comando AWS CLI put-log-group com o parâmetro --kms-key-id para associar a CMK ao grupo de logs existente.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Use o comando AWS CLI put-resource-policy para associar a CMK ao grupo de logs existente.",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Use o comando AWS CLI describe-log-groups e especifique o ARN da chave KMS.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O comando create-log-group permite associar uma CMK apenas no momento da criação do grupo de logs."
            },
            {
                "correct": false,
                "text": "Incorreta. O comando put-retention-policy define a política de retenção dos logs, mas não associa a CMK ao grupo de logs."
            },
            {
                "correct": true,
                "text": "Correta. Para alterar a chave KMS de um grupo de logs já existente, é necessário usar o console do CloudWatch Logs ou o comando AWS CLI put-log-group com o parâmetro --kms-key-id."
            },
            {
                "correct": false,
                "text": "Incorreta. O comando put-resource-policy define políticas de recurso para o CloudWatch Logs, mas não permite associar uma chave KMS."
            },
            {
                "correct": false,
                "text": "Incorreta. O comando describe-log-groups apenas lista e obtém informações sobre os grupos de logs."
            }
        ],
        "glossary": [
            "Amazon CloudWatch Logs – serviço que coleta, armazena e monitora logs de aplicações e recursos AWS.",
            "AWS KMS – serviço gerenciado para criação, controle e auditoria de chaves criptográficas.",
            "CMK (Customer Master Key) – chave mestra gerenciada pelo cliente dentro do KMS.",
            "put-log-group – comando da AWS CLI que atualiza propriedades de um grupo de logs existente."
        ],
        "generalExplanation": [
            "Quando é necessário habilitar criptografia KMS em um grupo de logs existente, a abordagem correta é utilizar o comando `aws logs put-log-group-policy --log-group-name <nome-do-grupo> --kms-key-id <ID-ou-ARN-da-CMK>` ou realizar a configuração equivalente via Console do CloudWatch Logs. Esse método permite associar uma CMK a um grupo de logs sem precisar recriá-lo, garantindo que todos os logs futuros sejam criptografados automaticamente."
        ],
        "realWorld": [
            "Uma equipe de DevOps que administra múltiplas aplicações serverless em produção adota políticas rígidas de segurança e conformidade. Para garantir que os logs sejam protegidos com uma chave sob controle do cliente, o engenheiro executa o comando put-log-group com a CMK especificada. Todos os novos logs passam a ser criptografados, sem downtime ou interrupção do pipeline de logs."
        ]
    },
    {
        "id": 32,
        "title": "Pergunta 32",
        "domain": "Segurança",
        "prompt": "Você está armazenando seus arquivos de vídeo em um bucket S3 separado do bucket S3 principal que hospeda seu site estático. Ao acessar as URLs dos vídeos diretamente, os usuários conseguem visualizar os vídeos no navegador, mas não conseguem reproduzi-los ao visitar o site principal. Qual é a causa raiz desse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Alterar a política IAM",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Alterar a política do bucket",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Desabilitar a criptografia do lado do servidor",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Habilitar CORS",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Políticas IAM são anexadas a usuários, grupos ou funções IAM. Como o acesso é feito por usuários públicos do site, que não possuem contas IAM, essa não é a causa do problema."
            },
            {
                "correct": false,
                "text": "Incorreta. A política do bucket é uma política baseada em recursos do IAM que concede permissões específicas. Neste caso, não é um problema de permissão."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon S3 criptografa os dados no nível do objeto e gerencia a criptografia e descriptografia automaticamente. Desabilitar a criptografia não resolveria o problema."
            },
            {
                "correct": true,
                "text": "Correta. O Cross-Origin Resource Sharing (CORS) define uma forma para aplicações web carregadas em um domínio interagirem com recursos em outro domínio. Para que o site principal consiga reproduzir vídeos armazenados em outro bucket, é necessário configurar a política CORS no bucket de vídeos."
            }
        ],
        "glossary": [
            "CORS – mecanismo de segurança que define como um navegador pode permitir ou restringir requisições entre diferentes domínios.",
            "Bucket Policy – política baseada em recursos aplicada diretamente a um bucket Amazon S3.",
            "IAM Policy – política de permissões do AWS IAM que define o que usuários, grupos ou funções podem fazer.",
            "Server-Side Encryption – recurso que criptografa automaticamente os dados armazenados no S3."
        ],
        "generalExplanation": [
            "O problema descrito ocorre devido à política de mesma origem dos navegadores, que impede que um site carregue recursos hospedados em outro domínio (ou bucket S3) sem permissões explícitas de CORS. Embora o vídeo possa ser acessado diretamente via URL pública do S3, o navegador bloqueia a tentativa de carregamento feita pelo site principal — uma restrição implementada para evitar ataques de segurança."
        ],
        "realWorld": [
            "Imagine que uma empresa hospeda um site institucional estático em um bucket S3 configurado com hospedagem de site, e os vídeos promocionais ficam em outro bucket S3. Ao tentar exibir esses vídeos no site, o navegador bloqueia a requisição com um erro de CORS. O desenvolvedor configura o CORS no bucket de vídeos, permitindo o acesso do domínio principal, e o conteúdo é carregado normalmente."
        ]
    },
    {
        "id": 33,
        "title": "Pergunta 33",
        "domain": "Solução de problemas e otimização",
        "prompt": "Uma empresa utiliza o AWS DynamoDB para armazenar informações sobre os times de esportes favoritos das pessoas e permitir que essas informações sejam pesquisáveis a partir da página inicial. Existe uma necessidade diária de que todos os 10 milhões de registros na tabela sejam excluídos e recarregados às 2:00 AM todas as noites. Qual é a opção mais eficiente para realizar a exclusão com custos mínimos?",
        "options": [
            {
                "letter": "A",
                "text": "Chamar PurgeTable",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Fazer um Scan e chamar DeleteItem para cada item",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Excluir e recriar a tabela",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Fazer um Scan e chamar BatchDeleteItem",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. PurgeTable não é uma operação válida no DynamoDB."
            },
            {
                "correct": false,
                "text": "Incorreta. A operação Scan em uma tabela com 10 milhões de itens é muito lenta e custosa."
            },
            {
                "correct": true,
                "text": "Correta. A operação DeleteTable exclui a tabela inteira e todos os seus itens de forma eficiente. Recriar a tabela em seguida permite um processo rápido e com custo reduzido."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o BatchDeleteItem permita deletar múltiplos itens por chamada, o uso do Scan ainda é muito lento e custoso."
            }
        ],
        "glossary": [
            "DynamoDB – banco de dados NoSQL totalmente gerenciado da AWS, projetado para alta performance.",
            "DeleteTable – operação que remove completamente uma tabela DynamoDB e todos os seus itens.",
            "Scan – operação que lê todos os itens de uma tabela ou índice.",
            "DeleteItem – operação que exclui um único item com base em sua chave primária."
        ],
        "generalExplanation": [
            "A alternativa correta é excluir e recriar a tabela DynamoDB utilizando a operação DeleteTable, pois é a forma mais rápida e econômica de remover milhões de registros. Quando se tenta limpar uma tabela com 10 milhões de itens usando Scan + DeleteItem ou BatchDeleteItem, o processo se torna extremamente ineficiente. Já o DeleteTable remove toda a estrutura e os dados em segundos, sem custo proporcional ao número de itens."
        ],
        "realWorld": [
            "Considere uma aplicação de notícias esportivas em tempo real que armazena estatísticas de partidas em uma tabela DynamoDB. Como os dados mudam completamente a cada dia, o time de DevOps pode programar uma função AWS Lambda para executar DeleteTable às 2:00 AM, criar novamente a tabela com a mesma estrutura, e carregar as novas estatísticas. Isso evita o overhead de ler e deletar milhões de registros."
        ]
    },
    {
        "id": 34,
        "title": "Pergunta 34",
        "domain": "Implantação",
        "prompt": "Um desenvolvedor deseja uma forma simples e eficiente de retornar a versões anteriores de uma função Lambda que está sendo implantada. Qual das seguintes soluções oferece o MENOR overhead operacional?",
        "options": [
            {
                "letter": "A",
                "text": "Usar o CodeDeploy para configurar implantações blue/green para as diferentes versões da função Lambda",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar camadas (layers) do Lambda que possam apontar para as diferentes versões",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar um alias da função Lambda que possa apontar para as diferentes versões",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Usar uma política weighted do Route 53 que possa apontar para as diferentes versões da função Lambda",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora o CodeDeploy suporte implantações blue/green para funções Lambda, após a implantação não é possível reverter diretamente para versões anteriores usando CodeDeploy."
            },
            {
                "correct": false,
                "text": "Incorreta. Camadas do Lambda são usadas para empacotar bibliotecas e dependências reutilizáveis, não para gerenciar versões da função."
            },
            {
                "correct": true,
                "text": "Correta. Aliases do Lambda funcionam como ponteiros para versões específicas da função, permitindo direcionar o tráfego para versões distintas sem alterar o código do cliente."
            },
            {
                "correct": false,
                "text": "Incorreta. O Route 53 é um serviço de DNS e não gerencia versões de funções Lambda."
            }
        ],
        "glossary": [
            "Alias – identificador lógico que aponta para uma versão específica de uma função Lambda, permitindo rollback rápido.",
            "Camadas (Layers) – pacotes reutilizáveis que contêm bibliotecas, dependências ou código comum.",
            "AWS CodeDeploy – serviço que automatiza implantações, mas não oferece controle direto de rollback entre versões da função Lambda.",
            "Política Weighted do Route 53 – configuração de DNS usada para distribuir tráfego entre endpoints."
        ],
        "generalExplanation": [
            "A opção correta é o uso de aliases (apelidos) em funções AWS Lambda, pois eles atuam como ponteiros dinâmicos para versões específicas da função. Com um alias, é possível direcionar o tráfego para uma versão desejada, alternar rapidamente entre versões (rollback), e gerenciar ambientes (dev, staging, prod) sem alterar o código cliente."
        ],
        "realWorld": [
            "Em um ambiente CI/CD serverless, um time publica novas versões de uma função Lambda frequentemente. Caso uma atualização apresente erros, o time pode ajustar o alias 'prod' para apontar de volta à versão anterior, revertendo a mudança em segundos — sem reimplantar ou modificar o cliente. Aliases para cada ambiente permitem testes e implantações seguras."
        ]
    },
    {
        "id": 35,
        "title": "Pergunta 35",
        "domain": "Segurança",
        "prompt": "Uma empresa deseja migrar o código da aplicação existente de um repositório GitHub para o AWS CodeCommit. Como um AWS Certified Developer – Associate, qual das seguintes opções você recomendaria para migrar o repositório clonado para o CodeCommit via HTTPS?",
        "options": [
            {
                "letter": "A",
                "text": "Usar a chave secreta de acesso e o ID da chave de acesso de um usuário IAM",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar autenticação oferecida pelos tokens seguros do GitHub",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar autenticação multifator (MFA) do IAM",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar credenciais Git geradas a partir do IAM",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. As chaves de acesso são credenciais de longo prazo para um usuário IAM, mas para conexões HTTPS ao CodeCommit, o uso direto dessas chaves não é suportado para autenticação Git."
            },
            {
                "correct": false,
                "text": "Incorreta. Tokens de acesso pessoal do GitHub são específicos para GitHub e não são válidos para autenticação em repositórios AWS CodeCommit."
            },
            {
                "correct": false,
                "text": "Incorreta. A autenticação multifator (MFA) não é um método de autenticação suportado para conexões Git HTTPS ao CodeCommit."
            },
            {
                "correct": true,
                "text": "Correta. Repositórios CodeCommit são baseados em Git e suportam autenticação via credenciais Git específicas geradas no console IAM."
            }
        ],
        "glossary": [
            "IAM – serviço da AWS que permite criar e gerenciar usuários, grupos e políticas de permissão.",
            "Credenciais Git – par de nome de usuário e senha gerados no IAM, usados para autenticar-se em repositórios AWS CodeCommit via HTTPS.",
            "MFA – camada adicional de autenticação que combina senha e outro fator.",
            "Access Keys – credenciais permanentes utilizadas para acesso programático via AWS CLI ou SDK."
        ],
        "generalExplanation": [
            "A resposta correta é utilizar credenciais Git geradas pelo IAM para autenticação via HTTPS no AWS CodeCommit. Essas credenciais são criadas no console IAM, fornecendo um par estático de usuário e senha exclusivos para Git, permitindo que desenvolvedores acessem repositórios de forma segura e compatível com clientes Git padrão."
        ],
        "realWorld": [
            "Suponha que uma equipe de desenvolvimento precise migrar um repositório do GitHub para o AWS CodeCommit. Cada desenvolvedor acessa o IAM → Usuário → Credenciais de segurança → Credenciais Git do CodeCommit, gera um par de usuário e senha Git, e utiliza essas credenciais para clonar o repositório com HTTPS. Isso garante controle de acesso centralizado via políticas IAM e integração direta com CodePipeline."
        ]
    },
    {
        "id": 36,
        "title": "Pergunta 36",
        "domain": "Segurança",
        "prompt": "Sua empresa utiliza o Amazon CloudFront para distribuir conteúdo via internet aos clientes com baixa latência. Além da latência, a segurança é uma preocupação importante, e você deseja garantir conexões de ponta a ponta usando HTTPS para proteger o conteúdo. Qual das opções abaixo está disponível para o uso de HTTPS no AWS CloudFront?",
        "options": [
            {
                "letter": "A",
                "text": "Nem entre os clientes e o CloudFront, nem entre o CloudFront e o backend.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Apenas entre o CloudFront e o backend.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Apenas entre os clientes e o CloudFront.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Entre os clientes e o CloudFront, assim como entre o CloudFront e o backend (origem).",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. É possível configurar HTTPS para ambas as comunicações."
            },
            {
                "correct": false,
                "text": "Incorreta. É possível configurar HTTPS entre o CloudFront e a origem, mas também é possível exigir HTTPS entre os clientes e o CloudFront."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível exigir HTTPS entre os clientes e o CloudFront, também é possível configurar HTTPS entre o CloudFront e a origem."
            },
            {
                "correct": true,
                "text": "Correta. O CloudFront permite configurar HTTPS tanto para a comunicação entre os clientes (visualizadores) e o CloudFront quanto para a comunicação entre o CloudFront e a origem (backend), garantindo conexões criptografadas de ponta a ponta."
            }
        ],
        "glossary": [
            "Amazon CloudFront – serviço de CDN da AWS que distribui conteúdo estático e dinâmico globalmente.",
            "HTTPS – protocolo seguro baseado em TLS que protege os dados transmitidos entre o cliente e o servidor.",
            "Visualizadores (Viewers) – usuários finais ou aplicações clientes que fazem requisições ao CloudFront.",
            "Origem (Backend) – fonte de dados de onde o CloudFront busca o conteúdo."
        ],
        "generalExplanation": [
            "O Amazon CloudFront suporta HTTPS de ponta a ponta, garantindo criptografia completa entre visualizadores e CloudFront (front-end encryption) e entre CloudFront e a origem (back-end encryption). Essa configuração protege os dados em trânsito, evitando vulnerabilidades como ataques man-in-the-middle e vazamentos de informações sensíveis."
        ],
        "realWorld": [
            "Uma empresa de e-commerce global utiliza o CloudFront para entregar páginas, imagens e APIs com alta performance a milhões de usuários. Para garantir segurança e conformidade, ela configura um certificado SSL/TLS no AWS Certificate Manager (ACM) associado ao CloudFront, forçando conexões seguras com Viewer Protocol Policy = Redirect HTTP to HTTPS, e a origem também configurada para aceitar apenas HTTPS."
        ]
    },
    {
        "id": 37,
        "title": "Pergunta 37",
        "domain": "Segurança",
        "prompt": "Você é gerente de uma empresa de tecnologia que acabou de contratar uma equipe de desenvolvedores para trabalhar na infraestrutura AWS da empresa. Todos os desenvolvedores relatam que, ao usar o AWS CLI para executar comandos, ocorre a seguinte exceção: Você não está autorizado a executar esta operação. Mensagem de falha de autorização codificada. Qual das seguintes ações ajudará os desenvolvedores a decodificar essa mensagem?",
        "options": [
            {
                "letter": "A",
                "text": "Use o comando decode-authorization-message do AWS KMS",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Use o comando decode-authorization-message do AWS STS",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Use o comando decode-authorization-message do AWS IAM",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Use o decodificador do AWS Cognito",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O serviço AWS KMS não possui o comando decode-authorization-message."
            },
            {
                "correct": true,
                "text": "Correta. O comando decode-authorization-message do AWS STS permite decodificar informações adicionais sobre o status de autorização de uma requisição a partir de uma mensagem codificada retornada em resposta a uma solicitação AWS."
            },
            {
                "correct": false,
                "text": "Incorreta. O serviço AWS IAM não possui o comando decode-authorization-message."
            },
            {
                "correct": false,
                "text": "Incorreta. O serviço AWS Cognito não possui nenhum decodificador para mensagens de falha de autorização."
            }
        ],
        "glossary": [
            "AWS STS – serviço que emite credenciais temporárias de segurança e oferece funcionalidades para decodificar mensagens de autorização codificadas.",
            "decode-authorization-message – comando do AWS STS utilizado para decodificar mensagens de falha de autorização retornadas pela AWS.",
            "IAM – serviço que gerencia identidades e políticas de acesso a recursos AWS.",
            "KMS – serviço de gerenciamento de chaves criptográficas da AWS."
        ],
        "generalExplanation": [
            "Quando um usuário tenta executar uma operação sem as permissões necessárias, a AWS retorna uma mensagem de erro codificada para proteger informações sensíveis sobre a falha de autorização. Para entender a causa exata da negação, é necessário decodificar essa mensagem utilizando o comando `aws sts decode-authorization-message` do AWS STS. O usuário que executa o comando deve possuir a permissão sts:DecodeAuthorizationMessage em sua política IAM."
        ],
        "realWorld": [
            "Em ambientes corporativos, desenvolvedores frequentemente enfrentam erros de autorização (AccessDenied) ao interagir com a AWS via CLI. Ao usar o comando decode-authorization-message do AWS STS, o time consegue visualizar o conteúdo detalhado da falha, incluindo a ação, recurso e política que causaram a negação, facilitando o ajuste preciso das permissões no IAM."
        ]
    },
    {
        "id": 38,
        "title": "Pergunta 38",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa do setor financeiro com mais de 10.000 funcionários contratou você como o novo Desenvolvedor Sênior. Inicialmente, o cache foi habilitado para reduzir o número de chamadas feitas a todos os endpoints da API e melhorar a latência das requisições ao API Gateway da empresa. Para fins de teste, você deseja invalidar o cache para que os clientes da API obtenham as respostas mais recentes. Qual das seguintes opções você deve utilizar?",
        "options": [
            {
                "letter": "A",
                "text": "Usar o parâmetro de requisição ?cache-control-max-age=0",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar o cabeçalho Cache-Control: max-age=0",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Usar o cabeçalho Bypass-Cache=1",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar o parâmetro de requisição ?bypass_cache=1",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A invalidação do cache requer o uso de um cabeçalho HTTP específico, não um parâmetro de consulta na URL."
            },
            {
                "correct": true,
                "text": "Correta. Para que o cliente invalide uma entrada de cache existente e recarregue a resposta diretamente do endpoint de integração, ele deve enviar o cabeçalho HTTP Cache-Control: max-age=0 na requisição."
            },
            {
                "correct": false,
                "text": "Incorreta. O cabeçalho Bypass-Cache=1 não é um cabeçalho HTTP válido."
            },
            {
                "correct": false,
                "text": "Incorreta. O API Gateway não reconhece ?bypass_cache=1 como um parâmetro válido para ignorar ou invalidar o cache."
            }
        ],
        "glossary": [
            "API Gateway – serviço totalmente gerenciado da AWS que cria, publica, protege e monitora APIs RESTful e WebSocket.",
            "Cache-Control – cabeçalho HTTP que define diretivas de cache para requisições e respostas.",
            "max-age=0 – diretiva do cabeçalho Cache-Control que força a revalidação da resposta no servidor de origem."
        ],
        "generalExplanation": [
            "Para garantir que o cliente obtenha dados sempre atualizados em uma API configurada com cache no Amazon API Gateway, o método mais adequado é usar o cabeçalho HTTP `Cache-Control: max-age=0`. Essa diretiva informa ao API Gateway e ao navegador que a resposta não deve ser servida a partir do cache e precisa ser revalidada diretamente com o backend."
        ],
        "realWorld": [
            "Considere uma aplicação financeira serverless que consulta saldos e transações via API Gateway, com cache habilitado para reduzir latência. Durante atualizações críticas de dados, testes de integração, ou processamento de transações em tempo real, o desenvolvedor envia requisições com o cabeçalho `Cache-Control: max-age=0`, forçando o API Gateway a buscar a resposta diretamente do backend (como uma função AWS Lambda ou consulta em DynamoDB)."
        ]
    },
    {
        "id": 39,
        "title": "Pergunta 39",
        "domain": "Segurança",
        "prompt": "Uma equipe de desenvolvimento está armazenando dados sensíveis de clientes no Amazon S3 que exigem criptografia em repouso. As chaves de criptografia devem ser rotacionadas pelo menos anualmente. Qual é a maneira mais simples de implementar uma solução que atenda a esse requisito?",
        "options": [
            {
                "letter": "A",
                "text": "Importar uma chave personalizada para o AWS KMS e automatizar a rotação anual usando uma função Lambda",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar SSE-C com rotação automática de chaves anualmente",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Criptografar os dados antes de enviá-los para o Amazon S3",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar o AWS KMS com rotação automática de chaves",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível importar chaves personalizadas para o AWS KMS, a rotação automática não é suportada para essas chaves importadas."
            },
            {
                "correct": false,
                "text": "Incorreta. O SSE-C exige que o cliente forneça e gerencie as chaves de criptografia. O Amazon S3 não armazena essas chaves e não oferece suporte a rotação automática."
            },
            {
                "correct": false,
                "text": "Incorreta. A criptografia do lado do cliente exige que a equipe gerencie a geração, manutenção e rotação das chaves manualmente."
            },
            {
                "correct": true,
                "text": "Correta. O uso do AWS KMS com rotação automática de chaves permite que as chaves mestras do cliente (CMKs) sejam rotacionadas automaticamente a cada ano."
            }
        ],
        "glossary": [
            "AWS KMS – serviço gerenciado da AWS para criação, armazenamento e controle de chaves criptográficas.",
            "SSE-KMS – criptografia do lado do servidor com chaves gerenciadas pelo AWS KMS.",
            "SSE-C – criptografia do lado do servidor com chaves fornecidas pelo cliente.",
            "CMK – chave mestra gerenciada pelo AWS KMS usada para criptografia, descriptografia e controle de acesso.",
            "Rotação de Chaves – prática de substituir periodicamente chaves criptográficas para reduzir o risco de comprometimento."
        ],
        "generalExplanation": [
            "A alternativa correta é utilizar o AWS KMS com rotação automática de chaves, pois essa abordagem fornece uma solução integrada, segura e de baixa complexidade para criptografia em repouso no Amazon S3. O AWS KMS permite configurar a rotação anual automática das CMKs, atendendo aos requisitos de segurança sem necessidade de intervenção manual."
        ],
        "realWorld": [
            "Em um ambiente corporativo que armazena dados sensíveis de clientes no Amazon S3, um desenvolvedor pode habilitar o SSE-KMS para garantir criptografia em repouso e ativar a rotação automática das chaves no KMS. Essa configuração reduz o risco de exposição de dados por meio da renovação periódica das chaves, simplificando auditorias e conformidade com normas de segurança."
        ]
    },
    {
        "id": 40,
        "title": "Pergunta 40",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Engenheiros de DevOps estão desenvolvendo um sistema de processamento de pedidos onde notificações são enviadas para um departamento sempre que um pedido é realizado para um produto. O sistema também envia notificações idênticas do novo pedido para um módulo de processamento que permite que instâncias EC2 realizem o atendimento do pedido. Em caso de erros no processamento, as mensagens devem poder ser reprocessadas posteriormente. O sistema de processamento de pedidos deve escalar de forma transparente, sem necessidade de provisionamento manual ou programático de recursos. Qual das seguintes soluções pode ser usada para atender a esse caso de uso da forma mais econômica?",
        "options": [
            {
                "letter": "A",
                "text": "SNS + Kinesis",
                "correct": false
            },
            {
                "letter": "B",
                "text": "SNS + Lambda",
                "correct": false
            },
            {
                "letter": "C",
                "text": "SNS + SQS",
                "correct": true
            },
            {
                "letter": "D",
                "text": "SQS + SES",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Amazon Kinesis Data Streams exige provisionamento manual de shards para escalar e pode gerar custos elevados."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora o SNS possa invocar funções Lambda, as instâncias EC2 não podem consumir diretamente mensagens de funções Lambda."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon SNS permite o envio de notificações para múltiplos assinantes, incluindo filas SQS. O SQS é um serviço de fila totalmente gerenciado que possibilita desacoplar e escalar sistemas distribuídos."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon SES é um serviço de envio de e-mails e não se encaixa no fluxo de processamento de mensagens para múltiplos consumidores."
            }
        ],
        "glossary": [
            "SNS – serviço de mensagens pub/sub da AWS que permite enviar notificações para múltiplos destinos simultaneamente.",
            "SQS – serviço de filas gerenciadas que desacopla componentes de aplicações.",
            "Lambda – serviço de computação serverless que executa código em resposta a eventos.",
            "Kinesis Data Streams – serviço de ingestão e processamento de dados em tempo real.",
            "Fan-out pattern – padrão de arquitetura no qual uma mensagem publicada é distribuída simultaneamente para múltiplos consumidores."
        ],
        "generalExplanation": [
            "A solução mais adequada para o cenário é a combinação Amazon SNS + Amazon SQS, que implementa de forma nativa o padrão fan-out, permitindo o envio simultâneo de mensagens para múltiplos destinos. O SNS publica a mensagem, cada assinatura SQS recebe uma cópia da mensagem, as instâncias EC2 consomem as mensagens de suas respectivas filas, e em caso de falha, o SQS armazena as mensagens até o reprocessamento."
        ],
        "realWorld": [
            "Em um sistema de e-commerce, quando um novo pedido é criado, o Amazon SNS publica o evento 'NovoPedidoCriado'. Esse evento é entregue simultaneamente a duas filas SQS: uma para o departamento financeiro registrar o pagamento, e outra para o módulo de processamento de pedidos em EC2 iniciar o empacotamento e envio. Se uma das instâncias EC2 falhar, a mensagem permanece na fila para reprocessamento."
        ]
    },
    {
        "id": 41,
        "title": "Pergunta 41",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma equipe de desenvolvedores .NET trabalha com várias aplicações web ASP.NET que utilizam instâncias EC2 para hospedagem no IIS. O processo de implantação precisa ser configurado para que múltiplas versões da aplicação possam rodar no AWS Elastic Beanstalk. Uma versão seria usada para desenvolvimento e testes, e outra para testes de carga. Qual dos métodos a seguir você recomendaria?",
        "options": [
            {
                "letter": "A",
                "text": "Não é possível ter múltiplos ambientes de desenvolvimento no Elastic Beanstalk, apenas um ambiente de desenvolvimento e um de produção.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar apenas um ambiente do Elastic Beanstalk e realizar alterações de configuração usando um script Ansible.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Criar um Application Load Balancer para rotear o tráfego com base no hostname, permitindo passar parâmetros para o ambiente de desenvolvimento do Elastic Beanstalk.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Definir um ambiente de desenvolvimento com uma única instância e um ambiente de 'teste de carga' que possua configurações semelhantes ao ambiente de produção.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Elastic Beanstalk permite criar múltiplos ambientes para a mesma aplicação."
            },
            {
                "correct": false,
                "text": "Incorreta. O Elastic Beanstalk já oferece suporte nativo para múltiplos ambientes, facilitando a criação e gerenciamento de versões separadas."
            },
            {
                "correct": false,
                "text": "Incorreta. Diferentes versões da aplicação rodando nas mesmas instâncias podem causar conflitos e dificultar o isolamento dos ambientes."
            },
            {
                "correct": true,
                "text": "Correta. O AWS Elastic Beanstalk permite criar múltiplos ambientes independentes para a mesma aplicação, facilitando o isolamento entre desenvolvimento, teste e produção."
            }
        ],
        "glossary": [
            "AWS Elastic Beanstalk – serviço gerenciado da AWS que automatiza a implantação, o gerenciamento e a escalabilidade de aplicações web.",
            "Ambiente (Environment) – instância isolada de uma aplicação dentro do Elastic Beanstalk.",
            "Application Load Balancer (ALB) – balanceador de carga que distribui o tráfego HTTP/HTTPS entre instâncias EC2."
        ],
        "generalExplanation": [
            "A solução correta é criar ambientes separados dentro do AWS Elastic Beanstalk — um para desenvolvimento e outro para testes de carga. O Elastic Beanstalk oferece suporte nativo a múltiplos ambientes independentes, permitindo que cada um tenha configurações, versões da aplicação e recursos dedicados. Esse isolamento é fundamental para evitar interferências entre testes e desenvolvimento."
        ],
        "realWorld": [
            "Em uma equipe de desenvolvimento moderna, é comum utilizar o Elastic Beanstalk com ambientes 'dev' para experimentação e desenvolvimento contínuo, e 'test' para executar testes de carga simulando o comportamento real em produção. Com essa configuração, os desenvolvedores podem fazer deploys frequentes no ambiente de desenvolvimento sem afetar os testes de performance."
        ]
    },
    {
        "id": 42,
        "title": "Pergunta 42",
        "domain": "Implantação",
        "prompt": "Você foi contratado por uma empresa que precisa de um desenvolvedor experiente para ajudar com um fluxo de trabalho de integração contínua/entrega contínua (CI/CD) na AWS. Você configurou o pipeline do AWS CodePipeline para ser executado sempre que o código-fonte da aplicação for alterado em um repositório hospedado no AWS CodeCommit, e utiliza o AWS CodeBuild para compilar o código-fonte. Agora, você está configurando o parâmetro ProjectArtifacts na etapa de build. Qual das seguintes ações você deve realizar?",
        "options": [
            {
                "letter": "A",
                "text": "Entrar em contato com o suporte da AWS para permitir que o AWS CodePipeline gerencie os artefatos de build",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Conceder permissões ao AWS CodeCommit para fazer upload dos artefatos de build em seu bucket do Amazon S3",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Configurar o AWS CodeBuild para armazenar os artefatos de saída em servidores EC2",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Conceder permissões ao AWS CodeBuild para fazer upload dos artefatos de build em seu bucket do Amazon S3",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Não é necessário contatar o suporte da AWS para permitir que o CodePipeline gerencie os artefatos de build."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS CodeCommit é apenas o repositório de código-fonte e não tem controle sobre o processo de compilação."
            },
            {
                "correct": false,
                "text": "Incorreta. Servidores EC2 não são um local válido para armazenar artefatos de build no contexto do CodeBuild."
            },
            {
                "correct": true,
                "text": "Correta. Quando o parâmetro ProjectArtifacts está configurado com o tipo S3, o projeto de build armazena os artefatos de saída no Amazon S3. Para isso, o CodeBuild precisa ter permissões adequadas."
            }
        ],
        "glossary": [
            "AWS CodeBuild – serviço totalmente gerenciado que compila código-fonte, executa testes automatizados e gera artefatos de build.",
            "AWS CodePipeline – serviço de integração e entrega contínua (CI/CD) que orquestra as etapas de build, teste e deploy.",
            "AWS CodeCommit – repositório de controle de versão baseado em Git.",
            "ProjectArtifacts – parâmetro do CodeBuild que define onde e como os artefatos de build serão armazenados.",
            "Amazon S3 – serviço de armazenamento de objetos altamente durável e escalável."
        ],
        "generalExplanation": [
            "Ao configurar um projeto no AWS CodeBuild, é comum especificar o Amazon S3 como destino dos artefatos gerados após a compilação. Para isso, o serviço precisa de permissões IAM adequadas que permitam gravar (PutObject) e listar (ListBucket) objetos no bucket S3 configurado no parâmetro ProjectArtifacts. Sem essas permissões, o build falhará ao tentar enviar os artefatos."
        ],
        "realWorld": [
            "Em pipelines modernos de CI/CD, o CodePipeline coordena todo o fluxo, enquanto o CodeBuild realiza a compilação. Durante o processo, o CodeBuild gera artefatos (como pacotes zip, binários, ou templates CloudFormation) e precisa enviá-los para o Amazon S3, onde etapas posteriores do pipeline — como CodeDeploy, Lambda ou CloudFormation — irão buscá-los para implantação."
        ]
    },
    {
        "id": 43,
        "title": "Pergunta 43",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa de TI utiliza uma política de implantação blue/green para provisionar novas instâncias Amazon EC2 em um Auto Scaling Group atrás de um novo Application Load Balancer para cada nova versão da aplicação. A configuração atual exige que os usuários façam login após cada nova implantação. Como um Associate Developer, qual conselho você daria para a empresa resolver esse problema?",
        "options": [
            {
                "letter": "A",
                "text": "Habilitar sessões sticky (sessões persistentes) no Application Load Balancer",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar atualizações rolling (rolling updates) em vez de uma implantação blue/green",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar multicast para replicar as informações de sessão",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar ElastiCache para manter as sessões dos usuários",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Como o Application Load Balancer é substituído a cada nova implantação, manter sessões sticky no ALB não funcionará."
            },
            {
                "correct": false,
                "text": "Incorreta. Atualizações rolling podem causar interrupções nas sessões dos usuários."
            },
            {
                "correct": false,
                "text": "Incorreta. O uso de multicast para replicação de sessões não é suportado nem recomendado em ambientes AWS."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon ElastiCache permite configurar e escalar facilmente armazenamentos de dados em memória compatíveis com Redis ou Memcached, que podem ser usados para armazenar sessões de usuários de forma centralizada."
            }
        ],
        "glossary": [
            "Application Load Balancer (ALB) – serviço de balanceamento de carga na camada 7 (HTTP/HTTPS).",
            "Sessões sticky – técnica que mantém o usuário conectado à mesma instância backend.",
            "Amazon ElastiCache – serviço de armazenamento em memória gerenciado (Redis ou Memcached) usado para armazenar dados temporários e sessões de usuário.",
            "Blue/Green deployment – estratégia de implantação que isola versões de aplicação em dois ambientes."
        ],
        "generalExplanation": [
            "Durante implantações Blue/Green ou atualizações Rolling, o ambiente da aplicação pode mudar completamente — novas instâncias EC2 são lançadas e novos ALBs podem ser provisionados. Se as sessões dos usuários estiverem armazenadas localmente em cada instância ou atreladas ao ALB, essas informações são perdidas. A solução ideal é externalizar o armazenamento de sessão para um repositório compartilhado e persistente, como o Amazon ElastiCache."
        ],
        "realWorld": [
            "Em uma aplicação web corporativa hospedada em instâncias EC2 atrás de um Application Load Balancer, os times de DevOps podem realizar implantações Blue/Green automatizadas via AWS CodeDeploy. Ao integrar o Amazon ElastiCache (Redis) como camada de armazenamento central de sessão, todas as instâncias compartilham os mesmos dados de login, e os usuários permanecem conectados mesmo após o redirecionamento do tráfego para o novo ambiente Green."
        ]
    },
    {
        "id": 44,
        "title": "Pergunta 44",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você fez o upload de um arquivo zip para o AWS Lambda que contém arquivos de código escritos em Node.js. Quando sua função é executada, você recebe a seguinte mensagem de erro: 'Error: Memory Size: 10,240 MB Max Memory Used'. Qual das alternativas a seguir explica o problema?",
        "options": [
            {
                "letter": "A",
                "text": "O arquivo zip descompactado excede os limites do AWS Lambda.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Você fez o upload de um arquivo zip maior que 50 MB para o AWS Lambda.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Sua função Lambda ficou sem memória RAM.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Seu arquivo zip está corrompido.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Se o arquivo zip descompactado ultrapassasse os limites do Lambda, a função nem sequer seria executada."
            },
            {
                "correct": false,
                "text": "Incorreta. O tamanho do arquivo zip não impede a execução da função se estiver dentro dos limites permitidos."
            },
            {
                "correct": true,
                "text": "Correta. O erro indica que a função Lambda foi configurada com 10.240 MB de memória, mas o código tentou usar mais do que isso, causando falha por falta de memória durante a execução."
            },
            {
                "correct": false,
                "text": "Incorreta. Um arquivo corrompido impediria a extração e execução da função."
            }
        ],
        "glossary": [
            "AWS Lambda – serviço de computação serverless que executa código sob demanda em resposta a eventos.",
            "Memória RAM – quantidade de memória alocada para a função Lambda durante sua execução.",
            "Arquivo ZIP – pacote compactado que contém o código-fonte e as dependências da função.",
            "Erro de memória (Out of Memory) – falha que ocorre quando o código consome mais memória do que o limite configurado."
        ],
        "generalExplanation": [
            "O erro descrito indica que a função AWS Lambda ultrapassou o limite de memória configurado (10.240 MB), ocasionando uma falha por falta de memória durante a execução. Esse tipo de erro não está relacionado ao arquivo ZIP (como tamanho excessivo ou corrupção), pois o código foi iniciado com sucesso — a falha ocorreu durante o processamento."
        ],
        "realWorld": [
            "Imagine um desenvolvedor que utiliza o AWS Lambda para processar imagens enviadas para um bucket S3. Durante o redimensionamento de imagens grandes, a função começa a falhar com mensagens de 'Out of Memory'. O engenheiro identifica, por meio das métricas do CloudWatch, que o consumo médio de memória chega próximo de 9.5 GB, acima do limite atual de 10 GB, e decide aumentar a memória para 12 GB."
        ]
    },
    {
        "id": 45,
        "title": "Pergunta 45",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você configurou uma Network ACL e um Security Group para o balanceador de carga e instâncias Amazon EC2 para permitir tráfego de entrada na porta 80. No entanto, os usuários ainda não conseguem acessar seu site após o lançamento. Qual configuração adicional é necessária para que o site fique acessível a todos os usuários pela internet?",
        "options": [
            {
                "letter": "A",
                "text": "Adicionar uma regra à Network ACL para permitir tráfego de saída nas portas 1025 - 5000",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Adicionar uma regra à Network ACL para permitir tráfego de saída nas portas 32768 - 61000",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Adicionar uma regra à Network ACL para permitir tráfego de saída nas portas 1024 - 65535",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Adicionar uma regra ao Security Group permitindo tráfego de saída na porta 80",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Limitar a regra a 1025-5000 pode bloquear respostas legítimas de clientes que usam outras portas efêmeras."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa faixa de portas efêmeras é usada por muitos kernels Linux, mas não cobre todas as portas efêmeras usadas pelo Elastic Load Balancing."
            },
            {
                "correct": true,
                "text": "Correta. Como as Network ACLs são stateless, é necessário permitir explicitamente o tráfego de saída nas portas efêmeras (1024-65535) para que as respostas às requisições HTTP na porta 80 possam retornar aos clientes."
            },
            {
                "correct": false,
                "text": "Incorreta. Security Groups são stateful, o que significa que se o tráfego de entrada na porta 80 está permitido, as respostas de saída são automaticamente permitidas."
            }
        ],
        "glossary": [
            "Network ACL – camada opcional de segurança da VPC que controla o tráfego de entrada e saída em nível de subnet; é stateless.",
            "Security Group – firewall virtual stateful que controla o tráfego em nível de instância EC2.",
            "Stateful – característica que mantém o estado das conexões, permitindo automaticamente o tráfego de retorno.",
            "Stateless – característica que não mantém o estado da conexão, exigindo regras explícitas para ambos os sentidos.",
            "Portas efêmeras – portas temporárias utilizadas por sistemas operacionais para conexões de saída."
        ],
        "generalExplanation": [
            "Para que um site hospedado na AWS seja acessível pela internet, é essencial garantir que o tráfego de entrada e saída esteja configurado corretamente nas camadas de segurança da VPC. O Security Group, por ser stateful, permite automaticamente o tráfego de resposta. Já a Network ACL é stateless, e portanto não permite o tráfego de retorno de forma automática. É necessário adicionar uma regra na Network ACL que permita o tráfego de saída nas portas efêmeras (1024–65535)."
        ],
        "realWorld": [
            "Em um ambiente corporativo com uma aplicação web balanceada pelo ELB e hospedada em instâncias EC2, o arquiteto de rede deve garantir que a Network ACL esteja configurada corretamente. Ao implementar uma camada adicional de segurança via NACL para subnets públicas, é necessário criar regras que permitam entrada na porta 80 ou 443, e saída nas portas efêmeras (1024–65535) para possibilitar o retorno das respostas HTTP aos usuários."
        ]
    },
    {
        "id": 46,
        "title": "Pergunta 46",
        "domain": "Segurança",
        "prompt": "Considere a seguinte política IAM: { 'Version': '2012-10-17', 'Statement': [ { 'Effect': 'Deny', 'Action': 's3:*', 'Resource': 'arn:aws:s3:::EXAMPLE-BUCKET/private*' }, { 'Effect': 'Allow', 'Action': ['s3:PutObject', 's3:GetObject'], 'Resource': 'arn:aws:s3:::EXAMPLE-BUCKET/*' } ] } Qual das seguintes afirmações está correta de acordo com a política apresentada?",
        "options": [
            {
                "letter": "A",
                "text": "A política concede acesso PutObject e GetObject a todos os objetos no bucket EXAMPLE-BUCKET e também concede acesso a todas as ações do S3 para objetos que começam com 'private'.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "A política concede acesso PutObject e GetObject a todos os objetos no bucket EXAMPLE-BUCKET, exceto aos objetos que começam com 'private'.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "A política concede acesso PutObject e GetObject a todos os buckets, exceto ao bucket EXAMPLE-BUCKET/private.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "A política nega acesso PutObject e GetObject a todos os buckets, exceto ao bucket EXAMPLE-BUCKET/private.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A política explicitamente nega todas as ações do S3 para objetos que começam com 'private'."
            },
            {
                "correct": true,
                "text": "Correta. O primeiro statement nega todas as ações do S3 para objetos cujo nome começa com 'private'. O segundo statement permite PutObject e GetObject para todos os objetos do bucket. Como a negação tem precedência, o resultado final é permitir PutObject e GetObject para todos os objetos, exceto aqueles que começam com 'private'."
            },
            {
                "correct": false,
                "text": "Incorreta. A política não concede acesso a todos os buckets, mas apenas ao bucket EXAMPLE-BUCKET."
            },
            {
                "correct": false,
                "text": "Incorreta. A política não nega acesso a todos os buckets, mas apenas nega todas as ações do S3 para objetos que começam com 'private' dentro do bucket EXAMPLE-BUCKET."
            }
        ],
        "glossary": [
            "IAM – serviço da AWS que gerencia usuários, grupos, funções e permissões de acesso a recursos AWS.",
            "Effect (Efeito) – atributo de uma política IAM que define se uma ação é permitida (Allow) ou negada (Deny).",
            "Action (Ação) – operação específica que pode ser controlada por uma política IAM.",
            "Resource (Recurso) – recurso AWS ao qual a política se aplica, identificado por um ARN.",
            "Precedência de negação – regra fundamental do IAM em que qualquer negação explícita (Deny) tem prioridade sobre permissões (Allow)."
        ],
        "generalExplanation": [
            "A política apresentada contém duas declarações: uma negação explícita (Deny) que bloqueia todas as ações do S3 em objetos com prefixo 'private', e uma permissão (Allow) que concede as ações s3:PutObject e s3:GetObject para todos os objetos do bucket. Na avaliação das políticas IAM, a ordem das declarações não importa — o que importa é o resultado combinado das permissões. Como uma negação explícita tem precedência sobre qualquer permissão, o acesso será bloqueado para todos os objetos com prefixo 'private'."
        ],
        "realWorld": [
            "Em cenários de produção, desenvolvedores frequentemente precisam restringir partes específicas de um bucket S3, como pastas 'private' ou prefixos confidenciais, sem comprometer o acesso geral à aplicação. Uma política IAM com negação explícita permite bloquear o acesso a essas áreas críticas mesmo que uma política mais ampla conceda permissões globais, garantindo segurança granular e isolamento de dados."
        ]
    },
    {
        "id": 47,
        "title": "Pergunta 47",
        "domain": "Segurança",
        "prompt": "Você possui uma aplicação web popular que acessa dados armazenados em um bucket do Amazon S3. Os desenvolvedores utilizam o SDK para manter a aplicação e adicionar novas funcionalidades. Uma exigência de conformidade de segurança determina que todos os novos objetos enviados para o S3 sejam criptografados usando SSE-S3 no momento do upload. Qual dos seguintes cabeçalhos os desenvolvedores devem adicionar à requisição para garantir essa criptografia?",
        "options": [
            {
                "letter": "A",
                "text": "'x-amz-server-side-encryption': 'AES256'",
                "correct": true
            },
            {
                "letter": "B",
                "text": "'x-amz-server-side-encryption': 'SSE-S3'",
                "correct": false
            },
            {
                "letter": "C",
                "text": "'x-amz-server-side-encryption': 'aws:kms'",
                "correct": false
            },
            {
                "letter": "D",
                "text": "'x-amz-server-side-encryption': 'SSE-KMS'",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Este é o valor correto para ativar a criptografia do lado do servidor usando SSE-S3 (Amazon S3-Managed Keys). O Amazon S3 utiliza AES-256."
            },
            {
                "correct": false,
                "text": "Incorreta. 'SSE-S3' não é um valor válido para o cabeçalho."
            },
            {
                "correct": false,
                "text": "Incorreta. Este valor é válido para criptografia usando SSE-KMS, não para SSE-S3."
            },
            {
                "correct": false,
                "text": "Incorreta. 'SSE-KMS' não é um valor válido para o cabeçalho; o valor correto para SSE-KMS é 'aws:kms'."
            }
        ],
        "glossary": [
            "SSE-S3 – criptografia do lado do servidor gerenciada pelo Amazon S3, utilizando chaves próprias do serviço.",
            "SSE-KMS – criptografia do lado do servidor que usa chaves gerenciadas pelo AWS KMS.",
            "AWS KMS – serviço gerenciado da AWS que permite criar, armazenar e controlar chaves criptográficas.",
            "AES-256 – algoritmo de criptografia simétrica avançado com chave de 256 bits.",
            "x-amz-server-side-encryption – cabeçalho HTTP usado em requisições ao Amazon S3 para indicar o tipo de criptografia do lado do servidor."
        ],
        "generalExplanation": [
            "Para garantir que todos os objetos enviados ao Amazon S3 sejam criptografados com SSE-S3, é necessário incluir o cabeçalho HTTP `x-amz-server-side-encryption: AES256`. O valor `AES256` instrui o S3 a aplicar criptografia do lado do servidor gerenciada automaticamente pelo próprio serviço, utilizando o algoritmo AES-256 para proteger os dados em repouso."
        ],
        "realWorld": [
            "Em aplicações que fazem upload de arquivos para o Amazon S3, como sistemas web que armazenam imagens, documentos ou logs, é essencial garantir que os dados sejam criptografados automaticamente. Ao usar o AWS SDK, o desenvolvedor adiciona o cabeçalho `x-amz-server-side-encryption: AES256` nas chamadas de upload, e o S3 aplica a criptografia SSE-S3 sem exigir que a equipe gerencie chaves manualmente."
        ]
    },
    {
        "id": 48,
        "title": "Pergunta 48",
        "domain": "Segurança",
        "prompt": "Sua equipe de desenvolvimento utiliza o AWS SDK para Java em uma aplicação web que faz upload de arquivos para vários buckets do Amazon S3 utilizando o mecanismo de criptografia SSE-KMS. Os desenvolvedores estão relatando erros de permissão ao tentar enviar os objetos via HTTP. Qual dos seguintes cabeçalhos eles devem incluir na requisição?",
        "options": [
            {
                "letter": "A",
                "text": "'x-amz-server-side-encryption': 'AES256'",
                "correct": false
            },
            {
                "letter": "B",
                "text": "'x-amz-server-side-encryption': 'aws:kms'",
                "correct": true
            },
            {
                "letter": "C",
                "text": "'x-amz-server-side-encryption': 'SSE-S3'",
                "correct": false
            },
            {
                "letter": "D",
                "text": "'x-amz-server-side-encryption': 'SSE-KMS'",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Este valor é utilizado para SSE-S3, não para SSE-KMS."
            },
            {
                "correct": true,
                "text": "Correta. Este é o valor correto para o cabeçalho quando se utiliza a criptografia do lado do servidor com chaves gerenciadas pelo AWS KMS (SSE-KMS). Sem este cabeçalho, a requisição é negada por falta de permissão."
            },
            {
                "correct": false,
                "text": "Incorreta. 'SSE-S3' não é um valor válido para o cabeçalho."
            },
            {
                "correct": false,
                "text": "Incorreta. 'SSE-KMS' não é um valor válido para o cabeçalho; o valor correto para indicar criptografia SSE-KMS é 'aws:kms'."
            }
        ],
        "glossary": [
            "SSE-KMS – método de criptografia do lado do servidor que utiliza chaves gerenciadas pelo AWS KMS.",
            "SSE-S3 – criptografia do lado do servidor que usa chaves gerenciadas automaticamente pelo Amazon S3.",
            "AWS KMS – serviço da AWS para criação, gerenciamento e controle de chaves criptográficas.",
            "x-amz-server-side-encryption – cabeçalho HTTP usado para especificar o tipo de criptografia do lado do servidor."
        ],
        "generalExplanation": [
            "Ao utilizar o AWS SDK para Java (ou qualquer SDK AWS) para enviar objetos criptografados via SSE-KMS para um bucket S3, é essencial definir corretamente o cabeçalho HTTP `x-amz-server-side-encryption: aws:kms`. Esse valor indica ao Amazon S3 que a criptografia do lado do servidor deve ser realizada com o AWS KMS, utilizando chaves gerenciadas pelo cliente (CMK). Caso o cabeçalho esteja ausente ou incorreto, a operação de upload será rejeitada."
        ],
        "realWorld": [
            "Imagine uma aplicação web corporativa que permite o upload de arquivos sensíveis (como contratos ou dados de clientes) para o Amazon S3. Para atender aos requisitos de conformidade e segurança, o time de desenvolvimento precisa garantir que todos os uploads sejam automaticamente criptografados com chaves gerenciadas via AWS KMS. Ao configurar o AWS SDK para Java, os desenvolvedores adicionam o cabeçalho `x-amz-server-side-encryption: aws:kms`."
        ]
    },
    {
        "id": 49,
        "title": "Pergunta 49",
        "domain": "Implantação",
        "prompt": "Uma empresa de análise de dados com sua infraestrutura de TI na nuvem AWS deseja construir e implantar sua aplicação principal assim que houver qualquer alteração no código-fonte. Como um Desenvolvedor Associado, quais das seguintes opções você sugeriria para disparar a implantação? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Manter o código-fonte em um repositório AWS CodeCommit e iniciar o AWS CodePipeline sempre que uma alteração for enviada para o repositório CodeCommit",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Manter o código-fonte no Amazon EFS e iniciar o AWS CodePipeline sempre que um arquivo for atualizado",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Manter o código-fonte em um bucket Amazon S3 e configurar o AWS CodePipeline para executar periodicamente a cada 15 minutos",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Manter o código-fonte em um volume Amazon EBS e iniciar o AWS CodePipeline sempre que houver atualizações no código-fonte",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Manter o código-fonte em um bucket Amazon S3 e iniciar o AWS CodePipeline sempre que um arquivo no bucket S3 for atualizado",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O AWS CodeCommit integra-se nativamente ao AWS CodePipeline, que pode ser configurado para ser disparado automaticamente sempre que houver um push de código."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon EFS não é suportado como um provedor de origem para o AWS CodePipeline."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível configurar o pipeline para verificar o bucket S3 em intervalos regulares, essa abordagem é ineficiente e pode causar atrasos."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon EBS não é suportado como fonte para o AWS CodePipeline."
            },
            {
                "correct": true,
                "text": "Correta. O AWS CodePipeline pode ser configurado para ser disparado automaticamente por eventos do Amazon S3."
            }
        ],
        "glossary": [
            "AWS CodeCommit – serviço gerenciado de controle de versão baseado em Git.",
            "AWS CodePipeline – serviço gerenciado de entrega contínua (CI/CD) que automatiza etapas de build, test e deploy.",
            "Amazon S3 – serviço de armazenamento de objetos que pode emitir eventos em resposta a alterações.",
            "Amazon EFS – sistema de arquivos elástico para armazenamento compartilhado, não suportado como fonte de disparo.",
            "Amazon EBS – serviço de armazenamento em blocos usado com instâncias EC2, também não compatível."
        ],
        "generalExplanation": [
            "A maneira mais eficiente e recomendada de disparar implantações automáticas após uma alteração no código é utilizar fontes suportadas pelo AWS CodePipeline que oferecem gatilhos baseados em eventos, como o AWS CodeCommit e o Amazon S3. Esses serviços são nativamente integrados ao CodePipeline, permitindo que o pipeline seja iniciado imediatamente após um push de código ou uma modificação em um objeto S3."
        ],
        "realWorld": [
            "Em um ambiente ágil, um time de desenvolvimento configura o AWS CodeCommit como repositório central do código-fonte. Sempre que um desenvolvedor executa um `git push`, o AWS CodePipeline é automaticamente disparado, iniciando as etapas de compilação, testes e implantação da aplicação. Alternativamente, se os artefatos de build ou pacotes forem armazenados no Amazon S3, eventos de atualização no bucket servem como gatilho."
        ]
    },
    {
        "id": 50,
        "title": "Pergunta 50",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Sua empresa foi contratada para desenvolver um aplicativo móvel resiliente de votação para um próximo prêmio musical que espera ter entre 5 a 20 milhões de espectadores. O aplicativo móvel de votação será amplamente divulgado meses antes do evento, portanto, espera-se que o sistema suporte milhões de mensagens. Você está configurando filas do Amazon SQS para sua arquitetura, que devem receber mensagens com tamanhos entre 20 KB e 200 KB. É possível enviar essas mensagens para o SQS?",
        "options": [
            {
                "letter": "A",
                "text": "Sim, o tamanho máximo da mensagem é 1 MB",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Sim, o tamanho máximo da mensagem é 512 KB",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Não, o tamanho máximo da mensagem é 64 KB",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Não, o tamanho máximo da mensagem é 128 KB",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O tamanho mínimo de uma mensagem no SQS é 1 byte, e o tamanho máximo permitido é 1.048.576 bytes (1 MB), suportando mensagens entre 20 KB e 200 KB."
            },
            {
                "correct": false,
                "text": "Incorreta. O limite máximo de tamanho para mensagens no SQS é 256 KB, não 512 KB."
            },
            {
                "correct": false,
                "text": "Incorreta. O SQS suporta mensagens maiores que 64 KB, com limite máximo de 256 KB."
            },
            {
                "correct": false,
                "text": "Incorreta. O tamanho máximo permitido para mensagens no SQS é maior que 128 KB, sendo 256 KB."
            }
        ],
        "glossary": [
            "Amazon SQS – serviço de filas gerenciado que permite o desacoplamento e a escalabilidade de sistemas distribuídos.",
            "Mensagem – unidade de dados enviada para uma fila SQS.",
            "Tamanho máximo da mensagem – limite máximo permitido por mensagem no Amazon SQS, que é 256 KB."
        ],
        "generalExplanation": [
            "O Amazon SQS suporta mensagens com tamanho máximo de até 256 KB (originalmente 1 MB no padrão antigo). Mensagens de 20 KB a 200 KB estão perfeitamente dentro do limite, podendo ser enviadas e processadas sem necessidade de fragmentação. O SQS é projetado para alta durabilidade, disponibilidade e escalabilidade, garantindo que cada mensagem seja armazenada de forma redundante."
        ],
        "realWorld": [
            "Imagine um aplicativo móvel de votação em tempo real durante um evento com milhares de usuários simultâneos. Cada voto enviado pelo app é colocado em uma fila Amazon SQS, contendo dados como ID do usuário, opção escolhida, timestamp e metadados adicionais — todos dentro do limite de 256 KB. As mensagens são então processadas de forma assíncrona por funções AWS Lambda ou instâncias EC2."
        ]
    },
    {
        "id": 51,
        "title": "Pergunta 51",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Uma empresa mantém uma aplicação altamente disponível que recebe tráfego HTTPS de dispositivos móveis e navegadores web. O principal desenvolvedor deseja configurar o balanceador de carga para rotear o tráfego dos servidores web para smart.com/api e dos dispositivos móveis para smart.com/mobile. Um outro desenvolvedor sugere que essa recomendação anterior não é necessária e que as requisições deveriam ser enviadas para api.smart.com e mobile.smart.com, respectivamente. Quais das seguintes opções de roteamento foram discutidas no caso apresentado? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Baseado em caminho",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Baseado no IP do cliente",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Valor de cookie",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Baseado em host",
                "correct": true
            },
            {
                "letter": "E",
                "text": "Versão do navegador web",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O roteamento baseado em caminho permite criar regras que encaminham o tráfego conforme o caminho da URL, como /api e /mobile."
            },
            {
                "correct": false,
                "text": "Incorreta. O roteamento não é feito com base no endereço IP do cliente."
            },
            {
                "correct": false,
                "text": "Incorreta. Os Application Load Balancers não permitem roteamento baseado em valor de cookie."
            },
            {
                "correct": true,
                "text": "Correta. O roteamento baseado em host permite criar regras que direcionam o tráfego conforme o nome do domínio presente no cabeçalho Host."
            },
            {
                "correct": false,
                "text": "Incorreta. O roteamento não é baseado na versão do navegador do cliente."
            }
        ],
        "glossary": [
            "Application Load Balancer (ALB) – balanceador de carga da camada 7 (HTTP/HTTPS) que oferece roteamento avançado.",
            "Host header – campo do cabeçalho HTTP que contém o nome do domínio para o qual a requisição foi feita.",
            "Roteamento baseado em host – técnica em que o ALB direciona o tráfego para grupos de destino diferentes com base no domínio ou subdomínio.",
            "Roteamento baseado em caminho – técnica que encaminha o tráfego conforme o caminho da URL."
        ],
        "generalExplanation": [
            "O Application Load Balancer (ALB) suporta duas estratégias principais de roteamento: baseado em host (quando diferentes subdomínios apontam para serviços distintos) e baseado em caminho (quando uma única aplicação serve múltiplos endpoints). Essas estratégias permitem que o tráfego seja direcionado dinamicamente para grupos de destino específicos, otimizando a organização e escalabilidade."
        ],
        "realWorld": [
            "Imagine uma startup que desenvolve uma plataforma com frontend web, API e versão móvel. Utilizando um Application Load Balancer, ela pode configurar regras como api.smart.com → ECS Service da API, smart.com/mobile → S3 static website ou CloudFront, e admin.smart.com → instâncias EC2 exclusivas do painel administrativo."
        ]
    },
    {
        "id": 52,
        "title": "Pergunta 52",
        "domain": "Implantação",
        "prompt": "Uma empresa de comércio eletrônico implementou o AWS CodeDeploy como parte de sua estratégia de CI/CD na nuvem AWS. A empresa configurou rollback automático durante a implantação de uma nova versão de sua aplicação principal em instâncias Amazon EC2. O que acontece se a implantação da nova versão falhar?",
        "options": [
            {
                "letter": "A",
                "text": "O CodeDeploy altera os registros de alias do Route 53 para apontar novamente para a implantação verde conhecida como boa e encerra a implantação azul que falhou.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Uma nova implantação da última versão conhecida que funcionava da aplicação é realizada com um novo ID de implantação.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "A última implantação conhecida que funcionava é automaticamente restaurada usando um snapshot armazenado no Amazon S3.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "O AWS CodePipeline promove a implantação mais recente que teve sucesso (status SUCCEEDED) para produção.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O cenário não menciona o uso de implantação blue/green."
            },
            {
                "correct": true,
                "text": "Correta. O AWS CodeDeploy realiza rollback redeployando a revisão anterior como uma nova implantação, gerando um novo ID de implantação."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS CodeDeploy não utiliza snapshots armazenados no Amazon S3 para restaurar implantações."
            },
            {
                "correct": false,
                "text": "Incorreta. O cenário não menciona o uso do AWS CodePipeline."
            }
        ],
        "glossary": [
            "AWS CodeDeploy – serviço gerenciado que automatiza a implantação de aplicações.",
            "Rollback – processo de reverter automaticamente ou manualmente uma implantação para uma versão anterior estável.",
            "Redeploy – ação de implantar novamente uma versão anterior bem-sucedida, criando uma nova implantação com novo ID.",
            "CI/CD – conjunto de práticas que automatizam o build, teste e deploy de software."
        ],
        "generalExplanation": [
            "Quando o AWS CodeDeploy detecta uma falha durante a implantação, ele inicia automaticamente um rollback, que consiste em realizar um redeploy da última versão bem-sucedida da aplicação. Esse processo cria uma nova implantação (novo deployment ID), revertendo o ambiente para o estado estável anterior, o que minimiza o tempo de indisponibilidade (downtime) e mantém a aplicação operacional enquanto a equipe corrige o problema."
        ],
        "realWorld": [
            "Imagine uma aplicação web implantada em um grupo de Auto Scaling de instâncias EC2 usando o AWS CodeDeploy. Durante a implantação de uma nova versão, testes automáticos de saúde (health checks) detectam falhas. O CodeDeploy aciona o rollback automático, executando um redeploy da última versão estável para todas as instâncias, evitando impacto perceptível para os usuários."
        ]
    },
    {
        "id": 53,
        "title": "Pergunta 53",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você trabalha como desenvolvedor em um contrato para o governo na AWS GovCloud. Suas aplicações utilizam o Amazon SQS como serviço de fila de mensagens. Devido a recentes tentativas de invasão, as medidas de segurança foram reforçadas e agora exigem que os dados sejam armazenados em filas criptografadas. Quais das seguintes ações você pode tomar para atender a esses requisitos sem precisar alterar o código existente?",
        "options": [
            {
                "letter": "A",
                "text": "Habilitar a criptografia do SQS com AWS KMS",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Usar o endpoint SSL",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar criptografia do lado do cliente",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Usar o AWS Secrets Manager",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. A criptografia do lado servidor (SSE) do SQS utiliza chaves gerenciadas pelo AWS KMS para proteger o conteúdo das mensagens armazenadas nas filas, sem necessidade de alterar o código da aplicação."
            },
            {
                "correct": false,
                "text": "Incorreta. O uso do endpoint SSL garante criptografia apenas durante a transmissão dos dados (em trânsito), mas não protege os dados armazenados (em repouso)."
            },
            {
                "correct": false,
                "text": "Incorreta. A criptografia do lado do cliente exige que a aplicação criptografe as mensagens antes de enviá-las para a fila, o que implica alterações no código existente."
            },
            {
                "correct": false,
                "text": "Incorreta. O AWS Secrets Manager é um serviço para gerenciar segredos, não é utilizado para criptografar dados armazenados em filas."
            }
        ],
        "glossary": [
            "Amazon SQS – serviço gerenciado de filas que permite desacoplar componentes de aplicações distribuídas.",
            "AWS KMS – serviço da AWS para criação, gerenciamento e controle centralizado de chaves criptográficas.",
            "Criptografia em repouso – técnica que protege dados armazenados, garantindo confidencialidade e conformidade.",
            "Criptografia em trânsito – proteção de dados durante a comunicação entre sistemas por meio de SSL/TLS."
        ],
        "generalExplanation": [
            "A solução correta é habilitar a criptografia do lado servidor (SSE) com AWS KMS para o Amazon SQS. Ao ativar o SSE com KMS, todas as mensagens armazenadas nas filas são automaticamente criptografadas em repouso usando uma Customer Managed Key (CMK) ou uma AWS Managed Key. Essa configuração é transparente para a aplicação — ou seja, não requer alterações no código, pois o SQS gerencia automaticamente a criptografia e a descriptografia das mensagens."
        ],
        "realWorld": [
            "Imagine uma empresa do setor financeiro que processa transações bancárias usando microserviços integrados via Amazon SQS. Por exigências de conformidade (como LGPD ou PCI DSS), todas as mensagens devem ser armazenadas de forma criptografada. O engenheiro de DevOps habilita a criptografia da fila com `aws sqs set-queue-attributes --attributes KmsMasterKeyId=arn:aws:kms:... --queue-url https://sqs...`."
        ]
    },
    {
        "id": 54,
        "title": "Pergunta 54",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um desenvolvedor está migrando uma aplicação local para a AWS Cloud. Atualmente, a aplicação processa uploads de usuários e os armazena em um diretório local no servidor. Todos esses arquivos enviados devem ser salvos e disponibilizados para todas as instâncias em um grupo de Auto Scaling. Como um Associate Developer, qual das seguintes opções você recomendaria para este caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Usar Amazon EBS e configurar a AMI da aplicação para usar um snapshot do mesmo volume EBS ao lançar novas instâncias.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Usar instâncias EC2 com armazenamento do tipo Instance Store e compartilhar os arquivos via software de sincronização de arquivos.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Usar Amazon S3 e modificar o código da aplicação para que todos os uploads sejam enviados diretamente para o S3.",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Usar Amazon EBS como volume de armazenamento e compartilhar os arquivos via software de sincronização de arquivos.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Amazon EBS é vinculado a uma única instância por vez, não permitindo compartilhamento em tempo real entre instâncias."
            },
            {
                "correct": false,
                "text": "Incorreta. O armazenamento Instance Store é efêmero e os dados são perdidos quando a instância é interrompida."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon S3 é um serviço de armazenamento de objetos altamente durável, escalável e disponível globalmente. Ao modificar a aplicação para enviar arquivos diretamente ao S3, todos os arquivos ficam centralizados e acessíveis para todas as instâncias do Auto Scaling."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja possível usar software de sincronização, isso adiciona complexidade significativa."
            }
        ],
        "glossary": [
            "Amazon S3 – serviço de armazenamento de objetos altamente durável, escalável e acessível globalmente.",
            "Amazon EBS – serviço de armazenamento em bloco persistente, anexado a uma única instância EC2 por vez.",
            "Instance Store – armazenamento efêmero e local à instância EC2, cujo conteúdo é perdido quando a instância é parada.",
            "Auto Scaling – serviço que ajusta automaticamente o número de instâncias EC2 em execução."
        ],
        "generalExplanation": [
            "A opção correta é armazenar os uploads dos usuários diretamente no Amazon S3. O S3 oferece armazenamento centralizado, durável e altamente disponível, permitindo que todas as instâncias EC2 (atuando sob um grupo de Auto Scaling) acessem os mesmos arquivos simultaneamente. Essa abordagem elimina a necessidade de sincronização manual entre instâncias, que é complexa e propensa a falhas."
        ],
        "realWorld": [
            "Imagine uma aplicação web escalável executando em várias instâncias EC2 sob Auto Scaling, onde os usuários fazem upload de fotos de perfil. Em vez de armazenar as imagens localmente em cada instância, a aplicação é configurada para enviar os arquivos diretamente ao Amazon S3 via API PutObject. Com isso, todas as instâncias têm acesso consistente aos mesmos arquivos e a aplicação pode escalar horizontalmente."
        ]
    },
    {
        "id": 55,
        "title": "Pergunta 55",
        "domain": "Segurança",
        "prompt": "Você possui uma aplicação web hospedada em uma instância EC2 que realiza requisições GET e PUT para objetos armazenados no Amazon S3 utilizando o SDK para PHP. A equipe de segurança, após a revisão final da aplicação, identificou que sua aplicação utiliza chaves de acesso IAM codificadas diretamente no código para acessar os serviços AWS. Eles recomendam que você adote uma configuração mais segura, que utilize credenciais temporárias sempre que possível. Qual das opções abaixo pode ser utilizada para atender a esse caso de uso?",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar uma Role IAM associada à instância EC2 (IAM Instance Role)",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Codificar as credenciais diretamente no código da aplicação",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Utilizar variáveis de ambiente",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Utilizar o AWS Systems Manager Parameter Store",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Uma Role IAM associada à instância EC2 permite que a aplicação obtenha credenciais temporárias automaticamente via o serviço de metadados da instância."
            },
            {
                "correct": false,
                "text": "Incorreta. Essa prática é altamente insegura."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja uma prática melhor, ainda envolve o uso de credenciais estáticas."
            },
            {
                "correct": false,
                "text": "Incorreta. O Parameter Store é útil para armazenar dados sensíveis, mas para acessá-lo via SDK você ainda precisa de credenciais válidas."
            }
        ],
        "glossary": [
            "IAM Role – entidade da AWS que define um conjunto de permissões e pode ser assumida por recursos.",
            "Instance Profile – contêiner que vincula uma IAM Role a uma instância EC2.",
            "AWS SDK – biblioteca oficial da AWS que simplifica o acesso programático a serviços AWS.",
            "Credenciais temporárias – chaves de acesso válidas por tempo limitado, emitidas automaticamente por uma role IAM."
        ],
        "generalExplanation": [
            "A resposta correta é usar uma IAM Role associada à instância EC2 (IAM Instance Role). Essa é a forma recomendada e mais segura de conceder permissões a aplicações em EC2, pois permite que o AWS SDK recupere automaticamente credenciais temporárias diretamente do serviço de metadados da instância (IMDSv2). Assim, o código pode realizar operações sem armazenar chaves de acesso fixas no código-fonte."
        ],
        "realWorld": [
            "Imagine um desenvolvedor que mantém uma aplicação Python em EC2 responsável por fazer upload de relatórios para o Amazon S3. Ele cria uma IAM Role com a política s3:PutObject e a associa ao Instance Profile da EC2. O AWS SDK for Python (boto3) obtém automaticamente credenciais temporárias e realiza as operações necessárias sem nenhuma configuração manual de chaves."
        ]
    },
    {
        "id": 56,
        "title": "Pergunta 56",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Como Desenvolvedor Full-stack, você está envolvido em todos os aspectos da plataforma de uma empresa, desde o desenvolvimento com PHP e JavaScript até a configuração de bancos de dados NoSQL com o Amazon DynamoDB. Você não se preocupa em receber dados desatualizados do banco e precisa realizar 16 leituras eventualmente consistentes por segundo, com tamanho de 12 KB cada. Quantas unidades de capacidade de leitura (RCUs) você precisa provisionar?",
        "options": [
            {
                "letter": "A",
                "text": "48",
                "correct": false
            },
            {
                "letter": "B",
                "text": "192",
                "correct": false
            },
            {
                "letter": "C",
                "text": "24",
                "correct": true
            },
            {
                "letter": "D",
                "text": "12",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Esta quantidade é maior do que o necessário, resultando em superdimensionamento."
            },
            {
                "correct": false,
                "text": "Incorreta. Este valor é excessivamente alto e não condiz com o cálculo correto."
            },
            {
                "correct": true,
                "text": "Correta. Uma RCU representa duas leituras eventualmente consistentes por segundo para um item de até 4 KB. Como cada item tem 12 KB, são necessárias 3 RCUs para duas leituras por segundo (12 KB / 4 KB = 3). Para 16 leituras por segundo, o cálculo é 3 * (16 / 2) = 24 RCUs."
            },
            {
                "correct": false,
                "text": "Incorreta. Este valor subestima a capacidade necessária, considerando apenas metade da quantidade correta."
            }
        ],
        "glossary": [
            "Unidade de Capacidade de Leitura (RCU) – métrica usada pelo Amazon DynamoDB para determinar a capacidade de leitura provisionada.",
            "Leitura Eventualmente Consistente – tipo de leitura em que os dados retornados podem não refletir imediatamente as últimas atualizações.",
            "Item – unidade básica de dados armazenada em uma tabela do DynamoDB."
        ],
        "generalExplanation": [
            "O cálculo correto das RCUs deve considerar o tamanho dos itens e o tipo de consistência da leitura. Cada RCU permite 2 leituras eventualmente consistentes por segundo para itens de até 4 KB. Como o item possui 12 KB, cada leitura do item consome 3 RCUs. Para 2 leituras/s, são necessárias 3 RCUs. Escalando para 16 leituras/s: (16 ÷ 2) × 3 = 24 RCUs."
        ],
        "realWorld": [
            "Em uma aplicação serverless com AWS Lambda + DynamoDB, o desenvolvedor precisa garantir que a tabela possua capacidade provisionada suficiente para lidar com picos de leitura. Suponha uma API que armazene documentos de 12 KB e atenda 16 requisições de leitura por segundo. Ao aplicar o cálculo correto, a equipe define 24 RCUs, garantindo que o DynamoDB consiga atender todas as requisições sem causar throttling."
        ]
    },
    {
        "id": 57,
        "title": "Pergunta 57",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Um desenvolvedor está configurando um Application Load Balancer (ALB) para direcionar o tráfego para instâncias EC2 da aplicação e funções Lambda. Quais das seguintes características do ALB podem ser consideradas corretas? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Se você especificar os alvos usando endereços IP, o tráfego é roteado para as instâncias usando o endereço IP privado primário.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Um ALB possui três tipos possíveis de alvo: Instância, IP e Lambda.",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Um ALB possui três tipos possíveis de alvo: Hostname, IP e Lambda.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Não é possível especificar endereços IP publicamente roteáveis para um ALB.",
                "correct": true
            },
            {
                "letter": "E",
                "text": "Se você especificar os alvos usando o ID da instância, o tráfego é roteado para as instâncias usando qualquer endereço IP privado de uma ou mais interfaces de rede.",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Ao especificar alvos por endereços IP, o tráfego pode ser roteado para qualquer endereço IP privado associado a uma ou mais interfaces de rede da instância."
            },
            {
                "correct": true,
                "text": "Correta. Ao criar um grupo de destino, você define o tipo de alvo, que pode ser Instância, IP ou Lambda."
            },
            {
                "correct": false,
                "text": "Incorreta. O ALB não suporta 'Hostname' como tipo de alvo."
            },
            {
                "correct": true,
                "text": "Correta. Quando o tipo de alvo é IP, somente endereços IP privados dentro de blocos CIDR específicos podem ser usados."
            },
            {
                "correct": false,
                "text": "Incorreta. Quando você especifica os alvos usando o ID da instância, o tráfego é roteado utilizando o endereço IP privado primário da interface de rede principal."
            }
        ],
        "glossary": [
            "Application Load Balancer (ALB) – serviço gerenciado da AWS que distribui tráfego HTTP/HTTPS entre múltiplos destinos.",
            "Target Group – conjunto de recursos de backend para os quais o ALB encaminha o tráfego.",
            "Target Type – define como o tráfego é roteado dentro do grupo de destino, podendo ser Instance, IP ou Lambda.",
            "Private IP Address – endereço IP usado dentro da VPC privada, inacessível diretamente pela internet."
        ],
        "generalExplanation": [
            "O Application Load Balancer (ALB) suporta três tipos de alvos nos grupos de destino: Instance (tráfego roteado para o IP privado primário), IP (permite rotear para qualquer endereço IP privado dentro da VPC), e Lambda (permite invocar diretamente funções AWS Lambda). O ALB não aceita endereços IP públicos como destinos no modo IP, restringindo-se a IPs privados pertencentes aos blocos CIDR da VPC."
        ],
        "realWorld": [
            "Em uma arquitetura de microserviços, um time pode configurar um ALB para distribuir requisições entre múltiplas instâncias EC2 e funções Lambda. As instâncias EC2 hospedam o front-end e a API principal (registradas por ID de instância), enquanto as funções Lambda processam tarefas event-driven. Em outro cenário, uma única instância EC2 pode hospedar várias aplicações em portas diferentes; ao registrar os alvos por endereços IP privados, o ALB direciona o tráfego corretamente."
        ]
    },
    {
        "id": 58,
        "title": "Pergunta 58",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Para uma aplicação que armazena informações pessoais de saúde (PHI) em uma instância Amazon RDS para MySQL criptografada, um desenvolvedor deseja melhorar o desempenho fazendo cache dos dados acessados com frequência e adicionando a capacidade de ordenar ou classificar esses conjuntos de dados em cache. Qual é a melhor abordagem para atender a esses requisitos, considerando a restrição de que as PHIs permaneçam criptografadas o tempo todo?",
        "options": [
            {
                "letter": "A",
                "text": "Migrar os dados acessados com frequência para o DynamoDB Accelerator (DAX), que possui criptografia habilitada.",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Armazenar os dados acessados com frequência em uma instância Amazon ElastiCache para Memcached com criptografia habilitada.",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Migrar os dados acessados com frequência para um armazenamento local (Instance Store) em uma instância EC2 com criptografia habilitada.",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Armazenar os dados acessados com frequência em uma instância Amazon ElastiCache para Redis com criptografia habilitada para dados em trânsito e em repouso.",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O DAX é um serviço de cache compatível com DynamoDB e não pode ser usado como cache para uma instância RDS MySQL."
            },
            {
                "correct": false,
                "text": "Incorreta. O Memcached não suporta estruturas de dados avançadas nem operações como ordenação ou classificação."
            },
            {
                "correct": false,
                "text": "Incorreta. O armazenamento local do EC2 (Instance Store) oferece armazenamento temporário e não é adequado para cache seguro de dados sensíveis."
            },
            {
                "correct": true,
                "text": "Correta. O Amazon ElastiCache para Redis é um serviço de estrutura de dados em memória que suporta estruturas avançadas como conjuntos ordenados, permitindo ordenação e classificação, além de oferecer criptografia em trânsito e em repouso."
            }
        ],
        "glossary": [
            "PHI – dados pessoais de saúde que exigem proteção rigorosa e conformidade com regulamentações.",
            "Amazon RDS – serviço gerenciado de bancos de dados relacionais.",
            "Amazon ElastiCache para Redis – serviço gerenciado de cache em memória com suporte a estruturas de dados avançadas.",
            "DynamoDB Accelerator (DAX) – cache otimizado exclusivamente para DynamoDB.",
            "EC2 Instance Store – armazenamento temporário associado fisicamente à instância EC2."
        ],
        "generalExplanation": [
            "A escolha correta é o Amazon ElastiCache para Redis, pois ele atende simultaneamente aos requisitos de alta performance, funcionalidade de ordenação e segurança de dados sensíveis (PHI). O Redis é ideal para cenários em que se deseja melhorar a performance de leitura, executar operações de ordenação utilizando sorted sets (ZSETs), e manter conformidade com padrões de segurança por meio de criptografia em trânsito e em repouso nativas."
        ],
        "realWorld": [
            "Imagine uma aplicação de telemedicina que armazena dados de pacientes (como diagnósticos e resultados de exames) em um banco Amazon RDS. Para reduzir a latência das consultas, o time implementa o ElastiCache para Redis como camada de cache. Dados de consultas recentes são armazenados no Redis, estruturas sorted sets permitem exibir resultados clínicos ordenados por data, e toda a comunicação é feita via HTTPS com dados criptografados em repouso."
        ]
    },
    {
        "id": 59,
        "title": "Pergunta 59",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Seu aplicativo móvel precisa realizar chamadas de API para o DynamoDB. Você não quer armazenar as chaves de acesso e secretas da AWS nos dispositivos móveis e precisa que todas as chamadas ao DynamoDB sejam feitas com uma identidade diferente para cada dispositivo móvel. Qual dos seguintes serviços permite que você alcance esse objetivo?",
        "options": [
            {
                "letter": "A",
                "text": "Cognito Identity Pools",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Cognito User Pools",
                "correct": false
            },
            {
                "letter": "C",
                "text": "IAM",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Cognito Sync",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O Amazon Cognito Identity Pools fornece credenciais temporárias da AWS para usuários autenticados e não autenticados, permitindo que cada dispositivo móvel tenha uma identidade única para acessar serviços AWS."
            },
            {
                "correct": false,
                "text": "Incorreta. O Amazon Cognito User Pools serve para autenticar usuários, fornecendo funcionalidades de cadastro e login, mas não fornece credenciais temporárias para acessar outros serviços AWS."
            },
            {
                "correct": false,
                "text": "Incorreta. Criar um usuário IAM para cada dispositivo móvel não é uma prática recomendada nem escalável."
            },
            {
                "correct": false,
                "text": "Incorreta. O Cognito Sync é usado para sincronizar dados de perfil do usuário entre dispositivos, mas não fornece credenciais para acessar serviços AWS."
            }
        ],
        "glossary": [
            "Amazon Cognito User Pools – serviço da AWS voltado para autenticação de usuários.",
            "Amazon Cognito Identity Pools – serviço que gera credenciais temporárias da AWS para permitir que usuários autenticados acessem recursos AWS.",
            "IAM – serviço que gerencia usuários, papéis e políticas de permissão.",
            "Cognito Sync – serviço usado para sincronizar dados de aplicativo entre dispositivos."
        ],
        "generalExplanation": [
            "A melhor solução para permitir que um aplicativo móvel acesse o DynamoDB de forma segura é o uso do Amazon Cognito Identity Pools. Ele fornece credenciais temporárias e exclusivas para cada usuário ou dispositivo, emitidas dinamicamente pelo AWS STS, permitindo que o aplicativo execute chamadas autenticadas ao DynamoDB sem armazenar chaves permanentes."
        ],
        "realWorld": [
            "Imagine um aplicativo móvel de e-commerce que consulta o estoque em uma tabela DynamoDB. O usuário faz login via Cognito User Pool, e o Cognito Identity Pool associa essa identidade autenticada a uma função IAM com permissões específicas no DynamoDB. O aplicativo recebe credenciais temporárias do STS e pode consultar ou atualizar dados no DynamoDB sem armazenar chaves fixas localmente."
        ]
    },
    {
        "id": 60,
        "title": "Pergunta 60",
        "domain": "Implantação",
        "prompt": "Sua empresa está em processo de adoção de uma cultura DevOps e está migrando todos os seus recursos on-premises para a nuvem utilizando arquiteturas serverless e implantações automatizadas. Você criou um template do AWS CloudFormation em YAML que utiliza uma função AWS Lambda para buscar arquivos HTML no GitHub e colocá-los em um bucket do Amazon S3 que você especificar. Quais dos seguintes comandos da AWS CLI você pode usar para fazer upload de funções AWS Lambda e templates AWS CloudFormation para a AWS?",
        "options": [
            {
                "letter": "A",
                "text": "cloudformation package e cloudformation deploy",
                "correct": true
            },
            {
                "letter": "B",
                "text": "cloudformation zip e cloudformation upload",
                "correct": false
            },
            {
                "letter": "C",
                "text": "cloudformation package e cloudformation upload",
                "correct": false
            },
            {
                "letter": "D",
                "text": "cloudformation zip e cloudformation deploy",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. O comando 'cloudformation package' empacota os artefatos locais referenciados no template CloudFormation e os envia para um bucket S3. O comando 'cloudformation deploy' implanta o template CloudFormation especificado."
            },
            {
                "correct": false,
                "text": "Incorreta. Nenhum dos comandos 'cloudformation zip' ou 'cloudformation upload' existem na AWS CLI."
            },
            {
                "correct": false,
                "text": "Incorreta. O comando 'cloudformation upload' não existe na AWS CLI."
            },
            {
                "correct": false,
                "text": "Incorreta. O comando 'cloudformation zip' não existe na AWS CLI."
            }
        ],
        "glossary": [
            "AWS Lambda – serviço serverless da AWS que executa código sob demanda em resposta a eventos.",
            "AWS CloudFormation – serviço que permite definir e provisionar recursos AWS automaticamente através de templates declarativos.",
            "AWS CLI – interface de linha de comando usada para gerenciar serviços AWS.",
            "cloudformation package – comando da AWS CLI que empacota artefatos locais e os envia para um bucket S3.",
            "cloudformation deploy – comando que implanta ou atualiza stacks CloudFormation."
        ],
        "generalExplanation": [
            "A forma correta de empacotar e implantar templates CloudFormation que contêm funções AWS Lambda ou artefatos locais é utilizando os comandos `cloudformation package` e `cloudformation deploy`. O `package` empacota os arquivos locais e faz o upload para um bucket S3, gerando um novo template atualizado. O `deploy` usa o template empacotado para implantar ou atualizar o stack."
        ],
        "realWorld": [
            "Em uma migração para arquitetura serverless, uma equipe de desenvolvimento utiliza CloudFormation para definir toda a infraestrutura. Durante o pipeline de CI/CD, o processo automatizado executa `aws cloudformation package` e `aws cloudformation deploy`, garantindo entregas contínuas e reprodutíveis, reduzindo erros manuais e garantindo que cada ambiente tenha a mesma configuração."
        ]
    },
    {
        "id": 61,
        "title": "Pergunta 61",
        "domain": "Desenvolvimento com serviços AWS",
        "prompt": "Você está se preparando para um evento para apresentar sua skill Alexa escrita em JavaScript. Durante os testes dos comandos de ativação por voz, percebe que algumas intents não estão sendo invocadas corretamente e está tendo dificuldade para entender o que está acontecendo. Você incluiu o código console.log(JSON.stringify(this.event)) na esperança de obter mais detalhes sobre a requisição para sua skill Alexa. Você gostaria que os logs fossem armazenados em um bucket do Amazon S3 chamado MyAlexaLog. Como você deve proceder para alcançar esse objetivo? (Selecione três.)",
        "options": [
            {
                "letter": "A",
                "text": "Utilizar o AWS Glue para extrair os logs do CloudWatch e armazená-los no bucket S3 MyAlexaLog",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Utilizar o Amazon Kinesis Data Firehose para capturar os logs do CloudWatch e entregá-los no bucket S3 MyAlexaLog",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Configurar uma integração direta do CloudWatch Logs com o bucket S3 MyAlexaLog para exportação automática dos logs",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Ativar o modo de depuração (debug) na Alexa Developer Console e definir o bucket S3 MyAlexaLog como destino para os logs",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Configurar uma função Lambda para processar os logs do CloudWatch e enviá-los ao bucket S3 MyAlexaLog",
                "correct": true
            },
            {
                "letter": "F",
                "text": "Exportar manualmente os logs do CloudWatch para o bucket S3 MyAlexaLog usando a funcionalidade de exportação de logs",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O AWS Glue é um serviço de ETL para preparação de dados e não é indicado para capturar ou armazenar logs diretamente do CloudWatch em S3."
            },
            {
                "correct": true,
                "text": "Correta. O Kinesis Data Firehose pode ser configurado para receber logs do CloudWatch e entregá-los automaticamente em um bucket S3."
            },
            {
                "correct": false,
                "text": "Incorreta. O CloudWatch Logs não possui integração nativa para enviar logs diretamente para um bucket S3."
            },
            {
                "correct": false,
                "text": "Incorreta. A Alexa Developer Console não tem funcionalidade para definir diretamente um bucket S3 como destino de logs."
            },
            {
                "correct": true,
                "text": "Correta. É possível criar uma função Lambda acionada pelos logs do CloudWatch para processá-los e armazená-los no bucket S3."
            },
            {
                "correct": true,
                "text": "Correta. O CloudWatch Logs permite exportar os logs manualmente para um bucket S3, porém não é automático nem em tempo real."
            }
        ],
        "glossary": [
            "Amazon CloudWatch Logs – serviço que coleta, monitora e armazena logs de aplicações e recursos AWS em tempo real.",
            "AWS Lambda – serviço de computação serverless que executa código em resposta a eventos.",
            "Amazon Kinesis Data Firehose – serviço gerenciado para ingestão e entrega contínua de dados em destinos como Amazon S3.",
            "AWS Glue – serviço de ETL usado para preparação e catalogação de dados em pipelines analíticos."
        ],
        "generalExplanation": [
            "O Amazon CloudWatch Logs não possui integração nativa para exportar automaticamente logs diretamente para o Amazon S3. Para armazenar logs em um bucket S3, há três abordagens viáveis: exportação manual utilizando o console do CloudWatch, automação com uma função Lambda acionada por eventos de log, e uso do Kinesis Data Firehose para capturar logs em tempo real e entregá-los no S3."
        ],
        "realWorld": [
            "Em um cenário prático, um desenvolvedor que mantém uma skill Alexa hospedada na AWS pode usar o CloudWatch Logs para registrar eventos. Para armazenar e analisar esses logs, ele pode criar uma função Lambda que processe os logs e os grave no Amazon S3, ou configurar um Kinesis Data Firehose para transmitir os logs do CloudWatch diretamente para o S3 de forma contínua."
        ]
    },
    {
        "id": 62,
        "title": "Pergunta 62",
        "domain": "Segurança",
        "prompt": "Como parte das normas internas, você deve garantir que todas as comunicações com o Amazon S3 sejam criptografadas. Para qual dos seguintes mecanismos de criptografia uma requisição será rejeitada caso a conexão não utilize HTTPS?",
        "options": [
            {
                "letter": "A",
                "text": "SSE-S3 (Server-Side Encryption with Amazon S3-Managed Keys)",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Criptografia do Lado Cliente (Client-Side Encryption)",
                "correct": false
            },
            {
                "letter": "C",
                "text": "SSE-KMS (Server-Side Encryption with AWS KMS Keys)",
                "correct": false
            },
            {
                "letter": "D",
                "text": "SSE-C (Server-Side Encryption with Customer-Provided Keys)",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. A SSE-S3 não exige que a conexão seja via HTTPS para aceitar a requisição."
            },
            {
                "correct": false,
                "text": "Incorreta. Na criptografia do lado cliente, a comunicação pode ocorrer via HTTP ou HTTPS."
            },
            {
                "correct": false,
                "text": "Incorreta. A SSE-KMS não exige que a conexão seja via HTTPS para que a requisição seja aceita."
            },
            {
                "correct": true,
                "text": "Correta. A SSE-C exige que a chave de criptografia seja enviada junto com a requisição. O Amazon S3 rejeita qualquer requisição feita via HTTP para proteger a chave, tornando o uso de HTTPS obrigatório."
            }
        ],
        "glossary": [
            "SSE-C – método de criptografia do Amazon S3 em que o cliente fornece sua própria chave de criptografia.",
            "Client-Side Encryption – abordagem em que os dados são criptografados antes do envio ao S3.",
            "SSE-KMS – criptografia gerenciada pelo AWS Key Management Service.",
            "SSE-S3 – criptografia gerenciada automaticamente pelo Amazon S3."
        ],
        "generalExplanation": [
            "A alternativa correta é o SSE-C, pois neste método o cliente fornece manualmente a chave de criptografia junto com a requisição ao Amazon S3. Como essa chave não é armazenada pela AWS e viaja junto com a requisição, o S3 exige que todas as operações usem HTTPS, garantindo que a chave não possa ser interceptada em trânsito."
        ],
        "realWorld": [
            "Imagine uma empresa de saúde que armazena relatórios clínicos contendo PHI em um bucket S3. Por exigências de compliance, a equipe de segurança decide usar SSE-C, mantendo total controle das chaves. A aplicação cliente gera e gerencia suas próprias chaves, cada requisição ao S3 inclui a chave correspondente, e o tráfego ocorre obrigatoriamente via HTTPS, evitando exposição da chave durante a transmissão."
        ]
    },
    {
        "id": 63,
        "title": "Pergunta 63",
        "domain": "Segurança",
        "prompt": "Você está planejando construir um conjunto de instâncias EC2 otimizadas para EBS para lidar com a carga da sua nova aplicação. Devido a requisitos de conformidade de segurança, sua organização deseja que quaisquer strings secretas usadas na aplicação sejam criptografadas para evitar a exposição dos valores em texto claro. A solução requer que os eventos de descriptografia sejam auditados e que as chamadas de API sejam simples. Como isso pode ser alcançado? (Selecione duas.)",
        "options": [
            {
                "letter": "A",
                "text": "Armazenar o segredo como PlainText no AWS Systems Manager Parameter Store",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Auditar usando AWS CloudTrail",
                "correct": true
            },
            {
                "letter": "C",
                "text": "Armazenar o segredo como SecureString no AWS Systems Manager Parameter Store",
                "correct": true
            },
            {
                "letter": "D",
                "text": "Criptografar primeiro com AWS KMS e depois armazenar no Parameter Store",
                "correct": false
            },
            {
                "letter": "E",
                "text": "Auditar usando SSM Audit Trail",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. Armazenar segredos em texto simples expõe os valores sensíveis."
            },
            {
                "correct": true,
                "text": "Correta. O AWS CloudTrail registra todas as chamadas de API feitas para serviços AWS, permitindo auditoria detalhada dos eventos de descriptografia."
            },
            {
                "correct": true,
                "text": "Correta. O Parameter Store permite armazenar parâmetros do tipo SecureString, que são automaticamente criptografados usando AWS KMS."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora funcione, exige chamadas adicionais de API para descriptografar manualmente."
            },
            {
                "correct": false,
                "text": "Incorreta. 'SSM Audit Trail' não é um serviço ou funcionalidade existente da AWS."
            }
        ],
        "glossary": [
            "AWS Systems Manager Parameter Store – serviço da AWS para gerenciamento centralizado de configurações e segredos.",
            "SecureString – tipo de parâmetro no Parameter Store que armazena dados criptografados usando AWS KMS.",
            "AWS KMS – serviço que cria e gerencia chaves de criptografia.",
            "AWS CloudTrail – serviço que registra e monitora todas as chamadas de API feitas em uma conta AWS."
        ],
        "generalExplanation": [
            "A melhor solução para garantir segurança, auditoria e simplicidade operacional é armazenar os segredos como SecureString no AWS Systems Manager Parameter Store. Esse tipo de parâmetro utiliza automaticamente o AWS KMS para criptografar os dados em repouso, e a recuperação dos segredos pode ser feita com uma única chamada de API. Para atender aos requisitos de auditoria, o AWS CloudTrail deve ser habilitado para registrar todas as chamadas de API."
        ],
        "realWorld": [
            "Em um ambiente corporativo, uma equipe de desenvolvimento pode precisar armazenar credenciais de banco de dados ou chaves de API usadas por aplicações em instâncias EC2 ou funções Lambda. Ao usar o Parameter Store com parâmetros SecureString, os segredos permanecem criptografados, enquanto o CloudTrail permite que o time de segurança audite quem acessou essas informações e quando."
        ]
    },
    {
        "id": 64,
        "title": "Pergunta 64",
        "domain": "Solução de problemas e otimização",
        "prompt": "Você está trabalhando em um projeto que possui mais de 100 dependências. Toda vez que o AWS CodeBuild executa uma etapa de build, ele precisa resolver dependências Java a partir de repositórios externos Ivy, o que leva muito tempo. Seu gerente quer acelerar esse processo no AWS CodeBuild. Qual das opções a seguir ajudará a acelerar esse processo com o mínimo esforço?",
        "options": [
            {
                "letter": "A",
                "text": "Usar instâncias EC2 com armazenamento Instance Store para facilitar o cache interno das dependências",
                "correct": false
            },
            {
                "letter": "B",
                "text": "Reduzir o número de dependências",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Enviar todas as dependências como parte do código-fonte",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Fazer cache das dependências no Amazon S3",
                "correct": true
            }
        ],
        "explanations": [
            {
                "correct": false,
                "text": "Incorreta. O Instance Store é temporário e não é aplicável para o cache de dependências no CodeBuild."
            },
            {
                "correct": false,
                "text": "Incorreta. Embora seja uma prática ideal, muitas vezes você não tem controle sobre isso."
            },
            {
                "correct": false,
                "text": "Incorreta. Embutir todas as dependências no código-fonte não é uma boa prática e aumentará o tempo total do build."
            },
            {
                "correct": true,
                "text": "Correta. O AWS CodeBuild permite configurar cache usando o Amazon S3 para armazenar dependências que não mudam frequentemente, reduzindo o tempo gasto baixando dependências em builds subsequentes."
            }
        ],
        "glossary": [
            "AWS CodeBuild – serviço gerenciado de CI/CD da AWS que compila código-fonte, executa testes e gera artefatos.",
            "Cache – mecanismo que armazena dados temporariamente para evitar downloads ou cálculos repetidos.",
            "Amazon S3 – serviço de armazenamento de objetos durável e escalável, ideal para armazenar caches entre execuções de build.",
            "Dependências Java – bibliotecas externas necessárias para compilar e executar aplicações Java."
        ],
        "generalExplanation": [
            "A solução correta é utilizar o cache de dependências no Amazon S3 dentro do AWS CodeBuild. O CodeBuild permite configurar cache em S3 para armazenar dependências resolvidas e artefatos entre execuções. Assim, quando um novo build é iniciado, as bibliotecas já baixadas de repositórios remotos são reutilizadas, reduzindo significativamente o tempo de compilação."
        ],
        "realWorld": [
            "Imagine uma equipe DevOps que mantém uma pipeline CI/CD com AWS CodePipeline + CodeBuild para compilar múltiplos microserviços Java. Cada build precisa baixar centenas de dependências de repositórios externos. Ao configurar o cache no Amazon S3, as dependências baixadas no primeiro build são armazenadas e reaproveitadas pelos builds subsequentes, resultando em redução de tempo de build de até 70%."
        ]
    },
    {
        "id": 65,
        "title": "Pergunta 65",
        "domain": "Implantação",
        "prompt": "Você migrou sua infraestrutura local para a AWS e está configurando ambientes de implantação do AWS Elastic Beanstalk para produção, desenvolvimento e testes. Você configurou o ambiente de produção para usar uma implantação do tipo rolling (implantação gradual) para evitar que sua aplicação fique indisponível para os usuários. Para os ambientes de desenvolvimento e teste, você deseja implantar rapidamente e não se preocupa com períodos de indisponibilidade. Quais das seguintes políticas de implantação atendem às suas necessidades para desenvolvimento e teste?",
        "options": [
            {
                "letter": "A",
                "text": "All at once (Tudo de uma vez)",
                "correct": true
            },
            {
                "letter": "B",
                "text": "Rolling with additional batches (Implantação gradual com lotes adicionais)",
                "correct": false
            },
            {
                "letter": "C",
                "text": "Rolling (Implantação gradual)",
                "correct": false
            },
            {
                "letter": "D",
                "text": "Immutable (Imutável)",
                "correct": false
            }
        ],
        "explanations": [
            {
                "correct": true,
                "text": "Correta. Este é o método de implantação mais rápido, adequado quando se pode aceitar uma breve indisponibilidade."
            },
            {
                "correct": false,
                "text": "Incorreta. Este método lança um lote extra de instâncias, garantindo capacidade total, mas aumenta o tempo de implantação."
            },
            {
                "correct": false,
                "text": "Incorreta. A implantação gradual mantém a maior parte da capacidade disponível, mas o tempo total é maior."
            },
            {
                "correct": false,
                "text": "Incorreta. O método imutável é mais lento, ideal para produção."
            }
        ],
        "glossary": [
            "Elastic Beanstalk – serviço gerenciado da AWS que simplifica a implantação de aplicações web.",
            "Rolling deployment – método que atualiza a aplicação em lotes sequenciais de instâncias.",
            "Immutable deployment – estratégia que cria novas instâncias com a nova versão da aplicação.",
            "All at once – política que atualiza todas as instâncias simultaneamente, com possível indisponibilidade."
        ],
        "generalExplanation": [
            "Em ambientes de desenvolvimento e teste, onde o foco é agilidade e simplicidade, a política de implantação 'All at once' é a escolha mais adequada. Essa política atualiza todas as instâncias simultaneamente, resultando em implantação mais rápida, ainda que com curtos períodos de indisponibilidade. Outras opções são recomendadas para ambientes de produção, onde a alta disponibilidade é crítica."
        ],
        "realWorld": [
            "Em um time de desenvolvimento que utiliza o AWS Elastic Beanstalk, é comum manter ambientes separados para desenvolvimento, teste e produção. Nos ambientes de desenvolvimento e teste, o objetivo é validar novas funcionalidades e corrigir bugs rapidamente, e pequenas interrupções são aceitáveis. Assim, a política 'All at once' acelera o ciclo de feedback e simplifica a implantação."
        ]
    }
];
