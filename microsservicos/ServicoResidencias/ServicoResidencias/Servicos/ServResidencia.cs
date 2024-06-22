namespace ServicoResidencias.Servicos
{
    public interface IServResidencia
    {
        void Inserir(Residencia residencia);
        void Editar(Residencia residencia);
        void Excluir(int id);
        Residencia BuscarResidencia(int id);
        List<Residencia> BuscarTodos();
    }

    public class ServResidencia : IServResidencia
    {
        private readonly DataContext _dataContext;

        public ServResidencia(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public void Inserir(Residencia residencia)
        {
            ValidarDadosResidencia(residencia);

            _dataContext.Add(residencia);

            _dataContext.SaveChanges();
        }

        public void Editar(Residencia residencia)
        {
            ValidarDadosResidencia(residencia);

            _dataContext.SaveChanges();
        }

        public void Excluir(int id)
        {
            var residencia = BuscarResidencia(id);

            _dataContext.Remove(residencia);

            _dataContext.SaveChanges();
        }

        public void ValidarDadosResidencia(Residencia residencia)
        {
            if (residencia.Endereco.Length > 50)
            {
                throw new Exception("O Endereco da residencia deve conter no máximo 50 caracteres.");
            }
        }

        public Residencia BuscarResidencia(int id)
        {
            var residencia = _dataContext.Residencias.FirstOrDefault(x => x.Id == id);

            return residencia;
        }

        public List<Residencia> BuscarTodos()
        {
            var listaResidencia = _dataContext.Residencias.ToList();

            return listaResidencia;
        }
    }
}
