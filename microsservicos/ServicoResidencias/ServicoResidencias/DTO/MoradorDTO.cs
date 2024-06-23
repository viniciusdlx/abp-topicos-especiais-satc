namespace ServicoResidencias.DTO
{
    public class MoradorDTO
    {
        public int Id { get; set; }
        public string PrimeiroNome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public bool Inadimplente { get; set; } // Indica se o morador é inadimplente
    }
}
