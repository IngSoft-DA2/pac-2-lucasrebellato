using IImporter;
using System.Reflection;

namespace BusinessLogic.Helpers
{
    internal class ImporterHelper
    {
        public static List<string> GetImporters()
        {
            var importers = new List<string>();
            var importersPath = Path.Combine(AppContext.BaseDirectory, "reflection");

            if (!Directory.Exists(importersPath))
            {
                return importers;
            }

            foreach (var dll in Directory.GetFiles(importersPath, "*.dll"))
            {
                var assembly = Assembly.LoadFrom(dll);
                var types = assembly.GetTypes()
                    .Where(t => typeof(ImporterInterface).IsAssignableFrom(t) && !t.IsInterface && !t.IsAbstract && t.IsPublic);

                if(types.Any())
                {
                    var assembyName = assembly.GetName().Name;
                    importers.Add(assembyName!);
                }
            }

            return importers;
        }
    }
}
