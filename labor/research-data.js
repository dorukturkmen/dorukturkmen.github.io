const researchArticles = [
    // --- Cluster 1: Visual and Material Everydayness ---
    {
        year: 2025,
        title: "Becoming Visible Without Being Seen: Evil Eye and Infant Imagery on Instagram in Turkey",
        authors: "Aytemiz, P.",
        journal: "Visual Anthropology, Taylor and Francis",
        cluster: "cluster-1",
        link: "https://doi.org/10.1080/08949468.2024.2406715"
    },
    {
        year: 2025,
        title: "Visual Narratives of Islamic Funeral Practices in the Late Ottoman Empire and Early Turkish Republic",
        authors: "Aytemiz, P.",
        journal: "Visual Anthropology. Issue 5: Islamic Societies Encounter Modernity.",
        cluster: "cluster-1",
        link: "http://doi.org/10.1080/08949468.2024.2409592"
    },
    {
        year: 2025,
        title: "Novice designers in museums: A constructively aligned framework bridging formal and informal learning through artefact analysis",
        authors: "Aysel, K., & Türkmen, D.",
        journal: "The Design Journal",
        cluster: "cluster-1",
        link: "https://doi.org/10.1080/14606925.2025.2524108"
    },
    {
        year: 2024,
        title: "Experiencing National Culture Abroad: Turkish Film Festivals in Germany",
        authors: "Özdemir, B. D.",
        journal: "Palgrave Macmillan",
        cluster: "cluster-1",
        link: null
    },
    {
        year: 2023,
        title: "Inventing a Selfie Studio: Turkey’s Studio Görçek",
        authors: "Baykan Calafato, Ö.",
        journal: "Middle East Journal of Culture and Communication",
        cluster: "cluster-1",
        link: "https://doi.org/10.1163/18739865-01603004"
    },
    {
        year: 2023,
        title: "Redefining the Black Turks through media representations by selected pro-government newspapers in Turkey in the aftermath of the Turkish coup attempt of 2016",
        authors: "Kızıltunalı, G.",
        journal: "Languages of politics. Cambridge Scholars Publishing",
        cluster: "cluster-1",
        link: null
    },
    {
        year: 2022,
        title: "Türk Güldürü Sinemasında Lümpen Tipler: Geniş Aile Serisinin Mizah Kuramları Bağlamında İncelenmesi",
        authors: "TÜRKAVCI, Erdem & Yıldıran Önk, Ürün",
        journal: "İstanbul Gelişim Üniversitesi Sosyal Bilimler Dergisi",
        cluster: "cluster-1",
        link: "https://doi.org/10.17336/igusbd.706872"
    },
    {
        year: 2022,
        title: "Making the modern Turkish citizen: Vernacular photography in the early Republican era",
        authors: "Baykan Calafato, Ö.",
        journal: "I.B. Tauris",
        cluster: "cluster-1",
        link: "https://doi.org/10.5040/9780755643301"
    },
    {
        year: 2022,
        title: "Reading Derridean Deconstruction on the Repetitive Visuals of an Avant-garde Design",
        authors: "Kızıltunalı, G.",
        journal: "Gaziantep University Journal of Social Sciences",
        cluster: "cluster-1",
        link: null
    },
    {
        year: 2021,
        title: "A feminist critique of femvertising: The example of Dove’s “My hair is beyond the rules” campaign",
        authors: "Dabak Özdemir, B.",
        journal: "İLEF Journal",
        cluster: "cluster-1",
        link: "https://doi.org/10.24955/ilef.935748"
    },
    {
        year: 2021,
        title: "Abounaddara and representation of dignity",
        authors: "Dabak Özdemir, B.",
        journal: "İletişim araştırmaları. Hiperlink",
        cluster: "cluster-1",
        link: null
    },
    {
        year: 2021,
        title: "Mağdur Varsa İzlenir: Yerli Televizyon Dizi Tanıtımlarında Mağduriyet",
        authors: "Yıldıran Önk, Ürün",
        journal: "Balıkesir Üniversitesi Sosyal Bilimler Enstitüsü Dergisi",
        cluster: "cluster-1",
        link: "https://doi.org/10.31795/baunsobed.948812"
    },
    {
        year: 2021,
        title: "Fotoğraflar yoluyla sosyokültürel bağlamların okunması: İzmir’in erken Cumhuriyet döneminde çekilen kadın fotoğrafları vaka çalışması",
        authors: "Yurt, C., Türkmen, D., Günduru, B., Destici, O., & Aşıcı, B.",
        journal: "Turkish Studies",
        cluster: "cluster-1",
        link: "http://dx.doi.org/10.7827/TurkishStudies.45192"
    },
    {
        year: 2020,
        title: "Haritada bir nokta: Türkiye sinemasında bir kaçış ve karşıtlıklar mekanı olarak ada [A dot on the map: Island as a place of encounters and opposition in Turkish cinema]",
        authors: "Dabak Özdemir, B., & Atabey, M.",
        journal: "Sinecine",
        cluster: "cluster-1",
        link: null
    },
    {
        year: 2020,
        title: "Yerli çocuk çizgi filmlerinde ideolojik bir söylem olarak yaşlılık: TRT Çocuk örneği [Aging as an ideological discourse in local cartoons: The example of TRT Çocuk]",
        authors: "Dabak Özdemir, B., & Yıldıran Önk, Ü.",
        journal: "Türkiye İletişim Araştırmaları Dergisi",
        cluster: "cluster-1",
        link: "https://doi.org/10.17336/turcom.804333"
    },
    {
        year: 2016,
        title: "From a vernacular photograph to an icon: The spirited face of Gezi Park resistance",
        authors: "Aytemiz, P.",
        journal: "Journalism and Mass Communication",
        cluster: "cluster-1",
        link: null
    },
    {
        year: 2015,
        title: "Making grandfather come out better: Portraits of ancestors and digital manipulation in contemporary Turkey",
        authors: "Aytemiz, P.",
        journal: "Middle East Journal of Culture and Communication",
        cluster: "cluster-1",
        link: "https://doi.org/10.1163/18739865-01603004"
    },
    {
        year: 2015,
        title: "Lost and found virginity: A critical look to the “reappearing hymen” in consumer culture",
        authors: "Aytemiz, P.",
        journal: "Galatasaray University Journal of Communication",
        cluster: "cluster-1",
        link: null
    },
    {
        year: 2014,
        title: "Ekrandaki Öteki: 2000 Sonrası Yerli Dizilerde Azınlıkların Temsili",
        authors: "Yıldıran Önk, Ürün & SÖNMEZ SELÇUK, Senem",
        journal: "Kültür ve İletişim Dergisi",
        cluster: "cluster-1",
        link: "https://dergipark.org.tr/tr/pub/kulturveiletisim/issue/64580/985348"
    },
    {
        year: 2013,
        title: "Death photography in Turkey in the late 1800s and early 1900s: Defining an area of study",
        authors: "Aytemiz, P.",
        journal: "Early Popular Visual Culture",
        cluster: "cluster-1",
        link: "https://doi.org/10.1080/17460654.2013.831738"
    },
    {
        year: 2012,
        title: "Creativity as the Problem of Fashion and Reading Margiela",
        authors: "Kızıltunalı, G.",
        journal: "Humanities and Social Sciences Review",
        cluster: "cluster-1",
        link: null
    },
    {
        year: 2011,
        title: "Türk Sineması’nda Türler Üzerine Bir İnceleme (1970-1980)",
        authors: "Yıldıran Önk, Ürün",
        journal: "Journal of Yaşar University",
        cluster: "cluster-1",
        link: "https://dergipark.org.tr/tr/pub/jyasar/issue/19135/203059"
    },

    // --- Cluster 2: Digital and Platformized Everyday Life ---
    {
        year: 2026,
        title: "Post-humanization as a process: Cyborg art, sensory reconfiguration, and networked mediation",
        authors: "Gökbayrak, S.",
        journal: "European Conference on Social Media",
        cluster: "cluster-2",
        link: null
    },
    {
        year: 2024,
        title: "Cultural heritage manifestation in computer role-playing games for enhancing museum experience: A model proposal",
        authors: "Türkmen, D., & Savasta, D.",
        journal: "Journal of Museum Education",
        cluster: "cluster-2",
        link: "https://doi.org/10.1080/10598650.2024.2391718"
    },
    {
        year: 2023,
        title: "The Use of Artificial Intelligence (AI) in Online Learning and Distance Education Processes: A Systematic Review of Empirical Studies",
        authors: "Dogan, M. E., Goru Dogan, T., & Bozkurt, A.",
        journal: "Applied Sciences",
        cluster: "cluster-2",
        link: "https://doi.org/10.3390/app13053056"
    },
    {
        year: 2023,
        title: "Türkiye’de popüler kültür paradigmaları: 2000’ler sonrası değişen medya pratikleri",
        authors: "Dabak Özdemir, B.",
        journal: "Literatürk",
        cluster: "cluster-2",
        link: null
    },
    {
        year: 2023,
        title: "Aşk and prekarya: Romantik komedilerin yeni sınıfı",
        authors: "Dabak Özdemir, B.",
        journal: "Türkiye’de popüler kültür paradigmaları (Literatürk)",
        cluster: "cluster-2",
        link: null
    },
    {
        year: 2023,
        title: "Küresel ve Yerelin Kesişiminde Popüler Bir Medya İçeriği Olarak Yerli Diziler",
        authors: "Yıldıran Önk, Ürün",
        journal: "Türkiye’de Popüler Kültür Paradigmaları (Literatürk)",
        cluster: "cluster-2",
        link: null
    },
    {
        year: 2022,
        title: "How do youth watch dizi? A critical audience research in the framework of the new television ecosystem in Turkey",
        authors: "Yıldıran Önk Ürün, D., & Dabak Özdemir, B.",
        journal: "Intermedia",
        cluster: "cluster-2",
        link: null
    },
    {
        year: 2022,
        title: "Gençler Yerli Dizileri Nasıl İzliyor? Türkiye’de Yeni Televizyon Ekosistemi Çerçevesinde Eleştirel Bir İzleyici Araştırması",
        authors: "Yıldıran Önk, Ürün & DABAK ÖZDEMİR, Burcu",
        journal: "Intermedia International E-journal",
        cluster: "cluster-2",
        link: "https://doi.org/10.56133/intermedia.1113459"
    },
    {
        year: 2022,
        title: "Work of art in the age of metaverse: Exploring digital art through augmented reality",
        authors: "Varinlioğlu, G., Oğuz, K., Türkmen, D., Ercan, İ., & Turhan, G. D.",
        journal: "Proceedings of the 40th eCAADe Conference",
        cluster: "cluster-2",
        link: "https://doi.org/10.52842/conf.ecaade.2022.2.447"
    },
    {
        year: 2021,
        title: "Sosyal Televizyon Bağlamında Yerli Dizilerin Sosyal Medya Kullanımı Üzerine Bir İnceleme: Sen Çal Kapımı Örneği",
        authors: "Yıldıran Önk, Ürün",
        journal: "Disiplinlerarası Yaklaşımla Sosyal Medya - 2 (Literatürk)",
        cluster: "cluster-2",
        link: null
    },
    {
        year: 2020,
        title: "Yarına Ne Kalacak? Dijital Dönüşüm, Yerel Televizyonlar ve Program Arşivleri Sorunu: İzmir Örneği",
        authors: "İNCEOĞLU, Çağrı & Yıldıran Önk, Ürün",
        journal: "Dijital İletişim –Kuram ve Araştırmaları– (Nobel Akademik)",
        cluster: "cluster-2",
        link: null
    },
    {
        year: 2020,
        title: "Détournement in Social Media Visuals for a Shared Activist Identity and Imagery",
        authors: "Kızıltunalı, G.",
        journal: "Visual Communication",
        cluster: "cluster-2",
        link: null
    },
    {
        year: 2020,
        title: "Your buddy, the grandmaster: Repurposing the game-playing AI surplus for inclusivity",
        authors: "Aytemiz, B., Shu, X., Hu, E., & Smith, A. M.",
        journal: "Proceedings of the AAAI Conference on AIIDE",
        cluster: "cluster-2",
        link: "https://doi.org/10.1609/aiide.v16i1.7402"
    },
    {
        year: 2020,
        title: "A diagnostic taxonomy of failure in videogames",
        authors: "Aytemiz, B., & Smith, A. M.",
        journal: "Proceedings of the 15th International Conference on FDG ’20",
        cluster: "cluster-2",
        link: "https://doi.org/10.1145/3402942.3402979"
    },
    {
        year: 2019,
        title: "Exploring how changes in game systems generate meaning",
        authors: "Aytemiz, B., Junius, N., & Altice, N.",
        journal: "Proceedings of DiGRA 2019 Conference",
        cluster: "cluster-2",
        link: "https://doi.org/10.26503/dl.v2019i1.1083"
    },
    {
        year: 2018,
        title: "Talin: A framework for dynamic tutorials based on the skill atoms theory",
        authors: "Aytemiz, B., Karth, I., Harder, J., Smith, A. M., & Whitehead, J.",
        journal: "Proceedings of the AAAI Conference on AIIDE",
        cluster: "cluster-2",
        link: "https://doi.org/10.1609/aiide.v14i1.13040"
    },
    {
        year: 2016,
        title: "Thoughts on the new Dadaist tactic of our era: “Sweded films” and Michel Gondry’s Be Kind Rewind",
        authors: "Aytemiz, P.",
        journal: "The Turkish Online Journal of Design, Art and Communication",
        cluster: "cluster-2",
        link: null
    },
    {
        year: 2016,
        title: "Simulated Identities: Social Media and the Reconciliation of the Real and Ideal",
        authors: "Kızıltunalı, G.",
        journal: "Media Psychology Review",
        cluster: "cluster-2",
        link: null
    },
    {
        year: 2004,
        title: "Örümcek Adam’ın ağına takılan dünyada okur",
        authors: "İçağasıoğlu, B., & Aytemiz, P.",
        journal: "Folklor/Edebiyat",
        cluster: "cluster-2",
        link: null
    },

    // --- Cluster 3: Memory, Affect, and Temporality ---
    {
        year: 2025,
        title: "Memory corners: Intimacy, loss, and the nation at home",
        authors: "Aytemiz, P.",
        journal: "Eidolon Journal",
        cluster: "cluster-3",
        link: null
    },
    {
        year: 2025,
        title: "The Furious Women and Victim Men of Turkish Pop Music: A Lyrical Exploration of Turkish Pop Hits of the 2000s",
        authors: "Özdemir, B. D.",
        journal: "Popular Music and Society",
        cluster: "cluster-3",
        link: "https://doi.org/10.1080/03007766.2025.2476193"
    },
    {
        year: 2023,
        title: "Gender, Sustainability, and Urbanism: A Systematic Review of Literature and Cross-Cluster Analysis",
        authors: "Gudekli, A., Dogan, M. E., Goru Dogan, T., & Gudekli, D.",
        journal: "Sustainability",
        cluster: "cluster-3",
        link: "https://doi.org/10.3390/su152014994"
    },
    {
        year: 2023,
        title: "Yerli Polisiyelerin Yüceltilen Erkekleri ve Bastırılan Kadınları",
        authors: "Gürkaya Açık, Tuğba & Yıldıran Önk, Ürün",
        journal: "Akdeniz Kadın Çalışmaları ve Toplumsal Cinsiyet Dergisi",
        cluster: "cluster-3",
        link: "https://doi.org/10.33708/ktc.1189321"
    },
    {
        year: 2023,
        title: "'That still goes on, doesn't it, in their religion?' British values, Islam and vernacular discourse",
        authors: "Atakav, E.",
        journal: "Nations and Nationalism",
        cluster: "cluster-3",
        link: "https://doi.org/10.1111/nana.1284"
    },
    {
        year: 2022,
        title: "Constructing girlhood in Turkey: astrology in the Turkish HeyGirl magazine",
        authors: "Özdemir, B. D.",
        journal: "Feminist Media Studies",
        cluster: "cluster-3",
        link: "https://doi.org/10.1080/14680777.2022.2110511"
    },
    {
        year: 2021,
        title: "Cross-dressing in Turkish cinema: Politics, gender and national trauma",
        authors: "Dabak Özdemir, B.",
        journal: "I.B. Tauris",
        cluster: "cluster-3",
        link: null
    },
    {
        year: 2021,
        title: "Post-feminism ala-Turca: Women of new Turkish romantic comedies",
        authors: "Dabak Özdemir, B.",
        journal: "Journal of Middle East Women’s Studies",
        cluster: "cluster-3",
        link: "https://doi.org/10.1215/15525864-8949436"
    },
    {
        year: 2021,
        title: "Hegemonik erkeklik anlatılarında fazlalık ve eksiklikler: Çukur dizisi örneği",
        authors: "Akyüz Tursun, S., & Dabak Özdemir, B.",
        journal: "Popüler kültür ve sosyal değişim (Çizgi Yayınları)",
        cluster: "cluster-3",
        link: null
    },
    {
        year: 2021,
        title: "Establishment of sexual normality: Heteronormativity and its instability from the Ottoman to the Turkish Republic",
        authors: "Dabak Özdemir, B.",
        journal: "Masculinities: A Journal of Culture and Society",
        cluster: "cluster-3",
        link: null
    },
    {
        year: 2021,
        title: "Suskunluk Sarmalı Kuramı Çerçevesinde Türk Basını: Cem Karaca’nın Vatandaşlıktan Çıkarılışı ve Dönüşü Haberleri",
        authors: "Özer, Asuman & Yıldıran Önk, Ürün",
        journal: "Türkiye İletişim Araştırmaları Dergisi",
        cluster: "cluster-3",
        link: "https://doi.org/10.17336/turcom.933856"
    },
    {
        year: 2020,
        title: "Yasın yurtsuzlaştırdığı kadınlar: Antigone [Women deterritorialized by mourning: Antigone]",
        authors: "Dabak Özdemir, B.",
        journal: "Folklor/Edebiyat",
        cluster: "cluster-3",
        link: "https://doi.org/10.22559/folklor.1170"
    },
    {
        year: 2020,
        title: "Yerli Dizilerde Geçiş Ritüelleri: Kına Gecesi Örneği",
        authors: "Yıldıran Önk, Ürün & Gökaliler, Ebru",
        journal: "Folklor / Edebiyat",
        cluster: "cluster-3",
        link: "http://dx.doi.org/10.22559/folklor.1226"
    },
    {
        year: 2018,
        title: "The wide open windows of Cholera Street: On the light and sound leaking through/to the private space",
        authors: "Aytemiz, P.",
        journal: "İlef Dergisi",
        cluster: "cluster-3",
        link: null
    },
    {
        year: 2016,
        title: "The uncanny homes of Fatih Akın’s Head-On",
        authors: "Aytemiz, P.",
        journal: "Sinecine: Journal of Film Studies",
        cluster: "cluster-3",
        link: null
    },
    {
        year: 2009,
        title: "Baudrillard Perspektifinden Bir Kitle İletişim Ve Sanat Aracı Olarak Simülasyon Evreninde Televizyon",
        authors: "Yıldıran Önk, Ürün",
        journal: "Selçuk İletişim",
        cluster: "cluster-3",
        link: "https://dergipark.org.tr/tr/pub/josc/issue/19018/200678"
    },

    // --- Cluster 4: Real Life Methodologies Lab ---
    {
        year: 2024,
        title: "Televizyon Okuryazarlığında Stratejiler: Televizyon Okuryazarı İçin Bir Yol Haritası",
        authors: "Yıldıran Önk Ürün",
        journal: "Medya Okuryazarlığı Türler, İzleyici ve Çözümleme (Kalkedon)",
        cluster: "cluster-4",
        link: null
    },
    {
        year: 2024,
        title: "The impact of documentary filmmaking: Academics as agents of social and political change",
        authors: "Atakav, E.",
        journal: "Academic Quarter",
        cluster: "cluster-4",
        link: "https://doi.org/10.54337/academicquarter.i27.8823"
    },
    {
        year: 2022,
        title: "Reading Derridean Deconstruction on the Repetitive Visuals of an Avant-garde Design",
        authors: "Kızıltunalı, G.",
        journal: "Gaziantep University Journal of Social Sciences",
        cluster: "cluster-4",
        link: null
    },
    {
        year: 2021,
        title: "Content reinjection for Super Metroid",
        authors: "Mawhorter, R., Aytemiz, B., Karth, I., & Smith, A.",
        journal: "Proceedings of the AAAI Conference on AIIDE",
        cluster: "cluster-4",
        link: "https://doi.org/10.1609/aiide.v17i1.18905"
    },
    {
        year: 2021,
        title: "Neurosymbolic map generation with VQ-VAE and WFC",
        authors: "Karth, I., Aytemiz, B., Mawhorter, R., & Smith, A. M.",
        journal: "Proceedings of the 16th International Conference on FDG ’21",
        cluster: "cluster-4",
        link: "https://doi.org/10.1145/3472538.3472584"
    },
    {
        year: 2020,
        title: "Yerli Diziler Üzerine Bir Tür İncelemesi (2000-2020)",
        authors: "Yıldıran Önk, Ürün",
        journal: "İletişim Bilimi Araştırmaları I (Hiperlink)",
        cluster: "cluster-4",
        link: null
    },
    {
        year: 2019,
        title: "Reveal-More: Amplifying human effort in quality assurance testing using automated exploration",
        authors: "Chang, K., Aytemiz, B., & Smith, A. M.",
        journal: "2019 IEEE Conference on Games (CoG)",
        cluster: "cluster-4",
        link: "https://doi.org/10.1109/CIG.2019.8848091"
    },
    {
        year: 2019,
        title: "Taking the scenic route: Automatic exploration for videogames",
        authors: "Zhan, Z., Aytemiz, B., & Smith, A. M.",
        journal: "Proceedings of the Second AAAI Workshop on KEG@AAAI 2019",
        cluster: "cluster-4",
        link: null
    },
    {
        year: 2018,
        title: "Çok Bilen Çok Kazanır mı? Türk Televizyonlarındaki Quiz Show’lara Yönelik Eleştirel Bir Çözümleme",
        authors: "Yıldıran Önk, Ürün",
        journal: "Türkiye’de Televizyon Formatları Eleştirel Çalışmalar (Doruk)",
        cluster: "cluster-4",
        link: null
    }
];
