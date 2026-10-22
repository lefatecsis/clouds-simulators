const originalQuestions = [
    {
        id: 1,
        title: "Modelos de serviço para App1 e App2 no Azure",
        domain: "Conceitos de nuvem",
        prompt: "Você planeja usar o Azure para hospedar dois aplicativos chamados App1 e App2. Os aplicativos devem atender aos seguintes requisitos: (1) Você deve ser capaz de modificar o código do App1. (2) O esforço administrativo para gerenciar o sistema operacional do App1 deve ser minimizado. (3) O App2 deve ser executado de forma interativa com o sistema operacional do servidor. Que tipo de serviço de nuvem você deve usar para cada aplicativo?",
        options: [
            { letter: "A", text: "App1: Software como Serviço (SaaS) / App2: Infraestrutura como Serviço (IaaS)", correct: false },
            { letter: "B", text: "App1: Plataforma como Serviço (PaaS) / App2: Plataforma como Serviço (PaaS)", correct: false },
            { letter: "C", text: "App1: Software como Serviço (SaaS) / App2: Software como Serviço (SaaS)", correct: false },
            { letter: "D", text: "App1: Plataforma como Serviço (PaaS) / App2: Infraestrutura como Serviço (IaaS)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O SaaS não permite modificar o código da aplicação, o que viola o requisito do App1." },
            { correct: false, text: "Incorreta. O App2 exige execução interativa com o sistema operacional do servidor, o que requer acesso direto ao SO, não fornecido pelo PaaS." },
            { correct: false, text: "Incorreta. O SaaS não atende a nenhum dos dois aplicativos: não permite modificar código (App1) nem acesso interativo ao SO (App2)." },
            { correct: true, text: "Correta. O App1 se beneficia do PaaS, que permite modificar o código e abstrai o gerenciamento do SO. O App2 exige acesso direto ao SO do servidor, o que é fornecido pelo IaaS." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo em que o provedor gerencia o SO, runtime e infraestrutura, permitindo ao cliente focar no código da aplicação.",
            "IaaS (Infrastructure as a Service): modelo que fornece máquinas virtuais completas, com controle total sobre o sistema operacional.",
            "SaaS (Software as a Service): software pronto fornecido pelo provedor, sem controle sobre o código ou o SO subjacente.",
            "Sistema operacional (SO): camada de software que gerencia hardware e fornece serviços às aplicações.",
            "Esforço administrativo: carga de trabalho para gerenciar, atualizar e manter a infraestrutura."
        ],
        generalExplanation: [
            "O <strong>App1</strong> precisa de controle sobre o código, mas com mínimo esforço administrativo do SO — características do <strong>PaaS</strong>.",
            "O <strong>App2</strong> exige execução interativa com o SO do servidor, o que requer acesso total ao SO — característica do <strong>IaaS</strong>.",
            "SaaS não atende nenhum dos dois requisitos.",
            "A combinação correta é <strong>App1: PaaS / App2: IaaS</strong>."
        ],
        realWorld: [
            "Aplicações web modernas usam <strong>App Service (PaaS)</strong> para desenvolvimento rápido sem gerenciar servidores.",
            "Aplicativos legados que precisam de acesso ao SO são migrados para <strong>VMs (IaaS)</strong> no Azure.",
            "Escolher o modelo correto reduz custos e esforço operacional, mantendo a flexibilidade necessária."
        ]
    },
    {
        id: 2,
        title: "Modelo de serviço para aplicativo com banco legado",
        domain: "Conceitos de nuvem",
        prompt: "Você tem um aplicativo de contabilidade chamado App1 que usa um banco de dados herdado. Você planeja mover App1 para a nuvem. Qual modelo de serviço você deve usar?",
        options: [
            { letter: "A", text: "Plataforma como Serviço (PaaS)", correct: false },
            { letter: "B", text: "Software como Serviço (SaaS)", correct: false },
            { letter: "C", text: "Infraestrutura como Serviço (IaaS)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O PaaS abstrai o SO e pode não suportar o banco de dados herdado em sua configuração original." },
            { correct: false, text: "Incorreta. O SaaS não permite controle sobre a aplicação ou o banco de dados legado." },
            { correct: true, text: "Correta. O IaaS oferece VMs completas, permitindo executar a aplicação e o banco de dados herdado quase sem alterações (lift-and-shift)." }
        ],
        glossary: [
            "Lift-and-shift: migração de aplicações para a nuvem com o mínimo de alterações.",
            "Banco de dados herdado: banco de dados legado, possivelmente antigo ou não suportado nativamente por PaaS.",
            "IaaS: modelo que fornece máquinas virtuais com controle total do SO.",
            "Migração: processo de mover cargas de trabalho para a nuvem."
        ],
        generalExplanation: [
            "O <strong>IaaS</strong> permite mover a aplicação e o banco legado sem grandes alterações.",
            "As VMs fornecem controle total, permitindo instalar e configurar o banco conforme necessário.",
            "PaaS e SaaS não oferecem a flexibilidade necessária para bancos herdados."
        ],
        realWorld: [
            "Muitas empresas migram aplicações legadas para <strong>VMs no Azure</strong> (lift-and-shift) antes de modernizá-las.",
            "Isso reduz riscos e permite planejar a modernização gradual para PaaS.",
            "É uma das estratégias mais comuns em migrações para a nuvem."
        ]
    },
    {
        id: 3,
        title: "Zonas de disponibilidade e VMs Windows Server",
        domain: "Arquitetura e serviços do Azure",
        prompt: "Somente máquinas virtuais que executam o Windows Server podem ser criadas em zonas de disponibilidade. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. As zonas de disponibilidade suportam VMs Linux e Windows Server." },
            { correct: true, text: "Correta. As zonas de disponibilidade oferecem suporte a máquinas virtuais Linux e Windows Server, não sendo restritas ao Windows." }
        ],
        glossary: [
            "Zona de disponibilidade: local físico separado dentro de uma região do Azure, com energia, rede e refrigeração independentes.",
            "VM Linux: máquina virtual que executa uma distribuição Linux.",
            "VM Windows Server: máquina virtual que executa o sistema operacional Windows Server."
        ],
        generalExplanation: [
            "As <strong>zonas de disponibilidade</strong> oferecem suporte a VMs <strong>Linux e Windows Server</strong>.",
            "A afirmação de que somente VMs Windows Server podem ser criadas é <strong>falsa</strong>."
        ],
        realWorld: [
            "Empresas executam cargas Linux e Windows em zonas de disponibilidade para alta disponibilidade.",
            "A escolha do SO depende da aplicação, não da zona de disponibilidade.",
            "A arquitetura de zonas é agnóstica ao sistema operacional."
        ]
    },
    {
        id: 4,
        title: "Responsabilidade ao implementar SaaS",
        domain: "Conceitos de nuvem",
        prompt: "Ao implementar uma solução de Software como Serviço (SaaS), você é responsável por _________.",
        options: [
            { letter: "A", text: "instalação da solução SaaS.", correct: false },
            { letter: "B", text: "definir regras de escalabilidade.", correct: false },
            { letter: "C", text: "configurar alta disponibilidade.", correct: false },
            { letter: "D", text: "configurar a solução SaaS.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A instalação é responsabilidade do provedor SaaS." },
            { correct: false, text: "Incorreta. Regras de escalabilidade são gerenciadas pelo provedor SaaS." },
            { correct: false, text: "Incorreta. Alta disponibilidade é garantida pelo provedor SaaS." },
            { correct: true, text: "Correta. No SaaS, o cliente é responsável apenas pela configuração da solução conforme suas necessidades." }
        ],
        glossary: [
            "SaaS: modelo em que o provedor gerencia toda a infraestrutura e o software, cabendo ao cliente apenas configurar e usar.",
            "Escalabilidade: capacidade de aumentar ou diminuir recursos automaticamente.",
            "Alta disponibilidade: garantia de que o serviço permaneça disponível mesmo em falhas."
        ],
        generalExplanation: [
            "No <strong>SaaS</strong>, o provedor gerencia instalação, escalabilidade e alta disponibilidade.",
            "O cliente é responsável apenas pela <strong>configuração da solução</strong> conforme seus requisitos.",
            "Isso reduz o esforço operacional do cliente."
        ],
        realWorld: [
            "Ao usar <strong>Microsoft 365</strong>, o cliente apenas configura usuários e políticas, sem se preocupar com servidores.",
            "O mesmo vale para <strong>Dynamics 365</strong> e outros SaaS.",
            "A responsabilidade do cliente é limitada à configuração e ao uso adequado."
        ]
    },
    {
        id: 5,
        title: "Distribuição geográfica no Azure",
        domain: "Conceitos de nuvem",
        prompt: "______________ permite que os recursos do Azure sejam implantados perto dos usuários.",
        options: [
            { letter: "A", text: "Elasticidade", correct: false },
            { letter: "B", text: "Escalabilidade", correct: false },
            { letter: "C", text: "Alta disponibilidade", correct: false },
            { letter: "D", text: "Distribuição geográfica", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Elasticidade refere-se ao ajuste automático de recursos." },
            { correct: false, text: "Incorreta. Escalabilidade refere-se ao aumento de capacidade." },
            { correct: false, text: "Incorreta. Alta disponibilidade refere-se à continuidade do serviço." },
            { correct: true, text: "Correta. A distribuição geográfica permite implantar recursos em datacenters regionais próximos aos usuários, melhorando o desempenho." }
        ],
        glossary: [
            "Distribuição geográfica: capacidade de implantar recursos em várias regiões do Azure.",
            "Região do Azure: área geográfica com datacenters interconectados.",
            "Latência: tempo de resposta entre cliente e servidor."
        ],
        generalExplanation: [
            "A <strong>distribuição geográfica</strong> permite implantar aplicativos e dados em regiões próximas aos usuários.",
            "Isso reduz latência e melhora a experiência do usuário.",
            "Elasticidade, escalabilidade e alta disponibilidade não estão relacionadas à localização geográfica."
        ],
        realWorld: [
            "Aplicações globais implantam recursos em múltiplas regiões do Azure para atender usuários locais com baixa latência.",
            "Isso melhora o desempenho e a conformidade com regulamentações locais.",
            "É uma prática essencial em arquiteturas globais."
        ]
    },
    {
        id: 6,
        title: "Mesclagem de assinaturas do Azure",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Duas assinaturas do Azure podem ser mescladas em uma única assinatura. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Não é possível mesclar assinaturas; apenas mover recursos entre elas." },
            { correct: true, text: "Correta. Não é possível mesclar duas assinaturas em uma. No entanto, é possível mover recursos entre assinaturas ou transferir a propriedade de uma assinatura." }
        ],
        glossary: [
            "Assinatura do Azure: unidade de cobrança e gerenciamento de recursos.",
            "Transferência de propriedade: mudança do proprietário de uma assinatura.",
            "Movimentação de recursos: processo de mover recursos entre assinaturas ou grupos de recursos."
        ],
        generalExplanation: [
            "As assinaturas do Azure <strong>não podem ser mescladas</strong>.",
            "É possível <strong>mover recursos</strong> de uma assinatura para outra.",
            "Também é possível transferir a propriedade e alterar o tipo de cobrança."
        ],
        realWorld: [
            "Empresas que adquirem outra empresa podem mover recursos para a assinatura da adquirida.",
            "Isso permite consolidar a gestão sem mesclar assinaturas.",
            "A movimentação de recursos é suportada pelo portal do Azure."
        ]
    },
    {
        id: 7,
        title: "Escalonamento automático e elasticidade",
        domain: "Conceitos de nuvem",
        prompt: "O escalonamento automático é um exemplo de _____________.",
        options: [
            { letter: "A", text: "distribuição geográfica.", correct: false },
            { letter: "B", text: "elasticidade.", correct: true },
            { letter: "C", text: "previsibilidade.", correct: false },
            { letter: "D", text: "agilidade.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Distribuição geográfica refere-se à localização dos recursos." },
            { correct: true, text: "Correta. O escalonamento automático é um exemplo de elasticidade, pois ajusta recursos conforme a demanda." },
            { correct: false, text: "Incorreta. Previsibilidade refere-se à capacidade de prever o comportamento do sistema." },
            { correct: false, text: "Incorreta. Agilidade refere-se à rapidez na entrega de soluções." }
        ],
        glossary: [
            "Elasticidade: capacidade de ajustar recursos automaticamente conforme a demanda.",
            "Escalonamento automático: ajuste automático do número de instâncias com base em métricas.",
            "Previsibilidade: capacidade de prever o comportamento do sistema."
        ],
        generalExplanation: [
            "O <strong>escalonamento automático</strong> ajusta a capacidade conforme a demanda, o que é a definição de <strong>elasticidade</strong>.",
            "Isso permite manter desempenho e reduzir custos.",
            "Não está relacionado a distribuição geográfica, previsibilidade ou agilidade."
        ],
        realWorld: [
            "Aplicações web usam <strong>VM Scale Sets</strong> para escalar automaticamente conforme a carga.",
            "Isso garante desempenho em picos e economia em períodos de baixa demanda.",
            "É uma prática essencial em arquiteturas elásticas."
        ]
    },
    {
        id: 8,
        title: "Zona de disponibilidade e falha de datacenter",
        domain: "Arquitetura e serviços do Azure",
        prompt: "Você precisa identificar o tipo de falha para a qual uma Zona de Disponibilidade do Azure pode ser usada para proteger o acesso aos serviços do Azure. O que você deve identificar?",
        options: [
            { letter: "A", text: "Uma falha no data center do Azure.", correct: true },
            { letter: "B", text: "Uma falha de armazenamento.", correct: false },
            { letter: "C", text: "Uma falha do servidor físico.", correct: false },
            { letter: "D", text: "Uma falha na região do Azure.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. As zonas de disponibilidade protegem contra falhas de datacenter dentro de uma região." },
            { correct: false, text: "Incorreta. Falhas de armazenamento são mitigadas por redundância, não por zonas de disponibilidade." },
            { correct: false, text: "Incorreta. Falhas de servidor físico são mitigadas por domínios de falha, não por zonas." },
            { correct: false, text: "Incorreta. Falhas de região são mitigadas por replicação entre regiões." }
        ],
        glossary: [
            "Zona de disponibilidade: local físico separado dentro de uma região.",
            "Domínio de falha: agrupamento lógico de recursos que compartilham o mesmo ponto de falha.",
            "Replicação entre regiões: cópia de dados entre regiões para recuperação de desastres."
        ],
        generalExplanation: [
            "As <strong>zonas de disponibilidade</strong> protegem contra <strong>falhas de datacenter</strong> dentro de uma região.",
            "Falhas de armazenamento e servidor físico são mitigadas por outros mecanismos.",
            "Falhas de região são mitigadas por replicação entre regiões."
        ],
        realWorld: [
            "Aplicações críticas são distribuídas em zonas de disponibilidade para resistir à falha de um datacenter.",
            "Isso garante continuidade mesmo em desastres localizados.",
            "É uma prática essencial em arquiteturas resilientes."
        ]
    },
    {
        id: 9,
        title: "Zonas de disponibilidade em todas as regiões",
        domain: "Arquitetura e serviços do Azure",
        prompt: "As zonas de disponibilidade podem ser implementadas em todas as regiões do Azure. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Nem todas as regiões do Azure suportam zonas de disponibilidade." },
            { correct: true, text: "Correta. Apenas regiões habilitadas oferecem zonas de disponibilidade." }
        ],
        glossary: [
            "Região habilitada: região do Azure que suporta zonas de disponibilidade.",
            "Zona de disponibilidade: local físico separado dentro de uma região."
        ],
        generalExplanation: [
            "Nem todas as regiões do Azure oferecem <strong>zonas de disponibilidade</strong>.",
            "É necessário verificar a disponibilidade por região.",
            "A afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Antes de projetar alta disponibilidade, verifique quais regiões suportam zonas.",
            "Isso evita surpresas no momento da implantação.",
            "A documentação do Azure lista as regiões habilitadas."
        ]
    },
    {
        id: 10,
        title: "Grupo de recursos e assinaturas",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Um grupo de recursos do Azure contém várias assinaturas do Azure. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Grupos de recursos não contêm assinaturas; o contrário é verdadeiro." },
            { correct: true, text: "Correta. As assinaturas contêm grupos de recursos, não o contrário." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico para recursos do Azure.",
            "Assinatura: unidade de cobrança e gerenciamento."
        ],
        generalExplanation: [
            "Os <strong>grupos de recursos</strong> são contêineres lógicos para recursos.",
            "As <strong>assinaturas</strong> contêm grupos de recursos.",
            "A afirmação está <strong>incorreta</strong>."
        ],
        realWorld: [
            "A hierarquia do Azure é: conta → assinatura → grupo de recursos → recursos.",
            "Entender essa hierarquia é essencial para governança.",
            "Grupos de recursos não contêm assinaturas."
        ]
    },
    {
        id: 11,
        title: "Assinatura e locatários do Azure AD",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Uma assinatura do Azure pode ser associada a vários locatários do Azure Active Directory (Azure AD). Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Uma assinatura só pode estar associada a um locatário do Azure AD." },
            { correct: true, text: "Correta. Uma assinatura do Azure só pode ser associada a um único locatário do Azure AD, embora um locatário possa ter várias assinaturas." }
        ],
        glossary: [
            "Azure AD: serviço de identidade da Microsoft.",
            "Locatário: instância dedicada do Azure AD.",
            "Assinatura: unidade de cobrança e gerenciamento."
        ],
        generalExplanation: [
            "Uma <strong>assinatura</strong> só pode estar associada a <strong>um locatário do Azure AD</strong>.",
            "Um locatário pode ter várias assinaturas.",
            "A afirmação está <strong>incorreta</strong>."
        ],
        realWorld: [
            "Empresas geralmente têm um locatário por organização, com várias assinaturas.",
            "Isso facilita a gestão de identidades e permissões.",
            "A associação única é uma regra do Azure AD."
        ]
    },
    {
        id: 12,
        title: "Nuvem híbrida",
        domain: "Conceitos de nuvem",
        prompt: "Um aplicativo Web do Azure que consulta um servidor Microsoft SQL local é um exemplo de nuvem _________.",
        options: [
            { letter: "A", text: "vários fornecedores.", correct: false },
            { letter: "B", text: "híbrida.", correct: true },
            { letter: "C", text: "privada.", correct: false },
            { letter: "D", text: "pública.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Multicloud envolve múltiplos provedores de nuvem." },
            { correct: true, text: "Correta. A nuvem híbrida combina recursos locais e de nuvem, como um app no Azure consultando um SQL local." },
            { correct: false, text: "Incorreta. Nuvem privada é dedicada a uma única organização." },
            { correct: false, text: "Incorreta. Nuvem pública é oferecida por provedores a qualquer cliente." }
        ],
        glossary: [
            "Nuvem híbrida: combinação de recursos locais e de nuvem.",
            "Multicloud: uso de múltiplos provedores de nuvem.",
            "Nuvem privada: infraestrutura dedicada a uma organização.",
            "Nuvem pública: infraestrutura compartilhada oferecida por provedores."
        ],
        generalExplanation: [
            "A <strong>nuvem híbrida</strong> combina recursos locais e de nuvem.",
            "Um app no Azure consultando um SQL local é um exemplo clássico.",
            "As outras opções não se aplicam a esse cenário."
        ],
        realWorld: [
            "Muitas empresas mantêm dados sensíveis locais e usam a nuvem para escalabilidade.",
            "Isso caracteriza uma arquitetura híbrida.",
            "É comum em setores regulados."
        ]
    },
    {
        id: 13,
        title: "Políticas do Azure para conformidade",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Os grupos de recursos fornecem às organizações a capacidade de gerenciar a conformidade dos recursos do Azure em várias assinaturas. (Avalie o texto sublinhado.)",
        options: [
            { letter: "A", text: "Nenhuma alteração é necessária.", correct: false },
            { letter: "B", text: "Grupo de gestão.", correct: false },
            { letter: "C", text: "Planos do Serviço de Aplicativo do Azure.", correct: false },
            { letter: "D", text: "Políticas do Azure.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Grupos de recursos não gerenciam conformidade entre assinaturas." },
            { correct: false, text: "Incorreta. Grupos de gestão organizam assinaturas, mas não gerenciam conformidade diretamente." },
            { correct: false, text: "Incorreta. Planos do Serviço de Aplicativo não gerenciam conformidade." },
            { correct: true, text: "Correta. As Políticas do Azure definem e aplicam regras de conformidade em recursos, inclusive entre assinaturas." }
        ],
        glossary: [
            "Azure Policy: serviço que cria, atribui e gerencia políticas para conformidade de recursos.",
            "Conformidade: aderência a normas e padrões.",
            "Grupo de gestão: estrutura hierárquica para organizar assinaturas."
        ],
        generalExplanation: [
            "As <strong>Políticas do Azure</strong> são o serviço correto para gerenciar conformidade entre assinaturas.",
            "Elas avaliam recursos quanto à conformidade e aplicam regras.",
            "Grupos de recursos e de gestão não têm essa função."
        ],
        realWorld: [
            "Empresas usam Azure Policy para garantir que recursos sigam padrões corporativos.",
            "Isso inclui restrições de SKU, localização e configurações.",
            "É uma prática essencial de governança."
        ]
    },
    {
        id: 14,
        title: "Alta disponibilidade",
        domain: "Conceitos de nuvem",
        prompt: "Qual benefício de computação em nuvem fornece acesso contínuo do usuário a um aplicativo baseado em nuvem com tempo de inatividade mínimo?",
        options: [
            { letter: "A", text: "Elasticidade.", correct: false },
            { letter: "B", text: "Alta disponibilidade.", correct: true },
            { letter: "C", text: "Agilidade.", correct: false },
            { letter: "D", text: "Escalabilidade.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Elasticidade ajusta recursos conforme demanda." },
            { correct: true, text: "Correta. Alta disponibilidade garante acesso contínuo com tempo de inatividade mínimo." },
            { correct: false, text: "Incorreta. Agilidade refere-se à rapidez na entrega." },
            { correct: false, text: "Incorreta. Escalabilidade refere-se ao aumento de capacidade." }
        ],
        glossary: [
            "Alta disponibilidade: garantia de acesso contínuo com downtime mínimo.",
            "Elasticidade: ajuste automático de recursos.",
            "Escalabilidade: capacidade de aumentar recursos.",
            "Agilidade: rapidez na entrega de soluções."
        ],
        generalExplanation: [
            "O benefício que garante <strong>acesso contínuo com mínimo downtime</strong> é a <strong>alta disponibilidade</strong>.",
            "Os outros benefícios tratam de ajuste de recursos ou rapidez.",
            "É um dos pilares da computação em nuvem."
        ],
        realWorld: [
            "Aplicações críticas usam múltiplas zonas e regiões para garantir alta disponibilidade.",
            "Isso minimiza o impacto de falhas.",
            "É essencial para SLA elevado."
        ]
    },
    {
        id: 15,
        title: "Gestão de assinatura por conta da Microsoft",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Cada assinatura do Azure pode ser gerenciada usando apenas uma conta da Microsoft. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Várias contas podem gerenciar a mesma assinatura via Azure AD." },
            { correct: true, text: "Correta. A gestão é feita por contas do Azure AD, e várias contas podem ser criadas e autorizadas." }
        ],
        glossary: [
            "Conta da Microsoft: conta pessoal ou corporativa da Microsoft.",
            "Azure AD: serviço de identidade da Microsoft.",
            "Assinatura: unidade de cobrança e gerenciamento."
        ],
        generalExplanation: [
            "A gestão de assinaturas é feita via <strong>Azure AD</strong>, permitindo múltiplas contas autorizadas.",
            "A afirmação é <strong>falsa</strong>.",
            "Várias contas podem gerenciar a mesma assinatura."
        ],
        realWorld: [
            "Equipes de TI usam contas do Azure AD para gerenciar assinaturas.",
            "Isso permite controle granular de permissões.",
            "A gestão única por conta da Microsoft não é uma regra."
        ]
    },
    {
        id: 16,
        title: "Zonas de disponibilidade e replicação entre regiões",
        domain: "Arquitetura e serviços do Azure",
        prompt: "As zonas de disponibilidade são usadas para replicar dados e aplicativos para várias regiões. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Zonas replicam dentro da mesma região." },
            { correct: true, text: "Correta. Zonas de disponibilidade replicam dados dentro da mesma região, não entre regiões." }
        ],
        glossary: [
            "Zona de disponibilidade: local físico separado dentro de uma região.",
            "Replicação entre regiões: cópia de dados entre regiões.",
            "Região: área geográfica com datacenters."
        ],
        generalExplanation: [
            "As <strong>zonas de disponibilidade</strong> replicam dados dentro da <strong>mesma região</strong>.",
            "Para replicação entre regiões, usa-se replicação geográfica.",
            "A afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Zonas protegem contra falhas de datacenter.",
            "Replicação entre regiões protege contra falhas regionais.",
            "Ambas são usadas em conjunto para alta disponibilidade."
        ]
    },
    {
        id: 17,
        title: "Modelo de nuvem híbrida",
        domain: "Conceitos de nuvem",
        prompt: "Qual modelo de computação em nuvem inclui recursos locais e baseados em nuvem?",
        options: [
            { letter: "A", text: "N.D.A.", correct: false },
            { letter: "B", text: "Híbrido.", correct: true },
            { letter: "C", text: "Público.", correct: false },
            { letter: "D", text: "Privado.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. N.D.A. não é um modelo de nuvem." },
            { correct: true, text: "Correta. O modelo híbrido combina recursos locais e de nuvem." },
            { correct: false, text: "Incorreta. Nuvem pública é apenas na nuvem." },
            { correct: false, text: "Incorreta. Nuvem privada é dedicada a uma organização." }
        ],
        glossary: [
            "Nuvem híbrida: combinação de recursos locais e de nuvem.",
            "Nuvem pública: infraestrutura compartilhada oferecida por provedores.",
            "Nuvem privada: infraestrutura dedicada a uma organização."
        ],
        generalExplanation: [
            "O modelo <strong>híbrido</strong> combina recursos locais e de nuvem.",
            "É o único que atende à descrição.",
            "Os demais modelos não incluem recursos locais."
        ],
        realWorld: [
            "Empresas com dados sensíveis mantêm parte local e parte na nuvem.",
            "Isso caracteriza uma arquitetura híbrida.",
            "É comum em setores regulados."
        ]
    },
    {
        id: 18,
        title: "Alta disponibilidade e experiência contínua",
        domain: "Conceitos de nuvem",
        prompt: "Forneça uma experiência de usuário contínua sem tempo de inatividade aparente. A frase refere-se a qual benefício de Cloud Computing?",
        options: [
            { letter: "A", text: "Alta disponibilidade.", correct: true },
            { letter: "B", text: "Tolerância ao erro.", correct: false },
            { letter: "C", text: "Distribuição geográfica.", correct: false },
            { letter: "D", text: "Escalabilidade.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Alta disponibilidade garante experiência contínua com downtime mínimo." },
            { correct: false, text: "Incorreta. Tolerância ao erro permite que o sistema continue funcionando em falhas, mas não é o mesmo que alta disponibilidade." },
            { correct: false, text: "Incorreta. Distribuição geográfica refere-se à localização dos recursos." },
            { correct: false, text: "Incorreta. Escalabilidade refere-se ao aumento de capacidade." }
        ],
        glossary: [
            "Alta disponibilidade: acesso contínuo com downtime mínimo.",
            "Tolerância ao erro: capacidade de continuar funcionando diante de falhas.",
            "Distribuição geográfica: implantação em várias regiões.",
            "Escalabilidade: capacidade de aumentar recursos."
        ],
        generalExplanation: [
            "A <strong>alta disponibilidade</strong> garante experiência contínua com mínimo downtime.",
            "Tolerância ao erro e distribuição geográfica contribuem, mas não são a definição.",
            "Escalabilidade trata de aumento de capacidade."
        ],
        realWorld: [
            "Sites de e-commerce dependem de alta disponibilidade para não perder vendas.",
            "Isso é garantido por redundância e balanceamento.",
            "É um dos pilares da nuvem."
        ]
    },
    {
        id: 19,
        title: "Zonas de disponibilidade em todas as regiões",
        domain: "Arquitetura e serviços do Azure",
        prompt: "Se você tiver recursos do Azure implantados em todas as regiões, poderá implementar zonas de disponibilidade em todas as regiões. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Nem todas as regiões suportam zonas de disponibilidade." },
            { correct: true, text: "Correta. Apenas regiões habilitadas suportam zonas de disponibilidade." }
        ],
        glossary: [
            "Zona de disponibilidade: local físico separado dentro de uma região.",
            "Região habilitada: região que suporta zonas."
        ],
        generalExplanation: [
            "Nem todas as regiões do Azure suportam <strong>zonas de disponibilidade</strong>.",
            "A afirmação é <strong>falsa</strong>.",
            "É necessário verificar por região."
        ],
        realWorld: [
            "Projetos de alta disponibilidade devem verificar o suporte por região.",
            "Isso evita falhas no planejamento.",
            "A documentação do Azure lista as regiões habilitadas."
        ]
    },
    {
        id: 20,
        title: "Múltiplas assinaturas por conta da Microsoft",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Uma única conta da Microsoft pode ser usada para gerenciar várias assinaturas do Azure. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Uma conta da Microsoft pode gerenciar várias assinaturas do Azure." },
            { correct: false, text: "Incorreta. É perfeitamente possível gerenciar várias assinaturas com uma única conta." }
        ],
        glossary: [
            "Conta da Microsoft: conta usada para acessar serviços da Microsoft.",
            "Assinatura: unidade de cobrança e gerenciamento."
        ],
        generalExplanation: [
            "Uma <strong>única conta</strong> pode gerenciar várias <strong>assinaturas</strong>.",
            "Isso é útil para separar ambientes ou isolar dados.",
            "A afirmação está <strong>correta</strong>."
        ],
        realWorld: [
            "Empresas criam várias assinaturas para separar ambientes e cobranças.",
            "Uma conta central pode gerenciar todas.",
            "Isso facilita a governança."
        ]
    },
    {
        id: 21,
        title: "Distribuição geográfica e experiência do usuário",
        domain: "Conceitos de nuvem",
        prompt: "Garanta que os usuários sempre tenham a melhor experiência implantando aplicativos em todas as regiões onde há usuários. A frase refere-se a qual benefício de Cloud Computing?",
        options: [
            { letter: "A", text: "Elasticidade.", correct: false },
            { letter: "B", text: "Alta disponibilidade.", correct: false },
            { letter: "C", text: "Escalabilidade.", correct: false },
            { letter: "D", text: "Distribuição geográfica.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Elasticidade ajusta recursos conforme demanda." },
            { correct: false, text: "Incorreta. Alta disponibilidade garante acesso contínuo." },
            { correct: false, text: "Incorreta. Escalabilidade refere-se ao aumento de capacidade." },
            { correct: true, text: "Correta. Distribuição geográfica permite implantar recursos próximos aos usuários, melhorando a experiência." }
        ],
        glossary: [
            "Distribuição geográfica: implantação em várias regiões.",
            "Latência: tempo de resposta entre cliente e servidor.",
            "Região do Azure: área geográfica com datacenters."
        ],
        generalExplanation: [
            "A <strong>distribuição geográfica</strong> permite implantar recursos próximos aos usuários.",
            "Isso reduz latência e melhora a experiência.",
            "As outras opções não tratam de localização."
        ],
        realWorld: [
            "Aplicações globais implantam recursos em várias regiões para atender usuários locais.",
            "Isso melhora desempenho e conformidade.",
            "É uma prática essencial em arquiteturas globais."
        ]
    },
    {
        id: 22,
        title: "Região única em grupo de recursos",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Todos os recursos do Azure implantados em um grupo de recursos devem usar a mesma região do Azure. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Recursos em um grupo podem estar em regiões diferentes." },
            { correct: true, text: "Correta. O grupo de recursos armazena metadados em uma região, mas os recursos podem estar em regiões diferentes." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico para recursos do Azure.",
            "Região do Azure: área geográfica com datacenters.",
            "Metadados: informações sobre os recursos."
        ],
        generalExplanation: [
            "Recursos em um <strong>grupo de recursos</strong> podem estar em <strong>regiões diferentes</strong>.",
            "O grupo armazena metadados em uma região específica.",
            "A afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Grupos de recursos são usados para agrupar recursos relacionados, independentemente da região.",
            "Isso facilita a gestão.",
            "A região do grupo afeta apenas os metadados."
        ]
    },
    {
        id: 23,
        title: "Expiração de assinatura e Azure AD",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Quando uma assinatura do Azure expira, o locatário do Azure Active Directory (Azure AD) associado é excluído automaticamente. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O locatário do Azure AD permanece mesmo após a expiração da assinatura." },
            { correct: true, text: "Correta. O locatário do Azure AD permanece no Azure e pode ser associado a outra assinatura." }
        ],
        glossary: [
            "Assinatura: unidade de cobrança e gerenciamento.",
            "Azure AD: serviço de identidade da Microsoft.",
            "Locatário: instância dedicada do Azure AD."
        ],
        generalExplanation: [
            "A expiração da <strong>assinatura</strong> não exclui o <strong>locatário do Azure AD</strong>.",
            "O locatário permanece e pode ser gerenciado por outra assinatura.",
            "A afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Empresas que cancelam assinaturas mantêm o diretório para gestão de identidades.",
            "Isso evita perda de dados de usuários e grupos.",
            "O locatário é um recurso persistente."
        ]
    },
    {
        id: 24,
        title: "Administradores de conta por assinatura",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Cada assinatura do Azure pode conter vários administradores de conta. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Só pode haver um administrador de conta por assinatura." },
            { correct: true, text: "Correta. Pode haver apenas um administrador de conta, embora existam administradores de serviço e coadministradores." }
        ],
        glossary: [
            "Administrador de conta: proprietário da assinatura.",
            "Administrador de serviço: gerencia serviços na assinatura.",
            "Coadministrador: auxilia na gestão da assinatura."
        ],
        generalExplanation: [
            "Cada assinatura tem apenas <strong>um administrador de conta</strong>.",
            "É possível ter administradores de serviço e coadministradores.",
            "A afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "O administrador de conta é o proprietário legal da assinatura.",
            "Outros papéis auxiliam na gestão.",
            "Isso garante clareza de responsabilidades."
        ]
    },
    {
        id: 25,
        title: "Permissões em grupo de recursos",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Se você atribuir permissões para um usuário gerenciar um grupo de recursos, o usuário poderá gerenciar todos os recursos do Azure nesse grupo de recursos. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Permissões no grupo de recursos são herdadas pelos recursos nele contidos." },
            { correct: false, text: "Incorreta. As permissões no grupo são herdadas pelos recursos." }
        ],
        glossary: [
            "Herança de permissões: permissões aplicadas a um escopo são herdadas pelos recursos filhos.",
            "RBAC: controle de acesso baseado em funções.",
            "Grupo de recursos: contêiner lógico para recursos."
        ],
        generalExplanation: [
            "Permissões atribuídas a um <strong>grupo de recursos</strong> são <strong>herdadas</strong> pelos recursos.",
            "Isso permite gestão centralizada.",
            "A afirmação está <strong>correta</strong>."
        ],
        realWorld: [
            "Equipes recebem permissão no grupo de recursos para gerenciar todos os recursos.",
            "Isso simplifica a administração.",
            "É uma prática comum de RBAC."
        ]
    },
    {
        id: 26,
        title: "Azure Site Recovery",
        domain: "Arquitetura e serviços do Azure",
        prompt: "O Azure Site Recovery fornece ___________ para máquinas virtuais.",
        options: [
            { letter: "A", text: "recuperação de desastres", correct: true },
            { letter: "B", text: "alta disponibilidade", correct: false },
            { letter: "C", text: "tolerância ao erro", correct: false },
            { letter: "D", text: "elasticidade", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Azure Site Recovery fornece recuperação de desastres para VMs, replicando-as para um local secundário." },
            { correct: false, text: "Incorreta. Alta disponibilidade é garantida por zonas e balanceamento." },
            { correct: false, text: "Incorreta. Tolerância ao erro é uma característica de sistemas distribuídos." },
            { correct: false, text: "Incorreta. Elasticidade refere-se ao ajuste de recursos." }
        ],
        glossary: [
            "Azure Site Recovery: serviço de recuperação de desastres para VMs.",
            "Recuperação de desastres: capacidade de restaurar serviços após desastres.",
            "Replicação: cópia de dados para local secundário."
        ],
        generalExplanation: [
            "O <strong>Azure Site Recovery</strong> é a solução de <strong>recuperação de desastres</strong> para VMs.",
            "Ele replica VMs para um local secundário.",
            "As outras opções não descrevem o serviço."
        ],
        realWorld: [
            "Empresas usam Site Recovery para garantir continuidade de negócios.",
            "Em caso de desastre, as VMs são restauradas no local secundário.",
            "É uma prática essencial de DR."
        ]
    },
    {
        id: 27,
        title: "Benefícios da computação em nuvem",
        domain: "Conceitos de nuvem",
        prompt: "Quais são os dois benefícios da computação em nuvem? Cada resposta correta apresenta uma solução completa. NOTA: Cada seleção correta vale um ponto.",
        options: [
            { letter: "A", text: "Permite o rápido provisionamento de recursos.", correct: true },
            { letter: "B", text: "Aumento da complexidade administrativa.", correct: false },
            { letter: "C", text: "Transfere despesas de capital (CapEx) para despesas operacionais (OpEx).", correct: true },
            { letter: "D", text: "Tem as mesmas opções de configuração do local.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A nuvem permite provisionar recursos rapidamente." },
            { correct: false, text: "Incorreta. A nuvem geralmente reduz a complexidade administrativa." },
            { correct: true, text: "Correta. A nuvem transfere CapEx para OpEx, com modelo pay-as-you-go." },
            { correct: false, text: "Incorreta. A nuvem oferece opções diferentes das locais." }
        ],
        glossary: [
            "CapEx: despesas de capital, investimentos de longo prazo.",
            "OpEx: despesas operacionais, custos contínuos.",
            "Pay-as-you-go: modelo de cobrança pelo uso."
        ],
        generalExplanation: [
            "Os benefícios incluem <strong>provisionamento rápido</strong> e <strong>transferência de CapEx para OpEx</strong>.",
            "A complexidade administrativa geralmente diminui.",
            "As opções de configuração são diferentes das locais."
        ],
        realWorld: [
            "Empresas reduzem custos iniciais ao migrar para a nuvem.",
            "Recursos são provisionados em minutos.",
            "Isso aumenta a agilidade e a eficiência."
        ]
    },
    {
        id: 28,
        title: "Serviço de arquivo para unidade de rede mapeada",
        domain: "Armazenamento no Azure",
        prompt: "Você planeja mapear uma unidade de rede de vários computadores que executam o Windows 10 para o armazenamento do Azure. Você precisa criar uma solução de armazenamento no Azure para a unidade mapeada planejada. O que você deve criar?",
        options: [
            { letter: "A", text: "Um banco de dados SQL do Azure.", correct: false },
            { letter: "B", text: "Um serviço Blob em uma conta de armazenamento.", correct: false },
            { letter: "C", text: "Um disco de dados de máquina virtual.", correct: false },
            { letter: "D", text: "Um serviço de arquivo em uma conta de armazenamento.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. SQL do Azure não é um serviço de arquivos." },
            { correct: false, text: "Incorreta. Blob não suporta mapeamento de unidade de rede." },
            { correct: false, text: "Incorreta. Discos de VM são anexados a VMs, não mapeados como unidade de rede." },
            { correct: true, text: "Correta. O serviço Azure Files permite mapear compartilhamentos de arquivo como unidades de rede." }
        ],
        glossary: [
            "Azure Files: serviço de compartilhamento de arquivos em nuvem.",
            "Blob: armazenamento de objetos.",
            "Unidade de rede mapeada: compartilhamento acessível como letra de unidade."
        ],
        generalExplanation: [
            "O <strong>Azure Files</strong> permite mapear compartilhamentos como unidades de rede.",
            "Blob, SQL e discos de VM não suportam esse cenário.",
            "É a solução correta para o requisito."
        ],
        realWorld: [
            "Empresas usam Azure Files para compartilhar arquivos entre máquinas Windows.",
            "Isso substitui servidores de arquivos locais.",
            "É uma prática comum em migrações."
        ]
    },
    {
        id: 29,
        title: "Zona de disponibilidade e localização física",
        domain: "Arquitetura e serviços do Azure",
        prompt: "Uma zona de disponibilidade no Azure tem locais fisicamente separados ______________.",
        options: [
            { letter: "A", text: "em várias regiões do Azure.", correct: false },
            { letter: "B", text: "em um único datacenter do Azure.", correct: false },
            { letter: "C", text: "em dois continentes.", correct: false },
            { letter: "D", text: "em uma única região do Azure.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Zonas estão dentro de uma região." },
            { correct: false, text: "Incorreta. Cada zona pode ter vários datacenters." },
            { correct: false, text: "Incorreta. Zonas não cruzam continentes." },
            { correct: true, text: "Correta. As zonas de disponibilidade são locais físicos separados dentro de uma única região do Azure." }
        ],
        glossary: [
            "Zona de disponibilidade: local físico separado dentro de uma região.",
            "Região: área geográfica com datacenters.",
            "Datacenter: instalação física com servidores."
        ],
        generalExplanation: [
            "As <strong>zonas de disponibilidade</strong> são locais fisicamente separados dentro de uma <strong>única região</strong>.",
            "Isso protege contra falhas de datacenter.",
            "As outras opções não descrevem zonas."
        ],
        realWorld: [
            "Cada região habilitada tem pelo menos três zonas.",
            "Isso garante resiliência dentro da região.",
            "É a base da alta disponibilidade regional."
        ]
    },
    {
        id: 30,
        title: "Notificação de manutenção da Microsoft",
        domain: "Monitoramento e ferramentas do Azure",
        prompt: "Você precisa ser notificado quando a Microsoft planeja realizar manutenção que pode afetar os recursos implantados em uma assinatura do Azure. O que você deve usar?",
        options: [
            { letter: "A", text: "Microsoft Trust Center.", correct: false },
            { letter: "B", text: "Serviço de Integridade do Azure.", correct: true },
            { letter: "C", text: "Azure Monitor.", correct: false },
            { letter: "D", text: "Azure Advisor.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Trust Center fornece informações de conformidade." },
            { correct: true, text: "Correta. O Azure Service Health notifica sobre manutenção planejada, interrupções e avisos de integridade." },
            { correct: false, text: "Incorreta. Azure Monitor coleta métricas e logs, mas não notifica manutenção planejada." },
            { correct: false, text: "Incorreta. Azure Advisor fornece recomendações de boas práticas." }
        ],
        glossary: [
            "Azure Service Health: serviço que fornece visão personalizada da integridade dos serviços e regiões.",
            "Azure Monitor: serviço de monitoramento de métricas e logs.",
            "Azure Advisor: serviço de recomendações personalizadas."
        ],
        generalExplanation: [
            "O <strong>Azure Service Health</strong> notifica sobre manutenção planejada e interrupções.",
            "É a ferramenta correta para o requisito.",
            "As outras opções não atendem."
        ],
        realWorld: [
            "Equipes de operações usam Service Health para se preparar para manutenções.",
            "Isso evita surpresas e permite planejamento.",
            "É uma prática essencial de monitoramento."
        ]
    },
    {
        id: 31,
        title: "Armazenamento de discos não gerenciados",
        domain: "Armazenamento no Azure",
        prompt: "Você planeja criar uma máquina virtual do Azure. Você precisa identificar qual serviço de armazenamento deve ser usado para armazenar os discos de dados não gerenciados da máquina virtual. O que você deve identificar?",
        options: [
            { letter: "A", text: "Containers.", correct: true },
            { letter: "B", text: "Compartilhamento de arquivo.", correct: false },
            { letter: "C", text: "Filas.", correct: false },
            { letter: "D", text: "Tabelas.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Discos não gerenciados são armazenados como blobs de página em containers de uma conta de armazenamento." },
            { correct: false, text: "Incorreta. Compartilhamentos de arquivo são para Azure Files." },
            { correct: false, text: "Incorreta. Filas são para mensagens." },
            { correct: false, text: "Incorreta. Tabelas são para dados NoSQL." }
        ],
        glossary: [
            "Disco não gerenciado: disco armazenado como blob de página em uma conta de armazenamento.",
            "Blob de página: tipo de blob otimizado para discos de VM.",
            "Container: agrupamento lógico de blobs."
        ],
        generalExplanation: [
            "Discos <strong>não gerenciados</strong> são armazenados como <strong>blobs de página</strong> em containers.",
            "As outras opções não armazenam discos de VM.",
            "É a resposta correta."
        ],
        realWorld: [
            "Discos gerenciados são recomendados atualmente.",
            "Discos não gerenciados ainda são usados em cenários legados.",
            "Entender a diferença é importante."
        ]
    },
    {
        id: 32,
        title: "Alteração de locatário do Azure AD em assinatura",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Você pode alterar o locatário do Azure Active Directory (Azure AD) ao qual uma assinatura do Azure está associada. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. É possível alterar o locatário associado à assinatura." },
            { correct: true, text: "Correta. É possível transferir a assinatura para outro locatário do Azure AD." }
        ],
        glossary: [
            "Locatário do Azure AD: instância dedicada do Azure AD.",
            "Transferência de assinatura: mudança do locatário associado.",
            "Assinatura: unidade de cobrança e gerenciamento."
        ],
        generalExplanation: [
            "É possível <strong>alterar o locatário</strong> associado a uma assinatura.",
            "Isso é feito por transferência de propriedade.",
            "A afirmação está <strong>correta</strong>."
        ],
        realWorld: [
            "Empresas que passam por fusões podem transferir assinaturas entre locatários.",
            "Isso mantém a gestão de identidades alinhada.",
            "É um processo suportado pelo Azure."
        ]
    },
    {
        id: 33,
        title: "Camada de acesso Arquivo no Azure Storage",
        domain: "Armazenamento no Azure",
        prompt: "Dados armazenados na camada de acesso de Arquivo de uma conta de armazenamento do Azure ____________.",
        options: [
            { letter: "A", text: "devem ser restaurados antes que os dados possam ser acessados.", correct: false },
            { letter: "B", text: "devem ser reidratados antes que os dados possam ser acessados.", correct: true },
            { letter: "C", text: "pode ser acessado a qualquer momento usando azcopy.exe.", correct: false },
            { letter: "D", text: "só pode ser lido usando o Backup do Azure.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O termo correto é reidratação." },
            { correct: true, text: "Correta. Dados na camada Arquivo ficam offline e precisam ser reidratados antes de serem acessados." },
            { correct: false, text: "Incorreta. Não é possível acessar diretamente sem reidratar." },
            { correct: false, text: "Incorreta. Backup não é o único meio de acesso." }
        ],
        glossary: [
            "Camada Arquivo: camada de armazenamento de baixo custo para dados raramente acessados.",
            "Reidratação: processo de mover dados da camada Arquivo para uma camada online.",
            "AzCopy: ferramenta de linha de comando para transferência de dados."
        ],
        generalExplanation: [
            "Dados na camada <strong>Arquivo</strong> ficam offline e precisam ser <strong>reidratados</strong>.",
            "O processo pode levar horas.",
            "As outras opções não descrevem o comportamento."
        ],
        realWorld: [
            "A camada Arquivo é usada para backups de longo prazo.",
            "O acesso requer reidratação.",
            "É uma prática de otimização de custos."
        ]
    },
    {
        id: 34,
        title: "Escalabilidade",
        domain: "Conceitos de nuvem",
        prompt: "Aumente a capacidade de computação de aplicativos na nuvem. A frase refere-se a qual benefício de Cloud Computing?",
        options: [
            { letter: "A", text: "Alta disponibilidade.", correct: false },
            { letter: "B", text: "Escalabilidade.", correct: true },
            { letter: "C", text: "Distribuição geográfica", correct: false },
            { letter: "D", text: "Tolerância ao erro.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Alta disponibilidade garante acesso contínuo." },
            { correct: true, text: "Correta. Escalabilidade é a capacidade de aumentar a capacidade de computação." },
            { correct: false, text: "Incorreta. Distribuição geográfica refere-se à localização." },
            { correct: false, text: "Incorreta. Tolerância ao erro é a capacidade de continuar funcionando em falhas." }
        ],
        glossary: [
            "Escalabilidade: capacidade de aumentar recursos.",
            "Alta disponibilidade: acesso contínuo.",
            "Tolerância ao erro: continuidade em falhas."
        ],
        generalExplanation: [
            "A <strong>escalabilidade</strong> permite aumentar a capacidade de computação.",
            "É a definição do benefício descrito.",
            "As outras opções não se aplicam."
        ],
        realWorld: [
            "Aplicações escalam horizontalmente adicionando instâncias.",
            "Isso mantém desempenho em picos.",
            "É um dos pilares da nuvem."
        ]
    },
    {
        id: 35,
        title: "Limites de conta de armazenamento do Azure",
        domain: "Armazenamento no Azure",
        prompt: "Uma conta de armazenamento do Azure pode conter até 2 TB de dados e até um milhão de arquivos. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Os limites são muito maiores." },
            { correct: true, text: "Correta. Os limites atuais são de até 5 PB por conta de armazenamento, sem limite de número de arquivos." }
        ],
        glossary: [
            "Conta de armazenamento: recurso que agrupa serviços de armazenamento.",
            "PB (Petabyte): unidade de armazenamento equivalente a 1.024 TB."
        ],
        generalExplanation: [
            "Os limites de uma <strong>conta de armazenamento</strong> são muito superiores a 2 TB.",
            "Atualmente, o limite é de até <strong>5 PB</strong> por conta.",
            "A afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Empresas armazenam grandes volumes de dados no Azure Storage.",
            "Os limites atuais atendem a cargas massivas.",
            "É importante conhecer os limites para planejamento."
        ]
    },
    {
        id: 36,
        title: "SQL Server gerenciado na nuvem",
        domain: "Conceitos de nuvem",
        prompt: "Um banco de dados do Microsoft SQL Server hospedado na nuvem e com atualizações de software gerenciadas pelo Azure é um exemplo de _________________.",
        options: [
            { letter: "A", text: "software como serviço (SaaS).", correct: false },
            { letter: "B", text: "infraestrutura como serviço (IaaS).", correct: false },
            { letter: "C", text: "plataforma como serviço (PaaS).", correct: true },
            { letter: "D", text: "recuperação de desastres como serviço (DRaaS).", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. SaaS é software pronto para o usuário final." },
            { correct: false, text: "Incorreta. IaaS fornece VMs com controle total do SO." },
            { correct: true, text: "Correta. O Azure SQL Database é um exemplo de PaaS, com atualizações gerenciadas pelo Azure." },
            { correct: false, text: "Incorreta. DRaaS é focado em recuperação de desastres." }
        ],
        glossary: [
            "PaaS: modelo em que o provedor gerencia o SO e o runtime.",
            "Azure SQL Database: serviço de banco de dados gerenciado.",
            "SaaS: software pronto para uso.",
            "IaaS: infraestrutura como serviço."
        ],
        generalExplanation: [
            "O <strong>Azure SQL Database</strong> é um exemplo de <strong>PaaS</strong>.",
            "O Azure gerencia atualizações e o SO subjacente.",
            "As outras opções não descrevem o cenário."
        ],
        realWorld: [
            "Empresas usam Azure SQL Database para reduzir esforço operacional.",
            "O Azure cuida de backups, atualizações e alta disponibilidade.",
            "É uma prática comum em migrações."
        ]
    },
    {
        id: 37,
        title: "Local network gateway no Azure",
        domain: "Redes no Azure",
        prompt: "Você planeja estender a rede da sua empresa para o Azure. A rede contém um dispositivo VPN que usa um endereço IP de 131.107.200.1. Você precisa criar um recurso do Azure que defina o dispositivo VPN no Azure. Qual recurso do Azure você deve criar?",
        options: [
            { letter: "A", text: "Virtual network gateways.", correct: false },
            { letter: "B", text: "On-premises Data Gateways.", correct: false },
            { letter: "C", text: "NAT gateways.", correct: false },
            { letter: "D", text: "Local network gateways.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Virtual network gateway é o lado do Azure." },
            { correct: false, text: "Incorreta. On-premises Data Gateway é usado para Power BI e outros serviços." },
            { correct: false, text: "Incorreta. NAT gateway é para tradução de endereços." },
            { correct: true, text: "Correta. O Local network gateway representa o dispositivo VPN local no Azure, incluindo o endereço IP." }
        ],
        glossary: [
            "Local network gateway: recurso que representa o dispositivo VPN local no Azure.",
            "Virtual network gateway: gateway VPN do lado do Azure.",
            "NAT gateway: serviço de tradução de endereços de rede."
        ],
        generalExplanation: [
            "O <strong>Local network gateway</strong> representa o dispositivo VPN local no Azure.",
            "Ele inclui o endereço IP do dispositivo e os prefixos de rede local.",
            "As outras opções não atendem ao requisito."
        ],
        realWorld: [
            "Configurar um Local network gateway é essencial para VPN site-to-site.",
            "Ele permite que o Azure se conecte à rede local.",
            "É uma prática comum em arquiteturas híbridas."
        ]
    },
    {
        id: 38,
        title: "Zonas de disponibilidade e replicação entre regiões",
        domain: "Arquitetura e serviços do Azure",
        prompt: "As zonas de disponibilidade são usadas para replicar dados e aplicativos para várias regiões. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Zonas replicam dentro da mesma região." },
            { correct: true, text: "Correta. Zonas replicam dentro da mesma região, não entre regiões." }
        ],
        glossary: [
            "Zona de disponibilidade: local físico separado dentro de uma região.",
            "Replicação entre regiões: cópia de dados entre regiões."
        ],
        generalExplanation: [
            "As <strong>zonas de disponibilidade</strong> replicam dentro da <strong>mesma região</strong>.",
            "Replicação entre regiões é feita por outros mecanismos.",
            "A afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Zonas protegem contra falhas de datacenter.",
            "Replicação entre regiões protege contra falhas regionais.",
            "Ambas são usadas em conjunto."
        ]
    },
    {
        id: 39,
        title: "Conjuntos de dimensionamento e falha de datacenter",
        domain: "Arquitetura e serviços do Azure",
        prompt: "Você planeja implantar várias máquinas virtuais do Azure. Você precisa garantir que os serviços em execução nas máquinas virtuais estejam disponíveis se um único data center falhar. Solução: você implanta as máquinas virtuais em dois ou mais conjuntos de dimensionamento. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Conjuntos de dimensionamento podem estar no mesmo datacenter." },
            { correct: true, text: "Correta. A solução não garante distribuição entre datacenters; para isso, é necessário usar zonas de disponibilidade." }
        ],
        glossary: [
            "Conjunto de dimensionamento: grupo de VMs gerenciadas automaticamente.",
            "Zona de disponibilidade: local físico separado dentro de uma região.",
            "Domínio de falha: agrupamento lógico de recursos."
        ],
        generalExplanation: [
            "Conjuntos de dimensionamento <strong>não garantem</strong> distribuição entre datacenters.",
            "Para proteção contra falha de datacenter, use <strong>zonas de disponibilidade</strong>.",
            "A solução <strong>não atende</strong> ao objetivo."
        ],
        realWorld: [
            "Zonas de disponibilidade são a solução correta para proteção contra falha de datacenter.",
            "Conjuntos de dimensionamento sozinhos não garantem isso.",
            "É importante entender a diferença."
        ]
    },
    {
        id: 40,
        title: "Aumento de limites de assinatura",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Você tenta criar várias instâncias gerenciadas do Microsoft SQL Server em um ambiente do Azure e recebe uma mensagem informando que deve aumentar seus limites de assinatura do Azure. O que você deve fazer para aumentar os limites?",
        options: [
            { letter: "A", text: "Criar um alerta de integridade do serviço.", correct: false },
            { letter: "B", text: "Atualizar seu plano de suporte.", correct: false },
            { letter: "C", text: "Criar uma nova solicitação de suporte.", correct: true },
            { letter: "D", text: "Modificar uma política do Azure.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Alertas de integridade não aumentam limites." },
            { correct: false, text: "Incorreta. Plano de suporte não afeta limites de cota." },
            { correct: true, text: "Correta. Para aumentar limites de cota, é necessário abrir uma solicitação de suporte." },
            { correct: false, text: "Incorreta. Políticas do Azure não aumentam cotas." }
        ],
        glossary: [
            "Cota: limite de recursos por assinatura.",
            "Solicitação de suporte: pedido formal à Microsoft.",
            "Política do Azure: regras de conformidade."
        ],
        generalExplanation: [
            "Para aumentar <strong>limites de cota</strong>, é necessário abrir uma <strong>solicitação de suporte</strong>.",
            "As outras opções não afetam cotas.",
            "É uma prática comum no Azure."
        ],
        realWorld: [
            "Empresas frequentemente solicitam aumento de cota para cargas maiores.",
            "O processo é feito pelo portal do Azure.",
            "É importante planejar com antecedência."
        ]
    },
    {
        id: 41,
        title: "Conectividade padrão entre VNets",
        domain: "Redes no Azure",
        prompt: "As redes virtuais do Azure implantadas na mesma região do Azure são conectadas por padrão. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. VNets não são conectadas por padrão." },
            { correct: true, text: "Correta. É necessário configurar emparelhamento (peering) ou outra conexão." }
        ],
        glossary: [
            "VNet: rede virtual do Azure.",
            "Peering: conexão entre VNets.",
            "Emparelhamento global: peering entre regiões."
        ],
        generalExplanation: [
            "VNets na mesma região <strong>não são conectadas por padrão</strong>.",
            "É necessário configurar <strong>peering</strong> ou outra conexão.",
            "A afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Empresas configuram peering para conectar VNets.",
            "Isso permite comunicação segura.",
            "É uma prática comum em arquiteturas de rede."
        ]
    },
    {
        id: 42,
        title: "Exclusividade de espaço de endereço de VNet",
        domain: "Redes no Azure",
        prompt: "O espaço de endereço da rede virtual do Azure deve ser exclusivo em uma assinatura. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O espaço de endereço deve ser exclusivo." },
            { correct: true, text: "Correta. O espaço de endereço VNet não deve se sobrepor a outros intervalos de rede da organização." }
        ],
        glossary: [
            "Espaço de endereço: intervalo CIDR da VNet.",
            "CIDR: notação de endereçamento IP.",
            "Sobreposição: conflito entre intervalos de rede."
        ],
        generalExplanation: [
            "O <strong>espaço de endereço</strong> da VNet deve ser <strong>exclusivo</strong>.",
            "Isso evita conflitos de roteamento.",
            "A afirmação está <strong>correta</strong>."
        ],
        realWorld: [
            "Empresas planejam espaços de endereço para evitar sobreposição.",
            "Isso é essencial em arquiteturas híbridas.",
            "É uma prática de design de rede."
        ]
    },
    {
        id: 43,
        title: "Segmentação de rede para FinServer",
        domain: "Redes no Azure",
        prompt: "Sua empresa planeja mover vários servidores para o Azure. A política de conformidade afirma que um servidor chamado FinServer deve estar em um segmento de rede separado. Qual solução do Azure você deve recomendar?",
        options: [
            { letter: "A", text: "Um grupo de recursos para FinServer e outro grupo de recursos para todos os outros servidores.", correct: false },
            { letter: "B", text: "Uma VPN para FinServer e um gateway de rede virtual para cada outro servidor.", correct: false },
            { letter: "C", text: "Um grupo de recursos para todos os servidores e um bloqueio de recursos para o FinServer.", correct: false },
            { letter: "D", text: "Uma rede virtual para FinServer e outra rede virtual para todos os outros servidores.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Grupos de recursos não segmentam rede." },
            { correct: false, text: "Incorreta. VPN não é segmentação de rede." },
            { correct: false, text: "Incorreta. Bloqueios não segmentam rede." },
            { correct: true, text: "Correta. Redes virtuais separadas garantem segmentação de rede." }
        ],
        glossary: [
            "Segmento de rede: subdivisão isolada da rede.",
            "VNet: rede virtual do Azure.",
            "Bloqueio de recurso: impede alterações ou exclusões."
        ],
        generalExplanation: [
            "Para <strong>segmentar</strong> o FinServer, é necessário usar <strong>redes virtuais separadas</strong>.",
            "Grupos de recursos e bloqueios não segmentam rede.",
            "A solução correta é a D."
        ],
        realWorld: [
            "Empresas usam VNets separadas para isolar cargas sensíveis.",
            "Isso atende a requisitos de conformidade.",
            "É uma prática comum de segurança."
        ]
    },
    {
        id: 44,
        title: "Cópias automáticas de dados no Azure Storage",
        domain: "Armazenamento no Azure",
        prompt: "Os dados armazenados em uma conta de armazenamento do Azure têm automaticamente pelo menos três cópias. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Por padrão (LRS), os dados são replicados três vezes na região primária." },
            { correct: false, text: "Incorreta. A replicação mínima é de três cópias." }
        ],
        glossary: [
            "LRS: Locally Redundant Storage, replicação local.",
            "GRS: Geo-Redundant Storage, replicação geográfica.",
            "Replicação: cópia de dados para redundância."
        ],
        generalExplanation: [
            "Por padrão, os dados são replicados <strong>três vezes</strong> na região primária (LRS).",
            "Opções como GRS replicam também para outra região.",
            "A afirmação está <strong>correta</strong>."
        ],
        realWorld: [
            "A replicação garante durabilidade dos dados.",
            "Empresas escolhem a opção conforme requisitos de resiliência.",
            "É uma prática essencial de armazenamento."
        ]
    },
    {
        id: 45,
        title: "SLA de 99,99% com VMs e zonas",
        domain: "Arquitetura e serviços do Azure",
        prompt: "Você planeja implantar um aplicativo crítico de linha de negócios no Azure. O aplicativo será executado em uma máquina virtual do Azure. Você precisa recomendar uma solução de implantação para o aplicativo. A solução deve fornecer uma disponibilidade garantida de 99,99 por cento. Qual é o número mínimo de máquinas virtuais e o número mínimo de zonas de disponibilidade que você deve recomendar para a implantação?",
        options: [
            { letter: "A", text: "Mínimo de Máquinas Virtuais: 1 / Mínimo de Zonas de Disponibilidade: 1", correct: false },
            { letter: "B", text: "Mínimo de Máquinas Virtuais: 2 / Mínimo de Zonas de Disponibilidade: 2", correct: true },
            { letter: "C", text: "Mínimo de Máquinas Virtuais: 2 / Mínimo de Zonas de Disponibilidade: 1", correct: false },
            { letter: "D", text: "Mínimo de Máquinas Virtuais: 1 / Mínimo de Zonas de Disponibilidade: 2", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Uma VM em uma zona não garante 99,99%." },
            { correct: true, text: "Correta. Duas VMs em duas zonas distintas garantem SLA de 99,99%." },
            { correct: false, text: "Incorreta. Duas VMs na mesma zona não garantem 99,99%." },
            { correct: false, text: "Incorreta. Uma VM em duas zonas não faz sentido." }
        ],
        glossary: [
            "SLA: Service Level Agreement, garantia de disponibilidade.",
            "Zona de disponibilidade: local físico separado dentro de uma região.",
            "VM: máquina virtual do Azure."
        ],
        generalExplanation: [
            "Para SLA de <strong>99,99%</strong>, são necessárias pelo menos <strong>duas VMs em duas zonas</strong>.",
            "Isso garante resiliência a falhas de datacenter.",
            "A combinação correta é 2 VMs / 2 zonas."
        ],
        realWorld: [
            "Aplicações críticas são distribuídas em zonas para atingir SLA elevado.",
            "Isso minimiza o impacto de falhas.",
            "É uma prática essencial de alta disponibilidade."
        ]
    },
    {
        id: 46,
        title: "Conectividade padrão entre VNets",
        domain: "Redes no Azure",
        prompt: "As redes virtuais do Azure implantadas na mesma região do Azure são conectadas por padrão. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. VNets não são conectadas por padrão." },
            { correct: true, text: "Correta. É necessário configurar peering ou outra conexão." }
        ],
        glossary: [
            "VNet: rede virtual do Azure.",
            "Peering: conexão entre VNets."
        ],
        generalExplanation: [
            "VNets na mesma região <strong>não são conectadas por padrão</strong>.",
            "É necessário configurar <strong>peering</strong>.",
            "A afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Empresas configuram peering para conectar VNets.",
            "Isso permite comunicação segura.",
            "É uma prática comum."
        ]
    },
    {
        id: 47,
        title: "Grupos de recursos e falha de datacenter",
        domain: "Arquitetura e serviços do Azure",
        prompt: "Você planeja implantar várias máquinas virtuais do Azure. Você precisa garantir que os serviços em execução nas máquinas virtuais estejam disponíveis se um único data center falhar. Solução: você implanta as máquinas virtuais em dois ou mais grupos de recursos. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Grupos de recursos são lógicos e não garantem distribuição entre datacenters." },
            { correct: false, text: "Incorreta. Grupos de recursos não garantem resiliência a falhas de datacenter." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico de recursos.",
            "Zona de disponibilidade: local físico separado.",
            "Domínio de falha: agrupamento lógico."
        ],
        generalExplanation: [
            "Grupos de recursos são <strong>lógicos</strong> e não garantem distribuição física.",
            "Para proteção contra falha de datacenter, use <strong>zonas de disponibilidade</strong>.",
            "A solução <strong>não atende</strong> ao objetivo."
        ],
        realWorld: [
            "Zonas de disponibilidade são a solução correta para resiliência de datacenter.",
            "Grupos de recursos não garantem isso.",
            "É importante entender a diferença."
        ]
    },
    {
        id: 48,
        title: "Movimentação de VMs entre assinaturas",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Você tem várias máquinas virtuais em uma assinatura do Azure. Você cria uma nova assinatura. Qual é a alternativa correta?",
        options: [
            { letter: "A", text: "As máquinas virtuais podem ser movidas para a nova assinatura.", correct: true },
            { letter: "B", text: "As máquinas virtuais podem ser movidas para a nova assinatura somente se forem tudo no mesmo grupo de recursos.", correct: false },
            { letter: "C", text: "As máquinas virtuais podem ser movidas para a nova assinatura somente se executarem o Windows Server 2016.", correct: false },
            { letter: "D", text: "As máquinas virtuais não podem ser movidas para a nova assinatura.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. VMs podem ser movidas entre assinaturas usando o portal do Azure." },
            { correct: false, text: "Incorreta. Não é necessário estarem no mesmo grupo de recursos." },
            { correct: false, text: "Incorreta. O SO não é restrição para movimentação." },
            { correct: false, text: "Incorreta. VMs podem ser movidas entre assinaturas." }
        ],
        glossary: [
            "Movimentação de recursos: processo de mover recursos entre assinaturas.",
            "Assinatura: unidade de cobrança e gerenciamento.",
            "Grupo de recursos: contêiner lógico."
        ],
        generalExplanation: [
            "VMs podem ser <strong>movidas entre assinaturas</strong>.",
            "Isso é útil para reorganização ou consolidação.",
            "A alternativa correta é a A."
        ],
        realWorld: [
            "Empresas movem VMs entre assinaturas para reorganizar custos.",
            "O processo é suportado pelo Azure.",
            "É uma prática comum de governança."
        ]
    },
    {
        id: 49,
        title: "Hubs de Eventos do Azure",
        domain: "Arquitetura e serviços do Azure",
        prompt: "Qual serviço do Azure você deve usar para coletar eventos de vários recursos em um repositório centralizado?",
        options: [
            { letter: "A", text: "Serviços de Análise do Azure.", correct: false },
            { letter: "B", text: "Análise de Fluxo do Azure.", correct: false },
            { letter: "C", text: "Hubs de Eventos do Azure.", correct: true },
            { letter: "D", text: "Monitor Azure.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Análise é para processamento de dados." },
            { correct: false, text: "Incorreta. Stream Analytics é para processamento em tempo real." },
            { correct: true, text: "Correta. Hubs de Eventos é um serviço de ingestão de eventos em larga escala." },
            { correct: false, text: "Incorreta. Azure Monitor é para métricas e logs, não ingestão centralizada de eventos." }
        ],
        glossary: [
            "Hubs de Eventos: serviço de ingestão de eventos em larga escala.",
            "Stream Analytics: processamento de dados em tempo real.",
            "Azure Monitor: monitoramento de métricas e logs."
        ],
        generalExplanation: [
            "O <strong>Hubs de Eventos</strong> é o serviço de ingestão de eventos em larga escala.",
            "Permite coletar eventos de vários recursos.",
            "As outras opções não atendem ao requisito."
        ],
        realWorld: [
            "Empresas usam Hubs de Eventos para ingestão de telemetria.",
            "É uma prática comum em arquiteturas de streaming.",
            "Integra-se com Stream Analytics e outras ferramentas."
        ]
    },
    {
        id: 50,
        title: "Herança de marcas em grupos de recursos",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Se você atribuir uma marca a um grupo de recursos, todos os recursos do Azure nesse grupo de recursos serão atribuídos à mesma marca. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Marcas não são herdadas por padrão." },
            { correct: true, text: "Correta. Marcas de grupos de recursos não são herdadas automaticamente pelos recursos." }
        ],
        glossary: [
            "Marca (tag): par chave-valor para organização de recursos.",
            "Herança: propagação automática de configurações.",
            "Grupo de recursos: contêiner lógico."
        ],
        generalExplanation: [
            "As <strong>marcas</strong> não são herdadas automaticamente pelos recursos.",
            "É necessário aplicá-las diretamente.",
            "A afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Empresas aplicam marcas diretamente nos recursos para controle de custos.",
            "Isso evita inconsistências.",
            "É uma prática de governança."
        ]
    },
    {
        id: 51,
        title: "Primeiro recurso ao iniciar no Azure",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Sua empresa planeja começar a usar o Azure e migrar todos os seus recursos de rede para o Azure. Você precisa iniciar o processo de planejamento explorando o Azure. O que você deve criar primeiro?",
        options: [
            { letter: "A", text: "Um grupo de gestão.", correct: false },
            { letter: "B", text: "Um grupo de recursos.", correct: false },
            { letter: "C", text: "Uma assinatura.", correct: true },
            { letter: "D", text: "Uma rede virtual.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Grupos de gestão organizam assinaturas existentes." },
            { correct: false, text: "Incorreta. Grupos de recursos ficam dentro de assinaturas." },
            { correct: true, text: "Correta. A assinatura é o primeiro recurso criado no Azure." },
            { correct: false, text: "Incorreta. VNets ficam dentro de assinaturas e grupos de recursos." }
        ],
        glossary: [
            "Assinatura: unidade de cobrança e gerenciamento.",
            "Grupo de recursos: contêiner lógico.",
            "VNet: rede virtual."
        ],
        generalExplanation: [
            "A <strong>assinatura</strong> é o primeiro recurso criado no Azure.",
            "Ela contém grupos de recursos e recursos.",
            "É a base de toda a governança."
        ],
        realWorld: [
            "Empresas criam assinaturas para separar ambientes e cobranças.",
            "É o ponto de partida no Azure.",
            "É uma prática comum."
        ]
    },
    {
        id: 52,
        title: "Recurso de uma rede virtual do Azure",
        domain: "Redes no Azure",
        prompt: "O que é um recurso de uma rede virtual do Azure?",
        options: [
            { letter: "A", text: "Análise de custos de recursos.", correct: false },
            { letter: "B", text: "Geo-redundância.", correct: false },
            { letter: "C", text: "Isolamento e segmentação.", correct: true },
            { letter: "D", text: "Inspeção de pacotes.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Análise de custos não é recurso de VNet." },
            { correct: false, text: "Incorreta. Geo-redundância é de armazenamento." },
            { correct: true, text: "Correta. A VNet fornece isolamento e segmentação de rede." },
            { correct: false, text: "Incorreta. Inspeção de pacotes é feita por firewalls e outros serviços." }
        ],
        glossary: [
            "VNet: rede virtual do Azure.",
            "Segmentação: divisão da rede em sub-redes.",
            "Isolamento: separação lógica de recursos."
        ],
        generalExplanation: [
            "A <strong>VNet</strong> fornece <strong>isolamento e segmentação</strong>.",
            "Isso permite controlar o tráfego entre recursos.",
            "É a base da segurança de rede no Azure."
        ],
        realWorld: [
            "Empresas usam VNets para isolar cargas e aplicar regras de segurança.",
            "Isso atende a requisitos de conformidade.",
            "É uma prática comum."
        ]
    },
    {
        id: 53,
        title: "Zonas de disponibilidade e VMs Windows Server",
        domain: "Arquitetura e serviços do Azure",
        prompt: "Somente máquinas virtuais que executam o Windows Server podem ser criadas em zonas de disponibilidade. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Zonas suportam VMs Linux e Windows Server." },
            { correct: true, text: "Correta. Zonas de disponibilidade suportam VMs Linux e Windows Server." }
        ],
        glossary: [
            "Zona de disponibilidade: local físico separado dentro de uma região.",
            "VM Linux: máquina virtual com SO Linux.",
            "VM Windows Server: máquina virtual com SO Windows Server."
        ],
        generalExplanation: [
            "As <strong>zonas de disponibilidade</strong> suportam VMs <strong>Linux e Windows Server</strong>.",
            "A afirmação é <strong>falsa</strong>.",
            "A escolha do SO depende da aplicação."
        ],
        realWorld: [
            "Empresas usam VMs Linux e Windows em zonas de disponibilidade.",
            "Isso garante alta disponibilidade para ambas as plataformas.",
            "É uma prática comum."
        ]
    },
    {
        id: 54,
        title: "Exclusividade de nome de VNet em grupo de recursos",
        domain: "Redes no Azure",
        prompt: "Cada rede virtual do Azure em um único grupo de recursos deve ter um nome exclusivo. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O nome da VNet deve ser exclusivo dentro do grupo de recursos." },
            { correct: false, text: "Incorreta. O nome deve ser exclusivo no escopo do grupo de recursos." }
        ],
        glossary: [
            "Escopo: nível em que o nome deve ser exclusivo.",
            "VNet: rede virtual.",
            "Grupo de recursos: contêiner lógico."
        ],
        generalExplanation: [
            "O nome da <strong>VNet</strong> deve ser <strong>exclusivo</strong> dentro do grupo de recursos.",
            "Isso evita conflitos.",
            "A afirmação está <strong>correta</strong>."
        ],
        realWorld: [
            "Empresas seguem convenções de nomes para evitar conflitos.",
            "Isso facilita a gestão.",
            "É uma prática de governança."
        ]
    },
    {
        id: 55,
        title: "Dimensionamento vertical",
        domain: "Conceitos de nuvem",
        prompt: "Qual termo representa a capacidade de aumentar a capacidade de computação de uma máquina virtual adicionando memória ou CPUs?",
        options: [
            { letter: "A", text: "Dimensionamento horizontal.", correct: false },
            { letter: "B", text: "Dimensionamento vertical.", correct: true },
            { letter: "C", text: "Agilidade.", correct: false },
            { letter: "D", text: "Elasticidade.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Horizontal adiciona instâncias." },
            { correct: true, text: "Correta. Vertical aumenta recursos da mesma instância (CPU, memória)." },
            { correct: false, text: "Incorreta. Agilidade refere-se à rapidez." },
            { correct: false, text: "Incorreta. Elasticidade ajusta recursos automaticamente." }
        ],
        glossary: [
            "Dimensionamento vertical: aumento de recursos de uma instância.",
            "Dimensionamento horizontal: adição de instâncias.",
            "Elasticidade: ajuste automático de recursos."
        ],
        generalExplanation: [
            "O <strong>dimensionamento vertical</strong> aumenta recursos da mesma instância.",
            "O horizontal adiciona instâncias.",
            "A resposta correta é a B."
        ],
        realWorld: [
            "Bancos de dados frequentemente usam dimensionamento vertical.",
            "Aplicações web geralmente usam horizontal.",
            "A escolha depende da carga."
        ]
    },
    {
        id: 56,
        title: "Cópia automática para outro datacenter",
        domain: "Armazenamento no Azure",
        prompt: "Todos os dados copiados para uma conta de armazenamento do Azure são copiados automaticamente para outro data center do Azure. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A replicação para outro datacenter depende da opção configurada (GRS, RA-GRS, etc.)." },
            { correct: false, text: "Incorreta. Por padrão, a replicação é local (LRS)." }
        ],
        glossary: [
            "LRS: replicação local.",
            "GRS: replicação geográfica.",
            "RA-GRS: replicação geográfica com acesso de leitura."
        ],
        generalExplanation: [
            "A replicação para outro datacenter <strong>depende da opção configurada</strong>.",
            "Por padrão, é local (LRS).",
            "A afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Empresas escolhem GRS para resiliência regional.",
            "LRS é suficiente para muitos cenários.",
            "A escolha depende dos requisitos."
        ]
    },
    {
        id: 57,
        title: "Recursos em várias assinaturas",
        domain: "Governança e gerenciamento do Azure",
        prompt: "Uma empresa pode usar recursos de várias assinaturas. Assinale SIM, caso a informação esteja correta, ou NÃO caso esteja incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Uma empresa pode ter várias assinaturas e usar recursos de todas." },
            { correct: false, text: "Incorreta. É possível usar várias assinaturas." }
        ],
        glossary: [
            "Assinatura: unidade de cobrança e gerenciamento.",
            "Governança: gestão de recursos e políticas."
        ],
        generalExplanation: [
            "Empresas podem usar <strong>várias assinaturas</strong>.",
            "Isso permite separar ambientes e cobranças.",
            "A afirmação está <strong>correta</strong>."
        ],
        realWorld: [
            "Empresas criam assinaturas para separar ambientes (dev, prod).",
            "Isso facilita a governança.",
            "É uma prática comum."
        ]
    },
    {
        id: 58,
        title: "Conjunto de dimensionamento e falha de datacenter",
        domain: "Arquitetura e serviços do Azure",
        prompt: "Você planeja implantar várias máquinas virtuais do Azure. Você precisa garantir que os serviços em execução nas máquinas virtuais estejam disponíveis se um único datacenter falhar. Solução: você implanta as máquinas virtuais em um conjunto de dimensionamento. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Conjuntos de dimensionamento podem estar no mesmo datacenter; é necessário usar zonas de disponibilidade." },
            { correct: false, text: "Incorreta. Conjuntos de dimensionamento sozinhos não garantem distribuição entre datacenters." }
        ],
        glossary: [
            "Conjunto de dimensionamento: grupo de VMs gerenciadas.",
            "Zona de disponibilidade: local físico separado.",
            "Domínio de falha: agrupamento lógico."
        ],
        generalExplanation: [
            "Conjuntos de dimensionamento <strong>não garantem</strong> distribuição entre datacenters.",
            "Para isso, use <strong>zonas de disponibilidade</strong>.",
            "A solução <strong>não atende</strong> ao objetivo."
        ],
        realWorld: [
            "Zonas de disponibilidade são a solução correta para resiliência de datacenter.",
            "Conjuntos de dimensionamento sozinhos não bastam.",
            "É importante entender a diferença."
        ]
    },
    {
        id: 59,
        title: "Banco de dados multi-região com JSON",
        domain: "Arquitetura e serviços do Azure",
        prompt: "Você planeja implementar uma solução de banco de dados do Azure. Você precisa implementar uma solução de banco de dados que atenda aos seguintes requisitos: (1) Pode adicionar dados simultaneamente de várias regiões; (2) Pode armazenar documentos JSON. Qual serviço de banco de dados você deve implantar?",
        options: [
            { letter: "A", text: "Azure Cache for Redis.", correct: false },
            { letter: "B", text: "Azure Database for MySQL servers.", correct: false },
            { letter: "C", text: "SQL Databases.", correct: false },
            { letter: "D", text: "Azure Cosmos DB.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Redis é cache, não banco de dados multi-região com JSON." },
            { correct: false, text: "Incorreta. MySQL é relacional e não multi-região nativo." },
            { correct: false, text: "Incorreta. SQL Database é relacional." },
            { correct: true, text: "Correta. Azure Cosmos DB é globalmente distribuído e suporta documentos JSON." }
        ],
        glossary: [
            "Azure Cosmos DB: banco de dados NoSQL globalmente distribuído.",
            "JSON: formato de dados semiestruturado.",
            "Multi-região: distribuição em várias regiões."
        ],
        generalExplanation: [
            "O <strong>Azure Cosmos DB</strong> é globalmente distribuído e suporta JSON.",
            "Permite gravações simultâneas em várias regiões.",
            "As outras opções não atendem aos requisitos."
        ],
        realWorld: [
            "Aplicações globais usam Cosmos DB para baixa latência e escalabilidade.",
            "É uma prática comum em arquiteturas modernas.",
            "Suporta múltiplos modelos de dados."
        ]
    },
    {
        id: 60,
        title: "Conectividade entre rede local e VMs no Azure",
        domain: "Redes no Azure",
        prompt: "Você tem um ambiente do Azure que contém várias máquinas virtuais do Azure. Você planeja implementar uma solução que permita que os computadores cliente em sua rede local se comuniquem com as máquinas virtuais do Azure. Quais dois recursos do Azure você deve incluir na recomendação? NOTA: Cada seleção correta vale um ponto.",
        options: [
            { letter: "A", text: "Um gateway de aplicativo.", correct: false },
            { letter: "B", text: "Uma rede virtual", correct: false },
            { letter: "C", text: "Uma balanceador de carga.", correct: false },
            { letter: "D", text: "Uma sub-rede de gateway.", correct: true },
            { letter: "E", text: "Um gateway de rede virtual (VPN do Azure).", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Application Gateway é um balanceador de carga de camada 7." },
            { correct: false, text: "Incorreta. A VNet já existe no cenário." },
            { correct: false, text: "Incorreta. Load balancer não conecta redes locais." },
            { correct: true, text: "Correta. A sub-rede de gateway é necessária para hospedar o gateway de VPN." },
            { correct: true, text: "Correta. O gateway de rede virtual conecta a rede local ao Azure." }
        ],
        glossary: [
            "Gateway de rede virtual: gateway VPN do Azure.",
            "Sub-rede de gateway: sub-rede dedicada ao gateway.",
            "VPN site-to-site: conexão entre redes."
        ],
        generalExplanation: [
            "Para conectar a rede local às VMs do Azure, são necessários: <strong>sub-rede de gateway</strong> e <strong>gateway de rede virtual</strong>.",
            "A VNet já existe no cenário.",
            "As outras opções não atendem ao requisito."
        ],
        realWorld: [
            "Empresas configuram VPN site-to-site para conectar redes locais ao Azure.",
            "Isso permite comunicação segura.",
            "É uma prática comum em arquiteturas híbridas."
        ]
    }
]