namespace ServicoMoradores.DTO
{
    public class EditarMoradorDTO
    {
        public string PrimeiroNome { get; set; }
        public string Sobrenome { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public bool Inadimplente { get; set; }
    }
}
