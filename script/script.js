function calcularIdade() {
    var ano_aniversario = 2000;
    var mes_aniversario = 29;
    var dia_aniversario = 11;

    var d = new Date,
        ano_atual = d.getFullYear(),
        mes_atual = d.getMonth() + 1,
        dia_atual = d.getDate(),

        ano_aniversario = +ano_aniversario,
        mes_aniversario = +mes_aniversario,
        dia_aniversario = +dia_aniversario,

        idade = ano_atual - ano_aniversario;

    if (mes_atual < mes_aniversario || mes_atual == mes_aniversario && dia_atual < dia_aniversario) {
        idade--;
    }

    return `Tenho ${idade} anos. Estou finalizando o curso de Análise e Desenvolvimento de Sistemas
    na IFTM. Estou procurando sempre evoluir profissionalmente. Amo está
    área de programação e me dedico inteiramente a isso. Estou apenas no
    começo, mas quero evoluir cada dia mais.`

}

document.getElementById("sobremim").innerHTML = this.calcularIdade();
document.getElementById("sobremim-mobile").innerHTML = this.calcularIdade();
