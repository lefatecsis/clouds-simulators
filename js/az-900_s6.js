const originalQuestions = [
    {
        id: 1,
        title: "Criar VM via Azure CLI no Windows 10",
        domain: "Compute",
        prompt: "Você tem uma assinatura do Azure chamada Subscription1. Você entra no portal do Azure e cria um grupo de recursos chamado RG1. A partir da documentação do Azure, você tem o seguinte comando que cria uma máquina virtual chamada VM1: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. Você precisa criar VM1 na Subscription1 usando o comando. Solução: A partir de um computador que executa o Windows 10, instale o Azure CLI. A partir de um prompt de comando, faça login no Azure e, em seguida, execute o comando. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A solução proposta é válida, pois o Azure CLI pode ser instalado e executado no Windows 10 para criar recursos no Azure." },
            { correct: true, text: "Correta. Essa solução atende ao objetivo. Ao instalar o Azure CLI em um computador que executa o Windows 10, você pode fazer login no Azure usando o comando az login. Em seguida, você pode executar o comando az vm create para criar a máquina virtual VM1. Os passos: instalar o Azure CLI, abrir um prompt de comando, executar az login, copiar e colar o comando az vm create e pressionar Enter para executar. Após a conclusão, a VM1 será criada na Subscription1 e no grupo de recursos RG1." }
        ],
        glossary: [
            "Azure CLI: interface de linha de comando multiplataforma para gerenciar recursos do Azure.",
            "az login: comando para autenticar no Azure a partir do Azure CLI.",
            "az vm create: comando para criar uma máquina virtual no Azure.",
            "Resource Group (RG): contêiner lógico que agrupa recursos relacionados do Azure.",
            "--generate-ssh-keys: parâmetro que gera automaticamente um par de chaves SSH para acesso à VM."
        ],
        generalExplanation: [
            "A resposta correta é SIM.",
            "Essa solução atende ao objetivo, pois o Azure CLI é compatível com Windows 10 e permite executar comandos de criação de recursos no Azure.",
            "Fluxo: instalar o Azure CLI, executar az login e, em seguida, o comando az vm create.",
            "Após a execução, a VM1 será criada na Subscription1 e no grupo de recursos RG1, com a imagem UbuntuLTS e uma chave SSH gerada."
        ],
        realWorld: [
            "Equipes de DevOps podem automatizar a criação de VMs usando Azure CLI em pipelines de CI/CD.",
            "Desenvolvedores podem usar o Azure CLI em estações Windows para provisionar ambientes de teste rapidamente.",
            "O uso de scripts com az login e az vm create permite padronizar a criação de infraestrutura.",
            "Essa prática é comum em cenários de infraestrutura como código (IaC) e automação de ambientes no Azure."
        ]
    },
    {
        id: 2,
        title: "Conformidade regional com Azure Trust Center",
        domain: "Governança e Conformidade",
        prompt: "Sua empresa planeja migrar todos os dados locais para o Azure. Você precisa identificar se o Azure está em conformidade com os requisitos regionais da empresa. O que você deve usar?",
        options: [
            { letter: "A", text: "o Knowledge Center", correct: false },
            { letter: "B", text: "o Trust Center", correct: true },
            { letter: "C", text: "Azure Marketplace", correct: false },
            { letter: "D", text: "o MyApps portal", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Knowledge Center não é a fonte oficial da Microsoft para informações de conformidade, segurança e privacidade do Azure." },
            { correct: true, text: "Correta. O Trust Center é a fonte oficial da Microsoft que abrange segurança, privacidade e conformidade do Azure, oferecendo whitepapers, certificações, relatórios de conformidade e detalhes sobre medidas de segurança física e lógica dos datacenters." },
            { correct: false, text: "Incorreta. O Azure Marketplace é uma loja de soluções e serviços de parceiros, não uma fonte de informações de conformidade regional." },
            { correct: false, text: "Incorreta. O MyApps portal é um portal de acesso a aplicativos corporativos, sem relação com requisitos de conformidade do Azure." }
        ],
        glossary: [
            "Trust Center: portal oficial da Microsoft com informações sobre segurança, privacidade e conformidade dos serviços de nuvem.",
            "Conformidade normativa: aderência a leis, regulamentos e padrões aplicáveis ao negócio.",
            "Certificações de conformidade: atestados emitidos por organismos que validam o cumprimento de normas.",
            "Whitepapers: documentos técnicos detalhados sobre práticas e controles de segurança."
        ],
        generalExplanation: [
            "A resposta correta é o Trust Center.",
            "Para identificar se o Azure está em conformidade com requisitos regionais, o Trust Center é a fonte oficial da Microsoft.",
            "Ele oferece visão abrangente dos controles e práticas de segurança, privacidade e conformidade em diferentes regiões.",
            "Inclui whitepapers, documentação técnica, relatórios de conformidade e detalhes sobre medidas de segurança física e lógica dos datacenters."
        ],
        realWorld: [
            "Equipes de compliance usam o Trust Center para avaliar se o Azure atende a regulamentações como LGPD ou GDPR.",
            "Auditores consultam relatórios de conformidade disponíveis no Trust Center para validar controles.",
            "Empresas que migram dados sensíveis verificam certificações e práticas regionais antes da migração.",
            "O Trust Center apoia decisões de arquitetura e governança em ambientes regulados."
        ]
    },
    {
        id: 3,
        title: "Plano de suporte com acesso por telefone/e-mail (Professional Direct)",
        domain: "Suporte e Custos",
        prompt: "Sua empresa planeja comprar uma assinatura do Azure. A política de suporte da empresa afirma que o ambiente Azure deve fornecer uma opção para acessar o suporte por telefone ou e-mail. Você precisa recomendar qual plano de suporte atende ao requisito da política de suporte. Solução: Recomende um plano de suporte direto profissional. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O plano Professional Direct oferece suporte por telefone e e-mail, portanto atende ao requisito." },
            { correct: true, text: "Correta. O plano de suporte Professional Direct fornece acesso a suporte técnico 24/7 por telefone e e-mail, atendendo ao requisito da política de suporte da empresa." }
        ],
        glossary: [
            "Professional Direct: plano de suporte do Azure com acesso a suporte técnico por telefone e e-mail, além de orientação arquitetural.",
            "Plano de suporte: nível de serviço de suporte contratado para uma assinatura do Azure.",
            "SLA de suporte: compromissos de tempo de resposta conforme o plano contratado."
        ],
        generalExplanation: [
            "A resposta correta é Sim.",
            "O plano Professional Direct atende ao requisito de acesso ao suporte por telefone ou e-mail.",
            "Ele fornece suporte técnico 24/7 por telefone e e-mail, além de outros benefícios.",
            "É importante revisar os detalhes e restrições de cada plano para garantir que atenda às necessidades específicas da empresa."
        ],
        realWorld: [
            "Empresas com cargas críticas contratam Professional Direct para obter resposta rápida e orientação arquitetural.",
            "Times de operações usam o suporte por telefone/e-mail para escalar incidentes críticos.",
            "A escolha do plano impacta o SLA de resposta e a disponibilidade de canais de suporte.",
            "Recomenda-se alinhar o plano de suporte à criticidade dos workloads."
        ]
    },
    {
        id: 4,
        title: "Minimizar impacto na migração com Azure AD Connect",
        domain: "Identidade e Acesso",
        prompt: "Sua rede contém uma floresta do Active Directory. A floresta contém 5.000 contas de usuários. Sua empresa planeja migrar todos os recursos da rede para o Azure e desativar o datacenter local. Você precisa recomendar uma solução para minimizar o impacto nos usuários após a migração planejada. O que você deve recomendar?",
        options: [
            { letter: "A", text: "Sincronizar todas as contas de usuário do Active Directory para o Azure Active Directory (Azure AD)", correct: true },
            { letter: "B", text: "Implementar a autenticação multifatorial do Azure (MFA)", correct: false },
            { letter: "C", text: "Criar uma conta de usuário convidado no Azure Active Directory (Azure AD) para cada usuário", correct: false },
            { letter: "D", text: "Instruir todos os usuários a alterar sua senha", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Sincronizar as contas do AD local para o Azure AD preserva as identidades e credenciais dos usuários, minimizando o impacto na experiência de login após a migração." },
            { correct: false, text: "Incorreta. MFA é uma camada adicional de segurança, mas não resolve a continuidade das identidades dos usuários na migração." },
            { correct: false, text: "Incorreta. Criar contas de convidado para cada usuário não preserva as identidades existentes e aumenta a complexidade administrativa." },
            { correct: false, text: "Incorreta. Instruir a alteração de senha não resolve a continuidade das identidades e pode causar impacto negativo aos usuários." }
        ],
        glossary: [
            "Active Directory (AD): serviço de diretório da Microsoft para autenticação e gerenciamento de identidades em redes locais.",
            "Azure AD (Azure Active Directory): serviço de identidade em nuvem da Microsoft para autenticação e autorização.",
            "Azure AD Connect: ferramenta para sincronizar identidades do AD local com o Azure AD.",
            "SSO (Single Sign-On): autenticação única para múltiplos recursos."
        ],
        generalExplanation: [
            "A resposta correta é sincronizar todas as contas de usuário do AD para o Azure AD.",
            "Isso preserva as identidades e credenciais, minimizando o impacto nos usuários após a migração.",
            "Ferramentas como Azure AD Connect permitem sincronizar contas e habilitar SSO.",
            "MFA, contas de convidado ou alteração de senha não resolvem a continuidade das identidades."
        ],
        realWorld: [
            "Empresas usam Azure AD Connect para migrar identidades locais para a nuvem com mínima interrupção.",
            "A sincronização permite que usuários continuem usando as mesmas credenciais após a migração.",
            "SSO facilita o acesso a aplicativos corporativos após a desativação do datacenter local.",
            "A abordagem reduz chamados de suporte e melhora a experiência do usuário."
        ]
    },
    {
        id: 5,
        title: "Modificar NSG para permitir TCP 8080",
        domain: "Redes",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Depois de criar uma máquina virtual, você precisa modificar o grupo de segurança de rede (NSG) para permitir conexões à porta TCP 8080 na máquina virtual. Instruções: Reveja o texto destacado. Se ele fizer a declaração correta, selecione 'Nenhuma alteração é necessária'. Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "tabela de rota", correct: false },
            { letter: "B", text: "gateway de rede virtual", correct: false },
            { letter: "C", text: "rede virtual", correct: false },
            { letter: "D", text: "Nenhuma mudança é necessária", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A tabela de rota não é o recurso usado para permitir conexões a portas em uma VM." },
            { correct: false, text: "Incorreta. O gateway de rede virtual é usado para conectividade híbrida, não para liberar portas em uma VM." },
            { correct: false, text: "Incorreta. A rede virtual não controla diretamente a liberação de portas; o NSG é o recurso adequado." },
            { correct: true, text: "Correta. O texto destaca corretamente que, após criar uma máquina virtual, a próxima etapa é modificar o NSG para permitir conexões à porta TCP 8080. Portanto, nenhuma alteração é necessária na afirmação." }
        ],
        glossary: [
            "NSG (Network Security Group): firewall de rede do Azure que controla tráfego de entrada e saída.",
            "Porta TCP 8080: porta de rede comumente usada por aplicações web e proxies.",
            "Regra de segurança: regra do NSG que permite ou nega tráfego com base em porta, protocolo e origem/destino.",
            "Tabela de rota: recurso que define rotas de tráfego em uma rede virtual."
        ],
        generalExplanation: [
            "A alternativa 'Nenhuma mudança é necessária' é a correta.",
            "O texto destaca corretamente que, após criar uma VM, deve-se modificar o NSG para permitir conexões à porta TCP 8080.",
            "O NSG é o recurso adequado para controlar tráfego de entrada e saída em VMs do Azure.",
            "Portanto, a afirmação apresentada está correta."
        ],
        realWorld: [
            "Administradores criam regras de NSG para liberar portas específicas de aplicações.",
            "A liberação da porta 8080 é comum em ambientes de teste e aplicações Java/Tomcat.",
            "Revisar regras de NSG é parte das boas práticas de segurança em redes Azure.",
            "O uso de NSG permite segmentar e proteger o tráfego de VMs."
        ]
    },
    {
        id: 6,
        title: "Escalabilidade dinâmica na nuvem",
        domain: "Conceitos de Nuvem",
        prompt: "Associe o cenário com a resposta correta. Um serviço de nuvem que executa rapidamente quando a demanda aumenta.",
        options: [
            { letter: "A", text: "Escalabilidade dinâmica", correct: true },
            { letter: "B", text: "Baixa latência", correct: false },
            { letter: "C", text: "Tolerância ao erro", correct: false },
            { letter: "D", text: "Recuperação de desastre", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A escalabilidade dinâmica é a capacidade de aumentar ou diminuir automaticamente os recursos de um serviço de nuvem em resposta à demanda variável." },
            { correct: false, text: "Incorreta. Baixa latência refere-se ao tempo de resposta rápido, não ao aumento automático de recursos." },
            { correct: false, text: "Incorreta. Tolerância ao erro é a capacidade de continuar operando após falhas, não de escalar com a demanda." },
            { correct: false, text: "Incorreta. Recuperação de desastre trata da restauração após falhas graves, não do ajuste dinâmico de recursos." }
        ],
        glossary: [
            "Escalabilidade dinâmica: ajuste automático de recursos conforme a demanda.",
            "Baixa latência: tempo de resposta curto entre requisição e resposta.",
            "Tolerância ao erro: capacidade de continuar funcionando após falhas.",
            "Recuperação de desastre: restauração de serviços após eventos graves."
        ],
        generalExplanation: [
            "A resposta correta é Escalabilidade dinâmica.",
            "Um serviço que executa rapidamente quando a demanda aumenta é um exemplo de escalabilidade dinâmica.",
            "Ela permite adicionar recursos automaticamente em picos e reduzi-los quando a demanda diminui, otimizando custos.",
            "É uma característica importante dos serviços em nuvem, garantindo desempenho e eficiência."
        ],
        realWorld: [
            "Aplicações de e-commerce usam escalabilidade dinâmica para lidar com picos de tráfego em promoções.",
            "Serviços de streaming escalam recursos durante horários de pico.",
            "APIs serverless escalam automaticamente conforme a demanda.",
            "A escalabilidade dinâmica ajuda a manter desempenho e controlar custos."
        ]
    },
    {
        id: 7,
        title: "PaaS exclusivo no Azure",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa planeja migrar todos os seus dados e recursos para o Azure. O plano de migração da empresa afirma que apenas as soluções de Plataforma como Serviço (PaaS) devem ser usadas no Azure. Você precisa implantar um ambiente Azure que atenda ao plano de migração da empresa. Solução: Você cria máquinas virtuais Azure, bancos de dados Azure SQL e contas de armazenamento Azure. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Máquinas virtuais Azure são IaaS, não PaaS. Portanto, a solução não atende ao requisito de usar apenas soluções PaaS." },
            { correct: false, text: "Incorreta. A solução inclui máquinas virtuais (IaaS), o que viola o requisito de usar apenas PaaS." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma gerenciada para desenvolvimento e implantação.",
            "IaaS (Infrastructure as a Service): modelo de nuvem que fornece infraestrutura virtualizada, como VMs.",
            "Azure App Service: serviço PaaS para hospedar aplicações web.",
            "Azure SQL Database: serviço PaaS de banco de dados relacional."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "A solução proposta inclui máquinas virtuais Azure, que são IaaS, não PaaS.",
            "Para atender ao plano de usar apenas PaaS, deve-se considerar serviços como Azure App Service, Azure Functions e Azure SQL Database (PaaS).",
            "Portanto, é necessário revisar a solução para incluir apenas serviços PaaS."
        ],
        realWorld: [
            "Empresas que adotam estratégia PaaS buscam reduzir esforço de gerenciamento de infraestrutura.",
            "Azure App Service e Azure Functions são exemplos de PaaS para aplicações.",
            "Azure SQL Database oferece banco de dados gerenciado como PaaS.",
            "A escolha entre IaaS e PaaS impacta custos, governança e operações."
        ]
    },
    {
        id: 8,
        title: "Modelo de despesa operacional no Azure",
        domain: "Suporte e Custos",
        prompt: "Você tem 1.000 máquinas virtuais hospedadas nos hosts Hyper-V em um datacenter. Você planeja migrar todas as máquinas virtuais para uma assinatura pré-paga do Azure. Você precisa identificar qual modelo de despesa usar para a solução planejada do Azure. Qual modelo de despesa você deve identificar?",
        options: [
            { letter: "A", text: "operacional", correct: true },
            { letter: "B", text: "operacional", correct: false },
            { letter: "C", text: "capital", correct: false },
            { letter: "D", text: "escalonável", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O modelo operacional (OpEx) envolve despesas recorrentes e contínuas, pagando pelo uso dos recursos do Azure conforme a demanda, sem grande investimento inicial." },
            { correct: false, text: "Incorreta. Esta opção repete o termo 'operacional', mas está marcada como incorreta na estrutura de dados original." },
            { correct: false, text: "Incorreta. O modelo de capital (CapEx) envolve investimento inicial significativo em infraestrutura, o que não é o caso de uma assinatura pré-paga do Azure." },
            { correct: false, text: "Incorreta. 'Escalonável' não é um modelo de despesa, mas uma característica de escalabilidade." }
        ],
        glossary: [
            "OpEx (Operational Expenditure): despesas operacionais recorrentes, pagas conforme o uso.",
            "CapEx (Capital Expenditure): investimento inicial em ativos de infraestrutura.",
            "Assinatura pré-paga: modelo de cobrança do Azure baseado no uso dos recursos.",
            "Modelo de despesa: forma como os custos são classificados e pagos."
        ],
        generalExplanation: [
            "A resposta correta é Operacional.",
            "Para a migração de 1.000 VMs para o Azure, o modelo operacional é recomendado.",
            "Ele implica despesas recorrentes e contínuas, pagando pelo uso dos recursos com base em taxa periódica.",
            "Evita grandes investimentos iniciais e permite ajustar recursos conforme necessário."
        ],
        realWorld: [
            "Startups preferem OpEx para evitar grandes investimentos iniciais.",
            "Empresas acompanham gastos do Azure com ferramentas de custo para otimizar o uso.",
            "O modelo pré-pago permite ajustar recursos conforme a demanda.",
            "A escolha do modelo impacta o fluxo de caixa e a governança financeira."
        ]
    },
    {
        id: 9,
        title: "Elasticidade para padrões de uso variáveis",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa hospeda um aplicativo contábil chamado App1 que é usado por todos os clientes da empresa. App1 tem baixo uso durante as três primeiras semanas de cada mês e uso muito alto durante a última semana de cada mês. Qual benefício do Azure Cloud Services suporta o gerenciamento de custos para esse tipo de padrão de uso?",
        options: [
            { letter: "A", text: "elasticidade", correct: true },
            { letter: "B", text: "balanceamento de carga", correct: false },
            { letter: "C", text: "alta latência", correct: false },
            { letter: "D", text: "alta disponibilidade", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A elasticidade permite dimensionar automaticamente os recursos de computação conforme a demanda, reduzindo custos em períodos de baixo uso e aumentando recursos em picos." },
            { correct: false, text: "Incorreta. Balanceamento de carga distribui tráfego, mas não ajusta recursos conforme a demanda." },
            { correct: false, text: "Incorreta. Alta latência é um problema de desempenho, não um benefício de custo." },
            { correct: false, text: "Incorreta. Alta disponibilidade garante continuidade do serviço, mas não otimiza custos com base no padrão de uso." }
        ],
        glossary: [
            "Elasticidade: capacidade de ajustar recursos automaticamente conforme a demanda.",
            "Balanceamento de carga: distribuição de tráfego entre múltiplos recursos.",
            "Alta disponibilidade: garantia de que o serviço permaneça acessível.",
            "Latência: tempo de resposta de uma requisição."
        ],
        generalExplanation: [
            "A resposta correta é elasticidade.",
            "A elasticidade permite dimensionar recursos automaticamente conforme a demanda.",
            "Durante as três primeiras semanas, os recursos podem ser reduzidos para economizar custos.",
            "Na última semana, os recursos podem ser aumentados para lidar com a carga intensa."
        ],
        realWorld: [
            "Aplicações com picos sazonais se beneficiam da elasticidade para controlar custos.",
            "Sistemas de folha de pagamento e contabilidade têm picos no fechamento do mês.",
            "Azure Auto Scaling permite ajustar recursos automaticamente.",
            "A elasticidade ajuda a manter desempenho e otimizar custos."
        ]
    },
    {
        id: 10,
        title: "App Service + Storage não é apenas PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa planeja migrar todos os seus dados e recursos para o Azure. O plano de migração da empresa afirma que apenas as soluções de Plataforma como Serviço (PaaS) devem ser usadas no Azure. Você precisa implantar um ambiente Azure que atenda ao plano de migração da empresa. Solução: Você cria um Serviço de Aplicativos Azure e contas de armazenamento Azure. Isso cumpre o objetivo?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Contas de armazenamento Azure são consideradas IaaS em alguns contextos, pois o cliente gerencia aspectos de configuração e acesso. Portanto, a solução não atende ao requisito de usar apenas PaaS." },
            { correct: false, text: "Incorreta. A solução inclui contas de armazenamento, que podem ser consideradas IaaS, violando o requisito de apenas PaaS." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma gerenciada para desenvolvimento e implantação.",
            "IaaS (Infrastructure as a Service): modelo de nuvem que fornece infraestrutura virtualizada.",
            "Azure App Service: serviço PaaS para hospedar aplicações web.",
            "Azure Storage: serviço de armazenamento do Azure, com diferentes modelos de responsabilidade."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "O Azure App Service é PaaS, mas as contas de armazenamento Azure são consideradas IaaS em termos de responsabilidade de configuração.",
            "Portanto, a solução não atende ao requisito de usar apenas PaaS.",
            "É necessário revisar a solução para incluir apenas serviços PaaS."
        ],
        realWorld: [
            "Empresas que adotam PaaS buscam reduzir esforço de gerenciamento de infraestrutura.",
            "Azure App Service é uma escolha comum para aplicações web em PaaS.",
            "O uso de contas de armazenamento exige configuração e gerenciamento de acesso.",
            "A escolha entre IaaS e PaaS impacta custos e governança."
        ]
    },
    {
        id: 11,
        title: "Nuvem híbrida estende recursos internos",
        domain: "Conceitos de Nuvem",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Uma empresa pode estender os recursos de computação de sua rede interna usando uma nuvem híbrida?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A nuvem híbrida permite estender recursos internos com recursos de nuvem pública." },
            { correct: true, text: "Correta. Uma nuvem híbrida combina recursos de nuvem pública e privada, permitindo que a empresa estenda sua infraestrutura interna com recursos em nuvem pública conforme necessário." }
        ],
        glossary: [
            "Nuvem híbrida: combinação de nuvem pública e privada para atender necessidades de computação.",
            "Nuvem pública: serviços de nuvem oferecidos por provedores externos.",
            "Nuvem privada: infraestrutura de nuvem dedicada a uma única organização.",
            "Extensão de recursos: adição de recursos externos à infraestrutura interna."
        ],
        generalExplanation: [
            "A resposta correta é SIM.",
            "Uma empresa pode estender os recursos de computação de sua rede interna usando uma nuvem híbrida.",
            "A nuvem híbrida combina recursos de nuvem pública e privada, permitindo escalabilidade e flexibilidade.",
            "Isso permite adicionar recursos em nuvem pública conforme necessário, complementando a infraestrutura interna."
        ],
        realWorld: [
            "Empresas usam nuvem híbrida para lidar com picos de demanda sem investir em infraestrutura local.",
            "A nuvem híbrida permite integrar serviços de nuvem pública com sistemas locais.",
            "É comum em cenários de migração gradual para a nuvem.",
            "A abordagem ajuda a otimizar custos e melhorar a resiliência."
        ]
    },
    {
        id: 12,
        title: "PowerShell Core 6.0 no macOS",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Um administrador do Azure planeja executar um script PowerShell que cria recursos do Azure. Você precisa recomendar qual configuração do computador usar para executar o script. Solução: Execute o script a partir de um computador que executa macOS e tem PowerShell Core 6.0 instalado. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O PowerShell Core 6.0 é multiplataforma e compatível com macOS, portanto atende ao objetivo." },
            { correct: true, text: "Correta. O PowerShell Core 6.0 é uma versão multiplataforma do PowerShell compatível com macOS, Linux e Windows. Executar o script no macOS usando PowerShell Core 6.0 atende ao objetivo de criar recursos do Azure." }
        ],
        glossary: [
            "PowerShell Core: versão multiplataforma do PowerShell, compatível com Windows, Linux e macOS.",
            "Script PowerShell: arquivo com comandos para automação de tarefas.",
            "Azure PowerShell: módulo para gerenciar recursos do Azure via PowerShell.",
            "macOS: sistema operacional da Apple."
        ],
        generalExplanation: [
            "A resposta correta é SIM.",
            "O PowerShell Core 6.0 é multiplataforma e compatível com macOS.",
            "Executar o script no macOS usando PowerShell Core 6.0 atende ao objetivo de criar recursos do Azure.",
            "Essa configuração permite automação de recursos do Azure em estações macOS."
        ],
        realWorld: [
            "Desenvolvedores em macOS podem usar PowerShell Core para scripts de automação do Azure.",
            "Times mistos (Windows, Linux, macOS) podem padronizar scripts com PowerShell Core.",
            "A automação de recursos do Azure é comum em pipelines de CI/CD.",
            "O PowerShell Core facilita a gestão de recursos em ambientes multiplataforma."
        ]
    },
    {
        id: 13,
        title: "Assinatura por departamento para pagamentos distintos",
        domain: "Governança e Conformidade",
        prompt: "Sua empresa tem 10 departamentos. A empresa planeja implementar um ambiente Azure. Você precisa garantir que cada departamento possa usar uma opção de pagamento diferente para os serviços do Azure que consome. O que você deve criar para cada departamento?",
        options: [
            { letter: "A", text: "uma reserva", correct: false },
            { letter: "B", text: "uma instância de contêiner", correct: false },
            { letter: "C", text: "um grupo de recursos", correct: false },
            { letter: "D", text: "uma assinatura", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Reservas são compromissos de uso para descontos, não uma unidade de cobrança por departamento." },
            { correct: false, text: "Incorreta. Instâncias de contêiner são recursos de computação, não uma unidade de cobrança." },
            { correct: false, text: "Incorreta. Grupos de recursos organizam recursos, mas não permitem opções de pagamento diferentes." },
            { correct: true, text: "Correta. Uma assinatura no Azure é uma unidade de cobrança e gerenciamento que pode ser vinculada a uma forma de pagamento específica, permitindo opções de pagamento diferentes para cada departamento." }
        ],
        glossary: [
            "Assinatura do Azure: unidade de cobrança e gerenciamento que agrupa recursos e define forma de pagamento.",
            "Grupo de recursos: contêiner lógico para organizar recursos do Azure.",
            "Reserva: compromisso de uso para obter descontos em serviços do Azure.",
            "Instância de contêiner: recurso de computação para executar contêineres."
        ],
        generalExplanation: [
            "A resposta correta é uma assinatura.",
            "Para permitir opções de pagamento diferentes por departamento, é necessário criar uma assinatura separada para cada departamento.",
            "Cada assinatura pode ter configurações de cobrança e orçamento próprias.",
            "Isso facilita o monitoramento e o gerenciamento dos gastos de cada departamento."
        ],
        realWorld: [
            "Empresas com múltiplos departamentos usam assinaturas separadas para controle financeiro.",
            "Assinaturas permitem aplicar políticas e orçamentos específicos por departamento.",
            "O gerenciamento de custos é facilitado com assinaturas dedicadas.",
            "A segregação de assinaturas ajuda na governança e conformidade."
        ]
    },
    {
        id: 14,
        title: "Modelo operacional para migração de VMs",
        domain: "Suporte e Custos",
        prompt: "Você tem 1.000 máquinas virtuais hospedadas nos hosts Hyper-V em um datacenter. Você planeja migrar todas as máquinas virtuais para uma assinatura pré-paga do Azure. Você precisa identificar qual modelo de despesa usar para a solução planejada do Azure. Qual modelo de despesa você deve identificar?",
        options: [
            { letter: "A", text: "capital", correct: false },
            { letter: "B", text: "operacional", correct: true },
            { letter: "C", text: "escalonável", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O modelo de capital envolve investimento inicial significativo, o que não se aplica a uma assinatura pré-paga do Azure." },
            { correct: true, text: "Correta. O modelo operacional (OpEx) envolve despesas recorrentes e contínuas, pagando pelo uso dos recursos do Azure conforme a demanda, sem grande investimento inicial." },
            { correct: false, text: "Incorreta. 'Escalonável' é uma característica, não um modelo de despesa." }
        ],
        glossary: [
            "OpEx (Operational Expenditure): despesas operacionais recorrentes, pagas conforme o uso.",
            "CapEx (Capital Expenditure): investimento inicial em ativos de infraestrutura.",
            "Assinatura pré-paga: modelo de cobrança do Azure baseado no uso dos recursos.",
            "Modelo de despesa: forma como os custos são classificados e pagos."
        ],
        generalExplanation: [
            "A resposta correta é Operacional.",
            "Para a migração de 1.000 VMs para o Azure, o modelo operacional é recomendado.",
            "Ele implica despesas recorrentes e contínuas, pagando pelo uso dos recursos.",
            "Evita grandes investimentos iniciais e permite ajustar recursos conforme necessário."
        ],
        realWorld: [
            "Empresas que migram para a nuvem buscam transformar CapEx em OpEx.",
            "O modelo operacional permite maior flexibilidade financeira.",
            "Ferramentas de custo do Azure ajudam a monitorar o OpEx.",
            "A escolha do modelo impacta o fluxo de caixa e a governança."
        ]
    },
    {
        id: 15,
        title: "Visualizar notificações de falha de serviço da VM",
        domain: "Monitoramento",
        prompt: "Você tem uma máquina virtual chamada VM1 que executa o Windows Server 2016. VM1 está na região leste do Azure dos EUA. Qual serviço do Azure deve usar no portal Azure para visualizar notificações de falha de serviço que podem afetar a disponibilidade do VM1?",
        options: [
            { letter: "A", text: "Azure Monitor", correct: false },
            { letter: "B", text: "Máquinas virtuais Azure", correct: true },
            { letter: "C", text: "Azure Advisor", correct: false },
            { letter: "D", text: "Azure Service Fabric", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure Monitor coleta métricas e logs, mas as notificações de falha de serviço são visualizadas na página da VM no portal." },
            { correct: true, text: "Correta. No portal Azure, na página da máquina virtual, é possível visualizar notificações de falha de serviço que podem afetar a disponibilidade da VM." },
            { correct: false, text: "Incorreta. O Azure Advisor fornece recomendações de boas práticas, não notificações de falha de serviço." },
            { correct: false, text: "Incorreta. O Azure Service Fabric é uma plataforma para microsserviços, não para notificações de falha de serviço de VMs." }
        ],
        glossary: [
            "Azure Monitor: serviço de monitoramento que coleta métricas e logs de recursos do Azure.",
            "Azure Advisor: serviço que fornece recomendações personalizadas de boas práticas.",
            "Service Health: seção do portal que exibe notificações de falhas e manutenções que afetam os serviços.",
            "VM (Virtual Machine): máquina virtual no Azure."
        ],
        generalExplanation: [
            "A resposta correta é Máquinas virtuais Azure.",
            "No portal Azure, a página da VM exibe notificações de falha de serviço que podem afetar a disponibilidade.",
            "Essas notificações ajudam a identificar problemas de infraestrutura que impactam a VM.",
            "O Azure Monitor e o Advisor têm finalidades diferentes."
        ],
        realWorld: [
            "Operadores monitoram a página da VM para identificar falhas de serviço.",
            "Notificações de Service Health ajudam a planejar manutenções e mitigar impactos.",
            "A visualização centralizada de notificações facilita a resposta a incidentes.",
            "O monitoramento proativo reduz indisponibilidades."
        ]
    },
    {
        id: 16,
        title: "Exemplo de IaaS: máquina virtual Azure",
        domain: "Conceitos de Nuvem",
        prompt: "Você planeja prover recursos de Infraestrutura como serviço (IaaS) no Azure. Qual recurso é um exemplo de IaaS?",
        options: [
            { letter: "A", text: "uma máquina virtual Azure", correct: true },
            { letter: "B", text: "um aplicativo de lógica Azure", correct: false },
            { letter: "C", text: "um aplicativo web do Azure", correct: false },
            { letter: "D", text: "um banco de dados Azure SQL", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Máquinas virtuais Azure são um exemplo clássico de IaaS, pois fornecem infraestrutura virtualizada que o cliente gerencia." },
            { correct: false, text: "Incorreta. Aplicativos de lógica Azure são PaaS." },
            { correct: false, text: "Incorreta. Aplicativos web do Azure são PaaS." },
            { correct: false, text: "Incorreta. O banco de dados Azure SQL é um serviço PaaS gerenciado." }
        ],
        glossary: [
            "IaaS (Infrastructure as a Service): modelo de nuvem que fornece infraestrutura virtualizada.",
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma gerenciada.",
            "Máquina virtual Azure: recurso de computação IaaS no Azure.",
            "Azure SQL Database: serviço PaaS de banco de dados."
        ],
        generalExplanation: [
            "A resposta correta é uma máquina virtual Azure.",
            "Máquinas virtuais são um exemplo clássico de IaaS.",
            "O cliente gerencia o sistema operacional e os aplicativos na VM.",
            "Aplicativos web, lógica e banco de dados SQL são exemplos de PaaS."
        ],
        realWorld: [
            "Empresas usam VMs para migrar cargas legadas para a nuvem.",
            "VMs oferecem controle total sobre o sistema operacional.",
            "IaaS é indicado quando é necessário controle granular da infraestrutura.",
            "A escolha entre IaaS e PaaS depende das necessidades do negócio."
        ]
    },
    {
        id: 17,
        title: "Modificar perfil DDoS não expõe VM via HTTP",
        domain: "Redes",
        prompt: "Seu ambiente Azure contém várias máquinas virtuais do Azure. Você precisa garantir que uma máquina virtual chamada VM1 esteja acessível a partir da Internet via HTTP. Solução: Você modifica um plano de proteção DDoS. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O plano de proteção DDoS protege contra ataques, mas não configura acesso HTTP à VM." },
            { correct: true, text: "Correta. Modificar um plano de proteção DDoS não torna a VM acessível via HTTP. Para isso, é necessário configurar regras de NSG, IP público e, se necessário, um balanceador de carga." }
        ],
        glossary: [
            "DDoS Protection: serviço de proteção contra ataques de negação de serviço distribuído.",
            "NSG (Network Security Group): firewall de rede que controla tráfego de entrada e saída.",
            "IP público: endereço IP acessível pela internet.",
            "HTTP: protocolo de transferência de hipertexto."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "Modificar um plano de proteção DDoS não torna a VM acessível via HTTP.",
            "É necessário configurar NSG, IP público e regras de firewall.",
            "O DDoS Protection apenas mitiga ataques, não configura acesso."
        ],
        realWorld: [
            "Para expor uma VM via HTTP, é necessário configurar NSG e IP público.",
            "O DDoS Protection é uma camada adicional de segurança.",
            "Balanceadores de carga podem ser usados para distribuir tráfego HTTP.",
            "A configuração correta de rede é essencial para disponibilidade."
        ]
    },
    {
        id: 18,
        title: "Características da nuvem pública",
        domain: "Conceitos de Nuvem",
        prompt: "Quais são as duas características da nuvem pública? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.",
        options: [
            { letter: "A", text: "gestão de autoatendimento", correct: true },
            { letter: "B", text: "hardware dedicado", correct: false },
            { letter: "C", text: "conexões inseguras", correct: false },
            { letter: "D", text: "preços medidos", correct: true },
            { letter: "E", text: "armazenamento limitado", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A gestão de autoatendimento permite que os clientes provisionem e gerenciem recursos sem intervenção do provedor." },
            { correct: false, text: "Incorreta. Hardware dedicado não é uma característica da nuvem pública; ela compartilha recursos." },
            { correct: false, text: "Incorreta. Conexões inseguras não são uma característica desejável da nuvem pública." },
            { correct: true, text: "Correta. Preços medidos significam pagar apenas pelo uso dos recursos, com base em métricas de consumo." },
            { correct: false, text: "Incorreta. Armazenamento limitado não é uma característica da nuvem pública, que oferece escalabilidade." }
        ],
        glossary: [
            "Nuvem pública: serviços de nuvem oferecidos por provedores externos e compartilhados entre clientes.",
            "Autoatendimento: capacidade do cliente de provisionar recursos sem intervenção do provedor.",
            "Preços medidos: cobrança baseada no uso real dos recursos.",
            "Hardware dedicado: servidor físico exclusivo para um cliente."
        ],
        generalExplanation: [
            "As duas características da nuvem pública são preços medidos e gestão de autoatendimento.",
            "Preços medidos: pagamento pelo uso real dos recursos.",
            "Gestão de autoatendimento: controle e autonomia sobre os recursos.",
            "Essas características permitem flexibilidade e escalabilidade."
        ],
        realWorld: [
            "Empresas usam a nuvem pública para escalar recursos conforme a demanda.",
            "O modelo de preços medidos ajuda a controlar custos.",
            "O autoatendimento agiliza o provisionamento de recursos.",
            "Essas características são fundamentais para a agilidade dos negócios."
        ]
    },
    {
        id: 19,
        title: "Azure Policy para restringir regiões",
        domain: "Governança e Conformidade",
        prompt: "Sua empresa tem uma assinatura do Azure que contém recursos em várias regiões. Uma política da empresa estabelece que os administradores só devem ser autorizados a criar recursos adicionais do Azure em uma região no país onde seu escritório está localizado. Você precisa criar o recurso Azure que deve ser usado para atender ao requisito de política. O que você deve criar?",
        options: [
            { letter: "A", text: "uma reserva", correct: false },
            { letter: "B", text: "um grupo de gestão", correct: false },
            { letter: "C", text: "uma Política Azure", correct: true },
            { letter: "D", text: "um bloqueio somente leitura", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Reservas são compromissos de uso para descontos, não restringem regiões." },
            { correct: false, text: "Incorreta. Grupos de gestão organizam assinaturas, mas não restringem regiões diretamente." },
            { correct: true, text: "Correta. O Azure Policy permite definir e aplicar regras que restringem a criação de recursos a regiões específicas." },
            { correct: false, text: "Incorreta. Bloqueios somente leitura impedem alterações, mas não restringem regiões de criação." }
        ],
        glossary: [
            "Azure Policy: serviço que permite definir e aplicar regras de governança aos recursos do Azure.",
            "Grupo de gestão: contêiner que organiza assinaturas e aplica políticas.",
            "Reserva: compromisso de uso para descontos.",
            "Bloqueio somente leitura: impede alterações em recursos."
        ],
        generalExplanation: [
            "A resposta correta é uma Política Azure.",
            "O Azure Policy permite restringir a criação de recursos a regiões específicas.",
            "Isso atende ao requisito de política da empresa.",
            "Outros recursos não oferecem esse controle geográfico."
        ],
        realWorld: [
            "Empresas usam Azure Policy para garantir conformidade regional.",
            "Políticas podem restringir regiões permitidas para recursos.",
            "Isso ajuda a atender requisitos regulatórios e de soberania de dados.",
            "O Azure Policy é essencial para governança em ambientes multi-região."
        ]
    },
    {
        id: 20,
        title: "Tolerância a falhas para disponibilidade",
        domain: "Conceitos de Nuvem",
        prompt: "Você tem uma rede local que contém vários servidores. Você planeja migrar todos os servidores para o Azure. Você precisa recomendar uma solução para garantir que alguns dos servidores estejam disponíveis se um único datacenter do Azure ficar offline por um período prolongado. O que você deve incluir na recomendação?",
        options: [
            { letter: "A", text: "escalabilidade", correct: false },
            { letter: "B", text: "elasticidade", correct: false },
            { letter: "C", text: "baixa latência", correct: false },
            { letter: "D", text: "tolerância a falhas", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Escalabilidade é a capacidade de ajustar recursos, não de manter disponibilidade após falhas." },
            { correct: false, text: "Incorreta. Elasticidade é o ajuste automático de recursos, não a resiliência a falhas." },
            { correct: false, text: "Incorreta. Baixa latência é tempo de resposta, não disponibilidade após falhas." },
            { correct: true, text: "Correta. A tolerância a falhas, alcançada com zonas de disponibilidade ou regiões emparelhadas, garante que os serviços continuem disponíveis mesmo em caso de falha de um datacenter." }
        ],
        glossary: [
            "Tolerância a falhas: capacidade de continuar operando após falhas.",
            "Zonas de Disponibilidade: locais fisicamente separados dentro de uma região do Azure.",
            "Regiões emparelhadas: pares de regiões geograficamente distantes para resiliência.",
            "Alta disponibilidade: garantia de que o serviço permaneça acessível."
        ],
        generalExplanation: [
            "A resposta correta é tolerância a falhas.",
            "A tolerância a falhas garante que os serviços continuem disponíveis mesmo em caso de falha de um datacenter.",
            "Isso é alcançado com zonas de disponibilidade ou regiões emparelhadas.",
            "A abordagem contribui para a resiliência e disponibilidade do sistema."
        ],
        realWorld: [
            "Empresas usam zonas de disponibilidade para garantir alta disponibilidade.",
            "Regiões emparelhadas ajudam na recuperação de desastres.",
            "A tolerância a falhas é essencial para cargas críticas.",
            "O design resiliente reduz impactos de falhas de infraestrutura."
        ]
    },
    {
        id: 21,
        title: "Azure Policy para conformidade multiassinatura",
        domain: "Governança e Conformidade",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Os grupos de recursos fornecem às organizações a capacidade de gerenciar a conformidade dos recursos do Azure em várias assinaturas. Instruções: Reveja o texto destacado. Se ele fizer a declaração correta, selecione 'Nenhuma alteração é necessária'. Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "Políticas do Azure", correct: true },
            { letter: "B", text: "Grupos de gestão", correct: false },
            { letter: "C", text: "Nenhuma mudança é necessária.", correct: false },
            { letter: "D", text: "Planos do Azure App Service", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O texto destacado está incorreto. As Políticas do Azure permitem gerenciar e impor conformidade em várias assinaturas e grupos de recursos." },
            { correct: false, text: "Incorreta. Grupos de gestão organizam assinaturas, mas não gerenciam conformidade diretamente." },
            { correct: false, text: "Incorreta. O texto destacado está incorreto; grupos de recursos não gerenciam conformidade em várias assinaturas." },
            { correct: false, text: "Incorreta. Planos do App Service são configurações de hospedagem, não ferramentas de conformidade." }
        ],
        glossary: [
            "Azure Policy: serviço que permite definir e aplicar regras de conformidade em várias assinaturas.",
            "Grupo de recursos: contêiner lógico para organizar recursos do Azure.",
            "Grupo de gestão: contêiner que organiza assinaturas e aplica políticas.",
            "Conformidade: aderência a requisitos regulatórios e de governança."
        ],
        generalExplanation: [
            "A resposta correta é Políticas do Azure.",
            "O texto destacado está incorreto: grupos de recursos não gerenciam conformidade em várias assinaturas.",
            "As Políticas do Azure permitem definir e impor conformidade em várias assinaturas e grupos de recursos.",
            "Portanto, a resposta correta é Políticas do Azure."
        ],
        realWorld: [
            "Empresas usam Azure Policy para garantir conformidade em múltiplas assinaturas.",
            "Políticas podem impor padrões de segurança e governança.",
            "Isso facilita auditorias e conformidade regulatória.",
            "O Azure Policy é essencial para governança em larga escala."
        ]
    },
    {
        id: 22,
        title: "App Service + VM com SQL Server não é PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa planeja migrar todos os seus dados e recursos para o Azure. O plano de migração da empresa afirma que apenas as soluções de Plataforma como Serviço (PaaS) devem ser usadas no Azure. Você precisa implantar um ambiente Azure que atenda ao plano de migração da empresa. Solução: Você cria um Azure App Service e máquinas virtuais Azure que têm o Microsoft SQL Server instalado. Isso cumpre o objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A solução inclui máquinas virtuais com SQL Server, que são IaaS, violando o requisito de apenas PaaS." },
            { correct: true, text: "Correta. A solução inclui máquinas virtuais com SQL Server instalado, que são IaaS. Para cumprir o requisito de apenas PaaS, o banco de dados deveria ser migrado para um serviço gerenciado como Azure SQL Database." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma gerenciada.",
            "IaaS (Infrastructure as a Service): modelo de nuvem que fornece infraestrutura virtualizada.",
            "Azure SQL Database: serviço PaaS de banco de dados relacional.",
            "Azure App Service: serviço PaaS para hospedar aplicações web."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "A solução proposta inclui máquinas virtuais com SQL Server, que são IaaS.",
            "Para cumprir o objetivo de apenas PaaS, o banco de dados deveria ser migrado para Azure SQL Database.",
            "Portanto, a solução não cumpre o objetivo."
        ],
        realWorld: [
            "Empresas que adotam PaaS buscam reduzir esforço de gerenciamento de infraestrutura.",
            "Azure SQL Database é uma opção PaaS para bancos relacionais.",
            "O uso de VMs com SQL Server exige gerenciamento de sistema operacional e patches.",
            "A escolha entre IaaS e PaaS impacta custos e operações."
        ]
    },
    {
        id: 23,
        title: "Firewall do Azure permite acesso HTTP",
        domain: "Redes",
        prompt: "Seu ambiente Azure contém várias máquinas virtuais do Azure. Você precisa garantir que uma máquina virtual chamada VM1 esteja acessível a partir da Internet via HTTP. Solução: Você modifica um firewall do Azure. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O firewall do Azure pode ser configurado para permitir tráfego HTTP, atendendo ao objetivo." },
            { correct: true, text: "Correta. Ao configurar as regras de firewall corretas, permitindo o tráfego HTTP na porta apropriada, é possível permitir o acesso externo à VM1. O Azure Firewall ou NSG pode ser configurado para controlar o tráfego." }
        ],
        glossary: [
            "Azure Firewall: serviço de segurança de rede gerenciado que controla tráfego de entrada e saída.",
            "NSG (Network Security Group): firewall de rede que controla tráfego de entrada e saída.",
            "HTTP: protocolo de transferência de hipertexto, normalmente na porta 80.",
            "Regra de firewall: regra que permite ou nega tráfego com base em critérios."
        ],
        generalExplanation: [
            "A resposta correta é SIM.",
            "Modificar um firewall do Azure permite configurar regras para permitir tráfego HTTP na porta apropriada.",
            "Isso possibilita o acesso externo à VM1.",
            "O Azure Firewall ou NSG pode ser usado para controlar o tráfego."
        ],
        realWorld: [
            "Administradores configuram regras de firewall para expor serviços HTTP.",
            "O Azure Firewall oferece controle centralizado de tráfego.",
            "NSGs são usados para controlar tráfego em sub-redes e VMs.",
            "A configuração correta de firewall é essencial para segurança e disponibilidade."
        ]
    },
    {
        id: 24,
        title: "América do Norte tem múltiplas regiões Azure",
        domain: "Conceitos de Nuvem",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. A América do Norte é representada por uma única região do Azure?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A América do Norte é representada por várias regiões do Azure, como East US, West US, Central US, Canada East, Canada Central, entre outras." },
            { correct: false, text: "Incorreta. A América do Norte não é representada por uma única região; há várias regiões distribuídas geograficamente." }
        ],
        glossary: [
            "Região do Azure: área geográfica que contém datacenters e oferece serviços do Azure.",
            "América do Norte: continente com múltiplas regiões do Azure.",
            "Datacenter: instalação física que hospeda recursos de nuvem.",
            "Zona de Disponibilidade: local fisicamente separado dentro de uma região."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "A América do Norte não é representada por uma única região do Azure.",
            "O Azure possui várias regiões na América do Norte, como East US, West US, Central US, Canada East e Canada Central.",
            "Cada região é uma área geográfica específica com vários datacenters."
        ],
        realWorld: [
            "Empresas escolhem regiões da América do Norte com base em latência e conformidade.",
            "A distribuição geográfica permite resiliência e recuperação de desastres.",
            "Múltiplas regiões oferecem opções de localização de dados.",
            "A escolha da região impacta custos e desempenho."
        ]
    },
    {
        id: 25,
        title: "Azure DevTest Labs para ambientes temporários",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Uma equipe de desenvolvedores da sua empresa planeja implantar e, em seguida, remover, 50 máquinas virtuais por semana. Todas as máquinas virtuais são configuradas usando modelos do Azure Resource Manager. Você precisa recomendar qual serviço do Azure minimizará o esforço administrativo necessário para implantar e remover as máquinas virtuais. O que você deve recomendar?",
        options: [
            { letter: "A", text: "Desktop gerenciado pela Microsoft", correct: false },
            { letter: "B", text: "Azure DevTest Labs", correct: true },
            { letter: "C", text: "Conjuntos de escala de máquinas virtuais do Azure", correct: false },
            { letter: "D", text: "Instâncias da Máquina Virtual Reservada (VM) do Azure", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Desktop gerenciado pela Microsoft é um serviço de desktop virtual, não para implantar/remover VMs em lote." },
            { correct: true, text: "Correta. O Azure DevTest Labs é projetado para fornecer ambientes de desenvolvimento e teste sob demanda, permitindo implantar e remover VMs rapidamente usando modelos ARM, com políticas de controle e limpeza automatizada." },
            { correct: false, text: "Incorreta. Conjuntos de escala são para escalar cargas de trabalho, não para ambientes temporários de desenvolvimento/teste." },
            { correct: false, text: "Incorreta. Instâncias reservadas são um modelo de desconto, não um serviço de gerenciamento de ambientes temporários." }
        ],
        glossary: [
            "Azure DevTest Labs: serviço para criar ambientes de desenvolvimento e teste sob demanda, com políticas de controle e limpeza.",
            "ARM (Azure Resource Manager): serviço de gerenciamento e implantação de recursos do Azure.",
            "Conjunto de escala de VM: recurso para escalar automaticamente um conjunto de VMs.",
            "Instância reservada de VM: compromisso de uso para descontos em VMs."
        ],
        generalExplanation: [
            "A resposta correta é Azure DevTest Labs.",
            "Ele permite implantar e remover VMs rapidamente usando modelos ARM.",
            "Oferece políticas para controlar número de VMs e tempo de vida.",
            "Facilita a criação e limpeza automatizada de ambientes temporários."
        ],
        realWorld: [
            "Equipes de desenvolvimento usam DevTest Labs para ambientes de teste sob demanda.",
            "Políticas de custo ajudam a controlar gastos com VMs temporárias.",
            "A limpeza automatizada reduz esforço administrativo.",
            "O serviço é ideal para cenários de desenvolvimento e teste."
        ]
    },
    {
        id: 26,
        title: "Segmentação de rede com VNets separadas",
        domain: "Redes",
        prompt: "Sua empresa planeja transferir vários servidores para o Azure. A política de conformidade da empresa afirma que um servidor chamado FinServer deve estar em um segmento de rede separado. Você está avaliando quais serviços do Azure podem ser usados para atender aos requisitos da política de conformidade. Qual solução Azure você deve recomendar?",
        options: [
            { letter: "A", text: "uma rede virtual para o FinServer e outra rede virtual para todos os outros servidores.", correct: true },
            { letter: "B", text: "uma VPN para FinServer e um gateway de rede virtual para um outro servidor.", correct: false },
            { letter: "C", text: "um grupo de recursos para o FinServer e outro grupo de recursos para todos os outros servidores.", correct: false },
            { letter: "D", text: "um grupo de recursos para todos os servidores e um bloqueio de recursos para o FinServer.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Criar uma rede virtual dedicada para o FinServer e outra para os demais servidores garante isolamento e segmentação de rede, atendendo à política de conformidade." },
            { correct: false, text: "Incorreta. VPN e gateway de rede virtual são usados para conectividade híbrida, não para segmentação de servidores no Azure." },
            { correct: false, text: "Incorreta. Grupos de recursos organizam recursos, mas não segmentam a rede." },
            { correct: false, text: "Incorreta. Bloqueios de recursos impedem alterações, mas não segmentam a rede." }
        ],
        glossary: [
            "Rede virtual (VNet): rede isolada no Azure que permite segmentar recursos.",
            "Segmento de rede: subdivisão lógica da rede para isolamento.",
            "VPN: conexão segura entre redes.",
            "Gateway de rede virtual: componente para conectividade híbrida."
        ],
        generalExplanation: [
            "A resposta correta é uma rede virtual para o FinServer e outra para os demais servidores.",
            "Redes virtuais permitem isolar e segmentar o tráfego de rede.",
            "Criar VNets separadas garante que o FinServer esteja em um segmento de rede separado.",
            "Isso atende aos requisitos de conformidade da empresa."
        ],
        realWorld: [
            "Empresas segmentam redes para atender requisitos de conformidade.",
            "VNets separadas permitem controle granular de tráfego.",
            "O isolamento de servidores sensíveis é uma prática comum.",
            "A segmentação ajuda a reduzir riscos de segurança."
        ]
    },
    {
        id: 27,
        title: "Azure DevTest Labs para VMs personalizadas",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Uma equipe de desenvolvedores da sua empresa planeja implantar e, em seguida, remover 50 máquinas virtuais personalizadas por semana. Trinta das máquinas virtuais executam o Windows Server 2016 e 20 das máquinas virtuais executam o Ubuntu Linux. Você precisa recomendar qual serviço do Azure minimizará o esforço administrativo necessário para implantar e remover as máquinas virtuais. O que você deve recomendar?",
        options: [
            { letter: "A", text: "Instâncias de Máquinas Virtuais Reservadas Azure (VM)", correct: false },
            { letter: "B", text: "Desktop gerenciado pela Microsoft", correct: false },
            { letter: "C", text: "Azure DevTest Labs", correct: true },
            { letter: "D", text: "Conjuntos de escala de máquinas virtuais do Azure", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Instâncias reservadas são um modelo de desconto, não um serviço de gerenciamento de ambientes temporários." },
            { correct: false, text: "Incorreta. Desktop gerenciado pela Microsoft é um serviço de desktop virtual." },
            { correct: true, text: "Correta. O Azure DevTest Labs permite implantar e remover VMs personalizadas rapidamente, com políticas de controle e limpeza automatizada, minimizando o esforço administrativo." },
            { correct: false, text: "Incorreta. Conjuntos de escala são para escalar cargas de trabalho, não para ambientes temporários de desenvolvimento/teste." }
        ],
        glossary: [
            "Azure DevTest Labs: serviço para criar ambientes de desenvolvimento e teste sob demanda.",
            "VM personalizada: máquina virtual com configurações específicas.",
            "Políticas de controle: regras que limitam número e tempo de vida de VMs.",
            "Limpeza automatizada: remoção automática de recursos temporários."
        ],
        generalExplanation: [
            "A resposta correta é Azure DevTest Labs.",
            "Ele permite implantar e remover VMs personalizadas rapidamente.",
            "Oferece políticas para controlar número de VMs e tempo de vida.",
            "Facilita a criação e limpeza automatizada de ambientes temporários."
        ],
        realWorld: [
            "Equipes de desenvolvimento usam DevTest Labs para ambientes de teste sob demanda.",
            "Políticas de custo ajudam a controlar gastos com VMs temporárias.",
            "A limpeza automatizada reduz esforço administrativo.",
            "O serviço é ideal para cenários de desenvolvimento e teste."
        ]
    },
    {
        id: 28,
        title: "Recuperação de desastre para serviço de nuvem",
        domain: "Conceitos de Nuvem",
        prompt: "Associe o cenário com a resposta correta. Um serviço de nuvem que pode ser recuperado após a ocorrência de uma falha.",
        options: [
            { letter: "A", text: "Escalabilidade dinâmica", correct: false },
            { letter: "B", text: "Recuperação de desastre", correct: true },
            { letter: "C", text: "Tolerância ao erro", correct: false },
            { letter: "D", text: "Baixa latência", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Escalabilidade dinâmica é o ajuste automático de recursos, não recuperação após falha." },
            { correct: true, text: "Correta. Recuperação de desastre é a estratégia para restaurar e recuperar um serviço de nuvem após um evento de falha ou desastre." },
            { correct: false, text: "Incorreta. Tolerância ao erro é a capacidade de continuar operando após falhas, não de recuperar após uma falha grave." },
            { correct: false, text: "Incorreta. Baixa latência é tempo de resposta, não recuperação de desastre." }
        ],
        glossary: [
            "Recuperação de desastre: estratégia para restaurar serviços após falhas graves.",
            "Tolerância ao erro: capacidade de continuar operando após falhas.",
            "Escalabilidade dinâmica: ajuste automático de recursos.",
            "Baixa latência: tempo de resposta curto."
        ],
        generalExplanation: [
            "A resposta correta é Recuperação de desastre.",
            "Um serviço que pode ser recuperado após uma falha é um exemplo de recuperação de desastre.",
            "Ela envolve backups, replicação e planos de continuidade de negócios.",
            "O objetivo é restaurar a operação normal após um desastre."
        ],
        realWorld: [
            "Empresas usam recuperação de desastre para garantir continuidade de negócios.",
            "Backups regulares e replicação geográfica são práticas comuns.",
            "Planos de recuperação definem procedimentos durante e após desastres.",
            "A recuperação de desastre é essencial para cargas críticas."
        ]
    },
    {
        id: 29,
        title: "Baixa latência para acesso rápido pela internet",
        domain: "Conceitos de Nuvem",
        prompt: "Associe o cenário com a opção correta. Um serviço em nuvem que pode ser acessado rapidamente pela internet.",
        options: [
            { letter: "A", text: "Tolerância ao erro", correct: false },
            { letter: "B", text: "Escalabilidade dinâmica", correct: false },
            { letter: "C", text: "Recuperação de desastre", correct: false },
            { letter: "D", text: "Baixa latência", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Tolerância ao erro é a capacidade de continuar operando após falhas." },
            { correct: false, text: "Incorreta. Escalabilidade dinâmica é o ajuste automático de recursos." },
            { correct: false, text: "Incorreta. Recuperação de desastre é a restauração após falhas graves." },
            { correct: true, text: "Correta. Baixa latência refere-se ao tempo mínimo para transferência de dados entre cliente e servidor, permitindo acesso rápido pela internet." }
        ],
        glossary: [
            "Baixa latência: tempo de resposta curto entre requisição e resposta.",
            "Tolerância ao erro: capacidade de continuar operando após falhas.",
            "Escalabilidade dinâmica: ajuste automático de recursos.",
            "Recuperação de desastre: restauração após falhas graves."
        ],
        generalExplanation: [
            "A resposta correta é Baixa latência.",
            "Um serviço acessado rapidamente pela internet tem baixa latência.",
            "A latência é o tempo de transferência de dados entre cliente e servidor.",
            "Baixa latência melhora a experiência do usuário."
        ],
        realWorld: [
            "CDNs são usadas para reduzir latência de acesso a conteúdo.",
            "Serviços globalmente distribuídos oferecem baixa latência.",
            "A latência impacta a experiência do usuário em aplicações web.",
            "Otimizar a latência é essencial para aplicações interativas."
        ]
    },
    {
        id: 30,
        title: "Azure Traffic Manager não expõe VM via HTTP",
        domain: "Redes",
        prompt: "Seu ambiente Azure contém várias máquinas virtuais do Azure. Você precisa garantir que uma máquina virtual chamada VM1 esteja acessível a partir da Internet via HTTP. Solução: Você modifica um perfil do Azure Traffic Manager. Isso cumpre o objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure Traffic Manager é um balanceador de carga baseado em DNS e não configura acesso HTTP direto à VM." },
            { correct: true, text: "Correta. Modificar um perfil do Azure Traffic Manager não é a solução adequada para garantir que uma VM específica esteja acessível via HTTP. É necessário configurar NSG, IP público e, se necessário, um balanceador de carga." }
        ],
        glossary: [
            "Azure Traffic Manager: balanceador de carga baseado em DNS que distribui tráfego entre regiões.",
            "NSG (Network Security Group): firewall de rede que controla tráfego.",
            "IP público: endereço IP acessível pela internet.",
            "Load Balancer: serviço que distribui tráfego entre recursos."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "O Azure Traffic Manager distribui tráfego baseado em DNS, mas não configura acesso HTTP direto à VM.",
            "Para tornar a VM acessível via HTTP, é necessário configurar NSG e IP público.",
            "Balanceadores de carga como Azure Load Balancer ou Application Gateway são mais adequados."
        ],
        realWorld: [
            "Para expor uma VM via HTTP, é necessário configurar NSG e IP público.",
            "O Traffic Manager é usado para distribuir tráfego entre regiões.",
            "Balanceadores de carga distribuem tráfego entre VMs.",
            "A configuração correta de rede é essencial para disponibilidade."
        ]
    },
    {
        id: 31,
        title: "Nuvem híbrida para minimizar custos",
        domain: "Conceitos de Nuvem",
        prompt: "Você tem uma rede local que contém 100 servidores. Você precisa recomendar uma solução que forneça recursos adicionais aos seus usuários. A solução deve minimizar os custos de capital e despesas operacionais. O que você deve incluir na recomendação?",
        options: [
            { letter: "A", text: "um datacenter adicional", correct: false },
            { letter: "B", text: "uma nuvem privada", correct: false },
            { letter: "C", text: "uma migração completa para a nuvem pública", correct: false },
            { letter: "D", text: "uma nuvem híbrida", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Um datacenter adicional aumenta custos de capital e operacionais." },
            { correct: false, text: "Incorreta. Uma nuvem privada pode exigir investimentos significativos em infraestrutura." },
            { correct: false, text: "Incorreta. Uma migração completa pode não ser viável ou econômica para todos os cenários." },
            { correct: true, text: "Correta. Uma nuvem híbrida combina recursos locais e de nuvem pública, permitindo escalar recursos conforme a demanda e minimizar custos de capital e operacionais." }
        ],
        glossary: [
            "Nuvem híbrida: combinação de nuvem pública e privada.",
            "Nuvem privada: infraestrutura dedicada a uma organização.",
            "Nuvem pública: serviços de nuvem oferecidos por provedores externos.",
            "Custos de capital: investimentos iniciais em infraestrutura."
        ],
        generalExplanation: [
            "A resposta correta é uma nuvem híbrida.",
            "Ela combina recursos locais e de nuvem pública.",
            "Permite escalar recursos conforme a demanda.",
            "Minimiza custos de capital e despesas operacionais."
        ],
        realWorld: [
            "Empresas usam nuvem híbrida para escalar sem grandes investimentos.",
            "A nuvem híbrida permite integração com sistemas locais.",
            "É comum em cenários de migração gradual.",
            "A abordagem ajuda a otimizar custos e melhorar a resiliência."
        ]
    },
    {
        id: 32,
        title: "Nuvem híbrida não exige nuvem privada prévia",
        domain: "Conceitos de Nuvem",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Para implementar um modelo de nuvem híbrida, uma empresa deve primeiro ter uma nuvem privada?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Uma empresa pode adotar nuvem híbrida sem ter uma nuvem privada prévia, integrando serviços de nuvem pública com recursos locais." },
            { correct: true, text: "Correta. Uma empresa não precisa necessariamente ter uma nuvem privada primeiro. A nuvem híbrida envolve a combinação de recursos de nuvem pública e privada, permitindo integração e compartilhamento de dados e aplicativos." }
        ],
        glossary: [
            "Nuvem híbrida: combinação de nuvem pública e privada.",
            "Nuvem privada: infraestrutura de nuvem dedicada a uma organização.",
            "Nuvem pública: serviços de nuvem oferecidos por provedores externos.",
            "Integração: conexão entre ambientes de nuvem."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "Uma empresa não precisa ter uma nuvem privada primeiro para implementar nuvem híbrida.",
            "A nuvem híbrida combina recursos de nuvem pública e privada.",
            "A empresa pode começar com serviços de nuvem pública e integrá-los posteriormente."
        ],
        realWorld: [
            "Empresas podem adotar nuvem híbrida gradualmente.",
            "A integração de serviços de nuvem pública com sistemas locais é comum.",
            "A nuvem híbrida oferece flexibilidade e escalabilidade.",
            "A abordagem permite otimizar custos e melhorar a resiliência."
        ]
    },
    {
        id: 33,
        title: "Reidratação de dados no nível de arquivo do Azure Storage",
        domain: "Armazenamento",
        prompt: "Para completar a frase, selecione a opção apropriada na área de resposta. Dados que são armazenados no nível de acesso de arquivo de uma conta de armazenamento do Azure_________.",
        options: [
            { letter: "A", text: "deve ser reidratado antes que os dados possam ser acessados.", correct: true },
            { letter: "B", text: "só deve ser lido usando o Backup do Azure.", correct: false },
            { letter: "C", text: "pode ser acessado a qualquer momento usando azcopy.exe", correct: false },
            { letter: "D", text: "deve ser restaurado antes que os dados possam ser acessados.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. No nível de acesso de arquivo (Archive) do Azure Storage, os dados não estão imediatamente disponíveis. É necessário realizar o processo de reidratação para movê-los para uma camada acessível." },
            { correct: false, text: "Incorreta. Os dados podem ser acessados por outros meios após a reidratação, não apenas pelo Backup do Azure." },
            { correct: false, text: "Incorreta. Os dados no nível Archive não podem ser acessados imediatamente, mesmo com azcopy." },
            { correct: false, text: "Incorreta. O termo correto é reidratação, não restauração." }
        ],
        glossary: [
            "Nível de acesso de arquivo (Archive): camada de armazenamento de baixo custo para dados raramente acessados.",
            "Reidratação: processo de mover dados da camada Archive para uma camada acessível.",
            "Azure Storage: serviço de armazenamento do Azure.",
            "azcopy: ferramenta de linha de comando para copiar dados para o Azure Storage."
        ],
        generalExplanation: [
            "A resposta correta é: deve ser reidratado antes que os dados possam ser acessados.",
            "No nível Archive, os dados não estão imediatamente disponíveis.",
            "É necessário realizar a reidratação para acessá-los.",
            "Esse processo pode levar algum tempo, dependendo do tamanho dos dados."
        ],
        realWorld: [
            "Empresas usam o nível Archive para armazenar dados de longo prazo com baixo custo.",
            "A reidratação é necessária antes de acessar dados arquivados.",
            "O processo de reidratação pode levar horas.",
            "É importante planejar o acesso a dados arquivados."
        ]
    },
    {
        id: 34,
        title: "Tolerância ao erro mantém disponibilidade",
        domain: "Conceitos de Nuvem",
        prompt: "Associe o cenário com a opção correta. Um serviço de nuvem que permanece disponível após a ocorrência de uma falha.",
        options: [
            { letter: "A", text: "Tolerância ao erro", correct: true },
            { letter: "B", text: "Escalabilidade dinâmica", correct: false },
            { letter: "C", text: "Recuperação de desastre", correct: false },
            { letter: "D", text: "Baixa latência", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A tolerância ao erro é a capacidade de um serviço permanecer disponível e funcionando adequadamente mesmo após a ocorrência de uma falha." },
            { correct: false, text: "Incorreta. Escalabilidade dinâmica é o ajuste automático de recursos." },
            { correct: false, text: "Incorreta. Recuperação de desastre é a restauração após falhas graves." },
            { correct: false, text: "Incorreta. Baixa latência é tempo de resposta curto." }
        ],
        glossary: [
            "Tolerância ao erro: capacidade de continuar operando após falhas.",
            "Escalabilidade dinâmica: ajuste automático de recursos.",
            "Recuperação de desastre: restauração após falhas graves.",
            "Baixa latência: tempo de resposta curto."
        ],
        generalExplanation: [
            "A resposta correta é Tolerância ao erro.",
            "Um serviço que permanece disponível após uma falha é um exemplo de tolerância ao erro.",
            "Ela envolve redundância, replicação e mecanismos de recuperação.",
            "O objetivo é garantir disponibilidade contínua."
        ],
        realWorld: [
            "Sistemas distribuídos usam tolerância ao erro para manter disponibilidade.",
            "Redundância e replicação são práticas comuns.",
            "A tolerância ao erro é essencial para cargas críticas.",
            "O design resiliente reduz impactos de falhas."
        ]
    },
    {
        id: 35,
        title: "Zonas de Disponibilidade dentro de uma região",
        domain: "Conceitos de Nuvem",
        prompt: "Para completar a frase, selecione a opção apropriada na área de resposta. Uma Zona de Disponibilidade no Azure tem locais fisicamente separados _____________.",
        options: [
            { letter: "A", text: "dentro de uma única região do Azure.", correct: true },
            { letter: "B", text: "Dentro de um único datacenter do Azure.", correct: false },
            { letter: "C", text: "através de dois continentes.", correct: false },
            { letter: "D", text: "em várias regiões do Azure.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. As Zonas de Disponibilidade são compostas por locais físicos distintos dentro da mesma região do Azure, garantindo alta disponibilidade e resiliência." },
            { correct: false, text: "Incorreta. As Zonas de Disponibilidade são locais fisicamente separados, não um único datacenter." },
            { correct: false, text: "Incorreta. As Zonas de Disponibilidade não atravessam continentes; estão dentro de uma região." },
            { correct: false, text: "Incorreta. As Zonas de Disponibilidade estão dentro de uma única região, não em várias regiões." }
        ],
        glossary: [
            "Zona de Disponibilidade: local fisicamente separado dentro de uma região do Azure.",
            "Região do Azure: área geográfica que contém datacenters.",
            "Datacenter: instalação física que hospeda recursos de nuvem.",
            "Alta disponibilidade: garantia de que o serviço permaneça acessível."
        ],
        generalExplanation: [
            "A resposta correta é: dentro de uma única região do Azure.",
            "As Zonas de Disponibilidade são locais fisicamente separados dentro da mesma região.",
            "Elas garantem alta disponibilidade e resiliência contra falhas.",
            "Cada zona possui infraestrutura independente de energia, rede e refrigeração."
        ],
        realWorld: [
            "Empresas usam zonas de disponibilidade para garantir alta disponibilidade.",
            "A distribuição de recursos entre zonas reduz riscos de falhas.",
            "Zonas de disponibilidade são uma oferta de alta disponibilidade dentro de uma região.",
            "O design resiliente é essencial para cargas críticas."
        ]
    },
    {
        id: 36,
        title: "Azure Repos para controle de versão",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Qual serviço do Azure fornece um conjunto de ferramentas de controle de versão para gerenciar o código?",
        options: [
            { letter: "A", text: "Azure Storage", correct: false },
            { letter: "B", text: "Azure Repos", correct: true },
            { letter: "C", text: "Azure Cosmos DB", correct: false },
            { letter: "D", text: "Azure DevTest Labs", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Azure Storage é um serviço de armazenamento de dados, não de controle de versão." },
            { correct: true, text: "Correta. O Azure Repos é um serviço do Azure DevOps que fornece ferramentas de controle de versão (Git e TFVC) para gerenciar código-fonte." },
            { correct: false, text: "Incorreta. Azure Cosmos DB é um banco de dados NoSQL, não uma ferramenta de controle de versão." },
            { correct: false, text: "Incorreta. Azure DevTest Labs é um serviço para ambientes de desenvolvimento e teste, não para controle de versão." }
        ],
        glossary: [
            "Azure Repos: serviço do Azure DevOps para controle de versão com Git e TFVC.",
            "Controle de versão: sistema que registra alterações em arquivos ao longo do tempo.",
            "Git: sistema de controle de versão distribuído.",
            "TFVC (Team Foundation Version Control): sistema de controle de versão centralizado da Microsoft."
        ],
        generalExplanation: [
            "A resposta correta é Azure Repos.",
            "Ele fornece ferramentas de controle de versão para gerenciar código-fonte.",
            "Suporta repositórios Git e TFVC.",
            "É uma escolha adequada para gerenciar código em projetos de software."
        ],
        realWorld: [
            "Equipes de desenvolvimento usam Azure Repos para versionar código.",
            "Integração com Azure Pipelines facilita CI/CD.",
            "O controle de versão é essencial para colaboração e rastreabilidade.",
            "Azure Repos é parte do Azure DevOps."
        ]
    },
    {
        id: 37,
        title: "Grupos de recursos não garantem resiliência a falhas de datacenter",
        domain: "Conceitos de Nuvem",
        prompt: "Você planeja implantar várias máquinas virtuais do Azure. Você precisa garantir que os serviços em execução nas máquinas virtuais estejam disponíveis se um único datacenter falhar. Solução: Você implanta as máquinas virtuais em dois ou mais grupos de recursos. Isso cumpre o objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Grupos de recursos são contêineres lógicos e não garantem resiliência a falhas de datacenter." },
            { correct: true, text: "Correta. Para garantir disponibilidade em caso de falha de datacenter, é necessário usar Zonas de Disponibilidade ou Regiões emparelhadas. Grupos de recursos não oferecem essa garantia." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico para organizar recursos do Azure.",
            "Zona de Disponibilidade: local fisicamente separado dentro de uma região.",
            "Regiões emparelhadas: pares de regiões geograficamente distantes.",
            "Alta disponibilidade: garantia de que o serviço permaneça acessível."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "Grupos de recursos não garantem resiliência a falhas de datacenter.",
            "Para isso, é necessário usar Zonas de Disponibilidade ou Regiões emparelhadas.",
            "Grupos de recursos apenas organizam recursos."
        ],
        realWorld: [
            "Empresas usam zonas de disponibilidade para garantir alta disponibilidade.",
            "Regiões emparelhadas ajudam na recuperação de desastres.",
            "Grupos de recursos são usados para organização e governança.",
            "O design resiliente requer recursos adequados."
        ]
    },
    {
        id: 38,
        title: "Azure Cost Management requer EA ou Pay-As-You-Go",
        domain: "Suporte e Custos",
        prompt: "O que é necessário para usar o Azure Cost Management?",
        options: [
            { letter: "A", text: "um Acordo Empresarial (EA)", correct: true },
            { letter: "B", text: "Garantia de software", correct: false },
            { letter: "C", text: "uma assinatura pay-as-you-go", correct: false },
            { letter: "D", text: "uma assinatura Dev/Teste", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Para usar o Azure Cost Management, é necessário ter um Acordo Empresarial (EA) ou uma assinatura de Pagamento Contra Uso (Pay-As-You-Go)." },
            { correct: false, text: "Incorreta. Garantia de software não é um requisito para usar o Azure Cost Management." },
            { correct: false, text: "Incorreta. Embora uma assinatura pay-as-you-go seja uma opção, a resposta correta no contexto original é o EA." },
            { correct: false, text: "Incorreta. Assinaturas Dev/Teste não são o requisito principal para usar o Azure Cost Management." }
        ],
        glossary: [
            "Azure Cost Management: ferramenta para monitorar, entender e otimizar custos no Azure.",
            "EA (Enterprise Agreement): acordo empresarial da Microsoft para licenciamento e serviços de nuvem.",
            "Pay-As-You-Go: modelo de cobrança baseado no uso.",
            "Assinatura Dev/Teste: assinatura com descontos para desenvolvimento e teste."
        ],
        generalExplanation: [
            "A resposta correta é um Acordo Empresarial (EA).",
            "O Azure Cost Management ajuda a monitorar e otimizar custos.",
            "É necessário ter um EA ou uma assinatura Pay-As-You-Go.",
            "A ferramenta permite acompanhar gastos e tomar decisões de otimização."
        ],
        realWorld: [
            "Empresas usam Azure Cost Management para controlar gastos.",
            "A ferramenta permite criar orçamentos e alertas.",
            "O EA facilita a gestão financeira em grandes organizações.",
            "O Cost Management é essencial para governança de custos."
        ]
    },
    {
        id: 39,
        title: "Azure Cloud Shell com PowerShell cria VM",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Você tem uma assinatura do Azure chamada Subscription1. Você entra no portal do Azure e cria um grupo de recursos chamado RG1. A partir da documentação do Azure, você tem o seguinte comando que cria uma máquina virtual chamada VM1: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. Você precisa criar VM1 na Subscription1 usando o comando. Solução: A partir do portal Azure, inicie o Azure Cloud Shell e selecione PowerShell. Execute o comando em Cloud Shell. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Azure Cloud Shell com PowerShell permite executar comandos do Azure, incluindo o comando az vm create, para criar a VM1 no grupo de recursos RG1." },
            { correct: false, text: "Incorreta. O Azure Cloud Shell com PowerShell é um ambiente válido para executar comandos do Azure CLI." }
        ],
        glossary: [
            "Azure Cloud Shell: shell interativo baseado em navegador para gerenciar recursos do Azure.",
            "PowerShell: linguagem de script e shell da Microsoft.",
            "az vm create: comando para criar uma máquina virtual no Azure.",
            "Resource Group (RG): contêiner lógico que agrupa recursos do Azure."
        ],
        generalExplanation: [
            "A resposta correta é Sim.",
            "Iniciar o Azure Cloud Shell no portal e selecionar PowerShell permite executar comandos do Azure.",
            "O comando az vm create pode ser executado no Cloud Shell para criar a VM1.",
            "A solução atende ao objetivo."
        ],
        realWorld: [
            "O Azure Cloud Shell é útil para administração sem instalar ferramentas locais.",
            "Ele oferece PowerShell e Bash para automação.",
            "É comum usar o Cloud Shell para comandos rápidos no Azure.",
            "O Cloud Shell facilita a gestão de recursos em qualquer dispositivo."
        ]
    },
    {
        id: 40,
        title: "Pré-visualização pública disponível a todos os clientes",
        domain: "Conceitos de Nuvem",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Um serviço Azure está disponível para todos os clientes do Azure quando está em pré-visualização pública. Instruções: Reveja o texto destacado. Se ele fizer a declaração correta, selecione 'Nenhuma alteração é necessária'. Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "Nenhuma mudança é necessária.", correct: true },
            { letter: "B", text: "desenvolvimento", correct: false },
            { letter: "C", text: "pré-visualização privada", correct: false },
            { letter: "D", text: "uma assinatura do Enterprise Agreement (EA)", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O texto está correto: um serviço Azure em pré-visualização pública está disponível para todos os clientes do Azure para experimentação e feedback." },
            { correct: false, text: "Incorreta. 'Desenvolvimento' não é o termo correto para disponibilidade a todos os clientes." },
            { correct: false, text: "Incorreta. Pré-visualização privada é restrita a um grupo selecionado de clientes." },
            { correct: false, text: "Incorreta. Uma assinatura EA não é um requisito para acessar serviços em pré-visualização pública." }
        ],
        glossary: [
            "Pré-visualização pública: fase em que um serviço está disponível para todos os clientes do Azure.",
            "Pré-visualização privada: fase restrita a um grupo selecionado de clientes.",
            "Enterprise Agreement (EA): acordo empresarial da Microsoft para licenciamento e serviços de nuvem.",
            "Disponibilidade geral (GA): fase em que um serviço está totalmente disponível e suportado."
        ],
        generalExplanation: [
            "A resposta correta é 'Nenhuma mudança é necessária'.",
            "O texto está correto: um serviço em pré-visualização pública está disponível para todos os clientes do Azure.",
            "Durante a pré-visualização pública, os clientes podem experimentar e fornecer feedback.",
            "Após o lançamento geral, o serviço passa a ter suporte completo."
        ],
        realWorld: [
            "Clientes podem testar novos serviços em pré-visualização pública.",
            "O feedback dos clientes ajuda a melhorar o serviço antes do lançamento geral.",
            "Serviços em pré-visualização pública podem não ter SLA.",
            "É importante avaliar riscos antes de usar serviços em pré-visualização."
        ]
    },
    {
        id: 41,
        title: "Implantar VMs em múltiplas regiões garante disponibilidade",
        domain: "Conceitos de Nuvem",
        prompt: "Você planeja implantar várias máquinas virtuais do Azure. Você precisa garantir que os serviços em execução nas máquinas virtuais estejam disponíveis se um único datacenter falhar. Solução: Você implanta as máquinas virtuais em duas ou mais regiões. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Implantar VMs em múltiplas regiões garante que os serviços estejam disponíveis mesmo se um datacenter falhar." },
            { correct: true, text: "Correta. Implantar VMs em duas ou mais regiões garante resiliência a falhas de datacenter, pois as regiões são geograficamente separadas." }
        ],
        glossary: [
            "Região do Azure: área geográfica que contém datacenters.",
            "Datacenter: instalação física que hospeda recursos de nuvem.",
            "Resiliência: capacidade de continuar operando após falhas.",
            "Alta disponibilidade: garantia de que o serviço permaneça acessível."
        ],
        generalExplanation: [
            "A resposta correta é Sim.",
            "Implantar VMs em múltiplas regiões garante resiliência a falhas de datacenter.",
            "As regiões são geograficamente separadas.",
            "Isso atende ao objetivo de disponibilidade."
        ],
        realWorld: [
            "Empresas usam múltiplas regiões para recuperação de desastres.",
            "A distribuição geográfica reduz riscos de falhas.",
            "Múltiplas regiões oferecem opções de localização de dados.",
            "O design resiliente é essencial para cargas críticas."
        ]
    },
    {
        id: 42,
        title: "Plano Standard atende suporte por telefone/e-mail",
        domain: "Suporte e Custos",
        prompt: "Sua empresa planeja comprar uma assinatura do Azure. A política de suporte da empresa afirma que o ambiente Azure deve fornecer uma opção para acessar o suporte técnico por telefone ou e-mail. Você precisa recomendar qual plano de suporte atende ao requisito da política de suporte. Solução: Recomende um plano de suporte padrão. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O plano de suporte Standard do Azure inclui acesso a suporte técnico por telefone e e-mail, atendendo ao requisito da política." },
            { correct: false, text: "Incorreta. O plano Standard atende ao requisito de acesso por telefone e e-mail." }
        ],
        glossary: [
            "Plano de suporte Standard: plano do Azure com acesso a suporte técnico por telefone e e-mail.",
            "Plano de suporte Básico: plano do Azure sem suporte por telefone/e-mail.",
            "SLA de suporte: compromissos de tempo de resposta conforme o plano contratado.",
            "Suporte técnico: assistência para resolver problemas técnicos."
        ],
        generalExplanation: [
            "A resposta correta é Sim.",
            "O plano Standard atende ao requisito de acesso a suporte técnico por telefone e e-mail.",
            "Ele oferece assistência abrangente para resolver questões relacionadas aos serviços do Azure.",
            "A escolha está alinhada com a política da empresa."
        ],
        realWorld: [
            "Empresas com cargas críticas contratam planos com suporte por telefone/e-mail.",
            "O plano Standard é uma opção comum para ambientes de produção.",
            "O SLA de resposta varia conforme o plano.",
            "Recomenda-se alinhar o plano de suporte à criticidade dos workloads."
        ]
    },
    {
        id: 43,
        title: "IaaS para aplicativos com pré-requisitos personalizados",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa planeja implantar vários aplicativos personalizados para o Azure. Os aplicativos prestarão serviços de faturamento aos clientes da empresa. Cada aplicativo terá vários aplicativos e serviços de pré-requisitos instalados. Você precisa recomendar uma solução de implantação em nuvem para todos os aplicativos. O que você deve recomendar?",
        options: [
            { letter: "A", text: "Platform as a Service (PaaS)", correct: false },
            { letter: "B", text: "N.D.A.", correct: false },
            { letter: "C", text: "Software as a Service (SaaS)", correct: false },
            { letter: "D", text: "Infrastructure as a Service (IaaS)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. PaaS pode não oferecer controle total sobre pré-requisitos e configurações personalizadas." },
            { correct: false, text: "Incorreta. 'N.D.A.' não é uma opção válida." },
            { correct: false, text: "Incorreta. SaaS fornece software pronto, não controle sobre pré-requisitos." },
            { correct: true, text: "Correta. IaaS permite controle total sobre máquinas virtuais, incluindo instalação de aplicativos e serviços de pré-requisitos personalizados." }
        ],
        glossary: [
            "IaaS (Infrastructure as a Service): modelo de nuvem que fornece infraestrutura virtualizada.",
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma gerenciada.",
            "SaaS (Software as a Service): modelo de nuvem que fornece software pronto.",
            "Pré-requisitos: softwares e serviços necessários para executar um aplicativo."
        ],
        generalExplanation: [
            "A resposta correta é Infrastructure as a Service (IaaS).",
            "IaaS permite controle total sobre máquinas virtuais.",
            "Isso inclui instalação de aplicativos e serviços de pré-requisitos.",
            "A abordagem oferece flexibilidade e escalabilidade."
        ],
        realWorld: [
            "Aplicativos personalizados com pré-requisitos específicos geralmente usam IaaS.",
            "IaaS permite configurar o ambiente conforme necessário.",
            "O controle total sobre a infraestrutura é essencial para alguns cenários.",
            "A escolha entre IaaS e PaaS depende das necessidades do aplicativo."
        ]
    },
    {
        id: 44,
        title: "Chrome OS com Azure Cloud Shell executa PowerShell",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Um administrador do Azure planeja executar um script PowerShell que cria recursos do Azure. Você precisa recomendar qual configuração do computador usar para executar o script. Solução: Execute o script a partir de um computador que executa o Chrome OS e usa o Azure Cloud Shell. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Azure Cloud Shell é uma interface baseada em navegador que oferece suporte ao PowerShell, permitindo executar scripts e criar recursos do Azure a partir de um computador com Chrome OS." },
            { correct: false, text: "Incorreta. O Chrome OS com Azure Cloud Shell é uma configuração válida para executar scripts PowerShell no Azure." }
        ],
        glossary: [
            "Azure Cloud Shell: shell interativo baseado em navegador para gerenciar recursos do Azure.",
            "Chrome OS: sistema operacional do Google.",
            "PowerShell: linguagem de script e shell da Microsoft.",
            "Script PowerShell: arquivo com comandos para automação de tarefas."
        ],
        generalExplanation: [
            "A resposta correta é Sim.",
            "O Azure Cloud Shell oferece suporte ao PowerShell em um navegador.",
            "Isso permite executar scripts PowerShell a partir de um computador com Chrome OS.",
            "A solução atende ao objetivo de criar recursos do Azure."
        ],
        realWorld: [
            "O Azure Cloud Shell é útil para administração em dispositivos com sistemas operacionais leves.",
            "Ele oferece PowerShell e Bash para automação.",
            "É comum usar o Cloud Shell para comandos rápidos no Azure.",
            "O Cloud Shell facilita a gestão de recursos em qualquer dispositivo."
        ]
    },
    {
        id: 45,
        title: "Conta de avaliação expirada impede iniciar VM",
        domain: "Governança e Conformidade",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Sua conta de avaliação do Azure expirou na semana passada. Agora você não pode criar contas de usuário adicionais do Azure Active Directory (Azure AD). Instruções: Reveja o texto destacado. Se ele fizer a declaração correta, selecione 'Nenhuma alteração é necessária'. Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "Nenhuma mudança é necessária", correct: false },
            { letter: "B", text: "acesse seus dados armazenados no Azure", correct: false },
            { letter: "C", text: "acessar o portal do Azure", correct: false },
            { letter: "D", text: "iniciar uma máquina virtual Azure existente", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O texto destacado está incorreto; a afirmação sobre não poder criar contas de usuário adicionais do Azure AD não é a consequência principal da expiração da conta de avaliação." },
            { correct: false, text: "Incorreta. O acesso aos dados armazenados no Azure não é a consequência direta da expiração da conta de avaliação." },
            { correct: false, text: "Incorreta. O acesso ao portal do Azure não é a consequência direta da expiração da conta de avaliação." },
            { correct: true, text: "Correta. Após a expiração da conta de avaliação, você não pode iniciar uma máquina virtual Azure existente. A afirmação sobre criar contas de usuário adicionais do Azure AD não é a consequência principal." }
        ],
        glossary: [
            "Conta de avaliação do Azure: conta gratuita com créditos e serviços limitados por tempo.",
            "Azure AD (Azure Active Directory): serviço de identidade em nuvem da Microsoft.",
            "Máquina virtual Azure: recurso de computação IaaS no Azure.",
            "Portal do Azure: interface web para gerenciamento de recursos do Azure."
        ],
        generalExplanation: [
            "A resposta correta é iniciar uma máquina virtual Azure existente.",
            "Após a expiração da conta de avaliação, você não pode iniciar uma VM existente.",
            "O texto destacado sobre criar contas de usuário adicionais do Azure AD não é a consequência principal.",
            "Portanto, a resposta correta é iniciar uma máquina virtual Azure existente."
        ],
        realWorld: [
            "Contas de avaliação têm limitações após a expiração.",
            "É importante monitorar o prazo da conta de avaliação.",
            "A expiração pode impactar a operação de recursos.",
            "Recomenda-se migrar para uma assinatura paga antes da expiração."
        ]
    },
    {
        id: 46,
        title: "Plano Básico não tem suporte por telefone/e-mail",
        domain: "Suporte e Custos",
        prompt: "Sua empresa planeja comprar uma assinatura do Azure. A política de suporte da empresa afirma que o ambiente Azure deve fornecer uma opção para acessar os profissionais de suporte por telefone ou e-mail. Você precisa recomendar qual plano de suporte atende ao requisito da política de suporte. Solução: Recomende um plano de suporte básico. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O plano de suporte Básico do Azure oferece suporte técnico apenas por meio do portal do Azure e não inclui suporte por telefone ou e-mail." },
            { correct: false, text: "Incorreta. O plano Básico não atende ao requisito de acesso por telefone ou e-mail." }
        ],
        glossary: [
            "Plano de suporte Básico: plano do Azure sem suporte por telefone/e-mail.",
            "Plano de suporte Standard: plano do Azure com acesso a suporte técnico por telefone e e-mail.",
            "SLA de suporte: compromissos de tempo de resposta conforme o plano contratado.",
            "Suporte técnico: assistência para resolver problemas técnicos."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "O plano Básico não inclui suporte por telefone ou e-mail.",
            "Para atender à política da empresa, seria mais apropriado recomendar um plano Standard ou superior.",
            "Esses planos incluem opções de acesso por telefone e e-mail."
        ],
        realWorld: [
            "Empresas com requisitos de suporte por telefone/e-mail devem escolher planos superiores.",
            "O plano Básico é limitado ao suporte via portal.",
            "A escolha do plano impacta o SLA de resposta.",
            "Recomenda-se alinhar o plano de suporte à criticidade dos workloads."
        ]
    },
    {
        id: 47,
        title: "Azure CLI no PowerShell do Windows 10",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Você tem uma assinatura do Azure chamada Subscription1. Você entra no portal do Azure e cria um grupo de recursos chamado RG1. A partir da documentação do Azure, você tem o seguinte comando que cria uma máquina virtual chamada VM1: az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. Você precisa criar VM1 na Subscription1 usando o comando. Solução: A partir de um computador que executa o Windows 10, instale o Azure CLI. Do PowerShell, faça login no Azure e, em seguida, execute o comando. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A solução proposta não atende ao objetivo. Embora o Azure CLI possa ser instalado no Windows 10, o comando az vm create deve ser executado no prompt de comando ou no Azure Cloud Shell, não no PowerShell, a menos que o Azure CLI esteja disponível no PowerShell. O comando 'az' é do Azure CLI e não funciona nativamente no PowerShell sem a instalação adequada." },
            { correct: false, text: "Incorreta. O comando az vm create é do Azure CLI e não é executado nativamente no PowerShell sem a instalação adequada." }
        ],
        glossary: [
            "Azure CLI: interface de linha de comando para gerenciar recursos do Azure.",
            "PowerShell: linguagem de script e shell da Microsoft.",
            "az vm create: comando para criar uma máquina virtual no Azure.",
            "Resource Group (RG): contêiner lógico que agrupa recursos do Azure."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "O comando az vm create é do Azure CLI e não é executado nativamente no PowerShell.",
            "A solução proposta não atende ao objetivo.",
            "Para executar o comando, é necessário usar o prompt de comando ou o Azure Cloud Shell."
        ],
        realWorld: [
            "É importante usar a ferramenta correta para executar comandos do Azure.",
            "O Azure CLI pode ser executado no prompt de comando ou no Cloud Shell.",
            "O PowerShell tem seus próprios cmdlets para o Azure.",
            "A escolha da ferramenta impacta a automação e a eficiência."
        ]
    },
    {
        id: 48,
        title: "Portal do Azure e Cloud Shell no iPhone",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Você tem um aplicativo web do Azure. Você precisa gerenciar as configurações do aplicativo web a partir de um iPhone. Quais são duas ferramentas de gerenciamento do Azure que você pode usar? Cada resposta correta apresenta uma solução completa.",
        options: [
            { letter: "A", text: "Azure Storage Explorer", correct: false },
            { letter: "B", text: "O Portal do Azure", correct: true },
            { letter: "C", text: "Windows PowerShell", correct: false },
            { letter: "D", text: "Azure Cloud Shell", correct: true },
            { letter: "E", text: "Azure CLI", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure Storage Explorer é uma ferramenta para gerenciar dados de armazenamento, não configurações de aplicativos web." },
            { correct: true, text: "Correta. O Portal do Azure é uma interface baseada na web que permite gerenciar e configurar recursos do Azure, incluindo aplicativos web, a partir de um navegador no iPhone." },
            { correct: false, text: "Incorreta. O Windows PowerShell não é uma ferramenta disponível nativamente no iPhone." },
            { correct: true, text: "Correta. O Azure Cloud Shell é uma interface de linha de comando interativa baseada em navegador que permite acessar e gerenciar recursos do Azure a partir de um iPhone." },
            { correct: false, text: "Incorreta. O Azure CLI é uma ferramenta de linha de comando que não é executada nativamente no iPhone." }
        ],
        glossary: [
            "Portal do Azure: interface web para gerenciamento de recursos do Azure.",
            "Azure Cloud Shell: shell interativo baseado em navegador para gerenciar recursos do Azure.",
            "Azure Storage Explorer: ferramenta para gerenciar dados de armazenamento do Azure.",
            "Azure CLI: interface de linha de comando para gerenciar recursos do Azure."
        ],
        generalExplanation: [
            "As duas ferramentas são Portal do Azure e Azure Cloud Shell.",
            "Ambas podem ser acessadas por meio de um navegador no iPhone.",
            "Elas permitem gerenciar configurações de aplicativos web do Azure.",
            "Outras opções não são adequadas para uso em iPhone."
        ],
        realWorld: [
            "Administradores usam o Portal do Azure para gerenciamento visual.",
            "O Azure Cloud Shell é útil para comandos e automação em dispositivos móveis.",
            "Ambas as ferramentas oferecem flexibilidade para gerenciamento remoto.",
            "A escolha depende da preferência e da tarefa a ser realizada."
        ]
    },
    {
        id: 49,
        title: "Cada região do Azure tem vários datacenters",
        domain: "Conceitos de Nuvem",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Cada região do Azure tem vários datacenters?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Cada região do Azure é composta por vários datacenters." },
            { correct: true, text: "Correta. Cada região do Azure contém vários datacenters, garantindo alta disponibilidade e resiliência." }
        ],
        glossary: [
            "Região do Azure: área geográfica que contém datacenters.",
            "Datacenter: instalação física que hospeda recursos de nuvem.",
            "Zona de Disponibilidade: local fisicamente separado dentro de uma região.",
            "Alta disponibilidade: garantia de que o serviço permaneça acessível."
        ],
        generalExplanation: [
            "A resposta correta é Sim.",
            "Cada região do Azure tem vários datacenters.",
            "Isso garante alta disponibilidade e resiliência.",
            "Os datacenters são interconectados por uma rede de baixa latência."
        ],
        realWorld: [
            "Empresas usam múltiplos datacenters para garantir disponibilidade.",
            "A distribuição geográfica reduz riscos de falhas.",
            "Múltiplos datacenters oferecem opções de localização de dados.",
            "O design resiliente é essencial para cargas críticas."
        ]
    },
    {
        id: 50,
        title: "SLA de VMs garante tempo de atividade",
        domain: "Conceitos de Nuvem",
        prompt: "O que é garantido em um Contrato de Nível de Serviço Azure (SLA) para máquinas virtuais?",
        options: [
            { letter: "A", text: "largura de banda", correct: false },
            { letter: "B", text: "disponibilidade de recursos", correct: false },
            { letter: "C", text: "tempo de atividade", correct: true },
            { letter: "D", text: "desempenho", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Largura de banda não é o principal garantido no SLA de VMs." },
            { correct: false, text: "Incorreta. Disponibilidade de recursos é um conceito amplo, mas o SLA de VMs garante tempo de atividade." },
            { correct: true, text: "Correta. O SLA de VMs do Azure garante o tempo de atividade, estabelecendo a porcentagem mínima de tempo em que as VMs estarão em funcionamento e acessíveis." },
            { correct: false, text: "Incorreta. Desempenho não é o principal garantido no SLA de VMs." }
        ],
        glossary: [
            "SLA (Service Level Agreement): contrato de nível de serviço que define compromissos de disponibilidade e suporte.",
            "Tempo de atividade: porcentagem de tempo em que o serviço está disponível.",
            "Disponibilidade: capacidade do serviço de estar acessível quando necessário.",
            "Desempenho: tempo de resposta e capacidade de processamento."
        ],
        generalExplanation: [
            "A resposta correta é tempo de atividade.",
            "O SLA de VMs do Azure garante o tempo de atividade.",
            "Ele define a porcentagem mínima de tempo em que as VMs estarão em funcionamento.",
            "Caso o SLA não seja atendido, a Microsoft pode oferecer compensações."
        ],
        realWorld: [
            "Empresas usam o SLA para avaliar a confiabilidade do serviço.",
            "O SLA de VMs é um fator importante na escolha da plataforma.",
            "Compensações podem ser solicitadas em caso de descumprimento.",
            "É importante entender as condições do SLA."
        ]
    },
    {
        id: 51,
        title: "Plano Premier atende suporte por telefone/e-mail",
        domain: "Suporte e Custos",
        prompt: "Sua empresa planeja comprar uma assinatura do Azure. A política de suporte da empresa afirma que o ambiente Azure deve fornecer uma opção para acessar o suporte técnico por telefone ou e-mail. Você precisa recomendar qual plano de suporte atende ao requisito da política de suporte. Solução: Recomende um plano de suporte Premier. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O plano Premier oferece suporte técnico abrangente, incluindo acesso por telefone e e-mail, atendendo ao requisito." },
            { correct: false, text: "Incorreta. O plano Premier atende ao requisito de acesso por telefone e e-mail." }
        ],
        glossary: [
            "Plano Premier: plano de suporte avançado do Azure com acesso a especialistas e suporte 24/7.",
            "Suporte técnico: assistência para resolver problemas técnicos.",
            "SLA de suporte: compromissos de tempo de resposta conforme o plano contratado.",
            "Atendimento 24/7: disponibilidade de suporte todos os dias e horários."
        ],
        generalExplanation: [
            "A resposta correta é Sim.",
            "O plano Premier atende ao requisito de acesso ao suporte por telefone ou e-mail.",
            "Ele inclui suporte técnico 24/7 por telefone e e-mail.",
            "Oferece um nível elevado de suporte e disponibilidade."
        ],
        realWorld: [
            "Empresas com cargas críticas contratam Premier para obter suporte abrangente.",
            "O plano Premier inclui serviços de consultoria e orientação arquitetural.",
            "A escolha do plano impacta o SLA de resposta.",
            "Recomenda-se alinhar o plano de suporte à criticidade dos workloads."
        ]
    },
    {
        id: 52,
        title: "Responsabilidades eliminadas com VMs no Azure",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa tem uma rede local que contém vários servidores. A empresa planeja reduzir as seguintes responsabilidades administrativas dos administradores de rede: Backup de dados do aplicativo; Substituição do hardware do servidor com falha; Gerenciamento da segurança do servidor físico; Atualização dos sistemas operacionais do servidor; Gerenciamento de permissões para documentos compartilhados. A empresa planeja migrar vários servidores para máquinas virtuais do Azure. Você precisa identificar quais responsabilidades administrativas serão eliminadas após a migração planejada. Quais duas responsabilidades você deve identificar? Cada resposta correta apresenta uma solução completa.",
        options: [
            { letter: "A", text: "Gerenciamento de permissões para documentos compartilhados", correct: false },
            { letter: "B", text: "Substituição do hardware do servidor com falha", correct: true },
            { letter: "C", text: "Gerenciamento de segurança física do servidor", correct: true },
            { letter: "D", text: "Atualização dos sistemas operacionais do servidor", correct: false },
            { letter: "E", text: "Backup de dados do aplicativo", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O gerenciamento de permissões para documentos compartilhados continua sendo responsabilidade da empresa." },
            { correct: true, text: "Correta. A substituição do hardware do servidor com falha é uma responsabilidade da Microsoft no Azure, eliminando essa tarefa para a empresa." },
            { correct: true, text: "Correta. O gerenciamento da segurança física do servidor é responsabilidade da Microsoft no Azure, eliminando essa tarefa para a empresa." },
            { correct: false, text: "Incorreta. A atualização dos sistemas operacionais do servidor continua sendo responsabilidade da empresa em VMs IaaS." },
            { correct: false, text: "Incorreta. O backup de dados do aplicativo continua sendo responsabilidade da empresa." }
        ],
        glossary: [
            "IaaS (Infrastructure as a Service): modelo de nuvem que fornece infraestrutura virtualizada.",
            "Responsabilidade compartilhada: modelo que divide responsabilidades entre provedor e cliente.",
            "Hardware: componentes físicos do servidor.",
            "Segurança física: proteção dos datacenters contra acesso não autorizado."
        ],
        generalExplanation: [
            "As duas responsabilidades eliminadas são: substituição do hardware do servidor com falha e gerenciamento de segurança física do servidor.",
            "No Azure, a Microsoft é responsável pelo hardware e pela segurança física dos datacenters.",
            "A empresa continua responsável por sistema operacional, backup e permissões.",
            "O modelo de responsabilidade compartilhada define essas divisões."
        ],
        realWorld: [
            "Empresas que migram para IaaS transferem responsabilidades de hardware para o provedor.",
            "A segurança física e a manutenção de hardware são gerenciadas pela Microsoft.",
            "O cliente mantém responsabilidade sobre o sistema operacional e dados.",
            "Entender o modelo de responsabilidade compartilhada é essencial para a governança."
        ]
    },
    {
        id: 53,
        title: "Segmentação com múltiplas assinaturas e grupos de recursos",
        domain: "Governança e Conformidade",
        prompt: "Sua empresa planeja migrar para o Azure. A empresa tem vários departamentos. Todos os recursos do Azure usados por cada departamento serão gerenciados por um administrador de departamento. Quais são as duas técnicas possíveis para segmentar o Azure para os departamentos? Cada resposta correta apresenta uma solução completa.",
        options: [
            { letter: "A", text: "múltiplas assinaturas", correct: true },
            { letter: "B", text: "vários diretórios do Azure Active Directory (Azure AD)", correct: false },
            { letter: "C", text: "várias regiões", correct: false },
            { letter: "D", text: "vários grupos de recursos", correct: true }
        ],
        explanations: [
            { correct: true, text: "Correta. Múltiplas assinaturas permitem isolar recursos e cobrança por departamento, com administradores específicos." },
            { correct: false, text: "Incorreta. Vários diretórios do Azure AD não são uma técnica de segmentação de recursos do Azure." },
            { correct: false, text: "Incorreta. Várias regiões não segmentam recursos por departamento." },
            { correct: true, text: "Correta. Vários grupos de recursos permitem organizar e gerenciar recursos por departamento dentro de uma assinatura." }
        ],
        glossary: [
            "Assinatura do Azure: unidade de cobrança e gerenciamento que agrupa recursos.",
            "Grupo de recursos: contêiner lógico para organizar recursos do Azure.",
            "Azure AD (Azure Active Directory): serviço de identidade em nuvem da Microsoft.",
            "Região do Azure: área geográfica que contém datacenters."
        ],
        generalExplanation: [
            "As duas técnicas são múltiplas assinaturas e vários grupos de recursos.",
            "Múltiplas assinaturas permitem isolamento e cobrança por departamento.",
            "Vários grupos de recursos permitem organizar e gerenciar recursos por departamento.",
            "Ambas as técnicas fornecem segmentação e controle."
        ],
        realWorld: [
            "Empresas usam assinaturas separadas para controle financeiro por departamento.",
            "Grupos de recursos facilitam a organização e o gerenciamento de recursos.",
            "A combinação de ambas as técnicas oferece flexibilidade e governança.",
            "A escolha depende das necessidades de isolamento e controle."
        ]
    },
    {
        id: 54,
        title: "99,99% de disponibilidade com 2 VMs em 2 zonas",
        domain: "Conceitos de Nuvem",
        prompt: "Você planeja implantar um aplicativo de linha de negócios crítico para o Azure. O aplicativo será executado em uma máquina virtual do Azure. Você precisa recomendar uma solução de implantação para o aplicativo. A solução deve fornecer uma disponibilidade garantida de 99,99%. Qual é o número mínimo de máquinas virtuais e o número mínimo de zonas de disponibilidade que você deve recomendar para a implantação? Para responder, selecione as combinações apropriadas na área de resposta.",
        options: [
            { letter: "A", text: "No mínimo uma máquina virtual e duas zonas de disponibilidade.", correct: false },
            { letter: "B", text: "No mínimo uma máquina virtual e uma zona de disponibilidade", correct: false },
            { letter: "C", text: "Nenhuma das alternativas", correct: false },
            { letter: "D", text: "No mínimo duas máquinas virtuais e duas zonas de disponibilidade", correct: true },
            { letter: "E", text: "No mínimo duas máquinas virtuais e três zonas de disponibilidade.", correct: false },
            { letter: "F", text: "No mínimo uma máquina virtual e no mínimo tres zonas de disponibilidade", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Uma única VM não garante 99,99% de disponibilidade, mesmo com duas zonas." },
            { correct: false, text: "Incorreta. Uma única VM em uma zona não garante 99,99% de disponibilidade." },
            { correct: false, text: "Incorreta. Há uma combinação correta." },
            { correct: true, text: "Correta. Para atingir 99,99% de disponibilidade, é recomendável distribuir pelo menos duas VMs em duas zonas de disponibilidade, garantindo resiliência a falhas." },
            { correct: false, text: "Incorreta. Duas VMs em três zonas é mais do que o mínimo necessário." },
            { correct: false, text: "Incorreta. Uma única VM não garante 99,99% de disponibilidade." }
        ],
        glossary: [
            "Zona de Disponibilidade: local fisicamente separado dentro de uma região do Azure.",
            "SLA (Service Level Agreement): contrato de nível de serviço que define compromissos de disponibilidade.",
            "Alta disponibilidade: garantia de que o serviço permaneça acessível.",
            "Máquina virtual Azure: recurso de computação IaaS no Azure."
        ],
        generalExplanation: [
            "A resposta correta é: No mínimo duas máquinas virtuais e duas zonas de disponibilidade.",
            "Para atingir 99,99% de disponibilidade, é recomendável distribuir VMs em diferentes zonas de disponibilidade.",
            "Cada zona é um datacenter separado, garantindo resiliência a falhas.",
            "Pelo menos duas VMs em duas zonas permitem que o aplicativo continue funcionando se uma zona falhar."
        ],
        realWorld: [
            "Empresas usam zonas de disponibilidade para garantir alta disponibilidade.",
            "A distribuição de VMs entre zonas reduz riscos de falhas.",
            "O SLA de 99,99% é alcançado com redundância adequada.",
            "O design resiliente é essencial para cargas críticas."
        ]
    },
    {
        id: 55,
        title: "Plano Premier para revisão arquitetônica",
        domain: "Suporte e Custos",
        prompt: "Sua empresa planeja solicitar uma revisão arquitetônica de um ambiente Azure da Microsoft. A empresa atualmente tem um plano básico de suporte. Você precisa recomendar um novo plano de suporte para a empresa. A solução deve minimizar custos. Qual plano de suporte você deve recomendar?",
        options: [
            { letter: "A", text: "Premier", correct: true },
            { letter: "B", text: "Professional Direct", correct: false },
            { letter: "C", text: "Standard", correct: false },
            { letter: "D", text: "Developer", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O plano Premier oferece suporte avançado e serviços personalizados, incluindo revisão arquitetônica do ambiente Azure. Embora tenha custo inicial mais alto, pode minimizar custos a longo prazo." },
            { correct: false, text: "Incorreta. O Professional Direct não inclui revisão arquitetônica abrangente como o Premier." },
            { correct: false, text: "Incorreta. O Standard não inclui revisão arquitetônica." },
            { correct: false, text: "Incorreta. O Developer não inclui revisão arquitetônica." }
        ],
        glossary: [
            "Plano Premier: plano de suporte avançado do Azure com serviços personalizados e revisão arquitetônica.",
            "Professional Direct: plano de suporte com acesso a suporte técnico e orientação arquitetural.",
            "Standard: plano de suporte com acesso a suporte técnico por telefone e e-mail.",
            "Developer: plano de suporte para ambientes de desenvolvimento e teste."
        ],
        generalExplanation: [
            "A resposta correta é Premier.",
            "O plano Premier oferece revisão arquitetônica e suporte personalizado.",
            "Embora tenha custo inicial mais alto, pode minimizar custos a longo prazo.",
            "É a solução correta para obter suporte abrangente, incluindo revisão arquitetônica."
        ],
        realWorld: [
            "Empresas com ambientes complexos contratam Premier para revisão arquitetônica.",
            "O plano Premier inclui acesso a especialistas da Microsoft.",
            "A revisão arquitetônica ajuda a otimizar custos e desempenho.",
            "A escolha do plano impacta o nível de suporte e consultoria."
        ]
    },
    {
        id: 56,
        title: "NSGs para limitar conexões web-database",
        domain: "Redes",
        prompt: "Sua empresa planeja implantar vários servidores web e vários servidores de banco de dados para o Azure. Você precisa recomendar uma solução Azure para limitar os tipos de conexões dos servidores web aos servidores de banco de dados. O que você deve incluir na recomendação?",
        options: [
            { letter: "A", text: "um gateway de rede local", correct: false },
            { letter: "B", text: "grupos de segurança de rede (NSGs)", correct: true },
            { letter: "C", text: "um filtro de rota", correct: false },
            { letter: "D", text: "Azure Service Bus", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O gateway de rede local é usado para conectividade híbrida, não para limitar conexões entre servidores no Azure." },
            { correct: true, text: "Correta. Os Grupos de Segurança de Rede (NSGs) permitem controlar o tráfego de rede, limitando os tipos de conexões permitidas entre servidores web e de banco de dados." },
            { correct: false, text: "Incorreta. Filtros de rota controlam rotas de tráfego, não tipos de conexões." },
            { correct: false, text: "Incorreta. O Azure Service Bus é um serviço de mensageria, não para limitar conexões de rede." }
        ],
        glossary: [
            "NSG (Network Security Group): firewall de rede que controla tráfego de entrada e saída.",
            "Gateway de rede local: componente para conectividade híbrida.",
            "Filtro de rota: regra que controla rotas de tráfego.",
            "Azure Service Bus: serviço de mensageria para comunicação entre aplicações."
        ],
        generalExplanation: [
            "A resposta correta é grupos de segurança de rede (NSGs).",
            "Os NSGs permitem controlar o tráfego de rede entre servidores.",
            "Eles podem limitar os tipos de conexões permitidas.",
            "Isso ajuda a reforçar a segurança e restringir conexões conforme necessário."
        ],
        realWorld: [
            "Empresas usam NSGs para segmentar e proteger o tráfego entre camadas de aplicação.",
            "Regras de NSG podem permitir apenas portas específicas entre servidores web e de banco de dados.",
            "O controle de tráfego é essencial para a segurança em ambientes distribuídos.",
            "Os NSGs são uma prática comum em arquiteturas de nuvem seguras."
        ]
    },
    {
        id: 57,
        title: "Migrar para nuvem pública permite fechar datacenter",
        domain: "Conceitos de Nuvem",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Uma organização que hospeda sua infraestrutura em uma nuvem privada pode fechar seu data center. Instruções: Reveja o texto destacado. Se ele fizer a declaração correta, selecione 'Nenhuma alteração é necessária'. Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "em uma nuvem híbrida", correct: false },
            { letter: "B", text: "em um Host Hyper-V", correct: false },
            { letter: "C", text: "na nuvem pública", correct: true },
            { letter: "D", text: "Nenhuma mudança é necessária.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Nuvem híbrida ainda pode exigir datacenter local para recursos privados." },
            { correct: false, text: "Incorreta. Host Hyper-V é uma tecnologia de virtualização, não um modelo de nuvem." },
            { correct: true, text: "Correta. O texto está incorreto. A declaração correta seria: uma organização que hospeda sua infraestrutura na nuvem pública pode fechar seu datacenter, pois os recursos são gerenciados pelo provedor de nuvem." },
            { correct: false, text: "Incorreta. O texto está incorreto; a nuvem privada não permite fechar o datacenter." }
        ],
        glossary: [
            "Nuvem privada: infraestrutura de nuvem dedicada a uma organização.",
            "Nuvem pública: serviços de nuvem oferecidos por provedores externos.",
            "Datacenter: instalação física que hospeda recursos de nuvem.",
            "Host Hyper-V: tecnologia de virtualização da Microsoft."
        ],
        generalExplanation: [
            "A resposta correta é: na nuvem pública.",
            "O texto destacado está incorreto: uma organização que hospeda sua infraestrutura em nuvem privada não pode fechar seu datacenter.",
            "A declaração correta é que uma organização que hospeda sua infraestrutura na nuvem pública pode fechar seu datacenter.",
            "Isso porque os recursos são gerenciados pelo provedor de nuvem."
        ],
        realWorld: [
            "Empresas que migram para nuvem pública podem eliminar datacenters locais.",
            "A nuvem pública oferece escalabilidade e gerenciamento simplificado.",
            "A migração para nuvem pública pode reduzir custos operacionais.",
            "A escolha do modelo de nuvem impacta a infraestrutura e os custos."
        ]
    },
    {
        id: 58,
        title: "Azure Key Vault para criptografar credenciais",
        domain: "Segurança",
        prompt: "Sua empresa planeja automatizar a implantação de servidores para o Azure. Seu gerente está preocupado que você possa expor credenciais administrativas durante a implantação. Você precisa recomendar uma solução Azure que criptografe as credenciais administrativas durante a implantação. O que você deve incluir na recomendação?",
        options: [
            { letter: "A", text: "Proteção de informações do Azure", correct: false },
            { letter: "B", text: "Centro de Segurança do Azure", correct: false },
            { letter: "C", text: "Autenticação multifatorial do Azure (MFA)", correct: false },
            { letter: "D", text: "Cofre de Chaves Azure", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A Proteção de Informações do Azure é usada para classificar e proteger dados, não para criptografar credenciais durante a implantação." },
            { correct: false, text: "Incorreta. O Centro de Segurança do Azure fornece recomendações de segurança, mas não criptografa credenciais." },
            { correct: false, text: "Incorreta. A MFA adiciona uma camada de segurança à autenticação, mas não criptografa credenciais." },
            { correct: true, text: "Correta. O Cofre de Chaves Azure (Azure Key Vault) é um serviço de gerenciamento de chaves e segredos que permite armazenar e controlar o acesso a credenciais de forma segura e criptografada." }
        ],
        glossary: [
            "Azure Key Vault: serviço para armazenamento seguro de chaves, certificados e segredos.",
            "Credenciais administrativas: informações de acesso com privilégios elevados.",
            "Criptografia: processo de codificação de dados para protegê-los.",
            "MFA (Multi-Factor Authentication): autenticação com múltiplos fatores."
        ],
        generalExplanation: [
            "A resposta correta é Cofre de Chaves Azure.",
            "Ele permite armazenar e controlar o acesso a credenciais de forma segura.",
            "As credenciais são criptografadas e protegidas por políticas de acesso.",
            "Isso minimiza o risco de exposição durante a implantação."
        ],
        realWorld: [
            "Empresas usam Azure Key Vault para proteger segredos e credenciais.",
            "A integração com pipelines de implantação permite recuperar credenciais de forma segura.",
            "O Key Vault oferece auditoria e controle de acesso granular.",
            "É uma prática recomendada para segurança em ambientes de nuvem."
        ]
    },
    {
        id: 59,
        title: "Vantagem da nuvem pública: recursos compartilhados",
        domain: "Conceitos de Nuvem",
        prompt: "Você planeja migrar vários servidores de uma rede local para o Azure. Qual é a vantagem de usar um serviço de nuvem pública para os servidores em uma rede local?",
        options: [
            { letter: "A", text: "A nuvem pública é uma solução de crowd-sourcing que fornece às corporações a capacidade de aprimorar a nuvem.", correct: false },
            { letter: "B", text: "Todos os recursos públicos em nuvem podem ser acessados gratuitamente por todos os membros do público.", correct: false },
            { letter: "C", text: "A nuvem pública é propriedade do público, NÃO de uma corporação privada.", correct: false },
            { letter: "D", text: "A nuvem pública é uma entidade compartilhada por meio da qual várias corporações usam, cada uma, uma parte dos recursos da nuvem.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Crowd-sourcing não é uma característica da nuvem pública." },
            { correct: false, text: "Incorreta. Recursos de nuvem pública não são gratuitos para todos." },
            { correct: false, text: "Incorreta. A nuvem pública é operada por provedores privados, não pelo público." },
            { correct: true, text: "Correta. A nuvem pública é uma entidade compartilhada por várias corporações, cada uma usando uma parte dos recursos, o que oferece escalabilidade e eficiência." }
        ],
        glossary: [
            "Nuvem pública: serviços de nuvem oferecidos por provedores externos e compartilhados entre clientes.",
            "Recursos compartilhados: infraestrutura compartilhada entre múltiplos clientes.",
            "Escalabilidade: capacidade de ajustar recursos conforme a demanda.",
            "Eficiência: uso otimizado de recursos."
        ],
        generalExplanation: [
            "A resposta correta é: A nuvem pública é uma entidade compartilhada por várias corporações.",
            "Isso permite que cada corporação use uma parte dos recursos da nuvem.",
            "A abordagem oferece escalabilidade e eficiência.",
            "É uma vantagem da nuvem pública em relação à infraestrutura local."
        ],
        realWorld: [
            "Empresas usam nuvem pública para escalar recursos conforme a demanda.",
            "O compartilhamento de recursos reduz custos e aumenta a eficiência.",
            "A nuvem pública oferece flexibilidade e agilidade.",
            "É uma escolha comum para cargas de trabalho variáveis."
        ]
    },
    {
        id: 60,
        title: "Transferências entre regiões não são sempre gratuitas",
        domain: "Suporte e Custos",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. As transferências de dados entre os serviços do Azure localizados em diferentes regiões do Azure são sempre gratuitas?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. As transferências de dados entre regiões do Azure nem sempre são gratuitas." },
            { correct: true, text: "Correta. As transferências de dados entre regiões diferentes geralmente têm custos associados, que variam conforme o tipo de serviço e a quantidade de dados." }
        ],
        glossary: [
            "Transferência de dados: movimentação de dados entre serviços ou regiões.",
            "Região do Azure: área geográfica que contém datacenters.",
            "Custos de transferência: cobrança pelo tráfego de dados entre regiões.",
            "Calculadora de preços do Azure: ferramenta para estimar custos."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "As transferências de dados entre regiões do Azure nem sempre são gratuitas.",
            "Geralmente há custos associados, que variam conforme o serviço e a quantidade de dados.",
            "É importante consultar a documentação oficial e a calculadora de preços."
        ],
        realWorld: [
            "Empresas monitoram custos de transferência de dados entre regiões.",
            "O planejamento de arquitetura considera a localização dos dados.",
            "A calculadora de preços ajuda a estimar custos.",
            "A otimização de transferências pode reduzir gastos."
        ]
    },
    {
        id: 61,
        title: "Azure Machine Learning Studio para análise preditiva",
        domain: "Inteligência Artificial",
        prompt: "Sua empresa planeja implantar uma solução de Inteligência Artificial (IA) no Azure. O que a empresa deve usar para construir, testar e implantar soluções de análise preditiva?",
        options: [
            { letter: "A", text: "Azure Cosmos DB", correct: false },
            { letter: "B", text: "Azure Logic Apps", correct: false },
            { letter: "C", text: "Azure Batch", correct: false },
            { letter: "D", text: "Azure Machine Learning Studio", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Azure Cosmos DB é um banco de dados NoSQL, não uma plataforma de IA." },
            { correct: false, text: "Incorreta. Azure Logic Apps é um serviço de automação de fluxos de trabalho, não de IA." },
            { correct: false, text: "Incorreta. Azure Batch é um serviço de processamento em lote, não de IA." },
            { correct: true, text: "Correta. O Azure Machine Learning Studio é uma plataforma para construir, testar e implantar soluções de análise preditiva e IA." }
        ],
        glossary: [
            "Azure Machine Learning Studio: plataforma para desenvolvimento e implantação de modelos de machine learning.",
            "Análise preditiva: uso de dados para prever resultados futuros.",
            "IA (Inteligência Artificial): simulação de inteligência humana por máquinas.",
            "Modelo de machine learning: algoritmo treinado para fazer previsões."
        ],
        generalExplanation: [
            "A resposta correta é Azure Machine Learning Studio.",
            "Ele permite construir, testar e implantar soluções de análise preditiva.",
            "Oferece ferramentas para treinamento e implantação de modelos.",
            "É a plataforma de IA do Azure para machine learning."
        ],
        realWorld: [
            "Empresas usam Azure Machine Learning para prever demanda e detectar anomalias.",
            "A plataforma permite experimentação e implantação de modelos.",
            "É integrada com outros serviços do Azure.",
            "A escolha da plataforma impacta a eficiência do desenvolvimento de IA."
        ]
    },
    {
        id: 62,
        title: "Zonas de Disponibilidade não replicam entre regiões",
        domain: "Conceitos de Nuvem",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. As zonas de disponibilidade são usadas para replicar dados e aplicativos para várias regiões?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. As zonas de disponibilidade são uma oferta de alta disponibilidade dentro de uma única região do Azure. Para replicar dados e aplicativos para várias regiões, é necessário usar outros recursos, como replicação geográfica ou Azure Site Recovery." },
            { correct: false, text: "Incorreta. As zonas de disponibilidade não se estendem para várias regiões." }
        ],
        glossary: [
            "Zona de Disponibilidade: local fisicamente separado dentro de uma região do Azure.",
            "Região do Azure: área geográfica que contém datacenters.",
            "Replicação geográfica: replicação de dados entre regiões.",
            "Azure Site Recovery: serviço para recuperação de desastres entre regiões."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "As zonas de disponibilidade são usadas para alta disponibilidade dentro de uma única região.",
            "Para replicar entre regiões, é necessário usar outros recursos, como replicação geográfica.",
            "As zonas de disponibilidade não se estendem para várias regiões."
        ],
        realWorld: [
            "Empresas usam zonas de disponibilidade para alta disponibilidade dentro de uma região.",
            "Para recuperação de desastres entre regiões, usam replicação geográfica.",
            "O planejamento de resiliência considera ambos os níveis.",
            "A escolha depende dos requisitos de disponibilidade."
        ]
    },
    {
        id: 63,
        title: "Azure DDoS Protection para ataques e relatórios",
        domain: "Segurança",
        prompt: "Você precisa configurar uma solução Azure que atenda aos seguintes requisitos: Protege sites de ataques; Gera relatórios que contêm detalhes de tentativas de ataques. O que você deve incluir na solução?",
        options: [
            { letter: "A", text: "um grupo de segurança de rede (NSG)", correct: false },
            { letter: "B", text: "Proteção DDoS", correct: true },
            { letter: "C", text: "Proteção de informações do Azure", correct: false },
            { letter: "D", text: "Azure Firewall", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. NSGs controlam tráfego, mas não geram relatórios detalhados de ataques DDoS." },
            { correct: true, text: "Correta. A Proteção DDoS do Azure ajuda a mitigar ataques DDoS e fornece relatórios detalhados sobre tentativas de ataques." },
            { correct: false, text: "Incorreta. A Proteção de Informações do Azure classifica e protege dados, não protege contra ataques DDoS." },
            { correct: false, text: "Incorreta. O Azure Firewall controla tráfego, mas não é focado em relatórios de ataques DDoS." }
        ],
        glossary: [
            "DDoS (Distributed Denial of Service): ataque que sobrecarrega um serviço com tráfego malicioso.",
            "Azure DDoS Protection: serviço que mitiga ataques DDoS e fornece relatórios.",
            "NSG (Network Security Group): firewall de rede que controla tráfego.",
            "Azure Firewall: serviço de segurança de rede gerenciado."
        ],
        generalExplanation: [
            "A resposta correta é Proteção DDoS.",
            "Ela ajuda a mitigar ataques DDoS e proteger os recursos do Azure.",
            "Fornece relatórios detalhados sobre tentativas de ataques.",
            "Permite análise e monitoramento eficazes das ameaças."
        ],
        realWorld: [
            "Empresas usam Azure DDoS Protection para proteger sites e aplicações.",
            "Os relatórios ajudam a entender e responder a ataques.",
            "A proteção é essencial para serviços expostos à internet.",
            "A escolha da solução impacta a segurança e a disponibilidade."
        ]
    },
    {
        id: 64,
        title: "Replicação automática no Azure Storage não é padrão",
        domain: "Armazenamento",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Todos os dados copiados para uma conta de Armazenamento do Azure são copiados automaticamente para outro datacenter do Azure?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A replicação automática para outro datacenter não é um comportamento padrão para todas as contas de armazenamento." },
            { correct: true, text: "Correta. A replicação depende do nível de redundância escolhido (LRS, ZRS, GRS, RA-GRS). Nem todas as contas replicam automaticamente para outro datacenter." }
        ],
        glossary: [
            "LRS (Locally Redundant Storage): replicação dentro de um único datacenter.",
            "ZRS (Zone-Redundant Storage): replicação entre zonas de disponibilidade.",
            "GRS (Geo-Redundant Storage): replicação para uma região secundária.",
            "RA-GRS (Read-Access Geo-Redundant Storage): GRS com acesso de leitura à região secundária."
        ],
        generalExplanation: [
            "A resposta correta é Não.",
            "Os dados copiados para uma conta de Armazenamento do Azure não são automaticamente copiados para outro datacenter.",
            "A replicação depende do nível de redundância escolhido.",
            "É necessário configurar o nível de redundância adequado."
        ],
        realWorld: [
            "Empresas escolhem o nível de redundância com base em requisitos de durabilidade.",
            "GRS e RA-GRS oferecem replicação para uma região secundária.",
            "LRS replica apenas dentro de um datacenter.",
            "A escolha impacta custos e disponibilidade."
        ]
    },
    {
        id: 65,
        title: "Azure Functions para computação sem servidor",
        domain: "Compute",
        prompt: "Qual serviço fornece computação sem servidor no Azure?",
        options: [
            { letter: "A", text: "Azure storage account", correct: false },
            { letter: "B", text: "Azure Container Instances", correct: false },
            { letter: "C", text: "Maquinas Virtual Azure", correct: false },
            { letter: "D", text: "Azure Functions", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Azure Storage é um serviço de armazenamento, não de computação sem servidor." },
            { correct: false, text: "Incorreta. Azure Container Instances executa contêineres, mas não é um serviço de computação sem servidor no mesmo sentido do Azure Functions." },
            { correct: false, text: "Incorreta. Máquinas Virtuais Azure são IaaS, não computação sem servidor." },
            { correct: true, text: "Correta. O Azure Functions é um serviço de computação sem servidor baseado em eventos que permite executar código sem provisionar ou gerenciar servidores." }
        ],
        glossary: [
            "Azure Functions: serviço de computação sem servidor baseado em eventos.",
            "Computação sem servidor: modelo em que o provedor gerencia a infraestrutura automaticamente.",
            "Azure Container Instances: serviço para executar contêineres sem gerenciar servidores.",
            "Máquina virtual Azure: recurso de computação IaaS no Azure."
        ],
        generalExplanation: [
            "A resposta correta é Azure Functions.",
            "Ele fornece computação sem servidor no Azure.",
            "Permite executar código sem provisionar ou gerenciar servidores.",
            "É baseado em eventos e cobrado por consumo."
        ],
        realWorld: [
            "Empresas usam Azure Functions para processar eventos e APIs.",
            "O modelo sem servidor reduz a gestão de infraestrutura.",
            "É ideal para cargas de trabalho intermitentes.",
            "A escolha do serviço impacta custos e escalabilidade."
        ]
    }
]