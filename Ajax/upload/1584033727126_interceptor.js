// Autor: João Victor Teixeira (Sensedia)
// Fluxo: Qualquer fluxo de qualquer API

// ---------- Seção Principal ----------

//$call.pathparam.get

// ---------- Seção de Classes ----------

function ValidateCPF(){
    const FIRST_VERIFIER_DIGIT = 9;
    const SECOND_VERIFIER_DIGIT = 10;
    const CPF_PATTERN = /^[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}$/;
    const FIRST_VERIFIER_ARRAY = [10,9,8,7,6,5,4,3,2];
    const SECOND_VERIFIER_ARRAY = [11,10,9,8,7,6,5,4,3,2];
   /**
     * Valida um dado número de CPF
     * <p>
     * Essa função aceita tanto CPFs em string como em integer.
     * <p>
     * No caso de strings, essa função aceita CPFs tanto com
     * como sem acentuação e pontuação. Por exemplo: </br>
     * <ul>
     * <li>000.000.000-00</li>
     * <li>00000000000</li>
     * </ul>
     *
     * @param {string|integer} cpf o número de CPF a ser validado
     * @param {boolean} flag que indica se o número de CPF é válido. Caso
     *      a flag seja nula, o padrão do CPF é inválido
     */
    this.validateCpf = function(cpf) {
        // fixing CPF
        cpf = String(cpf).replace(/\./g, '').replace(/-/g, '');
        // validating CPF format and digits
        return cpf.match(CPF_PATTERN) &&
                cpf[FIRST_VERIFIER_DIGIT] == _getDigit(cpf, FIRST_VERIFIER_ARRAY) &&
                cpf[SECOND_VERIFIER_DIGIT] == _getDigit(cpf, SECOND_VERIFIER_ARRAY);
    };
    /**
     * Recupera o digito de verificação do CPF baseado no array de verificação.
     * <p>
     * O digito é calculado multiplicando cada caractere do CPF por seu equivalente em
     * índice no array de verificação, somando todos os números obtidos, multiplicando
     * o resultado por 10 e obtendo o resto de sua divisão por 11.
     * 
     * @param {string} cpf o CPF a ter o digito obtido
     * @param {array} digits o array de digitos de verificacao
     */
    _getDigit = function (cpf, digits) {
        return digits.reduce(function(a, b, i) {
            return a + (b * cpf[i] * 10);
        }, 0) % 11;
    }
}


console.log(!Number.parseInt(Number('476022.73850')))
