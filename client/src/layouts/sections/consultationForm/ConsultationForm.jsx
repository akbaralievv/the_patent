function ConsultationForm() {
  return (
    <section className="my-7 py-5 flex items-center bg-customBlueBackground rounded-3xl height-[116px]">
      <div className="gap-4 flex items-center justify-between mx-auto w-full max-w-7xl">
        <h3 className="text-white font-mulish font-bold text-2xl">
          <span className="text-blue-500">Задать вопрос</span> эксперту
        </h3>
        <div className="flex flex-col gap-4">
          <form action="#" className="flex items-center gap-6">
            <input
              type="text"
              placeholder="Введите имя"
              className="outline-none h-10 w-96 rounded-3xl px-6 font-mulish text-base bg-white"
            />
            <input
              type="text"
              placeholder="+996(---)(---)(---)"
              className="outline-none h-10 w-96 rounded-3xl px-6 font-mulish text-base bg-white"
            />
            <button
              type="submit"
              className="text-white w-44 h-10 rounded-3xl bg-customOrange font-mulish font-semibold text-base">
              Консультация
            </button>
          </form>
          <div className="flex items-center justify-between gap-4">
            <p className="text-base text-white">Получите бесплатную консультацию</p>
            <p className="text-base text-white">
              Оставьте ваши данные и наш специалист свяжется с Вами в течении 5 минут
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultationForm;
