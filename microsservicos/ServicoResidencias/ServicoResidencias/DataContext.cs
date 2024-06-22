using Microsoft.EntityFrameworkCore;
using ServicoResidencias.Servicos;

namespace ServicoResidencias
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Residencia> Residencias { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Residencia>().HasKey(p => p.Id);


            base.OnModelCreating(modelBuilder);
        }
    }
}
