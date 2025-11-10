using BusinessLogic.Helpers;
using IBusinessLogic;

namespace BusinessLogic
{
    public class ImporterService : IImporterService
    {
        public string[] GetImporters()
        {
            return ImporterHelper.GetImporters().ToArray();
        }
    }
}
