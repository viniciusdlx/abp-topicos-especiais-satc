namespace ServicoMoradores.Servicos
{
    public interface IServMorador
    {
        void Inserir(Morador morador);
        void Editar(Morador morador);
        void Excluir(int id);
        Morador BuscarMorador(int id);
        List<Morador> BuscarTodos();
    }

    public class ServMorador : IServMorador
    {
        private readonly DataContext _dataContext;

        public ServMorador(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public void Inserir(Morador morador)
        {
            ValidarDadosMorador(morador);

            _dataContext.Add(morador);

            _dataContext.SaveChanges();
        }

        public void Editar(Morador morador)
        {
            ValidarDadosMorador(morador);

            _dataContext.SaveChanges();
        }

        public void Excluir(int id)
        {
            var morador = BuscarMorador(id);

            _dataContext.Remove(morador);

            _dataContext.SaveChanges();
        }

        public void ValidarDadosMorador(Morador morador)
        {
            if (morador.PrimeiroNome.Length > 50)
            {
                throw new Exception("O nome da morador deve conter no máximo 50 caracteres.");
            }
        }

        public Morador BuscarMorador(int id)
        {
            var morador = _dataContext.Moradores.FirstOrDefault(x => x.Id == id);

            return morador;
        }

        public List<Morador> BuscarTodos()
        {
            var listaMorador = _dataContext.Moradores.ToList();

            return listaMorador;
        }
    }
}
