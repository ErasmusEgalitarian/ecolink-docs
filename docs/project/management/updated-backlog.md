# Ecolink MVP1 — Updated Backlog (2026-03-02)

[← Back to Main Page](../../index.md)

> **Base de referência:** `mvp1-backlog.md`, `mvp1-tracking.md`, `product-backlog.md` e relatório de estado do backend (`relatorio.md` v1.1 — 2026-03-02).
> Este documento reflete o estado atual conhecido: **58% de maturidade do backend** e **37% das US do MVP1 implementadas no backend**. Nenhum frontend foi iniciado.

---

## Legenda de Status

| Status         | Significado                                   |
| -------------- | --------------------------------------------- |
| ✅ Done        | Implementado, testado e aceito                |
| 🔄 In Progress | Em desenvolvimento ativo                      |
| ⚠️ Partial     | Implementado parcialmente — precisa completar |
| 🔲 To Do       | Ainda não iniciado                            |

---

## Legenda de Tipo

| Tipo  | Significado                                          |
| ----- | ---------------------------------------------------- |
| BE    | Backend (API / banco de dados / segurança)           |
| FE    | Frontend (React Native mobile / React web dashboard) |
| BE+FE | Depende de ambos                                     |

---

## Resumo do Estado Atual

| Épico                          | Total US | Backend Done | Frontend Done | Restantes |
| ------------------------------ | -------- | ------------ | ------------- | --------- |
| EP-001 — Auth & Profile        | 13       | 5            | 0             | 8         |
| EP-002 — UI & UX               | 12       | 0            | 0             | 12        |
| EP-003 — EcoPoint Discovery    | 11       | 0            | 0             | 11        |
| EP-004 — QR Code & Kiosk       | 8        | 1            | 0             | 7         |
| EP-005 — Donation Flow         | 12       | 7            | 0             | 5         |
| EP-010 — Backend Core          | 14       | 10           | —             | 4         |
| EP-011 — Frontend Architecture | 7        | —            | 0             | 7         |
| EP-012 — Security & Privacy    | 5        | 2            | 0             | 3         |
| **Total**                      | **82**   | **25**       | **0**         | **57**    |

> Nota: EP-010 e EP-011 não possuem contraparte direta Frontend/Backend respectivamente (são específicos de cada camada).

---

## EP-001 — User Authentication & Profile Management

### Feature F-001 — Email/Password Authentication

| ID     | User Story                                                                                   | Tipo | Sprint | Status   | Observação                                  |
| ------ | -------------------------------------------------------------------------------------------- | ---- | ------ | -------- | ------------------------------------------- |
| US-001 | Como novo usuário, quero me registrar com email e senha para criar uma conta                 | BE   | 1      | ✅ Done  | `POST /api/auth/register` com validação Zod |
| US-001 | Como novo usuário, quero me registrar com email e senha para criar uma conta                 | FE   | 3      | 🔲 To Do | Tela de cadastro não implementada           |
| US-002 | Como usuário registrado, quero fazer login com email e senha para acessar minha conta        | BE   | 1      | ✅ Done  | `POST /api/auth/login` com validação Zod    |
| US-002 | Como usuário registrado, quero fazer login com email e senha para acessar minha conta        | FE   | 3      | 🔲 To Do | Tela de login não implementada              |
| US-003 | Como usuário, quero redefinir minha senha caso a esqueça                                     | BE   | 1      | 🔲 To Do | Endpoint de reset não implementado          |
| US-003 | Como usuário, quero redefinir minha senha caso a esqueça                                     | FE   | 3      | 🔲 To Do | —                                           |
| US-004 | Como sistema, devo validar inputs no frontend e no backend para manter integridade dos dados | BE   | 1      | ✅ Done  | Zod + middleware `validate.js`              |
| US-004 | Como sistema, devo validar inputs no frontend e no backend para manter integridade dos dados | FE   | 3      | 🔲 To Do | Validação client-side não implementada      |

### Feature F-002 — User Profile Management

| ID     | User Story                                                                       | Tipo | Sprint | Status     | Observação                                            |
| ------ | -------------------------------------------------------------------------------- | ---- | ------ | ---------- | ----------------------------------------------------- |
| US-005 | Como usuário logado, quero ver minhas informações de perfil                      | BE   | 2      | ⚠️ Partial | `GET /api/users/me` retorna dados do token, não do DB |
| US-005 | Como usuário logado, quero ver minhas informações de perfil                      | FE   | 3      | 🔲 To Do   | —                                                     |
| US-006 | Como usuário logado, quero editar minhas informações de perfil                   | BE   | 2      | 🔲 To Do   | Endpoint de update de perfil não implementado         |
| US-006 | Como usuário logado, quero editar minhas informações de perfil                   | FE   | 3      | 🔲 To Do   | —                                                     |
| US-007 | Como usuário, quero que meu avatar padrão seja exibido para identificação visual | BE   | 2      | 🔲 To Do   | Sem campo de avatar no model atual                    |
| US-007 | Como usuário, quero que meu avatar padrão seja exibido para identificação visual | FE   | 3      | 🔲 To Do   | —                                                     |
| US-008 | Como admin, quero ver roles e permissões dos usuários                            | BE   | 2      | ✅ Done    | `GET /api/users` + `GET /api/roles` funcionais        |
| US-008 | Como admin, quero ver roles e permissões dos usuários                            | FE   | 2      | 🔲 To Do   | Painel admin não implementado                         |

### Feature F-003 — User Roles & Permissions

| ID     | User Story                                                       | Tipo | Sprint | Status   | Observação                                                            |
| ------ | ---------------------------------------------------------------- | ---- | ------ | -------- | --------------------------------------------------------------------- |
| US-009 | Como sistema, devo atribuir roles ao registrar usuários          | BE   | 2      | ✅ Done  | Role padrão "user", JWT com role claim, `PUT /api/roles/edit/:userId` |
| US-010 | Como admin, quero gerenciar EcoPoints (CRUD)                     | BE   | 2      | 🔲 To Do | EcoPoint model não implementado                                       |
| US-010 | Como admin, quero gerenciar EcoPoints (CRUD)                     | FE   | 2      | 🔲 To Do | Painel admin não implementado                                         |
| US-011 | Como membro de cooperativa, quero gerenciar conteúdo educacional | BE   | 2      | 🔲 To Do | CMS de conteúdo não implementado                                      |
| US-011 | Como membro de cooperativa, quero gerenciar conteúdo educacional | FE   | 2      | 🔲 To Do | —                                                                     |

### Feature F-004 — Session Management & Security

| ID     | User Story                                                      | Tipo | Sprint | Status     | Observação                                                          |
| ------ | --------------------------------------------------------------- | ---- | ------ | ---------- | ------------------------------------------------------------------- |
| US-012 | Como sistema, devo gerenciar sessões de forma segura            | BE   | 2      | ⚠️ Partial | JWT com expiração implementado; refresh token e revogação pendentes |
| US-013 | Como sistema, devo fazer logout automático de usuários inativos | BE   | 2      | 🔲 To Do   | Timeout de inatividade não implementado                             |
| US-013 | Como sistema, devo fazer logout automático de usuários inativos | FE   | 5      | 🔲 To Do   | Timer de sessão no kiosk não implementado                           |

---

## EP-002 — User Interface & Experience Design

> **Nenhuma US deste épico foi iniciada.** Todo o trabalho é Frontend (React Native / React).

### Feature F-005 — Login/Registration Screens

| ID     | User Story                                                     | Tipo | Sprint | Status   |
| ------ | -------------------------------------------------------------- | ---- | ------ | -------- |
| US-014 | Como usuário, quero uma tela de login intuitiva                | FE   | 3      | 🔲 To Do |
| US-015 | Como novo usuário, quero um formulário de cadastro simples     | FE   | 3      | 🔲 To Do |
| US-016 | Como usuário mobile, quero login/cadastro otimizado para toque | FE   | 3      | 🔲 To Do |

### Feature F-006 — Navigation & Layout Structure

| ID     | User Story                                                   | Tipo | Sprint | Status   |
| ------ | ------------------------------------------------------------ | ---- | ------ | -------- |
| US-017 | Como usuário, quero um menu de navegação consistente         | FE   | 3      | 🔲 To Do |
| US-018 | Como usuário, quero o app responsivo em qualquer dispositivo | FE   | 3      | 🔲 To Do |
| US-019 | Como usuário, quero consistência visual em todas as telas    | FE   | 3      | 🔲 To Do |

### Feature F-007 — User Dashboard

| ID     | User Story                                                         | Tipo | Sprint | Status   |
| ------ | ------------------------------------------------------------------ | ---- | ------ | -------- |
| US-020 | Como usuário logado, quero ver resumo de reciclagem no dashboard   | FE   | 3      | 🔲 To Do |
| US-021 | Como usuário, quero acesso rápido às ações principais no dashboard | FE   | 3      | 🔲 To Do |
| US-022 | Como usuário, quero ver doações recentes no dashboard              | FE   | 3      | 🔲 To Do |

### Feature F-008 — Accessibility Features

| ID     | User Story                                                                 | Tipo | Sprint | Status   |
| ------ | -------------------------------------------------------------------------- | ---- | ------ | -------- |
| US-023 | Como usuário com deficiência visual, quero contraste de cores adequado     | FE   | 4      | 🔲 To Do |
| US-024 | Como usuário com deficiência motora, quero suporte a navegação por teclado | FE   | 4      | 🔲 To Do |
| US-025 | Como usuário de leitor de tela, quero HTML semântico e labels ARIA         | FE   | 4      | 🔲 To Do |

---

## EP-003 — EcoPoint Location & Discovery

> **Nenhuma US deste épico foi iniciada.** Requer EcoPoint model no backend (US-010) e integração de mapa no frontend.

### Feature F-009 — EcoPoint Map View

| ID     | User Story                                                             | Tipo  | Sprint | Status   |
| ------ | ---------------------------------------------------------------------- | ----- | ------ | -------- |
| US-026 | Como usuário, quero ver EcoPoints em um mapa                           | BE+FE | 4      | 🔲 To Do |
| US-027 | Como usuário, quero ver minha localização atual no mapa                | FE    | 4      | 🔲 To Do |
| US-028 | Como usuário, quero ver a distância até cada EcoPoint                  | BE+FE | 4      | 🔲 To Do |
| US-029 | Como usuário, quero tocar em um marcador para ver detalhes do EcoPoint | FE    | 4      | 🔲 To Do |

### Feature F-010 — EcoPoint List View

| ID     | User Story                                                | Tipo  | Sprint | Status   |
| ------ | --------------------------------------------------------- | ----- | ------ | -------- |
| US-030 | Como usuário, quero ver lista de EcoPoints próximos       | BE+FE | 4      | 🔲 To Do |
| US-031 | Como usuário, quero alternar entre visão de mapa e lista  | FE    | 4      | 🔲 To Do |
| US-032 | Como usuário, quero buscar EcoPoints por nome ou endereço | BE+FE | 4      | 🔲 To Do |

### Feature F-011 — EcoPoint Detail Screen

| ID     | User Story                                                      | Tipo  | Sprint | Status   |
| ------ | --------------------------------------------------------------- | ----- | ------ | -------- |
| US-033 | Como usuário, quero ver informações detalhadas de um EcoPoint   | BE+FE | 4      | 🔲 To Do |
| US-034 | Como usuário, quero obter direções até um EcoPoint              | FE    | 4      | 🔲 To Do |
| US-035 | Como usuário, quero ver quais materiais recicláveis são aceitos | BE+FE | 4      | 🔲 To Do |
| US-036 | Como usuário, quero ver o status operacional do EcoPoint        | BE+FE | 4      | 🔲 To Do |

---

## EP-004 — QR Code Access & Kiosk Integration

### Feature F-012 — QR Code Reader

| ID     | User Story                                                               | Tipo | Sprint | Status     | Observação                                                                        |
| ------ | ------------------------------------------------------------------------ | ---- | ------ | ---------- | --------------------------------------------------------------------------------- |
| US-037 | Como usuário no EcoPoint, quero escanear o QR code para iniciar doação   | FE   | 5      | 🔲 To Do   | —                                                                                 |
| US-038 | Como sistema, devo validar o QR code para garantir EcoPoints autorizados | BE   | 5      | ⚠️ Partial | Existe rota básica de sessão no kiosk; validação de assinatura/timestamp pendente |
| US-039 | Como usuário, quero instruções claras para escanear o QR code            | FE   | 5      | 🔲 To Do   | —                                                                                 |
| US-040 | Como usuário com problemas na câmera, quero inserir o código manualmente | FE   | 5      | 🔲 To Do   | —                                                                                 |

### Feature F-013 — Session Timeout & Security

| ID     | User Story                                                               | Tipo  | Sprint | Status   |
| ------ | ------------------------------------------------------------------------ | ----- | ------ | -------- |
| US-041 | Como sistema, devo aplicar timeout de 5 min em sessões no kiosk          | BE+FE | 5      | 🔲 To Do |
| US-042 | Como usuário, quero ver o tempo restante de sessão                       | FE    | 5      | 🔲 To Do |
| US-043 | Como usuário, quero encerrar minha sessão manualmente                    | FE    | 5      | 🔲 To Do |
| US-044 | Como sistema, devo limpar todos os dados do usuário do kiosk após logout | BE+FE | 5      | 🔲 To Do |

---

## EP-005 — Donation Registration & Validation

### Feature F-014 — Donation Form

| ID     | User Story                                                          | Tipo | Sprint | Status   | Observação                            |
| ------ | ------------------------------------------------------------------- | ---- | ------ | -------- | ------------------------------------- |
| US-045 | Como usuário no EcoPoint, quero registrar minha doação no sistema   | BE   | 5      | ✅ Done  | `POST /api/donation` com auth e Zod   |
| US-045 | Como usuário no EcoPoint, quero registrar minha doação no sistema   | FE   | 5      | 🔲 To Do | Formulário de doação não implementado |
| US-046 | Como usuário, quero selecionar categorias predefinidas de materiais | BE   | 5      | ✅ Done  | Campo materialType no schema          |
| US-046 | Como usuário, quero selecionar categorias predefinidas de materiais | FE   | 5      | 🔲 To Do | —                                     |
| US-047 | Como usuário, quero feedback imediato ao submeter uma doação        | FE   | 5      | 🔲 To Do | —                                     |
| US-048 | Como usuário, quero validação para evitar erros nos meus dados      | BE   | 5      | ✅ Done  | Validação Zod implementada            |
| US-048 | Como usuário, quero validação para evitar erros nos meus dados      | FE   | 5      | 🔲 To Do | —                                     |

### Feature F-015 — Invalid Donation Handling

| ID     | User Story                                                      | Tipo  | Sprint | Status   | Observação                                          |
| ------ | --------------------------------------------------------------- | ----- | ------ | -------- | --------------------------------------------------- |
| US-049 | Como sistema, devo detectar doações inválidas                   | BE    | 5      | 🔲 To Do | Flag de invalidação não implementada                |
| US-050 | Como usuário, devo ser informado se minha doação for inválida   | BE+FE | 5      | 🔲 To Do | —                                                   |
| US-051 | Como sistema, não devo registrar doações inválidas no histórico | BE    | 5      | 🔲 To Do | Soft delete existe mas regra de invalidação ausente |

### Feature F-016 — Donation History View

| ID     | User Story                                              | Tipo | Sprint | Status     | Observação                                                              |
| ------ | ------------------------------------------------------- | ---- | ------ | ---------- | ----------------------------------------------------------------------- |
| US-052 | Como usuário, quero ver meu histórico de doações        | BE   | 6      | ✅ Done    | `GET /api/donation` e `GET /api/donation/my` implementados              |
| US-052 | Como usuário, quero ver meu histórico de doações        | FE   | 6      | 🔲 To Do   | Tela de histórico não implementada                                      |
| US-053 | Como usuário, quero filtrar meu histórico de doações    | BE   | 6      | ⚠️ Partial | Listagem existe; filtros por data/material/EcoPoint pendentes           |
| US-053 | Como usuário, quero filtrar meu histórico de doações    | FE   | 6      | 🔲 To Do   | —                                                                       |
| US-054 | Como usuário, quero ver meu impacto total de reciclagem | BE   | 6      | ⚠️ Partial | Campo `wasteSaved` no User model; cálculo de impacto ambiental pendente |
| US-054 | Como usuário, quero ver meu impacto total de reciclagem | FE   | 6      | 🔲 To Do   | —                                                                       |

### Feature F-017 — Donation Details

| ID     | User Story                                                      | Tipo | Sprint | Status   | Observação                                          |
| ------ | --------------------------------------------------------------- | ---- | ------ | -------- | --------------------------------------------------- |
| US-055 | Como usuário, quero ver detalhes de uma doação específica       | BE   | 6      | ✅ Done  | `GET /api/donation/:id` com populate de referências |
| US-055 | Como usuário, quero ver detalhes de uma doação específica       | FE   | 6      | 🔲 To Do | —                                                   |
| US-056 | Como usuário, quero compartilhar minha doação nas redes sociais | FE   | 6      | 🔲 To Do | Baixa prioridade                                    |

---

## EP-010 — Backend Services & API

### Feature F-029 — Core API Endpoints

| ID     | User Story                                                                     | Tipo | Sprint | Status     | Observação                                         |
| ------ | ------------------------------------------------------------------------------ | ---- | ------ | ---------- | -------------------------------------------------- |
| US-091 | Como desenvolvedor, quero endpoints RESTful para todas as entidades principais | BE   | 1      | ⚠️ Partial | Auth e Donations OK; EcoPoints e Sessions ausentes |
| US-092 | Como sistema, devo validar todas as requisições da API                         | BE   | 1      | ✅ Done    | Middleware `validate.js` com Zod em uso            |
| US-093 | Como desenvolvedor, quero documentação da API                                  | BE   | 1      | ⚠️ Partial | Swagger/OpenAPI 60% — EcoPoints/QR ausentes        |
| US-094 | Como sistema, devo tratar erros de forma elegante                              | BE   | 1      | ✅ Done    | `errorHandler.js` centralizado e integrado         |

### Feature F-030 — Auth & Authorization Middleware

| ID     | User Story                                                   | Tipo | Sprint | Status   | Observação                                              |
| ------ | ------------------------------------------------------------ | ---- | ------ | -------- | ------------------------------------------------------- |
| US-095 | Como sistema, devo autenticar requisições da API             | BE   | 1      | ✅ Done  | Middleware JWT implementado                             |
| US-096 | Como sistema, devo autorizar requisições com base em roles   | BE   | 1      | ✅ Done  | Middlewares `requireAuth`, `requireAdmin` implementados |
| US-097 | Como sistema, devo aplicar rate limiting para prevenir abuso | BE   | 1      | 🔲 To Do | `express-rate-limit` não instalado — 3h estimadas       |

### Feature F-031 — Database Schema

| ID     | User Story                                                        | Tipo | Sprint | Status     | Observação                                                                 |
| ------ | ----------------------------------------------------------------- | ---- | ------ | ---------- | -------------------------------------------------------------------------- |
| US-098 | Como desenvolvedor, quero um schema de banco de dados normalizado | BE   | 1      | ⚠️ Partial | User.js e Pickup.js refatorados; EcoPoint model ausente; indexes pendentes |
| US-099 | Como sistema, devo garantir consistência dos dados                | BE   | 1      | ⚠️ Partial | Referências no Mongoose presentes; transações e cascata pendentes          |
| US-100 | Como desenvolvedor, quero migrations para versionar o schema      | BE   | 1      | 🔲 To Do   | Migration script não implementado — 4h estimadas                           |

### Feature F-032 — Data Access Layer

| ID     | User Story                                                                      | Tipo | Sprint | Status   | Observação                                    |
| ------ | ------------------------------------------------------------------------------- | ---- | ------ | -------- | --------------------------------------------- |
| US-101 | Como desenvolvedor, quero abstração ORM/ODM para simplificar operações de banco | BE   | 3      | ✅ Done  | Mongoose com models e validação implementados |
| US-102 | Como sistema, devo logar queries do banco em desenvolvimento                    | BE   | 3      | 🔲 To Do | Logging de queries não configurado            |

---

## EP-011 — Frontend Architecture & State Management

> **Nenhuma US deste épico foi iniciada.** Todo o trabalho é Frontend.

### Feature F-033 — Component Architecture

| ID     | User Story                                                                   | Tipo | Sprint | Status   |
| ------ | ---------------------------------------------------------------------------- | ---- | ------ | -------- |
| US-103 | Como desenvolvedor, quero arquitetura baseada em componentes reutilizáveis   | FE   | 2      | 🔲 To Do |
| US-104 | Como desenvolvedor, quero componentes compartilhados para consistência de UI | FE   | 2      | 🔲 To Do |
| US-105 | Como desenvolvedor, quero roteamento configurado para navegação funcionar    | FE   | 2      | 🔲 To Do |

### Feature F-034 — State Management

| ID     | User Story                                                                    | Tipo | Sprint | Status   |
| ------ | ----------------------------------------------------------------------------- | ---- | ------ | -------- |
| US-106 | Como desenvolvedor, quero gerenciamento de estado global com fluxo previsível | FE   | 3      | 🔲 To Do |
| US-107 | Como desenvolvedor, quero hooks de integração com a API padronizados          | FE   | 3      | 🔲 To Do |

### Feature F-035 — CI/CD Configuration

| ID     | User Story                                                                   | Tipo  | Sprint | Status   |
| ------ | ---------------------------------------------------------------------------- | ----- | ------ | -------- |
| US-108 | Como desenvolvedor, quero testes automatizados para capturar regressões cedo | BE+FE | 6      | 🔲 To Do |
| US-109 | Como equipe, queremos pipeline de CI/CD para automação de deploy             | BE+FE | 6      | 🔲 To Do |

---

## EP-012 — Security & Data Protection

### Feature F-036 — Security Hardening

| ID     | User Story                                                          | Tipo | Sprint | Status     | Observação                                                |
| ------ | ------------------------------------------------------------------- | ---- | ------ | ---------- | --------------------------------------------------------- |
| US-110 | Como sistema, devo proteger contra vulnerabilidades comuns          | BE   | 6      | ⚠️ Partial | CORS configurado; Helmet.js não instalado — 2h estimadas  |
| US-111 | Como sistema, devo criptografar dados sensíveis                     | BE   | 6      | ✅ Done    | bcrypt implementado, HTTPS na produção, HTTP-only cookies |
| US-112 | Como sistema, devo logar eventos de segurança para detectar ameaças | BE   | 6      | 🔲 To Do   | Logging de segurança não implementado                     |

### Feature F-037 — Privacy Controls

| ID     | User Story                                                                 | Tipo  | Sprint | Status   |
| ------ | -------------------------------------------------------------------------- | ----- | ------ | -------- |
| US-113 | Como usuário, quero controlar meus dados para proteger minha privacidade   | BE+FE | 6      | 🔲 To Do |
| US-114 | Como sistema, devo anonimizar dados para analytics preservando privacidade | BE    | 6      | 🔲 To Do |

---

## Tasks Restantes — Consolidado

### Backend (BE) — Tasks Pendentes

| ID     | User Story                                                          | Feature | Sprint | Prioridade | Estimativa |
| ------ | ------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- |
| US-003 | Reset de senha (endpoint + envio de email)                          | F-001   | 1      | High       | 5 SP       |
| US-005 | Corrigir `GET /api/users/me` para retornar dados reais do DB        | F-002   | 2      | High       | 2 SP       |
| US-006 | Implementar `PUT /api/users/me` (update de perfil)                  | F-002   | 2      | High       | 3 SP       |
| US-007 | Adicionar campo `avatar` ao User model                              | F-002   | 2      | Medium     | 1 SP       |
| US-010 | Criar EcoPoint model + CRUD endpoints (`/api/ecopoints`)            | F-003   | 2      | Critical   | 5 SP       |
| US-011 | Implementar endpoints de conteúdo educacional (CMS)                 | F-003   | 2      | High       | 5 SP       |
| US-012 | Implementar refresh token e revogação de sessão                     | F-004   | 2      | Critical   | 3 SP       |
| US-013 | Implementar timeout de inatividade no backend                       | F-004   | 2      | Critical   | 2 SP       |
| US-038 | Completar validação de QR code (assinatura + timestamp)             | F-012   | 5      | Critical   | 3 SP       |
| US-041 | Implementar lógica de timeout de sessão no kiosk                    | F-013   | 5      | Critical   | 2 SP       |
| US-044 | Implementar limpeza de dados de sessão após logout                  | F-013   | 5      | Critical   | 1 SP       |
| US-049 | Implementar flag e lógica de detecção de doação inválida            | F-015   | 5      | High       | 3 SP       |
| US-050 | Retornar erro descritivo para doação inválida                       | F-015   | 5      | High       | 2 SP       |
| US-051 | Separar doações inválidas do histórico (status "rejected")          | F-015   | 5      | Medium     | 2 SP       |
| US-053 | Adicionar filtros (data, material, EcoPoint) ao `GET /api/donation` | F-016   | 6      | High       | 3 SP       |
| US-054 | Calcular e retornar métricas de impacto ambiental                   | F-016   | 6      | Medium     | 2 SP       |
| US-091 | Implementar endpoints de EcoPoints e Sessions                       | F-029   | 1      | Critical   | 5 SP       |
| US-093 | Completar documentação Swagger (EcoPoints, QR, Sessions)            | F-029   | 1      | High       | 3 SP       |
| US-097 | Instalar e configurar `express-rate-limit`                          | F-030   | 1      | High       | 3 SP       |
| US-098 | Criar EcoPoint model + indexes MongoDB                              | F-031   | 1      | Critical   | 3 SP       |
| US-099 | Implementar transações para operações críticas                      | F-031   | 1      | Critical   | 3 SP       |
| US-100 | Implementar migration scripts (`migrate-mongo`)                     | F-031   | 1      | High       | 2 SP       |
| US-102 | Configurar logging de queries do banco (dev only)                   | F-032   | 3      | Medium     | 3 SP       |
| US-108 | Configurar Jest + testes de integração backend                      | F-035   | 6      | High       | 5 SP       |
| US-109 | Configurar GitHub Actions CI/CD                                     | F-035   | 6      | High       | 3 SP       |
| US-110 | Instalar e configurar Helmet.js                                     | F-036   | 6      | Critical   | 2 SP       |
| US-112 | Implementar logging de eventos de segurança                         | F-036   | 6      | High       | 3 SP       |
| US-113 | Implementar exportação e exclusão de dados do usuário (LGPD)        | F-037   | 6      | High       | 5 SP       |
| US-114 | Implementar anonimização de dados para analytics                    | F-037   | 6      | Medium     | 3 SP       |

**Total Backend Pendente: ~82 SP**

---

### Frontend (FE) — Tasks Pendentes

| ID     | User Story                                                                   | Feature | Sprint | Prioridade | Estimativa |
| ------ | ---------------------------------------------------------------------------- | ------- | ------ | ---------- | ---------- |
| US-001 | Tela de cadastro (email + senha)                                             | F-001   | 3      | Critical   | 3 SP       |
| US-002 | Tela de login                                                                | F-005   | 3      | Critical   | 3 SP       |
| US-003 | Tela de reset de senha                                                       | F-001   | 3      | High       | 3 SP       |
| US-004 | Validação client-side (formulários)                                          | F-001   | 3      | Critical   | 2 SP       |
| US-005 | Tela de visualização de perfil                                               | F-002   | 3      | High       | 2 SP       |
| US-006 | Tela de edição de perfil                                                     | F-002   | 3      | High       | 3 SP       |
| US-007 | Exibir avatar padrão no perfil e navbar                                      | F-002   | 3      | Medium     | 1 SP       |
| US-008 | Painel admin — listagem de usuários e roles                                  | F-002   | 2      | High       | 2 SP       |
| US-010 | Painel admin — CRUD de EcoPoints                                             | F-003   | 2      | Critical   | 5 SP       |
| US-011 | Interface de gerenciamento de conteúdo educacional                           | F-003   | 2      | High       | 5 SP       |
| US-013 | Timer de inatividade + logout automático (kiosk)                             | F-004   | 5      | Critical   | 3 SP       |
| US-014 | Tela de login (UI)                                                           | F-005   | 3      | Critical   | 3 SP       |
| US-015 | Formulário de cadastro (UI)                                                  | F-005   | 3      | Critical   | 3 SP       |
| US-016 | Login/cadastro otimizado para toque (mobile)                                 | F-005   | 3      | High       | 2 SP       |
| US-017 | Menu de navegação consistente                                                | F-006   | 3      | High       | 3 SP       |
| US-018 | Layout responsivo (mobile, tablet, desktop)                                  | F-006   | 3      | Critical   | 3 SP       |
| US-019 | Consistência visual entre telas (design system)                              | F-006   | 3      | High       | 2 SP       |
| US-020 | Dashboard — resumo de reciclagem                                             | F-007   | 3      | High       | 3 SP       |
| US-021 | Dashboard — atalhos para ações principais                                    | F-007   | 3      | High       | 2 SP       |
| US-022 | Dashboard — lista de doações recentes                                        | F-007   | 3      | Medium     | 3 SP       |
| US-023 | Contraste de cores acessível (WCAG 2.1 AA)                                   | F-008   | 4      | Medium     | 2 SP       |
| US-024 | Suporte a navegação por teclado                                              | F-008   | 4      | Medium     | 3 SP       |
| US-025 | HTML semântico + labels ARIA                                                 | F-008   | 4      | Medium     | 3 SP       |
| US-026 | Mapa com marcadores de EcoPoints                                             | F-009   | 4      | Critical   | 5 SP       |
| US-027 | Localização do usuário no mapa                                               | F-009   | 4      | Critical   | 3 SP       |
| US-028 | Distância até cada EcoPoint exibida                                          | F-009   | 4      | High       | 3 SP       |
| US-029 | Pop-up de detalhes ao tocar no marcador                                      | F-009   | 4      | High       | 2 SP       |
| US-030 | Lista de EcoPoints próximos                                                  | F-010   | 4      | High       | 3 SP       |
| US-031 | Alternar entre visão de mapa e lista                                         | F-010   | 4      | Medium     | 2 SP       |
| US-032 | Busca de EcoPoints por nome ou endereço                                      | F-010   | 4      | Medium     | 3 SP       |
| US-033 | Tela de detalhe do EcoPoint                                                  | F-011   | 4      | High       | 3 SP       |
| US-034 | Botão "Obter Direções" (integração Google/Apple Maps)                        | F-011   | 4      | High       | 2 SP       |
| US-035 | Lista visual de materiais aceitos com ícones                                 | F-011   | 4      | High       | 2 SP       |
| US-036 | Status operacional do EcoPoint (aberto/fechado/cheio)                        | F-011   | 4      | Medium     | 1 SP       |
| US-037 | Interface de leitura de QR code (câmera)                                     | F-012   | 5      | Critical   | 5 SP       |
| US-039 | Instruções de scan + overlay de enquadramento                                | F-012   | 5      | High       | 2 SP       |
| US-040 | Entrada manual de código do EcoPoint                                         | F-012   | 5      | Medium     | 3 SP       |
| US-041 | Timer de sessão no kiosk com alertas visuais                                 | F-013   | 5      | Critical   | 3 SP       |
| US-042 | Exibir tempo restante de sessão                                              | F-013   | 5      | High       | 2 SP       |
| US-043 | Botão "Encerrar Sessão"                                                      | F-013   | 5      | High       | 2 SP       |
| US-044 | Limpar dados do usuário do kiosk após logout                                 | F-013   | 5      | Critical   | 1 SP       |
| US-045 | Formulário de registro de doação                                             | F-014   | 5      | Critical   | 5 SP       |
| US-046 | Seleção de categoria de material (UI)                                        | F-014   | 5      | Critical   | 2 SP       |
| US-047 | Feedback visual de sucesso na doação (confetti, resumo)                      | F-014   | 5      | High       | 3 SP       |
| US-048 | Validação de formulário de doação (client-side)                              | F-014   | 5      | High       | 3 SP       |
| US-050 | Exibir mensagem de erro para doação inválida + dica educacional              | F-015   | 5      | High       | 2 SP       |
| US-052 | Tela de histórico de doações                                                 | F-016   | 6      | High       | 3 SP       |
| US-053 | Filtros na tela de histórico                                                 | F-016   | 6      | High       | 3 SP       |
| US-054 | Visualização de impacto total (gráficos/barras)                              | F-016   | 6      | Medium     | 2 SP       |
| US-055 | Tela de detalhe de doação                                                    | F-017   | 6      | Medium     | 2 SP       |
| US-056 | Compartilhamento de doação nas redes sociais                                 | F-017   | 6      | Low        | 3 SP       |
| US-103 | Configurar estrutura de componentes React/React Native                       | F-033   | 2      | Critical   | 5 SP       |
| US-104 | Criar biblioteca de componentes compartilhados (Button, Input, Card, Modal…) | F-033   | 2      | High       | 5 SP       |
| US-105 | Configurar roteamento (React Router / React Navigation)                      | F-033   | 2      | Critical   | 3 SP       |
| US-106 | Configurar gerenciamento de estado global (Context API ou Redux)             | F-034   | 3      | High       | 5 SP       |
| US-107 | Criar hooks de integração com a API (useAuth, useDonations, useEcoPoints)    | F-034   | 3      | High       | 3 SP       |
| US-108 | Configurar Jest + React Testing Library                                      | F-035   | 6      | High       | 5 SP       |
| US-109 | Configurar GitHub Actions (CI/CD)                                            | F-035   | 6      | High       | 3 SP       |
| US-113 | UI de controle de privacidade (exportar/excluir dados)                       | F-037   | 6      | High       | 3 SP       |

**Total Frontend Pendente: ~148 SP**

---

## Histórico de Revisões

| Data       | Versão | Alterações                                                       | Autores                                                    |
| ---------- | ------ | ---------------------------------------------------------------- | ---------------------------------------------------------- |
| 2026-03-02 | 1.0    | Criação do backlog atualizado com base no estado real do projeto | GitHub Copilot (gerado a partir dos documentos do projeto) |

[← Back to Main Page](../../index.md)
