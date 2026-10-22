const originalQuestions = [
    {
        id: 1,
        title: "Conectividade com a Internet para computação em nuvem",
        domain: "Conceitos de Nuvem",
        prompt: "Você deve ter conectividade com a Internet para usar a computação em nuvem. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A conectividade com a Internet é fundamental para acessar e utilizar os serviços de computação em nuvem, pois os recursos são disponibilizados através da rede." },
            { correct: true, text: "Correta. A afirmação está correta. A conectividade com a internet é fundamental para acessar e utilizar os serviços de computação em nuvem, já que os recursos são disponibilizados através da rede. Além disso, muitas vezes é necessário também ter uma conexão de alta velocidade e qualidade para garantir o desempenho adequado das aplicações na nuvem." }
        ],
        glossary: [
            "Computação em nuvem: modelo de fornecimento de recursos de TI (servidores, armazenamento, redes, software) pela Internet, com pagamento conforme o uso.",
            "Conectividade com a Internet: capacidade de se conectar à rede mundial de computadores, essencial para acessar serviços em nuvem.",
            "Recursos em nuvem: servidores virtuais, armazenamento, bancos de dados e outros serviços disponibilizados por provedores de nuvem.",
            "Latência: tempo de resposta de uma requisição entre o cliente e o servidor, influenciado pela qualidade da conexão."
        ],
        generalExplanation: [
            "A afirmação é <strong>verdadeira</strong>: sem conectividade com a Internet, não é possível acessar os serviços de computação em nuvem, pois os recursos estão disponíveis remotamente através da rede.",
            "A qualidade da conexão (largura de banda e latência) impacta diretamente o desempenho das aplicações em nuvem.",
            "Mesmo em modelos híbridos ou privados, a conectividade de rede é necessária para acessar os recursos provisionados."
        ],
        realWorld: [
            "Empresas que migram para a nuvem precisam garantir <strong>links de Internet redundantes e de alta velocidade</strong> para manter a continuidade dos serviços.",
            "Aplicações críticas podem exigir conexões dedicadas (como <strong>Azure ExpressRoute</strong>) para garantir desempenho e segurança.",
            "Falhas de conectividade podem causar indisponibilidade de serviços, reforçando a importância de planos de contingência de rede."
        ]
    },
    {
        id: 2,
        title: "Nuvem híbrida para estender recursos internos",
        domain: "Conceitos de Nuvem",
        prompt: "Uma empresa pode estender os recursos de computação de sua rede interna usando uma nuvem híbrida. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação está correta: a nuvem híbrida permite exatamente essa extensão dos recursos internos para a nuvem." },
            { correct: true, text: "Correta. Uma empresa pode estender os recursos de computação de sua rede interna usando a nuvem pública. Isso é muito comum. Quando precisar de mais recursos, em vez de pagar por uma nova infraestrutura local, você pode configurar um ambiente de nuvem e conectar sua rede local ao ambiente de nuvem usando uma VPN." }
        ],
        glossary: [
            "Nuvem híbrida: modelo que combina nuvem privada (on-premises) e nuvem pública, permitindo compartilhamento de dados e aplicações entre elas.",
            "VPN (Virtual Private Network): conexão segura e criptografada entre redes, usada para conectar ambientes locais à nuvem.",
            "Nuvem pública: infraestrutura de nuvem compartilhada, gerenciada por provedores como Microsoft Azure, AWS ou Google Cloud.",
            "Nuvem privada: infraestrutura de nuvem dedicada a uma única organização, geralmente local (on-premises)."
        ],
        generalExplanation: [
            "A <strong>nuvem híbrida</strong> permite que empresas <strong>estendam sua infraestrutura local</strong> para a nuvem pública, obtendo escalabilidade sem abandonar investimentos existentes.",
            "A conexão entre ambientes é feita por <strong>VPN</strong> ou links dedicados, garantindo integração segura.",
            "Essa abordagem é ideal para empresas que precisam de <strong>flexibilidade</strong> e não podem migrar todos os recursos de uma vez."
        ],
        realWorld: [
            "Empresas com data centers locais podem usar nuvem híbrida para <strong>lidar com picos de demanda</strong> sem comprar hardware adicional.",
            "Aplicações sensíveis podem permanecer on-premises, enquanto cargas menos críticas são executadas na nuvem pública.",
            "A integração via <strong>VPN site-to-site</strong> ou <strong>ExpressRoute</strong> garante conectividade segura e confiável entre os ambientes."
        ]
    },
    {
        id: 3,
        title: "Atualizações de software em SaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Com software como serviço (SaaS), você deve aplicar atualizações de software. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Com Software como Serviço (SaaS), a atualização do software é gerenciada pelo provedor do serviço na nuvem e não requer que o usuário final aplique as atualizações. O provedor do serviço é responsável por garantir que a versão mais atual do software esteja sempre disponível para os usuários do SaaS." },
            { correct: false, text: "Incorreta. Com SaaS, o usuário não é responsável por aplicar atualizações; essa responsabilidade é do provedor do serviço." }
        ],
        glossary: [
            "SaaS (Software as a Service): modelo em que o software é fornecido como serviço pela Internet, gerenciado pelo provedor.",
            "Provedor de serviço: empresa responsável por hospedar, manter e atualizar o software SaaS.",
            "Atualização de software: processo de aplicar correções, melhorias e novas versões ao software.",
            "Usuário final: pessoa que utiliza o software, sem responsabilidade sobre sua manutenção."
        ],
        generalExplanation: [
            "No modelo <strong>SaaS</strong>, o provedor é responsável por <strong>toda a gestão do software</strong>, incluindo atualizações, patches de segurança e manutenção.",
            "O usuário apenas <strong>consome o serviço</strong>, sem se preocupar com infraestrutura ou atualizações.",
            "Isso reduz a carga operacional do cliente e garante que todos os usuários tenham acesso à versão mais recente."
        ],
        realWorld: [
            "Serviços como <strong>Microsoft 365, Salesforce e Google Workspace</strong> são exemplos de SaaS, onde as atualizações são aplicadas automaticamente pelo provedor.",
            "Empresas que utilizam SaaS não precisam de equipes dedicadas para atualizar o software, reduzindo custos operacionais.",
            "A responsabilidade do cliente limita-se à <strong>gestão de usuários e dados</strong> dentro da aplicação."
        ]
    },
    {
        id: 4,
        title: "Serviço de nuvem que responde rapidamente ao aumento de demanda",
        domain: "Conceitos de Nuvem",
        prompt: "Um serviço de nuvem que funciona rapidamente quando a demanda aumenta. Escolha a opção correta.",
        options: [
            { letter: "A", text: "Tolerância ao erro.", correct: false },
            { letter: "B", text: "Escalabilidade dinâmica.", correct: true },
            { letter: "C", text: "Baixa latência.", correct: false },
            { letter: "D", text: "Recuperação de desastres.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Tolerância ao erro é a capacidade de um sistema continuar operando mesmo com falhas em componentes." },
            { correct: true, text: "Correta. A escalabilidade dinâmica é a capacidade de adicionar recursos de computação a um serviço quando o serviço está sob carga pesada. Por exemplo, em um conjunto de dimensionamento de máquinas virtuais, instâncias adicionais da máquina virtual são adicionadas quando as máquinas virtuais existentes estão sob carga pesada." },
            { correct: false, text: "Incorreta. Baixa latência refere-se ao tempo de resposta rápido, não à capacidade de escalar com o aumento da demanda." },
            { correct: false, text: "Incorreta. Recuperação de desastres é a capacidade de restaurar serviços após falhas graves." }
        ],
        glossary: [
            "Escalabilidade dinâmica: capacidade de ajustar automaticamente recursos computacionais conforme a demanda.",
            "Tolerância ao erro: capacidade de um sistema continuar funcionando mesmo com falhas parciais.",
            "Baixa latência: tempo de resposta rápido entre requisição e resposta.",
            "Recuperação de desastres: conjunto de processos para restaurar operações após falhas catastróficas."
        ],
        generalExplanation: [
            "A <strong>escalabilidade dinâmica</strong> permite que o serviço <strong>cresça automaticamente</strong> quando a demanda aumenta, mantendo o desempenho.",
            "Outros conceitos tratam de <strong>resiliência</strong> (tolerância a erro), <strong>desempenho</strong> (baixa latência) ou <strong>continuidade</strong> (recuperação de desastres), mas não da capacidade de resposta ao aumento de carga.",
            "É uma característica fundamental da computação em nuvem, permitindo <strong>eficiência e economia</strong>."
        ],
        realWorld: [
            "E-commerce durante Black Friday pode usar <strong>auto-scaling</strong> para adicionar instâncias automaticamente conforme o tráfego aumenta.",
            "Aplicativos serverless escalam automaticamente por design, sem intervenção manual.",
            "Essa capacidade evita sobrecarga e garante experiência consistente ao usuário, mesmo em picos de demanda."
        ]
    },
    {
        id: 5,
        title: "Recursos na nuvem pública para nuvem híbrida",
        domain: "Conceitos de Nuvem",
        prompt: "Para construir uma nuvem híbrida, você deve implantar recursos na nuvem pública. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação está correta: uma nuvem híbrida exige recursos tanto na nuvem privada quanto na pública." },
            { correct: true, text: "Correta. Uma nuvem híbrida é uma combinação de uma nuvem privada e uma nuvem pública. Portanto, para criar uma nuvem híbrida, você deve implantar recursos em uma nuvem pública." }
        ],
        glossary: [
            "Nuvem híbrida: modelo que combina nuvem privada e pública, permitindo compartilhamento de dados e aplicações.",
            "Nuvem pública: infraestrutura compartilhada gerenciada por provedor, acessível via Internet.",
            "Nuvem privada: infraestrutura dedicada a uma organização, geralmente on-premises."
        ],
        generalExplanation: [
            "A <strong>nuvem híbrida</strong> por definição requer a <strong>combinação de ambientes privados e públicos</strong>.",
            "Recursos na nuvem pública são essenciais para <strong>escalabilidade e flexibilidade</strong>.",
            "A integração entre os ambientes permite que aplicações se beneficiem do melhor de cada modelo."
        ],
        realWorld: [
            "Empresas podem manter dados sensíveis on-premises e usar a nuvem pública para processamento e análise.",
            "Aplicações podem ser distribuídas entre ambientes para otimizar custos e desempenho.",
            "A conectividade segura entre os ambientes é garantida por VPNs ou links dedicados."
        ]
    },
    {
        id: 6,
        title: "Serviço de nuvem recuperável após falha",
        domain: "Conceitos de Nuvem",
        prompt: "Um serviço de nuvem que pode ser recuperado após a ocorrência de uma falha. Escolha a opção correta.",
        options: [
            { letter: "A", text: "Tolerância ao erro.", correct: false },
            { letter: "B", text: "Recuperação de desastres.", correct: true },
            { letter: "C", text: "Baixa latência.", correct: false },
            { letter: "D", text: "Escalabilidade dinâmica.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Tolerância ao erro permite que o sistema continue operando durante falhas, mas não se refere à recuperação após falha." },
            { correct: true, text: "Correta. A recuperação de desastres é a recuperação de um serviço após uma falha. Por exemplo, restaurar uma máquina virtual do backup após uma falha na máquina virtual." },
            { correct: false, text: "Incorreta. Baixa latência refere-se ao tempo de resposta, não à recuperação de falhas." },
            { correct: false, text: "Incorreta. Escalabilidade dinâmica é a capacidade de ajustar recursos conforme a demanda." }
        ],
        glossary: [
            "Recuperação de desastres: processo de restaurar serviços e dados após falhas graves.",
            "Tolerância ao erro: capacidade de continuar operando durante falhas parciais.",
            "Backup: cópia de dados armazenada separadamente para restauração em caso de perda.",
            "Baixa latência: tempo de resposta rápido."
        ],
        generalExplanation: [
            "A <strong>recuperação de desastres</strong> foca em <strong>restaurar operações após falhas</strong>, usando backups, replicação e planos de continuidade.",
            "É diferente de <strong>tolerância ao erro</strong>, que busca manter o serviço funcionando durante falhas.",
            "Ambos são pilares da <strong>resiliência</strong> em nuvem."
        ],
        realWorld: [
            "Empresas usam <strong>Azure Site Recovery</strong> para replicar VMs e restaurá-las em caso de falha.",
            "Backups automatizados garantem recuperação rápida de dados críticos.",
            "Planos de recuperação de desastres são testados regularmente para garantir eficácia."
        ]
    },
    {
        id: 7,
        title: "Implantação de aplicativos e dados em várias regiões",
        domain: "Conceitos de Nuvem",
        prompt: "Aplicativos e dados podem ser implantados em várias regiões. Associe a afirmação com a alternativa correta.",
        options: [
            { letter: "A", text: "Escalabilidade.", correct: false },
            { letter: "B", text: "Agilidade.", correct: false },
            { letter: "C", text: "Distribuição geográfica.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Escalabilidade refere-se à capacidade de ajustar recursos conforme a demanda, não à distribuição geográfica." },
            { correct: false, text: "Incorreta. Agilidade é a capacidade de desenvolver e implantar rapidamente, não se refere à distribuição geográfica." },
            { correct: true, text: "Correta. A distribuição geográfica, no contexto da computação em nuvem, refere-se à capacidade de implantar aplicativos e armazenar dados em várias regiões geográficas. Isso permite que os usuários acessem serviços com menor latência e maior disponibilidade, além de atender a requisitos regulatórios e de conformidade de dados em diferentes regiões." }
        ],
        glossary: [
            "Distribuição geográfica: capacidade de implantar recursos em múltiplas regiões geográficas.",
            "Região: área geográfica da nuvem com data centers interconectados.",
            "Latência: tempo de resposta entre cliente e servidor.",
            "Conformidade regulatória: requisitos legais sobre armazenamento e processamento de dados em determinadas regiões."
        ],
        generalExplanation: [
            "A <strong>distribuição geográfica</strong> permite que aplicações sejam implantadas em <strong>múltiplas regiões</strong>, melhorando latência, disponibilidade e conformidade.",
            "É uma característica essencial para aplicações globais.",
            "Reduz riscos de indisponibilidade regional e melhora a experiência do usuário."
        ],
        realWorld: [
            "Empresas globais implantam aplicações em regiões próximas aos usuários para reduzir latência.",
            "Dados podem ser armazenados em regiões específicas para atender leis de privacidade (como LGPD e GDPR).",
            "Serviços como <strong>Azure Traffic Manager</strong> distribuem tráfego entre regiões."
        ]
    },
    {
        id: 8,
        title: "Construção de data center como OpEx",
        domain: "Conceitos de Nuvem",
        prompt: "A construção de uma infraestrutura de data center é um exemplo de custos de despesas operacionais (OpEx). Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Construir uma infraestrutura de data center é um gasto de capital, não um gasto operacional." },
            { correct: false, text: "Incorreta. A construção de data center é CapEx (despesa de capital), não OpEx (despesa operacional)." }
        ],
        glossary: [
            "CapEx (Capital Expenditure): investimento em ativos de longo prazo, como infraestrutura física.",
            "OpEx (Operational Expenditure): gastos contínuos com operação e manutenção.",
            "Data center: instalação física que abriga servidores e infraestrutura de TI."
        ],
        generalExplanation: [
            "A <strong>construção de data center</strong> é um investimento inicial significativo, classificado como <strong>CapEx</strong>.",
            "Gastos com eletricidade, manutenção e equipe são <strong>OpEx</strong>.",
            "A nuvem converte CapEx em OpEx, pois elimina a necessidade de investimentos em infraestrutura física."
        ],
        realWorld: [
            "Empresas que constroem data centers precisam de grandes investimentos iniciais em hardware, refrigeração e espaço físico.",
            "Na nuvem, esses custos são convertidos em pagamentos mensais pelo uso dos serviços.",
            "Isso melhora o fluxo de caixa e permite maior flexibilidade financeira."
        ]
    },
    {
        id: 9,
        title: "Escalonamento automático em PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Uma solução de plataforma como serviço (PaaS) pode escalar automaticamente o número de instâncias. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação está correta: soluções PaaS geralmente oferecem escalonamento automático." },
            { correct: true, text: "Correta. Uma solução de PaaS geralmente inclui a capacidade de escalar automaticamente o número de instâncias de um aplicativo, conforme necessário, para atender à demanda do usuário. Isso permite que a solução forneça recursos adicionais aos usuários sem exigir a intervenção manual do administrador do sistema." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação de aplicações.",
            "Escalonamento automático: ajuste automático de recursos conforme a demanda.",
            "Instância: unidade de computação que executa a aplicação."
        ],
        generalExplanation: [
            "O <strong>PaaS</strong> abstrai a infraestrutura e oferece <strong>escalonamento automático</strong> nativo.",
            "Isso permite que desenvolvedores foquem no código, enquanto a plataforma gerencia a capacidade.",
            "É uma das principais vantagens do modelo PaaS sobre IaaS."
        ],
        realWorld: [
            "O <strong>Azure App Service</strong> permite configurar auto-scaling baseado em métricas como CPU ou número de requisições.",
            "Aplicações web podem escalar automaticamente durante picos de tráfego.",
            "Reduz a necessidade de intervenção manual e melhora a experiência do usuário."
        ]
    },
    {
        id: 10,
        title: "Controle do sistema operacional em PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure fornece controle total dos sistemas operacionais que hospedam aplicativos. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Uma solução PaaS não fornece acesso ao sistema operacional. O serviço Azure Web Apps fornece um ambiente para você hospedar seus aplicativos web." },
            { correct: false, text: "Incorreta. Em PaaS, o sistema operacional é gerenciado pelo provedor, não pelo cliente." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo em que o provedor gerencia a plataforma subjacente, incluindo sistema operacional.",
            "Azure Web Apps: serviço PaaS da Microsoft para hospedar aplicações web.",
            "Sistema operacional: software base que gerencia hardware e recursos do sistema."
        ],
        generalExplanation: [
            "No <strong>PaaS</strong>, o cliente <strong>não tem controle</strong> sobre o sistema operacional.",
            "O provedor é responsável por patches, atualizações e segurança da plataforma.",
            "O cliente foca apenas no desenvolvimento e configuração da aplicação."
        ],
        realWorld: [
            "No <strong>Azure App Service</strong>, os desenvolvedores não acessam o SO diretamente; a Microsoft gerencia toda a infraestrutura.",
            "Isso simplifica operações, mas limita customizações no nível do sistema operacional.",
            "Para maior controle, é necessário usar IaaS (máquinas virtuais)."
        ]
    },
    {
        id: 11,
        title: "Máquinas virtuais locais e no Azure interconectadas",
        domain: "Conceitos de Nuvem",
        prompt: "Você tem 50 máquinas virtuais hospedadas no local e 50 máquinas virtuais hospedadas no Azure. As máquinas virtuais locais e o Azure máquinas virtuais se conectam umas às outras. Que tipo de modelo de nuvem é esse?",
        options: [
            { letter: "A", text: "Híbrido.", correct: true },
            { letter: "B", text: "Privado.", correct: false },
            { letter: "C", text: "Público.", correct: false },
            { letter: "D", text: "On-premises (No local).", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Esse é um exemplo de um ambiente de nuvem híbrida, onde a infraestrutura de TI da organização é distribuída em duas ou mais nuvens diferentes. No caso descrito, a organização possui máquinas virtuais hospedadas em um ambiente local (on-premises) e também no Azure, que é um ambiente de nuvem pública. As máquinas virtuais em ambos os ambientes se comunicam entre si, criando uma integração entre os ambientes locais e em nuvem." },
            { correct: false, text: "Incorreta. Nuvem privada seria apenas ambiente local, sem integração com nuvem pública." },
            { correct: false, text: "Incorreta. Nuvem pública seria apenas recursos no Azure, sem ambiente local." },
            { correct: false, text: "Incorreta. On-premises refere-se apenas ao ambiente local, sem recursos em nuvem." }
        ],
        glossary: [
            "Nuvem híbrida: combinação de nuvem privada (on-premises) e pública, com integração entre ambientes.",
            "On-premises: infraestrutura local, dentro das instalações da empresa.",
            "Nuvem pública: infraestrutura compartilhada oferecida por provedores como Azure.",
            "Interconexão: comunicação entre ambientes distintos, geralmente via VPN ou link dedicado."
        ],
        generalExplanation: [
            "A presença de <strong>recursos em ambientes locais e na nuvem pública</strong>, com comunicação entre eles, caracteriza uma <strong>nuvem híbrida</strong>.",
            "Esse modelo permite que empresas aproveitem a escalabilidade da nuvem sem abandonar investimentos locais.",
            "A integração é feita por <strong>VPN</strong> ou <strong>ExpressRoute</strong>."
        ],
        realWorld: [
            "Empresas podem manter dados sensíveis on-premises e usar a nuvem para processamento e análise.",
            "A migração gradual para a nuvem é facilitada pelo modelo híbrido.",
            "Aplicações podem ser distribuídas entre ambientes para otimizar custos e desempenho."
        ]
    },
    {
        id: 12,
        title: "Eletricidade de data center como OpEx",
        domain: "Conceitos de Nuvem",
        prompt: "Pagar eletricidade pelo seu data center é um exemplo de OpEx. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Pagar eletricidade pelo próprio data center é classificado como CapEx, não OpEx." },
            { correct: true, text: "Correta. Pagar pela eletricidade do seu próprio data center será classificado como CapEx, não OpEx." }
        ],
        glossary: [
            "CapEx: despesas de capital, investimentos em ativos de longo prazo.",
            "OpEx: despesas operacionais, gastos contínuos com operação.",
            "Data center: instalação física que abriga servidores e infraestrutura de TI."
        ],
        generalExplanation: [
            "Segundo a classificação da Microsoft para o exame AZ-900, gastos com eletricidade de data center próprio são considerados <strong>CapEx</strong>.",
            "Isso ocorre porque estão diretamente relacionados à operação da infraestrutura física adquirida.",
            "Na nuvem, esses custos são convertidos em <strong>OpEx</strong>, pois são pagos conforme o uso."
        ],
        realWorld: [
            "Empresas com data centers próprios têm custos fixos de eletricidade, refrigeração e manutenção.",
            "Na nuvem, esses custos são embutidos no preço dos serviços, pagos mensalmente.",
            "Isso melhora o fluxo de caixa e permite maior flexibilidade financeira."
        ]
    },
    {
        id: 13,
        title: "Nuvem privada desconectada da Internet",
        domain: "Conceitos de Nuvem",
        prompt: "Uma nuvem privada deve ser desconectada da internet. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Nuvens privadas podem estar conectadas à Internet; não há obrigatoriedade de desconexão." },
            { correct: true, text: "Não é verdade que uma nuvem privada deve ser desconectada da Internet. Nuvens privadas podem ser e mais são comumente conectadas à Internet. Nuvem privada significa que os servidores físicos são gerenciados por você. Isso não significa que ele está desconectado da Internet." }
        ],
        glossary: [
            "Nuvem privada: infraestrutura dedicada a uma organização, gerenciada internamente.",
            "Internet: rede mundial de computadores.",
            "Conectividade: capacidade de se conectar à rede."
        ],
        generalExplanation: [
            "A <strong>nuvem privada</strong> não exige desconexão da Internet.",
            "Muitas empresas mantêm nuvens privadas conectadas para permitir acesso remoto e integração com serviços externos.",
            "A desconexão é uma escolha de segurança, não uma exigência do modelo."
        ],
        realWorld: [
            "Empresas podem manter nuvens privadas conectadas à Internet para permitir acesso de funcionários remotos.",
            "A segurança é garantida por firewalls, VPNs e outras medidas, não pela desconexão.",
            "Nuvens privadas desconectadas são usadas em ambientes de altíssima segurança, como defesa e pesquisa."
        ]
    },
    {
        id: 14,
        title: "Aluguel de software como OpEx",
        domain: "Conceitos de Nuvem",
        prompt: "O aluguel de software é um exemplo de custos de despesas operacionais (OpEx). Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. OpEx são custos contínuos (custos de operações), como software de leasing. Se você comprou o software como uma compra única, isso seria CapEx, mas o software de leasing está em andamento, portanto, é OpEx." },
            { correct: false, text: "Incorreta. O aluguel de software é um gasto contínuo, portanto classificado como OpEx." }
        ],
        glossary: [
            "OpEx: despesas operacionais, gastos contínuos.",
            "CapEx: despesas de capital, investimentos em ativos de longo prazo.",
            "Leasing: aluguel de software ou equipamento."
        ],
        generalExplanation: [
            "O <strong>aluguel de software</strong> é um gasto recorrente, classificado como <strong>OpEx</strong>.",
            "A compra definitiva de uma licença seria <strong>CapEx</strong>.",
            "Modelos de assinatura (SaaS) são exemplos de OpEx."
        ],
        realWorld: [
            "Assinaturas do Microsoft 365 são exemplos de OpEx, pois são pagas mensalmente.",
            "A compra de licenças perpétuas seria CapEx.",
            "Empresas preferem OpEx por flexibilidade e menor impacto no fluxo de caixa."
        ]
    },
    {
        id: 15,
        title: "Servidores físicos para computação em nuvem",
        domain: "Conceitos de Nuvem",
        prompt: "Você deve ter servidores físicos para usar a computação em nuvem. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A computação em nuvem não exige que o cliente possua servidores físicos." },
            { correct: true, text: "Não, a afirmação está incorreta. A computação em nuvem é baseada em recursos virtuais, o que significa que não é necessário ter servidores físicos para usá-la. A infraestrutura de computação em nuvem é composta por servidores e outros equipamentos físicos, mas é gerenciada por provedores de serviços em nuvem, que oferecem acesso virtual aos recursos." }
        ],
        glossary: [
            "Computação em nuvem: modelo de fornecimento de recursos de TI pela Internet.",
            "Servidor físico: hardware dedicado que executa aplicações.",
            "Virtualização: tecnologia que permite criar recursos virtuais sobre hardware físico."
        ],
        generalExplanation: [
            "Na <strong>computação em nuvem</strong>, o cliente <strong>não precisa possuir servidores físicos</strong>.",
            "O provedor gerencia a infraestrutura física, e o cliente acessa recursos virtuais.",
            "Isso reduz custos e complexidade operacional."
        ],
        realWorld: [
            "Startups podem usar serviços em nuvem sem investir em hardware.",
            "Empresas podem escalar rapidamente sem comprar servidores.",
            "A nuvem elimina a necessidade de data centers próprios para muitas cargas de trabalho."
        ]
    },
    {
        id: 16,
        title: "Acesso a recursos em nuvem pública",
        domain: "Conceitos de Nuvem",
        prompt: "Em um modelo de nuvem pública, apenas os usuários convidados da sua empresa podem acessar os recursos na nuvem. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Não é verdade que apenas usuários convidados podem acessar os recursos da nuvem. Você pode conceder a qualquer pessoa com uma conta no Azure Active Directory acesso aos recursos da nuvem. Existem muitos cenários de autenticação, mas um comum é replicar suas contas locais do Active Directory para o Azure Active Directory e fornecer acesso às contas do Azure Active Directory." },
            { correct: false, text: "Incorreta. O acesso à nuvem pública não é restrito a usuários convidados; depende das políticas de autenticação e autorização configuradas." }
        ],
        glossary: [
            "Nuvem pública: infraestrutura compartilhada oferecida por provedores.",
            "Azure Active Directory (AD): serviço de identidade e acesso da Microsoft.",
            "Autenticação: processo de verificação de identidade.",
            "Autorização: processo de concessão de permissões a usuários autenticados."
        ],
        generalExplanation: [
            "O acesso à <strong>nuvem pública</strong> é controlado por <strong>políticas de autenticação e autorização</strong>, não por restrição a usuários convidados.",
            "Qualquer pessoa com credenciais válidas pode acessar recursos, dependendo das permissões concedidas.",
            "A segurança é garantida por mecanismos como <strong>Azure AD, MFA e RBAC</strong>."
        ],
        realWorld: [
            "Empresas podem conceder acesso a parceiros e clientes via <strong>Azure AD B2B</strong>.",
            "Usuários externos podem ser convidados a acessar recursos específicos.",
            "A autenticação federada permite integração com diretórios locais."
        ]
    },
    {
        id: 17,
        title: "Implantação apenas com PaaS no Azure",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa planeja migrar todos os seus dados e recursos para o Azure. O plano de migração da empresa afirma que apenas soluções de plataforma como serviço (PaaS) devem ser usadas no Azure. Você precisa implantar um ambiente do Azure que atenda ao plano de migração da empresa. O que você deve criar?",
        options: [
            { letter: "A", text: "Um Serviço de Aplicativo do Azure e máquinas virtuais do Azure que tenham o Microsoft SQL Server instalado.", correct: false },
            { letter: "B", text: "Um Serviço de Aplicativo do Azure e bancos de dados SQL do Azure.", correct: true },
            { letter: "C", text: "Contas de armazenamento do Azure e servidor Web em máquinas virtuais do Azure.", correct: false },
            { letter: "D", text: "Máquinas virtuais do Azure, bancos de dados SQL do Azure e contas de armazenamento do Azure.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Máquinas virtuais são IaaS, não PaaS." },
            { correct: true, text: "Correta. O Serviço de Aplicativo do Azure e os bancos de dados SQL do Azure são exemplos de soluções de PaaS do Azure. Portanto, esta solução atende ao objetivo." },
            { correct: false, text: "Incorreta. Servidor web em máquinas virtuais é IaaS, não PaaS." },
            { correct: false, text: "Incorreta. Máquinas virtuais são IaaS, não PaaS." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "IaaS (Infrastructure as a Service): modelo que fornece infraestrutura virtualizada (VMs, armazenamento, rede).",
            "Azure App Service: serviço PaaS da Microsoft para hospedar aplicações web.",
            "Azure SQL Database: serviço PaaS de banco de dados relacional da Microsoft."
        ],
        generalExplanation: [
            "Para atender ao requisito de <strong>apenas PaaS</strong>, é necessário usar serviços gerenciados.",
            "O <strong>Azure App Service</strong> e o <strong>Azure SQL Database</strong> são exemplos de PaaS.",
            "Máquinas virtuais e servidores web em VMs são IaaS e não atendem ao requisito."
        ],
        realWorld: [
            "Empresas que migram para PaaS reduzem a carga operacional, pois o provedor gerencia a infraestrutura.",
            "Aplicações web podem ser hospedadas no App Service sem gerenciar servidores.",
            "Bancos de dados SQL do Azure oferecem escalabilidade e alta disponibilidade gerenciadas."
        ]
    },
    {
        id: 18,
        title: "Primeiro estágio do Microsoft Cloud Adoption Framework",
        domain: "Conceitos de Nuvem",
        prompt: "Qual é o primeiro estágio do Microsoft Cloud Adoption Framework for Azure?",
        options: [
            { letter: "A", text: "Prepare sua organização.", correct: false },
            { letter: "B", text: "Adote a nuvem.", correct: false },
            { letter: "C", text: "Defina sua estratégia.", correct: true },
            { letter: "D", text: "Faça um plano.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Preparar a organização é um estágio posterior." },
            { correct: false, text: "Incorreta. Adotar a nuvem é um estágio posterior." },
            { correct: true, text: "Correta. O primeiro estágio do Microsoft Cloud Adoption Framework for Azure é 'Defina sua estratégia'." },
            { correct: false, text: "Incorreta. Fazer um plano é um estágio posterior." }
        ],
        glossary: [
            "Cloud Adoption Framework (CAF): framework da Microsoft para orientar a adoção da nuvem.",
            "Estratégia: definição de objetivos e motivações para a migração.",
            "Plano: detalhamento das ações para implementar a estratégia."
        ],
        generalExplanation: [
            "O <strong>Cloud Adoption Framework</strong> orienta a jornada de adoção da nuvem em estágios.",
            "O primeiro estágio é <strong>Definir a Estratégia</strong>, onde se estabelecem objetivos de negócio e motivações.",
            "Os estágios seguintes incluem Planejar, Preparar, Adotar, Governar e Gerenciar."
        ],
        realWorld: [
            "Empresas iniciam a jornada definindo por que migrar para a nuvem e quais resultados esperam.",
            "A estratégia alinha TI aos objetivos de negócio.",
            "O framework ajuda a evitar migrações desorganizadas e sem propósito claro."
        ]
    },
    {
        id: 19,
        title: "Disponibilidade com falha de datacenter do Azure",
        domain: "Conceitos de Nuvem",
        prompt: "Você tem uma rede local que contém vários servidores. Você planeja migrar todos os servidores para o Azure. Você precisa recomendar uma solução para garantir que alguns dos servidores estejam disponíveis se um único datacenter do Azure ficar offline por um longo período. O que você deveria incluir na recomendação?",
        options: [
            { letter: "A", text: "tolerância a falhas", correct: true },
            { letter: "B", text: "elasticidade", correct: false },
            { letter: "C", text: "baixa latência", correct: false },
            { letter: "D", text: "escalabilidade", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Para garantir a disponibilidade contínua dos servidores em caso de falha de um datacenter do Azure, é necessário implementar um modelo de alta disponibilidade que permita a continuidade dos serviços em caso de falha de um datacenter. A tolerância a falhas é uma técnica de design que ajuda a garantir que um sistema continue a operar quando um ou mais componentes falham." },
            { correct: false, text: "Incorreta. Elasticidade refere-se ao ajuste automático de recursos conforme a demanda, não à tolerância a falhas." },
            { correct: false, text: "Incorreta. Baixa latência refere-se ao tempo de resposta, não à disponibilidade." },
            { correct: false, text: "Incorreta. Escalabilidade refere-se à capacidade de crescer, não à tolerância a falhas." }
        ],
        glossary: [
            "Tolerância a falhas: capacidade de um sistema continuar operando mesmo com falhas em componentes.",
            "Zonas de Disponibilidade: data centers fisicamente separados dentro de uma região Azure.",
            "Alta disponibilidade: capacidade de um sistema permanecer operacional por longos períodos."
        ],
        generalExplanation: [
            "A <strong>tolerância a falhas</strong> é essencial para garantir que serviços continuem disponíveis mesmo se um datacenter falhar.",
            "No Azure, isso é implementado com <strong>Zonas de Disponibilidade</strong> e replicação geográfica.",
            "Recursos como <strong>grupos de disponibilidade</strong> e <strong>conjuntos de dimensionamento</strong> ajudam a distribuir cargas."
        ],
        realWorld: [
            "Aplicações críticas são distribuídas em múltiplas Zonas de Disponibilidade para evitar pontos únicos de falha.",
            "O <strong>Azure Site Recovery</strong> permite replicação e recuperação em caso de desastres.",
            "Serviços como <strong>Azure SQL Database</strong> oferecem replicação automática entre zonas."
        ]
    },
    {
        id: 20,
        title: "Nenhuma despesa de capital necessária",
        domain: "Conceitos de Nuvem",
        prompt: "Nenhuma despesa de capital necessária. A frase acima está associada a qual alternativa?",
        options: [
            { letter: "A", text: "Nuvem híbrida.", correct: false },
            { letter: "B", text: "On-premises (No local).", correct: false },
            { letter: "C", text: "Nuvem Privada.", correct: false },
            { letter: "D", text: "Nuvem Pública.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Nuvem híbrida pode envolver CapEx para recursos locais." },
            { correct: false, text: "Incorreta. On-premises exige investimentos em infraestrutura física (CapEx)." },
            { correct: false, text: "Incorreta. Nuvem privada pode exigir investimentos em hardware (CapEx)." },
            { correct: true, text: "Correta. Com uma nuvem pública, não há gastos de capital com hardware de servidor, etc. Você paga apenas pelos recursos de nuvem que usa à medida que os usa." }
        ],
        glossary: [
            "CapEx: despesas de capital, investimentos em ativos de longo prazo.",
            "OpEx: despesas operacionais, gastos contínuos.",
            "Nuvem pública: infraestrutura compartilhada oferecida por provedores."
        ],
        generalExplanation: [
            "Na <strong>nuvem pública</strong>, o cliente não precisa investir em infraestrutura física, eliminando <strong>CapEx</strong>.",
            "Os custos são convertidos em <strong>OpEx</strong>, pagos conforme o uso.",
            "Isso melhora o fluxo de caixa e permite maior flexibilidade financeira."
        ],
        realWorld: [
            "Startups podem usar serviços em nuvem sem investir em hardware.",
            "Empresas podem escalar rapidamente sem comprar servidores.",
            "A nuvem elimina a necessidade de data centers próprios para muitas cargas de trabalho."
        ]
    },
    {
        id: 21,
        title: "Instalação de software em IaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Com infraestrutura como serviço (IaaS), você deve instalar o software que deseja usar. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação está correta: em IaaS, o cliente é responsável por instalar e gerenciar o software." },
            { correct: true, text: "Correta. Com infraestrutura como serviço (IaaS), a responsabilidade de instalar e gerenciar o software é do usuário. A nuvem apenas fornece os recursos necessários para executar o software, como servidores virtuais, armazenamento e rede. O usuário é responsável por configurar e gerenciar o sistema operacional e o software que serão executados nas máquinas virtuais." }
        ],
        glossary: [
            "IaaS (Infrastructure as a Service): modelo que fornece infraestrutura virtualizada (VMs, armazenamento, rede).",
            "Sistema operacional: software base que gerencia hardware e recursos.",
            "Máquina virtual: instância computacional virtualizada."
        ],
        generalExplanation: [
            "No modelo <strong>IaaS</strong>, o cliente gerencia o <strong>sistema operacional e o software</strong> instalado nas VMs.",
            "O provedor gerencia apenas a infraestrutura física e a virtualização.",
            "Isso oferece maior controle, mas também maior responsabilidade operacional."
        ],
        realWorld: [
            "Empresas que usam VMs no Azure são responsáveis por instalar sistemas operacionais, patches e aplicações.",
            "O provedor garante que o hardware e a virtualização estejam funcionando.",
            "Para reduzir responsabilidades, empresas migram para PaaS ou SaaS."
        ]
    },
    {
        id: 22,
        title: "Serviço acessado rapidamente pela Internet",
        domain: "Conceitos de Nuvem",
        prompt: "Um serviço em nuvem que pode ser acessado rapidamente pela Internet. Escolha a opção correta.",
        options: [
            { letter: "A", text: "Escalabilidade dinâmica.", correct: false },
            { letter: "B", text: "Recuperação de desastres.", correct: false },
            { letter: "C", text: "Tolerância ao erro.", correct: false },
            { letter: "D", text: "Baixa latência.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Escalabilidade dinâmica refere-se ao ajuste de recursos conforme a demanda." },
            { correct: false, text: "Incorreta. Recuperação de desastres refere-se à restauração após falhas." },
            { correct: false, text: "Incorreta. Tolerância ao erro refere-se à continuidade durante falhas." },
            { correct: true, text: "Correta. A latência é o tempo de um serviço para responder às solicitações. Por exemplo, o tempo que leva para uma página da web ser retornada de um servidor da web. Baixa latência significa baixo tempo de resposta, o que significa uma resposta mais rápida." }
        ],
        glossary: [
            "Latência: tempo de resposta entre requisição e resposta.",
            "Baixa latência: tempo de resposta rápido.",
            "Escalabilidade: capacidade de ajustar recursos conforme a demanda."
        ],
        generalExplanation: [
            "A <strong>baixa latência</strong> indica que o serviço responde rapidamente às requisições.",
            "É essencial para experiências de usuário ágeis e aplicações em tempo real.",
            "Outros conceitos tratam de resiliência ou escalabilidade, não de velocidade de resposta."
        ],
        realWorld: [
            "Aplicações de streaming e jogos online exigem baixa latência para boa experiência.",
            "CDNs (Content Delivery Networks) reduzem latência distribuindo conteúdo geograficamente.",
            "Serviços como <strong>Azure Front Door</strong> otimizam latência global."
        ]
    },
    {
        id: 23,
        title: "Modelos de nuvem para servidores físicos",
        domain: "Conceitos de Nuvem",
        prompt: "Em quais modelos de nuvem você pode implantar servidores físicos?",
        options: [
            { letter: "A", text: "Apenas nuvem híbrida.", correct: false },
            { letter: "B", text: "Nuvem privada, nuvem híbrida e nuvem pública.", correct: false },
            { letter: "C", text: "Apenas nuvem privada.", correct: false },
            { letter: "D", text: "Nuvem privada e nuvem híbrida apenas.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Nuvem híbrida inclui ambiente local, mas não é o único modelo." },
            { correct: false, text: "Incorreta. Na nuvem pública, você não implanta servidores físicos próprios." },
            { correct: false, text: "Incorreta. Nuvem híbrida também permite servidores físicos no ambiente local." },
            { correct: true, text: "Correta. Uma nuvem privada é local para que você possa implantar servidores físicos. Uma nuvem híbrida é uma combinação de recursos locais e de nuvem pública. Você pode implantar servidores físicos no local." }
        ],
        glossary: [
            "Nuvem privada: infraestrutura dedicada a uma organização, geralmente on-premises.",
            "Nuvem híbrida: combinação de nuvem privada e pública.",
            "Servidor físico: hardware dedicado que executa aplicações."
        ],
        generalExplanation: [
            "Servidores físicos podem ser implantados em <strong>nuvem privada</strong> (on-premises) e em <strong>nuvem híbrida</strong> (ambiente local integrado à nuvem pública).",
            "Na <strong>nuvem pública</strong>, o cliente não tem acesso a servidores físicos, apenas a recursos virtuais.",
            "Isso se deve ao modelo de compartilhamento de infraestrutura da nuvem pública."
        ],
        realWorld: [
            "Empresas com requisitos de segurança podem manter servidores físicos em nuvens privadas.",
            "Ambientes híbridos permitem que servidores físicos locais se integrem a serviços em nuvem.",
            "A nuvem pública é ideal para cargas que não exigem hardware dedicado."
        ]
    },
    {
        id: 24,
        title: "Memória adicional em PaaS via pricing",
        domain: "Conceitos de Nuvem",
        prompt: "Uma solução de plataforma como serviço (PaaS) fornece memória adicional para aplicativos alterando os níveis de pricing. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "A afirmação está incorreta. Uma solução de plataforma como serviço (PaaS) normalmente oferece recursos de computação, memória e armazenamento predefinidos com base no nível de serviço escolhido. Aumentar a memória disponível para um aplicativo normalmente exigiria uma alteração na configuração do aplicativo em si, não no nível de serviço PaaS." },
            { correct: false, text: "Incorreta. Alterar o nível de pricing não adiciona memória automaticamente; é necessário ajustar a configuração do aplicativo ou o plano de serviço." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "Pricing tier: nível de preço que define recursos e capacidades do serviço.",
            "Memória: recurso computacional alocado para execução de aplicações."
        ],
        generalExplanation: [
            "Em <strong>PaaS</strong>, os recursos são definidos pelo <strong>plano de serviço</strong> escolhido.",
            "Aumentar memória geralmente requer <strong>mudança de plano</strong> ou <strong>configuração do aplicativo</strong>, não apenas alteração de pricing.",
            "A afirmação é simplista e incorreta para a maioria dos serviços PaaS."
        ],
        realWorld: [
            "No <strong>Azure App Service</strong>, planos superiores oferecem mais memória e CPU.",
            "Aplicações podem precisar de ajustes para usar recursos adicionais.",
            "Escolher o plano correto é essencial para desempenho e custo."
        ]
    },
    {
        id: 25,
        title: "Pagamento conforme o uso como CapEx",
        domain: "Conceitos de Nuvem",
        prompt: "O preço de pagamento conforme o uso do Azure é um exemplo de CapEx. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O pagamento conforme o uso é OpEx, não CapEx." },
            { correct: true, text: "Correta. Com o modelo pré-pago, você paga pelos serviços à medida que os utiliza. Isso é Opex (despesas operacionais), não CapEx (despesas de capital). CapEx é onde você paga algo adiantado. Por exemplo, comprar um novo servidor físico." }
        ],
        glossary: [
            "CapEx: despesas de capital, investimentos em ativos de longo prazo.",
            "OpEx: despesas operacionais, gastos contínuos.",
            "Pay-as-you-go: modelo de pagamento conforme o uso."
        ],
        generalExplanation: [
            "O <strong>pagamento conforme o uso</strong> é um exemplo clássico de <strong>OpEx</strong>.",
            "CapEx envolve investimentos iniciais significativos, como compra de servidores.",
            "A nuvem converte CapEx em OpEx, melhorando o fluxo de caixa."
        ],
        realWorld: [
            "Empresas pagam mensalmente pelos serviços de nuvem que consomem.",
            "Não há investimento inicial em hardware.",
            "Isso permite maior flexibilidade financeira e escalabilidade."
        ]
    },
    {
        id: 26,
        title: "Azure Cosmos DB como oferta PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "O Azure Cosmos DB é um exemplo de oferta _______. Complete a afirmação com uma das opções.",
        options: [
            { letter: "A", text: "software como serviço (SaaS).", correct: false },
            { letter: "B", text: "infraestrutura como serviço (IaaS).", correct: false },
            { letter: "C", text: "plataforma como serviço (PaaS).", correct: true },
            { letter: "D", text: "sem servidor.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. SaaS é software pronto para uso, como Microsoft 365." },
            { correct: false, text: "Incorreta. IaaS fornece infraestrutura virtualizada, como VMs." },
            { correct: true, text: "Correta. O Azure Cosmos DB é um exemplo de provedor de banco de dados de nuvem de plataforma como serviço (PaaS)." },
            { correct: false, text: "Incorreta. Serverless é um modelo de execução, não uma categoria de serviço como PaaS." }
        ],
        glossary: [
            "Azure Cosmos DB: banco de dados NoSQL distribuído globalmente da Microsoft.",
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "SaaS (Software as a Service): software pronto para uso fornecido pela Internet.",
            "IaaS (Infrastructure as a Service): infraestrutura virtualizada fornecida pela Internet."
        ],
        generalExplanation: [
            "O <strong>Azure Cosmos DB</strong> é um serviço gerenciado de banco de dados, classificado como <strong>PaaS</strong>.",
            "O provedor gerencia a infraestrutura, e o cliente foca no uso do banco.",
            "É diferente de IaaS (VMs) ou SaaS (aplicações prontas)."
        ],
        realWorld: [
            "Aplicações globais usam Cosmos DB para armazenar dados distribuídos com baixa latência.",
            "O serviço oferece replicação automática e escalabilidade.",
            "Desenvolvedores não precisam gerenciar servidores de banco de dados."
        ]
    },
    {
        id: 27,
        title: "Responsabilidade do cliente em SaaS",
        domain: "Conceitos de Nuvem",
        prompt: "O que um cliente fornece em um modelo de software como serviço (SaaS)?",
        options: [
            { letter: "A", text: "Software aplicativo.", correct: false },
            { letter: "B", text: "Dados do aplicativo.", correct: true },
            { letter: "C", text: "Recursos de computação.", correct: false },
            { letter: "D", text: "Armazenamento de dados.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O software aplicativo é fornecido pelo provedor em SaaS." },
            { correct: true, text: "Correta. O SaaS fornece uma solução de software completa que você adquire com base no pagamento conforme o uso de um provedor de serviços em nuvem. Você aluga o uso de um aplicativo para sua organização e seus usuários se conectam a ele pela Internet. Toda a infraestrutura subjacente, middleware, software de aplicativo e dados de aplicativo estão localizados no data center do provedor de serviços. O provedor de serviços gerencia o hardware e o software e garantirá a disponibilidade e a segurança do aplicativo e de seus dados também." },
            { correct: false, text: "Incorreta. Recursos de computação são gerenciados pelo provedor em SaaS." },
            { correct: false, text: "Incorreta. O armazenamento é gerenciado pelo provedor em SaaS." }
        ],
        glossary: [
            "SaaS (Software as a Service): modelo em que o software é fornecido como serviço pela Internet.",
            "Dados do aplicativo: informações inseridas e gerenciadas pelo cliente dentro do software.",
            "Provedor de serviço: empresa responsável por hospedar e manter o software."
        ],
        generalExplanation: [
            "No <strong>SaaS</strong>, o cliente é responsável apenas pelos <strong>dados que insere</strong> e pela <strong>gestão de usuários</strong>.",
            "Toda a infraestrutura, software e manutenção são responsabilidades do provedor.",
            "Isso reduz a carga operacional do cliente."
        ],
        realWorld: [
            "No Microsoft 365, o cliente gerencia e-mails e documentos, mas a Microsoft cuida da infraestrutura.",
            "No Salesforce, o cliente insere dados de clientes, mas a Salesforce gerencia a plataforma.",
            "A segurança dos dados ainda é responsabilidade compartilhada."
        ]
    },
    {
        id: 28,
        title: "Servidores físicos próprios na nuvem pública",
        domain: "Conceitos de Nuvem",
        prompt: "Uma empresa pode estender uma rede interna adicionando seus próprios servidores físicos à nuvem pública. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Não é possível adicionar servidores físicos próprios à nuvem pública." },
            { correct: true, text: "A afirmação está incorreta. Uma empresa não pode simplesmente estender sua rede interna adicionando seus servidores físicos à nuvem pública, uma vez que a nuvem pública é uma infraestrutura independente. No entanto, a empresa pode conectar sua rede interna à nuvem pública usando tecnologias de rede como VPNs ou ExpressRoute, permitindo que seus recursos locais se comuniquem com os recursos da nuvem pública." }
        ],
        glossary: [
            "Nuvem pública: infraestrutura compartilhada oferecida por provedores.",
            "VPN: conexão segura entre redes.",
            "ExpressRoute: conexão dedicada entre ambiente local e Azure."
        ],
        generalExplanation: [
            "A <strong>nuvem pública</strong> é uma infraestrutura independente, gerenciada pelo provedor.",
            "O cliente <strong>não pode instalar servidores físicos próprios</strong> na nuvem pública.",
            "É possível conectar ambientes locais à nuvem via <strong>VPN</strong> ou <strong>ExpressRoute</strong>."
        ],
        realWorld: [
            "Empresas usam ExpressRoute para conectar data centers locais ao Azure com alta velocidade e segurança.",
            "A integração permite que recursos locais e em nuvem se comuniquem.",
            "Isso é comum em arquiteturas híbridas."
        ]
    },
    {
        id: 29,
        title: "VMs, SQL Database e Storage como PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa planeja migrar todos os seus dados e recursos para o Azure. O plano de migração afirma que apenas soluções PaaS devem ser usadas. Solução: você cria máquinas virtuais do Azure, bancos de dados SQL do Azure e contas de armazenamento do Azure. Isso atende ao objetivo?",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Máquinas virtuais são IaaS, portanto não atendem ao requisito de apenas PaaS." },
            { correct: true, text: "Plataforma como serviço (PaaS) é um ambiente completo de desenvolvimento e implantação na nuvem. A PaaS inclui infraestrutura servidores, armazenamento e rede, mas também middleware, ferramentas de desenvolvimento, serviços de business intelligence (BI), sistemas de gerenciamento de banco de dados e muito mais. No entanto, as máquinas virtuais são exemplos de Infraestrutura como serviço (IaaS)." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "IaaS (Infrastructure as a Service): modelo que fornece infraestrutura virtualizada (VMs, armazenamento, rede).",
            "Azure SQL Database: serviço PaaS de banco de dados relacional."
        ],
        generalExplanation: [
            "A solução inclui <strong>máquinas virtuais</strong>, que são <strong>IaaS</strong>, não PaaS.",
            "Portanto, <strong>não atende</strong> ao requisito de usar apenas PaaS.",
            "Para atender, seria necessário usar apenas serviços gerenciados como App Service e SQL Database."
        ],
        realWorld: [
            "Empresas que exigem apenas PaaS devem evitar VMs e usar serviços gerenciados.",
            "Isso reduz a carga operacional e melhora a segurança.",
            "A escolha correta de serviços é fundamental para atender requisitos de arquitetura."
        ]
    },
    {
        id: 30,
        title: "Minimização de CapEx com nuvem pública",
        domain: "Conceitos de Nuvem",
        prompt: "Os clientes podem minimizar o gasto de capital (CapEx) usando uma nuvem pública. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação está correta: a nuvem pública reduz CapEx." },
            { correct: true, text: "Correta. Com uma nuvem pública, os clientes não precisam adquirir servidores físicos, equipamentos de rede e outros recursos de hardware necessários para executar seus aplicativos. Em vez disso, eles pagam apenas pelos recursos de computação e armazenamento que usam, o que permite minimizar o gasto de capital (CapEx)." }
        ],
        glossary: [
            "CapEx: despesas de capital, investimentos em ativos de longo prazo.",
            "Nuvem pública: infraestrutura compartilhada oferecida por provedores.",
            "OpEx: despesas operacionais, gastos contínuos."
        ],
        generalExplanation: [
            "A <strong>nuvem pública</strong> elimina a necessidade de investimentos em hardware, reduzindo <strong>CapEx</strong>.",
            "Os custos são convertidos em <strong>OpEx</strong>, pagos conforme o uso.",
            "Isso melhora o fluxo de caixa e permite maior flexibilidade financeira."
        ],
        realWorld: [
            "Empresas podem usar serviços em nuvem sem investir em data centers.",
            "Startups podem escalar rapidamente sem comprar servidores.",
            "A nuvem é especialmente vantajosa para cargas variáveis."
        ]
    },
    {
        id: 31,
        title: "Azure Backup como PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "O backup do Azure é um exemplo de plataforma como serviço (PaaS). Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação está correta: o Azure Backup é um serviço PaaS." },
            { correct: true, text: "A afirmação está correta. O Azure Backup é um exemplo de serviço PaaS, que permite fazer backup e restauração de dados de máquinas virtuais do Azure e de servidores locais, sem que seja necessário gerenciar a infraestrutura subjacente. Com o Azure Backup, o cliente não precisa se preocupar com a instalação ou gerenciamento do software de backup, e pode se concentrar na proteção dos dados de sua organização." }
        ],
        glossary: [
            "Azure Backup: serviço gerenciado de backup e recuperação da Microsoft.",
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "Infraestrutura subjacente: recursos físicos e virtuais gerenciados pelo provedor."
        ],
        generalExplanation: [
            "O <strong>Azure Backup</strong> é um serviço gerenciado que abstrai a infraestrutura, caracterizando <strong>PaaS</strong>.",
            "O cliente apenas configura políticas de backup, sem gerenciar servidores ou software.",
            "Isso simplifica operações e melhora a segurança dos dados."
        ],
        realWorld: [
            "Empresas usam Azure Backup para proteger VMs e bancos de dados.",
            "A recuperação é rápida e gerenciada pelo provedor.",
            "O serviço é integrado a outros recursos do Azure."
        ]
    },
    {
        id: 32,
        title: "Implantação de datacenter próprio como CapEx",
        domain: "Conceitos de Nuvem",
        prompt: "Implantar seu próprio datacenter é um exemplo de CapEx. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação está correta: implantar datacenter é CapEx." },
            { correct: true, text: "Implantar seu próprio datacenter é um exemplo de CapEx. Isso ocorre porque você precisa adquirir toda a infraestrutura antecipadamente antes de poder usar." }
        ],
        glossary: [
            "CapEx: despesas de capital, investimentos em ativos de longo prazo.",
            "Datacenter: instalação física que abriga servidores e infraestrutura de TI.",
            "OpEx: despesas operacionais, gastos contínuos."
        ],
        generalExplanation: [
            "A implantação de um <strong>datacenter próprio</strong> exige investimentos significativos em hardware, refrigeração e espaço físico, caracterizando <strong>CapEx</strong>.",
            "Gastos contínuos com operação são <strong>OpEx</strong>.",
            "A nuvem converte CapEx em OpEx, eliminando a necessidade de data centers próprios."
        ],
        realWorld: [
            "Empresas que constroem data centers precisam de grandes investimentos iniciais.",
            "Na nuvem, esses custos são convertidos em pagamentos mensais.",
            "Isso melhora o fluxo de caixa e permite maior flexibilidade."
        ]
    },
    {
        id: 33,
        title: "Aplicativos com pré-requisitos complexos",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa planeja implantar vários aplicativos personalizados no Azure. Os aplicativos fornecerão serviços de faturamento aos clientes. Cada aplicativo terá vários aplicativos e serviços pré-requisitos instalados. Você precisa recomendar uma solução de implantação em nuvem para todos os aplicativos. O que você deve recomendar?",
        options: [
            { letter: "A", text: "Infraestrutura como serviço (IaaS).", correct: true },
            { letter: "B", text: "Software como serviço (SaaS).", correct: false },
            { letter: "C", text: "Todas as alternativas corretas.", correct: false },
            { letter: "D", text: "Plataforma como serviço (PaaS).", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. A infraestrutura como serviço (IaaS) é uma infraestrutura de computação instantânea, provisionada e gerenciada pela Internet. O provedor de serviços IaaS gerencia a infraestrutura, enquanto você compra, instala, configura e gerencia seu próprio software." },
            { correct: false, text: "Incorreta. SaaS fornece software pronto, não permitindo instalação de pré-requisitos personalizados." },
            { correct: false, text: "Incorreta. Apenas IaaS atende ao requisito de instalar pré-requisitos personalizados." },
            { correct: false, text: "Incorreta. PaaS limita a instalação de pré-requisitos, pois a plataforma é gerenciada pelo provedor." }
        ],
        glossary: [
            "IaaS (Infrastructure as a Service): modelo que fornece infraestrutura virtualizada (VMs, armazenamento, rede).",
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "SaaS (Software as a Service): software pronto para uso fornecido pela Internet.",
            "Pré-requisitos: softwares e serviços necessários para executar uma aplicação."
        ],
        generalExplanation: [
            "Para instalar <strong>múltiplos pré-requisitos personalizados</strong>, é necessário controle total sobre o sistema operacional, o que é possível apenas com <strong>IaaS</strong>.",
            "PaaS e SaaS limitam a instalação de softwares adicionais.",
            "IaaS oferece flexibilidade, mas exige maior responsabilidade operacional."
        ],
        realWorld: [
            "Aplicações legadas com dependências complexas geralmente são migradas para VMs (IaaS).",
            "O controle total permite instalar softwares específicos e configurar o ambiente conforme necessário.",
            "Empresas devem avaliar o trade-off entre controle e complexidade operacional."
        ]
    },
    {
        id: 34,
        title: "Desenvolvimento rápido de aplicativos",
        domain: "Conceitos de Nuvem",
        prompt: "Os aplicativos podem ser desenvolvidos, testados e lançados rapidamente. Associe a afirmação com a alternativa correta.",
        options: [
            { letter: "A", text: "Agilidade.", correct: true },
            { letter: "B", text: "Distribuição geográfica.", correct: false },
            { letter: "C", text: "Escalabilidade.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Na computação em nuvem, a agilidade refere-se à capacidade de desenvolver e implantar aplicativos com rapidez. Isso é possível devido ao fato de que os recursos em nuvem, como servidores, armazenamento e rede, podem ser provisionados de forma dinâmica e sob demanda." },
            { correct: false, text: "Incorreta. Distribuição geográfica refere-se à implantação em múltiplas regiões." },
            { correct: false, text: "Incorreta. Escalabilidade refere-se à capacidade de ajustar recursos conforme a demanda." }
        ],
        glossary: [
            "Agilidade: capacidade de desenvolver e implantar rapidamente.",
            "Computação em nuvem: modelo de fornecimento de recursos de TI pela Internet.",
            "Provisionamento dinâmico: alocação de recursos sob demanda."
        ],
        generalExplanation: [
            "A <strong>agilidade</strong> é uma das principais vantagens da nuvem, permitindo ciclos de desenvolvimento mais rápidos.",
            "Recursos podem ser provisionados em minutos, acelerando testes e implantações.",
            "Isso melhora a competitividade e a capacidade de inovação."
        ],
        realWorld: [
            "Equipes DevOps usam nuvem para criar ambientes de teste rapidamente.",
            "CI/CD automatiza build, teste e deploy, aumentando a agilidade.",
            "Startups podem lançar produtos mais rapidamente com recursos sob demanda."
        ]
    },
    {
        id: 35,
        title: "Opção de usar recursos locais ou em nuvem",
        domain: "Conceitos de Nuvem",
        prompt: "Oferece a opção de usar recursos locais ou baseados em nuvem. A frase acima está associada a qual alternativa?",
        options: [
            { letter: "A", text: "Nuvem Híbrida.", correct: true },
            { letter: "B", text: "On-premises.", correct: false },
            { letter: "C", text: "Nuvem Privada.", correct: false },
            { letter: "D", text: "Nuvem Pública.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Uma nuvem híbrida é uma mistura de recursos de nuvem pública e recursos locais. Portanto, você tem a opção de usar qualquer um." },
            { correct: false, text: "Incorreta. On-premises refere-se apenas a recursos locais." },
            { correct: false, text: "Incorreta. Nuvem privada é dedicada, geralmente local, sem opção de nuvem pública." },
            { correct: false, text: "Incorreta. Nuvem pública oferece apenas recursos em nuvem." }
        ],
        glossary: [
            "Nuvem híbrida: combinação de nuvem privada e pública.",
            "On-premises: infraestrutura local.",
            "Nuvem pública: infraestrutura compartilhada oferecida por provedores."
        ],
        generalExplanation: [
            "A <strong>nuvem híbrida</strong> oferece flexibilidade para usar recursos <strong>locais ou em nuvem</strong> conforme a necessidade.",
            "É ideal para empresas que precisam manter parte da infraestrutura local por questões de segurança ou conformidade.",
            "A integração entre ambientes é feita por VPN ou links dedicados."
        ],
        realWorld: [
            "Empresas podem manter dados sensíveis on-premises e usar a nuvem para processamento.",
            "A migração gradual para a nuvem é facilitada pelo modelo híbrido.",
            "Aplicações podem ser distribuídas entre ambientes para otimizar custos e desempenho."
        ]
    },
    {
        id: 36,
        title: "Responsabilidades eliminadas ao migrar para VMs do Azure",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa possui uma rede local que contém vários servidores. A empresa planeja reduzir as seguintes responsabilidades administrativas: fazer backup dos dados do aplicativo; substituir o hardware do servidor com falha; gerenciar a segurança do servidor físico; atualizar os sistemas operacionais do servidor; gerenciar permissões para documentos compartilhados. A empresa planeja migrar servidores para máquinas virtuais do Azure. Quais são as duas responsabilidades que serão eliminadas?",
        options: [
            { letter: "A", text: "Fazendo backup dos dados do aplicativo.", correct: false },
            { letter: "B", text: "Gerenciando permissões para documentos compartilhados.", correct: false },
            { letter: "C", text: "Gerenciando a segurança do servidor físico.", correct: true },
            { letter: "D", text: "Substituindo o hardware do servidor com falha.", correct: true },
            { letter: "E", text: "Atualizando os sistemas operacionais do servidor.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O backup dos dados do aplicativo continua sendo responsabilidade do cliente." },
            { correct: false, text: "Incorreta. Gerenciar permissões de documentos compartilhados continua sendo responsabilidade do cliente." },
            { correct: true, text: "Seleção correta. As máquinas virtuais do Azure são executadas em servidores físicos Hyper-V. Os servidores físicos são de propriedade e gerenciados pela Microsoft. Como cliente do Azure, você não tem acesso aos servidores físicos. A Microsoft gerencia a segurança dos servidores físicos." },
            { correct: true, text: "Seleção correta. A Microsoft gerencia a substituição de hardware de servidor com falha para que você não precise." },
            { correct: false, text: "Incorreta. Atualizar os sistemas operacionais do servidor continua sendo responsabilidade do cliente em IaaS." }
        ],
        glossary: [
            "IaaS (Infrastructure as a Service): modelo que fornece infraestrutura virtualizada.",
            "Servidor físico: hardware dedicado gerenciado pelo provedor de nuvem.",
            "Sistema operacional: software base que gerencia hardware e recursos."
        ],
        generalExplanation: [
            "Ao migrar para <strong>VMs do Azure (IaaS)</strong>, a Microsoft assume a responsabilidade pelo <strong>hardware físico</strong> e sua <strong>segurança</strong>.",
            "O cliente continua responsável por <strong>sistema operacional, aplicações, dados e permissões</strong>.",
            "Isso reduz a carga operacional, mas não elimina todas as responsabilidades."
        ],
        realWorld: [
            "Empresas que migram para IaaS não precisam mais se preocupar com manutenção de hardware.",
            "A Microsoft garante a disponibilidade física dos servidores.",
            "O cliente foca em patches de SO, backups e segurança de dados."
        ]
    },
    {
        id: 37,
        title: "Nuvem pública como parte da nuvem híbrida",
        domain: "Conceitos de Nuvem",
        prompt: "Parte de uma nuvem híbrida é a nuvem pública. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação está correta: a nuvem híbrida inclui nuvem pública." },
            { correct: true, text: "Sim, a afirmação está correta. Uma nuvem híbrida é composta por uma combinação de recursos de nuvem pública e privada, onde a nuvem pública é utilizada para atender às necessidades de computação dinâmica, enquanto a nuvem privada é usada para armazenamento seguro de dados e aplicativos críticos." }
        ],
        glossary: [
            "Nuvem híbrida: combinação de nuvem privada e pública.",
            "Nuvem pública: infraestrutura compartilhada oferecida por provedores.",
            "Nuvem privada: infraestrutura dedicada a uma organização."
        ],
        generalExplanation: [
            "A <strong>nuvem híbrida</strong> por definição inclui <strong>recursos de nuvem pública e privada</strong>.",
            "A nuvem pública oferece escalabilidade, enquanto a privada garante segurança e controle.",
            "A integração entre ambientes é feita por VPN ou links dedicados."
        ],
        realWorld: [
            "Empresas mantêm dados sensíveis on-premises e usam a nuvem pública para processamento.",
            "A migração gradual para a nuvem é facilitada pelo modelo híbrido.",
            "Aplicações podem ser distribuídas entre ambientes para otimizar custos e desempenho."
        ]
    },
    {
        id: 38,
        title: "Nuvem privada desconectada da Internet (repetição)",
        domain: "Conceitos de Nuvem",
        prompt: "Uma nuvem privada deve ser desconectada da internet. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Nuvens privadas podem estar conectadas à Internet." },
            { correct: true, text: "Uma nuvem privada pode estar conectada à internet para permitir o acesso aos serviços e recursos que ela oferece. Sendo assim, a resposta correta é NÃO, a afirmação está incorreta." }
        ],
        glossary: [
            "Nuvem privada: infraestrutura dedicada a uma organização.",
            "Internet: rede mundial de computadores.",
            "Conectividade: capacidade de se conectar à rede."
        ],
        generalExplanation: [
            "A <strong>nuvem privada</strong> não exige desconexão da Internet.",
            "Muitas empresas mantêm nuvens privadas conectadas para permitir acesso remoto.",
            "A desconexão é uma escolha de segurança, não uma exigência do modelo."
        ],
        realWorld: [
            "Empresas podem manter nuvens privadas conectadas à Internet para acesso remoto.",
            "A segurança é garantida por firewalls e VPNs.",
            "Nuvens privadas desconectadas são usadas em ambientes de altíssima segurança."
        ]
    },
    {
        id: 39,
        title: "Rede interna para nuvem híbrida",
        domain: "Conceitos de Nuvem",
        prompt: "Para implementar um modelo de nuvem híbrida, uma empresa deve ter uma rede interna. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Não é obrigatório ter uma rede interna para implementar nuvem híbrida." },
            { correct: true, text: "Não é verdade que uma empresa sempre deve migrar de uma rede interna para implementar uma nuvem híbrida. Você pode começar com uma nuvem pública e depois combiná-la com uma infraestrutura local para implementar uma nuvem híbrida." }
        ],
        glossary: [
            "Nuvem híbrida: combinação de nuvem privada e pública.",
            "Rede interna: infraestrutura de rede local da empresa.",
            "Nuvem pública: infraestrutura compartilhada oferecida por provedores."
        ],
        generalExplanation: [
            "Não é obrigatório ter uma <strong>rede interna</strong> para criar uma nuvem híbrida.",
            "É possível começar com nuvem pública e depois adicionar infraestrutura local.",
            "A definição de nuvem híbrida envolve a combinação de ambientes, não a ordem de implementação."
        ],
        realWorld: [
            "Empresas podem adotar nuvem pública primeiro e depois integrar com ambientes locais.",
            "A integração é feita por VPN ou links dedicados.",
            "Isso permite migração gradual e flexível."
        ]
    },
    {
        id: 40,
        title: "Azure Files como IaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Os Arquivos do Azure são um exemplo de infraestrutura como serviço (IaaS). Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Os Arquivos do Azure são um exemplo de infraestrutura como serviço (IaaS). Os usuários são responsáveis por gerenciar e configurar os arquivos em uma VM, como se estivessem executando o sistema operacional localmente, e a Microsoft gerencia os servidores subjacentes, o armazenamento e a rede." },
            { correct: false, text: "Incorreta. A afirmação está correta: Azure Files é classificado como IaaS." }
        ],
        glossary: [
            "Azure Files: serviço de compartilhamento de arquivos gerenciado da Microsoft.",
            "IaaS (Infrastructure as a Service): modelo que fornece infraestrutura virtualizada.",
            "Sistema operacional: software base que gerencia hardware e recursos."
        ],
        generalExplanation: [
            "O <strong>Azure Files</strong> é considerado <strong>IaaS</strong> porque o cliente gerencia os arquivos e configurações, enquanto a Microsoft gerencia a infraestrutura subjacente.",
            "É diferente de PaaS, onde toda a plataforma é gerenciada pelo provedor.",
            "A classificação pode variar conforme o contexto, mas no exame AZ-900 é tratado como IaaS."
        ],
        realWorld: [
            "Empresas usam Azure Files para compartilhar arquivos entre VMs e ambientes locais.",
            "O serviço é integrado a outros recursos do Azure.",
            "A configuração e gestão dos arquivos é responsabilidade do cliente."
        ]
    },
    {
        id: 41,
        title: "Controle do sistema operacional em PaaS (repetição)",
        domain: "Conceitos de Nuvem",
        prompt: "Uma solução de plataforma como serviço (PaaS) fornece controle total dos sistemas operacionais que hospedam aplicativos. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Em PaaS, o cliente não tem controle total do sistema operacional." },
            { correct: true, text: "A afirmação está incorreta. Em uma solução PaaS, os sistemas operacionais são gerenciados pelo provedor de nuvem e não pelo cliente. Embora o cliente possa implantar seus aplicativos na infraestrutura fornecida pelo provedor de nuvem, ele não tem controle total do sistema operacional subjacente ou de sua configuração." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "Sistema operacional: software base que gerencia hardware e recursos.",
            "Provedor de nuvem: empresa responsável por gerenciar a infraestrutura."
        ],
        generalExplanation: [
            "No <strong>PaaS</strong>, o <strong>sistema operacional é gerenciado pelo provedor</strong>.",
            "O cliente foca apenas na aplicação e nos dados.",
            "Para controle total do SO, é necessário usar IaaS."
        ],
        realWorld: [
            "No Azure App Service, os desenvolvedores não acessam o SO diretamente.",
            "A Microsoft gerencia patches e atualizações.",
            "Para maior controle, é necessário usar VMs (IaaS)."
        ]
    },
    {
        id: 42,
        title: "Memória adicional em PaaS via pricing (repetição)",
        domain: "Conceitos de Nuvem",
        prompt: "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure pode receber memória adicional alterando o tipo de preço. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Uma solução de PaaS que hospeda aplicativos Web no Azure fornece a capacidade de escalar a plataforma automaticamente. Isso é conhecido como escalonamento automático. Nos bastidores, os aplicativos da web são hospedados em máquinas virtuais que executam o IIS. O escalonamento automático significa adicionar mais máquinas virtuais com balanceamento de carga para hospedar os aplicativos da web." },
            { correct: false, text: "Incorreta. A afirmação está correta: alterar o tipo de preço pode adicionar memória." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "Escalonamento automático: ajuste automático de recursos conforme a demanda.",
            "Pricing tier: nível de preço que define recursos e capacidades do serviço."
        ],
        generalExplanation: [
            "No <strong>Azure App Service</strong>, alterar o <strong>tipo de preço</strong> pode fornecer mais memória e CPU.",
            "O escalonamento automático permite ajustar recursos conforme a demanda.",
            "Isso é uma vantagem do modelo PaaS."
        ],
        realWorld: [
            "Aplicações web podem ser escaladas alterando o plano de serviço.",
            "O Azure App Service oferece vários planos com diferentes capacidades.",
            "Escolher o plano correto é essencial para desempenho e custo."
        ]
    },
    {
        id: 43,
        title: "Banco de dados SQL Server gerenciado como PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Um banco de dados do Microsoft SQL Server hospedado na nuvem e com atualizações de software gerenciadas pelo Azure é um exemplo de __________________. Complete a afirmação.",
        options: [
            { letter: "A", text: "software como serviço (SaaS).", correct: false },
            { letter: "B", text: "recuperação de desastre como serviço (DRaaS).", correct: false },
            { letter: "C", text: "plataforma como serviço (PaaS).", correct: true },
            { letter: "D", text: "infraestrutura como serviço (IaaS).", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. SaaS é software pronto para uso, não banco de dados gerenciado." },
            { correct: false, text: "Incorreta. DRaaS é focado em recuperação de desastres." },
            { correct: true, text: "Um banco de dados do Microsoft SQL Server hospedado na nuvem e com atualizações de software gerenciadas pelo Azure é um exemplo de plataforma como serviço (PaaS). Na solução PaaS, a infraestrutura subjacente é gerenciada pelo provedor de nuvem, permitindo que os usuários se concentrem no desenvolvimento e gerenciamento de aplicativos." },
            { correct: false, text: "Incorreta. IaaS fornece infraestrutura virtualizada, não banco de dados gerenciado." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "Azure SQL Database: serviço PaaS de banco de dados relacional da Microsoft.",
            "IaaS (Infrastructure as a Service): modelo que fornece infraestrutura virtualizada."
        ],
        generalExplanation: [
            "O <strong>Azure SQL Database</strong> é um serviço <strong>PaaS</strong>, pois o provedor gerencia a infraestrutura e as atualizações.",
            "O cliente foca no uso do banco e nos dados.",
            "Isso reduz a carga operacional e melhora a segurança."
        ],
        realWorld: [
            "Empresas usam Azure SQL Database para aplicações que exigem banco relacional gerenciado.",
            "A Microsoft cuida de patches, backups e alta disponibilidade.",
            "O cliente gerencia apenas esquemas, dados e permissões."
        ]
    },
    {
        id: 44,
        title: "Escalabilidade elástica na computação em nuvem",
        domain: "Conceitos de Nuvem",
        prompt: "A computação em nuvem fornece escalabilidade elástica. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação está correta: a nuvem oferece escalabilidade elástica." },
            { correct: true, text: "Sim, a afirmação está correta. A computação em nuvem oferece escalabilidade elástica, o que significa que os recursos de computação, armazenamento e rede podem ser aumentados ou reduzidos de acordo com as necessidades do usuário. Isso permite que as empresas se adaptem facilmente a mudanças na demanda do usuário ou do mercado, sem precisar investir em hardware e infraestrutura adicional para lidar com picos de tráfego." }
        ],
        glossary: [
            "Escalabilidade elástica: capacidade de ajustar recursos automaticamente conforme a demanda.",
            "Computação em nuvem: modelo de fornecimento de recursos de TI pela Internet.",
            "Picos de tráfego: aumentos temporários na demanda por recursos."
        ],
        generalExplanation: [
            "A <strong>escalabilidade elástica</strong> é uma das principais vantagens da nuvem, permitindo ajustar recursos conforme a demanda.",
            "Isso evita sobrecarga e desperdício de recursos.",
            "É essencial para aplicações com cargas variáveis."
        ],
        realWorld: [
            "E-commerce pode escalar durante Black Friday e reduzir após o pico.",
            "Aplicações serverless escalam automaticamente por design.",
            "Empresas pagam apenas pelo que usam, otimizando custos."
        ]
    },
    {
        id: 45,
        title: "Grupo de recursos dentro de outro grupo de recursos",
        domain: "Conceitos de Nuvem",
        prompt: "Você pode criar um grupo de recursos dentro de outro grupo de recursos. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Cada recurso pode existir em apenas um grupo de recursos. Não é possível aninhar grupos de recursos." },
            { correct: false, text: "Incorreta. Grupos de recursos não podem ser aninhados." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico que agrupa recursos relacionados no Azure.",
            "Recurso: instância de um serviço Azure (VM, banco de dados, etc.)."
        ],
        generalExplanation: [
            "No Azure, <strong>grupos de recursos não podem ser aninhados</strong>.",
            "Cada recurso pertence a <strong>apenas um grupo de recursos</strong>.",
            "Grupos de recursos facilitam o gerenciamento, mas não formam hierarquia."
        ],
        realWorld: [
            "Empresas organizam recursos em grupos por projeto, ambiente ou região.",
            "A exclusão de um grupo de recursos remove todos os recursos contidos nele.",
            "Não é possível criar subgrupos para organização hierárquica."
        ]
    },
    {
        id: 46,
        title: "Controle completo de segurança",
        domain: "Conceitos de Nuvem",
        prompt: "Fornece controle completo sobre a segurança. A frase acima está associada a qual alternativa?",
        options: [
            { letter: "A", text: "Nuvem Privada.", correct: true },
            { letter: "B", text: "Nuvem Híbrida.", correct: false },
            { letter: "C", text: "On-premises (No local).", correct: false },
            { letter: "D", text: "Nuvem Pública.", correct: false }
        ],
        explanations: [
            { correct: true, text: "Uma nuvem privada existe no local, então você tem controle total sobre a segurança." },
            { correct: false, text: "Incorreta. Nuvem híbrida compartilha controle com o provedor de nuvem pública." },
            { correct: false, text: "Incorreta. On-premises é um termo genérico, mas a nuvem privada é a que oferece controle total de segurança." },
            { correct: false, text: "Incorreta. Nuvem pública tem segurança gerenciada pelo provedor." }
        ],
        glossary: [
            "Nuvem privada: infraestrutura dedicada a uma organização, geralmente on-premises.",
            "Segurança: conjunto de medidas para proteger dados e recursos.",
            "On-premises: infraestrutura local."
        ],
        generalExplanation: [
            "A <strong>nuvem privada</strong> oferece <strong>controle total sobre a segurança</strong>, pois a infraestrutura é dedicada e gerenciada pela própria organização.",
            "Na nuvem pública, a segurança é compartilhada com o provedor.",
            "A escolha depende dos requisitos de segurança e conformidade."
        ],
        realWorld: [
            "Empresas com dados altamente sensíveis podem optar por nuvem privada.",
            "O controle total permite customizar políticas de segurança.",
            "Isso vem com maior custo e complexidade operacional."
        ]
    },
    {
        id: 47,
        title: "Grupo de recursos com recursos de várias regiões",
        domain: "Conceitos de Nuvem",
        prompt: "Um grupo de recursos pode conter recursos de várias regiões do Azure. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Recursos de várias regiões diferentes podem ser colocados em um grupo de recursos. O grupo de recursos contém apenas metadados sobre os recursos que ele contém." },
            { correct: false, text: "Incorreta. Um grupo de recursos pode conter recursos de várias regiões." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico que agrupa recursos relacionados no Azure.",
            "Região: área geográfica da nuvem com data centers interconectados.",
            "Metadados: informações sobre os recursos, não os recursos em si."
        ],
        generalExplanation: [
            "Um <strong>grupo de recursos</strong> pode conter recursos de <strong>várias regiões</strong>.",
            "O grupo armazena apenas <strong>metadados</strong> sobre os recursos.",
            "Isso oferece flexibilidade para organizar recursos globalmente."
        ],
        realWorld: [
            "Empresas podem agrupar recursos por projeto, independentemente da região.",
            "Isso facilita o gerenciamento e a aplicação de políticas.",
            "A localização dos recursos é independente do grupo de recursos."
        ]
    },
    {
        id: 48,
        title: "Azure Cosmos DB como SaaS",
        domain: "Conceitos de Nuvem",
        prompt: "O Azure Cosmos DB é um exemplo de software como serviço (SaaS). Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "A afirmação está incorreta. O Azure Cosmos DB é um exemplo de banco de dados como serviço (DBaaS), que é um subconjunto de plataforma como serviço (PaaS). Ele fornece uma plataforma gerenciada para armazenar e consultar dados distribuídos globalmente, mas ainda requer que o usuário crie e gerencie seus próprios aplicativos." },
            { correct: false, text: "Incorreta. Cosmos DB é PaaS, não SaaS." }
        ],
        glossary: [
            "Azure Cosmos DB: banco de dados NoSQL distribuído globalmente da Microsoft.",
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "SaaS (Software as a Service): software pronto para uso fornecido pela Internet.",
            "DBaaS (Database as a Service): banco de dados gerenciado como serviço."
        ],
        generalExplanation: [
            "O <strong>Azure Cosmos DB</strong> é classificado como <strong>PaaS</strong> (ou DBaaS, subconjunto de PaaS), não SaaS.",
            "SaaS refere-se a software pronto para uso, como Microsoft 365.",
            "Cosmos DB fornece uma plataforma para armazenar e consultar dados, mas o cliente gerencia a aplicação."
        ],
        realWorld: [
            "Aplicações globais usam Cosmos DB para armazenar dados distribuídos com baixa latência.",
            "O serviço oferece replicação automática e escalabilidade.",
            "Desenvolvedores não precisam gerenciar servidores de banco de dados."
        ]
    },
    {
        id: 49,
        title: "Provisionamento dinâmico de recursos",
        domain: "Conceitos de Nuvem",
        prompt: "Os recursos podem ser provisionados dinamicamente para atender às demandas em constante mudança. Associe a afirmação com a alternativa correta.",
        options: [
            { letter: "A", text: "Escalabilidade.", correct: true },
            { letter: "B", text: "Agilidade", correct: false },
            { letter: "C", text: "Distribuição geográfica.", correct: false }
        ],
        explanations: [
            { correct: true, text: "A afirmação está associada com a opção 'Escalabilidade'. A escalabilidade é uma das principais vantagens da computação em nuvem e permite que os recursos de computação, armazenamento e rede sejam facilmente provisionados ou reduzidos conforme necessário para atender às demandas em constante mudança." },
            { correct: false, text: "Incorreta. Agilidade refere-se à rapidez no desenvolvimento e implantação." },
            { correct: false, text: "Incorreta. Distribuição geográfica refere-se à implantação em múltiplas regiões." }
        ],
        glossary: [
            "Escalabilidade: capacidade de ajustar recursos conforme a demanda.",
            "Provisionamento dinâmico: alocação de recursos sob demanda.",
            "Computação em nuvem: modelo de fornecimento de recursos de TI pela Internet."
        ],
        generalExplanation: [
            "A <strong>escalabilidade</strong> permite provisionar recursos dinamicamente conforme a demanda.",
            "Isso é essencial para aplicações com cargas variáveis.",
            "A nuvem oferece essa capacidade de forma automatizada."
        ],
        realWorld: [
            "Auto-scaling adiciona ou remove instâncias conforme a carga.",
            "Aplicações serverless escalam automaticamente.",
            "Empresas pagam apenas pelos recursos utilizados."
        ]
    },
    {
        id: 50,
        title: "Custos de aumento de capacidade em nuvem vs data center local",
        domain: "Conceitos de Nuvem",
        prompt: "Os custos para aumentar a capacidade de computação em nuvem são menores do que os custos para aumentar a capacidade de computação de um data center local. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Sim, a afirmação está correta. Na computação em nuvem, a capacidade pode ser aumentada rapidamente e com mais flexibilidade do que em um datacenter local. Além disso, os provedores de nuvem geralmente oferecem modelos de preços pay-as-you-go, permitindo que as empresas paguem apenas pelo que usam, o que pode resultar em custos menores do que investir em infraestrutura própria." },
            { correct: false, text: "Incorreta. A afirmação está correta: a nuvem geralmente oferece custos menores para aumento de capacidade." }
        ],
        glossary: [
            "Pay-as-you-go: modelo de pagamento conforme o uso.",
            "Data center local: infraestrutura física própria da empresa.",
            "Computação em nuvem: modelo de fornecimento de recursos de TI pela Internet."
        ],
        generalExplanation: [
            "A <strong>nuvem</strong> permite aumentar capacidade rapidamente e pagar apenas pelo que usar, geralmente com custos menores do que expandir um data center local.",
            "Data centers locais exigem investimentos significativos em hardware e infraestrutura.",
            "A nuvem oferece flexibilidade e escalabilidade sem grandes investimentos iniciais."
        ],
        realWorld: [
            "Empresas podem escalar durante picos sem comprar hardware adicional.",
            "Após o pico, os recursos podem ser reduzidos, otimizando custos.",
            "Isso é especialmente vantajoso para cargas variáveis."
        ]
    },
    {
        id: 51,
        title: "VM do Azure em vários grupos de recursos",
        domain: "Conceitos de Nuvem",
        prompt: "Uma máquina virtual do Azure pode estar em vários grupos de recursos. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Uma VM pode estar em apenas um grupo de recursos." },
            { correct: true, text: "Cada recurso pode existir em apenas um grupo de recursos." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico que agrupa recursos relacionados no Azure.",
            "Máquina virtual: instância computacional virtualizada."
        ],
        generalExplanation: [
            "No Azure, cada <strong>recurso pertence a apenas um grupo de recursos</strong>.",
            "Uma VM não pode estar em múltiplos grupos simultaneamente.",
            "Isso garante organização e gerenciamento consistentes."
        ],
        realWorld: [
            "Recursos podem ser movidos entre grupos de recursos, mas não estar em vários ao mesmo tempo.",
            "A organização por grupos facilita controle de acesso e custos.",
            "A exclusão de um grupo remove todos os recursos contidos nele."
        ]
    },
    {
        id: 52,
        title: "Virtualização na computação em nuvem",
        domain: "Conceitos de Nuvem",
        prompt: "A computação em nuvem aproveita a virtualização para fornecer serviços a vários clientes simultaneamente. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A afirmação está correta: a virtualização é base da computação em nuvem." },
            { correct: true, text: "Sim, a afirmação está correta. A computação em nuvem é baseada em tecnologias de virtualização que permitem que recursos físicos, como servidores e dispositivos de armazenamento, sejam divididos e usados de forma eficiente por vários clientes simultaneamente." }
        ],
        glossary: [
            "Virtualização: tecnologia que permite criar recursos virtuais sobre hardware físico.",
            "Computação em nuvem: modelo de fornecimento de recursos de TI pela Internet.",
            "Multi-tenancy: compartilhamento de recursos entre múltiplos clientes."
        ],
        generalExplanation: [
            "A <strong>virtualização</strong> permite que múltiplos clientes compartilhem recursos físicos de forma isolada e eficiente.",
            "Isso é a base do modelo de nuvem pública.",
            "Garante escalabilidade, isolamento e eficiência."
        ],
        realWorld: [
            "Hipervisores como Hyper-V permitem executar múltiplas VMs em um único servidor físico.",
            "Provedores de nuvem usam virtualização para oferecer serviços a milhares de clientes.",
            "Isso reduz custos e aumenta a eficiência energética."
        ]
    },
    {
        id: 53,
        title: "SQL Server em VM como PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "O Microsoft SQL Server 2019 instalado em uma máquina virtual do Azure é um exemplo de plataforma como serviço (PaaS). Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Não, a afirmação está incorreta. O Microsoft SQL Server 2019 instalado em uma máquina virtual do Azure é um exemplo de infraestrutura como serviço (IaaS). Para ser considerado uma solução de plataforma como serviço (PaaS), o Microsoft SQL Server teria que ser implantado como um serviço gerenciado do SQL do Azure." },
            { correct: false, text: "Incorreta. SQL Server em VM é IaaS, não PaaS." }
        ],
        glossary: [
            "IaaS (Infrastructure as a Service): modelo que fornece infraestrutura virtualizada.",
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "Máquina virtual: instância computacional virtualizada.",
            "Azure SQL Database: serviço PaaS de banco de dados relacional."
        ],
        generalExplanation: [
            "O <strong>SQL Server em VM</strong> é <strong>IaaS</strong>, pois o cliente gerencia o sistema operacional e o software.",
            "O <strong>Azure SQL Database</strong> é <strong>PaaS</strong>, pois o provedor gerencia a plataforma.",
            "A escolha depende do nível de controle desejado."
        ],
        realWorld: [
            "Empresas que precisam de controle total do SQL Server usam VMs (IaaS).",
            "Para menor carga operacional, usam Azure SQL Database (PaaS).",
            "A escolha impacta custos e complexidade."
        ]
    },
    {
        id: 54,
        title: "Escalonamento automático em PaaS (repetição)",
        domain: "Conceitos de Nuvem",
        prompt: "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure pode ser configurada para dimensionar automaticamente o número de instâncias com base na demanda. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Uma solução de PaaS que hospeda aplicativos Web no Azure fornece a capacidade de escalar a plataforma automaticamente. Isso é conhecido como escalonamento automático. Nos bastidores, os aplicativos da web são hospedados em máquinas virtuais que executam o IIS. O escalonamento automático significa adicionar mais máquinas virtuais com balanceamento de carga para hospedar os aplicativos web." },
            { correct: false, text: "Incorreta. A afirmação está correta: PaaS permite escalonamento automático." }
        ],
        glossary: [
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "Escalonamento automático: ajuste automático de recursos conforme a demanda.",
            "Balanceamento de carga: distribuição de tráfego entre múltiplas instâncias."
        ],
        generalExplanation: [
            "No <strong>PaaS</strong>, o <strong>escalonamento automático</strong> é uma funcionalidade nativa.",
            "Permite ajustar recursos conforme a demanda sem intervenção manual.",
            "Isso melhora desempenho e otimiza custos."
        ],
        realWorld: [
            "O Azure App Service permite configurar auto-scaling baseado em métricas.",
            "Aplicações web podem escalar automaticamente durante picos.",
            "Reduz a necessidade de intervenção manual."
        ]
    },
    {
        id: 55,
        title: "Recurso de IaaS no Azure",
        domain: "Conceitos de Nuvem",
        prompt: "Você planeja provisionar recursos de infraestrutura como serviço (IaaS) no Azure. Qual recurso é um exemplo de IaaS?",
        options: [
            { letter: "A", text: "Um aplicativo lógico do Azure.", correct: false },
            { letter: "B", text: "Um aplicativo Web do Azure.", correct: false },
            { letter: "C", text: "Uma máquina virtual do Azure.", correct: true },
            { letter: "D", text: "Um banco de dados SQL do Azure.", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Aplicativo lógico é PaaS." },
            { correct: false, text: "Incorreta. Aplicativo Web é PaaS." },
            { correct: true, text: "Uma máquina virtual do Azure é um exemplo de Infraestrutura como Serviço (IaaS). O aplicativo Web do Azure, o aplicativo lógico do Azure e o banco de dados SQL do Azure são exemplos de Plataforma como Serviço (PaaS)." },
            { correct: false, text: "Incorreta. Banco de dados SQL é PaaS." }
        ],
        glossary: [
            "IaaS (Infrastructure as a Service): modelo que fornece infraestrutura virtualizada.",
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "Máquina virtual: instância computacional virtualizada."
        ],
        generalExplanation: [
            "A <strong>máquina virtual</strong> é o exemplo clássico de <strong>IaaS</strong>, pois o cliente gerencia o sistema operacional e o software.",
            "App Service, Logic Apps e SQL Database são <strong>PaaS</strong>.",
            "A escolha depende do nível de controle desejado."
        ],
        realWorld: [
            "Empresas que precisam de controle total usam VMs (IaaS).",
            "Para menor carga operacional, usam serviços PaaS.",
            "A escolha impacta custos e complexidade."
        ]
    },
    {
        id: 56,
        title: "Salários de pessoal técnico como OpEx",
        domain: "Conceitos de Nuvem",
        prompt: "Os salários mensais do pessoal técnico são um exemplo de custos de despesas operacionais (OpEx). Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "OpEx são custos contínuos (custos de operações), como salários de funcionários." },
            { correct: false, text: "Incorreta. Salários são OpEx, não CapEx." }
        ],
        glossary: [
            "OpEx: despesas operacionais, gastos contínuos.",
            "CapEx: despesas de capital, investimentos em ativos de longo prazo.",
            "Salários: remuneração contínua de funcionários."
        ],
        generalExplanation: [
            "Os <strong>salários mensais</strong> são gastos recorrentes, classificados como <strong>OpEx</strong>.",
            "CapEx envolve investimentos em ativos de longo prazo.",
            "A distinção é importante para gestão financeira."
        ],
        realWorld: [
            "Empresas classificam salários como despesas operacionais.",
            "Isso impacta o fluxo de caixa mensal.",
            "A nuvem também converte custos de TI em OpEx."
        ]
    },
    {
        id: 57,
        title: "Microsoft Intune como SaaS",
        domain: "Conceitos de Nuvem",
        prompt: "O Microsoft Intune é um exemplo de software como serviço (SaaS). Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Sim, a afirmação está correta. O Microsoft Intune é um serviço em nuvem fornecido pela Microsoft que permite gerenciar dispositivos e aplicativos móveis de forma centralizada. Ele é um exemplo de software como serviço (SaaS) porque é uma solução de software entregue e gerenciada como um serviço em nuvem, sem necessidade de instalação ou gerenciamento de infraestrutura por parte do usuário." },
            { correct: false, text: "Incorreta. Intune é SaaS, pois é software gerenciado entregue como serviço." }
        ],
        glossary: [
            "SaaS (Software as a Service): software pronto para uso fornecido pela Internet.",
            "Microsoft Intune: serviço de gerenciamento de dispositivos e aplicativos móveis.",
            "Gerenciamento centralizado: controle de dispositivos e aplicativos a partir de um único ponto."
        ],
        generalExplanation: [
            "O <strong>Microsoft Intune</strong> é um serviço <strong>SaaS</strong>, pois fornece software gerenciado pela Microsoft via Internet.",
            "O cliente não precisa instalar ou gerenciar infraestrutura.",
            "Isso reduz a carga operacional e melhora a segurança."
        ],
        realWorld: [
            "Empresas usam Intune para gerenciar dispositivos corporativos e políticas de segurança.",
            "A Microsoft gerencia a infraestrutura e as atualizações.",
            "O cliente foca na configuração de políticas e usuários."
        ]
    },
    {
        id: 58,
        title: "Servidor DNS em VM como PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Um servidor DNS executado em uma máquina virtual do Azure é um exemplo de plataforma como serviço (PaaS). Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Não, a afirmação está incorreta. Um servidor DNS em uma máquina virtual do Azure é um exemplo de infraestrutura como serviço (IaaS), pois é necessário configurar e gerenciar o sistema operacional e a infraestrutura subjacente da máquina virtual, incluindo a instalação e configuração do software do servidor DNS." },
            { correct: false, text: "Incorreta. Servidor DNS em VM é IaaS, não PaaS." }
        ],
        glossary: [
            "IaaS (Infrastructure as a Service): modelo que fornece infraestrutura virtualizada.",
            "PaaS (Platform as a Service): modelo de nuvem que fornece plataforma completa para desenvolvimento e implantação.",
            "DNS (Domain Name System): sistema que traduz nomes de domínio em endereços IP."
        ],
        generalExplanation: [
            "O <strong>servidor DNS em VM</strong> é <strong>IaaS</strong>, pois o cliente gerencia o sistema operacional e o software.",
            "Um serviço DNS gerenciado (como Azure DNS) seria <strong>PaaS</strong>.",
            "A escolha depende do nível de controle desejado."
        ],
        realWorld: [
            "Empresas que precisam de controle total do DNS usam VMs (IaaS).",
            "Para menor carga operacional, usam Azure DNS (PaaS).",
            "A escolha impacta custos e complexidade."
        ]
    },
    {
        id: 59,
        title: "Servidores físicos próprios na nuvem pública (repetição)",
        domain: "Conceitos de Nuvem",
        prompt: "Uma empresa pode estender uma nuvem privada adicionando seus próprios servidores físicos à nuvem pública. Responda SIM, caso a afirmação esteja correta, e NÃO caso for incorreta.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Não é possível adicionar servidores físicos próprios à nuvem pública." },
            { correct: true, text: "Você não pode adicionar servidores físicos à nuvem pública. Você só pode implantar servidores virtuais na nuvem pública. Você pode estender uma nuvem privada implantando servidores virtuais em uma nuvem pública. Isso criaria uma nuvem híbrida." }
        ],
        glossary: [
            "Nuvem privada: infraestrutura dedicada a uma organização.",
            "Nuvem pública: infraestrutura compartilhada oferecida por provedores.",
            "Nuvem híbrida: combinação de nuvem privada e pública."
        ],
        generalExplanation: [
            "A <strong>nuvem pública</strong> não permite a instalação de <strong>servidores físicos próprios</strong>.",
            "É possível estender uma nuvem privada implantando <strong>servidores virtuais</strong> na nuvem pública, criando uma <strong>nuvem híbrida</strong>.",
            "A integração é feita por VPN ou links dedicados."
        ],
        realWorld: [
            "Empresas usam nuvem híbrida para integrar ambientes locais e em nuvem.",
            "Servidores virtuais na nuvem pública complementam a infraestrutura local.",
            "Isso permite escalabilidade sem abandonar investimentos existentes."
        ]
    }
]