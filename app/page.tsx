import LineMinimap from "@/components/line-minimap";

export default function Home() {
  return (
    <main className="relative bg-black">
      <div className="max-w-3xl mx-auto px-8 max-md:px-6 max-sm:px-4" style={{ paddingTop: "28vh" }}>
        <article className="mb-16 ">
          <h1 className="text-3xl max-md:text-2xl max-sm:text-xl font-semibold text-white mb-4 max-sm:mb-3">
            Tecnologias que Moldam o Futuro
          </h1>
          <div className="prose prose-base max-md:prose-sm max-sm:text-sm text-white space-y-4 max-sm:space-y-3">
            <p>
              Vivemos em uma era de transformação tecnológica sem precedentes.
              Desde a inteligência artificial até a computação em nuvem, novas
              tecnologias estão redefinindo como trabalhamos, nos comunicamos e
              vivemos.
            </p>
            <p>
              Este artigo explora as principais tendências tecnológicas que
              estão moldando nosso futuro, oferecendo insights sobre como essas
              inovações impactam diferentes setores da sociedade.
            </p>
            <p>
              Prepare-se para uma jornada através das tecnologias mais
              influentes da nossa época e descubra como elas podem transformar
              sua vida pessoal e profissional.
            </p>
          </div>
        </article>

        <article className="mb-16">
          <h2 className="text-2xl max-md:text-xl max-sm:text-lg font-medium text-white mb-4 max-sm:mb-3">
            O Futuro da Inteligência Artificial
          </h2>
          <div className="prose prose-base max-md:prose-sm max-sm:text-sm text-white space-y-4 max-sm:space-y-3">
            <p>
              A inteligência artificial está revolucionando a forma como
              interagimos com a tecnologia. Desde assistentes virtuais até
              sistemas de recomendação, a IA está presente em quase todos os
              aspectos de nossas vidas digitais.
            </p>
            <p>
              Machine Learning e Deep Learning são as tecnologias que
              impulsionam essa revolução. Algoritmos complexos processam enormes
              quantidades de dados para identificar padrões e fazer previsões
              precisas.
            </p>
            <p>
              As aplicações práticas são infinitas: diagnósticos médicos mais
              precisos, carros autônomos, tradução automática em tempo real, e
              sistemas de segurança avançados. Cada dia surgem novas
              possibilidades.
            </p>
          </div>
        </article>

        <article className="mb-12 max-sm:mb-8">
          <h2 className="text-2xl max-md:text-xl max-sm:text-lg font-medium text-white mb-4 max-sm:mb-3">
            Desenvolvimento Web Moderno
          </h2>
          <div className="prose prose-base max-md:prose-sm max-sm:text-sm text-white space-y-4 max-sm:space-y-3">
            <p>
              O desenvolvimento web evoluiu drasticamente nos últimos anos.
              Frameworks como React, Vue e Angular transformaram a forma como
              construímos interfaces de usuário interativas e responsivas.
            </p>
            <p>
              Next.js revolucionou o desenvolvimento React com recursos como
              Server-Side Rendering, Static Site Generation e API Routes
              integradas. Isso permite criar aplicações web extremamente
              performáticas e otimizadas para SEO.
            </p>
            <p>
              TypeScript ganhou enorme popularidade por adicionar tipagem
              estática ao JavaScript, reduzindo bugs e melhorando a experiência
              de desenvolvimento. Ferramentas como Tailwind CSS simplificaram o
              processo de estilização.
            </p>
          </div>
        </article>

        <article className="mb-16 max-sm:mb-12">
          <h2 className="text-3xl max-md:text-2xl max-sm:text-xl font-semibold text-white mb-6 max-sm:mb-4">
            Cloud Computing e DevOps
          </h2>
          <div className="prose prose-lg max-md:prose-base max-sm:prose-sm text-white space-y-6 max-sm:space-y-4">
            <p>
              A computação em nuvem transformou a infraestrutura de TI.
              Plataformas como AWS, Google Cloud e Azure oferecem serviços
              escaláveis que permitem às empresas focar no desenvolvimento de
              produtos em vez de gerenciar servidores.
            </p>
            <p>
              DevOps integrou desenvolvimento e operações, criando pipelines de
              CI/CD que automatizam testes, builds e deployments. Isso resulta
              em entregas mais rápidas e confiáveis.
            </p>
            <p>
              Containers e Kubernetes revolucionaram o deployment de aplicações,
              oferecendo portabilidade e escalabilidade sem precedentes. Docker
              simplificou o empacotamento de aplicações.
            </p>
          </div>
        </article>

        <article className="mb-16 max-sm:mb-12">
          <h2 className="text-3xl max-md:text-2xl max-sm:text-xl font-semibold text-white mb-6 max-sm:mb-4">
            Segurança Cibernética
          </h2>
          <div className="prose prose-lg max-md:prose-base max-sm:prose-sm text-white space-y-6 max-sm:space-y-4">
            <p>
              Com o aumento das ameaças digitais, a segurança cibernética
              tornou-se uma prioridade crítica. Ataques de ransomware, phishing
              e violações de dados são riscos constantes que as organizações
              enfrentam.
            </p>
            <p>
              Zero Trust Architecture emerge como uma abordagem moderna de
              segurança, onde nenhum usuário ou dispositivo é automaticamente
              confiável. Cada acesso deve ser verificado e autenticado
              continuamente.
            </p>
            <p>
              Criptografia end-to-end, autenticação multifator e monitoramento
              contínuo são ferramentas essenciais para proteger dados sensíveis
              e manter a integridade dos sistemas.
            </p>
          </div>
        </article>

        <article className="mb-16 max-sm:mb-12">
          <h2 className="text-3xl max-md:text-2xl max-sm:text-xl font-semibold text-white mb-6 max-sm:mb-4">
            Blockchain e Criptomoedas
          </h2>
          <div className="prose prose-lg max-md:prose-base max-sm:prose-sm text-white space-y-6 max-sm:space-y-4">
            <p>
              A tecnologia blockchain revolucionou o conceito de confiança
              digital. Através de registros distribuídos e imutáveis, ela
              elimina a necessidade de intermediários em muitas transações
              financeiras.
            </p>
            <p>
              Bitcoin e Ethereum abriram caminho para um novo sistema financeiro
              descentralizado. Smart contracts automatizam acordos e eliminam a
              necessidade de terceiros confiáveis em muitas operações.
            </p>
            <p>
              DeFi (Finanças Descentralizadas) e NFTs (Tokens Não Fungíveis) são
              aplicações emergentes que demonstram o potencial transformador
              desta tecnologia em diversos setores da economia digital.
            </p>
          </div>
        </article>

        <footer className="mt-16 max-sm:mt-12 pt-8 max-sm:pt-6 border-t border-gray-700">
          <p className="text-center text-sm text-white max-sm:text-xs opacity-70">
            Continue scrolling para ver a linha laranja se mover pelas linhas
            verticais
          </p>
        </footer>
      </div>

      <LineMinimap />
    </main>
  );
}
