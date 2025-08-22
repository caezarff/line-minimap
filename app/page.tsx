import LineMinimap from "@/components/line-minimap"

export default function Home() {
  return (
    <main className="relative bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
       

        <article className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">O Futuro da Inteligência Artificial</h2>
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              A inteligência artificial está revolucionando a forma como interagimos com a tecnologia. Desde assistentes
              virtuais até sistemas de recomendação, a IA está presente em quase todos os aspectos de nossas vidas
              digitais.
            </p>
            <p>
              Machine Learning e Deep Learning são as tecnologias que impulsionam essa revolução. Algoritmos complexos
              processam enormes quantidades de dados para identificar padrões e fazer previsões precisas.
            </p>
            <p>
              As aplicações práticas são infinitas: diagnósticos médicos mais precisos, carros autônomos, tradução
              automática em tempo real, e sistemas de segurança avançados. Cada dia surgem novas possibilidades.
            </p>
          </div>
        </article>

        <article className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Desenvolvimento Web Moderno</h2>
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              O desenvolvimento web evoluiu drasticamente nos últimos anos. Frameworks como React, Vue e Angular
              transformaram a forma como construímos interfaces de usuário interativas e responsivas.
            </p>
            <p>
              Next.js revolucionou o desenvolvimento React com recursos como Server-Side Rendering, Static Site
              Generation e API Routes integradas. Isso permite criar aplicações web extremamente performáticas e
              otimizadas para SEO.
            </p>
            <p>
              TypeScript ganhou enorme popularidade por adicionar tipagem estática ao JavaScript, reduzindo bugs e
              melhorando a experiência de desenvolvimento. Ferramentas como Tailwind CSS simplificaram o processo de
              estilização.
            </p>
          </div>
        </article>

        <article className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Cloud Computing e DevOps</h2>
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              A computação em nuvem transformou a infraestrutura de TI. Plataformas como AWS, Google Cloud e Azure
              oferecem serviços escaláveis que permitem às empresas focar no desenvolvimento de produtos em vez de
              gerenciar servidores.
            </p>
            <p>
              DevOps integrou desenvolvimento e operações, criando pipelines de CI/CD que automatizam testes, builds e
              deployments. Isso resulta em entregas mais rápidas e confiáveis.
            </p>
            <p>
              Containers e Kubernetes revolucionaram o deployment de aplicações, oferecendo portabilidade e
              escalabilidade sem precedentes. Docker simplificou o empacotamento de aplicações.
            </p>
          </div>
        </article>

        <article className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Segurança Cibernética</h2>
          <div className="prose prose-lg text-gray-700 space-y-6">
            <p>
              Com o aumento das ameaças digitais, a segurança cibernética tornou-se uma prioridade crítica. Ataques de
              ransomware, phishing e violações de dados são riscos constantes que as organizações enfrentam.
            </p>
            <p>
              Zero Trust Architecture emerge como uma abordagem moderna de segurança, onde nenhum usuário ou dispositivo
              é automaticamente confiável. Cada acesso deve ser verificado e autenticado continuamente.
            </p>
            <p>
              Criptografia end-to-end, autenticação multifator e monitoramento contínuo são ferramentas essenciais para
              proteger dados sensíveis e manter a integridade dos sistemas.
            </p>
          </div>
        </article>

        <footer className="mt-20 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-600">
            Continue scrolling para ver a linha laranja se mover pelas linhas verticais
          </p>
        </footer>
      </div>

      <LineMinimap />
    </main>
  )
}
