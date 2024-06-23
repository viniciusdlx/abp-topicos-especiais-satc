using Microsoft.Extensions.Caching.Memory;
using ServicoResidencias.DTO;

namespace ServicoResidencias.Servicos
{
    public interface IMoradorHelper
    {
        MoradorDTO RetornarMorador(int codigoMorador);
    }

    public class MoradorHelper : IMoradorHelper
    {
        private const string _moradorController = "api/Morador/";

        public MoradorDTO RetornarMorador(int codigoMorador)
        {
            var httpClient = new HttpClient();

            var urlMorador = BuscarUrlMorador();

            var url = urlMorador + _moradorController + codigoMorador;

            var resposta = httpClient.GetAsync(url).Result;

            if (!resposta.IsSuccessStatusCode)
            {
                throw new Exception("Morador " + codigoMorador + " não encontrada.");
            }

            if (resposta.StatusCode == System.Net.HttpStatusCode.NoContent)
            {
                return null;
            }

            var morador = resposta.Content.ReadFromJsonAsync<MoradorDTO>().Result;

            return morador;
        }

        public string BuscarUrlMorador()
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
            .AddJsonFile("appsettings.json")
            .Build();

            string url = configuration["UrlMorador"];

            return url;
        }
    }
}
