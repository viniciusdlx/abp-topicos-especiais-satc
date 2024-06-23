using ServicoResidencias.DTO;

namespace ServicoResidencias.Servicos
{
    public class ResidenciaView
    {
        public int Id { get; set; }
        public string Endereco { get; set; }
        public string Numero { get; set; }
        public string Predio { get; set; }
        public int Andar { get; set; }
        public MoradorDTO Morador { get; set; }
    }
}
