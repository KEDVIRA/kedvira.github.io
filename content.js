/*
 KEDVIRA LAB — EDITABLE WEBSITE CONTENT
 No build tool or external dependencies required.
 IMPORTANT: Replace empty values in settings with VERIFIED data only.
 Never list a paper, person or grant until confirmed.
*/
window.KEDVIRA_SITE = {
  settings: {
    email: "",                 // e.g. research@your-university.edu.vn
    institution: "",           // official university / faculty name
    institutionUrl: "",        // https://...
    location: "",              // optional; do not invent a street address
    github: "",                // https://github.com/your-group
    scholar: "",               // official Google Scholar profile, if any
    websiteUrl: "",            // final HTTPS URL, used for SEO once published
    people: [],                 // {name, role_vi, role_en, affiliation_vi, affiliation_en, interests_vi, interests_en, profile, image, email}
    publications: []           // {title, authors, venue, year, type, doi, url} — verified only
  },
  vi: {
    locale: "vi",
    nav: {about:"Giới thiệu",research:"Nghiên cứu",approach:"Phương pháp",initiatives:"Định hướng",publications:"Công trình",people:"Thành viên",contact:"Liên hệ"},
    misc: {menu:"Mở menu",closeMenu:"Đóng menu",skip:"Bỏ qua điều hướng",backToTop:"Lên đầu trang",language:"Ngôn ngữ",home:"Trang chủ",external:"Mở liên kết ngoài",learnMore:"Khám phá thêm"},
    hero: {
      eyebrow:"KNOWLEDGE-DRIVEN ARTIFICIAL INTELLIGENCE",
      kicker:"NHÓM NGHIÊN CỨU LIÊN NGÀNH",
      line1:"Kết nối tri thức.",line2:"Mở lối khám phá thông minh.",
      lead:"Chúng tôi nghiên cứu đồ thị tri thức, truy xuất thông tin ngữ nghĩa và trí tuệ nhân tạo hướng đến các hệ thống giáo dục có khả năng giải thích, đáng tin cậy và hữu ích.",
      primary:"Khám phá nghiên cứu",secondary:"Tìm hiểu về KEDVIRA",
      visualEyebrow:"RESEARCH ECOSYSTEM",visualCenter:"KNOWLEDGE",nodes:["SEMANTICS","VISION","RETRIEVAL","EDUCATION","REASONING","AI AGENTS"],
      focusLabel:"BA TRỤ CỘT",focus:["Knowledge Graphs","Semantic Retrieval","AI in Education"],scroll:"CUỘN ĐỂ KHÁM PHÁ"
    },
    about: {
      eyebrow:"01 / VỀ CHÚNG TÔI",title:"Nghiên cứu sâu. Kết nối rộng. Tạo tác động thực.",
      description:"<strong>KEDVIRA Lab</strong> là tên thương hiệu dự kiến cho một nhóm nghiên cứu tập trung vào <strong>trí tuệ nhân tạo dựa trên tri thức</strong> (knowledge-driven AI). Nhóm đặt các phương pháp biểu diễn và suy luận trên đồ thị làm nền tảng, kết hợp truy xuất đa phương thức và ứng dụng trong giáo dục.",
      expanded:"Knowledge-Enhanced Discovery, Vision, Intelligent Retrieval & AI",
      fullLabel:"TÊN TIẾNG ANH MỞ RỘNG",missionLabel:"SỨ MỆNH CỐT LÕI",
      mission:"Kết nối tri thức có cấu trúc với AI hiện đại để phát triển phương pháp truy xuất, suy luận và hệ thống hỗ trợ học tập có căn cứ.",
      stat1:"hướng nghiên cứu",stat2:"trụ cột liên kết",stat3:"tầm nhìn chung",
      note:"Hồ sơ học thuật đang trong giai đoạn xây dựng; thông tin nhân sự và công bố sẽ chỉ xuất hiện khi được xác minh."
    },
    pillars: {
      eyebrow:"HỆ SINH THÁI TRI THỨC",title:"Ba trụ cột. Một chương trình nghiên cứu.",
      sub:"Các trụ cột bổ trợ lẫn nhau — từ tri thức có cấu trúc, đến khai thác ngữ nghĩa, và ứng dụng có trách nhiệm.",
      items:[
        {num:"I",tag:"REPRESENT",title:"Knowledge Graphs",description:"Mô hình hóa đối tượng, quan hệ và ngữ cảnh để kết nối dữ liệu thành tri thức có thể truy vấn và suy luận.",keywords:"Ontology · Graph Reasoning · GraphRAG"},
        {num:"II",tag:"RETRIEVE",title:"Semantic Retrieval",description:"Khai thác nội dung và ý nghĩa trong ảnh, văn bản và dữ liệu đa phương thức để tìm kiếm chính xác hơn.",keywords:"Visual Search · Cross-modal · Reranking"},
        {num:"III",tag:"EMPOWER",title:"AI in Education",description:"Đưa các phương pháp AI dựa trên tri thức vào dạy học, tư vấn học tập và các hệ thống hỗ trợ giáo dục.",keywords:"Educational KG · Learning Agents · AIED"}
      ]
    },
    research: {
      eyebrow:"02 / RESEARCH AREAS",title:"Bốn hướng nghiên cứu chủ lực.",
      sub:"Các hướng được tổ chức thành nền tảng phương pháp, tích hợp theo miền và phát triển ứng dụng; có thể mở rộng theo kết quả nghiên cứu.",
      tagFoundational:"PHƯƠNG PHÁP NỀN TẢNG",tagDomain:"TRI THỨC THEO MIỀN",tagApplied:"AI ỨNG DỤNG",
      areas:[
        {id:"R1",kind:"foundational",symbol:"graph",title:"Knowledge Graphs & Graph Intelligence",vi:"Đồ thị tri thức và trí tuệ đồ thị",description:"Biểu diễn tri thức, xây dựng ontology, suy luận trên đồ thị và học biểu diễn. Nghiên cứu vai trò của tri thức có cấu trúc trong các mô hình AI.",tags:["Knowledge Graph","Graph Learning","Reasoning","GraphRAG"]},
        {id:"R2",kind:"foundational",symbol:"image",title:"Semantic Image & Multimodal Retrieval",vi:"Truy xuất ảnh ngữ nghĩa và đa phương thức",description:"Truy xuất ảnh dựa trên nội dung và ngữ nghĩa; kết hợp đồ thị cảnh, mô hình ảnh–ngôn ngữ, embedding và các phương pháp tái xếp hạng.",tags:["Semantic IR","Vision-Language","Reranking","Multimodal"]},
        {id:"R3",kind:"domain",symbol:"book",title:"Educational Knowledge Engineering",vi:"Kỹ nghệ tri thức giáo dục",description:"Biểu diễn chương trình đào tạo, học phần, chuẩn đầu ra và quan hệ tiên quyết thành đồ thị tri thức; hỗ trợ phân tích và khuyến nghị học tập.",tags:["Educational KG","Curriculum","Competency","Learning Analytics"]},
        {id:"R4",kind:"applied",symbol:"brain",title:"Knowledge-Driven AI for Education",vi:"AI dựa trên tri thức cho giáo dục",description:"Thiết kế trợ lý học phần, hệ thống hỏi đáp có căn cứ, tác tử AI và công cụ hỗ trợ giảng viên, hướng tới tính minh bạch và kiểm chứng được.",tags:["AI Agents","Educational RAG","Personalization","Trustworthy AI"]}
      ]
    },
    approach: {
      eyebrow:"03 / RESEARCH PHILOSOPHY",title:"Từ biểu diễn tri thức đến kết quả có thể kiểm chứng.",
      sub:"Chúng tôi ưu tiên giả thuyết rõ ràng, thực nghiệm có baseline, chỉ số phù hợp và khả năng tái lập.",
      steps:[
        {number:"01",title:"Structure",detail:"Biểu diễn dữ liệu và quan hệ trong các mô hình tri thức có cấu trúc."},
        {number:"02",title:"Retrieve",detail:"Tìm kiếm và liên kết bằng chứng từ nội dung ngữ nghĩa, thị giác và đa phương thức."},
        {number:"03",title:"Reason",detail:"Đánh giá, suy luận và giải thích kết quả bằng dữ liệu và tri thức liên quan."},
        {number:"04",title:"Apply",detail:"Kiểm thử trong các bài toán thực tế, đặc biệt là hệ thống phục vụ giáo dục."}
      ],
      quote:"Good research should be reproducible. Good AI should be accountable.",quoteVi:"Nghiên cứu tốt cần có khả năng tái lập. AI tốt cần có trách nhiệm giải trình."
    },
    initiatives: {
      eyebrow:"04 / RESEARCH AGENDA",title:"Các hướng phát triển ưu tiên.",
      sub:"Đây là các chương trình nghiên cứu <strong>đề xuất</strong> để định hình hoạt động của nhóm; không được hiểu là dự án đã được phê duyệt hoặc triển khai.",
      status:"ĐỊNH HƯỚNG ĐỀ XUẤT",
      items:[
        {id:"01",title:"Knowledge-aware Visual Retrieval",vi:"Truy xuất ảnh có nhận biết tri thức",description:"Kết hợp biểu diễn thị giác, tri thức quan hệ và bộ tái xếp hạng nhằm cải thiện độ liên quan của kết quả truy xuất.",tag:"SEMANTIC RETRIEVAL"},
        {id:"02",title:"Curriculum Knowledge Graph",vi:"Đồ thị tri thức chương trình đào tạo",description:"Xây dựng cấu trúc học phần, kỹ năng và quan hệ tiên quyết để khám phá lộ trình học tập và kiểm tra tính nhất quán.",tag:"EDUCATIONAL KG"},
        {id:"03",title:"Evidence-grounded Course Assistant",vi:"Trợ lý học phần dựa trên bằng chứng",description:"Khảo sát RAG/GraphRAG cho hỏi đáp học thuật có trích dẫn nguồn, kiểm soát sai lệch và hỗ trợ giảng viên.",tag:"AI IN EDUCATION"}
      ]
    },
    publications: {
      eyebrow:"05 / SCHOLARLY OUTPUT",title:"Công bố & tài nguyên nghiên cứu.",
      sub:"Tính minh bạch và khả năng kiểm chứng là một phần của bản sắc nhóm. Chỉ công bố thông tin bài báo, dữ liệu và mã nguồn khi đã xác minh.",
      emptyTitle:"Danh mục công bố đang được hoàn thiện.",emptyBody:"Bài báo, DOI, tác giả, liên kết mã nguồn và dữ liệu sẽ xuất hiện tại đây sau khi nhóm cung cấp thông tin đã kiểm chứng.",
      meta:"BÀI BÁO · DỮ LIỆU · MÃ NGUỒN",visit:"Xem công bố",doi:"DOI",policy:"Không sử dụng bài báo hoặc số liệu thành tích minh họa giả."
    },
    people: {
      eyebrow:"06 / PEOPLE & CULTURE",title:"Nghiên cứu là một nỗ lực cộng tác.",
      sub:"Nhóm hướng đến một môi trường cởi mở cho giảng viên, nghiên cứu sinh, học viên và sinh viên quan tâm đến AI dựa trên tri thức.",
      emptyTitle:"Thông tin thành viên sẽ được cập nhật.",emptyBody:"Hồ sơ cá nhân, vai trò, chuyên môn và liên kết ORCID/Google Scholar sẽ được công bố khi có xác nhận từ nhóm.",
      cultureTitle:"Nguyên tắc làm việc",culture:["Chính xác và có căn cứ","Thực nghiệm có thể tái lập","Hợp tác và phản biện xây dựng","AI có trách nhiệm"],
      join:"Hợp tác nghiên cứu",profile:"Hồ sơ nghiên cứu"
    },
    directory: {
      shared: {
        breadcrumbHome:"Trang chủ", verified:"Đã cập nhật", pending:"Chưa có dữ liệu chính thức",
        example:"DỮ LIỆU MẪU",openProfile:"Xem hồ sơ",viewPaper:"Xem công trình", updated:"ĐÃ XÁC MINH",
        privacy:"Chỉ công bố thông tin thành viên và công trình khi đã được xác nhận, đồng ý và kiểm tra tính chính xác."
      },
      people: {
        eyebrow:"KEDVIRA / NHÂN SỰ NGHIÊN CỨU",title:"Thành viên nhóm nghiên cứu",
        lead:"Những người cùng phát triển nghiên cứu về đồ thị tri thức, truy xuất ngữ nghĩa và trí tuệ nhân tạo trong giáo dục.",
        listEyebrow:"DANH SÁCH NHÂN SỰ",listTitle:"Thành viên & cộng tác viên",
        waiting:"Các vị trí bên dưới là placeholder bố cục, chưa đại diện cho nhân sự thực tế.",
        note:"Khi có thông tin thành viên được phê duyệt, danh sách thật sẽ tự động thay thế toàn bộ hàng mẫu. Không có người thật hay chức danh được tự ý công bố.",
        count:(n)=>`${n} thành viên đã cập nhật`,
        samples:[
          {role:"Trưởng nhóm nghiên cứu",name:"[Họ và tên]",info:"[Học hàm/học vị · Đơn vị công tác · Chuyên môn]"},
          {role:"Giảng viên / Nghiên cứu viên",name:"[Họ và tên]",info:"[Đơn vị công tác · Hướng nghiên cứu]"},
          {role:"Học viên cao học / Nghiên cứu sinh",name:"[Họ và tên]",info:"[Chương trình đào tạo · Chủ đề nghiên cứu]"},
          {role:"Sinh viên nghiên cứu",name:"[Họ và tên]",info:"[Ngành học · Đề tài tham gia]"}
        ]
      },
      publications: {
        eyebrow:"KEDVIRA / SCHOLARLY OUTPUT",title:"Công trình khoa học",
        lead:"Danh mục bài báo tạp chí, bài báo hội nghị và các công trình nghiên cứu được cập nhật theo thông tin xuất bản đã xác minh.",
        listEyebrow:"PUBLICATIONS",listTitle:"Danh mục công trình",
        waiting:"Các mục bên dưới chỉ minh họa cấu trúc danh sách, không phải công trình đã xuất bản.",
        note:"Chỉ thêm công trình có thông tin tác giả, nơi công bố và năm rõ ràng. DOI và đường dẫn phải được kiểm tra trước khi đưa lên website.",
        count:(n)=>`${n} công trình đã cập nhật`,
        types:{journal:"Tạp chí khoa học",conference:"Hội nghị khoa học",preprint:"Bản thảo / Preprint",other:"Công trình khác"},
        samples:[
          {kind:"Tạp chí khoa học",title:"[Tên bài báo tạp chí]",meta:"[Danh sách tác giả · Tạp chí · Năm · DOI]"},
          {kind:"Hội nghị khoa học",title:"[Tên bài báo hội nghị]",meta:"[Danh sách tác giả · Tên hội nghị · Năm]"},
          {kind:"Công trình khác",title:"[Tên công trình / báo cáo / preprint]",meta:"[Danh sách tác giả · Nơi công bố · Năm · Liên kết]"}
        ]
      },
      cta:{eyebrow:"KẾT NỐI NGHIÊN CỨU",title:"Cùng phát triển tri thức và các hệ thống AI có căn cứ.",body:"Khám phá chương trình nghiên cứu hoặc quay về trang chủ để tìm hiểu sứ mệnh của KEDVIRA.",research:"Khám phá hướng nghiên cứu",home:"Về trang chủ"}
    },
    homeLinks:{
      eyebrow:"KHÁM PHÁ KEDVIRA",title:"Con người & công trình nghiên cứu.",lead:"Danh mục thành viên và các công trình được quản lý ở hai trang riêng, sử dụng bố cục danh sách và chỉ hiển thị dữ liệu đã xác minh.",
      publicationsTag:"PUBLICATIONS",publicationsTitle:"Công trình khoa học",publicationsDescription:"Các bài báo tạp chí, hội nghị và kết quả nghiên cứu của nhóm.",
      peopleTag:"RESEARCH PEOPLE",peopleTitle:"Thành viên nhóm nghiên cứu",peopleDescription:"Thông tin nhân sự, vai trò và hướng nghiên cứu chuyên môn.",action:"Xem danh sách"
    },
    contact: {
      eyebrow:"07 / CONNECT",title:"Cùng xây dựng AI dựa trên tri thức.",
      sub:"Chúng tôi quan tâm đến hợp tác học thuật, đề tài nghiên cứu, hướng dẫn sinh viên và ứng dụng AI trong giáo dục.",
      collab:"HỢP TÁC & KẾT NỐI",emailLabel:"Email học thuật",institutionLabel:"Đơn vị chủ quản",locationLabel:"Địa điểm",pending:"Sẽ cập nhật khi được xác nhận",emailAction:"Gửi email",github:"GitHub",scholar:"Google Scholar",bottom:"Muốn tham gia một chương trình nghiên cứu? Hãy theo dõi website để nhận thông báo chính thức."
    },
    footer: {statement:"Knowledge-Enhanced Discovery, Vision, Intelligent Retrieval & AI",rights:"Bản quyền nội dung và bộ nhận diện thuộc đơn vị sở hữu tương ứng sau khi được phê duyệt.",back:"Lên đầu trang",built:"Website giới thiệu học thuật · Song ngữ Việt / Anh",brand:"Bộ nhận diện thương hiệu"}
  },
  en: {
    locale: "en",
    nav: {about:"About",research:"Research",approach:"Approach",initiatives:"Research Agenda",publications:"Publications",people:"People",contact:"Contact"},
    misc: {menu:"Open menu",closeMenu:"Close menu",skip:"Skip to content",backToTop:"Back to top",language:"Language",home:"Home",external:"Open external link",learnMore:"Explore more"},
    hero: {
      eyebrow:"KNOWLEDGE-DRIVEN ARTIFICIAL INTELLIGENCE",
      kicker:"INTERDISCIPLINARY RESEARCH GROUP",
      line1:"Connected knowledge.",line2:"Intelligent discovery.",
      lead:"We investigate knowledge graphs, semantic information retrieval, and artificial intelligence to advance explainable, reliable, and useful educational systems.",
      primary:"Explore our research",secondary:"About KEDVIRA",
      visualEyebrow:"RESEARCH ECOSYSTEM",visualCenter:"KNOWLEDGE",nodes:["SEMANTICS","VISION","RETRIEVAL","EDUCATION","REASONING","AI AGENTS"],
      focusLabel:"THREE PILLARS",focus:["Knowledge Graphs","Semantic Retrieval","AI in Education"],scroll:"SCROLL TO EXPLORE"
    },
    about: {
      eyebrow:"01 / ABOUT",title:"Rigorous research. Connected ideas. Meaningful impact.",
      description:"<strong>KEDVIRA Lab</strong> is the proposed identity of a research group working on <strong>knowledge-driven artificial intelligence</strong>. Graph-based knowledge representation and reasoning serve as foundations, complemented by multimodal retrieval and educational applications.",
      expanded:"Knowledge-Enhanced Discovery, Vision, Intelligent Retrieval & AI",
      fullLabel:"EXPANDED ENGLISH NAME",missionLabel:"OUR CORE MISSION",
      mission:"Connect structured knowledge with modern AI to develop evidence-grounded methods for retrieval, reasoning, and learning support.",
      stat1:"research areas",stat2:"connected pillars",stat3:"shared mission",
      note:"This research profile is in development. Team membership and publications are shown only when verified."
    },
    pillars: {
      eyebrow:"A CONNECTED RESEARCH ECOSYSTEM",title:"Three pillars. One research program.",
      sub:"Our pillars reinforce one another — from structured knowledge to semantic discovery and responsible real-world applications.",
      items:[
        {num:"I",tag:"REPRESENT",title:"Knowledge Graphs",description:"Model entities, relations, and context to transform disconnected data into knowledge that can be queried and reasoned over.",keywords:"Ontology · Graph Reasoning · GraphRAG"},
        {num:"II",tag:"RETRIEVE",title:"Semantic Retrieval",description:"Capture meaning from images, language, and multimodal content to enable more relevant and explainable search.",keywords:"Visual Search · Cross-modal · Reranking"},
        {num:"III",tag:"EMPOWER",title:"AI in Education",description:"Apply knowledge-driven AI to teaching, academic advising, and supportive, human-centered educational systems.",keywords:"Educational KG · Learning Agents · AIED"}
      ]
    },
    research: {
      eyebrow:"02 / RESEARCH AREAS",title:"Four core research directions.",
      sub:"Our agenda spans foundational methods, domain knowledge engineering, and applied systems, with room to evolve as research advances.",
      tagFoundational:"FOUNDATIONAL METHODS",tagDomain:"DOMAIN KNOWLEDGE",tagApplied:"APPLIED AI",
      areas:[
        {id:"R1",kind:"foundational",symbol:"graph",title:"Knowledge Graphs & Graph Intelligence",vi:"Knowledge representation and graph reasoning",description:"Ontology engineering, knowledge graph construction, graph representation learning, and reasoning. Investigating how structured knowledge improves AI systems.",tags:["Knowledge Graph","Graph Learning","Reasoning","GraphRAG"]},
        {id:"R2",kind:"foundational",symbol:"image",title:"Semantic Image & Multimodal Retrieval",vi:"Semantic image search and cross-modal discovery",description:"Visual-semantic retrieval using scene graphs, vision-language models, embeddings, and knowledge-aware reranking for better relevance.",tags:["Semantic IR","Vision-Language","Reranking","Multimodal"]},
        {id:"R3",kind:"domain",symbol:"book",title:"Educational Knowledge Engineering",vi:"Structured knowledge for curricula and learning",description:"Represent curricula, courses, competencies, and prerequisites as knowledge graphs to support learning analytics and recommendations.",tags:["Educational KG","Curriculum","Competency","Learning Analytics"]},
        {id:"R4",kind:"applied",symbol:"brain",title:"Knowledge-Driven AI for Education",vi:"Grounded intelligent learning systems",description:"Investigate course assistants, grounded question answering, AI agents, and teacher-facing tools with verifiable and transparent outputs.",tags:["AI Agents","Educational RAG","Personalization","Trustworthy AI"]}
      ]
    },
    approach: {
      eyebrow:"03 / RESEARCH PHILOSOPHY",title:"From knowledge representation to verifiable outcomes.",
      sub:"We value explicit hypotheses, sound baselines, appropriate evaluation metrics, and reproducible experiments.",
      steps:[
        {number:"01",title:"Structure",detail:"Represent entities, evidence, and relationships in interpretable knowledge structures."},
        {number:"02",title:"Retrieve",detail:"Discover and link evidence across semantic, visual, and multimodal information."},
        {number:"03",title:"Reason",detail:"Evaluate, reason over, and explain results with grounded evidence."},
        {number:"04",title:"Apply",detail:"Test methods in practical settings, particularly educational systems."}
      ],
      quote:"Good research should be reproducible. Good AI should be accountable.",quoteVi:"Our research principle"
    },
    initiatives: {
      eyebrow:"04 / RESEARCH AGENDA",title:"Priority research initiatives.",
      sub:"These are <strong>proposed research themes</strong> outlining potential work, not claims of funded or completed projects.",
      status:"PROPOSED DIRECTION",
      items:[
        {id:"01",title:"Knowledge-aware Visual Retrieval",vi:"Knowledge-enhanced visual retrieval",description:"Combine visual representations, relational knowledge, and reranking to improve the relevance of image search results.",tag:"SEMANTIC RETRIEVAL"},
        {id:"02",title:"Curriculum Knowledge Graph",vi:"Structured curricular knowledge",description:"Model courses, skills, and prerequisite relations to explore learning pathways and assess curricular consistency.",tag:"EDUCATIONAL KG"},
        {id:"03",title:"Evidence-grounded Course Assistant",vi:"Grounded academic question answering",description:"Explore RAG/GraphRAG for citation-backed course assistance, error analysis, and instructor support.",tag:"AI IN EDUCATION"}
      ]
    },
    publications: {
      eyebrow:"05 / SCHOLARLY OUTPUT",title:"Publications & research resources.",
      sub:"Transparency and verifiability are central to our research identity. Papers, datasets, and software are listed only after verification.",
      emptyTitle:"Publication records are being prepared.",emptyBody:"Verified papers, DOIs, author lists, code, and datasets will appear here when the research group provides approved records.",
      meta:"PAPERS · DATASETS · CODE",visit:"View publication",doi:"DOI",policy:"No fabricated publication entries or performance claims."
    },
    people: {
      eyebrow:"06 / PEOPLE & CULTURE",title:"Research is a collaborative endeavor.",
      sub:"We aim to foster an open environment for faculty, doctoral researchers, graduate students, and undergraduates interested in knowledge-driven AI.",
      emptyTitle:"Team profiles will be added after confirmation.",emptyBody:"Members, roles, expertise, and ORCID/Scholar links will be published with the group's approval.",
      cultureTitle:"How we work",culture:["Accuracy and evidence","Reproducible experimentation","Constructive collaboration","Responsible AI"],
      join:"Research collaboration",profile:"Research profile"
    },
    directory: {
      shared:{
        breadcrumbHome:"Home",verified:"Updated",pending:"Official information pending",
        example:"SAMPLE DATA",openProfile:"View profile",viewPaper:"View publication",updated:"VERIFIED",
        privacy:"Only confirmed and approved members and publication records are published."
      },
      people:{
        eyebrow:"KEDVIRA / RESEARCH PEOPLE",title:"Research team members",
        lead:"People advancing research in knowledge graphs, semantic retrieval, and artificial intelligence in education.",
        listEyebrow:"RESEARCH TEAM",listTitle:"Members & collaborators",
        waiting:"The rows below are layout placeholders and do not represent actual individuals.",
        note:"Once approved member records are provided, verified profiles automatically replace all sample rows. No people or titles are fabricated.",
        count:(n)=>`${n} confirmed members`,
        samples:[
          {role:"Research Group Lead",name:"[Full name]",info:"[Academic title · Affiliation · Expertise]"},
          {role:"Faculty / Researcher",name:"[Full name]",info:"[Affiliation · Research focus]"},
          {role:"Graduate / Doctoral Researcher",name:"[Full name]",info:"[Degree program · Research topic]"},
          {role:"Undergraduate Researcher",name:"[Full name]",info:"[Study program · Project]"}
        ]
      },
      publications:{
        eyebrow:"KEDVIRA / SCHOLARLY OUTPUT",title:"Publications",
        lead:"Journal articles, conference papers, and related research outputs, with publication details verified before listing.",
        listEyebrow:"PUBLICATIONS",listTitle:"Research output list",
        waiting:"The following entries illustrate list formatting only and are not actual publications.",
        note:"Publish only records with verified authors, venue, and year. Check DOI and document links before making them public.",
        count:(n)=>`${n} verified publications`,
        types:{journal:"Journal article",conference:"Conference paper",preprint:"Preprint",other:"Other output"},
        samples:[
          {kind:"Journal article",title:"[Journal article title]",meta:"[Authors · Journal · Year · DOI]"},
          {kind:"Conference paper",title:"[Conference paper title]",meta:"[Authors · Conference · Year]"},
          {kind:"Other output",title:"[Research output / report / preprint]",meta:"[Authors · Venue · Year · Link]"}
        ]
      },
      cta:{eyebrow:"RESEARCH CONNECTIONS",title:"Advance knowledge and evidence-grounded AI together.",body:"Explore our research agenda or return to the homepage to learn more about KEDVIRA.",research:"Explore research",home:"Back to home"}
    },
    homeLinks:{
      eyebrow:"EXPLORE KEDVIRA",title:"Our people & publications.",lead:"Team profiles and scholarly outputs have dedicated list-based pages, populated only with verified records.",
      publicationsTag:"PUBLICATIONS",publicationsTitle:"Publications",publicationsDescription:"Journal papers, conference contributions, and the group's research outputs.",
      peopleTag:"RESEARCH PEOPLE",peopleTitle:"Research team",peopleDescription:"Members, roles, academic expertise, and research interests.",action:"Browse the list"
    },
    contact: {
      eyebrow:"07 / CONNECT",title:"Build knowledge-driven AI together.",
      sub:"We welcome academic collaboration, research problems, student mentorship, and applications of AI in education.",
      collab:"COLLABORATE & CONNECT",emailLabel:"Academic email",institutionLabel:"Affiliation",locationLabel:"Location",pending:"To be announced upon confirmation",emailAction:"Send email",github:"GitHub",scholar:"Google Scholar",bottom:"Interested in joining a research initiative? Watch this site for official opportunities."
    },
    footer: {statement:"Knowledge-Enhanced Discovery, Vision, Intelligent Retrieval & AI",rights:"Ownership and use of content and identity are subject to formal authorization.",back:"Back to top",built:"Academic research profile · Vietnamese / English",brand:"Brand guidelines"}
  }
};
