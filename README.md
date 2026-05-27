# 📅 Meeting Rooms Challenge

> 💡 Problema clássico de entrevistas técnicas: determinar o número mínimo de salas necessárias para acomodar reuniões sem conflito de horários.

---

## 🚀 Visão Geral

A aplicação calcula o número mínimo de salas necessárias com base em intervalos de tempo fornecidos.

Esse tipo de problema é comum em:

- Sistemas de agendamento
- Google Calendar
- Plataformas corporativas
- Sistemas de reserva

---

## 🧠 Estratégia da Solução

A solução não é sobre "salas" — e sim sobre:

👉 **quantas reuniões acontecem simultaneamente**

### 🔹 Técnica utilizada: Two Pointers

Passos da solução:

- Separar horários de início e fim
- Ordenar ambos os arrays
- Percorrer comparando os horários:
  - Se uma reunião começa antes da outra terminar → **nova sala**
  - Caso contrário → **reutiliza sala**

---

## 📥 Exemplo

### Entrada

```js
[[0, 30], [5, 10], [15, 20]]
