export default function LegalPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Юридическая информация</h1>
        
        <div className="bg-gray-50 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Реквизиты</h2>
          
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-gray-500 sm:w-48">Наименование:</span>
              <span className="font-medium">ИП Тарасов Виталий Алексеевич</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-gray-500 sm:w-48">ИНН:</span>
              <span className="font-medium">290131114766</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-gray-500 sm:w-48">Статус:</span>
              <span className="font-medium">Самозанятый</span>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-gray-500 sm:w-48">Email:</span>
              <a href="mailto:support@viton13.com" className="font-medium text-viton-purple hover:underline">
                support@viton13.com
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-gray-500 sm:w-48">Telegram:</span>
              <a href="https://t.me/VITON_13" target="_blank" rel="noopener noreferrer" className="font-medium text-viton-purple hover:underline">
                @VITON_13
              </a>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Правовая информация</h2>
            <p className="text-gray-600">
              Все материалы, представленные на сайте viton13.com, являются объектами интеллектуальной 
              собственности VITON13. Использование материалов сайта без письменного согласия 
              правообладателя запрещено.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Товарные знаки</h2>
            <p className="text-gray-600">
              VITON13, логотип VITON13, OIVA и другие товарные знаки, используемые на сайте, 
              являются зарегистрированными или незарегистрированными товарными знаками VITON13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ответственность</h2>
            <p className="text-gray-600">
              VITON13 не несёт ответственности за возможные убытки, возникшие в результате 
              использования или невозможности использования сайта, за исключением случаев, 
              предусмотренных законодательством.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Применимое право</h2>
            <p className="text-gray-600">
              Настоящие условия регулируются и толкуются в соответствии с законодательством 
              Российской Федерации. Все споры, возникающие в связи с использованием сайта, 
              подлежат разрешению в соответствии с действующим законодательством РФ.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Контактная информация</h2>
            <p className="text-gray-600">
              По всем юридическим вопросам обращайтесь по адресу электронной почты: 
              legal@viton13.com или через Telegram: @VITON_13
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
