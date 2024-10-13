const translation = {
  api: {
    success: 'Successo',
    actionSuccess: 'Azione riuscita',
    saved: 'Salvato',
    create: 'Creato',
    remove: 'Rimosso',
  },
  operation: {
    create: 'Crea',
    confirm: 'Conferma',
    cancel: 'Annulla',
    clear: 'Cancella',
    save: 'Salva',
    saveAndEnable: 'Salva & Abilita',
    edit: 'Modifica',
    add: 'Aggiungi',
    added: 'Aggiunto',
    refresh: 'Riavvia',
    reset: 'Reimposta',
    search: 'Cerca',
    change: 'Cambia',
    remove: 'Rimuovi',
    send: 'Invia',
    copy: 'Copia',
    lineBreak: 'A capo',
    sure: 'Sono sicuro',
    download: 'Scarica',
    delete: 'Elimina',
    settings: 'Impostazioni',
    setup: 'Configurazione',
    getForFree: 'Ottieni gratuitamente',
    reload: 'Ricarica',
    ok: 'OK',
    log: 'Log',
    learnMore: 'Scopri di più',
    params: 'Parametri',
    duplicate: 'Duplica',
    rename: 'Rinomina',
    audioSourceUnavailable: 'AudioSource non è disponibile',
  },
  errorMsg: {
    fieldRequired: '{{field}} è obbligatorio',
    urlError: 'L\'URL deve iniziare con http:// o https://',
  },
  placeholder: {
    input: 'Per favore inserisci',
    select: 'Per favore seleziona',
  },
  voice: {
    language: {
      zhHans: 'Cinese',
      zhHant: 'Cinese Tradizionale',
      enUS: 'Inglese',
      deDE: 'Tedesco',
      frFR: 'Francese',
      esES: 'Spagnolo',
      itIT: 'Italiano',
      thTH: 'Thailandese',
      idID: 'Indonesiano',
      jaJP: 'Giapponese',
      koKR: 'Coreano',
      ptBR: 'Portoghese',
      ruRU: 'Russo',
      ukUA: 'Ucraino',
      viVN: 'Vietnamita',
      plPL: 'Polacco',
      roRO: 'Rumeno',
      hiIN: 'Hindi',
      trTR: 'Turco',
      faIR: 'Persiano',
    },
  },
  unit: {
    char: 'caratteri',
  },
  actionMsg: {
    noModification: 'Nessuna modifica al momento.',
    modifiedSuccessfully: 'Modificato con successo',
    modifiedUnsuccessfully: 'Modifica non riuscita',
    copySuccessfully: 'Copiato con successo',
    paySucceeded: 'Pagamento riuscito',
    payCancelled: 'Pagamento annullato',
    generatedSuccessfully: 'Generato con successo',
    generatedUnsuccessfully: 'Generazione non riuscita',
  },
  model: {
    params: {
      temperature: 'Temperatura',
      temperatureTip:
        'Controlla la casualità: Abbassando si ottengono completamenti meno casuali. Man mano che la temperatura si avvicina a zero, il modello diventa deterministico e ripetitivo.',
      top_p: 'Top P',
      top_pTip:
        'Controlla la diversità tramite campionamento nucleare: 0.5 significa che vengono considerati la metà di tutte le opzioni ponderate per probabilità.',
      presence_penalty: 'Penalità di presenza',
      presence_penaltyTip:
        'Quanto penalizzare i nuovi token in base alla loro presenza nel testo finora. Aumenta la probabilità che il modello parli di nuovi argomenti.',
      frequency_penalty: 'Penalità di frequenza',
      frequency_penaltyTip:
        'Quanto penalizzare i nuovi token in base alla loro frequenza esistente nel testo finora. Diminuisce la probabilità che il modello ripeta la stessa riga alla lettera.',
      max_tokens: 'Token massimo',
      max_tokensTip:
        'Utilizzato per limitare la lunghezza massima della risposta, in token. Valori maggiori possono limitare lo spazio lasciato per le parole del prompt, i log della chat e la Conoscenza. Si consiglia di impostarlo al di sotto dei due terzi\ngpt-4-1106-preview, gpt-4-vision-preview max token (input 128k output 4k)',
      maxTokenSettingTip:
        'La tua impostazione di token massimo è alta, potenzialmente limitando lo spazio per prompt, query e dati. Considera di impostarlo al di sotto dei 2/3.',
      setToCurrentModelMaxTokenTip:
        'Il token massimo è aggiornato all\'80% del token massimo del modello corrente {{maxToken}}.',
      stop_sequences: 'Sequenze di stop',
      stop_sequencesTip:
        'Fino a quattro sequenze in cui l\'API smetterà di generare ulteriori token. Il testo restituito non conterrà la sequenza di stop.',
      stop_sequencesPlaceholder: 'Inserisci la sequenza e premi Tab',
    },
    tone: {
      Creative: 'Creativo',
      Balanced: 'Bilanciato',
      Precise: 'Preciso',
      Custom: 'Personalizzato',
    },
    addMoreModel: 'Vai alle impostazioni per aggiungere altri modelli',
  },
  menus: {
    status: 'beta',
    explore: 'Esplora',
    apps: 'Studio',
    plugins: 'Plugin',
    pluginsTips:
      'Integra plugin di terze parti o crea plugin AI compatibili con ChatGPT.',
    datasets: 'Conoscenza',
    datasetsTips:
      'PROSSIMAMENTE: Importa i tuoi dati testuali o scrivi dati in tempo reale tramite Webhook per migliorare il contesto LLM.',
    newApp: 'Nuova App',
    newDataset: 'Crea Conoscenza',
    tools: 'Strumenti',
  },
  userProfile: {
    settings: 'Impostazioni',
    emailSupport: 'Supporto Email',
    workspace: 'Workspace',
    createWorkspace: 'Crea Workspace',
    helpCenter: 'Aiuto',
    communityFeedback: 'Feedback',
    roadmap: 'Tabella di marcia',
    community: 'Comunità',
    about: 'Informazioni',
    logout: 'Esci',
  },
  settings: {
    accountGroup: 'ACCOUNT',
    workplaceGroup: 'WORKSPACE',
    account: 'Il mio account',
    members: 'Membri',
    billing: 'Fatturazione',
    integrations: 'Integrazioni',
    language: 'Lingua',
    provider: 'Fornitore di Modelli',
    dataSource: 'Fonte Dati',
    plugin: 'Plugin',
    apiBasedExtension: 'Estensione API',
  },
  account: {
    avatar: 'Avatar',
    name: 'Nome',
    email: 'Email',
    password: 'Password',
    passwordTip:
      'Puoi impostare una password permanente se non vuoi utilizzare codici di accesso temporanei',
    setPassword: 'Imposta una password',
    resetPassword: 'Reimposta password',
    currentPassword: 'Password attuale',
    newPassword: 'Nuova password',
    confirmPassword: 'Conferma password',
    notEqual: 'Le due password sono diverse.',
    langGeniusAccount: 'Account Dify',
    langGeniusAccountTip: 'Il tuo account Dify e i dati utente associati.',
    editName: 'Modifica Nome',
    showAppLength: 'Mostra {{length}} app',
    delete: 'Elimina Account',
    deleteTip:
      'Eliminando il tuo account cancellerai permanentemente tutti i tuoi dati e non sarà possibile recuperarli.',
    deleteConfirmTip:
      'Per confermare, invia il seguente messaggio dalla tua email registrata a ',
    myAccount: 'Il mio account',
    account: 'Conto',
    studio: 'Dify Studio',
  },
  members: {
    team: 'Team',
    invite: 'Aggiungi',
    name: 'NOME',
    lastActive: 'ULTIMA ATTIVITÀ',
    role: 'RUOLI',
    pending: 'In attesa...',
    owner: 'Proprietario',
    admin: 'Admin',
    adminTip: 'Può creare app e gestire le impostazioni del team',
    normal: 'Normale',
    normalTip: 'Può solo usare le app, non può crearle',
    builder: 'Builder',
    builderTip: 'Può creare e modificare le proprie app',
    editor: 'Editor',
    editorTip: 'Può creare e modificare app',
    datasetOperator: 'Admin della Conoscenza',
    datasetOperatorTip: 'Può solo gestire la base di conoscenza',
    inviteTeamMember: 'Aggiungi membro del team',
    inviteTeamMemberTip:
      'Potranno accedere ai dati del tuo team direttamente dopo aver effettuato l\'accesso.',
    email: 'Email',
    emailInvalid: 'Formato Email non valido',
    emailPlaceholder: 'Per favore inserisci le email',
    sendInvite: 'Invia Invito',
    invitedAsRole: 'Invitato come utente {{role}}',
    invitationSent: 'Invito inviato',
    invitationSentTip:
      'Invito inviato, e possono accedere a Dify per accedere ai dati del tuo team.',
    invitationLink: 'Link di Invito',
    failedInvitationEmails:
      'Gli utenti seguenti non sono stati invitati con successo',
    ok: 'OK',
    removeFromTeam: 'Rimuovi dal team',
    removeFromTeamTip: 'Rimuoverà l\'accesso al team',
    setAdmin: 'Imposta come amministratore',
    setMember: 'Imposta come membro ordinario',
    setBuilder: 'Imposta come builder',
    setEditor: 'Imposta come editor',
    disInvite: 'Annulla l\'invito',
    deleteMember: 'Elimina Membro',
    you: '(Tu)',
  },
  integrations: {
    connected: 'Connesso',
    google: 'Google',
    googleAccount: 'Accedi con l\'account Google',
    github: 'GitHub',
    githubAccount: 'Accedi con l\'account GitHub',
    connect: 'Connetti',
  },
  language: {
    displayLanguage: 'Lingua di visualizzazione',
    timezone: 'Fuso orario',
  },
  provider: {
    apiKey: 'API Key',
    enterYourKey: 'Inserisci qui la tua API key',
    invalidKey: 'Chiave API OpenAI non valida',
    validatedError: 'Convalida fallita: ',
    validating: 'Convalida chiave in corso...',
    saveFailed: 'Salvataggio della chiave API fallito',
    apiKeyExceedBill:
      'Questa API KEY non ha più quota disponibile, per favore leggi',
    addKey: 'Aggiungi Chiave',
    comingSoon: 'Prossimamente',
    editKey: 'Modifica',
    invalidApiKey: 'Chiave API non valida',
    azure: {
      apiBase: 'Base API',
      apiBasePlaceholder: 'L\'URL Base API del tuo Endpoint Azure OpenAI.',
      apiKey: 'API Key',
      apiKeyPlaceholder: 'Inserisci qui la tua API key',
      helpTip: 'Scopri di più su Azure OpenAI Service',
    },
    openaiHosted: {
      openaiHosted: 'OpenAI Ospitato',
      onTrial: 'IN PROVA',
      exhausted: 'QUOTA ESAURITA',
      desc: 'Il servizio di hosting OpenAI fornito da Dify ti consente di utilizzare modelli come GPT-3.5. Prima che la tua quota di prova sia esaurita, devi configurare altri fornitori di modelli.',
      callTimes: 'Numero di chiamate',
      usedUp: 'Quota di prova esaurita. Aggiungi il tuo fornitore di modelli.',
      useYourModel: 'Attualmente utilizzando il proprio fornitore di modelli.',
      close: 'Chiudi',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'IN PROVA',
      exhausted: 'QUOTA ESAURITA',
      desc: 'Modello potente, eccelle in una vasta gamma di compiti dal dialogo sofisticato alla generazione di contenuti creativi fino alle istruzioni dettagliate.',
      callTimes: 'Numero di chiamate',
      usedUp: 'Quota di prova esaurita. Aggiungi il tuo fornitore di modelli.',
      useYourModel: 'Attualmente utilizzando il proprio fornitore di modelli.',
      close: 'Chiudi',
    },
    anthropic: {
      using: 'La capacità di embedding è in uso',
      enableTip:
        'Per abilitare il modello Anthropic, devi prima collegarti a OpenAI o Azure OpenAI Service.',
      notEnabled: 'Non abilitato',
      keyFrom: 'Ottieni la tua API key da Anthropic',
    },
    encrypted: {
      front:
        'La tua API KEY sarà crittografata e archiviata utilizzando la tecnologia',
      back: '.',
    },
  },
  modelProvider: {
    notConfigured:
      'Il modello di sistema non è ancora stato completamente configurato e alcune funzioni potrebbero non essere disponibili.',
    systemModelSettings: 'Impostazioni Modello di Sistema',
    systemModelSettingsLink:
      'Perché è necessario configurare un modello di sistema?',
    selectModel: 'Seleziona il tuo modello',
    setupModelFirst: 'Per favore, configura prima il tuo modello',
    systemReasoningModel: {
      key: 'Modello di Ragionamento di Sistema',
      tip: 'Imposta il modello di inferenza predefinito da utilizzare per creare applicazioni, così come funzionalità come la generazione del nome del dialogo e il suggerimento della domanda successiva utilizzeranno anche il modello di inferenza predefinito.',
    },
    embeddingModel: {
      key: 'Modello di Embedding',
      tip: 'Imposta il modello predefinito per l\'elaborazione degli embedding dei documenti della Conoscenza, sia il recupero che l\'importazione della Conoscenza utilizzano questo modello di Embedding per il processo di vettorizzazione. Il cambio causerà l\'incoerenza della dimensione del vettore tra la Conoscenza importata e la domanda, causando un fallimento nel recupero. Per evitare fallimenti nel recupero, non cambiare questo modello a piacimento.',
      required: 'Il Modello di Embedding è obbligatorio',
    },
    speechToTextModel: {
      key: 'Modello da Voce a Testo',
      tip: 'Imposta il modello predefinito per l\'input da voce a testo nella conversazione.',
    },
    ttsModel: {
      key: 'Modello da Testo a Voce',
      tip: 'Imposta il modello predefinito per l\'input da testo a voce nella conversazione.',
    },
    rerankModel: {
      key: 'Modello di Rerank',
      tip: 'Il modello di rerank riordinerà la lista dei documenti candidati basandosi sulla corrispondenza semantica con la query dell\'utente, migliorando i risultati del ranking semantico',
    },
    apiKey: 'API-KEY',
    quota: 'Quota',
    searchModel: 'Modello di ricerca',
    noModelFound: 'Nessun modello trovato per {{model}}',
    models: 'Modelli',
    showMoreModelProvider: 'Mostra più fornitori di modelli',
    selector: {
      tip: 'Questo modello è stato rimosso. Per favore aggiungi un modello o seleziona un altro modello.',
      emptyTip: 'Nessun modello disponibile',
      emptySetting: 'Per favore vai alle impostazioni per configurare',
      rerankTip: 'Per favore, configura il modello di Rerank',
    },
    card: {
      quota: 'QUOTA',
      onTrial: 'In Prova',
      paid: 'Pagato',
      quotaExhausted: 'Quota esaurita',
      callTimes: 'Numero di chiamate',
      tokens: 'Token',
      buyQuota: 'Acquista Quota',
      priorityUse: 'Uso prioritario',
      removeKey: 'Rimuovi API Key',
      tip: 'Verrà data priorità alla quota pagata. La quota di prova sarà utilizzata dopo l\'esaurimento della quota pagata.',
    },
    item: {
      deleteDesc:
        '{{modelName}} è utilizzato come modello di ragionamento di sistema. Alcune funzioni non saranno disponibili dopo la rimozione. Si prega di confermare.',
      freeQuota: 'QUOTA GRATUITA',
    },
    addApiKey: 'Aggiungi la tua API key',
    invalidApiKey: 'API key non valida',
    encrypted: {
      front:
        'La tua API KEY sarà crittografata e archiviata utilizzando la tecnologia',
      back: '.',
    },
    freeQuota: {
      howToEarn: 'Come guadagnare',
    },
    addMoreModelProvider: 'AGGIUNGI PIÙ FORNITORI DI MODELLI',
    addModel: 'Aggiungi Modello',
    modelsNum: '{{num}} Modelli',
    showModels: 'Mostra Modelli',
    showModelsNum: 'Mostra {{num}} Modelli',
    collapse: 'Comprimi',
    config: 'Configura',
    modelAndParameters: 'Modello e Parametri',
    model: 'Modello',
    featureSupported: '{{feature}} supportato',
    callTimes: 'Numero di chiamate',
    credits: 'Crediti Messaggi',
    buyQuota: 'Acquista Quota',
    getFreeTokens: 'Ottieni Token gratuiti',
    priorityUsing: 'Utilizzo prioritario',
    deprecated: 'Deprecato',
    confirmDelete: 'confermare l\'eliminazione?',
    quotaTip: 'Token gratuiti rimanenti disponibili',
    loadPresets: 'Carica Preset',
    parameters: 'PARAMETRI',
    loadBalancing: 'Bilanciamento del Carico',
    loadBalancingDescription: 'Riduci la pressione con più set di credenziali.',
    loadBalancingHeadline: 'Bilanciamento del Carico',
    configLoadBalancing: 'Configura Bilanciamento del Carico',
    modelHasBeenDeprecated: 'Questo modello è stato deprecato',
    providerManaged: 'Gestito dal fornitore',
    providerManagedDescription:
      'Usa il singolo set di credenziali fornito dal fornitore del modello.',
    defaultConfig: 'Config predefinito',
    apiKeyStatusNormal: 'Stato APIKey normale',
    apiKeyRateLimit:
      'Il limite di velocità è stato raggiunto, disponibile dopo {{seconds}}s',
    addConfig: 'Aggiungi Configurazione',
    editConfig: 'Modifica Configurazione',
    loadBalancingLeastKeyWarning:
      'Per abilitare il bilanciamento del carico devono essere abilitate almeno 2 chiavi.',
    loadBalancingInfo:
      'Per impostazione predefinita, il bilanciamento del carico utilizza la strategia Round-robin. Se viene attivato il rate limiting, verrà applicato un periodo di cooldown di 1 minuto.',
    upgradeForLoadBalancing:
      'Aggiorna il tuo piano per abilitare il Bilanciamento del Carico.',
  },
  dataSource: {
    add: 'Aggiungi una fonte di dati',
    connect: 'Connetti',
    configure: 'Configura',
    notion: {
      title: 'Notion',
      description: 'Usa Notion come fonte di dati per la Conoscenza.',
      connectedWorkspace: 'Workspace connesso',
      addWorkspace: 'Aggiungi workspace',
      connected: 'Connesso',
      disconnected: 'Disconnesso',
      changeAuthorizedPages: 'Cambia pagine autorizzate',
      pagesAuthorized: 'Pagine autorizzate',
      sync: 'Sincronizza',
      remove: 'Rimuovi',
      selector: {
        pageSelected: 'Pagine selezionate',
        searchPages: 'Cerca pagine...',
        noSearchResult: 'Nessun risultato di ricerca',
        addPages: 'Aggiungi pagine',
        preview: 'ANTEPRIMA',
      },
    },
    website: {
      title: 'Sito web',
      description: 'Importa contenuti dai siti web utilizzando il web crawler.',
      with: 'Con',
      configuredCrawlers: 'Crawler configurati',
      active: 'Attivo',
      inactive: 'Inattivo',
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'API Key',
      apiKeyPlaceholder: 'Inserisci la tua API key',
      keyFrom: 'Ottieni la tua API key dalla pagina dell\'account SerpAPI',
    },
  },
  apiBasedExtension: {
    title:
      'Le estensioni API forniscono una gestione centralizzata delle API, semplificando la configurazione per un facile utilizzo nelle applicazioni di Dify.',
    link: 'Scopri come sviluppare la tua estensione API.',
    linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
    add: 'Aggiungi Estensione API',
    selector: {
      title: 'Estensione API',
      placeholder: 'Per favore seleziona l\'estensione API',
      manage: 'Gestisci Estensione API',
    },
    modal: {
      title: 'Aggiungi Estensione API',
      editTitle: 'Modifica Estensione API',
      name: {
        title: 'Nome',
        placeholder: 'Per favore inserisci il nome',
      },
      apiEndpoint: {
        title: 'Endpoint API',
        placeholder: 'Per favore inserisci l\'endpoint API',
      },
      apiKey: {
        title: 'API-key',
        placeholder: 'Per favore inserisci l\'API-key',
        lengthError:
          'La lunghezza della chiave API non può essere inferiore a 5 caratteri',
      },
    },
    type: 'Tipo',
  },
  about: {
    changeLog: 'Registro delle modifiche',
    updateNow: 'Aggiorna ora',
    nowAvailable: 'Dify {{version}} è ora disponibile.',
    latestAvailable: 'Dify {{version}} è l\'ultima versione disponibile.',
  },
  appMenus: {
    overview: 'Monitoraggio',
    promptEng: 'Orchestrazione',
    apiAccess: 'Accesso API',
    logAndAnn: 'Log & Ann.',
    logs: 'Log',
  },
  environment: {
    testing: 'TEST',
    development: 'SVILUPPO',
  },
  appModes: {
    completionApp: 'Generatore di Testi',
    chatApp: 'App di Chat',
  },
  datasetMenus: {
    documents: 'Documenti',
    hitTesting: 'Test di Recupero',
    settings: 'Impostazioni',
    emptyTip:
      'La Conoscenza non è stata associata, per favore vai all\'applicazione o al plug-in per completare l\'associazione.',
    viewDoc: 'Visualizza documentazione',
    relatedApp: 'app collegate',
  },
  voiceInput: {
    speaking: 'Parla ora...',
    converting: 'Conversione in testo...',
    notAllow: 'microfono non autorizzato',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'Rinomina Conversazione',
    conversationName: 'Nome della conversazione',
    conversationNamePlaceholder:
      'Per favore inserisci il nome della conversazione',
    conversationNameCanNotEmpty: 'Nome della conversazione obbligatorio',
    citation: {
      title: 'CITAZIONI',
      linkToDataset: 'Collegamento alla Conoscenza',
      characters: 'Caratteri:',
      hitCount: 'Conteggio dei recuperi:',
      vectorHash: 'Hash del vettore:',
      hitScore: 'Punteggio di recupero:',
    },
  },
  promptEditor: {
    placeholder:
      'Scrivi qui il tuo prompt, inserisci \'{\' per inserire una variabile, inserisci \'/\' per inserire un blocco di contenuto del prompt',
    context: {
      item: {
        title: 'Contesto',
        desc: 'Inserisci modello di contesto',
      },
      modal: {
        title: '{{num}} Conoscenza nel Contesto',
        add: 'Aggiungi Contesto ',
        footer: 'Puoi gestire i contesti nella sezione Contesto qui sotto.',
      },
    },
    history: {
      item: {
        title: 'Cronologia della Conversazione',
        desc: 'Inserisci modello di messaggio storico',
      },
      modal: {
        title: 'ESEMPIO',
        user: 'Ciao',
        assistant: 'Ciao! Come posso aiutarti oggi?',
        edit: 'Modifica i Nomi dei Ruoli della Conversazione',
      },
    },
    variable: {
      item: {
        title: 'Variabili & Strumenti Esterni',
        desc: 'Inserisci Variabili & Strumenti Esterni',
      },
      outputToolDisabledItem: {
        title: 'Variabili',
        desc: 'Inserisci Variabili',
      },
      modal: {
        add: 'Nuova variabile',
        addTool: 'Nuovo strumento',
      },
    },
    query: {
      item: {
        title: 'Query',
        desc: 'Inserisci modello di query dell\'utente',
      },
    },
    existed: 'Esiste già nel prompt',
  },
  imageUploader: {
    uploadFromComputer: 'Carica dal Computer',
    uploadFromComputerReadError:
      'Lettura dell\'immagine fallita, per favore riprova.',
    uploadFromComputerUploadError:
      'Caricamento dell\'immagine fallito, per favore ricarica.',
    uploadFromComputerLimit:
      'Le immagini caricate non possono superare i {{size}} MB',
    pasteImageLink: 'Incolla link immagine',
    pasteImageLinkInputPlaceholder: 'Incolla qui il link immagine',
    pasteImageLinkInvalid: 'Link immagine non valido',
    imageUpload: 'Caricamento Immagine',
  },
  tag: {
    placeholder: 'Tutti i Tag',
    addNew: 'Aggiungi nuovo tag',
    noTag: 'Nessun tag',
    noTagYet: 'Nessun tag ancora',
    addTag: 'Aggiungi tag',
    editTag: 'Modifica tag',
    manageTags: 'Gestisci Tag',
    selectorPlaceholder: 'Scrivi per cercare o creare',
    create: 'Crea',
    delete: 'Elimina tag',
    deleteTip: 'Il tag è in uso, eliminarlo?',
    created: 'Tag creato con successo',
    failed: 'Creazione del tag fallita',
  },
}

export default translation
