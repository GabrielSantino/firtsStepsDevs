update estados
set nome = 'Maranhão'
where sigla = 'MA'

select est.Nome from estados est where sigla = "MA"

update estados
set nome = 'Paraná',
    populacao = 11.32
where sigla = 'PR'

select 
    est.Nome,
    Sigla,
    Populacao
from estados est
where sigla = 'PR'