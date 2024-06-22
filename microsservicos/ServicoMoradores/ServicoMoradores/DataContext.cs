using Microsoft.EntityFrameworkCore;
using ServicoMoradores.Servicos;

namespace ServicoMoradores
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Morador> Moradores { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Morador>().HasKey(p => p.Id);


            base.OnModelCreating(modelBuilder);
        }
    }
}
