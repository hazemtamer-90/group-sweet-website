const features = [
  {
    title: "جودة مضمونة",
    text: "أفضل خامات ومكونات طبيعية.",
  },
  {
    title: "توصيل سريع",
    text: "لكافة محافظات مصر.",
  },
  {
    title: "أسعار الجملة",
    text: "أفضل عروض للشركات والتجار.",
  },
  {
    title: "خبرة طويلة",
    text: "أكثر من 25 سنة في صناعة الحلويات.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#FBF8F2]">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-4xl font-bold text-[#670047] mb-16">
          لماذا جروب سويت؟
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl shadow-sm p-8 text-center hover:shadow-xl transition"
            >
              <div className="w-20 h-20 rounded-full bg-[#670047]/10 mx-auto mb-6"></div>

              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}