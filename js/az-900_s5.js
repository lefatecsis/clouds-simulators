const originalQuestions = [
    {
        id: 1,
        title: "Conjuntos de escala e falha de datacenter",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Você planeja implantar várias máquinas virtuais do Azure. Você precisa garantir que os serviços em execução nas máquinas virtuais estejam disponíveis se um único datacenter falhar. Solução: Você implanta as máquinas virtuais em dois ou mais conjuntos de escala. Isso cumpre o objetivo?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Implantar máquinas virtuais em dois ou mais conjuntos de escala não garante automaticamente a disponibilidade dos serviços se um único datacenter falhar. Conjuntos de escala são projetados principalmente para escalabilidade automática, ou seja, aumentar ou diminuir o número de instâncias com base na carga de trabalho." },
            { correct: false, text: "Incorreta. Conjuntos de escala não oferecem redundância geográfica por si só. Para garantir a disponibilidade em caso de falha de um datacenter, seria mais apropriado distribuir as máquinas virtuais entre diferentes regiões do Azure ou usar conjuntos de disponibilidade, que distribuem VMs em domínios de falha e atualização distintos." }
        ],
        glossary: [
            "Conjunto de escala (Scale Set): grupo de instâncias de VM idênticas que pode ser escalado automaticamente com base na demanda.",
            "Conjunto de disponibilidade: agrupamento lógico de VMs que distribui as instâncias entre domínios de falha e atualização dentro de uma região, garantindo alta disponibilidade.",
            "Domínio de falha: agrupamento físico de hardware que compartilha a mesma fonte de energia e switch de rede.",
            "Domínio de atualização: agrupamento lógico de VMs que podem ser reiniciadas simultaneamente durante manutenções da plataforma.",
            "Região do Azure: área geográfica contendo um ou mais datacenters conectados por uma rede de baixa latência.",
            "Redundância geográfica: distribuição de recursos entre regiões diferentes para garantir continuidade em caso de falha regional."
        ],
        generalExplanation: [
            "A resposta \"Não\" está correta. Implantar máquinas virtuais em dois ou mais conjuntos de escala não garante automaticamente a disponibilidade dos serviços se um único datacenter falhar. Conjuntos de escala são projetados principalmente para escalabilidade automática, aumentando ou diminuindo instâncias conforme a carga.",
            "Para garantir disponibilidade em caso de falha de um único datacenter, seria mais apropriado usar a <strong>redundância geográfica</strong>, distribuindo as VMs entre diferentes regiões do Azure, ou usar <strong>conjuntos de disponibilidade</strong> dentro de uma região.",
            "Essa abordagem ajudaria a garantir a continuidade dos serviços mesmo se um datacenter ou uma região inteira enfrentar uma interrupção."
        ],
        realWorld: [
            "Uma aplicação web crítica pode ser implantada em um conjunto de escala para lidar com picos de tráfego, mas para proteção contra falha de datacenter deve-se usar múltiplas regiões ou conjuntos de disponibilidade.",
            "Equipes de arquitetura combinam conjuntos de escala (para elasticidade) com conjuntos de disponibilidade ou múltiplas regiões (para resiliência), garantindo tanto desempenho quanto continuidade.",
            "Em cenários de conformidade, a distribuição geográfica também atende requisitos regulatórios de continuidade de negócios."
        ]
    },
    {
        id: 2,
        title: "Zonas de Disponibilidade do Azure",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Uma Zona de Disponibilidade no Azure tem locais fisicamente separados em dois continentes. Instruções: Reveja o texto destacado. Se ele corrigir a declaração, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "dentro de uma única região do Azure", correct: true },
            { letter: "B", text: "dentro de um único datacenter Azure", correct: false },
            { letter: "C", text: "dentro de múltiplas regiões do Azure", correct: false },
            { letter: "D", text: "Nenhuma mudança é necessária.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. As Zonas de Disponibilidade no Azure são compostas por locais fisicamente separados, mas esses locais estão dentro de uma única região do Azure, não em continentes diferentes. Elas são projetadas para fornecer alta disponibilidade e redundância dentro da mesma região." },
            { correct: false, text: "Incorreta. Uma Zona de Disponibilidade não é um único datacenter, mas sim um ou mais datacenters fisicamente separados dentro de uma região." },
            { correct: false, text: "Incorreta. As Zonas de Disponibilidade não abrangem múltiplas regiões; elas são um conceito intra-região." },
            { correct: false, text: "Incorreta. A afirmação original está errada, pois menciona \"dois continentes\", quando na verdade as zonas estão dentro de uma única região." }
        ],
        glossary: [
            "Zona de Disponibilidade: local fisicamente separado dentro de uma região do Azure, composto por um ou mais datacenters com energia, refrigeração e rede independentes.",
            "Região do Azure: área geográfica que contém uma ou mais zonas de disponibilidade.",
            "Redundância: duplicação de componentes para aumentar a confiabilidade do sistema.",
            "Alta disponibilidade: capacidade de um sistema permanecer operacional por longos períodos com tempo mínimo de inatividade."
        ],
        generalExplanation: [
            "A resposta \"dentro de uma única região do Azure\" está correta. A afirmação original de que uma Zona de Disponibilidade tem locais fisicamente separados em dois continentes não é precisa.",
            "As Zonas de Disponibilidade são compostas por locais fisicamente separados, mas esses locais estão <strong>dentro de uma única região do Azure</strong>, não em continentes diferentes.",
            "Elas fornecem alta disponibilidade e redundância dentro da mesma região, garantindo proteção contra falhas em um único datacenter."
        ],
        realWorld: [
            "Ao projetar uma aplicação crítica, arquitetos distribuem VMs entre zonas de disponibilidade dentro de uma região para garantir que a falha de um datacenter não derrube o serviço.",
            "Exemplo: uma aplicação de e-commerce com VMs em três zonas de disponibilidade continua operando mesmo se uma zona falhar.",
            "Isso é fundamental para SLA de 99,99% oferecido pelo Azure quando se usa zonas de disponibilidade."
        ]
    },
    {
        id: 3,
        title: "Política moderna do ciclo de vida do Azure",
        domain: "Governança e Conformidade",
        prompt: "Qual declaração descreve com precisão a Política moderna do ciclo de vida para serviços do Azure?",
        options: [
            { letter: "A", text: "Microsoft oferece suporte mainstream para um serviço por cinco anos.", correct: false },
            { letter: "B", text: "Quando um serviço é aposentado, você pode comprar suporte estendido para o serviço por até cinco anos.", correct: false },
            { letter: "C", text: "Microsoft fornece um aviso mínimo de 12 meses antes de encerrar o suporte para um serviço.", correct: true },
            { letter: "D", text: "Depois que um serviço é disponibilizado, geralmente a Microsoft fornece suporte para o serviço por um mínimo de quatro anos.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A política moderna não garante suporte mainstream fixo de cinco anos para todos os serviços." },
            { correct: false, text: "Incorreta. A política moderna não prevê compra de suporte estendido por até cinco anos após a aposentadoria." },
            { correct: true, text: "Correta. A Política moderna do ciclo de vida para serviços do Azure estabelece que a Microsoft fornecerá um aviso mínimo de 12 meses antes de encerrar o suporte para um serviço." },
            { correct: false, text: "Incorreta. Não há garantia de suporte mínimo de quatro anos após a disponibilização geral do serviço." }
        ],
        glossary: [
            "Política moderna do ciclo de vida: conjunto de diretrizes da Microsoft que define como os serviços do Azure são suportados, atualizados e eventualmente descontinuados.",
            "Aviso de 12 meses: período mínimo de antecedência que a Microsoft fornece antes de encerrar o suporte a um serviço.",
            "Suporte estendido: período adicional de suporte pago oferecido em alguns modelos de ciclo de vida, mas não garantido na política moderna.",
            "Serviço sucessor: novo serviço que substitui funcionalmente um serviço descontinuado."
        ],
        generalExplanation: [
            "A resposta \"Microsoft fornece um aviso mínimo de 12 meses antes de encerrar o suporte para um serviço\" é correta.",
            "A Política moderna do ciclo de vida estabelece que a Microsoft fornecerá um aviso mínimo de 12 meses antes de encerrar o suporte para um serviço.",
            "Isso permite que os clientes se preparem para a transição ou procurem alternativas, garantindo uma transição suave."
        ],
        realWorld: [
            "Equipes de governança monitoram comunicados da Microsoft para planejar migrações quando um serviço é anunciado para descontinuação.",
            "O aviso de 12 meses permite que organizações realoquem orçamento e recursos para migrar workloads.",
            "Isso é especialmente importante em ambientes regulados, onde mudanças precisam ser documentadas e aprovadas com antecedência."
        ]
    },
    {
        id: 4,
        title: "Recursos para milhões de sensores IoT",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Sua empresa planeja implantar vários milhões de sensores que enviarão dados para o Azure. Você precisa identificar quais recursos do Azure devem ser criados para apoiar a solução planejada. Quais dois recursos do Azure você deve identificar? NOTA: Cada resposta correta apresenta parte da solução.",
        options: [
            { letter: "A", text: "Azure File Storage", correct: false },
            { letter: "B", text: "Azure IoT Hub", correct: true },
            { letter: "C", text: "Azure Data Lake", correct: true },
            { letter: "D", text: "Azure Notification Hubs", correct: false },
            { letter: "E", text: "Azure Queue storage", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure File Storage é um serviço de compartilhamento de arquivos, não adequado para ingestão de dados em escala de milhões de sensores." },
            { correct: true, text: "Correta. O Azure IoT Hub é um serviço dedicado ao gerenciamento de dispositivos IoT, incluindo sensores. Ele permite conectar, registrar, gerenciar e coletar dados de dispositivos IoT em escala, com comunicação bidirecional entre sensores e a nuvem." },
            { correct: true, text: "Correta. O Azure Data Lake é um serviço de armazenamento e análise de big data que pode lidar com grandes volumes de dados, permitindo armazenar, organizar e analisar os dados coletados dos sensores em um ambiente escalável." },
            { correct: false, text: "Incorreta. O Azure Notification Hubs é usado para enviar notificações push para dispositivos móveis, não para ingestão de dados de sensores." },
            { correct: false, text: "Incorreta. O Azure Queue Storage é um serviço de filas de mensagens, útil para desacoplamento de componentes, mas não é o recurso principal para ingestão em escala de dados IoT." }
        ],
        glossary: [
            "Azure IoT Hub: serviço gerenciado para comunicação bidirecional entre dispositivos IoT e a nuvem, com registro, gerenciamento e ingestão de dados em escala.",
            "Azure Data Lake: serviço de armazenamento e análise de big data, escalável e adequado para grandes volumes de dados.",
            "Azure Notification Hubs: serviço para envio de notificações push para dispositivos móveis.",
            "Azure Queue Storage: serviço de filas para desacoplamento de componentes.",
            "Azure File Storage: serviço de compartilhamento de arquivos gerenciado."
        ],
        generalExplanation: [
            "As respostas \"Azure Data Lake\" e \"Azure IoT Hub\" estão corretas.",
            "Para apoiar a implantação de vários milhões de sensores que enviarão dados ao Azure, esses dois recursos desempenham papéis importantes:",
            "<strong>Azure Data Lake</strong>: serviço de armazenamento e análise de big data que lida com grandes volumes, permitindo armazenar, organizar e analisar dados coletados de sensores de forma escalável.",
            "<strong>Azure IoT Hub</strong>: serviço dedicado ao gerenciamento de dispositivos IoT, permitindo conectar, registrar, gerenciar e coletar dados em escala, com comunicação bidirecional entre sensores e a infraestrutura na nuvem."
        ],
        realWorld: [
            "Uma solução de cidades inteligentes pode usar IoT Hub para receber dados de milhares de sensores de tráfego e Data Lake para armazenar e analisar grandes volumes históricos.",
            "Na indústria, sensores de manutenção preditiva enviam dados via IoT Hub, que são armazenados em Data Lake para análise de padrões e previsão de falhas.",
            "Essa combinação permite escalar para milhões de dispositivos sem comprometer a performance."
        ]
    },
    {
        id: 5,
        title: "Criar VM via PowerApps",
        domain: "Computação e Implantação",
        prompt: "Você tem um ambiente Azure. Você precisa criar uma nova máquina virtual do Azure a partir de um tablet que executa o sistema operacional Android. Solução: Você usa o portal PowerApps. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O PowerApps é uma plataforma de desenvolvimento de aplicativos de negócios focada em criação de apps personalizados, formulários e fluxos de trabalho, não na implantação de recursos de infraestrutura do Azure como máquinas virtuais." },
            { correct: true, text: "Correta. O portal PowerApps não é uma ferramenta apropriada para criar uma nova máquina virtual do Azure. Para criar uma VM no Azure, geralmente usa-se o portal de gerenciamento do Azure, Azure CLI, PowerShell ou outras ferramentas de gerenciamento de infraestrutura." }
        ],
        glossary: [
            "PowerApps: plataforma de desenvolvimento low-code da Microsoft para criação de aplicativos de negócios personalizados, formulários e fluxos de trabalho.",
            "Portal do Azure: interface web para gerenciamento de recursos do Azure.",
            "Azure CLI: interface de linha de comando para gerenciamento de recursos do Azure.",
            "Azure PowerShell: módulo PowerShell para gerenciamento de recursos do Azure."
        ],
        generalExplanation: [
            "A resposta \"Não\" está correta. O portal PowerApps não é uma ferramenta apropriada para criar uma nova máquina virtual do Azure.",
            "O PowerApps é uma plataforma de desenvolvimento de aplicativos de negócios focada em criação de aplicativos personalizados, formulários e fluxos de trabalho, não na implantação de recursos de infraestrutura do Azure.",
            "Para criar uma máquina virtual no Azure, geralmente usa-se o portal de gerenciamento do Azure ou outras ferramentas de gerenciamento de infraestrutura do Azure."
        ],
        realWorld: [
            "Um administrador pode criar VMs via portal do Azure em qualquer dispositivo com navegador, incluindo tablets Android.",
            "Ferramentas como Azure CLI e PowerShell permitem automação de criação de VMs em pipelines CI/CD.",
            "PowerApps seria usado para criar um app de negócios que consome dados de uma VM, não para provisioná-la."
        ]
    },
    {
        id: 6,
        title: "Clientes qualificados para Azure Government",
        domain: "Governança e Conformidade",
        prompt: "Quais são os dois tipos de clientes qualificados para usar o Azure Government para desenvolver uma solução em nuvem? Cada resposta correta apresenta uma solução completa.",
        options: [
            { letter: "A", text: "um empreiteiro do governo europeu", correct: false },
            { letter: "B", text: "um empreiteiro do governo canadense", correct: false },
            { letter: "C", text: "um empreiteiro do governo dos Estados Unidos", correct: true },
            { letter: "D", text: "uma entidade governamental europeia", correct: false },
            { letter: "E", text: "uma entidade do governo dos Estados Unidos", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure Government é destinado especificamente ao governo dos Estados Unidos e seus contratados, não a governos europeus." },
            { correct: false, text: "Incorreta. O Azure Government não atende ao governo canadense; há ofertas separadas para o Canadá." },
            { correct: true, text: "Correta. Empreiteiros do governo dos Estados Unidos são elegíveis para usar o Azure Government, que atende aos requisitos de conformidade e segurança governamentais dos EUA." },
            { correct: false, text: "Incorreta. Entidades governamentais europeias não são elegíveis para o Azure Government." },
            { correct: true, text: "Correta. Entidades do governo dos Estados Unidos são elegíveis para usar o Azure Government, que é projetado especificamente para atender às suas necessidades de conformidade e segurança." }
        ],
        glossary: [
            "Azure Government: instância do Azure projetada especificamente para atender às necessidades de entidades governamentais dos EUA e seus contratados.",
            "Elegibilidade: critérios que determinam quais organizações podem usar um serviço específico.",
            "Conformidade governamental: conjunto de requisitos regulatórios que serviços governamentais devem atender.",
            "FedRAMP: programa de certificação de segurança em nuvem do governo dos EUA."
        ],
        generalExplanation: [
            "As respostas \"uma entidade do governo dos Estados Unidos\" e \"um empreiteiro do governo dos Estados Unidos\" estão corretas.",
            "O Azure Government é uma instância do Azure projetada especificamente para atender às necessidades de entidades governamentais dos Estados Unidos e seus contratados.",
            "Para usar o Azure Government, é necessário ser uma entidade do governo dos EUA ou um empreiteiro que atenda a requisitos específicos de elegibilidade.",
            "Essa instância oferece conformidade com regulamentações governamentais e requisitos de segurança específicos."
        ],
        realWorld: [
            "Agências federais dos EUA usam Azure Government para hospedar dados sensíveis com conformidade FedRAMP High e ITAR.",
            "Empreiteiros de defesa que trabalham com o governo dos EUA também usam o Azure Government para atender requisitos de segurança nacional.",
            "Isso garante que dados governamentais sejam tratados com controles específicos de segurança e conformidade."
        ]
    },
    {
        id: 7,
        title: "Unidade de rede mapeada para Azure Storage",
        domain: "Armazenamento",
        prompt: "Você planeja mapear uma unidade de rede de vários computadores que executam o Windows 10 para o Azure Storage. Você precisa criar uma solução de armazenamento no Azure para a unidade planejada mapeada. O que você deve criar?",
        options: [
            { letter: "A", text: "um disco de dados de máquina virtual", correct: false },
            { letter: "B", text: "um banco de dados Azure SQL", correct: false },
            { letter: "C", text: "um serviço de arquivos em uma conta de armazenamento", correct: true },
            { letter: "D", text: "um serviço Blobs em uma conta de armazenamento", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Um disco de dados de VM é anexado a uma única máquina virtual e não pode ser mapeado como unidade de rede compartilhada por vários computadores." },
            { correct: false, text: "Incorreta. O Azure SQL é um serviço de banco de dados relacional, não um sistema de arquivos para mapeamento de unidade de rede." },
            { correct: true, text: "Correta. Para mapear uma unidade de rede de vários computadores Windows 10 para o Azure Storage, usa-se o Azure File Storage, que é um serviço de arquivos no Azure. Cria-se uma conta de armazenamento e provisiona-se um compartilhamento de arquivos usando o serviço de arquivos. Esse compartilhamento pode ser mapeado como unidade de rede nos computadores Windows 10." },
            { correct: false, text: "Incorreta. O serviço Blobs é para armazenamento de objetos não estruturados e não suporta mapeamento nativo como unidade de rede via SMB." }
        ],
        glossary: [
            "Azure Files: serviço de compartilhamento de arquivos gerenciado do Azure que suporta o protocolo SMB, permitindo mapeamento como unidade de rede.",
            "SMB (Server Message Block): protocolo de compartilhamento de arquivos em rede usado pelo Windows.",
            "Conta de armazenamento: contêiner lógico que agrupa serviços de armazenamento do Azure (Blobs, Files, Queues, Tables).",
            "Azure Blob Storage: serviço de armazenamento de objetos não estruturados.",
            "Disco de dados de VM: disco gerenciado anexado a uma VM, não compartilhável como unidade de rede."
        ],
        generalExplanation: [
            "A resposta \"um serviço de arquivos em uma conta de armazenamento\" está correta.",
            "Para mapear uma unidade de rede de vários computadores Windows 10 para o Azure Storage, usa-se o <strong>Azure File Storage</strong>, que é um serviço de arquivos no Azure.",
            "Cria-se uma conta de armazenamento e provisiona-se um compartilhamento de arquivos usando o serviço de arquivos.",
            "Esse compartilhamento pode ser mapeado como unidade de rede nos computadores Windows 10, permitindo armazenamento e acesso compartilhado de arquivos na nuvem."
        ],
        realWorld: [
            "Empresas que migram file servers locais para o Azure usam Azure Files para manter o acesso via unidade de rede mapeada em estações Windows.",
            "Isso permite que aplicações legadas que dependem de caminhos UNC continuem funcionando sem modificação.",
            "Azure Files também suporta autenticação via Azure AD DS, integrando-se ao ambiente corporativo."
        ]
    },
    {
        id: 8,
        title: "Zona de Disponibilidade e falha de datacenter",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Você precisa identificar o tipo de falha para a qual uma Zona de Disponibilidade do Azure pode ser usada para proteger o acesso aos serviços do Azure. O que você deve identificar?",
        options: [
            { letter: "A", text: "uma falha na região do Azure", correct: false },
            { letter: "B", text: "uma falha do datacenter Azure", correct: true },
            { letter: "C", text: "uma falha do servidor físico", correct: false },
            { letter: "D", text: "uma falha de armazenamento", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. As Zonas de Disponibilidade não protegem contra falha de região inteira; para isso, seria necessário usar redundância entre regiões." },
            { correct: true, text: "Correta. As Zonas de Disponibilidade no Azure são projetadas para proteger contra falhas em datacenters específicos dentro de uma região. Ao distribuir recursos em zonas diferentes, garante-se que, se houver falha em um datacenter, os recursos em outras zonas ainda estarão disponíveis." },
            { correct: false, text: "Incorreta. A falha de um servidor físico é protegida por redundância dentro do próprio datacenter ou por conjuntos de disponibilidade, não especificamente por zonas." },
            { correct: false, text: "Incorreta. Falhas de armazenamento são mitigadas por replicação de dados, não especificamente por zonas de disponibilidade." }
        ],
        glossary: [
            "Zona de Disponibilidade: local fisicamente separado dentro de uma região do Azure, composto por um ou mais datacenters independentes.",
            "Datacenter: instalação física que abriga servidores e infraestrutura de rede.",
            "Redundância: duplicação de componentes para aumentar a confiabilidade.",
            "Região do Azure: área geográfica contendo uma ou mais zonas de disponibilidade."
        ],
        generalExplanation: [
            "A resposta \"uma falha do datacenter Azure\" está correta.",
            "As Zonas de Disponibilidade no Azure são projetadas para proteger contra falhas em datacenters específicos dentro de uma região.",
            "Ao distribuir recursos em zonas de disponibilidade diferentes, garante-se que, se houver falha em um datacenter, os recursos em outras zonas ainda estarão disponíveis, proporcionando maior resiliência e disponibilidade."
        ],
        realWorld: [
            "Aplicações críticas implantadas em três zonas de disponibilidade continuam operando mesmo com a falha completa de um datacenter.",
            "Isso permite SLAs de até 99,99% para VMs distribuídas em zonas de disponibilidade.",
            "Arquitetos usam zonas para cargas de trabalho que exigem alta disponibilidade sem precisar de múltiplas regiões."
        ]
    },
    {
        id: 9,
        title: "Melhor experiência de reprodução de vídeo global",
        domain: "Redes e Entrega de Conteúdo",
        prompt: "Você planeja implantar um site para o Azure. O site será acessado por usuários em todo o mundo e hospedará grandes arquivos de vídeo. Você precisa recomendar qual recurso do Azure deve ser usado para fornecer a melhor experiência de reprodução de vídeo. O que você deve recomendar?",
        options: [
            { letter: "A", text: "um gateway de aplicativo", correct: false },
            { letter: "B", text: "um perfil do Azure Traffic Manager", correct: false },
            { letter: "C", text: "uma rede de entrega de conteúdo (CDN)", correct: true },
            { letter: "D", text: "um circuito Azure ExpressRoute", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Application Gateway é um balanceador de carga de camada 7, não otimizado para entrega global de grandes arquivos de vídeo." },
            { correct: false, text: "Incorreta. O Traffic Manager distribui tráfego entre endpoints, mas não otimiza a entrega de conteúdo para usuários globais." },
            { correct: true, text: "Correta. Para fornecer a melhor experiência de reprodução de vídeo, especialmente para grandes arquivos acessados globalmente, recomenda-se uma CDN. Ela distribui conteúdo de forma eficiente e rápida, reduzindo latência e carga nos servidores de origem. Os arquivos são replicados em servidores distribuídos geograficamente, permitindo que usuários acessem de um servidor mais próximo." },
            { correct: false, text: "Incorreta. O ExpressRoute é uma conexão privada dedicada entre redes locais e o Azure, não otimizado para entrega global de conteúdo a usuários finais." }
        ],
        glossary: [
            "CDN (Content Delivery Network): rede distribuída de servidores que entrega conteúdo a usuários com base na localização geográfica, reduzindo latência.",
            "Azure Traffic Manager: balanceador de tráfego DNS que distribui requisições entre endpoints em diferentes regiões.",
            "Application Gateway: balanceador de carga de camada 7 com recursos de firewall de aplicação web.",
            "ExpressRoute: conexão privada dedicada entre infraestrutura local e o Azure."
        ],
        generalExplanation: [
            "A resposta \"uma rede de entrega de conteúdo (CDN)\" está correta.",
            "Para fornecer a melhor experiência de reprodução de vídeo, especialmente para grandes arquivos acessados por usuários em todo o mundo, recomenda-se o uso de uma CDN.",
            "A CDN distribui conteúdo de forma eficiente e rápida, reduzindo a latência e a carga nos servidores de origem.",
            "Os arquivos de vídeo são replicados em servidores distribuídos geograficamente, permitindo que os usuários acessem o conteúdo de um servidor mais próximo."
        ],
        realWorld: [
            "Plataformas de streaming usam CDNs para entregar vídeos com baixa latência e alta qualidade a usuários globais.",
            "Azure CDN suporta caching de grandes arquivos de vídeo, reduzindo custos de egress e melhorando a experiência do usuário.",
            "A combinação de CDN com armazenamento de blobs permite escalar para milhões de visualizações simultâneas."
        ]
    },
    {
        id: 10,
        title: "Redução de custos removendo contas de usuário",
        domain: "Governança e Conformidade",
        prompt: "Sua empresa tem uma assinatura do Azure que contém os seguintes recursos não utilizados: 20 contas de usuário no Azure Active Directory (Azure AD), cinco grupos em Azure AD, 10 endereços IP públicos, 10 interfaces de rede. Você precisa reduzir os custos do Azure para a empresa. Solução: Você remove as contas de usuário não usadas. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Remover contas de usuário não usadas pode ser boa prática de segurança, mas não tem impacto significativo nos custos do Azure." },
            { correct: true, text: "Correta. Os custos associados às contas de usuário no Azure AD geralmente são mínimos ou incluídos na assinatura. Para reduzir custos substancialmente, deve-se considerar a eliminação ou desalocação de recursos mais caros, como máquinas virtuais, bancos de dados ou endereços IP públicos não utilizados." }
        ],
        glossary: [
            "Azure AD: serviço de gerenciamento de identidade e acesso da Microsoft.",
            "Conta de usuário: identidade no Azure AD que representa uma pessoa.",
            "Endereço IP público: recurso que pode incorrer em custos quando alocado.",
            "Interface de rede: componente de rede virtual sem custo direto quando não em uso."
        ],
        generalExplanation: [
            "Remover contas de usuário não usadas pode ser uma boa prática de segurança, mas em termos de redução de custos do Azure, isso não terá um impacto significativo.",
            "Os custos associados às contas de usuário no Azure AD geralmente são mínimos ou incluídos como parte da assinatura.",
            "Para reduzir custos mais substancialmente, deve-se considerar a eliminação ou desalocação de recursos mais caros, como máquinas virtuais, bancos de dados ou serviços de armazenamento não utilizados.",
            "A eliminação de endereços IP públicos, interfaces de rede ou recursos de computação subutilizados pode ter um impacto maior na redução dos custos."
        ],
        realWorld: [
            "Equipes financeiras focam em rightsizing de VMs e desalocação de recursos ociosos para reduzir custos.",
            "Endereços IP públicos reservados e não associados geram custos contínuos e devem ser removidos.",
            "Contas de usuário são gerenciadas por questões de segurança e conformidade, não por economia."
        ]
    },
    {
        id: 11,
        title: "Alertas de custo no Azure",
        domain: "Governança e Conformidade",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Você pode usar as recomendações do Advisor no Azure para enviar alertas de e-mail quando o custo do período de faturamento atual para uma assinatura do Azure exceder um limite especificado. Instruções: Reveja o texto destacado. Se ele corrigir a declaração, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "Alertas orçamentários", correct: true },
            { letter: "B", text: "conformidade", correct: false },
            { letter: "C", text: "Controle de acesso (IAM)", correct: false },
            { letter: "D", text: "Nenhuma mudança é necessária.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Para enviar alertas por e-mail quando os custos de uma assinatura do Azure excedem um limite especificado, deve-se usar o recurso de \"Alertas orçamentários\" no Azure, não as recomendações do Advisor." },
            { correct: false, text: "Incorreta. Conformidade é uma categoria de recomendações do Advisor, não um mecanismo de alerta de custos." },
            { correct: false, text: "Incorreta. Controle de acesso (IAM) gerencia permissões, não alertas de custos." },
            { correct: false, text: "Incorreta. A afirmação original está errada, pois menciona \"recomendações do Advisor\" em vez de \"Alertas orçamentários\"." }
        ],
        glossary: [
            "Alertas orçamentários: recurso do Azure Cost Management que permite definir limites de gastos e receber notificações quando esses limites são atingidos.",
            "Azure Advisor: serviço que fornece recomendações personalizadas para otimização de custos, segurança, desempenho e alta disponibilidade.",
            "Orçamento: limite de gastos definido para uma assinatura ou grupo de recursos.",
            "Cost Management: serviço do Azure para monitoramento e controle de custos."
        ],
        generalExplanation: [
            "A resposta \"Alertas orçamentários\" está correta.",
            "Para enviar alertas por e-mail quando os custos de uma assinatura do Azure excedem um limite especificado, deve-se usar o recurso de <strong>Alertas orçamentários</strong> no Azure, não as recomendações do Advisor.",
            "Os alertas orçamentários permitem definir limites de gastos e receber notificações por e-mail quando esses limites são atingidos ou excedidos."
        ],
        realWorld: [
            "Equipes financeiras configuram alertas orçamentários para evitar surpresas na fatura mensal.",
            "Isso permite ação proativa antes que os custos ultrapassem o planejado.",
            "Alertas podem ser configurados para múltiplos destinatários e diferentes limiares (50%, 80%, 100% do orçamento)."
        ]
    },
    {
        id: 12,
        title: "Tags para relatórios de faturamento por escritório",
        domain: "Governança e Conformidade",
        prompt: "Sua empresa tem 10 escritórios. Você planeja gerar vários relatórios de faturamento do portal Azure. Cada relatório conterá a utilização de recursos do Azure de cada escritório. Qual recurso do Azure Resource Manager deve usar antes de gerar os relatórios?",
        options: [
            { letter: "A", text: "Tags", correct: true },
            { letter: "B", text: "Locks", correct: false },
            { letter: "C", text: "Modelos", correct: false },
            { letter: "D", text: "Políticas", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Tags são metadados que podem ser aplicados a recursos no Azure para ajudar na organização, identificação e categorização. No contexto de relatórios de faturamento, pode-se usar tags para associar recursos a um escritório específico, facilitando a segmentação e agregação dos recursos usados por cada escritório." },
            { correct: false, text: "Incorreta. Locks (bloqueios) impedem alterações ou exclusões de recursos, não servem para categorização." },
            { correct: false, text: "Incorreta. Modelos (ARM templates) são usados para provisionamento de recursos como código, não para categorização." },
            { correct: false, text: "Incorreta. Políticas impõem regras de conformidade, não servem para categorização de recursos." }
        ],
        glossary: [
            "Tags: pares chave-valor aplicados a recursos do Azure para organização, categorização e controle de custos.",
            "Locks: bloqueios que impedem alteração ou exclusão de recursos.",
            "ARM templates: arquivos JSON que definem infraestrutura como código para provisionamento no Azure.",
            "Políticas do Azure: regras que impõem conformidade em recursos do Azure."
        ],
        generalExplanation: [
            "A resposta \"Tags\" está correta.",
            "Tags são metadados que podem ser aplicados a recursos no Azure para ajudar na organização, identificação e categorização desses recursos.",
            "No contexto de gerar relatórios de faturamento, pode-se usar tags para associar recursos a um escritório específico.",
            "Isso facilita a segmentação e agregação dos recursos usados por cada escritório ao gerar relatórios de faturamento."
        ],
        realWorld: [
            "Empresas com múltiplos departamentos usam tags como 'CostCenter' ou 'Office' para alocar custos automaticamente.",
            "Relatórios de faturamento podem ser filtrados por tags no Azure Cost Management.",
            "Tags também são usadas para automação, como desligamento de recursos fora do horário comercial com base em tags de ambiente."
        ]
    },
    {
        id: 13,
        title: "Redução de custos removendo interfaces de rede",
        domain: "Governança e Conformidade",
        prompt: "Sua empresa tem uma assinatura do Azure que contém os seguintes recursos não utilizados: 20 contas de usuário no Azure AD, cinco grupos em Azure AD, 10 endereços IP públicos, 10 interfaces de rede. Você precisa reduzir os custos do Azure para a empresa. Solução: Você remove as interfaces de rede não usadas. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Remover interfaces de rede não usadas pode ser boa prática de gerenciamento, mas não tem impacto significativo na redução de custos, pois interfaces de rede não têm custo direto associado quando não estão em uso." },
            { correct: true, text: "Correta. As interfaces de rede são componentes de redes virtuais que não têm custo direto quando não estão em uso. Para reduzir efetivamente os custos, deve-se focar em recursos com custos diretos, como máquinas virtuais, bancos de dados, endereços IP públicos ou serviços de armazenamento não utilizados." }
        ],
        glossary: [
            "Interface de rede (NIC): componente que conecta uma VM a uma rede virtual.",
            "Endereço IP público: recurso que gera custos quando alocado, mesmo sem uso.",
            "Rede virtual (VNet): rede isolada no Azure onde recursos são implantados."
        ],
        generalExplanation: [
            "Remover interfaces de rede não usadas pode ser uma prática de gerenciamento útil, mas em termos de redução de custos no Azure, geralmente não terá um impacto significativo.",
            "As interfaces de rede são componentes de redes virtuais que não têm um custo direto associado quando não estão em uso.",
            "Para reduzir efetivamente os custos, é importante focar em recursos que tenham custos diretos associados, como máquinas virtuais, bancos de dados, endereços IP públicos ou serviços de armazenamento não utilizados."
        ],
        realWorld: [
            "Equipes de FinOps priorizam a remoção de VMs desalocadas, discos órfãos e IPs públicos não associados.",
            "Interfaces de rede órfãs são limpeza de higiene, mas não geram economia direta.",
            "A limpeza de NICs ajuda na organização e evita confusão em ambientes grandes."
        ]
    },
    {
        id: 14,
        title: "Criar solicitação de suporte no Azure",
        domain: "Governança e Conformidade",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Você pode criar uma solicitação de suporte do Azure a partir de support.microsoft.com. Instruções: Reveja o texto destacado. Se ele corrigir a declaração, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "o portal Azure", correct: true },
            { letter: "B", text: "o Centro de Conhecimento", correct: false },
            { letter: "C", text: "o centro administrativo de Segurança & Conformidade", correct: false },
            { letter: "D", text: "Nenhuma mudança é necessária.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Para criar uma solicitação de suporte do Azure, deve-se fazê-lo a partir do portal Azure, não do site support.microsoft.com. O portal Azure é a plataforma apropriada para gerenciar recursos e solicitações de suporte relacionadas ao Azure." },
            { correct: false, text: "Incorreta. O Centro de Conhecimento é uma base de documentação, não uma ferramenta para abertura de chamados." },
            { correct: false, text: "Incorreta. O centro administrativo de Segurança & Conformidade é focado em políticas de segurança, não em suporte técnico." },
            { correct: false, text: "Incorreta. A afirmação original está errada, pois menciona support.microsoft.com em vez do portal Azure." }
        ],
        glossary: [
            "Solicitação de suporte: chamado aberto junto à Microsoft para resolução de problemas técnicos ou de faturamento.",
            "Portal do Azure: interface web para gerenciamento de recursos e serviços do Azure.",
            "support.microsoft.com: site de suporte da Microsoft para produtos diversos, não específico para abertura de chamados do Azure."
        ],
        generalExplanation: [
            "A resposta \"o portal Azure\" está correta.",
            "Para criar uma solicitação de suporte do Azure, deve-se fazê-lo a partir do portal Azure, não do site support.microsoft.com.",
            "O portal Azure é a plataforma apropriada para gerenciar recursos e solicitações de suporte relacionadas ao Azure."
        ],
        realWorld: [
            "Equipes de operações abrem chamados diretamente no portal do Azure, na seção 'Ajuda + suporte'.",
            "Isso permite vincular o chamado ao recurso específico e ao plano de suporte contratado.",
            "O histórico de chamados fica centralizado no portal, facilitando o acompanhamento."
        ]
    },
    {
        id: 15,
        title: "Redução de custos removendo grupos não usados",
        domain: "Governança e Conformidade",
        prompt: "Sua empresa tem uma assinatura do Azure que contém os seguintes recursos não utilizados: 20 contas de usuário no Azure AD, cinco grupos em Azure AD, 10 endereços IP públicos, 10 interfaces de rede. Você precisa reduzir os custos do Azure para a empresa. Solução: Você remove os grupos não usados. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Remover grupos não usados no Azure AD pode ser boa prática de organização, mas não tem impacto significativo na redução de custos." },
            { correct: true, text: "Correta. Os grupos em Azure AD são usados principalmente para gerenciamento e controle de acesso, e não têm custos associados significativos. Para reduzir custos de forma eficaz, deve-se focar em recursos como máquinas virtuais, bancos de dados, endereços IP públicos ou interfaces de rede." }
        ],
        glossary: [
            "Grupo do Azure AD: contêiner lógico para gerenciamento de acesso de usuários e recursos.",
            "Controle de acesso baseado em grupo: prática de atribuir permissões a grupos em vez de usuários individuais.",
            "Custo direto: despesa gerada pelo uso ou alocação de um recurso."
        ],
        generalExplanation: [
            "Remover grupos não usados no Azure AD pode ser uma boa prática de organização, mas não terá um impacto significativo na redução dos custos da assinatura do Azure.",
            "Os grupos em Azure AD são usados principalmente para gerenciamento e controle de acesso, e não têm custos associados significativos.",
            "Para reduzir os custos do Azure de forma mais eficaz, deve-se concentrar na eliminação ou desalocação de recursos mais caros, como máquinas virtuais, bancos de dados, endereços IP públicos não utilizados ou interfaces de rede."
        ],
        realWorld: [
            "A limpeza de grupos do Azure AD é feita por governança de identidade, não por economia.",
            "Grupos órfãos podem representar risco de segurança se mantiverem permissões antigas.",
            "A redução de custos reais vem de rightsizing de VMs, reservas e desalocação de recursos ociosos."
        ]
    },
    {
        id: 16,
        title: "Serviço para recuperar tokens de segurança",
        domain: "Identidade e Segurança",
        prompt: "A que um aplicativo deve se conectar para recuperar tokens de segurança?",
        options: [
            { letter: "A", text: "um cofre de chave do Azure", correct: false },
            { letter: "B", text: "uma conta de armazenamento Azure", correct: false },
            { letter: "C", text: "Azure Active Directory (Azure AD)", correct: true },
            { letter: "D", text: "Armazenamento de certificados", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Key Vault armazena chaves e segredos, mas não emite tokens de segurança para autenticação de aplicações." },
            { correct: false, text: "Incorreta. Contas de armazenamento armazenam dados, não emitem tokens de segurança." },
            { correct: true, text: "Correta. Para recuperar tokens de segurança, um aplicativo normalmente se conecta ao Azure Active Directory (Azure AD) para autenticação e autorização. O Azure AD é um serviço de gerenciamento de identidade e acesso que autentica usuários e fornece tokens de segurança que permitem acesso a recursos protegidos." },
            { correct: false, text: "Incorreta. O armazenamento de certificados é um repositório, não um emissor de tokens." }
        ],
        glossary: [
            "Token de segurança: credencial emitida por um serviço de identidade que comprova a autenticidade de um usuário ou aplicação.",
            "Azure AD: serviço de identidade e acesso da Microsoft que emite tokens para autenticação e autorização.",
            "OAuth 2.0: protocolo de autorização usado pelo Azure AD para emissão de tokens.",
            "OpenID Connect: protocolo de autenticação baseado em OAuth 2.0 que usa tokens JWT."
        ],
        generalExplanation: [
            "A resposta \"Azure Active Directory (Azure AD)\" está correta.",
            "Para recuperar tokens de segurança, um aplicativo normalmente se conecta ao Azure Active Directory (Azure AD) para autenticação e autorização.",
            "O Azure AD é um serviço de gerenciamento de identidade e acesso no Azure, usado para autenticar usuários e fornecer tokens de segurança que permitem o acesso a recursos protegidos.",
            "Portanto, o Azure AD é a fonte comum para recuperar tokens de segurança em aplicativos que fazem uso da autenticação e autorização no ambiente Azure."
        ],
        realWorld: [
            "Aplicações registradas no Azure AD usam o endpoint de token para obter access tokens e ID tokens.",
            "APIs protegidas validam esses tokens para autorizar chamadas.",
            "Isso é a base de autenticação para aplicações modernas no Azure, incluindo SPAs, APIs e daemons."
        ]
    },
    {
        id: 17,
        title: "Filtragem de tráfego em múltiplas assinaturas e VNets",
        domain: "Redes e Entrega de Conteúdo",
        prompt: "Qual serviço fornece filtragem de tráfego de rede em várias assinaturas do Azure e redes virtuais?",
        options: [
            { letter: "A", text: "um grupo de segurança de aplicativos", correct: false },
            { letter: "B", text: "Azure Firewall", correct: true },
            { letter: "C", text: "um grupo de segurança de rede (NSG)", correct: false },
            { letter: "D", text: "Proteção Azure DDoS", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Grupos de segurança de aplicativos (ASGs) agrupam VMs para simplificar regras de NSG, mas não fornecem filtragem centralizada entre assinaturas e VNets." },
            { correct: true, text: "Correta. O Azure Firewall é um serviço que fornece filtragem de tráfego de rede em várias assinaturas do Azure e redes virtuais. É uma solução gerenciada que permite controlar e inspecionar o tráfego de entrada e saída, aplicando regras de segurança e políticas de filtragem de forma centralizada." },
            { correct: false, text: "Incorreta. NSGs filtram tráfego em nível de sub-rede ou NIC, mas não oferecem filtragem centralizada entre múltiplas assinaturas e VNets." },
            { correct: false, text: "Incorreta. O Azure DDoS Protection protege contra ataques DDoS, mas não fornece filtragem de tráfego geral entre assinaturas." }
        ],
        glossary: [
            "Azure Firewall: serviço de segurança de rede gerenciado que fornece filtragem centralizada de tráfego entre VNets e assinaturas.",
            "NSG (Network Security Group): grupo de segurança que filtra tráfego em nível de sub-rede ou NIC.",
            "ASG (Application Security Group): agrupamento lógico de VMs para simplificar regras de NSG.",
            "Azure DDoS Protection: serviço de proteção contra ataques de negação de serviço distribuídos."
        ],
        generalExplanation: [
            "A resposta correta é \"Azure Firewall\".",
            "O Azure Firewall é um serviço que fornece filtragem de tráfego de rede em várias assinaturas do Azure e redes virtuais.",
            "É uma solução gerenciada que permite controlar e inspecionar o tráfego de entrada e saída em ambientes Azure, aplicando regras de segurança e políticas de filtragem.",
            "Ao implementar o Azure Firewall, pode-se centralizar a filtragem de tráfego em várias assinaturas e redes virtuais, fornecendo uma camada de segurança consistente em todo o ambiente Azure."
        ],
        realWorld: [
            "Empresas com múltiplas assinaturas usam Azure Firewall em um hub VNet para centralizar a inspeção de tráfego.",
            "Isso é parte da arquitetura hub-and-spoke, comum em ambientes corporativos.",
            "Azure Firewall suporta regras de rede e aplicação, além de integração com FQDN e threat intelligence."
        ]
    },
    {
        id: 18,
        title: "Nuvem híbrida e extensão de recursos",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Uma empresa pode estender os recursos de computação de sua rede interna usando uma nuvem híbrida?",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Uma nuvem híbrida combina recursos locais (on-premises) com recursos de nuvem pública, permitindo que a empresa aproveite a escalabilidade e flexibilidade da computação em nuvem enquanto mantém alguns recursos e dados críticos nas instalações. Isso é útil para empresas que desejam manter controle de dados sensíveis ou que possuem cargas de trabalho específicas que requerem recursos locais." },
            { correct: false, text: "Incorreta. A afirmação é verdadeira: a nuvem híbrida permite exatamente essa extensão de recursos." }
        ],
        glossary: [
            "Nuvem híbrida: modelo que combina infraestrutura local com serviços de nuvem pública.",
            "On-premises: infraestrutura de TI mantida nas instalações da própria empresa.",
            "Escalabilidade: capacidade de aumentar ou diminuir recursos conforme a demanda.",
            "Azure Arc: serviço que permite gerenciar recursos locais e multicloud a partir do Azure."
        ],
        generalExplanation: [
            "A resposta \"SIM\" é a correta.",
            "Uma empresa pode estender os recursos de computação de sua rede interna usando uma nuvem híbrida.",
            "Uma nuvem híbrida combina recursos locais (on-premises) com recursos de nuvem pública, permitindo que a empresa aproveite a escalabilidade e a flexibilidade da computação em nuvem enquanto mantém alguns de seus recursos e dados críticos nas instalações.",
            "Isso é especialmente útil para empresas que desejam manter o controle de dados sensíveis ou que possuem cargas de trabalho específicas que requerem recursos locais."
        ],
        realWorld: [
            "Empresas usam Azure Arc para gerenciar servidores locais junto com recursos no Azure.",
            "Cargas de trabalho podem ser executadas localmente por latência ou conformidade, enquanto picos são absorvidos pela nuvem.",
            "ExpressRoute e VPN Gateway conectam redes locais ao Azure, viabilizando a arquitetura híbrida."
        ]
    },
    {
        id: 19,
        title: "Automatizar criação de recursos com ARM templates",
        domain: "Computação e Implantação",
        prompt: "Sua empresa possui várias unidades de negócios. Cada unidade de negócio requer 20 recursos diferentes do Azure para operação diária. Todas as unidades de negócios exigem o mesmo tipo de recursos do Azure. Você precisa recomendar uma solução para automatizar a criação dos recursos do Azure. O que você deve incluir nas recomendações?",
        options: [
            { letter: "A", text: "conjuntos de escala de máquina virtual", correct: false },
            { letter: "B", text: "Modelos do Azure Resource Manager", correct: true },
            { letter: "C", text: "o serviço de Gerenciamento de API da Azure", correct: false },
            { letter: "D", text: "grupos de gestão", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Conjuntos de escala são para escalabilidade de VMs, não para automação de criação de múltiplos tipos de recursos." },
            { correct: true, text: "Correta. Os Modelos do Azure Resource Manager (ARM) permitem definir a configuração de recursos do Azure em arquivos de modelo e implantar esses modelos para criar e gerenciar recursos de maneira automatizada e repetitiva. Podem ser usados para criar os 20 recursos necessários em cada unidade de negócio, garantindo consistência e eficiência." },
            { correct: false, text: "Incorreta. O API Management é para gerenciamento de APIs, não para automação de provisionamento de infraestrutura." },
            { correct: false, text: "Incorreta. Grupos de gestão organizam assinaturas, mas não automatizam a criação de recursos." }
        ],
        glossary: [
            "ARM template (Azure Resource Manager template): arquivo JSON que define infraestrutura como código para provisionamento declarativo no Azure.",
            "Infraestrutura como código (IaC): prática de gerenciar infraestrutura por meio de código versionável.",
            "Implantação declarativa: modelo em que se descreve o estado desejado, e a plataforma se encarrega de alcançá-lo.",
            "Grupo de gestão: contêiner que organiza assinaturas para aplicação de políticas e controle de acesso."
        ],
        generalExplanation: [
            "A resposta \"Modelos do Azure Resource Manager\" está correta.",
            "Os Modelos do Azure Resource Manager (ARM) são uma abordagem eficaz para automatizar a criação e o gerenciamento de recursos do Azure de maneira consistente.",
            "Eles permitem definir a configuração de recursos em arquivos de modelo e implantar esses modelos para criar e gerenciar recursos de maneira automatizada e repetitiva.",
            "Nesse cenário, pode-se criar modelos ARM que incluam a definição dos 20 recursos necessários para cada unidade de negócio e usar esses modelos para automatizar a criação em cada unidade, garantindo consistência e eficiência."
        ],
        realWorld: [
            "Empresas usam ARM templates para padronizar ambientes de desenvolvimento, teste e produção.",
            "Templates podem ser versionados em repositórios Git e implantados via pipelines CI/CD.",
            "Isso reduz erros manuais e acelera a entrega de novos ambientes."
        ]
    },
    {
        id: 20,
        title: "Redução de custos removendo endereços IP públicos",
        domain: "Governança e Conformidade",
        prompt: "Sua empresa tem uma assinatura do Azure que contém os seguintes recursos não utilizados: 20 contas de usuário no Azure AD, cinco grupos em Azure AD, 10 endereços IP públicos, 10 interfaces de rede. Você precisa reduzir os custos do Azure para a empresa. Solução: Você remove os endereços IP públicos não usados. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Remover os endereços IP públicos não usados é uma ação apropriada para reduzir custos, pois os endereços IP públicos são recursos que podem incorrer em custos quando estão alocados, mas não estão em uso." },
            { correct: false, text: "Incorreta. A remoção de IPs públicos não utilizados gera economia real, pois esses recursos têm custo associado." }
        ],
        glossary: [
            "Endereço IP público: recurso do Azure que pode ser alocado a recursos como VMs, balanceadores e gateways, gerando custo quando reservado.",
            "IP público estático: endereço IP reservado que mantém o mesmo valor e gera custo contínuo.",
            "IP público dinâmico: endereço atribuído dinamicamente, com custo menor ou nulo quando não associado."
        ],
        generalExplanation: [
            "A resposta \"Sim\" está correta.",
            "Para reduzir os custos no Azure, uma das medidas que se pode adotar é remover os recursos não utilizados.",
            "No cenário fornecido, remover os endereços IP públicos não usados é uma ação apropriada para reduzir os custos, pois os endereços IP públicos são recursos que podem incorrer em custos quando estão alocados, mas não estão em uso.",
            "Portanto, a remoção dos endereços IP públicos não usados atende ao objetivo de reduzir os custos do Azure para a empresa."
        ],
        realWorld: [
            "IPs públicos estáticos não associados geram custo contínuo e devem ser removidos ou liberados.",
            "Equipes de FinOps fazem auditoria periódica de IPs públicos ociosos.",
            "Isso é especialmente relevante em ambientes com muitos balanceadores e gateways."
        ]
    },
    {
        id: 21,
        title: "Conjunto de escala único e falha de datacenter",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Você planeja implantar várias máquinas virtuais do Azure. Você precisa garantir que os serviços em execução nas máquinas virtuais estejam disponíveis se um único datacenter falhar. Solução: Você implanta as máquinas virtuais em um conjunto de escala. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Um conjunto de escala isolado não garante disponibilidade em caso de falha de datacenter, pois pode estar concentrado em uma única zona ou datacenter." },
            { correct: true, text: "Correta. Implantar máquinas virtuais em um conjunto de escala não é, por si só, uma solução para garantir a disponibilidade dos serviços em caso de falha de um único datacenter. Os conjuntos de escala são projetados principalmente para escalabilidade automática. Para garantir disponibilidade, seria mais apropriado usar redundância geográfica distribuindo as VMs em várias regiões do Azure ou usar conjuntos de disponibilidade." }
        ],
        glossary: [
            "Conjunto de escala: grupo de VMs idênticas que pode ser escalado automaticamente.",
            "Conjunto de disponibilidade: agrupamento que distribui VMs entre domínios de falha e atualização.",
            "Redundância geográfica: distribuição de recursos entre regiões diferentes.",
            "Domínio de falha: agrupamento físico de hardware com fonte de energia e rede compartilhadas."
        ],
        generalExplanation: [
            "A resposta correta é \"Não\".",
            "Implantar máquinas virtuais em um conjunto de escala não é, por si só, uma solução para garantir a disponibilidade dos serviços em caso de falha de um único datacenter.",
            "Os conjuntos de escala no Azure são projetados principalmente para lidar com a escalabilidade automática de instâncias de máquinas virtuais, adicionando ou removendo instâncias com base na carga de trabalho.",
            "Para garantir a disponibilidade em caso de falha de um único datacenter, seria mais apropriado usar a redundância geográfica distribuindo as máquinas virtuais em várias regiões do Azure, ou usar conjuntos de disponibilidade."
        ],
        realWorld: [
            "Um scale set pode ser distribuído entre zonas de disponibilidade para maior resiliência, mas isso precisa ser configurado explicitamente.",
            "Por padrão, um scale set pode ficar concentrado em uma única zona.",
            "Arquitetos devem planejar a distribuição geográfica para atender requisitos de continuidade."
        ]
    },
    {
        id: 22,
        title: "Aumentar limites de assinatura do Azure",
        domain: "Governança e Conformidade",
        prompt: "Você tenta criar várias instâncias gerenciadas do Microsoft SQL Server em um ambiente do Azure e receber uma mensagem de que você deve aumentar seus limites de assinatura do Azure. O que você deve fazer para aumentar os limites?",
        options: [
            { letter: "A", text: "Atualize seu plano de suporte", correct: false },
            { letter: "B", text: "Crie um alerta de integridade do serviço", correct: false },
            { letter: "C", text: "Crie uma nova solicitação de suporte", correct: true },
            { letter: "D", text: "Modifique uma política do Azure", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Atualizar o plano de suporte não altera limites de assinatura." },
            { correct: false, text: "Incorreta. Alertas de integridade do serviço notificam sobre incidentes, não aumentam limites." },
            { correct: true, text: "Correta. Quando se atinge os limites de assinatura do Azure e deseja-se aumentá-los, deve-se entrar em contato com o suporte da Microsoft através de uma solicitação de suporte. A equipe de suporte pode revisar a solicitação e trabalhar para aumentar os limites, se necessário." },
            { correct: false, text: "Incorreta. Políticas do Azure impõem regras de conformidade, não alteram limites de assinatura." }
        ],
        glossary: [
            "Limite de assinatura: restrição na quantidade de recursos que podem ser criados em uma assinatura do Azure.",
            "Solicitação de suporte: chamado aberto junto à Microsoft para resolução de problemas ou ajustes.",
            "Quota: limite de recursos por assinatura, região ou serviço."
        ],
        generalExplanation: [
            "A resposta \"Crie uma nova solicitação de suporte\" está correta.",
            "Quando se atinge os limites de assinatura do Azure e deseja-se aumentá-los, deve-se entrar em contato com o suporte da Microsoft através de uma solicitação de suporte.",
            "A equipe de suporte pode ajudar a revisar a solicitação e trabalhar para aumentar os limites, se necessário.",
            "Portanto, criar uma nova solicitação de suporte é a maneira apropriada de lidar com a situação em que se atinge os limites de assinatura."
        ],
        realWorld: [
            "Equipes que precisam de mais vCPUs em uma região abrem chamado de aumento de quota.",
            "O processo é rápido para quotas comuns e pode levar mais tempo para limites regulados.",
            "Planejar aumentos antes de picos sazonais evita bloqueios de implantação."
        ]
    },
    {
        id: 23,
        title: "Acesso em nuvem pública",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Em um modelo de nuvem pública, apenas usuários convidados em sua empresa podem acessar os recursos na nuvem?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Em um modelo de nuvem pública, os recursos não estão limitados apenas a usuários convidados da empresa." },
            { correct: true, text: "Correta. Em um ambiente de nuvem pública, os recursos estão disponíveis para um público mais amplo, incluindo qualquer pessoa que tenha as credenciais necessárias para acessá-los. Os recursos são normalmente acessíveis pela Internet e não estão restritos apenas a usuários internos ou convidados." }
        ],
        glossary: [
            "Nuvem pública: modelo de computação em nuvem em que os recursos são compartilhados entre múltiplos clientes e acessíveis pela Internet.",
            "Usuário convidado: usuário externo à organização que recebe acesso a recursos específicos.",
            "Controle de acesso: mecanismos que definem quem pode acessar quais recursos."
        ],
        generalExplanation: [
            "A resposta \"Não\" está correta.",
            "Em um modelo de nuvem pública, os recursos na nuvem não estão limitados apenas a usuários convidados em sua empresa.",
            "Em um ambiente de nuvem pública, os recursos estão disponíveis para um público mais amplo, incluindo qualquer pessoa que tenha as credenciais necessárias para acessá-los.",
            "Os recursos na nuvem pública são normalmente acessíveis pela Internet e não estão restritos apenas a usuários internos ou convidados."
        ],
        realWorld: [
            "Serviços como sites públicos, APIs e armazenamento de blobs públicos são acessíveis por qualquer pessoa com a URL.",
            "O controle de acesso é feito por autenticação e autorização, não por restrição de rede.",
            "Empresas devem configurar corretamente permissões para evitar exposição indevida."
        ]
    },
    {
        id: 24,
        title: "Aviso de 12 meses para encerramento de serviço",
        domain: "Governança e Conformidade",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Se a Microsoft planeja acabar com o suporte a um serviço Azure que NÃO tenha um serviço sucessor, a Microsoft fornecerá notificação pelo menos 12 meses antes. Instruções: Reveja o texto destacado. Se ele fizer a declaração correta, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "90 dias", correct: false },
            { letter: "B", text: "6 meses", correct: false },
            { letter: "C", text: "Nenhuma mudança é necessária.", correct: true },
            { letter: "D", text: "30 dias", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O aviso mínimo é de 12 meses, não 90 dias." },
            { correct: false, text: "Incorreta. O aviso mínimo é de 12 meses, não 6 meses." },
            { correct: true, text: "Correta. O texto destacado é preciso. Se a Microsoft planeja encerrar o suporte a um serviço Azure que não tenha um serviço sucessor, ela geralmente fornece uma notificação com pelo menos 12 meses de antecedência. Essa prática permite que os clientes se preparem para a transição ou procurem alternativas." },
            { correct: false, text: "Incorreta. O aviso mínimo é de 12 meses, não 30 dias." }
        ],
        glossary: [
            "Política moderna do ciclo de vida: diretrizes da Microsoft para suporte e descontinuação de serviços do Azure.",
            "Serviço sucessor: serviço que substitui funcionalmente um serviço descontinuado.",
            "Aviso de 12 meses: período mínimo de antecedência para encerramento de suporte sem serviço sucessor."
        ],
        generalExplanation: [
            "A resposta \"Nenhuma mudança é necessária\" está correta.",
            "O texto destacado é preciso.",
            "Se a Microsoft planeja encerrar o suporte a um serviço Azure que não tenha um serviço sucessor, ela geralmente fornece uma notificação com pelo menos 12 meses de antecedência.",
            "Essa prática permite que os clientes se preparem para a transição ou procurem alternativas, garantindo uma transição suave."
        ],
        realWorld: [
            "Equipes de governança monitoram o ciclo de vida de serviços para planejar migrações.",
            "O aviso de 12 meses permite realocação de orçamento e recursos.",
            "Em ambientes regulados, mudanças precisam ser documentadas e aprovadas com antecedência."
        ]
    },
    {
        id: 25,
        title: "Região dos recursos em um grupo de recursos",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Todos os recursos do Azure implantados em um grupo de recursos devem usar a mesma região do Azure?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Os recursos em um grupo de recursos do Azure podem estar em diferentes regiões. Um grupo de recursos é uma construção lógica para organizar e gerenciar recursos relacionados, mas não exige que todos os recursos estejam na mesma região geográfica." },
            { correct: false, text: "Incorreta. A afirmação é falsa: recursos em um grupo de recursos podem estar em regiões distintas." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico para organizar e gerenciar recursos relacionados no Azure.",
            "Região do Azure: área geográfica com datacenters conectados por rede de baixa latência.",
            "Localização do grupo de recursos: metadados do grupo, mas os recursos podem estar em outras regiões."
        ],
        generalExplanation: [
            "A resposta \"Não\" está correta.",
            "Não é necessário que todos os recursos do Azure implantados em um grupo de recursos usem a mesma região do Azure.",
            "Um grupo de recursos é um contêiner lógico que ajuda a organizar recursos relacionados, mas os recursos dentro de um grupo podem estar em regiões diferentes, dependendo dos requisitos do aplicativo ou serviço.",
            "Isso é útil, por exemplo, para criar recursos em regiões geograficamente distribuídas para redundância ou escalabilidade."
        ],
        realWorld: [
            "Um grupo de recursos pode conter uma VM em East US, um banco de dados em West Europe e um Function App em Southeast Asia.",
            "Isso permite arquiteturas distribuídas com governança centralizada.",
            "O grupo de recursos armazena metadados, mas não restringe a região dos recursos."
        ]
    },
    {
        id: 26,
        title: "Serviços em pré-visualização pública e SLAs",
        domain: "Governança e Conformidade",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Todos os serviços do Azure que estão em pré-visualização pública são fornecidos sem qualquer documentação. Instruções: Reveja o texto destacado. Se ele fizer a declaração correta, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "apenas configurável de Azure CLI", correct: false },
            { letter: "B", text: "Nenhuma mudança é necessária", correct: false },
            { letter: "C", text: "excluídos dos Contratos de Nível de Serviço", correct: true },
            { letter: "D", text: "apenas configurável a partir do portal Azure", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Serviços em preview não são restritos à configuração via Azure CLI." },
            { correct: false, text: "Incorreta. A afirmação original está errada ao dizer \"sem qualquer documentação\"." },
            { correct: true, text: "Correta. Embora os serviços em pré-visualização pública possam ter documentação limitada, eles não são necessariamente fornecidos \"sem qualquer documentação\". No entanto, é comum que serviços em pré-visualização pública estejam excluídos dos Contratos de Nível de Serviço (SLAs), o que significa que não há garantias formais de disponibilidade ou desempenho durante a pré-visualização." },
            { correct: false, text: "Incorreta. Serviços em preview não são restritos ao portal Azure." }
        ],
        glossary: [
            "Pré-visualização pública: estágio de um serviço do Azure antes da disponibilidade geral, sujeito a mudanças.",
            "SLA (Contrato de Nível de Serviço): compromisso formal de disponibilidade e desempenho.",
            "Disponibilidade geral (GA): estágio em que um serviço é considerado estável e coberto por SLA."
        ],
        generalExplanation: [
            "A resposta \"excluídos dos Contratos de Nível de Serviço\" está correta.",
            "A afirmação original de que \"Todos os serviços do Azure que estão em pré-visualização pública são fornecidos sem qualquer documentação\" não é precisa.",
            "Embora os serviços em pré-visualização pública possam ter documentação limitada, eles não são necessariamente fornecidos \"sem qualquer documentação\".",
            "No entanto, é comum que serviços em pré-visualização pública estejam excluídos dos Contratos de Nível de Serviço (SLAs), o que significa que não há garantias formais de disponibilidade ou desempenho durante a pré-visualização."
        ],
        realWorld: [
            "Equipes que adotam serviços em preview devem estar cientes da ausência de SLA.",
            "Isso implica risco maior para cargas de produção.",
            "Recomenda-se usar preview apenas em ambientes de teste ou com tolerância a falhas."
        ]
    },
    {
        id: 27,
        title: "Alta disponibilidade no Azure SQL Data Warehouse",
        domain: "Banco de Dados",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Um dos benefícios do Azure SQL Data Warehouse é que a alta disponibilidade é incorporada à plataforma. Instruções: Reveja o texto destacado. Se ele fizer a declaração correta, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "versionamento", correct: false },
            { letter: "B", text: "Nenhuma mudança é necessária", correct: true },
            { letter: "C", text: "compressão de dados", correct: false },
            { letter: "D", text: "dimensionamento automático", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Versionamento não é o benefício destacado relacionado à alta disponibilidade." },
            { correct: true, text: "Correta. O texto destacado é preciso. Um dos benefícios do Azure SQL Data Warehouse (agora Azure Synapse Analytics) é que a alta disponibilidade é incorporada à plataforma. A plataforma gerencia automaticamente a replicação de dados e outros aspectos necessários para garantir a disponibilidade dos dados e a continuidade do serviço." },
            { correct: false, text: "Incorreta. Compressão de dados é um recurso, mas não é o benefício destacado." },
            { correct: false, text: "Incorreta. Dimensionamento automático não é o benefício destacado relacionado à alta disponibilidade." }
        ],
        glossary: [
            "Azure SQL Data Warehouse: antigo nome do Azure Synapse Analytics, serviço de data warehouse analítico.",
            "Alta disponibilidade: capacidade de um sistema permanecer operacional com tempo mínimo de inatividade.",
            "Replicação de dados: duplicação de dados para garantir disponibilidade e recuperação."
        ],
        generalExplanation: [
            "A resposta correta é \"Nenhuma mudança é necessária\".",
            "O texto destacado é preciso.",
            "Um dos benefícios do Azure SQL Data Warehouse (agora Azure Synapse Analytics) é que a alta disponibilidade é incorporada à plataforma.",
            "Isso significa que a plataforma gerencia automaticamente a replicação de dados e outros aspectos necessários para garantir a disponibilidade dos dados e a continuidade do serviço."
        ],
        realWorld: [
            "Synapse Analytics oferece replicação automática e failover para garantir continuidade.",
            "Equipes não precisam configurar manualmente clusters de alta disponibilidade.",
            "Isso simplifica a operação de data warehouses críticos."
        ]
    },
    {
        id: 28,
        title: "PaaS no Azure com App Service e Azure SQL",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Sua empresa planeja migrar todos os seus dados e recursos para o Azure. O plano de migração da empresa afirma que apenas as soluções de Plataforma como Serviço (PaaS) devem ser usadas no Azure. Você precisa implantar um ambiente Azure que atenda ao plano de migração da empresa. Solução: Você cria um Azure App Service e bancos de dados Azure SQL. Isso cumpre o objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. App Service e Azure SQL são ambos serviços PaaS, portanto atendem ao requisito." },
            { correct: true, text: "Correta. O Azure App Service é uma oferta de Plataforma como Serviço (PaaS) e os bancos de dados Azure SQL também são PaaS. Criar ambos segue o plano de migração que exige o uso de soluções PaaS no Azure." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem em que o provedor gerencia a infraestrutura e a plataforma, permitindo que o cliente foque na aplicação.",
            "Azure App Service: serviço PaaS para hospedagem de aplicações web, APIs e backends.",
            "Azure SQL Database: serviço PaaS de banco de dados relacional gerenciado."
        ],
        generalExplanation: [
            "A resposta \"Sim\" está correta.",
            "Ao criar um Azure App Service (PaaS) e bancos de dados Azure SQL (também PaaS), segue-se o plano de migração da empresa, que exige o uso de soluções PaaS no Azure.",
            "As soluções PaaS permitem focar mais na lógica do aplicativo e menos na infraestrutura, simplificando o gerenciamento e a escalabilidade.",
            "Portanto, criar um Azure App Service e bancos de dados Azure SQL atende ao objetivo de migrar usando principalmente soluções PaaS."
        ],
        realWorld: [
            "Empresas migram aplicações web para App Service e bancos para Azure SQL para reduzir esforço operacional.",
            "Isso elimina a necessidade de gerenciar servidores e patches de sistema operacional.",
            "A combinação é comum em modernização de aplicações .NET."
        ]
    },
    {
        id: 29,
        title: "Coleta centralizada de eventos de recursos",
        domain: "Monitoramento e Diagnóstico",
        prompt: "Qual serviço do Azure você deve usar para coletar eventos de vários recursos em um repositório centralizado?",
        options: [
            { letter: "A", text: "Azure Monitor", correct: false },
            { letter: "B", text: "Serviços de Análise Azure", correct: false },
            { letter: "C", text: "Análise do fluxo do Azure", correct: false },
            { letter: "D", text: "Hubs de eventos do Azure", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure Monitor coleta métricas e logs, mas para ingestão centralizada de eventos em escala, o Event Hubs é mais adequado." },
            { correct: false, text: "Incorreta. Os Serviços de Análise são para processamento analítico, não para ingestão de eventos." },
            { correct: false, text: "Incorreta. O Stream Analytics processa fluxos de dados, não é o repositório central de eventos." },
            { correct: true, text: "Correta. O Azure Event Hubs é um serviço projetado especificamente para coletar e processar grandes volumes de eventos ou mensagens de vários recursos e enviá-los para um repositório centralizado. Ele fornece uma plataforma escalável e altamente disponível para ingestão e processamento em tempo real de dados de eventos." }
        ],
        glossary: [
            "Azure Event Hubs: serviço de ingestão de eventos em escala, capaz de receber milhões de eventos por segundo.",
            "Azure Monitor: serviço de monitoramento que coleta métricas e logs de recursos do Azure.",
            "Stream Analytics: serviço de processamento de fluxo em tempo real.",
            "Serviços de Análise: serviços de análise de dados, como Azure Synapse Analytics."
        ],
        generalExplanation: [
            "A resposta \"Hubs de eventos do Azure\" está correta.",
            "O Azure Event Hubs é um serviço projetado especificamente para coletar e processar grandes volumes de eventos ou mensagens de vários recursos e enviá-los para um repositório centralizado.",
            "Ele fornece uma plataforma escalável e altamente disponível para ingestão e processamento em tempo real de dados de eventos.",
            "Ao utilizar o Azure Event Hubs, pode-se criar um repositório centralizado para coletar, processar e analisar eventos de diversos recursos distribuídos em seu ambiente Azure."
        ],
        realWorld: [
            "Event Hubs é usado em cenários de telemetria, IoT e logging em larga escala.",
            "Integra-se com Stream Analytics, Functions e Databricks para processamento em tempo real.",
            "É a base de pipelines de dados em tempo real no Azure."
        ]
    },
    {
        id: 30,
        title: "Impedir criação de VMs em um grupo de recursos",
        domain: "Governança e Conformidade",
        prompt: "Você tem um grupo de recursos chamado RG1. Você planeja criar redes virtuais e serviços de aplicativos em RG1. Você precisa impedir a criação de máquinas virtuais apenas em RG1. O que você deve usar?",
        options: [
            { letter: "A", text: "uma Política Azure", correct: true },
            { letter: "B", text: "um papel Azure", correct: false },
            { letter: "C", text: "um bloqueio", correct: false },
            { letter: "D", text: "uma tag", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Para impedir a criação de máquinas virtuais em um grupo de recursos específico, usa-se políticas do Azure. As políticas permitem definir regras e diretrizes para recursos, incluindo a restrição de certas ações, como a criação de máquinas virtuais, em grupos de recursos específicos." },
            { correct: false, text: "Incorreta. Papéis Azure definem permissões de acesso, mas não impedem a criação de tipos específicos de recursos por si só." },
            { correct: false, text: "Incorreta. Bloqueios impedem alteração ou exclusão de recursos, mas não impedem a criação de novos recursos." },
            { correct: false, text: "Incorreta. Tags são metadados para organização, não impedem a criação de recursos." }
        ],
        glossary: [
            "Política do Azure: regra que impõe conformidade em recursos do Azure, podendo negar criação de tipos específicos.",
            "Papel Azure (RBAC): conjunto de permissões atribuídas a usuários, grupos ou identidades.",
            "Bloqueio (lock): impede alteração ou exclusão de recursos.",
            "Tag: par chave-valor para organização e categorização."
        ],
        generalExplanation: [
            "A resposta \"Uma política do Azure\" está correta.",
            "Para impedir a criação de máquinas virtuais em um grupo de recursos específico, pode-se usar políticas do Azure.",
            "As políticas do Azure permitem definir regras e diretrizes para recursos em seu ambiente, incluindo a restrição de certas ações, como a criação de máquinas virtuais, em grupos de recursos específicos.",
            "Portanto, a criação de uma política do Azure que impeça a criação de máquinas virtuais em RG1 é uma abordagem apropriada."
        ],
        realWorld: [
            "Políticas são usadas para impor padrões corporativos, como restringir regiões ou tipos de recursos.",
            "Uma política comum é 'Allowed resource types', que bloqueia tipos não aprovados.",
            "Isso é essencial para governança em ambientes multi-equipe."
        ]
    },
    {
        id: 31,
        title: "Permissões em grupo de recursos",
        domain: "Identidade e Segurança",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Se você atribuir permissões para um usuário gerenciar um grupo de recursos, o usuário poderá gerenciar todos os recursos do Azure nesse grupo de recursos?",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Se você atribuir permissões a um usuário para gerenciar um grupo de recursos no Azure, o usuário terá permissão para gerenciar todos os recursos dentro desse grupo de recursos. As permissões concedidas em um nível mais alto, como o grupo de recursos, geralmente se aplicam a todos os recursos contidos nesse grupo, a menos que permissões específicas em um recurso individual substituam as permissões de grupo." },
            { correct: false, text: "Incorreta. A afirmação é verdadeira: permissões em grupo de recursos se aplicam aos recursos contidos." }
        ],
        glossary: [
            "RBAC (Role-Based Access Control): modelo de controle de acesso baseado em funções atribuídas a escopos.",
            "Escopo: nível em que uma permissão é atribuída (assinatura, grupo de recursos, recurso).",
            "Herança de permissões: permissões atribuídas em escopos superiores se aplicam aos inferiores."
        ],
        generalExplanation: [
            "A resposta \"Sim\" está correta.",
            "Se você atribuir permissões a um usuário para gerenciar um grupo de recursos no Azure, o usuário terá permissão para gerenciar todos os recursos dentro desse grupo de recursos.",
            "As permissões concedidas em um nível mais alto, como o grupo de recursos, geralmente se aplicam a todos os recursos contidos nesse grupo, a menos que permissões específicas em um recurso individual substituam as permissões de grupo.",
            "Portanto, ao gerenciar um grupo de recursos, o usuário pode gerenciar todos os recursos dentro desse grupo."
        ],
        realWorld: [
            "Atribuir a função 'Contributor' em um grupo de recursos permite criar, alterar e excluir recursos nele.",
            "Isso é comum em equipes que gerenciam um conjunto de recursos relacionados.",
            "Permissões podem ser refinadas com funções personalizadas e escopos menores."
        ]
    },
    {
        id: 32,
        title: "Sistemas operacionais em zonas de disponibilidade",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Apenas máquinas virtuais que executam o Windows Server podem ser criadas em zonas de disponibilidade?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Zonas de disponibilidade não são restritas a VMs Windows Server." },
            { correct: true, text: "Correta. As zonas de disponibilidade no Azure não estão restritas apenas a máquinas virtuais que executam o Windows Server. Elas podem ser utilizadas para máquinas virtuais que executam diversos sistemas operacionais, incluindo várias distribuições Linux e outras soluções baseadas em nuvem." }
        ],
        glossary: [
            "Zona de disponibilidade: local fisicamente separado dentro de uma região do Azure.",
            "Sistema operacional: software base que gerencia hardware e executa aplicações.",
            "Linux: família de sistemas operacionais open source amplamente usada no Azure."
        ],
        generalExplanation: [
            "\"Não\" está correta.",
            "As zonas de disponibilidade no Azure não estão restritas apenas a máquinas virtuais que executam o Windows Server.",
            "Elas podem ser utilizadas para máquinas virtuais que executam diversos sistemas operacionais, incluindo várias distribuições Linux e outras soluções baseadas em nuvem.",
            "As zonas de disponibilidade garantem alta disponibilidade distribuindo recursos em datacenters físicos separados dentro de uma mesma região, proporcionando redundância."
        ],
        realWorld: [
            "VMs Linux em zonas de disponibilidade são comuns em workloads de containers e microsserviços.",
            "A escolha do SO depende da aplicação, não da zona de disponibilidade.",
            "Zonas suportam Windows Server, Linux e imagens personalizadas."
        ]
    },
    {
        id: 33,
        title: "Duas ou mais zonas de disponibilidade",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Você planeja implantar várias máquinas virtuais do Azure. Você precisa garantir que os serviços em execução nas máquinas virtuais estejam disponíveis se um único datacenter falhar. Solução: Você implanta as máquinas virtuais em duas ou mais zonas de disponibilidade. Isso cumpre o objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A implantação em duas ou mais zonas de disponibilidade é exatamente a solução para proteger contra falha de um único datacenter." },
            { correct: true, text: "Correta. Ao implantar as máquinas virtuais em duas ou mais zonas de disponibilidade, aumenta-se a resiliência e disponibilidade dos serviços. Isso permite que os serviços permaneçam disponíveis mesmo se um único datacenter ou uma zona de disponibilidade falhar. As zonas de disponibilidade no Azure são projetadas para fornecer redundância física e lógica, ajudando a garantir alta disponibilidade e tolerância a falhas." }
        ],
        glossary: [
            "Zona de disponibilidade: local fisicamente separado dentro de uma região do Azure.",
            "Redundância física: duplicação de infraestrutura em locais diferentes.",
            "Tolerância a falhas: capacidade de um sistema continuar operando mesmo com falhas parciais."
        ],
        generalExplanation: [
            "A resposta \"Sim\" está correta.",
            "Ao implantar as máquinas virtuais em duas ou mais zonas de disponibilidade, aumenta-se a resiliência e disponibilidade dos serviços executados nas máquinas virtuais.",
            "Isso permite que os serviços permaneçam disponíveis mesmo se um único datacenter ou uma zona de disponibilidade falhar.",
            "As zonas de disponibilidade no Azure são projetadas para fornecer redundância física e lógica, ajudando a garantir alta disponibilidade e tolerância a falhas."
        ],
        realWorld: [
            "Aplicações críticas são implantadas em três zonas para maximizar a resiliência.",
            "Isso permite SLAs de até 99,99% para VMs.",
            "É a base de arquiteturas de alta disponibilidade no Azure."
        ]
    },
    {
        id: 34,
        title: "Azure Site Recovery e recuperação de desastres",
        domain: "Continuidade de Negócios",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. O Azure Site Recovery fornece tolerância a falhas para máquinas virtuais. Instruções: Reveja o texto destacado. Se ele corrigir a declaração, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "Nenhuma mudança é necessária.", correct: false },
            { letter: "B", text: "alta disponibilidade", correct: false },
            { letter: "C", text: "elasticidade", correct: false },
            { letter: "D", text: "recuperação de desastres", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação original está errada ao dizer \"tolerância a falhas\"." },
            { correct: false, text: "Incorreta. Alta disponibilidade é diferente de recuperação de desastres." },
            { correct: false, text: "Incorreta. Elasticidade refere-se à capacidade de escalar recursos." },
            { correct: true, text: "Correta. O Azure Site Recovery é uma solução de recuperação de desastres que ajuda a garantir a continuidade dos negócios, fornecendo tolerância a falhas para máquinas virtuais. Ele permite replicar máquinas virtuais de um local para outro e oferece a capacidade de orquestrar o processo de failover para um local secundário em caso de falha no local principal." }
        ],
        glossary: [
            "Azure Site Recovery: serviço de recuperação de desastres que replica VMs para outra região ou local.",
            "Tolerância a falhas: capacidade de continuar operando durante falhas.",
            "Recuperação de desastres: conjunto de processos para restaurar operações após um desastre.",
            "Failover: processo de redirecionar operações para um ambiente secundário."
        ],
        generalExplanation: [
            "A resposta \"recuperação de desastres\" está correta.",
            "O Azure Site Recovery é uma solução de recuperação de desastres que ajuda a garantir a continuidade dos negócios, fornecendo tolerância a falhas para máquinas virtuais.",
            "Ele permite replicar máquinas virtuais de um local para outro e oferece a capacidade de orquestrar o processo de failover para um local secundário em caso de falha no local principal.",
            "Portanto, substituir \"tolerância a falhas\" por \"recuperação de desastres\" na afirmação faz a declaração correta."
        ],
        realWorld: [
            "Site Recovery é usado para replicar VMs locais para o Azure ou entre regiões do Azure.",
            "Permite testes de failover sem impacto na produção.",
            "É parte essencial de planos de continuidade de negócios."
        ]
    },
    {
        id: 35,
        title: "Região dos recursos em grupo de recursos (repetida)",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Todos os recursos do Azure implantados em um grupo de recursos devem usar a mesma região do Azure?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Os recursos em um grupo de recursos do Azure podem estar em diferentes regiões. Um grupo de recursos é uma construção lógica para organizar e gerenciar recursos relacionados, mas não exige que todos os recursos estejam na mesma região geográfica." },
            { correct: false, text: "Incorreta. A afirmação é falsa: recursos em um grupo de recursos podem estar em regiões distintas." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico para organizar e gerenciar recursos relacionados no Azure.",
            "Região do Azure: área geográfica com datacenters conectados por rede de baixa latência.",
            "Localização do grupo de recursos: metadados do grupo, mas os recursos podem estar em outras regiões."
        ],
        generalExplanation: [
            "A resposta \"Não\" está correta.",
            "Não é necessário que todos os recursos do Azure implantados em um grupo de recursos usem a mesma região do Azure.",
            "Um grupo de recursos é um contêiner lógico que ajuda a organizar recursos relacionados, mas os recursos dentro de um grupo podem estar em regiões diferentes, dependendo dos requisitos do aplicativo ou serviço.",
            "Isso é útil, por exemplo, para criar recursos em regiões geograficamente distribuídas para redundância ou escalabilidade."
        ],
        realWorld: [
            "Um grupo de recursos pode conter uma VM em East US, um banco de dados em West Europe e um Function App em Southeast Asia.",
            "Isso permite arquiteturas distribuídas com governança centralizada.",
            "O grupo de recursos armazena metadados, mas não restringe a região dos recursos."
        ]
    },
    {
        id: 36,
        title: "Criar VM via portal Azure",
        domain: "Computação e Implantação",
        prompt: "Você tem um ambiente Azure. Você precisa criar uma nova máquina virtual do Azure a partir de um tablet que executa o sistema operacional Android. Solução: Você usa o portal Azure. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O portal Azure é acessível via navegador em qualquer dispositivo, incluindo tablets Android." },
            { correct: true, text: "Correta. O portal do Azure é uma interface baseada na web que oferece uma experiência amigável para criar, gerenciar e monitorar recursos no Azure, tornando possível realizar tarefas de administração, como criar máquinas virtuais, de forma conveniente e acessível a partir de dispositivos móveis, incluindo tablets Android." }
        ],
        glossary: [
            "Portal do Azure: interface web para gerenciamento de recursos do Azure.",
            "Tablet Android: dispositivo móvel com sistema operacional Android e navegador web.",
            "Máquina virtual: recurso de computação em nuvem que emula um servidor físico."
        ],
        generalExplanation: [
            "Sim é a resposta correta.",
            "Pode-se usar o portal do Azure para criar uma nova máquina virtual do Azure a partir de qualquer dispositivo com um navegador da web, incluindo tablets que executam o sistema operacional Android.",
            "O portal do Azure é uma interface baseada na web que oferece uma experiência amigável para criar, gerenciar e monitorar recursos no Azure, tornando possível realizar tarefas de administração, como criar máquinas virtuais, de forma conveniente e acessível a partir de dispositivos móveis."
        ],
        realWorld: [
            "Administradores podem gerenciar recursos do Azure de qualquer lugar com acesso à Internet.",
            "O portal é responsivo e funciona em tablets e smartphones.",
            "Isso facilita operações em campo e respostas rápidas a incidentes."
        ]
    },
    {
        id: 37,
        title: "Azure AD Identity Protection para IP anônimo",
        domain: "Identidade e Segurança",
        prompt: "Você precisa garantir que quando os usuários do Azure Active Directory (Azure AD) se conectam ao Azure AD a partir da Internet usando um endereço IP anônimo, os usuários sejam solicitados automaticamente a alterar suas senhas. Qual serviço Azure deve usar?",
        options: [
            { letter: "A", text: "Azure AD Privileged Identity Management", correct: false },
            { letter: "B", text: "Azure Advanced Threat Protection (ATP)", correct: false },
            { letter: "C", text: "Azure AD Identity Protection", correct: true },
            { letter: "D", text: "Azure AD Connect Health", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. PIM gerencia acesso privilegiado just-in-time, não detecção de risco de login." },
            { correct: false, text: "Incorreta. Azure ATP (agora Defender for Identity) monitora identidades locais, não logins no Azure AD." },
            { correct: true, text: "Correta. O Azure AD Identity Protection é um serviço que ajuda a proteger as identidades dos usuários ao detectar e responder automaticamente a ameaças de identidade em tempo real. Ele oferece recursos como a detecção de riscos, que pode ser configurada para solicitar automaticamente a alteração de senhas quando os usuários se conectam usando endereços IP anônimos." },
            { correct: false, text: "Incorreta. O Azure AD Connect Health monitora a saúde da sincronização de identidades, não riscos de login." }
        ],
        glossary: [
            "Azure AD Identity Protection: serviço que detecta riscos de identidade e permite respostas automatizadas, como exigir MFA ou troca de senha.",
            "IP anônimo: endereço IP associado a proxies ou Tor, indicando possível tentativa de ocultação.",
            "Detecção de risco: identificação de comportamentos suspeitos de login.",
            "Política de risco: regra que define ações automáticas com base no nível de risco detectado."
        ],
        generalExplanation: [
            "A resposta \"Azure AD Identity Protection\" está correta.",
            "O Azure AD Identity Protection é um serviço do Azure que ajuda a proteger as identidades dos usuários ao detectar e responder automaticamente a ameaças de identidade em tempo real.",
            "Ele oferece recursos como a detecção de riscos, que pode ser configurada para solicitar automaticamente a alteração de senhas quando os usuários se conectam usando endereços IP anônimos.",
            "Isso fortalece a segurança e protege contra acessos não autorizados."
        ],
        realWorld: [
            "Identity Protection detecta logins de IPs anônimos, viagens impossíveis e credenciais vazadas.",
            "Políticas de risco podem exigir MFA ou troca de senha automaticamente.",
            "É parte essencial de uma estratégia de Zero Trust no Azure AD."
        ]
    },
    {
        id: 38,
        title: "Limitar tráfego de entrada em redes virtuais",
        domain: "Redes e Entrega de Conteúdo",
        prompt: "Você tem um ambiente Azure que contém 10 redes virtuais e 100 máquinas virtuais. Você precisa limitar a quantidade de tráfego de entrada para todas as redes virtuais do Azure. O que você deve criar?",
        options: [
            { letter: "A", text: "um Grupo de Segurança de Aplicativos (ASG)", correct: false },
            { letter: "B", text: "um firewall Azure", correct: true },
            { letter: "C", text: "10 circuitos Azure ExpressRoute", correct: false },
            { letter: "D", text: "10 gateways de rede virtual", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. ASGs agrupam VMs para simplificar regras de NSG, mas não fornecem filtragem centralizada entre VNets." },
            { correct: true, text: "Correta. Para limitar a quantidade de tráfego de entrada para todas as redes virtuais no ambiente Azure, pode-se implementar um Firewall do Azure. Ele fornece controle de política de segurança de aplicativos e uma camada de proteção para recursos da rede virtual, permitindo definir regras de segurança para filtrar o tráfego de entrada e saída entre redes virtuais e a Internet." },
            { correct: false, text: "Incorreta. ExpressRoute é uma conexão privada dedicada, não um mecanismo de filtragem de tráfego." },
            { correct: false, text: "Incorreta. Gateways de rede virtual conectam redes, mas não filtram tráfego de entrada de forma centralizada." }
        ],
        glossary: [
            "Azure Firewall: serviço de segurança de rede gerenciado que fornece filtragem centralizada de tráfego.",
            "ASG (Application Security Group): agrupamento lógico de VMs para simplificar regras de NSG.",
            "ExpressRoute: conexão privada dedicada entre redes locais e o Azure.",
            "Gateway de rede virtual: componente que conecta VNets a redes locais ou outras VNets."
        ],
        generalExplanation: [
            "A resposta correta é \"um firewall Azure\".",
            "Para limitar a quantidade de tráfego de entrada para todas as redes virtuais no ambiente Azure, pode-se implementar um Firewall do Azure.",
            "O Azure Firewall é um serviço gerenciado que fornece controle de política de segurança de aplicativos e uma camada de proteção para recursos da rede virtual.",
            "Ele permite definir regras de segurança para filtrar o tráfego de entrada e saída entre redes virtuais e a Internet."
        ],
        realWorld: [
            "Azure Firewall é implantado em um hub VNet para centralizar a inspeção de tráfego.",
            "Suporta regras de rede, aplicação e NAT, além de threat intelligence.",
            "É essencial em arquiteturas hub-and-spoke com múltiplas VNets."
        ]
    },
    {
        id: 39,
        title: "Armazenar certificados no Azure",
        domain: "Identidade e Segurança",
        prompt: "Qual serviço do Azure você deve usar para armazenar certificados?",
        options: [
            { letter: "A", text: "Centro de Segurança do Azure", correct: false },
            { letter: "B", text: "Proteção de informações do Azure", correct: false },
            { letter: "C", text: "uma conta de armazenamento Azure", correct: false },
            { letter: "D", text: "Cofre de Chaves Azure", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Centro de Segurança do Azure fornece recomendações de segurança, mas não armazena certificados." },
            { correct: false, text: "Incorreta. A Proteção de Informações do Azure classifica e protege documentos, não armazena certificados." },
            { correct: false, text: "Incorreta. Contas de armazenamento podem armazenar arquivos, mas não oferecem gerenciamento seguro de certificados." },
            { correct: true, text: "Correta. O Cofre de Chaves Azure é um serviço projetado para armazenar e gerenciar certificados, chaves de criptografia, senhas e outros segredos de forma segura. Ele fornece um local centralizado para armazenar e gerenciar chaves criptográficas e certificados, garantindo a segurança dos dados e recursos no Azure." }
        ],
        glossary: [
            "Azure Key Vault: serviço gerenciado para armazenamento seguro de chaves, segredos e certificados.",
            "Certificado: credencial digital usada para autenticação e criptografia.",
            "HSM (Hardware Security Module): módulo de hardware para proteção de chaves criptográficas."
        ],
        generalExplanation: [
            "A resposta \"Cofre de Chaves Azure\" está correta.",
            "O Cofre de Chaves Azure é um serviço projetado para armazenar e gerenciar certificados, chaves de criptografia, senhas e outros segredos de forma segura.",
            "Ele fornece um local centralizado para armazenar e gerenciar chaves criptográficas e certificados, garantindo a segurança dos dados e recursos no Azure.",
            "Portanto, o Cofre de Chaves Azure é o serviço apropriado para armazenar certificados no ambiente Azure."
        ],
        realWorld: [
            "Key Vault é usado para armazenar certificados SSL/TLS usados em App Services e Application Gateway.",
            "Integra-se com HSM para proteção de chaves de alto nível.",
            "Permite controle de acesso granular e auditoria de uso de certificados."
        ]
    },
    {
        id: 40,
        title: "Script PowerShell com módulo Azure",
        domain: "Computação e Implantação",
        prompt: "Um administrador do Azure planeja executar um script PowerShell que cria recursos do Azure. Você precisa recomendar qual configuração do computador usar para executar o script. Solução: Execute o script a partir de um computador que executa o Windows 10 e tenha o módulo Azure PowerShell instalado. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Um computador Windows 10 com Azure PowerShell instalado é adequado para executar scripts de criação de recursos." },
            { correct: true, text: "Correta. Para executar um script PowerShell que cria recursos do Azure, pode-se usar um computador com Windows 10 e ter o módulo Azure PowerShell instalado. O módulo Azure PowerShell fornece os cmdlets e as funcionalidades necessárias para interagir com recursos do Azure a partir de um ambiente PowerShell no Windows." }
        ],
        glossary: [
            "Azure PowerShell: módulo que fornece cmdlets para gerenciamento de recursos do Azure via PowerShell.",
            "PowerShell: linguagem de script e shell de linha de comando da Microsoft.",
            "Cmdlet: comando especializado do PowerShell."
        ],
        generalExplanation: [
            "Sim, a resposta está correta.",
            "Para executar um script PowerShell que cria recursos do Azure, pode-se usar um computador com Windows 10 e ter o módulo Azure PowerShell instalado.",
            "Isso é uma configuração adequada para executar tarefas de gerenciamento de recursos do Azure usando PowerShell.",
            "O módulo Azure PowerShell fornece os cmdlets e as funcionalidades necessárias para interagir com recursos do Azure a partir de um ambiente PowerShell no Windows."
        ],
        realWorld: [
            "Administradores usam Azure PowerShell para automação de provisionamento e gerenciamento.",
            "Scripts podem ser agendados ou integrados a pipelines.",
            "É uma alternativa ao Azure CLI para quem prefere PowerShell."
        ]
    },
    {
        id: 41,
        title: "Zonas de disponibilidade em todas as regiões",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. As zonas de disponibilidade podem ser implementadas em todas as regiões Azures?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. As zonas de disponibilidade não estão disponíveis em todas as regiões do Azure. A disponibilidade de zonas varia de região para região, e nem todas as regiões oferecem suporte a zonas de disponibilidade. Elas são implementadas em datacenters físicos separados dentro de uma mesma região, e à medida que o Azure expande suas ofertas, a presença de zonas também pode ser expandida, mas não estão universalmente disponíveis." },
            { correct: false, text: "Incorreta. A afirmação é falsa: nem todas as regiões do Azure suportam zonas de disponibilidade." }
        ],
        glossary: [
            "Zona de disponibilidade: local fisicamente separado dentro de uma região do Azure.",
            "Região do Azure: área geográfica com datacenters conectados por rede de baixa latência.",
            "Disponibilidade regional: conjunto de serviços e recursos disponíveis em uma região específica."
        ],
        generalExplanation: [
            "Sim, a resposta \"Não\" está correta.",
            "As zonas de disponibilidade não estão disponíveis em todas as regiões do Azure.",
            "A disponibilidade de zonas varia de região para região, e nem todas as regiões oferecem suporte a zonas de disponibilidade.",
            "As zonas de disponibilidade são implementadas em datacenters físicos separados dentro de uma mesma região do Azure para aumentar a resiliência e a disponibilidade dos serviços.",
            "À medida que o Azure continua a expandir suas ofertas em diferentes regiões, a presença de zonas de disponibilidade também pode ser expandida, mas elas não estão universalmente disponíveis em todas as regiões."
        ],
        realWorld: [
            "Regiões como East US, West Europe e Southeast Asia suportam zonas de disponibilidade.",
            "Regiões menores podem não oferecer zonas.",
            "Arquitetos devem verificar a disponibilidade de zonas antes de projetar cargas críticas."
        ]
    },
    {
        id: 42,
        title: "Primeiro recurso ao planejar migração para Azure",
        domain: "Governança e Conformidade",
        prompt: "Sua empresa planeja migrar todos os recursos de sua rede para o Azure. Você precisa começar o processo de planejamento explorando o Azure. O que você deve criar primeiro?",
        options: [
            { letter: "A", text: "um grupo de gestão", correct: false },
            { letter: "B", text: "uma rede virtual", correct: false },
            { letter: "C", text: "um grupo de recursos", correct: false },
            { letter: "D", text: "uma assinatura", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Grupos de gestão organizam assinaturas, mas pressupõem a existência de assinaturas." },
            { correct: false, text: "Incorreta. Redes virtuais são criadas dentro de uma assinatura e grupo de recursos." },
            { correct: false, text: "Incorreta. Grupos de recursos são criados dentro de uma assinatura." },
            { correct: true, text: "Correta. Ao começar o processo de planejamento para migrar recursos para o Azure, o primeiro passo é criar uma assinatura do Azure. A assinatura é essencial para organizar e gerenciar os recursos da nuvem, e é por meio dela que se consome serviços e gerencia a infraestrutura no Azure." }
        ],
        glossary: [
            "Assinatura do Azure: contêiner de cobrança e controle de acesso para recursos do Azure.",
            "Grupo de recursos: contêiner lógico para organizar recursos relacionados.",
            "Grupo de gestão: contêiner que organiza assinaturas para governança.",
            "Rede virtual: rede isolada no Azure onde recursos são implantados."
        ],
        generalExplanation: [
            "A resposta correta é \"uma assinatura\".",
            "Ao começar o processo de planejamento para migrar recursos para o Azure, o primeiro passo é criar uma assinatura do Azure.",
            "A assinatura é essencial para organizar e gerenciar os recursos da nuvem, e é por meio dela que se consome serviços e gerencia a infraestrutura no Azure.",
            "Portanto, criar uma assinatura é o primeiro passo lógico para iniciar o processo de planejamento e migração para o Azure."
        ],
        realWorld: [
            "Empresas criam assinaturas separadas por ambiente ou departamento para segregação de custos.",
            "Assinaturas são a base para cobrança e controle de acesso.",
            "Grupos de gestão são usados posteriormente para governança em escala."
        ]
    },
    {
        id: 43,
        title: "VM acessível via HTTP modificando NSG",
        domain: "Redes e Entrega de Conteúdo",
        prompt: "Seu ambiente Azure contém várias máquinas virtuais do Azure. Você precisa garantir que uma máquina virtual chamada VM1 esteja acessível a partir da Internet via HTTP. Solução: Você modifica um grupo de segurança de rede (NSG). Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Modificar o NSG é uma abordagem válida para permitir tráfego HTTP." },
            { correct: true, text: "Correta. Modificar um Grupo de Segurança de Rede (NSG) é uma abordagem válida para garantir que uma máquina virtual seja acessível a partir da Internet via HTTP. Ao ajustar as regras do NSG, pode-se permitir o tráfego HTTP (porta 80) para a máquina virtual desejada, possibilitando a comunicação pela Internet." }
        ],
        glossary: [
            "NSG (Network Security Group): grupo de segurança que filtra tráfego de rede em sub-redes e NICs.",
            "Regra de segurança: regra que permite ou nega tráfego com base em origem, destino, porta e protocolo.",
            "Porta 80: porta padrão do protocolo HTTP."
        ],
        generalExplanation: [
            "A resposta \"Sim\" está correta.",
            "Modificar um Grupo de Segurança de Rede (NSG) é uma abordagem válida para garantir que uma máquina virtual seja acessível a partir da Internet via HTTP.",
            "Ao ajustar as regras do NSG, pode-se permitir o tráfego HTTP (porta 80) para a máquina virtual desejada, possibilitando a comunicação pela Internet.",
            "É importante configurar as regras do NSG de acordo com as necessidades específicas do ambiente e os requisitos de segurança."
        ],
        realWorld: [
            "Equipes criam regras de NSG para permitir HTTP/HTTPS públicos em servidores web.",
            "Boas práticas recomendam restringir origens e portas ao mínimo necessário.",
            "NSGs são parte da defesa em profundidade, junto com firewalls e WAF."
        ]
    },
    {
        id: 44,
        title: "Declaração de Privacidade dos Serviços Online",
        domain: "Governança e Conformidade",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. A Declaração de Privacidade dos Serviços Online da Microsoft explica quais dados a Microsoft processa, como a Microsoft processa os dados e o propósito de processar os dados. Instruções: Reveja o texto destacado. Se ele corrigir a declaração, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "Contrato de assinatura on-line para o Microsoft Azure", correct: false },
            { letter: "B", text: "Termos de Serviços Online da Microsoft", correct: false },
            { letter: "C", text: "Nenhuma mudança é necessária.", correct: true },
            { letter: "D", text: "Contrato de nível de serviço on-line da Microsoft", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Contrato de assinatura não é o documento que explica o processamento de dados pessoais." },
            { correct: false, text: "Incorreta. Os Termos de Serviços Online cobrem uso dos serviços, não detalhes de privacidade." },
            { correct: true, text: "Correta. O texto destacado indica corretamente que a Declaração de Privacidade dos Serviços Online da Microsoft explica quais dados a Microsoft processa, como os dados são processados e o propósito desse processamento. Não há necessidade de fazer alterações na declaração, pois está precisa." },
            { correct: false, text: "Incorreta. O Contrato de Nível de Serviço trata de garantias de disponibilidade, não de privacidade." }
        ],
        glossary: [
            "Declaração de Privacidade: documento que descreve como a Microsoft coleta, usa e protege dados pessoais.",
            "Termos de Serviços Online: termos que regem o uso dos serviços da Microsoft.",
            "SLA (Contrato de Nível de Serviço): compromisso formal de disponibilidade e desempenho."
        ],
        generalExplanation: [
            "A resposta \"Nenhuma mudança é necessária\" está correta.",
            "O texto destacado indica corretamente que a Declaração de Privacidade dos Serviços Online da Microsoft explica quais dados a Microsoft processa, como os dados são processados e o propósito desse processamento.",
            "Não há necessidade de fazer alterações na declaração, pois está precisa."
        ],
        realWorld: [
            "A Declaração de Privacidade é o documento consultado por equipes de conformidade para entender o tratamento de dados.",
            "Ela detalha categorias de dados, finalidades e retenção.",
            "É essencial para avaliações de privacidade e LGPD/GDPR."
        ]
    },
    {
        id: 45,
        title: "Tags em grupo de recursos e recursos",
        domain: "Governança e Conformidade",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Se você atribuir uma tag a um grupo de recursos, todos os recursos do Azure nesse grupo de recursos serão atribuídos à mesma tag?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Quando você atribui uma tag a um grupo de recursos no Azure, a tag é aplicada ao grupo de recursos em si, não automaticamente a todos os recursos dentro desse grupo. Os recursos individuais dentro do grupo podem ter suas próprias tags separadas que podem ser diferentes das tags do grupo." },
            { correct: false, text: "Incorreta. A afirmação é falsa: tags em grupos de recursos não se propagam automaticamente aos recursos." }
        ],
        glossary: [
            "Tag: par chave-valor para organização e categorização de recursos.",
            "Herança de tags: em Azure Policy, é possível configurar herança de tags, mas não é o comportamento padrão.",
            "Grupo de recursos: contêiner lógico para organizar recursos relacionados."
        ],
        generalExplanation: [
            "A resposta \"Não\" está correta.",
            "Quando você atribui uma tag a um grupo de recursos no Azure, a tag é aplicada ao grupo de recursos em si, não automaticamente a todos os recursos dentro desse grupo de recursos.",
            "Os recursos individuais dentro do grupo de recursos podem ter suas próprias tags separadas que podem ser diferentes das tags do grupo de recursos.",
            "Portanto, a afirmação de que todos os recursos do Azure no grupo de recursos serão automaticamente atribuídos à mesma tag não é verdadeira."
        ],
        realWorld: [
            "Para propagar tags, é necessário usar Azure Policy com efeito 'append' ou 'modify'.",
            "Sem política, tags em grupos não são herdadas por recursos.",
            "Equipes de FinOps usam políticas para garantir que todos os recursos tenham tags de custo."
        ]
    },
    {
        id: 46,
        title: "Registro de atividades para auditoria de VM",
        domain: "Monitoramento e Diagnóstico",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. No Azure Monitor, você pode ver qual usuário desligou uma máquina virtual específica durante os últimos 14 dias. Instruções: Reveja o texto sublinhado. Se ele fizer a declaração correta, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "Registro de atividades do Azure", correct: true },
            { letter: "B", text: "Nenhuma mudança é necessária", correct: false },
            { letter: "C", text: "Azure Service Health", correct: false },
            { letter: "D", text: "Hubs de eventos do Azure", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Para rastrear quem desligou uma máquina virtual no Azure, geralmente usa-se o \"Registro de atividades do Azure\" para revisar os registros e identificar a ação do usuário. O \"Azure Monitor\" é uma ferramenta diferente que se concentra mais na monitorização e alerta de métricas e atividades em tempo real." },
            { correct: false, text: "Incorreta. A afirmação original está errada ao mencionar Azure Monitor em vez do Registro de atividades." },
            { correct: false, text: "Incorreta. Azure Service Health informa sobre incidentes de plataforma, não sobre ações de usuários." },
            { correct: false, text: "Incorreta. Event Hubs é para ingestão de eventos, não para auditoria de ações administrativas." }
        ],
        glossary: [
            "Registro de atividades do Azure: log que registra operações administrativas em recursos do Azure, incluindo quem, quando e o quê.",
            "Azure Monitor: serviço de monitoramento de métricas e logs de recursos.",
            "Azure Service Health: serviço que informa sobre incidentes e manutenções da plataforma Azure."
        ],
        generalExplanation: [
            "A resposta \"Registro de atividades do Azure\" é a correta.",
            "O texto sublinhado \"No Azure Monitor, você pode ver qual usuário desligou uma máquina virtual específica durante os últimos 14 dias\" não está correto.",
            "Para rastrear quem desligou uma máquina virtual no Azure, geralmente usa-se o \"Registro de atividades do Azure\" para revisar os registros e identificar a ação do usuário.",
            "O \"Azure Monitor\" é uma ferramenta diferente que se concentra mais na monitorização e alerta de métricas e atividades em tempo real."
        ],
        realWorld: [
            "O Registro de Atividades retém 90 dias de eventos administrativos por padrão.",
            "Pode ser exportado para Log Analytics, Storage ou Event Hubs para retenção maior.",
            "É essencial para auditoria e troubleshooting de mudanças em recursos."
        ]
    },
    {
        id: 47,
        title: "Região do Azure e datacenters de baixa latência",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Uma região do Azure contém um ou mais datacenters conectados usando uma rede de baixa latência. Instruções: Reveja o texto sublinhado. Se ele fizer a declaração correta, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "Contém um ou mais datacenters conectados usando uma rede de alta latência.", correct: false },
            { letter: "B", text: "É encontrado em cada país onde a Microsoft tem um escritório subsidiário.", correct: false },
            { letter: "C", text: "Nenhuma mudança é necessária.", correct: true },
            { letter: "D", text: "Pode ser encontrado em todos os países da Europa e das Américas apenas.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A rede entre datacenters de uma região é de baixa latência, não alta." },
            { correct: false, text: "Incorreta. Regiões do Azure não estão em todos os países com escritórios da Microsoft." },
            { correct: true, text: "Correta. O texto sublinhado \"Uma região do Azure contém um ou mais datacenters conectados usando uma rede de baixa latência\" faz uma afirmação correta. Uma região do Azure é composta por um ou mais datacenters interconectados usando uma rede de baixa latência, o que permite alta disponibilidade e redundância de serviços." },
            { correct: false, text: "Incorreta. Regiões do Azure existem em diversas partes do mundo, não apenas na Europa e Américas." }
        ],
        glossary: [
            "Região do Azure: área geográfica com um ou mais datacenters conectados por rede de baixa latência.",
            "Datacenter: instalação física que abriga servidores e infraestrutura de rede.",
            "Baixa latência: tempo de resposta reduzido entre componentes de rede."
        ],
        generalExplanation: [
            "A resposta \"NENHUMA AÇÃO NECESSÁRIA\" está correta.",
            "O texto sublinhado \"Uma região do Azure contém um ou mais datacenters conectados usando uma rede de baixa latência\" faz uma afirmação correta.",
            "De fato, uma região do Azure é composta por um ou mais datacenters interconectados usando uma rede de baixa latência, o que permite alta disponibilidade e redundância de serviços.",
            "Portanto, nenhuma alteração é necessária no texto sublinhado."
        ],
        realWorld: [
            "A baixa latência entre datacenters de uma região permite replicação síncrona e alta disponibilidade.",
            "Isso é fundamental para serviços como zonas de disponibilidade.",
            "Regiões são projetadas para oferecer desempenho consistente a usuários próximos."
        ]
    },
    {
        id: 48,
        title: "Comunicação entre rede local e VMs no Azure",
        domain: "Redes e Entrega de Conteúdo",
        prompt: "Você tem um ambiente Azure que contém várias máquinas virtuais Azure. Você planeja implementar uma solução que permita que os computadores clientes em sua rede local se comuniquem com as máquinas virtuais do Azure. Você precisa recomendar quais recursos do Azure devem ser criados para a solução planejada. Quais dois recursos do Azure você deve incluir na recomendação? Cada resposta correta apresenta parte da solução.",
        options: [
            { letter: "A", text: "um gateway de rede virtual", correct: true },
            { letter: "B", text: "uma rede virtual", correct: false },
            { letter: "C", text: "um balanceador de carga", correct: false },
            { letter: "D", text: "uma sub-rede para gateway de Aplicativo", correct: true },
            { letter: "E", text: "um Gateway de Aplicativo", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O gateway de rede virtual é essencial para estabelecer uma conexão segura entre a rede local e a rede virtual no Azure, permitindo a comunicação entre os computadores clientes e as máquinas virtuais no Azure." },
            { correct: false, text: "Incorreta. Uma rede virtual é necessária, mas não é suficiente sozinha para conectar redes locais." },
            { correct: false, text: "Incorreta. Balanceadores de carga distribuem tráfego entre VMs, não conectam redes locais ao Azure." },
            { correct: true, text: "Correta. Uma sub-rede para gateway de Aplicativo é importante para hospedar o Application Gateway, um serviço do Azure que otimiza e protege o tráfego da web para as aplicações, garantindo comunicação eficiente entre clientes locais e VMs no Azure." },
            { correct: false, text: "Incorreta. O Application Gateway é um balanceador de carga de camada 7, não um componente de conectividade híbrida." }
        ],
        glossary: [
            "Gateway de rede virtual: componente que conecta uma VNet do Azure a redes locais via VPN ou ExpressRoute.",
            "VPN Gateway: tipo de gateway de rede virtual que usa IPsec/IKE para conexões criptografadas.",
            "ExpressRoute: conexão privada dedicada entre redes locais e o Azure.",
            "Application Gateway: balanceador de carga de camada 7 com WAF."
        ],
        generalExplanation: [
            "As respostas \"um gateway de rede virtual\" e \"uma sub-rede para gateway de Aplicativo\" estão corretas.",
            "<strong>Gateway de rede virtual</strong>: essencial para estabelecer uma conexão segura entre a rede local e a rede virtual no Azure, permitindo a comunicação entre computadores clientes e VMs.",
            "<strong>Sub-rede para gateway de Aplicativo</strong>: importante para hospedar o Application Gateway, otimizando e protegendo o tráfego da web para as aplicações."
        ],
        realWorld: [
            "Empresas usam VPN Gateway ou ExpressRoute para conectar data centers locais ao Azure.",
            "Application Gateway é usado para publicar aplicações web com balanceamento e WAF.",
            "A combinação garante conectividade híbrida segura e publicação eficiente de aplicações."
        ]
    },
    {
        id: 49,
        title: "Limites de conta de armazenamento do Azure",
        domain: "Armazenamento",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Uma conta de Armazenamento do Azure pode conter até 2TB de dados e até um milhão de arquivos?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Uma conta de Armazenamento do Azure não é limitada a 2TB de dados. Na verdade, uma conta de armazenamento pode conter vários petabytes de dados, dependendo do tipo de conta e das configurações específicas. O Azure oferece escalabilidade para atender às necessidades de armazenamento de dados em grande escala." },
            { correct: false, text: "Incorreta. A afirmação é falsa: contas de armazenamento suportam muito mais que 2TB." }
        ],
        glossary: [
            "Conta de armazenamento: contêiner lógico que agrupa serviços de armazenamento do Azure (Blobs, Files, Queues, Tables).",
            "Petabyte: unidade de medida de dados equivalente a 1.024 terabytes.",
            "Escalabilidade: capacidade de aumentar recursos conforme a demanda."
        ],
        generalExplanation: [
            "A resposta correta é NÃO.",
            "Uma conta de Armazenamento do Azure não é limitada a 2TB de dados.",
            "Na verdade, uma conta de Armazenamento do Azure pode conter vários petabytes de dados, dependendo do tipo de conta e das configurações específicas.",
            "Portanto, a afirmação original de que uma conta de Armazenamento do Azure pode conter até 2TB de dados é incorreta. Ela pode armazenar muito mais."
        ],
        realWorld: [
            "Contas de armazenamento standard suportam até 5 PiB de dados.",
            "Blob storage é usado para armazenar grandes volumes de dados não estruturados.",
            "Limites variam por tipo de conta e serviço (Blob, Files, Queue, Table)."
        ]
    },
    {
        id: 50,
        title: "Script PowerShell via Linux com Azure CLI",
        domain: "Computação e Implantação",
        prompt: "Um administrador do Azure planeja executar um script PowerShell que cria recursos do Azure. Você precisa recomendar qual configuração do computador usar para executar o script. Solução: Execute o script a partir de um computador que executa Linux e tem as ferramentas Azure CLI instaladas. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Azure CLI não executa scripts PowerShell; são ferramentas diferentes." },
            { correct: true, text: "Correta. O cenário proposto envolve a execução de um script PowerShell para criar recursos do Azure. Nesse caso, não se deve usar um computador com Linux e as ferramentas Azure CLI, pois o Azure CLI é uma interface de linha de comando que não é específica do PowerShell. Para executar um script PowerShell no Azure, é recomendável usar um ambiente que suporte o PowerShell, como um computador com Windows ou um ambiente que possa executar o PowerShell Core." }
        ],
        glossary: [
            "Azure CLI: interface de linha de comando para gerenciamento de recursos do Azure.",
            "PowerShell Core: versão multiplataforma do PowerShell que pode ser executada em Linux e macOS.",
            "Azure PowerShell: módulo PowerShell para gerenciamento de recursos do Azure."
        ],
        generalExplanation: [
            "A resposta \"Não\" está correta.",
            "O cenário proposto envolve a execução de um script PowerShell para criar recursos do Azure.",
            "Nesse caso, não se deve usar um computador com Linux e as ferramentas Azure CLI, pois o Azure CLI é uma interface de linha de comando que não é específica do PowerShell.",
            "Para executar um script PowerShell no Azure, é recomendável usar um ambiente que suporte o PowerShell, como um computador com Windows ou um ambiente que possa executar o PowerShell Core (PowerShell em plataformas não Windows)."
        ],
        realWorld: [
            "Azure CLI é usado para scripts bash ou comandos diretos.",
            "Azure PowerShell é usado para scripts .ps1.",
            "PowerShell Core permite executar scripts PowerShell em Linux, mas requer instalação do módulo Az."
        ]
    },
    {
        id: 51,
        title: "Conformidade regulatória no Azure",
        domain: "Governança e Conformidade",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. A partir da Azure Cloud Shell, você pode acompanhar os padrões e regulamentos regulatórios da sua empresa, como a ISO 27001. Instruções: Reveja o texto destacado. Se ele corrigir a declaração, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "Nenhuma mudança é necessária.", correct: false },
            { letter: "B", text: "o Portal de Parceiros na Nuvem da Microsoft", correct: false },
            { letter: "C", text: "Gerente de Compliance", correct: true },
            { letter: "D", text: "o Centro de Confiança", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação original está errada ao mencionar Azure Cloud Shell." },
            { correct: false, text: "Incorreta. O Portal de Parceiros na Nuvem é para parceiros Microsoft, não para conformidade." },
            { correct: true, text: "Correta. A Azure Cloud Shell é uma interface de linha de comando para interagir com recursos do Azure, e não é uma ferramenta específica para acompanhar padrões e regulamentos regulatórios, como a ISO 27001. Para acompanhar esses padrões, normalmente seria necessário o uso de ferramentas específicas ou a designação de um Gerente de Compliance responsável por monitorar e garantir o cumprimento desses padrões." },
            { correct: false, text: "Incorreta. O Centro de Confiança fornece informações sobre conformidade, mas o Gerente de Compliance é o papel responsável por acompanhar os padrões." }
        ],
        glossary: [
            "Azure Cloud Shell: shell baseado em navegador para gerenciamento de recursos do Azure.",
            "ISO 27001: norma internacional de segurança da informação.",
            "Gerente de Compliance: profissional responsável por garantir conformidade regulatória.",
            "Microsoft Trust Center: portal com informações sobre conformidade, segurança e privacidade da Microsoft."
        ],
        generalExplanation: [
            "A resposta \"Gerente de Compliance\" está correta.",
            "O texto original não está correto.",
            "A Azure Cloud Shell é uma interface de linha de comando para interagir com recursos do Azure, e não é uma ferramenta específica para acompanhar padrões e regulamentos regulatórios, como a ISO 27001.",
            "Para acompanhar padrões e regulamentos regulatórios, normalmente seria necessário o uso de ferramentas específicas ou a designação de um Gerente de Compliance responsável por monitorar e garantir o cumprimento desses padrões."
        ],
        realWorld: [
            "O Microsoft Trust Center e o Service Trust Portal fornecem documentação de conformidade.",
            "O Compliance Manager ajuda a avaliar e gerenciar conformidade.",
            "Empresas designam responsáveis por compliance para monitorar requisitos regulatórios."
        ]
    },
    {
        id: 52,
        title: "Ferramentas para executar Azure CLI",
        domain: "Computação e Implantação",
        prompt: "Um engenheiro de suporte planeja executar várias tarefas de gerenciamento do Azure usando o CLI Azure. Você instala o CLI em um computador. Você precisa dizer ao engenheiro de suporte quais ferramentas usar para executar o CLI. Quais duas ferramentas você deve instruir o engenheiro de suporte a usar? NOTA: Cada resposta correta apresenta uma solução completa.",
        options: [
            { letter: "A", text: "Azure Resource Explorer", correct: false },
            { letter: "B", text: "Network and Sharing Center", correct: false },
            { letter: "C", text: "Windows PowerShell", correct: true },
            { letter: "D", text: "Windows Defender Firewall", correct: false },
            { letter: "E", text: "Command Prompt", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Azure Resource Explorer é uma ferramenta web para explorar recursos, não para executar Azure CLI." },
            { correct: false, text: "Incorreta. Network and Sharing Center é uma ferramenta do Windows para configuração de rede." },
            { correct: true, text: "Correta. O Azure CLI pode ser executado no Windows PowerShell, que é uma interface de linha de comando disponível no Windows." },
            { correct: false, text: "Incorreta. Windows Defender Firewall é um firewall, não uma ferramenta para executar Azure CLI." },
            { correct: true, text: "Correta. O Azure CLI pode ser executado no Command Prompt (prompt de comando) do Windows." }
        ],
        glossary: [
            "Azure CLI: interface de linha de comando para gerenciamento de recursos do Azure.",
            "Command Prompt: interpretador de comandos do Windows.",
            "Windows PowerShell: shell e linguagem de script da Microsoft.",
            "Azure Resource Explorer: ferramenta web para explorar a API do Azure Resource Manager."
        ],
        generalExplanation: [
            "As respostas \"Command Prompt\" e \"Windows PowerShell\" estão corretas.",
            "O Azure CLI pode ser executado em várias interfaces de linha de comando, incluindo o Command Prompt e o Windows PowerShell em um ambiente Windows.",
            "Portanto, instruir o engenheiro de suporte a usar o Command Prompt e o Windows PowerShell é apropriado para executar o Azure CLI no ambiente Windows."
        ],
        realWorld: [
            "Azure CLI é instalado como um executável e pode ser chamado de qualquer shell no Windows.",
            "PowerShell permite combinar comandos az com lógica de script.",
            "Command Prompt é útil para comandos simples e scripts .bat."
        ]
    },
    {
        id: 53,
        title: "Réplicas automáticas em conta de armazenamento",
        domain: "Armazenamento",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Os dados armazenados em uma conta de Armazenamento do Azure têm automaticamente pelo menos três cópias?",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Os dados armazenados em uma conta de Armazenamento do Azure são automaticamente replicados para fornecer alta disponibilidade e resiliência. O Azure armazena automaticamente pelo menos três cópias dos dados em datacenters separados para garantir a durabilidade dos dados e a recuperação de falhas." },
            { correct: false, text: "Incorreta. A afirmação é verdadeira: o Azure mantém pelo menos três cópias por padrão." }
        ],
        glossary: [
            "Replicação: duplicação de dados para garantir disponibilidade e durabilidade.",
            "LRS (Locally Redundant Storage): replicação dentro de um único datacenter, mantendo três cópias.",
            "GRS (Geo-Redundant Storage): replicação para uma região secundária, mantendo seis cópias no total.",
            "Durabilidade: capacidade de persistir dados ao longo do tempo."
        ],
        generalExplanation: [
            "A resposta \"Sim\" está correta.",
            "Os dados armazenados em uma conta de Armazenamento do Azure são automaticamente replicados para fornecer alta disponibilidade e resiliência.",
            "O Azure armazena automaticamente pelo menos três cópias dos dados em datacenters separados para garantir a durabilidade dos dados e a recuperação de falhas.",
            "Isso protege os dados contra falhas de hardware ou eventos imprevistos e garante que eles estejam disponíveis e seguros."
        ],
        realWorld: [
            "LRS mantém três cópias em um único datacenter.",
            "ZRS mantém três cópias em zonas de disponibilidade distintas.",
            "GRS mantém seis cópias em duas regiões, com replicação assíncrona."
        ]
    },
    {
        id: 54,
        title: "O que o Azure Information Protection criptografa",
        domain: "Identidade e Segurança",
        prompt: "O que o Azure Information Protection criptografa?",
        options: [
            { letter: "A", text: "documentos e mensagens de e-mail", correct: true },
            { letter: "B", text: "um banco de dados Azure SQL", correct: false },
            { letter: "C", text: "uma conta de armazenamento Azure", correct: false },
            { letter: "D", text: "tráfego de rede", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Azure Information Protection é uma solução de proteção de informações que ajuda a classificar, rotular e proteger documentos e mensagens de e-mail. Ele pode criptografar documentos e e-mails para proteger o conteúdo sensível, além de fornecer recursos de controle de acesso e rastreamento de informações." },
            { correct: false, text: "Incorreta. Bancos de dados Azure SQL usam TDE (Transparent Data Encryption), não AIP." },
            { correct: false, text: "Incorreta. Contas de armazenamento usam criptografia de serviço (SSE), não AIP." },
            { correct: false, text: "Incorreta. Tráfego de rede é protegido por TLS/IPsec, não por AIP." }
        ],
        glossary: [
            "Azure Information Protection (AIP): solução de classificação e proteção de documentos e e-mails.",
            "Rótulo de sensibilidade: classificação aplicada a documentos para determinar proteção.",
            "Criptografia: processo de codificar dados para proteger contra acesso não autorizado.",
            "TDE (Transparent Data Encryption): criptografia de bancos de dados SQL."
        ],
        generalExplanation: [
            "A resposta \"documentos e mensagens de e-mail\" está correta.",
            "O Azure Information Protection é uma solução de proteção de informações da Microsoft que ajuda a classificar, rotular e proteger documentos e mensagens de e-mail.",
            "Ele pode criptografar documentos e e-mails para proteger o conteúdo sensível, além de fornecer recursos de controle de acesso e rastreamento de informações.",
            "Portanto, o Azure Information Protection é usado para criptografar documentos e mensagens de e-mail, ajudando a garantir a segurança dos dados confidenciais."
        ],
        realWorld: [
            "AIP é usado para aplicar rótulos como 'Confidencial' a documentos do Office.",
            "Rótulos podem impor criptografia e restrições de compartilhamento.",
            "Integra-se com Microsoft Purview para governança de informações."
        ]
    },
    {
        id: 55,
        title: "Região dos recursos em grupo de recursos (repetida)",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a instrução for verdadeira. Caso contrário, selecione Não. Todos os recursos do Azure implantados em um grupo de recursos devem usar a mesma região do Azure?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Não é necessário que todos os recursos do Azure implantados em um grupo de recursos usem a mesma região. Um grupo de recursos é um contêiner lógico que ajuda a organizar recursos relacionados no Azure, mas os recursos dentro de um grupo de recursos podem estar em regiões diferentes, dependendo dos requisitos do aplicativo ou serviço." },
            { correct: false, text: "Incorreta. A afirmação é falsa: recursos em um grupo de recursos podem estar em regiões distintas." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico para organizar e gerenciar recursos relacionados no Azure.",
            "Região do Azure: área geográfica com datacenters conectados por rede de baixa latência.",
            "Localização do grupo de recursos: metadados do grupo, mas os recursos podem estar em outras regiões."
        ],
        generalExplanation: [
            "A resposta \"Não\" está correta.",
            "Não é necessário que todos os recursos do Azure implantados em um grupo de recursos usem a mesma região do Azure.",
            "Um grupo de recursos é um contêiner lógico que ajuda a organizar recursos relacionados no Azure, mas os recursos dentro de um grupo de recursos podem estar em regiões diferentes, dependendo dos requisitos do aplicativo ou serviço.",
            "Isso pode ser útil, por exemplo, quando se deseja criar recursos em regiões geograficamente distribuídas para fins de redundância ou escalabilidade."
        ],
        realWorld: [
            "Um grupo de recursos pode conter recursos em múltiplas regiões para atender requisitos de latência e resiliência.",
            "O grupo de recursos armazena metadados, mas não restringe a região dos recursos.",
            "Isso permite arquiteturas distribuídas com governança centralizada."
        ]
    },
    {
        id: 56,
        title: "az vm create via Cloud Shell Bash",
        domain: "Computação e Implantação",
        prompt: "Você tem uma assinatura do Azure chamada Subscription1. Você entra no portal do Azure e cria um grupo de recursos chamado RG1. A partir da documentação do Azure, você tem o seguinte comando que cria uma máquina virtual chamada VM1. az vm create --resource-group RG1 --name VM1 --image UbuntuLTS --generate-ssh-keys. Você precisa criar VM1 na Subscription1 usando o comando. Solução: A partir do portal Azure, inicie o Azure Cloud Shell e selecione Bash. Execute o comando em Cloud Shell. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O comando az vm create é um comando Azure CLI, que pode ser executado no Cloud Shell com Bash." },
            { correct: true, text: "Correta. Pode-se usar o Azure Cloud Shell, iniciado diretamente do portal Azure, e selecionar o ambiente Bash para executar o comando fornecido e criar a máquina virtual VM1 na Subscription1. O Azure Cloud Shell fornece um ambiente de linha de comando baseado na web que é ideal para executar comandos e tarefas no Azure." }
        ],
        glossary: [
            "Azure Cloud Shell: shell baseado em navegador com ferramentas pré-instaladas, incluindo Azure CLI e PowerShell.",
            "Bash: shell Unix disponível no Cloud Shell.",
            "az vm create: comando Azure CLI para criar máquinas virtuais."
        ],
        generalExplanation: [
            "A resposta \"Sim\" está correta.",
            "Pode-se usar o Azure Cloud Shell, que pode ser iniciado diretamente do portal Azure, e selecionar o ambiente Bash para executar o comando fornecido e criar a máquina virtual VM1 na Subscription1.",
            "O Azure Cloud Shell fornece um ambiente de linha de comando baseado na web que é ideal para executar comandos e tarefas no Azure, incluindo a criação de recursos como máquinas virtuais.",
            "Portanto, a solução proposta de usar o Azure Cloud Shell para executar o comando atende ao objetivo de criar a VM1 na Subscription1."
        ],
        realWorld: [
            "Cloud Shell é acessível de qualquer navegador, sem necessidade de instalação local.",
            "Inclui autenticação automática com a conta do Azure.",
            "É útil para comandos rápidos e scripts de provisionamento."
        ]
    },
    {
        id: 57,
        title: "Avaliar conformidade regulatória no Azure",
        domain: "Governança e Conformidade",
        prompt: "O que você deve usar para avaliar se o ambiente Azure da sua empresa atende aos requisitos regulatórios?",
        options: [
            { letter: "A", text: "no Gerente de Conformidade do Portal de Confiança de Serviços", correct: true },
            { letter: "B", text: "o site do Centro de Conhecimento", correct: false },
            { letter: "C", text: "na Aba Advisor no portal do Azure", correct: false },
            { letter: "D", text: "na Aba Soluções do portal Azure", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Gerente de Conformidade do Azure, no Portal de Confiança de Serviços, é a ferramenta apropriada para avaliar se o ambiente Azure da sua empresa atende aos requisitos regulatórios. Este portal fornece uma visão consolidada do status de conformidade em relação a diferentes padrões e regulamentações, permitindo avaliar e gerenciar o cumprimento dos requisitos específicos do setor." },
            { correct: false, text: "Incorreta. O Centro de Conhecimento é uma base de documentação, não uma ferramenta de avaliação de conformidade." },
            { correct: false, text: "Incorreta. O Advisor fornece recomendações, mas não avalia conformidade regulatória de forma consolidada." },
            { correct: false, text: "Incorreta. A aba Soluções do portal Azure não é focada em avaliação de conformidade regulatória." }
        ],
        glossary: [
            "Gerente de Conformidade: ferramenta do Microsoft Purview que avalia e gerencia conformidade regulatória.",
            "Portal de Confiança de Serviços: portal da Microsoft com documentação de conformidade e auditoria.",
            "Compliance: conformidade com leis, regulamentos e padrões.",
            "ISO 27001: norma internacional de segurança da informação."
        ],
        generalExplanation: [
            "Resposta correta: \"no Gerente de Conformidade do Portal de Confiança de Serviços.\"",
            "O Gerente de Conformidade do Azure, no Portal de Confiança de Serviços, é a ferramenta apropriada para avaliar se o ambiente Azure da sua empresa atende aos requisitos regulatórios.",
            "Este portal fornece uma visão consolidada do status de conformidade em relação a diferentes padrões e regulamentações, permitindo que você avalie e gerencie o cumprimento dos requisitos específicos do setor.",
            "Portanto, essa escolha está correta para realizar essa avaliação no contexto de conformidade no Azure."
        ],
        realWorld: [
            "Compliance Manager avalia pontuações de conformidade com base em controles implementados.",
            "Fornece ações recomendadas para melhorar a conformidade.",
            "É usado por equipes de governança, risco e compliance (GRC)."
        ]
    },
    {
        id: 58,
        title: "SLA composto no Azure",
        domain: "Governança e Conformidade",
        prompt: "Esta pergunta requer que você avalie o texto destacado para determinar se ele está correto. Você tem um aplicativo composto por um aplicativo web do Azure que tem um Contrato de Nível de Serviço (SLA) de 99,95% e um banco de dados Azure SQL que tem um SLA de 99,99%. O SLA composto para a aplicação é o produto de ambos os SLAs, o que equivale a 99,94%. Instruções: Reveja o texto destacado. Se ele fizer a declaração correta, selecione \"Nenhuma alteração é necessária\". Se a instrução estiver incorreta, selecione a escolha de resposta que faz a declaração correta.",
        options: [
            { letter: "A", text: "o SLA mais alto associado ao aplicativo, que é de 99,99%", correct: false },
            { letter: "B", text: "a diferença entre os dois SLAs, que é de 0,05 por cento", correct: false },
            { letter: "C", text: "o menor SLA associado à aplicação, que é de 99,95%", correct: false },
            { letter: "D", text: "nenhuma mudança é necessária", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O SLA composto não é o maior SLA, mas o produto dos SLAs dos componentes." },
            { correct: false, text: "Incorreta. O SLA composto não é a diferença entre os SLAs." },
            { correct: false, text: "Incorreta. O SLA composto não é o menor SLA, mas o produto dos SLAs." },
            { correct: true, text: "Correta. A afirmação no texto destacado está correta. O SLA composto para a aplicação é calculado como o produto dos SLAs individuais, o que resultaria em 99,94%, conforme declarado no texto. Portanto, não é necessária nenhuma mudança no texto." }
        ],
        glossary: [
            "SLA (Contrato de Nível de Serviço): compromisso formal de disponibilidade e desempenho.",
            "SLA composto: cálculo do SLA de um sistema combinando os SLAs de seus componentes, geralmente pelo produto das disponibilidades.",
            "Disponibilidade: percentual de tempo em que um serviço está operacional."
        ],
        generalExplanation: [
            "A resposta \"Nenhuma mudança é necessária\" está correta.",
            "A afirmação no texto destacado está correta.",
            "O SLA composto para a aplicação é calculado como o produto dos SLAs individuais, o que resultaria em 99,94%, conforme declarado no texto.",
            "Portanto, não é necessária nenhuma mudança no texto."
        ],
        realWorld: [
            "O SLA composto é sempre menor que o menor SLA dos componentes.",
            "Isso reflete a maior probabilidade de falha em sistemas com múltiplos componentes.",
            "Arquitetos usam esse cálculo para projetar sistemas que atendam aos requisitos de disponibilidade."
        ]
    },
    {
        id: 59,
        title: "Computação sem servidor para notificações por e-mail",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Você tem um aplicativo local que envia notificações de e-mail automaticamente com base em uma regra. Você planeja migrar o aplicativo para o Azure. Você precisa recomendar uma solução de computação sem servidor para o aplicativo. O que você deve incluir na recomendação?",
        options: [
            { letter: "A", text: "um aplicativo web", correct: false },
            { letter: "B", text: "um aplicativo de lógica", correct: true },
            { letter: "C", text: "uma imagem de servidor no Azure Marketplace", correct: false },
            { letter: "D", text: "um aplicativo API", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Aplicativos web no Azure App Service são PaaS, mas não são a melhor escolha para automação de fluxos baseados em regras." },
            { correct: true, text: "Correta. O Azure Logic Apps é uma plataforma de automação de processos que permite criar fluxos de trabalho sem servidor para automatizar tarefas e integrações, como o envio de notificações de e-mail com base em regras. Ele fornece uma maneira eficaz de orquestrar e automatizar ações em resposta a eventos." },
            { correct: false, text: "Incorreta. Imagens de servidor no Marketplace são para VMs, não para computação sem servidor." },
            { correct: false, text: "Incorreta. Aplicativos API são para expor APIs, não para automação de fluxos baseados em regras." }
        ],
        glossary: [
            "Azure Logic Apps: plataforma de automação de fluxos de trabalho sem servidor, com conectores para diversos serviços.",
            "Computação sem servidor: modelo em que o provedor gerencia a infraestrutura, e o cliente paga apenas pelo uso.",
            "Fluxo de trabalho: sequência de ações automatizadas acionadas por eventos ou condições."
        ],
        generalExplanation: [
            "A resposta \"um aplicativo de lógica\" está correta.",
            "Quando se planeja migrar um aplicativo local que envia notificações de e-mail automaticamente com base em uma regra para o Azure e deseja-se adotar uma abordagem sem servidor, uma boa escolha pode ser o uso de Azure Logic Apps.",
            "O Azure Logic Apps é uma plataforma de automação de processos que permite criar fluxos de trabalho sem servidor para automatizar tarefas e integrações, como o envio de notificações de e-mail com base em regras.",
            "Ele fornece uma maneira eficaz de orquestrar e automatizar ações em resposta a eventos, como a detecção de condições ou gatilhos específicos."
        ],
        realWorld: [
            "Logic Apps é usado para automatizar envio de e-mails, aprovações e integrações entre sistemas.",
            "Possui conectores para Outlook, Office 365, SendGrid e outros serviços de e-mail.",
            "É ideal para fluxos baseados em regras sem necessidade de código."
        ]
    },
    {
        id: 60,
        title: "PaaS para minimizar esforço administrativo",
        domain: "Arquitetura e Serviços do Azure",
        prompt: "Você planeja migrar um aplicativo web para o Azure. O aplicativo web é acessado por usuários externos. Você precisa recomendar uma solução de implantação em nuvem para minimizar a quantidade de esforço administrativo usado para gerenciar o aplicativo web. O que você deve incluir na recomendação?",
        options: [
            { letter: "A", text: "Database as a Service (DaaS)", correct: false },
            { letter: "B", text: "Infrastructure as a Service (IaaS)", correct: false },
            { letter: "C", text: "Platform as a Service (PaaS)", correct: true },
            { letter: "D", text: "Software as a Service (SaaS)", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. DaaS é para bancos de dados, não para hospedagem de aplicações web." },
            { correct: false, text: "Incorreta. IaaS exige gerenciamento de servidores, sistemas operacionais e middleware, aumentando o esforço administrativo." },
            { correct: true, text: "Correta. Ao migrar um aplicativo web para o Azure e visando minimizar o esforço administrativo, a escolha de uma solução de Plataforma como Serviço (PaaS) é apropriada. Em um ambiente PaaS, como o Azure App Service, a infraestrutura subjacente, como servidores e sistema operacional, é gerenciada pelo provedor de nuvem, permitindo que os desenvolvedores foquem mais na aplicação em si." },
            { correct: false, text: "Incorreta. SaaS é software pronto para uso, não uma plataforma para hospedar aplicações personalizadas." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo em que o provedor gerencia infraestrutura e plataforma, permitindo foco na aplicação.",
            "IaaS (Infrastructure as a Service): modelo em que o cliente gerencia servidores, SO e middleware.",
            "SaaS (Software as a Service): software pronto para uso, gerenciado pelo provedor.",
            "DaaS (Database as a Service): banco de dados gerenciado como serviço."
        ],
        generalExplanation: [
            "A resposta \"Platform as a Service (PaaS)\" está correta.",
            "Ao migrar um aplicativo web para o Azure e visando minimizar o esforço administrativo, a escolha de uma solução de Plataforma como Serviço (PaaS) é apropriada.",
            "Em um ambiente PaaS, como o Azure App Service, a infraestrutura subjacente, como servidores e sistema operacional, é gerenciada pelo provedor de nuvem, permitindo que os desenvolvedores foquem mais na aplicação em si, em vez de gerenciar detalhes de infraestrutura.",
            "Portanto, a recomendação de utilizar Platform as a Service (PaaS) é uma escolha eficaz para reduzir a carga administrativa ao migrar um aplicativo web para o Azure."
        ],
        realWorld: [
            "App Service permite implantar aplicações web sem gerenciar servidores.",
            "Escalabilidade, patches e balanceamento são gerenciados pela plataforma.",
            "Isso reduz custos operacionais e permite que equipes foquem no desenvolvimento."
        ]
    },
    {
        id: 61,
        title: "Controlar portas de acesso às VMs",
        domain: "Redes e Entrega de Conteúdo",
        prompt: "Você planeja implantar várias máquinas virtuais do Azure. Você precisa controlar as portas que os dispositivos na Internet podem usar para acessar as máquinas virtuais. O que você deve usar?",
        options: [
            { letter: "A", text: "a função do Azure Active Directory (Azure AD)", correct: false },
            { letter: "B", text: "um cofre chave Azure", correct: false },
            { letter: "C", text: "um grupo do Azure Active Directory", correct: false },
            { letter: "D", text: "um grupo de Segurança de Rede (NSG)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Funções do Azure AD controlam acesso de identidade, não portas de rede." },
            { correct: false, text: "Incorreta. Key Vault armazena segredos, não controla tráfego de rede." },
            { correct: false, text: "Incorreta. Grupos do Azure AD organizam usuários, não controlam portas." },
            { correct: true, text: "Correta. Os Grupos de Segurança de Rede (NSGs) no Azure permitem controlar o tráfego de rede que pode ou não alcançar as máquinas virtuais. Com um NSG, pode-se definir regras de segurança de rede para permitir ou negar tráfego em portas específicas, bem como especificar a origem e o destino do tráfego." }
        ],
        glossary: [
            "NSG (Network Security Group): grupo de segurança que filtra tráfego de rede em sub-redes e NICs.",
            "Regra de segurança: regra que permite ou nega tráfego com base em origem, destino, porta e protocolo.",
            "Porta: número que identifica um serviço de rede (ex.: 80 para HTTP, 443 para HTTPS)."
        ],
        generalExplanation: [
            "A resposta \"um grupo de Segurança de Rede (NSG)\" está correta.",
            "Os Grupos de Segurança de Rede (NSGs) no Azure permitem que você controle o tráfego de rede que pode ou não pode alcançar as máquinas virtuais.",
            "Com um NSG, pode-se definir regras de segurança de rede para permitir ou negar tráfego em portas específicas, bem como para especificar a origem e o destino do tráfego.",
            "Ao configurar um NSG adequadamente, pode-se controlar quais portas os dispositivos da Internet podem usar para acessar as máquinas virtuais no Azure, ajudando a reforçar a segurança da infraestrutura na nuvem."
        ],
        realWorld: [
            "NSGs são usados para permitir apenas portas específicas (ex.: 80, 443) e bloquear o restante.",
            "Boas práticas recomendam restringir origens a intervalos IP conhecidos.",
            "NSGs podem ser aplicados em sub-redes e NICs, oferecendo defesa em profundidade."
        ]
    },
    {
        id: 62,
        title: "Criar VM via Bash no Cloud Shell",
        domain: "Computação e Implantação",
        prompt: "Você tem um ambiente Azure. Você precisa criar uma nova máquina virtual do Azure a partir de um tablet que executa o sistema operacional Android. Solução: Você usa o Bash no Azure Cloud Shell. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Bash no Cloud Shell é acessível via navegador e permite criar VMs." },
            { correct: true, text: "Correta. Pode-se usar o Azure Cloud Shell e executar comandos Bash para criar uma nova máquina virtual no Azure, mesmo a partir de um tablet que executa o sistema operacional Android. O Azure Cloud Shell é uma interface de linha de comando baseada na web que pode ser acessada a partir de um navegador, incluindo em dispositivos móveis." }
        ],
        glossary: [
            "Azure Cloud Shell: shell baseado em navegador com ferramentas pré-instaladas, incluindo Azure CLI e Bash.",
            "Bash: shell Unix disponível no Cloud Shell.",
            "Tablet Android: dispositivo móvel com sistema operacional Android e navegador web."
        ],
        generalExplanation: [
            "A resposta \"Sim\" está correta.",
            "Pode-se usar o Azure Cloud Shell e executar comandos Bash para criar uma nova máquina virtual no Azure, mesmo a partir de um tablet que executa o sistema operacional Android.",
            "O Azure Cloud Shell é uma interface de linha de comando baseada na web que pode ser acessada a partir de um navegador, incluindo em dispositivos móveis.",
            "Com o Bash no Azure Cloud Shell, pode-se gerenciar recursos do Azure, criar máquinas virtuais e executar tarefas de gerenciamento no ambiente Azure de forma eficaz, independentemente do dispositivo que está usando."
        ],
        realWorld: [
            "Cloud Shell é acessível de qualquer dispositivo com navegador, incluindo tablets e smartphones.",
            "Inclui autenticação automática com a conta do Azure.",
            "É útil para comandos rápidos e scripts de provisionamento em qualquer lugar."
        ]
    }
]