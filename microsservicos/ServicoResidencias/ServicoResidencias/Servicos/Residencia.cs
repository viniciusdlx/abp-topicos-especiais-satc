﻿namespace ServicoResidencias.Servicos
{
    public class Residencia
    {
        public int Id { get; set; }
        public string Endereco { get; set; }
        public string Numero { get; set; }
        public string Predio { get; set; }
        public int Andar { get; set; }
        public int MoradorAtualId { get; set; } // Chave estrangeira para Morador
    }
}
