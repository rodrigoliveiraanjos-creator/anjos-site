import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Mail,
  Phone,
  ShieldCheck,
  Users,
  BarChart3,
  Building2,
  MoveRight,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4">
          <div className="flex flex-1 items-center justify-start md:justify-start" />
          <Link href="/" className="relative h-full w-48">
            <Image
              src="/anjos_transparente.png"
              alt="Anjos IT Solutions"
              fill
              className="object-contain"
              priority
              sizes="(min-width: 768px) 12rem, 10rem"
            />
          </Link>
          <div className="flex flex-1 items-center justify-end">
            <Button asChild className="bg-sky-500 text-white hover:bg-sky-600">
              <a href="#contato" className="whitespace-nowrap">
                Começar projeto
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/30 via-slate-900/40 to-slate-950" />
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 py-24 md:flex-row md:justify-between">
            <div className="relative z-10 max-w-xl space-y-6">
              <Badge className="bg-sky-500/20 text-sky-200">Clean core & Integrações SAP</Badge>
              <h1 className="text-4xl font-black leading-tight text-white md:text-5xl">
                Conectamos SAP e negócios digitais com governança e velocidade.
              </h1>
              <p className="text-lg text-slate-200">
                A Anjos IT Solutions entrega integrações SAP que destravam novos canais, automações e modelos de
                receita sem comprometer o core. Projetamos jornadas completas: da estratégia ao rollout, com foco em
                performance, compliance e resultados.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-sky-500 text-white hover:bg-sky-600"
                >
                  <a href="#contato">
                    Agendar conversa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  <a href="#cases">Ver cases de impacto</a>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-sky-300" />
                  Clean core garantido
                </span>
                <span className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-sky-300" />
                  Squads integrados com o cliente
                </span>
                <span className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-sky-300" />
                  KPIs acompanhados em tempo real
                </span>
              </div>
            </div>
            <div className="relative z-10 w-full max-w-md">
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur">
                <div className="relative flex h-[420px] flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br from-sky-600 via-slate-900 to-slate-950">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_left,_#38bdf8,_transparent_55%),radial-gradient(circle_at_bottom_right,_#0f172a,_transparent_45%)]" />
                  <div className="relative z-10 space-y-3 p-8 text-slate-200">
                    <p className="text-xs uppercase tracking-[0.3em] text-sky-100">Integrações SAP</p>
                    <h3 className="text-2xl font-bold text-white">Arquitetura para negócios digitais</h3>
                    <p className="text-sm text-slate-200">
                      Projetamos fluxos entre SAP, e-commerce, logística e parceiros garantindo governança, auditoria e experiência consistente para o cliente final.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-t border-slate-900 bg-white text-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <Badge className="bg-sky-100 text-sky-700">Serviços</Badge>
                <h2 className="mt-4 text-3xl font-bold text-slate-900 md:text-4xl">
                  Soluções ponta a ponta para acelerar integrações SAP
                </h2>
              </div>
              <p className="max-w-xl text-slate-600">
                Times especializados em tecnologia e processos para manter seu SAP robusto, escalável e preparado para novos canais digitais.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="space-y-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ShieldCheck className="h-5 w-5 text-sky-600" />
                    Integrações Clean Core
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-600">
                  <p>
                    Arquitetura, desenvolvimento e governança de integrações SAP com APIs standard, BTP, CPI e PI/PO, preservando o core e acelerando rollouts.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      Estratégia de integrações omnicanal
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      Monitoramento e SLOs em tempo real
                    </li>
                  </ul>
                </CardContent>
              </Card> 
              <Card className="border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="space-y-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Building2 className="h-5 w-5 text-sky-600" />
                    Portais & Experiências B2B/B2C
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-600">
                  <p>
                    Portais, cockpits e aplicativos integrados ao SAP para digitalizar relacionamento com clientes, fornecedores e plantas industriais.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      UX voltada a autosserviço e compliance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      Gestão de credenciais e auditoria ponta a ponta
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="space-y-2">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="h-5 w-5 text-sky-600" />
                    Sustentação & Evolução SAP
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-600">
                  <p>
                    Suporte técnico e funcional para manter integrações, processos e relatórios com alta disponibilidade, além de roadmaps de evolução contínua.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      ABAP/4, SD, MM, FI, CO, PP, QM
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-500" />
                      SLA dedicados e squad de resposta ágil
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="border-t border-slate-900 bg-slate-950">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <Badge className="bg-white/10 text-sky-200">A parceria que acompanha o ciclo completo</Badge>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Metodologia orientada a valor, com governança desde a concepção até o run.
                </h2>
                <p className="text-slate-300">
                  Atuamos em parceria com times internos e consultorias, liderando a arquitetura, execução e sustentação das integrações.
                  Conectamos tecnologia e negócio com documentação viva, indicadores e rituais claros.
                </p>
                <ul className="space-y-4 text-slate-200">
                  {[
                    "Blueprints de integrações SAP com visão de processos e dados.",
                    "Framework de monitoramento com alertas proativos e SLOs.",
                    "Modelos de governança que equilibram compliance, ESG e velocidade.",
                    "Transferência de conhecimento para squads internos e parceiros.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ShieldCheck className="mt-1 h-5 w-5 text-sky-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Como conduzimos cada entrega</h3>
                <ol className="mt-6 space-y-6 text-sm text-slate-200">
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">1</span>
                    <div>
                      <p className="font-semibold text-white">Diagnóstico e desenho de arquitetura</p>
                      <p className="text-slate-300">Roadmap de integrações, análise de riscos e definição de KPIs.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">2</span>
                    <div>
                      <p className="font-semibold text-white">Execução com squads híbridos</p>
                      <p className="text-slate-300">Times multidisciplinares, cerimônias ágeis e entregas incrementais.</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-500/20 text-sky-200">3</span>
                    <div>
                      <p className="font-semibold text-white">Handover e operação contínua</p>
                      <p className="text-slate-300">Documentação viva, dashboards e suporte dedicado ao run.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CASES */}
        <section id="cases" className="border-t border-slate-900 bg-white text-slate-900">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="mb-12 max-w-3xl space-y-4">
              <Badge className="bg-sky-100 text-sky-700">Resultados recentes</Badge>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Cases que destravaram crescimento para nossos clientes
              </h2>
              <p className="text-slate-600">
                Integrações e portais construídos com foco em governança, escalabilidade e experiência,
                replicáveis em múltiplas unidades de negócio.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <Card className="border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Agroenergia Clean Core</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-600">
                  <p>
                    Modelo replicável de integração SAP para usinas de biogás, conectando produção, estoque e finanças em mais de 30 plantas previstas.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-sky-700">
                    <MoveRight className="h-4 w-4" />
                    Rollout acelerado em múltiplas unidades
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>Supply Chain Automotivo</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-600">
                  <p>
                    Cockpit EDI com alertas proativos, visão única de remessas e confiabilidade total na comunicação entre montadora e fornecedores.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-sky-700">
                    <MoveRight className="h-4 w-4" />
                    100% dos pedidos sincronizados e auditáveis
                  </div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <CardHeader>
                  <CardTitle>E-commerce Uappi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-600">
                  <p>
                    Integração clean core entre SAP e plataforma digital, com cadastros, pedidos e faturamento fluindo por APIs oficiais e governança de dados.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-sky-700">
                    <MoveRight className="h-4 w-4" />
                    Visão omnicanal pronta para escalar
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="border-t border-slate-800 bg-slate-900 text-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-20">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="space-y-6">
                <Badge className="bg-sky-500/20 text-sky-200">Pronto para começar?</Badge>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Vamos construir integrações que aceleram o seu próximo resultado.
                </h2>
                <p className="text-slate-300">
                  Preencha o formulário ou fale diretamente conosco para entender como podemos apoiar sua jornada SAP.
                  Atuamos com contratos flexíveis para projetos, sustentação ou squads dedicados.
                </p>
                <div className="flex flex-col gap-4 text-slate-200">
                  <a href="mailto:contato@anjosit.com.br" className="flex items-center gap-3 hover:text-sky-200">
                    <Mail className="h-5 w-5 text-sky-400" />
                    contato@anjosit.com.br
                  </a>
                  <a href="https://wa.me/5511940069410" className="flex items-center gap-3 hover:text-sky-200" target="_blank" rel="noreferrer">
                    <Phone className="h-5 w-5 text-sky-400" />
                    +55 (11) 94006-9410
                  </a>
                </div>
                <div className="mt-4 flex flex-wrap gap-6 text-sm text-slate-400">
                  <span>São Paulo • Atuação Brasil & LATAM</span>
                  <span>Parceiros SAP, BTP e plataformas digitais</span>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">Como podemos ajudar?</h3>
                <p className="mt-2 text-sm text-slate-300">
                  Envie um e-mail com seu contexto ou agenda uma call. Respondemos em até 1 dia útil.
                </p>
                <div className="mt-8 grid gap-6 text-sm text-slate-200">
                  <div>
                    <p className="font-semibold text-white">Integrações & Portais</p>
                    <p className="text-slate-400">E-commerce, logística, ESG, parceiros e plantas industriais.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Sustentação SAP</p>
                    <p className="text-slate-400">ABAP, PI/PO, CPI, BTP e módulos funcionais SD, MM, FI, CO, PP, QM.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-white">Consultoria Estratégica</p>
                    <p className="text-slate-400">Roadmap S/4HANA, governança de integrações e squads híbridos.</p>
                  </div>
                </div>
                <Button
                  asChild
                  className="mt-8 w-full bg-sky-500 text-white hover:bg-sky-600"
                >
                  <a href="mailto:contato@anjosit.com.br">
                    Enviar briefing inicial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-slate-500">
              © {new Date().getFullYear()} Anjos IT Solutions. Todos os direitos reservados.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
