select * from estados

select 
    Sigla,
    nome as 'Nome do Estado' 
from estados
WHERE regiao = 'Sul'

select 
    Nome,
    Regiao,
    Populacao 
from estados
where populacao >= 10
order by populacao desc
