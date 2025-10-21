import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Linkedin, Mail, Building2, Rocket, Factory, ShieldCheck, Leaf, BarChart3 } from "lucide-react";

export default function SobreRodrigoAnjos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="relative inline-flex h-8 w-8 overflow-hidden rounded-xl ring-2 ring-sky-200">
              <Image src="/anjos_transparente.png" alt="Anjos IT Solutions" fill className="object-contain" sizes="32px" priority />
            </span>
            <span>Rodrigo Anjos</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#sobre" className="hover:text-slate-600">Sobre</a>
            <a href="#empresa" className="hover:text-slate-600">Empresa</a>
            <a href="#projetos" className="hover:text-slate-600">Projetos</a>
            <a href="#contato" className="hover:text-slate-600">Contato</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" className="hidden md:inline-flex">
              <a href="#contato"><Mail className="mr-2 h-4 w-4"/>Contato</a>
            </Button>
            <Button asChild className="inline-flex bg-sky-700 hover:bg-sky-800">
              <a href="#projetos">Portfólio<ArrowRight className="ml-2 h-4 w-4"/></a>
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:py-24">
          <div className="flex flex-col justify-center">
            <Badge className="w-fit bg-sky-100 text-sky-800">Apresentação Profissional</Badge>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Olá, eu sou <span className="text-slate-900">Rodrigo Anjos</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Sou especialista em <strong>Arquitetura de Integrações SAP</strong> e fundador da <strong>Anjos IT Solutions</strong>,
              guiando empresas em jornadas de transformação digital com foco em clean core, compliance e escalabilidade.
              Conectamos SAP a plataformas de e-commerce, logística, ESG e analytics por meio de APIs standard e governança robusta,
              preparando todo o ecossistema para o <strong>S/4HANA</strong> e acelerando resultados dos parceiros.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow bg-sky-700 hover:bg-sky-800">

              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="https://www.linkedin.com/in/anjosit/" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-5 w-5"/> LinkedIn
                </a>
              </Button>

            </div>
          </div>
      <div className="flex items-center justify-center md:justify-end">
        <div className="relative h-56 w-56 overflow-hidden rounded-full shadow-lg md:h-72 md:w-72 ring-4 ring-sky-200">
          <Image
            src="/rodrigo.jpg"
            alt="Foto de Rodrigo Anjos"
            fill
            className="object-cover"
            priority
            sizes="(min-width: 768px) 18rem, 14rem"
          />
        </div>
      </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section id="sobre" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-center gap-3">
            <Rocket className="h-6 w-6 text-sky-700"/>
            <h2 className="text-2xl font-bold">Sobre mim</h2>
          </div>
          <p className="mb-10 max-w-4xl text-slate-600 leading-relaxed">
            Há mais de 16 anos atuo em programas SAP complexos, conduzindo integrações, rollouts e sustentação em indústrias de grande porte.
            Lidero squads multifuncionais, destravo decisões executivas com dados e desenho modelos operacionais que mantêm o core SAP enxuto,
            sem perder a agilidade necessária para novos negócios e parceiros.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Experiência</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-600">
                <p><strong>16+ anos</strong> em SAP (Consultor, Arquiteto de Integrações, Gestor de Produto).</p>
                <p>Foco em integrações <strong>SAP ECC/S4</strong>, ABAP, Fiori e ecossistema (PI/PO, CPI, BTP).</p>
                <p>Condução de programas de rollout, migração e sustentação para indústrias nacionais e multinacionais,
                  liderando squads multifuncionais e parcerias near/onshore.</p>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Formação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-600">
                <p><strong>Bacharel em Análise de Sistemas</strong> – IBTA</p>
                <p><strong>MBA em Gestão de Negócios</strong> – USP</p>
                <p>Especializações contínuas em arquitetura clean core, integração via APIs, LGPD e governança de dados.</p>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-600">
                <p>Entregar integrações que geram <strong>valor de negócio</strong>, com governança, performance e escalabilidade.</p>
                <p>Garantir que cada projeto tenha objetivos claros, indicadores acompanhados e plano de continuidade pós-go-live,
                  conectando TI e áreas de negócio para acelerar ROI.</p>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Modelo de parceria</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-600">
                <p>Atuação colaborativa com consultorias e software houses, assumindo a frente técnica ou estratégica conforme
                  a necessidade do cliente final.</p>
                <p>Ofereço transparência em contratos (SLA, OLA e planos de comunicação), compartilhamento de conhecimento com as equipes parceiras
                  e coautoria em propostas para ampliar oportunidades comerciais.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* EMPRESA */}
      <section id="empresa" className="border-t bg-sky-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-center gap-3">
            <Building2 className="h-6 w-6 text-sky-700"/>
            <h2 className="text-2xl font-bold">Anjos IT Solutions</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>O que fazemos</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                Integrações SAP (PI/PO, CPI, BTP, APIs), ABAP/4 e Fiori; consultoria funcional SD (Vendas e Distribuição), MM (Materiais e Estoques),
                FI (Finanças), CO (Controladoria), PP (Planejamento da Produção) e QM (Gestão da Qualidade); portais e cockpits.
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader><CardTitle>Diferencial</CardTitle></CardHeader>
              <CardContent className="text-slate-600">
                Arquitetura modular que fragmenta processos em tarefas menores, aumentando visibilidade, controle e velocidade de entrega.
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader><CardTitle>Setores atendidos</CardTitle></CardHeader>
              <CardContent className="text-slate-600 space-y-2">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-sky-100 text-sky-800">Agroindustrial</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Automotivo</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Manufatura / Metalurgia</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Energia</Badge>
                </div>
                <p className="text-sm text-slate-500">* Nomes de clientes são confidenciais; usamos apenas segmentos.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-center gap-3">
            <Factory className="h-6 w-6 text-sky-700"/>
            <h2 className="text-2xl font-bold">Projetos em destaque 2025</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <CardTitle>Bioplanta – Economia Circular (Agroindustrial)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-600">
                <p>Integramos o modelo Bioplanta às operações de biogás, conectando produção, estoques e indicadores ESG no SAP de forma replicável para o crescimento nacional.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-sky-100 text-sky-800"><Leaf className="mr-1 h-3 w-3"/> ESG</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Agroindustrial</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Integrações</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Fiori</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <CardTitle>Integração EDI Avançada (Automotivo / Manufatura)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-600">
                <p>Cockpit de remessas que mantém montadoras e fornecedores sincronizados, com visão única de pedidos, entregas e alertas preventivos de ruptura.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-sky-100 text-sky-800">Automotivo</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Manufatura</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <CardTitle>Portal de Cliente e Fornecedor (B2B)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-600">
                <p>Portal B2B com autosserviço seguro, onboarding guiado e notificações inteligentes para fortalecer a colaboração com clientes e fornecedores.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-sky-100 text-sky-800">B2B</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Segurança</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <CardTitle>Portal de Etiquetas Zebradas (Manufatura / Metalurgia)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-600">
                <p>Portal de etiquetas preparado para expedição 24/7, com impressão centralizada, rastreabilidade total e governança de layouts por planta.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-sky-100 text-sky-800">Manufatura</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Metalurgia</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <CardTitle>Integração Clean Core com Uappi (Varejo)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-600">
                <p>Integração clean core entre o e-commerce Uappi e o SAP; clientes, materiais e pedidos fluem por APIs oficiais, garantindo visão única até o faturamento.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-sky-100 text-sky-800">E-commerce</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Clean Core</Badge>
                  <Badge className="bg-sky-100 text-sky-800">SAP APIs</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <CardTitle>Regime de Cotização (Compras / MM & CO)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-600">
                <p>Digitalização do rateio de compras para acelerar negociações, automatizar cálculos e dar transparência às margens compartilhadas com parceiros.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-sky-100 text-sky-800">Compras & Suprimentos</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Controladoria</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="border-t bg-sky-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-sky-700"/>
            <h2 className="text-2xl font-bold">Métricas de entrega</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center border-sky-100">
              <CardHeader>
                <CardTitle className="text-3xl font-extrabold text-sky-800">30+</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">Projetos executados com sucesso</CardContent>
            </Card>
            <Card className="text-center border-sky-100">
              <CardHeader>
                <CardTitle className="text-3xl font-extrabold text-sky-800">3.000h+</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">Suporte técnico ABAP/4</CardContent>
            </Card>
            <Card className="text-center border-sky-100">
              <CardHeader>
                <CardTitle className="text-3xl font-extrabold text-sky-800">2000h+</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">Suporte funcional SD (Vendas e Distribuição), MM (Materiais e Estoques), FI (Finanças), CO (Controladoria), PP (Planejamento da Produção) e QM (Gestão da Qualidade)</CardContent>
            </Card>
            <Card className="text-center border-sky-100">
              <CardHeader>
                <CardTitle className="text-3xl font-extrabold text-sky-800">1.000h+</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">Desenvolvimento em outras linguagens</CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="border-t bg-slate-900 text-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-sky-300"/>
            <h2 className="text-2xl font-bold">Contato</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="space-y-3 text-slate-300">
              <p>Vamos conversar sobre integração SAP, portais ou migração S/4HANA.</p>
        <p><strong>E-mail: </strong><a href="mailto:rodrigo.anjos@anjosit.com.br?subject=Contato%20via%20site&body=Olá%20Rodrigo," className="text-sky-400 hover:underline">rodrigo.anjos@anjosit.com.br</a></p>
              <p><strong>Site:</strong> <a href="https://www.anjosit.com.br" className="text-sky-400 hover:underline" target="_blank" rel="noreferrer">www.anjosit.com.br</a></p>
              <p><strong>WhatsApp:</strong>{" "}<a href="https://wa.me/5511940069410" className="text-sky-400 hover:underline" target="_blank" rel="noreferrer">(11) 94006-9410 </a></p>
        <p><strong>Telefone:</strong>{" "}<a href="tel:+5511940069410" className="text-sky-400 hover:underline">(11) 94006-9410</a></p>
        <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild variant="outline">
                  <a href="https://www.linkedin.com/in/anjosit/" target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4"/>LinkedIn</a>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-sm text-slate-400">
            <p>© {new Date().getFullYear()} Anjos IT Solutions — Todos os direitos reservados.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
