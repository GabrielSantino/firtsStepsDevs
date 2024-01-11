select 
    regiao as 'Região',
    sum(populacao) as Total
from estados
group by regiao
order by Total desc
 
           (em caso de calculo de média do DB)

select
    avg(populacao) as Total
from estados