📋 FLUXO PRINCIPAL
TELA 1: Cadastro/Login
Ação: Após cadastro/login → Redirecionar para TELA 2 (nova aba)

TELA 2: Avaliação Completa (Formulário Multi-Step)
ESTÉTICA GERAL

Design sci-fi com painéis holográficos animados
Formulário ocupa tela inteira
Seções aparecem uma por vez (progressão linear)


SEÇÃO 1: Cálculo Marcius (Valor da Hora)
Objetivo: Identificar o valor real da hora de trabalho do usuário
Campos do Formulário:

Salário Bruto Mensal (R$)
Horas Trabalhadas por Semana (dropdown: 36h, 40h, 44h ou customizado)
Tempo de Deslocamento Diário (ida + volta em minutos)
Descontos (INSS/IRRF) - opcional ou cálculo automático

Cálculos Automáticos em Tempo Real:

Valor da Hora Bruta:

   Fórmula: Salário Bruto Mensal ÷ Horas Trabalhadas no Mês = Valor da Hora
   
   Exemplo CLT padrão:
   - Salário: R$ 3.000,00
   - Horas/mês: 220h (44h semanais)
   - Resultado: R$ 3.000 ÷ 220 = R$ 13,63/hora
   
   Referências de horas mensais:
   - 44h semanais = 220h/mês
   - 40h semanais = 200h/mês
   - 36h semanais = 180h/mês

Valor da Hora Líquida (Mais Realista):

   Fórmula: Salário Líquido ÷ Horas Reais Trabalhadas = Valor Hora Real
   
   Horas Reais = Horas Contratuais + Tempo de Deslocamento
   
   Dica exibida: "Incluímos o tempo de transporte porque é tempo dedicado ao emprego"

Análise: Vale a Pena Trocar de Carreira?
Fatores de Avaliação mostrados:

Payback da Mudança: Quanto tempo para o novo salário equiparar ao atual?
Reserva de Emergência: Recomendação de 6-12 meses de custo de vida guardados
Comparação de Benefícios: VT, VR, plano de saúde, previdência privada, PLR
Motivação: Análise de burnout, falta de crescimento, desalinhamento de valores

Resumo para Tomada de Decisão (Dashboard Visual):

   ✓ Hora atual: (Salário líquido / Horas trabalhadas)
   ✓ Projeção nova hora: (Novo salário líquido / Nova carga horária)
   ✓ Custo de vida: A nova renda cobre necessidades básicas, moradia e lazer?
   ✓ Custo de oportunidade: Vale gastar tempo/dinheiro em cursos para ter valor-hora superior no futuro?
Recurso Extra:

IA Assistente integrada para tirar dúvidas sobre os cálculos e dar orientações personalizadas

Botão de Navegação: "Continuar para Seleção de Áreas" →

SEÇÃO 2: Seleção de Áreas de Interesse
Layout:

Grid de cards holográficos com animações
Cada card representa uma profissão do futuro/área de estudo

Funcionalidade:

Usuário pode selecionar até 5 áreas de interesse
Cards selecionados ganham borda brilhante/animação especial
Contador visual: "3/5 áreas selecionadas"

Cursos/Roadmaps Disponíveis (Profissões do Futuro):
Exemplos de cards:
- Desenvolvimento de Software
- Inteligência Artificial
- Data Science
- UX/UI Design
- Cibersegurança
- Marketing Digital
- Blockchain
- Cloud Computing
- DevOps
- Product Management
[etc...]
Sistema de Recomendação:

Após seleção, a página mostra indicação automática baseada em:

Valor da hora atual vs. potencial da área
Demanda de mercado
Compatibilidade com tempo disponível



Botão de Navegação: "Avançar para Teste de Perfil" →

SEÇÃO 3: Teste DISC
Objetivo: Identificar perfil comportamental
Estrutura:

Questionário com perguntas para mapear:

D - Dominância
I - Influência
S - Estabilidade (Steadiness)
C - Conformidade (Compliance)



Visual:

Perguntas aparecem uma por vez com animações sci-fi
Barra de progresso holográfica
Transições suaves entre perguntas

Botão de Navegação: "Finalizar Avaliação" →

TELA 3: Resultado da Avaliação
Conteúdo Exibido:

Melhor Roadmap Recomendado

Baseado em:

Áreas de interesse selecionadas
Resultado do teste DISC
Análise financeira (Cálculo Marcius)




Análise: "Vale a Pena Fazer Esse Curso Neste Momento?"

Indicador visual (semáforo ou score)
Justificativa baseada em:

Custo vs. benefício
Tempo necessário
ROI esperado
Compatibilidade com perfil DISC




Overlay de Perfil DISC

Sistema desbloqueia uma decoração visual para o perfil
Imagens disponíveis:

Dominancia.png (perfil D)
Influencia.png (perfil I)
Estabilidade.png (perfil S)
Conformidade.png (perfil C)


Overlay aparece com animação holográfica



Botão de Navegação: "Criar Meu Perfil" →

TELA 4: Perfil do Usuário
Primeira Vez (Onboarding):

Solicitar upload de foto de perfil
Campo de descrição/bio
Confirmação de dados

Elementos do Perfil:

Header do Perfil

Foto do usuário
Nome
Bio/Descrição
Overlay DISC decorativo (badge/moldura)


Dashboard de Progresso

Certificados Conquistados

Grid com cards dos certificados
Status: Concluído


Cursos em Andamento

Lista com barra de progresso
% de conclusão
Tempo estimado restante


Roadmap Ativo

Visualização do caminho atual
Próximos passos destacados




Estatísticas

Horas estudadas
Valor da hora atualizado
Projeção de ROI



Visual:

Manter estética sci-fi
Painéis holográficos
Animações suaves
Overlays DISC integrados ao design


🎨 ASSETS NECESSÁRIOS
Imagens de Overlay DISC:

Dominancia.png
Influencia.png
Estabilidade.png
Conformidade.png


🔄 FLUXO DE DADOS
1. Cadastro/Login
   ↓
2. Cálculo Marcius
   → Salva: valor_hora_atual, horas_semanais, salario
   ↓
3. Seleção de Áreas (até 5)
   → Salva: array_areas_interesse[]
   ↓
4. Teste DISC
   → Salva: perfil_disc (D/I/S/C)
   ↓
5. Processamento IA
   → Calcula: roadmap_recomendado, vale_a_pena (boolean + justificativa)
   → Atribui: overlay_image
   ↓
6. Perfil do Usuário
   → Exibe: foto, bio, certificados[], cursos_andamento[], overlay_disc




   DADOS MOCADOS








   pegue a section depois do roadmap(aquela com "pronto para conhecer o futuro?"), tire o conteudo dela e complete o roadmap nas duas section


   va na secao acima do roadmap aquela "A Realidade Que Ninguém Conta" a section 2, pegue os cards dela e coloque rolagem horizontal ifinita, o efeito deve ser extremamente lento, e deve ter botoes no canto esquerdo e direto que de sensacao de slide, tambem deve permitir o usussario movimentar com o mouse clicando e segurando, lembrese que a rolagem é ifinita ou seja nao deve ter limite de rolagem ele deve comecar e quando terminar ele comeca dnv sem mostrar ao usuario que ta voltando para o comeco