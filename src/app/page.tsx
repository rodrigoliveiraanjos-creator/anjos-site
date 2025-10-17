import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Linkedin, Github, Mail, Building2, Rocket, Factory, Spline, ShieldCheck, Leaf } from "lucide-react";

export default function SiteRodrigoAnjos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-slate-900">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 border-b border-sky-100 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sky-700 text-white">RA</span>
            <span>Anjos IT Solutions</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            <a href="#sobre" className="hover:text-slate-600">Sobre</a>
            <a href="#empresa" className="hover:text-slate-600">Empresa</a>
            <a href="#projetos" className="hover:text-slate-600">Projetos</a>
            <a href="#entregaveis" className="hover:text-slate-600">Entregáveis 2025</a>
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
              Especialista em <strong>Arquitetura de Integrações SAP</strong> e fundador da <strong>Anjos IT Solutions</strong>.
              Conectamos SAP a sistemas não-SAP com eficiência, segurança e governança — preparando ambientes para o <strong>S/4HANA</strong>.
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
				<img
				  src="/rodrigo.jpg"
				  alt="Foto de perfil"
				  className="h-full w-full object-cover"
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
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Experiência</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-600">
                <p><strong>16+ anos</strong> em SAP (Consultor, Arquiteto de Integrações, Gestor de Produto).</p>
                <p>Foco em integrações <strong>SAP ECC/S4</strong>, ABAP, Fiori e ecossistema (PI/PO, CPI, BTP).</p>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Formação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-600">
                <p><strong>Bacharel em Análise de Sistemas</strong> – IBTA</p>
                <p><strong>MBA em Gestão de Negócios</strong> – USP</p>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader>
                <CardTitle>Missão</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-600">
                <p>Entregar integrações que geram <strong>valor de negócio</strong>, com governança, performance e escalabilidade.</p>
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
              <CardHeader><CardTitle>O que fazemos</CardTitle></CardHeader>
              <CardContent className="text-slate-600">
                Integrações SAP (PI/PO, CPI, BTP, APIs), ABAP/4 e Fiori; consultoria funcional SD, MM, FI, CO, PP e QM; portais e cockpits.
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

      {/* PROJETOS (segmentos, sem nomes) */}
      <section id="projetos" className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-center gap-3">
            <Factory className="h-6 w-6 text-sky-700"/>
            <h2 className="text-2xl font-bold">Projetos em destaque</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow border-sky-100">
              <CardHeader>
                <CardTitle>Bioplanta – Economia Circular (Agroindustrial)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-600">
                <p>Integração SAP ECC com plantas de biogás em <strong>duas unidades no PR e MG</strong>, modelo replicável para <strong>30+ rollouts</strong>.</p>
                <ul className="list-disc pl-5">
                  <li>Padronização MM, PP, QM e CO</li>
                  <li>Dashboards Fiori e automações ABAP</li>
                  <li>Arquitetura <strong>S/4HANA Ready</strong></li>
                </ul>
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
                <p>Cockpit para <strong>programas de remessa (RND001)</strong> com validações automáticas e status por farol.</p>
                <ul className="list-disc pl-5">
                  <li>Tabela de período firme e tabelas Z</li>
                  <li>Comparação SAP x Cliente (SD/PI)</li>
                  <li>Governança e rastreabilidade</li>
                </ul>
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
                <p>Gestão de credenciais com expiração, notificações e i18n (PT/EN/ES), integração via SAP PI e envio por SCOT/SOST.</p>
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
                <p>Portal <strong>Java</strong> integrado ao SAP para impressão ZPL com logs em tempo real; suporte a lote, modelo e unidade.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-sky-100 text-sky-800">Manufatura</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Metalurgia</Badge>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow md:col-span-2 border-sky-100">
              <CardHeader>
                <CardTitle>Regime de Cotização (Compras / MM & CO)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-600">
                <p>Distribuição percentual automática entre fornecedores, ajustes de tabelas, cálculos e validações de preços.</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-sky-100 text-sky-800">Compras & Suprimentos</Badge>
                  <Badge className="bg-sky-100 text-sky-800">Controladoria</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ENTREGAVEIS 2025 */}
      <section id="entregaveis" className="border-t bg-sky-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="mb-8 flex items-center gap-3">
            <Spline className="h-6 w-6 text-sky-700"/>
            <h2 className="text-2xl font-bold">Entregáveis de 2025</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="border-sky-100">
              <CardHeader><CardTitle>Rollouts & Integrações</CardTitle></CardHeader>
              <CardContent className="text-slate-600">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Expansão do modelo Bioplanta para <strong>30+ unidades</strong></li>
                  <li>Padronização de objetos e fluxos (<em>S/4HANA Ready</em>)</li>
                  <li>APIs REST/SOAP para parceiros e plantas</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader><CardTitle>Automação & Portais</CardTitle></CardHeader>
              <CardContent className="text-slate-600">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Evolução do Portal de Etiquetas com monitoramento</li>
                  <li>Novas regras no Portal de Cliente/Fornecedor</li>
                  <li>Dashboards Fiori de performance e ESG</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader><CardTitle>Sustentação</CardTitle></CardHeader>
              <CardContent className="text-slate-600">
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>+2.000h</strong> de suporte <strong>ABAP/4</strong></li>
                  <li><strong>+800h</strong> de suporte funcional <strong>SD/MM/FI/CO/PP/QM</strong></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-sky-100">
              <CardHeader><CardTitle>Governança & Compliance</CardTitle></CardHeader>
              <CardContent className="text-slate-600">
                <ul className="list-disc pl-5 space-y-1">
                  <li>Rastreabilidade ponta a ponta dos processos</li>
                  <li>Melhores práticas SAP e controles de qualidade</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MÉTRICAS */}
      <section className="border-t bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-16 md:grid-cols-3">
          <Card className="text-center border-sky-100">
            <CardHeader>
              <CardTitle className="text-3xl font-extrabold text-sky-800">30+</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">Rollouts planejados (modelo Bioplanta)</CardContent>
          </Card>
          <Card className="text-center border-sky-100">
            <CardHeader>
              <CardTitle className="text-3xl font-extrabold text-sky-800">2.000h+</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">Suporte técnico ABAP/4</CardContent>
          </Card>
          <Card className="text-center border-sky-100">
            <CardHeader>
              <CardTitle className="text-3xl font-extrabold text-sky-800">800h+</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-600">Suporte funcional SD/MM/FI/CO/PP/QM</CardContent>
          </Card>
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
			  <p><strong>E-mail:</strong><a href="mailto:rodrigo.anjos@anjosit.com.br?subject=Contato%20via%20site&body=Olá%20Rodrigo," className="text-sky-400 hover:underline">rodrigo.anjos@anjosit.com.br</a></p>
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
