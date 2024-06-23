using ServicoResidencias.DTO;

namespace ServicoResidencias.Servicos
{
    public interface IServResidencia
    {
        void Inserir(Residencia residencia);
        void Editar(Residencia residencia);
        void Excluir(int id);
        Residencia BuscarResidencia(int id);
        ResidenciaView BuscarResidenciaView(int id);
        List<ResidenciaView> BuscarTodos();
        MoradorDTO BuscarMorador(int id);
    }

    public class ServResidencia : IServResidencia
    {
        public DataContext _dataContext;
        private IMoradorHelper _moradorHelper;

        public ServResidencia(DataContext dataContext, IMoradorHelper moradorHelper)
        {
            _dataContext = dataContext;
            _moradorHelper = moradorHelper;
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

        public ResidenciaView BuscarResidenciaView(int id)
        {
            var residencia = _dataContext.Residencias.FirstOrDefault(x => x.Id == id);

            ResidenciaView residenciaView = new ResidenciaView();

            residenciaView.Id = id;
            residenciaView.Endereco = residencia.Endereco;
            residenciaView.Numero = residencia.Numero;
            residenciaView.Predio = residencia.Predio;
            residenciaView.Andar = residencia.Andar;
            residenciaView.Morador = _moradorHelper.RetornarMorador(residencia.MoradorAtualId);

            return residenciaView;
        }

        public List<ResidenciaView> BuscarTodos()
        {
            var listaResidencia = _dataContext.Residencias.ToList();

            List<ResidenciaView> listaResidenciaView = new List<ResidenciaView>();

            foreach (var residencia in listaResidencia)
            {
                ResidenciaView residenciaView = new ResidenciaView();

                residenciaView.Id = residencia.Id;
                residenciaView.Endereco = residencia.Endereco;
                residenciaView.Numero = residencia.Numero;
                residenciaView.Predio = residencia.Predio;
                residenciaView.Andar = residencia.Andar;
                residenciaView.Morador = _moradorHelper.RetornarMorador(residencia.MoradorAtualId);

                listaResidenciaView.Add(residenciaView);
            }

            return listaResidenciaView;
        }

        public MoradorDTO BuscarMorador(int id)
        {
            var morador = _moradorHelper.RetornarMorador(id);

            return morador;
        }
    }
}
