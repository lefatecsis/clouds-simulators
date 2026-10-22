const originalQuestions = [
    {
        id: 1,
        title: "Atualizações de software no SaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Com SaaS (software como serviço), você deve aplicar atualizações de software.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. No modelo SaaS, o provedor de nuvem é responsável por aplicar atualizações de software, patches e manutenção da aplicação. O cliente não precisa se preocupar com isso." },
            { correct: true, text: "Correta. No modelo SaaS, o provedor de serviços em nuvem gerencia toda a infraestrutura subjacente, incluindo aplicação, sistema operacional, servidores e armazenamento. O cliente apenas consome o software, sem responsabilidade sobre atualizações." }
        ],
        glossary: [
            "SaaS (Software as a Service): modelo de computação em nuvem em que o provedor hospeda e gerencia o software, entregando-o aos usuários via internet.",
            "Atualização de software: processo de aplicação de patches, correções e novas versões de um software para melhorar segurança, desempenho ou funcionalidades.",
            "Provedor de nuvem: empresa que oferece serviços de computação em nuvem, como Microsoft Azure, AWS ou Google Cloud.",
            "Cliente: organização ou usuário que consome os serviços de nuvem."
        ],
        generalExplanation: [
            "No modelo <strong>SaaS</strong>, o provedor de nuvem é responsável por <strong>toda a gestão da aplicação</strong>, incluindo atualizações de software, patches de segurança e manutenção.",
            "O cliente <strong>não precisa aplicar atualizações</strong> — apenas utiliza o software via internet.",
            "Exemplos de SaaS: Microsoft 365, Salesforce, Dropbox.",
            "Portanto, a afirmação de que o cliente deve aplicar atualizações de software no SaaS é <strong>falsa</strong>."
        ],
        realWorld: [
            "Uma empresa que assina o <strong>Microsoft 365</strong> não precisa se preocupar com atualizações do Word, Excel ou Outlook — a Microsoft aplica todas as atualizações automaticamente.",
            "Isso reduz o <strong>esforço administrativo</strong> e garante que os usuários sempre tenham a versão mais recente e segura do software.",
            "Em ambientes corporativos, o SaaS permite que as equipes de TI foquem em <strong>atividades estratégicas</strong> em vez de manutenção de software."
        ]
    },
    {
        id: 2,
        title: "Azure AD e autenticação para Azure e Microsoft 365",
        domain: "Identidade e Acesso",
        prompt: "O Azure AD fornece serviços de autenticação para Azure e Microsoft 365.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure AD (Azure Active Directory) é o serviço de identidade da Microsoft que fornece autenticação e autorização para diversos serviços, incluindo Azure e Microsoft 365." },
            { correct: true, text: "Correta. O Azure AD é um serviço de identidade baseado em nuvem que fornece autenticação e autorização para recursos do Azure, Microsoft 365, Dynamics 365 e milhares de aplicativos SaaS de terceiros." }
        ],
        glossary: [
            "Azure AD (Azure Active Directory): serviço de identidade e acesso baseado em nuvem da Microsoft que fornece autenticação e autorização para recursos e aplicativos.",
            "Autenticação: processo de verificar a identidade de um usuário ou serviço.",
            "Autorização: processo de determinar quais recursos um usuário autenticado pode acessar.",
            "Microsoft 365: suíte de serviços de produtividade baseada em nuvem da Microsoft, incluindo Outlook, Word, Excel, Teams e outros.",
            "SSO (Single Sign-On): capacidade de usar as mesmas credenciais para acessar múltiplos aplicativos e serviços."
        ],
        generalExplanation: [
            "O <strong>Azure AD</strong> é o serviço central de identidade da Microsoft, responsável por <strong>autenticar e autorizar</strong> usuários e serviços.",
            "Ele fornece <strong>SSO (logon único)</strong> para Azure, Microsoft 365, Dynamics 365 e milhares de aplicativos SaaS.",
            "Isso simplifica o gerenciamento de identidades e melhora a segurança, pois os usuários usam <strong>um único conjunto de credenciais</strong>.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Em uma empresa que usa Azure e Microsoft 365, os funcionários fazem login <strong>uma única vez</strong> com suas credenciais corporativas no Azure AD e acessam Outlook, Teams, o portal do Azure e outros serviços.",
            "Isso melhora a <strong>experiência do usuário</strong> e reduz a carga de suporte técnico relacionada a senhas.",
            "Equipes de TI podem aplicar <strong>políticas de acesso condicional</strong> e <strong>MFA</strong> centralizadas no Azure AD."
        ]
    },
    {
        id: 3,
        title: "SSO no Azure AD",
        domain: "Identidade e Acesso",
        prompt: "_______________ permite(m) que os usuários autentiquem-se em vários aplicativos usando SSO (logon único).",
        options: [
            { letter: "A", text: "Microsoft Defender para Nuvem", correct: false },
            { letter: "B", text: "Grupos de segurança de aplicativo no Azure", correct: false },
            { letter: "C", text: "Azure AD", correct: true },
            { letter: "D", text: "Azure Key Vault", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Microsoft Defender para Nuvem é um serviço de gerenciamento de postura de segurança e proteção contra ameaças, não relacionado a SSO." },
            { correct: false, text: "Incorreta. Grupos de segurança de aplicativo são usados para agrupar VMs e controlar tráfego de rede, não para autenticação SSO." },
            { correct: true, text: "Correta. O Azure AD (Azure Active Directory) fornece SSO (logon único), permitindo que os usuários se autentiquem uma vez e acessem vários aplicativos sem precisar inserir credenciais novamente." },
            { correct: false, text: "Incorreta. O Azure Key Vault é usado para armazenar e gerenciar segredos, chaves e certificados, não para SSO." }
        ],
        glossary: [
            "Azure AD: serviço de identidade da Microsoft que fornece autenticação, autorização e SSO.",
            "SSO (Single Sign-On): mecanismo que permite ao usuário fazer login uma vez e acessar múltiplos aplicativos.",
            "Microsoft Defender para Nuvem: serviço de segurança que fornece proteção contra ameaças e gerenciamento de postura de segurança.",
            "Azure Key Vault: serviço para armazenamento seguro de segredos, chaves e certificados.",
            "Grupos de segurança de aplicativo: recurso do Azure para agrupar máquinas virtuais e simplificar regras de segurança de rede."
        ],
        generalExplanation: [
            "O <strong>Azure AD</strong> é o serviço de identidade que implementa <strong>SSO</strong>, permitindo que os usuários se autentiquem uma única vez e acessem vários aplicativos.",
            "Isso melhora a <strong>experiência do usuário</strong> e a <strong>segurança</strong>, pois reduz o número de senhas que os usuários precisam gerenciar.",
            "Os outros serviços mencionados não oferecem SSO: Defender para Nuvem foca em segurança, Key Vault em segredos e grupos de segurança de aplicativo em controle de tráfego de rede."
        ],
        realWorld: [
            "Um funcionário faz login no <strong>Azure AD</strong> e acessa automaticamente Outlook, Teams, SharePoint e o portal do Azure sem precisar digitar a senha novamente.",
            "Isso é possível graças ao <strong>SSO</strong> fornecido pelo Azure AD, que integra diversos aplicativos e serviços.",
            "Empresas usam SSO para <strong>aumentar a produtividade</strong> e <strong>reduzir riscos de segurança</strong> associados a senhas fracas ou reutilizadas."
        ]
    },
    {
        id: 4,
        title: "Métodos válidos de MFA no Azure",
        domain: "Identidade e Acesso",
        prompt: "Dois métodos válidos para MFA (Autenticação Multifator do Azure) são identificação de imagem e um número de passaporte.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Identificação de imagem e número de passaporte não são métodos válidos de MFA no Azure." },
            { correct: true, text: "Correta. Os métodos válidos de MFA no Azure incluem: senha, chamada telefônica, SMS, notificação por aplicativo, código de verificação por aplicativo, tokens OATH e chaves de segurança FIDO2. Identificação de imagem e número de passaporte não são métodos reconhecidos." }
        ],
        glossary: [
            "MFA (Autenticação Multifator): método de segurança que exige duas ou mais formas de verificação para autenticar um usuário.",
            "Azure AD MFA: serviço de autenticação multifator da Microsoft que oferece diversos métodos de verificação.",
            "OATH: padrão aberto para geração de códigos de verificação baseados em tempo (TOTP) ou contadores (HOTP).",
            "FIDO2: padrão de autenticação sem senha que usa chaves de segurança físicas.",
            "Notificação por aplicativo: método em que o usuário aprova ou nega uma solicitação de login no aplicativo Microsoft Authenticator."
        ],
        generalExplanation: [
            "O <strong>MFA do Azure</strong> suporta métodos como: <strong>senha + chamada telefônica</strong>, <strong>senha + SMS</strong>, <strong>senha + notificação no aplicativo</strong>, <strong>senha + código do aplicativo</strong>, <strong>tokens OATH</strong> e <strong>chaves FIDO2</strong>.",
            "<strong>Identificação de imagem</strong> e <strong>número de passaporte</strong> <strong>não são métodos válidos</strong> de MFA no Azure.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Em uma empresa que usa Azure AD, os funcionários configuram o <strong>Microsoft Authenticator</strong> para receber notificações de aprovação ao fazer login.",
            "Isso adiciona uma <strong>camada extra de segurança</strong> além da senha, protegendo contra acessos não autorizados.",
            "Métodos como identificação de imagem ou passaporte não são reconhecidos pelo Azure AD e não podem ser configurados."
        ]
    },
    {
        id: 5,
        title: "Grupos do Azure AD e associação dinâmica",
        domain: "Identidade e Acesso",
        prompt: "Os grupos do Azure AD são suporte a regras de associação dinâmica.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Os grupos do Azure AD suportam associação dinâmica, permitindo que membros sejam adicionados ou removidos automaticamente com base em regras." },
            { correct: true, text: "Correta. Os grupos do Azure AD podem ter associação dinâmica, onde regras baseadas em atributos de usuário ou dispositivo determinam automaticamente quem pertence ao grupo. Isso é útil para gerenciar acesso em larga escala." }
        ],
        glossary: [
            "Azure AD: serviço de identidade da Microsoft que gerencia usuários, grupos e permissões.",
            "Grupo dinâmico: grupo cuja associação é determinada automaticamente por regras baseadas em atributos.",
            "Regra de associação: expressão lógica que define quais usuários ou dispositivos pertencem a um grupo dinâmico.",
            "Atributo de usuário: característica do usuário, como departamento, cargo ou localização, usada em regras de associação."
        ],
        generalExplanation: [
            "Os <strong>grupos do Azure AD</strong> podem ser configurados com <strong>associação dinâmica</strong>, usando regras baseadas em atributos.",
            "Isso permite que a <strong>manutenção de membros</strong> seja automática, reduzindo o esforço administrativo.",
            "Exemplo: um grupo dinâmico pode incluir automaticamente todos os usuários do departamento \"Vendas\".",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Uma empresa cria um grupo dinâmico no Azure AD com a regra <code>user.department -eq \"Vendas\"</code>.",
            "Todos os usuários do departamento de Vendas são automaticamente adicionados ao grupo, e novos funcionários são incluídos assim que seu atributo de departamento é definido.",
            "Isso simplifica o <strong>gerenciamento de acesso</strong> a recursos e aplicativos, garantindo que as permissões estejam sempre atualizadas."
        ]
    },
    {
        id: 6,
        title: "Identidades híbridas no Azure",
        domain: "Identidade e Acesso",
        prompt: "As identidades armazenadas no Azure AD, nos serviços de nuvem de terceiros e no Active Directory local podem ser usadas para acessar recursos do Azure.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Azure AD pode ser integrado com o Active Directory local e com provedores de identidade de terceiros, permitindo que identidades de diferentes fontes acessem recursos do Azure por meio de federação e sincronização." },
            { correct: false, text: "Incorreta. O Azure AD suporta identidades híbridas e federadas, permitindo acesso a recursos do Azure usando credenciais de diferentes fontes." }
        ],
        glossary: [
            "Azure AD: serviço de identidade da Microsoft que gerencia autenticação e autorização.",
            "Active Directory local: serviço de diretório da Microsoft executado em servidores locais para gerenciar identidades em uma rede corporativa.",
            "Identidade híbrida: identidade que existe tanto no ambiente local quanto na nuvem, sincronizada entre eles.",
            "Federação: mecanismo que permite que identidades de um provedor sejam confiadas por outro provedor.",
            "Azure AD Connect: ferramenta que sincroniza identidades do Active Directory local com o Azure AD."
        ],
        generalExplanation: [
            "O <strong>Azure AD</strong> suporta <strong>identidades híbridas</strong>, permitindo que usuários do Active Directory local acessem recursos do Azure.",
            "Também é possível configurar <strong>federação</strong> com provedores de identidade de terceiros, como Google ou Facebook.",
            "Isso permite que as organizações aproveitem <strong>investimentos existentes em identidade</strong> e mantenham uma experiência de login consistente.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Uma empresa usa <strong>Azure AD Connect</strong> para sincronizar usuários do Active Directory local com o Azure AD.",
            "Esses usuários podem acessar o portal do Azure, Microsoft 365 e aplicativos SaaS usando suas credenciais corporativas.",
            "Isso simplifica o gerenciamento de identidades e melhora a segurança, pois as políticas de acesso são aplicadas de forma centralizada."
        ]
    },
    {
        id: 7,
        title: "Definição de autenticação",
        domain: "Identidade e Acesso",
        prompt: "_______________ é o processo de verificação das credenciais de um usuário.",
        options: [
            { letter: "A", text: "Ticketing", correct: false },
            { letter: "B", text: "Autorização", correct: false },
            { letter: "C", text: "Autenticação", correct: true },
            { letter: "D", text: "Federação", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Ticketing é um termo genérico relacionado a sistemas de tickets, não a verificação de credenciais." },
            { correct: false, text: "Incorreta. Autorização é o processo de determinar quais recursos um usuário autenticado pode acessar." },
            { correct: true, text: "Correta. Autenticação é o processo de verificar a identidade de um usuário ou serviço, geralmente por meio de credenciais como nome de usuário e senha." },
            { correct: false, text: "Incorreta. Federação é um mecanismo que permite que identidades de um provedor sejam confiadas por outro." }
        ],
        glossary: [
            "Autenticação: processo de verificar a identidade de um usuário ou serviço.",
            "Autorização: processo de determinar quais recursos um usuário autenticado pode acessar.",
            "Credenciais: informações usadas para provar identidade, como nome de usuário e senha.",
            "Federação: mecanismo que permite que identidades de um provedor sejam confiadas por outro.",
            "Ticketing: sistema de gerenciamento de solicitações ou incidentes."
        ],
        generalExplanation: [
            "A <strong>autenticação</strong> é o processo de <strong>verificar a identidade</strong> de um usuário ou serviço.",
            "Ela responde à pergunta <strong>\"quem é você?\"</strong>.",
            "Após a autenticação, a <strong>autorização</strong> determina o que o usuário pode fazer.",
            "Portanto, a resposta correta é <strong>Autenticação</strong>."
        ],
        realWorld: [
            "Quando um usuário faz login no portal do Azure com e-mail e senha, o Azure AD realiza a <strong>autenticação</strong>.",
            "Em seguida, verifica se o usuário tem permissão para acessar determinados recursos, o que é a <strong>autorização</strong>.",
            "Esses dois processos trabalham juntos para garantir a segurança dos recursos."
        ]
    },
    {
        id: 8,
        title: "MFA para contas administrativas e não administrativas",
        domain: "Identidade e Acesso",
        prompt: "A MFA (Autenticação Multifator do Azure) pode ser exigida para contas de usuário administrativas e não administrativas.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Azure AD permite configurar políticas de MFA para qualquer conta de usuário, independentemente de ser administrativa ou não. É possível aplicar MFA globalmente ou para grupos específicos." },
            { correct: false, text: "Incorreta. A MFA não é restrita a contas administrativas; pode ser aplicada a qualquer conta de usuário." }
        ],
        glossary: [
            "MFA: autenticação multifator, que exige duas ou mais formas de verificação.",
            "Azure AD: serviço de identidade da Microsoft que gerencia autenticação e autorização.",
            "Conta administrativa: conta com permissões elevadas para gerenciar recursos e configurações.",
            "Conta não administrativa: conta de usuário comum, sem permissões administrativas.",
            "Política de acesso condicional: conjunto de regras que determina quando e como a MFA deve ser aplicada."
        ],
        generalExplanation: [
            "O <strong>Azure AD</strong> permite configurar <strong>MFA para qualquer conta de usuário</strong>, seja administrativa ou não.",
            "Isso é importante para <strong>proteger todos os acessos</strong>, não apenas os privilegiados.",
            "Políticas de <strong>acesso condicional</strong> podem ser usadas para exigir MFA em situações específicas, como acessos de locais incomuns.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Uma empresa configura uma política de acesso condicional no Azure AD que exige MFA para todos os usuários, independentemente do cargo.",
            "Isso garante que mesmo contas de usuários comuns estejam protegidas contra acessos não autorizados.",
            "Contas administrativas podem ter políticas ainda mais rigorosas, como MFA obrigatória em todos os logins."
        ]
    },
    {
        id: 9,
        title: "SaaS e aplicação de atualizações",
        domain: "Conceitos de Nuvem",
        prompt: "Com software como serviço (SaaS), você deve aplicar atualizações de software.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. No modelo SaaS, o provedor de nuvem é responsável por aplicar atualizações de software." },
            { correct: true, text: "Correta. No SaaS, o provedor gerencia toda a aplicação, incluindo atualizações, patches e manutenção. O cliente não precisa aplicar atualizações." }
        ],
        glossary: [
            "SaaS: modelo de computação em nuvem em que o provedor hospeda e gerencia o software.",
            "Atualização de software: processo de aplicação de patches e novas versões.",
            "Provedor de nuvem: empresa que oferece serviços de computação em nuvem.",
            "Cliente: organização ou usuário que consome os serviços de nuvem."
        ],
        generalExplanation: [
            "No <strong>SaaS</strong>, o provedor de nuvem é responsável por <strong>toda a gestão da aplicação</strong>, incluindo atualizações.",
            "O cliente <strong>não precisa aplicar atualizações</strong> — apenas utiliza o software.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Usuários do <strong>Microsoft 365</strong> não precisam se preocupar com atualizações do Outlook ou Word — a Microsoft aplica automaticamente.",
            "Isso reduz o esforço administrativo e garante que os usuários tenham sempre a versão mais recente."
        ]
    },
    {
        id: 10,
        title: "Categorias de computação em nuvem",
        domain: "Conceitos de Nuvem",
        prompt: "Qual das opções a seguir não é uma categoria de computação em nuvem?",
        options: [
            { letter: "A", text: "SaaS (Software como Serviço)", correct: false },
            { letter: "B", text: "IaaS (Infraestrutura como Serviço)", correct: false },
            { letter: "C", text: "PaaS (Plataforma como Serviço)", correct: false },
            { letter: "D", text: "NaaS (Rede como Serviço)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. SaaS é uma categoria válida de computação em nuvem." },
            { correct: false, text: "Incorreta. IaaS é uma categoria válida de computação em nuvem." },
            { correct: false, text: "Incorreta. PaaS é uma categoria válida de computação em nuvem." },
            { correct: true, text: "Correta. NaaS (Rede como Serviço) não é considerada uma categoria principal de computação em nuvem. As categorias principais são IaaS, PaaS e SaaS." }
        ],
        glossary: [
            "IaaS: Infraestrutura como Serviço, modelo em que o provedor fornece recursos de computação, rede e armazenamento.",
            "PaaS: Plataforma como Serviço, modelo em que o provedor oferece uma plataforma para desenvolvimento e implantação de aplicativos.",
            "SaaS: Software como Serviço, modelo em que o provedor hospeda e gerencia o software.",
            "NaaS: Rede como Serviço, termo genérico que não é considerado uma categoria principal de computação em nuvem."
        ],
        generalExplanation: [
            "As <strong>categorias principais</strong> de computação em nuvem são <strong>IaaS</strong>, <strong>PaaS</strong> e <strong>SaaS</strong>.",
            "<strong>NaaS</strong> não é uma categoria padrão de modelo de serviço de nuvem.",
            "Portanto, a resposta correta é <strong>NaaS</strong>."
        ],
        realWorld: [
            "Ao escolher um modelo de nuvem, as empresas geralmente optam por IaaS, PaaS ou SaaS, dependendo do nível de controle e gerenciamento desejado.",
            "NaaS não é uma opção oferecida como categoria principal pelos provedores de nuvem."
        ]
    },
    {
        id: 11,
        title: "Autorização no Azure",
        domain: "Identidade e Acesso",
        prompt: "O processo de identificar o nível de acesso de um usuário ou serviço.",
        options: [
            { letter: "A", text: "Autorização", correct: true },
            { letter: "B", text: "MFA (autenticação multifator)", correct: false },
            { letter: "C", text: "SSO (logon único)", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Autorização é o processo de determinar quais recursos um usuário ou serviço autenticado pode acessar." },
            { correct: false, text: "Incorreta. MFA é um método de autenticação que exige múltiplas formas de verificação." },
            { correct: false, text: "Incorreta. SSO é um mecanismo que permite ao usuário fazer login uma vez e acessar múltiplos aplicativos." }
        ],
        glossary: [
            "Autorização: processo de determinar quais recursos um usuário autenticado pode acessar.",
            "Autenticação: processo de verificar a identidade de um usuário ou serviço.",
            "MFA: autenticação multifator, que exige duas ou mais formas de verificação.",
            "SSO: logon único, que permite ao usuário fazer login uma vez e acessar múltiplos aplicativos."
        ],
        generalExplanation: [
            "A <strong>autorização</strong> é o processo de <strong>determinar o nível de acesso</strong> de um usuário ou serviço.",
            "Ela responde à pergunta <strong>\"o que você pode fazer?\"</strong>.",
            "Após a autenticação, a autorização define quais recursos o usuário pode acessar.",
            "Portanto, a resposta correta é <strong>Autorização</strong>."
        ],
        realWorld: [
            "Um usuário faz login no Azure (autenticação) e, em seguida, o Azure verifica suas permissões (autorização) para determinar se ele pode criar ou excluir recursos.",
            "Esse processo garante que apenas usuários autorizados acessem recursos específicos."
        ]
    },
    {
        id: 12,
        title: "Tags em grupos de recursos do Azure",
        domain: "Governança e Conformidade",
        prompt: "Se você atribuir uma marca a um grupo de recursos, todos os recursos do Azure nesse grupo serão atribuídos à mesma marca.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. As tags aplicadas a um grupo de recursos não são herdadas automaticamente pelos recursos dentro dele. As tags devem ser aplicadas individualmente a cada recurso." },
            { correct: false, text: "Incorreta. As tags não são herdadas automaticamente de grupos de recursos para recursos individuais." }
        ],
        glossary: [
            "Tag (marca): par chave-valor usado para organizar e categorizar recursos do Azure.",
            "Grupo de recursos: contêiner lógico que agrupa recursos relacionados do Azure.",
            "Herança de tags: propagação automática de tags de um escopo pai para recursos filhos.",
            "Governança: conjunto de políticas e práticas para gerenciar recursos de forma eficiente."
        ],
        generalExplanation: [
            "As <strong>tags</strong> aplicadas a um <strong>grupo de recursos</strong> <strong>não são herdadas automaticamente</strong> pelos recursos dentro dele.",
            "Para que todos os recursos tenham a mesma tag, ela deve ser aplicada <strong>individualmente</strong> a cada recurso.",
            "Isso é importante para <strong>governança e controle de custos</strong>.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Uma empresa aplica a tag <code>Ambiente: Produção</code> a um grupo de recursos, mas os recursos dentro dele não recebem essa tag automaticamente.",
            "Para garantir que todos os recursos tenham a tag, é necessário aplicar a tag individualmente ou usar políticas do Azure para impor a herança.",
            "Isso ajuda a manter a <strong>organização e o controle de custos</strong>."
        ]
    },
    {
        id: 13,
        title: "Alta disponibilidade no SaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Em um modelo de software como serviço (SaaS), o consumidor deve planejar a alta disponibilidade da solução.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. No modelo SaaS, o provedor de nuvem é responsável por garantir a alta disponibilidade da solução. O consumidor não precisa planejar a alta disponibilidade da infraestrutura subjacente." },
            { correct: false, text: "Incorreta. No SaaS, a responsabilidade pela alta disponibilidade é do provedor, não do consumidor." }
        ],
        glossary: [
            "SaaS: modelo de computação em nuvem em que o provedor hospeda e gerencia o software.",
            "Alta disponibilidade: capacidade de um sistema permanecer operacional e acessível por um período mínimo de tempo.",
            "Provedor de nuvem: empresa que oferece serviços de computação em nuvem.",
            "Consumidor: organização ou usuário que consome os serviços de nuvem."
        ],
        generalExplanation: [
            "No <strong>SaaS</strong>, o <strong>provedor de nuvem</strong> é responsável por garantir a <strong>alta disponibilidade</strong> da solução.",
            "O consumidor <strong>não precisa planejar</strong> a alta disponibilidade da infraestrutura.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Usuários do <strong>Microsoft 365</strong> não precisam se preocupar com a disponibilidade dos servidores — a Microsoft garante SLA de disponibilidade.",
            "Isso permite que as empresas foquem em suas atividades principais, sem se preocupar com a infraestrutura."
        ]
    },
    {
        id: 14,
        title: "Responsabilidades do provedor no IaaS",
        domain: "Conceitos de Nuvem",
        prompt: "No modelo de serviço em nuvem de infraestrutura como serviço (IaaS), quais são os dois componentes de responsabilidade do provedor de serviços em nuvem?",
        options: [
            { letter: "A", text: "A instalação e configuração do sistema operacional", correct: false },
            { letter: "B", text: "A configuração e manutenção do armazenamento", correct: false },
            { letter: "C", text: "Segurança física da infraestrutura do datacenter", correct: true },
            { letter: "D", text: "Manutenção do hardware", correct: true },
            { letter: "E", text: "A configuração da rede", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. No IaaS, a instalação e configuração do sistema operacional é responsabilidade do cliente." },
            { correct: false, text: "Incorreta. A configuração e manutenção do armazenamento é responsabilidade do cliente no IaaS." },
            { correct: true, text: "Correta. No IaaS, o provedor de nuvem é responsável pela segurança física da infraestrutura do datacenter." },
            { correct: true, text: "Correta. No IaaS, o provedor de nuvem é responsável pela manutenção do hardware." },
            { correct: false, text: "Incorreta. A configuração da rede é responsabilidade do cliente no IaaS." }
        ],
        glossary: [
            "IaaS: Infraestrutura como Serviço, modelo em que o provedor fornece recursos de computação, rede e armazenamento.",
            "Segurança física: proteção dos datacenters contra acesso não autorizado, incêndios e outros riscos.",
            "Manutenção de hardware: reparo e substituição de equipamentos físicos.",
            "Sistema operacional: software que gerencia o hardware e fornece serviços para aplicativos."
        ],
        generalExplanation: [
            "No <strong>IaaS</strong>, o <strong>provedor de nuvem</strong> é responsável por: <strong>manutenção do hardware</strong>, <strong>segurança física do datacenter</strong>.",
            "O <strong>cliente</strong> é responsável por: instalação e configuração do sistema operacional, configuração e manutenção do armazenamento, configuração da rede e gerenciamento de permissões.",
            "Portanto, as respostas corretas são <strong>Segurança física</strong> e <strong>Manutenção do hardware</strong>."
        ],
        realWorld: [
            "Ao usar VMs no Azure (IaaS), a Microsoft garante a segurança física dos datacenters e a manutenção dos servidores.",
            "O cliente é responsável por configurar o sistema operacional, a rede e o armazenamento das VMs."
        ]
    },
    {
        id: 15,
        title: "Gerenciamento de servidores híbridos com Azure Arc",
        domain: "Ferramentas de Gerenciamento",
        prompt: "O que você pode usar para gerenciar servidores em plataformas de nuvem e ambientes locais?",
        options: [
            { letter: "A", text: "Azure Monitor", correct: false },
            { letter: "B", text: "Azure PowerShell", correct: false },
            { letter: "C", text: "Azure CLI", correct: false },
            { letter: "D", text: "Azure Arc", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure Monitor coleta dados de monitoramento, mas não gerencia servidores locais diretamente." },
            { correct: false, text: "Incorreta. O Azure PowerShell gerencia recursos do Azure, mas não servidores locais." },
            { correct: false, text: "Incorreta. O Azure CLI gerencia recursos do Azure, mas não servidores locais." },
            { correct: true, text: "Correta. O Azure Arc permite gerenciar servidores em nuvens e ambientes locais diretamente do Azure, fornecendo controle consistente em ambientes híbridos e multi-nuvem." }
        ],
        glossary: [
            "Azure Arc: serviço da Microsoft que permite gerenciar servidores, Kubernetes e aplicativos em ambientes locais e multi-nuvem.",
            "Azure Monitor: serviço de monitoramento que coleta métricas e logs de recursos do Azure.",
            "Azure PowerShell: módulo de cmdlets para gerenciar recursos do Azure.",
            "Azure CLI: interface de linha de comando para gerenciar recursos do Azure."
        ],
        generalExplanation: [
            "O <strong>Azure Arc</strong> é a ferramenta projetada para <strong>gerenciar servidores locais e em multi-nuvem</strong> de forma unificada.",
            "Ele permite aplicar políticas, monitorar e gerenciar servidores fora do Azure como se estivessem dentro dele.",
            "Outras ferramentas, como Azure Monitor, PowerShell e CLI, não gerenciam servidores locais diretamente.",
            "Portanto, a resposta correta é <strong>Azure Arc</strong>."
        ],
        realWorld: [
            "Uma empresa com servidores locais e em outras nuvens pode usar o <strong>Azure Arc</strong> para gerenciar todos eles pelo portal do Azure.",
            "Isso simplifica a administração e garante consistência nas políticas de segurança e conformidade."
        ]
    },
    {
        id: 16,
        title: "PaaS para minimizar esforço administrativo",
        domain: "Conceitos de Nuvem",
        prompt: "Você planeja migrar um aplicativo web para o Azure. O aplicativo web é acessado por usuários externos. Você precisa recomendar uma solução de implantação em nuvem para minimizar a quantidade de esforço administrativo usado para gerenciar o aplicativo web. O que você deve incluir na recomendação?",
        options: [
            { letter: "A", text: "Database as a Service (DaaS)", correct: false },
            { letter: "B", text: "Infrastructure as a Service (IaaS)", correct: false },
            { letter: "C", text: "Platform as a Service (PaaS)", correct: true },
            { letter: "D", text: "Software as a Service (SaaS)", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. DaaS é focado em bancos de dados, não em aplicativos web." },
            { correct: false, text: "Incorreta. IaaS exige que o cliente gerencie o sistema operacional e a infraestrutura, aumentando o esforço administrativo." },
            { correct: true, text: "Correta. PaaS oferece uma plataforma gerenciada para implantar aplicativos web, minimizando o esforço administrativo, pois o provedor gerencia a infraestrutura subjacente." },
            { correct: false, text: "Incorreta. SaaS é para software pronto, não para implantar aplicativos personalizados." }
        ],
        glossary: [
            "PaaS: Plataforma como Serviço, modelo em que o provedor oferece uma plataforma para desenvolvimento e implantação de aplicativos.",
            "IaaS: Infraestrutura como Serviço, modelo em que o provedor fornece recursos de computação, rede e armazenamento.",
            "SaaS: Software como Serviço, modelo em que o provedor hospeda e gerencia o software.",
            "DaaS: Database as a Service, modelo em que o provedor gerencia bancos de dados."
        ],
        generalExplanation: [
            "Para <strong>minimizar o esforço administrativo</strong> na gestão de um aplicativo web, o <strong>PaaS</strong> é a melhor escolha.",
            "O provedor gerencia a <strong>infraestrutura subjacente</strong>, permitindo que o cliente foque apenas no código da aplicação.",
            "Portanto, a resposta correta é <strong>PaaS</strong>."
        ],
        realWorld: [
            "Usando o <strong>Azure App Service</strong> (PaaS), uma empresa pode implantar um aplicativo web sem se preocupar com servidores, sistemas operacionais ou patches.",
            "Isso reduz o esforço administrativo e permite que a equipe foque no desenvolvimento de funcionalidades."
        ]
    },
    {
        id: 17,
        title: "PaaS e serviços de desenvolvimento profissional",
        domain: "Conceitos de Nuvem",
        prompt: "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure fornece serviços de desenvolvimento profissional para adicionar continuamente recursos a aplicativos personalizados.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O PaaS fornece serviços de desenvolvimento profissional para adicionar continuamente recursos a aplicativos personalizados." },
            { correct: true, text: "Correta. O PaaS oferece serviços de desenvolvimento profissional, como ferramentas de CI/CD, ambientes de teste e integração com outros serviços, permitindo adicionar recursos continuamente." }
        ],
        glossary: [
            "PaaS: Plataforma como Serviço, modelo em que o provedor oferece uma plataforma para desenvolvimento e implantação de aplicativos.",
            "CI/CD: Integração Contínua e Entrega Contínua, práticas de desenvolvimento ágil.",
            "Aplicativo personalizado: aplicativo desenvolvido especificamente para atender às necessidades de uma organização."
        ],
        generalExplanation: [
            "O <strong>PaaS</strong> fornece <strong>serviços de desenvolvimento profissional</strong>, como ferramentas de CI/CD e ambientes de teste.",
            "Isso permite que as equipes <strong>adicionem recursos continuamente</strong> aos aplicativos personalizados.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Usando o <strong>Azure App Service</strong>, uma equipe pode configurar pipelines de CI/CD para implantar atualizações continuamente.",
            "Isso acelera o desenvolvimento e melhora a qualidade do software."
        ]
    },
    {
        id: 18,
        title: "Licenças do Microsoft 365 no Azure AD",
        domain: "Identidade e Acesso",
        prompt: "Cada conta de usuário no Azure AD pode receber apenas uma licença do Microsoft 365.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Uma conta de usuário no Azure AD pode receber várias licenças do Microsoft 365, dependendo dos serviços que precisa acessar." },
            { correct: false, text: "Incorreta. Uma conta de usuário pode ter múltiplas licenças do Microsoft 365." }
        ],
        glossary: [
            "Azure AD: serviço de identidade da Microsoft que gerencia usuários e licenças.",
            "Licença do Microsoft 365: direito de usar os serviços do Microsoft 365, como Outlook, Teams e SharePoint.",
            "Conta de usuário: identidade de um usuário no Azure AD."
        ],
        generalExplanation: [
            "Uma <strong>conta de usuário</strong> no Azure AD pode receber <strong>múltiplas licenças</strong> do Microsoft 365.",
            "Isso permite que o usuário acesse diferentes serviços e funcionalidades.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Um funcionário pode ter licenças para <strong>Microsoft 365 E3</strong> e <strong>Power BI Pro</strong>, permitindo acesso a diferentes serviços.",
            "Isso é comum em empresas que precisam de funcionalidades específicas para diferentes funções."
        ]
    },
    {
        id: 19,
        title: "Assinatura do Azure e múltiplos locatários",
        domain: "Governança e Conformidade",
        prompt: "Uma assinatura do Azure pode ser associada a vários locatários do Azure AD.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Uma assinatura do Azure só pode ser associada a um único locatário do Azure AD por vez. É possível transferir a assinatura para outro locatário, mas não associá-la a vários simultaneamente." },
            { correct: false, text: "Incorreta. Uma assinatura do Azure só pode estar associada a um único locatário do Azure AD." }
        ],
        glossary: [
            "Assinatura do Azure: contêiner lógico que agrupa recursos e serviços do Azure para faturamento e gerenciamento.",
            "Locatário do Azure AD: instância do Azure AD que representa uma organização.",
            "Transferência de assinatura: processo de mover uma assinatura de um locatário para outro."
        ],
        generalExplanation: [
            "Uma <strong>assinatura do Azure</strong> só pode estar associada a <strong>um único locatário do Azure AD</strong>.",
            "É possível transferir a assinatura para outro locatário, mas não associá-la a vários simultaneamente.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Uma empresa que adquire outra organização pode transferir assinaturas do Azure para o locatário do Azure AD da empresa adquirente.",
            "Isso mantém a governança e o controle centralizados."
        ]
    },
    {
        id: 20,
        title: "SSO e Microsoft Authenticator",
        domain: "Identidade e Acesso",
        prompt: "O logon único exige que todos os usuários façam login usando o aplicativo Microsoft Authenticator.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O SSO não exige o uso do Microsoft Authenticator; ele pode ser implementado com diversos métodos de autenticação." },
            { correct: true, text: "Correta. O SSO (logon único) permite que os usuários façam login uma vez e acessem vários aplicativos, mas não exige o uso do Microsoft Authenticator especificamente. Outros métodos, como senha, certificados ou chaves FIDO2, também podem ser usados." }
        ],
        glossary: [
            "SSO: logon único, que permite ao usuário fazer login uma vez e acessar múltiplos aplicativos.",
            "Microsoft Authenticator: aplicativo da Microsoft para autenticação multifator.",
            "FIDO2: padrão de autenticação sem senha que usa chaves de segurança físicas."
        ],
        generalExplanation: [
            "O <strong>SSO</strong> não exige o uso do <strong>Microsoft Authenticator</strong>.",
            "Ele pode ser implementado com <strong>diversos métodos de autenticação</strong>, como senha, certificados ou chaves FIDO2.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Uma empresa pode configurar SSO com <strong>Azure AD</strong> e permitir que os usuários façam login com senha e MFA via SMS, sem usar o Microsoft Authenticator.",
            "Isso oferece flexibilidade para atender às necessidades dos usuários."
        ]
    },
    {
        id: 21,
        title: "Atualizações e patches de software (Compute)",
        domain: "Conceitos de Nuvem",
        prompt: "Atualizações e patches de software.",
        options: [
            { letter: "A", text: "Identidade e acesso", correct: false },
            { letter: "B", text: "Compute", correct: true },
            { letter: "C", text: "Segurança física", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Identidade e acesso está relacionado a autenticação e autorização, não a atualizações de software." },
            { correct: true, text: "Correta. Atualizações e patches de software são responsabilidades da camada de Compute, que inclui servidores, sistemas operacionais e aplicativos." },
            { correct: false, text: "Incorreta. Segurança física está relacionada à proteção de datacenters, não a atualizações de software." }
        ],
        glossary: [
            "Compute: camada de computação que inclui servidores, sistemas operacionais e aplicativos.",
            "Patch: correção aplicada a software para corrigir vulnerabilidades ou bugs.",
            "Identidade e acesso: camada responsável por autenticação e autorização.",
            "Segurança física: proteção de datacenters contra acesso não autorizado."
        ],
        generalExplanation: [
            "As <strong>atualizações e patches de software</strong> são responsabilidades da camada de <strong>Compute</strong>.",
            "Elas garantem que servidores e aplicativos estejam seguros e atualizados.",
            "Portanto, a resposta correta é <strong>Compute</strong>."
        ],
        realWorld: [
            "Em uma VM no Azure (IaaS), o cliente é responsável por aplicar patches no sistema operacional e nos aplicativos.",
            "Isso é essencial para manter a segurança e o desempenho da VM."
        ]
    },
    {
        id: 22,
        title: "Permissões em grupos de recursos do Azure",
        domain: "Governança e Conformidade",
        prompt: "Se você atribuir permissões para um usuário gerenciar um grupo de recursos, o usuário poderá gerenciar todos os recursos do Azure nesse grupo.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. As permissões atribuídas a um grupo de recursos são herdadas pelos recursos dentro dele." },
            { correct: true, text: "Correta. As permissões atribuídas a um grupo de recursos são herdadas por todos os recursos dentro dele, permitindo que o usuário gerencie esses recursos." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico que agrupa recursos relacionados do Azure.",
            "Herança de permissões: propagação automática de permissões de um escopo pai para recursos filhos.",
            "RBAC: controle de acesso baseado em função, que define permissões para usuários e grupos."
        ],
        generalExplanation: [
            "As <strong>permissões</strong> atribuídas a um <strong>grupo de recursos</strong> são <strong>herdadas</strong> pelos recursos dentro dele.",
            "Isso permite que o usuário gerencie todos os recursos do grupo.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Um administrador atribui a função <strong>Contribuidor</strong> a um usuário no grupo de recursos <code>rg-producao</code>.",
            "O usuário pode gerenciar todas as VMs, bancos de dados e outros recursos dentro desse grupo."
        ]
    },
    {
        id: 23,
        title: "Azure Cloud Shell - Ícone no portal",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Você precisa gerenciar o Azure usando o Azure Cloud Shell. Qual ícone do portal do Azure você deve selecionar?",
        options: [
            { letter: "A", text: "Ícone 3", correct: false },
            { letter: "B", text: "Ícone 2", correct: false },
            { letter: "C", text: "Ícone 1", correct: true },
            { letter: "D", text: "Ícone 4", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O ícone 3 não representa o Azure Cloud Shell." },
            { correct: false, text: "Incorreta. O ícone 2 não representa o Azure Cloud Shell." },
            { correct: true, text: "Correta. O ícone 1 (geralmente representado por um símbolo de prompt '>_') é o Azure Cloud Shell no portal do Azure." },
            { correct: false, text: "Incorreta. O ícone 4 não representa o Azure Cloud Shell." }
        ],
        glossary: [
            "Azure Cloud Shell: ambiente de shell interativo baseado em navegador para gerenciar recursos do Azure.",
            "Portal do Azure: interface web para gerenciar recursos do Azure.",
            "Ícone: representação gráfica de um recurso ou funcionalidade no portal."
        ],
        generalExplanation: [
            "O <strong>Azure Cloud Shell</strong> é acessado pelo ícone <strong>&gt;_</strong> na barra de ferramentas do portal do Azure.",
            "Ele fornece um ambiente de shell para executar comandos do Azure CLI ou PowerShell.",
            "Portanto, a resposta correta é <strong>Ícone 1</strong>."
        ],
        realWorld: [
            "Um desenvolvedor pode clicar no ícone do <strong>Cloud Shell</strong> no portal do Azure para executar comandos de gerenciamento sem instalar ferramentas localmente.",
            "Isso é útil para automação e scripts rápidos."
        ]
    },
    {
        id: 24,
        title: "Gerenciamento de aplicativo web via iPhone",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Você tem um aplicativo Web do Azure. Você precisa gerenciar as configurações do aplicativo da web a partir de um iPhone. Quais são as duas ferramentas de gerenciamento do Azure que você pode usar?",
        options: [
            { letter: "A", text: "Windows PowerShell", correct: false },
            { letter: "B", text: "Explorador de armazenamento do Azure (Azure Storage Explorer)", correct: false },
            { letter: "C", text: "Azure Cloud Shell", correct: true },
            { letter: "D", text: "o portal do Azure (the Azure portal)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Windows PowerShell não está disponível nativamente no iOS." },
            { correct: false, text: "Incorreta. O Azure Storage Explorer é usado para gerenciar contas de armazenamento, não aplicativos web." },
            { correct: true, text: "Correta. O Azure Cloud Shell pode ser acessado pelo navegador de um iPhone, fornecendo acesso a shells interativos para gerenciar recursos do Azure." },
            { correct: true, text: "Correta. O portal do Azure pode ser acessado de qualquer dispositivo com navegador, incluindo iPhones, fornecendo interface gráfica para gerenciar serviços e recursos do Azure." }
        ],
        glossary: [
            "Azure Cloud Shell: ambiente de shell interativo baseado em navegador para gerenciar recursos do Azure.",
            "Portal do Azure: interface web para gerenciar recursos do Azure.",
            "iPhone: dispositivo móvel da Apple que executa o sistema operacional iOS.",
            "Windows PowerShell: ferramenta de linha de comando da Microsoft para automação de tarefas."
        ],
        generalExplanation: [
            "As duas ferramentas que podem ser usadas para <strong>gerenciar um aplicativo web do Azure a partir de um iPhone</strong> são:",
            "<strong>Azure Cloud Shell</strong>: acessível pelo navegador do iPhone.",
            "<strong>Portal do Azure</strong>: acessível pelo navegador do iPhone.",
            "O Windows PowerShell não está disponível nativamente no iOS, e o Azure Storage Explorer é usado para armazenamento, não para aplicativos web.",
            "Portanto, as respostas corretas são <strong>Azure Cloud Shell</strong> e <strong>Portal do Azure</strong>."
        ],
        realWorld: [
            "Um desenvolvedor em viagem pode usar o <strong>portal do Azure</strong> no iPhone para ajustar configurações de um aplicativo web.",
            "Também pode usar o <strong>Cloud Shell</strong> para executar comandos de automação diretamente do navegador do iPhone."
        ]
    },
    {
        id: 25,
        title: "Recursos do Azure em grupos de recursos e regiões",
        domain: "Governança e Conformidade",
        prompt: "Todos os recursos do Azure implantados em um grupo de recursos devem usar a mesma região do Azure.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Os recursos em um grupo de recursos podem estar em regiões diferentes." },
            { correct: true, text: "Correta. Um grupo de recursos pode conter recursos de diferentes regiões do Azure. O grupo de recursos em si está associado a uma região para armazenamento de metadados, mas os recursos podem estar em qualquer região." }
        ],
        glossary: [
            "Grupo de recursos: contêiner lógico que agrupa recursos relacionados do Azure.",
            "Região do Azure: área geográfica que contém datacenters do Azure.",
            "Metadados: informações sobre os recursos, como nome, tipo e localização."
        ],
        generalExplanation: [
            "Os <strong>recursos</strong> em um <strong>grupo de recursos</strong> podem estar em <strong>regiões diferentes</strong>.",
            "O grupo de recursos está associado a uma região para armazenamento de metadados, mas os recursos podem estar em qualquer região.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Uma empresa pode ter um grupo de recursos <code>rg-global</code> com uma VM em <strong>East US</strong> e um banco de dados em <strong>West Europe</strong>.",
            "Isso permite otimizar custos e latência, mantendo a organização lógica dos recursos."
        ]
    },
    {
        id: 26,
        title: "Web App no Azure e modelo de serviço",
        domain: "Conceitos de Nuvem",
        prompt: "Em qual modelo um Web App provisionado na Azure se enquadra?",
        options: [
            { letter: "A", text: "SaaS", correct: false },
            { letter: "B", text: "PaaS", correct: true },
            { letter: "C", text: "IaaS", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. SaaS é para software pronto, não para aplicativos personalizados." },
            { correct: true, text: "Correta. Um Web App no Azure (Azure App Service) é um exemplo de PaaS, pois o provedor gerencia a infraestrutura subjacente, permitindo que o cliente foque no código da aplicação." },
            { correct: false, text: "Incorreta. IaaS exigiria que o cliente gerenciasse o sistema operacional e a infraestrutura." }
        ],
        glossary: [
            "PaaS: Plataforma como Serviço, modelo em que o provedor oferece uma plataforma para desenvolvimento e implantação de aplicativos.",
            "Web App: aplicativo web hospedado na nuvem.",
            "Azure App Service: serviço de PaaS da Microsoft para hospedar aplicativos web."
        ],
        generalExplanation: [
            "Um <strong>Web App no Azure</strong> é um exemplo de <strong>PaaS</strong>.",
            "O Azure App Service gerencia a infraestrutura, permitindo que o cliente foque no código.",
            "Portanto, a resposta correta é <strong>PaaS</strong>."
        ],
        realWorld: [
            "Uma empresa pode implantar um site no <strong>Azure App Service</strong> sem se preocupar com servidores ou patches.",
            "Isso reduz o esforço administrativo e acelera o desenvolvimento."
        ]
    },
    {
        id: 27,
        title: "Criação de VM no Azure via tablet Android",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Você tem um ambiente do Azure. Você precisa criar uma nova máquina virtual do Azure em um tablet que executa o sistema operacional Android. Quais são as três possíveis soluções?",
        options: [
            { letter: "A", text: "Usar o centro de administração de Segurança e Conformidade.", correct: false },
            { letter: "B", text: "Usar o Bash no Azure Cloud Shell.", correct: true },
            { letter: "C", text: "Usar o PowerShell no Azure Cloud Shell.", correct: true },
            { letter: "D", text: "Usar o portal do PowerApps.", correct: false },
            { letter: "E", text: "Usar o portal do Azure.", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O centro de administração de Segurança e Conformidade não é usado para criar VMs." },
            { correct: true, text: "Correta. O Bash no Azure Cloud Shell permite executar comandos de linha de comando para criar VMs a partir de um navegador em um tablet Android." },
            { correct: true, text: "Correta. O PowerShell no Azure Cloud Shell permite executar comandos para criar VMs a partir de um navegador em um tablet Android." },
            { correct: false, text: "Incorreta. O portal do PowerApps não é usado para criar VMs do Azure." },
            { correct: true, text: "Correta. O portal do Azure pode ser acessado de qualquer dispositivo com navegador, incluindo tablets Android, para criar VMs." }
        ],
        glossary: [
            "Azure Cloud Shell: ambiente de shell interativo baseado em navegador para gerenciar recursos do Azure.",
            "Bash: shell de linha de comando para sistemas Unix.",
            "PowerShell: shell de linha de comando da Microsoft.",
            "Portal do Azure: interface web para gerenciar recursos do Azure.",
            "VM: máquina virtual na nuvem."
        ],
        generalExplanation: [
            "As três soluções para criar uma VM a partir de um tablet Android são:",
            "<strong>Bash no Azure Cloud Shell</strong>",
            "<strong>PowerShell no Azure Cloud Shell</strong>",
            "<strong>Portal do Azure</strong>",
            "O centro de administração de Segurança e Conformidade e o portal do PowerApps não são adequados para criar VMs.",
            "Portanto, as respostas corretas são <strong>B</strong>, <strong>C</strong> e <strong>E</strong>."
        ],
        realWorld: [
            "Um administrador em viagem pode usar o <strong>portal do Azure</strong> no tablet Android para criar uma VM rapidamente.",
            "Também pode usar o <strong>Cloud Shell</strong> para executar comandos de automação."
        ]
    },
    {
        id: 28,
        title: "Controladores de domínio no Azure AD",
        domain: "Identidade e Acesso",
        prompt: "O Azure AD requer controladores de domínio em máquinas virtuais do Azure.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure AD é um serviço de identidade baseado em nuvem que não requer controladores de domínio em VMs do Azure." },
            { correct: true, text: "Correta. O Azure AD é um serviço gerenciado pela Microsoft e não requer controladores de domínio em VMs do Azure. Controladores de domínio são necessários apenas para o Active Directory Domain Services (AD DS) tradicional." }
        ],
        glossary: [
            "Azure AD: serviço de identidade baseado em nuvem da Microsoft.",
            "Controlador de domínio: servidor que executa o Active Directory Domain Services (AD DS) e autentica usuários em uma rede.",
            "AD DS: Active Directory Domain Services, serviço de diretório da Microsoft para redes locais."
        ],
        generalExplanation: [
            "O <strong>Azure AD</strong> é um serviço <strong>gerenciado pela Microsoft</strong> e <strong>não requer controladores de domínio</strong> em VMs do Azure.",
            "Controladores de domínio são necessários apenas para o <strong>AD DS tradicional</strong>.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Uma empresa que usa apenas <strong>Azure AD</strong> não precisa provisionar VMs para controladores de domínio.",
            "Isso simplifica a administração e reduz custos."
        ]
    },
    {
        id: 29,
        title: "Azure Resource Manager (ARM)",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Qual camada de gerenciamento aceita solicitações de qualquer ferramenta ou API do Azure e permite que você crie, atualize e exclua recursos em uma conta do Azure?",
        options: [
            { letter: "A", text: "Gerenciador de Recursos do Azure (ARM)", correct: true },
            { letter: "B", text: "Grupos de gerenciamento do Azure", correct: false },
            { letter: "C", text: "CLI do Azure", correct: false },
            { letter: "D", text: "Esfera Azure (Azure Sphere)", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Gerenciador de Recursos do Azure (ARM) é a camada de gerenciamento que aceita solicitações de qualquer ferramenta ou API do Azure e permite criar, atualizar e excluir recursos." },
            { correct: false, text: "Incorreta. Grupos de gerenciamento ajudam a organizar recursos, mas não aceitam solicitações diretamente." },
            { correct: false, text: "Incorreta. A CLI do Azure é uma ferramenta que se conecta ao ARM, não a camada de gerenciamento." },
            { correct: false, text: "Incorreta. O Azure Sphere é uma solução de segurança para dispositivos IoT." }
        ],
        glossary: [
            "ARM: Azure Resource Manager, camada de gerenciamento que permite criar, atualizar e excluir recursos do Azure.",
            "Grupos de gerenciamento: contêineres lógicos que organizam assinaturas e recursos.",
            "CLI do Azure: interface de linha de comando para gerenciar recursos do Azure.",
            "Azure Sphere: solução de segurança para dispositivos IoT."
        ],
        generalExplanation: [
            "O <strong>ARM (Azure Resource Manager)</strong> é a camada de gerenciamento que aceita solicitações de qualquer ferramenta ou API do Azure.",
            "Ele permite criar, atualizar e excluir recursos em uma conta do Azure.",
            "Portanto, a resposta correta é <strong>Gerenciador de Recursos do Azure (ARM)</strong>."
        ],
        realWorld: [
            "Ao usar o <strong>portal do Azure</strong>, a <strong>CLI do Azure</strong> ou o <strong>PowerShell</strong>, todas as solicitações passam pelo <strong>ARM</strong>.",
            "Isso garante consistência e controle no gerenciamento de recursos."
        ]
    },
    {
        id: 30,
        title: "Permissões para recursos da Área de Trabalho Virtual do Azure",
        domain: "Identidade e Acesso",
        prompt: "O que é usado para conceder permissão aos recursos da Área de Trabalho Virtual do Azure?",
        options: [
            { letter: "A", text: "grupos de recursos (resource groups)", correct: false },
            { letter: "B", text: "grupos de segurança de aplicativos (application security groups)", correct: false },
            { letter: "C", text: "etiquetas (tags)", correct: false },
            { letter: "D", text: "funções de controle de acesso baseado em função (RBAC) (role-based access control roles)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Grupos de recursos organizam recursos, mas não concedem permissões." },
            { correct: false, text: "Incorreta. Grupos de segurança de aplicativos controlam tráfego de rede, não permissões." },
            { correct: false, text: "Incorreta. Tags organizam recursos, mas não concedem permissões." },
            { correct: true, text: "Correta. As funções RBAC (Role-Based Access Control) são usadas para conceder permissões aos recursos da Área de Trabalho Virtual do Azure." }
        ],
        glossary: [
            "RBAC: controle de acesso baseado em função, que define permissões para usuários e grupos.",
            "Área de Trabalho Virtual do Azure: serviço de virtualização de desktop e aplicativos na nuvem.",
            "Grupos de recursos: contêineres lógicos para organizar recursos.",
            "Tags: pares chave-valor para organizar recursos."
        ],
        generalExplanation: [
            "As <strong>funções RBAC</strong> são usadas para <strong>conceder permissões</strong> aos recursos da Área de Trabalho Virtual do Azure.",
            "Elas definem o que cada usuário ou grupo pode fazer com os recursos.",
            "Portanto, a resposta correta é <strong>funções RBAC</strong>."
        ],
        realWorld: [
            "Um administrador atribui a função <strong>Desktop Virtualization User</strong> a um grupo de usuários para permitir acesso à Área de Trabalho Virtual.",
            "Isso garante que apenas usuários autorizados possam acessar os desktops virtuais."
        ]
    },
    {
        id: 31,
        title: "Alteração do locatário do Azure AD de uma assinatura",
        domain: "Governança e Conformidade",
        prompt: "Você pode alterar o locatário do Azure AD ao qual uma assinatura do Azure está associada.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. É possível alterar o locatário do Azure AD ao qual uma assinatura está associada." },
            { correct: true, text: "Correta. É possível transferir uma assinatura do Azure para outro locatário do Azure AD, alterando a associação." }
        ],
        glossary: [
            "Assinatura do Azure: contêiner lógico para recursos e faturamento.",
            "Locatário do Azure AD: instância do Azure AD que representa uma organização.",
            "Transferência de assinatura: processo de mover uma assinatura de um locatário para outro."
        ],
        generalExplanation: [
            "É possível <strong>alterar o locatário do Azure AD</strong> ao qual uma assinatura está associada.",
            "Isso é feito por meio de transferência de assinatura.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Uma empresa que adquire outra organização pode transferir assinaturas do Azure para o locatário do Azure AD da empresa adquirente.",
            "Isso mantém a governança e o controle centralizados."
        ]
    },
    {
        id: 32,
        title: "Iniciar o Azure Cloud Shell",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Você precisa iniciar o Azure Cloud Shell. O que você deve usar?",
        options: [
            { letter: "A", text: "um modelo do Azure Resource Manager (ARM) (an Azure Resource Manager (ARM) template)", correct: false },
            { letter: "B", text: "o portal do Azure (the Azure portal) (Azure Command-Line Interface - CLI)", correct: true },
            { letter: "C", text: "Azure PowerShell", correct: false },
            { letter: "D", text: "Interface de linha de comando (CLI) do Azure", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Um modelo ARM não inicia o Cloud Shell." },
            { correct: true, text: "Correta. O Azure Cloud Shell é iniciado pelo portal do Azure, clicando no ícone '>_' na barra de ferramentas." },
            { correct: false, text: "Incorreta. O Azure PowerShell não inicia o Cloud Shell." },
            { correct: false, text: "Incorreta. A CLI do Azure não inicia o Cloud Shell." }
        ],
        glossary: [
            "Azure Cloud Shell: ambiente de shell interativo baseado em navegador.",
            "Portal do Azure: interface web para gerenciar recursos do Azure.",
            "Modelo ARM: template para provisionar recursos do Azure.",
            "Azure PowerShell: módulo de cmdlets para gerenciar recursos do Azure.",
            "CLI do Azure: interface de linha de comando para gerenciar recursos do Azure."
        ],
        generalExplanation: [
            "O <strong>Azure Cloud Shell</strong> é iniciado pelo <strong>portal do Azure</strong>, clicando no ícone '>_'.",
            "Isso abre uma sessão interativa do Bash ou PowerShell no navegador.",
            "Portanto, a resposta correta é <strong>o portal do Azure</strong>."
        ],
        realWorld: [
            "Um desenvolvedor pode clicar no ícone do <strong>Cloud Shell</strong> no portal do Azure para executar comandos de gerenciamento sem instalar ferramentas localmente.",
            "Isso é útil para automação e scripts rápidos."
        ]
    },
    {
        id: 33,
        title: "Execução de scripts PowerShell para criar recursos do Azure",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Um administrador do Azure planeja executar um script do PowerShell que cria recursos do Azure. Você precisa recomendar qual configuração de computador usar para executar o script. Quais três computadores podem executar o script?",
        options: [
            { letter: "A", text: "um computador que executa macOS e tem o PowerShell Core 6.0 instalado", correct: true },
            { letter: "B", text: "um computador que executa Linux e tem as ferramentas CLI do Azure instaladas", correct: false },
            { letter: "C", text: "um computador que executa o Chrome OS e usa Azure Cloud Shell", correct: true },
            { letter: "D", text: "um computador que executa o Windows 10 e tem o módulo Azure PowerShell instalado", correct: true },
            { letter: "E", text: "um computador que executa o Windows 11 e tem as ferramentas CLI do Azure instaladas", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O PowerShell Core 6.0 está disponível no macOS e pode ser usado com os módulos Azure PowerShell para gerenciar recursos do Azure." },
            { correct: false, text: "Incorreta. As ferramentas CLI do Azure não executam scripts PowerShell." },
            { correct: true, text: "Correta. O Azure Cloud Shell fornece acesso ao PowerShell em um ambiente hospedado pela Microsoft, permitindo executar scripts no Chrome OS." },
            { correct: true, text: "Correta. O Windows 10 com o módulo Azure PowerShell instalado pode executar scripts PowerShell para gerenciar recursos do Azure." },
            { correct: false, text: "Incorreta. As ferramentas CLI do Azure não executam scripts PowerShell." }
        ],
        glossary: [
            "PowerShell Core: versão multiplataforma do PowerShell.",
            "Azure PowerShell: módulo de cmdlets para gerenciar recursos do Azure.",
            "Azure Cloud Shell: ambiente de shell interativo baseado em navegador.",
            "CLI do Azure: interface de linha de comando para gerenciar recursos do Azure."
        ],
        generalExplanation: [
            "As três configurações que podem executar scripts PowerShell para criar recursos do Azure são:",
            "<strong>macOS com PowerShell Core 6.0</strong>",
            "<strong>Chrome OS com Azure Cloud Shell</strong>",
            "<strong>Windows 10 com módulo Azure PowerShell</strong>",
            "As ferramentas CLI do Azure não executam scripts PowerShell.",
            "Portanto, as respostas corretas são <strong>A</strong>, <strong>C</strong> e <strong>D</strong>."
        ],
        realWorld: [
            "Um administrador pode usar o <strong>Azure Cloud Shell</strong> para executar scripts PowerShell em qualquer dispositivo com navegador.",
            "Também pode instalar o <strong>Azure PowerShell</strong> localmente para automação."
        ]
    },
    {
        id: 34,
        title: "Dimensionamento automático no PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure fornece a capacidade de dimensionar a plataforma automaticamente.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O PaaS fornece dimensionamento automático da plataforma." },
            { correct: true, text: "Correta. O PaaS oferece a capacidade de dimensionar a plataforma automaticamente, ajustando recursos conforme a demanda." }
        ],
        glossary: [
            "PaaS: Plataforma como Serviço, modelo em que o provedor oferece uma plataforma para desenvolvimento e implantação de aplicativos.",
            "Dimensionamento automático: ajuste automático de recursos conforme a demanda.",
            "Azure App Service: serviço de PaaS da Microsoft para hospedar aplicativos web."
        ],
        generalExplanation: [
            "O <strong>PaaS</strong> fornece <strong>dimensionamento automático</strong> da plataforma.",
            "Isso permite que os aplicativos se ajustem automaticamente à demanda.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Usando o <strong>Azure App Service</strong>, uma empresa pode configurar o dimensionamento automático para adicionar instâncias quando o tráfego aumentar.",
            "Isso garante desempenho consistente sem intervenção manual."
        ]
    },
    {
        id: 35,
        title: "Microsoft 365 e modelo SaaS",
        domain: "Conceitos de Nuvem",
        prompt: "A ABC Organization compra uma assinatura do Microsoft 365 para todos os seus funcionários. Qual modelo de serviço em nuvem a ABC Organization adotou?",
        options: [
            { letter: "A", text: "IaaS (Infrastructure as a Service)", correct: false },
            { letter: "B", text: "SaaS (Software as a Service)", correct: true },
            { letter: "C", text: "PaaS (Platform as a Service)", correct: false },
            { letter: "D", text: "FaaS (Function as a Service)", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. IaaS fornece infraestrutura, não software pronto." },
            { correct: true, text: "Correta. O Microsoft 365 é um exemplo de SaaS, pois o provedor hospeda e gerencia o software, e os usuários o acessam via internet." },
            { correct: false, text: "Incorreta. PaaS fornece plataforma para desenvolvimento, não software pronto." },
            { correct: false, text: "Incorreta. FaaS fornece execução de funções sob demanda, não software pronto." }
        ],
        glossary: [
            "SaaS: Software como Serviço, modelo em que o provedor hospeda e gerencia o software.",
            "Microsoft 365: suíte de serviços de produtividade baseada em nuvem da Microsoft.",
            "IaaS: Infraestrutura como Serviço.",
            "PaaS: Plataforma como Serviço.",
            "FaaS: Function as a Service."
        ],
        generalExplanation: [
            "O <strong>Microsoft 365</strong> é um exemplo de <strong>SaaS</strong>.",
            "O provedor hospeda e gerencia o software, e os usuários o acessam via internet.",
            "Portanto, a resposta correta é <strong>SaaS</strong>."
        ],
        realWorld: [
            "Ao assinar o <strong>Microsoft 365</strong>, a empresa não precisa gerenciar servidores ou instalar software.",
            "Os funcionários acessam Outlook, Word e Teams diretamente pelo navegador ou aplicativos."
        ]
    },
    {
        id: 36,
        title: "Autenticação vs Autorização",
        domain: "Identidade e Acesso",
        prompt: "Autenticação é o processo de estabelecer o nível de acesso que um usuário ou serviço autenticado tem.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Autenticação é o processo de verificar a identidade, não de estabelecer o nível de acesso." },
            { correct: true, text: "Correta. Autenticação é o processo de verificar a identidade de um usuário ou serviço. O processo de estabelecer o nível de acesso é a autorização." }
        ],
        glossary: [
            "Autenticação: processo de verificar a identidade de um usuário ou serviço.",
            "Autorização: processo de determinar quais recursos um usuário autenticado pode acessar.",
            "Identidade: conjunto de características que definem um usuário ou serviço."
        ],
        generalExplanation: [
            "A <strong>autenticação</strong> verifica a <strong>identidade</strong> (quem você é).",
            "A <strong>autorização</strong> estabelece o <strong>nível de acesso</strong> (o que você pode fazer).",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Um usuário faz login no Azure (autenticação) e, em seguida, o Azure verifica suas permissões (autorização) para determinar se ele pode criar ou excluir recursos.",
            "Esses dois processos trabalham juntos para garantir a segurança dos recursos."
        ]
    },
    {
        id: 37,
        title: "PaaS e controle do sistema operacional",
        domain: "Conceitos de Nuvem",
        prompt: "Uma solução de plataforma como serviço (PaaS) que hospeda aplicativos Web no Azure fornece controle total dos sistemas operacionais que hospedam aplicativos.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. No PaaS, o provedor gerencia o sistema operacional subjacente. O cliente não tem controle total sobre ele." },
            { correct: false, text: "Incorreta. No PaaS, o cliente não tem controle total sobre o sistema operacional." }
        ],
        glossary: [
            "PaaS: Plataforma como Serviço, modelo em que o provedor gerencia a infraestrutura subjacente.",
            "Sistema operacional: software que gerencia o hardware e fornece serviços para aplicativos.",
            "Controle total: capacidade de gerenciar todos os aspectos de um sistema."
        ],
        generalExplanation: [
            "No <strong>PaaS</strong>, o <strong>provedor gerencia o sistema operacional</strong> subjacente.",
            "O cliente <strong>não tem controle total</strong> sobre ele.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "No <strong>Azure App Service</strong>, o cliente não pode acessar o sistema operacional subjacente.",
            "Isso é gerenciado pela Microsoft para garantir segurança e desempenho."
        ]
    },
    {
        id: 38,
        title: "MFA e sincronização de identidades locais",
        domain: "Identidade e Acesso",
        prompt: "Para implementar uma solução de MFA (Autenticação Multifator do Azure), você deve sincronizar identidades locais com a nuvem.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O MFA do Azure pode ser implementado sem sincronizar identidades locais. Ele pode ser usado com contas somente na nuvem." },
            { correct: false, text: "Incorreta. A sincronização de identidades locais não é um requisito para implementar MFA." }
        ],
        glossary: [
            "MFA: autenticação multifator, que exige duas ou mais formas de verificação.",
            "Sincronização de identidades: processo de manter identidades locais e na nuvem consistentes.",
            "Azure AD Connect: ferramenta que sincroniza identidades do Active Directory local com o Azure AD."
        ],
        generalExplanation: [
            "O <strong>MFA do Azure</strong> pode ser implementado <strong>sem sincronizar identidades locais</strong>.",
            "Ele pode ser usado com contas somente na nuvem.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Uma empresa pode criar contas de usuário diretamente no Azure AD e configurar MFA sem sincronizar com o Active Directory local.",
            "Isso é útil para organizações que não têm infraestrutura local."
        ]
    },
    {
        id: 39,
        title: "Responsabilidades administrativas eliminadas com migração para Azure",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa tem uma rede local que contém vários servidores. A empresa planeja reduzir as seguintes responsabilidades administrativas dos administradores de rede: Backup de dados do aplicativo. Substituição do hardware do servidor com falha. Gerenciamento da segurança do servidor físico. Atualização dos sistemas operacionais do servidor. Gerenciamento de permissões para documentos compartilhados. A empresa planeja migrar vários servidores para máquinas virtuais do Azure. Você precisa identificar quais responsabilidades administrativas serão eliminadas após a migração planejada. Quais duas responsabilidades você deve identificar?",
        options: [
            { letter: "A", text: "Gerenciamento de permissões para documentos compartilhados", correct: false },
            { letter: "B", text: "Atualização dos sistemas operacionais do servidor", correct: false },
            { letter: "C", text: "Gerenciamento de segurança física do servidor", correct: true },
            { letter: "D", text: "Backup de dados do aplicativo", correct: false },
            { letter: "E", text: "Substituição do hardware do servidor com falha", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O gerenciamento de permissões para documentos compartilhados continua sendo responsabilidade do cliente." },
            { correct: false, text: "Incorreta. A atualização dos sistemas operacionais continua sendo responsabilidade do cliente no IaaS." },
            { correct: true, text: "Correta. O gerenciamento de segurança física do servidor é eliminado, pois o provedor de nuvem é responsável pela segurança física dos datacenters." },
            { correct: false, text: "Incorreta. O backup de dados do aplicativo continua sendo responsabilidade do cliente." },
            { correct: true, text: "Correta. A substituição do hardware do servidor com falha é eliminada, pois o provedor de nuvem é responsável pela manutenção do hardware." }
        ],
        glossary: [
            "IaaS: Infraestrutura como Serviço, modelo em que o provedor gerencia a infraestrutura física.",
            "Segurança física: proteção dos datacenters contra acesso não autorizado.",
            "Manutenção de hardware: reparo e substituição de equipamentos físicos."
        ],
        generalExplanation: [
            "Ao migrar servidores para VMs no Azure (IaaS), as responsabilidades <strong>eliminadas</strong> são:",
            "<strong>Gerenciamento de segurança física do servidor</strong>",
            "<strong>Substituição do hardware do servidor com falha</strong>",
            "O provedor de nuvem gerencia a infraestrutura física, enquanto o cliente continua responsável por backup, atualizações de SO e permissões.",
            "Portanto, as respostas corretas são <strong>C</strong> e <strong>E</strong>."
        ],
        realWorld: [
            "Uma empresa que migra servidores locais para VMs no Azure não precisa mais se preocupar com a segurança física dos datacenters ou com a substituição de hardware.",
            "Isso reduz custos e permite que a equipe de TI foque em atividades estratégicas."
        ]
    },
    {
        id: 40,
        title: "PaaS e contas de armazenamento no Azure",
        domain: "Conceitos de Nuvem",
        prompt: "Sua empresa planeja migrar todos os seus dados e recursos para o Azure. O plano de migração da empresa afirma que apenas as soluções de Plataforma como Serviço (PaaS) devem ser usadas no Azure. Você precisa implantar um ambiente Azure que atenda ao plano de migração da empresa. Solução: Você cria um Serviço de Aplicativos Azure e contas de armazenamento Azure. Isso cumpre o objetivo?",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. As contas de armazenamento do Azure são consideradas IaaS, não PaaS. Portanto, a solução não cumpre o objetivo de usar apenas PaaS." },
            { correct: false, text: "Incorreta. As contas de armazenamento são IaaS, não PaaS." }
        ],
        glossary: [
            "PaaS: Plataforma como Serviço.",
            "IaaS: Infraestrutura como Serviço.",
            "Conta de armazenamento do Azure: serviço de armazenamento que fornece blobs, filas, tabelas e arquivos.",
            "Serviço de Aplicativos Azure: serviço de PaaS para hospedar aplicativos web."
        ],
        generalExplanation: [
            "O <strong>Serviço de Aplicativos Azure</strong> é <strong>PaaS</strong>.",
            "As <strong>contas de armazenamento do Azure</strong> são consideradas <strong>IaaS</strong>.",
            "Portanto, a solução <strong>não cumpre</strong> o objetivo de usar apenas PaaS.",
            "A resposta correta é <strong>Não</strong>."
        ],
        realWorld: [
            "Uma empresa que exige apenas PaaS deve usar serviços como Azure App Service, Azure SQL Database e Azure Functions.",
            "Contas de armazenamento são IaaS e não devem ser usadas se a política for apenas PaaS."
        ]
    },
    {
        id: 41,
        title: "Azure Backup e PaaS",
        domain: "Conceitos de Nuvem",
        prompt: "O Backup do Azure é um exemplo de PaaS (plataforma como serviço).",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure Backup é um exemplo de PaaS." },
            { correct: true, text: "Correta. O Azure Backup é um serviço PaaS, pois o provedor gerencia a infraestrutura subjacente, e o cliente só precisa configurar as políticas de backup." }
        ],
        glossary: [
            "PaaS: Plataforma como Serviço.",
            "Azure Backup: serviço de backup baseado em nuvem da Microsoft."
        ],
        generalExplanation: [
            "O <strong>Azure Backup</strong> é um exemplo de <strong>PaaS</strong>.",
            "O provedor gerencia a infraestrutura, e o cliente configura as políticas de backup.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Uma empresa pode usar o <strong>Azure Backup</strong> para proteger VMs e bancos de dados sem se preocupar com a infraestrutura de backup.",
            "Isso simplifica o gerenciamento e reduz custos."
        ]
    },
    {
        id: 42,
        title: "IaaS e instalação de software",
        domain: "Conceitos de Nuvem",
        prompt: "Com IaaS (infraestrutura como serviço), você deve instalar o software que deseja usar.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. No IaaS, o cliente é responsável por instalar e configurar o software, incluindo sistema operacional e aplicativos." },
            { correct: false, text: "Incorreta. No IaaS, o cliente deve instalar o software." }
        ],
        glossary: [
            "IaaS: Infraestrutura como Serviço.",
            "Software: programas e aplicativos executados em um sistema.",
            "Sistema operacional: software que gerencia o hardware."
        ],
        generalExplanation: [
            "No <strong>IaaS</strong>, o cliente é responsável por <strong>instalar e configurar o software</strong>.",
            "O provedor gerencia apenas a infraestrutura física.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Ao criar uma VM no Azure (IaaS), o cliente deve instalar o sistema operacional e os aplicativos necessários.",
            "Isso oferece controle total sobre o ambiente."
        ]
    },
    {
        id: 43,
        title: "Execução da CLI do Azure no Windows",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Um engenheiro de suporte pretende executar várias tarefas de gerenciamento do Azure usando o CLI Azure. Você instala a CLI em um computador. Você precisa informar ao engenheiro de suporte quais ferramentas usar para executar o CLI. Quais duas ferramentas você deve instruir o engenheiro de suporte a usar?",
        options: [
            { letter: "A", text: "Windows PowerShell", correct: true },
            { letter: "B", text: "Central de Rede e Compartilhamento", correct: false },
            { letter: "C", text: "Prompt de Comando", correct: true },
            { letter: "D", text: "Windows Defender Firewall", correct: false },
            { letter: "E", text: "Azure Resource Explorer", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Windows PowerShell permite executar comandos da CLI do Azure localmente." },
            { correct: false, text: "Incorreta. A Central de Rede e Compartilhamento não executa comandos da CLI do Azure." },
            { correct: true, text: "Correta. O Prompt de Comando permite executar comandos da CLI do Azure localmente." },
            { correct: false, text: "Incorreta. O Windows Defender Firewall não executa comandos da CLI do Azure." },
            { correct: false, text: "Incorreta. O Azure Resource Explorer não executa comandos da CLI do Azure." }
        ],
        glossary: [
            "CLI do Azure: interface de linha de comando para gerenciar recursos do Azure.",
            "Windows PowerShell: shell de linha de comando da Microsoft.",
            "Prompt de Comando: shell de linha de comando do Windows."
        ],
        generalExplanation: [
            "As duas ferramentas que podem executar a <strong>CLI do Azure</strong> no Windows são:",
            "<strong>Windows PowerShell</strong>",
            "<strong>Prompt de Comando</strong>",
            "As outras opções não executam comandos da CLI do Azure.",
            "Portanto, as respostas corretas são <strong>A</strong> e <strong>C</strong>."
        ],
        realWorld: [
            "Um engenheiro de suporte pode usar o <strong>Prompt de Comando</strong> ou o <strong>PowerShell</strong> para executar comandos da CLI do Azure.",
            "Isso permite automatizar tarefas de gerenciamento de recursos."
        ]
    },
    {
        id: 44,
        title: "Automação de recursos com modelos ARM",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Sua empresa tem várias unidades de negócios. Cada unidade de negócios requer 20 recursos diferentes do Azure para operação diária. Todas as unidades de negócios exigem os mesmos tipos de recurso do Azure. Você precisa recomendar uma solução para automatizar a criação dos recursos do Azure. O que você deve incluir na recomendação?",
        options: [
            { letter: "A", text: "Conjuntos de dimensionamento de máquinas virtuais", correct: false },
            { letter: "B", text: "O serviço de Gerenciamento de API do Azure", correct: false },
            { letter: "C", text: "Grupos de gerenciamento", correct: false },
            { letter: "D", text: "Modelos do Azure Resource Manager (ARM)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Conjuntos de dimensionamento de VMs são para escalar VMs, não para automatizar a criação de recursos variados." },
            { correct: false, text: "Incorreta. O Gerenciamento de API é para gerenciar APIs, não para criar recursos." },
            { correct: false, text: "Incorreta. Grupos de gerenciamento organizam assinaturas, mas não automatizam a criação de recursos." },
            { correct: true, text: "Correta. Os modelos ARM permitem definir a infraestrutura como código e implantar recursos de forma automatizada e consistente." }
        ],
        glossary: [
            "ARM: Azure Resource Manager, camada de gerenciamento que permite criar, atualizar e excluir recursos.",
            "Modelo ARM: arquivo JSON que define recursos e configurações para implantação automatizada.",
            "Conjuntos de dimensionamento de VMs: recurso para criar e gerenciar um grupo de VMs idênticas.",
            "Gerenciamento de API: serviço para publicar e gerenciar APIs."
        ],
        generalExplanation: [
            "Os <strong>modelos ARM</strong> permitem <strong>automatizar a criação de recursos</strong> de forma consistente.",
            "Eles definem a infraestrutura como código e podem ser implantados repetidamente.",
            "Portanto, a resposta correta é <strong>Modelos do Azure Resource Manager (ARM)</strong>."
        ],
        realWorld: [
            "Uma empresa pode criar um modelo ARM que define os 20 recursos necessários para cada unidade de negócios.",
            "O modelo pode ser implantado automaticamente para cada unidade, garantindo consistência e reduzindo erros manuais."
        ]
    },
    {
        id: 45,
        title: "Azure Backup e PaaS (duplicada)",
        domain: "Conceitos de Nuvem",
        prompt: "O backup do Azure é um exemplo de plataforma como serviço (PaaS).",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O Azure Backup é um exemplo de PaaS." },
            { correct: true, text: "Correta. O Azure Backup é um serviço PaaS, pois o provedor gerencia a infraestrutura subjacente." }
        ],
        glossary: [
            "PaaS: Plataforma como Serviço.",
            "Azure Backup: serviço de backup baseado em nuvem da Microsoft."
        ],
        generalExplanation: [
            "O <strong>Azure Backup</strong> é um exemplo de <strong>PaaS</strong>.",
            "O provedor gerencia a infraestrutura, e o cliente configura as políticas de backup.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Uma empresa pode usar o <strong>Azure Backup</strong> para proteger VMs e bancos de dados sem se preocupar com a infraestrutura de backup.",
            "Isso simplifica o gerenciamento e reduz custos."
        ]
    },
    {
        id: 46,
        title: "PaaS - Controle do SO, escalabilidade e customização",
        domain: "Conceitos de Nuvem",
        prompt: "Para cada uma das seguintes declarações, selecione Sim se a declaração for verdadeira. Caso contrário, selecione Não. AFIRMAÇÕES: 1) Uma solução do modelo Plataforma como Serviço (PaaS) que hospeda aplicativos Web na Azure proporciona controle completo do Sistema Operacional onde a aplicação está hospedada. 2) Uma solução do modelo Plataforma como Serviço (PaaS) que hospeda aplicativos Web na Azure proporciona a capacidade de escalar a plataforma automaticamente. 3) Uma solução do modelo Plataforma como Serviço (PaaS) que hospeda aplicativos Web na Azure permite que o cliente customize apenas a sua aplicação, sem a necessidade de gerenciar a infraestrutura.",
        options: [
            { letter: "A", text: "Sim, Não e Não", correct: false },
            { letter: "B", text: "Não, Sim e Sim", correct: true },
            { letter: "C", text: "Não, Não e Não", correct: false },
            { letter: "D", text: "Sim, Sim e Sim", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A primeira afirmação é falsa, a segunda é verdadeira e a terceira é verdadeira." },
            { correct: true, text: "Correta. 1) Falso - No PaaS, o provedor gerencia o SO. 2) Verdadeiro - O PaaS oferece escalabilidade automática. 3) Verdadeiro - No PaaS, o cliente foca apenas na aplicação." },
            { correct: false, text: "Incorreta. A segunda e a terceira afirmações são verdadeiras." },
            { correct: false, text: "Incorreta. A primeira afirmação é falsa." }
        ],
        glossary: [
            "PaaS: Plataforma como Serviço.",
            "Sistema operacional: software que gerencia o hardware.",
            "Escalabilidade automática: ajuste automático de recursos conforme a demanda.",
            "Customização: adaptação de um recurso às necessidades específicas."
        ],
        generalExplanation: [
            "No <strong>PaaS</strong>:",
            "<strong>Controle do SO</strong> → <strong>Não</strong> (o provedor gerencia).",
            "<strong>Escalabilidade automática</strong> → <strong>Sim</strong>.",
            "<strong>Customização apenas da aplicação</strong> → <strong>Sim</strong>.",
            "Portanto, a resposta correta é <strong>Não, Sim e Sim</strong>."
        ],
        realWorld: [
            "No <strong>Azure App Service</strong>, o cliente não controla o SO, mas pode escalar automaticamente e customizar a aplicação.",
            "Isso simplifica o gerenciamento e melhora a eficiência."
        ]
    },
    {
        id: 47,
        title: "Câmera de segurança e segurança física",
        domain: "Conceitos de Nuvem",
        prompt: "Associe o trecho informado com a alternativa correspondente. Câmera de segurança.",
        options: [
            { letter: "A", text: "Identidade e acesso", correct: false },
            { letter: "B", text: "Compute", correct: false },
            { letter: "C", text: "Segurança física", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Identidade e acesso está relacionado a autenticação e autorização." },
            { correct: false, text: "Incorreta. Compute está relacionado a servidores e aplicativos." },
            { correct: true, text: "Correta. Câmeras de segurança são usadas para proteger datacenters, o que está relacionado à segurança física." }
        ],
        glossary: [
            "Segurança física: proteção dos datacenters contra acesso não autorizado.",
            "Identidade e acesso: camada responsável por autenticação e autorização.",
            "Compute: camada de computação."
        ],
        generalExplanation: [
            "As <strong>câmeras de segurança</strong> são usadas para <strong>proteger datacenters</strong>, o que está relacionado à <strong>segurança física</strong>.",
            "Portanto, a resposta correta é <strong>Segurança física</strong>."
        ],
        realWorld: [
            "Os datacenters do Azure usam câmeras de segurança para monitorar e proteger as instalações.",
            "Isso garante a segurança física dos recursos."
        ]
    },
    {
        id: 48,
        title: "Azure AD e login em Windows 10",
        domain: "Identidade e Acesso",
        prompt: "Para usar as credenciais do Azure AD para entrar em um computador que executa o Windows 10, o computador deve ser adicionado ao Azure AD.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Para usar credenciais do Azure AD em um computador Windows 10, o computador deve ser adicionado ao Azure AD (Azure AD Join)." },
            { correct: false, text: "Incorreta. O computador deve ser adicionado ao Azure AD." }
        ],
        glossary: [
            "Azure AD: serviço de identidade baseado em nuvem da Microsoft.",
            "Azure AD Join: processo de adicionar um dispositivo ao Azure AD.",
            "Windows 10: sistema operacional da Microsoft."
        ],
        generalExplanation: [
            "Para usar <strong>credenciais do Azure AD</strong> em um computador Windows 10, ele deve ser <strong>adicionado ao Azure AD</strong>.",
            "Isso permite login com contas corporativas e aplicação de políticas de segurança.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Uma empresa pode adicionar laptops ao <strong>Azure AD</strong> para permitir que os funcionários façam login com suas credenciais corporativas.",
            "Isso simplifica o gerenciamento e melhora a segurança."
        ]
    },
    {
        id: 49,
        title: "MFA e identidade e acesso",
        domain: "Identidade e Acesso",
        prompt: "Associe o termo com a alternativa correspondente. Autenticação multifator (MFA).",
        options: [
            { letter: "A", text: "Segurança física", correct: false },
            { letter: "B", text: "Compute", correct: false },
            { letter: "C", text: "Identidade e acesso", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Segurança física está relacionada a datacenters." },
            { correct: false, text: "Incorreta. Compute está relacionado a servidores." },
            { correct: true, text: "Correta. MFA está relacionado à identidade e acesso, pois é um método de autenticação." }
        ],
        glossary: [
            "MFA: autenticação multifator.",
            "Identidade e acesso: camada responsável por autenticação e autorização.",
            "Segurança física: proteção de datacenters.",
            "Compute: camada de computação."
        ],
        generalExplanation: [
            "O <strong>MFA</strong> está relacionado à <strong>identidade e acesso</strong>, pois é um método de autenticação.",
            "Portanto, a resposta correta é <strong>Identidade e acesso</strong>."
        ],
        realWorld: [
            "O <strong>MFA</strong> é usado para proteger o acesso a recursos, garantindo que apenas usuários autenticados possam acessá-los.",
            "Isso é essencial para a segurança de identidades."
        ]
    },
    {
        id: 50,
        title: "PaaS e aumento automático de instâncias",
        domain: "Conceitos de Nuvem",
        prompt: "Uma solução PaaS (Plataforma como Serviço) pode aumentar automaticamente o número de instâncias.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O PaaS pode aumentar automaticamente o número de instâncias." },
            { correct: true, text: "Correta. O PaaS oferece escalabilidade automática, aumentando ou diminuindo o número de instâncias conforme a demanda." }
        ],
        glossary: [
            "PaaS: Plataforma como Serviço.",
            "Escalabilidade automática: ajuste automático de recursos conforme a demanda.",
            "Instância: unidade de computação em execução."
        ],
        generalExplanation: [
            "O <strong>PaaS</strong> pode <strong>aumentar automaticamente o número de instâncias</strong>.",
            "Isso garante que a aplicação tenha recursos suficientes para atender à demanda.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "No <strong>Azure App Service</strong>, é possível configurar o dimensionamento automático para adicionar instâncias quando o tráfego aumentar.",
            "Isso mantém o desempenho consistente."
        ]
    },
    {
        id: 51,
        title: "Serviços internos de autenticação e autorização do Azure",
        domain: "Identidade e Acesso",
        prompt: "O Azure tem serviços internos de autenticação e autorização que fornecem acesso seguro a recursos do Azure.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O Azure AD fornece serviços internos de autenticação e autorização para recursos do Azure." },
            { correct: false, text: "Incorreta. O Azure tem serviços internos de autenticação e autorização." }
        ],
        glossary: [
            "Azure AD: serviço de identidade da Microsoft.",
            "Autenticação: verificação de identidade.",
            "Autorização: determinação de permissões."
        ],
        generalExplanation: [
            "O <strong>Azure AD</strong> fornece <strong>autenticação e autorização</strong> para recursos do Azure.",
            "Isso garante acesso seguro e controlado.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "O <strong>Azure AD</strong> é usado para autenticar e autorizar usuários e serviços que acessam recursos do Azure.",
            "Isso é essencial para a segurança da nuvem."
        ]
    },
    {
        id: 52,
        title: "Cloud Shell, CLI e Azure PowerShell",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Para cada uma das afirmações a seguir, selecione Sim se a afirmação for verdadeira. Caso contrário, selecione Não. AFIRMAÇÕES: 1) Você deverá instalar o Azure Cloud Shell em seu computador para poder usá-lo. 2) A CLI (Interface de Linha de Comando) do Azure é instalada, por padrão, no Windows 11. 3) O Azure PowerShell pode ser usado em computadores que executam o Windows, o Linux e o macOS.",
        options: [
            { letter: "A", text: "Não, Não e Não", correct: false },
            { letter: "B", text: "Sim, Sim e Não", correct: false },
            { letter: "C", text: "Sim, Não e Sim", correct: false },
            { letter: "D", text: "Não, Não e Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. A terceira afirmação é verdadeira." },
            { correct: false, text: "Incorreta. A primeira e a segunda afirmações são falsas." },
            { correct: false, text: "Incorreta. A primeira afirmação é falsa." },
            { correct: true, text: "Correta. 1) Falso - O Cloud Shell é acessado pelo navegador, não precisa ser instalado. 2) Falso - A CLI do Azure não vem instalada por padrão no Windows 11. 3) Verdadeiro - O Azure PowerShell está disponível para Windows, Linux e macOS." }
        ],
        glossary: [
            "Azure Cloud Shell: ambiente de shell interativo baseado em navegador.",
            "CLI do Azure: interface de linha de comando para gerenciar recursos do Azure.",
            "Azure PowerShell: módulo de cmdlets para gerenciar recursos do Azure."
        ],
        generalExplanation: [
            "1) O <strong>Cloud Shell</strong> é acessado pelo navegador, <strong>não precisa ser instalado</strong>.",
            "2) A <strong>CLI do Azure</strong> <strong>não vem instalada por padrão</strong> no Windows 11.",
            "3) O <strong>Azure PowerShell</strong> está disponível para <strong>Windows, Linux e macOS</strong>.",
            "Portanto, a resposta correta é <strong>Não, Não e Sim</strong>."
        ],
        realWorld: [
            "Um desenvolvedor pode acessar o <strong>Cloud Shell</strong> diretamente do navegador, sem instalar nada.",
            "Ele pode instalar a <strong>CLI do Azure</strong> ou o <strong>Azure PowerShell</strong> conforme necessário."
        ]
    },
    {
        id: 53,
        title: "MFA e identificação de usuário",
        domain: "Identidade e Acesso",
        prompt: "Associe a questão com a alternativa correta. Vários elementos são necessários para identificar um usuário ou um serviço.",
        options: [
            { letter: "A", text: "SSO (logon único)", correct: false },
            { letter: "B", text: "Autorização", correct: false },
            { letter: "C", text: "MFA (autenticação multifator)", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. SSO é um mecanismo de login único." },
            { correct: false, text: "Incorreta. Autorização determina permissões." },
            { correct: true, text: "Correta. MFA exige vários elementos para identificar um usuário ou serviço, como senha e código de verificação." }
        ],
        glossary: [
            "MFA: autenticação multifator.",
            "SSO: logon único.",
            "Autorização: determinação de permissões."
        ],
        generalExplanation: [
            "O <strong>MFA</strong> exige <strong>vários elementos</strong> para identificar um usuário ou serviço.",
            "Isso aumenta a segurança da autenticação.",
            "Portanto, a resposta correta é <strong>MFA</strong>."
        ],
        realWorld: [
            "O <strong>MFA</strong> é usado para proteger contas, exigindo senha e código de verificação.",
            "Isso reduz o risco de acessos não autorizados."
        ]
    },
    {
        id: 54,
        title: "Modelos ARM para consistência no Azure",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Selecione a resposta que completa corretamente a frase. _____________ uma plataforma comum para implantar objetos em uma infraestrutura de nuvem e para implementar consistência em todo o ambiente do Azure.",
        options: [
            { letter: "A", text: "Os modelos do Azure Resource Manager fornecem", correct: true },
            { letter: "B", text: "Os grupos de gerenciamento fornecem", correct: false },
            { letter: "C", text: "As políticas do Azure fornecem", correct: false },
            { letter: "D", text: "Os grupos de recursos fornecem", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Os modelos ARM fornecem uma plataforma comum para implantar objetos e garantir consistência no ambiente do Azure." },
            { correct: false, text: "Incorreta. Grupos de gerenciamento organizam assinaturas, mas não fornecem plataforma de implantação." },
            { correct: false, text: "Incorreta. Políticas do Azure aplicam regras, mas não implantam objetos." },
            { correct: false, text: "Incorreta. Grupos de recursos organizam recursos, mas não fornecem plataforma de implantação." }
        ],
        glossary: [
            "ARM: Azure Resource Manager.",
            "Modelo ARM: arquivo JSON que define recursos e configurações.",
            "Grupos de gerenciamento: contêineres lógicos para organizar assinaturas.",
            "Políticas do Azure: regras que controlam recursos."
        ],
        generalExplanation: [
            "Os <strong>modelos ARM</strong> fornecem uma <strong>plataforma comum</strong> para implantar objetos e garantir <strong>consistência</strong> no Azure.",
            "Portanto, a resposta correta é <strong>Os modelos do Azure Resource Manager fornecem</strong>."
        ],
        realWorld: [
            "Usando <strong>modelos ARM</strong>, uma empresa pode implantar recursos de forma consistente em diferentes ambientes.",
            "Isso reduz erros e melhora a governança."
        ]
    },
    {
        id: 55,
        title: "PaaS e memória adicional",
        domain: "Conceitos de Nuvem",
        prompt: "Uma solução PaaS (Plataforma como Serviço) fornece memória adicional a aplicativos, bastando alterar a faixa de preço.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. No PaaS, é possível aumentar a memória disponível para aplicativos alterando a faixa de preço (plano de serviço)." },
            { correct: false, text: "Incorreta. O PaaS permite aumentar a memória alterando a faixa de preço." }
        ],
        glossary: [
            "PaaS: Plataforma como Serviço.",
            "Faixa de preço: plano de serviço que define recursos e custos.",
            "Memória: recurso de computação."
        ],
        generalExplanation: [
            "No <strong>PaaS</strong>, é possível <strong>aumentar a memória</strong> alterando a faixa de preço.",
            "Isso permite ajustar os recursos conforme a necessidade.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "No <strong>Azure App Service</strong>, é possível alterar o plano de serviço para obter mais memória e CPU.",
            "Isso melhora o desempenho da aplicação."
        ]
    },
    {
        id: 56,
        title: "Criação de VM no Android - Portal e Cloud Shell",
        domain: "Ferramentas de Gerenciamento",
        prompt: "Quais são as duas ferramentas que você pode usar para criar uma nova máquina virtual do Azure a partir de um dispositivo móvel que executa o Android?",
        options: [
            { letter: "A", text: "PowerShell no Azure Cloud Shell", correct: true },
            { letter: "B", text: "o portal do Azure", correct: true },
            { letter: "C", text: "Área de trabalho remota", correct: false },
            { letter: "D", text: "SSH", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. O PowerShell no Azure Cloud Shell permite criar VMs a partir de um navegador em dispositivos Android." },
            { correct: true, text: "Correta. O portal do Azure pode ser acessado de qualquer dispositivo com navegador, incluindo Android, para criar VMs." },
            { correct: false, text: "Incorreta. A Área de Trabalho Remota permite acessar VMs, mas não criá-las." },
            { correct: false, text: "Incorreta. O SSH permite acessar VMs, mas não criá-las." }
        ],
        glossary: [
            "Azure Cloud Shell: ambiente de shell interativo baseado em navegador.",
            "Portal do Azure: interface web para gerenciar recursos do Azure.",
            "Área de Trabalho Remota: ferramenta para acessar desktops remotos.",
            "SSH: protocolo para acesso remoto seguro."
        ],
        generalExplanation: [
            "As duas ferramentas para criar uma VM a partir de um dispositivo Android são:",
            "<strong>PowerShell no Azure Cloud Shell</strong>",
            "<strong>Portal do Azure</strong>",
            "A Área de Trabalho Remota e o SSH permitem acessar VMs, mas não criá-las.",
            "Portanto, as respostas corretas são <strong>A</strong> e <strong>B</strong>."
        ],
        realWorld: [
            "Um administrador pode usar o <strong>portal do Azure</strong> no Android para criar uma VM rapidamente.",
            "Também pode usar o <strong>Cloud Shell</strong> para executar comandos de automação."
        ]
    },
    {
        id: 57,
        title: "SSO e credenciais compartilhadas",
        domain: "Identidade e Acesso",
        prompt: "Associe a questão com a alternativa correta. A capacidade de usar as mesmas credenciais para acessar vários recursos e aplicativos de diferentes provedores.",
        options: [
            { letter: "A", text: "Autorização", correct: false },
            { letter: "B", text: "SSO (logon único)", correct: true },
            { letter: "C", text: "MFA (autenticação multifator)", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Autorização determina permissões." },
            { correct: true, text: "Correta. SSO permite usar as mesmas credenciais para acessar vários recursos e aplicativos." },
            { correct: false, text: "Incorreta. MFA exige múltiplas formas de verificação." }
        ],
        glossary: [
            "SSO: logon único, que permite ao usuário fazer login uma vez e acessar múltiplos aplicativos.",
            "Autorização: determinação de permissões.",
            "MFA: autenticação multifator."
        ],
        generalExplanation: [
            "O <strong>SSO</strong> permite usar as <strong>mesmas credenciais</strong> para acessar vários recursos e aplicativos.",
            "Isso simplifica o acesso e melhora a experiência do usuário.",
            "Portanto, a resposta correta é <strong>SSO</strong>."
        ],
        realWorld: [
            "Um usuário faz login no <strong>Azure AD</strong> e acessa automaticamente Outlook, Teams e o portal do Azure sem precisar digitar a senha novamente.",
            "Isso é possível graças ao <strong>SSO</strong>."
        ]
    },
    {
        id: 58,
        title: "Sincronização de identidades locais com Azure AD",
        domain: "Identidade e Acesso",
        prompt: "As identidades armazenadas em um Active Directory local podem ser sincronizadas com o Azure AD.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. As identidades locais podem ser sincronizadas com o Azure AD." },
            { correct: true, text: "Correta. O Azure AD Connect permite sincronizar identidades do Active Directory local com o Azure AD." }
        ],
        glossary: [
            "Azure AD: serviço de identidade da Microsoft.",
            "Active Directory local: serviço de diretório da Microsoft para redes locais.",
            "Azure AD Connect: ferramenta de sincronização de identidades."
        ],
        generalExplanation: [
            "As <strong>identidades locais</strong> podem ser <strong>sincronizadas</strong> com o Azure AD usando o <strong>Azure AD Connect</strong>.",
            "Isso permite que os usuários acessem recursos na nuvem com as mesmas credenciais.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Uma empresa usa o <strong>Azure AD Connect</strong> para sincronizar usuários do Active Directory local com o Azure AD.",
            "Isso simplifica o gerenciamento de identidades e melhora a segurança."
        ]
    },
    {
        id: 59,
        title: "Modelos ARM em formato JSON declarativo",
        domain: "Ferramentas de Gerenciamento",
        prompt: "O que você pode usar para definir os recursos que deseja provisionar em um formato JSON declarativo?",
        options: [
            { letter: "A", text: "Azure Repos", correct: false },
            { letter: "B", text: "Azure PowerShell", correct: false },
            { letter: "C", text: "Modelos do Azure Resource Manager (ARM)", correct: true },
            { letter: "D", text: "CLI do Azure", correct: false }
        ],
        explanations: [
            { correct: false, text: "Incorreta. Azure Repos é um serviço de versionamento de código." },
            { correct: false, text: "Incorreta. Azure PowerShell é uma ferramenta de linha de comando." },
            { correct: true, text: "Correta. Os modelos ARM permitem definir recursos em formato JSON declarativo." },
            { correct: false, text: "Incorreta. A CLI do Azure é uma ferramenta de linha de comando." }
        ],
        glossary: [
            "ARM: Azure Resource Manager.",
            "Modelo ARM: arquivo JSON que define recursos e configurações.",
            "JSON: formato de dados estruturados.",
            "Declarativo: estilo de configuração que descreve o estado desejado."
        ],
        generalExplanation: [
            "Os <strong>modelos ARM</strong> permitem definir recursos em <strong>formato JSON declarativo</strong>.",
            "Isso possibilita automação e consistência na implantação.",
            "Portanto, a resposta correta é <strong>Modelos do Azure Resource Manager (ARM)</strong>."
        ],
        realWorld: [
            "Uma empresa pode usar <strong>modelos ARM</strong> para provisionar recursos de forma automatizada e consistente.",
            "Isso reduz erros e melhora a governança."
        ]
    },
    {
        id: 60,
        title: "IaaS e instalação de software (duplicada)",
        domain: "Conceitos de Nuvem",
        prompt: "Com a infraestrutura como serviço (IaaS), você deve instalar o software que deseja usar.",
        options: [
            { letter: "A", text: "Sim", correct: true },
            { letter: "B", text: "Não", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. No IaaS, o cliente é responsável por instalar e configurar o software." },
            { correct: false, text: "Incorreta. No IaaS, o cliente deve instalar o software." }
        ],
        glossary: [
            "IaaS: Infraestrutura como Serviço.",
            "Software: programas e aplicativos."
        ],
        generalExplanation: [
            "No <strong>IaaS</strong>, o cliente é responsável por <strong>instalar e configurar o software</strong>.",
            "O provedor gerencia apenas a infraestrutura física.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Ao criar uma VM no Azure (IaaS), o cliente deve instalar o sistema operacional e os aplicativos necessários.",
            "Isso oferece controle total sobre o ambiente."
        ]
    },
    {
        id: 61,
        title: "Acesso condicional no Azure AD",
        domain: "Identidade e Acesso",
        prompt: "O acesso condicional usa sinais obtidos de um usuário durante o processo de login para decidir se deve permitir ou negar as solicitações de acesso.",
        options: [
            { letter: "A", text: "Não", correct: false },
            { letter: "B", text: "Sim", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O acesso condicional usa sinais durante o login para tomar decisões." },
            { correct: true, text: "Correta. O acesso condicional do Azure AD usa sinais como localização, dispositivo e comportamento do usuário para decidir se permite ou nega o acesso." }
        ],
        glossary: [
            "Acesso condicional: recurso do Azure AD que aplica políticas de acesso com base em condições.",
            "Sinais: informações coletadas durante o login, como localização e dispositivo.",
            "Azure AD: serviço de identidade da Microsoft."
        ],
        generalExplanation: [
            "O <strong>acesso condicional</strong> usa <strong>sinais</strong> durante o login para decidir se permite ou nega o acesso.",
            "Isso melhora a segurança e a experiência do usuário.",
            "Portanto, a afirmação é <strong>verdadeira</strong>."
        ],
        realWorld: [
            "Uma empresa configura o <strong>acesso condicional</strong> para exigir MFA quando um usuário faz login de um local incomum.",
            "Isso protege contra acessos não autorizados."
        ]
    },
    {
        id: 62,
        title: "Expiração de assinatura do Azure e locatário do Azure AD",
        domain: "Governança e Conformidade",
        prompt: "Quando uma assinatura do Azure expira, o locatário do Azure AD associado é excluído automaticamente.",
        options: [
            { letter: "A", text: "Sim", correct: false },
            { letter: "B", text: "Não", correct: true }
        ],
        explanations: [
            { correct: false, text: "Incorreta. O locatário do Azure AD não é excluído automaticamente quando uma assinatura expira." },
            { correct: true, text: "Correta. O locatário do Azure AD é independente da assinatura e não é excluído automaticamente quando uma assinatura expira." }
        ],
        glossary: [
            "Assinatura do Azure: contêiner lógico para recursos e faturamento.",
            "Locatário do Azure AD: instância do Azure AD que representa uma organização.",
            "Expiração: término da validade de uma assinatura."
        ],
        generalExplanation: [
            "O <strong>locatário do Azure AD</strong> <strong>não é excluído automaticamente</strong> quando uma assinatura expira.",
            "Ele é independente da assinatura.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Uma empresa pode ter várias assinaturas associadas ao mesmo locatário do Azure AD.",
            "Se uma assinatura expirar, o locatário continua existindo e pode ser usado por outras assinaturas."
        ]
    },
    {
        id: 63,
        title: "Organização de usuários no Azure AD",
        domain: "Identidade e Acesso",
        prompt: "Os usuários no Azure AD são organizados usando grupo de recursos.",
        options: [
            { letter: "A", text: "Não", correct: true },
            { letter: "B", text: "Sim", correct: false }
        ],
        explanations: [
            { correct: true, text: "Correta. Os usuários no Azure AD são organizados usando grupos, não grupos de recursos. Grupos de recursos são usados para organizar recursos do Azure." },
            { correct: false, text: "Incorreta. Os usuários são organizados usando grupos, não grupos de recursos." }
        ],
        glossary: [
            "Azure AD: serviço de identidade da Microsoft.",
            "Grupo de recursos: contêiner lógico para organizar recursos do Azure.",
            "Grupo: coleção de usuários ou recursos."
        ],
        generalExplanation: [
            "Os <strong>usuários no Azure AD</strong> são organizados usando <strong>grupos</strong>, não grupos de recursos.",
            "Grupos de recursos são usados para organizar <strong>recursos do Azure</strong>.",
            "Portanto, a afirmação é <strong>falsa</strong>."
        ],
        realWorld: [
            "Uma empresa pode criar grupos no <strong>Azure AD</strong> para organizar usuários por departamento.",
            "Grupos de recursos são usados para organizar VMs, bancos de dados e outros recursos."
        ]
    }
]