const originalQuestions = [
    {
        id: 1,
        title: "Política do Azure para impor padrões em VMs",
        domain: "Governança e Conformidade",
        prompt: "Você precisa recomendar uma solução para implantações de máquinas virtuais do Azure. A solução deve impor os padrões da empresa nas máquinas virtuais. O que você deveria incluir na recomendação?",
        options: [
            { letter: "A", text: "Política do Azure", correct: true },
            { letter: "B", text: "Projetos do Azure", correct: false },
            { letter: "C", text: "Bloqueio Azure", correct: false },
            { letter: "D", text: "Gerenciamento de custos do Azure", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. As políticas do Azure são usadas para implementar padrões em larga escala em toda a infraestrutura, garantindo conformidade com requisitos específicos da empresa, como configurações de segurança, tags, localização geográfica e outros critérios." },
            { correct: false, text: "Incorreta. Projetos do Azure (Azure Blueprints) ajudam a definir ambientes padronizados e repetíveis, mas o foco do requisito é impor padrões de forma contínua e em escala, o que é feito pela Política do Azure." },
            { correct: false, text: "Incorreta. Bloqueios de recursos (Resource Locks) impedem alterações ou exclusões acidentais em recursos, mas não impõem padrões de configuração." },
            { correct: false, text: "Incorreta. O Gerenciamento de Custos do Azure monitora e otimiza gastos, não impõe padrões de configuração em máquinas virtuais." }
        ],
        glossary: [
            "Política do Azure (Azure Policy): serviço que permite criar, atribuir e gerenciar políticas que impõem regras e efeitos sobre recursos, garantindo conformidade com padrões corporativos.",
            "Projetos do Azure (Azure Blueprints): serviço para definir ambientes padronizados e repetíveis, combinando políticas, controles de acesso e templates de recursos.",
            "Bloqueio Azure (Resource Lock): recurso que impede alterações ou exclusões acidentais em recursos, com níveis CanNotDelete e ReadOnly.",
            "Gerenciamento de Custos do Azure (Azure Cost Management): conjunto de ferramentas para monitorar, alocar e otimizar custos na nuvem Azure."
        ],
        generalExplanation: [
            "A recomendação correta é incluir a <strong>Política do Azure</strong>.",
            "As políticas do Azure permitem <strong>implementar padrões em larga escala</strong> em toda a infraestrutura, garantindo conformidade com requisitos específicos da empresa (segurança, tags, localização geográfica e outros critérios).",
            "Serviços como Projetos do Azure, Bloqueios de Recursos e Gerenciamento de Custos têm finalidades distintas e não impõem padrões continuamente em VMs."
        ],
        realWorld: [
            "Uma empresa pode criar uma política do Azure que <strong>exige tags obrigatórias</strong> (como centro de custo e ambiente) em todas as VMs implantadas.",
            "Outra política pode <strong>restringir a criação de VMs a regiões específicas</strong>, atendendo a requisitos de soberania de dados.",
            "Essa abordagem mantém a conformidade <strong>automatizada e auditável</strong> em ambientes com múltiplas assinaturas e equipes."
        ]
    },
    {
        id: 2,
        title: "MFA para contas com permissões de gravação",
        domain: "Segurança",
        prompt: "Você precisa garantir que a autenticação multifator (MFA) esteja habilitada em contas com permissões de gravação em uma assinatura do Azure. O que você deve implementar? Selecione apenas uma resposta.",
        options: [
            { letter: "A", text: "tags de recursos", correct: false },
            { letter: "B", text: "Política do Azure", correct: true },
            { letter: "C", text: "bloqueios de recursos", correct: false },
            { letter: "D", text: "Estrutura de adoção da nuvem", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Tags de recursos servem para organização e categorização de custos, não para impor requisitos de segurança como MFA." },
            { correct: true, text: "Correta. As políticas do Azure podem ser configuradas para impor requisitos específicos de segurança, como a necessidade de autenticação multifator para certas funções ou permissões." },
            { correct: false, text: "Incorreta. Bloqueios de recursos impedem alterações ou exclusões acidentais, não impõem requisitos de autenticação." },
            { correct: false, text: "Incorreta. A Estrutura de Adoção da Nuvem (Cloud Adoption Framework) é um guia de metodologia, não um mecanismo técnico que impõe MFA." }
        ],
        glossary: [
            "MFA (Autenticação Multifator): método de autenticação que exige duas ou mais evidências de identidade para conceder acesso.",
            "Política do Azure (Azure Policy): serviço de governança que impõe regras e efeitos sobre recursos e configurações.",
            "Tags de recursos: pares chave-valor usados para organizar recursos e alocar custos.",
            "Bloqueio de recurso (Resource Lock): mecanismo que impede alterações ou exclusões acidentais.",
            "Estrutura de Adoção da Nuvem (Cloud Adoption Framework): conjunto de diretrizes e boas práticas da Microsoft para adoção da nuvem."
        ],
        generalExplanation: [
            "Para garantir que a <strong>MFA esteja habilitada</strong> em contas com permissões de gravação, a solução é implementar a <strong>Política do Azure</strong>.",
            "As políticas do Azure podem impor requisitos de segurança, como a necessidade de autenticação multifator para determinadas funções ou permissões, e <strong>verificam continuamente a conformidade</strong>.",
            "Outras opções (tags, bloqueios de recursos, CAF) não são mecanismos técnicos que impõem MFA."
        ],
        realWorld: [
            "Uma organização pode criar uma política do Azure que <strong>audita ou nega</strong> atribuições de funções com permissões de gravação a identidades sem MFA habilitada.",
            "Essa política ajuda a manter <strong>conformidade contínua</strong> com normas de segurança, como ISO 27001 ou LGPD, sinalizando violações automaticamente.",
            "Equipes de segurança podem usar relatórios de conformidade para <strong>corrigir desvios rapidamente</strong>, reduzindo riscos de acesso não autorizado."
        ]
    },
    {
        id: 3,
        title: "Gerenciar servidores locais pelo portal do Azure",
        domain: "Governança e Conformidade",
        prompt: "Você tem servidores locais que executam o Windows Server. O que você deve implementar para gerenciar os servidores usando o portal do Azure?",
        options: [
            { letter: "A", text: "Controle de acesso baseado em função (RBAC)", correct: false },
            { letter: "B", text: "Docker", correct: false },
            { letter: "C", text: "Serviço Azure Kubernetes (AKS)", correct: false },
            { letter: "D", text: "Azure Arc", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O RBAC controla permissões de acesso a recursos, mas não estende o gerenciamento de servidores locais ao portal do Azure." },
            { correct: false, text: "Incorreta. Docker é uma plataforma de containers, sem relação com o gerenciamento de servidores locais pelo portal do Azure." },
            { correct: false, text: "Incorreta. O AKS é um serviço gerenciado de Kubernetes, voltado a orquestração de containers, não ao gerenciamento de servidores locais." },
            { correct: true, text: "Correta. O Azure Arc estende a experiência do Azure para ambientes fora da infraestrutura da nuvem do Azure, permitindo gerenciar servidores físicos, máquinas virtuais e outros recursos em ambientes locais através do portal do Azure, incluindo monitoramento, políticas e conformidade." }
        ],
        glossary: [
            "Azure Arc: serviço que estende o gerenciamento e os serviços do Azure a ambientes locais, multicloud e de borda, permitindo gerenciamento centralizado de servidores, clusters Kubernetes e bancos de dados.",
            "RBAC (Role-Based Access Control): modelo de controle de acesso baseado em funções atribuídas a usuários, grupos e identidades.",
            "Docker: plataforma de containers para empacotar e executar aplicações de forma isolada.",
            "AKS (Azure Kubernetes Service): serviço gerenciado de orquestração de containers Kubernetes no Azure."
        ],
        generalExplanation: [
            "Para gerenciar servidores locais (Windows Server) pelo portal do Azure, deve-se implementar o <strong>Azure Arc</strong>.",
            "O Azure Arc <strong>estende a experiência do Azure</strong> para ambientes fora da nuvem, permitindo gerenciar servidores físicos e VMs locais com recursos como <strong>monitoramento, políticas, conformidade e outros serviços</strong>, proporcionando gerenciamento centralizado e consistente.",
            "RBAC, Docker e AKS não oferecem essa extensão de gerenciamento para servidores locais."
        ],
        realWorld: [
            "Uma empresa com datacenter local pode conectar seus servidores Windows ao <strong>Azure Arc</strong> e gerenciá-los pelo portal do Azure, aplicando políticas, monitorando com Azure Monitor e mantendo inventário centralizado.",
            "Isso permite <strong>governança unificada</strong> entre ambientes locais e de nuvem, sem migrar imediatamente as cargas de trabalho.",
            "Facilita a <strong>adoção híbrida da nuvem</strong>, mantendo controle e conformidade sobre servidores que precisam permanecer on-premises."
        ]
    },
    {
        id: 4,
        title: "Criar VM do Azure a partir de dispositivo Android",
        domain: "Serviços Principais do Azure",
        prompt: "Quais são as duas ferramentas que você pode usar para criar uma nova máquina virtual do Azure a partir de um dispositivo móvel que executa o Android? NOTA: Cada resposta correta apresenta solução completa.",
        options: [
            { letter: "A", text: "PowerShell no Azure Cloud Shell", correct: true },
            { letter: "B", text: "o portal do Azure", correct: true },
            { letter: "C", text: "Área de trabalho remota", correct: false },
            { letter: "D", text: "SSH", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Azure Cloud Shell é acessível por navegador em dispositivos móveis e permite executar comandos PowerShell para gerenciar e criar recursos no Azure." },
            { correct: true, text: "Correta. O Portal do Azure é otimizado para acesso móvel e oferece interface gráfica amigável para criar e gerenciar recursos na nuvem, incluindo VMs." },
            { correct: false, text: "Incorreta. A Área de Trabalho Remota é usada para acessar remotamente computadores Windows, não para criar VMs no Azure." },
            { correct: false, text: "Incorreta. O SSH é um protocolo de acesso remoto a servidores, não uma ferramenta para criação de VMs no Azure." }
        ],
        glossary: [
            "Azure Cloud Shell: shell interativo acessível pelo navegador que oferece Bash ou PowerShell pré-configurados para gerenciar recursos do Azure.",
            "Portal do Azure: interface web gráfica para criar, configurar e gerenciar recursos do Azure.",
            "Área de Trabalho Remota (RDP): protocolo para acesso remoto a ambientes Windows.",
            "SSH (Secure Shell): protocolo criptográfico para acesso remoto seguro a servidores, comum em ambientes Linux."
        ],
        generalExplanation: [
            "As duas ferramentas que permitem criar VMs do Azure a partir de um dispositivo Android são: <strong>o Portal do Azure</strong> (interface gráfica otimizada para móveis) e o <strong>PowerShell no Azure Cloud Shell</strong> (acessível pelo navegador e que permite executar comandos de gerenciamento).",
            "Área de Trabalho Remota e SSH são protocolos de acesso remoto, não ferramentas de criação de recursos."
        ],
        realWorld: [
            "Um administrador em deslocamento pode usar o <strong>Portal do Azure</strong> no celular Android para provisionar rapidamente uma VM de teste.",
            "Ou pode abrir o <strong>Azure Cloud Shell</strong> no navegador móvel e executar comandos <code>New-AzVM</code> (PowerShell) ou <code>az vm create</code> (CLI) para automação rápida.",
            "Essa flexibilidade é útil em <strong>operações emergenciais</strong> ou ambientes ágeis em que o acesso a um computador não está disponível."
        ]
    },
    {
        id: 5,
        title: "Serviço que estende conformidade e monitoramento para híbrido/multicloud",
        domain: "Governança e Conformidade",
        prompt: "Selecione a resposta que completa corretamente a frase. ________________ estende a conformidade e o monitoramento do Azure para configurações híbridas e multicloud.",
        options: [
            { letter: "A", text: "Azure Front Door", correct: false },
            { letter: "B", text: "Azure AD Connect", correct: false },
            { letter: "C", text: "Azure Arc", correct: true },
            { letter: "D", text: "Azure Policy", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure Front Door é um serviço de CDN e balanceamento de carga global, não voltado a conformidade e monitoramento híbridos." },
            { correct: false, text: "Incorreta. O Azure AD Connect sincroniza identidades locais com o Azure AD, mas não estende conformidade e monitoramento a ambientes híbridos e multicloud." },
            { correct: true, text: "Correta. O Azure Arc permite gerenciar recursos fora do Azure, aplicando políticas consistentes, monitoramento e conformidade em ambientes locais, multicloud e de borda." },
            { correct: false, text: "Incorreta. O Azure Policy aplica regras a recursos, mas é o Azure Arc que estende essas capacidades a ambientes híbridos e multicloud." }
        ],
        glossary: [
            "Azure Arc: serviço que estende os serviços e capacidades do Azure a ambientes locais, multicloud e de borda, incluindo gerenciamento, políticas e monitoramento.",
            "Azure Front Door: serviço de CDN e balanceamento de carga global para aplicações web.",
            "Azure AD Connect: ferramenta para sincronizar identidades entre Active Directory local e Azure AD.",
            "Azure Policy: serviço de governança que aplica regras e efeitos a recursos do Azure."
        ],
        generalExplanation: [
            "A frase é completada corretamente com <strong>Azure Arc</strong>.",
            "O Azure Arc permite <strong>estender a conformidade e o monitoramento do Azure</strong> para ambientes híbridos e multicloud, aplicando políticas consistentes (via Azure Policy) e monitoramento (via Azure Monitor) a recursos fora do Azure.",
            "Isso proporciona <strong>gerenciamento unificado</strong>, políticas consistentes, integração com serviços do Azure (Log Analytics, Azure Monitor, Security Center) e suporte a Kubernetes em ambientes diversos."
        ],
        realWorld: [
            "Uma organização com servidores locais, clusters Kubernetes em outras nuvens e bancos de dados SQL externos pode usar o <strong>Azure Arc</strong> para aplicar políticas e monitorar tudo de forma centralizada.",
            "Isso permite <strong>conformidade unificada</strong> mesmo em ambientes distribuídos, sem migrar cargas de trabalho para o Azure.",
            "Equipes de segurança e operações ganham <strong>visibilidade e controle</strong> sobre recursos híbridos e multicloud."
        ]
    },
    {
        id: 6,
        title: "Camadas de acesso do armazenamento do Azure",
        domain: "Armazenamento",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. (1) A camada de acesso Hot está disponível para dados blob que usam armazenamento padrão. (2) O nível de acesso Cool está disponível para compartilhamentos de arquivos no armazenamento premium. (3) O nível de acesso Cool pode ser configurado no nível da conta de armazenamento.",
        options: [
            { letter: "A", text: "Sim, Sim e Sim", correct: false },
            { letter: "B", text: "Não, Sim e Não", correct: false },
            { letter: "C", text: "Sim, Não e Sim", correct: true },
            { letter: "D", text: "Não, Não e Não", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A segunda declaração é falsa: o nível Cool não está disponível para compartilhamentos de arquivos no armazenamento premium." },
            { correct: false, text: "Incorreta. A primeira declaração é verdadeira: a camada Hot está disponível para blobs em armazenamento padrão." },
            { correct: true, text: "Correta. (1) Sim — a camada Hot está disponível para dados blob em armazenamento padrão. (2) Não — o nível Cool está disponível apenas para blobs no Blob Storage, não para compartilhamentos de arquivos, e o armazenamento premium não utiliza as camadas Cool ou Hot. (3) Sim — o nível de acesso Cool pode ser configurado no nível da conta de armazenamento, permitindo que todos os blobs usem essa camada como padrão." },
            { correct: false, text: "Incorreta. A primeira e a terceira declarações são verdadeiras." }
        ],
        glossary: [
            "Camada Hot (acesso frequente): otimizada para dados acessados com frequência, com custo de armazenamento maior e custo de acesso menor.",
            "Camada Cool (acesso esporádico): indicada para dados acessados com menos frequência, com custo de armazenamento menor e custo de acesso maior.",
            "Camada Archive: camada de menor custo, voltada a dados raramente acessados; exige reidratação antes do acesso.",
            "Armazenamento premium: voltado a cargas de alto desempenho (discos gerenciados, arquivos premium), não utiliza as camadas Cool ou Hot.",
            "Compartilhamento de arquivos (Azure Files): armazenamento de arquivos gerenciado acessível via SMB/NFS."
        ],
        generalExplanation: [
            "Vamos analisar cada declaração:",
            "<strong>(1) A camada Hot está disponível para dados blob em armazenamento padrão — Sim.</strong>",
            "<strong>(2) O nível Cool está disponível para compartilhamentos de arquivos no armazenamento premium — Não.</strong> O nível Cool é específico do Blob Storage padrão e não se aplica a compartilhamentos de arquivos premium.",
            "<strong>(3) O nível Cool pode ser configurado no nível da conta de armazenamento — Sim.</strong> Definindo a camada padrão da conta, todos os blobs passam a usar Cool por padrão.",
            "Portanto, as respostas são: <strong>Sim, Não e Sim</strong>."
        ],
        realWorld: [
            "Uma organização pode configurar a conta de armazenamento com <strong>camada Cool padrão</strong> para reduzir custos com dados acessados esporadicamente.",
            "Para dados acessados com frequência (como logs em tempo real), usa-se a <strong>camada Hot</strong>.",
            "Arquivos premium são usados para <strong>cargas de alto desempenho</strong> (ex.: compartilhamentos SMB de baixa latência), e não para camadas Cool/Hot.",
            "Compreender essas diferenças ajuda a <strong>otimizar custos e desempenho</strong> no armazenamento do Azure."
        ]
    },
    {
        id: 7,
        title: "Gratuidade dos recursos do Microsoft Defender for Cloud",
        domain: "Segurança",
        prompt: "Todos os recursos do Microsoft Defender for Cloud são gratuitos.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Microsoft Defender for Cloud possui uma versão gratuita com recursos básicos, mas também oferece uma versão paga (Standard) com recursos avançados e maior capacidade de personalização. Portanto, nem todos os recursos são gratuitos." },
            { correct: false, text: "Incorreta. Existem planos pagos (Standard) com recursos avançados, como proteção para servidores, bancos de dados, containers e workloads híbridos." }
        ],
        glossary: [
            "Microsoft Defender for Cloud: plataforma de gerenciamento de postura de segurança e proteção contra ameaças para ambientes Azure, híbridos e multicloud.",
            "Plano Gratuito (Foundational): recursos básicos, como avaliação de postura de segurança e recomendações.",
            "Plano Standard (Pago): recursos avançados de proteção contra ameaças, detecção de anomalias e proteção de workloads específicas."
        ],
        generalExplanation: [
            "A resposta correta é <strong>Não</strong>.",
            "O <strong>Microsoft Defender for Cloud</strong> possui uma versão gratuita com recursos básicos, mas também oferece a <strong>versão paga (Standard)</strong>, com recursos avançados e maior capacidade de personalização.",
            "Portanto, nem todos os recursos são gratuitos — depende do nível de funcionalidade desejado."
        ],
        realWorld: [
            "Uma organização pode usar o <strong>plano gratuito</strong> para obter recomendações básicas de segurança e visibilidade de postura.",
            "Para <strong>proteção avançada</strong> de servidores, bancos de dados e containers, é necessário habilitar planos Standard pagos.",
            "Entender essa diferença ajuda no <strong>planejamento de custos e segurança</strong> na nuvem."
        ]
    },
    {
        id: 8,
        title: "Serviço para criar compartilhamento de arquivo do Azure",
        domain: "Armazenamento",
        prompt: "Você precisa criar um novo compartilhamento de arquivo do Azure. O que você deve usar? Para atender, selecione o serviço na área de resposta. NOTA: Cada seleção correta vale um ponto.",
        options: [
            { letter: "A", text: "Quickstart Center (Centro de início rápido)", correct: false },
            { letter: "B", text: "Function App (Aplicativos de funções)", correct: false },
            { letter: "C", text: "Microsoft Defender for Cloud (Microsoft Defender para nuvem)", correct: false },
            { letter: "D", text: "Azure Cosmos DB (BD Cosmos do Azure)", correct: false },
            { letter: "E", text: "Virtual Machines (Máquinas virtuais)", correct: false },
            { letter: "F", text: "Resource groups (Grupo de recursos)", correct: false },
            { letter: "G", text: "Monitor (Monitor)", correct: false },
            { letter: "H", text: "App Services (Serviços de aplicativos)", correct: false },
            { letter: "I", text: "Storage accounts (Contas de armazenamento)", correct: true },
            { letter: "J", text: "SQL Databases (Banco de dados SQL)", correct: false },
            { letter: "K", text: "Advisor (Orientador)", correct: false },
            { letter: "L", text: "Help + support (Ajuda + suporte)", correct: false },
            { letter: "M", text: "Load balancers (Balanceadores de carga)", correct: false },
            { letter: "N", text: "Azure Active Directory (Azure Active Directory)", correct: false },
            { letter: "O", text: "Virtual networks (Redes virtuais)", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Quickstart Center é um guia para iniciar serviços no Azure, não um serviço de armazenamento." },
            { correct: false, text: "Incorreta. O Function App hospeda funções serverless, não compartilhamentos de arquivos." },
            { correct: false, text: "Incorreta. O Defender for Cloud é uma plataforma de segurança, não armazenamento." },
            { correct: false, text: "Incorreta. O Azure Cosmos DB é um banco NoSQL, não compartilhamento de arquivos." },
            { correct: false, text: "Incorreta. Máquinas virtuais não são o serviço para criar compartilhamentos de arquivos gerenciados." },
            { correct: false, text: "Incorreta. Grupos de recursos organizam recursos, não criam compartilhamentos de arquivos." },
            { correct: false, text: "Incorreta. O Azure Monitor monitora recursos, não armazena arquivos." },
            { correct: false, text: "Incorreta. App Services hospeda aplicações web, não compartilhamentos de arquivos." },
            { correct: true, text: "Correta. Os compartilhamentos de arquivo do Azure são criados dentro de uma conta de armazenamento. Ao selecionar 'Storage accounts (Contas de armazenamento)', você terá a capacidade de criar um compartilhamento de arquivo como parte da configuração da conta." },
            { correct: false, text: "Incorreta. SQL Databases é um serviço de banco de dados relacional, não armazenamento de arquivos." },
            { correct: false, text: "Incorreta. O Advisor fornece recomendações, não cria compartilhamentos de arquivos." },
            { correct: false, text: "Incorreta. Ajuda e suporte não criam compartilhamentos de arquivos." },
            { correct: false, text: "Incorreta. Balanceadores de carga distribuem tráfego, não armazenam arquivos." },
            { correct: false, text: "Incorreta. O Azure AD gerencia identidades, não arquivos." },
            { correct: false, text: "Incorreta. Redes virtuais não criam compartilhamentos de arquivos." }
        ],
        glossary: [
            "Conta de armazenamento (Storage Account): recurso que agrupa serviços de armazenamento do Azure, incluindo blobs, arquivos, filas e tabelas.",
            "Azure Files: serviço de compartilhamentos de arquivos gerenciados acessíveis via SMB/NFS.",
            "Compartilhamento de arquivo (File Share): diretório gerenciado no Azure Files, acessível como um compartilhamento de rede."
        ],
        generalExplanation: [
            "Para criar um novo compartilhamento de arquivo do Azure, deve-se usar <strong>Storage accounts (Contas de armazenamento)</strong>.",
            "Os compartilhamentos de arquivo do Azure são associados às contas de armazenamento, portanto, você deve criar o compartilhamento dentro de uma conta de armazenamento.",
            "Ao selecionar 'Storage accounts', você pode criar um compartilhamento como parte da configuração dessa conta."
        ],
        realWorld: [
            "Em cenários corporativos, equipes criam compartilhamentos de arquivos dentro de <strong>contas de armazenamento</strong> para uso por VMs Windows via SMB.",
            "Isso permite <strong>compartilhamento de dados centralizado</strong> e integração com ambientes híbridos (via Azure File Sync).",
            "O gerenciamento correto das contas de armazenamento impacta <strong>custos, desempenho e segurança</strong>."
        ]
    },
    {
        id: 9,
        title: "Infraestrutura própria e nuvem pública",
        domain: "Conceitos de Nuvem",
        prompt: "Selecione a resposta que completa corretamente a frase. Uma organização que hospeda sua própria infraestrutura em _________________ não precisa mais de um data center.",
        options: [
            { letter: "A", text: "na nuvem pública (in the public cloud)", correct: true },
            { letter: "B", text: "em uma nuvem híbrida (in a hybrid cloud)", correct: false },
            { letter: "C", text: "uma nuvem privada (in a private cloud)", correct: false },
            { letter: "D", text: "em um host Hyper-V (on a Hyper-V host)", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Quando uma organização migra para a nuvem pública, deixa de depender de um data center local, pois a infraestrutura é fornecida e gerenciada pelo provedor de serviços em nuvem." },
            { correct: false, text: "Incorreta. A nuvem híbrida combina ambientes públicos e privados, e a organização ainda pode manter um data center local." },
            { correct: false, text: "Incorreta. A nuvem privada é hospedada internamente ou por terceiros, mas ainda representa uma infraestrutura dedicada, e a organização pode manter data center." },
            { correct: false, text: "Incorreta. Um host Hyper-V é uma infraestrutura local, não uma nuvem pública." }
        ],
        glossary: [
            "Nuvem pública: serviços de nuvem oferecidos por provedores terceiros via internet, com infraestrutura compartilhada.",
            "Nuvem privada: infraestrutura dedicada a uma única organização, gerenciada interna ou externamente.",
            "Nuvem híbrida: combinação de nuvem pública e privada, com integração entre ambientes.",
            "Hyper-V: hypervisor da Microsoft para virtualização em ambientes locais."
        ],
        generalExplanation: [
            "A resposta correta é <strong>na nuvem pública</strong>.",
            "Quando uma organização migra para a nuvem pública, ela deixa de depender de um data center local, pois a infraestrutura é fornecida e gerenciada pelo provedor de serviços em nuvem.",
            "Nuvens privadas e híbridas ainda podem envolver data centers locais."
        ],
        realWorld: [
            "Empresas que migram totalmente para <strong>nuvem pública</strong> podem reduzir custos com data centers e focar em seus negócios.",
            "Já ambientes <strong>híbridos</strong> são comuns quando parte dos dados deve permanecer on-premises por regulação ou latência.",
            "Entender esses modelos ajuda no <strong>planejamento de arquitetura e custos</strong>."
        ]
    },
    {
        id: 10,
        title: "Recursos do Azure Cost Management + Billing",
        domain: "Gerenciamento de Custos",
        prompt: "Quais são os dois recursos disponíveis usando o Azure Cost Management + Billing? Cada resposta correta apresenta uma solução completa.",
        options: [
            { letter: "A", text: "Estime o custo total de propriedade antes que os recursos sejam implantados.", correct: false },
            { letter: "B", text: "Criar e gerenciar orçamentos.", correct: true },
            { letter: "C", text: "Forneça preços com desconto quando você paga antecipadamente.", correct: false },
            { letter: "D", text: "Gere relatórios históricos e preveja o uso futuro.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A estimativa de custo total de propriedade antes da implantação é feita pela Calculadora de TCO, não pelo Cost Management + Billing." },
            { correct: true, text: "Correta. O Azure Cost Management + Billing permite criar e gerenciar orçamentos para monitorar e controlar custos, ajudando a evitar surpresas nos gastos." },
            { correct: false, text: "Incorreta. Descontos por pagamento antecipado (como Reserved Instances) são ofertas comerciais, não funcionalidades do Cost Management + Billing." },
            { correct: true, text: "Correta. O Azure Cost Management + Billing permite analisar custos históricos e prever o uso futuro, essencial para planejamento e tomada de decisões." }
        ],
        glossary: [
            "Azure Cost Management + Billing: conjunto de ferramentas para monitorar, alocar e otimizar custos, além de gerenciar assinaturas e faturas.",
            "Orçamento (Budget): limite definido para custos ou uso, com alertas configuráveis.",
            "Previsão de custos: estimativa futura de gastos com base em dados históricos.",
            "Calculadora de TCO: ferramenta para estimar economia ao migrar cargas para o Azure."
        ],
        generalExplanation: [
            "Os dois recursos disponíveis no Azure Cost Management + Billing são: <strong>Criar e gerenciar orçamentos</strong> e <strong>Gerar relatórios históricos e prever o uso futuro</strong>.",
            "Esses recursos ajudam no <strong>controle financeiro e planejamento</strong> de custos na nuvem.",
            "A Calculadora de TCO e ofertas comerciais (como Reserved Instances) não fazem parte diretamente do Cost Management + Billing."
        ],
        realWorld: [
            "Uma organização pode definir <strong>orçamentos mensais</strong> com alertas para evitar estouro de gastos.",
            "Usando <strong>relatórios históricos e previsões</strong>, planeja a expansão de workloads e otimiza recursos.",
            "Isso melhora a <strong>governança financeira</strong> e permite decisões baseadas em dados."
        ]
    },
    {
        id: 11,
        title: "Defender for Cloud e monitoramento local",
        domain: "Segurança",
        prompt: "O Microsoft Defender for Cloud pode monitorar recursos do Azure e recursos locais.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Microsoft Defender for Cloud pode monitorar recursos no Azure e em ambientes locais (on-premises), oferecendo recursos de segurança abrangentes para cargas de trabalho em nuvem e locais." },
            { correct: false, text: "Incorreta. O Defender for Cloud suporta ambientes híbridos e multicloud, incluindo recursos locais conectados via Azure Arc ou agentes." }
        ],
        glossary: [
            "Microsoft Defender for Cloud: plataforma de gerenciamento de postura de segurança e proteção contra ameaças para ambientes Azure, híbridos e multicloud.",
            "On-premises: ambiente local (no datacenter da organização).",
            "Azure Arc: serviço que estende o gerenciamento do Azure a ambientes fora do Azure."
        ],
        generalExplanation: [
            "A resposta correta é <strong>Sim</strong>.",
            "O Microsoft Defender for Cloud monitora tanto recursos no <strong>Azure</strong> quanto em <strong>ambientes locais (on-premises)</strong>.",
            "Ele fornece recursos de segurança abrangentes para proteger cargas de trabalho em nuvem e locais."
        ],
        realWorld: [
            "Organizações podem usar o <strong>Defender for Cloud</strong> para ver recomendações de segurança e alertas de ameaças em ambientes híbridos.",
            "Servidores locais conectados ao Azure (via Arc ou agentes) passam a ter <strong>postura de segurança centralizada</strong>.",
            "Isso garante <strong>consistência de segurança</strong> em ambientes distribuídos."
        ]
    },
    {
        id: 12,
        title: "Camada de acesso aos Arquivos no nível da conta",
        domain: "Armazenamento",
        prompt: "A camada de acesso aos Arquivos está definida no nível de armazenamento da conta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A camada de acesso aos Arquivos (Hot, Cool ou Premium) no Azure Files é definida no nível da conta de armazenamento. Ao criar uma conta, você escolhe a camada que melhor atende aos requisitos de desempenho e custo." },
            { correct: false, text: "Incorreta. A camada de acesso é definida no nível da conta de armazenamento, não apenas por compartilhamento individual." }
        ],
        glossary: [
            "Azure Files: serviço de compartilhamentos de arquivos gerenciados no Azure.",
            "Camada de acesso: define o custo e o desempenho do armazenamento (Hot, Cool, Premium).",
            "Conta de armazenamento: recurso que agrupa serviços de armazenamento do Azure."
        ],
        generalExplanation: [
            "A resposta é <strong>Sim</strong>.",
            "A camada de acesso aos Arquivos (Hot, Cool ou Premium) no Azure Files é definida no <strong>nível da conta de armazenamento</strong>.",
            "Ao criar uma conta de armazenamento do Azure, você escolhe a camada de acesso que melhor atende aos requisitos de desempenho e custo para seus compartilhamentos de arquivos.",
            "Uma vez definida, a camada se aplica a todos os compartilhamentos de arquivos na conta."
        ],
        realWorld: [
            "Uma empresa pode criar uma conta de armazenamento com camada <strong>Hot</strong> para compartilhamentos acessados com frequência.",
            "Outra conta com camada <strong>Cool</strong> pode ser usada para dados acessados esporadicamente.",
            "Para cargas de alto desempenho, usa-se <strong>Premium</strong>.",
            "Compreender isso ajuda no <strong>planejamento de custos e desempenho</strong>."
        ]
    },
    {
        id: 13,
        title: "Ordem de redundância do armazenamento do Azure",
        domain: "Armazenamento",
        prompt: "Organize as opções de redundância de conta de armazenamento da menos redundante à mais redundante. (1ª menos redundante, 2ª menos redundante, 3ª menos redundante)",
        options: [
            { letter: "A", text: "LRS → GRS → ZRS", correct: false },
            { letter: "B", text: "GRS → LRS → ZRS", correct: false },
            { letter: "C", text: "LRS → ZRS → GRS", correct: true },
            { letter: "D", text: "ZRS → GRS → LRS", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. GRS é mais redundante que ZRS, portanto não pode estar entre LRS e ZRS na ordem crescente." },
            { correct: false, text: "Incorreta. GRS é a opção mais redundante, não a menos." },
            { correct: true, text: "Correta. LRS replica os dados três vezes dentro de uma única região (menos redundante). ZRS replica em três zonas de disponibilidade dentro da mesma região (redundância intermediária). GRS replica os dados para uma região secundária, além da primária (mais redundante)." },
            { correct: false, text: "Incorreta. ZRS é mais redundante que LRS e GRS é o mais redundante, portanto essa ordem está incorreta." }
        ],
        glossary: [
            "LRS (Locally Redundant Storage): replicação local dentro de uma única região.",
            "ZRS (Zone-Redundant Storage): replicação em zonas de disponibilidade dentro da mesma região.",
            "GRS (Geo-Redundant Storage): replicação em uma região secundária, além da primária.",
            "RA-GRS (Read-Access Geo-Redundant Storage): GRS com acesso de leitura à região secundária."
        ],
        generalExplanation: [
            "A ordem correta da menos redundante à mais redundante é: <strong>LRS → ZRS → GRS</strong>.",
            "A durabilidade e disponibilidade aumentam nessa ordem:",
            "<strong>LRS</strong>: 3 réplicas em uma única região.",
            "<strong>ZRS</strong>: 3 réplicas em zonas de disponibilidade distintas.",
            "<strong>GRS</strong>: replicação adicional para uma região secundária."
        ],
        realWorld: [
            "Uma aplicação pode usar <strong>LRS</strong> para dados temporários ou não críticos.",
            "Usa <strong>ZRS</strong> para alta disponibilidade dentro de uma região.",
            "E <strong>GRS</strong> para dados críticos, com recuperação de desastres entre regiões.",
            "Escolher a redundância adequada equilibra <strong>custo e resiliência</strong>."
        ]
    },
    {
        id: 14,
        title: "Relatório de conformidade regulamentar no Defender for Cloud",
        domain: "Segurança",
        prompt: "Para o Microsoft Defender for Cloud, você pode baixar um relatório de conformidade regulamentar.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Defender for Cloud permite gerar relatórios de conformidade regulamentar." },
            { correct: true, text: "Correta. O Defender for Cloud oferece recursos para gerar relatórios de conformidade regulamentar, fornecendo informações sobre a conformidade de recursos com várias regulamentações de segurança." }
        ],
        glossary: [
            "Conformidade regulamentar: atendimento a normas e padrões de segurança e privacidade.",
            "Microsoft Defender for Cloud: plataforma de segurança e conformidade.",
            "Regulatory Compliance Dashboard: painel que mostra o status de conformidade em relação a padrões regulatórios."
        ],
        generalExplanation: [
            "A resposta correta é <strong>Sim</strong>.",
            "O Microsoft Defender for Cloud oferece recursos para gerar relatórios de conformidade regulamentar, permitindo avaliar e melhorar a postura de segurança da organização."
        ],
        realWorld: [
            "Equipes de segurança podem baixar relatórios de conformidade para <strong>auditorias internas e externas</strong>.",
            "Isso ajuda a demonstrar o atendimento a normas como <strong>ISO 27001, PCI DSS, LGPD</strong> e outras.",
            "Facilita a <strong>governança e a comunicação</strong> com stakeholders."
        ]
    },
    {
        id: 15,
        title: "Correspondência dos serviços de armazenamento do Azure",
        domain: "Armazenamento",
        prompt: "Faça correspondência dos serviços de armazenamento do Azure com as descrições apropriadas. Serviços: 1 - Armazenamento de Blobs; 2 - Armazenamento em Disco; 3 - Arquivos do Azure; 4 - Armazenamento de Filas.",
        options: [
            { letter: "A", text: "1→mensagens, 2→compartilhamento Windows, 3→N.D.A, 4→camada de acesso", correct: false },
            { letter: "B", text: "1→camada de acesso, 2→N.D.A, 3→compartilhamento Windows, 4→mensagens", correct: true },
            { letter: "C", text: "1→mensagens, 2→compartilhamento Windows, 3→camada de acesso, 4→N.D.A", correct: false },
            { letter: "D", text: "1→N.D.A, 2→compartilhamento Windows, 3→mensagens, 4→camada de acesso", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. As filas são usadas para mensagens e os blobs suportam a camada de acesso; a associação está invertida." },
            { correct: true, text: "Correta. O Armazenamento de Blobs pode ser configurado para usar a camada de acesso; o Armazenamento em Disco não corresponde a nenhuma das descrições (N.D.A); os Arquivos do Azure podem ser acessados como compartilhamento de rede de um dispositivo Windows; o Armazenamento de Filas é usado para troca confiável de mensagens entre aplicativos." },
            { correct: false, text: "Incorreta. Os blobs são usados para camadas de acesso, não para mensagens, e as filas são usadas para mensagens, não os blobs." },
            { correct: false, text: "Incorreta. As filas são usadas para mensagens e os blobs suportam camadas de acesso." }
        ],
        glossary: [
            "Armazenamento de Blobs: serviço para armazenar dados não estruturados em larga escala, com suporte a camadas de acesso (Hot, Cool, Archive).",
            "Armazenamento em Disco: discos gerenciados para máquinas virtuais Azure.",
            "Arquivos do Azure: compartilhamentos de arquivos gerenciados acessíveis via SMB/NFS.",
            "Armazenamento de Filas: serviço de filas de mensagens para comunicação assíncrona entre componentes."
        ],
        generalExplanation: [
            "A associação correta é:",
            "<strong>Armazenamento de Blobs</strong> → pode ser configurado para usar a <strong>camada de acesso</strong>.",
            "<strong>Armazenamento em Disco</strong> → <strong>N.D.A</strong> (nenhuma descrição se aplica).",
            "<strong>Arquivos do Azure</strong> → pode ser acessado como <strong>compartilhamento de rede de um dispositivo Windows</strong>.",
            "<strong>Armazenamento de Filas</strong> → usado para <strong>troca confiável de mensagens entre aplicativos</strong>."
        ],
        realWorld: [
            "Aplicações web podem usar <strong>blobs com camada Hot/Cool/Archive</strong> conforme o padrão de acesso.",
            "VMs usam <strong>discos gerenciados</strong> para armazenar SO e dados.",
            "Compartilhamentos Windows podem mapear <strong>Azure Files</strong> como unidade de rede.",
            "Microsserviços usam <strong>filas</strong> para comunicação assíncrona e desacoplamento."
        ]
    },
    {
        id: 16,
        title: "Modelos ARM - afirmações",
        domain: "Implantação",
        prompt: "Para cada afirmação, selecione Sim ou Não. (1) Você pode implantar modelos do Azure Resource Manager (ARM) usando o portal do Azure. (2) Os modelos ARM podem definir a infraestrutura usando código. (3) Cada recurso do Azure a ser implantado requer um modelo separado do ARM.",
        options: [
            { letter: "A", text: "Sim, Sim e Não", correct: true },
            { letter: "B", text: "Não, Sim e Não", correct: false },
            { letter: "C", text: "Sim, Não e Sim", correct: false },
            { letter: "D", text: "Não, Não e Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. (1) Sim — o portal do Azure permite implantar modelos ARM. (2) Sim — modelos ARM definem infraestrutura como código em JSON. (3) Não — um único modelo ARM pode definir múltiplos recursos." },
            { correct: false, text: "Incorreta. A primeira afirmação é verdadeira: é possível implantar modelos ARM pelo portal do Azure." },
            { correct: false, text: "Incorreta. A segunda afirmação é verdadeira: modelos ARM definem infraestrutura como código." },
            { correct: false, text: "Incorreta. A primeira e a segunda afirmações são verdadeiras, e a terceira é falsa." }
        ],
        glossary: [
            "Modelo ARM (Azure Resource Manager): arquivo JSON que define recursos e configurações para implantação declarativa no Azure.",
            "Infraestrutura como código (IaC): prática de definir e gerenciar infraestrutura por meio de arquivos de código versionáveis.",
            "Portal do Azure: interface web para gerenciamento de recursos, que também permite implantar modelos ARM."
        ],
        generalExplanation: [
            "(1) <strong>Sim</strong> — é possível implantar modelos ARM pelo portal do Azure.",
            "(2) <strong>Sim</strong> — modelos ARM definem infraestrutura como código em JSON.",
            "(3) <strong>Não</strong> — um único modelo ARM pode definir múltiplos recursos e configurações.",
            "Portanto, a sequência é: <strong>Sim, Sim e Não</strong>."
        ],
        realWorld: [
            "Equipes podem versionar <strong>modelos ARM</strong> em repositórios Git e implantá-los via pipeline CI/CD.",
            "Um único modelo pode provisionar <strong>VMs, redes, bancos e outros recursos</strong>, garantindo consistência.",
            "Isso reduz erros manuais e facilita <strong>auditoria e repetibilidade</strong>."
        ]
    },
    {
        id: 17,
        title: "CapEx e OpEx - afirmações",
        domain: "Gerenciamento de Custos",
        prompt: "Para cada afirmação, selecione Sim ou Não. (1) O modelo baseado em consumo é um exemplo de CapEx. (2) O pagamento de energia elétrica para um datacenter é um exemplo de OpEx. (3) A implantação de seu próprio datacenter é um exemplo de CapEx.",
        options: [
            { letter: "A", text: "Não, Não e Não", correct: false },
            { letter: "B", text: "Não, Sim e Sim", correct: true },
            { letter: "C", text: "Não, Sim e Não", correct: false },
            { letter: "D", text: "Não, Não e Sim", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. As afirmações 2 e 3 são verdadeiras." },
            { correct: true, text: "Correta. (1) Não — o modelo baseado em consumo é associado a OpEx, não CapEx. (2) Sim — energia elétrica é despesa operacional contínua (OpEx). (3) Sim — implantar um datacenter envolve investimento inicial significativo (CapEx)." },
            { correct: false, text: "Incorreta. A implantação de datacenter próprio é CapEx, portanto a terceira afirmação é verdadeira." },
            { correct: false, text: "Incorreta. A segunda afirmação também é verdadeira." }
        ],
        glossary: [
            "CapEx (Capital Expenditure): gastos de capital, investimentos iniciais em ativos de longo prazo.",
            "OpEx (Operational Expenditure): despesas operacionais contínuas, como consumo, energia e manutenção.",
            "Modelo baseado em consumo: pagamento pelo uso, típico de serviços em nuvem (OpEx)."
        ],
        generalExplanation: [
            "(1) <strong>Não</strong> — o modelo baseado em consumo é associado a <strong>OpEx</strong>.",
            "(2) <strong>Sim</strong> — o pagamento de energia elétrica é despesa operacional contínua (<strong>OpEx</strong>).",
            "(3) <strong>Sim</strong> — a implantação de datacenter próprio envolve investimento inicial (<strong>CapEx</strong>).",
            "Sequência: <strong>Não, Sim e Sim</strong>."
        ],
        realWorld: [
            "Migrar para a nuvem transforma muitos <strong>CapEx em OpEx</strong>, pois não é necessário comprar hardware antecipadamente.",
            "Ainda assim, custos operacionais contínuos (energia, suporte) permanecem como <strong>OpEx</strong>.",
            "Entender essa distinção ajuda no <strong>planejamento financeiro</strong> de projetos de TI."
        ]
    },
    {
        id: 18,
        title: "Nuvem privada, híbrida e internet",
        domain: "Conceitos de Nuvem",
        prompt: "Para cada afirmação, selecione Sim ou Não. (1) Uma empresa pode estender sua nuvem privada adicionando seus servidores físicos na nuvem pública. (2) Para criar uma nuvem híbrida, você precisa adicionar recursos à nuvem pública. (3) Uma nuvem deve estar desconectada da internet.",
        options: [
            { letter: "A", text: "Sim, Sim e Sim", correct: false },
            { letter: "B", text: "Não, Sim e Não", correct: true },
            { letter: "C", text: "Não, Não e Não", correct: false },
            { letter: "D", text: "Sim, Não e Sim", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A primeira e a terceira afirmações são falsas." },
            { correct: true, text: "Correta. (1) Não — adicionar servidores físicos à nuvem pública não estende a nuvem privada; isso caracteriza ambiente híbrido. (2) Sim — nuvem híbrida integra recursos privados e públicos. (3) Não — nuvens geralmente estão conectadas à internet para acesso e gerenciamento." },
            { correct: false, text: "Incorreta. A segunda afirmação é verdadeira: nuvem híbrida integra recursos públicos." },
            { correct: false, text: "Incorreta. A primeira afirmação é falsa e a terceira também é falsa." }
        ],
        glossary: [
            "Nuvem privada: infraestrutura dedicada a uma única organização.",
            "Nuvem pública: serviços oferecidos por provedores via internet.",
            "Nuvem híbrida: integração entre nuvem privada e pública."
        ],
        generalExplanation: [
            "(1) <strong>Não</strong> — adicionar servidores físicos à nuvem pública não estende a nuvem privada; isso caracteriza abordagem híbrida.",
            "(2) <strong>Sim</strong> — a nuvem híbrida integra recursos da nuvem privada e da nuvem pública.",
            "(3) <strong>Não</strong> — nuvens geralmente estão conectadas à internet para permitir acesso e gerenciamento.",
            "Sequência: <strong>Não, Sim e Não</strong>."
        ],
        realWorld: [
            "Empresas com requisitos regulatórios podem manter dados sensíveis em <strong>nuvem privada</strong> e usar <strong>nuvem pública</strong> para escalabilidade.",
            "A conectividade com a internet é essencial para acessar serviços e APIs na nuvem.",
            "Compreender isso ajuda no <strong>desenho de arquiteturas híbridas eficientes</strong>."
        ]
    },
    {
        id: 19,
        title: "Camada de acesso frequente (Hot)",
        domain: "Armazenamento",
        prompt: "A camada de acesso frequente é recomendada para dados que são acessados e modificados com frequência.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A camada Hot é otimizada para dados acessados e modificados com frequência, oferecendo desempenho mais rápido." },
            { correct: false, text: "Incorreta. A camada Hot é ideal para dados acessados com frequência, enquanto a Cool é para acesso esporádico." }
        ],
        glossary: [
            "Camada Hot: camada de armazenamento otimizada para dados acessados com frequência.",
            "Camada Cool: otimizada para dados acessados esporadicamente.",
            "Camada Archive: para dados raramente acessados."
        ],
        generalExplanation: [
            "A resposta é <strong>Sim</strong>.",
            "A camada de acesso frequente (Hot) é recomendada para dados acessados e modificados com frequência, proporcionando desempenho mais rápido, embora com custo de armazenamento maior que a Cool."
        ],
        realWorld: [
            "Dados de aplicações ativas, como <strong>catálogos de produtos</strong>, são armazenados em camada Hot.",
            "Backups antigos e dados históricos podem ir para <strong>Cool ou Archive</strong>.",
            "Escolher a camada correta equilibra <strong>desempenho e custo</strong>."
        ]
    },
    {
        id: 20,
        title: "Implantação repetível e confiável de recursos",
        domain: "Implantação",
        prompt: "Você planeja implantar novos recursos para cada unidade de negócios. Precisa garantir que os novos recursos sejam implantados usando um método repetível e confiável que aplique as mesmas configurações a cada recurso. O que você deve usar?",
        options: [
            { letter: "A", text: "Azure Arc", correct: false },
            { letter: "B", text: "Política do Azure", correct: false },
            { letter: "C", text: "Um grupo de recursos", correct: false },
            { letter: "D", text: "Modelos do Azure Resource Manager (ARM)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Azure Arc estende o gerenciamento a ambientes externos, mas não é a solução para implantações repetíveis e padronizadas." },
            { correct: false, text: "Incorreta. Azure Policy impõe regras, mas não é o mecanismo principal para implantação repetível de recursos." },
            { correct: false, text: "Incorreta. Grupos de recursos organizam recursos, mas não garantem implantação repetível com as mesmas configurações." },
            { correct: true, text: "Correta. Os modelos ARM permitem automação da implantação, definindo configuração e estrutura dos recursos em JSON, garantindo consistência, repetibilidade e controle." }
        ],
        glossary: [
            "Modelo ARM: arquivo JSON que define recursos e configurações para implantação declarativa.",
            "Infraestrutura como código (IaC): prática de definir infraestrutura por meio de código.",
            "Grupo de recursos: contêiner lógico para organizar recursos no Azure."
        ],
        generalExplanation: [
            "Para garantir implantação <strong>repetível e confiável</strong>, aplicando as mesmas configurações a cada recurso, deve-se usar os <strong>Modelos do Azure Resource Manager (ARM)</strong>.",
            "Eles permitem automação da implantação, definindo a configuração e a estrutura dos recursos em JSON, garantindo consistência entre diferentes unidades de negócios ou ambientes."
        ],
        realWorld: [
            "Equipes podem versionar <strong>modelos ARM</strong> e usá-los em pipelines CI/CD para implantar ambientes idênticos.",
            "Isso reduz erros manuais e garante <strong>padronização</strong> entre unidades de negócios.",
            "Também facilita <strong>auditoria e repetibilidade</strong> em ambientes complexos."
        ]
    },
    {
        id: 21,
        title: "Azure Arc - afirmações",
        domain: "Governança e Conformidade",
        prompt: "Para cada afirmação, selecione Sim ou Não. (1) O Azure Arc pode gerenciar servidores físicos que executam o Linux. (2) O Azure Arc pode gerenciar clusters do AKS em escala. (3) O Azure Arc pode gerenciar uma solução de banco de dados de terceiros hospedada fora do Azure.",
        options: [
            { letter: "A", text: "Não, Não e Sim", correct: false },
            { letter: "B", text: "Não, Não e Não", correct: false },
            { letter: "C", text: "Sim, Sim e Sim", correct: true },
            { letter: "D", text: "Sim, Sim e Não", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. As três afirmações são verdadeiras." },
            { correct: false, text: "Incorreta. As três afirmações são verdadeiras." },
            { correct: true, text: "Correta. O Azure Arc pode gerenciar servidores físicos Linux, clusters AKS em escala e soluções de banco de dados de terceiros hospedadas fora do Azure." },
            { correct: false, text: "Incorreta. A terceira afirmação também é verdadeira: o Azure Arc pode gerenciar bancos de dados de terceiros fora do Azure." }
        ],
        glossary: [
            "Azure Arc: serviço que estende o gerenciamento do Azure a ambientes híbridos, multicloud e de borda.",
            "AKS (Azure Kubernetes Service): serviço gerenciado de Kubernetes no Azure.",
            "Servidor habilitado para Arc: servidor físico ou VM conectado ao Azure Arc para gerenciamento centralizado."
        ],
        generalExplanation: [
            "(1) <strong>Sim</strong> — o Azure Arc pode gerenciar servidores físicos, incluindo Linux.",
            "(2) <strong>Sim</strong> — o Azure Arc pode gerenciar clusters Kubernetes, incluindo AKS, em escala.",
            "(3) <strong>Sim</strong> — o Azure Arc pode estender o gerenciamento a bancos de dados de terceiros hospedados fora do Azure.",
            "Sequência: <strong>Sim, Sim e Sim</strong>."
        ],
        realWorld: [
            "Empresas podem gerenciar <strong>servidores Linux locais</strong> e clusters Kubernetes em outras nuvens via Azure Arc.",
            "Bancos de dados SQL Server fora do Azure também podem ser gerenciados e monitorados.",
            "Isso permite <strong>governança unificada</strong> em ambientes distribuídos."
        ]
    },
    {
        id: 22,
        title: "Aplicativo desktop interagindo com o Azure",
        domain: "Serviços Principais do Azure",
        prompt: "O que um aplicativo de desktop deve usar para interagir com o Azure e gerenciar recursos?",
        options: [
            { letter: "A", text: "Azure Cloud Shell", correct: false },
            { letter: "B", text: "APIs", correct: true },
            { letter: "C", text: "Interface de linha de comando (CLI) do Azure", correct: false },
            { letter: "D", text: "Modelos do Azure Resource Manager (ARM)", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure Cloud Shell é um shell baseado em navegador, não a interface primária para aplicativos desktop." },
            { correct: true, text: "Correta. As APIs do Azure permitem que aplicativos locais se comuniquem com os serviços do Azure de maneira programática, facilitando integração e automação." },
            { correct: false, text: "Incorreta. A CLI do Azure é uma ferramenta de linha de comando, não a interface para aplicativos desktop." },
            { correct: false, text: "Incorreta. Modelos ARM são usados para implantações declarativas, não para interação programática de aplicativos desktop." }
        ],
        glossary: [
            "APIs do Azure: interfaces programáticas que permitem que aplicações interajam com serviços do Azure.",
            "Azure Cloud Shell: shell baseado em navegador para gerenciar recursos do Azure.",
            "CLI do Azure: interface de linha de comando para gerenciar recursos do Azure.",
            "Modelo ARM: arquivo JSON para implantações declarativas de recursos."
        ],
        generalExplanation: [
            "Para que um aplicativo de desktop interaja com o Azure e gerencie recursos, a opção mais apropriada é usar <strong>APIs do Azure</strong>.",
            "As APIs permitem que aplicativos locais se comuniquem com os serviços do Azure de forma programática, facilitando integração e automação de operações de gerenciamento."
        ],
        realWorld: [
            "Uma ferramenta interna de desktop pode usar <strong>APIs REST do Azure</strong> ou SDKs para listar, criar e gerenciar recursos.",
            "Isso permite integração com <strong>fluxos corporativos e automação</strong>.",
            "Também é a base para ferramentas de terceiros que gerenciam o Azure."
        ]
    },
    {
        id: 23,
        title: "Modelos de nuvem e suas vantagens",
        domain: "Conceitos de Nuvem",
        prompt: "Faça a correspondência do modelo de nuvem com a vantagem correta. (1) Sem necessidade de despesas de capital. (2) Fornece controle total sobre a segurança. (3) Fornece uma opção para usar recursos baseados em nuvem ou locais.",
        options: [
            { letter: "A", text: "Nuvem Pública, Nuvem Privada e Nuvem Híbrida.", correct: true },
            { letter: "B", text: "Nuvem Híbrida, Nuvem Pública e Nuvem Privada.", correct: false },
            { letter: "C", text: "Nuvem Privada, Nuvem Híbrida e Nuvem Pública.", correct: false },
            { letter: "D", text: "Todas alternativas estão corretas.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Nuvem pública elimina despesas de capital (modelo de consumo). Nuvem privada oferece controle total sobre segurança. Nuvem híbrida permite usar recursos em nuvem ou locais." },
            { correct: false, text: "Incorreta. A ordem está trocada: a nuvem pública é associada à ausência de CapEx." },
            { correct: false, text: "Incorreta. A nuvem privada oferece controle total sobre segurança, não a ausência de CapEx." },
            { correct: false, text: "Incorreta. Apenas uma sequência está correta." }
        ],
        glossary: [
            "Nuvem pública: serviços oferecidos por provedores, com modelo de consumo (sem CapEx).",
            "Nuvem privada: infraestrutura dedicada, com controle total sobre segurança e configurações.",
            "Nuvem híbrida: combinação de nuvem pública e privada, permitindo flexibilidade entre ambientes."
        ],
        generalExplanation: [
            "A correspondência correta é:",
            "<strong>Sem necessidade de despesas de capital</strong> → Nuvem Pública.",
            "<strong>Fornece controle total sobre a segurança</strong> → Nuvem Privada.",
            "<strong>Fornece uma opção para usar recursos baseados em nuvem ou locais</strong> → Nuvem Híbrida."
        ],
        realWorld: [
            "Startups preferem <strong>nuvem pública</strong> para evitar CapEx inicial.",
            "Bancos e órgãos regulados podem usar <strong>nuvem privada</strong> para controle rigoroso de segurança.",
            "Empresas em transição adotam <strong>nuvem híbrida</strong> para integrar ambientes legados e modernos."
        ]
    },
    {
        id: 24,
        title: "Remover IPs públicos não utilizados",
        domain: "Gerenciamento de Custos",
        prompt: "Sua empresa tem uma assinatura do Azure com recursos não utilizados (20 contas de usuário, 5 grupos, 10 endereços IP públicos, 10 interfaces de rede). Precisa reduzir custos. Solução: remover os endereços IP públicos não utilizados. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A remoção de IPs públicos não utilizados reduz custos, pois endereços IP públicos alocados, mas não em uso, podem gerar custos." },
            { correct: true, text: "Correta. Endereços IP públicos alocados, mas não em uso, podem contribuir para os custos. Ao removê-los, você otimiza os custos e garante que os recursos alocados estejam realmente em uso." }
        ],
        glossary: [
            "Endereço IP público: recurso do Azure usado para comunicação externa, que pode gerar custos quando alocado.",
            "Interfaces de rede (NIC): recursos que conectam VMs a redes virtuais."
        ],
        generalExplanation: [
            "A resposta é <strong>Sim</strong>.",
            "A remoção dos endereços IP públicos não utilizados é uma ação apropriada para reduzir custos no Azure.",
            "Endereços IP públicos alocados, mas não em uso, podem contribuir para os custos associados à alocação.",
            "Ao removê-los, você otimiza os custos e garante que os recursos alocados estejam realmente em uso."
        ],
        realWorld: [
            "Equipes de FinOps monitoram regularmente <strong>IPs públicos não utilizados</strong> e os removem para evitar custos desnecessários.",
            "Isso também reduz a <strong>superfície de ataque</strong> e melhora a postura de segurança.",
            "A prática faz parte de <strong>otimização contínua de custos</strong> na nuvem."
        ]
    },
    {
        id: 25,
        title: "Computação em nuvem - afirmações",
        domain: "Conceitos de Nuvem",
        prompt: "Para cada afirmação, selecione Sim ou Não. (1) Você deve ter servidores físicos para usar a computação em nuvem. (2) Você deve ter conexão com a internet para usar a computação em nuvem. (3) Os custos para aumentar a capacidade de computação em nuvem são menores que os custos para aumentar a capacidade de um data center local.",
        options: [
            { letter: "A", text: "Não, Sim e Sim", correct: true },
            { letter: "B", text: "Não, Sim e Não", correct: false },
            { letter: "C", text: "Sim, Sim e Não", correct: false },
            { letter: "D", text: "Sim, Não e Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. (1) Não — não é necessário possuir servidores físicos, pois os recursos são provisionados na infraestrutura do provedor. (2) Sim — geralmente é necessária conexão com a internet para acessar e gerenciar recursos. (3) Sim — na nuvem, você paga pelo uso e escala dinamicamente, sendo mais eficiente financeiramente que investir em hardware local." },
            { correct: false, text: "Incorreta. A terceira afirmação é verdadeira: escalar na nuvem costuma ser mais barato que expandir data center local." },
            { correct: false, text: "Incorreta. A primeira afirmação é falsa: não é necessário possuir servidores físicos." },
            { correct: false, text: "Incorreta. A primeira afirmação é falsa e a segunda é verdadeira." }
        ],
        glossary: [
            "Computação em nuvem: fornecimento de recursos de TI sob demanda via internet, com modelo de pagamento pelo uso.",
            "Escalabilidade: capacidade de aumentar ou diminuir recursos conforme a demanda.",
            "Data center local: infraestrutura física própria para hospedar sistemas."
        ],
        generalExplanation: [
            "(1) <strong>Não</strong> — na nuvem, você utiliza recursos virtuais fornecidos por provedores; não é necessário possuir servidores físicos.",
            "(2) <strong>Sim</strong> — geralmente é necessária conexão com a internet para acessar e gerenciar recursos na nuvem.",
            "(3) <strong>Sim</strong> — na nuvem, você paga pelo uso e escala dinamicamente, sendo mais eficiente financeiramente do que investir em hardware adicional em data center local.",
            "Sequência: <strong>Não, Sim e Sim</strong>."
        ],
        realWorld: [
            "Startups podem lançar produtos sem <strong>comprar servidores</strong>, usando nuvem pública.",
            "A escalabilidade permite lidar com picos de demanda <strong>sem investimento antecipado</strong>.",
            "Isso reduz <strong>riscos financeiros e operacionais</strong>."
        ]
    },
    {
        id: 26,
        title: "Ordem das camadas de defesa em profundidade",
        domain: "Segurança",
        prompt: "Você precisa concluir a estratégia de aprofundamento de defesa usada em um data center. Arraste as camadas apropriadas para as posições corretas (Camada 1, Camada 2, Camada 3), considerando: Segurança física, Perímetro e Aplicativo.",
        options: [
            { letter: "A", text: "Camada 1: Perímetro, Camada 2: Aplicativo, Camada 3: Segurança física", correct: false },
            { letter: "B", text: "Camada 1: Segurança física, Camada 2: Perímetro, Camada 3: Aplicativo", correct: true },
            { letter: "C", text: "Camada 1: Segurança física, Camada 2: Aplicativo, Camada 3: Perímetro", correct: false },
            { letter: "D", text: "Camada 1: Aplicativo, Camada 2: Segurança física, Camada 3: Perímetro", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A primeira linha de defesa é a segurança física, não o perímetro." },
            { correct: true, text: "Correta. A ordem das camadas de defesa em profundidade é: Segurança física → Identidade e acesso → Perímetro → Rede → Computação → Aplicativo → Dados. Considerando as opções fornecidas, a ordem correta é Segurança física, Perímetro e Aplicativo." },
            { correct: false, text: "Incorreta. O perímetro vem antes do aplicativo na defesa em profundidade." },
            { correct: false, text: "Incorreta. A segurança física é a primeira camada, não o aplicativo." }
        ],
        glossary: [
            "Defesa em profundidade: estratégia de segurança com múltiplas camadas de proteção.",
            "Segurança física: primeira linha de defesa, protegendo o hardware do datacenter.",
            "Perímetro: camada que filtra ataques em grande escala (ex.: proteção DDoS).",
            "Aplicativo: camada que garante que aplicações estejam seguras e livres de vulnerabilidades."
        ],
        generalExplanation: [
            "A ordem correta das camadas de defesa em profundidade é:",
            "<strong>Segurança física</strong> → primeira linha de defesa para proteger o hardware.",
            "<strong>Perímetro</strong> → filtra ataques em grande escala (ex.: DDoS).",
            "<strong>Aplicativo</strong> → garante que aplicações estejam seguras e livres de vulnerabilidades.",
            "Essa abordagem elimina a dependência de uma única camada de proteção e desacelera ataques."
        ],
        realWorld: [
            "Datacenters aplicam <strong>controle de acesso físico</strong>, <strong>firewalls de perímetro</strong> e <strong>proteções de aplicação</strong> (WAF, por exemplo).",
            "Cada camada adiciona <strong>proteção e visibilidade</strong>.",
            "Isso reduz riscos e melhora a <strong>resiliência a ataques</strong>."
        ]
    },
    {
        id: 27,
        title: "Definição de SLA do Azure",
        domain: "Governança e Conformidade",
        prompt: "Selecione a resposta que completa corretamente a frase. Um SLA do Azure é um contrato formal entre a Microsoft e um cliente que define _______________.",
        options: [
            { letter: "A", text: "um compromisso de entregar os recursos em um roteiro de tecnologia.", correct: false },
            { letter: "B", text: "os limites máximos de escalabilidade de uma infraestrutura disponível.", correct: false },
            { letter: "C", text: "um compromisso com os padrões de desempenho.", correct: true },
            { letter: "D", text: "os limites mínimos de escalabilidade de uma infraestrutura disponível.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. SLAs não tratam de roteiros de entrega de recursos." },
            { correct: false, text: "Incorreta. SLAs não definem limites máximos de escalabilidade." },
            { correct: true, text: "Correta. Um SLA define os padrões de desempenho que o cliente pode esperar do serviço Azure, incluindo tempo de atividade, velocidade de resposta e suporte." },
            { correct: false, text: "Incorreta. SLAs não definem limites mínimos de escalabilidade." }
        ],
        glossary: [
            "SLA (Service Level Agreement): contrato formal que define níveis de serviço esperados, como disponibilidade e desempenho.",
            "Tempo de atividade (uptime): percentual de tempo em que o serviço está disponível.",
            "Créditos de SLA: compensações oferecidas quando o SLA não é cumprido."
        ],
        generalExplanation: [
            "A resposta correta é: <strong>um compromisso com os padrões de desempenho</strong>.",
            "Um SLA do Azure é um contrato formal entre a Microsoft e o cliente que define os padrões de desempenho esperados, incluindo tempo de atividade, velocidade de resposta e suporte."
        ],
        realWorld: [
            "Empresas usam SLAs para <strong>planejar contingências</strong> e avaliar riscos.",
            "Se o SLA não for cumprido, podem ser devidos <strong>créditos de serviço</strong>.",
            "Isso orienta decisões de arquitetura e <strong>contratos com clientes</strong>."
        ]
    },
    {
        id: 28,
        title: "Formato dos modelos ARM",
        domain: "Implantação",
        prompt: "Selecione a resposta que completa corretamente a frase. Os modelos do Azure Resource Manager (ARM) usam o ______________.",
        options: [
            { letter: "A", text: "formato JSON. (JSON format)", correct: true },
            { letter: "B", text: "formato CSV. (HTML format)", correct: false },
            { letter: "C", text: "formato HTML. (CSV format)", correct: false },
            { letter: "D", text: "formato XML. (XML format)", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Os modelos ARM usam o formato JSON (JavaScript Object Notation) para definir a configuração e a estrutura dos recursos a serem implantados no Azure." },
            { correct: false, text: "Incorreta. Modelos ARM não usam formato CSV." },
            { correct: false, text: "Incorreta. Modelos ARM não usam formato HTML." },
            { correct: false, text: "Incorreta. Modelos ARM não usam formato XML." }
        ],
        glossary: [
            "JSON (JavaScript Object Notation): formato leve de troca de dados, amplamente usado em configurações e APIs.",
            "Modelo ARM: arquivo JSON que define recursos e configurações para implantação no Azure."
        ],
        generalExplanation: [
            "Os modelos ARM usam o <strong>formato JSON</strong>.",
            "JSON é um formato leve, legível por humanos e fácil de interpretar por máquinas, usado para representar dados estruturados.",
            "Modelos ARM descrevem recursos, configurações e podem ser versionados e automatizados."
        ],
        realWorld: [
            "Equipes versionam <strong>modelos ARM em JSON</strong> em repositórios Git.",
            "Pipelines CI/CD implantam esses modelos de forma automatizada e consistente.",
            "Isso facilita <strong>auditoria, repetibilidade e governança</strong>."
        ]
    },
    {
        id: 29,
        title: "Serviço de migração física de dados",
        domain: "Armazenamento",
        prompt: "Selecione a resposta que completa corretamente a frase. ______________ é um serviço de migração física usado para transferir grandes quantidades de dados de maneira rápida, econômica e confiável.",
        options: [
            { letter: "A", text: "Azure File Sync", correct: false },
            { letter: "B", text: "Azure Data Box", correct: true },
            { letter: "C", text: "Azure Migrate", correct: false },
            { letter: "D", text: "Azure Databricks", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure File Sync sincroniza arquivos entre servidores locais e Azure Files, não é um serviço de migração física de grandes volumes." },
            { correct: true, text: "Correta. O Azure Data Box é um serviço de migração física que permite transferência rápida, econômica e confiável de grandes quantidades de dados para o Azure, usando um dispositivo de armazenamento físico." },
            { correct: false, text: "Incorreta. O Azure Migrate é uma plataforma de migração de cargas de trabalho, mas não é um serviço de migração física baseado em dispositivo." },
            { correct: false, text: "Incorreta. O Azure Databricks é uma plataforma de análise de dados, não um serviço de migração física." }
        ],
        glossary: [
            "Azure Data Box: dispositivo físico para transferência de grandes volumes de dados ao Azure, útil quando a transferência pela rede não é prática.",
            "Azure File Sync: serviço que sincroniza arquivos entre servidores locais e Azure Files.",
            "Azure Migrate: plataforma para avaliação e migração de cargas de trabalho para o Azure.",
            "Azure Databricks: plataforma de análise de dados baseada em Apache Spark."
        ],
        generalExplanation: [
            "A resposta correta é <strong>Azure Data Box</strong>.",
            "É um serviço de migração física que permite transferir grandes quantidades de dados para o Azure de forma rápida, econômica e confiável, usando um dispositivo físico quando a transferência pela rede não é prática."
        ],
        realWorld: [
            "Empresas com <strong>terabytes ou petabytes</strong> de dados podem usar o Data Box para migração inicial.",
            "Isso evita gargalos de rede e reduz o tempo de transferência.",
            "Após a migração, dados incrementais podem ser sincronizados via rede."
        ]
    },
    {
        id: 30,
        title: "Computação em nuvem - CapEx, configuração e escalabilidade",
        domain: "Conceitos de Nuvem",
        prompt: "Para cada afirmação, selecione Sim ou Não. (1) A computação em nuvem oferece custos de gastos de capital (CAPEX) mais baixos do que implantações locais. (2) A computação em nuvem fornece as mesmas opções de configuração que as implantações locais. (3) A computação em nuvem pode escalar quando um negócio requer mudanças.",
        options: [
            { letter: "A", text: "Sim, Não e Sim", correct: true },
            { letter: "B", text: "Sim, Sim e Sim", correct: false },
            { letter: "C", text: "Sim, Sim e Não", correct: false },
            { letter: "D", text: "Não, Sim e Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. (1) Sim — a nuvem reduz CapEx, pois o modelo é baseado em consumo (OpEx). (2) Não — nem sempre é possível replicar exatamente as mesmas configurações locais, pois a nuvem pode ter restrições ou recursos específicos. (3) Sim — a nuvem oferece escalabilidade vertical e horizontal conforme a demanda." },
            { correct: false, text: "Incorreta. A segunda afirmação é falsa: a nuvem não fornece exatamente as mesmas opções de configuração que ambientes locais." },
            { correct: false, text: "Incorreta. A terceira afirmação é verdadeira: a nuvem pode escalar conforme a demanda." },
            { correct: false, text: "Incorreta. A primeira afirmação é verdadeira: a nuvem reduz CapEx." }
        ],
        glossary: [
            "CapEx: gastos de capital, investimentos iniciais em ativos.",
            "OpEx: despesas operacionais contínuas.",
            "Escalabilidade: capacidade de aumentar ou diminuir recursos conforme a demanda."
        ],
        generalExplanation: [
            "(1) <strong>Sim</strong> — a nuvem reduz CapEx, pois o modelo é baseado em consumo (OpEx).",
            "(2) <strong>Não</strong> — nem sempre é possível replicar exatamente as mesmas configurações locais na nuvem.",
            "(3) <strong>Sim</strong> — a nuvem pode escalar vertical ou horizontalmente conforme a demanda.",
            "Sequência: <strong>Sim, Não e Sim</strong>."
        ],
        realWorld: [
            "Startups evitam <strong>grandes investimentos iniciais</strong> usando nuvem.",
            "Arquiteturas precisam ser adaptadas às <strong>características da nuvem</strong>.",
            "A escalabilidade permite <strong>resposta rápida a mudanças de demanda</strong>."
        ]
    },
    {
        id: 31,
        title: "Camada Cool e backups de longo prazo",
        domain: "Armazenamento",
        prompt: "A camada de acesso moderado é recomendada para backups de longo prazo.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A camada Cool é recomendada para dados com acesso esporádico, não para backups de longo prazo. Para backups de longo prazo, a camada Archive é geralmente mais apropriada." },
            { correct: false, text: "Incorreta. A camada Cool não é a mais indicada para backups de longo prazo; a camada Archive é mais adequada para esse cenário." }
        ],
        glossary: [
            "Camada Cool: para dados acessados esporadicamente.",
            "Camada Archive: para dados raramente acessados, com menor custo de armazenamento e maior custo de recuperação."
        ],
        generalExplanation: [
            "A resposta é <strong>Não</strong>.",
            "A camada Cool é recomendada para dados com acesso esporádico, não para backups de longo prazo.",
            "Para backups de longo prazo, onde o acesso é menos frequente, a camada <strong>Archive</strong> é geralmente mais apropriada."
        ],
        realWorld: [
            "Backups de longo prazo podem ser armazenados em <strong>Archive</strong> para reduzir custos.",
            "Dados de acesso ocasional (ex.: relatórios mensais) podem usar <strong>Cool</strong>.",
            "Escolher a camada correta ajuda a <strong>otimizar custos</strong>."
        ]
    },
    {
        id: 32,
        title: "Gerenciamento unificado de recursos não Azure no ARM",
        domain: "Governança e Conformidade",
        prompt: "O que fornece uma maneira unificada de projetar e gerenciar recursos não Azure no Azure Resource Manager (ARM)?",
        options: [
            { letter: "A", text: "Azure AD Connect", correct: false },
            { letter: "B", text: "Azure Migrate", correct: false },
            { letter: "C", text: "Azure Front Door", correct: false },
            { letter: "D", text: "Azure Arc", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure AD Connect sincroniza identidades, não gerencia recursos não Azure no ARM." },
            { correct: false, text: "Incorreta. O Azure Migrate é voltado à migração de cargas, não ao gerenciamento unificado no ARM." },
            { correct: false, text: "Incorreta. O Azure Front Door é um serviço de CDN e balanceamento, sem relação com gerenciamento de recursos no ARM." },
            { correct: true, text: "Correta. O Azure Arc estende a experiência do Azure para ambientes não Azure, permitindo gerenciar e aplicar políticas consistentes a recursos locais, em outras nuvens e em ambientes híbridos, com abordagem unificada no Azure Resource Manager." }
        ],
        glossary: [
            "Azure Arc: serviço que estende o gerenciamento do Azure a ambientes externos.",
            "Azure Resource Manager (ARM): serviço de gerenciamento e implantação de recursos no Azure.",
            "Azure AD Connect: sincronização de identidades locais com Azure AD."
        ],
        generalExplanation: [
            "O serviço que fornece uma maneira unificada de projetar e gerenciar recursos não Azure no ARM é o <strong>Azure Arc</strong>.",
            "Ele estende a experiência do Azure para ambientes não Azure, permitindo gerenciar e aplicar políticas consistentes a recursos locais, em outras nuvens e em ambientes híbridos."
        ],
        realWorld: [
            "Empresas podem gerenciar <strong>servidores locais, clusters Kubernetes e bancos de dados</strong> de outras nuvens via Azure Arc.",
            "Isso centraliza governança e <strong>padroniza políticas</strong>.",
            "Facilita a <strong>adoção híbrida e multicloud</strong> com controle unificado."
        ]
    },
    {
        id: 33,
        title: "Dados na camada Archive",
        domain: "Armazenamento",
        prompt: "Selecione a resposta que completa corretamente a frase. Dados armazenados no nível de acesso de arquivo de uma conta de armazenamento do Azure _____________.",
        options: [
            { letter: "A", text: "devem ser restaurados antes que os dados possam ser acessados.", correct: false },
            { letter: "B", text: "devem ser reidratados antes que os dados possam ser acessados.", correct: true },
            { letter: "C", text: "pode ser acessado a qualquer momento usando azcopy.exe.", correct: false },
            { letter: "D", text: "só pode ser lido usando o Backup do Azure.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O termo técnico usado no Azure é 'reidratação', não 'restauração', para dados na camada Archive." },
            { correct: true, text: "Correta. Dados na camada Archive precisam ser reidratados (movidos para uma camada online) antes de poderem ser acessados." },
            { correct: false, text: "Incorreta. O acesso não é imediato; é necessário reidratar os dados primeiro." },
            { correct: false, text: "Incorreta. Os dados podem ser acessados após reidratação, não apenas via Backup do Azure." }
        ],
        glossary: [
            "Camada Archive: camada de armazenamento de menor custo, para dados raramente acessados.",
            "Reidratação: processo de mover dados da camada Archive para uma camada online (Hot ou Cool) para acesso.",
            "azcopy: ferramenta de linha de comando para transferência de dados no Azure Storage."
        ],
        generalExplanation: [
            "A resposta correta é: <strong>devem ser reidratados antes que os dados possam ser acessados</strong>.",
            "Quando os dados são armazenados na camada Archive, eles estão em estado offline e precisam passar por um processo de reidratação para serem acessados.",
            "A reidratação move os dados para uma camada online (Hot ou Cool), com prioridade padrão ou alta."
        ],
        realWorld: [
            "Backups antigos e dados históricos são armazenados em <strong>Archive</strong> para reduzir custos.",
            "Antes de consultá-los, é necessário <strong>reidratar</strong>, o que pode levar horas.",
            "Isso impacta o <strong>planejamento de recuperação e acesso</strong> a dados."
        ]
    },
    {
        id: 34,
        title: "Fatores que afetam os custos do Azure",
        domain: "Gerenciamento de Custos",
        prompt: "Quais são os dois fatores que afetam os custos do Azure? Cada resposta correta apresenta uma solução completa.",
        options: [
            { letter: "A", text: "data e hora de uso", correct: false },
            { letter: "B", text: "seleção de zona de disponibilidade", correct: false },
            { letter: "C", text: "uso de recursos", correct: true },
            { letter: "D", text: "localização do recurso", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Data e hora de uso não são fatores diretos de custo no Azure." },
            { correct: false, text: "Incorreta. A seleção de zona de disponibilidade pode influenciar, mas não é um dos principais fatores de custo." },
            { correct: true, text: "Correta. O uso de recursos afeta diretamente os custos: quantidade de armazenamento, poder computacional, largura de banda, etc." },
            { correct: true, text: "Correta. A localização geográfica dos recursos influencia os custos, pois diferentes regiões têm preços diferentes para os mesmos serviços." }
        ],
        glossary: [
            "Uso de recursos: quantidade consumida de serviços, como CPU, armazenamento e rede.",
            "Localização do recurso: região do Azure onde o recurso está implantado, que impacta preços."
        ],
        generalExplanation: [
            "Os dois fatores que afetam os custos do Azure são: <strong>Uso de recursos</strong> e <strong>Localização do recurso</strong>.",
            "Os custos são diretamente afetados pelo uso dos recursos (armazenamento, computação, rede) e pela região onde os recursos estão implantados, pois diferentes regiões têm preços diferentes."
        ],
        realWorld: [
            "Escolher uma <strong>região mais barata</strong> pode reduzir custos, mas deve considerar latência e conformidade.",
            "Monitorar o <strong>uso de recursos</strong> evita desperdícios.",
            "Esses fatores orientam o <strong>planejamento de custos</strong>."
        ]
    },
    {
        id: 35,
        title: "Tags de recursos para cobrança",
        domain: "Gerenciamento de Custos",
        prompt: "Quais são os dois cenários que são casos de uso de cobrança comuns para tags de recursos? Cada resposta correta apresenta uma solução completa.",
        options: [
            { letter: "A", text: "identificando regiões de custo mais baixo", correct: false },
            { letter: "B", text: "categorização de custos por departamento", correct: true },
            { letter: "C", text: "redimensionando máquinas virtuais subutilizadas", correct: false },
            { letter: "D", text: "associando custos com diferentes ambientes", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Tags não identificam regiões de custo mais baixo; isso depende de análise de preços por região." },
            { correct: true, text: "Correta. Tags podem ser usadas para categorizar recursos por departamento, permitindo visão granular dos custos." },
            { correct: false, text: "Incorreta. Redimensionamento de VMs subutilizadas é uma ação de otimização, não um caso de uso de tags para cobrança." },
            { correct: true, text: "Correta. Tags podem associar custos com diferentes ambientes (produção, desenvolvimento, teste), ajudando na análise de custos por ambiente." }
        ],
        glossary: [
            "Tags de recursos: pares chave-valor usados para organizar recursos e alocar custos.",
            "Categorização de custos: agrupamento de custos por critérios como departamento ou ambiente."
        ],
        generalExplanation: [
            "Os dois cenários comuns de uso de tags para cobrança são: <strong>Categorização de custos por departamento</strong> e <strong>Associando custos com diferentes ambientes</strong>.",
            "Tags permitem visão granular dos custos e ajudam na alocação e análise financeira."
        ],
        realWorld: [
            "Uma empresa pode usar tags como <code>Departamento: Financeiro</code> e <code>Ambiente: Produção</code>.",
            "Isso permite <strong>relatórios de custos precisos</strong> e <strong>chargeback interno</strong>.",
            "Também facilita <strong>otimização e governança</strong>."
        ]
    },
    {
        id: 36,
        title: "Benefícios da nuvem - elasticidade, recuperação e agilidade",
        domain: "Conceitos de Nuvem",
        prompt: "Combine os benefícios da computação em nuvem com os requisitos apropriados. (1) A capacidade de dimensionar dinamicamente os recursos disponíveis para um aplicativo de nuvem. (2) A capacidade de usar serviços de backup baseados em nuvem para restaurar recursos em caso de interrupção. (3) A capacidade de implantar e configurar rapidamente recursos baseados em nuvem à medida que os requisitos do aplicativo mudam.",
        options: [
            { letter: "A", text: "Elasticidade, Recuperação de desastres e Agilidade.", correct: true },
            { letter: "B", text: "Elasticidade, Agilidade e Recuperação de desastres", correct: false },
            { letter: "C", text: "Agilidade, Elasticidade e Recuperação de desastres.", correct: false },
            { letter: "D", text: "Recuperação de desastres, Agilidade e Elasticidade.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. (1) Elasticidade — dimensionar dinamicamente recursos. (2) Recuperação de desastres — usar backups para restaurar recursos. (3) Agilidade — implantar e configurar rapidamente recursos conforme requisitos mudam." },
            { correct: false, text: "Incorreta. A segunda afirmação corresponde a Recuperação de Desastres, não a Agilidade." },
            { correct: false, text: "Incorreta. A primeira afirmação corresponde a Elasticidade, não a Agilidade." },
            { correct: false, text: "Incorreta. A ordem está incorreta em relação às descrições fornecidas." }
        ],
        glossary: [
            "Elasticidade: capacidade de dimensionar recursos dinamicamente conforme a demanda.",
            "Recuperação de desastres: capacidade de restaurar recursos e dados após interrupções.",
            "Agilidade: capacidade de implantar e configurar recursos rapidamente."
        ],
        generalExplanation: [
            "A correspondência correta é:",
            "<strong>Elasticidade</strong> → dimensionar dinamicamente recursos.",
            "<strong>Recuperação de desastres</strong> → usar backups em nuvem para restaurar recursos em caso de interrupção.",
            "<strong>Agilidade</strong> → implantar e configurar rapidamente recursos conforme requisitos mudam."
        ],
        realWorld: [
            "Aplicações podem escalar automaticamente em picos de demanda (<strong>elasticidade</strong>).",
            "Backups em nuvem permitem recuperação rápida após falhas (<strong>recuperação de desastres</strong>).",
            "Equipes podem provisionar ambientes rapidamente (<strong>agilidade</strong>), acelerando entregas."
        ]
    },
    {
        id: 37,
        title: "Vantagem da nuvem pública para servidores locais",
        domain: "Conceitos de Nuvem",
        prompt: "Você planeja migrar vários servidores de uma rede local para o Azure. Qual é a vantagem de usar um serviço de nuvem pública para os servidores em uma rede local?",
        options: [
            { letter: "A", text: "A nuvem pública é uma solução de crowd-sourcing que fornece às corporações a capacidade de aprimorar a nuvem.", correct: false },
            { letter: "B", text: "Todos os recursos públicos em nuvem podem ser acessados gratuitamente por todos os membros do público.", correct: false },
            { letter: "C", text: "A nuvem pública é propriedade do público, NÃO de uma corporação privada.", correct: false },
            { letter: "D", text: "A nuvem pública é uma entidade compartilhada por meio da qual várias corporações usam, cada uma, uma parte dos recursos da nuvem.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Nuvem pública não é crowd-sourcing." },
            { correct: false, text: "Incorreta. Recursos em nuvem pública não são gratuitos; o modelo é baseado em consumo." },
            { correct: false, text: "Incorreta. A nuvem pública é operada por provedores privados, não pelo público." },
            { correct: true, text: "Correta. A nuvem pública é uma entidade compartilhada, onde várias organizações usam parte dos recursos conforme necessário, com escalabilidade, flexibilidade e pagamento pelo uso." }
        ],
        glossary: [
            "Nuvem pública: serviços oferecidos por provedores terceiros, com infraestrutura compartilhada entre clientes.",
            "Modelo de consumo: pagamento pelo uso dos recursos."
        ],
        generalExplanation: [
            "A vantagem é que a <strong>nuvem pública é uma entidade compartilhada</strong> por meio da qual várias corporações usam, cada uma, uma parte dos recursos da nuvem.",
            "Isso permite escalabilidade, flexibilidade e pagamento pelo uso, tornando-a atraente para migração."
        ],
        realWorld: [
            "Empresas podem migrar servidores locais para a <strong>nuvem pública</strong> e reduzir custos com infraestrutura.",
            "A escalabilidade permite lidar com picos de demanda.",
            "O modelo de consumo <strong>alinha custos ao uso real</strong>."
        ]
    },
    {
        id: 38,
        title: "AzCopy, Storage Explorer e File Sync",
        domain: "Armazenamento",
        prompt: "Para cada declaração, selecione Sim ou Não. (1) AzCopy é um utilitário de linha de comando usado para copiar blobs ou arquivos de ou para uma conta de armazenamento. (2) O Azure Storage Explorer é um serviço de migração hospedado na nuvem usado para transferir grandes quantidades de dados. (3) A Sincronização de Arquivos do Azure sincroniza arquivos e pastas entre Arquivos do Azure e servidores de arquivos do Windows.",
        options: [
            { letter: "A", text: "Sim, Sim e Sim", correct: false },
            { letter: "B", text: "Sim, Não e Sim", correct: true },
            { letter: "C", text: "Sim, Sim e Não", correct: false },
            { letter: "D", text: "Não, Não e Sim", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A segunda afirmação é falsa: o Storage Explorer não é um serviço de migração hospedado na nuvem." },
            { correct: true, text: "Correta. (1) Sim — AzCopy é um utilitário de linha de comando para copiar dados. (2) Não — o Storage Explorer é uma ferramenta de gerenciamento, não um serviço de migração em nuvem. (3) Sim — o Azure File Sync sincroniza arquivos entre Azure Files e servidores Windows." },
            { correct: false, text: "Incorreta. A segunda afirmação é falsa e a terceira é verdadeira." },
            { correct: false, text: "Incorreta. A primeira afirmação é verdadeira." }
        ],
        glossary: [
            "AzCopy: utilitário de linha de comando para copiar dados para/de contas de armazenamento do Azure.",
            "Azure Storage Explorer: ferramenta gráfica para gerenciar recursos de armazenamento do Azure.",
            "Azure File Sync: serviço que sincroniza arquivos entre servidores Windows e Azure Files."
        ],
        generalExplanation: [
            "(1) <strong>Sim</strong> — AzCopy é um utilitário de linha de comando usado para copiar blobs ou arquivos de ou para uma conta de armazenamento.",
            "(2) <strong>Não</strong> — o Azure Storage Explorer é uma ferramenta de gerenciamento, não um serviço de migração hospedado na nuvem.",
            "(3) <strong>Sim</strong> — a Sincronização de Arquivos do Azure sincroniza arquivos e pastas entre Azure Files e servidores de arquivos Windows.",
            "Sequência: <strong>Sim, Não e Sim</strong>."
        ],
        realWorld: [
            "Equipes usam <strong>AzCopy</strong> em scripts para transferir grandes volumes de dados.",
            "<strong>Storage Explorer</strong> é usado para inspeção visual e gerenciamento de recursos.",
            "<strong>File Sync</strong> mantém dados sincronizados entre ambientes locais e nuvem."
        ]
    },
    {
        id: 39,
        title: "CapEx, OpEx e custos de VMs - afirmações",
        domain: "Gerenciamento de Custos",
        prompt: "Para cada declaração, selecione Sim ou Não. (1) A Azure proporciona a flexibilidade entre despesas de Capital (CapEx) e Despesas Operacionais (OpEx). (2) Se você criar duas Máquinas Virtuais na Azure que utilizam o tamanho B2S, cada uma das máquinas sempre vão gerar os mesmos custos mensais. (3) Quando uma Máquina Virtual da Azure é parada, você continua pagando os custos de armazenamento associados à máquina virtual.",
        options: [
            { letter: "A", text: "Sim, Não e Sim.", correct: true },
            { letter: "B", text: "Não, Não e Não.", correct: false },
            { letter: "C", text: "Não, Sim e Não.", correct: false },
            { letter: "D", text: "Sim, Sim e Sim.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. (1) Sim — a Azure oferece flexibilidade entre CapEx e OpEx. (2) Não — outros fatores (tempo de execução, descontos, recursos adicionais) influenciam os custos mensais. (3) Sim — mesmo com a VM parada, os custos de armazenamento dos discos continuam a ser aplicados." },
            { correct: false, text: "Incorreta. As afirmações 1 e 3 são verdadeiras." },
            { correct: false, text: "Incorreta. A primeira afirmação é verdadeira: a Azure oferece flexibilidade entre CapEx e OpEx." },
            { correct: false, text: "Incorreta. A segunda afirmação é falsa: os custos podem variar." }
        ],
        glossary: [
            "CapEx: gastos de capital, investimentos iniciais.",
            "OpEx: despesas operacionais contínuas.",
            "B2S: tamanho de VM da família B (burstable) com 2 vCPUs.",
            "Custos de armazenamento: custos associados aos discos gerenciados, independentes do estado da VM."
        ],
        generalExplanation: [
            "(1) <strong>Sim</strong> — a Azure proporciona flexibilidade entre CapEx e OpEx.",
            "(2) <strong>Não</strong> — embora VMs do mesmo tamanho tenham custos base semelhantes, fatores como tempo de execução, descontos e recursos adicionais podem influenciar os custos mensais.",
            "(3) <strong>Sim</strong> — quando uma VM é parada, os custos de armazenamento dos discos continuam a ser aplicados.",
            "Sequência: <strong>Sim, Não e Sim</strong>."
        ],
        realWorld: [
            "Empresas podem usar <strong>reserved instances</strong> para reduzir custos de longo prazo (CapEx-like).",
            "Monitorar o <strong>tempo de execução</strong> e desalocar VMs não utilizadas reduz custos.",
            "Desanexar discos não utilizados também evita <strong>custos desnecessários</strong>."
        ]
    },
    {
        id: 40,
        title: "Característica que NÃO é de Cloud Computing",
        domain: "Conceitos de Nuvem",
        prompt: "Qual dos seguintes não é uma característica de Cloud Computing?",
        options: [
            { letter: "A", text: "Capacidade limitada de serviços não-escaláveis", correct: true },
            { letter: "B", text: "Inovação mais rápida", correct: false },
            { letter: "C", text: "Capacidade de aumentar e diminuir a hora que necessitar.", correct: false },
            { letter: "D", text: "Reconhecimento de voz e outros serviços cognitivos", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A capacidade limitada de serviços não-escaláveis não é característica de cloud computing, pois a nuvem oferece escalabilidade." },
            { correct: false, text: "Incorreta. Inovação mais rápida é uma característica comum da nuvem." },
            { correct: false, text: "Incorreta. A capacidade de aumentar e diminuir recursos conforme necessário é uma característica central da nuvem." },
            { correct: false, text: "Incorreta. Reconhecimento de voz e serviços cognitivos são serviços comuns em nuvem." }
        ],
        glossary: [
            "Escalabilidade: capacidade de aumentar ou diminuir recursos conforme a demanda.",
            "Serviços cognitivos: serviços de IA, como reconhecimento de voz e visão computacional."
        ],
        generalExplanation: [
            "A característica que não se alinha com Cloud Computing é: <strong>Capacidade limitada de serviços não-escaláveis</strong>.",
            "Na computação em nuvem, a capacidade é escalável, permitindo aumentar ou diminuir recursos conforme necessário.",
            "As demais opções (inovação mais rápida, serviços cognitivos, escalabilidade) são características comuns da nuvem."
        ],
        realWorld: [
            "Aplicações em nuvem podem <strong>escalar automaticamente</strong> conforme a demanda.",
            "Serviços cognitivos permitem <strong>inovação rápida</strong> sem infraestrutura dedicada.",
            "A ausência de escalabilidade é típica de ambientes <strong>locais tradicionais</strong>."
        ]
    },
    {
        id: 41,
        title: "Recurso não utilizado a remover para reduzir custos",
        domain: "Gerenciamento de Custos",
        prompt: "Sua empresa tem uma assinatura do Azure com recursos não utilizados (20 contas de usuário, 5 grupos, 10 endereços IP públicos, 10 interfaces de rede). Precisa reduzir custos. Quais recursos não utilizados você deve remover?",
        options: [
            { letter: "A", text: "os grupos", correct: false },
            { letter: "B", text: "as interfaces de rede", correct: false },
            { letter: "C", text: "os endereços IP públicos", correct: true },
            { letter: "D", text: "as contas de usuário", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Grupos não geram custos diretos." },
            { correct: false, text: "Incorreta. Interfaces de rede podem gerar custos, mas os IPs públicos não utilizados são mais relevantes para redução de custos." },
            { correct: true, text: "Correta. Remover endereços IP públicos não utilizados ajuda a otimizar custos, pois IPs públicos alocados podem gerar cobrança." },
            { correct: false, text: "Incorreta. Contas de usuário no Azure AD não geram custos diretos." }
        ],
        glossary: [
            "Endereço IP público: recurso do Azure que pode gerar custos quando alocado.",
            "Interface de rede (NIC): conecta VMs a redes virtuais.",
            "Azure AD: serviço de identidade e acesso."
        ],
        generalExplanation: [
            "Para reduzir custos, deve-se remover os <strong>endereços IP públicos</strong> não utilizados.",
            "Endereços IP públicos alocados podem contribuir para os custos; removê-los otimiza os gastos e garante que os recursos alocados estejam realmente em uso."
        ],
        realWorld: [
            "Equipes de FinOps monitoram <strong>IPs públicos ociosos</strong> e os removem.",
            "Isso reduz custos e <strong>superfície de ataque</strong>.",
            "Faz parte da <strong>otimização contínua de custos</strong>."
        ]
    },
    {
        id: 42,
        title: "Solução de armazenamento para unidade de rede Windows",
        domain: "Armazenamento",
        prompt: "Você pretende mapear uma unidade de rede de vários computadores que executam o Windows 10 para o Armazenamento do Azure. Precisa criar uma solução de armazenamento do Azure para a unidade mapeada planejada. O que você deve criar?",
        options: [
            { letter: "A", text: "Um banco de dados SQL do Azure.", correct: false },
            { letter: "B", text: "Um serviço de Blob em uma conta de armazenamento.", correct: false },
            { letter: "C", text: "Um disco de dados de máquina virtual.", correct: false },
            { letter: "D", text: "Um serviço de Arquivo em uma conta de armazenamento.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Banco de dados SQL não fornece compartilhamento de arquivos." },
            { correct: false, text: "Incorreta. Blobs não fornecem mapeamento de unidade de rede via SMB." },
            { correct: false, text: "Incorreta. Discos de VM são associados a uma única VM, não compartilhados entre várias máquinas." },
            { correct: true, text: "Correta. O Azure Files fornece compartilhamentos de arquivos acessíveis via SMB, permitindo mapear uma unidade de rede em vários computadores Windows 10." }
        ],
        glossary: [
            "Azure Files: serviço de compartilhamentos de arquivos gerenciados, acessível via SMB/NFS.",
            "SMB (Server Message Block): protocolo de compartilhamento de arquivos usado pelo Windows.",
            "Blob Storage: serviço para armazenar dados não estruturados, sem protocolo SMB.",
            "Disco de dados de VM: disco gerenciado associado a uma VM específica."
        ],
        generalExplanation: [
            "A opção correta é: <strong>Um serviço de Arquivo em uma conta de armazenamento</strong>.",
            "O Azure Files fornece compartilhamentos de arquivos acessíveis via SMB, permitindo mapear uma unidade de rede em vários computadores Windows 10.",
            "Os compartilhamentos podem ser acessados simultaneamente por várias máquinas, tanto no Azure quanto localmente."
        ],
        realWorld: [
            "Empresas usam <strong>Azure Files</strong> para compartilhar arquivos entre VMs e máquinas locais.",
            "A unidade mapeada pode ser configurada via <code>net use</code> ou GPO.",
            "Isso simplifica o <strong>compartilhamento de dados</strong> em ambientes híbridos."
        ]
    }
]