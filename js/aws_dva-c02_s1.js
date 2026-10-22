const originalQuestions = [
    {
        id: 1,
        title: "Criptografia no KMS",
        domain: "Segurança",
        prompt: "Qual das alternativas a seguir melhor descreve como funciona a criptografia no KMS?",
        options: [
            { letter: "A", text: "O KMS gera uma nova CMK para cada chamada de Encrypt e criptografa os dados com ela.", correct: false },
            { letter: "B", text: "O KMS gerencia as CMKs e gera chaves de dados que os clientes usam para criptografar localmente seus dados, protegendo as CMKs internamente.", correct: true },
            { letter: "C", text: "O KMS envia a CMK para o cliente, que realiza a criptografia e depois apaga a CMK.", correct: false },
            { letter: "D", text: "O KMS recebe a CMK do cliente a cada chamada de Encrypt e criptografa os dados com ela.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O KMS não gera uma nova CMK a cada chamada de criptografia. Em vez disso, utiliza uma CMK existente para criptografar os dados. Embora o KMS possa rotacionar automaticamente as chaves para melhorar a segurança, ele não cria uma nova CMK para cada operação de criptografia." },
            { correct: true, text: "Correta. O KMS gerencia as chaves mestras do cliente (CMKs) e gera chaves de dados (data keys) que são usadas pelos clientes para criptografar e descriptografar seus dados localmente. O KMS protege as CMKs internamente e não recebe os dados dos clientes para criptografá-los diretamente." },
            { correct: false, text: "Incorreta. O KMS nunca envia a chave mestra (CMK) para o cliente. Toda a criptografia e descriptografia são realizadas internamente no KMS, garantindo que a chave nunca seja exposta fora do serviço." },
            { correct: false, text: "Incorreta. Embora seja possível importar uma CMK para o KMS, isso é feito uma única vez. Após a importação, o KMS gerencia a chave e realiza as operações de criptografia e descriptografia. Não é necessário enviar a CMK a cada chamada de criptografia." }
        ],
        glossary: [
            "KMS (Key Management Service): serviço gerenciado da AWS que cria, gerencia e controla chaves criptográficas usadas para proteger dados.",
            "CMK (Customer Master Key): chave mestra gerenciada pelo KMS, usada para gerar chaves de dados e realizar operações criptográficas.",
            "Chave de dados (Data Key): chave gerada pelo KMS para criptografar e descriptografar dados localmente, mantendo a CMK protegida.",
            "Criptografia local: criptografia de dados realizada no ambiente do cliente utilizando chaves fornecidas pelo KMS, sem enviar os dados para o KMS para criptografia direta.",
            "Rotação de chaves: prática de substituir periodicamente chaves criptográficas para aumentar a segurança.",
            "Importação de chave: processo de trazer uma chave externa para ser gerenciada pelo KMS internamente."
        ],
        generalExplanation: [
            "O <strong>AWS KMS</strong> gerencia as CMKs e gera <strong>chaves de dados</strong> que são utilizadas pelos clientes para criptografar/descriptografar informações localmente.",
            "A <strong>CMK nunca sai do KMS</strong>, garantindo que as chaves mestras permaneçam protegidas.",
            "Essa abordagem combina <strong>segurança centralizada</strong> (controle das CMKs no KMS) com <strong>eficiência operacional</strong> (criptografia local pelos clientes).",
            "Conceitos incorretos incluem: gerar uma nova CMK a cada operação ou enviar a CMK para o cliente, práticas que <strong>não ocorrem</strong> por questões de segurança."
        ],
        realWorld: [
            "Uma aplicação serverless que grava dados sensíveis no <strong>DynamoDB ou S3</strong> pode usar o KMS para gerar chaves de dados, criptografando os dados localmente antes do armazenamento.",
            "Isso garante que a <strong>CMK permaneça segura</strong>, facilita <strong>gerenciamento centralizado</strong> e permite <strong>rotação automática de chaves</strong>.",
            "Equipes de CI/CD podem integrar o KMS para proteger <strong>segredos e credenciais</strong> durante implantações, evitando exposição acidental e garantindo conformidade com políticas de segurança corporativas.",
            "Essa prática é essencial em ambientes que exigem <strong>alta segurança e conformidade</strong>, mantendo dados e chaves protegidos de forma consistente."
        ]
    },
    {
        id: 2,
        title: "Política de roteamento Route 53 - Geolocation",
        domain: "Segurança",
        prompt: "Uma empresa de mídia criou um aplicativo de streaming de vídeo e deseja que seus usuários brasileiros sejam atendidos pelos servidores localizados no Brasil. Usuários de outras regiões do mundo não devem conseguir acessar esses servidores por meio de consultas DNS. Qual política de roteamento do Route 53 atende a esse requisito?",
        options: [
            { letter: "A", text: "Geolocation (Geolocalização)", correct: true },
            { letter: "B", text: "Latency (Latência)", correct: false },
            { letter: "C", text: "Failover (Failover)", correct: false },
            { letter: "D", text: "Weighted (Ponderado)", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A política Geolocation permite direcionar o tráfego com base na localização geográfica de onde as consultas DNS se originam, possibilitando que apenas usuários brasileiros acessem os servidores no Brasil, enquanto bloqueia ou redireciona usuários de outras regiões." },
            { correct: false, text: "Incorreta. A política Latency roteia o tráfego para a região AWS que oferece a menor latência para o usuário, visando melhorar o desempenho, mas não restringe o acesso por localização geográfica." },
            { correct: false, text: "Incorreta. A política Failover direciona o tráfego para um recurso principal quando ele está saudável e para um recurso secundário quando o principal está indisponível, não controlando o acesso por localização geográfica." },
            { correct: false, text: "Incorreta. A política Weighted permite distribuir o tráfego entre múltiplos recursos em proporções definidas, mas não restringe o acesso com base na localização geográfica dos usuários." }
        ],
        glossary: [
            "Route 53: serviço de DNS gerenciado da AWS que traduz nomes de domínio em endereços IP e permite roteamento inteligente do tráfego.",
            "Geolocation (Geolocalização): política de roteamento do Route 53 que direciona tráfego com base na localização geográfica do usuário que faz a consulta DNS.",
            "Weighted (Ponderado): política que distribui o tráfego entre múltiplos recursos em proporções definidas.",
            "Failover: política que direciona tráfego para um recurso principal enquanto está saudável e para um secundário em caso de falha.",
            "Latency (Latência): política que direciona o tráfego para a região AWS com menor latência para o usuário.",
            "DNS (Domain Name System): sistema que traduz nomes de domínio legíveis para endereços IP numéricos.",
            "Consulta DNS: pedido enviado para o serviço DNS para resolver um nome de domínio em um endereço IP."
        ],
        generalExplanation: [
            "A política <strong>Geolocation</strong> do Route 53 permite <strong>restringir o acesso a servidores com base na localização geográfica</strong> do usuário, identificando a origem da consulta DNS.",
            "Com Geolocation, é possível <strong>direcionar usuários brasileiros para servidores no Brasil</strong> e bloquear ou redirecionar usuários de outras regiões.",
            "Outras políticas como <strong>Weighted, Failover e Latency</strong> não oferecem controle geográfico:",
            "Weighted → balanceamento proporcional de tráfego",
            "Failover → alta disponibilidade entre primário e secundário",
            "Latency → otimização de desempenho com menor latência"
        ],
        realWorld: [
            "Em um <strong>aplicativo de streaming de vídeo</strong>, o desenvolvedor pode garantir que usuários brasileiros sejam atendidos por servidores localizados no Brasil, melhorando a <strong>experiência com menor latência</strong> e cumprindo requisitos regulatórios locais.",
            "Usuários de outras regiões podem ser impedidos de acessar os servidores brasileiros, protegendo recursos e otimizando custos.",
            "Essa configuração também é útil para <strong>compliance com políticas de soberania de dados</strong>, permitindo segmentação geográfica do tráfego sem necessidade de mudanças complexas na aplicação ou infraestrutura.",
            "Facilita a <strong>manutenção e escalabilidade</strong> da aplicação na AWS, mantendo performance e conformidade regulatória."
        ]
    },
    {
        id: 3,
        title: "IAM Access Analyzer para buckets S3 expostos",
        domain: "Segurança",
        prompt: "Um desenvolvedor foi encarregado de proteger determinados buckets S3 que são compartilhados por uma grande equipe de usuários. Na última vez em que a política de um bucket foi alterada, ele ficou erroneamente disponível para qualquer pessoa, inclusive fora da organização. Qual recurso/serviço ajudará o desenvolvedor a identificar problemas de segurança semelhantes com o mínimo de esforço?",
        options: [
            { letter: "A", text: "IAM Access Analyzer", correct: true },
            { letter: "B", text: "Access Advisor (console IAM)", correct: false },
            { letter: "C", text: "S3 Analytics", correct: false },
            { letter: "D", text: "S3 Object Lock", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O AWS IAM Access Analyzer ajuda a identificar recursos na sua organização e contas, como buckets Amazon S3 ou funções IAM, que estão compartilhados com entidades externas. Isso permite detectar acessos não intencionais aos seus recursos e dados, reduzindo riscos de segurança." },
            { correct: false, text: "Incorreta. O Access Advisor informa o último uso de funções IAM para ajudar a identificar funções não utilizadas, auxiliando na remoção segura dessas funções. No entanto, ele não fornece informações sobre entidades fora do IAM, como buckets S3, e portanto não é adequado para este cenário." },
            { correct: false, text: "Incorreta. O Amazon S3 Analytics Storage Class Analysis ajuda a analisar padrões de acesso para otimizar a transição de dados entre classes de armazenamento. Ele não é capaz de identificar acessos não intencionais ou problemas de segurança em buckets S3." },
            { correct: false, text: "Incorreta. O S3 Object Lock permite armazenar objetos usando o modelo 'Write Once Read Many' (WORM), prevenindo exclusões acidentais ou inadequadas de dados. Porém, não é adequado para identificar problemas de acesso ou políticas incorretas em buckets S3." }
        ],
        glossary: [
            "IAM Access Analyzer: ferramenta da AWS que identifica recursos compartilhados com entidades externas à organização, destacando acessos não intencionais.",
            "S3 Object Lock: recurso WORM do S3 que previne exclusões ou alterações em objetos, garantindo integridade.",
            "Access Advisor: mostra o último uso das permissões associadas a usuários ou funções IAM, útil para identificar permissões não utilizadas.",
            "S3 Analytics: analisa padrões de acesso para otimizar classes de armazenamento, sem foco em segurança.",
            "Bucket Policy: conjunto de regras que define quem pode acessar um bucket S3 e quais ações são permitidas.",
            "Zona de confiança: escopo interno versus externo usado para definir limites de análise de acesso.",
            "WORM (Write Once Read Many): modelo de armazenamento em que dados gravados não podem ser alterados ou excluídos, garantindo integridade."
        ],
        generalExplanation: [
            "O <strong>IAM Access Analyzer</strong> é a ferramenta indicada para identificar buckets S3 expostos inadvertidamente a entidades externas à organização.",
            "Ele analisa políticas e permissões, destacando recursos acessíveis fora da zona de confiança.",
            "Outras opções, como S3 Object Lock, Access Advisor, S3 Analytics ou Bucket Policies manuais, não oferecem análise automatizada ou abrangente de acessos externos, tornando o Access Analyzer a escolha ideal para este cenário."
        ],
        realWorld: [
            "Em empresas com múltiplas equipes usando buckets S3 compartilhados, alterações nas políticas podem abrir brechas de segurança.",
            "Um engenheiro de segurança pode usar o IAM Access Analyzer para monitorar continuamente esses buckets e identificar qualquer exposição externa.",
            "Por exemplo, em pipelines que usam <strong>AWS Lambda</strong> para processar dados S3, o Access Analyzer garante que apenas funções ou usuários autorizados tenham acesso, prevenindo vazamentos e mantendo conformidade com normas internas e regulatórias.",
            "Além disso, ele fornece alertas e relatórios que facilitam ações corretivas rápidas, mantendo o ambiente seguro e controlado."
        ]
    },
    {
        id: 4,
        title: "API DeleteQueue do SQS",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Um desenvolvedor está testando filas do Amazon Simple Queue Service (SQS) em um ambiente de desenvolvimento. A fila, juntamente com todo o seu conteúdo, precisa ser excluída após os testes. Qual API do SQS deve ser utilizada para atender a esse requisito?",
        options: [
            { letter: "A", text: "RemovePermission", correct: false },
            { letter: "B", text: "PurgeQueue", correct: false },
            { letter: "C", text: "RemoveQueue", correct: false },
            { letter: "D", text: "DeleteQueue", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A operação RemovePermission é usada para revogar permissões específicas definidas na política da fila, identificadas pelo parâmetro Label. Ela não exclui a fila nem suas mensagens, apenas remove permissões associadas." },
            { correct: false, text: "Incorreta. A operação PurgeQueue exclui todas as mensagens contidas na fila especificada pelo QueueUrl, mas mantém a fila ativa. Ou seja, a fila permanece disponível para uso, apenas seu conteúdo é removido." },
            { correct: false, text: "Incorreta. RemoveQueue não é uma operação válida na API do Amazon SQS e foi incluída apenas como uma alternativa para confundir. A exclusão correta da fila deve ser feita via DeleteQueue." },
            { correct: true, text: "Correta. A operação DeleteQueue exclui a fila especificada pelo parâmetro QueueUrl, independentemente do conteúdo da fila. Ao deletar a fila, todas as mensagens nela contidas deixam de estar disponíveis. O processo de exclusão pode levar até 60 segundos, durante os quais algumas requisições podem ainda ser aceitas, mas após esse período a fila e suas mensagens deixam de existir. Além disso, é necessário aguardar pelo menos 60 segundos antes de criar uma nova fila com o mesmo nome." }
        ],
        glossary: [
            "DeleteQueue: operação da API do Amazon SQS que <strong>exclui a fila especificada e todas as mensagens nela contidas</strong>, tornando a fila indisponível.",
            "PurgeQueue: operação que <strong>remove todas as mensagens</strong> da fila, mas mantém a fila ativa e disponível para uso.",
            "RemovePermission: operação que <strong>revoga permissões específicas</strong> definidas na política de acesso da fila, sem afetar a existência da fila ou suas mensagens.",
            "QueueUrl: identificador único e obrigatório para referenciar uma fila específica nas chamadas da API do Amazon SQS.",
            "Amazon Simple Queue Service (SQS): serviço gerenciado de filas de mensagens que permite <strong>desacoplar e escalar</strong> microsserviços, sistemas distribuídos e aplicações serverless."
        ],
        generalExplanation: [
            "A alternativa correta é <strong>DeleteQueue</strong>, pois:",
            "<strong>Remove completamente a fila e todo o seu conteúdo</strong>, atendendo ao requisito de exclusão total após os testes.",
            "<strong>PurgeQueue</strong> apenas limpa as mensagens, mantendo a fila ativa, o que não satisfaz a necessidade de exclusão total.",
            "<strong>RemovePermission</strong> só atua sobre permissões e não impacta a fila em si.",
            "<strong>RemoveQueue</strong> não existe na API do SQS.",
            "Usar <strong>DeleteQueue</strong> segue as <strong>boas práticas da AWS</strong> para gerenciamento de recursos temporários em ambientes de desenvolvimento, evitando custos desnecessários e confusões com filas obsoletas."
        ],
        realWorld: [
            "Em <strong>desenvolvimento e testes</strong>, times podem criar filas SQS para simular fluxos de mensagens entre componentes.",
            "Após a validação, é fundamental <strong>limpar o ambiente</strong> para evitar acúmulo de recursos e garantir testes futuros consistentes.",
            "<strong>DeleteQueue</strong> remove a fila e todas as mensagens de forma definitiva, liberando recursos e evitando interferência em novos testes.",
            "Em <strong>pipelines de CI/CD</strong>, excluir programaticamente filas após cada execução mantém o ambiente <strong>limpo e controlado</strong>.",
            "Equipes que trabalham com arquiteturas <strong>serverless</strong> (Lambda + SQS) podem usar DeleteQueue para gerenciar filas temporárias criadas dinamicamente durante testes automatizados."
        ]
    },
    {
        id: 5,
        title: "Alertas do AWS Budgets baseados em previsão",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma empresa multinacional acabou de migrar para a AWS Cloud e configurou alertas baseados em previsões no AWS Budgets para gerenciamento de custos. No entanto, nenhum alerta foi recebido, mesmo após quase três semanas da criação da conta e dos orçamentos. Qual poderia ser o problema na configuração do AWS Budgets?",
        options: [
            { letter: "A", text: "O orçamento baseado em previsão foi criado a partir de uma conta que não possui privilégios suficientes.", correct: false },
            { letter: "B", text: "A AWS exige aproximadamente 5 semanas de dados de uso para gerar previsões de orçamento.", correct: true },
            { letter: "C", text: "A conta precisa fazer parte de uma Organização AWS para receber alertas do AWS Budgets.", correct: false },
            { letter: "D", text: "O Amazon CloudWatch pode estar indisponível, e por isso os alertas não estão sendo enviados.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Se a conta ou o usuário não tivesse privilégios suficientes, o orçamento nem poderia ser criado. Portanto, essa não é a causa do problema." },
            { correct: true, text: "Correta. O AWS Budgets necessita de cerca de 5 semanas de dados históricos de uso para gerar previsões confiáveis. Até que esse período seja alcançado, alertas baseados em previsão não serão disparados." },
            { correct: false, text: "Incorreta. Contas independentes também podem criar orçamentos e receber alertas. Não é obrigatório pertencer a uma Organização AWS para utilizar o AWS Budgets." },
            { correct: false, text: "Incorreta. O Amazon CloudWatch é um serviço totalmente gerenciado pela AWS e raramente fica indisponível. Essa alternativa foi incluída apenas como um fator de distração." }
        ],
        glossary: [
            "AWS Budgets: serviço que permite definir orçamentos personalizados para monitorar custos e uso na AWS, com possibilidade de configurar alertas.",
            "Previsão de orçamento: estimativa futura dos custos baseada em análise de dados históricos de uso.",
            "Amazon CloudWatch: serviço gerenciado da AWS para monitoramento, coleta de métricas e configuração de alarmes.",
            "AWS Organizations: serviço que permite gerenciar múltiplas contas AWS centralmente, facilitando controle e governança.",
            "Dados históricos de uso: informações acumuladas sobre consumo de recursos e serviços ao longo do tempo.",
            "Alertas baseados em previsão: notificações enviadas quando o custo projetado ultrapassa o limite definido no orçamento.",
            "Privilégios de conta: permissões necessárias para criar, modificar e gerenciar recursos e configurações na AWS.",
            "Contas independentes: contas AWS que operam isoladamente, sem fazer parte de uma organização."
        ],
        generalExplanation: [
            "O <strong>AWS Budgets</strong> precisa de um período mínimo de <strong>aproximadamente cinco semanas de dados históricos</strong> para gerar previsões confiáveis de custos futuros.",
            "Durante as primeiras semanas, <strong>alertas baseados em previsão podem não ser disparados</strong>, pois ainda não há histórico suficiente para estimativas precisas.",
            "Outras causas, como problemas no <strong>CloudWatch</strong>, falta de privilégios ou ausência de uma organização AWS, <strong>não explicam a falta de alertas</strong> nesse cenário:",
            "CloudWatch é altamente disponível e não depende de histórico.",
            "Privilégios insuficientes impediriam a criação do orçamento, não apenas o disparo de alertas.",
            "Contas independentes recebem alertas sem necessidade de estar vinculadas a uma organização.",
            "Portanto, a ausência de alertas após três semanas é <strong>comportamento esperado</strong>."
        ],
        realWorld: [
            "Um desenvolvedor ou time financeiro que gerencia custos em uma empresa que migrou recentemente para a AWS deve compreender:",
            "Ao configurar orçamentos para monitorar gastos com <strong>EC2, Lambda ou outros serviços</strong>, é necessário aguardar o <strong>período inicial de coleta de dados</strong> antes que os alertas baseados em previsão funcionem corretamente.",
            "Planejar esse <strong>tempo de maturação dos dados</strong> evita falsas expectativas quanto ao disparo de alertas.",
            "Essa prática garante <strong>monitoramento financeiro mais preciso e alinhado às boas práticas de governança na nuvem</strong>, permitindo melhor controle de custos e decisões de otimização."
        ]
    },
    {
        id: 6,
        title: "Nomes únicos de saída exportadas no CloudFormation",
        domain: "Implantação",
        prompt: "Sua organização global possui uma infraestrutura de TI implantada usando CloudFormation na AWS Cloud. Um funcionário, na região us-east-1, criou uma stack chamada 'Application1' e exportou uma saída com o nome 'ELBDNSName'. Outro funcionário criou uma stack para uma aplicação diferente, 'Application2', na região us-east-2, e também exportou uma saída com o nome 'ELBDNSName'. O primeiro funcionário tentou implantar a stack CloudFormation 'Application1' na região us-east-2, mas ocorreu um erro. Qual é a causa desse erro? (Selecione duas.)",
        options: [
            { letter: "A", text: "Os valores de saída exportados no CloudFormation devem ter nomes únicos em todas as regiões.", correct: false },
            { letter: "B", text: "Os valores de saída exportados no CloudFormation devem ter nomes únicos dentro de uma única região.", correct: true },
            { letter: "C", text: "Uma stack CloudFormation não pode ser implantada em mais de uma região da AWS usando o mesmo nome de stack.", correct: false },
            { letter: "D", text: "Os valores de saída no CloudFormation devem ter nomes únicos dentro de uma única região.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Os nomes das saídas exportadas precisam ser únicos apenas dentro da mesma região, não entre diferentes regiões. Portanto, essa afirmação está incorreta." },
            { correct: true, text: "Correta. Essa é a regra correta: os nomes exportados devem ser únicos dentro da mesma região para evitar conflitos entre stacks." },
            { correct: false, text: "Incorreta. É possível criar stacks com o mesmo nome em diferentes regiões da AWS. O erro relatado não está relacionado ao nome da stack, mas sim ao conflito de nomes de exportações dentro da mesma região." },
            { correct: true, text: "Correta. No CloudFormation, os nomes das saídas exportadas devem ser únicos dentro da mesma região para evitar conflitos. Como ambas as stacks exportaram 'ELBDNSName' na região us-east-2, houve um conflito que causou o erro." }
        ],
        glossary: [
            "CloudFormation: serviço da AWS para provisionamento e gerenciamento de recursos de infraestrutura usando templates declarativos em JSON ou YAML.",
            "Stack: conjunto de recursos AWS criados e gerenciados como uma única unidade pelo CloudFormation.",
            "Output Values (Valores de saída): informações definidas em uma stack que podem ser exportadas para serem usadas por outras stacks.",
            "Exported Output Values (Valores de saída exportados): valores de saída disponibilizados para <strong>referência cruzada</strong> entre diferentes stacks na mesma região.",
            "Região (Region): área geográfica da AWS onde os recursos são implantados, como <code>us-east-1</code> ou <code>us-east-2</code>."
        ],
        generalExplanation: [
            "No <strong>CloudFormation</strong>, os <strong>nomes dos valores de saída exportados devem ser únicos dentro da mesma região</strong> para evitar conflitos entre stacks:",
            "Duas stacks na <strong>mesma região</strong> não podem exportar saídas com o mesmo nome; caso contrário, a implantação falhará.",
            "Essa restrição <strong>não se aplica entre regiões diferentes</strong>: stacks em regiões distintas podem usar nomes de saída iguais sem problemas.",
            "No exemplo apresentado, a stack <code>Application1</code> tentou exportar <code>ELBDNSName</code> em <strong>us-east-2</strong>, onde já existia uma saída com esse nome, causando conflito e erro de implantação."
        ],
        realWorld: [
            "Desenvolvedores que gerenciam infraestrutura como código precisam garantir <strong>unicidade de nomes de saída exportados dentro da mesma região</strong>:",
            "Ao criar múltiplas aplicações que compartilham recursos, como um <strong>Load Balancer</strong>, é comum exportar seu DNS para que outras stacks possam referenciá-lo.",
            "Se duas stacks na mesma região exportarem o mesmo nome, a implantação <strong>falhará</strong>, exigindo renomeação da saída para resolver o conflito.",
            "Em ambientes <strong>multi-região</strong>, é possível reutilizar nomes de saída iguais, permitindo <strong>padronização de templates</strong> e automação de deploys regionais.",
            "Compreender essa regra ajuda a <strong>evitar erros de implantação</strong>, manter a <strong>organização e modularidade</strong> das stacks e garantir consistência em ambientes distribuídos globalmente."
        ]
    },
    {
        id: 7,
        title: "API CreateQueue do SQS",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "O Amazon Simple Queue Service (SQS) possui um conjunto de APIs para diversas ações suportadas pelo serviço. Como um desenvolvedor associado, quais das seguintes afirmações você identificaria como corretas em relação à API CreateQueue? (Selecione três)",
        options: [
            { letter: "A", text: "O valor do tempo de visibilidade para a fila é em segundos, com padrão de 30 segundos", correct: true },
            { letter: "B", text: "A fila de dead-letter (DLQ) de uma fila FIFO deve ser também uma fila FIFO. Já a DLQ de uma fila padrão deve ser também uma fila padrão", correct: true },
            { letter: "C", text: "Você não pode alterar o tipo da fila após criá-la", correct: true },
            { letter: "D", text: "A API CreateQueue pode ser usada para atualizar os atributos de uma fila existente passando os mesmos parâmetros da criação original.", correct: false },
            { letter: "E", text: "As tags da fila são case sensitive. Se você adicionar uma nova tag com a mesma chave, mas com letras maiúsculas/minúsculas diferentes, ambas serão mantidas separadamente.", correct: false },
            { letter: "F", text: "O tempo, em segundos, pelo qual a entrega de todas as mensagens na fila é atrasada é configurado usando o atributo MessageRetentionPeriod", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O tempo de visibilidade da fila é configurado em segundos, com valores válidos entre 0 e 43.200 (12 horas). O valor padrão é 30 segundos, que determina o período em que uma mensagem fica invisível após ser recebida por um consumidor." },
            { correct: true, text: "Correta. A fila de dead-letter de uma fila FIFO deve ser obrigatoriamente uma fila FIFO. Da mesma forma, a fila de dead-letter de uma fila padrão deve ser também uma fila padrão; não é permitido misturar os tipos entre a fila principal e a DLQ." },
            { correct: true, text: "Correta. O tipo da fila não pode ser alterado após sua criação, ou seja, não é possível converter uma fila padrão em FIFO. Para usar uma fila FIFO, é necessário criar uma nova fila desse tipo ou excluir a fila padrão existente e recriá-la como FIFO." },
            { correct: false, text: "Incorreta. A API CreateQueue é usada exclusivamente para criar uma nova fila. Se você tentar criar uma fila com o mesmo nome de uma existente e passar atributos diferentes, o SQS retorna um erro. Para alterar atributos de uma fila existente, deve-se usar a API SetQueueAttributes." },
            { correct: false, text: "Incorreta. As tags da fila no Amazon SQS são case insensitive. Isso significa que chaves como 'env' e 'ENV' são tratadas como iguais. Se uma nova tag for adicionada com a mesma chave (independentemente do uso de maiúsculas/minúsculas), ela sobrescreve a existente." },
            { correct: false, text: "Incorreta. O atraso na entrega das mensagens é configurado pelo atributo DelaySeconds, que define o tempo em segundos para atrasar a entrega de todas as mensagens na fila. O atributo MessageRetentionPeriod controla o tempo, em segundos, que o Amazon SQS mantém uma mensagem antes de descartá-la." }
        ],
        glossary: [
            "CreateQueue API: operação do Amazon SQS usada para criar novas filas, definindo suas configurações iniciais.",
            "FIFO (First-In-First-Out): tipo de fila que garante a ordem exata de processamento das mensagens, sem duplicatas.",
            "Dead-letter queue (DLQ): fila especial que armazena mensagens que não puderam ser processadas com sucesso após várias tentativas.",
            "Visibility Timeout (tempo de visibilidade): período, em segundos, durante o qual uma mensagem fica invisível para outros consumidores após ser recebida, evitando duplicação de processamento.",
            "DelaySeconds: atributo que define o atraso inicial, em segundos, para a entrega das mensagens na fila.",
            "MessageRetentionPeriod: tempo, em segundos, que uma mensagem permanece na fila antes de ser excluída automaticamente.",
            "Tags: pares chave-valor usados para adicionar metadados às filas, facilitando organização e controle.",
            "Case insensitive: característica que indica que letras maiúsculas e minúsculas são tratadas como equivalentes em chaves de tags.",
            "Permissões IAM sqs:CreateQueue e sqs:TagQueue: necessárias para criar filas e adicionar tags no Amazon SQS."
        ],
        generalExplanation: [
            "A <strong>API CreateQueue do Amazon SQS</strong> permite configurar diversos atributos críticos durante a criação da fila:",
            "<strong>Tipo da fila</strong> (padrão ou FIFO) é <strong>fixo e não pode ser alterado</strong> posteriormente, garantindo comportamento consistente.",
            "<strong>Visibility Timeout</strong> controla, em segundos, por quanto tempo uma mensagem fica invisível após ser recebida (padrão de 30 segundos), evitando duplicação de processamento.",
            "<strong>Filas FIFO devem ter DLQs FIFO</strong>, e filas padrão devem ter DLQs padrão, mantendo coerência no tratamento de mensagens com falha.",
            "<strong>Tags são case insensitive</strong>: uma nova tag com chave igual sobrescreve a existente.",
            "<strong>DelaySeconds</strong> define atraso inicial na entrega das mensagens; <strong>MessageRetentionPeriod</strong> define apenas o tempo de retenção antes da exclusão.",
            "Essas configurações permitem que filas sejam criadas de forma previsível e consistente, evitando problemas de duplicidade ou perda de mensagens."
        ],
        realWorld: [
            "Em um ambiente de produção, filas SQS são frequentemente usadas para <strong>desacoplar componentes</strong> e implementar <strong>processamento assíncrono</strong>:",
            "Ao criar uma <strong>fila FIFO</strong> para transações financeiras, é essencial garantir que a <strong>DLQ também seja FIFO</strong> e que a ordem de processamento seja preservada.",
            "Configurar corretamente o <strong>Visibility Timeout</strong> evita que mensagens sejam processadas múltiplas vezes em falhas temporárias.",
            "<strong>DelaySeconds</strong> pode ser usado para gerenciar picos de carga ou estratégias de retry, enquanto <strong>MessageRetentionPeriod</strong> impede consumo excessivo de recursos por mensagens expiradas.",
            "<strong>Tags case insensitive</strong> ajudam a organizar filas por projeto, ambiente ou prioridade, facilitando monitoramento, automação e governança via scripts ou políticas IAM.",
            "Esses cuidados garantem aplicações <strong>robustas, escaláveis e alinhadas às melhores práticas da AWS</strong>."
        ]
    },
    {
        id: 8,
        title: "Aplicações serverless pré-construídas",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma empresa construiu sua pilha tecnológica utilizando arquitetura serverless da AWS para gerenciar todas as suas funções de negócio. Para acelerar o desenvolvimento de um novo requisito, a empresa deseja utilizar aplicações serverless pré-construídas. Qual serviço da AWS representa a solução mais simples para atender a esse caso de uso?",
        options: [
            { letter: "A", text: "AWS Marketplace", correct: false },
            { letter: "B", text: "AWS Service Catalog", correct: false },
            { letter: "C", text: "AWS AppSync", correct: false },
            { letter: "D", text: "AWS Serverless Application Repository (SAR)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O AWS Marketplace é uma loja online para que parceiros qualificados comercializem softwares para clientes AWS. Ele facilita a compra e uso imediato de softwares e serviços na nuvem, mas não é um repositório específico para aplicações serverless pré-construídas focadas em acelerar o desenvolvimento interno." },
            { correct: false, text: "Incorreta. O AWS Service Catalog permite que organizações criem e gerenciem catálogos de serviços de TI aprovados para uso na AWS, incluindo imagens de máquinas virtuais, servidores, softwares e arquiteturas completas. Embora facilite a governança e o gerenciamento centralizado, ele não é focado em disponibilizar aplicações serverless pré-construídas para acelerar o desenvolvimento." },
            { correct: false, text: "Incorreta. O AWS AppSync é um serviço gerenciado que facilita o desenvolvimento de APIs GraphQL, conectando de forma segura diversas fontes de dados como DynamoDB e Lambda. Apesar de acelerar o desenvolvimento de APIs, ele não oferece aplicações serverless pré-construídas para implantação direta." },
            { correct: true, text: "Correta. O AWS Serverless Application Repository é um repositório gerenciado de aplicações serverless que permite a equipes e desenvolvedores armazenar, compartilhar e implantar aplicações reutilizáveis de forma rápida e simples. Com ele, não é necessário clonar, construir ou empacotar o código-fonte antes da implantação, pois oferece aplicações pré-construídas que aceleram o desenvolvimento e promovem boas práticas organizacionais." }
        ],
        glossary: [
            "AWS Serverless Application Repository (SAR): repositório gerenciado que permite armazenar, compartilhar e implantar aplicações serverless reutilizáveis de forma rápida e simples.",
            "AWS Service Catalog: serviço que possibilita criar e gerenciar catálogos de serviços de TI aprovados para uso na AWS, incluindo imagens, softwares e arquiteturas completas.",
            "AWS AppSync: serviço gerenciado para criação de APIs GraphQL que conecta diversas fontes de dados, facilitando o desenvolvimento de APIs seguras e escaláveis.",
            "AWS Marketplace: loja online onde parceiros oferecem softwares e serviços para clientes AWS, permitindo compra e uso imediato de soluções na nuvem."
        ],
        generalExplanation: [
            "O <strong>AWS Serverless Application Repository (SAR)</strong> é a melhor escolha quando o objetivo é <strong>acelerar o desenvolvimento com aplicações serverless pré-construídas</strong>.",
            "Oferece um <strong>repositório centralizado de aplicações reutilizáveis</strong> que podem ser implantadas diretamente, sem necessidade de clonar, construir ou empacotar código.",
            "Diferente do <strong>Service Catalog</strong>, que foca em governança e gerenciamento de recursos aprovados.",
            "Diferente do <strong>AppSync</strong>, que é voltado para criação de APIs GraphQL.",
            "Diferente do <strong>Marketplace</strong>, que é uma loja de softwares comerciais.",
            "O SAR é <strong>especificamente desenhado para compartilhar e reutilizar aplicações serverless</strong>, promovendo <strong>agilidade e boas práticas de desenvolvimento</strong>."
        ],
        realWorld: [
            "Em equipes que utilizam <strong>arquitetura serverless</strong>, o SAR permite encontrar e implantar rapidamente componentes prontos, como <strong>funções Lambda, APIs ou integrações</strong>, acelerando a entrega de novas funcionalidades sem reinventar a roda.",
            "Exemplo: para implementar <strong>autenticação</strong>, o time pode usar uma aplicação pré-construída no SAR que já gerencia esse requisito, economizando tempo e garantindo qualidade.",
            "Equipes podem <strong>compartilhar internamente seus próprios componentes</strong> no SAR, facilitando <strong>padronização e reutilização de código</strong> entre projetos.",
            "Isso reduz complexidade operacional e aumenta eficiência, alinhando-se às <strong>melhores práticas de desenvolvimento ágil e DevOps na AWS</strong>."
        ]
    },
    {
        id: 9,
        title: "AWS X-Ray para rastreamento entre contas",
        domain: "Solução de problemas e otimização",
        prompt: "Uma empresa multinacional possui várias unidades de negócio, cada uma com sua própria conta AWS. A equipe de desenvolvimento da empresa deseja depurar e rastrear dados entre contas diferentes e visualizar essas informações em uma conta centralizada. Como um Associate Developer, qual das seguintes soluções você recomendaria para esse caso de uso?",
        options: [
            { letter: "A", text: "AWS CloudTrail", correct: false },
            { letter: "B", text: "Amazon CloudWatch Events", correct: false },
            { letter: "C", text: "AWS X-Ray", correct: true },
            { letter: "D", text: "VPC Flow Logs", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O AWS CloudTrail registra, monitora continuamente e retém atividades da conta relacionadas a chamadas de API e ações na infraestrutura AWS, suportando governança, conformidade e auditoria. Porém, ele não é uma ferramenta para depuração ou rastreamento detalhado de dados de aplicações entre contas, nem para visualização centralizada de dados de execução de aplicações." },
            { correct: false, text: "Incorreta. O Amazon CloudWatch Events fornece um fluxo quase em tempo real de eventos do sistema que descrevem mudanças nos recursos AWS, permitindo disparar notificações ou ações baseadas nessas mudanças. Entretanto, não é uma ferramenta para depuração ou rastreamento de dados entre contas, nem para visualização centralizada de dados de aplicações." },
            { correct: true, text: "Correta. O AWS X-Ray ajuda desenvolvedores a analisar e depurar aplicações distribuídas em produção, como as baseadas em arquitetura de microsserviços. Ele oferece uma visão completa das requisições enquanto percorrem a aplicação, mostrando um mapa dos componentes subjacentes. Além disso, o X-Ray permite coletar dados entre múltiplas contas AWS, pois o agente pode assumir uma role para publicar dados em uma conta centralizada diferente daquela onde está executando, facilitando o rastreamento e a visualização centralizada." },
            { correct: false, text: "Incorreta. O VPC Flow Logs captura informações sobre o tráfego IP que entra e sai das interfaces de rede em uma VPC, sendo útil para análise de tráfego e segurança de rede. Os dados podem ser enviados para o CloudWatch Logs ou S3, mas não são projetados para depuração ou rastreamento de dados entre contas AWS, nem para visualização centralizada de dados de aplicação." }
        ],
        glossary: [
            "AWS X-Ray: serviço da AWS que permite analisar e depurar aplicações distribuídas, fornecendo <strong>rastreamento detalhado de requisições</strong> e visualização de mapas de componentes, com suporte para coleta de dados entre múltiplas contas.",
            "VPC Flow Logs: recurso que captura informações sobre o tráfego IP que entra e sai das interfaces de rede em uma VPC, utilizado para análise de tráfego e segurança de rede.",
            "AWS CloudTrail: serviço que registra e monitora <strong>chamadas de API e atividades na conta AWS</strong> para fins de auditoria, governança e conformidade.",
            "Amazon CloudWatch Events: serviço que monitora <strong>eventos do sistema e mudanças em recursos AWS</strong>, permitindo disparar notificações ou ações automatizadas."
        ],
        generalExplanation: [
            "Para cenários que exigem <strong>depuração e rastreamento de dados entre múltiplas contas AWS</strong> e <strong>visualização centralizada</strong>, o <strong>AWS X-Ray</strong> é a solução mais indicada:",
            "Proporciona <strong>rastreamento detalhado das requisições</strong> que atravessam vários serviços e contas.",
            "Permite construir <strong>mapas completos de fluxo de aplicação</strong>, facilitando identificação de gargalos, erros e latências.",
            "Outros serviços mencionados têm finalidades distintas:",
            "<strong>VPC Flow Logs</strong>: análise de tráfego de rede, não rastreamento de aplicação.",
            "<strong>CloudTrail</strong>: auditoria de chamadas de API, sem visualização centralizada de fluxos de aplicação.",
            "<strong>CloudWatch Events</strong>: monitoramento de eventos e disparo de ações automatizadas, mas não rastreamento integrado entre contas."
        ],
        realWorld: [
            "Em empresas com <strong>múltiplas contas AWS</strong>, diferentes unidades podem operar isoladamente, dificultando a análise integrada do comportamento das aplicações:",
            "O <strong>AWS X-Ray</strong> coleta dados de rastreamento de serviços distribuídos em contas distintas e envia para uma <strong>conta centralizada</strong>.",
            "Isso permite que equipes de desenvolvimento e operações <strong>identifiquem gargalos, erros e latências</strong> em toda a arquitetura, mesmo quando os componentes estão segregados.",
            "Exemplo: em uma aplicação <strong>serverless</strong> que utiliza <strong>Lambda, API Gateway e DynamoDB</strong> distribuídos em várias contas, o X-Ray correlaciona chamadas entre serviços, exibindo o <strong>fluxo completo da requisição</strong>.",
            "Com isso, as equipes podem monitorar, depurar e otimizar o desempenho da aplicação, garantindo <strong>confiabilidade e eficiência operacional</strong>."
        ]
    },
    {
        id: 10,
        title: "Cross-zone load balancing no ELB",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma organização possui suas instâncias EC2 hospedadas em duas Zonas de Disponibilidade (AZs). A AZ1 possui 2 instâncias e a AZ2 possui 8 instâncias. O Elastic Load Balancer que gerencia as instâncias nas duas AZs tem o balanceamento de carga entre zonas (cross-zone load balancing) habilitado em sua configuração. Qual porcentagem do tráfego cada instância na AZ1 receberá?",
        options: [
            { letter: "A", text: "10%", correct: true },
            { letter: "B", text: "20%", correct: false },
            { letter: "C", text: "15%", correct: false },
            { letter: "D", text: "25%", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Com o balanceamento de carga entre zonas habilitado, o tráfego é distribuído igualmente entre todas as instâncias registradas, independentemente da AZ em que estejam. Como há 10 instâncias no total (2 na AZ1 e 8 na AZ2), cada instância recebe 10% do tráfego." },
            { correct: false, text: "Incorreta. Esta opção é inválida e serve apenas como distração, pois não corresponde à distribuição correta do tráfego com ou sem balanceamento entre zonas." },
            { correct: false, text: "Incorreta. Esta opção também é inválida e não corresponde a nenhuma configuração válida de distribuição de tráfego no cenário descrito." },
            { correct: false, text: "Incorreta. Se o balanceamento entre zonas estivesse desabilitado, cada instância na AZ1 receberia 50% do tráfego da AZ1, que corresponde a metade do tráfego total, ou seja, 25% do tráfego total para cada uma das 2 instâncias. Porém, neste caso, o balanceamento entre zonas está habilitado." }
        ],
        glossary: [
            "Elastic Load Balancer (ELB): serviço da AWS que distribui automaticamente o tráfego de entrada entre múltiplas instâncias EC2 para garantir alta disponibilidade e escalabilidade.",
            "Zonas de Disponibilidade (AZs): áreas isoladas dentro de uma região AWS, independentes e resilientes a falhas, permitindo arquiteturas altamente disponíveis.",
            "Cross-Zone Load Balancing: funcionalidade do ELB que distribui o tráfego de forma equilibrada entre todas as instâncias registradas, independentemente da AZ.",
            "Instâncias EC2: máquinas virtuais na nuvem AWS que executam aplicações e serviços.",
            "Tráfego: volume de dados ou requisições enviadas pelos usuários para as instâncias EC2 via ELB."
        ],
        generalExplanation: [
            "Com o <strong>cross-zone load balancing</strong> habilitado, o ELB distribui igualmente o tráfego entre todas as instâncias, independentemente da AZ em que se encontram.",
            "No exemplo de 10 instâncias (2 na AZ1 e 8 na AZ2), <strong>cada instância recebe 10% do tráfego total</strong>, promovendo equilíbrio de utilização.",
            "Se o cross-zone load balancing estivesse <strong>desabilitado</strong>, o tráfego seria limitado à AZ de origem da requisição, podendo sobrecarregar AZs com menos instâncias e subutilizar outras.",
            "Essa funcionalidade melhora a eficiência do uso de recursos, garantindo que todas as instâncias contribuam de forma uniforme no processamento de requisições."
        ],
        realWorld: [
            "Em aplicações web de produção distribuídas em múltiplas AZs, times de desenvolvimento configuram ELBs com <strong>cross-zone load balancing</strong> para evitar que instâncias em AZs com menos recursos fiquem sobrecarregadas.",
            "Por exemplo, em uma aplicação de e-commerce hospedada em 2 AZs, essa configuração assegura que o tráfego seja balanceado uniformemente entre todas as instâncias, melhorando <strong>performance, resiliência e experiência do usuário</strong>.",
            "Além disso, ao ajustar o número de instâncias por AZ, a equipe consegue otimizar <strong>custos e eficiência</strong>, sabendo que o balanceamento entre zonas mantém a carga distribuída de forma justa.",
            "Essa prática é essencial para <strong>alta disponibilidade, escalabilidade e tolerância a falhas</strong>, seguindo as boas práticas da AWS para arquiteturas distribuídas."
        ]
    },
    {
        id: 11,
        title: "Acesso IAM ao Billing and Cost Management",
        domain: "Segurança",
        prompt: "A equipe de desenvolvimento acabou de configurar e anexar a política IAM necessária para acessar o AWS Billing and Cost Management para todos os usuários do departamento financeiro. Porém, os usuários não conseguem visualizar o serviço AWS Billing and Cost Management no console da AWS. Qual poderia ser a razão para esse problema?",
        options: [
            { letter: "A", text: "O usuário IAM deve ser criado especificamente dentro do AWS Billing and Cost Management e não na conta AWS para ter acesso ao console de faturamento.", correct: false },
            { letter: "B", text: "É necessário ativar o acesso de usuários IAM ao console do Billing and Cost Management para todos os usuários que precisam de acesso.", correct: true },
            { letter: "C", text: "Os usuários podem ter outra política que os restrinja de acessar as informações de faturamento.", correct: false },
            { letter: "D", text: "Apenas o usuário root tem acesso ao console do AWS Billing and Cost Management.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Usuários IAM são criados e gerenciados dentro da conta AWS como um todo, independentemente do serviço. Não existe criação de usuários IAM específicos para o serviço de faturamento." },
            { correct: true, text: "Correta. Por padrão, usuários IAM não têm acesso ao console de Billing and Cost Management. O administrador da conta deve ativar explicitamente o acesso para usuários IAM ao console de faturamento, além de anexar as políticas necessárias. Essa ativação precisa ser feita uma única vez para que o acesso funcione." },
            { correct: false, text: "Incorreta. Embora políticas conflitantes possam causar restrições, no cenário apresentado não há indicação de outra política bloqueando o acesso, portanto essa não é a causa principal do problema." },
            { correct: false, text: "Incorreta. Embora o usuário root tenha acesso completo, é possível conceder acesso ao console de faturamento para usuários IAM ativando o acesso e aplicando as políticas apropriadas." }
        ],
        glossary: [
            "IAM (Identity and Access Management): gerencia usuários, grupos, funções e permissões para controlar o acesso aos recursos AWS.",
            "AWS Billing and Cost Management: serviço que permite visualizar, gerenciar e analisar os custos e faturamento da conta.",
            "Usuário root: conta principal da AWS com permissões administrativas completas e acesso irrestrito.",
            "Política IAM: documento JSON que define ações permitidas para usuários, grupos ou funções em recursos específicos.",
            "Console AWS: interface web para gerenciamento de serviços AWS.",
            "Ativação do acesso IAM ao faturamento: configuração que permite que usuários IAM acessem o console de Billing and Cost Management."
        ],
        generalExplanation: [
            "Por padrão, <strong>apenas o usuário root</strong> tem acesso ao console do AWS Billing and Cost Management.",
            "Mesmo que usuários IAM tenham políticas corretas anexadas, eles <strong>não conseguem visualizar o serviço</strong> até que o administrador ative explicitamente o acesso IAM ao faturamento.",
            "Essa configuração adiciona uma camada de <strong>segurança</strong>, protegendo informações financeiras sensíveis.",
            "Portanto, além de aplicar políticas IAM adequadas, é <strong>necessário habilitar essa ativação</strong> para que usuários IAM possam acessar o console de faturamento."
        ],
        realWorld: [
            "Em empresas, equipes financeiras precisam de acesso a relatórios detalhados para <strong>controle orçamentário e auditorias</strong>.",
            "Um administrador deve garantir que usuários IAM tenham <strong>permissões apropriadas e acesso habilitado ao console de faturamento</strong>.",
            "Exemplo: uma aplicação que gera relatórios financeiros requer que os usuários possam acessar o console para validar dados e configurar alertas de orçamento.",
            "Essa prática <strong>equilibra segurança e usabilidade</strong>, evitando que usuários não autorizados visualizem informações sensíveis mesmo com permissões IAM amplas."
        ]
    },
    {
        id: 12,
        title: "Política de implantação Rolling no Elastic Beanstalk",
        domain: "Implantação",
        prompt: "Uma empresa utiliza o Elastic Beanstalk para gerenciar sua infraestrutura de TI na nuvem AWS e deseja implantar uma nova versão do aplicativo nas instâncias EC2. Durante a implantação, algumas instâncias devem continuar atendendo requisições com a versão antiga do aplicativo, enquanto outras devem atender com a nova versão até que a implantação seja concluída. Qual política de implantação atende a esse requisito sem gerar custos adicionais?",
        options: [
            { letter: "A", text: "All at once", correct: false },
            { letter: "B", text: "Rolling", correct: true },
            { letter: "C", text: "Immutable", correct: false },
            { letter: "D", text: "Rolling with additional batches", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A política 'All at once' implanta a nova versão em todas as instâncias simultaneamente, o que pode causar indisponibilidade temporária do aplicativo, pois não mantém versões antigas e novas rodando simultaneamente." },
            { correct: true, text: "Correta. A implantação do tipo 'Rolling' atualiza as instâncias em lotes sequenciais, permitindo que algumas instâncias continuem atendendo com a versão antiga enquanto outras já utilizam a nova, sem aumentar o número total de instâncias e, portanto, sem custos adicionais." },
            { correct: false, text: "Incorreta. A política 'Immutable' cria novas instâncias para a nova versão, mantendo as antigas até que a implantação seja concluída. Isso garante segurança e facilidade de rollback, mas gera custos adicionais devido à execução simultânea de instâncias extras." },
            { correct: false, text: "Incorreta. Essa política também atualiza em lotes, porém cria lotes adicionais de instâncias para manter a capacidade total durante a implantação, o que aumenta os custos devido à execução temporária de instâncias extras." }
        ],
        glossary: [
            "Elastic Beanstalk: serviço gerenciado da AWS que facilita implantação, gerenciamento e escalabilidade de aplicações web e serviços.",
            "EC2 instances: instâncias de máquinas virtuais na AWS que hospedam e executam aplicações.",
            "Deployment policy (política de implantação): estratégia definida para atualizar versões de aplicações em ambientes de produção.",
            "Rolling deployment (implantação gradual): atualização em lotes sequenciais, mantendo parte das instâncias com a versão antiga durante o processo.",
            "Immutable deployment (implantação imutável): cria novas instâncias para a nova versão, mantendo as antigas até validação.",
            "Rolling with additional batches: variação do rolling deployment que adiciona lotes extras para manter a capacidade total durante a atualização.",
            "All at once: atualização simultânea de todas as instâncias, substituindo a versão antiga de uma vez."
        ],
        generalExplanation: [
            "A política <strong>Rolling deployment</strong> é a melhor escolha quando se deseja atualizar aplicações sem causar indisponibilidade, mantendo algumas instâncias antigas atendendo requisições enquanto outras executam a nova versão.",
            "<strong>Immutable</strong> e <strong>Rolling with additional batches</strong> geram instâncias adicionais durante a atualização, aumentando temporariamente os custos.",
            "<strong>All at once</strong> substitui todas as instâncias simultaneamente, podendo causar downtime.",
            "Portanto, o Rolling deployment equilibra <strong>alta disponibilidade</strong> e <strong>controle de custos</strong>, sendo ideal para cenários onde a continuidade do serviço é crítica."
        ],
        realWorld: [
            "Em um ambiente de produção no Elastic Beanstalk, ao lançar uma nova funcionalidade, o <strong>Rolling deployment</strong> garante que parte das instâncias continue servindo usuários com a versão estável, enquanto outras recebem a atualização gradualmente.",
            "Essa abordagem facilita a identificação rápida de problemas, evitando que falhas afetem todos os usuários ao mesmo tempo.",
            "É especialmente útil para equipes que precisam <strong>controlar custos</strong>, pois não exige instâncias adicionais.",
            "Mantém <strong>alta disponibilidade</strong> e performance durante atualizações frequentes, alinhando-se às melhores práticas de DevOps e AWS."
        ]
    },
    {
        id: 13,
        title: "Logs de acesso do ALB",
        domain: "Solução de problemas e otimização",
        prompt: "Uma organização possui escritórios em múltiplas localidades e a equipe de tecnologia configurou um Application Load Balancer (ALB) com alvos distribuídos em várias Zonas de Disponibilidade. A equipe deseja analisar as requisições recebidas para identificar latências e padrões de endereços IP dos clientes. Qual recurso do Load Balancer ajudará a coletar as informações necessárias?",
        options: [
            { letter: "A", text: "Métricas do CloudWatch", correct: false },
            { letter: "B", text: "Rastreamento de requisições do ALB", correct: false },
            { letter: "C", text: "Logs do CloudTrail", correct: false },
            { letter: "D", text: "Logs de acesso do ALB", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O CloudWatch coleta métricas agregadas sobre o desempenho do load balancer e dos alvos, como contagem de requisições e latência média, mas não fornece informações detalhadas por requisição, como o endereço IP do cliente ou dados específicos de cada requisição." },
            { correct: false, text: "Incorreta. O rastreamento de requisições adiciona um identificador de rastreamento nos cabeçalhos HTTP para acompanhar o fluxo das requisições, mas não fornece dados detalhados sobre latência ou padrões de IP dos clientes, portanto não atende ao requisito da análise solicitada." },
            { correct: false, text: "Incorreta. O CloudTrail registra chamadas de API feitas para o Elastic Load Balancing, incluindo informações sobre quem fez a chamada e quando, mas não captura dados sobre as requisições HTTP recebidas pelo load balancer, como latência ou IP do cliente." },
            { correct: true, text: "Correta. Os logs de acesso do Elastic Load Balancing capturam informações detalhadas sobre as requisições enviadas ao load balancer, incluindo o horário da requisição, o endereço IP do cliente, latências, caminhos das requisições e respostas do servidor. Esses logs são ideais para analisar padrões de tráfego e latências, sendo uma funcionalidade opcional que deve ser habilitada explicitamente." }
        ],
        glossary: [
            "Application Load Balancer (ALB): serviço da AWS que distribui tráfego <strong>HTTP/HTTPS</strong> entre múltiplos recursos (instâncias EC2, contêineres ou IPs), garantindo <strong>alta disponibilidade e escalabilidade</strong>.",
            "Logs de acesso do ALB: arquivos que registram detalhes de cada requisição recebida, incluindo endereço IP do cliente, horário, latência, caminho da requisição e resposta do servidor.",
            "Rastreamento de requisições: recurso que adiciona identificadores únicos nos cabeçalhos HTTP para acompanhar o percurso de uma requisição através de serviços, útil para diagnóstico distribuído.",
            "Métricas do CloudWatch: dados agregados coletados pelo Amazon CloudWatch que monitoram desempenho e saúde dos recursos AWS, como contagem de requisições e latência média.",
            "Logs do CloudTrail: registros das chamadas de API feitas na conta AWS, usados para auditoria e monitoramento de atividades administrativas."
        ],
        generalExplanation: [
            "Para coletar informações <strong>detalhadas sobre cada requisição</strong>, incluindo latência e endereços IP dos clientes, a solução mais adequada são os <strong>logs de acesso do ALB</strong>:",
            "<strong>CloudWatch Metrics</strong> fornece dados agregados e não permite análise por requisição individual.",
            "<strong>Rastreamento de requisições</strong> ajuda a acompanhar o fluxo das chamadas, mas não captura todos os detalhes de cada requisição HTTP.",
            "<strong>CloudTrail Logs</strong> foca em chamadas de API, <strong>não em requisições HTTP</strong> recebidas pelo ALB.",
            "Portanto, <strong>habilitar logs de acesso do ALB</strong> é a prática recomendada para análise granular do tráfego e atendimento aos requisitos de monitoramento detalhado."
        ],
        realWorld: [
            "Em empresas com múltiplos escritórios e usuários distribuídos, os <strong>logs de acesso do ALB</strong> permitem monitorar performance e comportamento do tráfego detalhadamente.",
            "Exemplo: ao identificar <strong>latências elevadas</strong> em requisições de uma região específica, a equipe pode <strong>otimizar a distribuição de recursos</strong> ou ajustar regras de roteamento para melhorar a experiência do usuário.",
            "Os logs também permitem <strong>analisar padrões de endereços IP</strong>, detectando acessos suspeitos ou picos de tráfego, contribuindo para <strong>segurança e escalabilidade</strong> da aplicação.",
            "É comum integrar esses logs com <strong>ferramentas de análise</strong> ou armazená-los no <strong>Amazon S3</strong> para processamento posterior, mantendo a <strong>observabilidade e alta disponibilidade</strong> das aplicações na AWS."
        ]
    },
    {
        id: 14,
        title: "Escalonamento com métrica de backlog no ECS",
        domain: "Solução de problemas e otimização",
        prompt: "Uma empresa de comércio eletrônico desenvolveu uma API hospedada no Amazon ECS. Picos variáveis de tráfego na aplicação estão causando atrasos no processamento dos pedidos. A aplicação processa os pedidos utilizando filas do Amazon SQS. A métrica ApproximateNumberOfMessagesVisible apresenta picos muito altos ao longo do dia, o que dispara o alarme do CloudWatch. Outras métricas do ECS para os containers da API estão dentro dos limites esperados. Como um Desenvolvedor Associado, qual das seguintes opções você recomendaria para melhorar o desempenho mantendo os custos baixos?",
        options: [
            { letter: "A", text: "Utilizar Docker Swarm", correct: false },
            { letter: "B", text: "Utilizar métrica de backlog por instância com política de escalonamento por rastreamento de alvo (target tracking)", correct: true },
            { letter: "C", text: "Utilizar o agendador de serviço do ECS", correct: false },
            { letter: "D", text: "Utilizar política de escalonamento em etapas (step scaling) do ECS", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Docker Swarm é uma ferramenta de orquestração de containers que permite gerenciar múltiplos containers em vários hosts, mas não está integrada diretamente com o Amazon ECS e não resolve o problema de escalabilidade dinâmica baseado em métricas do SQS nem otimiza custos para esta arquitetura." },
            { correct: true, text: "Correta. Utilizar uma métrica personalizada de backlog por instância com uma política de escalonamento por rastreamento de alvo permite que o sistema ajuste dinamicamente a capacidade do ECS com base na quantidade de mensagens pendentes por instância, garantindo que o processamento acompanhe a demanda de forma eficiente e mantendo os custos controlados. Essa abordagem é mais precisa do que usar apenas a métrica ApproximateNumberOfMessagesVisible, pois considera a capacidade atual da frota e o tempo aceitável de latência para processar mensagens." },
            { correct: false, text: "Incorreta. O agendador de serviço do ECS é usado para gerenciar a execução de tarefas de longa duração e garantir que o número desejado de tarefas esteja sempre em execução, mas não resolve diretamente o problema de escalabilidade baseado na fila do SQS nem otimiza o processamento em resposta a variações de demanda." },
            { correct: false, text: "Incorreta. Embora o ECS suporte políticas de escalonamento em etapas, a AWS recomenda o uso de políticas de escalonamento por rastreamento de alvo (target tracking) para a maioria dos casos, pois elas ajustam automaticamente a capacidade com base em métricas específicas, oferecendo uma resposta mais inteligente e eficiente às variações de carga." }
        ],
        glossary: [
            "Amazon ECS: serviço gerenciado da AWS para orquestração e gerenciamento de containers Docker em clusters.",
            "Amazon SQS: serviço de filas gerenciado que permite desacoplar componentes de aplicações distribuídas, facilitando o processamento assíncrono de mensagens.",
            "ApproximateNumberOfMessagesVisible: métrica do Amazon SQS que indica o número aproximado de mensagens disponíveis na fila para processamento.",
            "Política de escalonamento por rastreamento de alvo (target tracking): método que ajusta automaticamente a capacidade de recursos com base em uma métrica alvo definida, mantendo a métrica próxima desse valor.",
            "Backlog por instância: métrica personalizada que calcula a quantidade de mensagens pendentes na fila dividida pelo número de instâncias disponíveis, refletindo a carga por instância.",
            "Política de escalonamento em etapas (step scaling): método que aumenta ou diminui a capacidade em passos definidos, acionado por alarmes baseados em limiares específicos.",
            "Docker Swarm: ferramenta de orquestração de containers independente da AWS, usada para gerenciar clusters de containers Docker."
        ],
        generalExplanation: [
            "Para otimizar desempenho e controlar custos diante de <strong>picos variáveis de tráfego</strong>, a melhor prática é:",
            "<strong>Usar métricas personalizadas de backlog por instância</strong> em vez da métrica padrão <code>ApproximateNumberOfMessagesVisible</code>, pois esta última <strong>não considera o número de instâncias disponíveis</strong>, podendo gerar escalonamento inadequado.",
            "Combinar essa métrica com <strong>política de escalonamento por rastreamento de alvo</strong>, permitindo que o ECS ajuste automaticamente a quantidade de containers para que cada instância processe uma <strong>carga equilibrada</strong>.",
            "Essa abordagem evita tanto ociosidade quanto sobrecarga, garantindo <strong>eficiência operacional e econômica</strong>, e segue as recomendações da AWS para <strong>escalabilidade baseada em métricas dinâmicas e específicas do workload</strong>."
        ],
        realWorld: [
            "Um time que mantém uma API de comércio eletrônico no <strong>Amazon ECS</strong> pode enfrentar variações significativas no volume de pedidos ao longo do dia:",
            "O time implementa uma <strong>métrica personalizada</strong> que calcula quantas mensagens SQS cada instância deve processar.",
            "O <strong>escalonamento automático</strong> aumenta ou diminui o número de containers conforme a demanda real, evitando <strong>custos desnecessários</strong> em períodos de baixa carga e garantindo capacidade suficiente nos picos.",
            "A equipe pode <strong>monitorar e ajustar parâmetros de escalonamento</strong> continuamente, sem intervenção manual, garantindo desempenho, resiliência e controle de custos.",
            "Essa prática é essencial para aplicações <strong>serverless ou baseadas em containers</strong>, que precisam <strong>responder rapidamente a mudanças de carga</strong>, mantendo a arquitetura <strong>econômica e resiliente</strong>."
        ]
    },
    {
        id: 15,
        title: "Arquivos .ebextensions no Elastic Beanstalk",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Você escolheu o AWS Elastic Beanstalk para fazer o upload do código da sua aplicação e permitir que ele gerencie detalhes como provisionamento de recursos e monitoramento. Ao criar arquivos de configuração para o AWS Elastic Beanstalk, qual convenção de nomenclatura você deve seguir?",
        options: [
            { letter: "A", text: ".ebextensions/<meus_ajustes>.config", correct: true },
            { letter: "B", text: ".config/<meus_ajustes>.ebextensions", correct: false },
            { letter: "C", text: ".config_<meus_ajustes>.ebextensions", correct: false },
            { letter: "D", text: ".ebextensions_<meus_ajustes>.config", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Os arquivos de configuração do AWS Elastic Beanstalk devem estar dentro da pasta '.ebextensions' na raiz do pacote da aplicação e possuir a extensão '.config'. Esses arquivos são escritos em YAML ou JSON e permitem customizar o ambiente e os recursos AWS provisionados." },
            { correct: false, text: "Incorreta. Essa nomenclatura inverte a estrutura correta dos diretórios e extensões, pois os arquivos de configuração devem estar dentro da pasta .ebextensions e ter extensão .config, não o contrário." },
            { correct: false, text: "Incorreta. Essa opção apresenta a extensão e o diretório invertidos e não segue o padrão oficial de nomenclatura do Elastic Beanstalk para arquivos de configuração." },
            { correct: false, text: "Incorreta. O nome do diretório e o formato do arquivo estão incorretos. A pasta deve ser '.ebextensions' (com ponto e sem underline) e os arquivos devem ter extensão '.config', não um nome misto com underline." }
        ],
        glossary: [
            "AWS Elastic Beanstalk: serviço gerenciado que facilita <strong>deploy, gerenciamento e escalabilidade automática</strong> de aplicações web, cuidando do provisionamento e monitoramento dos recursos subjacentes.",
            ".ebextensions: diretório especial na raiz do pacote da aplicação onde são colocados <strong>arquivos de configuração</strong> para customizar o ambiente Elastic Beanstalk.",
            ".config: extensão dos arquivos de configuração, escritos em YAML ou JSON, que definem <strong>ajustes e recursos adicionais</strong> para o ambiente Elastic Beanstalk.",
            "YAML: formato de serialização de dados <strong>legível para humanos</strong>, muito utilizado em arquivos de configuração.",
            "JSON: formato leve de <strong>troca de dados estruturados</strong>, usado para configuração e comunicação entre sistemas.",
            "Provisionamento: processo automático de criação e configuração dos recursos de infraestrutura necessários para executar a aplicação.",
            "Ambiente Elastic Beanstalk: conjunto de recursos AWS (EC2, balanceadores de carga, grupos de segurança, etc.) configurados para hospedar e executar a aplicação.",
            "Fonte do pacote: arquivo compactado (zip, war, etc.) que contém o <strong>código da aplicação</strong> e os <strong>arquivos de configuração</strong> para o Elastic Beanstalk."
        ],
        generalExplanation: [
            "Os arquivos de configuração do <strong>Elastic Beanstalk</strong> devem estar dentro da pasta <code><strong>.ebextensions</strong></code> na <strong>raiz do pacote da aplicação</strong>.",
            "Esses arquivos devem possuir a <strong>extensão </strong><code><strong>.config</strong></code> para que o Elastic Beanstalk os reconheça e aplique as configurações.",
            "Os arquivos podem incluir: ajustes no ambiente (variáveis de ambiente, parâmetros do servidor), criação de recursos adicionais (buckets S3, regras de segurança), customizações específicas do deployment.",
            "Alternativas que <strong>invertem a ordem do diretório e da extensão</strong> ou usam nomes incorretos <strong>não funcionarão corretamente</strong>.",
            "Seguir essa convenção é <strong>boa prática AWS</strong>, garantindo que o ambiente seja provisionado conforme esperado."
        ],
        realWorld: [
            "Um desenvolvedor pode precisar configurar o ambiente para: definir <strong>variáveis de ambiente</strong>, instalar <strong>pacotes adicionais</strong>, configurar recursos AWS complementares (por exemplo, regras de segurança ou balanceadores de carga).",
            "Para isso, ele cria arquivos <code><strong>.config</strong></code> dentro da pasta <code><strong>.ebextensions</strong></code> no pacote de implantação.",
            "Exemplo: uma API hospedada no Elastic Beanstalk pode usar essas configurações para: ajustar parâmetros do servidor web, configurar balanceadores de carga, definir regras de segurança automaticamente.",
            "Essa prática facilita <strong>manutenção, versionamento e automação</strong>, alinhando-se às melhores práticas de <strong>DevOps</strong> na nuvem AWS."
        ]
    },
    {
        id: 16,
        title: "Entidades para implantar certificados SSL/TLS",
        domain: "Segurança",
        prompt: "Para habilitar conexões HTTPS para sua aplicação web implantada na AWS Cloud, um desenvolvedor está no processo de criar um certificado de servidor. Quais entidades da AWS podem ser usadas para implantar certificados de servidor SSL/TLS? (Selecione duas.)",
        options: [
            { letter: "A", text: "IAM", correct: true },
            { letter: "B", text: "AWS Certificate Manager", correct: true },
            { letter: "C", text: "AWS Systems Manager", correct: false },
            { letter: "D", text: "AWS CloudFormation", correct: false },
            { letter: "E", text: "AWS Secrets Manager", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O IAM pode ser usado para gerenciar certificados de servidor SSL/TLS, especialmente em regiões onde o AWS Certificate Manager (ACM) não é suportado. O IAM armazena as chaves privadas de forma segura e permite o uso desses certificados em recursos AWS, embora exija que o certificado seja obtido externamente." },
            { correct: true, text: "Correta. O AWS Certificate Manager (ACM) é a ferramenta recomendada para provisionar, gerenciar e implantar certificados SSL/TLS na AWS. Ele permite solicitar certificados públicos gratuitamente, gerenciar certificados existentes e renová-los automaticamente em regiões suportadas." },
            { correct: false, text: "Incorreta. O AWS Systems Manager é uma ferramenta para gerenciamento operacional e automação de infraestrutura, mas não é usado para gerenciar ou implantar certificados SSL/TLS." },
            { correct: false, text: "Incorreta. O AWS CloudFormation é uma ferramenta para modelar e provisionar recursos de infraestrutura como código, mas não gerencia ou implanta certificados SSL/TLS diretamente." },
            { correct: false, text: "Incorreta. O AWS Secrets Manager é usado para proteger e gerenciar segredos, como credenciais e chaves privadas, que podem estar relacionados a certificados SSL/TLS, mas não é utilizado para implantar certificados diretamente." }
        ],
        glossary: [
            "SSL/TLS: protocolos criptográficos que garantem comunicação segura e encriptada entre clientes e servidores na internet.",
            "IAM (Identity and Access Management): serviço da AWS para gerenciamento de identidades, permissões e também armazenamento de certificados SSL/TLS em regiões onde o ACM não está disponível.",
            "AWS Certificate Manager (ACM): serviço gerenciado da AWS que facilita a criação, provisionamento, gerenciamento e renovação automática de certificados SSL/TLS para uso em recursos AWS.",
            "AWS Secrets Manager: serviço para armazenamento e gerenciamento seguro de segredos, como credenciais e chaves privadas, mas não utilizado para implantação direta de certificados SSL/TLS.",
            "AWS Systems Manager: serviço para automação e gerenciamento operacional de infraestrutura, sem funcionalidades específicas para gerenciamento de certificados SSL/TLS.",
            "AWS CloudFormation: serviço para modelagem e provisionamento de infraestrutura como código, não gerencia ou implanta certificados SSL/TLS diretamente."
        ],
        generalExplanation: [
            "O <strong>AWS Certificate Manager (ACM)</strong> é a solução recomendada para provisionar e gerenciar certificados SSL/TLS na AWS.",
            "O ACM <strong>automatiza a emissão, implantação e renovação</strong> dos certificados, facilitando a configuração de HTTPS em serviços como <strong>Elastic Load Balancing, CloudFront e API Gateway</strong>.",
            "Em regiões onde o ACM não está disponível, o <strong>IAM</strong> pode ser usado para armazenar e gerenciar certificados manualmente, permitindo que os recursos AWS utilizem esses certificados, embora exija gerenciamento manual do ciclo de vida.",
            "Serviços como <strong>Secrets Manager, Systems Manager e CloudFormation</strong> não gerenciam certificados SSL/TLS diretamente, mas podem ter papéis auxiliares na automação e segurança."
        ],
        realWorld: [
            "Um desenvolvedor que cria uma aplicação web na AWS pode usar <strong>ACM</strong> para provisionar certificados SSL/TLS gratuitos e associá-los a um <strong>Application Load Balancer</strong>, habilitando conexões HTTPS seguras e garantindo <strong>confidencialidade e integridade dos dados</strong>.",
            "Para aplicações implantadas em regiões <strong>sem suporte ao ACM</strong>, o desenvolvedor pode <strong>importar certificados SSL/TLS externos para o IAM</strong>, permitindo uso em serviços como ELB.",
            "Nesses casos, é necessário gerenciar manualmente o <strong>ciclo de vida dos certificados</strong>, incluindo renovação e armazenamento seguro das chaves privadas, garantindo a continuidade das conexões seguras."
        ]
    },
    {
        id: 17,
        title: "Parâmetro --region no AWS CLI",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Como um Desenvolvedor Associado Certificado pela AWS, você configurou o AWS CLI em sua estação de trabalho. Sua região padrão está definida como us-east-1 e seu usuário IAM tem permissões para executar comandos em serviços como EC2, S3 e RDS em qualquer região. Você deseja executar um comando para parar uma instância EC2 na região us-east-2. Qual das seguintes opções é a solução MAIS otimizada para esse caso de uso?",
        options: [
            { letter: "A", text: "Você deve criar um novo usuário IAM apenas para essa outra região.", correct: false },
            { letter: "B", text: "Utilize o parâmetro --region no comando.", correct: true },
            { letter: "C", text: "Utilize injeção de dependência do boto3.", correct: false },
            { letter: "D", text: "Você precisa sobrescrever a região padrão usando o comando aws configure.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Criar um novo usuário IAM para cada região não é uma prática recomendada nem eficiente, pois aumenta a complexidade da gestão de usuários e permissões sem necessidade." },
            { correct: true, text: "Correta. Usar o parâmetro --region permite especificar a região desejada para o comando sem alterar a configuração padrão, tornando essa abordagem a mais eficiente e prática para operações em múltiplas regiões." },
            { correct: false, text: "Incorreta. O boto3 é uma biblioteca Python para interagir com serviços AWS programaticamente e não é utilizada diretamente pelo AWS CLI. Essa opção é um distrator e não se aplica ao uso do CLI." },
            { correct: false, text: "Incorreta. Alterar a região padrão via aws configure não é a solução mais otimizada, pois exigiria redefinir a região padrão toda vez que precisar operar em uma região diferente, o que é pouco prático." }
        ],
        glossary: [
            "AWS CLI: interface de linha de comando da AWS para gerenciar serviços AWS de forma programática e automatizada.",
            "IAM user: usuário gerenciado pelo AWS Identity and Access Management, com permissões específicas para acessar e operar recursos AWS.",
            "Região padrão: configuração definida no AWS CLI que determina a região onde os comandos serão executados por padrão.",
            "Parâmetro --region: opção do AWS CLI que permite especificar a região alvo para um comando individual, sobrescrevendo a região padrão.",
            "boto3: biblioteca Python oficial da AWS para interagir programaticamente com serviços AWS.",
            "Injeção de dependência: padrão de design em programação para fornecer dependências a objetos, facilitando testes e modularidade.",
            "EC2: serviço da AWS que fornece instâncias de máquinas virtuais para computação em nuvem.",
            "aws configure: comando do AWS CLI usado para configurar credenciais, região padrão e formato de saída."
        ],
        generalExplanation: [
            "A forma mais adequada de parar uma instância EC2 na região <strong>us-east-2</strong> usando AWS CLI é <strong>informar o parâmetro </strong><code><strong>--region</strong></code><strong> no comando</strong>, por exemplo: <code>aws ec2 stop-instances --instance-ids i-1234567890abcdef0 --region us-east-2</code>.",
            "Essa abordagem é <strong>otimizada</strong>, pois permite executar comandos em múltiplas regiões sem alterar a configuração global (<code>aws configure</code>) nem criar usuários IAM adicionais.",
            "Alterar a região padrão para cada operação seria <strong>pouco prático</strong> em ambientes multi-região.",
            "Criar usuários IAM distintos para cada região aumenta <strong>complexidade administrativa desnecessária</strong>.",
            "O uso de <code>--region</code> mantém <strong>flexibilidade</strong>, simplifica a gestão e segue as <strong>melhores práticas da AWS</strong> para gerenciamento de recursos distribuídos."
        ],
        realWorld: [
            "Em ambientes de produção, desenvolvedores frequentemente gerenciam recursos em múltiplas regiões para garantir <strong>alta disponibilidade e resiliência</strong>:",
            "Ao usar <strong>AWS Lambda</strong> que interage com instâncias EC2 em diferentes regiões, o parâmetro <code>--region</code> permite executar comandos sem alterar configurações globais, facilitando a manutenção e automação.",
            "Em <strong>scripts de automação</strong> para backup em S3 ou escalonamento de RDS, especificar a região diretamente no comando garante que as operações sejam direcionadas corretamente, evitando impacto em recursos de outras regiões.",
            "Essa prática aumenta a <strong>eficiência operacional</strong> e reduz riscos de erros causados por configurações de região incorretas."
        ]
    },
    {
        id: 18,
        title: "Auto Scaling do EC2 - Cenários incorretos",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma empresa de TI está configurando Auto Scaling para suas instâncias Amazon EC2 distribuídas em diferentes Zonas de Disponibilidade (AZs) e Regiões. Quais dos seguintes cenários NÃO estão corretos sobre o Auto Scaling do EC2? (Selecione duas.)",
        options: [
            { letter: "A", text: "O Amazon EC2 Auto Scaling tenta distribuir as instâncias de forma equilibrada entre as Zonas de Disponibilidade habilitadas para seu grupo de Auto Scaling.", correct: false },
            { letter: "B", text: "Para grupos de Auto Scaling em uma VPC, as instâncias EC2 são lançadas em sub-redes.", correct: false },
            { letter: "C", text: "Um grupo de Auto Scaling pode conter instâncias EC2 em apenas uma Zona de Disponibilidade de uma Região.", correct: true },
            { letter: "D", text: "Um grupo de Auto Scaling pode conter instâncias EC2 em uma ou mais Zonas de Disponibilidade dentro da mesma Região.", correct: false },
            { letter: "E", text: "Grupos de Auto Scaling que abrangem múltiplas Regiões precisam ser habilitados para todas as Regiões especificadas.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Esta afirmação é correta. O Auto Scaling distribui as instâncias uniformemente entre as Zonas de Disponibilidade habilitadas. Se uma AZ ficar indisponível, o Auto Scaling lança novas instâncias em AZs saudáveis e redistribui quando a AZ retorna ao estado saudável." },
            { correct: false, text: "Incorreta. Esta afirmação está correta. Para grupos de Auto Scaling em uma VPC, as instâncias EC2 são lançadas em sub-redes específicas que o cliente seleciona ao criar ou atualizar o grupo." },
            { correct: true, text: "Correta. Esta afirmação está incorreta para grupos de Auto Scaling. Um grupo de Auto Scaling pode conter instâncias EC2 em uma ou mais Zonas de Disponibilidade dentro da mesma Região, não se limitando a apenas uma AZ." },
            { correct: false, text: "Incorreta. Esta é uma afirmação correta. Grupos de Auto Scaling podem abranger múltiplas Zonas de Disponibilidade dentro da mesma Região para melhorar a disponibilidade e resiliência." },
            { correct: true, text: "Correta. Esta afirmação está incorreta. Grupos de Auto Scaling não podem abranger múltiplas Regiões. Cada grupo de Auto Scaling está restrito a uma única Região." }
        ],
        glossary: [
            "Auto Scaling group: conjunto de instâncias EC2 gerenciadas automaticamente para escalabilidade e alta disponibilidade.",
            "Zona de Disponibilidade (AZ): data center isolado dentro de uma Região AWS.",
            "Região: área geográfica que contém múltiplas Zonas de Disponibilidade.",
            "VPC (Virtual Private Cloud): rede virtual isolada na AWS onde recursos podem ser lançados de forma segura.",
            "Sub-rede: segmento de rede dentro da VPC onde as instâncias EC2 são lançadas.",
            "Distribuição equilibrada: estratégia para distribuir instâncias uniformemente entre as Zonas de Disponibilidade habilitadas.",
            "Instância EC2: servidor virtual na nuvem AWS usado para executar aplicações."
        ],
        generalExplanation: [
            "<strong>Auto Scaling Groups (ASG)</strong> operam dentro de <strong>uma única Região</strong>, mas podem abranger múltiplas Zonas de Disponibilidade para garantir alta disponibilidade e resiliência.",
            "O ASG lança instâncias EC2 em sub-redes específicas da VPC e distribui as instâncias <strong>de forma equilibrada entre as AZs habilitadas</strong>, evitando pontos únicos de falha.",
            "Afirmações de que um ASG pode conter instâncias em apenas uma AZ ou abranger múltiplas Regiões são <strong>incorretas</strong>:",
            "Somente uma AZ → reduz a tolerância a falhas.",
            "Múltiplas Regiões → violaria a arquitetura regional da AWS; cada região deve ter seu próprio ASG."
        ],
        realWorld: [
            "Um desenvolvedor configurando uma aplicação escalável pode criar um <strong>Auto Scaling Group</strong> para lidar com variações de carga, distribuindo instâncias EC2 entre várias AZs dentro da mesma Região.",
            "Exemplo: se uma AZ ficar indisponível, o ASG lança automaticamente instâncias em outras AZs saudáveis, mantendo a <strong>alta disponibilidade</strong>.",
            "Para arquiteturas multi-região, cada Região terá seu próprio ASG, permitindo estratégias de <strong>recuperação de desastre</strong> e redução de latência para usuários finais.",
            "Esse conhecimento é essencial para projetar aplicações resilientes, escaláveis e tolerantes a falhas na nuvem AWS."
        ]
    },
    {
        id: 19,
        title: "User data em instâncias EC2",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma empresa executa suas operações tecnológicas em uma frota de instâncias Amazon EC2. A empresa precisa que um determinado software esteja disponível nas instâncias para suportar seus fluxos de trabalho diários. A equipe de desenvolvimento foi orientada a usar o recurso de user data das instâncias EC2. Quais das alternativas a seguir são verdadeiras sobre a configuração de user data em instâncias EC2? (Selecione duas.)",
        options: [
            { letter: "A", text: "Por padrão, o user data é executado apenas durante o ciclo de boot quando você lança a instância pela primeira vez", correct: true },
            { letter: "B", text: "Quando uma instância está em execução, você pode atualizar o user data usando credenciais do usuário root", correct: false },
            { letter: "C", text: "Por padrão, o user data é executado toda vez que uma instância EC2 é reiniciada", correct: false },
            { letter: "D", text: "Por padrão, os scripts inseridos como user data não possuem privilégios de usuário root para execução", correct: false },
            { letter: "E", text: "Por padrão, os scripts inseridos como user data são executados com privilégios de usuário root", correct: true }
        ],
        explanations: [
            { correct: true, text: "Correta. O comportamento padrão do user data é executar scripts e diretivas cloud-init somente na primeira inicialização da instância. Para executar o user data em reinicializações, configurações adicionais são necessárias." },
            { correct: false, text: "Incorreta. Não é possível modificar o user data enquanto a instância está em execução, mesmo com credenciais root. É possível apenas visualizar o user data atual." },
            { correct: false, text: "Incorreta. Por padrão, o user data é executado apenas durante o ciclo de boot inicial da instância. Para que o user data seja executado em reinicializações subsequentes, é necessário configurar explicitamente essa funcionalidade." },
            { correct: false, text: "Incorreta. Os scripts de user data são executados como usuário root por padrão, portanto, não é necessário usar sudo para comandos que requerem privilégios elevados." },
            { correct: true, text: "Correta. Scripts fornecidos via user data são executados com privilégios de root, o que significa que não é necessário usar o comando sudo dentro do script. Qualquer arquivo criado será de propriedade do root, e permissões adicionais devem ser configuradas se usuários não-root precisarem acessar esses arquivos." }
        ],
        glossary: [
            "user data: scripts ou comandos fornecidos durante a criação da instância EC2 que são executados automaticamente no <strong>primeiro boot</strong> para configurar a instância.",
            "root user: usuário com privilégios administrativos completos no sistema operacional, capaz de executar qualquer comando sem restrições.",
            "cloud-init: pacote utilizado em instâncias Linux para processar e executar scripts e configurações durante a inicialização da instância.",
            "boot cycle: processo de inicialização do sistema operacional da instância EC2.",
            "sudo: comando usado para executar ações com privilégios elevados, geralmente para obter permissões de root temporariamente.",
            "instância EC2: máquina virtual provisionada na nuvem AWS para executar aplicações e serviços.",
            "privilégios: permissões de acesso e execução no sistema operacional que determinam o que um usuário ou processo pode fazer.",
            "configuração padrão: comportamento definido automaticamente pelo sistema, sem necessidade de ajustes manuais."
        ],
        generalExplanation: [
            "O <strong>user data</strong> em instâncias EC2 é projetado para executar scripts <strong>automaticamente no primeiro ciclo de boot</strong>, facilitando a instalação e configuração inicial do software necessário:",
            "Os scripts são executados com <strong>privilégios de root</strong>, eliminando a necessidade de usar <code>sudo</code> dentro do script.",
            "Por padrão, <strong>user data não é reexecutado</strong> em reinicializações subsequentes, evitando execuções duplicadas e possíveis conflitos.",
            "O <strong>user data não pode ser modificado</strong> enquanto a instância está em execução, reforçando a importância de definir corretamente os scripts no lançamento da instância."
        ],
        realWorld: [
            "Em <strong>ambientes de desenvolvimento ou produção</strong>, o user data pode automatizar a instalação de agentes de monitoramento, bibliotecas ou configurações necessárias assim que a instância é iniciada.",
            "Exemplo: ao lançar uma frota de instâncias para um <strong>serviço web</strong>, o user data garante que o servidor web, dependências e configurações de segurança estejam prontas <strong>sem intervenção manual</strong>.",
            "Em <strong>ambientes dinâmicos com auto scaling</strong>, o uso correto do user data garante que novas instâncias sejam <strong>configuradas imediatamente e integradas ao sistema</strong>, mantendo consistência e agilidade.",
            "Entender que o user data é executado apenas no primeiro boot ajuda a planejar ajustes posteriores utilizando <strong>scripts de inicialização adicionais</strong> ou <strong>serviços de configuração gerenciada</strong>, evitando problemas de configuração duplicada."
        ]
    },
    {
        id: 20,
        title: "Health check no ELB - Instâncias não saudáveis",
        domain: "Solução de problemas e otimização",
        prompt: "Você criou um Elastic Load Balancer que marcou todas as instâncias EC2 no grupo de destino como não saudáveis. Surpreendentemente, ao acessar o endereço IP das instâncias EC2 no navegador, você consegue acessar seu site. Qual poderia ser a razão pela qual suas instâncias estão sendo marcadas como não saudáveis? (Selecione duas.)",
        options: [
            { letter: "A", text: "Você precisa associar um Elastic IP às instâncias EC2", correct: false },
            { letter: "B", text: "O grupo de segurança da instância EC2 não permite tráfego proveniente do grupo de segurança do Application Load Balancer", correct: true },
            { letter: "C", text: "Sua aplicação web utiliza um runtime que não é suportado pelo Application Load Balancer", correct: false },
            { letter: "D", text: "A rota para a verificação de integridade está configurada incorretamente", correct: true },
            { letter: "E", text: "Os volumes EBS foram montados incorretamente", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Elastic IPs não são necessários para que o Application Load Balancer funcione corretamente, pois ele gerencia o tráfego para as instâncias sem necessidade de IPs estáticos." },
            { correct: true, text: "Correta. Para que o Load Balancer realize a verificação de integridade e encaminhe o tráfego, o grupo de segurança da instância deve permitir conexões vindas do grupo de segurança do Load Balancer, tanto na porta do listener quanto na porta da verificação de integridade." },
            { correct: false, text: "Incorreta. O Application Load Balancer é agnóstico ao runtime da aplicação, atuando no nível de rede e HTTP, portanto essa opção é um distraidor sem relação com o problema." },
            { correct: true, text: "Correta. Se a rota configurada para a verificação de integridade (health check) estiver incorreta, o Load Balancer não conseguirá validar que a instância está saudável, mesmo que o site esteja acessível diretamente pelo IP." },
            { correct: false, text: "Incorreta. Como é possível acessar o site diretamente pelo IP da instância, isso indica que o volume EBS está funcionando corretamente e não é a causa do problema." }
        ],
        glossary: [
            "Elastic Load Balancer (ELB): serviço da AWS que <strong>distribui automaticamente o tráfego</strong> de entrada entre múltiplas instâncias EC2, garantindo <strong>alta disponibilidade e escalabilidade</strong>.",
            "Health Check (verificação de integridade): mecanismo do ELB que envia requisições periódicas às instâncias para verificar se estão <strong>respondendo corretamente</strong>.",
            "Grupo de Segurança: conjunto de regras de firewall virtual que <strong>controla o tráfego de entrada e saída</strong> das instâncias EC2, definindo quais conexões são permitidas.",
            "Listener: componente do ELB que <strong>escuta requisições</strong> em uma porta e protocolo específicos, encaminhando-as para as instâncias de destino.",
            "Application Load Balancer (ALB): tipo de ELB que opera na <strong>camada 7 (aplicação)</strong> do modelo OSI, permitindo <strong>roteamento avançado baseado em conteúdo HTTP/HTTPS</strong>."
        ],
        generalExplanation: [
            "Instâncias EC2 podem ser marcadas como <strong>não saudáveis</strong> pelo ELB quando o <strong>health check falha</strong>.",
            "Causas comuns:",
            "<strong>Endpoint do health check incorreto</strong>: o ELB envia requisições para uma rota inexistente ou não responsiva, mesmo que o site funcione via IP.",
            "<strong>Regras de grupo de segurança inadequadas</strong>: se o grupo de segurança da instância não permite tráfego do grupo de segurança do ELB, as requisições do health check e do balanceador são bloqueadas.",
            "Essas causas são alinhadas às <strong>boas práticas AWS</strong> para garantir que o balanceador funcione corretamente."
        ],
        realWorld: [
            "Em produção, um <strong>ALB</strong> distribui tráfego de uma aplicação web hospedada em múltiplas instâncias EC2.",
            "Os <strong>health checks</strong> permitem detectar falhas e rotear tráfego apenas para instâncias saudáveis.",
            "Se o <strong>endpoint do health check estiver incorreto</strong> ou os <strong>grupos de segurança bloquearem o tráfego do ALB</strong>, instâncias podem ser marcadas como não saudáveis <strong>mesmo funcionando</strong>, causando indisponibilidade.",
            "Exemplo prático: uma aplicação serverless que interage com <strong>API Gateway</strong> e <strong>Lambda</strong>, ou microsserviços hospedados em EC2, requer configuração correta de <strong>grupos de segurança e endpoints de health check</strong>.",
            "Isso evita <strong>falsos positivos de falha</strong>, garantindo que o sistema permaneça <strong>resiliente e escalável</strong>, mantendo a <strong>alta disponibilidade</strong> para os usuários finais."
        ]
    },
    {
        id: 21,
        title: "Nova versão de API com mudanças incompatíveis",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma empresa deseja fornecer acesso beta a alguns desenvolvedores de sua equipe para uma nova versão da API REST do Amazon API Gateway da empresa, sem causar qualquer impacto aos clientes existentes que utilizam a API via interface frontend e autenticação Amazon Cognito. A nova versão possui novos endpoints e mudanças incompatíveis com versões anteriores, e a equipe de desenvolvimento da empresa é responsável pela manutenção dessa versão. Qual das alternativas abaixo satisfaz esses requisitos da forma MAIS eficiente operacionalmente?",
        options: [
            { letter: "A", text: "Criar uma nova API no API Gateway que aponte para o novo código da aplicação da API e fazer com que os desenvolvedores apontem os endpoints para essa nova API.", correct: true },
            { letter: "B", text: "Configurar um deployment com canary release na API do API Gateway e fazer com que os desenvolvedores apontem para o deployment relevante referenciando a variável de estágio no endpoint.", correct: false },
            { letter: "C", text: "Criar um estágio de desenvolvimento na API do API Gateway e fazer com que os desenvolvedores apontem os endpoints para esse estágio de desenvolvimento.", correct: false },
            { letter: "D", text: "Criar novas chaves de API na API do API Gateway e fazer com que os desenvolvedores apontem para os endpoints passando as novas chaves de API.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Criar uma nova API é a maneira mais eficiente de isolar versões incompatíveis da API. Isso permite que apenas os desenvolvedores autorizados testem a nova versão, sem afetar os clientes existentes. Essa abordagem oferece maior controle, escalabilidade e segurança." },
            { correct: false, text: "Incorreta. O canary release direciona uma porcentagem do tráfego para uma nova versão, mas não garante controle de acesso exclusivo a determinados usuários. Isso não atende ao requisito de fornecer acesso apenas a um grupo beta." },
            { correct: false, text: "Incorreta. Estágios compartilham a mesma API base e não são recomendados para versões incompatíveis. Eles são úteis para testar variações pequenas (como dev/test/prod), mas não isolam alterações quebradoras." },
            { correct: false, text: "Incorreta. As chaves de API servem para controle de acesso e limites de uso, mas não garantem o isolamento de versões incompatíveis. Todas as chaves ainda operariam sobre a mesma API, sem separar a versão beta dos clientes existentes." }
        ],
        glossary: [
            "API Gateway: serviço gerenciado da AWS para criar, publicar, manter, monitorar e proteger APIs RESTful e WebSocket em escala.",
            "Estágio (Stage): ambiente lógico dentro do API Gateway que representa uma versão ou fase da API, como desenvolvimento, teste ou produção.",
            "Canary Release: técnica de implantação que direciona uma pequena porcentagem do tráfego para uma nova versão da aplicação, permitindo testes controlados.",
            "Chave de API (API Key): token usado para controlar acesso e aplicar limites de uso em APIs, mas não para isolar versões da API.",
            "Amazon Cognito: serviço que fornece autenticação, autorização e gerenciamento de usuários para aplicações web e móveis.",
            "Versão incompatível: alteração em uma API que quebra a compatibilidade com versões anteriores, impedindo que clientes antigos funcionem corretamente com a nova versão."
        ],
        generalExplanation: [
            "A abordagem correta para gerenciar uma <strong>nova versão incompatível</strong> da API é <strong>criar uma nova API no API Gateway</strong>:",
            "Isso garante <strong>isolamento completo</strong> entre a versão beta e a versão em produção.",
            "<strong>Estágios</strong> compartilham a mesma API base e <strong>não isolam alterações incompatíveis</strong>.",
            "<strong>Chaves de API</strong> e <strong>canary releases</strong> apenas controlam acesso ou tráfego, <strong>não isolam versões</strong>.",
            "Criar uma nova API permite <strong>controle granular</strong>, facilita a manutenção e reduz riscos operacionais, alinhando-se às <strong>melhores práticas da AWS</strong> para gerenciamento de versões incompatíveis."
        ],
        realWorld: [
            "Quando uma equipe lança uma nova versão de uma API com mudanças significativas, como novos endpoints ou alterações de formato de dados que <strong>não são compatíveis com clientes existentes</strong>, eles criam uma <strong>nova API no API Gateway</strong> apontando para o código atualizado.",
            "A API original permanece ativa para os usuários em produção, permitindo testes beta <strong>sem impacto nos clientes existentes</strong>.",
            "Essa prática facilita o <strong>gerenciamento do ciclo de vida da API</strong>, possibilitando implementar atualizações, monitorar métricas e controlar acesso de forma independente para cada versão.",
            "Em ambientes <strong>serverless</strong>, a nova API pode integrar-se a funções <strong>AWS Lambda</strong> atualizadas, garantindo que a infraestrutura suporte as mudanças <strong>sem interrupções para os usuários finais</strong>."
        ]
    },
    {
        id: 22,
        title: "Função !FindInMap no CloudFormation",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Você está criando um template do CloudFormation para implantar sua aplicação CMS rodando em uma instância EC2 dentro da sua conta AWS. Como a aplicação será implantada em múltiplas regiões, você precisa criar um mapa com todos os possíveis valores da AMI base. Como você deve invocar a função !FindInMap para atender a esse caso de uso?",
        options: [
            { letter: "A", text: "!FindInMap [ MapName, TopLevelKey, SecondLevelKey, ThirdLevelKey ]", correct: false },
            { letter: "B", text: "!FindInMap [ MapName, TopLevelKey, SecondLevelKey ]", correct: true },
            { letter: "C", text: "!FindInMap [ MapName ]", correct: false },
            { letter: "D", text: "!FindInMap [ MapName, TopLevelKey ]", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A função Fn::FindInMap suporta apenas dois níveis de chaves para acessar valores em um mapa declarado na seção Mappings. Passar três níveis de chave excede o número de parâmetros aceitos e causará erro na execução do template." },
            { correct: true, text: "Correta. A função Fn::FindInMap retorna o valor correspondente às duas chaves fornecidas dentro de um mapa declarado na seção Mappings do template. O primeiro parâmetro é o nome lógico do mapa, o segundo é a chave de nível superior (por exemplo, a região), e o terceiro é a chave de segundo nível (por exemplo, o tipo de arquitetura da AMI). Essa é a forma correta para acessar valores em mapas aninhados no CloudFormation." },
            { correct: false, text: "Incorreta. A função Fn::FindInMap necessita de pelo menos dois níveis de chave para localizar um valor dentro do mapa. Passar apenas o nome do mapa não é válido e resultará em erro." },
            { correct: false, text: "Incorreta. A função Fn::FindInMap requer exatamente dois níveis de chave (TopLevelKey e SecondLevelKey) para acessar o valor desejado dentro do mapa. Fornecer apenas um nível de chave é insuficiente para recuperar um valor aninhado." }
        ],
        glossary: [
            "Fn::FindInMap: função intrínseca do AWS CloudFormation usada para buscar valores em mapas aninhados definidos na seção <strong>Mappings</strong> do template.",
            "Mappings: seção do template CloudFormation onde são declarados mapas de valores estáticos organizados por chaves, usados para parametrizar configurações.",
            "TopLevelKey: chave de primeiro nível em um mapa, geralmente representando uma categoria principal, como a região AWS.",
            "SecondLevelKey: chave de segundo nível em um mapa, usada para detalhar ou especificar o valor desejado dentro do primeiro nível.",
            "AMI (Amazon Machine Image): imagem pré-configurada usada para lançar instâncias EC2 na AWS.",
            "CloudFormation: serviço da AWS que permite modelar e provisionar recursos de infraestrutura de forma automatizada e segura."
        ],
        generalExplanation: [
            "A função <strong>Fn::FindInMap</strong> do CloudFormation exige exatamente <strong>três parâmetros</strong>:",
            "<strong>Nome do mapa</strong> (Mapping Name)",
            "<strong>Chave de primeiro nível</strong> (TopLevelKey), por exemplo, a região AWS",
            "<strong>Chave de segundo nível</strong> (SecondLevelKey), por exemplo, o tipo ou arquitetura da AMI",
            "Se mais ou menos chaves forem fornecidas, o template falhará na execução.",
            "Essa abordagem permite criar templates <strong>reutilizáveis e portáveis</strong> entre múltiplas regiões, garantindo que a aplicação utilize a AMI correta para cada ambiente e reduzindo hardcoding de valores."
        ],
        realWorld: [
            "Imagine um desenvolvedor que precisa implantar uma aplicação CMS em várias regiões da AWS:",
            "Ele define na seção <strong>Mappings</strong> um mapa contendo as AMIs específicas para cada região e arquitetura.",
            "Ao criar a stack, o template usa <strong>Fn::FindInMap</strong> com <strong>TopLevelKey = AWS::Region</strong> e <strong>SecondLevelKey = tipo/arquitetura da instância</strong> para recuperar a AMI correta.",
            "Isso garante que, independentemente da região, a stack sempre lance instâncias EC2 com a imagem apropriada, evitando erros de configuração e facilitando manutenção e atualização do template quando novas AMIs ou regiões forem adicionadas.",
            "Esse padrão é especialmente útil em ambientes <strong>multi-região</strong> ou <strong>multi-conta</strong>, mantendo consistência, confiabilidade e automação completa do deploy."
        ]
    },
    {
        id: 23,
        title: "Cognito User Pools para autenticação JWT",
        domain: "Segurança",
        prompt: "Você é um desenvolvedor de uma aplicação web escrita em .NET que utiliza o AWS SDK. Precisa implementar um mecanismo de autenticação que retorne um JWT (JSON Web Token). Qual serviço da AWS ajudará no gerenciamento e manipulação desses tokens?",
        options: [
            { letter: "A", text: "Cognito Identity Pools", correct: false },
            { letter: "B", text: "Cognito Sync", correct: false },
            { letter: "C", text: "API Gateway", correct: false },
            { letter: "D", text: "Cognito User Pools", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Cognito Identity Pools é usado para conceder credenciais temporárias da AWS a usuários autenticados ou anônimos, permitindo acesso a serviços AWS como S3 e DynamoDB. Ele não emite tokens JWT para autenticação, mas sim credenciais temporárias para autorização de acesso a recursos AWS." },
            { correct: false, text: "Incorreta. O Amazon Cognito Sync é um serviço e biblioteca cliente que permite a sincronização de dados relacionados ao usuário entre dispositivos diferentes. Ele não é responsável pela emissão ou gerenciamento de tokens de autenticação, mas sim pela sincronização de dados do perfil do usuário entre dispositivos móveis e web, sem necessidade de backend próprio." },
            { correct: false, text: "Incorreta. Embora o API Gateway possa ser usado para validar tokens JWT em chamadas de API, ele não é o serviço responsável pela emissão ou gerenciamento dos tokens. O API Gateway atua como um ponto de entrada para APIs e pode integrar-se com serviços de autenticação, mas não gera os tokens JWT diretamente." },
            { correct: true, text: "Correta. O Amazon Cognito User Pools é o serviço que gerencia usuários e autenticação, emitindo tokens JWT após a autenticação bem-sucedida. Ele implementa tokens de ID, acesso e refresh conforme o padrão OpenID Connect (OIDC). O token de ID é um JWT que contém informações sobre o usuário autenticado, como nome, email e telefone, e pode ser usado para autenticar usuários em recursos do servidor ou APIs." }
        ],
        glossary: [
            "JWT (JSON Web Token): padrão aberto para criação de tokens <strong>compactos, seguros e auto-contidos</strong> que transmitem informações de autenticação e autorização entre partes.",
            "Cognito User Pools: serviço da AWS que gerencia <strong>registro, autenticação e gerenciamento de usuários</strong>, emitindo tokens JWT após a autenticação.",
            "Cognito Identity Pools: serviço da AWS que fornece <strong>credenciais temporárias</strong> para acessar recursos AWS, permitindo autenticação federada, mas <strong>não emite tokens JWT</strong>.",
            "API Gateway: serviço para criar, publicar e gerenciar APIs RESTful e WebSocket; pode <strong>validar tokens JWT</strong>, mas <strong>não é responsável pela emissão</strong>.",
            "Cognito Sync: serviço para <strong>sincronização de dados do usuário</strong> entre dispositivos, sem relação direta com autenticação ou emissão de tokens.",
            "OpenID Connect (OIDC): protocolo de autenticação baseado em OAuth 2.0 que define padrões para emissão e uso de <strong>tokens de identidade</strong>, como JWT.",
            "Token de ID: JWT que contém informações do <strong>usuário autenticado</strong>, usado para identificação em aplicações.",
            "Token de acesso: JWT que <strong>autoriza o acesso</strong> a recursos protegidos.",
            "Token de refresh: token usado para <strong>renovar tokens de acesso</strong> sem necessidade de nova autenticação do usuário."
        ],
        generalExplanation: [
            "O <strong>Amazon Cognito User Pools</strong> é o serviço AWS indicado para:",
            "Gerenciar <strong>autenticação de usuários</strong>.",
            "Emitir <strong>tokens JWT</strong> (ID, acesso e refresh) conforme o padrão <strong>OpenID Connect</strong>.",
            "Integrar com aplicações para controle de sessão e autorização.",
            "Outros serviços mencionados <strong>não emitem JWT</strong>:",
            "<strong>Cognito Identity Pools</strong>: apenas fornece credenciais temporárias para recursos AWS.",
            "<strong>API Gateway</strong>: pode validar tokens, mas não gera.",
            "<strong>Cognito Sync</strong>: foca em sincronização de dados, não autenticação.",
            "Portanto, para implementar autenticação que <strong>retorne JWT</strong>, o <strong>Cognito User Pools</strong> é a escolha correta, alinhada às boas práticas da AWS."
        ],
        realWorld: [
            "Em uma aplicação web (.NET, por exemplo), o <strong>Cognito User Pools</strong> gerencia cadastro e login de usuários.",
            "Após autenticação, o sistema recebe <strong>tokens JWT</strong>:",
            "<strong>Token de ID</strong>: exibe informações do usuário.",
            "<strong>Token de acesso</strong>: autoriza chamadas a APIs protegidas via API Gateway.",
            "Integração com <strong>API Gateway</strong> permite validação automática dos JWTs, simplificando o controle de acesso e reduzindo a necessidade de lógica personalizada no backend.",
            "Essa abordagem garante uma <strong>arquitetura segura, escalável e fácil de manter</strong>, seguindo as melhores práticas de autenticação na AWS."
        ]
    },
    {
        id: 24,
        title: "CloudTrail para auditoria do SSM Parameter Store",
        domain: "Solução de problemas e otimização",
        prompt: "Sua empresa armazenou todos os segredos da aplicação no SSM Parameter Store. A equipe de auditoria solicitou um relatório para entender melhor quando e quem realizou chamadas de API contra o SSM Parameter Store. Qual das opções abaixo pode ser usada para gerar esse relatório?",
        options: [
            { letter: "A", text: "Utilizar os logs de acesso do SSM Parameter Store no CloudWatch Logs para obter um registro das ações realizadas por um usuário", correct: false },
            { letter: "B", text: "Utilizar o AWS CloudTrail para obter um registro das ações realizadas por um usuário", correct: true },
            { letter: "C", text: "Utilizar o recurso de listagem do SSM Parameter Store para obter um registro das ações realizadas por um usuário", correct: false },
            { letter: "D", text: "Utilizar os logs de acesso do SSM Parameter Store armazenados no S3 para obter um registro das ações realizadas por um usuário", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Embora o CloudWatch Logs possa ser integrado para monitoramento, ele não fornece informações detalhadas sobre quem realizou as chamadas de API, nem quando elas ocorreram, o que é essencial para auditoria." },
            { correct: true, text: "Correta. O AWS CloudTrail registra todas as chamadas de API feitas para o Systems Manager Parameter Store, incluindo informações sobre quem fez a solicitação, quando, de qual endereço IP e outros detalhes importantes para auditoria e conformidade." },
            { correct: false, text: "Incorreta. O recurso de listagem do Parameter Store permite visualizar parâmetros armazenados, mas não registra ou fornece histórico de ações ou chamadas de API feitas por usuários." },
            { correct: false, text: "Incorreta. Embora seja possível configurar logs de acesso no S3 para alguns serviços, o SSM Parameter Store não gera logs de acesso detalhados no S3 que permitam identificar quem realizou chamadas de API." }
        ],
        glossary: [
            "SSM Parameter Store: serviço da AWS para armazenamento seguro e hierárquico de configurações e segredos.",
            "AWS CloudTrail: serviço que registra chamadas de API e eventos, permitindo auditoria detalhada e monitoramento de atividades.",
            "CloudWatch Logs: serviço de coleta e monitoramento de logs, mas não captura detalhes de chamadas de API por usuário.",
            "Logs de acesso S3: registram acessos a buckets S3, não aplicáveis para Parameter Store.",
            "Recurso de listagem do Parameter Store: permite visualizar parâmetros, mas não mantém histórico de chamadas ou ações."
        ],
        generalExplanation: [
            "Para auditoria detalhada do <strong>SSM Parameter Store</strong>, capturando quem realizou cada chamada de API, quando e de onde, o <strong>CloudTrail</strong> é a solução correta.",
            "Ele registra identidade do usuário, timestamp, endereço IP e metadados relevantes.",
            "CloudWatch Logs, logs de acesso S3 ou a listagem nativa do Parameter Store não fornecem histórico detalhado de chamadas de API, tornando-os inadequados para auditoria de conformidade."
        ],
        realWorld: [
            "Equipes de segurança ou auditoria podem usar <strong>CloudTrail</strong> para rastrear acessos e modificações em parâmetros sensíveis, garantindo rastreabilidade e conformidade regulatória.",
            "Por exemplo, em uma aplicação serverless que utiliza segredos do Parameter Store, o CloudTrail permite identificar rapidamente quem alterou um valor crítico, em qual hora e de qual IP.",
            "Integração com <strong>Amazon Athena</strong> ou <strong>AWS Glue</strong> permite criar relatórios automatizados e consultas históricas para monitoramento contínuo, detecção de acessos suspeitos e governança de segredos em microserviços, pipelines CI/CD e aplicações distribuídas."
        ]
    },
    {
        id: 25,
        title: "Cache de API para melhorar desempenho",
        domain: "Solução de problemas e otimização",
        prompt: "Uma empresa deseja melhorar o desempenho de seu serviço de API popular que oferece acesso de leitura não autenticado a informações estatísticas atualizadas diariamente, utilizando Amazon API Gateway e AWS Lambda. Quais medidas a empresa pode adotar para alcançar esse objetivo?",
        options: [
            { letter: "A", text: "Habilitar o cache de API no API Gateway", correct: true },
            { letter: "B", text: "Configurar o API Gateway para usar Elasticache com Memcached", correct: false },
            { letter: "C", text: "Configurar o API Gateway para usar um Endpoint VPC Gateway", correct: false },
            { letter: "D", text: "Configurar planos de uso e chaves de API no API Gateway", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O API Gateway oferece estratégias para otimizar a API e melhorar a responsividade, como o cache de respostas e compressão de payload. Habilitar o cache de API no Amazon API Gateway permite armazenar em cache as respostas dos endpoints, reduzindo o número de chamadas ao backend e melhorando a latência das requisições." },
            { correct: false, text: "Incorreta. O Elasticache para Memcached não pode ser integrado diretamente ao API Gateway para melhorar a responsividade da API neste caso. Elasticache atua como um serviço downstream e não é uma opção nativa para cache no API Gateway." },
            { correct: false, text: "Incorreta. Endpoints de gateway são usados para conectar VPCs diretamente a serviços como Amazon S3 e DynamoDB sem passar pela internet, mas não melhoram a performance do API Gateway nem habilitam AWS PrivateLink para APIs." },
            { correct: false, text: "Incorreta. Planos de uso e chaves de API são usados para controlar o acesso, limitar e monitorar o consumo da API, mas não melhoram a responsividade ou o desempenho do serviço. Eles são mecanismos de controle e segurança, não de otimização de desempenho." }
        ],
        glossary: [
            "API Gateway caching: mecanismo para armazenar respostas de API e reduzir chamadas ao backend, melhorando latência e escalabilidade.",
            "Elasticache Memcached: cache em memória gerenciado pela AWS, que não possui integração direta com o API Gateway para cache de respostas.",
            "Usage plans and API keys: permitem controlar acesso, limitar uso e monitorar consumo da API, focados em segurança e gerenciamento, não em desempenho.",
            "VPC Gateway Endpoint: conexão privada entre uma VPC e serviços AWS (como S3 e DynamoDB), melhorando segurança e latência, mas não performance do API Gateway.",
            "Latency: tempo total que uma requisição leva para ser processada e receber uma resposta.",
            "Payload compression: técnica para reduzir o tamanho dos dados transmitidos, ajudando na performance da rede.",
            "AWS PrivateLink: serviço que permite conexões privadas entre VPCs e serviços AWS, aumentando segurança e performance em casos específicos."
        ],
        generalExplanation: [
            "A melhor alternativa para reduzir latência e carga no backend é <strong>habilitar o cache de API no API Gateway</strong>.",
            "O caching armazena respostas de endpoints específicos, evitando chamadas repetidas à função Lambda e diminuindo a latência percebida pelo usuário.",
            "Elasticache, Usage Plans, VPC Endpoints e PrivateLink não oferecem caching nativo para respostas do API Gateway; são focados em segurança, conectividade ou controle de uso.",
            "O caching é especialmente eficiente para dados que são consultados frequentemente, mas atualizados periodicamente, garantindo performance sem alterar a lógica do backend."
        ],
        realWorld: [
            "Um time que mantém uma <strong>API pública com dados atualizados diariamente</strong> pode usar o cache do API Gateway para reduzir o número de invocações da função Lambda.",
            "<strong>Exemplo:</strong> uma aplicação de estatísticas esportivas que atualiza informações uma vez por dia. Configurando o cache para expirar a cada 24 horas, os usuários recebem respostas rápidas sem sobrecarregar o backend.",
            "Essa abordagem <strong>reduz custos</strong>, melhora a experiência do usuário e garante que o backend seja menos impactado por picos de tráfego.",
            "Em arquiteturas <strong>serverless</strong>, o cache do API Gateway permite balancear custo, desempenho e escalabilidade usando recursos nativos da AWS, sem necessidade de soluções externas complexas."
        ]
    },
    {
        id: 26,
        title: "Elastic Beanstalk para deploy em EC2",
        domain: "Implantação",
        prompt: "Um desenvolvedor foi solicitado a criar uma aplicação web para ser implantada em instâncias EC2. O desenvolvedor deseja focar apenas na escrita do código da aplicação, sem se preocupar com o provisionamento, configuração e implantação dos servidores. Como um Associate Developer, qual serviço AWS você recomendaria para este caso de uso?",
        options: [
            { letter: "A", text: "AWS Elastic Beanstalk", correct: true },
            { letter: "B", text: "AWS Serverless Application Model (SAM)", correct: false },
            { letter: "C", text: "AWS CloudFormation", correct: false },
            { letter: "D", text: "AWS CodeDeploy", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O AWS Elastic Beanstalk oferece um ambiente gerenciado que facilita a implantação e execução de aplicações na nuvem. Ele cuida do provisionamento, configuração e implantação dos recursos necessários, permitindo que o desenvolvedor foque apenas no código da aplicação." },
            { correct: false, text: "Incorreta. O AWS SAM é um framework para construir aplicações serverless, geralmente usando AWS Lambda e outros serviços sem servidor. Como a aplicação precisa ser implantada em instâncias EC2, essa opção não é adequada." },
            { correct: false, text: "Incorreta. O AWS CloudFormation permite criar e gerenciar recursos AWS por meio de templates, mas exige que o desenvolvedor defina explicitamente os recursos e sua configuração. Não abstrai o provisionamento e implantação da aplicação como o Elastic Beanstalk faz." },
            { correct: false, text: "Incorreta. O AWS CodeDeploy automatiza implantações de software em instâncias e outros ambientes, mas não realiza o provisionamento ou configuração dos servidores. Portanto, não atende ao requisito de abstrair o gerenciamento do servidor." }
        ],
        glossary: [
            "AWS Elastic Beanstalk: serviço gerenciado que facilita <strong>implantação e gerenciamento de aplicações web</strong>, automatizando provisionamento, configuração, balanceamento de carga, escalabilidade e monitoramento de recursos.",
            "AWS Serverless Application Model (SAM): framework para desenvolvimento e implantação de <strong>aplicações serverless</strong>, utilizando Lambda, API Gateway e outros serviços sem servidor.",
            "AWS CodeDeploy: serviço que <strong>automatiza implantações de código</strong> em instâncias EC2, servidores on-premises ou outros ambientes, mas <strong>não gerencia o provisionamento ou configuração da infraestrutura</strong>.",
            "AWS CloudFormation: serviço que permite criar e gerenciar recursos AWS por meio de <strong>templates declarativos</strong>, exigindo que o usuário defina explicitamente infraestrutura e configuração."
        ],
        generalExplanation: [
            "O <strong>AWS Elastic Beanstalk</strong> é a melhor escolha porque:",
            "Oferece <strong>ambiente gerenciado completo</strong>, abstraindo totalmente o <strong>provisionamento, configuração e implantação</strong> da aplicação em EC2.",
            "Permite que desenvolvedores <strong>concentrem-se apenas no código</strong>, enquanto o Beanstalk gerencia dimensionamento automático, balanceamento de carga, monitoramento de saúde da aplicação, atualizações e recuperação de falhas.",
            "As outras opções não oferecem essa <strong>abstração total da infraestrutura</strong> para aplicações baseadas em EC2:",
            "<strong>SAM</strong>: foca em serverless, não EC2.",
            "<strong>CodeDeploy</strong>: automatiza deploy, mas não provisiona nem configura infraestrutura.",
            "<strong>CloudFormation</strong>: requer definição explícita de toda infraestrutura."
        ],
        realWorld: [
            "Equipes ágeis podem <strong>lançar aplicações web rapidamente</strong> sem gerenciar manualmente servidores ou redes.",
            "Exemplo: uma startup hospeda seu site no <strong>Elastic Beanstalk</strong>, garantindo deploy em múltiplas instâncias EC2, configurações otimizadas e monitoramento integrado, escalabilidade automática e alta disponibilidade, recuperação automática de falhas.",
            "Isso permite que desenvolvedores foquem em <strong>funcionalidades e correção de bugs</strong>, enquanto a plataforma cuida da infraestrutura, garantindo <strong>desempenho consistente e confiável</strong>."
        ]
    },
    {
        id: 27,
        title: "Seção inválida no template CloudFormation",
        domain: "Implantação",
        prompt: "O líder técnico da sua equipe revisou um template YAML do CloudFormation escrito por um novo integrante e identificou que uma seção inválida foi adicionada ao template. Qual das seguintes opções representa uma seção inválida do template CloudFormation?",
        options: [
            { letter: "A", text: "Seção 'Conditions' do template", correct: false },
            { letter: "B", text: "Seção 'Parameters' do template", correct: false },
            { letter: "C", text: "Seção 'Resources' do template", correct: false },
            { letter: "D", text: "Seção 'Dependencies' do template", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A seção 'Conditions' é opcional e permite definir condições que controlam se certos recursos serão criados ou se propriedades específicas serão atribuídas durante a criação ou atualização da stack. Por exemplo, pode-se criar um recurso condicionalmente dependendo se a stack é para ambiente de produção ou teste." },
            { correct: false, text: "Incorreta. A seção 'Parameters' é opcional e permite passar valores para o template em tempo de execução (durante a criação ou atualização da stack). Parâmetros podem ser referenciados nas seções 'Resources' e 'Outputs'." },
            { correct: false, text: "Incorreta. A seção 'Resources' é a única seção obrigatória do template e especifica os recursos da stack e suas propriedades, como uma instância do Amazon EC2 ou um bucket do Amazon S3. Recursos podem ser referenciados nas seções 'Resources' e 'Outputs'." },
            { correct: true, text: "Correta. Não existe uma seção chamada 'Dependencies' em templates do CloudFormation. Embora seja possível definir dependências entre recursos usando propriedades específicas como 'DependsOn', não há uma seção dedicada chamada 'Dependencies' no template." }
        ],
        glossary: [
            "Conditions: seção opcional do template CloudFormation que define condições para criar ou configurar recursos condicionalmente.",
            "Resources: seção obrigatória do template que especifica os recursos AWS a serem criados, como instâncias EC2, buckets S3, etc.",
            "Parameters: seção opcional que permite passar valores dinâmicos para o template durante a criação ou atualização da stack.",
            "DependsOn: propriedade usada dentro de <strong>Resources</strong> para definir a ordem de criação entre recursos, garantindo que um recurso seja criado somente após outro.",
            "Stack: conjunto de recursos AWS gerenciados como uma unidade, criada e atualizada a partir de um template CloudFormation.",
            "Template: arquivo em <strong>JSON ou YAML</strong> que define recursos, parâmetros, condições e outras configurações para criar uma stack no CloudFormation."
        ],
        generalExplanation: [
            "No CloudFormation, os templates possuem <strong>seções válidas</strong> como <code>Resources</code>, <code>Parameters</code>, <code>Conditions</code>, <code>Outputs</code>, entre outras.",
            "A seção <strong>\"Dependencies\"</strong> <strong>não é reconhecida como válida</strong>.",
            "Para definir <strong>dependências entre recursos</strong>, deve-se usar a propriedade <code><strong>DependsOn</strong></code> dentro da seção <code>Resources</code>, <strong>não criar uma seção separada</strong>.",
            "Seguir a <strong>estrutura correta do template</strong> é fundamental para garantir que a stack seja criada e atualizada <strong>sem erros</strong>."
        ],
        realWorld: [
            "Em desenvolvimento AWS, ao criar templates CloudFormation, <strong>saber que \"Dependencies\" não existe</strong> evita erros de validação do template.",
            "Permite usar corretamente <code><strong>DependsOn</strong></code> para controlar a ordem de criação de recursos, como garantir que um <strong>banco de dados</strong> seja criado antes de uma aplicação que dele depende.",
            "Equipes que trabalham com <strong>infraestrutura como código</strong> devem seguir padrões e boas práticas para manter templates legíveis, funcionais e consistentes entre diferentes membros e projetos.",
            "Entender a <strong>estrutura oficial</strong> facilita revisão de código, colaboração em equipe e provisionamento confiável de infraestrutura."
        ]
    },
    {
        id: 28,
        title: "Registro CNAME no Route 53 para domínio externo",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma aplicação está hospedada por um terceiro e exposta em yourapp.3rdparty.com. Você gostaria que seus usuários acessassem sua aplicação usando www.mydomain.com, domínio que você possui e gerencia no Route 53. Qual tipo de registro do Route 53 você deve criar para isso?",
        options: [
            { letter: "A", text: "Criar um registro CNAME", correct: true },
            { letter: "B", text: "Criar um registro A", correct: false },
            { letter: "C", text: "Criar um registro PTR", correct: false },
            { letter: "D", text: "Criar um registro Alias", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Um registro CNAME mapeia consultas DNS de um nome de domínio para outro domínio ou subdomínio. Ele é ideal para apontar www.mydomain.com para yourapp.3rdparty.com. Contudo, não é possível criar um registro CNAME para o domínio raiz (zone apex), como mydomain.com, mas para subdomínios como www.mydomain.com é permitido." },
            { correct: false, text: "Incorreta. O registro A é usado para apontar um domínio ou subdomínio diretamente para um endereço IP. Ele não pode ser utilizado para mapear um nome de domínio para outro nome de domínio." },
            { correct: false, text: "Incorreta. O registro PTR (Pointer) é utilizado para resolver um endereço IP para um nome de domínio totalmente qualificado (FQDN), funcionando como um DNS reverso. Ele não serve para mapear um nome de domínio para outro." },
            { correct: false, text: "Incorreta. Registros Alias permitem rotear tráfego para recursos específicos da AWS, como distribuições CloudFront, buckets S3, ou para outro registro dentro da mesma zona hospedada. Eles não podem ser usados para apontar para domínios externos genéricos, como yourapp.3rdparty.com, que não são recursos AWS gerenciados." }
        ],
        glossary: [
            "Registro A: associa um nome de domínio a um endereço IPv4.",
            "Registro PTR: usado para resolução reversa, mapeando IP para nome de domínio.",
            "Registro CNAME: mapeia um nome de domínio para outro domínio, permitindo redirecionamento.",
            "Registro Alias: registro especial no Route 53 que aponta para recursos AWS ou outros registros da mesma zona hospedada, sem custo adicional.",
            "Zone Apex: domínio raiz de uma zona DNS (ex.: example.com), que não pode ter registros CNAME.",
            "FQDN (Fully Qualified Domain Name): nome completo de domínio que indica sua posição na hierarquia DNS.",
            "DNS (Domain Name System): sistema que traduz nomes de domínio em endereços IP.",
            "Route 53: serviço de DNS gerenciado pela AWS para gerenciar registros de domínios."
        ],
        generalExplanation: [
            "A solução correta para mapear um subdomínio (ex.: www.mydomain.com) para um domínio externo (ex.: yourapp.3rdparty.com) é criar um <strong>registro CNAME</strong>.",
            "Registros A apontam para IPs, que podem mudar em serviços externos.",
            "Registros PTR são para DNS reverso, não para redirecionamento.",
            "Registros Alias são específicos para recursos AWS e não funcionam para domínios externos genéricos.",
            "Observação: CNAME <strong>não pode ser usado no zone apex</strong>, mas é permitido para subdomínios como www."
        ],
        realWorld: [
            "Um desenvolvedor que integra uma aplicação SaaS hospedada externamente pode criar um CNAME no Route 53 para <strong>www.mydomain.com</strong> apontando para o serviço externo, garantindo que os usuários acessem o aplicativo via domínio próprio sem gerenciar IPs.",
            "Essa prática é comum em arquiteturas serverless, onde o frontend é hospedado por terceiros, mas o domínio é controlado pela equipe interna.",
            "Usar CNAME mantém flexibilidade, facilita manutenção, e evita problemas caso o endereço do serviço externo mude, alinhando-se às boas práticas de DNS e garantindo uma experiência consistente para os usuários."
        ]
    },
    {
        id: 29,
        title: "TTL no DynamoDB para expiração de dados",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Você está armazenando informações de apostas em sua aplicação de apostas e gostaria que os dados da tabela DynamoDB expirassem automaticamente após uma semana. O que você deve usar?",
        options: [
            { letter: "A", text: "Usar uma função Lambda", correct: false },
            { letter: "B", text: "Usar TTL (Time To Live)", correct: true },
            { letter: "C", text: "Usar DynamoDB Streams", correct: false },
            { letter: "D", text: "Usar DAX", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Embora seja possível implementar a expiração dos dados com uma função Lambda, isso exigiria configurar índices, realizar consultas ou varreduras frequentes e acionar a função periodicamente via CloudWatch Events. Essa abordagem é complexa, menos eficiente e mais trabalhosa do que usar o recurso nativo TTL do DynamoDB." },
            { correct: true, text: "Correta. O TTL é um recurso nativo do DynamoDB que permite definir um timestamp para expiração de cada item na tabela. Quando o tempo definido é atingido, o DynamoDB exclui automaticamente esses itens, reduzindo o uso de armazenamento e custos sem necessidade de intervenção manual ou código adicional." },
            { correct: false, text: "Incorreta. DynamoDB Streams fornece um registro das alterações feitas na tabela, permitindo capturar eventos de inserção, atualização e exclusão. Entretanto, ele não realiza a exclusão automática dos dados expirados. Vale notar que itens expirados via TTL geram eventos no Stream, mas a exclusão em si não é feita pelo Stream." },
            { correct: false, text: "Incorreta. O Amazon DynamoDB Accelerator (DAX) é um cache em memória totalmente gerenciado que melhora a performance das leituras do DynamoDB, reduzindo a latência de milissegundos para microssegundos. No entanto, DAX não oferece funcionalidade para expirar ou deletar dados automaticamente." }
        ],
        glossary: [
            "TTL (Time To Live): recurso do DynamoDB que permite expirar itens automaticamente com base em um timestamp definido, removendo-os da tabela após o tempo configurado.",
            "DynamoDB Streams: serviço que captura alterações (inserções, atualizações, exclusões) feitas em uma tabela DynamoDB e disponibiliza como eventos.",
            "DAX (DynamoDB Accelerator): cache em memória totalmente gerenciado que acelera operações de leitura no DynamoDB, reduzindo latência.",
            "Lambda: serviço de computação serverless da AWS que executa código em resposta a eventos.",
            "CloudWatch Events: serviço que permite agendar e monitorar eventos para disparar ações automáticas, como invocar funções Lambda."
        ],
        generalExplanation: [
            "O <strong>TTL</strong> é a solução nativa para expiração automática de dados no DynamoDB.",
            "Define-se um atributo de timestamp em cada item, e o DynamoDB remove esses itens automaticamente após o período configurado.",
            "Outras soluções, como Lambda, DAX ou Streams, não oferecem expiração automática de forma direta e exigiriam implementação adicional, aumentando complexidade e risco de erros.",
            "TTL ajuda a reduzir custos de armazenamento e mantém a tabela organizada, alinhando-se às melhores práticas da AWS."
        ],
        realWorld: [
            "Em uma aplicação de apostas, o <strong>TTL</strong> pode ser usado para remover automaticamente registros de apostas antigas após uma semana, evitando acúmulo de dados e otimizando custos.",
            "Em aplicações serverless que usam DynamoDB, o TTL elimina a necessidade de criar rotinas manuais de limpeza.",
            "Também é útil para dados temporários como sessões de usuário, caches ou logs de eventos, garantindo eficiência e escalabilidade.",
            "Essa automação permite que o time de desenvolvimento concentre-se em funcionalidades de negócio, sabendo que o ciclo de vida dos dados está gerenciado de forma segura e integrada."
        ]
    },
    {
        id: 30,
        title: "Ordem dos passos no AWS CDK",
        domain: "Implantação",
        prompt: "Como desenvolvedor, você está criando uma aplicação usando o AWS Cloud Development Kit (CDK). Qual das seguintes opções representa a ordem correta dos passos a serem seguidos para criar uma aplicação usando o AWS CDK?",
        options: [
            { letter: "A", text: "Criar a aplicação a partir de um template fornecido pelo AWS CDK -> Adicionar código à aplicação para criar recursos dentro das stacks -> Construir a aplicação (opcional) -> Sintetizar uma ou mais stacks na aplicação -> Fazer o deploy das stacks na sua conta AWS", correct: true },
            { letter: "B", text: "Criar a aplicação a partir de um template fornecido pelo AWS CloudFormation -> Adicionar código à aplicação para criar recursos dentro das stacks -> Construir a aplicação (opcional) -> Sintetizar uma ou mais stacks na aplicação -> Fazer o deploy das stacks na sua conta AWS", correct: false },
            { letter: "C", text: "Criar a aplicação a partir de um template fornecido pelo AWS CDK -> Adicionar código à aplicação para criar recursos dentro das stacks -> Sintetizar uma ou mais stacks na aplicação -> Fazer o deploy das stacks na sua conta AWS -> Construir a aplicação", correct: false },
            { letter: "D", text: "Criar a aplicação a partir de um template fornecido pelo AWS CloudFormation -> Adicionar código à aplicação para criar recursos dentro das stacks -> Sintetizar uma ou mais stacks na aplicação -> Fazer o deploy das stacks na sua conta AWS -> Construir a aplicação", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Esta é a sequência padrão recomendada para o desenvolvimento com AWS CDK: iniciar a aplicação com um template do CDK, adicionar código para definir recursos, construir o código (opcional, mas recomendado para detectar erros), sintetizar as stacks para gerar templates CloudFormation e, finalmente, fazer o deploy das stacks na conta AWS." },
            { correct: false, text: "Incorreta. Não se cria uma aplicação AWS CDK a partir de templates do AWS CloudFormation. O AWS CDK gera templates CloudFormation a partir do código, mas o ponto de partida é um template do próprio AWS CDK, não do CloudFormation." },
            { correct: false, text: "Incorreta. Embora o ponto de partida correto seja um template do AWS CDK, o passo de build não deve ocorrer após o deploy. O build é opcional, mas se feito, deve ser antes da síntese e do deploy para detectar erros antecipadamente." },
            { correct: false, text: "Incorreta. Além de usar templates do CloudFormation para iniciar a aplicação ser incorreto, a etapa de build não pode ocorrer após o deploy, pois o build é necessário antes da síntese e do deploy para garantir que o código esteja correto." }
        ],
        glossary: [
            "AWS CDK: AWS Cloud Development Kit, framework que permite definir infraestrutura como código usando linguagens de programação familiares (Python, TypeScript, Java, etc.), facilitando criação, manutenção e versionamento de recursos AWS.",
            "Template: modelo inicial de projeto que serve como base para iniciar uma aplicação ou stack, contendo a estrutura mínima necessária.",
            "Stack: conjunto lógico de recursos AWS gerenciados e implantados juntos como uma unidade.",
            "Sintetizar (Synthesize): processo de conversão do código CDK em templates CloudFormation, que descrevem os recursos a serem criados na AWS.",
            "Build: processo opcional de compilação do código-fonte, utilizado para verificar erros antes da implantação e garantir que o código esteja correto.",
            "Deploy: processo de implantação dos recursos definidos na stack na conta AWS, criando ou atualizando recursos conforme especificado."
        ],
        generalExplanation: [
            "A sequência correta para criar uma aplicação usando o AWS CDK é:",
            "<strong>Criar a aplicação a partir de um template CDK</strong> — nunca diretamente de um template CloudFormation, pois o CDK gera os templates automaticamente a partir do código.",
            "<strong>Adicionar o código para definir os recursos dentro das stacks</strong> — Lambda, DynamoDB, API Gateway, etc.",
            "<strong>Build (opcional, mas recomendado)</strong> — permite detectar erros no código antes de sintetizar e implantar.",
            "<strong>Sintetizar (synthesize)</strong> — converte o código CDK em templates CloudFormation.",
            "<strong>Deploy</strong> — provisiona os recursos na conta AWS usando os templates gerados.",
            "Seguindo essa ordem, o fluxo de trabalho é mais eficiente, reduz erros e mantém a infraestrutura organizada e versionada."
        ],
        realWorld: [
            "Em um projeto serverless típico:",
            "Um time inicia um projeto CDK a partir de um template, adicionando funções <strong>Lambda</strong>, tabelas <strong>DynamoDB</strong> e endpoints <strong>API Gateway</strong>.",
            "Executa o <strong>build</strong> para garantir que não haja erros no código.",
            "Sintetiza o projeto para gerar o template CloudFormation.",
            "Faz o <strong>deploy</strong> para provisionar os recursos na AWS.",
            "Esse fluxo permite versionamento do código, automação da infraestrutura, rollback seguro e evita problemas comuns como deploy de stacks com erros ou uso de templates incorretos. Além disso, aumenta produtividade e confiabilidade na gestão de aplicações na nuvem."
        ]
    },
    {
        id: 31,
        title: "Características do Elastic Load Balancer",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Um negócio de comércio eletrônico possui suas aplicações executando em uma frota de instâncias Amazon EC2 distribuídas por várias Regiões e Zonas de Disponibilidade. A equipe técnica sugeriu o uso de Elastic Load Balancers para melhorar o design arquitetural. Quais características do Elastic Load Balancer o tornam uma escolha vantajosa? (Selecione duas.)",
        options: [
            { letter: "A", text: "O Load Balancer se comunica com as instâncias EC2 subjacentes usando seus IPs públicos", correct: false },
            { letter: "B", text: "Construir um sistema altamente disponível", correct: true },
            { letter: "C", text: "Melhorar a escalabilidade vertical do sistema", correct: false },
            { letter: "D", text: "Implantar instâncias EC2 em múltiplas Regiões AWS", correct: false },
            { letter: "E", text: "Separar o tráfego público do tráfego privado", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Load Balancer se comunica com as instâncias EC2 usando seus endereços IP privados, o que aumenta a segurança e eficiência da comunicação interna." },
            { correct: true, text: "Correta. Elastic Load Balancing promove alta disponibilidade ao distribuir automaticamente o tráfego entre alvos saudáveis em múltiplas Zonas de Disponibilidade, garantindo tolerância a falhas e continuidade do serviço." },
            { correct: false, text: "Incorreta. Elastic Load Balancing oferece suporte à escalabilidade horizontal, distribuindo o tráfego entre múltiplas instâncias, e pode ser integrado a grupos de Auto Scaling para aumentar ou diminuir a quantidade de recursos, mas não melhora a escalabilidade vertical (aumento de capacidade de uma única instância)." },
            { correct: false, text: "Incorreta. Um Elastic Load Balancer pode distribuir o tráfego apenas entre instâncias EC2 dentro da mesma Região AWS, não entre Regiões diferentes." },
            { correct: true, text: "Correta. Os nós de um load balancer com acesso à internet possuem endereços IP públicos, mas o balanceador encaminha as requisições para os alvos (como instâncias EC2) usando seus IPs privados, permitindo que os alvos não precisem de IPs públicos para receber tráfego externo." }
        ],
        glossary: [
            "Elastic Load Balancer (ELB): distribui automaticamente o tráfego de entrada entre múltiplos recursos, como instâncias EC2, melhorando disponibilidade e escalabilidade.",
            "IP público: endereço acessível diretamente pela internet, usado para comunicação externa.",
            "IP privado: endereço usado para comunicação interna na rede, não acessível publicamente.",
            "Alta disponibilidade: capacidade de um sistema continuar funcionando mesmo diante de falhas ou indisponibilidades.",
            "Escalabilidade horizontal: aumento de capacidade adicionando recursos paralelos, como múltiplas instâncias.",
            "Região AWS: área geográfica com múltiplas Zonas de Disponibilidade (AZs).",
            "Zona de Disponibilidade (AZ): data center isolado dentro de uma região, resiliente a falhas de outras AZs."
        ],
        generalExplanation: [
            "O <strong>ELB</strong> distribui o tráfego de entrada entre instâncias EC2 usando <strong>IPs privados</strong>, separando tráfego público e interno, aumentando segurança e eficiência.",
            "Ao distribuir o tráfego entre instâncias em <strong>múltiplas AZs</strong>, o ELB garante <strong>alta disponibilidade</strong>, mantendo a operação mesmo se uma instância ou AZ falhar.",
            "Essa arquitetura é essencial para <strong>sistemas escaláveis e resilientes</strong>, seguindo as melhores práticas da AWS para aplicações distribuídas e tolerantes a falhas."
        ],
        realWorld: [
            "Um time de desenvolvimento de <strong>aplicações web de e-commerce</strong> pode usar ELBs para distribuir tráfego entre EC2s em várias AZs, garantindo que o site permaneça disponível mesmo diante de falhas em uma AZ.",
            "O ELB recebe requisições públicas via <strong>IP público</strong>, mas encaminha internamente para instâncias usando <strong>IPs privados</strong>, aumentando segurança e eficiência da comunicação.",
            "Integrando ELB com <strong>Auto Scaling</strong>, a aplicação escala horizontalmente conforme a demanda, mantendo <strong>desempenho e disponibilidade</strong> sem intervenção manual.",
            "Esse conhecimento é fundamental para arquitetar aplicações <strong>robustas, escaláveis e tolerantes a falhas</strong> na AWS, especialmente em ambientes distribuídos e com alta demanda."
        ]
    },
    {
        id: 32,
        title: "Política Rolling with additional batch no Elastic Beanstalk",
        domain: "Implantação",
        prompt: "Como um AWS Certified Developer Associate, você foi solicitado a criar um ambiente AWS Elastic Beanstalk para gerenciar o deploy de uma aplicação que possui alto tráfego e necessidades de alta disponibilidade. Você precisa implantar a nova versão usando o Beanstalk garantindo que a performance e a disponibilidade não sejam afetadas. Qual das seguintes opções é a forma MAIS otimizada de fazer isso, mantendo a solução custo-efetiva?",
        options: [
            { letter: "A", text: "Realizar o deploy usando a política de implantação 'All at once' (tudo de uma vez)", correct: false },
            { letter: "B", text: "Realizar o deploy usando a política de implantação 'Rolling with additional batch' (implantação em lotes sequenciais com lote adicional)", correct: true },
            { letter: "C", text: "Realizar o deploy usando a política de implantação 'Immutable' (implantação imutável)", correct: false },
            { letter: "D", text: "Realizar o deploy usando a política de implantação 'Rolling' (implantação em lotes sequenciais)", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Essa é a forma mais rápida de deploy, atualizando todas as instâncias simultaneamente. Porém, durante o processo, a aplicação pode ficar indisponível ou com baixa disponibilidade, o que não é adequado para aplicações com alto tráfego e alta necessidade de disponibilidade." },
            { correct: true, text: "Correta. Essa política lança um lote adicional de instâncias antes de iniciar o deploy em lotes sequenciais. Isso garante que a capacidade total e a largura de banda sejam mantidas durante todo o processo, evitando qualquer redução na disponibilidade. Embora o tempo de implantação seja maior, essa abordagem é ideal para aplicações que exigem alta disponibilidade e desempenho constante, mantendo a solução custo-efetiva." },
            { correct: false, text: "Incorreta. A implantação imutável cria um novo grupo de Auto Scaling com as novas instâncias para a nova versão, garantindo um rollback rápido e seguro em caso de falha. Apesar de ser muito segura, essa abordagem é mais lenta e mais cara, pois mantém duas infraestruturas simultâneas durante o deploy, o que pode não ser custo-efetivo para todas as situações." },
            { correct: false, text: "Incorreta. A política 'Rolling' realiza o deploy em lotes sequenciais, atualizando parte das instâncias por vez, o que mantém a maior parte da capacidade disponível durante o processo. Porém, durante o deploy, a capacidade total pode ser reduzida temporariamente, o que pode impactar aplicações com alto tráfego e alta necessidade de disponibilidade." }
        ],
        glossary: [
            "Elastic Beanstalk: serviço gerenciado da AWS que facilita a implantação, gerenciamento e escalabilidade automática de aplicações web.",
            "Deployment Policy (Política de Implantação): estratégia que define como as atualizações de uma aplicação são realizadas, minimizando impactos na disponibilidade.",
            "Rolling Deployment: atualização gradual das instâncias em grupos, substituindo parte delas por vez.",
            "Rolling with Additional Batch: variação do rolling deployment que adiciona um lote extra de instâncias antes de iniciar a atualização, mantendo a capacidade total.",
            "Immutable Deployment: criação de um novo conjunto de instâncias paralelas para a nova versão, permitindo rollback rápido e seguro.",
            "All-at-Once Deployment: atualização simultânea de todas as instâncias, causando indisponibilidade temporária.",
            "Auto Scaling Group: grupo de instâncias EC2 gerenciado automaticamente, que ajusta a capacidade conforme a demanda.",
            "Largura de banda: capacidade de tráfego e transferência de dados da aplicação."
        ],
        generalExplanation: [
            "A política <strong>Rolling with Additional Batch</strong> mantém a capacidade total durante o deploy, criando um lote extra de instâncias antes de atualizar as existentes.",
            "Isso evita queda temporária de capacidade e impactos na performance e disponibilidade, equilibrando <strong>segurança, desempenho e custo</strong>.",
            "Comparativamente:",
            "<strong>Immutable Deployment</strong>: seguro, mas mais lento e custoso, pois cria instâncias novas paralelas.",
            "<strong>Rolling Deployment simples</strong>: pode reduzir temporariamente a capacidade.",
            "<strong>All-at-Once</strong>: rápido, mas causa indisponibilidade total durante a atualização."
        ],
        realWorld: [
            "Em aplicações web de alto tráfego, como e-commerce ou sistemas financeiros, manter a experiência do usuário é crítico.",
            "Usando <strong>Rolling with Additional Batch</strong>, novas versões podem ser lançadas sem afetar usuários: um lote adicional mantém a capacidade, e a atualização ocorre sequencialmente.",
            "Por exemplo, ao lançar uma versão com melhorias críticas, a aplicação continua responsiva, evitando queda de serviço ou lentidão.",
            "Essa política também permite <strong>balancear custo e alta disponibilidade</strong>, evitando a necessidade de duplicar toda a infraestrutura como acontece em implantações imutáveis."
        ]
    },
    {
        id: 33,
        title: "Seção que NÃO pode ser associada a uma Condition",
        domain: "Implantação",
        prompt: "Um desenvolvedor em uma empresa está trabalhando em um template do CloudFormation para configurar recursos. Os recursos serão definidos por código e provisionados com base em certas condições definidas na seção Conditions. Qual seção de um template do CloudFormation NÃO pode ser associada a uma Condition?",
        options: [
            { letter: "A", text: "Outputs", correct: false },
            { letter: "B", text: "Conditions", correct: false },
            { letter: "C", text: "Parameters", correct: true },
            { letter: "D", text: "Resources", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A seção Outputs é opcional e declara valores de saída que podem ser importados por outras stacks, retornados em respostas ou visualizados no console do CloudFormation. Você pode associar condições aos outputs para que sejam criados condicionalmente, dependendo do resultado da condição." },
            { correct: false, text: "Incorreta. A seção Conditions é onde você define as expressões condicionais que determinam se certos recursos ou outputs devem ser criados ou configurados. Portanto, esta seção é essencial para o uso de condições no template." },
            { correct: true, text: "Correta. A seção Parameters permite que você insira valores personalizados no seu template do CloudFormation a cada criação ou atualização de stack. No entanto, as condições não podem ser aplicadas diretamente aos parâmetros, pois estes são usados para entrada de dados e não para controle condicional de criação ou configuração de recursos." },
            { correct: false, text: "Incorreta. A seção Resources descreve os recursos que você deseja provisionar na stack do CloudFormation. É possível associar condições aos recursos para que sejam criados apenas se a condição for verdadeira." }
        ],
        glossary: [
            "Parameters: seção do template CloudFormation que permite a entrada de valores personalizados no momento da criação ou atualização da stack.",
            "Conditions: seção onde são definidas expressões lógicas que determinam se certos recursos ou outputs devem ser criados ou configurados.",
            "Resources: seção que especifica os recursos AWS a serem provisionados pela stack.",
            "Outputs: seção que declara valores de saída do stack, que podem ser usados por outras stacks ou exibidos no console.",
            "Stack: conjunto de recursos AWS gerenciados como uma unidade pelo CloudFormation.",
            "Template: arquivo em JSON ou YAML que define a configuração e os recursos para provisionamento via CloudFormation.",
            "Condition: expressão lógica utilizada para controlar a criação condicional de recursos e outputs no template."
        ],
        generalExplanation: [
            "As <strong>condições</strong> no CloudFormation são usadas para controlar a criação condicional de <strong>Resources</strong> e <strong>Outputs</strong>, permitindo que a infraestrutura seja provisionada dinamicamente conforme critérios definidos.",
            "A seção <strong>Parameters</strong> é apenas para entrada de valores fornecidos pelo usuário e <strong>não suporta associação direta a condições</strong>, sendo assim a alternativa correta quando perguntado sobre seções que <strong>não podem ter condições associadas</strong>.",
            "Seções como <strong>Resources</strong> e <strong>Outputs</strong> podem usar expressões definidas em <strong>Conditions</strong> para decidir dinamicamente se determinados recursos ou saídas devem ser criados ou exibidos.",
            "A seção <strong>Conditions</strong> define as expressões lógicas que serão aplicadas, mas não é utilizada para fornecer parâmetros ou valores de entrada."
        ],
        realWorld: [
            "Um desenvolvedor pode criar templates CloudFormation que se adaptam a diferentes ambientes (desenvolvimento, homologação, produção).",
            "<strong>Exemplo:</strong> criar instâncias EC2 somente em produção.",
            "<strong>Parameters</strong> fornecem valores de entrada, como nomes de instâncias, tipos de máquinas ou IDs de VPC, enquanto <strong>Conditions</strong> determinam se certos recursos, como buckets S3 para logs, serão criados.",
            "Em aplicações serverless: um parâmetro define o <strong>nome da função Lambda</strong>. Uma condição decide se um <strong>bucket S3 de logs</strong> será criado, aplicando a expressão condicional na seção <strong>Resources</strong>.",
            "Essa separação permite templates flexíveis, reutilizáveis e alinhados às boas práticas de infraestrutura como código na AWS."
        ]
    },
    {
        id: 34,
        title: "Hosts Dedicados para isolamento single-tenant",
        domain: "Segurança",
        prompt: "Uma empresa de cibersegurança deseja executar suas aplicações em hardware de locação exclusiva para atender às diretrizes de segurança. Qual das opções a seguir é a forma MAIS econômica de isolar suas instâncias Amazon EC2 em um único locatário?",
        options: [
            { letter: "A", text: "Hosts Dedicados", correct: true },
            { letter: "B", text: "Instâncias Dedicadas", correct: false },
            { letter: "C", text: "Instâncias On-Demand", correct: false },
            { letter: "D", text: "Instâncias Spot", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Hosts Dedicados são servidores físicos completos dedicados exclusivamente ao uso do cliente, oferecendo controle e visibilidade sobre o posicionamento das instâncias no servidor. Eles garantem isolamento total em hardware, atendendo aos requisitos de segurança para hardware de locação exclusiva, embora tenham custo mais elevado que as Instâncias Dedicadas." },
            { correct: false, text: "Incorreta. Instâncias Dedicadas são instâncias Amazon EC2 que rodam em hardware dedicado a um único cliente, garantindo isolamento físico entre diferentes contas AWS. No entanto, elas podem compartilhar hardware com outras instâncias da mesma conta, o que não oferece isolamento físico exclusivo para todas as instâncias do cliente." },
            { correct: false, text: "Incorreta. Instâncias On-Demand cobram por capacidade computacional por segundo, sem compromissos de longo prazo, e oferecem controle total sobre o ciclo de vida da instância. No entanto, não garantem isolamento em hardware exclusivo e são uma das opções mais caras, não sendo adequadas para o requisito de isolamento em hardware single-tenant da empresa." },
            { correct: false, text: "Incorreta. Instâncias Spot são instâncias EC2 não utilizadas oferecidas a preços inferiores aos das instâncias On-Demand. Elas são executadas quando há capacidade disponível e o preço máximo definido pelo usuário excede o preço Spot. Apesar de serem econômicas, não garantem isolamento em hardware de locação exclusiva, pois podem compartilhar servidores físicos com outras instâncias, não atendendo ao requisito de segurança da empresa." }
        ],
        glossary: [
            "Instância Dedicada: instância Amazon EC2 que roda em hardware dedicado a um único cliente, mas que <strong>pode compartilhar o servidor físico</strong> com outras instâncias da mesma conta AWS.",
            "Instância Spot: instância EC2 oferecida a preço reduzido utilizando capacidade ociosa da AWS, <strong>sem garantia de isolamento físico</strong> exclusivo.",
            "Host Dedicado: servidor físico completo <strong>dedicado exclusivamente a um único cliente</strong>, permitindo controle sobre o posicionamento das instâncias e isolamento total do hardware.",
            "Instância On-Demand: instância EC2 cobrada por segundo, sem compromisso de longo prazo, <strong>compartilhando hardware</strong> com outras contas e clientes.",
            "Isolamento de hardware: garantia de que o hardware físico <strong>não é compartilhado entre diferentes clientes ou contas</strong>.",
            "VPC (Virtual Private Cloud): rede virtual isolada dentro da AWS onde as instâncias EC2 são executadas."
        ],
        generalExplanation: [
            "A escolha correta para <strong>isolamento completo em nível de hardware</strong> é <strong>Hosts Dedicados</strong>:",
            "Fornecem <strong>um servidor físico inteiro exclusivamente para o cliente</strong>, garantindo <strong>hardware single-tenant</strong> e eliminando riscos de co-localização com outras contas ou clientes.",
            "<strong>Instâncias Dedicadas</strong> podem compartilhar o hardware entre instâncias da mesma conta, <strong>não garantindo isolamento total</strong> para todas as instâncias.",
            "<strong>Instâncias Spot e On-Demand</strong> compartilham hardware com múltiplos clientes, portanto não atendem a requisitos rigorosos de segurança.",
            "Hosts Dedicados permitem <strong>controle sobre o posicionamento das instâncias</strong>, importante para conformidade e auditoria."
        ],
        realWorld: [
            "Uma empresa de <strong>cibersegurança</strong> que precisa seguir normas rígidas de segurança pode optar por executar aplicações críticas em <strong>Hosts Dedicados</strong>, assegurando que o ambiente <strong>não seja compartilhado fisicamente</strong> com outros clientes da AWS.",
            "Exemplo: ao processar informações sensíveis, o time de desenvolvimento provisiona Hosts Dedicados para hospedar instâncias EC2, garantindo <strong>isolamento físico</strong> e facilitando auditorias de segurança.",
            "Equipes que gerenciam ambientes <strong>regulados</strong> podem controlar o <strong>ciclo de vida e o posicionamento das instâncias</strong>, integrando com ferramentas como <strong>AWS Systems Manager</strong> e <strong>CloudTrail</strong> para manter <strong>visibilidade e compliance</strong>.",
            "Essa prática permite <strong>otimizar custos</strong>, usando hardware dedicado apenas para instâncias que realmente exigem isolamento exclusivo, mantendo segurança sem desperdício de recursos."
        ]
    },
    {
        id: 35,
        title: "Variáveis de política IAM para pastas de usuários no S3",
        domain: "Segurança",
        prompt: "O gerente de uma empresa de TI deseja configurar o acesso dos membros a pastas específicas de usuários em um bucket Amazon S3 - bucket-a. Assim, o usuário x pode acessar apenas os arquivos em sua pasta - bucket-a/user/user-x/ e o usuário y pode acessar apenas os arquivos em sua pasta - bucket-a/user/user-y/, e assim por diante. Como um Associate Developer, qual das seguintes construções do IAM você recomendaria para que o trecho da política possa ser genérico para todos os membros da equipe, evitando que o gerente precise criar uma política IAM separada para cada membro?",
        options: [
            { letter: "A", text: "Principal de política IAM", correct: false },
            { letter: "B", text: "Variáveis de política IAM", correct: true },
            { letter: "C", text: "Recurso de política IAM", correct: false },
            { letter: "D", text: "Condição de política IAM", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O elemento Principal é usado para especificar a entidade que pode acessar um recurso, geralmente em políticas baseadas em recursos ou políticas de confiança de funções IAM, e não pode ser usado em políticas baseadas em identidade para parametrizar o acesso de múltiplos usuários." },
            { correct: true, text: "Correta. As variáveis de política IAM funcionam como espaços reservados que são substituídos por valores específicos da solicitação no momento da avaliação da política. Isso permite criar uma única política genérica que se aplica a múltiplos usuários, como membros de uma equipe, controlando o acesso a pastas específicas de cada usuário sem a necessidade de políticas individuais." },
            { correct: false, text: "Incorreta. O elemento Resource define os recursos (ARNs) aos quais a política se aplica, mas não oferece um mecanismo para tornar o recurso dinâmico ou genérico para múltiplos usuários. Para isso, é necessário usar variáveis na definição do recurso." },
            { correct: false, text: "Incorreta. O elemento Condition permite especificar condições para quando uma política está em vigor, como comparar valores específicos, mas não é adequado para parametrizar recursos de forma genérica para múltiplos usuários com base em seus nomes ou pastas específicas." }
        ],
        glossary: [
            "Variáveis de política IAM: espaços reservados que são substituídos por <strong>valores dinâmicos</strong> no momento da avaliação da política, permitindo personalizar permissões para diferentes usuários sem criar políticas separadas.",
            "Condição de política IAM: bloco que define critérios específicos que devem ser atendidos para que a política seja aplicada, como comparação de atributos da solicitação; <strong>não parametriza recursos dinamicamente</strong>.",
            "Recurso de política IAM: elemento que especifica os <strong>recursos da AWS (ARNs)</strong> aos quais a política se aplica, definindo o escopo da permissão.",
            "Principal de política IAM: entidade (usuário, função ou serviço) autorizada a acessar um recurso, geralmente usado em <strong>políticas baseadas em recursos</strong> ou <strong>políticas de confiança</strong>."
        ],
        generalExplanation: [
            "Para controlar o acesso de múltiplos usuários a <strong>pastas específicas dentro de um bucket S3</strong> com uma <strong>única política</strong>, o uso de <strong>variáveis de política IAM</strong> é a melhor prática.",
            "Permite que o caminho do recurso seja <strong>parametrizado dinamicamente</strong> com base no usuário que faz a requisição, como <code>${aws:username}</code>, evitando criar uma política individual para cada membro da equipe.",
            "Outras opções, como <strong>condições</strong>, <strong>recursos fixos</strong> ou <strong>principal</strong>, <strong>não oferecem a flexibilidade</strong> de generalizar o acesso de forma segura e eficiente."
        ],
        realWorld: [
            "Em um ambiente corporativo, equipes de desenvolvimento ou suporte podem ter <strong>pastas individuais</strong> dentro de um bucket S3 compartilhado.",
            "Uma política usando <code>${aws:username}</code> garante que <strong>cada usuário acesse apenas sua pasta</strong>, mantendo segurança e isolamento, sem criar múltiplas políticas.",
            "Exemplo: em aplicações <strong>serverless</strong>, funções Lambda podem assumir papéis com <strong>políticas parametrizadas</strong> para acessar apenas os dados específicos de cada usuário.",
            "Essa abordagem facilita <strong>controle de acesso granular e automatizado</strong>, alinhado às <strong>melhores práticas de segurança AWS</strong>, reduzindo esforço administrativo e riscos de exposição de dados."
        ]
    },
    {
        id: 36,
        title: "Otimização de CPU no Lambda",
        domain: "Solução de problemas e otimização",
        prompt: "Uma equipe de desenvolvimento deseja implantar uma função AWS Lambda que exige alta utilização de CPU. Como um profissional com certificação Developer Associate, qual das seguintes opções você recomendaria para reduzir o tempo médio de execução da função?",
        options: [
            { letter: "A", text: "Implantar a função com a alocação de memória configurada para o valor máximo permitido.", correct: true },
            { letter: "B", text: "Implantar a função com a alocação de CPU configurada para o valor máximo.", correct: false },
            { letter: "C", text: "Implantar a função em múltiplas Regiões AWS.", correct: false },
            { letter: "D", text: "Implantar a função utilizando camadas Lambda (Lambda layers).", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A AWS Lambda aloca a capacidade de CPU proporcionalmente à quantidade de memória configurada para a função. Ao aumentar a memória para o máximo permitido, você também aumenta a capacidade de CPU disponível, o que pode reduzir o tempo de execução da função." },
            { correct: false, text: "Incorreta. A alocação direta de CPU não é um parâmetro configurável no Lambda. A CPU é alocada automaticamente em proporção à memória configurada para a função, portanto, não é possível definir a CPU separadamente." },
            { correct: false, text: "Incorreta. Implantar a função em várias regiões não aumenta a capacidade computacional ou o poder de CPU da função Lambda. Essa abordagem pode ser útil para alta disponibilidade ou latência, mas não reduz o tempo médio de execução da função." },
            { correct: false, text: "Incorreta. Camadas Lambda são arquivos .zip que podem conter bibliotecas, runtimes personalizados, dados ou arquivos de configuração para promover o reuso de código e facilitar a manutenção. Elas não aumentam a capacidade computacional ou o poder de CPU da função Lambda." }
        ],
        glossary: [
            "AWS Lambda: serviço de computação <strong>serverless</strong> que executa código em resposta a eventos, sem necessidade de gerenciamento de servidores.",
            "Camadas Lambda (Lambda layers): pacotes reutilizáveis contendo <strong>bibliotecas, runtimes ou arquivos de configuração</strong>, facilitando o reuso de código.",
            "Memória alocada: quantidade de memória configurada para a função Lambda, que <strong>determina também a capacidade de CPU disponível</strong>.",
            "CPU (Unidade Central de Processamento): responsável pela execução das instruções do código; em Lambda, a capacidade de CPU é <strong>proporcional à memória configurada</strong>.",
            "Região AWS: local físico onde os recursos da AWS são implantados; influencia latência e disponibilidade, mas <strong>não a capacidade computacional</strong> da função."
        ],
        generalExplanation: [
            "A capacidade de <strong>CPU</strong> disponível para uma função Lambda é <strong>proporcional à memória alocada</strong>.",
            "Para <strong>reduzir o tempo de execução</strong> em funções que exigem alto uso de CPU, a prática recomendada é <strong>aumentar a memória alocada</strong> para o máximo permitido, aumentando automaticamente a CPU.",
            "Configurar diretamente a CPU <strong>não é possível</strong>.",
            "Outras alternativas como:",
            "<strong>Camadas Lambda</strong> → apenas reutilização de código, não aumenta CPU.",
            "<strong>Implantação em múltiplas regiões</strong> → aumenta disponibilidade e reduz latência geográfica, mas não aumenta poder de processamento da função."
        ],
        realWorld: [
            "Em aplicações serverless que usam Lambda para <strong>tarefas intensivas em CPU</strong>, como: processamento de imagens, análise de dados, cálculos complexos.",
            "Ajustar a <strong>memória alocada</strong> melhora desempenho e reduz o tempo de execução.",
            "Exemplo: uma <strong>API</strong> usando Lambda + API Gateway pode acelerar respostas aumentando a memória das funções, melhorando a <strong>experiência do usuário</strong>.",
            "Durante otimizações contínuas, os desenvolvedores monitoram métricas no <strong>CloudWatch</strong> e ajustam memória conforme necessário, equilibrando <strong>custo e performance</strong> em ambientes serverless."
        ]
    },
    {
        id: 37,
        title: "Perda de saldos de burst no Elastic Beanstalk",
        domain: "Implantação",
        prompt: "Após uma implantação de teste em um ambiente Elastic Beanstalk, um desenvolvedor percebeu que todos os saldos acumulados de burst do Amazon EC2 foram perdidos. Qual das opções a seguir pode causar esse comportamento?",
        options: [
            { letter: "A", text: "Quando uma implantação canary falha, ela zera os saldos de burst do EC2.", correct: false },
            { letter: "B", text: "A implantação foi realizada como uma implantação All-at-once, esvaziando todos os saldos acumulados de burst do EC2.", correct: false },
            { letter: "C", text: "A implantação foi realizada usando atualizações imutáveis ou no modo de divisão de tráfego.", correct: true },
            { letter: "D", text: "A implantação foi realizada como uma implantação Rolling, resultando na reinicialização dos saldos de burst do EC2.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Falhas em implantações canary não resultam na reinicialização dos saldos de burst do EC2; essa alternativa é um distrator sem fundamento técnico." },
            { correct: false, text: "Incorreta. Implantações All-at-once atualizam todas as instâncias simultaneamente, mas não causam perda dos saldos de burst acumulados do EC2." },
            { correct: true, text: "Correta. Atualizações imutáveis lançam um conjunto completo de novas instâncias em um grupo de Auto Scaling separado, substituindo as antigas, o que resulta na perda dos saldos de burst acumulados. Da mesma forma, implantações com divisão de tráfego (traffic splitting) criam novas instâncias para testes canary, também causando a perda desses saldos. Além disso, políticas que substituem todas as instâncias durante a atualização, como atualizações gerenciadas com substituição de instâncias, também provocam essa perda." },
            { correct: false, text: "Incorreta. Implantações Rolling dividem as instâncias EC2 em lotes e atualizam uma parte por vez, preservando os saldos de burst acumulados, portanto não causam perda desses saldos." }
        ],
        glossary: [
            "Elastic Beanstalk: serviço gerenciado da AWS que facilita a implantação e gerenciamento de aplicações web, automatizando a infraestrutura subjacente.",
            "EC2 burst balance: créditos acumulados que permitem que instâncias EC2 do tipo burstable (T2, T3, etc.) excedam temporariamente sua capacidade base de CPU.",
            "Rolling deployment: atualização gradual de instâncias existentes, preservando o estado das que ainda não foram atualizadas.",
            "All-at-once deployment: substituição simultânea de todas as instâncias da aplicação.",
            "Immutable deployment: criação de um novo conjunto de instâncias paralelas para a nova versão, substituindo completamente as antigas após validação.",
            "Traffic splitting: divisão de tráfego entre versões para testes canary ou validação.",
            "Canary deployment: direciona uma pequena porcentagem do tráfego para a nova versão antes de liberar para todos os usuários.",
            "Auto Scaling group: conjunto de instâncias EC2 que escala automaticamente de acordo com a demanda."
        ],
        generalExplanation: [
            "A perda de <strong>saldos acumulados de burst</strong> ocorre quando as instâncias são completamente substituídas por novas, como em <strong>implantações imutáveis</strong> ou com <strong>divisão de tráfego</strong>, porque essas criam instâncias paralelas do zero.",
            "Em <strong>Rolling</strong> ou <strong>All-at-once</strong>, as instâncias existentes são atualizadas, mantendo os créditos de burst já acumulados.",
            "Entender essa diferença é importante para planejar o desempenho de aplicações que utilizam instâncias burstable durante atualizações."
        ],
        realWorld: [
            "Ao gerenciar aplicações no Elastic Beanstalk, usar <strong>implantações imutáveis</strong> aumenta a segurança e permite reversão rápida, mas as novas instâncias iniciarão com saldo zerado de burst, podendo impactar temporariamente o desempenho.",
            "Estratégias de <strong>divisão de tráfego (canary)</strong> permitem testar a nova versão com uma pequena parte do tráfego, porém também criam instâncias novas sem créditos acumulados.",
            "Desenvolvedores devem considerar o efeito no <strong>desempenho inicial</strong> ao planejar janelas de implantação e balancear segurança na atualização versus performance da aplicação."
        ]
    },
    {
        id: 38,
        title: "Parâmetro pseudo AWS::AccountId no CloudFormation",
        domain: "Implantação",
        prompt: "Sua empresa configurou o AWS Organizations para gerenciar múltiplas contas AWS. Dentro de cada conta AWS, existem diversos scripts do CloudFormation em execução. Seu gerente solicitou que cada script exiba o número da conta AWS onde o script foi executado. Qual parâmetro pseudo você deve usar para obter essa informação?",
        options: [
            { letter: "A", text: "AWS::Region", correct: false },
            { letter: "B", text: "AWS::StackName", correct: false },
            { letter: "C", text: "AWS::NoValue", correct: false },
            { letter: "D", text: "AWS::AccountId", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. AWS::Region retorna uma string que representa a região AWS onde o recurso está sendo criado, como us-west-2, mas não fornece o número da conta AWS." },
            { correct: false, text: "Incorreta. AWS::StackName retorna o nome da stack conforme especificado no comando aws cloudformation create-stack, como 'teststack', mas não retorna o ID da conta AWS." },
            { correct: false, text: "Incorreta. O parâmetro AWS::NoValue é utilizado para remover uma propriedade de recurso quando especificado como valor de retorno na função intrínseca Fn::If. Ele não retorna informações sobre a conta AWS." },
            { correct: true, text: "Correta. O parâmetro AWS::AccountId retorna o ID da conta AWS na qual a stack está sendo criada, permitindo que o script identifique a conta onde está sendo executado." }
        ],
        glossary: [
            "AWS Organizations: serviço da AWS que permite gerenciar e governar múltiplas contas AWS de forma centralizada, facilitando políticas, controle financeiro e governança.",
            "CloudFormation: serviço que possibilita criar e gerenciar recursos AWS através de <strong>templates declarativos</strong> em JSON ou YAML.",
            "Parâmetros pseudo: parâmetros pré-definidos pelo CloudFormation que fornecem informações dinâmicas sobre a stack ou o ambiente, sem necessidade de declaração explícita.",
            "AWS::AccountId: parâmetro pseudo que retorna o <strong>ID numérico da conta AWS</strong> onde a stack CloudFormation está sendo executada.",
            "AWS::NoValue: parâmetro pseudo usado para <strong>remover condicionalmente</strong> uma propriedade de recurso dentro de um template CloudFormation.",
            "AWS::Region: parâmetro pseudo que retorna a <strong>região AWS atual</strong> onde os recursos estão sendo criados, como <code>us-east-1</code> ou <code>eu-west-1</code>.",
            "AWS::StackName: parâmetro pseudo que retorna o <strong>nome da stack CloudFormation</strong> conforme definido na criação da stack."
        ],
        generalExplanation: [
            "A alternativa correta é <strong>AWS::AccountId</strong>, pois fornece diretamente o <strong>identificador único da conta AWS</strong> onde o template está sendo executado.",
            "Outros parâmetros não atendem ao requisito:",
            "<strong>AWS::Region</strong> retorna a região da stack.",
            "<strong>AWS::StackName</strong> retorna apenas o nome da stack.",
            "<strong>AWS::NoValue</strong> é usado para manipulação condicional de propriedades, <strong>não para obter dados da conta</strong>.",
            "Utilizar <strong>AWS::AccountId</strong> é recomendado em <strong>templates multi-conta</strong>, permitindo que scripts adaptem configurações, apliquem políticas específicas ou registrem informações com contexto correto, alinhado às boas práticas de governança e auditoria."
        ],
        realWorld: [
            "Em ambientes corporativos com <strong>múltiplas contas gerenciadas via AWS Organizations</strong>, desenvolvedores frequentemente implantam templates CloudFormation em diversas contas para padronizar infraestrutura:",
            "Saber <strong>em qual conta o template está sendo executado</strong> permite customizar recursos, aplicar políticas específicas ou registrar logs com o ID da conta, facilitando <strong>auditoria e troubleshooting</strong>.",
            "Por exemplo, um time de DevOps pode criar uma stack para provisionar recursos de rede e incluir no <strong>output o AWS::AccountId</strong>, permitindo identificar rapidamente a origem da stack em <strong>dashboards ou sistemas de monitoramento</strong>, garantindo maior <strong>controle e governança</strong> em ambientes distribuídos e automatizados."
        ]
    },
    {
        id: 39,
        title: "Cobrança mínima de instâncias EC2",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma startup com uma conta AWS recém-criada está testando diferentes instâncias EC2. Eles utilizaram uma instância de desempenho burstable - T2.micro - por 35 segundos e, em seguida, pararam a instância. Ao final do mês, qual será a duração de uso da instância pela qual a empresa será cobrada?",
        options: [
            { letter: "A", text: "60 segundos", correct: true },
            { letter: "B", text: "35 segundos", correct: false },
            { letter: "C", text: "0 segundos", correct: false },
            { letter: "D", text: "30 segundos", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A AWS cobra instâncias EC2 em incrementos de 1 segundo, mas com um tempo mínimo de 60 segundos. Ou seja, mesmo que a instância T2.micro baseada em Linux tenha sido usada por apenas 35 segundos, a cobrança será referente a 60 segundos." },
            { correct: false, text: "Incorreta. Apesar do uso ter sido de apenas 35 segundos, a AWS aplica uma cobrança mínima de 60 segundos mesmo para instâncias Linux." },
            { correct: false, text: "Incorreta. Como a instância foi iniciada e utilizada, mesmo que brevemente, haverá cobrança. A AWS nunca cobra zero em casos onde há uso real." },
            { correct: false, text: "Incorreta. A instância foi usada por 35 segundos, e mesmo que esse fosse o tempo real de uso, o faturamento mínimo é de 60 segundos." }
        ],
        glossary: [
            "EC2 (Elastic Compute Cloud): serviço da AWS que fornece capacidade computacional escalável na nuvem, permitindo o lançamento e gerenciamento de instâncias virtuais.",
            "T2.micro: instância EC2 da família <strong>burstable</strong>, com desempenho variável baseado em créditos de CPU, adequada para cargas de trabalho intermitentes.",
            "Cobrança por segundo: modelo de precificação da AWS em que o faturamento é calculado com base no tempo de uso da instância, medido em segundos, <strong>após o tempo mínimo de cobrança</strong>.",
            "Tempo mínimo de cobrança: período inicial pelo qual a AWS cobra o uso da instância; mesmo para Linux, o valor mínimo é de <strong>60 segundos</strong>."
        ],
        generalExplanation: [
            "Apesar de a instância <strong>T2.micro Linux</strong> ter sido usada por apenas <strong>35 segundos</strong>, a AWS aplicará o <strong>tempo mínimo de cobrança de 60 segundos</strong>.",
            "A <strong>cobrança por segundo</strong> só se aplica <strong>após esse primeiro minuto</strong>.",
            "Portanto, mesmo desligando a instância antes de completar 60 segundos, <strong>o custo será calculado como 60 segundos de execução</strong>."
        ],
        realWorld: [
            "Startups e desenvolvedores que realizam <strong>testes rápidos ou automações</strong> devem considerar esse tempo mínimo para estimar custos corretamente.",
            "Esse conhecimento é importante para cenários como: orquestrações curtas de instâncias EC2, pipelines de <strong>CI/CD</strong> que disparam instâncias temporárias, testes de <strong>benchmark ou scripts automatizados</strong>.",
            "Assim, evita-se surpresas na fatura, mesmo que a instância seja utilizada por segundos apenas."
        ]
    },
    {
        id: 40,
        title: "Idempotência com DynamoDB e Lambda",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma empresa está criando um aplicativo de jogos que será implantado em dispositivos móveis. O aplicativo enviará dados para uma API RESTful baseada em funções Lambda. O aplicativo atribuirá a cada requisição da API um identificador único. O volume de requisições da API pode variar aleatoriamente a qualquer momento do dia. Durante o throttling das requisições, o aplicativo pode precisar reenviar requisições. A API deve ser capaz de lidar com requisições duplicadas sem inconsistências ou perda de dados. Qual das seguintes abordagens você recomendaria para atender a esses requisitos?",
        options: [
            { letter: "A", text: "Persistir o identificador único de cada requisição em uma tabela MySQL no RDS. Modificar a função Lambda para verificar a tabela em busca do identificador antes de processar a requisição.", correct: false },
            { letter: "B", text: "Persistir o identificador único de cada requisição em um cache ElastiCache para Memcached. Modificar a função Lambda para verificar o cache em busca do identificador antes de processar a requisição.", correct: false },
            { letter: "C", text: "Persistir o identificador único de cada requisição em uma tabela DynamoDB. Modificar a função Lambda para verificar a tabela em busca do identificador antes de processar a requisição.", correct: true },
            { letter: "D", text: "Persistir o identificador único de cada requisição em uma tabela DynamoDB. Modificar a função Lambda para enviar uma resposta de erro ao cliente quando receber uma requisição duplicada.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Embora o RDS MySQL possa armazenar os identificadores, ele não é a melhor opção para lidar com picos massivos e imprevisíveis de requisições, pois escala verticalmente e pode se tornar um gargalo. O DynamoDB oferece escalabilidade horizontal automática e desempenho consistente em milissegundos, sendo mais adequado para aplicações com alta variação e volume de tráfego, como no caso apresentado." },
            { correct: false, text: "Incorreta. O Memcached é um sistema de cache simples que não oferece recursos de persistência, replicação ou snapshots, o que pode resultar em perda de dados em caso de falhas. Portanto, não é adequado para garantir a idempotência e evitar inconsistências em requisições duplicadas, especialmente em aplicações críticas que não podem perder dados." },
            { correct: true, text: "Correta. O DynamoDB é um banco de dados NoSQL totalmente gerenciado, serverless, que oferece alta performance e escalabilidade automática para lidar com grandes volumes de requisições. Armazenar o identificador único em uma tabela DynamoDB permite garantir que cada requisição seja processada apenas uma vez, evitando duplicidades e inconsistências. A função Lambda deve consultar a tabela para verificar se o identificador já foi processado antes de executar a lógica, garantindo assim a idempotência e evitando perda de dados." },
            { correct: false, text: "Incorreta. Embora o DynamoDB seja adequado para armazenar os identificadores, enviar uma resposta de erro ao cliente em caso de requisição duplicada pode causar inconsistência na experiência do usuário e não garante o tratamento transparente das duplicidades. O ideal é que a API lide com duplicatas de forma idempotente, processando apenas uma vez e retornando uma resposta consistente, sem erros desnecessários." }
        ],
        glossary: [
            "DynamoDB: banco de dados NoSQL gerenciado pela AWS, altamente escalável e de baixa latência, ideal para aplicações que exigem alta performance e disponibilidade.",
            "Lambda: serviço de computação serverless da AWS que executa código em resposta a eventos, sem necessidade de gerenciar servidores.",
            "Idempotência: propriedade que garante que múltiplas execuções da mesma operação produzem o mesmo resultado, evitando efeitos colaterais indesejados.",
            "Throttling: mecanismo que limita a taxa de requisições para proteger recursos contra sobrecarga.",
            "ElastiCache Memcached: serviço de cache em memória simples da AWS, que não oferece persistência ou replicação dos dados.",
            "RDS MySQL: serviço gerenciado de banco de dados relacional que escala verticalmente, podendo se tornar um gargalo em cargas altamente variáveis."
        ],
        generalExplanation: [
            "O <strong>DynamoDB</strong> é a melhor escolha para armazenar os identificadores únicos de requisições em uma arquitetura serverless que exige <strong>idempotência</strong>.",
            "Antes de processar uma requisição, a função Lambda verifica se o identificador já existe no DynamoDB, evitando processar requisições duplicadas.",
            "Essa abordagem garante <strong>armazenamento durável, altamente disponível e escalável</strong>, ideal para lidar com picos imprevisíveis de tráfego.",
            "Outras soluções, como ElastiCache Memcached, não oferecem persistência, e RDS MySQL pode se tornar um gargalo em cargas variáveis.",
            "Seguir essa estratégia atende às boas práticas da AWS para aplicações serverless com throttling e alta performance, mantendo consistência e integridade dos dados."
        ],
        realWorld: [
            "Em um aplicativo móvel de jogos, a API RESTful processa eventos enviados pelos dispositivos dos usuários via <strong>Lambda</strong>.",
            "Como o tráfego pode variar e clientes podem reenviar dados (ex.: por throttling ou falhas de rede), é fundamental <strong>garantir que cada evento seja processado apenas uma vez</strong>.",
            "Usando DynamoDB para registrar <strong>identificadores únicos de requisição</strong>, a função Lambda verifica rapidamente se a requisição já foi processada, mantendo pontuações corretas e estados consistentes do jogo.",
            "Essa prática mantém a aplicação serverless, elimina a necessidade de gerenciar servidores, e permite escalar de forma confiável durante picos de tráfego.",
            "Combinar Lambda e DynamoDB é uma estratégia comum para <strong>idempotência em APIs de alta disponibilidade</strong>, garantindo integridade de dados mesmo sob tráfego intenso ou falhas temporárias."
        ]
    },
    {
        id: 41,
        title: "Identificar funções IAM não utilizadas",
        domain: "Segurança",
        prompt: "Um líder de equipe de desenvolvimento é responsável por gerenciar o acesso dos seus principais IAM. No início do ciclo, ela concedeu privilégios excessivos aos usuários para mantê-los motivados a experimentar novas funcionalidades. Agora, ela deseja garantir que a equipe tenha apenas as permissões mínimas necessárias para concluir o trabalho. Qual das opções a seguir ajudará a identificar funções IAM não utilizadas e removê-las sem interromper nenhum serviço?",
        options: [
            { letter: "A", text: "AWS Trusted Advisor", correct: false },
            { letter: "B", text: "AWS Security Hub", correct: false },
            { letter: "C", text: "AWS IAM Credential Report", correct: false },
            { letter: "D", text: "IAM Access Analyzer", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O AWS Trusted Advisor fornece recomendações em áreas como segurança, custo e desempenho, mas não identifica diretamente funções IAM não utilizadas." },
            { correct: false, text: "Incorreta. O AWS Security Hub consolida achados de segurança de diversos serviços, mas não fornece relatórios sobre funções IAM não utilizadas." },
            { correct: false, text: "Incorreta. O Credential Report mostra o status das credenciais (senhas, chaves de acesso, MFA) para usuários IAM, mas não avalia o uso de funções ou políticas em si." },
            { correct: true, text: "Correta. O IAM Access Analyzer permite identificar permissões não utilizadas com base em logs do AWS CloudTrail, ajudando a detectar funções e permissões IAM que não estão sendo usadas, facilitando a aplicação do princípio do menor privilégio." }
        ],
        glossary: [
            "IAM Access Analyzer: ferramenta da AWS que analisa <strong>permissões de políticas IAM</strong> com base em logs do CloudTrail para identificar recursos compartilhados e permissões não utilizadas.",
            "AWS IAM Credential Report: relatório que apresenta o <strong>status das credenciais</strong> (senhas, chaves de acesso, MFA) dos usuários IAM, mas <strong>não avalia o uso</strong> das funções ou políticas.",
            "AWS Trusted Advisor: fornece recomendações em tempo real para otimização de <strong>segurança, desempenho, custo e tolerância a falhas</strong>, mas não identifica funções IAM não utilizadas.",
            "AWS Security Hub: consolida e centraliza achados de segurança de múltiplos serviços AWS, <strong>sem foco específico em permissões ou uso de funções IAM</strong>.",
            "Princípio do menor privilégio: prática de segurança que concede apenas as permissões estritamente necessárias para que um usuário ou serviço realize suas tarefas."
        ],
        generalExplanation: [
            "A ferramenta correta para identificar <strong>funções IAM não utilizadas</strong> é o <strong>IAM Access Analyzer</strong>, pois:",
            "Utiliza <strong>logs do CloudTrail</strong> para analisar quais permissões e funções IAM estão efetivamente sendo utilizadas.",
            "Permite identificar <strong>funções ou permissões não utilizadas</strong>, possibilitando sua remoção <strong>sem impactar serviços em execução</strong>.",
            "Facilita a aplicação do <strong>princípio do menor privilégio</strong>, reduzindo riscos de segurança por permissões excessivas."
        ],
        realWorld: [
            "Em ambientes de desenvolvimento, equipes muitas vezes começam projetos com <strong>permissões amplas</strong> para facilitar testes.",
            "Conforme o projeto avança, é fundamental <strong>revisar e ajustar permissões</strong> para evitar riscos de segurança e não conformidade.",
            "Um desenvolvedor ou líder de equipe pode usar <strong>IAM Access Analyzer</strong> para identificar funções IAM não utilizadas e <strong>remover ou restringir acessos desnecessários</strong> sem interromper o funcionamento das aplicações.",
            "Exemplo: em uma arquitetura <strong>serverless</strong> com <strong>Lambda, API Gateway e DynamoDB</strong>, o IAM Access Analyzer garante que cada função Lambda tenha apenas as permissões mínimas para acessar os recursos necessários, evitando que permissões excessivas fiquem ativas por engano."
        ]
    },
    {
        id: 42,
        title: "Modelagem de dados no DynamoDB para jogos",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma empresa de jogos deseja armazenar informações sobre todos os jogos que lançou. Cada jogo possui um nome, número da versão e categoria (como esportes, quebra-cabeças, estratégia, etc). As informações dos jogos também podem incluir propriedades adicionais sobre as plataformas suportadas e especificações técnicas, que são inconsistentes entre os jogos. Você foi contratado como um AWS Certified Developer – Associate para construir uma solução que atenda aos seguintes casos de uso: - Para um dado nome e número de versão, obter todos os detalhes do jogo que possui esse nome e versão. - Para um dado nome, obter todos os detalhes de todos os jogos com esse nome. - Para uma dada categoria, obter todos os detalhes de todos os jogos nessa categoria. Qual solução você recomendaria como a mais eficiente?",
        options: [
            { letter: "A", text: "Configurar uma instância Amazon RDS MySQL com uma tabela de jogos contendo colunas para nome, número da versão e categoria. Configurar a coluna nome como chave primária.", correct: false },
            { letter: "B", text: "Configurar uma tabela Amazon DynamoDB com uma chave primária composta pela categoria como chave de partição e o número da versão como chave de ordenação. Criar um índice secundário global com o nome como chave de partição.", correct: false },
            { letter: "C", text: "Armazenar permanentemente as informações de nome, número da versão e categoria dos jogos em uma instância Amazon ElastiCache para Memcached.", correct: false },
            { letter: "D", text: "Configurar uma tabela Amazon DynamoDB com uma chave primária composta pelo nome como chave de partição e o número da versão como chave de ordenação. Criar um índice secundário global com a categoria como chave de partição e o nome como chave de ordenação.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Configurar apenas o nome como chave primária não permite consultas eficientes por número da versão ou categoria, além de não aproveitar a escalabilidade e flexibilidade do DynamoDB para dados semiestruturados e inconsistentes." },
            { correct: false, text: "Incorreta. Essa configuração não permite consultas eficientes para o caso de uso que exige obter detalhes de um jogo específico pelo nome e número da versão, pois a chave primária não inclui o nome, dificultando a busca direta por esses atributos. Isso resultaria em múltiplas consultas menos eficientes." },
            { correct: false, text: "Incorreta. Amazon ElastiCache para Memcached é uma camada de cache volátil e não um armazenamento persistente. Não é adequado para armazenar dados que precisam ser mantidos permanentemente, como informações de jogos." },
            { correct: true, text: "Correta. Essa configuração permite consultas eficientes para todos os casos de uso: a chave primária possibilita buscar rapidamente um jogo específico pelo nome e versão, enquanto o índice secundário global permite consultar todos os jogos de uma categoria, ordenados pelo nome. Além disso, a flexibilidade do DynamoDB lida bem com atributos adicionais inconsistentes." }
        ],
        glossary: [
            "Amazon DynamoDB: banco de dados NoSQL totalmente gerenciado, altamente escalável e de baixa latência, ideal para aplicações que exigem alta performance e flexibilidade no modelo de dados.",
            "Chave primária: identificador único de um item em uma tabela DynamoDB, composto por <strong>chave de partição</strong> e opcionalmente uma <strong>chave de ordenação</strong>, permitindo consultas eficientes.",
            "Índice secundário global (GSI): índice que permite consultas usando uma chave primária alternativa à da tabela principal, possibilitando diferentes padrões de acesso aos dados.",
            "Amazon RDS MySQL: serviço gerenciado de banco de dados relacional com suporte ao MySQL, adequado para dados estruturados e com esquema fixo.",
            "Amazon ElastiCache para Memcached: serviço de cache em memória volátil que acelera o acesso a dados, mas não é adequado para armazenamento persistente."
        ],
        generalExplanation: [
            "A configuração correta para o cenário descrito é:",
            "<strong>Tabela DynamoDB com chave primária composta</strong>:",
            "<strong>Partition key</strong>: nome do jogo",
            "<strong>Sort key</strong>: número da versão<br>Isso permite consultas rápidas e específicas para obter detalhes de um jogo pelo nome e versão.",
            "<strong>Índice secundário global (GSI)</strong>:",
            "<strong>Partition key</strong>: categoria do jogo",
            "<strong>Sort key</strong>: nome do jogo<br>Permite consultas eficientes para listar todos os jogos de uma categoria, ordenados pelo nome.",
            "Essa arquitetura aproveita a <strong>flexibilidade do DynamoDB</strong> para armazenar atributos inconsistentes entre jogos, garantindo <strong>alta performance e escalabilidade</strong> nas consultas."
        ],
        realWorld: [
            "Em uma aplicação para uma empresa de jogos, o <strong>DynamoDB</strong> armazena informações de cada jogo, incluindo atributos variáveis como plataformas suportadas e especificações técnicas.",
            "Com a <strong>chave primária composta</strong> e os <strong>GSIs</strong>, a aplicação consegue: consultar rapidamente detalhes de uma versão específica de um jogo, listar todos os jogos de uma categoria sem precisar varrer toda a tabela.",
            "Essa abordagem também permite <strong>incluir novos atributos</strong> facilmente, sem alterar o esquema, ideal para dados semiestruturados.",
            "Dessa forma, equipes de desenvolvimento conseguem entregar <strong>funcionalidades ágeis, escaláveis e eficientes</strong>, alinhadas às <strong>melhores práticas da AWS para aplicações modernas e orientadas a eventos</strong>."
        ]
    },
    {
        id: 43,
        title: "Única política baseada em recurso suportada pelo IAM",
        domain: "Segurança",
        prompt: "Como parte do seu trabalho de desenvolvimento, um AWS Certified Developer Associate está criando políticas e as vinculando a identidades do IAM. Após criar as políticas baseadas em identidade necessárias, ele agora está criando políticas baseadas em recursos. Qual é a única política baseada em recurso que o serviço IAM suporta?",
        options: [
            { letter: "A", text: "Limite de permissões (Permissions boundary)", correct: false },
            { letter: "B", text: "Política de confiança (Trust policy)", correct: true },
            { letter: "C", text: "Políticas de controle de serviço da AWS Organizations (SCP)", correct: false },
            { letter: "D", text: "Lista de controle de acesso (ACL)", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Limites de permissões são um recurso avançado para definir a permissão máxima que uma política baseada em identidade pode conceder a uma entidade IAM (usuário ou função). Eles não são políticas baseadas em recursos, mas sim restrições aplicadas a políticas baseadas em identidade." },
            { correct: true, text: "Correta. Políticas de confiança definem quais entidades principais (contas, usuários, funções e usuários federados) podem assumir uma função IAM. A função IAM é tanto uma identidade quanto um recurso que suporta políticas baseadas em recursos. O IAM suporta apenas um tipo de política baseada em recurso, chamada política de confiança da função, que é anexada a uma função IAM." },
            { correct: false, text: "Incorreta. SCPs são políticas aplicadas no nível da organização para limitar permissões máximas em contas da AWS. Elas não são políticas baseadas em recursos, nem são gerenciadas pelo serviço IAM diretamente." },
            { correct: false, text: "Incorreta. ACLs são políticas específicas de alguns serviços que controlam o acesso a recursos, geralmente entre contas diferentes, mas não são políticas baseadas em recursos suportadas pelo IAM. Serviços como Amazon S3, AWS WAF e Amazon VPC suportam ACLs, mas o IAM não." }
        ],
        glossary: [
            "Política baseada em identidade: política anexada a usuários, grupos ou funções IAM que define permissões para essas entidades.",
            "Política baseada em recurso: política anexada diretamente a um recurso AWS que especifica permissões para esse recurso.",
            "Política de confiança (Trust policy): política que define quais entidades (usuários, funções, contas) podem assumir uma função IAM; é a <strong>única política baseada em recurso suportada pelo IAM</strong>.",
            "Limite de permissões (Permissions boundary): restrição que define o limite máximo de permissões que uma política baseada em identidade pode conceder a uma entidade IAM.",
            "Lista de controle de acesso (ACL): método de controle de acesso usado em alguns serviços AWS para gerenciar permissões entre contas; não é suportado pelo IAM como política baseada em recurso.",
            "Política de controle de serviço da AWS Organizations (SCP): políticas aplicadas no nível da organização para limitar permissões máximas em contas da AWS; não são políticas baseadas em recurso e não são gerenciadas diretamente pelo IAM."
        ],
        generalExplanation: [
            "No <strong>IAM</strong>, a <strong>única política baseada em recurso suportada</strong> é a <strong>política de confiança</strong> associada a funções IAM.",
            "Essa política define <strong>quais entidades externas podem assumir a função</strong>, funcionando como se estivesse anexada diretamente ao recurso (a própria função).",
            "Outras opções, como <strong>permissions boundaries</strong>, <strong>ACLs</strong> ou <strong>SCPs</strong>, são mecanismos de controle de acesso importantes, mas <strong>não são políticas baseadas em recurso</strong> dentro do IAM.",
            "Seguindo essa prática, o IAM garante <strong>segurança e delegação de permissões de forma controlada</strong>, alinhada ao princípio do menor privilégio."
        ],
        realWorld: [
            "Um desenvolvedor na AWS frequentemente utiliza funções IAM para <strong>delegar permissões temporárias</strong> a serviços ou usuários externos, por exemplo:",
            "<strong>Autenticação federada</strong>: usuários de outra conta ou provedor de identidade assumem uma função com permissões específicas.",
            "<strong>Funções Lambda</strong>: uma função Lambda assume outra função IAM para acessar recursos como DynamoDB ou S3 com permissões restritas.",
            "<strong>Exemplo prático:</strong> Em uma arquitetura serverless, uma função Lambda pode assumir uma função IAM cuja política de confiança permite que apenas o serviço Lambda ou um usuário autenticado específico assuma essa função. Isso garante concessão de permissões <strong>controlada e auditável</strong>, aplicação do <strong>princípio do menor privilégio</strong> e maior segurança em ambientes distribuídos e dinâmicos."
        ]
    },
    {
        id: 44,
        title: "Lambda Authorizer para API Gateway",
        domain: "Segurança",
        prompt: "A equipe de desenvolvimento de uma empresa cria soluções serverless utilizando AWS Lambda. As funções são invocadas por clientes via AWS API Gateway, que está acessível a qualquer pessoa. O líder da equipe deseja controlar o acesso utilizando um mecanismo de autorização de terceiros. Como um Associate Developer, qual das seguintes opções você recomendaria para esse caso de uso?",
        options: [
            { letter: "A", text: "Lambda Authorizer", correct: true },
            { letter: "B", text: "Permissões IAM com assinatura sigv4", correct: false },
            { letter: "C", text: "API Gateway User Pools", correct: false },
            { letter: "D", text: "Cognito User Pools", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Um Lambda Authorizer (anteriormente conhecido como custom authorizer) é uma função Lambda que você cria para controlar o acesso à sua API. Ele permite implementar estratégias de autenticação com tokens bearer, como OAuth ou SAML, possibilitando integrar mecanismos de autorização de terceiros antes do acesso à API." },
            { correct: false, text: "Incorreta. A assinatura Signature Version 4 (sigv4) é um método para autenticar requisições AWS via HTTP, exigindo permissões IAM. Porém, não atende ao requisito de usar um mecanismo de autorização de terceiros, pois depende do controle nativo da AWS e não de autenticação externa." },
            { correct: false, text: "Incorreta. Essa opção é fictícia e foi incluída como um distrator. Não existe um recurso chamado 'API Gateway User Pools' no AWS API Gateway." },
            { correct: false, text: "Incorreta. Um Cognito User Pool é um diretório de usuários gerenciado pela Amazon Cognito, que permite que os usuários façam login diretamente ou via provedores de identidade federados. Como é um serviço gerenciado pela AWS, não atende ao requisito de usar um mecanismo de autorização de terceiros personalizado." }
        ],
        glossary: [
            "AWS Lambda: serviço serverless que executa código em resposta a eventos, sem necessidade de gerenciar servidores.",
            "AWS API Gateway: serviço gerenciado que permite criar, publicar, manter, monitorar e proteger APIs RESTful e WebSocket.",
            "Cognito User Pools: diretório de usuários gerenciado pela AWS, suportando login direto ou via provedores federados.",
            "Lambda Authorizer: função Lambda personalizada que autentica e autoriza requisições ao API Gateway, validando tokens externos.",
            "Signature Version 4 (sigv4): método de autenticação AWS baseado em assinaturas criptográficas usando credenciais IAM.",
            "OAuth: protocolo de autorização que permite que aplicações acessem recursos em nome do usuário via tokens de acesso.",
            "SAML: padrão de troca de dados de autenticação e autorização entre provedores de identidade e serviços.",
            "Federated Identity: mecanismo que permite autenticação via provedores externos, integrando identidades de terceiros."
        ],
        generalExplanation: [
            "Para controlar o acesso a uma <strong>API pública</strong> do API Gateway utilizando autenticação de terceiros, a melhor prática é usar um <strong>Lambda Authorizer</strong>.",
            "O Lambda Authorizer valida tokens emitidos por provedores externos (OAuth, SAML) antes de liberar acesso às funções backend.",
            "<strong>Cognito User Pools</strong> ou <strong>assinatura sigv4</strong> não são adequados:",
            "Cognito User Pools permite autenticação direta ou federada via AWS, mas não suporta autorização totalmente personalizada de terceiros.",
            "Sigv4 é uma autenticação nativa AWS, sem suporte a provedores externos.",
            "A opção 'API Gateway User Pools' não existe e é apenas um distrator."
        ],
        realWorld: [
            "Em aplicações serverless que expõem APIs públicas via Lambda e API Gateway, muitas vezes é necessário autenticar usuários via provedores corporativos ou sistemas de identidade externos.",
            "Um desenvolvedor pode criar um <strong>Lambda Authorizer</strong> para validar tokens JWT emitidos por um provedor OAuth corporativo, garantindo que apenas usuários autorizados acessem a API.",
            "Essa abordagem permite integrar sistemas legados de autenticação, manter controle total sobre a lógica de autorização e adotar políticas internas de segurança sem depender exclusivamente de serviços gerenciados da AWS.",
            "O Lambda Authorizer atua como uma camada de segurança customizada, oferecendo <strong>flexibilidade e conformidade</strong> com requisitos corporativos."
        ]
    },
    {
        id: 45,
        title: "Transform: AWS::Serverless no SAM",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Como um AWS Certified Developer Associate, você recebeu um documento escrito em YAML que representa a arquitetura de uma aplicação serverless. A primeira linha do documento contém Transform: 'AWS::Serverless-2016-10-31'. O que a seção Transform no documento representa?",
        options: [
            { letter: "A", text: "A presença da seção Transform indica que é um parâmetro do CloudFormation.", correct: false },
            { letter: "B", text: "Ela representa a definição de uma função Lambda.", correct: false },
            { letter: "C", text: "Ela representa uma função intrínseca do CloudFormation.", correct: false },
            { letter: "D", text: "A presença da seção Transform indica que é um template do Serverless Application Model (SAM).", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Parâmetros no CloudFormation são definidos na seção 'Parameters' e não na seção 'Transform'. A seção 'Transform' serve para aplicar macros ao template, não para definir parâmetros." },
            { correct: false, text: "Incorreta. A definição de uma função Lambda é feita através do recurso 'AWS::Lambda::Function' no CloudFormation, e não pela seção 'Transform'. Essa seção não define recursos específicos, mas indica que o template será processado como um SAM." },
            { correct: false, text: "Incorreta. Funções intrínsecas no CloudFormation são usadas para manipular valores durante a criação do template e geralmente começam com 'Fn::' ou '!'. A seção 'Transform' não é uma função intrínseca, mas sim uma indicação de macro para processamento do template." },
            { correct: true, text: "Correta. A seção 'Transform' indica que o template utiliza o AWS Serverless Application Model (SAM), que é uma extensão do AWS CloudFormation para facilitar a definição de aplicações serverless. O transform 'AWS::Serverless-2016-10-31' é uma macro que expande a sintaxe SAM para um template CloudFormation padrão." }
        ],
        glossary: [
            "Transform: seção do CloudFormation que aplica macros para modificar ou expandir templates durante a criação da stack.",
            "Serverless Application Model (SAM): framework open-source da AWS que simplifica a definição e implantação de aplicações serverless usando uma sintaxe abreviada baseada em CloudFormation.",
            "Macro: mecanismo do CloudFormation que transforma templates, expandindo ou modificando seu conteúdo antes do provisionamento.",
            "Função Lambda: função serverless que executa código em resposta a eventos, sem gerenciamento de servidores.",
            "Funções intrínsecas: funções internas do CloudFormation usadas para manipular valores dentro do template (ex.: <code>Fn::</code> ou <code>!</code>).",
            "Parâmetros: entradas definidas no template que permitem customização da configuração durante a implantação.",
            "YAML: formato legível para humanos, usado frequentemente para escrever templates CloudFormation.",
            "CloudFormation: serviço que provisiona e gerencia infraestrutura como código via templates declarativos."
        ],
        generalExplanation: [
            "A seção <strong>Transform</strong> indica que o template será processado por uma macro específica, como <code>\"AWS::Serverless-2016-10-31\"</code>, correspondendo ao <strong>AWS SAM</strong>.",
            "Essa macro expande a sintaxe simplificada do SAM para um template CloudFormation padrão, permitindo definir <strong>recursos serverless</strong> como funções Lambda, APIs Gateway e tabelas DynamoDB com menos complexidade.",
            "A presença de <strong>Transform</strong> não cria diretamente funções Lambda, parâmetros ou utiliza funções intrínsecas; ela apenas indica que a macro SAM irá processar o template e gerar os recursos finais.",
            "Essa abordagem melhora <strong>reutilização, legibilidade e padronização</strong>, seguindo as boas práticas AWS para desenvolvimento serverless."
        ],
        realWorld: [
            "Um desenvolvedor que cria aplicações serverless usa o <strong>AWS SAM</strong> para acelerar o desenvolvimento e simplificar o gerenciamento da infraestrutura.",
            "Ao escrever um template SAM, ele inicia o arquivo YAML com: <code>Transform: 'AWS::Serverless-2016-10-31'</code>.",
            "Isso sinaliza ao CloudFormation que deve processar o template usando a macro SAM, permitindo definir funções Lambda, APIs e outros recursos serverless de forma <strong>concisa e clara</strong>.",
            "Na prática, equipes usam SAM para <strong>versionar, testar e implantar aplicações serverless</strong> de forma consistente, integrando com pipelines CI/CD usando <strong>CodeDeploy</strong> e <strong>CodePipeline</strong>.",
            "O uso do <strong>Transform</strong> facilita manutenção e escalabilidade da aplicação, garantindo que a infraestrutura seja provisionada de forma segura e eficiente."
        ]
    },
    {
        id: 46,
        title: "Recurso inválido no AWS SAM",
        domain: "Implantação",
        prompt: "Você é um desenvolvedor em uma empresa de manufatura que possui vários servidores locais. A empresa decide migrar novos desenvolvimentos para a nuvem utilizando tecnologia serverless. Você opta por usar o AWS Serverless Application Model (AWS SAM) e trabalhar com um arquivo de template AWS SAM para representar sua arquitetura serverless. Qual dos seguintes tipos de recursos NÃO é válido no contexto serverless?",
        options: [
            { letter: "A", text: "AWS::Serverless::Api", correct: false },
            { letter: "B", text: "AWS::Serverless::Function", correct: false },
            { letter: "C", text: "AWS::Serverless::SimpleTable", correct: false },
            { letter: "D", text: "AWS::Serverless::UserPool", correct: true }
        ],
        explanations: [
            { correct: false, text: "Correta. Este recurso cria um conjunto de recursos e métodos do Amazon API Gateway que podem ser invocados por endpoints HTTPS. É útil para casos avançados onde se deseja controle total e flexibilidade na configuração das APIs, sendo suportado pelo AWS SAM." },
            { correct: false, text: "Correta. Este recurso cria uma função Lambda, uma role de execução do IAM e os mapeamentos de fontes de eventos que disparam a função. É um dos principais recursos suportados pelo AWS SAM para aplicações serverless." },
            { correct: false, text: "Correta. Este recurso cria uma tabela DynamoDB com uma chave primária de atributo único. É indicado para cenários onde o acesso aos dados é feito apenas pela chave primária e é um recurso válido no AWS SAM." },
            { correct: true, text: "Incorreta. Não existe um recurso chamado UserPool no AWS Serverless Application Model. O UserPool pertence ao serviço Amazon Cognito, utilizado para autenticação em aplicativos móveis e web, mas não é representado como um recurso serverless no SAM." }
        ],
        glossary: [
            "AWS SAM (Serverless Application Model): framework open-source para construir aplicações <strong>serverless</strong> na AWS, permitindo definir e implantar recursos serverless via <strong>templates YAML</strong>.",
            "Lambda Function: função computacional sem servidor que executa código em resposta a eventos, gerenciada pelo AWS Lambda.",
            "API Gateway: serviço que permite criar, publicar, manter, monitorar e proteger <strong>APIs REST e HTTP</strong>.",
            "DynamoDB: banco de dados <strong>NoSQL totalmente gerenciado</strong>, rápido e flexível.",
            "UserPool: componente do <strong>Amazon Cognito</strong> responsável pelo gerenciamento de usuários e autenticação em aplicações.",
            "IAM Role: conjunto de permissões atribuídas a serviços ou funções para executar ações autorizadas na AWS.",
            "Serverless: arquitetura que permite executar aplicações sem a necessidade de gerenciar infraestrutura de servidores.",
            "YAML: linguagem de serialização de dados legível por humanos, usada para definir <strong>templates no AWS SAM</strong>."
        ],
        generalExplanation: [
            "O <strong>AWS SAM</strong> simplifica a criação e gerenciamento de aplicações serverless, oferecendo suporte nativo para:",
            "<strong>Funções Lambda</strong> (<code>AWS::Serverless::Function</code>)",
            "<strong>APIs via API Gateway</strong> (<code>AWS::Serverless::Api</code>)",
            "<strong>Tabelas DynamoDB simples</strong> (<code>AWS::Serverless::SimpleTable</code>)",
            "Recursos <strong>como UserPool</strong> pertencem ao <strong>Amazon Cognito</strong>, serviço separado focado em autenticação e gerenciamento de usuários, <strong>não representado como recurso serverless no SAM</strong>.",
            "Portanto, a definição <code>AWS::Serverless::UserPool</code> <strong>não é válida</strong> no contexto do AWS SAM, pois <strong>não faz parte dos recursos que o SAM gerencia diretamente</strong>."
        ],
        realWorld: [
            "Desenvolvedores que migram aplicações para arquitetura <strong>serverless</strong> usam o <strong>AWS SAM</strong> para definir e implantar funções Lambda, APIs e tabelas DynamoDB rapidamente.",
            "Exemplo: ao criar uma aplicação web sem servidor: <strong>Funções Lambda</strong> processam requisições, <strong>API Gateway</strong> expõe endpoints REST, <strong>DynamoDB</strong> armazena dados simples.",
            "Para autenticação, é necessário configurar <strong>Amazon Cognito UserPool separadamente</strong>, usando console, AWS CLI ou CloudFormation padrão.",
            "Essa separação mantém <strong>claridade e modularidade</strong> na gestão dos recursos, facilitando manutenção, escalabilidade e boas práticas de DevOps em aplicações serverless."
        ]
    },
    {
        id: 47,
        title: "Volumes Amazon EFS para ECS Fargate",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Tarefas de contêiner ECS Fargate geralmente são distribuídas entre Zonas de Disponibilidade (AZs) e as cargas de trabalho subjacentes precisam de acesso persistente e compartilhado entre AZs aos volumes de dados configurados para as tarefas de contêiner. Qual das seguintes soluções é a melhor escolha para essas cargas de trabalho?",
        options: [
            { letter: "A", text: "Bind mounts", correct: false },
            { letter: "B", text: "Volumes AWS Storage Gateway", correct: false },
            { letter: "C", text: "Volumes Docker", correct: false },
            { letter: "D", text: "Volumes Amazon EFS", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Bind mounts são arquivos ou diretórios no host, como uma instância Amazon EC2 ou AWS Fargate, montados dentro do contêiner. Embora suportados para tarefas hospedadas no Fargate ou EC2, bind mounts fornecem armazenamento temporário e não persistente, o que os torna inadequados para cenários que exigem armazenamento compartilhado e persistente entre AZs." },
            { correct: false, text: "Incorreta. Volumes do AWS Storage Gateway são usados para integrar armazenamento local com a nuvem AWS, mas não são uma solução adequada para armazenamento persistente compartilhado entre tarefas ECS Fargate distribuídas em múltiplas AZs. Esta opção é apresentada apenas como um distrator." },
            { correct: false, text: "Incorreta. Volumes Docker são gerenciados pelo Docker e criados localmente no host, geralmente em /var/lib/docker/volumes na instância EC2. Eles podem ser integrados a sistemas de armazenamento externos via drivers de volume, como Amazon EBS, mas são suportados apenas para tarefas executadas em instâncias EC2, não em Fargate. Além disso, não oferecem armazenamento compartilhado entre múltiplas AZs." },
            { correct: true, text: "Correta. Volumes Amazon EFS fornecem armazenamento de arquivos simples, escalável e persistente para uso com tarefas Amazon ECS. O EFS é elástico, crescendo e encolhendo automaticamente conforme arquivos são adicionados ou removidos, e permite acesso compartilhado e persistente entre múltiplas AZs. É suportado para tarefas hospedadas tanto em Fargate quanto em instâncias EC2, sendo a melhor opção para cargas de trabalho que necessitam de armazenamento compartilhado entre AZs." }
        ],
        glossary: [
            "ECS Fargate: executa contêineres sem gerenciar servidores ou clusters EC2.",
            "Zonas de Disponibilidade (AZs): data centers fisicamente separados em uma mesma região AWS.",
            "Bind mounts: montagens de arquivos ou diretórios do host dentro do contêiner, com armazenamento local e temporário.",
            "Volumes Docker: volumes gerenciados pelo Docker, armazenando dados localmente no host do contêiner.",
            "Amazon EFS (Elastic File System): sistema de arquivos elástico, persistente e compartilhado entre múltiplas instâncias e AZs.",
            "AWS Storage Gateway: conecta ambientes locais a armazenamento na nuvem AWS, integrando cenários híbridos.",
            "Persistência de dados: capacidade de manter dados após reinicializações ou falhas.",
            "Compartilhamento entre AZs: acesso simultâneo e consistente a dados por recursos distribuídos em diferentes AZs."
        ],
        generalExplanation: [
            "Para <strong>tarefas ECS Fargate distribuídas entre múltiplas AZs</strong> que necessitam de <strong>armazenamento persistente e compartilhado</strong>, o <strong>Amazon EFS</strong> é a solução mais adequada.",
            "O EFS oferece <strong>elasticidade</strong>, permitindo que o sistema de arquivos cresça e encolha conforme necessário, e <strong>acesso simultâneo</strong> por múltiplas tarefas, independentemente da AZ.",
            "<strong>Bind mounts</strong> e <strong>volumes Docker</strong> são locais e temporários, não garantindo persistência nem compartilhamento entre AZs.",
            "<strong>AWS Storage Gateway</strong> não é projetado para cenários serverless distribuídos, sendo inadequado neste caso."
        ],
        realWorld: [
            "Em uma aplicação containerizada com ECS Fargate, múltiplas tarefas podem precisar acessar arquivos de configuração, dados de usuários ou logs centralizados.",
            "Usando <strong>EFS</strong>, essas tarefas montam o mesmo sistema de arquivos, garantindo <strong>consistência e disponibilidade</strong> dos dados, mesmo em diferentes AZs, aumentando a <strong>resiliência</strong> e a <strong>escalabilidade</strong>.",
            "<strong>Exemplo prático</strong>: uma aplicação web serverless processa uploads de usuários. Os arquivos são armazenados em um <strong>volume EFS</strong> montado nas tarefas Fargate, permitindo que várias instâncias da aplicação acessem e modifiquem os dados simultaneamente, sem perda ou inconsistência."
        ]
    },
    {
        id: 48,
        title: "Usage Plans para APIs públicas com controle de consumo",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma empresa SaaS executa uma aplicação web na área de saúde que é utilizada mundialmente por usuários. Desenvolvedores mobile solicitaram a exposição de APIs públicas para funcionalidades específicas da aplicação. Você decide disponibilizar essas APIs para os desenvolvedores mobile como ofertas de produto. Qual das opções a seguir permitirá que você faça isso?",
        options: [
            { letter: "A", text: "Usar Usage Plans do API Gateway", correct: true },
            { letter: "B", text: "Usar Custom Authorizers do AWS Lambda", correct: false },
            { letter: "C", text: "Usar Usage Plans do CloudFront", correct: false },
            { letter: "D", text: "Usar Usage Plans do AWS Billing", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Amazon API Gateway permite criar, publicar, manter, monitorar e proteger APIs REST, HTTP e WebSocket. Usage Plans definem quem pode acessar quais APIs, em quais estágios e métodos, além de controlar a quantidade e a velocidade do acesso. Eles usam chaves de API para identificar clientes e aplicar limites de uso, permitindo oferecer APIs públicas como produtos com controle de consumo." },
            { correct: false, text: "Incorreta. AWS Lambda Custom Authorizers são usados para implementar autenticação e autorização personalizada em APIs do API Gateway, mas não gerenciam limites de uso ou planos de consumo. Portanto, não são adequados para controlar o acesso e a cota de APIs públicas como um produto." },
            { correct: false, text: "Incorreta. O Amazon CloudFront é um serviço de CDN (Content Delivery Network) que entrega dados, vídeos, aplicações e APIs globalmente com baixa latência e alta velocidade. No entanto, não existe um recurso chamado Usage Plans no CloudFront, e ele não é utilizado para gerenciar acesso ou limites de APIs públicas." },
            { correct: false, text: "Incorreta. O AWS Billing and Cost Management é o serviço responsável por gerenciar cobranças, monitorar uso e controlar custos na AWS. Não existe um recurso chamado Usage Plans no AWS Billing, e ele não oferece funcionalidades para expor ou gerenciar APIs públicas." }
        ],
        glossary: [
            "Amazon API Gateway: serviço gerenciado da AWS para criar, publicar, monitorar e proteger APIs REST, HTTP e WebSocket.",
            "Usage Plans: recurso do API Gateway que define limites de uso, cotas e taxas para clientes, associando regras a chaves de API específicas.",
            "AWS Lambda Custom Authorizers: funções Lambda usadas para autenticação e autorização personalizadas em APIs.",
            "AWS Billing and Cost Management: serviço que monitora e controla custos e faturamento na AWS.",
            "Amazon CloudFront: CDN da AWS que entrega conteúdo com baixa latência e alta velocidade globalmente.",
            "API Key: token usado para identificar e controlar o acesso de clientes a uma API.",
            "Throttling: mecanismo que limita a taxa de requisições para proteger recursos contra sobrecarga."
        ],
        generalExplanation: [
            "Para expor <strong>APIs públicas de forma controlada</strong>, o recurso mais adequado é <strong>Usage Plans</strong>.",
            "Usage Plans permitem: definir quem pode acessar a API, associar chaves de API a clientes específicos, aplicar limites de consumo e throttling (taxas de requisições).",
            "Outras alternativas, como Lambda Custom Authorizers ou CloudFront, não fornecem controle integrado sobre quotas, limites de uso ou acesso público segmentado, tornando-as inadequadas para gerenciar APIs como produtos para desenvolvedores externos."
        ],
        realWorld: [
            "Em uma aplicação SaaS, o time pode disponibilizar endpoints de API para desenvolvedores mobile externos.",
            "Com <strong>Usage Plans</strong>: cada cliente recebe uma chave de API com limites específicos, é possível oferecer diferentes planos de acesso: gratuito com limite baixo ou pago com maior capacidade.",
            "Monitora-se consumo e evita abusos, garantindo escalabilidade e qualidade do serviço.",
            "Integrado com AWS Lambda, a equipe mantém a lógica serverless, enquanto o API Gateway controla acesso, limites e monitoramento de uso, facilitando monetização e gestão do produto."
        ]
    },
    {
        id: 49,
        title: "Comportamento após falha em Rolling deployment no Elastic Beanstalk",
        domain: "Implantação",
        prompt: "Ao executar uma implantação Rolling em um ambiente Elastic Beanstalk, apenas dois lotes concluíram a implantação com sucesso, enquanto o restante dos lotes falhou ao implantar a versão atualizada. Após isso, a equipe de desenvolvimento encerrou as instâncias do lote que falhou na implantação. Qual será o status dessas instâncias que falharam após a terminação?",
        options: [
            { letter: "A", text: "O Elastic Beanstalk substituirá as instâncias que falharam por instâncias executando a versão da aplicação da implantação mais recente que foi bem-sucedida.", correct: true },
            { letter: "B", text: "O Elastic Beanstalk substituirá as instâncias que falharam por instâncias executando a versão da aplicação da implantação mais antiga que foi bem-sucedida.", correct: false },
            { letter: "C", text: "O Elastic Beanstalk substituirá as instâncias que falharam somente após a versão da aplicação a ser instalada ser escolhida manualmente pelo console da AWS.", correct: false },
            { letter: "D", text: "O Elastic Beanstalk não substituirá as instâncias que falharam.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Quando uma implantação Rolling falha em alguns lotes, o Elastic Beanstalk mantém as instâncias dos lotes que tiveram sucesso com a nova versão e, ao substituir instâncias terminadas dos lotes que falharam, ele as substitui por instâncias executando a versão da aplicação da implantação mais recente bem-sucedida, garantindo consistência no ambiente." },
            { correct: false, text: "Incorreta. O Elastic Beanstalk não reverte para a versão mais antiga bem-sucedida automaticamente; ele utiliza a versão da implantação mais recente que foi concluída com sucesso para substituir instâncias terminadas." },
            { correct: false, text: "Incorreta. O Elastic Beanstalk não exige intervenção manual para substituir instâncias terminadas durante uma implantação Rolling; ele gerencia automaticamente a substituição com base na última implantação bem-sucedida." },
            { correct: false, text: "Incorreta. O Elastic Beanstalk sempre garante que o ambiente esteja saudável e com a versão correta da aplicação, substituindo instâncias terminadas para manter a integridade do ambiente." }
        ],
        glossary: [
            "Elastic Beanstalk: serviço gerenciado da AWS que facilita a implantação, gerenciamento e escalabilidade de aplicações web e serviços desenvolvidos em várias linguagens.",
            "Rolling deployment (implantação Rolling): estratégia de atualização gradual onde a aplicação é implantada em lotes de instâncias sequencialmente, minimizando impactos na disponibilidade.",
            "Instância EC2: máquina virtual na nuvem AWS que executa aplicações e serviços.",
            "Implantações bem-sucedida: atualização concluída sem erros ou falhas.",
            "Terminação de instância: encerramento manual ou automático de uma instância EC2."
        ],
        generalExplanation: [
            "Durante uma <strong>implantação Rolling</strong>, o Elastic Beanstalk atualiza a aplicação <strong>em lotes</strong>, garantindo que nem todas as instâncias sejam substituídas simultaneamente, mantendo a disponibilidade.",
            "Se alguns lotes falharem, as instâncias desses lotes podem ser <strong>terminadas manualmente</strong>.",
            "O Elastic Beanstalk <strong>substitui automaticamente</strong> essas instâncias por novas que executam a versão da aplicação da última implantação bem-sucedida, mantendo a consistência do ambiente.",
            "Essa abordagem evita que o time precise gerenciar manualmente versões ou instâncias, garantindo estabilidade durante a atualização."
        ],
        realWorld: [
            "Uma equipe de desenvolvimento pode atualizar uma aplicação web hospedada no Elastic Beanstalk utilizando implantação Rolling para <strong>minimizar downtime</strong>.",
            "Se parte das instâncias falhar durante a atualização, encerrar essas instâncias permite que o Elastic Beanstalk lance <strong>novas instâncias com a versão estável da aplicação</strong>, garantindo que os usuários finais não sejam afetados.",
            "Esse comportamento é crucial para ambientes de produção que exigem <strong>alta disponibilidade e resiliência</strong>, permitindo que desenvolvedores foquem na evolução da aplicação sem se preocupar com a gestão manual das instâncias durante implantações complexas."
        ]
    },
    {
        id: 50,
        title: "AWS Secrets Manager para rotação de credenciais",
        domain: "Segurança",
        prompt: "Você está executando cargas de trabalho na AWS e incorporou strings de conexão do banco de dados RDS em cada servidor web que hospeda suas aplicações. Após reprovar em uma auditoria de segurança, você está buscando uma abordagem diferente para armazenar seus segredos de forma segura e realizar a rotação automática das credenciais do banco de dados. Qual serviço da AWS você pode usar para atender a esse caso de uso?",
        options: [
            { letter: "A", text: "KMS", correct: false },
            { letter: "B", text: "SSM Parameter Store", correct: false },
            { letter: "C", text: "Systems Manager", correct: false },
            { letter: "D", text: "Secrets Manager", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O AWS Key Management Service (KMS) facilita a criação e o gerenciamento de chaves criptográficas para proteger dados, controlando seu uso em diversos serviços AWS e aplicações. Entretanto, o KMS não é um serviço para armazenar segredos nem para realizar a rotação automática de credenciais de banco de dados." },
            { correct: false, text: "Incorreta. O AWS Systems Manager Parameter Store oferece armazenamento seguro e hierárquico para dados de configuração e gerenciamento de segredos, como senhas e strings de conexão. No entanto, ele não possui funcionalidade nativa para realizar a rotação automática das credenciais do banco de dados, o que é um requisito fundamental neste cenário." },
            { correct: false, text: "Incorreta. O AWS Systems Manager fornece visibilidade e controle da infraestrutura AWS, permitindo automação de tarefas operacionais e visualização de dados operacionais. Contudo, ele não é um serviço destinado ao armazenamento seguro de segredos nem oferece recursos para rotacionar automaticamente credenciais de banco de dados." },
            { correct: true, text: "Correta. O AWS Secrets Manager permite gerenciar, recuperar e rotacionar automaticamente credenciais de banco de dados, chaves de API e outros segredos ao longo de seu ciclo de vida. Ele elimina a necessidade de codificar informações sensíveis em texto simples, oferecendo integração nativa para rotação automática com serviços como Amazon RDS, Amazon Redshift e Amazon DocumentDB." }
        ],
        glossary: [
            "AWS Secrets Manager: serviço que permite gerenciar, armazenar e <strong>rotacionar automaticamente segredos</strong>, como credenciais de banco de dados e chaves de API, garantindo segurança e conformidade.",
            "AWS Systems Manager Parameter Store: armazenamento seguro e hierárquico para dados de configuração e segredos, porém <strong>sem suporte nativo para rotação automática de credenciais</strong>.",
            "AWS Systems Manager: conjunto de ferramentas para gerenciamento operacional e automação da infraestrutura AWS, não focado em armazenamento seguro ou rotação de segredos.",
            "AWS Key Management Service (KMS): serviço para criação e gerenciamento de <strong>chaves criptográficas</strong>, usado para proteger dados, mas não para armazenar ou rotacionar segredos.",
            "Rotação automática de credenciais: processo que atualiza periodicamente as credenciais para reduzir riscos de exposição e melhorar a segurança.",
            "Strings de conexão: informações que permitem que aplicações se conectem a bancos de dados, geralmente contendo usuário, senha, endereço e porta.",
            "Auditoria de segurança: avaliação sistemática para verificar se práticas de segurança estão sendo seguidas e identificar vulnerabilidades."
        ],
        generalExplanation: [
            "O <strong>AWS Secrets Manager</strong> é a solução mais adequada porque:",
            "Armazena <strong>segredos de forma segura</strong> e permite <strong>rotação automática de credenciais</strong> de bancos de dados.",
            "Evita codificação de informações sensíveis diretamente nas aplicações ou servidores, reduzindo riscos de exposição.",
            "<strong>Parameter Store</strong> permite armazenar segredos, mas <strong>não suporta rotação automática</strong>.",
            "<strong>Systems Manager</strong> não é projetado para gerenciamento de segredos.",
            "<strong>KMS</strong> oferece criptografia, mas <strong>não gerencia nem rotaciona segredos</strong>.",
            "Portanto, o Secrets Manager atende integralmente aos requisitos de <strong>segurança e conformidade</strong> exigidos por auditorias."
        ],
        realWorld: [
            "Em produção, desenvolvedores precisam que <strong>credenciais de bancos de dados</strong> estejam protegidas e atualizadas sem intervenção manual.",
            "Com <strong>Secrets Manager</strong>, é possível configurar <strong>rotação automática das credenciais</strong> do Amazon RDS, garantindo que aplicações obtenham informações atualizadas em tempo real via API segura.",
            "Em arquiteturas <strong>serverless</strong>, como com <strong>AWS Lambda</strong>, o Secrets Manager fornece credenciais dinamicamente, evitando armazenamento em variáveis de ambiente ou código-fonte.",
            "Essa prática aumenta a <strong>segurança</strong>, simplifica o gerenciamento de segredos e mantém o serviço <strong>disponível e confiável</strong> em ambientes distribuídos e escaláveis."
        ]
    },
    {
        id: 51,
        title: "AWS CDK para modelar infraestrutura com linguagens de programação",
        domain: "Implantação",
        prompt: "Uma equipe de desenvolvimento deseja construir uma aplicação utilizando arquitetura serverless. A equipe planeja usar extensivamente funções AWS Lambda para atingir esse objetivo. Os desenvolvedores trabalham com diferentes linguagens de programação como Python, .NET e JavaScript. A equipe quer modelar a infraestrutura na nuvem utilizando qualquer uma dessas linguagens de programação. Qual serviço/ferramenta da AWS a equipe deve usar para esse caso de uso?",
        options: [
            { letter: "A", text: "AWS Cloud Development Kit (CDK)", correct: true },
            { letter: "B", text: "AWS CloudFormation", correct: false },
            { letter: "C", text: "AWS CodeDeploy", correct: false },
            { letter: "D", text: "AWS Serverless Application Model (SAM)", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O AWS CDK é um framework de desenvolvimento open-source que permite definir recursos de nuvem usando linguagens de programação familiares como Python, JavaScript, Java e .NET. Ele oferece componentes de alto nível chamados constructs, que facilitam a modelagem e o provisionamento seguro e repetível da infraestrutura via CloudFormation, atendendo exatamente à necessidade da equipe." },
            { correct: false, text: "Incorreta. O AWS CloudFormation é um serviço que permite definir a infraestrutura como código por meio de templates JSON ou YAML, mas não suporta diretamente o uso de linguagens de programação tradicionais para modelar a infraestrutura. Ele é a base para provisionamento, mas não atende ao requisito de usar linguagens como Python, .NET ou JavaScript para modelagem." },
            { correct: false, text: "Incorreta. O AWS CodeDeploy é um serviço gerenciado para automatizar implantações de software em diversos ambientes, incluindo EC2, Lambda e servidores on-premises. Ele não é uma ferramenta para modelar infraestrutura nem para definir recursos em linguagens de programação." },
            { correct: false, text: "Incorreta. O AWS SAM é um framework que facilita a criação e implantação de aplicações serverless usando templates declarativos baseados em YAML. Embora simplifique o desenvolvimento serverless, ele não permite modelar a infraestrutura usando linguagens de programação tradicionais, o que é um requisito do caso." }
        ],
        glossary: [
            "AWS CDK: framework open-source que permite definir infraestrutura na nuvem usando linguagens de programação como Python, JavaScript, Java e .NET.",
            "AWS CloudFormation: serviço da AWS que provisiona recursos de nuvem via templates em JSON ou YAML.",
            "AWS SAM: framework para criar e implantar aplicações serverless usando templates YAML.",
            "AWS CodeDeploy: serviço para automatizar deploys em EC2, Lambda ou servidores on-premises.",
            "Constructs: componentes reutilizáveis no CDK que encapsulam configurações e padrões de infraestrutura.",
            "Provisionamento: processo de criação, configuração e disponibilização de recursos na nuvem.",
            "Serverless: arquitetura que executa código sem gerenciamento explícito de servidores.",
            "Infraestrutura como código (IaC): prática de definir e gerenciar infraestrutura por meio de código legível e versionável."
        ],
        generalExplanation: [
            "O <strong>AWS CDK</strong> é ideal quando a equipe deseja modelar infraestrutura usando linguagens de programação familiares.",
            "Diferente do CloudFormation ou SAM, que usam templates declarativos, o CDK oferece abordagem imperativa e orientada a objetos, reutilização de código via <strong>Constructs</strong> e integração com linguagens de programação como Python, JavaScript e .NET.",
            "O CDK compila o código em <strong>CloudFormation</strong>, garantindo provisionamento seguro e consistente.",
            "Essa abordagem combina desenvolvimento de aplicações e infraestrutura em um fluxo unificado, facilitando manutenção e abstração."
        ],
        realWorld: [
            "Uma equipe que desenvolve aplicações serverless com <strong>Lambda</strong>, <strong>API Gateway</strong> e <strong>DynamoDB</strong> pode definir toda a infraestrutura diretamente em Python ou JavaScript usando CDK.",
            "<strong>Benefícios práticos</strong>: versionamento da infraestrutura junto com o código da aplicação, criação de <strong>Constructs</strong> personalizados para padrões recorrentes (autenticação, monitoramento, logging), reutilização e consistência em múltiplos projetos, reduzindo erros e acelerando deploys.",
            "Essa prática promove <strong>agilidade, controle e escalabilidade</strong>, alinhando desenvolvimento de aplicações com modelagem de infraestrutura como código."
        ]
    },
    {
        id: 52,
        title: "Security Groups vs Network ACLs",
        domain: "Segurança",
        prompt: "Uma equipe de desenvolvimento configurou o tráfego de entrada para as portas relevantes tanto no Security Group da instância EC2 quanto na Network Access Control List (NACL) da sub-rede da instância EC2. No entanto, a equipe não consegue se conectar ao serviço que está rodando na instância Amazon EC2. Como um associado de desenvolvimento, qual das seguintes recomendações você faria para resolver esse problema?",
        options: [
            { letter: "A", text: "Network ACLs são stateful, portanto, permitir o tráfego de entrada nas portas necessárias já habilita a conexão. Security Groups são stateless, então é necessário permitir tanto o tráfego de entrada quanto o de saída.", correct: false },
            { letter: "B", text: "A Role IAM definida no Security Group é diferente da Role IAM que tem acesso nas Network ACLs.", correct: false },
            { letter: "C", text: "As regras associadas às Network ACLs nunca devem ser modificadas pela linha de comando. Uma tentativa de modificar regras pela linha de comando bloqueia a regra e resulta em um comportamento errático.", correct: false },
            { letter: "D", text: "Security Groups são stateful, portanto, permitir o tráfego de entrada nas portas necessárias já habilita a conexão. Network ACLs são stateless, então é necessário permitir tanto o tráfego de entrada quanto o de saída.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Essa afirmação está invertida. Na realidade, Security Groups são stateful e Network ACLs são stateless. Portanto, essa alternativa está incorreta." },
            { correct: false, text: "Incorreta. Security Groups e Network ACLs não utilizam Roles IAM para controle de acesso. Essa alternativa é incorreta e foi incluída como distração." },
            { correct: false, text: "Incorreta. Essa afirmação é falsa. A AWS permite modificar regras de Network ACLs pela linha de comando (CLI, SDKs, etc.) sem causar bloqueios ou comportamentos erráticos. Essa alternativa foi criada apenas para confundir." },
            { correct: true, text: "Correta. Security Groups mantêm o estado da conexão, permitindo automaticamente o tráfego de retorno para conexões permitidas de entrada. Já as Network ACLs são stateless, exigindo regras explícitas para tráfego de entrada e saída. Para que a conexão funcione, as NACLs devem permitir o tráfego de entrada na porta do serviço e o tráfego de saída nas portas efêmeras usadas para o retorno." }
        ],
        glossary: [
            "Security Group: firewall virtual stateful que controla o tráfego de entrada e saída de instâncias EC2, permitindo automaticamente o tráfego de retorno para conexões estabelecidas.",
            "Network ACL (NACL): firewall stateless que controla o tráfego de entrada e saída em nível de sub-rede, exigindo regras explícitas para permitir tanto o tráfego de entrada quanto o de saída.",
            "Stateful: característica de um firewall que mantém o estado da conexão, permitindo automaticamente o tráfego de retorno sem regras adicionais.",
            "Stateless: característica de um firewall que não mantém o estado da conexão, exigindo regras explícitas para tráfego de entrada e saída.",
            "Porta efêmera: porta temporária utilizada pelo sistema operacional para tráfego de retorno em conexões TCP/IP, geralmente em um intervalo dinâmico."
        ],
        generalExplanation: [
            "A alternativa correta destaca a diferença fundamental entre Security Groups e Network ACLs no controle de tráfego.",
            "Security Groups são stateful, o que significa que, ao permitir o tráfego de entrada em uma porta específica, o tráfego de retorno é automaticamente permitido, simplificando a configuração.",
            "Por outro lado, Network ACLs são stateless, exigindo que tanto as regras de entrada quanto as de saída sejam configuradas explicitamente para permitir o tráfego bidirecional.",
            "Portanto, para resolver o problema de conexão, é necessário garantir que as Network ACLs permitam o tráfego de entrada na porta do serviço e o tráfego de saída nas portas efêmeras usadas para o retorno da comunicação.",
            "Essa abordagem segue as boas práticas da AWS para segurança em redes, garantindo controle granular e correto fluxo de dados."
        ],
        realWorld: [
            "Em um ambiente de produção, um desenvolvedor que implementa uma aplicação web hospedada em instâncias EC2 precisa garantir que os usuários possam acessar o serviço sem interrupções.",
            "Mesmo que o Security Group esteja configurado para permitir o tráfego de entrada na porta 80 ou 443, se as Network ACLs da sub-rede bloquearem o tráfego de saída nas portas efêmeras, a conexão não será estabelecida corretamente.",
            "Assim, o desenvolvedor deve revisar e ajustar as regras das Network ACLs para permitir o tráfego de saída necessário, garantindo a comunicação bidirecional.",
            "Além disso, em arquiteturas mais complexas que envolvem múltiplas sub-redes e camadas de segurança, entender a diferença entre stateful e stateless é crucial para evitar problemas de conectividade e manter a segurança da aplicação.",
            "Esse conhecimento é fundamental para equipes que trabalham com automação de infraestrutura, como usando AWS CloudFormation ou Terraform, onde regras de segurança precisam ser definidas de forma precisa e replicável."
        ]
    },
    {
        id: 53,
        title: "CloudFormation StackSets para múltiplas regiões",
        domain: "Implantação",
        prompt: "Uma empresa global de comércio eletrônico deseja realizar testes de carga geográficos em sua API de processamento de pedidos. A empresa precisa implantar recursos em múltiplas Regiões AWS para suportar o teste de carga da API. Como a empresa pode atender a esses requisitos sem adicionar código adicional à aplicação?",
        options: [
            { letter: "A", text: "Configurar um template do AWS Organizations que defina os recursos para o teste de carga em toda a organização. Utilizar o comando AWS CLI create-stack-set para criar um stack set nas Regiões desejadas.", correct: false },
            { letter: "B", text: "Configurar um template do AWS CloudFormation que defina os recursos para o teste de carga. Desenvolver funções Lambda específicas para cada Região que criem um stack a partir do template CloudFormation quando invocadas.", correct: false },
            { letter: "C", text: "Configurar um AWS Cloud Development Kit (CDK) Toolkit que defina os recursos para o teste de carga. Utilizar o CDK CLI para criar um stack a partir do template em cada Região.", correct: false },
            { letter: "D", text: "Configurar um template do AWS CloudFormation que defina os recursos para o teste de carga. Utilizar o comando AWS CLI create-stack-set para criar um stack set nas Regiões desejadas.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O AWS Organizations é um serviço para gerenciamento e consolidação de múltiplas contas AWS, não para definir templates ou provisionar recursos. Ele não suporta a criação de templates para infraestrutura, portanto não pode ser usado para criar recursos de teste de carga via stack sets." },
            { correct: false, text: "Incorreta. Essa abordagem exige desenvolvimento e manutenção de funções Lambda específicas para cada Região, além de criar stacks manualmente, o que gera complexidade e redundância desnecessária. O uso do CloudFormation StackSets elimina essa necessidade ao gerenciar múltiplas Regiões automaticamente." },
            { correct: false, text: "Incorreta. Embora o AWS CDK seja uma ferramenta poderosa para definir infraestrutura como código, ele ainda depende do CloudFormation para provisionamento e possui limitações regionais. Além disso, criar stacks individualmente em cada Região com o CDK CLI não automatiza a implantação multi-região de forma eficiente como o StackSets." },
            { correct: true, text: "Correta. O AWS CloudFormation StackSets permite criar, atualizar ou deletar stacks em múltiplas contas e Regiões AWS com uma única operação. Usando uma conta administradora, é possível definir um template CloudFormation e provisionar os recursos necessários para o teste de carga em várias Regiões simultaneamente, sem necessidade de código adicional." }
        ],
        glossary: [
            "AWS CloudFormation StackSets: recurso que permite <strong>criar, atualizar ou deletar stacks em múltiplas contas e regiões simultaneamente</strong>, facilitando implantação centralizada de infraestrutura.",
            "AWS Organizations: serviço para gerenciamento e consolidação de múltiplas contas AWS, focado em governança e controle, mas <strong>não em provisionamento direto de recursos</strong>.",
            "AWS CDK (Cloud Development Kit): framework para definir <strong>infraestrutura como código</strong> usando linguagens de programação, que gera templates CloudFormation para provisionamento.",
            "AWS CLI create-stack-set: comando da CLI da AWS utilizado para <strong>criar um stack set</strong>, permitindo a implantação de stacks em múltiplas regiões e contas."
        ],
        generalExplanation: [
            "A alternativa correta é <strong>usar AWS CloudFormation StackSets</strong> para definir e implantar recursos em <strong>múltiplas regiões simultaneamente</strong>:",
            "Permite provisionamento <strong>centralizado e automatizado</strong>, sem alterar o código da aplicação.",
            "É eficiente, escalável e segue as <strong>boas práticas da AWS</strong> para gerenciamento de infraestrutura como código em ambientes multi-região.",
            "Outras opções: desenvolvimento adicional ou scripts personalizados podem ser <strong>mais complexos e propensos a erros</strong>, uso inadequado de outros serviços pode gerar <strong>limitações regionais</strong> ou não atender ao requisito de múltiplas regiões."
        ],
        realWorld: [
            "Em aplicações que precisam ser testadas sob <strong>carga distribuída globalmente</strong>, o StackSets permite <strong>provisionar automaticamente recursos em várias regiões AWS</strong>.",
            "Exemplo: ao criar uma <strong>API de processamento de pedidos</strong>, o time pode implantar instâncias de teste, <strong>balanceadores de carga e funções Lambda</strong> em múltiplas regiões para simular tráfego real global.",
            "Alterações em templates CloudFormation podem ser propagadas para todas as regiões <strong>com um único comando</strong>, sem modificar o código da aplicação ou criar scripts específicos por localidade.",
            "Isso <strong>otimiza o tempo de desenvolvimento</strong>, mantém a <strong>infraestrutura consistente</strong> e facilita a manutenção e atualização dos recursos em ambientes distribuídos."
        ]
    },
    {
        id: 54,
        title: "Réplicas de leitura no Amazon RDS",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma empresa de varejo está migrando seu banco de dados local para o Amazon RDS para PostgreSQL. A empresa possui cargas de trabalho com alta demanda de leitura. A equipe de desenvolvimento está buscando refatorar o código para alcançar o desempenho ideal nas consultas SQL. Qual solução atenderá a esse requisito com o menor esforço de desenvolvimento atual e futuro?",
        options: [
            { letter: "A", text: "Configurar o Amazon RDS com uma ou mais réplicas de leitura. Refatorar o código da aplicação para que as consultas utilizem o endpoint das réplicas de leitura.", correct: true },
            { letter: "B", text: "Configurar o ElastiCache para Memcached para atuar como uma camada de cache para o Amazon RDS. Refatorar o código da aplicação para que as consultas utilizem o endpoint do ElastiCache para Memcached.", correct: false },
            { letter: "C", text: "Configurar o ElastiCache para Redis para atuar como uma camada de cache para o Amazon RDS. Refatorar o código da aplicação para que as consultas utilizem o endpoint do ElastiCache para Redis.", correct: false },
            { letter: "D", text: "Configurar o Amazon RDS em uma configuração Multi-AZ com uma única instância standby. Refatorar o código da aplicação para que as consultas utilizem o endpoint da instância standby.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Amazon RDS utiliza a funcionalidade nativa de replicação do PostgreSQL para criar réplicas de leitura, que são instâncias especializadas que recebem atualizações assíncronas da instância principal. Isso permite distribuir a carga de consultas somente leitura, melhorando o desempenho sem impactar a instância principal. Refatorar a aplicação para direcionar consultas de leitura às réplicas é a solução que oferece o melhor desempenho com menor esforço de desenvolvimento futuro." },
            { correct: false, text: "Incorreta. Assim como o Redis, o Memcached é um cache em memória e não um banco de dados relacional. Ele não suporta consultas SQL, portanto não pode substituir consultas diretas ao banco de dados PostgreSQL. Essa abordagem não atende ao requisito de otimização de consultas SQL." },
            { correct: false, text: "Incorreta. Embora o ElastiCache para Redis seja um cache em memória eficiente, ele não é um banco de dados relacional e não suporta consultas SQL diretamente. Portanto, não é adequado para substituir consultas SQL em um banco de dados relacional como o PostgreSQL." },
            { correct: false, text: "Incorreta. Em uma implantação Multi-AZ com instância standby, a instância standby é usada apenas para failover e não está acessível para consultas de leitura. Portanto, não é possível direcionar consultas de leitura para a instância standby, tornando essa opção inadequada para melhorar o desempenho de leitura." }
        ],
        glossary: [
            "Amazon RDS: serviço gerenciado de banco de dados relacional da AWS que facilita configuração, operação e escalabilidade de bancos de dados na nuvem.",
            "PostgreSQL: sistema gerenciador de banco de dados relacional open source, conhecido por sua robustez e suporte a consultas SQL complexas.",
            "Read Replica (Réplica de Leitura): instância que replica dados de forma <strong>assíncrona</strong> da instância principal para distribuir carga de consultas somente leitura.",
            "Multi-AZ (Multi-Zone Availability): configuração que cria uma instância <strong>standby</strong> em outra zona de disponibilidade para alta disponibilidade e failover automático, <strong>sem permitir acesso direto para leitura</strong>.",
            "ElastiCache: serviço gerenciado de cache em memória da AWS que suporta Redis e Memcached, acelerando acesso a dados frequentemente utilizados.",
            "Cache em memória: armazenamento temporário de dados em memória RAM para acesso rápido, utilizado para reduzir latência e carga em sistemas de backend."
        ],
        generalExplanation: [
            "Para otimizar <strong>cargas de trabalho com alta demanda de leitura</strong> em um banco relacional como o PostgreSQL no Amazon RDS:",
            "<strong>Read Replicas</strong> são a solução mais eficiente: distribuem consultas somente leitura entre múltiplas instâncias, reduzem carga na instância principal, melhoram desempenho geral <strong>sem alterar a estrutura do banco ou a lógica das consultas SQL</strong>.",
            "<strong>Multi-AZ</strong> é indicado para <strong>alta disponibilidade e recuperação de desastres</strong>, mas não escalabilidade de leitura, pois a instância standby <strong>não aceita conexões de leitura</strong>.",
            "<strong>ElastiCache</strong> (Redis ou Memcached) acelera dados específicos, mas não suporta consultas SQL e requer refatoração significativa para manter consistência e lógica de cache. Portanto, é menos adequado para substituir consultas diretas ao banco relacional neste cenário."
        ],
        realWorld: [
            "Em aplicações reais, como <strong>e-commerce</strong>, a migração para Amazon RDS exige escalabilidade de leitura: consultas de produtos, avaliações ou catálogos podem ser direcionadas para <strong>Read Replicas</strong>, aliviando a instância principal, enquanto operações de escrita permanecem na instância principal, mantendo consistência.",
            "À medida que a demanda cresce, novas réplicas podem ser adicionadas facilmente, mantendo a arquitetura simples e escalável.",
            "Uso de <strong>cache em memória</strong>: útil para acelerar acesso a dados específicos, mas exige <strong>camada adicional de lógica</strong> para consistência, não substituindo o banco relacional para consultas SQL complexas.",
            "Essa abordagem mantém a aplicação <strong>performática, escalável e alinhada às boas práticas da AWS</strong> para bancos de dados gerenciados."
        ]
    },
    {
        id: 55,
        title: "Timeouts no AWS CodeBuild",
        domain: "Implantação",
        prompt: "Você é um desenvolvedor trabalhando em uma aplicação de processamento de pedidos em larga escala. Após desenvolver as funcionalidades, você faz commit do seu código no AWS CodeCommit e inicia a construção do projeto com o AWS CodeBuild antes de implantá-lo no servidor. A construção está demorando muito e o erro aponta para um problema na resolução de dependências de terceiros. Você gostaria de evitar que uma construção demore tanto no futuro por razões semelhantes. Qual das opções a seguir representa a melhor solução para resolver esse caso de uso?",
        options: [
            { letter: "A", text: "Utilizar VPC Flow Logs", correct: false },
            { letter: "B", text: "Utilizar AWS Lambda", correct: false },
            { letter: "C", text: "Habilitar timeouts no CodeBuild", correct: true },
            { letter: "D", text: "Utilizar AWS CloudWatch Events", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. VPC Flow Logs captura informações sobre o tráfego de rede dentro da VPC, mas não tem relação com o controle ou otimização do processo de build no CodeBuild." },
            { correct: false, text: "Incorreta. O AWS Lambda permite executar código sem gerenciar servidores, mas não tem influência direta sobre o processo de build do CodeBuild nem sobre o tempo que ele leva para resolver dependências." },
            { correct: true, text: "Correta. Configurar um timeout no AWS CodeBuild permite que o processo de build seja automaticamente interrompido após um tempo máximo configurado, evitando que builds travem ou demorem excessivamente devido a problemas como falha na resolução de dependências." },
            { correct: false, text: "Incorreta. O AWS CloudWatch Events (agora Amazon EventBridge) é usado para monitorar e reagir a eventos em recursos AWS, mas não controla ou limita o tempo de execução dos builds no CodeBuild." }
        ],
        glossary: [
            "AWS CodeBuild: serviço gerenciado de integração contínua que compila código-fonte, executa testes e gera artefatos prontos para deploy.",
            "Timeout: limite máximo de tempo configurado para a execução de um processo; interrompe a operação caso seja ultrapassado.",
            "AWS CloudWatch Events / Amazon EventBridge: serviço que monitora eventos em recursos AWS e permite automatizar respostas a esses eventos.",
            "AWS Lambda: serviço serverless que executa código em resposta a eventos, sem necessidade de gerenciar servidores.",
            "VPC Flow Logs: recurso que captura e registra informações sobre o tráfego de rede dentro de uma VPC."
        ],
        generalExplanation: [
            "Configurar <strong>timeouts no AWS CodeBuild</strong> é a forma mais direta de evitar que builds fiquem presos ou demorem excessivamente.",
            "O timeout garante que, caso o processo ultrapasse o tempo máximo definido, ele seja automaticamente interrompido.",
            "Outras soluções (Lambda, CloudWatch Events, VPC Flow Logs) não controlam diretamente a duração ou interrupção do build, portanto não resolvem o problema específico de builds travados ou demorados.",
            "Essa prática otimiza o uso de recursos, evita gargalos no pipeline e mantém a cadência do CI/CD consistente."
        ],
        realWorld: [
            "Em pipelines de desenvolvimento ágil, é comum que builds travem devido a dependências externas lentas ou indisponíveis.",
            "Configurar um <strong>timeout adequado no CodeBuild</strong> permite que o build seja cancelado automaticamente, liberando recursos e sinalizando rapidamente que há um problema a ser resolvido.",
            "Exemplo prático: uma equipe que usa <strong>CodeCommit</strong> para versionamento e <strong>CodeBuild</strong> para compilar/testar o código pode definir timeouts de 30 ou 60 minutos. Se uma dependência ficar fora do ar, o build é interrompido, permitindo que a equipe corrija o problema antes de uma nova execução.",
            "Essa configuração melhora a eficiência do pipeline, reduz o tempo de feedback para os desenvolvedores e mantém a estabilidade do processo de entrega contínua."
        ]
    },
    {
        id: 56,
        title: "Credenciais do usuário root",
        domain: "Segurança",
        prompt: "Quais das seguintes credenciais de segurança só podem ser criadas pelo usuário root da conta AWS?",
        options: [
            { letter: "A", text: "Chaves de Par de Chaves do EC2", correct: false },
            { letter: "B", text: "Credenciais de Acesso do Usuário Root (senha e chaves de acesso root)", correct: true },
            { letter: "C", text: "Senhas de Usuário IAM", correct: false },
            { letter: "D", text: "Chaves de Acesso de Usuário IAM", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. As chaves de par de chaves do EC2 são usadas para acessar instâncias do Amazon EC2, como via SSH em instâncias Linux. Essas chaves podem ser criadas por usuários IAM e não exigem acesso do usuário root." },
            { correct: true, text: "Correta. Somente o usuário root da conta AWS pode criar e gerenciar suas próprias credenciais de acesso, incluindo a senha do usuário root e as chaves de acesso root. Essas credenciais concedem permissões totais na conta e não podem ser criadas por usuários IAM." },
            { correct: false, text: "Incorreta. Cada usuário IAM tem controle sobre suas próprias credenciais e pode redefinir sua senha a qualquer momento sem a necessidade do usuário root." },
            { correct: false, text: "Incorreta. As chaves de acesso, compostas por um ID e uma chave secreta, são usadas para assinar requisições programáticas à AWS. Usuários IAM podem criar suas próprias chaves de acesso sem necessidade do usuário root." }
        ],
        glossary: [
            "Chaves de Par de Chaves do EC2: pares de chaves públicas e privadas usados para acessar instâncias Amazon EC2 via SSH ou RDP.",
            "Senhas de Usuário IAM: senhas usadas para autenticação de usuários IAM no console da AWS.",
            "Chaves de Acesso de Usuário IAM: credenciais programáticas (ID de chave + chave secreta) usadas para chamadas de API da AWS.",
            "Credenciais de Acesso do Usuário Root: credenciais exclusivas do usuário root da conta AWS, incluindo senha e chaves de acesso, com permissões administrativas completas.",
            "Usuário Root: conta principal da AWS criada ao abrir a conta, com acesso irrestrito a todos os recursos e configurações."
        ],
        generalExplanation: [
            "Somente o <strong>usuário root</strong> pode criar e gerenciar suas próprias credenciais de acesso (senha e chaves de acesso root).",
            "Isso ocorre porque essas credenciais conferem <strong>controle total sobre a conta</strong>, incluindo acesso a todos os recursos e alterações críticas de configuração.",
            "Outras credenciais (chaves de acesso IAM, senhas de usuários IAM, pares de chaves EC2) <strong>podem ser criadas e gerenciadas por usuários IAM com permissões apropriadas</strong>, respeitando o princípio do menor privilégio e boas práticas de segurança.",
            "Limitar a gestão das credenciais root ao próprio usuário root <strong>minimiza riscos</strong> de comprometer a conta inteira."
        ],
        realWorld: [
            "Em ambientes corporativos, o usuário root deve ser reservado para tarefas críticas, como: configurar faturamento e informações da conta, recuperar acesso em casos críticos, alterar configurações sensíveis da AWS.",
            "Para operações diárias, os desenvolvedores usam usuários IAM com <strong>chaves de acesso</strong> para automação e integração, e <strong>pares de chaves EC2</strong> para acesso SSH/RDP às instâncias.",
            "Essa separação garante <strong>segurança, rastreabilidade e governança</strong>, evitando o uso indevido do usuário root e promovendo boas práticas de gerenciamento de credenciais na nuvem AWS."
        ]
    },
    {
        id: 57,
        title: "CodeDeploy para blue-green deployment",
        domain: "Implantação",
        prompt: "Um desenvolvedor foi solicitado a criar uma aplicação que possa ser implantada em uma frota de instâncias EC2. A configuração deve permitir controle total sobre as etapas da implantação utilizando o modelo de implantação blue-green. Qual serviço ajudará a alcançar esse objetivo?",
        options: [
            { letter: "A", text: "CodeDeploy", correct: true },
            { letter: "B", text: "Elastic Beanstalk", correct: false },
            { letter: "C", text: "CodePipeline", correct: false },
            { letter: "D", text: "CodeBuild", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O AWS CodeDeploy é um serviço de implantação que automatiza a entrega de aplicações para instâncias Amazon EC2, instâncias on-premises ou funções serverless Lambda. Ele oferece controle detalhado sobre as etapas da implantação e suporta o modelo blue-green, permitindo validar a nova versão antes de redirecionar o tráfego de produção." },
            { correct: false, text: "Incorreta. O AWS Elastic Beanstalk oferece hooks para personalização, mas não proporciona o mesmo nível de controle sobre as etapas de implantação que o CodeDeploy. Além disso, realiza atualizações in-place que podem causar indisponibilidade temporária, a menos que se utilize um ambiente separado para realizar uma implantação blue-green manualmente." },
            { correct: false, text: "Incorreta. O AWS CodePipeline automatiza as fases de build, teste e implantação do processo de release sempre que há uma alteração no código, porém, por si só, não realiza a implantação direta das aplicações nem oferece controle detalhado sobre as etapas da implantação blue-green." },
            { correct: false, text: "Incorreta. O AWS CodeBuild é um serviço totalmente gerenciado de integração contínua que compila o código-fonte, executa testes e gera pacotes de software prontos para implantação, mas não realiza a implantação das aplicações em si." }
        ],
        glossary: [
            "AWS CodeDeploy: serviço que automatiza a implantação de aplicações em instâncias EC2, servidores on-premises e funções Lambda, oferecendo <strong>controle detalhado sobre cada etapa da implantação</strong>.",
            "Blue-green deployment: estratégia de implantação que utiliza <strong>dois ambientes idênticos</strong> (blue e green) para minimizar downtime e riscos, permitindo validar a nova versão antes de redirecionar o tráfego.",
            "AWS CodeBuild: serviço gerenciado para <strong>compilação e teste contínuo</strong> do código-fonte, preparando artefatos para implantação, mas <strong>não realiza a implantação</strong> em si.",
            "AWS CodePipeline: serviço de orquestração que automatiza fases de build, teste e implantação no CI/CD, porém <strong>não oferece controle detalhado das etapas de implantação</strong>.",
            "AWS Elastic Beanstalk: serviço que facilita a implantação e gerenciamento de aplicações, mas geralmente realiza atualizações <strong>in-place</strong> e <strong>não permite granularidade completa</strong> como o CodeDeploy."
        ],
        generalExplanation: [
            "O <strong>AWS CodeDeploy</strong> é a escolha mais adequada para implementar uma aplicação em múltiplas instâncias EC2 usando <strong>blue-green deployment</strong>, pois:",
            "Permite criar <strong>ambientes separados</strong> para a versão atual (blue) e nova (green).",
            "Oferece <strong>controle total sobre cada etapa da implantação</strong>, incluindo testes e validações antes de redirecionar o tráfego.",
            "Minimiza riscos de downtime e falhas na produção.",
            "Outros serviços:",
            "<strong>CodeBuild</strong>: útil para build e testes, mas <strong>não realiza a implantação</strong>.",
            "<strong>CodePipeline</strong>: orquestra o fluxo de CI/CD, mas não oferece o mesmo nível de controle detalhado para blue-green.",
            "<strong>Elastic Beanstalk</strong>: simplifica implantações, mas <strong>não permite granularidade suficiente</strong> para blue-green em EC2."
        ],
        realWorld: [
            "Imagine um time de desenvolvimento atualizando uma aplicação crítica em várias instâncias EC2 sem causar indisponibilidade:",
            "O <strong>CodeDeploy</strong> cria um <strong>ambiente green</strong> com a nova versão da aplicação.",
            "Testes automatizados e monitoramento de desempenho são executados no green.",
            "Após validação, o <strong>tráfego é redirecionado</strong> do ambiente blue para o green, garantindo uma transição <strong>suave e segura</strong>.",
            "Além disso, integrando <strong>CodeDeploy</strong> com <strong>CodeBuild</strong> e <strong>CodePipeline</strong>, o time automatiza todo o fluxo de <strong>entrega contínua</strong>, desde a compilação até a implantação controlada, aumentando <strong>eficiência, confiabilidade e segurança</strong> das atualizações na nuvem AWS."
        ]
    },
    {
        id: 58,
        title: "Tratamento de erros no Amazon Kinesis",
        domain: "Solução de problemas e otimização",
        prompt: "Uma empresa de análise de dados processa dados de Internet das Coisas (IoT) usando o Amazon Kinesis. A equipe de desenvolvimento percebeu que o fluxo de dados IoT para o Kinesis apresenta picos periódicos. A chamada da API PutRecords ocasionalmente falha e os logs mostram que a resposta da chamada com falha é a seguinte: HTTP/1.1 200 OK ... { 'FailedRecordCount': 2, 'Records': [ { 'SequenceNumber': '...', 'ShardId': 'shardId-000000000000' }, { 'ErrorCode': 'ProvisionedThroughputExceededException', 'ErrorMessage': 'Taxa excedida para o shard shardId-000000000001 no stream exampleStreamName sob a conta 111111111111.' }, { 'ErrorCode': 'InternalFailure', 'ErrorMessage': 'Falha interna do serviço.' } ] } Como um Desenvolvedor Associado Certificado pela AWS, qual das seguintes opções você recomendaria para resolver esse caso de uso? (Selecione duas.)",
        options: [
            { letter: "A", text: "Diminuir o número de consumidores KCL", correct: false },
            { letter: "B", text: "Diminuir a frequência ou o tamanho das suas requisições", correct: true },
            { letter: "C", text: "Utilizar um mecanismo de retry com backoff exponencial para tratamento de erros", correct: true },
            { letter: "D", text: "Mesclar os shards para diminuir o número de shards no stream", correct: false },
            { letter: "E", text: "Aumentar a frequência ou o tamanho das suas requisições", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O número de consumidores KCL (Kinesis Client Library) não afeta diretamente o erro ProvisionedThroughputExceededException, que está relacionado à taxa de gravação dos produtores via PutRecords, não ao consumo dos dados." },
            { correct: true, text: "Correta. Reduzir a taxa ou o tamanho das requisições ajuda a evitar ultrapassar a capacidade provisionada do shard, prevenindo erros de throughput excedido e melhorando a estabilidade do fluxo de dados." },
            { correct: true, text: "Correta. Implementar retries com backoff exponencial é uma prática recomendada para lidar com erros temporários, como ProvisionedThroughputExceededException, permitindo que o sistema aguarde antes de tentar novamente, reduzindo a pressão sobre o stream." },
            { correct: false, text: "Incorreta. Mesclar shards reduz a capacidade total de throughput do stream, o que pode aumentar a probabilidade de erros de ProvisionedThroughputExceededException, piorando o problema." },
            { correct: false, text: "Incorreta. Aumentar a frequência ou o tamanho das requisições agravaria o problema de throughput excedido, resultando em mais falhas e degradação do desempenho do stream." }
        ],
        glossary: [
            "ProvisionedThroughputExceededException: erro que indica que a taxa de requisições ou volume de dados ultrapassou a <strong>capacidade provisionada do shard</strong> no Amazon Kinesis.",
            "PutRecords API: chamada que permite enviar <strong>múltiplos registros</strong> para um stream Kinesis em uma única requisição.",
            "Shard: unidade de capacidade de um stream Kinesis que determina o <strong>throughput</strong> de leitura e gravação.",
            "Backoff exponencial: técnica de retry que aumenta progressivamente o intervalo entre tentativas após falhas temporárias.",
            "KCL (Kinesis Client Library): biblioteca que facilita o consumo de dados de streams Kinesis.",
            "Resharding: processo de aumentar ou diminuir o número de shards em um stream para ajustar sua capacidade.",
            "Throughput: taxa de transferência de dados suportada por um recurso.",
            "Record: unidade de dados enviada para o stream Kinesis."
        ],
        generalExplanation: [
            "Para resolver <strong>ProvisionedThroughputExceededException</strong> em streams Kinesis:",
            "<strong>Reduzir pressão sobre os shards</strong>: diminuir a frequência ou o tamanho das requisições enviadas via <strong>PutRecords</strong>, evitando ultrapassar a capacidade provisionada.",
            "<strong>Implementar retry com backoff exponencial</strong>: aguarda um tempo crescente entre tentativas, evitando sobrecarregar o stream e aumentando a resiliência do sistema.",
            "<strong>Monitoramento e resharding</strong>: caso a demanda continue alta, aumentar a capacidade do stream ajustando o número de shards.",
            "Essas práticas combinadas aumentam <strong>resiliência, estabilidade e performance</strong>, alinhadas às melhores práticas da AWS para <strong>tratamento de erros e otimização de throughput</strong>."
        ],
        realWorld: [
            "Em aplicações de <strong>IoT</strong> ou coleta de dados em tempo real, picos de tráfego podem exceder a capacidade dos shards, gerando erros de throughput.",
            "Desenvolvedores podem: reduzir o tamanho dos lotes enviados pelo <strong>PutRecords</strong>, implementar <strong>retries com backoff exponencial</strong> para lidar com falhas temporárias sem perder dados.",
            "O time pode <strong>monitorar o uso do stream</strong> e, se necessário, realizar <strong>resharding</strong> para aumentar a capacidade.",
            "Essas práticas garantem que a aplicação mantenha <strong>alta disponibilidade e desempenho</strong>, mesmo com variações de carga, permitindo <strong>processamento contínuo e confiável</strong> dos dados IoT."
        ]
    },
    {
        id: 59,
        title: "Política de bucket para exigir SSE-KMS",
        domain: "Segurança",
        prompt: "Um desenvolvedor está configurando uma política de bucket que nega a permissão de upload de objetos para qualquer requisição que não inclua o cabeçalho x-amz-server-side-encryption solicitando criptografia do lado do servidor com SSE-KMS para um bucket Amazon S3 chamado examplebucket. Qual das seguintes políticas atende corretamente a esse requisito?",
        options: [
            { letter: "A", text: "{ 'Version':'2012-10-17', 'Id':'PutObjectPolicy', 'Statement':[{ 'Sid':'DenyUnEncryptedObjectUploads', 'Effect':'Deny', 'Principal':'*', 'Action':'s3:PutObject', 'Resource':'arn:aws:s3:::examplebucket/*', 'Condition':{ 'StringEquals':{ 's3:x-amz-server-side-encryption':'aws:kms' } } } ] }", correct: false },
            { letter: "B", text: "{ 'Version':'2012-10-17', 'Id':'PutObjectPolicy', 'Statement':[{ 'Sid':'DenyUnEncryptedObjectUploads', 'Effect':'Deny', 'Principal':'*', 'Action':'s3:PutObject', 'Resource':'arn:aws:s3:::examplebucket/*', 'Condition':{ 'StringNotEquals':{ 's3:x-amz-server-side-encryption':'false' } } } ] }", correct: false },
            { letter: "C", text: "{ 'Version':'2012-10-17', 'Id':'PutObjectPolicy', 'Statement':[{ 'Sid':'DenyUnEncryptedObjectUploads', 'Effect':'Deny', 'Principal':'*', 'Action':'s3:GetObject', 'Resource':'arn:aws:s3:::examplebucket/*', 'Condition':{ 'StringNotEquals':{ 's3:x-amz-server-side-encryption':'aws:AES256' } } } ] }", correct: false },
            { letter: "D", text: "{ 'Version':'2012-10-17', 'Id':'PutObjectPolicy', 'Statement':[{ 'Sid':'DenyUnEncryptedObjectUploads', 'Effect':'Deny', 'Principal':'*', 'Action':'s3:PutObject', 'Resource':'arn:aws:s3:::examplebucket/*', 'Condition':{ 'StringNotEquals':{ 's3:x-amz-server-side-encryption':'aws:kms' } } } ] }", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Embora esta política verifique o valor correto do cabeçalho SSE-KMS, a condição usa 'StringEquals' em vez de 'StringNotEquals'. Isso significa que ela negaria uploads apenas quando o cabeçalho for exatamente 'aws:kms', o que é o oposto do comportamento desejado." },
            { correct: false, text: "Incorreta. Esta política nega uploads de objetos quando o cabeçalho de criptografia do lado do servidor não é 'false', o que não faz sentido, pois 'false' não é um valor válido para o cabeçalho 'x-amz-server-side-encryption'. A condição correta deve verificar se o valor é diferente de 'aws:kms' para garantir que a criptografia SSE-KMS seja usada." },
            { correct: false, text: "Incorreta. Esta política nega a ação s3:GetObject, que é para leitura, enquanto o requisito é negar uploads (s3:PutObject). Além disso, verifica a criptografia SSE-S3 (AES256) em vez de SSE-KMS, o que não atende ao requisito especificado." },
            { correct: true, text: "Correta. Esta política nega a permissão de upload (s3:PutObject) para qualquer requisição que não inclua o cabeçalho 'x-amz-server-side-encryption' com o valor 'aws:kms', garantindo que apenas uploads criptografados com SSE-KMS sejam permitidos no bucket examplebucket." }
        ],
        glossary: [
            "SSE-KMS: Server-Side Encryption com <strong>AWS Key Management Service</strong>, método de criptografia gerenciado que utiliza <strong>chaves KMS</strong> para proteger dados em repouso.",
            "x-amz-server-side-encryption: cabeçalho HTTP usado em requisições ao S3 para indicar o tipo de <strong>criptografia do lado do servidor</strong> a ser aplicada.",
            "s3:PutObject: permissão do IAM que permite a <strong>ação de upload de objetos</strong> em um bucket Amazon S3.",
            "StringNotEquals: operador de condição no IAM que verifica se o valor de uma chave <strong>não é igual</strong> ao valor especificado.",
            "SSE-S3 (AES256): criptografia do lado do servidor gerenciada pelo S3, utilizando o algoritmo <strong>AES-256</strong>.",
            "ARN (Amazon Resource Name): identificador único de recursos na AWS, como buckets S3.",
            "Bucket Policy: política de permissões aplicada diretamente a um <strong>bucket S3</strong> para controlar acesso e ações permitidas.",
            "CMK (Customer Master Key): chave mestra gerenciada no AWS KMS usada para <strong>criptografia e controle de acesso</strong> a dados criptografados."
        ],
        generalExplanation: [
            "A política correta deve <strong>negar explicitamente uploads (</strong><code><strong>s3:PutObject</strong></code><strong>)</strong> que <strong>não incluam</strong> o cabeçalho <code>x-amz-server-side-encryption</code> com valor <code>\"aws:kms\"</code>.",
            "O operador <code><strong>StringNotEquals</strong></code> é usado para <strong>bloquear requisições sem SSE-KMS</strong>, garantindo que todos os objetos sejam criptografados usando chaves KMS.",
            "A política deve especificar <strong>ação e recurso corretamente</strong>, aplicando-se apenas ao bucket desejado.",
            "Políticas que: negam ações erradas, usam valores incorretos no cabeçalho, aplicam condições invertidas <strong>não atendem aos requisitos de segurança</strong>."
        ],
        realWorld: [
            "Em ambientes corporativos com <strong>requisitos de conformidade</strong>, é fundamental garantir que todos os dados no S3 estejam protegidos com <strong>SSE-KMS</strong>.",
            "Exemplo: uma aplicação serverless que armazena documentos sensíveis via <strong>AWS Lambda</strong> só permite uploads <strong>criptografados</strong>, evitando falhas de segurança ou uploads maliciosos.",
            "Essa prática facilita <strong>auditorias</strong> e gerenciamento centralizado de chaves KMS, permitindo que equipes monitorem e controlem <strong>acesso às chaves de criptografia</strong>.",
            "Essencial para aplicações que lidam com <strong>dados financeiros, pessoais ou confidenciais</strong>, garantindo proteção consistente e automática no momento do upload."
        ]
    },
    {
        id: 60,
        title: "RDS e ElastiCache com Elastic Beanstalk",
        domain: "Implantação",
        prompt: "Você criou uma aplicação Java que utiliza o Amazon RDS como seu principal armazenamento de dados e o ElastiCache para armazenamento de sessões de usuário. A aplicação precisa ser implantada usando o Elastic Beanstalk, e toda nova implantação deve permitir que os servidores da aplicação reutilizem o banco de dados RDS. Por outro lado, os dados de sessão do usuário armazenados no ElastiCache podem ser recriados a cada implantação. Qual das seguintes configurações permitirá alcançar esse objetivo? (Selecione duas.)",
        options: [
            { letter: "A", text: "Banco de dados RDS definido externamente e referenciado por variáveis de ambiente", correct: true },
            { letter: "B", text: "ElastiCache definido dentro do diretório .ebextensions/", correct: false },
            { letter: "C", text: "Banco de dados ElastiCache definido externamente e referenciado por variáveis de ambiente", correct: true },
            { letter: "D", text: "ElastiCache incluído junto ao código-fonte da aplicação", correct: false },
            { letter: "E", text: "Banco de dados RDS definido dentro do diretório .ebextensions/", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Definir o banco RDS externamente desacopla sua vida útil do ambiente Elastic Beanstalk, permitindo reutilização do banco em múltiplos ambientes e atualizações sem perda de dados." },
            { correct: false, text: "Incorreta. Não é possível criar clusters ElastiCache via arquivos .ebextensions, pois ElastiCache é um serviço gerenciado externo ao ambiente Elastic Beanstalk." },
            { correct: true, text: "Correta. O ElastiCache deve ser criado externamente e referenciado pela aplicação, pois é um serviço gerenciado separado do Elastic Beanstalk. Para dados de sessão transitórios, essa abordagem é adequada e permite reutilização entre implantações." },
            { correct: false, text: "Incorreta. O ElastiCache é um serviço gerenciado da AWS e não pode ser incluído ou empacotado junto ao código-fonte da aplicação." },
            { correct: false, text: "Incorreta. Criar o banco RDS via .ebextensions vincula sua existência ao ciclo de vida do ambiente Elastic Beanstalk, o que pode causar perda de dados ao encerrar o ambiente." }
        ],
        glossary: [
            "Elastic Beanstalk: serviço gerenciado da AWS que facilita a implantação, gerenciamento e escalabilidade de aplicações web e serviços em múltiplas linguagens.",
            "Amazon RDS: serviço gerenciado de banco de dados relacional que oferece <strong>alta disponibilidade, escalabilidade e backups automáticos</strong>.",
            "ElastiCache: serviço gerenciado de <strong>cache em memória</strong> (Redis ou Memcached) que reduz a latência de acesso a dados e melhora a performance da aplicação.",
            ".ebextensions: diretório usado para armazenar arquivos de configuração <strong>YAML</strong> que customizam e estendem o ambiente Elastic Beanstalk durante a implantação.",
            "Variáveis de ambiente: parâmetros passados para a aplicação em tempo de execução, permitindo <strong>flexibilidade sem alterar o código</strong>.",
            "Desacoplamento: prática de separar componentes para que possam ser gerenciados, atualizados e escalados <strong>independentemente</strong>.",
            "Ciclo de vida do ambiente: período em que um ambiente Elastic Beanstalk está ativo e gerenciando recursos associados.",
            "Sessões de usuário: dados temporários que mantêm estado e informações do usuário durante a interação com a aplicação."
        ],
        generalExplanation: [
            "Para que um <strong>banco de dados RDS</strong> seja reutilizado entre implantações do Elastic Beanstalk, <strong>deve ser criado externamente</strong> ao ambiente e referenciado via <strong>variáveis de ambiente</strong>.",
            "Isso evita que o banco seja destruído junto com o ambiente, preservando <strong>dados persistentes</strong>.",
            "Para o <strong>ElastiCache</strong>, usado para <strong>sessões de usuário transitórias</strong>, o ideal também é provisionar externamente e referenciar pela aplicação, pois ele é um serviço separado e não pode ser provisionado via <code>.ebextensions</code>.",
            "Essa configuração permite <strong>reutilização de cache entre implantações</strong>, garante <strong>desacoplamento</strong> entre a aplicação e recursos gerenciados e facilita manutenção e escalabilidade."
        ],
        realWorld: [
            "Em uma aplicação web Java hospedada no Elastic Beanstalk que usa RDS para persistência e ElastiCache para sessões:",
            "O <strong>banco RDS</strong> é criado fora do Beanstalk, e suas credenciais são passadas à aplicação via <strong>variáveis de ambiente</strong>, garantindo que os dados não sejam perdidos durante atualizações.",
            "O <strong>ElastiCache</strong>, também externo, armazena sessões temporárias, podendo ser limpo ou reiniciado sem impactar o RDS.",
            "Essa abordagem: preserva <strong>dados persistentes</strong>, facilita <strong>atualizações do ambiente</strong> sem interrupção dos serviços, segue as <strong>boas práticas da AWS</strong> de desacoplamento, reutilização de recursos e gestão eficiente de ambientes gerenciados."
        ]
    },
    {
        id: 61,
        title: "Depuração do X-Ray - Amostragem",
        domain: "Solução de problemas e otimização",
        prompt: "Você implantou uma aplicação Java em uma instância EC2 que utiliza o SDK do X-Ray. Ao testar a aplicação a partir do seu computador pessoal, ela envia dados para o X-Ray normalmente, mas quando a aplicação é executada dentro da instância EC2, ela falha ao enviar os dados para o X-Ray. Qual das seguintes opções NÃO ajuda na depuração desse problema?",
        options: [
            { letter: "A", text: "Daemon do X-Ray na EC2", correct: false },
            { letter: "B", text: "Função de Instância EC2 (EC2 Instance Role)", correct: false },
            { letter: "C", text: "CloudTrail", correct: false },
            { letter: "D", text: "Amostragem (X-Ray Sampling)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O daemon do X-Ray é um aplicativo que escuta o tráfego na porta UDP 2000, coleta os dados brutos dos segmentos e os envia para a API do AWS X-Ray. Os logs do daemon podem ajudar a identificar problemas na comunicação ou no envio dos dados." },
            { correct: false, text: "Incorreta. O daemon do X-Ray utiliza o SDK da AWS para enviar os dados de rastreamento e precisa de credenciais com permissões adequadas. Na EC2, ele usa automaticamente a função associada à instância, o que elimina problemas relacionados a permissões de API." },
            { correct: false, text: "Incorreta. O AWS CloudTrail registra e monitora continuamente as atividades da conta, incluindo chamadas de API. É possível verificar no CloudTrail se alguma chamada relacionada ao X-Ray está sendo negada, auxiliando na identificação de problemas de permissão ou configuração." },
            { correct: true, text: "Correta. A amostragem permite controlar a quantidade de dados registrados e modificar o comportamento de amostragem sem alterar ou reimplantar o código. No entanto, como a aplicação está falhando em enviar dados para o X-Ray, a amostragem não auxilia na identificação da causa da falha." }
        ],
        glossary: [
            "Daemon do X-Ray: componente que coleta e envia dados de rastreamento para o <strong>AWS X-Ray</strong>, escutando na porta <strong>UDP 2000</strong> para receber dados do SDK.",
            "Amostragem (X-Ray Sampling): técnica que controla a quantidade de dados de rastreamento coletados e enviados, permitindo ajustes sem alterar o código da aplicação.",
            "Função de Instância EC2 (EC2 Instance Role): perfil IAM atribuído a uma instância EC2 que concede permissões para que aplicações e serviços acessem recursos AWS.",
            "CloudTrail: serviço AWS que registra e monitora chamadas de API e atividades realizadas na conta, útil para auditoria e troubleshooting.",
            "SDK do X-Ray: biblioteca utilizada pela aplicação para instrumentar e enviar dados de rastreamento ao daemon do X-Ray.",
            "UDP porta 2000: porta de rede usada pelo daemon para receber dados enviados pelo SDK.",
            "IAM (Identity and Access Management): serviço AWS para gerenciamento de identidades, permissões e políticas de acesso.",
            "API do X-Ray: interface programática que recebe e processa os dados de rastreamento enviados pelo daemon."
        ],
        generalExplanation: [
            "A alternativa correta é <strong>Amostragem (X-Ray Sampling)</strong>, pois <strong>não contribui para a depuração de falhas no envio de dados</strong> ao X-Ray.",
            "A amostragem apenas define <strong>quantos dados serão coletados e enviados</strong>, sem interferir na <strong>comunicação, permissões ou funcionamento do daemon e do SDK</strong>.",
            "Componentes como <strong>daemon do X-Ray</strong>, <strong>função EC2</strong> e <strong>CloudTrail</strong> são essenciais para solucionar problemas de envio de dados, verificando <strong>comunicação, permissões e chamadas de API</strong>, que são as causas mais prováveis de falha."
        ],
        realWorld: [
            "Em produção, ao instrumentar uma aplicação com o <strong>SDK do X-Ray</strong> em EC2, se os dados não forem enviados corretamente, o desenvolvedor deve: verificar se o <strong>daemon do X-Ray</strong> está ativo e funcionando, conferir se a <strong>instância EC2</strong> possui a <strong>função IAM correta</strong> com permissões para enviar dados, consultar o <strong>CloudTrail</strong> para identificar bloqueios ou erros de autorização.",
            "Ajustar a <strong>amostragem</strong> não resolverá problemas de comunicação ou permissões, mas pode ser usado posteriormente para controlar o volume de dados coletados.",
            "Esse conhecimento é crucial para times que buscam <strong>visibilidade e monitoramento eficaz</strong> em arquiteturas distribuídas ou serverless, onde o X-Ray ajuda a identificar <strong>gargalos e falhas operacionais</strong>, mantendo a aplicação resiliente e observável."
        ]
    },
    {
        id: 62,
        title: "Política de bucket para exigir SSE-S3",
        domain: "Segurança",
        prompt: "Um desenvolvedor possui uma aplicação que armazena dados em um bucket do Amazon S3. A aplicação utiliza uma API HTTP para armazenar e recuperar objetos. Quando a operação PutObject adiciona objetos ao bucket S3, o desenvolvedor deve garantir que esses objetos sejam criptografados em repouso utilizando criptografia do lado do servidor com chaves gerenciadas pelo Amazon S3 (SSE-S3). Qual solução garantirá que qualquer requisição de upload sem a criptografia obrigatória não seja processada?",
        options: [
            { letter: "A", text: "Definir a chave de criptografia para SSE-S3 no cabeçalho HTTP de cada requisição. Usar uma política de bucket S3 para negar permissão de upload de objeto caso a requisição não contenha esse cabeçalho.", correct: false },
            { letter: "B", text: "Invocar a operação PutObject e definir o cabeçalho x-amz-server-side-encryption como sse:s3. Utilizar uma política de bucket S3 para negar permissão de upload de objeto caso a requisição não contenha esse cabeçalho.", correct: false },
            { letter: "C", text: "Invocar a operação PutObject e definir o cabeçalho x-amz-server-side-encryption como AES256. Utilizar uma política de bucket S3 para negar permissão de upload de objeto caso a requisição não contenha esse cabeçalho.", correct: true },
            { letter: "D", text: "Invocar a operação PutObject e definir o cabeçalho x-amz-server-side-encryption como aws:kms. Utilizar uma política de bucket S3 para negar permissão de upload de objeto caso a requisição não contenha esse cabeçalho.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Para SSE-S3, o Amazon S3 gerencia automaticamente as chaves de criptografia e não permite que o cliente defina ou envie a chave de criptografia no cabeçalho HTTP. Portanto, essa abordagem não é válida nem suportada." },
            { correct: false, text: "Incorreta. O valor 'sse:s3' não é um valor válido para o cabeçalho x-amz-server-side-encryption. Para SSE-S3, o valor correto é 'AES256'. Essa opção é fictícia e não funcionará." },
            { correct: true, text: "Correta. A criptografia SSE-S3 é ativada ao definir o cabeçalho x-amz-server-side-encryption com o valor AES256 na requisição PutObject. Uma política de bucket pode negar uploads que não incluam esse cabeçalho, garantindo que todos os objetos sejam criptografados em repouso com SSE-S3." },
            { correct: false, text: "Incorreta. O valor 'aws:kms' é utilizado para criptografia do lado do servidor com AWS KMS (SSE-KMS), que é diferente do SSE-S3. Como a exigência é usar SSE-S3, essa opção não atende ao requisito." }
        ],
        glossary: [
            "SSE-S3: Server-Side Encryption com chaves gerenciadas automaticamente pelo Amazon S3 para proteger dados em repouso.",
            "x-amz-server-side-encryption: cabeçalho HTTP utilizado para especificar o método de criptografia do lado do servidor ao enviar objetos para o S3.",
            "AES256: algoritmo de criptografia simétrica com chave de 256 bits, padrão utilizado pelo SSE-S3.",
            "SSE-KMS: Server-Side Encryption com chaves gerenciadas pelo AWS Key Management Service (KMS), diferente do SSE-S3.",
            "Política de bucket S3: conjunto de regras que definem permissões e restrições para operações em um bucket S3."
        ],
        generalExplanation: [
            "A prática correta é <strong>configurar o cabeçalho </strong><code><strong>x-amz-server-side-encryption</strong></code><strong> com valor </strong><code><strong>AES256</strong></code> nas requisições <code>PutObject</code> e criar uma <strong>política de bucket que negue uploads sem esse cabeçalho</strong>.",
            "Isso garante que todos os objetos sejam criptografados em repouso usando <strong>SSE-S3</strong>, sem necessidade de enviar ou gerenciar chaves manualmente.",
            "O uso de <strong>SSE-KMS</strong> não atende ao requisito específico de SSE-S3, e valores incorretos no cabeçalho podem permitir uploads sem criptografia.",
            "A política de bucket adiciona uma camada de controle que impede que objetos sejam gravados sem criptografia, reforçando a segurança dos dados."
        ],
        realWorld: [
            "Em produção, ao armazenar dados sensíveis no S3, é essencial que <strong>todos os objetos sejam criptografados automaticamente</strong>, para atender a normas de conformidade e segurança.",
            "Configurar o cliente para incluir <code>x-amz-server-side-encryption: AES256</code> em cada upload e aplicar uma política de bucket que bloqueie uploads sem esse cabeçalho garante que <strong>nenhum dado seja armazenado sem proteção</strong>, mesmo em casos de falhas no código ou tentativas de upload direto via API.",
            "<strong>Exemplo prático:</strong> uma aplicação serverless que utiliza AWS Lambda para processar arquivos e enviá-los ao S3. Com essa configuração, o Lambda só consegue gravar arquivos que estejam criptografados, evitando vazamento ou armazenamento inseguro de informações sensíveis.",
            "Essa abordagem facilita a <strong>governança de dados</strong>, reduz riscos de exposição e está alinhada às <strong>melhores práticas de segurança da AWS</strong>."
        ]
    },
    {
        id: 63,
        title: "Credenciais NÃO suportadas pelo IAM para CodeCommit",
        domain: "Implantação",
        prompt: "O CodeCommit é um serviço gerenciado de controle de versão que hospeda repositórios Git privados na nuvem AWS. Qual dos seguintes tipos de credenciais NÃO é suportado pelo IAM para acesso ao CodeCommit?",
        options: [
            { letter: "A", text: "Credenciais Git (Git credentials)", correct: false },
            { letter: "B", text: "Nome de usuário e senha do IAM (IAM username and password)", correct: true },
            { letter: "C", text: "Chaves de acesso AWS (AWS Access Keys)", correct: false },
            { letter: "D", text: "Chaves SSH (SSH Keys)", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. As credenciais Git são um par de nome de usuário e senha gerados pelo IAM que podem ser usados para acessar repositórios CodeCommit via HTTPS." },
            { correct: true, text: "Correta. O nome de usuário e senha do IAM não podem ser usados para acessar o CodeCommit, pois o serviço não suporta autenticação direta com essas credenciais." },
            { correct: false, text: "Incorreta. As chaves de acesso AWS podem ser usadas com o auxiliar de credenciais incluído no AWS CLI para se comunicar com repositórios CodeCommit via HTTPS." },
            { correct: false, text: "Incorreta. As chaves SSH são pares de chaves pública e privada geradas localmente que podem ser associadas ao usuário IAM para comunicação com repositórios CodeCommit via SSH." }
        ],
        glossary: [
            "CodeCommit: serviço gerenciado da AWS que oferece <strong>repositórios Git privados</strong> na nuvem para controle de versão de código-fonte.",
            "Credenciais Git: par de <strong>nome de usuário e senha gerados pelo IAM</strong> especificamente para autenticação via HTTPS em repositórios CodeCommit.",
            "Chaves SSH: par de chaves criptográficas (pública e privada) usadas para <strong>autenticação segura via SSH</strong> em repositórios Git, incluindo CodeCommit.",
            "Chaves de acesso AWS (AWS Access Keys): credenciais compostas por <strong>chave de acesso e chave secreta</strong> que permitem acesso programático aos serviços AWS, incluindo autenticação via AWS CLI.",
            "IAM username and password: credenciais padrão do usuário IAM para login na AWS Management Console, <strong>não suportadas para autenticação direta em CodeCommit</strong>."
        ],
        generalExplanation: [
            "O <strong>CodeCommit</strong> suporta autenticação segura por meio de: <strong>Chaves de acesso AWS</strong>, <strong>Chaves SSH</strong>, <strong>Credenciais Git geradas pelo IAM</strong>.",
            "O <strong>uso direto do nome de usuário e senha do IAM</strong> não é suportado para CodeCommit, pois comprometeria a segurança e o controle granular de acesso.",
            "Essa abordagem reforça as <strong>boas práticas da AWS</strong>, priorizando métodos de autenticação <strong>mais seguros e específicos</strong>, garantindo um ambiente gerenciável e protegido."
        ],
        realWorld: [
            "Times de desenvolvimento podem acessar CodeCommit via <strong>HTTPS com credenciais Git</strong> ou <strong>SSH com chaves SSH</strong>, permitindo <strong>controle refinado de acesso</strong> e fácil rotação de credenciais.",
            "Exemplo: um desenvolvedor usa <strong>AWS CLI com chaves de acesso</strong> para operações automatizadas. Outro usa <strong>SSH</strong> para interações manuais com o repositório.",
            "Evitar o uso do <strong>nome de usuário e senha do IAM</strong> previne a exposição de credenciais sensíveis, protegendo o código-fonte.",
            "Essa prática garante <strong>integridade e confidencialidade</strong> do código em ambientes corporativos ou projetos críticos, alinhada às melhores práticas de segurança da AWS."
        ]
    },
    {
        id: 64,
        title: "Deploy canário no Lambda com aliases",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Uma equipe de desenvolvimento em uma empresa de mídia social utiliza funções AWS Lambda para sua arquitetura serverless na nuvem AWS. Para uma nova implantação, o líder da equipe deseja enviar apenas uma parte do tráfego para uma nova versão da função Lambda. Caso a implantação apresente problemas, a solução também deve suportar a capacidade de reverter para uma versão anterior da função Lambda, com o MÍNIMO tempo de inatividade para a aplicação. Como um Associate Developer, qual das seguintes opções você recomendaria para atender a esse caso de uso?",
        options: [
            { letter: "A", text: "Configure a aplicação para usar um alias que aponte para a versão atual. Faça o deploy da nova versão do código e configure o alias para enviar 10% dos usuários para essa nova versão. Se a implantação falhar, redefina o alias para enviar todo o tráfego para a versão atual.", correct: true },
            { letter: "B", text: "Configure a aplicação para ter múltiplos aliases da função Lambda. Faça o deploy da nova versão do código. Configure um novo alias que aponte para o alias atual da função Lambda para tratar 10% do tráfego. Se a implantação falhar, redefina o novo alias para apontar todo o tráfego para o alias funcional mais recente da função Lambda.", correct: false },
            { letter: "C", text: "Configure a aplicação para usar um alias que aponte para a versão atual. Faça o deploy da nova versão do código e configure o alias para enviar todo o tráfego para essa nova versão. Se a implantação falhar, redefina o alias para apontar para a versão atual.", correct: false },
            { letter: "D", text: "Configure a aplicação para fazer o deploy diretamente da nova versão da função Lambda. Se a implantação falhar, redefina a aplicação para a versão atual usando o número da versão no ARN.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Essa abordagem utiliza aliases para controlar o tráfego, enviando apenas uma parte para a nova versão, permitindo testes controlados. Em caso de falha, o alias pode ser rapidamente revertido para a versão estável, minimizando o downtime." },
            { correct: false, text: "Incorreta. Um alias do Lambda só pode apontar para uma versão específica da função Lambda, não para outro alias. Portanto, configurar um alias para apontar para outro alias não é possível e torna essa solução inviável." },
            { correct: false, text: "Incorreta. Embora utilize alias, essa opção envia 100% do tráfego para a nova versão, o que não atende ao requisito de enviar apenas uma parte do tráfego para a nova versão. Além disso, em caso de falha, a aplicação pode sofrer tempo de inatividade, o que contraria o requisito de mínimo downtime." },
            { correct: false, text: "Incorreta. Essa opção envia todo o tráfego para a nova versão sem controle de percentual, não atendendo ao requisito de enviar apenas parte do tráfego. Além disso, a reversão pode causar downtime, contrariando o requisito de mínimo tempo de inatividade." }
        ],
        glossary: [
            "AWS Lambda: serviço serverless que executa código em resposta a eventos, sem necessidade de gerenciamento de servidores.",
            "Alias Lambda: ponteiro nomeado que referencia uma versão específica da função Lambda, permitindo roteamento de tráfego e controle de versões.",
            "Versão Lambda: cópia imutável do código e configuração da função, utilizada como referência por aliases.",
            "ARN (Amazon Resource Name): identificador único de recursos AWS, usado para referenciar funções, versões e aliases.",
            "Deploy canário: estratégia de implantação que direciona uma pequena fração do tráfego para a nova versão, monitorando comportamento antes do rollout completo."
        ],
        generalExplanation: [
            "O uso de <strong>aliases do Lambda</strong> permite controlar o roteamento do tráfego para versões específicas da função.",
            "Um <strong>deploy canário</strong> com 10% do tráfego envia uma parcela de usuários para a nova versão, reduzindo risco de impacto caso ocorram falhas.",
            "Caso a nova versão apresente problemas, o alias pode ser rapidamente revertido para a versão estável anterior, garantindo continuidade do serviço.",
            "Essa abordagem segue as <strong>melhores práticas da AWS</strong> para atualizações seguras de funções serverless, mantendo alta disponibilidade e resiliente operação em produção."
        ],
        realWorld: [
            "Uma equipe que mantém uma aplicação serverless pode implementar deploys canários para testar novas funcionalidades de forma segura.",
            "Exemplo: ao atualizar uma função que processa posts em uma rede social, inicialmente 10% do tráfego é direcionado para a nova versão, permitindo monitorar logs e métricas via <strong>CloudWatch</strong>.",
            "Se tudo estiver estável, a versão pode ser promovida para 100% do tráfego; se houver falhas, a reversão é rápida e transparente para o usuário final.",
            "Essa prática aumenta a confiança na liberação de novas funcionalidades e reduz downtime, alinhando-se às recomendações da AWS para operações serverless seguras e escaláveis."
        ]
    },
    {
        id: 65,
        title: "Templates de Mapeamento no API Gateway",
        domain: "Desenvolvimento com serviços AWS",
        prompt: "Você é um desenvolvedor trabalhando com funções AWS Lambda que são invocadas via REST APIs usando o Amazon API Gateway. Atualmente, quando uma requisição GET é feita pelo consumidor, todo o conjunto de dados retornado pela função Lambda fica visível. Seu líder de equipe pediu para você formatar a resposta dos dados. Qual recurso do API Gateway pode ser utilizado para resolver esse problema?",
        options: [
            { letter: "A", text: "Utilizar Templates de Mapeamento do API Gateway", correct: true },
            { letter: "B", text: "Implantar um script shell interceptador", correct: false },
            { letter: "C", text: "Usar uma variável de estágio do API Gateway", correct: false },
            { letter: "D", text: "Utilizar um interceptor customizado em Lambda", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. No API Gateway, o payload da requisição de um método pode ser transformado para um formato diferente do payload da requisição de integração, conforme requerido pelo backend, e vice-versa para a resposta. Os Templates de Mapeamento permitem mapear o payload da requisição do método para o payload da integração e também mapear a resposta da integração para a resposta do método, possibilitando formatar os dados retornados pela função Lambda conforme desejado." },
            { correct: false, text: "Incorreta. Esta opção é um distrator. Não há suporte para executar scripts shell interceptadores no fluxo do API Gateway para modificar respostas de funções Lambda." },
            { correct: false, text: "Incorreta. Variáveis de estágio são pares nome-valor usados para configurar atributos associados a um estágio de implantação da API, funcionando como variáveis de ambiente. Embora possam ser usadas em templates de mapeamento, elas não são adequadas para formatar ou transformar o payload da resposta, que é o objetivo aqui." },
            { correct: false, text: "Incorreta. Esta opção é fictícia. O Lambda não possui um mecanismo nativo para interceptar e modificar respostas de outras funções Lambda no contexto do API Gateway." }
        ],
        glossary: [
            "API Gateway: serviço da AWS que cria, publica e gerencia APIs RESTful e WebSocket em escala.",
            "Templates de Mapeamento (Mapping Templates): permitem transformar o formato dos dados (payload) entre a API e o backend.",
            "Função Lambda (Lambda function): função serverless que processa eventos, como requisições HTTP.",
            "Variáveis de Estágio (Stage Variables): pares nome-valor para configurar atributos específicos de um estágio da API.",
            "Payload: dados enviados ou recebidos em uma requisição ou resposta.",
            "Integração Request/Response (Integration Request/Response): comunicação entre o API Gateway e o backend integrado.",
            "Método Request/Response (Method Request/Response): comunicação entre o cliente e o API Gateway.",
            "Distrator: alternativa criada para confundir, mas incorreta."
        ],
        generalExplanation: [
            "<strong>Templates de Mapeamento</strong> são a solução correta para transformar o payload retornado por uma função Lambda antes de enviar ao cliente.",
            "Permitem <strong>formatar, filtrar ou modificar</strong> respostas sem alterar o código da função Lambda, mantendo o backend desacoplado.",
            "Outras opções, como <strong>Variáveis de Estágio</strong>, não transformam payloads, e não há suporte para scripts shell ou interceptadores customizados no fluxo do API Gateway.",
            "Portanto, Templates de Mapeamento são a prática nativa e recomendada para manipulação de dados em APIs REST ou HTTP."
        ],
        realWorld: [
            "Em uma aplicação serverless, a função Lambda pode retornar muitos dados para o API Gateway. Usando <strong>Templates de Mapeamento</strong>, o desenvolvedor filtra campos sensíveis ou formata a resposta conforme o contrato da API, sem alterar o backend.",
            "Para múltiplos <strong>estágios ou versões da API</strong>, diferentes templates podem ser aplicados, permitindo flexibilidade no formato de resposta.",
            "Essa abordagem <strong>desacopla backend e apresentação</strong>, melhora a manutenção do código e otimiza a escalabilidade de aplicações na AWS."
        ]
    }
]