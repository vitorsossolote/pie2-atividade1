import './style.css';

const status = document.querySelector('#health-status');
const timestamp = document.querySelector('#timestamp');
const detail = document.querySelector('#detail');
const error = document.querySelector('#error');
const refresh = document.querySelector('#refresh');
const dateTime = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'short',
  timeStyle: 'medium',
});

async function checkHealth() {
  refresh.disabled = true;
  detail.hidden = true;
  error.hidden = true;
  status.dataset.state = 'loading';
  status.textContent = 'Consultando a API…';

  try {
    const response = await fetch('/api/health', { signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error('A API não respondeu com sucesso.');

    const health = await response.json();
    const checkedAt = new Date(health.timestamp);
    if (health.status !== 'ok' || Number.isNaN(checkedAt.getTime())) {
      throw new Error('A resposta da API está fora do formato esperado.');
    }

    timestamp.dateTime = health.timestamp;
    timestamp.textContent = dateTime.format(checkedAt);
    status.dataset.state = 'ok';
    status.textContent = `Status da API: ${health.status}`;
    detail.hidden = false;
  } catch {
    status.dataset.state = 'error';
    status.textContent = 'Status da API: indisponível';
    error.textContent = 'Confira se o servidor Express está rodando e tente novamente.';
    error.hidden = false;
  } finally {
    refresh.disabled = false;
  }
}

refresh.addEventListener('click', checkHealth);
void checkHealth();
